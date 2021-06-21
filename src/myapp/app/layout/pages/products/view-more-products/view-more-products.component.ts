import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { StyleVariables } from './../../../../core/theme/styleVariables.model';
import { Subscription } from 'rxjs';
import { AppSettings } from './../../../../shared/models/appSettings.model';
import { HttpService } from './../../../../services/http/http.service';
import { UtilityService } from './../../../../services/utility/utility.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from './../../../../services/cart/cart.service';
import { DialogService } from 'primeng/dynamicdialog';
import { UserService } from './../../../../services/user/user.service';
import { MessagingService } from './../../../../services/messaging/messaging.service';
import { GlobalVariable } from './../../../../core/global';
import { ApiUrl } from './../../../../core/apiUrl';
import { LocalizationPipe } from './../../../../shared/pipes/localization.pipe';
import { AddOnComponent } from './../../../../layout/shared/product/components/add-on/add-on.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-view-more-products',
    templateUrl: './view-more-products.component.html',
    styleUrls: ['./view-more-products.component.scss']
})
export class ViewMoreProductsComponent implements OnInit, OnDestroy {

    @Input() categoryId: any;

    style: StyleVariables;
    styleSubscription: Subscription;
    getDataSubscribe: Subscription;
    settingsSubscription: Subscription;
    cartSubscription: Subscription;
    userSubscription: Subscription;
    themeSubscription: Subscription;
    dataSubscription: Subscription;
    routeSubscription: Subscription;


    products: any = [];
    currency = '';
    allOffers = false;
    noData = false;
    settings: AppSettings;
    cart: Array<any> = [];
    loggedIn: boolean = false;
    isDarkTheme: boolean = false;

    isRecommendedFoods: boolean = false;
    isTopSelling: boolean = false;

    isLoading: boolean = true;
    productFor: number = 1;

    constructor(
        private http: HttpService,
        public util: UtilityService,
        private route: ActivatedRoute,
        private router: Router,
        public cartService: CartService,
        public dialogService: DialogService,
        private user: UserService,
        private message: MessagingService,
        private localization: LocalizationPipe,
        private translate: TranslateService
    ) {
        this.style = new StyleVariables();

        this.userSubscription = this.user.currentUser
            .subscribe(user => {
                if (!!user && user['access_token']) {
                    this.loggedIn = true;
                } else {
                    this.loggedIn = false;
                }
            });
        this.currency = GlobalVariable.CURRENCY;
    }

    ngOnInit() {
        this.styleSubscription = this.util.getStyles.subscribe(
            (style: StyleVariables) => {
                this.style = style;
            }
        );

        this.cartSubscription = this.util.getCart.subscribe(cart => {
            if (cart) {
                this.cart = cart;
                // this.mapData(this.cart);
            }
        });

        this.settingsSubscription = this.util.getSettings.subscribe(
            (settings: AppSettings) => {
                if (settings) {
                    this.settings = settings;
                }
            }
        );

        this.themeSubscription = this.util.getDarkTheme.subscribe((darkTheme) => {
            this.isDarkTheme = darkTheme;
        });

        this.routeSubscription = this.route.queryParams.subscribe(params => {
            this.categoryId = params["cat_id"] ? params["cat_id"] : null;
            this.isRecommendedFoods = params["rec_foods"] && params["rec_foods"] == 1 ? true : false;
            this.isTopSelling = params["top_selling"] && params["top_selling"] == 1 ? true : false;
            this.subscribeData();
        })
    }

    productDetail(data: any) {
        if (this.settings.app_type != 1) {
            let obj = {
                productId: data.product_id,
                supplierBranchId: data.supplier_branch_id,
                category: data.category_id
            };
            data.name = data.name.replace(/ &/g, "-");
            obj = { ...this.util.handler, ...obj };
            this.router.navigate(['/products', 'product-detail', data.name], {
                queryParams: { f: this.util.encryptData(obj) }
            });
        }
    }




    subscribeData() {
        this.dataSubscription = this.util.callGetData.subscribe(showData => {
            if (showData) {
                if (this.isRecommendedFoods) {
                    this.getRecent();
                    return;
                }
                if (this.isTopSelling) {
                    this.getPopularProducts();
                    return;
                }
            }
        });
    }






