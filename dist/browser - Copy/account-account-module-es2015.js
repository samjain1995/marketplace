(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/account.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/account.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"product_result_body\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-lg-3\">\n        <app-side-nav></app-side-nav>\n      </div>\n      <div class=\"col-md-8 col-lg-9\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/address/address.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/address/address.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!----------------------------page loader------------------------------------>\n<app-processing-indicator *ngIf=\"isLoading\" ></app-processing-indicator>\n\n<div class=\"profile-left-right mt-md-0 mt-4\" id=\"manage_address\">\n  <h1 [style.color]=\"style.baseColor\">{{'Manage Address' | translate}}</h1>\n  <div class=\"Address_outter\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-sm-6 d-flex\" *ngFor=\"let data of address;let i = index;trackBy:trackByFn\" [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n        <div class=\"default_address\">\n          <div class=\"d-flex justify-content-between align-items-center\" style=\"padding-right: 10px\">\n            <h3 [style.color]=\"style.primaryColor\">{{data.is_default === 1 ? 'Default Address' : 'Address' | translate}}</h3>\n            <input class=\"default-address\" style=\"margin-left: 10px;\"type=\"checkbox\" [checked]=\"data.is_default === 1\" [disabled]=\"data.is_default === 1\" (change)=\"defaultAdress(data.id)\">\n          </div> \n          <div class=\"ddress-inner\" [style.color]=\"style.defaultColor\">\n            <h2 [style.color]=\"style.baseColor\">{{data?.name}}</h2>\n            <address [style.color]=\"style.baseColor\">\n              #{{data?.address_line_1}} \n              <span *ngIf=\"data?.collectNumber\">{{data?.collectNumber}} </span>\n              <span>{{data?.customer_address}}</span>\n            </address>\n            <ul class=\"address_btn d-flex justify-content-between align-items-center p-0 m-0\">\n              <li>\n                <a href=\"javascript:void(0)\" (click)=\"setDataInLocal(data)\" [style.color]=\"style.primaryColor\">{{'Edit' | translate}}</a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0)\" (click)=\"confirmDelete(data, i)\" [style.color]=\"style.primaryColor\">{{'Delete' | translate}}</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"!address?.length\" class=\"no-data\">\n      <h1 [style.color]=\"style.baseColor\">{{'No Address Found' | translate}}</h1>\n    </div>\n  </div>\n  <a class=\"profile-submit-form\" href=\"javascript:void(0)\" [ngStyle]=\"{'backgroundColor': style.primaryColor, 'borderColor': style.primaryColor, 'color': '#ffffff'}\" [routerLink]=\"['/account/address/add-edit-address']\">\n    {{'Add new address' | translate}}</a>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/change-password/change-password.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/change-password/change-password.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-processing-indicator *ngIf=\"isLoading\"></app-processing-indicator>\n\n<div id=\"personal_info\" class=\"profile-left-right\">\n  <h1 [style.color]=\"style.baseColor\">{{'Change Password' | translate}}</h1>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\n    <div class=\"profile_form\">\n      <div class=\"form-group\">\n        <label [style.color]=\"style.baseColor\">{{'Old Password' | translate}}</label>\n        <input (keydown.space)=\"$event.preventDefault()\" type=\"password\" placeholder=\"{{'Old Password' | translate}}\"\n          formControlName=\"oldPassword\">\n        <div class=\"text-error\" *ngIf=\"form.controls['oldPassword'].errors?.required && showError\">\n          {{'Please enter old password' | translate}}</div>\n      </div>\n      <div class=\"form-group\">\n        <label [style.color]=\"style.baseColor\">{{'New Password' | translate}}</label>\n        <input (keydown.space)=\"$event.preventDefault()\" type=\"password\" placeholder=\"{{'New Password' | translate}}\"\n          formControlName=\"newPassword\">\n        <div class=\"text-error\" *ngIf=\"form.controls['newPassword'].errors?.required && showError\">\n          {{'Please enter new password' | translate}}</div>\n        <div class=\"text-error\" *ngIf=\"showError && form.controls['newPassword'].errors?.minlength\">\n          {{'Password length should be 6-20 characters.' | translate}}</div>\n        <div class=\"text-error\" *ngIf=\"showError && form.controls['newPassword'].errors?.maxlength\">\n          {{'Password length should be 6-20 characters.' | translate}}</div>\n      </div>\n      <div class=\"form-group\">\n        <label [style.color]=\"style.baseColor\">{{'Confirm Password' | translate}}</label>\n        <input (keydown.space)=\"$event.preventDefault()\" type=\"password\"\n          placeholder=\"{{'Confirm Password' | translate}}\" formControlName=\"confirmPassword\">\n        <div class=\"text-error\" *ngIf=\"form.controls['confirmPassword'].errors?.required && showError\">\n          {{'Please enter confirm password' | translate}}</div>\n      </div>\n      <button class=\"btn m_btns\"\n        [ngStyle]=\"{'backgroundColor': style.primaryColor, 'borderColor': style.primaryColor, 'color': '#ffffff'}\"\n        href=\"javascript:void(0)\" type=\"submit\">{{'Save' | translate}}</button>\n    </div>\n  </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/feedback/feedback.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/feedback/feedback.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-processing-indicator *ngIf=\"isLoading\"></app-processing-indicator>\n\n<div id=\"personal_info\" class=\"profile-left-right\">\n    <h1 [style.color]=\"style.baseColor\">Share Your Feedback</h1>\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\n        <div class=\"profile_form\">\n            <div class=\"row\">\n                <div class=\"col-lg-10\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label [style.color]=\"style.baseColor\">Name</label>\n                                <input type=\"text\" placeholder=\"Name\" formControlName=\"name\">\n                                <div class=\"text-error\" *ngIf=\"form.controls['name'].errors?.required && showError\">\n                                    {{'Please enter name' | translate}}</div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label [style.color]=\"style.baseColor\">Email</label>\n                                <input (keydown.space)=\"$event.preventDefault()\" type=\"email\" placeholder=\"Email\"\n                                    formControlName=\"email_id\">\n                                <div class=\"text-error\" *ngIf=\"form.controls['email_id'].errors?.required && showError\">\n                                    {{'Please enter email' | translate}}</div>\n                                <div class=\"text-error\"\n                                    *ngIf=\"!form.controls['email_id'].errors?.required && form.controls['email_id'].errors?.email && showError\">\n                                    {{'Please enter valid email' | translate}}</div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label [style.color]=\"style.baseColor\">Phone</label>\n                                <input (keydown.space)=\"$event.preventDefault()\" type=\"tel\" placeholder=\"Phone\"\n                                    numbersOnly formControlName=\"phone\">\n                                <div class=\"text-error\" *ngIf=\"form.controls['phone'].errors?.required && showError\">\n                                    {{'Please enter Phone No.' | translate}}</div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-lg-6\">\n                            <div class=\"form-group\">\n                                <label [style.color]=\"style.baseColor\">Description</label>\n                                <textarea type=\"text\" placeholder=\"Description\" rows=\"4\"\n                                    formControlName=\"description\"></textarea>\n                            </div>\n                        </div>\n\n                        <div class=\"col-lg-6\">\n                            <div class=\"form-group\">\n                                <label [style.color]=\"style.baseColor\">New Suggestion</label>\n                                <textarea type=\"text\" placeholder=\"New Suggestion\" rows=\"4\"\n                                    formControlName=\"new_suggestions\"></textarea>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\" *ngIf=\"suggestions.length\">\n                        <div class=\"col-md-12\">\n                            <label>Select Suggestions</label>\n                            <div class=\"cust\">\n                                <form>\n                                    <div class=\"form-group check\">\n                                        <div class=\"sugg-bx\">\n                                            <div class=\"row\">\n                                                <label class=\"col-md-12\"\n                                                    *ngFor=\"let suggestion of suggestions; let i = index\">\n                                                    <input type=\"checkbox\" name=\"{{'name' + i}}\"\n                                                        (change)=\"selectSuggestion(suggestion)\">\n                                                    <span></span>{{suggestion?.name}}&nbsp;&nbsp;\n                                                    <small\n                                                        class=\"w-100\">{{suggestion?.description || 'No Description'}}</small>\n                                                </label>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n\n                    <button class=\"btn mt-3\"\n                        [ngStyle]=\"{'backgroundColor': style.primaryColor, 'borderColor': style.primaryColor, 'color': '#ffffff'}\"\n                        href=\"javascript:void(0)\" type=\"submit\">{{'Submit' | translate}}</button>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/loyalty/loyalty.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/loyalty/loyalty.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"loyalty\">\n    <div class=\"container\">\n\n        <div class=\"loyalty_heading\">\n            <h1>{{'Loyalty Points' | translate}}</h1>\n        </div>\n\n        <div class=\"loyalty-inner\">\n            <div *ngIf=\"loyaltyData?.totalEarningPoint >= loyaltyData?.total_loyality_points; else noLoyalty\">\n                <h4 class=\"name\">{{loyaltyData?.name}}</h4>\n                <h6 class=\"description mb-4\">{{loyaltyData?.description}}</h6>\n\n                <div class=\"loyalty-image\">\n                    <img appImage [url]=\"loyaltyData?.image\" [size]=\"'400x400'\" [src]=\"loyaltyData?.image\"\n                        [settings]=\"settings\" onError=\"src = './assets/images/placeholder_image.svg';\">\n                </div>\n            </div>\n\n            <ng-template #noLoyalty>\n                <div class=\"no-loyalty\">\n                    <h6>You Have Not Yet Earned A Loyalty Card.</h6>\n                    <p>Place More {{'orders' | localization}} And Keep Earning Points To Avail Amazing Discounts</p>\n                </div>\n            </ng-template>\n\n            <div class=\"points-outer\">\n                <h3 class=\"points\">{{loyaltyData?.totalEarningPoint || 0}}</h3>\n                <p>Total Loyalty Points Earned</p>\n            </div>\n\n            <div class=\"points-outer\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\" style=\"padding-left: 100px;\">\n                        <h3 class=\"points\">{{currency}}{{(loyaltyData?.totalPointAmountEarned || 0)?.toFixed(2)}}</h3>\n                        <p>Total Amount Earned</p>\n                    </div>\n                    <div class=\"col-md-6\" style=\"padding-right: 100px;\">\n                        <h3 class=\"points\">{{currency}}{{(loyaltyData?.leftPointAmount || 0)?.toFixed(2)}}</h3>\n                        <p>Remaining Amount</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"loyalty-middle\" *ngIf=\"nextLoyaltyLevel.length\">\n            <!-- <button type=\"button\" class=\"invite-btn btn\">Invite Friends</button> -->\n            <h5 style=\"margin-bottom: 25px;\">Your Upcoming Loyalty Levels</h5>\n            <div class=\"row\">\n                <div class=\"col-md-3\" *ngFor=\"let loyalty of nextLoyaltyLevel\">\n                    <div class=\"next\">\n                        <img class=\"nxt-img\" appImage [url]=\"loyalty?.image\" [size]=\"'300x300'\" [src]=\"loyalty?.image\"\n                            [settings]=\"settings\" onError=\"src = './assets/images/placeholder_image.svg';\">\n                        <h5>{{loyalty?.name}}</h5>\n                        <h6>Points : {{loyalty?.total_loyality_points}}</h6>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"loyalty-bottom\" *ngIf=\"activity.length\">\n            <h3>Recent Activity</h3>\n            <ul class=\"loyalty-list\">\n                <li *ngFor=\"let loyalty of activity\">\n                    <h6 *ngIf=\"loyalty?.used_loyality_point_amount <= 0\">You Earned\n                        {{loyalty.earned_points ? loyalty.earned_points:1}} point</h6>\n                    <h6 *ngIf=\"loyalty?.used_loyality_point_amount > 0\">Amount Spent :\n                        {{currency}}{{(loyalty?.used_loyality_point_amount).toFixed(2)}}</h6>\n                    <p style=\"margin-bottom: 0px;\" *ngIf=\"loyalty?.used_loyality_point_amount <= 0\">Amount Earned :\n                        {{currency}}{{(loyalty?.earned_amount).toFixed(2)}}</p>\n                    <p>{{'order' | localization}} no. : {{loyalty?.order_id}}</p>\n                    <!-- <p *ngIf=\"loyalty?.used_loyality_point_amount > 0\">Amount Spent : {{currency}}{{(loyalty?.used_loyality_point_amount).toFixed(2)}}</p> -->\n                </li>\n            </ul>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/manage-address/manage-address.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/manage-address/manage-address.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!----------------------------page loader------------------------------------>\n<app-processing-indicator *ngIf=\"isLoading\"></app-processing-indicator>\n\n<div id=\"personal_info\" class=\"profile-left-right\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"address-path\">\n        <a [style.color]=\"style.secondaryColor\" [routerLink]=\"['/account/address']\">{{'Manage Address' |\n          translate}}</a>&nbsp;\n        <i [style.color]=\"style.secondaryColor\" class=\"fa fa-angle-right\"></i>&nbsp;\n        <a [style.color]=\"style.baseColor\">{{addEdit + ' Address' | translate}}</a>\n      </div>\n    </div>\n  </div>\n  <h1 [style.color]=\"style.baseColor\">{{addEdit + ' Address' | translate}}</h1>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\n        <div class=\"profile_form\">\n\n          <div class=\"form-group\">\n            <label [style.color]=\"style.baseColor\">{{'address_full_name' | localization | translate}}</label>\n            <input type=\"text\" formControlName=\"name\"\n              placeholder=\"{{'Enter ' | translate}}{{'address_full_name' | localization | translate}}\"\n              (keydown.space)=\"!form.controls.name.value ? $event.preventDefault() : ''\">\n            <div class=\"text-error\"\n              *ngIf=\"(form.controls['name'].errors?.required || form.controls['name'].errors?.whitespace) && showError\">\n              {{'Please enter name' | translate}}</div>\n          </div>\n\n          <div class=\"form-group\">\n            <label [style.color]=\"style.baseColor\">{{'complete_address' | localization | translate}}</label>\n            <input type=\"text\" formControlName=\"addressLineFirst\" appGoogleplace (onSelect)=\"address($event)\"\n              placeholder=\"{{'Enter a location' | translate}}\">\n            <div class=\"text-error\" *ngIf=\"form.controls['addressLineFirst'].errors?.required && showError\">\n              {{'Please enter address' | translate}}</div>\n            <div class=\"text-error\"\n              *ngIf=\"!form.controls['addressLineFirst'].errors?.required && form.controls['latitude'].errors?.required && showError\">\n              {{'Please enter valid address' | translate}}</div>\n          </div>\n\n          <div class=\"form-group\">\n            <label [style.color]=\"style.baseColor\">{{'Apartment No.' | translate}}</label>\n            <input type=\"text\" formControlName=\"houseNo\" placeholder=\"{{'Apartment No.' | translate}}\"\n              (keydown.space)=\"!form.controls.houseNo.value ? $event.preventDefault() : ''\">\n            <div class=\"text-error\"\n              *ngIf=\"(form.controls['houseNo'].errors?.required || form.controls['houseNo'].errors?.whitespace) && showError\">\n              {{'Please enter Apartment No.' | translate}}</div>\n          </div>\n\n          <div class=\"form-group\" *ngIf=\"setting?.addCollectFieldInAddress == 1\">\n            <label [style.color]=\"style.baseColor\">{{'Click/Collect Number' | translate}}</label>\n            <input type=\"text\" formControlName=\"collectNo\" placeholder=\"{{'Enter Click/Collect Number' | translate}}\"\n              (keydown.space)=\"!form.controls.collectNo.value ? $event.preventDefault() : ''\">\n            <div class=\"text-error\"\n              *ngIf=\"(form.controls['collectNo'].errors?.required || form.controls['collectNo'].errors?.whitespace) && showError\">\n              {{'Please enter click/collect number' | translate}}</div>\n          </div>\n\n\n\n          <!-- <div class=\"form-group\">\n        <label>{{'Building Name' | translate}}</label>\n        <input type=\"text\" formControlName=\"buildingName\">\n        <div class=\"text-error\" *ngIf=\"form.controls['buildingName'].errors?.required && showError\">\n          {{'Please enter building name' | translate}}</div>\n      </div> -->\n\n          <!-- <div class=\"form-group\">\n        <label>{{'Area' | translate}}</label>\n        <input type=\"text\" formControlName=\"area\">\n        <div class=\"text-error\" *ngIf=\"form.controls['area'].errors?.required && showError\">\n            Please Enter Area</div>\n      </div> -->\n\n\n          <!-- <div class=\"form-group\">\n        <div class=\"default-address\">\n            <label>Make Default Address</label>\n            <input type=\"checkbox\" formControlName=\"isDefault\" >\n        </div>\n      </div> -->\n\n          <!-- <div class=\"form-group\">\n        <label>{{'Landmark' | translate}}</label>\n        <input type=\"text\" formControlName=\"landmark\">\n        <div class=\"text-error\" *ngIf=\"form.controls['landmark'].errors?.required && showError\">\n          {{'Please enter address and landmark' | translate}}</div>\n      </div> -->\n\n          <!-- <div class=\"form-group\">\n        <label>{{'City' | translate}}</label>\n        <input type=\"text\" formControlName=\"city\">\n        <div class=\"text-error\" *ngIf=\"form.controls['city'].errors?.required && showError\">\n            Please Enter City</div>\n      </div> -->\n\n          <!-- <div class=\"form-group\">\n        <label>{{'Country' | translate}}</label>\n        <input type=\"text\" formControlName=\"country\">\n        <div class=\"text-error\" *ngIf=\"form.controls['country'].errors?.required && showError\">\n            Please Enter Country</div>\n      </div> -->\n\n          <div class=\"form-group signup-phone\">\n            <label [style.color]=\"style.baseColor\">{{'address_phone_no' | localization | translate}}</label>\n            <!-- <input type=\"text\" formControlName=\"phone_number\" numbersOnly> -->\n            <div class=\"mb-2 signup-phone\" *ngIf=\"setting?.cutom_country_code\">\n              <div class=\"input-group\">\n                <div class=\"row\">\n                  <div class=\"col-sm-3\">\n                    <!-- <select class=\"input-large input-large-altered select-box\" formControlName=\"countryCode\">\n                      <option value=\"\" selected>Select </option>\n                      <option *ngFor=\"let opt of preferredCountries\" [value]=\"opt.iso\">{{opt.country_code}}&nbsp;\n                        {{opt.country_name}}</option> -->\n                    <!-- | slice:0:7 -->\n                    <!-- </select> -->\n\n                    <div class=\"country_dropbox home-page-search-restorent dropdown\">\n                      <a class=\" dropdown-toggle pointer\" data-toggle=\"dropdown\"><img class=\"country_flag\"\n                          *ngIf=\"countryCodeFlag\" src=\"{{countryCodeFlag}}\"> {{countryCodeString || 'Select'}}\n                        <img src=\"/assets/images/down_black.png\"></a>\n                      <ul class=\"dropdown-menu country_text\">\n                        <li class=\"pointer\"><a *ngFor=\"let opt of preferredCountries\" (click)=\"setCountryCode(opt)\"><img\n                              src=\"{{opt.flag_image}}\">\n                            <p>{{opt.country_code}}</p>&nbsp;\n                            {{opt.country_name}}\n                          </a>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-8\" style=\"margin-left: 26px;\" class=\"input-number\">\n                    <input name=\"TypeCode\" type=\"text\" formControlName=\"phone_number\" />\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div *ngIf=\"!setting?.cutom_country_code\">\n              <ngx-intl-tel-input [selectedCountryISO]=\"countryISO\" [preferredCountries]=\"preferredCountries\"\n                [searchCountryFlag]=\"true\" placeholder=\"Phone Number\" [enableAutoCountrySelect]=\"false\"\n                [enablePlaceholder]=\"true\" name=\"phone_number\" [separateDialCode]=\"true\" [phoneValidation]=\"true\"\n                formControlName=\"phone_number\" [searchCountryPlaceholder]=\"'Search Country' | translate\">\n              </ngx-intl-tel-input>\n            </div>\n\n            <div class=\"text-error\" *ngIf=\"form.controls['phone_number'].errors?.required && showError\">\n              Please Enter Contact Number</div>\n            <div class=\"text-error\"\n              *ngIf=\"!form.controls['phone_number'].errors?.required && form.controls['phone_number'].invalid && showError\">\n              {{'Please Enter a Valid Phone Number.' | translate}}</div>\n            <div class=\"text-error\"\n              *ngIf=\"setting.cutom_country_code && form.controls['countryCode'].errors?.required && showError\">\n              Please select a country code.</div>\n          </div>\n\n          <div class=\"form-group\" *ngIf=\"setting?.enable_address_reference\">\n            <label [style.color]=\"style.baseColor\">{{'Address Reference' | translate}}</label>\n            <input type=\"text\" formControlName=\"reference_address\"\n              placeholder=\"{{'Enter Reference Address' | translate}}\">\n            <div class=\"text-error\" *ngIf=\"form.controls['reference_address'].errors?.maxlength && showError\">\n              {{'Max. length should be ' | translate}}{{setting?.address_reference_char_limit}}</div>\n          </div>\n\n\n\n\n          <button class=\"btn profile-submit-form cancel-button\" [ngStyle]=\"cancelBtn\" type=\"button\"\n            (click)=\"util.goBack()\">{{'Cancel' | translate}}</button>\n          <button class=\"btn profile-submit-form ml-3\" [ngStyle]=\"saveBtn\" type=\"submit\">{{'Save' | translate}}</button>\n        </div>\n      </form>\n\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/my-gift-cards/my-gift-cards.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/my-gift-cards/my-gift-cards.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-processing-indicator *ngIf=\"isLoading\"></app-processing-indicator>\n\n<section id=\"Coupons-page-title\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h3>My Gift Cards</h3>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section id=\"Coupons-detail-page\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <ng-container *ngIf=\"giftList.length; else noGift\">\n                <div class=\"col-md-6\" *ngFor=\"let gift of giftList\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"Coupons-box\">\n                                <div class=\"Coupons-number\">\n                                    <h1 class=\"red_color\">{{gift?.percentage_value}}</h1>\n                                    <span>OFF</span>\n                                </div>\n                                <div class=\"Coupons-detail\">\n                                    <h2>{{gift?.gift_name}}</h2>\n                                    <p>{{gift?.description}}</p>\n\n                                    <div class=\"Coupons-btn\" (click)=\"selectedGift = gift\">\n                                        <a class=\"Coupons-buy\" data-toggle=\"modal\" data-target=\"#myModal\">View\n                                            Detail</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n            <ng-template #noGift>\n                <div class=\"no-gift\">\n                    <h4>no gift card found</h4>\n                </div>\n            </ng-template>\n        </div>\n    </div>\n</section>\n\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-md\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"></button>\n                <!-- <h4 class=\"modal-title\">{{selectedGift?.gift_name}}</h4> -->\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"Coupons-detail-outter\">\n                    <div class=\"Coupons-detail-discount\">\n                        <h1 *ngIf=\"selectedGift?.price_type == 1\"><strong>{{selectedGift?.percentage_value}}%</strong>\n                            OFF</h1>\n                        <h1 *ngIf=\"selectedGift?.price_type != 1\"><strong>{{selectedGift?.price}}%</strong> OFF</h1>\n                    </div>\n                    <div class=\"Coupons-detail-inner-box\">\n                        <h3 *ngIf=\"selectedGift?.price_type == 1\">{{selectedGift?.percentage_value}}% off Coupon</h3>\n                        <h3 *ngIf=\"selectedGift?.price_type != 1\">{{selectedGift?.price}} off Coupon</h3>\n                        <p>{{selectedGift?.gift_name}}</p>\n\n                        <h5>Coupon Code</h5>\n                        <div class=\"discount-coupon\">\n                            <h4>{{selectedGift?.gift_name}}</h4>\n                        </div>\n\n                        <div>\n                            <p>{{selectedGift?.description}}</p>\n                        </div>\n\n                        <div class=\"QA-code\">\n                        </div>\n\n                        <!-- <div class=\"share-download\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6 col-6\">\n                                    <div class=\"share-download-btn\">\n                                        <a href=\"\"><i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n                                            Share</a>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6 col-6\">\n                                    <div class=\"share-download-btn float-right\">\n                                        <a href=\"\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                                            Download</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div> -->\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div> -->\n        </div>\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/my-wallet/my-wallet.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/my-wallet/my-wallet.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-processing-indicator *ngIf=\"isLoading\"></app-processing-indicator>\n\n<div>\n    <section id=\"wallet_page\">\n        <div class=\"container\">\n            <div class=\"wallet_outter\">\n                <div class=\"wallet_right\">\n                    <div class=\"wallet_right_heading\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"wallet_balance\">\n                                    <p>{{'Current Balance' | translate}}</p>\n                                    <h2>{{currency}} {{walletAmount}}</h2>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"wallet_amount_button\">\n                                    <a href=\"\" class=\"wallet_btn\" data-toggle=\"modal\" data-target=\"#sendMoney\"\n                                        (click)=\"createSendMoneyForm()\">{{'Send Money To Someone' | translate}}</a>\n                                    <a href=\"\" class=\"wallet_btn pricem-color\" data-toggle=\"modal\"\n                                        data-target=\"#addMoneyModel\"\n                                        (click)=\"isPayOnline = false; createAddMoneyForm()\">{{'Add Amount' | translate}}</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"wallet_right_heading_status\">\n                        <p>{{'History' | translate}}</p>\n                    </div>\n                    <div class=\"wallet_list\">\n                        <div *ngFor=\"let transaction of transactions;trackBy:trackByFn | paginate: { itemsPerPage: pagination.perPage, currentPage: pagination.currentPage, totalItems: pagination.count }\"\n                            class=\"wallet_list_inner\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"wallet_list_detail\">\n                                        <div class=\"wallet_list_img\">\n                                            <img\n                                                [src]=\"transaction.is_add ==  1 ? 'assets/images/ic_down.png' : 'assets/images/ic_up.png'\">\n                                        </div>\n                                        <div class=\"wallet_list_status\">\n                                            <p>{{transaction?.comment || '--'}}</p>\n                                            <span>{{transaction.is_add == 1 ? 'Received' : 'Paid' | translate}} -\n                                                {{transaction.created_at | time: 'ago'}}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"wallet_list_amount\">\n                                        <p [ngStyle]=\"{'color':transaction.is_add==  1 ? '#189618' : '#ef0c0c' }\">\n                                            {{currency}}\n                                            {{transaction?.amount}}</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"custom-pagination mt-5\" *ngIf=\"pagination.count > pagination.perPage\">\n                <pagination-controls responsive=\"true\" [style.color]=\"style.primaryColor\" previousLabel=\"Prev\"\n                    nextLabel=\"Next\" (pageChange)=\"pageChange($event)\"></pagination-controls>\n            </div>\n        </div>\n    </section>\n\n    <app-online-payment [settings]=\"settings\" [order]=\"paymentOrderModel\" *ngIf=\"isPayOnline\"\n        [geofencedGateways]=\"[selectedGateway]\" (onError)=\"onPaymentError()\" (onClose)=\"isPayOnline = $event\"\n        (onSuccess)=\"onPaymentSuccess($event)\">\n    </app-online-payment>\n</div>\n\n\n\n\n\n<!-------------------------- Add Money Model -------------------------------->\n\n<div class=\"modal fade\" id=\"addMoneyModel\" role=\"dialog\" data-keyboard=\"false\" data-backdrop=\"static\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content choose_walle\">\n            <div class=\"modal-header\">\n                <button #addMoneyClose type=\"button\" class=\"close\" data-dismiss=\"modal\"></button>\n                <h4 class=\"modal-title\">{{'Add Money' | translate}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"addMoneyForm\" (ngSubmit)=\"onAddMoney()\">\n                    <div class=\"profile_form phoneno-form\">\n                        <div class=\"form-group enter-wallet-amount\">\n                            <label>{{'Enter Amount You Want To Add' }}</label>\n                            <input class=\"w-100\" type=\"text\" pKeyFilter=\"money\"\n                                placeholder=\"{{'Enter Amount Here' | translate }}\" formControlName=\"amount\">\n                            <div *ngIf=\"submitted && addMoney.amount.errors\" class=\"log-error\">\n                                <div *ngIf=\"addMoney.amount.errors.required\">{{'Please enter amount' | translate}}\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group send_money_by\">\n                            <p>{{'Select Payment Method' | translate}}</p>\n                            <div class=\"payment_method_opt\">\n                                <ng-container *ngFor=\"let gateway of paymentGateways; let i = index\">\n                                    <div class=\"form-check-inline\">\n                                        <label class=\"form-check-label\" [for]=\"gateway.name + i\">{{gateway?.name}}\n                                            <input type=\"radio\" class=\"form-check-input\" [id]=\"gateway.name + i\"\n                                                name=\"gateway\" [value]=\"gateway.name\" (change)=\"modeChange($event)\"\n                                                formControlName=\"gateway\"><span class=\"check-span\"></span>\n                                        </label>\n                                    </div>\n                                    <!-- <div>\n                                            <input [id]=\"gateway.name\" type=\"radio\" name=\"gateway\"\n                                                [value]=\"gateway.name\" (change)=\"sendMode = 'phone'\"\n                                                (change)=\"modeChange($event)\" formControlName=\"gateway\" />\n                                            <label [for]=\"'gateway.name'\">{{gateway?.name}}</label>\n                                        </div> -->\n                                </ng-container>\n                            </div>\n                        </div>\n                        <button type=\"submit\" style=\"margin: 0px;\"\n                            class=\"btn  wallet_btn\">{{'Continue To Add Amount' | translate}} </button>\n                    </div>\n                </form>\n            </div>\n\n        </div>\n\n    </div>\n</div>\n\n<!-------------------------- Share Money Model -------------------------------->\n\n<div class=\"modal fade\" id=\"sendMoney\" role=\"dialog\" data-keyboard=\"false\" data-backdrop=\"static\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button #sendMoneyClose type=\"button\" class=\"close\" data-dismiss=\"modal\"></button>\n                <h4 class=\"modal-title\">{{'Send Money' | translate}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"sendMoneyForm\" (ngSubmit)=\"onSendMoney()\">\n                    <div class=\"profile_form phoneno-form\">\n                        <div class=\"form-group enter-wallet-amount\">\n                            <label>{{'Enter Amount You Want To Send' | translate}}</label>\n                            <input class=\"w-100\" type=\"text\" pKeyFilter=\"money\" placeholder=\"{{'Enter Amount Here' | translate }}\"\n                                formControlName=\"amount\">\n                            <div *ngIf=\"submitted && moneyForm.amount.errors\" class=\"log-error\">\n                                <div *ngIf=\"moneyForm.amount.errors.required\">{{'Please enter amount.' | translate}}\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group send_money_by\">\n                            <p>{{'Send by' | translate}}</p>\n                            <div class=\"payment_method_opt\">\n                                <div>\n                                    <input [id]=\"'phone'\" type=\"radio\" name=\"mode\" [value]=\"'phone'\"\n                                        (change)=\"sendMode = 'phone'\" (change)=\"modeChange($event)\"\n                                        [checked]=\"'phone' == sendMode\" />\n                                    <label [for]=\"'phone'\">{{'PHONE' | translate}}</label>\n                                </div>\n                                <div>\n                                    <input [id]=\"'email'\" type=\"radio\" name=\"mode\" [value]=\"'email'\"\n                                        [checked]=\"'email' == sendMode\" (change)=\"modeChange($event)\" />\n                                    <label [for]=\"'email'\">{{'Email' | translate}}</label>\n                                </div>\n                            </div>\n                            <div *ngIf=\"sendMode == 'email'\" class=\"form-group wallet_input\">\n                                <label>{{'Enter Email' | translate }}</label>\n                                <input class=\"w-100\" type=\"text\" formControlName=\"email\"\n                                    placeholder=\"{{'Enter email here' | translate }}\">\n                                <div *ngIf=\"submitted && moneyForm.email.errors\" class=\"log-error\">\n                                    <div *ngIf=\"moneyForm.email.errors.required\">\n                                        {{'Please enter email' | translate}}</div>\n                                    <div *ngIf=\"submitted && moneyForm.email.errors.pattern\">\n                                        {{'Please enter a valid email' | translate}}</div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"sendMode == 'phone'\" class=\"form-group w-100 wallet_input\">\n                                <label>{{'Enter phone' | translate }}</label>\n                                <div class=\"input-group\" *ngIf=\"settings?.cutom_country_code\">\n                                    <div class=\"row\">\n                                      <div class=\"col-sm-3\">\n                                        <!-- <select class=\"input-large input-large-altered select-box\" formControlName=\"countryCode\">\n                                          <option value=\"\">Select </option>\n                                          <option *ngFor=\"let opt of preferredCountries\" [value]=\"opt.country_code\">{{opt.country_code}}&nbsp;\n                                            {{opt.country_name | slice:0:7}}</option>\n                                        </select> -->\n\n                                        <div class=\"country_dropbox home-page-search-restorent dropdown\">\n                                            <a class=\" dropdown-toggle pointer\"\n                                                data-toggle=\"dropdown\"><img class=\"country_flag\" *ngIf=\"countryCodeFlag\" src=\"{{countryCodeFlag}}\"> {{countryCodeString || 'Select'}}\n                                                <img src=\"/assets/images/down_black.png\"></a>\n                                            <ul class=\"dropdown-menu country_text\">\n                                                <li class=\"pointer\"><a *ngFor=\"let opt of preferredCountries\" \n                                                        (click)=\"setCountryCode(opt, 'phoneForm')\"><img src=\"{{opt.flag_image}}\"><p>{{opt.country_code}}</p>&nbsp;\n                                                        {{opt.country_name}}</a>\n                                                </li>\n                                            </ul>\n                                        </div>\n\n                                      </div>\n                                      <div class=\"col-sm-8 input-number\" style=\"margin-left: 26px;\">\n                                        <input name=\"TypeCode\" type=\"text\" placeholder=\"Phone Number\" formControlName=\"phoneNumber\" />\n                                      </div>\n                                    </div>\n                                  </div>\n\n                                  <div *ngIf=\"!settings?.cutom_country_code\">\n                                    <ngx-intl-tel-input [preferredCountries]=\"preferredCountries\" [searchCountryFlag]=\"true\"\n                                        placeholder=\"Phone Number\" [enableAutoCountrySelect]=\"false\"\n                                        [enablePlaceholder]=\"true\" name=\"phone\" [separateDialCode]=\"true\"\n                                        [phoneValidation]=\"true\" formControlName=\"phoneNumber\" style=\"width:100%\">\n                                    </ngx-intl-tel-input>\n                                  </div>\n                                <div *ngIf=\"submitted && moneyForm.phoneNumber.errors\" class=\"log-error\">\n                                    <div *ngIf=\"moneyForm.phoneNumber.errors.required\">\n                                        {{'Please enter phone number' | translate}}</div>\n                                    <div\n                                        *ngIf=\"!moneyForm.phoneNumber.errors.required && moneyForm.phoneNumber.invalid\">\n                                        {{'Please enter a valid phone number' | translate}}</div>\n                                        <div\n                                        *ngIf=\"settings?.cutom_country_code && moneyForm.countryCode.errors.required && moneyForm.countryCode.invalid\">\n                                        {{'Please select a country code' | translate}}</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"comment\">{{'Comment' | translate}}</label>\n                                <input class=\"form-control comment\" rows=\"5\" id=\"comment\" name=\"comment\"\n                                    placeholder=\"{{'Enter comment here' | translate }}\" formControlName=\"comment\"\n                                    maxlength=\"50\">\n                            </div>\n                            <button style=\"margin: 0px;\" class=\"btn wallet_btn\"\n                                (submit)=\"onSendMoney()\">{{'Send Money Now' | translate}}\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/notifications/notifications.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/notifications/notifications.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-left-right  mt-md-0 mt-4\" id=\"notification\">\n  <h1>{{'notifications' | localization | translate}}</h1>\n  <ng-container *ngIf=\"notificationList.length; else noNotification\">\n    <div class=\"notification_inner_box\"\n      *ngFor=\"let notification of notificationList;trackBy:trackByFn | paginate: { itemsPerPage: pagination.perPage, currentPage: pagination.currentPage, totalItems: pagination.count }\">\n      <ul>\n        <li class=\"active\">\n          <div class=\"user_notification cursor\" [routerLink]=\"['/orders/order-detail']\"\n            [queryParams]=\"{'orderId': notification.order_id}\">\n            <img class=\"notification_img\" [src]=\"notification?.logo\"\n              onError=\"src = './assets/images/placeholder_image.svg';\">\n            <h5>{{notification?.notification_message | translate}}</h5><br>\n            <span>{{notification?.created_on | date: 'medium'}}</span>\n            <!-- <img class=\"close-notification\" src=\"assets/images/cross_icon.png\"> -->\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"custom-pagination mt-5\" *ngIf=\"pagination.count > pagination.perPage\">\n      <pagination-controls responsive=\"true\" [style.color]=\"style.primaryColor\" previousLabel=\"Prev\" nextLabel=\"Next\"\n        (pageChange)=\"pageChange($event)\"></pagination-controls>\n    </div>\n  </ng-container>\n\n  <ng-template #noNotification>\n    <div class=\"no-data\">\n      <h4>{{'No Notification Found' | translate}}</h4>\n    </div>\n  </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/personal-information/personal-information.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/personal-information/personal-information.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-processing-indicator *ngIf=\"isLoading\"></app-processing-indicator>\n\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div id=\"personal_info\" class=\"profile-left-right\">\n      <h1 [style.color]=\"style.baseColor\">{{'Personal Information' | translate}}</h1>\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\n        <div class=\"profile-image d-flex align-items-center\">\n          <img [src]=\"user?.user_image ? user?.user_image : '/assets/images/placeholder-user.png'\"\n            onError=\"src = './assets/images/placeholder_logo.svg'\">\n          <input type=\"file\" formControlName=\"profilePic\" accept=\"image/*\" (change)=\"onImageSelect($event)\" #fileInput\n            style=\"display: none;\">\n          <p [style.color]=\"style.primaryColor\" (click)=\"fileInput.click()\" class=\"cursor\">\n            {{(user?.user_image ? 'Change Image' : 'Add Image') | translate}}</p>\n        </div>\n        <div class=\"profile_form\">\n          <div class=\"form-group\">\n            <label [style.color]=\"style.baseColor\">{{'Full Name' | translate}}</label>\n            <input type=\"text\" placeholder=\"{{'Full Name' | translate}}\" [pKeyFilter]=\"alphabetsOnly\"\n              (keydown.space)=\"!form.controls.name.value ? $event.preventDefault() : '' \" formControlName=\"name\">\n            <div class=\"text-error\"\n              *ngIf=\"(form.controls['name'].errors?.required || form.controls['name'].errors?.whitespace) && showError\">\n              {{'Please enter name' | translate}}</div>\n          </div>\n          <div class=\"form-group\" *ngIf=\"settings?.enable_id_for_invoice_in_profile == 1\">\n            <label [style.color]=\"style.baseColor\">{{'NUMBER FOR INVOICE' | translate}}</label>\n            <input type=\"text\" placeholder=\"{{'NUMBER FOR INVIOCE' | translate}}\" \n              (keydown.space)=\"!form.controls.id_for_invoice.value ? $event.preventDefault() : '' \"\n              formControlName=\"id_for_invoice\">\n            <div class=\"text-error\"\n              *ngIf=\"(form.controls['id_for_invoice'].errors?.required || form.controls['id_for_invoice'].errors?.whitespace) && showError\">\n              {{'Please enter Number For Invoice' | translate}}</div>\n          </div>\n          <div *ngIf=\"settings?.is_abn_business=='1'\">\n            <div class=\"form-group\">\n              <label [style.color]=\"style.baseColor\">{{'ABN Number' | translate}}</label>\n              <input type=\"text\" placeholder=\"{{'ABN Number' | translate}}\"\n                (keydown.space)=\"!form.controls.abn_number.value ? $event.preventDefault() : '' \"\n                formControlName=\"abn_number\">\n            </div>\n            <div class=\"form-group\">\n              <label [style.color]=\"style.baseColor\">{{'Business Name' | translate}}</label>\n              <input type=\"text\" placeholder=\"{{'Business Name' | translate}}\"\n                (keydown.space)=\"!form.controls.business_name.value ? $event.preventDefault() : '' \"\n                formControlName=\"business_name\">\n            </div>\n          </div>\n          <!-- <div class=\"form-group\">\n            <label>{{'Email' | translate}}</label>\n            <input type=\"email\" placeholder=\"{{'Email' | translate}}\" [ngModel]=\"user?.email\"\n              [ngModelOptions]=\"{standalone: true}\" readonly>\n          </div> -->\n          <!-- <button type=\"submit\" class=\"profile-submit-form\" href=\"javascript:void(0)\">Save</button> -->\n\n          <div class=\"login-submit\" style=\"width: 100px\">\n            <button [ngStyle]=\"primaryButton\" type=\"submit\" class=\"btn\">{{'Save' | translate}}</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/referrals/referrals.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/referrals/referrals.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"nav nav-tabs mb-5\" id=\"pills-tab\" role=\"tablist\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" id=\"pills-home-tab\" data-toggle=\"pill\" href=\"#pills-home\" role=\"tab\"\n            aria-controls=\"pills-home\" aria-selected=\"true\">Refer A Friend</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"pills-profile-tab\" data-toggle=\"pill\" href=\"#pills-profile\" role=\"tab\"\n            aria-controls=\"pills-profile\" aria-selected=\"false\">My Referral</a>\n    </li>\n</ul>\n\n\n<div class=\"tab-content\" id=\"pills-tabContent\">\n    <div class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\n        <div class=\"container\">\n            <div class=\"referral\">\n                <h1>Refer a Friend</h1>\n                <p>\n                    Refer a friend and get {{currency}} {{settings.referral_receive_price}} and your friend gets\n                    {{currency}} {{settings.referral_given_price}} after successful completion of his first\n                    {{'order' | localization}}.\n                </p>\n                <div>\n                    <button class=\"btn refer-now\" (click)=\"view_share_buttons = true;\">Refer Now</button>\n                    <input class=\"form-control\" readonly [value]=\"user.referral_id\" [id]=\"'referralInput'\">\n                    <button class=\"btn copy-text\" (click)=\"onCopy()\">Tap to Copy</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"tab-pane fade\" id=\"pills-profile\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\n        <div class=\"container\">\n            <div *ngIf=\"myReferralList && myReferralList.length\" class=\"table-responsive\">\n                <table class=\"table table-bordered table-hover\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">S.No.</th>\n                            <th scope=\"col\">User Image</th>\n                            <th scope=\"col\">Name</th>\n                            <th scope=\"col\">Email</th>\n                            <th scope=\"col\">Phone</th>\n                            <th scope=\"col\">Refer Points</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of myReferralList;trackBy:trackByFn; let i = index\">\n                            <td>{{i + 1}}</td>\n                            <td><img class=\"rounded-circle\" [height]=\"35\" [width]=\"35\"\n                                    [src]=\"item.image || '/assets/images/placeholder-user.png'\"></td>\n                            <td class=\"text-capitalize\">{{item?.firstname}} {{item?.lastname}}</td>\n                            <td>{{item?.email}}</td>\n                            <td>{{item?.mobile_no}}</td>\n                            <td>{{item?.receive_price}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div *ngIf=\"!myReferralList || !myReferralList.length\" class=\"noReferral\">\n                <h5>No Referral Found</h5>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<p-sidebar position=\"top\" [(visible)]=\"view_share_buttons\" [style]=\"{height:'7em'}\">\n    <div class=\"sharables\">\n        <share-buttons theme=\"material-dark\"  [include]=\"['facebook','twitter','linkedin','pinterest','whatsapp','email']\" showText=\"true\"\n        [description]=\"shareable.description\" [url]=\"shareable.link\" [size]=\"1\" [title]=\"'Referral Code'\"></share-buttons>\n    </div>\n</p-sidebar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/side-nav/side-nav.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/side-nav/side-nav.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-left-side\" style=\"position: relative;\"\n  [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n  <h6 [style.color]=\"style.baseColor\">{{'My Account' | translate}}</h6>\n  <div class=\"user-profile\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <ul class=\"left_profile_user d-flex align-items-center\">\n          <li class=\"user_icon\">\n            <img [src]=\"user?.user_image ? user?.user_image : '/assets/images/placeholder-user.png'\"\n              onError=\"src = './assets/images/placeholder_logo.svg'\">\n          </li>\n          <li>\n            <div class=\"profile-right\">\n              <h3 class=\"m-0\" [style.color]=\"style.baseColor\">{{user?.firstname}}</h3>\n              <small [style.color]=\"style.baseColor\"> {{user?.email}}</small><br>\n              <small [style.color]=\"style.baseColor\"> {{user?.mobile_no}}</small>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <ul>\n    <li routerLinkActive='active' [routerLink]=\"['/account/profile']\"><a href=\"javascript:void(0)\"\n        [style.color]=\"activeParentRoute === 'profile' ? style.primaryColor : style.baseColor\">{{'Personal Information'\n        | translate}}</a>\n    </li>\n    <li *ngIf=\"isMobile\" routerLinkActive='active' [routerLink]=\"['/orders/order-listing']\"><a\n        href=\"javascript:void(0)\">My\n        {{'orders' | translate | translate}}</a>\n    </li>\n    <li routerLinkActive='active' [routerLink]=\"['/account/notifications']\"><a\n        [style.color]=\"activeParentRoute === 'notifications' ? style.primaryColor : style.baseColor\"\n        href=\"javascript:void(0)\">{{'notifications' | localization | translate}}</a></li>\n    <li *ngIf=\"!isSocialLogedIn\" routerLinkActive='active' [routerLink]=\"['/account/change-password']\"><a\n        href=\"javascript:void(0)\"\n        [style.color]=\"activeParentRoute === 'change-password' ? style.primaryColor : style.baseColor\">{{'Change\n        Password' | translate}}</a>\n    </li>\n    <li routerLinkActive='active' [routerLink]=\"['/account/address']\"><a href=\"javascript:void(0)\"\n        [style.color]=\"activeParentRoute === 'address' ? style.primaryColor : style.baseColor\">{{'Manage Address' |\n        translate}}</a>\n    </li>\n    <li *ngIf=\"settings.referral_feature == 1\" routerLinkActive='active' [routerLink]=\"['/account/referrals']\"><a\n        href=\"javascript:void(0)\"\n        [style.color]=\"activeParentRoute === 'referrals' ? style.primaryColor : style.baseColor\">{{'Referrals' |\n        translate}}</a>\n    </li>\n    <li routerLinkActive='active' *ngIf=\"settings?.gift_card == 1\" [routerLink]=\"['/account/my-gift-cards']\"><a\n        href=\"javascript:void(0)\"\n        [style.color]=\"activeParentRoute === 'my-gift-cards' ? style.primaryColor : style.baseColor\">{{'My Gift Cards' |\n        translate}}</a>\n    </li>\n    <li *ngIf=\"settings?.is_user_subscription == 1\" routerLinkActive='active' [routerLink]=\"['/account/subscriptions']\">\n      <a href=\"javascript:void(0)\"\n        [style.color]=\"activeParentRoute === 'subscriptions' ? style.primaryColor : style.baseColor\">{{'my_subscription'\n        | localization}}</a>\n    </li>\n    <li *ngIf=\"settings.wallet_module == 1\" routerLinkActive='active' [routerLink]=\"['/account/my-wallet']\"><a\n        href=\"javascript:void(0)\"\n        [style.color]=\"activeParentRoute === 'my-wallet' ? style.primaryColor : style.baseColor\">{{'wallet' |\n        localization}}</a>\n    </li>\n    <li *ngIf=\"settings.is_loyality_enable == 1\" routerLinkActive='active' [routerLink]=\"['/account/loyalty']\"><a\n        href=\"javascript:void(0)\"\n        [style.color]=\"activeParentRoute === 'loyalty' ? style.primaryColor : style.baseColor\">{{'loyalty_points' |\n        localization}}</a>\n    </li>\n    <li *ngIf=\"settings.is_feedback_form_enabled == 1\" routerLinkActive='active' [routerLink]=\"['/account/feedback']\"><a\n        href=\"javascript:void(0)\"\n        [style.color]=\"activeParentRoute === 'feedback' ? style.primaryColor : style.baseColor\">{{'Feedback' |\n        translate}}</a>\n    </li>\n    <li routerLinkActive='active' *ngIf=\"settings?.is_table_booking == 1\" [routerLink]=\"['/account/table-bookings']\"><a\n        href=\"javascript:void(0)\">{{'Table Bookings' | translate}}</a></li>\n    <li *ngIf=\"isMobile && settings?.aboutUs\" routerLinkActive='active' [routerLink]=\"['/about']\"><a\n        href=\"javascript:void(0)\">{{'about_us' | localization | translate}}</a>\n    </li>\n    <li *ngIf=\"isMobile && settings?.termsAndConditions\" routerLinkActive='active'\n      [routerLink]=\"['/terms-and-conditions']\"><a href=\"javascript:void(0)\">{{'terms_and_conditions' | localization |\n        translate}}</a>\n    </li>\n    <li *ngIf=\"isMobile && settings?.privacyPolicy\" routerLinkActive='active' [routerLink]=\"['/privacy-policy']\">\n      <a href=\"javascript:void(0)\">{{'privacy_policy' | localization | translate}}</a>\n    </li>\n    <li *ngIf=\"isMobile && settings?.faqs\" routerLinkActive='active' [routerLink]=\"['/faq']\"><a\n        href=\"javascript:void(0)\">{{'faq' | localization | translate}}</a>\n    </li>\n    <li *ngIf=\"client_code === 'scrubble_0566'\" routerLinkActive='active'\n      [routerLink]=\"['/cleaning-services-in-hyderabad']\">\n      <a class=\"cursor\">Customize Your Requirement</a>\n    </li>\n    <li><a href=\"javascript:void(0)\" (click)=\"signOutConfirmation()\" [style.color]=\"style.baseColor\">{{'Sign out' |\n        translate}}</a></li>\n  </ul>\n\n  <div class=\"admin-chat\">\n    <app-chat *ngIf=\"userService.currentUserValue && settings?.admin_to_user_chat == 1\" [join_room]=\"true\"\n      [message_id]=\"userService.currentUserValue.message_id\" [btnText]=\"'Chat With Admin'\" [receiverType]=\"4\">\n    </app-chat>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/subscription-detail/subscription-detail.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/subscription-detail/subscription-detail.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"Subscriptions_Plan\">\n    <div class=\"container\">\n        <div class=\"Subscriptions_Plan\">\n\n            <div class=\"Subscriptions_Plan_heading\">\n                <h1>{{'Subscriptions Plans' | translate}}</h1>\n                <p>\n\n                </p>\n            </div>\n            <div class=\"Subscriptions_Plan_box\">\n                <div class=\"Subscriptions_Plan_img\">\n                    <img height=\"250\" width=\"250\" [src]=\"selectedSubscription?.image\" appImage [settings]=\"settings\"\n                        [url]=\"selectedSubscription?.image\" [size]=\"'255x120'\"\n                        onError=\"src = 'assets/images/ic_food.png';\">\n                    <h2>{{selectedSubscription?.title}}</h2>\n                    <p>{{selectedSubscription?.description}}</p>\n                    <!-- <a class=\"My_Subscription\" href=\"\">My Subscription</a> -->\n                </div>\n                <div class=\"Subscriptions_Plan_validation\">\n                    <div class=\"Subscriptions_Plan_validation_inner\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"Subscriptions_validation_heading bb-r\">\n                                    <div class=\"Subscriptions_val_inr\">\n                                        <span>Valid from</span>\n                                        <h4>{{selectedSubscription?.start_date | date: 'dd-MM-yyyy'}}</h4>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-md-6\">\n                                <div class=\"Subscriptions_validation_heading\">\n                                    <div class=\"Subscriptions_val_inr\">\n                                        <span>Valid to</span>\n                                        <h4>{{selectedSubscription?.end_date | date: 'dd-MM-yyyy'}}</h4>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"Subscriptions_validation_inner_plan\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <div class=\"Subscriptions_validation_heading2\">\n                                    <img src=\"assets/images/ic_drinks.png\">\n                                    <span>2 + 2 ON DRINKS </span>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"Subscriptions_validation_heading2\">\n                                    <ul>\n                                        <li *ngFor=\"let benefit of selectedSubscription?.benefits;trackBy:trackByFn\">\n                                            <svg width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\" version=\"1.1\"\n                                                xmlns=\"http://www.w3.org/2000/svg\"\n                                                xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                                                <!-- Generator: Sketch 63.1 (92452) - https://sketch.com -->\n                                                <title>check-mark</title>\n                                                <desc>Created with Sketch.</desc>\n                                                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\"\n                                                    fill-rule=\"evenodd\">\n                                                    <g id=\"subscription\" transform=\"translate(-875.000000, -952.000000)\"\n                                                        [attr.fill]=\"style.primaryColor\" fill-rule=\"nonzero\">\n                                                        <g id=\"check-mark-copy-2\"\n                                                            transform=\"translate(875.000000, 952.000000)\">\n                                                            <path\n                                                                d=\"M14.4204712,6.8269348 C14.725647,7.13211059 14.725647,7.62680055 14.4204712,7.93182375 L9.17938234,13.1730652 C8.87420656,13.4780884 8.37966918,13.4780884 8.0744934,13.1730652 L5.57952883,10.677948 C5.27435305,10.3729248 5.27435305,9.87823484 5.57952883,9.57321168 C5.88455199,9.2680359 6.37924195,9.2680359 6.68426516,9.57321168 L8.62686156,11.5158081 L13.3155823,6.8269348 C13.620758,6.52191164 14.115448,6.52191164 14.4204712,6.8269348 L14.4204712,6.8269348 Z M20,10 C20,15.5274963 15.5267334,20 10,20 C4.47250367,20 0,15.5267334 0,10 C0,4.47250367 4.4732666,0 10,0 C15.5274963,0 20,4.4732666 20,10 Z M18.4375,10 C18.4375,5.33615113 14.6632385,1.5625 10,1.5625 C5.33615113,1.5625 1.5625,5.33676148 1.5625,10 C1.5625,14.6638489 5.33676148,18.4375 10,18.4375 C14.6638489,18.4375 18.4375,14.6632385 18.4375,10 Z\"\n                                                                id=\"Shape\"></path>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </svg>\n                                            {{benefit?.title}}\n                                            <br />\n                                            <small class=\"ml-4\"\n                                                *ngIf=\"benefit?.benefit_id=== 'FD_1' && selectedSubscription?.min_order_amount>0\">\n                                                {{'Minimum Order Amt:'}}{{selectedSubscription?.min_order_amount}}\n                                            </small>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"Subscriptions_validation_heading2\">\n                                    <h4>\n                                        <span *ngIf=\"selectedSubscription?.type == '1'\">{{'Weekly' | translate}}</span>\n                                        <span *ngIf=\"selectedSubscription?.type == '2'\">{{'Monthly' | translate}}</span>\n                                        <span *ngIf=\"selectedSubscription?.type == '3'\">{{'Yearly' | translate}}</span>\n                                        Membership</h4>\n                                    <h1>{{currency}} {{selectedSubscription?.price}}</h1>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"renew-Subscription\">\n                        <a class=\"renew_btn\" (click)=\"buySubscription()\">{{'Renew' | translate}}\n                            {{'subscription' | localization | translate}}</a>\n                        <a class=\"cancle_renw_btn\" (click)=\"cancelSubscription()\">{{'Cancel' | translate}}\n                            {{'subscription' | localization | translate}}</a>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</section>\n\n<app-online-payment [settings]=\"settings\" [order]=\"paymentOrderModel\" *ngIf=\"isPayOnline\" (onError)=\"onPaymentError()\"\n    (onClose)=\"isPayOnline = $event\" (onSuccess)=\"onPaymentSuccess($event)\">\n</app-online-payment>\n\n<app-processing-indicator *ngIf=\"isLoading\"></app-processing-indicator>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/subscriptions/subscriptions.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/subscriptions/subscriptions.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-processing-indicator *ngIf=\"isLoading\"></app-processing-indicator>\n<section id=\"Subscriptions_Plan\">\n  <div class=\"container\">\n    <div class=\"Subscriptions_Plan\">\n\n      <!-- <div class=\"Subscriptions_Plan_heading\">\n                <h1>{{'Subscriptions Plans' | translate}}</h1>\n                <p>They are big, bold and beautiful. Billboards have been around for quite a while.\n                    In almost all places nowadays you can find billboards </p>\n            </div> -->\n      <div class=\"Subscriptions_Plan_box\">\n        <div class=\"Subscriptions_Plan_img\">\n          <img [src]=\"settings?.placeholder?.user_subscription_placeholder?.web || 'assets/images/ic_food.png'\">\n          <h2>Membership plans</h2>\n          <p></p>\n          <a class=\"My_Subscription\" *ngIf=\"is_subscribed\"\n            [routerLink]=\"['/', 'account', 'subscriptions', activeSubscription?.id]\">{{'my_subscription' | localization}}</a>\n        </div>\n        <div class=\"Subscriptions_Plan_outter\">\n          <div class=\"row\">\n            <div class=\"col-md-6\"\n              *ngFor=\"let subscription of subscriptions;trackBy:trackBySubFn | paginate: { itemsPerPage: pagination.perPage, currentPage: pagination.currentPage, totalItems: pagination.count }\">\n              <div class=\"Subscriptions_Plan_inner\">\n                <img height=\"66\" width=\"140\" [src]=\"subscription?.image\" appImage [url]=\"subscription?.image\" [settings]=\"settings\"\n                  [size]=\"'66x140'\" onError=\"src = 'assets/images/ic_food.png';\">\n                <p>{{subscription?.title}}</p>\n                <ul>\n                  <li *ngFor=\"let benefit of subscription.benefits;trackBy:trackByBenFn\">\n                    <svg width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n                      xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                      <title>check-mark</title>\n                      <desc>Created with Sketch.</desc>\n                      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                        <g id=\"subscription\" transform=\"translate(-875.000000, -952.000000)\"\n                          [attr.fill]=\"style.primaryColor\" fill-rule=\"nonzero\">\n                          <g id=\"check-mark-copy-2\" transform=\"translate(875.000000, 952.000000)\">\n                            <path\n                              d=\"M14.4204712,6.8269348 C14.725647,7.13211059 14.725647,7.62680055 14.4204712,7.93182375 L9.17938234,13.1730652 C8.87420656,13.4780884 8.37966918,13.4780884 8.0744934,13.1730652 L5.57952883,10.677948 C5.27435305,10.3729248 5.27435305,9.87823484 5.57952883,9.57321168 C5.88455199,9.2680359 6.37924195,9.2680359 6.68426516,9.57321168 L8.62686156,11.5158081 L13.3155823,6.8269348 C13.620758,6.52191164 14.115448,6.52191164 14.4204712,6.8269348 L14.4204712,6.8269348 Z M20,10 C20,15.5274963 15.5267334,20 10,20 C4.47250367,20 0,15.5267334 0,10 C0,4.47250367 4.4732666,0 10,0 C15.5274963,0 20,4.4732666 20,10 Z M18.4375,10 C18.4375,5.33615113 14.6632385,1.5625 10,1.5625 C5.33615113,1.5625 1.5625,5.33676148 1.5625,10 C1.5625,14.6638489 5.33676148,18.4375 10,18.4375 C14.6638489,18.4375 18.4375,14.6632385 18.4375,10 Z\"\n                              id=\"Shape\"></path>\n                          </g>\n                        </g>\n                      </g>\n                    </svg>\n                    {{benefit?.title}}<br/>\n                    <small class=\"ml-4\" *ngIf=\"benefit?.benefit_id=== 'FD_1' && subscription?.min_order_amount>0\">\n                      {{'Minimum Order Amt:'}}{{subscription?.min_order_amount}}\n                    </small>\n                  </li>\n                </ul>\n                <h4>\n                  <span *ngIf=\" subscription.type=='1'\">{{'Weekly' | translate}}</span>\n                  <span *ngIf=\" subscription.type=='2'\">{{'Monthly' | translate}}</span>\n                  <span *ngIf=\" subscription.type=='3'\">{{'Yearly' | translate}}</span>\n                  Membership</h4>\n                <div class=\" Subscriptions_price\">\n                  <!-- <span>500</span> -->\n                  <h1>{{currency}} {{subscription?.price}}</h1>\n                </div>\n                <button *ngIf=\"activeSubscription && subscription.is_subscribed==1 && is_subscribed\"\n                  (click)=\"viewSubsDetails()\" class=\"btn\">{{'Subscribed' | translate}}<i\n                    class=\"fa fa-check ml-2\"></i></button>\n                <button *ngIf=\"!activeSubscription && settings?.wallet_module == 0 && !is_subscribed\" class=\"btn\"\n                  (click)=\"buySubscription(subscription)\">{{'Buy Now' | translate}}</button>\n                <button *ngIf=\"!activeSubscription && settings?.wallet_module == 1  && !is_subscribed\" class=\"btn\"\n                  (click)=\"selectPaymentSource(subscription)\">{{'Buy Now' | translate}}</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"custom-pagination mt-5\" *ngIf=\"pagination.count > pagination.perPage\">\n      <pagination-controls responsive=\"true\" [style.color]=\"style.primaryColor\" previousLabel=\"Prev\" nextLabel=\"Next\"\n        (pageChange)=\"pageChange($event)\"></pagination-controls>\n    </div>\n  </div>\n</section>\n\n\n<app-online-payment [settings]=\"settings\" [order]=\"paymentOrderModel\" *ngIf=\"isPayOnline\" (onError)=\"onPaymentError()\" [subscriptionGateways]=\"subscriptionGateways\"\n  (onClose)=\"isPayOnline = $event\" (onSuccess)=\"onPaymentSuccess($event)\">\n</app-online-payment>\n\n\n\n<div class=\"modal fade\" id=\"paymentSelection\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Select Payment Option</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"></button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-check-inline\">\n            <label class=\"form-check-label\" for=\"radio1\">Online\n              <input type=\"radio\" class=\"form-check-input\" id=\"radio1\" name=\"refund\" [value]=\"1\"\n                [(ngModel)]=\"paymentSource\" [checked]=\"paymentSource == 1\"><span class=\"check-span\"></span>\n            </label>\n          </div>\n          <div class=\"form-check-inline\">\n            <label class=\"form-check-label\" for=\"radio2\">{{'Wallet' | translate}}\n              <input type=\"radio\" class=\"form-check-input\" id=\"radio2\" name=\"refund\" [value]=\"4\"\n                [(ngModel)]=\"paymentSource\" [checked]=\"paymentSource == 4\">\n              <span class=\"check-span\"></span>\n            </label>\n          </div>\n        </form>\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"proceedPayment()\">Submit</button>\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/table-bookings/table-bookings.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/table-bookings/table-bookings.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h2>Table Bookings</h2>\n    <p></p>\n    <div class=\"table-responsive\">\n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Branch Name</th>\n                    <th>Table Name</th>\n                    <th>Table Number</th>\n                    <th>Seating Capacity</th>\n                    <th>User Name</th>\n                    <th>User Email</th>\n                    <th>Booking Date</th>\n                    <th>Order</th>\n                    <th>Status</th>\n                    <th *ngIf=\"settings?.table_booking_add_food_allow == '1'\">Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let tb of tableBookings | \n                    paginate: { itemsPerPage: pagination.perPage, \n                        currentPage: pagination.currentPage, \n                        totalItems: pagination.count }; let i = index;trackBy:trackByFn;\">\n                    <td>{{(pagination.currentPage -1)*pagination.perPage + i + 1}}</td>\n                    <td>{{tb?.branch_name || 'N/A'}}</td>\n                    <td>{{tb?.table_name || 'N/A'}}</td>\n                    <td>{{tb?.table_number || 'N/A'}}</td>\n                    <td>{{tb?.seating_capacity || 'N/A'}}</td>\n                    <td>{{tb?.user_name || 'N/A'}}</td>\n                    <td>{{tb?.user_email || 'N/A'}}</td>\n                    <td>{{tb?.schedule_date | tableDateTime : 'DD MMM h:mm a' || 'N/A'}}</td>\n                    <td>\n                        <span class=\"share-tble\" *ngIf=\"tb.order_id && tb.order_id>0\" (click)=\"viewOrderDetail(tb)\">\n                            {{'View Details'}}\n                        </span>\n                        <span *ngIf=\"!tb.order_id || tb.order_id==0\">\n                            {{'N/A'}}\n                        </span>\n                    </td>\n                    <td>{{tableBookingStatus[tb?.status] || 'N/A'}}</td>\n                    <td *ngIf=\"settings?.is_table_invite_allowed == '1' || settings?.table_booking_add_food_allow == '1'\">\n                        <!-- <div class=\"dropdown\">\n                            <button type=\"button\" class=\"btn btn-default share-tble dropdown-toggle\"\n                                data-toggle=\"dropdown\">\n                                Actions\n                            </button>\n                            <div class=\"dropdown-menu\"> -->\n                                <!-- <a *ngIf=\"settings?.is_table_invite_allowed==='1'\" class=\"dropdown-item share-tble\"\n                                    (click)=\"shareTable(tb)\">Invite Friends</a> -->\n                                <a *ngIf=\"settings?.table_booking_add_food_allow == '1'\" class=\"dropdown-item share-tble\"\n                                    (click)=\"addFoodItemToTable(tb)\">Add Item</a>\n                            <!-- </div>\n                        </div> -->\n                    </td>\n                </tr>\n                <tr *ngIf=\"tableBookings.lenght==0\">{{'No Booking Found'}}</tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n\n\n\n<div class=\"custom-pagination mt-4\" *ngIf=\"pagination.count > pagination.perPage\">\n    <pagination-controls [style.color]=\"style.primaryColor\" previousLabel=\"Prev\" nextLabel=\"Next\"\n        (pageChange)=\"pageChange($event)\"></pagination-controls>\n</div>\n\n\n<p-sidebar position=\"top\" [(visible)]=\"view_share_buttons\" [style]=\"{height:'7em'}\">\n    <div class=\"sharables\">\n        <share-buttons theme=\"material-dark\" [include]=\"['facebook','twitter','linkedin','pinterest','whatsapp','email']\"\n            showText=\"true\" [description]=\"shareable.description\" [url]=\"shareable.link\" [size]=\"1\"\n            [title]=\"'Restaurants Table'\"></share-buttons>\n    </div>\n</p-sidebar>");

