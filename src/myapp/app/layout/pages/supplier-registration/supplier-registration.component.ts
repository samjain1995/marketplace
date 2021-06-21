import { Router } from '@angular/router';
import { MessagingService } from './../../../services/messaging/messaging.service';
import { HttpService } from './../../../services/http/http.service';
import { AppSettings } from './../../../shared/models/appSettings.model';
import { StyleVariables } from './../../../core/theme/styleVariables.model';
import { Subscription } from 'rxjs';
import { UtilityService } from './../../../services/utility/utility.service';
import { CountryISO } from 'ngx-intl-tel-input';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiUrl } from './../../../core/apiUrl';
import { StyleConstants } from 'src/app/core/theme/styleConstants.model';

@Component({
  selector: 'app-supplier-registration',
  templateUrl: './supplier-registration.component.html',
  styleUrls: ['./supplier-registration.component.scss']
})
export class SupplierRegistrationComponent implements OnInit {

  styleSubscription: Subscription;
  settingSubscription: Subscription;
  supplierForm: FormGroup;
  submitted: boolean = false;
  style: StyleVariables;
  settings: AppSettings;
  categoryData: Array<any> = [];
  categories: Array<any> = [];
  selectedCategories: Array<any> = [];
  isLoading: boolean = false;

  public flavorOfTheWeek: any = {};


  supplierTagsList: Array<any> = [];
  selectedTagList: Array<any> = [];
  mark_all_tags: boolean = false;

  primaryButton: StyleConstants;

  limit: number = 900;
  skip: number = 0;

  countryISO: CountryISO | string = CountryISO.Switzerland;
  preferredCountries: Array<any> | Array<any> = [];
  selectedIso: string = '';