    getPopularProducts() {
        const queryParams: any = {
            latitude: this.util.handler.latitude,
            longitude: this.util.handler.longitude,
            languageId: this.util.handler.languageId,
            // type: this.settings.app_type,
            offset: 0,
            limit: 8
        }
        this.isLoading = true;
        this.http.getData(ApiUrl.getPopularProductV1, queryParams, true, true).subscribe((response) => {
            if (response && response.status == 200) {
                this.products = [];
                this.products = response.data.product;
                this.products.map((data: any) => {
                    parseFloat(data["rating"]);
                    data["display_supplier_image"] = this.util.thumbnail(
                        data["supplier_image"]
                    );
                    data["display_logo"] = this.util.thumbnail(data["logo"]);
                });
            }
            this.isLoading = false;
        }, (err) => this.isLoading = false);
    }
    getRecent() {
        let params = {
            latitude: this.util.handler.latitude || 0,
            longitude: this.util.handler.longitude || 0,
            languageId: this.util.handler.languageId,
            offset: 0
        }
        this.isLoading = true;
        this.http.getData(ApiUrl.recentlyViewed, params)
            .subscribe(response => {
                this.isLoading = false;
                if (!!response && response.data) {
                    this.products = [];
                    this.products = response.data.recentActivity;
                }
            });
    }






    onImageLoad(offer) {
        offer.image = offer.image_path;
    }

    mapData(offerData: Array<any>): Array<any> {
        offerData.map((offer: any) => {
            offer['avg_rating'] = Number.parseFloat(offer['avg_rating']).toFixed(1);
            offer['image'] = this.util.thumbnail(offer['product_image']);
            offer["selectedQuantity"] = 0;
            if (this.cart.length) {
                this.cart.forEach(cartProduct => {
                    if (cartProduct.productId == offer.product_id) {
                        offer['selectedQuantity'] = cartProduct['selectedQuantity'];
                    }
                });
            }
            if (offer["price_type"]) {
                try {
                    offer["fixed_price"] = JSON.parse(offer.fixed_price);
                    let price = offer.fixed_price[0];
                    offer["discount"] = Math.round(
                        ((price.price_per_hour - price.discount_price) /
                            price.price_per_hour) *
                        100
                    );
                } catch (err) {
                }
            } else {
                this.util.productPriceToFloat(offer);
                offer["discount"] = Math.round(
                    ((offer.display_price - offer.fixed_price) / offer.display_price) * 100
                );
            }
        });
        return offerData;
    }

    /********* Open Add On Dialog *********/

    openAddOnDialog(product) {
        let item = this.cart.find(p => p.productId == product.product_id);
        if (item) {
            product.customization = item.customization;
        }
        const dialogRef = this.dialogService.open(AddOnComponent, {
            header: product['name'],
            width: '50%',
            showHeader: false,
            // contentStyle: { "max-height": "350px", "overflow": "auto" },
            transitionOptions: '600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
            data: {
                product: product,
                addOnItems: product['adds_on']
            }
        })

        dialogRef.onClose.subscribe(() => {
            if (product.customization && product.customization.length) {
                //delete product.customization;
                //this.router.navigate(['/cart']);
            }
        })
    }

    addProduct(product) {
        if (product.adds_on && product.adds_on.length && this.settings.app_type == 1) {
            this.openAddOnDialog(product);
        } else {
            this.cartService.addToCart(product, this.products.slice(0, 24));
            return;
        }

    }

    removeProduct(product) {
        let item = this.cart.find(p => p.productId == product.product_id);
        if (item['customization'] && item['customization'].length) {
            this.openAddOnDialog(product);
        } else {
            this.cartService.removeFromCart(product)
        }
    }

    wishlist(status, detail) {
        if (!this.loggedIn) {
            this.message.alert('warning', this.translate.instant('Please Login First'));
            return;
        }
        let param_data = {
            status: +status,
            product_id: detail.id
        }
        this.http.postData(ApiUrl.addToWishlist, param_data, true)
            .subscribe(response => {
                if (!!response && response.data) {
                    this.message.toast('success', `${this.localization.transform('product')} ${this.translate.instant('Has Been Successfully')} ${status ? this.translate.instant('Added To') : this.translate.instant('Removed From')} ${this.localization.transform('wishlist')}`);
                    detail.is_favourite = status;
                }
            });
    }
    trackByProductsFn(id, index) {
        return index;
    }
    trackByFakeListFn(id, index) {
        return index;
    }
    ngOnDestroy() {
        if (!!this.userSubscription) this.userSubscription.unsubscribe();
        if (!!this.styleSubscription) this.styleSubscription.unsubscribe();
        if (!!this.getDataSubscribe) this.getDataSubscribe.unsubscribe();
        if (!!this.settingsSubscription) this.settingsSubscription.unsubscribe();
        if (!!this.themeSubscription) this.themeSubscription.unsubscribe();
        if (!!this.routeSubscription) this.routeSubscription.unsubscribe();
        if (!!this.cartSubscription) this.cartSubscription.unsubscribe();

        let componentInstance = this.dialogService.dialogComponentRef;
        if (componentInstance) {
            componentInstance.destroy()
        }
    }

}