/***/ }),

/***/ "./src/app/layout/account/account.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/account/account.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/account/account.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/account/account.component.ts ***!
  \*****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/theme/styleVariables.model */ "./src/app/core/theme/styleVariables.model.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");




let AccountComponent = class AccountComponent {
    constructor(util) {
        this.util = util;
        this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_2__["StyleVariables"]();
    }
    ngOnInit() {
        this.styleSubscription = this.util.getStyles.subscribe(style => {
            this.style = style;
        });
    }
    ngOnDestroy() {
        this.styleSubscription.unsubscribe();
    }
};
AccountComponent.ctorParameters = () => [
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"] }
];
AccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/account.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./account.component.scss */ "./src/app/layout/account/account.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
], AccountComponent);



/***/ }),

/***/ "./src/app/layout/account/account.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/account/account.module.ts ***!
  \**************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.component */ "./src/app/layout/account/account.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/layout/account/notifications/notifications.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/layout/account/change-password/change-password.component.ts");
/* harmony import */ var _manage_address_manage_address_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage-address/manage-address.component */ "./src/app/layout/account/manage-address/manage-address.component.ts");
/* harmony import */ var _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./personal-information/personal-information.component */ "./src/app/layout/account/personal-information/personal-information.component.ts");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/layout/account/side-nav/side-nav.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./address/address.component */ "./src/app/layout/account/address/address.component.ts");
/* harmony import */ var _referrals_referrals_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./referrals/referrals.component */ "./src/app/layout/account/referrals/referrals.component.ts");
/* harmony import */ var _account_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./account.routing */ "./src/app/layout/account/account.routing.ts");
/* harmony import */ var _shared_layout_shared_layout_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/layout-shared/layout-shared.module */ "./src/app/layout/shared/layout-shared/layout-shared.module.ts");
/* harmony import */ var _my_gift_cards_my_gift_cards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./my-gift-cards/my-gift-cards.component */ "./src/app/layout/account/my-gift-cards/my-gift-cards.component.ts");
/* harmony import */ var _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./my-wallet/my-wallet.component */ "./src/app/layout/account/my-wallet/my-wallet.component.ts");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/__ivy_ngcc__/fesm2015/ngx-intl-tel-input.js");
/* harmony import */ var _shared_online_payment_online_payment_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/online-payment/online-payment.module */ "./src/app/layout/shared/online-payment/online-payment.module.ts");
/* harmony import */ var _subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./subscriptions/subscriptions.component */ "./src/app/layout/account/subscriptions/subscriptions.component.ts");
/* harmony import */ var _subscription_detail_subscription_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./subscription-detail/subscription-detail.component */ "./src/app/layout/account/subscription-detail/subscription-detail.component.ts");
/* harmony import */ var _loyalty_loyalty_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./loyalty/loyalty.component */ "./src/app/layout/account/loyalty/loyalty.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/layout/account/feedback/feedback.component.ts");
/* harmony import */ var _table_bookings_table_bookings_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./table-bookings/table-bookings.component */ "./src/app/layout/account/table-bookings/table-bookings.component.ts");
/* harmony import */ var ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-sharebuttons/buttons */ "./node_modules/ngx-sharebuttons/__ivy_ngcc__/fesm2015/ngx-sharebuttons-buttons.js");
/* harmony import */ var ngx_sharebuttons_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-sharebuttons/icons */ "./node_modules/ngx-sharebuttons/__ivy_ngcc__/fesm2015/ngx-sharebuttons-icons.js");




