import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { UtilityService } from './../../../../../services/utility/utility.service';
import { FiltersModel } from './../../../../../shared/models/filters.model';
import { Subscription } from 'rxjs';
import { GlobalVariable } from './../../../../../core/global';
import { AppSettings } from './../../../../../shared/models/appSettings.model';
import { StyleVariables } from './../../../../../core/theme/styleVariables.model';
import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MessagingService } from './../../../../../services/messaging/messaging.service';
import { UserService } from './../../../../../services/user/user.service';

@Component({
  selector: 'app-ecom-header',
  templateUrl: './ecom-header.component.html',
  styleUrls: ['./ecom-header.component.scss'],
  host: {
    "(window:resize)": "onWindowResize($event)"
  }
})
export class EcomHeaderComponent implements OnInit {

  @Input() style: StyleVariables;
  @Input() showSearchbar: boolean = false;
  @Input() settings: AppSettings;
  @Input() loggedIn: boolean = false;
  @Input() openAuth: boolean = false;
  @Input() userData: any;
  @Input() isNavFixed: boolean = false;
  @Input() sidenav: number = 0;
  @Input() userWalletBalance: number = 0;
  @Output() authType: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchBar: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() triggerAuthModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  is_search_active: boolean = false;
  public whatsTrending: string = "What's Trending";

  searchBy: number = 0;  // 0 or 1
  totalCart: number = 0;
  globalVariable = GlobalVariable;

  getDataSubscribe: Subscription;
  cartValueChange: Subscription;
  routeSubscription: Subscription;
  settingsSubscription: Subscription;
  themeSubscription: Subscription;

  localSearchedData: Array<string> = [];
  search: string = '';
  filters: FiltersModel;
  allParams: any = {};
  image_paths: string = '';
  hoverType: string = '';
  show_continue: boolean = false;
  is_dark: boolean = false;
  categories: Array<any> = [];

  cart: Array<any> = [];

  public siteName: string = "";

  public categoryData: any = [];
  

  constructor(
    private util: UtilityService,
    public router: Router,
    public route: ActivatedRoute,
    private user: UserService,
    private message: MessagingService,
    @Inject(DOCUMENT) private document
  ) {
    this.siteName = GlobalVariable.SITE_NAME;
  }

  ngOnInit() {

    this.totalCart = this.util.getTotalCountCart();

    this.cartValueChange = this.util.getCart
      .subscribe(cart => {
        if (cart) {
          this.cart = cart;
          this.totalCart = this.util.getTotalCountCart();
        }
      });

    if (this.settings.selected_template == 5 && this.settings.app_type == 2) {
      this.getCategories();
    }
  }

  /********** Product Search **********/
  searchProduct(searchedVal: string) {
    this.is_search_active = false;
    let searchResults = [];
    if (searchedVal.trim()) {
      if (!this.allParams['supplierId'] || !this.allParams['subCatId']) {
        this.util.clearLocalData('pickUp_DT');
      }
      if (this.localSearchedData) {
        if (!this.localSearchedData.includes(searchedVal)) {
          if (this.localSearchedData.length > 2) {
            this.localSearchedData.pop();
          }
          this.localSearchedData.unshift(searchedVal);
        }
        searchResults = [...this.localSearchedData];
      } else {
        searchResults.push(searchedVal);
      }
      this.util.setLocalData('product-search', searchResults, true);
      this.allParams.product = searchedVal;

      if (this.searchBy === 1) {
        this.router.navigate(['/supplier', 'supplier-list'], {
          queryParams: {
            all: 1,
            search: searchedVal,
            searchBy: this.searchBy
          }
        });
      } else {
        this.router.navigate(['/products', 'product-listing', searchedVal.replace(/ &/g, '-')], {
          queryParams: { f: this.util.encryptData(this.allParams), searchBy: this.searchBy }
        });
      }
      if (!!this.document.getElementById('recentSearch')) {
        this.document.getElementById('recentSearch').classList.remove("show");
      }
    }
  }

  openAuthModal(type: string) {
    this.openAuth = true;
    this.triggerAuthModal.emit(true);
    this.authType.emit(type);
  }


  onLogo() {
    this.router.navigate(['']);
  }

  onWindowResize(event) {
    const width = event.target.innerWidth;
    if (width > 812) {
      this.sidenav = 0;
    }
  }

  signOutConfirmation() {
    this.message.confirm('Sign Out').then(data => {
      if (data.value) {
        this.user.userSignOut();
        this.message.toast('success', 'Sign Out Successfully');
      }
    });
  }

  cancelSearch() {
    if (this.router.url.startsWith(`/`)) {
      this.search = '';
    } else {
      this.allParams.product = null;
      this.router.navigate(['/products', 'product-listing', 'all-product'], {
        queryParams: { f: this.util.encryptData(this.allParams) }
      });
    }
  }



  getCategories() {
    this.util.getLanguageCategoryData
      .subscribe(categories => {
        if (categories) {
          if (this.settings.show_tags_for_suppliers && !this.settings.dynamic_home_screen_sections) {
            this.categoryData = (categories.supplier_tags).slice();
          }
          else {
            const selectedCategory = this.util.getLocalData('selected_category', true);
            if (this.settings.isCustomFlow && selectedCategory) {
              const category = (categories.english).find((c) => c.type == selectedCategory.type && c.id == selectedCategory.id);
              this.categoryData = category ? category['sub_category'] || [] : [];
            } else {
              this.categoryData = (categories.english).slice();
            }
          }
        }

      })
  }
  trackByFn(id, index) {
    return index;
  }
  trackByCatFn(id, index) {
    return index;
  }
  redirectToCat(cat) {
    let selectedCatPath: Array<string> = [];
    selectedCatPath.push(cat['name']);

    let seoValue = selectedCatPath.length ? selectedCatPath[selectedCatPath.length - 1].replace(/ &/g, '-') : '';
    let param_obj = {};
    Object.assign(param_obj, this.util.handler);
    param_obj['subCatId'] = [cat.id];
    param_obj['category'] = cat.id;
    param_obj['product'] = this.route.snapshot.queryParamMap.get("product");
    param_obj['path'] = selectedCatPath;
    this.router.navigate(['/products', 'product-listing', seoValue], {
      queryParams: { f: this.util.encryptData(param_obj) }
    });
  }
}