  countryCodeString: string = '';
  countryCodeFlag: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private util: UtilityService,
    private http: HttpService,
    private message: MessagingService,
    private router: Router
  ) {
    this.primaryButton = new StyleConstants();
  }

  ngOnInit() {
    this.styleSubscription = this.util.getStyles
      .subscribe((style: StyleVariables) => {
        this.style = style;
        this.primaryButton.backgroundColor = style.primaryColor;
        this.primaryButton.color = '#ffffff';
      });

    this.settingSubscription = this.util.getSettings.subscribe((settings: AppSettings) => {
      if (!!settings) {
        this.settings = settings;
        if (this.settings.is_flavor_of_week_enable) {
          this.flavorOfTheWeek = JSON.parse(this.settings.flavor_of_week);
          var checkText = this.flavorOfTheWeek.become_flavor_signup_text;
          checkText = checkText.replace(/<[^>]*>/g, '')
          if (!checkText) {
            this.flavorOfTheWeek.become_flavor_signup_text = null;
          }
        }
       
        if (this.settings.countryCodes.length > 0) {
          this.settings.countryCodes.forEach(item => {
            if(settings.cutom_country_code == 1){
              this.preferredCountries.push(item)
            } else {
              this.preferredCountries.push(item.iso.toLowerCase())
            }
          });
        }
      }
    });

    this.initForm();
    this.getCategories();

    if (this.settings.show_tags_for_suppliers) {
      this.getSupplierTags();
    }

  }

  getCategories() {
    let param_data = {
      language_id: this.util.handler.languageId
    }
    this.http.getData(ApiUrl.getCategories, param_data, true)
      .subscribe(response => {
        if (!!response && response.data) {
          this.categories = response.data;
          this.categories.map((cat, index) => {
            if (cat.id == 1) {
              this.categories.splice(index, 1);
            }
            cat['checked'] = false;
            this.markCat(cat, false);
          });
          this.categoryData = [{ arr: this.categories, mark_all: false }];
        }
      });
  }

  markCat(cat, state) {
    if (cat.sub_category && (cat.sub_category).length) {
      (cat.sub_category).map(cat => {
        cat['checked'] = state;
        this.markCat(cat, state);
      });
    }
  }

  initForm() {
    this.supplierForm = this.formBuilder.group({
      supplierName: ['', [Validators.required]],
      supplierEmail: ['', [Validators.required, Validators.email]],
      supplierMobileNo: ['', [Validators.required]],
      supplierCountryCode: ['', [Validators.required]],
      is_multibranch: [1, [Validators.required]],
      self_pickup: [2, [Validators.required]],
      supplierAddress: ['', [Validators.required]],
      longitude: '',
      latitude: '',
      fein: ['', [Validators.required]],
      user_service_fee: ['', [Validators.required]]
    });

    if(this.settings.cutom_country_code) {
      this.supplierForm.addControl('supplierCountryCode', new FormControl('', [Validators.required]))
    }
  }

  get form() { return this.supplierForm.controls; }
  onChangeCountry() {
    if (this.preferredCountries.length > 0) {
      this.preferredCountries.filter((x: any) => {
        if (x.country_code === this.supplierForm.value.supplierCountryCode) {
          this.selectedIso = x.iso;
        }
      });
    }
  }

  setCountryCode(data) {
    this.supplierForm.controls.supplierCountryCode.setValue(data.country_code);
    this.selectedIso = data.iso;
    this.countryCodeString = data.country_code;
    this.countryCodeFlag = data.flag_image;
  }
  onSubmit() {

    this.submitted = true;

    if (this.supplierForm.invalid) {
      setTimeout(() => {
        this.submitted = false;
      }, 15000);
      return;
    }

    this.getMarkedCategories();

    if (!this.selectedCategories.length) {
      this.message.alert('warning', 'Please select category');
      return;
    }

    if (!this.supplierForm.value.latitude || !this.supplierForm.value.longitude) {
      this.message.alert('warning', 'Location invalid please try again');
      return;
    }

    let payload = {
      supplierName: this.supplierForm.value.supplierName,
      supplierEmail: this.supplierForm.value.supplierEmail,
      is_multibranch: this.supplierForm.value.is_multibranch,
      self_pickup: this.supplierForm.value.self_pickup,
      supplierAddress: this.supplierForm.value.supplierAddress,
      longitude: this.supplierForm.value.longitude,
      latitude: this.supplierForm.value.latitude,
      supplierMobileNo: !this.settings.cutom_country_code ? this.supplierForm.value.supplierMobileNo.number : this.supplierForm.value.supplierMobileNo,
      iso: !this.settings.cutom_country_code ? this.supplierForm.value.supplierMobileNo.countryCode : this.selectedIso,
      country_code: !this.settings.cutom_country_code ? this.supplierForm.value.supplierMobileNo.dialCode : this.supplierForm.value.supplierCountryCode,

      license_number: this.supplierForm.value.fein,
      user_service_fee: this.supplierForm.value.user_service_fee,
      categoryIds: JSON.stringify(this.selectedCategories),
      supplier_tags: this.selectedTagList
    }

    this.isLoading = true;
    let form_data = this.http.appendFormData(payload);
    this.http.postData(ApiUrl.registerSupplier, form_data)
      .subscribe(response => {
        if (response) {
          this.message.toast('success', 'Registration Successfull');
          this.router.navigate(['/']);
        }
        this.isLoading = false;
      }, err => {
        this.isLoading = false;
      });
  }

  address(data: any) {
    this.supplierForm.controls.supplierAddress.setValue(data.formatted_address);
    this.supplierForm.controls.latitude.setValue(data.lat);
    this.supplierForm.controls.longitude.setValue(data.lng);
  }

  viewSubCat(parentIndex, category) {
    this.categoryData.splice(parentIndex + 1, this.categoryData.length);
    if (category.sub_category && (category.sub_category).length) {
      this.categoryData.push({ arr: category.sub_category, mark_all: false, category: category });
    }
  }

  selectCat(category) {
    category.checked = !category.checked;
    if (!category.checked && !!category.sub_category && category.sub_category.length) {
      (category.sub_category).forEach(cat => {
        cat['checked'] = false;
        this.markCat(cat, false);
      });
    }
  }

  makeDataArr(cat, selectedCat) {
    if (cat.sub_category && (cat.sub_category).length) {
      (cat.sub_category).map((cat) => {
        if (cat.checked) {
          selectedCat.data.push({ id: cat.id, data: [] });
          (selectedCat.data).forEach(el => {
            this.makeDataArr(cat, el);
          });
        }
      });
    }
  }

  getMarkedCategories() {
    this.selectedCategories = [];
    this.categories.map((cat) => {
      if (cat.checked) {
        this.selectedCategories.push({ id: cat.id, data: [] });
        this.selectedCategories.forEach(el => {
          this.makeDataArr(cat, el);
        });
      }
    });
  }

  markAll(index) {
    if (this.categoryData[index]) {
      this.categoryData[index].mark_all = !this.categoryData[index].mark_all;
      this.categoryData[index].arr.forEach(cat => {
        cat.checked = this.categoryData[index].mark_all;
        this.markCat(cat, this.categoryData[index].mark_all);
      });
    }
  }


  getSupplierTags() {
    var data = {
      limit: this.limit,
      skip: this.skip,
    };
    this.http.getData(ApiUrl.getSupplierTags, data).subscribe((res: any) => {
      if (res.status == 200) {
        this.supplierTagsList = res.data.list;
        this.supplierTagsList.forEach(element => {
          element['checked'] = false;
        });
      }
    })
  }


  selectTag(tag) {
    tag.checked = !tag.checked;
    var findTag = this.supplierTagsList.find(x => x.id == tag.id);
    this.supplierTagsList.forEach(element => {
      if (element.id == findTag.id) {
        element['checked'] = tag.checked;
        if (tag.checked) {
          this.selectedTagList.push(findTag.id);
        }
        else {
          const index = this.selectedTagList.indexOf(findTag.id);
          if (index > -1) {
            this.selectedTagList.splice(index, 1);
          }
        }
      }
    });
  }
  markAllTags() {
    if (!this.mark_all_tags) {
      this.selectedTagList = [];
      this.supplierTagsList.forEach(element => {
        element['checked'] = true;
        this.selectedTagList.push(element.id);
      });
      this.mark_all_tags = true;
    }
    else {
      this.supplierTagsList.forEach(element => {
        element['checked'] = false;
      });
      this.selectedTagList = [];
      this.mark_all_tags = false;
    }
  }
  trackByCatDataFn(id, index) {
    return index;
  }
  trackByTagsListFn(id, index) {
    return index;
  }
  trackByCategoryFn(id, index) {
    return index;
  }
}