// import { ShareButtonsModule } from '@ngx-share/buttons';
// components








//routing













let AccountModule = class AccountModule {
};
AccountModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"],
            _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"],
            _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordComponent"],
            _manage_address_manage_address_component__WEBPACK_IMPORTED_MODULE_7__["ManageAddressComponent"],
            _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_8__["PersonalInformationComponent"],
            _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_9__["SideNavComponent"],
            _address_address_component__WEBPACK_IMPORTED_MODULE_10__["AddressComponent"],
            _referrals_referrals_component__WEBPACK_IMPORTED_MODULE_11__["ReferralsComponent"],
            _my_gift_cards_my_gift_cards_component__WEBPACK_IMPORTED_MODULE_14__["MyGiftCardsComponent"],
            _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_15__["MyWalletComponent"],
            _subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_18__["SubscriptionsComponent"],
            _subscription_detail_subscription_detail_component__WEBPACK_IMPORTED_MODULE_19__["SubscriptionDetailComponent"],
            _loyalty_loyalty_component__WEBPACK_IMPORTED_MODULE_20__["LoyaltyComponent"],
            _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_21__["FeedbackComponent"],
            _table_bookings_table_bookings_component__WEBPACK_IMPORTED_MODULE_22__["TableBookingsComponent"]
        ],
        imports: [
            _shared_layout_shared_layout_shared_module__WEBPACK_IMPORTED_MODULE_13__["LayoutSharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_23__["ShareButtonsModule"].withConfig({
                debug: true
            }),
            ngx_sharebuttons_icons__WEBPACK_IMPORTED_MODULE_24__["ShareIconsModule"],
            ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_16__["NgxIntlTelInputModule"],
            _shared_online_payment_online_payment_module__WEBPACK_IMPORTED_MODULE_17__["OnlinePaymentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_account_routing__WEBPACK_IMPORTED_MODULE_12__["AccountRoutes"])
        ]
    })
], AccountModule);



/***/ }),

/***/ "./src/app/layout/account/account.routing.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/account/account.routing.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutes", function() { return AccountRoutes; });
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/layout/account/feedback/feedback.component.ts");
/* harmony import */ var _loyalty_loyalty_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loyalty/loyalty.component */ "./src/app/layout/account/loyalty/loyalty.component.ts");
/* harmony import */ var _core_guards_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/guards/auth-guard/auth-guard.service */ "./src/app/core/guards/auth-guard/auth-guard.service.ts");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.component */ "./src/app/layout/account/account.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/layout/account/notifications/notifications.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/layout/account/change-password/change-password.component.ts");
/* harmony import */ var _manage_address_manage_address_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-address/manage-address.component */ "./src/app/layout/account/manage-address/manage-address.component.ts");
/* harmony import */ var _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./personal-information/personal-information.component */ "./src/app/layout/account/personal-information/personal-information.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./address/address.component */ "./src/app/layout/account/address/address.component.ts");
/* harmony import */ var _referrals_referrals_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./referrals/referrals.component */ "./src/app/layout/account/referrals/referrals.component.ts");
/* harmony import */ var _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-wallet/my-wallet.component */ "./src/app/layout/account/my-wallet/my-wallet.component.ts");
/* harmony import */ var _my_gift_cards_my_gift_cards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-gift-cards/my-gift-cards.component */ "./src/app/layout/account/my-gift-cards/my-gift-cards.component.ts");
/* harmony import */ var _subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subscriptions/subscriptions.component */ "./src/app/layout/account/subscriptions/subscriptions.component.ts");
/* harmony import */ var _subscription_detail_subscription_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subscription-detail/subscription-detail.component */ "./src/app/layout/account/subscription-detail/subscription-detail.component.ts");
/* harmony import */ var _table_bookings_table_bookings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./table-bookings/table-bookings.component */ "./src/app/layout/account/table-bookings/table-bookings.component.ts");


//guard

//components












const AccountRoutes = [
    {
        path: '',
        component: _account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"],
        canActivate: [_core_guards_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            {
                path: 'profile', component: _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_7__["PersonalInformationComponent"],
                data: { title: 'Personal Information', breadcrumb: 'Personal Information' },
            },
            {
                path: 'notifications', component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"],
                data: { title: 'Notifications', breadcrumb: 'Notifications' },
            },
            {
                path: 'change-password', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"],
                data: { title: 'Sale Report', breadcrumb: 'Sale Report' },
            },
            {
                path: 'referrals', component: _referrals_referrals_component__WEBPACK_IMPORTED_MODULE_9__["ReferralsComponent"],
                data: { title: 'Referrals', breadcrumb: 'Referrals' },
            },
            {
                path: 'my-gift-cards', component: _my_gift_cards_my_gift_cards_component__WEBPACK_IMPORTED_MODULE_11__["MyGiftCardsComponent"],
                data: { title: 'My Gift Cards', breadcrumb: 'My Gift Cards' },
            },
            {
                path: 'loyalty', component: _loyalty_loyalty_component__WEBPACK_IMPORTED_MODULE_1__["LoyaltyComponent"],
                data: { title: 'My Loyalty', breadcrumb: 'My Loyalty' },
            },
            {
                path: 'feedback', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_0__["FeedbackComponent"],
                data: { title: 'My Feedback', breadcrumb: 'My Feedback' },
            },
            {
                path: 'my-wallet', component: _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_10__["MyWalletComponent"],
                data: { title: 'My Wallet', breadcrumb: 'My Wallet' },
            },
            {
                path: 'table-bookings', component: _table_bookings_table_bookings_component__WEBPACK_IMPORTED_MODULE_14__["TableBookingsComponent"],
                data: { title: 'Table Bookings', breadcrumb: 'Table Bookings' },
            },
            {
                path: 'subscriptions',
                data: { title: 'Subscriptions', breadcrumb: 'Subscriptions' },
                children: [{
                        path: '', component: _subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_12__["SubscriptionsComponent"],
                    }, {
                        path: ':id', component: _subscription_detail_subscription_detail_component__WEBPACK_IMPORTED_MODULE_13__["SubscriptionDetailComponent"],
                        data: { title: 'Subscription Detail', breadcrumb: 'Subscription Detail' }
                    }]
            },
            {
                path: 'address',
                data: { title: 'Address', breadcrumb: 'Address' },
                children: [
                    {
                        path: '', component: _address_address_component__WEBPACK_IMPORTED_MODULE_8__["AddressComponent"],
                    },
                    {
                        path: 'add-edit-address', component: _manage_address_manage_address_component__WEBPACK_IMPORTED_MODULE_6__["ManageAddressComponent"],
                        data: { title: 'Add/Edit Address', breadcrumb: 'Add/Edit Address' }
                    },
                ]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/layout/account/address/address.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/account/address/address.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".default-address {\n  margin-top: 0px !important;\n}\n\nli {\n  list-style: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FjY291bnQvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQTBCO0FBQzlCOztBQUNBO0VBQ0ksZ0JBQWdCO0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FjY291bnQvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlZmF1bHQtYWRkcmVzcyB7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5saSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/layout/account/address/address.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/account/address/address.component.ts ***!
  \*************************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/messaging/messaging.service */ "./src/app/services/messaging/messaging.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









let AddressComponent = class AddressComponent {
    constructor(user, http, router, util, message, translate) {
        this.user = user;
        this.http = http;
        this.router = router;
        this.util = util;
        this.message = message;
        this.translate = translate;
        this.address = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.styleSubscription = this.util.getStyles.subscribe(style => {
            this.style = style;
        });
        this.makeSubscribe();
    }
    makeSubscribe() {
        this.getDataSubscribe = this.util.callGetData.
            subscribe((data) => {
            if (data) {
                if (this.user.getUserToken)
                    this.getAddress();
            }
        });
    }
    getAddress() {
        this.isLoading = true;
        let obj = {
            accessToken: this.user.getUserToken,
            languageId: this.util.handler.languageId,
            latitude: this.util.handler.latitude,
            longitude: this.util.handler.longitude
        };
        this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].address.getAddress, obj)
            .subscribe(response => {
            if (response.status === 200) {
                this.address = response.data.address;
            }
            this.isLoading = false;
        }, (err) => this.isLoading = false);
    }
    confirmDelete(address, i) {
        this.message.confirm(`${this.translate.instant('Delete This Address')}`).then(data => {
            if (data.value) {
                this.deleteAddress(address, i);
            }
        });
    }
    setDataInLocal(data) {
        this.util.setLocalData('locationData', data, true);
        this.router.navigate(['/account/address/add-edit-address'], { queryParams: { id: data.id } });
    }
    deleteAddress(data, i) {
        this.isLoading = true;
        let obj = {
            addressId: data.id,
            accessToken: this.user.getUserToken
        };
        this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].address.deleteAddress, obj)
            .subscribe(response => {
            this.isLoading = false;
            this.address.splice(i, 1);
            this.message.toast('success', `${this.translate.instant('Address Deleted Successfully')}!`);
        }, error => { this.isLoading = false; });
    }
    defaultAdress(addressId) {
        this.isLoading = true;
        this.http.putData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].address.setDefault, { id: addressId }).subscribe((response) => {
            if (response.status === 200) {
                this.message.toast('success', `${this.translate.instant('Address')} ${addressId ? this.translate.instant('Updated') : this.translate.instant('Added')} ${this.translate.instant('Successfully')}!`);
                this.getAddress();
            }
        }, (err) => this.isLoading = false);
    }
    trackByFn(id, index) {
        return index;
    }
    ngOnDestroy() {
        this.getDataSubscribe.unsubscribe();
        this.styleSubscription.unsubscribe();
    }
};
AddressComponent.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] },
    { type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_7__["MessagingService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }
];
AddressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-address',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./address.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/address/address.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./address.component.scss */ "./src/app/layout/account/address/address.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"],
        _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_7__["MessagingService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
], AddressComponent);



/***/ }),

/***/ "./src/app/layout/account/change-password/change-password.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/account/change-password/change-password.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hY2NvdW50L2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/account/change-password/change-password.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/account/change-password/change-password.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/messaging/messaging.service */ "./src/app/services/messaging/messaging.service.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(fb, http, message, util, userService, translate) {
        this.fb = fb;
        this.http = http;
        this.message = message;
        this.util = util;
        this.userService = userService;
        this.translate = translate;
        this.showError = false;
        this.btnDisabled = false;
        this.id = '';
        this.isLoading = false;
    }
    ngOnInit() {
        this.styleSubscription = this.util.getStyles.subscribe(style => {
            this.style = style;
        });
        this.makeForm();
    }
    makeForm() {
        this.form = this.fb.group({
            'oldPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            'newPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)])],
            'languageId': [this.util.handler.languageId],
            'accessToken': [this.userService.getUserToken],
            'confirmPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    }
    onSubmit(value) {
        this.showError = true;
        if (this.form.valid) {
            if (value.newPassword == value.confirmPassword) {
                this.isLoading = true;
                this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].auth.changePassword, value)
                    .subscribe(response => {
                    this.isLoading = false;
                    if (!!response && response.data) {
                        this.message.toast('success', `${this.translate.instant('Password Changed Successfully')}!`);
                        this.form.reset();
                        this.showError = false;
                    }
                }, error => { this.isLoading = false; });
            }
            else {
                this.message.toast('info', this.translate.instant('New Password And Confirm Password Not Matched'));
            }
        }
    }
    ngOnDestroy() {
        this.styleSubscription.unsubscribe();
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
];
ChangePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/change-password/change-password.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./change-password.component.scss */ "./src/app/layout/account/change-password/change-password.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"], _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/layout/account/feedback/feedback.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/account/feedback/feedback.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile_form textarea {\n  width: 352px;\n  border-radius: 20px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  padding: 10px 20px;\n  color: #515151;\n  font-size: 16px;\n  outline: 0;\n  margin-bottom: 0px;\n}\n\n.suggestion {\n  list-style: none;\n  padding-left: 0px;\n}\n\n.suggestion li {\n  border: 1px solid var(--primaryColor);\n  padding: 10px;\n  border-radius: 20px;\n  margin-bottom: 10px;\n  color: 1px solid var(--primaryColor);\n}\n\n.cust {\n  margin-left: 15px;\n  margin-right: 30px;\n  position: relative;\n}\n\n.cust h2 {\n  color: #484848;\n  font-size: 20px;\n  font-weight: bold;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 21px;\n}\n\n.cust form .form-group h3 {\n  color: #484848;\n  font-size: 16px;\n  font-weight: bold;\n  display: inline-block;\n}\n\n.cust form .form-group.rad input,\n.cust form .form-group.check input {\n  display: none;\n}\n\n.cust form .form-group label {\n  color: #484848;\n  font-size: 12px;\n  display: -webkit-flex;\n  margin-top: 15px;\n  padding-left: 0px;\n  font-weight: 600;\n}\n\n.cust form .form-group.check span,\n.cust form .form-group.rad span {\n  cursor: pointer;\n  height: 18px;\n  width: 18px;\n  border: 1px solid #333333;\n  position: relative;\n  margin-right: 9px;\n  display: inline-block;\n  top: 4px;\n}\n\n.cust form .form-group.rad span {\n  border-radius: 100%;\n}\n\n.cust form .form-group strong {\n  color: #484848;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.check h6 {\n  margin-top: 5px;\n}\n\n.cust form .form-group .selector {\n  color: #484848;\n  font-size: 12px;\n  display: flex;\n  font-weight: 600;\n  margin-left: 10px;\n}\n\n.selector button {\n  background: white;\n  border: white;\n  border-radius: 50%;\n}\n\n.selector button i {\n  color: var(--primaryColor);\n  border: 1px solid;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.cust form .form-group.rad label input[type=\"radio\"]:checked + span:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background-color: #333333;\n  border-radius: 100%;\n  height: 8px;\n  width: 8px;\n  top: 4px;\n}\n\n.cust form .form-group.check span {\n  border-radius: 2px;\n}\n\n.cust form .form-group.check label input[type=\"checkbox\"]:checked + span {\n  background-image: url('ic_tick_white.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 16px;\n  background-color: #333333;\n}\n\n.customize-item {\n  display: flex;\n}\n\n.customize-item h3 {\n  width: 50%;\n}\n\n.customize-item div.price-div {\n  text-align: right;\n  flex: 1;\n  width: 50%;\n}\n\n.cust .btm {\n  padding: 14px 15px 10px 15px;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  background-color: #fff;\n}\n\n.cust .btm h4 {\n  color: #484848;\n  display: inline-block;\n  font-size: 24px;\n  margin-right: 5px;\n}\n\n.cust .btns {\n  float: right;\n}\n\n.cust .btm button {\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: bold;\n  height: 40px;\n  border-radius: 4px;\n  background-color: #809BA5;\n  border: none;\n  padding: 0px 20px;\n}\n\np.selector strong {\n  margin-left: 0px !important;\n}\n\n.cust .btm button:last-child {\n  margin-left: 15px;\n}\n\n.cust form .addonnscroll {\n  height: 300px;\n  overflow: auto;\n  padding-bottom: 64px;\n}\n\n.cust form .input-group {\n  width: 83px;\n  float: right;\n}\n\n.cust form p {\n  color: #484848;\n  font-size: 11px;\n}\n\n.customizeButton {\n  display: flex;\n  justify-content: center;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.max-option {\n  font-size: 14px !important;\n  opacity: 0.6;\n  color: --baseColor !important;\n}\n\n.check h6 {\n  margin-top: 5px;\n}\n\n.cust form .form-group .selector {\n  color: #484848;\n  font-size: 12px;\n  display: block;\n  margin-top: 20px;\n  font-weight: 600;\n}\n\n.selector button {\n  background: white;\n  border: white;\n  border-radius: 50%;\n}\n\n.selector button i {\n  color: var(--primaryColor);\n  border: 1px solid;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.sugg-bx {\n  border: 1px solid #0000004a;\n  border-radius: 10px;\n  padding: 5px 20px 15px;\n  max-height: 250px;\n  overflow: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FjY291bnQvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDckI7O0FBSEE7RUFLUSxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0NBQW9DO0FBRTVDOztBQWVFO0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFidEI7O0FBZ0JFO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMkNBQTJDO0VBQzNDLGFBQWE7QUFiakI7O0FBZ0JFO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0FBYnpCOztBQWdCRTs7RUFFRSxhQUFhO0FBYmpCOztBQWdCRTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBYnBCOztBQWdCRTs7RUFFRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsUUFBUTtBQWJaOztBQWdCRTtFQUNFLG1CQUFtQjtBQWJ2Qjs7QUFnQkU7RUFDRSxjQUFjO0VBRWQsZUFBZTtFQUNmLGdCQUFnQjtBQWRwQjs7QUFpQkU7RUFDRSxlQUFlO0FBZG5COztBQWlCRTtFQUNFLGNBQWM7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFkdkI7O0FBaUJFO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7QUFkdEI7O0FBZ0JFO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQWJuQjs7QUFnQkU7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFVBQVU7RUFDVixRQUFRO0FBYlo7O0FBZ0JFO0VBQ0Usa0JBQWtCO0FBYnRCOztBQWdCRTtFQUNFLDBDQUFvRTtFQUNwRSw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFiN0I7O0FBZ0JFO0VBQ0UsYUFBYTtBQWJqQjs7QUFnQkU7RUFDRSxVQUFVO0FBYmQ7O0FBZ0JFO0VBQ0UsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxVQUFVO0FBYmQ7O0FBbUJFO0VBQ0UsNEJBQTRCO0VBQzVCLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxVQUFVO0VBQ1YsV0FBVztFQUNYLHNCQUFzQjtBQWhCMUI7O0FBbUJFO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0FBaEJyQjs7QUFtQkU7RUFDRSxZQUFZO0FBaEJoQjs7QUFtQkU7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0FBaEJyQjs7QUFrQkU7RUFDRSwyQkFBMkI7QUFmL0I7O0FBaUJFO0VBQ0UsaUJBQWlCO0FBZHJCOztBQWlCRTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsb0JBQW9CO0FBZHhCOztBQWtCRTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBZmhCOztBQWtCRTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBZm5COztBQWtCRTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFmM0I7O0FBa0JFO0VBQ0UsMEJBQTBCO0FBZjlCOztBQWtCRTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osNkJBQStCO0FBZm5DOztBQWlCRTtFQUNFLGVBQWU7QUFkbkI7O0FBZ0JFO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQWJwQjs7QUFlRTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0FBWnRCOztBQWNFO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQVhuQjs7QUFlRTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixjQUFjO0FBWmxCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FjY291bnQvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZV9mb3JtIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAzNTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGNvbG9yOiAjNTE1MTUxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLnN1Z2dlc3Rpb24ge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeUNvbG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBcclxuICAuY3VzdCB7XHJcbiAgXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3QgaDIge1xyXG4gICAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBwYWRkaW5nOiAyMXB4O1xyXG4gIH1cclxuICBcclxuICAuY3VzdCBmb3JtIC5mb3JtLWdyb3VwIGgzIHtcclxuICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0IGZvcm0gLmZvcm0tZ3JvdXAucmFkIGlucHV0LFxyXG4gIC5jdXN0IGZvcm0gLmZvcm0tZ3JvdXAuY2hlY2sgaW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3QgZm9ybSAuZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzQ4NDg0ODtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0IGZvcm0gLmZvcm0tZ3JvdXAuY2hlY2sgc3BhbixcclxuICAuY3VzdCBmb3JtIC5mb3JtLWdyb3VwLnJhZCBzcGFuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogOXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0IGZvcm0gLmZvcm0tZ3JvdXAucmFkIHNwYW4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3QgZm9ybSAuZm9ybS1ncm91cCBzdHJvbmcge1xyXG4gICAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgICAvLyBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBcclxuICAuY2hlY2sgaDYge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICBcclxuICAuY3VzdCBmb3JtIC5mb3JtLWdyb3VwIC5zZWxlY3RvciB7XHJcbiAgICBjb2xvcjogIzQ4NDg0ODtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNlbGVjdG9yIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5zZWxlY3RvciBidXR0b24gaXtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0IGZvcm0gLmZvcm0tZ3JvdXAucmFkIGxhYmVsIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK3NwYW46YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICB0b3A6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3QgZm9ybSAuZm9ybS1ncm91cC5jaGVjayBzcGFuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3QgZm9ybSAuZm9ybS1ncm91cC5jaGVjayBsYWJlbCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCtzcGFuIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNfdGlja193aGl0ZS5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9taXplLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbWl6ZS1pdGVtIGgzIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b21pemUtaXRlbSBkaXYucHJpY2UtZGl2IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZmxleDogMTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8vIC5hZGRvbm5zY3JvbGwge31cclxuICBcclxuICAuY3VzdCAuYnRtIHtcclxuICAgIHBhZGRpbmc6IDE0cHggMTVweCAxMHB4IDE1cHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0IC5idG0gaDQge1xyXG4gICAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3QgLmJ0bnMge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAuY3VzdCAuYnRtIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwOUJBNTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gIH1cclxuICBwLnNlbGVjdG9yIHN0cm9uZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jdXN0IC5idG0gYnV0dG9uOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0IGZvcm0gLmFkZG9ubnNjcm9sbCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjRweDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmN1c3QgZm9ybSAuaW5wdXQtZ3JvdXAge1xyXG4gICAgd2lkdGg6IDgzcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0IGZvcm0gcCB7XHJcbiAgICBjb2xvcjogIzQ4NDg0ODtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbWl6ZUJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXBpdGFsaXplIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuICBcclxuICAubWF4LW9wdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIGNvbG9yOiAoLS1iYXNlQ29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jaGVjayBoNiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIC5jdXN0IGZvcm0gLmZvcm0tZ3JvdXAgLnNlbGVjdG9yIHtcclxuICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgLnNlbGVjdG9yIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5zZWxlY3RvciBidXR0b24gaXtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAuc3VnZy1ieCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwNGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHggMTVweDtcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/account/feedback/feedback.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/account/feedback/feedback.component.ts ***!
  \***************************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/messaging/messaging.service */ "./src/app/services/messaging/messaging.service.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/apiUrl */ "./src/app/core/apiUrl.ts");








let FeedbackComponent = class FeedbackComponent {
    constructor(fb, http, message, util, userService) {
        this.fb = fb;
        this.http = http;
        this.message = message;
        this.util = util;
        this.userService = userService;
        this.showError = false;
        this.suggestions = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.styleSubscription = this.util.getStyles.subscribe(style => {
            this.style = style;
        });
        this.makeForm();
        this.getSuggestions();
    }
    getSuggestions() {
        let params = {
            offset: 0,
            limit: 100
        };
        this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_7__["ApiUrl"].getSuggestions, params)
            .subscribe(response => {
            if (!!response && response.data) {
                this.suggestions = response.data.data;
                this.suggestions.forEach(el => {
                    el['checked'] = false;
                });
            }
        });
    }
    selectSuggestion(suggestion) {
        suggestion['checked'] = !suggestion['checked'];
    }
    makeForm() {
        this.form = this.fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            'phone': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)])],
            'description': [''],
            'new_suggestions': [''],
            'email_id': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email])],
        });
    }
    onSubmit(value) {
        this.showError = true;
        if (this.form.valid) {
            this.isLoading = true;
            let selectedSuggestions = [];
            this.suggestions.forEach(el => {
                if (el.checked) {
                    selectedSuggestions.push(el.name);
                }
            });
            this.suggestions;
            let formData = {
                name: value.name,
                phone: value.phone,
                description: value.description,
                new_suggestions: value.new_suggestions,
                email_id: value.email_id,
                suggestions_assigned: selectedSuggestions.length ? selectedSuggestions.join(',') : '',
                from_user_id: this.userService.currentUserValue.id,
                from_user_type: 'USER'
            };
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_7__["ApiUrl"].submitFeedback, formData)
                .subscribe(response => {
                this.isLoading = false;
                if (!!response && response.data) {
                    this.message.toast('success', `Feedback Submitted`);
                    this.form.reset();
                    this.suggestions.forEach(el => {
                        el['checked'] = false;
                    });
                    this.showError = false;
                }
            }, error => { this.isLoading = false; });
        }
    }
    ngOnDestroy() {
        this.styleSubscription.unsubscribe();
    }
};
FeedbackComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_3__["MessagingService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
];
FeedbackComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-feedback',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/feedback/feedback.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./feedback.component.scss */ "./src/app/layout/account/feedback/feedback.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_3__["MessagingService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
], FeedbackComponent);



/***/ }),

/***/ "./src/app/layout/account/loyalty/loyalty.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/account/loyalty/loyalty.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loyalty {\n  padding: 40px 0px;\n  border: 1px solid var(--secondaryColor);\n  border-radius: 4px;\n}\n\n.loyalty .loyalty_heading {\n  text-align: center;\n  width: 500px;\n  margin: 0 auto 40px;\n  max-width: 100%;\n}\n\n.loyalty .loyalty_heading h1 {\n  font-size: 25px;\n  color: #4b5061;\n  color: #4e4b65;\n  font-size: 30px;\n}\n\n.loyalty .loyalty-inner {\n  background-color: #f1f4f5;\n  padding: 40px 50px 25px;\n  border-radius: 10px;\n  margin: 0px 30px;\n  text-align: center;\n}\n\n.loyalty .loyalty-inner .no-loyalty h6 {\n  font-size: 18px;\n  color: var(--baseColor);\n  opacity: 0.8;\n}\n\n.loyalty .loyalty-inner .name {\n  font-weight: 600;\n  font-size: 28px;\n  text-align: center;\n  color: #4e4b65;\n}\n\n.loyalty .loyalty-inner .loyalty-image {\n  height: 210px;\n  margin: 0px 200px;\n}\n\n.loyalty .loyalty-inner .loyalty-image img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n}\n\n.loyalty .loyalty-inner .points {\n  font-weight: 600;\n  font-size: 40px;\n  text-align: center;\n  margin-top: 30px;\n  color: #4e4b65;\n  margin-bottom: 0px;\n}\n\n.loyalty .loyalty-inner p,\n.loyalty .loyalty-inner .description {\n  text-align: center;\n  font-weight: 600;\n  color: #4e4b6585;\n}\n\n.loyalty .loyalty-middle {\n  text-align: center;\n  padding: 40px;\n  border-bottom: 1px solid #00000014;\n}\n\n.loyalty .loyalty-middle .next {\n  padding: 10px 15px;\n}\n\n.loyalty .loyalty-middle .next .nxt-img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n}\n\n.loyalty .loyalty-middle .next h5 {\n  margin-top: 10px;\n}\n\n.loyalty .loyalty-middle .invite-btn {\n  width: 220px;\n  height: 50px;\n  border-radius: 8px;\n  border: 1px solid var(--primaryColor);\n  background-color: var(--primaryColor);\n  color: #ffffff;\n}\n\n.loyalty .loyalty-middle p {\n  margin-top: 30px;\n  font-weight: 600;\n  font-size: 18px;\n  color: #4e4b65;\n}\n\n.loyalty .loyalty-bottom {\n  margin-top: 20px;\n  padding: 10px 35px;\n}\n\n.loyalty .loyalty-bottom .loyalty-list {\n  margin-top: 30px;\n  list-style: none;\n  padding-left: 0px;\n}\n\n.loyalty .loyalty-bottom .loyalty-list li {\n  background-color: #f1f4f5;\n  border-radius: 10px;\n  padding: 20px 25px 5px;\n  margin-bottom: 15px;\n}\n\n.loyalty .loyalty-bottom .loyalty-list li h6 {\n  font-size: 14px;\n  color: #4e4b65;\n  font-weight: 600;\n}\n\n.loyalty .loyalty-bottom .loyalty-list li p {\n  font-size: 14px;\n}\n\n.loyalty .loyalty-bottom h3 {\n  font-size: 20px;\n  color: #4e4b65;\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FjY291bnQvbG95YWx0eS9sb3lhbHR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLHVDQUF1QztFQUN2QyxrQkFBa0I7QUFDdEI7O0FBSkE7RUFNUSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0FBRXZCOztBQVhBO0VBWVksZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtBQUczQjs7QUFsQkE7RUFvQlEseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUUxQjs7QUExQkE7RUE0QmdCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtBQUU1Qjs7QUFoQ0E7RUFtQ1ksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztBQUMxQjs7QUF2Q0E7RUEwQ1ksYUFBYTtFQUNiLGlCQUFpQjtBQUM3Qjs7QUE1Q0E7RUE4Q2dCLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFFbkM7O0FBbkRBO0VBc0RZLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQzlCOztBQTVEQTs7RUFnRVksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDNUI7O0FBbkVBO0VBdUVRLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0NBQWtDO0FBQTFDOztBQXpFQTtFQTRFWSxrQkFBa0I7QUFDOUI7O0FBN0VBO0VBK0VnQixZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBRWxDOztBQXBGQTtFQXNGZ0IsZ0JBQWdCO0FBRWhDOztBQXhGQTtFQTJGWSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMscUNBQXFDO0VBQ3JDLGNBQWM7QUFDMUI7O0FBakdBO0VBb0dZLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7QUFDMUI7O0FBeEdBO0VBNEdRLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFBMUI7O0FBN0dBO0VBZ0hZLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQzdCOztBQW5IQTtFQXFIZ0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBRW5DOztBQTFIQTtFQTJIb0IsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFHcEM7O0FBaElBO0VBaUlvQixlQUFlO0FBR25DOztBQXBJQTtFQXVJWSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hY2NvdW50L2xveWFsdHkvbG95YWx0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb3lhbHR5IHtcclxuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgIC5sb3lhbHR5X2hlYWRpbmcge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzRiNTA2MTtcclxuICAgICAgICAgICAgY29sb3I6ICM0ZTRiNjU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxveWFsdHktaW5uZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY0ZjU7XHJcbiAgICAgICAgcGFkZGluZzogNDBweCA1MHB4IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW46IDBweCAzMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLm5vLWxveWFsdHkge1xyXG4gICAgICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmFzZUNvbG9yKTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICM0ZTRiNjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG95YWx0eS1pbWFnZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDIwMHB4O1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9pbnRzIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNGU0YjY1O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwLFxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgY29sb3I6ICM0ZTRiNjU4NTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxveWFsdHktbWlkZGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDE0O1xyXG5cclxuICAgICAgICAubmV4dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuXHJcbiAgICAgICAgICAgIC5ueHQtaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnZpdGUtYnRuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeUNvbG9yKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzRlNGI2NTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxveWFsdHktYm90dG9tIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzVweDtcclxuXHJcbiAgICAgICAgLmxveWFsdHktbGlzdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjRmNTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDI1cHggNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNGU0YjY1O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM0ZTRiNjU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/layout/account/loyalty/loyalty.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/account/loyalty/loyalty.component.ts ***!
  \*************************************************************/
/*! exports provided: LoyaltyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyComponent", function() { return LoyaltyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var src_app_shared_models_apiKeys_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/apiKeys.model */ "./src/app/shared/models/apiKeys.model.ts");







let LoyaltyComponent = class LoyaltyComponent {
    constructor(http, util) {
        this.http = http;
        this.util = util;
        this.loyaltyData = {};
        this.activity = [];
        this.nextLoyaltyLevel = [];
        this.currency = _core_global__WEBPACK_IMPORTED_MODULE_5__["GlobalVariable"].CURRENCY;
        this.selected_currency = new src_app_shared_models_apiKeys_model__WEBPACK_IMPORTED_MODULE_6__["Currency"]();
    }
    ngOnInit() {
        this.util.getSettings.subscribe((settings) => {
            this.settings = settings;
        });
        this.getLoyalty();
        if (this.settings.is_multicurrency_enable) {
            this.getCurrency();
        }
    }
    getLoyalty() {
        this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_4__["ApiUrl"].loyalty.get, {})
            .subscribe(response => {
            if (!!response && response.data && response.data.loyalityLevel.length) {
                let loyaltyData = response.data.loyalityLevel[0];
                this.loyaltyData = Object.assign({}, loyaltyData);
                this.loyaltyData['leftPointAmount'] = response.data.leftPointAmount;
                this.loyaltyData['totalEarningPoint'] = response.data.totalEarningPoint;
                this.loyaltyData['totalPointAmountEarned'] = response.data.totalPointAmountEarned;
                this.activity = response.data.earnedData;
                this.nextLoyaltyLevel = (response.data.nextLoyalityLevel).sort((a, b) => {
                    if (a.total_loyality_points < b.total_loyality_points) {
                        return -1;
                    }
                    else if (a.total_loyality_points > b.total_loyality_points) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
            }
        });
    }
    getCurrency() {
        this.utilSubscription = this.util.getSelectedCurrency.subscribe((res) => {
            if (res) {
                this.selected_currency = res;
                this.currency = this.selected_currency.currency_name;
            }
        });
    }
    ngOnDestroy() {
        if (this.utilSubscription) {
            this.utilSubscription.unsubscribe();
        }
    }
};
LoyaltyComponent.ctorParameters = () => [
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"] }
];
LoyaltyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loyalty',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./loyalty.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/loyalty/loyalty.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./loyalty.component.scss */ "./src/app/layout/account/loyalty/loyalty.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
        src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]])
], LoyaltyComponent);



/***/ }),

/***/ "./src/app/layout/account/manage-address/manage-address.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/account/manage-address/manage-address.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".address-path {\n  font-size: 12px;\n  margin-bottom: 20px;\n}\n\n.signup-phone select {\n  height: 40px !important;\n  padding: 0 !important;\n  border-color: #ccc !important;\n  border-radius: 5px !important;\n}\n\ninput {\n  background: #fff !important;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.02);\n  border-radius: 5px;\n  margin-bottom: 25px;\n  border: 1px solid #dddddd75;\n  font-size: 14px;\n  height: 40px !important;\n  padding: 10px 20px !important;\n}\n\n/* Country Dropdown Box */\n\n.country_dropbox.home-page-search-restorent.dropdown a.dropdown-toggle {\n  font-size: 16px;\n  color: #2b2d32;\n  font-weight: 400;\n  border: 1px solid #dddddd75;\n  border-radius: 10px;\n  padding: 10px 5px;\n  margin-right: 5px;\n}\n\n.country_dropbox.home-page-search-restorent.dropdown {\n  padding: 0;\n  border: none;\n  margin: 9px 0 0 0;\n}\n\n.country_dropbox.home-page-search-restorent.dropdown img {\n  width: 10px;\n  margin-left: 5px;\n}\n\n.country_dropbox.home-page-search-restorent.dropdown ul {\n  left: 3px !important;\n  top: 0px !important;\n  min-width: 10.7rem !important;\n  width: 300px;\n  max-width: 20rem;\n}\n\n.country_dropbox.dropdown-toggle::after {\n  border: none !important;\n  border-right: 1px solid #dddddd75 !important;\n}\n\n.country_dropbox .country_text p {\n  width: 25%;\n  display: -webkit-inline-box;\n  margin-bottom: 0;\n}\n\n.country_dropbox .country_text img {\n  width: 20px !important;\n  margin-right: 9px;\n}\n\n.country_dropbox .country_flag {\n  width: 22px !important;\n  margin-right: 10px;\n}\n\n/* ************************************ */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FjY291bnQvbWFuYWdlLWFkZHJlc3MvbWFuYWdlLWFkZHJlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsMkJBQTBCO0VBQzFCLDJDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtBQUUvQjs7QUFDQSx5QkFBQTs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSx1QkFBc0I7RUFDdEIsNENBQTRDO0FBRTlDOztBQUNBO0VBQ0UsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFFbEI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBRW5COztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUVwQjs7QUFBQSx5Q0FBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hY2NvdW50L21hbmFnZS1hZGRyZXNzL21hbmFnZS1hZGRyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZHJlc3MtcGF0aCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNpZ251cC1waG9uZSBzZWxlY3Qge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNjY2MgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG59XG5pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmZmYhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIC4wMik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDc1O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4IDIwcHggIWltcG9ydGFudDtcbn1cblxuLyogQ291bnRyeSBEcm9wZG93biBCb3ggKi9cblxuLmNvdW50cnlfZHJvcGJveC5ob21lLXBhZ2Utc2VhcmNoLXJlc3RvcmVudC5kcm9wZG93biBhLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyYjJkMzI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ3NTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY291bnRyeV9kcm9wYm94LmhvbWUtcGFnZS1zZWFyY2gtcmVzdG9yZW50LmRyb3Bkb3duIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDlweCAwIDAgMDtcbn1cblxuLmNvdW50cnlfZHJvcGJveC5ob21lLXBhZ2Utc2VhcmNoLXJlc3RvcmVudC5kcm9wZG93biBpbWcge1xuICB3aWR0aDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmNvdW50cnlfZHJvcGJveC5ob21lLXBhZ2Utc2VhcmNoLXJlc3RvcmVudC5kcm9wZG93biB1bCB7XG4gIGxlZnQ6IDNweCAhaW1wb3J0YW50O1xuICB0b3A6IDBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwLjdyZW0gIWltcG9ydGFudDtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDIwcmVtO1xufVxuLmNvdW50cnlfZHJvcGJveC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZGRkZDc1ICFpbXBvcnRhbnQ7XG59XG5cbi5jb3VudHJ5X2Ryb3Bib3ggLmNvdW50cnlfdGV4dCBwIHtcbiAgd2lkdGg6IDI1JTtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY291bnRyeV9kcm9wYm94IC5jb3VudHJ5X3RleHQgaW1nIHtcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XG59XG5cbi5jb3VudHJ5X2Ryb3Bib3ggLmNvdW50cnlfZmxhZyB7XG4gIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/layout/account/manage-address/manage-address.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/account/manage-address/manage-address.component.ts ***!
  \***************************************************************************/
/*! exports provided: ManageAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAddressComponent", function() { return ManageAddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/theme/styleConstants.model */ "./src/app/core/theme/styleConstants.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../services/messaging/messaging.service */ "./src/app/services/messaging/messaging.service.ts");
/* harmony import */ var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../core/theme/styleVariables.model */ "./src/app/core/theme/styleVariables.model.ts");
/* harmony import */ var _services_validation_validation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../services/validation/validation.service */ "./src/app/services/validation/validation.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/__ivy_ngcc__/fesm2015/ngx-intl-tel-input.js");














let ManageAddressComponent = class ManageAddressComponent {
    constructor(route, fb, user, http, message, util, validator, translate) {
        this.route = route;
        this.fb = fb;
        this.user = user;
        this.http = http;
        this.message = message;
        this.util = util;
        this.validator = validator;
        this.translate = translate;
        this.addEdit = 'Add New';
        this.showError = false;
        this.btnDisabled = false;
        this.id = '';
        this.location = {};
        this.isLoading = false;
        this.separateDialCode = true;
        this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_13__["SearchCountryField"];
        this.countryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_13__["CountryISO"].Switzerland;
        this.preferredCountries = [];
        this.countryCodeString = '';
        this.countryCodeFlag = '';
        this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_10__["StyleVariables"]();
        this.cancelBtn = new _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_1__["StyleConstants"]();
        this.saveBtn = new _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_1__["StyleConstants"]();
    }
    ngOnInit() {
        this.util.getStyles
            .subscribe(style => {
            this.style = style;
            this.cancelBtn.color = style.defaultColor;
            this.cancelBtn.borderColor = style.defaultColor;
            this.saveBtn.backgroundColor = style.primaryColor;
            this.saveBtn.borderColor = style.primaryColor;
            this.saveBtn.color = '#ffffff';
        });
        this.getSettingSubscription = this.util.getSettings.
            subscribe((data) => {
            if (data) {
                this.setting = data;
                // if (!this.setting.cutom_country_code && !!this.setting.countryISO) {
                //   this.countryISO = (this.setting.countryISO).toLowerCase();
                //   this.preferredCountries = [(this.setting.countryISO).toLowerCase()];
                // }
                if (this.setting.cutom_country_code == 1 && this.setting.countryCodes.length > 0) {
                    this.setting.countryCodes.forEach(item => {
                        if (this.setting.cutom_country_code == 1) {
                            this.preferredCountries.push(item);
                        }
                        else {
                            this.preferredCountries.push(item.iso.toLowerCase());
                        }
                    });
                }
            }
        });
        this.makeForm();
        this.subscribeRoute();
    }
    makeForm() {
        this.form = this.fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.validator.noWhitespaceValidator])],
            'houseNo': [''],
            'collectNo': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.validator.noWhitespaceValidator])],
            'addressLineFirst': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'latitude': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'longitude': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'phone_number': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([!this.setting.is_address_phone_no_optional ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required : null])],
            // 'countryCode': ['', Validators.compose([Validators.required])],
            'reference_address': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.setting.address_reference_char_limit)])]
        });
        if (this.setting.cutom_country_code) {
            this.form.addControl('countryCode', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]));
        }
        if (this.setting.addCollectFieldInAddress == 0) {
            this.form.controls['collectNo'].setValidators(null);
            this.form.controls['collectNo'].updateValueAndValidity();
        }
        // this.getDataSubscription = this.util.callGetData.
        // subscribe((data) => {
        //   if (data) {
        //     this.getGeoLocation(this.util.handler.latitude, this.util.handler.longitude);
        //   }
        // });
    }
    // subscribe route
    subscribeRoute() {
        let self = this;
        this.subscription = this.route.queryParams.subscribe(params => {
            if (params['id']) {
                self.id = params['id'];
                self.getAddress();
                self.addEdit = 'Edit';
            }
        });
    }
    getAddress() {
        let data = this.util.getLocalData('locationData', true);
        this.form.controls.name.setValue(data.name);
        this.form.controls.houseNo.setValue(data.address_line_1);
        if (this.setting.addCollectFieldInAddress == 1) {
            this.form.controls.collectNo.setValue(data.collectNumber);
        }
        this.form.controls.addressLineFirst.setValue(data.customer_address);
        this.form.controls.latitude.setValue(data.latitude);
        this.form.controls.longitude.setValue(data.longitude);
        this.form.controls.phone_number.setValue(data.phone_number);
        this.form.controls.reference_address.setValue(data.reference_address);
        if (!this.setting.cutom_country_code) {
            this.countryISO = data.country_code;
        }
        else {
            let country_obj = this.preferredCountries.find(o => o['iso'] == data.country_code);
            console.log('country_obj', country_obj);
            if (!!country_obj) {
                this.setCountryCode(country_obj);
            }
            // this.form.controls.countryCode.setValue(data.country_code ? data.country_code : '');
        }
        this.getLatLong(data.customer_address);
    }
    getLatLong(address) {
        let self = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                self.form.controls.latitude.setValue(latitude);
                self.form.controls.longitude.setValue(longitude);
            }
        });
    }
    address(data) {
        this.form.controls.addressLineFirst.setValue(data.formatted_address);
        this.form.controls.latitude.setValue(data.lat);
        this.form.controls.longitude.setValue(data.lng);
    }
    onSubmit(value) {
        this.showError = true;
        if (this.form.valid) {
            let obj = {
                name: value.name.trim(),
                addressLineFirst: value.houseNo.trim(),
                customer_address: value.addressLineFirst.trim(),
                phone_number: !this.setting.cutom_country_code ? Number(value.phone_number.number.replace(/[^\d]/g, "")) : value.phone_number,
                country_code: !this.setting.cutom_country_code ? value.phone_number.countryCode.replace(/ +/g, "") : value.countryCode,
                accessToken: this.user.getUserToken,
                latitude: value.latitude,
                longitude: value.longitude,
                languageId: this.util.handler.languageId
            };
            if (this.setting.addCollectFieldInAddress == 1) {
                obj['collectNumber'] = value.collectNo.trim();
            }
            if (this.setting.enable_address_reference) {
                obj['reference_address'] = value.reference_address;
            }
            console.log(obj);
            this.addEditAddress(obj);
        }
    }
    addEditAddress(value) {
        this.isLoading = true;
        if (this.form.invalid) {
            setTimeout(() => {
                this.isLoading = false;
            }, 10000);
            return;
        }
        let url = _core_apiUrl__WEBPACK_IMPORTED_MODULE_5__["ApiUrl"].address.addAddress;
        if (this.id) {
            value['addressId'] = this.id;
            url = _core_apiUrl__WEBPACK_IMPORTED_MODULE_5__["ApiUrl"].address.editAddress;
        }
        this.http.postData(url, value)
            .subscribe(response => {
            this.isLoading = false;
            if (response.status === 200) {
                this.resetCountryCode();
                this.message.toast('success', `${this.translate.instant('Address')} ${this.id ? this.translate.instant('Updated') : this.translate.instant('Added')} ${this.translate.instant('Successfully')}!`);
                this.util.goBack();
                this.util.clearLocalData('locationData');
            }
        }, error => {
            this.isLoading = false;
        });
    }
    resetCountryCode() {
        this.countryCodeString = '';
        this.countryCodeFlag = '';
    }
    setCountryCode(data) {
        console.log('data', data);
        this.form.controls.countryCode.setValue(data.iso);
        this.countryCodeString = data.country_code;
        this.countryCodeFlag = data.flag_image;
    }
    getGeoLocation(lat, lng) {
        const geocoder = new google.maps.Geocoder();
        const latlng = new google.maps.LatLng(lat, lng);
        const request = { latLng: latlng };
        geocoder.geocode(request, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    this.form.patchValue({
                        addressLineFirst: results[0].formatted_address,
                        latitude: lat,
                        longitude: lng
                    });
                }
            }
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        if (!!this.getDataSubscription)
            this.getDataSubscription.unsubscribe();
        if (!!this.getSettingSubscription)
            this.getSettingSubscription.unsubscribe();
    }
};
ManageAddressComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
    { type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_9__["MessagingService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"] },
    { type: _services_validation_validation_service__WEBPACK_IMPORTED_MODULE_11__["ValidationService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] }
];
ManageAddressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-manage-address',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manage-address.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/manage-address/manage-address.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./manage-address.component.scss */ "./src/app/layout/account/manage-address/manage-address.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
        _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_9__["MessagingService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"],
        _services_validation_validation_service__WEBPACK_IMPORTED_MODULE_11__["ValidationService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]])
], ManageAddressComponent);



/***/ }),

/***/ "./src/app/layout/account/my-gift-cards/my-gift-cards.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/layout/account/my-gift-cards/my-gift-cards.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#Coupons-page {\n  padding: 40px 0px;\n}\n\n#Coupons-page h3 {\n  font-size: 24px;\n  margin-bottom: 20px;\n  color: var(--baseColor);\n}\n\n.Coupons-box {\n  margin-bottom: 20px;\n  border: 1px dashed var(--secondaryColor);\n  border-radius: 7px;\n  padding: 20px;\n  display: flex;\n}\n\n.Coupons-number {\n  border: 1px dashed var(--secondaryColor);\n  border-radius: 7px;\n  padding: 15px;\n  margin-right: 20px;\n  text-align: center;\n  display: inline-table;\n}\n\n.Coupons-number h1 {\n  font-weight: 600;\n}\n\n.Coupons-number span {\n  font-size: 18px;\n  letter-spacing: 6px;\n  font-weight: 500;\n}\n\n.Coupons-detail p {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.Coupons-detail h2 {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.Coupons-detail p a {\n  margin-left: 5px;\n  color: var(--primaryColor);\n  text-decoration: underline;\n}\n\n.Coupons-btn a {\n  padding: 10px 20px;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n\na.Coupons-buy {\n  background: var(--primaryColor);\n  border-radius: 6px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.Coupons-btn a:hover {\n  text-decoration: none;\n}\n\na.Coupons-share {\n  margin: 0 0 0 auto;\n  float: right;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n/* Start Coupons-detail-page CSS */\n\n#Coupons-page-title {\n  padding: 10px 0px;\n  background: #fff;\n  text-align: center;\n}\n\n#Coupons-page-title h3 {\n  font-size: 24px;\n}\n\n#Coupons-detail-page {\n  padding: 40px 0px;\n  background: #fafafa;\n}\n\n.Coupons-detail-outter {\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0px 0px 6px rgba(187, 176, 176, 0.5);\n}\n\n.Coupons-detail-discount {\n  background: var(--baseColor);\n  text-align: center;\n  padding: 30px;\n  color: #fff;\n  margin-bottom: 20px;\n}\n\n.Coupons-detail-inner-box {\n  text-align: center;\n  padding: 20px 70px;\n}\n\n.Coupons-detail-inner-box h3 {\n  font-size: 24px;\n}\n\n.Coupons-detail-inner-box p {\n  font-size: 14px;\n  margin: 0 auto 40px;\n  width: 350px;\n  max-width: 100%;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.Coupons-detail-inner-box h5 {\n  text-transform: uppercase;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.5);\n  margin: 0px;\n}\n\n.discount-coupon {\n  border: 1px dashed var(--secondaryColor);\n  width: 350px;\n  margin: 20px auto;\n  max-width: 100%;\n  padding: 15px;\n  border-radius: 6px;\n}\n\n.discount-coupon h4 {\n  margin: 0px;\n  text-transform: uppercase;\n  letter-spacing: 7px;\n  font-size: 30px;\n}\n\n.Coupons-detail-inner-box ul {\n  text-align: left;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.5);\n  line-height: 28px;\n  padding-top: 30px;\n  border-bottom: 1px solid var(--secondaryColor);\n  padding-bottom: 30px;\n}\n\n.share-download-btn a {\n  color: rgba(0, 0, 0, 0.5);\n  text-transform: uppercase;\n}\n\n.share-download-btn {\n  text-align: left;\n}\n\n.no-gift {\n  margin-top: 40px;\n  border: 1px solid var(--secondaryColor);\n  border-radius: 4px;\n  padding: 50px;\n  width: 100%;\n  text-align: center;\n  text-transform: capitalize;\n}\n\n.no-gift h4 {\n  color: var(--baseColor);\n}\n\n/* End Coupons-detail-page CSS */\n\n@media (max-width: 812px) {\n  .Coupons-box {\n    display: block;\n  }\n  .Coupons-number {\n    margin-bottom: 20px;\n  }\n  .Coupons-detail-inner-box {\n    padding: 20px 20px;\n    margin-bottom: 20px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FjY291bnQvbXktZ2lmdC1jYXJkcy9teS1naWZ0LWNhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFFM0I7O0FBQUE7RUFDSSxtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtBQUdqQjs7QUFEQTtFQUNJLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBSXpCOztBQUZBO0VBQ0ksZ0JBQWdCO0FBS3BCOztBQUhBO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFNcEI7O0FBSkE7RUFDSSxlQUFlO0VBQ2YseUJBQXlCO0FBTzdCOztBQUxBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtBQVFwQjs7QUFOQTtFQUNJLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsMEJBQTBCO0FBUzlCOztBQVBBO0VBQ0ksa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlO0FBVW5COztBQVJBO0VBQ0ksK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQVduQjs7QUFUQTtFQUNJLHFCQUFxQjtBQVl6Qjs7QUFUQTtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0FBWTdCOztBQVRBLGtDQUFBOztBQUNBO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFZdEI7O0FBVkE7RUFDSSxlQUFlO0FBYW5COztBQVhBO0VBQ0ksaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQWN2Qjs7QUFaQTtFQUNJLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0RBQWdEO0FBZXBEOztBQWJBO0VBQ0ksNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtBQWdCdkI7O0FBZEE7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBaUJ0Qjs7QUFmQTtFQUNJLGVBQWU7QUFrQm5COztBQWhCQTtFQUNJLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7QUFtQjdCOztBQWpCQTtFQUNJLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7QUFvQmY7O0FBbEJBO0VBQ0ksd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7QUFxQnRCOztBQW5CQTtFQUNJLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGVBQWU7QUFzQm5COztBQXBCQTtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsOENBQThDO0VBQzlDLG9CQUFvQjtBQXVCeEI7O0FBckJBO0VBQ0kseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQXdCN0I7O0FBdEJBO0VBQ0ksZ0JBQWdCO0FBeUJwQjs7QUF2QkE7RUFDSSxnQkFBZ0I7RUFDaEIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUEwQjlCOztBQWpDQTtFQVNRLHVCQUF1QjtBQTRCL0I7O0FBekJBLGdDQUFBOztBQUVBO0VBQ0k7SUFDSSxjQUFjO0VBMkJwQjtFQXpCRTtJQUNJLG1CQUFtQjtFQTJCekI7RUF6QkU7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBMkJ6QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FjY291bnQvbXktZ2lmdC1jYXJkcy9teS1naWZ0LWNhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI0NvdXBvbnMtcGFnZSB7XG4gICAgcGFkZGluZzogNDBweCAwcHg7XG59XG4jQ291cG9ucy1wYWdlIGgzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogdmFyKC0tYmFzZUNvbG9yKTtcbn1cbi5Db3Vwb25zLWJveCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uQ291cG9ucy1udW1iZXIge1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG59XG4uQ291cG9ucy1udW1iZXIgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uQ291cG9ucy1udW1iZXIgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiA2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5Db3Vwb25zLWRldGFpbCBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5Db3Vwb25zLWRldGFpbCBoMiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uQ291cG9ucy1kZXRhaWwgcCBhIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLkNvdXBvbnMtYnRuIGEge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbmEuQ291cG9ucy1idXkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnlDb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5Db3Vwb25zLWJ0biBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEuQ291cG9ucy1zaGFyZSB7XG4gICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4vKiBTdGFydCBDb3Vwb25zLWRldGFpbC1wYWdlIENTUyAqL1xuI0NvdXBvbnMtcGFnZS10aXRsZSB7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jQ291cG9ucy1wYWdlLXRpdGxlIGgzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG4jQ291cG9ucy1kZXRhaWwtcGFnZSB7XG4gICAgcGFkZGluZzogNDBweCAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cbi5Db3Vwb25zLWRldGFpbC1vdXR0ZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDE4NywgMTc2LCAxNzYsIDAuNSk7XG59XG4uQ291cG9ucy1kZXRhaWwtZGlzY291bnQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhc2VDb2xvcik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5Db3Vwb25zLWRldGFpbC1pbm5lci1ib3gge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDcwcHg7XG59XG4uQ291cG9ucy1kZXRhaWwtaW5uZXItYm94IGgzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG4uQ291cG9ucy1kZXRhaWwtaW5uZXItYm94IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDAgYXV0byA0MHB4O1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5Db3Vwb25zLWRldGFpbC1pbm5lci1ib3ggaDUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4uZGlzY291bnQtY291cG9uIHtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uZGlzY291bnQtY291cG9uIGg0IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiA3cHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuLkNvdXBvbnMtZGV0YWlsLWlubmVyLWJveCB1bCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLnNoYXJlLWRvd25sb2FkLWJ0biBhIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uc2hhcmUtZG93bmxvYWQtYnRuIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm5vLWdpZnQge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBoNCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1iYXNlQ29sb3IpO1xuICAgIH1cbn1cbi8qIEVuZCBDb3Vwb25zLWRldGFpbC1wYWdlIENTUyAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogODEycHgpIHtcbiAgICAuQ291cG9ucy1ib3gge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLkNvdXBvbnMtbnVtYmVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLkNvdXBvbnMtZGV0YWlsLWlubmVyLWJveCB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/layout/account/my-gift-cards/my-gift-cards.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/account/my-gift-cards/my-gift-cards.component.ts ***!
  \*************************************************************************/
/*! exports provided: MyGiftCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGiftCardsComponent", function() { return MyGiftCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let MyGiftCardsComponent = class MyGiftCardsComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.giftList = [];
        this.isLoading = false;
        this.selectedGift = {};
    }
    ngOnInit() {
        this.fetch();
    }
    fetch() {
        this.isLoading = true;
        this.httpService.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_1__["ApiUrl"].giftCard.purchaseList, { limit: 20, offset: 0 }).subscribe((response) => {
            if (response && response.data && response.data.giftData)
                this.giftList = response.data.giftData;
            this.isLoading = false;
        }, (err) => this.isLoading = false);
    }
};
MyGiftCardsComponent.ctorParameters = () => [
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
MyGiftCardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-gift-cards',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-gift-cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/my-gift-cards/my-gift-cards.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-gift-cards.component.scss */ "./src/app/layout/account/my-gift-cards/my-gift-cards.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], MyGiftCardsComponent);



/***/ }),

/***/ "./src/app/layout/account/my-wallet/my-wallet.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/account/my-wallet/my-wallet.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#wallet_page {\n  padding: 0px 0px;\n}\n\n.wallet_outter {\n  display: flex;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.wallet_left {\n  width: 20%;\n  border-right: 1px solid #ddd;\n}\n\n.wallet_right {\n  width: 100%;\n}\n\n.wallet_left ul {\n  padding: 0px;\n  list-style: none;\n}\n\n.wallet_left ul a {\n  width: 100%;\n  display: block;\n  padding: 20px;\n  border-bottom: 1px solid #ddd;\n  color: #00000094;\n}\n\n.wallet_right_heading {\n  border-bottom: 1px solid #ddd;\n}\n\n.wallet_balance {\n  padding: 20px;\n  display: flex;\n  margin-top: 10px;\n}\n\n.wallet_balance p {\n  font-size: 14px;\n  margin-right: 20px;\n  margin-bottom: 0px;\n  line-height: 27px;\n}\n\n.wallet_balance h2 {\n  font-size: 27px;\n  font-weight: 700;\n  margin: 0px;\n}\n\n.wallet_btn {\n  border: 2px solid #4B5061;\n  border-radius: 5px;\n  color: #4B5061;\n  padding: 15px 20px;\n  text-transform: uppercase;\n  font-size: 14px;\n  display: inline-block;\n  margin: 0px 10px;\n}\n\n.wallet_amount_button {\n  float: right;\n  padding: 20px;\n}\n\n.pricem-color {\n  background: var(--primaryColor);\n  color: #fff;\n  border-color: var(--primaryColor);\n}\n\n.wallet_right_heading_status {\n  border-bottom: 1px solid #ddd;\n  padding: 20px;\n}\n\n.wallet_right_heading_status p {\n  margin: 0px;\n  text-transform: uppercase;\n}\n\n.wallet_list_inner {\n  border-bottom: 1px solid #ddd;\n  padding: 20px;\n}\n\n.wallet_list_detail {\n  display: flex;\n}\n\n.wallet_list_img {\n  margin-right: 20px;\n}\n\n.wallet_list_status p {\n  font-weight: 700;\n  margin-bottom: 0px;\n  font-size: 14px;\n  margin-top: 7px;\n}\n\n.wallet_list_status span {\n  font-size: 14px;\n  color: #8D8D8D;\n}\n\n.wallet_list_amount p {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 54px;\n}\n\n.wallet_list_amount {\n  float: right;\n}\n\n.wallet_load_more a {\n  color: #4B5061;\n  text-transform: uppercase;\n  font-size: 15px;\n}\n\n.wallet_load_more {\n  text-align: center;\n  padding: 30px 20px;\n}\n\n.wallet_btn:hover {\n  text-decoration: none;\n  color: #000;\n}\n\n.pricem-color:hover {\n  color: #fff;\n}\n\n#sendMoney button.close, .choose_walle button.close {\n  right: 4px;\n  position: absolute;\n  width: 35px;\n  height: 35px;\n  top: -3px;\n}\n\n#sendMoney h4.modal-title, .choose_walle h4.modal-title {\n  width: 100%;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n\n#sendMoney label, .choose_walle label {\n  color: #909090 !important;\n  font-size: 14px !important;\n  font-weight: 400 !important;\n}\n\n.enter-wallet-amount input, .choose_walle input {\n  padding: 0px;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  border-radius: 0px !important;\n  font-weight: 700;\n  font-size: 20px;\n}\n\n.send_money_by p {\n  color: #909090 !important;\n  font-size: 14px !important;\n  font-weight: 400 !important;\n  margin-top: 30px;\n}\n\n.payment_method_opt div {\n  text-align: left;\n  float: left;\n  width: 100%;\n  display: flex;\n  margin-bottom: 15px;\n}\n\n.payment_method_opt div input {\n  height: 20px;\n  width: 20px;\n  margin-right: 20px;\n}\n\n.payment_method_opt div label {\n  margin: 0px;\n}\n\n[type=\"radio\"]:checked + label:after, [type=\"radio\"]:not(:checked) + label:after {\n  content: '';\n  width: 12px;\n  height: 12px;\n  background: var(--primaryColor);\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  border-radius: 100%;\n  border-color: var(--primaryColor);\n  transition: all 0.2s ease;\n}\n\n[type=\"radio\"]:checked + label:after {\n  opacity: 1;\n  transform: scale(1);\n}\n\n[type=\"radio\"]:checked + label:before {\n  content: '';\n  position: absolute;\n  left: 1px;\n  top: 1px;\n  width: 18px;\n  height: 18px;\n  border: 1px solid var(--primaryColor);\n  border-radius: 100%;\n  background: #fff;\n}\n\n[type=\"radio\"]:not(:checked) + label:before {\n  content: '';\n  position: absolute;\n  left: 1px;\n  top: 1px;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #ddd;\n  border-radius: 100%;\n  background: #fff;\n}\n\n[type=\"radio\"]:checked + label, [type=\"radio\"]:not(:checked) + label {\n  position: relative;\n  padding-left: 28px;\n  cursor: pointer;\n  line-height: 20px;\n  display: inline-block;\n  color: #666;\n}\n\n[type=\"radio\"]:checked, [type=\"radio\"]:not(:checked) {\n  position: absolute;\n  left: -9999px;\n}\n\n[type=\"radio\"]:not(:checked) + label:after {\n  opacity: 0;\n  transform: scale(0);\n}\n\n.payment_method_opt {\n  margin-bottom: 20px;\n  display: flow-root;\n}\n\n.wallet_input input {\n  border: none;\n  border-bottom: 1px solid #ddd;\n  padding: 0px;\n  border-radius: 0px !important;\n  width: 100%;\n}\n\n.wallet_input .allow-dropdown {\n  width: 100%;\n}\n\n#sendMoney .wallet_btn, .choose_walle .wallet_btn {\n  width: 100%;\n  border: none;\n  color: #fff;\n  margin-top: 20px;\n}\n\ninput:focus {\n  outline: none !important;\n  box-shadow: none !important;\n  border-color: var(--primaryColor) !important;\n}\n\n.choose_walle .payment_method_opt div {\n  width: 50%;\n}\n\n.log-error {\n  font-size: 14px;\n  color: #e32a2a;\n  text-align: left;\n  margin-bottom: 10px;\n  margin-top: 0px;\n}\n\n.comment {\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #dddddd;\n  border-radius: 0px !important;\n  padding: 0px;\n}\n\n.wallet_input .intl-tel-input {\n  width: 100%;\n}\n\n.wallet_input .intl-tel-input input#phone {\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  border-radius: 0px;\n  padding-left: 112px;\n}\n\n.wallet_input .selected-flag.dropdown-toggle {\n  border-radius: 0px !important;\n}\n\n.form-check-label {\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 16px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 100%;\n  float: left;\n}\n\n/* Hide the browser's default checkbox */\n\n.form-check-label input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n\n.check-span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #fff;\n  border-radius: 50%;\n  border: 2px solid var(--primaryColor);\n}\n\n/* When the checkbox is checked, add a blue background */\n\n.form-check-label input:checked ~ .check-span {\n  background-color: #fff;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.check-span:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n\n.form-check-label input:checked ~ .check-span:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n\n.form-check-label .check-span:after {\n  left: 2px;\n  top: 2px;\n  width: 12px;\n  height: 12px;\n  background: var(--primaryColor);\n  border-radius: 50%;\n}\n\n.form-check-inline {\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0px !important;\n  float: left;\n  width: 25%;\n}\n\nselect {\n  height: 40px !important;\n  padding: 0 !important;\n  border-color: #ccc !important;\n  border-radius: 5px !important;\n}\n\ninput {\n  background: #fff !important;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.02);\n  border-radius: 5px;\n  margin-bottom: 25px;\n  border: 1px solid #dddddd75;\n  font-size: 14px;\n  height: 40px !important;\n  padding: 10px 20px !important;\n}\n\n.wallet_input input {\n  border: none;\n  border: 1px solid #ddd !important;\n  padding: 0px;\n  border-radius: 5px !important;\n  width: 100%;\n  margin-left: 10px !important;\n}\n\n/* Country Dropdown Box */\n\n.country_dropbox.home-page-search-restorent.dropdown a.dropdown-toggle {\n  font-size: 16px;\n  color: #2b2d32;\n  font-weight: 400;\n  border: 1px solid #dddddd75;\n  border-radius: 10px;\n  padding: 10px 5px;\n  margin-right: 5px;\n}\n\n.country_dropbox.home-page-search-restorent.dropdown {\n  padding: 0;\n  border: none;\n  margin: 9px 0 0 0;\n}\n\n.country_dropbox.home-page-search-restorent.dropdown img {\n  width: 10px;\n  margin-left: 5px;\n}\n\n.country_dropbox.home-page-search-restorent.dropdown ul {\n  left: 3px !important;\n  top: 0px !important;\n  min-width: 10.7rem !important;\n  width: 300px;\n  max-width: 20rem;\n}\n\n.country_dropbox.dropdown-toggle::after {\n  border: none !important;\n  border-right: 1px solid #dddddd75 !important;\n}\n\n.country_dropbox .country_text p {\n  width: 25%;\n  display: -webkit-inline-box;\n  margin-bottom: 0;\n}\n\n.country_dropbox .country_text img {\n  width: 20px !important;\n  margin-right: 9px;\n}\n\n.country_dropbox .country_flag {\n  width: 22px !important;\n  margin-right: 10px;\n}\n\n/* ************************************ */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FjY291bnQvbXktd2FsbGV0L215LXdhbGxldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksVUFBVTtFQUNWLDRCQUE0QjtBQUNoQzs7QUFFQTtFQUNJLFdBQVc7QUFDZjs7QUFFQTtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0VBQ0ksYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDZjs7QUFFQTtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDSSxZQUFZO0VBQ1osYUFBYTtBQUNqQjs7QUFFQTtFQUNJLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsaUNBQWlDO0FBQ3JDOztBQUVBO0VBQ0ksNkJBQTZCO0VBQzdCLGFBQWE7QUFDakI7O0FBRUE7RUFDSSxXQUFXO0VBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0ksNkJBQTZCO0VBQzdCLGFBQWE7QUFDakI7O0FBRUE7RUFDSSxhQUFhO0FBQ2pCOztBQUVBO0VBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtBQUNuQjs7QUFFQTtFQUNJLGVBQWU7RUFDZixjQUFjO0FBQ2xCOztBQUVBO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNJLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtBQUNuQjs7QUFFQTtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztBQUNmOztBQUNBO0VBQ0ksV0FBVztBQUVmOztBQUFBO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7QUFHYjs7QUFBQTtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFHcEI7O0FBRkM7RUFDRyx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUsvQjs7QUFGQTtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUtuQjs7QUFKQztFQUNHLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQU9wQjs7QUFOQztFQUNHLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7QUFTdkI7O0FBUkM7RUFDRyxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQVd0Qjs7QUFWQztFQUNHLFdBQVc7QUFhZjs7QUFFQTtFQVZJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQVk3Qjs7QUFFQTtFQVZJLFVBQVU7RUFDVixtQkFBbUI7QUFZdkI7O0FBRUE7RUFWSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQVlwQjs7QUFFQTtFQVhJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBYXBCOztBQUVBO0VBWkksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixXQUFXO0FBY2Y7O0FBRUE7RUFkSSxrQkFBa0I7RUFDbEIsYUFBYTtBQWdCakI7O0FBRUE7RUFkSSxVQUFVO0VBQ1YsbUJBQW1CO0FBZ0J2Qjs7QUFmQztFQUNHLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFrQnRCOztBQWpCQztFQUNHLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixXQUFXO0FBb0JmOztBQWxCQTtFQUNJLFdBQVc7QUFxQmY7O0FBcEJDO0VBQ0csV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBdUJwQjs7QUFyQkE7RUFDSSx3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLDRDQUE0QztBQXdCaEQ7O0FBckJBO0VBQ0ksVUFBVTtBQXdCZDs7QUF0QkE7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQXlCbkI7O0FBdkJBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLFlBQVk7QUEwQmhCOztBQXhCQTtFQUNJLFdBQVc7QUEyQmY7O0FBekJBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQTRCdkI7O0FBekJBO0VBQ0ksNkJBQTZCO0FBNEJqQzs7QUF6QkE7RUFDSSxrQkFBa0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztBQTRCakI7O0FBekJFLHdDQUFBOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7QUE0Qlo7O0FBekJFLDZCQUFBOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2hCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFDQUFxQztBQTRCM0M7O0FBdkJFLHdEQUFBOztBQUNBO0VBQ0Usc0JBQXNCO0FBMEIxQjs7QUF2QkUsNkRBQUE7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7QUEwQmpCOztBQXZCRSxvQ0FBQTs7QUFDQTtFQUNFLGNBQWM7QUEwQmxCOztBQXZCRSxrQ0FBQTs7QUFDQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFFWiwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBeUJ0Qjs7QUF0QkU7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsVUFBVTtBQXlCZDs7QUF2QkU7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7QUEwQmpDOztBQXhCRTtFQUNFLDJCQUEwQjtFQUMxQiwyQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2Qiw2QkFBNkI7QUEyQmpDOztBQXhCRTtFQUNFLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsNEJBQTRCO0FBMkJoQzs7QUF4QkEseUJBQUE7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7QUEwQnJCOztBQXZCRTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0FBMEJyQjs7QUF2QkU7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBMEJwQjs7QUF2QkU7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZ0JBQWdCO0FBMEJwQjs7QUF4QkU7RUFDRSx1QkFBc0I7RUFDdEIsNENBQTRDO0FBMkJoRDs7QUF4QkU7RUFDRSxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQTJCcEI7O0FBeEJFO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQTJCckI7O0FBeEJFO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQTJCdEI7O0FBekJFLHlDQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FjY291bnQvbXktd2FsbGV0L215LXdhbGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3YWxsZXRfcGFnZSB7XG4gICAgcGFkZGluZzogMHB4IDBweDtcbn1cblxuLndhbGxldF9vdXR0ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi53YWxsZXRfbGVmdCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4ud2FsbGV0X3JpZ2h0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLndhbGxldF9sZWZ0IHVsIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLndhbGxldF9sZWZ0IHVsIGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgY29sb3I6ICMwMDAwMDA5NDtcbn1cblxuLndhbGxldF9yaWdodF9oZWFkaW5nIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLndhbGxldF9iYWxhbmNlIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLndhbGxldF9iYWxhbmNlIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xufVxuXG4ud2FsbGV0X2JhbGFuY2UgaDIge1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4ud2FsbGV0X2J0biB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzRCNTA2MTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICM0QjUwNjE7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDBweCAxMHB4O1xufVxuXG4ud2FsbGV0X2Ftb3VudF9idXR0b24ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ucHJpY2VtLWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcbn1cblxuLndhbGxldF9yaWdodF9oZWFkaW5nX3N0YXR1cyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLndhbGxldF9yaWdodF9oZWFkaW5nX3N0YXR1cyBwIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ud2FsbGV0X2xpc3RfaW5uZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi53YWxsZXRfbGlzdF9kZXRhaWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi53YWxsZXRfbGlzdF9pbWcge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLndhbGxldF9saXN0X3N0YXR1cyBwIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4ud2FsbGV0X2xpc3Rfc3RhdHVzIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzhEOEQ4RDtcbn1cblxuLndhbGxldF9saXN0X2Ftb3VudCBwIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogNTRweDtcbn1cblxuLndhbGxldF9saXN0X2Ftb3VudCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ud2FsbGV0X2xvYWRfbW9yZSBhIHtcbiAgICBjb2xvcjogIzRCNTA2MTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLndhbGxldF9sb2FkX21vcmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG59XG5cbi53YWxsZXRfYnRuOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMwMDA7XG59XG4ucHJpY2VtLWNvbG9yOmhvdmVye1xuICAgIGNvbG9yOiAjZmZmO1xufVxuI3NlbmRNb25leSBidXR0b24uY2xvc2UsIC5jaG9vc2Vfd2FsbGUgYnV0dG9uLmNsb3Nle1xuICAgIHJpZ2h0OiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICB0b3A6IC0zcHg7XG59XG5cbiNzZW5kTW9uZXkgaDQubW9kYWwtdGl0bGUsIC5jaG9vc2Vfd2FsbGUgaDQubW9kYWwtdGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn0jc2VuZE1vbmV5IGxhYmVsLCAuY2hvb3NlX3dhbGxlIGxhYmVsIHtcbiAgICBjb2xvcjogIzkwOTA5MCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgICBcbn1cbi5lbnRlci13YWxsZXQtYW1vdW50IGlucHV0LCAuY2hvb3NlX3dhbGxlIGlucHV0IHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufS5zZW5kX21vbmV5X2J5IHAge1xuICAgIGNvbG9yOiAjOTA5MDkwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59LnBheW1lbnRfbWV0aG9kX29wdCBkaXYge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0ucGF5bWVudF9tZXRob2Rfb3B0IGRpdiBpbnB1dCB7XG4gICAgaGVpZ2h0OiAyMHB4OyBcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59LnBheW1lbnRfbWV0aG9kX29wdCBkaXYgbGFiZWwge1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG5cblt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyLCBbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnlDb2xvcik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNHB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG5bdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG5bdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxcHg7XG4gICAgdG9wOiAxcHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnlDb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMXB4O1xuICAgIHRvcDogMXB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsLCBbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjNjY2O1xufVt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCwgW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTk5OTlweDtcbn1cblxuW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn0ucGF5bWVudF9tZXRob2Rfb3B0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsb3ctcm9vdDtcbn0ud2FsbGV0X2lucHV0IGlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLndhbGxldF9pbnB1dCAuYWxsb3ctZHJvcGRvd24ge1xuICAgIHdpZHRoOiAxMDAlO1xufSNzZW5kTW9uZXkgLndhbGxldF9idG4sIC5jaG9vc2Vfd2FsbGUgLndhbGxldF9idG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcikgIWltcG9ydGFudDtcbn1cblxuLmNob29zZV93YWxsZSAucGF5bWVudF9tZXRob2Rfb3B0IGRpdntcbiAgICB3aWR0aDogNTAlO1xufVxuLmxvZy1lcnJvciB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjZTMyYTJhO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7IFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4OyBcbn1cbi5jb21tZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4ud2FsbGV0X2lucHV0IC5pbnRsLXRlbC1pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ud2FsbGV0X2lucHV0IC5pbnRsLXRlbC1pbnB1dCBpbnB1dCNwaG9uZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDExMnB4O1xufVxuXG4ud2FsbGV0X2lucHV0IC5zZWxlY3RlZC1mbGFnLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgXG4gIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXG4gIC5mb3JtLWNoZWNrLWxhYmVsIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIFxuICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cbiAgLmNoZWNrLXNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5Q29sb3IpO1xuICB9XG4gIFxuICBcbiAgXG4gIC8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuICAuZm9ybS1jaGVjay1sYWJlbCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrLXNwYW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cbiAgLmNoZWNrLXNwYW46YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cbiAgLmZvcm0tY2hlY2stbGFiZWwgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVjay1zcGFuOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cbiAgLmZvcm0tY2hlY2stbGFiZWwgLmNoZWNrLXNwYW46YWZ0ZXIge1xuICAgIGxlZnQ6IDJweDtcbiAgICB0b3A6IDJweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICBcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBcbiAgLmZvcm0tY2hlY2staW5saW5lIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgc2VsZWN0IHtcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW5wdXQge1xuICAgIGJhY2tncm91bmQ6ICNmZmYhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgLjAyKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkNzU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAud2FsbGV0X2lucHV0IGlucHV0e1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIENvdW50cnkgRHJvcGRvd24gQm94ICovXG5cbi5jb3VudHJ5X2Ryb3Bib3guaG9tZS1wYWdlLXNlYXJjaC1yZXN0b3JlbnQuZHJvcGRvd24gYS5kcm9wZG93bi10b2dnbGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzJiMmQzMjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ3NTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gIFxuICAuY291bnRyeV9kcm9wYm94LmhvbWUtcGFnZS1zZWFyY2gtcmVzdG9yZW50LmRyb3Bkb3duIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDlweCAwIDAgMDtcbiAgfVxuICBcbiAgLmNvdW50cnlfZHJvcGJveC5ob21lLXBhZ2Utc2VhcmNoLXJlc3RvcmVudC5kcm9wZG93biBpbWcge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbiAgXG4gIC5jb3VudHJ5X2Ryb3Bib3guaG9tZS1wYWdlLXNlYXJjaC1yZXN0b3JlbnQuZHJvcGRvd24gdWwge1xuICAgIGxlZnQ6IDNweCAhaW1wb3J0YW50O1xuICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAxMC43cmVtICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1heC13aWR0aDogMjByZW07XG4gIH1cbiAgLmNvdW50cnlfZHJvcGJveC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGRkZGQ3NSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuY291bnRyeV9kcm9wYm94IC5jb3VudHJ5X3RleHQgcCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICBcbiAgLmNvdW50cnlfZHJvcGJveCAuY291bnRyeV90ZXh0IGltZyB7XG4gICAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgfVxuICBcbiAgLmNvdW50cnlfZHJvcGJveCAuY291bnRyeV9mbGFnIHtcbiAgICB3aWR0aDogMjJweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi8iXX0= */");

/***/ }),

/***/ "./src/app/layout/account/my-wallet/my-wallet.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/account/my-wallet/my-wallet.component.ts ***!
  \*****************************************************************/
/*! exports provided: MyWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWalletComponent", function() { return MyWalletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_models_script_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/models/script.model */ "./src/app/shared/models/script.model.ts");
/* harmony import */ var _services_script_script_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/script/script.service */ "./src/app/services/script/script.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../shared/models/pagination.model */ "./src/app/shared/models/pagination.model.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/__ivy_ngcc__/fesm2015/ngx-intl-tel-input.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/messaging/messaging.service */ "./src/app/services/messaging/messaging.service.ts");
/* harmony import */ var _services_window_window_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../services/window/window.service */ "./src/app/services/window/window.service.ts");
















let MyWalletComponent = class MyWalletComponent {
    constructor(translate, formBuilder, userService, util, httpService, message, scriptService, route, router, window) {
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.util = util;
        this.httpService = httpService;
        this.message = message;
        this.scriptService = scriptService;
        this.route = route;
        this.router = router;
        this.window = window;
        this.sendMode = 'email';
        this.isLoading = false;
        this.submitted = false;
        this.transactions = [];
        this.walletAmount = '';
        this.currency = '';
        this.isPayOnline = false;
        this.paymentOrderModel = {};
        this.countryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_11__["CountryISO"].Switzerland;
        this.preferredCountries = [];
        this.backToCart = false;
        this.countryCodeString = '';
        this.countryCodeFlag = '';
        this.currency = _core_global__WEBPACK_IMPORTED_MODULE_7__["GlobalVariable"].CURRENCY;
        this.pagination = new _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_5__["PaginationModel"]();
        this.pagination.perPage = 6;
        this.pagination.currentPage = 1;
        this.pagination.offset = 0;
        const stripeScript = new _shared_models_script_model__WEBPACK_IMPORTED_MODULE_2__["ScriptModel"]('stripe', 'https://js.stripe.com/v3/');
        this.scriptService.loadScript(stripeScript).then((script) => {
            if (!script.isLoaded) {
                // this.onError.emit('unable to load stripe script');
                return;
            }
        });
    }
    ngOnInit() {
        this.styleSubscription = this.util.getStyles
            .subscribe((style) => {
            this.style = style;
        });
        this.route.queryParams
            .subscribe(params => {
            if (params && params.from_cart == 1) {
                this.backToCart = true;
            }
        });
        this.settingSubscription = this.util.getSettings.subscribe((settings) => {
            if (!!settings) {
                this.settings = settings;
                if (this.settings.countryCodes.length > 0) {
                    this.settings.countryCodes.forEach(item => {
                        if (settings.cutom_country_code == 1) {
                            this.preferredCountries.push(item);
                        }
                        else {
                            this.preferredCountries.push(item.iso.toLowerCase());
                        }
                    });
                }
                // else if (!!settings.countryISO && !settings.cutom_country_code) {
                //   this.countryISO = (settings.countryISO).toLowerCase();
                //   this.preferredCountries = [(settings.countryISO).toLowerCase()];
                // }
            }
        });
        this.userSubscription = this.userService.currentUser
            .subscribe(user => {
            if (!!user) {
                this.user = user;
            }
        });
        this.gatewaySubscription = this.util.getKeys.subscribe(({ paymentGateways }) => {
            if (paymentGateways && paymentGateways.length) {
                this.paymentGateways = paymentGateways.filter((gateway) => gateway.is_active == 1);
            }
        });
        this.createSendMoneyForm();
        this.createAddMoneyForm();
        this.fetchTransactions();
    }
    fetchTransactions() {
        this.isLoading = true;
        const query = {
            'skip': this.pagination.offset,
            'limit': this.pagination.perPage
        };
        this.httpService.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getUserWalletTransactions, query).subscribe((response) => {
            this.transactions = response.data.transactions;
            this.pagination.count = response.data.count;
            this.walletAmount = response.data.userDetails.wallet_amount;
            this.isLoading = false;
        }, (err) => this.isLoading = false);
    }
    createSendMoneyForm() {
        this.sendMoneyForm = this.formBuilder.group({
            amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].email]],
            phoneNumber: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            comment: ['']
        });
        if (this.settings.cutom_country_code) {
            this.sendMoneyForm.addControl('countryCode', new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]));
        }
        // if (this.sendMode == 'email') {
        //   this.sendMoneyForm.addControl('email', new FormControl('', [Validators.required, Validators.email]))
        //   this.sendMoneyForm.removeControl('phoneNumber')
        // } else {
        //   this.sendMoneyForm.addControl('phoneNumber', new FormControl(null, [Validators.required]))
        //   this.sendMoneyForm.removeControl('email')
        // }
    }
    createAddMoneyForm() {
        this.addMoneyForm = this.formBuilder.group({
            amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            gateway: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]]
        });
    }
    get addMoney() { return this.addMoneyForm.controls; }
    get moneyForm() { return this.sendMoneyForm.controls; }
    modeChange($event) {
        this.sendMode = $event.target.value;
        // this.createSendMoneyForm();
        if (this.sendMode == 'email') {
            this.moneyForm.email.enable();
            this.moneyForm.phoneNumber.disable();
            this.moneyForm.countryCode.disable();
        }
        else {
            this.moneyForm.email.disable();
            this.moneyForm.phoneNumber.enable();
            this.moneyForm.countryCode.enable();
        }
    }
    onSendMoney() {
        if (this.sendMoneyForm.invalid) {
            this.submitted = true;
            setTimeout(() => {
                this.submitted = false;
            }, 100000);
            return;
        }
        const payload = {
            amount: this.sendMoneyForm.value.amount,
            comment: this.sendMoneyForm.value.comment
        };
        if (this.sendMode == 'phone') {
            payload['phone_number'] = !this.settings.cutom_country_code ? this.sendMoneyForm.value.phoneNumber.number : this.sendMoneyForm.value.phoneNumber;
            payload['countryCode'] = !this.settings.cutom_country_code ? this.sendMoneyForm.value.phoneNumber.dialCode : this.sendMoneyForm.value.countryCode;
        }
        else {
            payload['user_email'] = this.sendMoneyForm.value.email;
        }
        this.isLoading = true;
        this.httpService.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].shareWalletMoney, payload).subscribe((response) => {
            if (response) {
                this.message.toast('info', 'Amount Send Successfully');
                this.closeModel();
                this.fetchTransactions();
            }
            this.isLoading = false;
        }, (err) => this.isLoading = false);
    }
    setCountryCode(data) {
        console.log('data', data);
        this.sendMoneyForm.controls.countryCode.setValue(data.country_code);
        this.countryCodeString = data.country_code;
        this.countryCodeFlag = data.flag_image;
    }
    onAddMoney() {
        if (this.addMoneyForm.invalid) {
            this.submitted = true;
            setTimeout(() => {
                this.submitted = false;
            }, 100000);
            return;
        }
        this.selectedGateway = this.addMoneyForm.value.gateway.toLowerCase();
        this.paymentOrderModel = {
            amount: Number(this.addMoneyForm.value.amount),
            user: this.user,
            address: {}
        };
        this.isPayOnline = true;
        this.util.setLocalData('transactionType', 'wallet');
        this.closeModel();
    }
    onPaymentError(err) {
        this.message.toast('error', err);
        this.isPayOnline = false;
    }
    onPaymentSuccess(transaction) {
        if (transaction.paymentGatewayId != 'hyperpay') {
            this.isPayOnline = false;
        }
        const payload = {
            user_id: this.user.id,
            amount: this.paymentOrderModel.amount,
            languageId: `${this.util.handler.languageId}`
        };
        if (transaction && !transaction.card_details) {
            payload['gateway_unique_id'] = transaction.paymentGatewayId;
            payload['currency'] = _core_global__WEBPACK_IMPORTED_MODULE_7__["GlobalVariable"].CURRENCY_NAME;
            if (transaction.token) {
                payload['payment_token'] = transaction.token;
            }
            else if (transaction.mobile_no) {
                payload['mobile_no'] = transaction.mobile_no;
            }
            else {
                if (transaction.paymentGatewayId != "authorize_net") {
                    payload['customer_payment_id'] = transaction.customer_payment_id;
                    payload['card_id'] = transaction.card_id;
                }
                if (transaction.paymentGatewayId == "authorize_net") {
                    payload['authnet_profile_id'] = this.paymentOrderModel.user.authnet_profile_id;
                    payload['authnet_payment_profile_id'] = transaction.card_id;
                }
            }
        }
        else {
            payload['gateway_unique_id'] = transaction.card_details.paymentGatewayId;
            payload['currency'] = _core_global__WEBPACK_IMPORTED_MODULE_7__["GlobalVariable"].CURRENCY_NAME;
            payload['payment_token'] = transaction.card_details.card_number;
            payload['cvt'] = transaction.card_details.cvc;
            payload['cp'] = transaction.card_details.p_code;
            payload['expMonth'] = transaction.card_details.exp_month;
            payload['expYear'] = transaction.card_details.exp_year;
        }
        this.util.setLocalData('gop', payload, true);
        if (transaction && transaction.waitForSuccess) {
            if (transaction.paymentGatewayId != 'hyperpay') {
                const a = document.createElement('a');
                a.href = transaction['paymentUrl'];
                a.click();
            }
            return;
        }
        this.isLoading = true;
        this.httpService.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].addWalletMoney, payload).subscribe((response) => {
            if (response) {
                this.message.toast('info', this.translate.instant('Amount Added Successfully'));
                if (this.settings.show_wallet_on_home == 1) {
                    this.util.walletRefresh.next(true);
                }
                if (this.backToCart) {
                    this.router.navigate(['cart'], { queryParams: { p_mode: 4 } });
                }
                else {
                    this.fetchTransactions();
                }
            }
            this.isLoading = false;
        }, (err) => this.isLoading = false);
    }
    trackByFn(id, index) {
        return index;
    }
    pageChange(event) {
        this.pagination.currentPage = event;
        this.pagination.offset = event > 1 ? (event - 1) * this.pagination.perPage : 0;
        this.fetchTransactions();
        this.window.scrollTo(0, 0);
    }
    closeModel() {
        this.sendMoneyModel.nativeElement.click();
        this.addMoneyModel.nativeElement.click();
    }
    ngOnDestroy() {
        if (!!this.styleSubscription)
            this.styleSubscription.unsubscribe();
        if (!!this.settingSubscription)
            this.settingSubscription.unsubscribe();
        if (!!this.gatewaySubscription)
            this.gatewaySubscription.unsubscribe();
        if (!!this.userSubscription)
            this.userSubscription.unsubscribe();
        this.closeModel();
    }
};
MyWalletComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_13__["UtilityService"] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
    { type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_14__["MessagingService"] },
    { type: _services_script_script_service__WEBPACK_IMPORTED_MODULE_3__["ScriptService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [_services_window_window_service__WEBPACK_IMPORTED_MODULE_15__["WINDOW"],] }] }
];
MyWalletComponent.propDecorators = {
    sendMoneyModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"], args: ['sendMoneyClose', { static: false },] }],
    addMoneyModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"], args: ['addMoneyClose', { static: false },] }]
};
MyWalletComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'app-my-wallet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-wallet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/my-wallet/my-wallet.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-wallet.component.scss */ "./src/app/layout/account/my-wallet/my-wallet.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_13__["UtilityService"],
        _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
        _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_14__["MessagingService"],
        _services_script_script_service__WEBPACK_IMPORTED_MODULE_3__["ScriptService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        Window])
], MyWalletComponent);



/***/ }),

/***/ "./src/app/layout/account/notifications/notifications.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/layout/account/notifications/notifications.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hY2NvdW50L25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/account/notifications/notifications.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/account/notifications/notifications.component.ts ***!
  \*************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/models/pagination.model */ "./src/app/shared/models/pagination.model.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_window_window_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/window/window.service */ "./src/app/services/window/window.service.ts");








let NotificationsComponent = class NotificationsComponent {
    constructor(httpService, utilityService, userService, window) {
        this.httpService = httpService;
        this.utilityService = utilityService;
        this.userService = userService;
        this.window = window;
        this.notificationList = [];
        this.pagination = new _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_1__["PaginationModel"]();
        this.pagination.perPage = 10;
        this.pagination.currentPage = 1;
        this.pagination.offset = 0;
    }
    ngOnInit() {
        this.styleSubscription = this.utilityService.getStyles
            .subscribe((style) => {
            this.style = style;
        });
        this.fetch();
    }
    fetch() {
        const payload = {
            'accessToken': this.userService.getUserToken,
            'offset': this.pagination.offset,
            'limit': this.pagination.perPage
        };
        this.httpService.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].getNotification, payload).subscribe((response) => {
            if (response && response.data && response.data.notification) {
                this.notificationList = response.data.notification;
                this.pagination.count = response.data.count || response.data.notification.length;
            }
        });
    }
    /********* On Page Change **********/
    pageChange(event) {
        this.pagination.currentPage = event;
        this.pagination.offset = event > 1 ? (event - 1) * this.pagination.perPage : 0;
        this.fetch();
        this.window.scrollTo(0, 0);
    }
    ngOnDestroy() {
        if (!!this.styleSubscription)
            this.styleSubscription.unsubscribe();
    }
    trackByFn(id, index) {
        return index;
    }
};
NotificationsComponent.ctorParameters = () => [
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [_services_window_window_service__WEBPACK_IMPORTED_MODULE_7__["WINDOW"],] }] }
];
NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-notifications',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/notifications/notifications.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notifications.component.scss */ "./src/app/layout/account/notifications/notifications.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        Window])
], NotificationsComponent);



/***/ }),

/***/ "./src/app/layout/account/personal-information/personal-information.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/account/personal-information/personal-information.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hY2NvdW50L3BlcnNvbmFsLWluZm9ybWF0aW9uL3BlcnNvbmFsLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/account/personal-information/personal-information.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/account/personal-information/personal-information.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PersonalInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInformationComponent", function() { return PersonalInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../core/theme/styleConstants.model */ "./src/app/core/theme/styleConstants.model.ts");
/* harmony import */ var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/theme/styleVariables.model */ "./src/app/core/theme/styleVariables.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../services/messaging/messaging.service */ "./src/app/services/messaging/messaging.service.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _services_validation_validation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../services/validation/validation.service */ "./src/app/services/validation/validation.service.ts");













let PersonalInformationComponent = class PersonalInformationComponent {
    constructor(fb, http, userService, message, util, validator, translate) {
        this.fb = fb;
        this.http = http;
        this.userService = userService;
        this.message = message;
        this.util = util;
        this.validator = validator;
        this.translate = translate;
        this.showError = false;
        this.btnDisabled = false;
        this.id = '';
        this.user = {};
        this.imageType = _core_global__WEBPACK_IMPORTED_MODULE_11__["GlobalVariable"].imageType;
        this.isLoading = false;
        this.alphabetsOnly = /^[a-zA-Z ]*$/;
        this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_3__["StyleVariables"]();
        this.primaryButton = new _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_2__["StyleConstants"]();
    }
    ngOnInit() {
        this.styleSubscription = this.util.getStyles
            .subscribe((style) => {
            this.style = style;
            this.primaryButton.backgroundColor = style.primaryColor;
            this.primaryButton.color = '#ffffff';
        });
        this.makeForm();
        this.getSettings();
    }
    getSettings() {
        this.settingSubscription = this.util.getSettings
            .subscribe((settings) => {
            this.settings = settings;
        });
    }
    makeForm() {
        this.user = this.util.getLocalData('web_user', true);
        this.form = this.fb.group({
            'name': [this.user.firstname, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, this.validator.noWhitespaceValidator])],
            'profilePic': [''],
            'accessToken': this.userService.getUserToken,
            'abn_number': [''],
            'business_name': [''],
            'id_for_invoice': [this.user.id_for_invoice],
        });
    }
    /********** On selection of image insert the value in form **********/
    onImageSelect(event) {
        if (event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
            if (file.size / 1024 / 1024 < 5) {
                if (this.imageType.includes(file.type)) {
                    this.form.value.profilePic = event.target.files[0];
                    let reader = new FileReader();
                    reader.readAsDataURL(event.target.files[0]);
                    reader.onload = (e) => {
                        this.user.user_image = e.target.result;
                    };
                }
                else
                    this.message.toast('warning', this.translate.instant('Invalid File Type'));
            }
            else
                this.message.toast('warning', this.translate.instant('Image Size Should Be Less Than 5 Mb'));
        }
    }
    onSubmit(value) {
        this.showError = true;
        let formData = this.http.appendFormData(value);
        if (this.form.valid) {
            this.isLoading = true;
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_6__["ApiUrl"].auth.signUp_step3, formData)
                .subscribe(response => {
                this.isLoading = false;
                if (!!response && response.data) {
                    this.userService.setUserLocalData(response.data);
                    this.user = this.util.getLocalData('web_user', true);
                    this.message.toast('success', `${this.translate.instant('Profile Updated Successfully')}!`);
                }
            }, error => { this.isLoading = false; });
        }
    }
    ngOnDestroy() {
        if (!!this.settingSubscription)
            this.settingSubscription.unsubscribe();
    }
};
PersonalInformationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_8__["MessagingService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"] },
    { type: _services_validation_validation_service__WEBPACK_IMPORTED_MODULE_12__["ValidationService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }
];
PersonalInformationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-personal-information',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./personal-information.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/personal-information/personal-information.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./personal-information.component.scss */ "./src/app/layout/account/personal-information/personal-information.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
        _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_8__["MessagingService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"],
        _services_validation_validation_service__WEBPACK_IMPORTED_MODULE_12__["ValidationService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
], PersonalInformationComponent);



/***/ }),

/***/ "./src/app/layout/account/referrals/referrals.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/account/referrals/referrals.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sharables {\n  height: 100%;\n  text-align: center;\n  padding: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FjY291bnQvcmVmZXJyYWxzL3JlZmVycmFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hY2NvdW50L3JlZmVycmFscy9yZWZlcnJhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hhcmFibGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/account/referrals/referrals.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/account/referrals/referrals.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReferralsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralsComponent", function() { return ReferralsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_window_window_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/window/window.service */ "./src/app/services/window/window.service.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _app_core_apiUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app/core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");








let ReferralsComponent = class ReferralsComponent {
    constructor(window, userService, httpService, utilityService) {
        this.window = window;
        this.userService = userService;
        this.httpService = httpService;
        this.utilityService = utilityService;
        this.user = {};
        this.myReferralList = [];
        this.view_share_buttons = false;
        this.shareable = { description: '', link: '' };
        this.currency = '';
    }
    ngOnInit() {
        this.currency = _core_global__WEBPACK_IMPORTED_MODULE_6__["GlobalVariable"].CURRENCY;
        this.settingsSubscription = this.utilityService.getSettings.subscribe((settings) => {
            if (settings) {
                this.settings = settings;
            }
        });
        this.userSubscription = this.userService.currentUser.subscribe((user) => {
            this.user = user;
            this.shareable.link = `${this.window.origin}`;
            this.shareable.description = `Use code ${user.referral_id} to get ${this.currency + this.settings.referral_receive_price} as referral bonus here: `;
        });
        this.fetchMyReferral();
    }
    onCopy() {
        const copyText = this.window.document.getElementById("referralInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }
    fetchMyReferral() {
        this.httpService.getData(_app_core_apiUrl__WEBPACK_IMPORTED_MODULE_5__["ApiUrl"].getMyReferral, {}).subscribe((response) => {
            if (response.status == 200) {
                this.myReferralList = response.data.referalData;
            }
        });
    }
    trackByFn(id, index) {
        return index;
    }
    ngOnDestroy() {
        if (this.userSubscription)
            this.userSubscription.unsubscribe();
        if (this.settingsSubscription)
            this.settingsSubscription.unsubscribe();
    }
};
ReferralsComponent.ctorParameters = () => [
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_services_window_window_service__WEBPACK_IMPORTED_MODULE_3__["WINDOW"],] }] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"] }
];
ReferralsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-referrals',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./referrals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/referrals/referrals.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./referrals.component.scss */ "./src/app/layout/account/referrals/referrals.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Window,
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"]])
], ReferralsComponent);



/***/ }),

/***/ "./src/app/layout/account/side-nav/side-nav.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/account/side-nav/side-nav.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".admin-chat {\n  margin-left: -15px;\n}\n\n.user-profile .profile-right h3 {\n  font-size: 16px;\n  margin-bottom: 2px;\n  margin-top: 8px;\n}\n\n.left_profile_user li.user_icon {\n  width: 40px;\n  margin: 0 15px 0 0;\n}\n\n.user-profile img {\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.user-profile li {\n  padding: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FjY291bnQvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLSSxrQkFBa0I7QUFIdEI7O0FBT0E7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7QUFKbkI7O0FBT0E7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0FBSnRCOztBQU9BO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUpyQjs7QUFPQTtFQUNJLFlBQVk7QUFKaEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYWNjb3VudC9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi1jaGF0IHtcclxuICAgIFxyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gYm90dG9tOiAtNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuXHJcbn1cclxuXHJcbi51c2VyLXByb2ZpbGUgLnByb2ZpbGUtcmlnaHQgaDMge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4ubGVmdF9wcm9maWxlX3VzZXIgbGkudXNlcl9pY29uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgbWFyZ2luOiAwIDE1cHggMCAwO1xyXG59XHJcblxyXG4udXNlci1wcm9maWxlIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4udXNlci1wcm9maWxlIGxpIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/layout/account/side-nav/side-nav.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/account/side-nav/side-nav.component.ts ***!
  \***************************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/theme/styleVariables.model */ "./src/app/core/theme/styleVariables.model.ts");
/* harmony import */ var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/messaging/messaging.service */ "./src/app/services/messaging/messaging.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/pipes/localization.pipe */ "./src/app/shared/pipes/localization.pipe.ts");











let SideNavComponent = class SideNavComponent {
    constructor(userService, message, util, router, translate, localization) {
        this.userService = userService;
        this.message = message;
        this.util = util;
        this.router = router;
        this.translate = translate;
        this.localization = localization;
        this.user = {};
        this.activeParentRoute = '';
        this.isSocialLogedIn = false;
        this.isMobile = _core_global__WEBPACK_IMPORTED_MODULE_1__["GlobalVariable"].IS_MOBILE;
        this.client_code = _core_global__WEBPACK_IMPORTED_MODULE_1__["GlobalVariable"].UNIQUE_ID;
        /** page reload */
        this.activeParentRoute = this.router.url.split('/')[2];
        this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_3__["StyleVariables"]();
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]))
            .subscribe(event => {
            if (event && event.url) {
                this.activeParentRoute = (event.url).split('/')[2];
            }
        });
    }
    ngOnInit() {
        this.makeSubscribe();
    }
    makeSubscribe() {
        this.settingsSubscription = this.util.getSettings.subscribe((settings) => {
            this.settings = settings;
        });
        this.styleSubscription = this.util.getStyles.subscribe(style => {
            this.style = style;
        });
        this.getDataSubscribe = this.userService.currentUser
            .subscribe(userData => {
            if (userData && userData['access_token']) {
                this.user = userData;
                this.isSocialLogedIn = (this.user['fb_access_token'] || this.user['google_access_token']) ? true : false;
            }
        });
    }
    signOutConfirmation() {
        this.message.confirm(`${this.translate.instant('Sign Out')}`).then(data => {
            if (data.value) {
                this.userService.userSignOut();
                this.message.toast('success', this.translate.instant('Sign Out Successfully'));
            }
        });
    }
    ngOnDestroy() {
        this.getDataSubscribe.unsubscribe();
        this.styleSubscription.unsubscribe();
    }
};
SideNavComponent.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_10__["LocalizationPipe"] }
];
SideNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-side-nav',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./side-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/side-nav/side-nav.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/layout/account/side-nav/side-nav.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
        _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_10__["LocalizationPipe"]])
], SideNavComponent);



/***/ }),

/***/ "./src/app/layout/account/subscription-detail/subscription-detail.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/account/subscription-detail/subscription-detail.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Start Subscription Plan CSS */\nsection#Subscriptions_Plan {\n  padding: 40px 0px;\n  border: 1px solid var(--secondaryColor);\n  border-radius: 4px;\n}\n.Subscriptions_Plan_heading {\n  text-align: center;\n  width: 500px;\n  margin: 0 auto 40px;\n  max-width: 100%;\n}\n.Subscriptions_Plan_heading h1 {\n  font-size: 25px;\n  color: #4B5061;\n}\n.Subscriptions_Plan_heading p {\n  font-size: 15px;\n  color: #8D8D8D;\n}\n.Subscriptions_Plan_box {\n  border-radius: 20px;\n  background-color: #FFFFFF;\n  text-align: center;\n  padding: 40px;\n}\n.Subscriptions_Plan_img {\n  width: 500px;\n  margin: 0 auto 20px;\n  max-width: 100%;\n}\n.Subscriptions_Plan_img h2 {\n  font-size: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.Subscriptions_Plan_img p {\n  color: #8D8D8D;\n  font-size: 15px;\n}\n.My_Subscription {\n  background-color: #DA2631;\n  border-radius: 5px;\n  padding: 13px 20px;\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 14px;\n  margin-top: 20px;\n  display: inline-block;\n}\n.My_Subscription:hover {\n  text-decoration: none;\n  color: #fff;\n}\n.Subscriptions_Plan_outter {\n  width: 800px;\n  margin: 60px auto;\n  max-width: 100%;\n}\n.Subscriptions_Plan_inner {\n  border: 1px solid rgba(151, 151, 151, 0.24);\n  border-radius: 10px;\n  background-color: #FFFFFF;\n  padding: 30px;\n  margin-bottom: 20px;\n}\n.Subscriptions_Plan_inner img {\n  margin-bottom: 30px;\n}\n.Subscriptions_Plan_inner p {\n  color: #8D8D8D;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.Subscriptions_Plan_inner ul {\n  padding: 0px;\n  list-style: none;\n  text-align: left;\n  width: 200px;\n  margin: 0 auto;\n}\n.Subscriptions_Plan_inner ul {\n  padding: 0px;\n  list-style: none;\n  width: 200px;\n  text-align: left;\n  margin: 30px auto 60px;\n}\n.Subscriptions_Plan_inner ul li {\n  color: #8D8D8D;\n  margin-bottom: 10px;\n  font-size: 15px;\n}\n.Subscriptions_Plan_inner ul li svg {\n  position: relative;\n  top: 3px;\n  margin-right: 10px;\n}\n.Subscriptions_Plan_inner h4 {\n  font-size: 18px;\n  color: #4B5061;\n  margin-bottom: 30px;\n}\n.Subscriptions_price span {\n  color: #4b50616e;\n  font-size: 24px;\n  position: relative;\n}\n.Subscriptions_price span:after {\n  position: absolute;\n  content: \"\";\n  width: 60px;\n  height: 2px;\n  background: #4b506159;\n  left: -7px;\n  top: 14px;\n}\n.Subscriptions_price h1 {\n  color: #4B5061;\n  font-size: 48px;\n}\n.Subscriptions_Plan_inner:hover {\n  box-shadow: 0 10px 19px 0 rgba(214, 67, 26, 0.14);\n}\n.Subscriptions_Plan_inner.selected {\n  border: 4px solid rgba(214, 67, 26, 0.19);\n}\n/* End Subscription Plan CSS */\n/* Start Subscription validation Plan CSS */\n.Subscriptions_Plan_validation {\n  border: 2px solid #DDDDDD;\n  border-radius: 10px;\n}\n.Subscriptions_Plan_validation_inner {\n  border-bottom: 2px solid #DDDDDD;\n  padding: 25px 50px;\n}\n.Subscriptions_Plan_validation_inner .Subscriptions_validation_heading.bb-r {\n  border-right: 1px solid #DDDDDD;\n  text-align: left;\n}\n.Subscriptions_validation_heading h4 {\n  margin-bottom: 0px;\n  font-weight: 600;\n  font-size: 20px;\n}\n.Subscriptions_validation_heading span {\n  color: #8D8D8D;\n  font-size: 16px;\n  font-weight: 300;\n  margin-bottom: 10px;\n  display: block;\n}\n.Subscriptions_validation_heading {\n  text-align: right;\n}\n.Subscriptions_val_inr {\n  width: auto;\n  display: inline-block;\n  text-align: center;\n}\n.Subscriptions_validation_heading2 {\n  padding: 40px 20px;\n  text-align: center;\n  display: inline-grid;\n}\n.Subscriptions_validation_heading2 span {\n  color: #8D8D8D;\n  font-size: 16px;\n  margin-top: 20px;\n}\n.Subscriptions_validation_heading2 h1 {\n  font-weight: 600;\n}\n.Subscriptions_validation_heading2 h4 {\n  font-size: 18px;\n}\n.Subscriptions_validation_heading2 ul {\n  list-style: none;\n  text-align: left;\n  padding: 0px;\n}\n.Subscriptions_validation_heading2 ul li {\n  margin-bottom: 10px;\n  line-height: 26px;\n  color: #8D8D8D;\n  font-size: 15px;\n  font-weight: 300;\n}\n.Subscriptions_validation_heading2 ul li svg {\n  margin-right: 10px;\n  position: relative;\n  top: 3px;\n}\n.renew-Subscription {\n  background: #F6F6F6;\n  padding: 40px;\n}\n.renew-Subscription a {\n  border-radius: 5px;\n  padding: 15px 30px;\n  display: inline-block;\n  text-transform: uppercase;\n  margin: 0px 10px;\n}\n.renew-Subscription a.renew_btn:hover {\n  text-decoration: none;\n  color: #fff;\n}\n.renew-Subscription a.renew_btn {\n  background-color: var(--primaryColor);\n  color: #fff;\n  border: 2px solid var(--primaryColor);\n  cursor: pointer;\n}\n.renew-Subscription a.cancle_renw_btn {\n  border: 2px solid #979797;\n  color: #6b6969;\n  cursor: pointer;\n}\n.renew-Subscription a.cancle_renw_btn:hover {\n  text-decoration: none;\n  color: #6b6969;\n}\n/* End Subscription validation Plan CSS */\n@media (max-width: 600px) {\n  .Subscriptions_Plan_box {\n    padding: 40px 20px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FjY291bnQvc3Vic2NyaXB0aW9uLWRldGFpbC9zdWJzY3JpcHRpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFBO0FBQ0E7RUFDSSxpQkFBaUI7RUFDakIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQUVuQjtBQURDO0VBQ0csZUFBZTtFQUNmLGNBQWM7QUFJbEI7QUFIQztFQUNHLGVBQWU7RUFDZixjQUFjO0FBTWxCO0FBSkE7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0FBT2pCO0FBTEE7RUFDSSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7QUFRbkI7QUFOQTtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBU3ZCO0FBUkM7RUFDRyxjQUFjO0VBQ2QsZUFBZTtBQVduQjtBQVRBO0VBQ0kseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQVl6QjtBQVZBO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVU7QUFhZDtBQVhBO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBY25CO0FBYkM7RUFDRywyQ0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0FBZ0J2QjtBQWZDO0VBQ0csbUJBQW1CO0FBa0J2QjtBQWpCQztFQUNHLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsbUJBQW1CO0FBb0J2QjtBQW5CQztFQUNHLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0FBc0JsQjtBQXBCQTtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBcUI7QUF1QnpCO0FBdEJDO0VBQ0csY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0FBeUJuQjtBQXhCQztFQUNHLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0JBQWtCO0FBMkJ0QjtBQXpCQTtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0FBNEJ2QjtBQTNCQztFQUNHLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0FBOEJ0QjtBQTdCQztFQUNHLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7QUFnQ2I7QUEvQkM7RUFDRyxjQUFjO0VBQ2QsZUFBZTtBQWtDbkI7QUFoQ0E7RUFDSSxpREFBaUQ7QUFtQ3JEO0FBakNBO0VBQ0kseUNBQXNDO0FBb0MxQztBQWxDQSw4QkFBQTtBQUNBLDJDQUFBO0FBQ0E7RUFDSSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBcUN2QjtBQW5DQTtFQUNJLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFzQ3RCO0FBcENBO0VBQ0ksK0JBQStCO0VBQy9CLGdCQUFnQjtBQXVDcEI7QUFyQ0E7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUF3Q25CO0FBdENBO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7QUF5Q2xCO0FBdkNBO0VBQ0ksaUJBQWlCO0FBMENyQjtBQXhDQTtFQUNJLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0FBMkN0QjtBQXpDQTtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBNEN4QjtBQTFDQTtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBNkNwQjtBQTVDQztFQUNHLGdCQUFnQjtBQStDcEI7QUE5Q0M7RUFDRyxlQUFlO0FBaURuQjtBQWhEQztFQUNHLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtBQW1EaEI7QUFsREM7RUFDRyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBcURwQjtBQXBEQztFQUNHLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtBQXVEWjtBQXREQztFQUNHLG1CQUFtQjtFQUNuQixhQUFhO0FBeURqQjtBQXhEQztFQUNHLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUEyRHBCO0FBekRBO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVU7QUE0RGQ7QUExREE7RUFDSSxxQ0FBcUM7RUFDckMsV0FBVztFQUNYLHFDQUFxQztFQUNyQyxlQUFlO0FBNkRuQjtBQTNEQTtFQUNJLHlCQUF5QjtFQUN6QixjQUFhO0VBQ2IsZUFBZTtBQThEbkI7QUE1REE7RUFDSSxxQkFBcUI7RUFDckIsY0FBYTtBQStEakI7QUE3REEseUNBQUE7QUFDQTtFQUNJO0lBQ0ksa0JBQWtCO0VBZ0V4QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FjY291bnQvc3Vic2NyaXB0aW9uLWRldGFpbC9zdWJzY3JpcHRpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3RhcnQgU3Vic2NyaXB0aW9uIFBsYW4gQ1NTICovXG5zZWN0aW9uI1N1YnNjcmlwdGlvbnNfUGxhbiB7XG4gICAgcGFkZGluZzogNDBweCAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5TdWJzY3JpcHRpb25zX1BsYW5faGVhZGluZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDAgYXV0byA0MHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbn0uU3Vic2NyaXB0aW9uc19QbGFuX2hlYWRpbmcgaDEge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogIzRCNTA2MTtcbn0uU3Vic2NyaXB0aW9uc19QbGFuX2hlYWRpbmcgcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjOEQ4RDhEO1xufVxuLlN1YnNjcmlwdGlvbnNfUGxhbl9ib3gge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweDtcbn1cbi5TdWJzY3JpcHRpb25zX1BsYW5faW1nIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uU3Vic2NyaXB0aW9uc19QbGFuX2ltZyBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0uU3Vic2NyaXB0aW9uc19QbGFuX2ltZyBwIHtcbiAgICBjb2xvcjogIzhEOEQ4RDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uTXlfU3Vic2NyaXB0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREEyNjMxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxM3B4IDIwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uTXlfU3Vic2NyaXB0aW9uOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjojZmZmO1xufVxuLlN1YnNjcmlwdGlvbnNfUGxhbl9vdXR0ZXIge1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDYwcHggYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59LlN1YnNjcmlwdGlvbnNfUGxhbl9pbm5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTEsMTUxLDE1MSwwLjI0KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufS5TdWJzY3JpcHRpb25zX1BsYW5faW5uZXIgaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufS5TdWJzY3JpcHRpb25zX1BsYW5faW5uZXIgcCB7XG4gICAgY29sb3I6ICM4RDhEOEQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufS5TdWJzY3JpcHRpb25zX1BsYW5faW5uZXIgdWwge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLlN1YnNjcmlwdGlvbnNfUGxhbl9pbm5lciB1bCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOjMwcHggYXV0byA2MHB4O1xufS5TdWJzY3JpcHRpb25zX1BsYW5faW5uZXIgdWwgbGkge1xuICAgIGNvbG9yOiAjOEQ4RDhEO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufS5TdWJzY3JpcHRpb25zX1BsYW5faW5uZXIgdWwgbGkgc3ZnIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLlN1YnNjcmlwdGlvbnNfUGxhbl9pbm5lciBoNCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjNEI1MDYxO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59LlN1YnNjcmlwdGlvbnNfcHJpY2Ugc3BhbiB7XG4gICAgY29sb3I6ICM0YjUwNjE2ZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufS5TdWJzY3JpcHRpb25zX3ByaWNlIHNwYW46YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6ICM0YjUwNjE1OTtcbiAgICBsZWZ0OiAtN3B4O1xuICAgIHRvcDogMTRweDtcbn0uU3Vic2NyaXB0aW9uc19wcmljZSBoMSB7XG4gICAgY29sb3I6ICM0QjUwNjE7XG4gICAgZm9udC1zaXplOiA0OHB4O1xufVxuLlN1YnNjcmlwdGlvbnNfUGxhbl9pbm5lcjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE5cHggMCByZ2JhKDIxNCwgNjcsIDI2LCAwLjE0KTtcbn1cbi5TdWJzY3JpcHRpb25zX1BsYW5faW5uZXIuc2VsZWN0ZWQge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjE0LDY3LDI2LDAuMTkpO1xufVxuLyogRW5kIFN1YnNjcmlwdGlvbiBQbGFuIENTUyAqL1xuLyogU3RhcnQgU3Vic2NyaXB0aW9uIHZhbGlkYXRpb24gUGxhbiBDU1MgKi9cbi5TdWJzY3JpcHRpb25zX1BsYW5fdmFsaWRhdGlvbiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0RERERERDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLlN1YnNjcmlwdGlvbnNfUGxhbl92YWxpZGF0aW9uX2lubmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0RERERERDtcbiAgICBwYWRkaW5nOiAyNXB4IDUwcHg7XG59XG4uU3Vic2NyaXB0aW9uc19QbGFuX3ZhbGlkYXRpb25faW5uZXIgLlN1YnNjcmlwdGlvbnNfdmFsaWRhdGlvbl9oZWFkaW5nLmJiLXJ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0RERERERDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLlN1YnNjcmlwdGlvbnNfdmFsaWRhdGlvbl9oZWFkaW5nIGg0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uU3Vic2NyaXB0aW9uc192YWxpZGF0aW9uX2hlYWRpbmcgc3BhbiB7XG4gICAgY29sb3I6ICM4RDhEOEQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5TdWJzY3JpcHRpb25zX3ZhbGlkYXRpb25faGVhZGluZyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uU3Vic2NyaXB0aW9uc192YWxfaW5yIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLlN1YnNjcmlwdGlvbnNfdmFsaWRhdGlvbl9oZWFkaW5nMiB7XG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbn1cbi5TdWJzY3JpcHRpb25zX3ZhbGlkYXRpb25faGVhZGluZzIgc3BhbiB7XG4gICAgY29sb3I6ICM4RDhEOEQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59LlN1YnNjcmlwdGlvbnNfdmFsaWRhdGlvbl9oZWFkaW5nMiBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn0uU3Vic2NyaXB0aW9uc192YWxpZGF0aW9uX2hlYWRpbmcyIGg0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59LlN1YnNjcmlwdGlvbnNfdmFsaWRhdGlvbl9oZWFkaW5nMiB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDBweDtcbn0uU3Vic2NyaXB0aW9uc192YWxpZGF0aW9uX2hlYWRpbmcyIHVsIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIGNvbG9yOiAjOEQ4RDhEO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xufS5TdWJzY3JpcHRpb25zX3ZhbGlkYXRpb25faGVhZGluZzIgdWwgbGkgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogM3B4O1xufS5yZW5ldy1TdWJzY3JpcHRpb24ge1xuICAgIGJhY2tncm91bmQ6ICNGNkY2RjY7XG4gICAgcGFkZGluZzogNDBweDtcbn0ucmVuZXctU3Vic2NyaXB0aW9uIGEge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbn1cbi5yZW5ldy1TdWJzY3JpcHRpb24gYS5yZW5ld19idG46aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiNmZmY7XG59XG4ucmVuZXctU3Vic2NyaXB0aW9uIGEucmVuZXdfYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeUNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVuZXctU3Vic2NyaXB0aW9uIGEuY2FuY2xlX3JlbndfYnRue1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5Nzk3OTc7XG4gICAgY29sb3I6IzZiNjk2OTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVuZXctU3Vic2NyaXB0aW9uIGEuY2FuY2xlX3JlbndfYnRuOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjojNmI2OTY5O1xufVxuLyogRW5kIFN1YnNjcmlwdGlvbiB2YWxpZGF0aW9uIFBsYW4gQ1NTICovXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuU3Vic2NyaXB0aW9uc19QbGFuX2JveHtcbiAgICAgICAgcGFkZGluZzogNDBweCAyMHB4O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/layout/account/subscription-detail/subscription-detail.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/account/subscription-detail/subscription-detail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SubscriptionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionDetailComponent", function() { return SubscriptionDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/models/pagination.model */ "./src/app/shared/models/pagination.model.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/messaging/messaging.service */ "./src/app/services/messaging/messaging.service.ts");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_window_window_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/window/window.service */ "./src/app/services/window/window.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");












let SubscriptionDetailComponent = class SubscriptionDetailComponent {
    constructor(message, translate, userService, httpService, utilityService, router, window) {
        this.message = message;
        this.translate = translate;
        this.userService = userService;
        this.httpService = httpService;
        this.utilityService = utilityService;
        this.router = router;
        this.window = window;
        this.isLoading = false;
        this.currency = '';
        this.isPayOnline = false;
        this.paymentOrderModel = {};
        this.subscriptions = [];
        this.currency = _core_global__WEBPACK_IMPORTED_MODULE_6__["GlobalVariable"].CURRENCY;
        this.pagination = new _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_2__["PaginationModel"]();
        this.pagination.perPage = 4;
        this.pagination.currentPage = 1;
        this.pagination.offset = 0;
    }
    ngOnInit() {
        this.styleSubscription = this.utilityService.getStyles.subscribe((style) => {
            this.style = style;
        });
        this.userSubscription = this.userService.currentUser
            .subscribe(user => {
            if (!!user) {
                this.user = user;
            }
        });
        this.settingSubscription = this.utilityService.getSettings.subscribe((settings) => {
            if (!!settings) {
                this.settings = settings;
            }
        });
        this.getSubscriptions();
    }
    getSubscriptions() {
        this.isLoading = true;
        const query = {
            'skip': this.pagination.offset,
            'limit': this.pagination.perPage
        };
        this.httpService.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_5__["ApiUrl"].getMySubscriptionList, query).subscribe((response) => {
            if (response && response.data) {
                this.subscriptions = response.data.list;
                this.pagination.count = response.data.count;
                this.selectedSubscription = this.subscriptions[0];
            }
            this.isLoading = false;
        }, (err) => this.isLoading = false);
    }
    buySubscription() {
        this.paymentOrderModel = {
            amount: parseInt(this.selectedSubscription.price),
            user: this.user,
            address: {}
        };
        this.isPayOnline = true;
        this.utilityService.setLocalData('transactionType', 'subscription');
    }
    onPaymentError(err) {
        this.message.toast('error', err);
        this.isPayOnline = false;
    }
    trackByFn(id, index) {
        return index;
    }
    onPaymentSuccess(transaction) {
        this.isPayOnline = false;
        const payload = {
            subscription_plan_id: this.selectedSubscription.subscription_plan_id,
            end_date: this.selectedSubscription.end_date,
            renew_id: this.selectedSubscription.renew_id,
            type: this.selectedSubscription.type,
            price: this.paymentOrderModel.amount,
            action: 2,
            paymentType: 1
            // languageId: `${this.utilityService.handler.languageId}`
        };
        payload['benefit_type'] = this.selectedSubscription.benefits.map(benefit => benefit.benefit_type).toString();
        if (transaction) {
            payload['gateway_unique_id'] = transaction.paymentGatewayId;
            payload['currency'] = _core_global__WEBPACK_IMPORTED_MODULE_6__["GlobalVariable"].CURRENCY_NAME;
            if (transaction.token) {
                payload['payment_token'] = transaction.token;
            }
            else if (transaction.mobile_no) {
                payload['mobile_no'] = transaction.mobile_no;
            }
            else {
                payload['customer_payment_id'] = transaction.customer_payment_id;
                payload['card_id'] = transaction.card_id;
            }
        }
        this.isLoading = true;
        this.utilityService.setLocalData('gop', payload, true);
        if (transaction && transaction.waitForSuccess) {
            const a = document.createElement('a');
            a.href = transaction['paymentUrl'];
            a.click();
            return;
        }
        this.httpService.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_5__["ApiUrl"].buySubscription, payload).subscribe((response) => {
            if (response) {
                this.message.toast('info', this.translate.instant('Subscription Successfully Renew'));
                this.getSubscriptions();
            }
            this.isLoading = false;
        }, (err) => this.isLoading = false);
    }
    cancelSubscription() {
        this.isLoading = true;
        const payload = {
            subscription_plan_id: this.selectedSubscription.subscription_plan_id,
            action: 1 //1 - cancel, 2 - delete
        };
        this.httpService.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_5__["ApiUrl"].cancelSubscription, payload).subscribe((response) => {
            this.isLoading = false;
            this.setUserData();
            this.router.navigate(['/', 'account', 'subscriptions']);
        }, (err) => this.isLoading = false);
    }
    setUserData() {
        var user = this.user;
        user['is_subscribed'] = 0;
        this.userService.setUserLocalData(user);
    }
    pageChange(event) {
        this.pagination.currentPage = event;
        this.pagination.offset = event > 1 ? (event - 1) * this.pagination.perPage : 0;
        this.getSubscriptions();
        this.window.scrollTo(0, 0);
    }
    ngOnDestroy() {
        if (!!this.styleSubscription)
            this.styleSubscription.unsubscribe();
        if (!!this.settingSubscription)
            this.settingSubscription.unsubscribe();
        if (!!this.userSubscription)
            this.userSubscription.unsubscribe();
    }
};
SubscriptionDetailComponent.ctorParameters = () => [
    { type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [_services_window_window_service__WEBPACK_IMPORTED_MODULE_10__["WINDOW"],] }] }
];
SubscriptionDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'app-subscription-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./subscription-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/subscription-detail/subscription-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./subscription-detail.component.scss */ "./src/app/layout/account/subscription-detail/subscription-detail.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        Window])
], SubscriptionDetailComponent);



/***/ }),

/***/ "./src/app/layout/account/subscriptions/subscriptions.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/layout/account/subscriptions/subscriptions.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Start Subscription Plan CSS */\nsection#Subscriptions_Plan {\n  padding: 40px 0px;\n  border: 1px solid var(--secondaryColor);\n  border-radius: 4px;\n}\n.Subscriptions_Plan_heading {\n  text-align: center;\n  width: 500px;\n  margin: 0 auto 40px;\n  max-width: 100%;\n}\n.Subscriptions_Plan_heading h1 {\n  font-size: 25px;\n  color: #4B5061;\n}\n.Subscriptions_Plan_heading p {\n  font-size: 15px;\n  color: #8D8D8D;\n}\n.Subscriptions_Plan_box {\n  border-radius: 20px;\n  background-color: #FFFFFF;\n  text-align: center;\n  padding: 40px 20px;\n}\n.Subscriptions_Plan_img {\n  width: 500px;\n  margin: 0 auto 20px;\n  max-width: 100%;\n}\n.Subscriptions_Plan_img h2 {\n  font-size: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.Subscriptions_Plan_img p {\n  color: #8D8D8D;\n  font-size: 15px;\n}\n.My_Subscription {\n  background-color: var(--primaryColor);\n  border-radius: 5px;\n  padding: 13px 20px;\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 14px;\n  margin-top: 20px;\n  display: inline-block;\n}\n.My_Subscription:hover {\n  text-decoration: none;\n  color: #fff;\n}\n.Subscriptions_Plan_outter {\n  width: 800px;\n  margin: 60px auto;\n  max-width: 100%;\n}\n.Subscriptions_Plan_inner {\n  border: 1px solid rgba(151, 151, 151, 0.24);\n  border-radius: 10px;\n  background-color: #FFFFFF;\n  padding: 30px;\n  margin-bottom: 20px;\n}\n.Subscriptions_Plan_inner img {\n  margin-bottom: 30px;\n}\n.Subscriptions_Plan_inner p {\n  color: #8D8D8D;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.Subscriptions_Plan_inner ul {\n  padding: 0px;\n  list-style: none;\n  text-align: left;\n  width: 200px;\n  margin: 0 auto;\n}\n.Subscriptions_Plan_inner ul {\n  padding: 0px;\n  list-style: none;\n  width: 200px;\n  text-align: left;\n  margin: 30px auto 60px;\n}\n.Subscriptions_Plan_inner ul li {\n  color: #8D8D8D;\n  margin-bottom: 10px;\n  font-size: 15px;\n}\n.Subscriptions_Plan_inner ul li svg {\n  position: relative;\n  top: 3px;\n  margin-right: 10px;\n}\n.Subscriptions_Plan_inner h4 {\n  font-size: 18px;\n  color: #4B5061;\n  margin-bottom: 30px;\n}\n.Subscriptions_price span {\n  color: #4b50616e;\n  font-size: 24px;\n  position: relative;\n}\n.Subscriptions_price span:after {\n  position: absolute;\n  content: \"\";\n  width: 60px;\n  height: 2px;\n  background: #4b506159;\n  left: -7px;\n  top: 14px;\n}\n.Subscriptions_price h1 {\n  color: #4B5061;\n  font-size: 48px;\n}\n.Subscriptions_Plan_inner:hover {\n  box-shadow: 0 10px 19px 0 rgba(214, 67, 26, 0.14);\n}\n.Subscriptions_Plan_inner.selected {\n  border: 4px solid rgba(214, 67, 26, 0.19);\n}\n/* End Subscription Plan CSS */\n/* Start Subscription validation Plan CSS */\n.Subscriptions_Plan_validation {\n  border: 2px solid #DDDDDD;\n  border-radius: 10px;\n}\n.Subscriptions_Plan_validation_inner {\n  border-bottom: 2px solid #DDDDDD;\n  padding: 25px 50px;\n}\n.Subscriptions_Plan_validation_inner .Subscriptions_validation_heading.bb-r {\n  border-right: 1px solid #DDDDDD;\n  text-align: left;\n}\n.Subscriptions_validation_heading h4 {\n  margin-bottom: 0px;\n  font-weight: 600;\n  font-size: 20px;\n}\n.Subscriptions_validation_heading span {\n  color: #8D8D8D;\n  font-size: 16px;\n  font-weight: 300;\n  margin-bottom: 10px;\n  display: block;\n}\n.Subscriptions_validation_heading {\n  text-align: right;\n}\n.Subscriptions_val_inr {\n  width: auto;\n  display: inline-block;\n  text-align: center;\n}\n.Subscriptions_validation_heading2 {\n  padding: 40px 20px;\n  text-align: center;\n  display: inline-grid;\n}\n.Subscriptions_validation_heading2 span {\n  color: #8D8D8D;\n  font-size: 16px;\n  margin-top: 20px;\n}\n.Subscriptions_validation_heading2 h1 {\n  font-weight: 600;\n}\n.Subscriptions_validation_heading2 h4 {\n  font-size: 18px;\n}\n.Subscriptions_validation_heading2 ul {\n  list-style: none;\n  text-align: left;\n  padding: 0px;\n}\n.Subscriptions_validation_heading2 ul li {\n  margin-bottom: 10px;\n  line-height: 26px;\n  color: #8D8D8D;\n  font-size: 15px;\n  font-weight: 300;\n}\n.Subscriptions_validation_heading2 ul li svg {\n  margin-right: 10px;\n  position: relative;\n  top: 3px;\n}\n.renew-Subscription {\n  background: #F6F6F6;\n  padding: 40px;\n}\n.renew-Subscription a {\n  border-radius: 5px;\n  padding: 15px 30px;\n  display: inline-block;\n  text-transform: uppercase;\n  margin: 0px 10px;\n}\n.renew-Subscription a.renew_btn:hover {\n  text-decoration: none;\n  color: #fff;\n}\n.renew-Subscription a.renew_btn {\n  background-color: #DA2631;\n  color: #fff;\n  border: 2px solid #DA2631;\n}\n.renew-Subscription a.cancle_renw_btn {\n  border: 2px solid #979797;\n  color: #6b6969;\n}\n.renew-Subscription a.cancle_renw_btn:hover {\n  text-decoration: none;\n  color: #6b6969;\n}\n.btn {\n  background-color: var(--primaryColor);\n  border-radius: 5px;\n  padding: 10px 20px;\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 14px;\n  margin-top: 20px;\n  display: inline-block;\n}\n/* End Subscription validation Plan CSS */\n@media (max-width: 600px) {\n  .Subscriptions_Plan_box {\n    padding: 40px 20px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FjY291bnQvc3Vic2NyaXB0aW9ucy9zdWJzY3JpcHRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFBO0FBQ0E7RUFDSSxpQkFBaUI7RUFDakIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQUVuQjtBQURDO0VBQ0csZUFBZTtFQUNmLGNBQWM7QUFJbEI7QUFIQztFQUNHLGVBQWU7RUFDZixjQUFjO0FBTWxCO0FBSkE7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFPdEI7QUFMQTtFQUNJLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQVFuQjtBQU5BO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFTdkI7QUFSQztFQUNHLGNBQWM7RUFDZCxlQUFlO0FBV25CO0FBVEE7RUFDSSxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBWXpCO0FBVkE7RUFDSSxxQkFBcUI7RUFDckIsV0FBVTtBQWFkO0FBWEE7RUFDSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFjbkI7QUFiQztFQUNHLDJDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7QUFnQnZCO0FBZkM7RUFDRyxtQkFBbUI7QUFrQnZCO0FBakJDO0VBQ0csY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFvQnZCO0FBbkJDO0VBQ0csWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7QUFzQmxCO0FBcEJBO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHNCQUFxQjtBQXVCekI7QUF0QkM7RUFDRyxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7QUF5Qm5CO0FBeEJDO0VBQ0csa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixrQkFBa0I7QUEyQnRCO0FBekJBO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7QUE0QnZCO0FBM0JDO0VBQ0csZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7QUE4QnRCO0FBN0JDO0VBQ0csa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsU0FBUztBQWdDYjtBQS9CQztFQUNHLGNBQWM7RUFDZCxlQUFlO0FBa0NuQjtBQWhDQTtFQUNJLGlEQUFpRDtBQW1DckQ7QUFqQ0E7RUFDSSx5Q0FBc0M7QUFvQzFDO0FBbENBLDhCQUFBO0FBQ0EsMkNBQUE7QUFDQTtFQUNJLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFxQ3ZCO0FBbkNBO0VBQ0ksZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQXNDdEI7QUFwQ0E7RUFDSSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBdUNwQjtBQXJDQTtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQXdDbkI7QUF0Q0E7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztBQXlDbEI7QUF2Q0E7RUFDSSxpQkFBaUI7QUEwQ3JCO0FBeENBO0VBQ0ksV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7QUEyQ3RCO0FBekNBO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUE0Q3hCO0FBMUNBO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUE2Q3BCO0FBNUNDO0VBQ0csZ0JBQWdCO0FBK0NwQjtBQTlDQztFQUNHLGVBQWU7QUFpRG5CO0FBaERDO0VBQ0csZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBbURoQjtBQWxEQztFQUNHLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFxRHBCO0FBcERDO0VBQ0csa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0FBdURaO0FBdERDO0VBQ0csbUJBQW1CO0VBQ25CLGFBQWE7QUF5RGpCO0FBeERDO0VBQ0csa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQTJEcEI7QUF6REE7RUFDSSxxQkFBcUI7RUFDckIsV0FBVTtBQTREZDtBQTFEQTtFQUNJLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gseUJBQXlCO0FBNkQ3QjtBQTNEQTtFQUNJLHlCQUF5QjtFQUN6QixjQUFhO0FBOERqQjtBQTVEQTtFQUNJLHFCQUFxQjtFQUNyQixjQUFhO0FBK0RqQjtBQTVEQTtFQUNJLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7QUErRHpCO0FBN0RBLHlDQUFBO0FBQ0E7RUFDSTtJQUNJLGtCQUFrQjtFQWdFeEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hY2NvdW50L3N1YnNjcmlwdGlvbnMvc3Vic2NyaXB0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0YXJ0IFN1YnNjcmlwdGlvbiBQbGFuIENTUyAqL1xuc2VjdGlvbiNTdWJzY3JpcHRpb25zX1BsYW4ge1xuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeUNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uU3Vic2NyaXB0aW9uc19QbGFuX2hlYWRpbmcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gNDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59LlN1YnNjcmlwdGlvbnNfUGxhbl9oZWFkaW5nIGgxIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICM0QjUwNjE7XG59LlN1YnNjcmlwdGlvbnNfUGxhbl9oZWFkaW5nIHAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzhEOEQ4RDtcbn1cbi5TdWJzY3JpcHRpb25zX1BsYW5fYm94IHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcbn1cbi5TdWJzY3JpcHRpb25zX1BsYW5faW1nIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uU3Vic2NyaXB0aW9uc19QbGFuX2ltZyBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0uU3Vic2NyaXB0aW9uc19QbGFuX2ltZyBwIHtcbiAgICBjb2xvcjogIzhEOEQ4RDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uTXlfU3Vic2NyaXB0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxM3B4IDIwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uTXlfU3Vic2NyaXB0aW9uOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjojZmZmO1xufVxuLlN1YnNjcmlwdGlvbnNfUGxhbl9vdXR0ZXIge1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDYwcHggYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59LlN1YnNjcmlwdGlvbnNfUGxhbl9pbm5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTEsMTUxLDE1MSwwLjI0KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufS5TdWJzY3JpcHRpb25zX1BsYW5faW5uZXIgaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufS5TdWJzY3JpcHRpb25zX1BsYW5faW5uZXIgcCB7XG4gICAgY29sb3I6ICM4RDhEOEQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufS5TdWJzY3JpcHRpb25zX1BsYW5faW5uZXIgdWwge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLlN1YnNjcmlwdGlvbnNfUGxhbl9pbm5lciB1bCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOjMwcHggYXV0byA2MHB4O1xufS5TdWJzY3JpcHRpb25zX1BsYW5faW5uZXIgdWwgbGkge1xuICAgIGNvbG9yOiAjOEQ4RDhEO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufS5TdWJzY3JpcHRpb25zX1BsYW5faW5uZXIgdWwgbGkgc3ZnIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLlN1YnNjcmlwdGlvbnNfUGxhbl9pbm5lciBoNCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjNEI1MDYxO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59LlN1YnNjcmlwdGlvbnNfcHJpY2Ugc3BhbiB7XG4gICAgY29sb3I6ICM0YjUwNjE2ZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufS5TdWJzY3JpcHRpb25zX3ByaWNlIHNwYW46YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6ICM0YjUwNjE1OTtcbiAgICBsZWZ0OiAtN3B4O1xuICAgIHRvcDogMTRweDtcbn0uU3Vic2NyaXB0aW9uc19wcmljZSBoMSB7XG4gICAgY29sb3I6ICM0QjUwNjE7XG4gICAgZm9udC1zaXplOiA0OHB4O1xufVxuLlN1YnNjcmlwdGlvbnNfUGxhbl9pbm5lcjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE5cHggMCByZ2JhKDIxNCwgNjcsIDI2LCAwLjE0KTtcbn1cbi5TdWJzY3JpcHRpb25zX1BsYW5faW5uZXIuc2VsZWN0ZWQge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjE0LDY3LDI2LDAuMTkpO1xufVxuLyogRW5kIFN1YnNjcmlwdGlvbiBQbGFuIENTUyAqL1xuLyogU3RhcnQgU3Vic2NyaXB0aW9uIHZhbGlkYXRpb24gUGxhbiBDU1MgKi9cbi5TdWJzY3JpcHRpb25zX1BsYW5fdmFsaWRhdGlvbiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0RERERERDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLlN1YnNjcmlwdGlvbnNfUGxhbl92YWxpZGF0aW9uX2lubmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0RERERERDtcbiAgICBwYWRkaW5nOiAyNXB4IDUwcHg7XG59XG4uU3Vic2NyaXB0aW9uc19QbGFuX3ZhbGlkYXRpb25faW5uZXIgLlN1YnNjcmlwdGlvbnNfdmFsaWRhdGlvbl9oZWFkaW5nLmJiLXJ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0RERERERDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLlN1YnNjcmlwdGlvbnNfdmFsaWRhdGlvbl9oZWFkaW5nIGg0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uU3Vic2NyaXB0aW9uc192YWxpZGF0aW9uX2hlYWRpbmcgc3BhbiB7XG4gICAgY29sb3I6ICM4RDhEOEQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5TdWJzY3JpcHRpb25zX3ZhbGlkYXRpb25faGVhZGluZyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uU3Vic2NyaXB0aW9uc192YWxfaW5yIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLlN1YnNjcmlwdGlvbnNfdmFsaWRhdGlvbl9oZWFkaW5nMiB7XG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbn1cbi5TdWJzY3JpcHRpb25zX3ZhbGlkYXRpb25faGVhZGluZzIgc3BhbiB7XG4gICAgY29sb3I6ICM4RDhEOEQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59LlN1YnNjcmlwdGlvbnNfdmFsaWRhdGlvbl9oZWFkaW5nMiBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn0uU3Vic2NyaXB0aW9uc192YWxpZGF0aW9uX2hlYWRpbmcyIGg0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59LlN1YnNjcmlwdGlvbnNfdmFsaWRhdGlvbl9oZWFkaW5nMiB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDBweDtcbn0uU3Vic2NyaXB0aW9uc192YWxpZGF0aW9uX2hlYWRpbmcyIHVsIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIGNvbG9yOiAjOEQ4RDhEO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xufS5TdWJzY3JpcHRpb25zX3ZhbGlkYXRpb25faGVhZGluZzIgdWwgbGkgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogM3B4O1xufS5yZW5ldy1TdWJzY3JpcHRpb24ge1xuICAgIGJhY2tncm91bmQ6ICNGNkY2RjY7XG4gICAgcGFkZGluZzogNDBweDtcbn0ucmVuZXctU3Vic2NyaXB0aW9uIGEge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbn1cbi5yZW5ldy1TdWJzY3JpcHRpb24gYS5yZW5ld19idG46aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiNmZmY7XG59XG4ucmVuZXctU3Vic2NyaXB0aW9uIGEucmVuZXdfYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQTI2MzE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0RBMjYzMTtcbn1cbi5yZW5ldy1TdWJzY3JpcHRpb24gYS5jYW5jbGVfcmVud19idG57XG4gICAgYm9yZGVyOiAycHggc29saWQgIzk3OTc5NztcbiAgICBjb2xvcjojNmI2OTY5O1xufVxuLnJlbmV3LVN1YnNjcmlwdGlvbiBhLmNhbmNsZV9yZW53X2J0bjpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IzZiNjk2OTtcbn1cblxuLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLyogRW5kIFN1YnNjcmlwdGlvbiB2YWxpZGF0aW9uIFBsYW4gQ1NTICovXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuU3Vic2NyaXB0aW9uc19QbGFuX2JveHtcbiAgICAgICAgcGFkZGluZzogNDBweCAyMHB4O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/layout/account/subscriptions/subscriptions.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/account/subscriptions/subscriptions.component.ts ***!
  \*************************************************************************/
/*! exports provided: SubscriptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsComponent", function() { return SubscriptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/messaging/messaging.service */ "./src/app/services/messaging/messaging.service.ts");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared/models/pagination.model */ "./src/app/shared/models/pagination.model.ts");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _services_window_window_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/window/window.service */ "./src/app/services/window/window.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/pipes/localization.pipe */ "./src/app/shared/pipes/localization.pipe.ts");













let SubscriptionsComponent = class SubscriptionsComponent {
    constructor(message, translate, userService, httpService, utilityService, router, window, localization) {
        this.message = message;
        this.translate = translate;
        this.userService = userService;
        this.httpService = httpService;
        this.utilityService = utilityService;
        this.router = router;
        this.window = window;
        this.localization = localization;
        this.isLoading = false;
        this.currency = '';
        this.isPayOnline = false;
        this.paymentOrderModel = {};
        this.subscriptions = [];
        this.paymentSource = 1;
        this.is_subscribed = false;
        this.subscriptionGateways = ['stripe'];
        this.currency = _core_global__WEBPACK_IMPORTED_MODULE_3__["GlobalVariable"].CURRENCY;
        this.pagination = new _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_4__["PaginationModel"]();
        this.pagination.perPage = 12;
        this.pagination.currentPage = 1;
        this.pagination.offset = 0;
    }
    ngOnInit() {
        this.styleSubscription = this.utilityService.getStyles.subscribe((style) => {
            this.style = style;
        });
        this.userSubscription = this.userService.currentUser
            .subscribe(user => {
            if (!!user) {
                this.user = user;
            }
        });
        this.settingSubscription = this.utilityService.getSettings.subscribe((settings) => {
            if (!!settings) {
                this.settings = settings;
            }
        });
        this.getSubscriptions();
    }
    getSubscriptions() {
        this.isLoading = true;
        const query = {
            'skip': this.pagination.offset,
            'limit': this.pagination.perPage
        };
        this.httpService.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_5__["ApiUrl"].getSubscriptions, query).subscribe((response) => {
            if (response && response.data) {
                this.subscriptions = response.data.list;
                if (!this.is_subscribed) {
                    this.is_subscribed = this.subscriptions.some(subscription => {
                        return subscription['is_subscribed'] == 1;
                    });
                }
                this.pagination.count = response.data.count;
                this.activeSubscription = this.subscriptions.find(sub => sub.is_subscribed == 1);
            }
            this.isLoading = false;
        }, (err) => this.isLoading = false);
    }
    buySubscription(subscription) {
        this.selectedSubscription = subscription;
        this.paymentOrderModel = {
            amount: parseInt(subscription.price),
            user: this.user,
            address: {}
        };
        this.isPayOnline = true;
        this.utilityService.setLocalData('transactionType', 'subscription');
    }
    onPaymentError(err) {
        this.message.toast('error', err);
        this.isPayOnline = false;
    }
    onPaymentSuccess(transaction) {
        if (transaction && transaction.paymentGatewayId != 'hyperpay') {
            this.isPayOnline = false;
        }
        const payload = {
            subscription_plan_id: this.selectedSubscription.id,
            type: this.selectedSubscription.type,
            price: this.paymentSource == 4 ? parseFloat(this.selectedSubscription.price) : this.paymentOrderModel.amount,
            action: 1,
            paymentType: this.paymentSource
            // languageId: `${this.utilityService.handler.languageId}`
        };
        payload['benefit_type'] = this.selectedSubscription.benefits.map(benefit => benefit.benefit_type).toString();
        if (!!transaction) {
            if (!transaction.card_details) {
                payload['gateway_unique_id'] = transaction.paymentGatewayId;
                payload['currency'] = _core_global__WEBPACK_IMPORTED_MODULE_3__["GlobalVariable"].CURRENCY_NAME;
                if (transaction.token) {
                    payload['payment_token'] = transaction.token;
                }
                else if (transaction.mobile_no) {
                    payload['mobile_no'] = transaction.mobile_no;
                }
                else {
                    if (transaction.paymentGatewayId != "authorize_net") {
                        payload['customer_payment_id'] = transaction.customer_payment_id;
                        payload['card_id'] = transaction.card_id;
                    }
                    if (transaction.paymentGatewayId == "authorize_net") {
                        payload['authnet_profile_id'] = this.paymentOrderModel.user.authnet_profile_id;
                        payload['authnet_payment_profile_id'] = transaction.card_id;
                    }
                }
            }
            else {
                payload['gateway_unique_id'] = transaction.card_details.paymentGatewayId;
                payload['currency'] = _core_global__WEBPACK_IMPORTED_MODULE_3__["GlobalVariable"].CURRENCY_NAME;
                payload['payment_token'] = transaction.card_details.card_number;
                payload['cvt'] = transaction.card_details.cvc;
                payload['cp'] = transaction.card_details.p_code;
                payload['expMonth'] = transaction.card_details.exp_month;
                payload['expYear'] = transaction.card_details.exp_year;
            }
        }
        this.utilityService.setLocalData('gop', payload, true);
        if (transaction && transaction.waitForSuccess) {
            if (transaction.paymentGatewayId != 'hyperpay') {
                const a = document.createElement('a');
                a.href = transaction['paymentUrl'];
                a.click();
            }
            return;
        }
        this.isLoading = true;
        this.httpService.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_5__["ApiUrl"].buySubscription, payload).subscribe((response) => {
            this.isLoading = false;
            if (response) {
                this.message.toast('success', this.translate.instant('Subscription Bought Successfully'));
                this.setUserData();
                this.getSubscriptions();
            }
        }, (err) => this.isLoading = false);
    }
    setUserData() {
        var user = this.user;
        user['is_subscribed'] = 1;
        this.userService.setUserLocalData(user);
    }
    pageChange(event) {
        this.pagination.currentPage = event;
        this.pagination.offset = event > 1 ? (event - 1) * this.pagination.perPage : 0;
        this.getSubscriptions();
        this.window.scrollTo(0, 0);
    }
    selectPaymentSource(subscription) {
        this.selectedSubscription = subscription;
        $('#paymentSelection').modal('toggle');
    }
    proceedPayment() {
        if (this.paymentSource == 1) {
            this.buySubscription(this.selectedSubscription);
        }
        else {
            this.onPaymentSuccess(null);
        }
    }
    viewSubsDetails() {
        this.router.navigate(['/account/subscriptions', this.activeSubscription.id]);
    }
    trackByBenFn(id, index) {
        return index;
    }
    trackBySubFn(id, index) {
        return index;
    }
    ngOnDestroy() {
        if (!!this.styleSubscription)
            this.styleSubscription.unsubscribe();
        if (!!this.settingSubscription)
            this.settingSubscription.unsubscribe();
        if (!!this.userSubscription)
            this.userSubscription.unsubscribe();
    }
};
SubscriptionsComponent.ctorParameters = () => [
    { type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_2__["MessagingService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"], args: [_services_window_window_service__WEBPACK_IMPORTED_MODULE_9__["WINDOW"],] }] },
    { type: _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_12__["LocalizationPipe"] }
];
SubscriptionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-subscriptions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./subscriptions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/subscriptions/subscriptions.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./subscriptions.component.scss */ "./src/app/layout/account/subscriptions/subscriptions.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_2__["MessagingService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
        _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
        Window,
        _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_12__["LocalizationPipe"]])
], SubscriptionsComponent);



/***/ }),

/***/ "./src/app/layout/account/table-bookings/table-bookings.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/account/table-bookings/table-bookings.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".share-tble {\n  cursor: pointer;\n  font-weight: 600;\n}\n\n.share-tble:hover {\n  color: #28a68d;\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FjY291bnQvdGFibGUtYm9va2luZ3MvdGFibGUtYm9va2luZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ3BCOztBQUNBO0VBQ0ksY0FBYztFQUNkLDBCQUEwQjtBQUU5QiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hY2NvdW50L3RhYmxlLWJvb2tpbmdzL3RhYmxlLWJvb2tpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNoYXJlLXRibGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnNoYXJlLXRibGU6aG92ZXIge1xuICAgIGNvbG9yOiAjMjhhNjhkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/layout/account/table-bookings/table-bookings.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/account/table-bookings/table-bookings.component.ts ***!
  \***************************************************************************/
/*! exports provided: TableBookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBookingsComponent", function() { return TableBookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/__ivy_ngcc__/fesm2015/ng-toolkit-universal.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/messaging/messaging.service */ "./src/app/services/messaging/messaging.service.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/models/pagination.model */ "./src/app/shared/models/pagination.model.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











let TableBookingsComponent = class TableBookingsComponent {
    constructor(message, http, userService, util, router, window) {
        this.message = message;
        this.http = http;
        this.userService = userService;
        this.util = util;
        this.router = router;
        this.window = window;
        this.currentUser = {};
        this.tableBookings = [];
        this.shareable = { description: '', link: '' };
        this.tableBookingStatus = _core_global__WEBPACK_IMPORTED_MODULE_9__["TableBookingStatus"];
        this.pagination = new _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_7__["PaginationModel"]();
    }
    ngOnInit() {
        this.userSubscription = this.userService.currentUser
            .subscribe(user => {
            this.currentUser = user;
            if (!!user && user['access_token']) {
                this.loggedIn = true;
                this.getTableBookings();
            }
            else {
                this.loggedIn = false;
            }
        });
        this.styleSubscription = this.util.getStyles
            .subscribe((style) => {
            this.style = style;
        });
        this.util.getSettings.subscribe((settings) => {
            this.settings = settings;
        });
    }
    getTableBookings() {
        this.tableBookings = [];
        var params = {
            user_id: this.currentUser.id,
            offset: this.pagination.offset,
            limit: this.pagination.perPage
        };
        this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_5__["ApiUrl"].getTableBookingRequestList, params).subscribe((res) => {
            if (res.status == 200) {
                this.tableBookings = res.data.list;
                this.pagination.count = res.data.count;
            }
        });
    }
    pageChange(event) {
        this.pagination.currentPage = event;
        this.pagination.offset = event > 1 ? (event - 1) * this.pagination.perPage : 0;
        this.getTableBookings();
    }
    addFoodItemToTable(tb) {
        var obj = {
            table_request_id: tb.id,
            table_id: tb.table_id,
            table_name: tb.table_name,
            table_seating: tb.seating_capacity || 0,
            table_slot: tb.schedule_date
        };
        localStorage.setItem('table_booking_details', JSON.stringify(obj));
        this.router.navigate(["products/listing"], {
            queryParams: {
                supplierId: tb.supplier_id,
                action: 'tb_item'
            }
        });
    }
    viewOrderDetail(tb) {
        this.router.navigate(["orders/order-detail"], {
            queryParams: {
                orderId: tb.order_id,
            }
        });
    }
    shareTable(tb) {
        this.createDeepLink(tb);
    }
    createDeepLink(tb) {
        var qp = `table_id=${tb.table_id}&user_id=${this.currentUser.id}&user_name=${tb.user_name}&branch_name=${tb.branch_name}&table_name=${tb.table_name}&table_number=${tb.table_number}&capacity=${tb.seating_capacity}&date=${tb.schedule_date}`;
        var obj = {
            domainUriPrefix: "https://royoapps.page.link",
            link: `${this.window.origin}/table?${qp}`,
            androidPackageName: "com.fesh.user",
            iosBundleId: "com.codebrew.yammFood",
            // iosAppStoreId: "",
            firebase_api_key: "AIzaSyC3Jmdoj4hMlqavf4TT7popLle2fMCHeZg"
        };
        this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_5__["ApiUrl"].generateDeepLink, obj).subscribe((res) => {
            if (res.data) {
                this.shareable.link = res.data.shortLink;
                this.shareable.description = `You are invited on the dining table ${tb.table_name} by ${tb.user_name}`;
                this.view_share_buttons = true;
            }
            else {
                this.message.toast("error", "Not able to create link!");
            }
        });
    }
    trackByFn(id, index) {
        return index;
    }
    ngOnDestroy() {
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
        }
        if (this.styleSubscription) {
            this.styleSubscription.unsubscribe();
        }
    }
};
TableBookingsComponent.ctorParameters = () => [
    { type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_3__["MessagingService"] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_1__["WINDOW"],] }] }
];
TableBookingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-table-bookings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./table-bookings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/account/table-bookings/table-bookings.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./table-bookings.component.scss */ "./src/app/layout/account/table-bookings/table-bookings.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_3__["MessagingService"],
        _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        Window])
], TableBookingsComponent);



/***/ })

}]);
//# sourceMappingURL=account-account-module-es2015.js.map