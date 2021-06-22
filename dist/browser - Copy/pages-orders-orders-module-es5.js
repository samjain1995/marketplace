(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orders-orders-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-attachments/order-attachments.component.html":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-attachments/order-attachments.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesOrdersComponentsOrderAttachmentsOrderAttachmentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"(settings?.cart_image_upload || settings?.product_prescription || settings?.order_request == 1) && order.pres_image1\"\n    class=\"m-top-30\">\n    <h4 style=\"color: #4a4a4a; font-weight: 500;\">{{'prescription_value' | localization: order?.type}}</h4>\n    <div class=\"box prescription\">\n        <ul>\n            <!-- <li *ngIf=\"order.pres_image1\" (click)=\"viewAttachment(order.pres_image1)\">\n                <img src=\"{{order.pres_image1}}\">\n            </li>\n            <li *ngIf=\"order.pres_image2\" (click)=\"viewAttachment(order.pres_image2)\">\n                <img src=\"{{order.pres_image2}}\">\n            </li>\n            <li *ngIf=\"order.pres_image3\" (click)=\"viewAttachment(order.pres_image3)\">\n                <img src=\"{{order.pres_image3}}\">\n            </li>\n            <li *ngIf=\"order.pres_image4\" (click)=\"viewAttachment(order.pres_image4)\">\n                <img src=\"{{order.pres_image4}}\">\n            </li>\n            <li *ngIf=\"order.pres_image5\" (click)=\"viewAttachment(order.pres_image5)\">\n                <img src=\"{{order.pres_image5}}\">\n            </li> -->\n\n            <li *ngFor=\"let preimg of prescription_image_arr\" (click)=\"viewAttachment(preimg)\">\n                <img src=\"{{preimg.type=='image'?preimg.url:'../../../../../../assets/images/pdf_ic.jpg'}}\">\n        </ul>\n    </div>\n</div>\n\n<div *ngIf=\"(settings.order_instructions == 1 || settings?.order_request == 1) && order.pres_description\"\n    class=\"m-top-30\">\n    <h4 style=\"font-weight: 500;\">{{'instruction' | localization: order?.type}}</h4>\n    <div class=\"box instructions\">\n        <p>{{order.pres_description}}</p>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-list-item-skeleton/order-list-item-skeleton.component.html":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-list-item-skeleton/order-list-item-skeleton.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesOrdersComponentsOrderListItemSkeletonOrderListItemSkeletonComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container>\n    <div class=\"skeleton track_order_outter\"\n        [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n        <div class=\"head\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h5 class=\"float-left\"> </h5>\n                </div>\n                <div class=\"col-md-6\">\n                    <h5 class=\"float-right\"> </h5>\n                </div>\n            </div>\n            <div class=\"row order\">\n                <div class=\"col-md-6\">\n                    <div class=\"float-left date\">\n                        <p></p>\n                        <!-- <p *ngIf=\"order.created_on && order.created_on  !='Invalid date'\"></p> -->\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <p class=\"float-right\"></p>\n                </div>\n            </div>\n        </div>\n        <div class=\"body\">\n            <div class=\"row item-row mt-2\">\n                <div class=\"col-md-6\" *ngFor=\"let product of util.generateFakeList(2); trackBy:trackByGenerateFakeFn;\">\n                    <div class=\"item-column\">\n                        <p class=\"ellipsis\"></p>\n                        <p> </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"foot\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"float-left date\" [style.color]=\"style.defaultColor\">\n\n                        <span>\n                            <p></p>\n                            <!-- <p></p> -->\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div style=\"margin-top: -6px\">\n                        <a class=\"float-right cancel-btn margin-left-10\"></a>\n                        <a class=\"float-right cancel-btn\"></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-list-item/order-list-item.component.html":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-list-item/order-list-item.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesOrdersComponentsOrderListItemOrderListItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container>\n    <div class=\"track_order_outter\"\n        [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n        <div class=\"head\">\n            <div class=\"row no-gutters\">\n                <div class=\"col\">\n                    <h5 class=\"float-left\" [style.color]=\"order?.status | orderStatusColor\">\n                        {{order?.status | orderStatus: order}}</h5>\n                </div>\n                <div class=\"col\">\n                    <h5 class=\"float-right\" [style.color]=\"style.primaryColor\">\n                        {{currency}} {{(order?.net_amount).toFixed(settings?.price_decimal_length)}},\n                        {{makeProductCount(order?.product)}}\n                        {{ order.type == 8  ? 'Service(s)' : 'item(s)' | translate}}\n                    </h5>\n                </div>\n            </div>\n            <div class=\"row order align-items-baseline no-gutters\">\n                <div class=\"col\">\n                    <div class=\"float-left date\" [style.color]=\"style.baseColor\">\n                        <p>{{order.type == 8 ? 'Booked On' : 'Placed On' | translate}}</p>\n                        <p *ngIf=\"order.created_on && order.created_on  !='Invalid date'\">\n                            {{order?.created_on | date: 'medium' : '+000'}}</p>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <p class=\"float-right\" [style.color]=\"style.baseColor\">\n                        {{(('order' | localization: order?.type) + ' ' + 'No:') | translate}}\n                        {{order?.order_id}}</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"body\">\n            <div class=\"row item-row mt-2\">\n                <div class=\"col-md-6\" *ngFor=\"let product of order?.product;trackBy:trackByProductFn\">\n                    <div class=\"item-column\">\n                        <p class=\"ellipsis\" [style.color]=\"style.baseColor\">\n                            <strong>{{ order.type == 8 ? 'Service:' : 'Item:' | translate}} </strong>\n                            <span data-toggle=\"tooltip\" [title]=\"product?.name\">{{product?.name}}</span></p>\n                        <p [style.color]=\"style.baseColor\"><strong>{{'Quantity:' | translate}}</strong>\n                            {{product?.quantity}}\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"foot\">\n            <div class=\"row align-items-center\">\n                <div class=\"col-md-6\">\n                    <div class=\"float-left date\" [style.color]=\"style.defaultColor\">\n\n                        <span [style.color]=\"style.baseColor\"\n                            *ngIf=\"order?.delivered_on != 'Invalid date' && (order?.self_pickup!=1) && order?.delivered_on !='0000-00-00 00:00:00'\">\n                            <p>\n                                {{order.type == 8 ? 'Service date' : [5,6].includes(order?.status) ? 'Delivered On:' : 'Expected Delivery On:' | translate}}\n                            </p>\n                            <p *ngIf=\"settings.show_expected_delivery_between == 0\">\n                                {{order?.delivered_on | date: 'medium' : '+000'}}\n                            <p *ngIf=\"settings.show_expected_delivery_between == 1\">\n                                {{settings?.app_type == 8 ? (order?.delivered_on | date: 'medium' : '+000') : [5,6].includes(order?.status) ? (order?.delivered_on | date: 'medium' : '+000') : (order?.delivery_min_time + ' min to ' + order?.delivery_max_time + ' min')}}\n                            </p>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div>\n                        <a class=\"float-right cancel-btn margin-left-10\" [ngStyle]=\"cancelButton\"\n                            (click)=\"cancel.emit()\"\n                            *ngIf=\"![2,5,6,8].includes(order?.status) && settings?.disable_user_cancel_order == 0 && ((order?.status == 0 && settings?.disbale_user_cancel_pending_order == 0) || (order?.status != 0 && settings?.disable_user_cancel_after_confirm == 0))\">{{'Cancel' | translate}}\n                            {{'order' | localization: order?.type | translate}}</a>\n                        <a class=\"float-right cancel-btn\" [ngStyle]=\"cancelButton\"\n                            (click)=\"orderDetail(order)\">{{'View Details' | translate}}</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-payment/order-payment.component.html":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-payment/order-payment.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesOrdersComponentsOrderPaymentOrderPaymentComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"dropdown\" *ngIf=\"order.payment_after_confirmation == 1 && order.payment_type == 3 && !hidePaymentModeSelection\">\n    <button class=\"btn cancel-order dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n        aria-haspopup=\"true\" aria-expanded=\"false\">\n        Payment Method: {{paymentType == 1 ? 'Online' : 'Cash On Delivery'}} <i class=\"fa fa-chevron-down\"></i>\n    </button>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n        <a class=\"dropdown-item pointer\" (click)=\"paymentType = 0\">Cash On Delivery</a>\n        <a class=\"dropdown-item pointer\" (click)=\"paymentType = 1\">Online</a>\n    </div>\n</div>\n\n<button class=\"btn cancel-order\" style=\"margin-left: 10px;\"\n    [ngStyle]=\"{'border-color': style.primaryColor, 'color': style.baseColor}\" (click)=\"orderPayment()\">\n    Pay {{currency}}{{order.remaining_amount && order.is_edit == 1 ? order.remaining_amount : order.net_amount}}\n</button>\n\n<app-online-payment [settings]=\"settings\" [order]=\"paymentOrderModel\" *ngIf=\"isPayOnline\" (onError)=\"onPaymentError()\" [geofencedGateways]=\"geofencedGateways\"\n    (onClose)=\"isPayOnline = $event\" (onSuccess)=\"onPaymentSuccess($event)\">\n</app-online-payment>\n\n<app-processing-indicator *ngIf=\"loading\"></app-processing-indicator>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-status-tracker/order-status-tracker.component.html":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-status-tracker/order-status-tracker.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesOrdersComponentsOrderStatusTrackerOrderStatusTrackerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"track_order_outter_detail\"\n    [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n    <h3 [style.color]=\"style.baseColor\">{{'Tracking Details' | translate}}</h3>\n    <div class=\"order-status\">\n\n        <div class=\"order-status-process\">\n            <div class=\"order-status-process-line\"\n                [ngClass]=\"[1,3,4,5,6,10,11].includes(order?.status) ? 'active' : ''\">\n            </div>\n            <div class=\"order-single-status\">\n                <h4 [ngClass]=\"[1,3,4,5,6,10,11].includes(order?.status) ? 'active' : 'in-active'\">\n                    {{(1 | orderStatus: order) | translate}}</h4>\n                <p [ngStyle]=\"{'color': style.baseColor, 'opacity': 0.5}\"\n                    *ngIf=\"order?.confirmed_on && order?.confirmed_on !='Invalid date'\">\n                    {{order?.confirmed_on | date: 'medium' : '+000'}}\n                </p>\n            </div>\n        </div>\n\n        <div class=\"order-status-process\"\n            *ngIf=\"!settings?.enable_product_appointment || (settings?.enable_product_appointment && !order.product[0].is_appointment) && !(settings?.table_book_mac_theme && order?.is_dine_in)\">\n            <div class=\"order-status-process-line\" [ngClass]=\"[3,5,6,10,11,4].includes(order?.status) ? 'active' : ''\">\n            </div>\n            <div class=\"order-single-status\">\n                <h4 [ngClass]=\"[3,5,6,10,11,4].includes(order?.status) ? 'active' : 'in-active'\">\n                    {{(11 | orderStatus: order) | translate }}</h4>\n                <p [ngStyle]=\"{'color': style.baseColor, 'opacity': 0.5}\"\n                    *ngIf=\"order?.progress_on && order?.progress_on !='Invalid date'\">\n                    {{order?.progress_on | date: 'medium' : '+000'}}\n                </p>\n            </div>\n        </div>\n\n        <div *ngIf=\"([1, 2, 8].includes(settings?.app_type) || ([8].includes(order?.type))) && !(settings?.table_book_mac_theme && order?.is_dine_in)\"\n            class=\"order-status-process\">\n            <div class=\"order-status-process-line\" [ngClass]=\"[3,5,10,6,4].includes(order?.status) ? 'active' : ''\">\n            </div>\n            <div class=\"order-single-status\">\n                <h4 [ngClass]=\"[3,5,6,10,6,4].includes(order?.status) ? 'active' : 'in-active'\">\n                    {{(10 | orderStatus: order) | translate }}</h4>\n                <p [ngStyle]=\"{'color': style.baseColor, 'opacity': 0.5}\"\n                    *ngIf=\"order?.near_on && order?.near_on != 'Invalid date'\">\n                    {{order?.near_on | date: 'medium' : '+000'}}\n                </p>\n            </div>\n        </div>\n\n        <!--- for On the way ---->\n        <div *ngIf=\"order?.self_pickup != 1 && !(settings?.table_book_mac_theme && order?.is_dine_in)\"\n            class=\"order-status-process\">\n            <div class=\"order-status-process-line\" [ngClass]=\"[3,5,6].includes(order?.status) ? 'active' : ''\"></div>\n            <div class=\"order-single-status\">\n                <h4 [ngClass]=\"[3,5,6].includes(order?.status) ? 'active' : 'in-active'\">\n                    {{(3 | orderStatus: order) | translate }}\n                </h4>\n                <p [ngStyle]=\"{'color': style.baseColor, 'opacity': 0.5}\"\n                    *ngIf=\"order?.shipped_on && order?.shipped_on !='Invalid date' && [3,5,6].includes(order?.status)\">\n                    {{order?.shipped_on | date: 'medium' : '+000'}}\n                </p>\n            </div>\n        </div>\n\n        <!--- for food ready to pick ---->\n        <div *ngIf=\"order.self_pickup == 1 && (settings?.app_type == 1 || (order?.type == 8 && settings?.enable_product_appointment))\"\n            class=\"order-status-process\">\n            <div class=\"order-status-process-line\" [ngClass]=\"[5,6,4,3].includes(order?.status) ? 'active' : ''\"></div>\n            <div class=\"order-single-status\">\n                <h4 [ngClass]=\"[5,6,4,3].includes(order?.status) ? 'active' : 'in-active'\">\n                    {{(3 | orderStatus: order) | translate }}</h4>\n                <p [ngStyle]=\"{'color': style.baseColor, 'opacity': 0.5}\"\n                    *ngIf=\"order?.schedule_date && order?.schedule_date !='Invalid date' && [5,6,4,3].includes(order?.status)\">\n                    {{order?.schedule_date | date: 'medium' : '+000'}}\n                </p>\n            </div>\n        </div>\n\n        <div *ngIf=\"order.self_pickup == 1 && settings?.app_type == 1\" class=\"order-status-process\">\n            <div class=\"order-status-process-line\" [ngClass]=\"[5,6,4].includes(order?.status) ? 'active' : ''\"></div>\n            <div class=\"order-single-status\">\n                <h4 [ngClass]=\"[5,6,4].includes(order?.status) ? 'active' : 'in-active'\">\n                    {{(4 | orderStatus: order) | translate }}</h4>\n                <p [ngStyle]=\"{'color': style.baseColor, 'opacity': 0.5}\"\n                    *ngIf=\"order?.schedule_date && order?.schedule_date !='Invalid date' && [5,6,4].includes(order?.status)\">\n                    {{order?.schedule_date | date: 'medium' : '+000'}}\n                </p>\n            </div>\n        </div>\n\n        <div class=\"order-status-process\">\n            <div class=\"order-status-process-line-delivered\" [ngClass]=\"[5,6].includes(order?.status) ? 'active' : ''\">\n            </div>\n            <div class=\"order-single-status\">\n                <h4 [ngClass]=\"[5,6].includes(order?.status) ? 'active' : 'in-active'\">\n                    {{(order.self_pickup == 1 ? (order?.type == 8 ? 'Ended' : 'Picked') : 5 | orderStatus: order) |\n                    translate }}</h4>\n                <p [ngStyle]=\"{'color': style.baseColor, 'opacity': 0.5}\" *ngIf=\"order.status == '5'\">\n                    {{order?.delivered_on | date: 'medium' : '+000'}}\n                </p>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-supplier-products/order-supplier-products.component.html":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-supplier-products/order-supplier-products.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesOrdersComponentsOrderSupplierProductsOrderSupplierProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container [ngSwitch]=\"orderType\">\n    <ng-template [ngSwitchCase]=\"1\">\n        <div class=\"container\">\n            <div class=\"row mt-5\">\n                <div class=\"col-12 \">\n                    <button class=\"btn cancel-order\" (click)=\"onSubmit()\" style=\"width: 140px;\"\n                    [ngStyle]=\"{'border-color': style.primaryColor, 'color': style.baseColor}\">{{'Submit' | translate}}\n                </button>\n                    <button class=\" btn cancel-order\" (click)=\"back()\"\n                        [ngStyle]=\"{'border-color': style.primaryColor, 'color': style.baseColor}\">{{'Back' | translate}}\n                    </button>\n                </div>\n            </div>\n\n            <div class=\"categories-item-products\" *ngFor=\"let data of products; let i = index;trackBy:trackByProductFn\" [id]=i>\n                <h4>{{data?.sub_cat_name}}</h4>\n                <div class=\"row\" *ngIf=\"!data?.detailed_category_name?.length\">\n                    <div class=\"col-md-6\" *ngFor=\"let product of data?.value; let j = index\">\n                        <app-product [product]=\"product\" [settings]=\"settings\" [style]=\"style\" [loggedIn]=\"loggedIn\"\n                            (add)=\"addProduct($event)\" (remove)=\"removeProduct($event)\">\n                        </app-product>\n                    </div>\n                </div>\n\n                <div class=\"row\" *ngIf=\"data?.detailed_category_name && data?.detailed_category_name?.length\">\n                    <ng-container *ngFor=\"let detail_cat of data?.detailed_category_name;trackBy:trackByDetailedCategoryFn\">\n                        <div class=\"col-md-12\" *ngIf=\"detail_cat?.value.length\">\n                            <h5>{{detail_cat?.name}}</h5>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\" *ngFor=\"let product of detail_cat?.value; let j = index;trackBy:trackByDetail_catFn\">\n                                    <app-product [product]=\"product\" [settings]=\"settings\" [style]=\"style\"\n                                        [loggedIn]=\"loggedIn\" (add)=\"addProduct($event)\"\n                                        (remove)=\"removeProduct($event)\">\n                                    </app-product>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n            </div>\n\n        </div>\n    </ng-template>\n\n    <ng-template [ngSwitchCase]=\"8\">\n        <div class=\"container\">\n            <div class=\"row mt-3\">\n                <div class=\"col-12 \">\n                    <button class=\" btn cancel-order\" (click)=\"onBack.emit(false)\"\n                        [ngStyle]=\"{'border-color': style.primaryColor, 'color': style.baseColor}\">{{'Back' | translate}}\n                    </button>\n                </div>\n            </div>\n\n            <div class=\"categories-item-products\" *ngFor=\"let data of products; let i = index;trackBy:trackByProductsFn\" [id]=i>\n                <h4>{{data?.sub_cat_name}}</h4>\n                <div class=\"row\" *ngIf=\"!data?.detailed_category_name?.length\">\n                    <div class=\"col-md-4\" *ngFor=\"let product of data?.value; let j = index;trackBy:trackByProductDataFn\">\n                        <app-product [product]=\"product\" [settings]=\"settings\" [style]=\"style\" [loggedIn]=\"true\"\n                            (add)=\"onBookNow($event)\" (remove)=\"removeProduct($event)\" [state]=\"state\">\n                        </app-product>\n                    </div>\n                </div>\n\n                <div class=\"row\" *ngIf=\"data?.detailed_category_name && data?.detailed_category_name?.length\">\n                    <ng-container *ngFor=\"let detail_cat of data?.detailed_category_name;trackBy:trackByCategoryFn\">\n                        <div class=\"col-md-12\" *ngIf=\"detail_cat?.value.length\">\n                            <h5>{{detail_cat?.name}}</h5>\n                            <div class=\"row\">\n                                <div class=\"col-md-4\" *ngFor=\"let product of detail_cat?.value; let j = index;trackBy:trackByDetailCatFn\">\n                                    <app-product [product]=\"product\" [settings]=\"settings\" [style]=\"style\"\n                                        [loggedIn]=\"true\" (add)=\"onBookNow($event)\" [state]=\"state\"\n                                        (remove)=\"removeProduct($event)\">\n                                    </app-product>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n            </div>\n\n        </div>\n    </ng-template>\n</ng-container>\n\n\n\n<app-processing-indicator *ngIf=\"isLoading\"> </app-processing-indicator>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/re-order/re-order.component.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/re-order/re-order.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesOrdersComponentsReOrderReOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container>\n    <button [ngStyle]=\"reOrderButton\" class=\"reorder\" (click)=\"onReOrder()\"> {{'Reorder' | translate}} </button>\n</ng-container>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/order-detail/order-detail.component.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/order-detail/order-detail.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesOrdersOrderDetailOrderDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"!isLoading; else skeleton\">\n  <div *ngIf=\"!isAddItems\">\n    <!--================ Start Page Breadcrumb Page ================-->\n    <div class=\"page_breadcrumb\" [style.background-color]=\"style.backgroundColor\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <ul>\n              <li><a href=\"javascript:void(0)\" [style.color]=\"style.baseColor\" @fade>{{'My Account' | translate}}</a>\n              </li>\n              <li><a href=\"javascript:void(0)\" [routerLink]=\"['/orders/order-listing']\" [style.color]=\"style.baseColor\"\n                  @fade>{{('My ' + ('orders' | localization: settings?.app_type: 1)) | translate}}</a></li>\n              <li><a class=\"active\" href=\"javascript:void(0)\" [style.color]=\"style.baseColor\"\n                  @fade>{{orderHistory[selectedOrder]?.order_id}}</a></li>\n            </ul>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <!--================ End Page Breadcrumb Page ================-->\n\n    <!--================ Start Product Result Page ================-->\n    <section class=\"product_result_body\">\n      <div class=\"container\">\n        <div class=\"row cancel-order-outter align-items-center\">\n          <div class=\"col-md-4 text-sm-left text-center\">\n            <h4 [ngStyle]=\"{'backgroundColor': style.backgroundColor, 'color': style.baseColor}\" @fade>\n              {{(('order' | localization: orderHistory[selectedOrder]?.type: 1) + ' No.') | translate}} :\n              {{orderHistory[selectedOrder]?.order_id}}</h4>\n            <p *ngIf=\"orderHistory[selectedOrder]?.status == 5\">{{'Thank you for the' | translate}} {{'order' |\n              localization | translate}}\n            </p>\n          </div>\n\n          <div class=\"col-sm-8 d-flex justify-content-sm-end justify-content-center mb-3 mt-3\">\n\n            <app-order-payment\n              *ngIf=\"((orderHistory[selectedOrder]?.payment_status == 0 && orderHistory[selectedOrder]?.created_by > 0 && orderHistory[selectedOrder]?.status == 1) || \n            (orderHistory[selectedOrder]?.remaining_amount && orderHistory[selectedOrder]?.payment_type == 1 && orderHistory[selectedOrder]?.is_edit == 1) || \n            (orderHistory[selectedOrder]?.payment_status == 0 && orderHistory[selectedOrder]?.payment_type == 3 && orderHistory[selectedOrder]?.payment_after_confirmation == 1 && orderHistory[selectedOrder]?.status == 1))\"\n              (paymentComplete)=\"getDetail()\" [style]=\"style\" [settings]=\"settings\"\n              [order]=\"orderHistory[selectedOrder]\">\n            </app-order-payment>\n\n\n            <button *ngIf=\"settings?.is_sos_allow=='1'\" class=\"btn cancel-order\" style=\"margin-right: 10px;\"\n              [ngStyle]=\"{'border-color': style.primaryColor, 'color': style.baseColor}\" (click)=\"onSOSNotification()\"\n              type=\"submit\">{{'SOS' | translate}}</button>\n\n\n            <button *ngIf=\"settings?.is_zoom_call_enabled && \n              !orderHistory[selectedOrder]?.zoom_call_start_url &&\n               orderHistory[selectedOrder]?.status==11\" class=\"btn cancel-order\"\n              [ngStyle]=\"{'border-color': style.primaryColor, 'color': style.baseColor}\" (click)=\"zoomAuth()\"\n              type=\"submit\">{{'Create Video Link' | translate}}</button>\n\n            <button *ngIf=\"settings?.is_zoom_call_enabled &&\n               orderHistory[selectedOrder]?.zoom_call_start_url \n                && orderHistory[selectedOrder]?.status==11\" class=\"btn cancel-order\"\n              [ngStyle]=\"{'border-color': style.primaryColor, 'color': style.baseColor}\"\n              (click)=\"joinZoomMeeting(orderHistory[selectedOrder]?.zoom_call_start_url)\" type=\"submit\">{{'Join Video\n              Call' | translate}}</button>\n\n\n            <button *ngIf=\"settings?.enable_audio_video &&\n               orderHistory[selectedOrder]?.agent[0]?.agent_bio_url\" class=\"btn cancel-order\"\n              [ngStyle]=\"{'border-color': style.primaryColor, 'color': style.baseColor}\"\n              (click)=\"listenAgentBio(orderHistory[selectedOrder]?.agent[0]?.agent_bio_url)\" type=\"submit\">{{'Agent Bio'\n              | translate}}</button>\n\n\n            <button class=\"btn cancel-order\" [ngStyle]=\"{'border-color': style.primaryColor, 'color': style.baseColor}\"\n              *ngIf=\"settings?.can_user_edit=='1' && ![2,3,5,6,8].includes(orderHistory[selectedOrder]?.status) && orderHistory[selectedOrder].is_edit != 1 && [1,8].includes(settings?.app_type)\"\n              (click)=\"onEditOrder(orderHistory[selectedOrder])\">{{'Edit' | translate}}\n              {{'order' | localization: orderHistory[selectedOrder]?.type | translate}} </button>\n\n            <button class=\"btn cancel-order\" [ngStyle]=\"{'border-color': style.primaryColor, 'color': style.baseColor}\"\n              *ngIf=\"![2,5,6,8].includes(orderHistory[selectedOrder]?.status) && settings?.disable_user_cancel_order == 0 && ((orderHistory[selectedOrder]?.status == 0 && settings?.disbale_user_cancel_pending_order == 0) || (orderHistory[selectedOrder]?.status != 0 && settings?.disable_user_cancel_after_confirm == 0))\"\n              (click)=\"onCancel(orderHistory[selectedOrder])\">{{'Cancel' | translate}}\n              {{'order' | localization: orderHistory[selectedOrder]?.type | translate}} </button>\n\n            <button *ngIf=\"orderHistory[selectedOrder]?.dhlData && orderHistory[selectedOrder]?.dhlData.length\"\n              class=\"btn cancel-order\" [ngStyle]=\"{'border-color': style.primaryColor, 'color': style.baseColor}\"\n              (click)=\"dhlStatus()\">View DHL Status</button>\n\n            <app-re-order\n              *ngIf=\"orderHistory[selectedOrder]?.status == 5 && orderHistory[selectedOrder].type !== 8 && settings?.app_type != 8 && settings?.laundary_service_flow == 0\"\n              [style]=\"style\" [order]=\"orderHistory[selectedOrder]\" [settings]=\"settings\"></app-re-order>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-9\"></div>\n          <div\n            *ngIf=\"orderHistory[selectedOrder].self_pickup == 1 && [1,3,4,10,11].includes(orderHistory[selectedOrder].status)\"\n            class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label for=\"exampleFormControlSelect2\" [style.color]=\"style.baseColor\">{{'Select Status' |\n                translate}}</label>\n              <select class=\"form-control\" style=\"box-shadow: none;\" [(ngModel)]=\"orderHistory[selectedOrder].status\"\n                (change)=\"onStatusChange($event.target.value)\">\n                <option disabled selected\n                  [value]=\"[3,4].includes(orderHistory[selectedOrder].status) ? 0 : orderHistory[selectedOrder].status\">\n                  {{'Select Status' | translate}}</option>\n                <option [value]=\"3\" [selected]=\"orderHistory[selectedOrder].status == 3\"\n                  [disabled]=\"[3,4,5].includes(orderHistory[selectedOrder].status)\">{{3 | orderStatus: orderHistory[selectedOrder] | translate}}</option>\n                <option [value]=\"4\" [selected]=\"orderHistory[selectedOrder].status == 4\"\n                  [disabled]=\"[4,5].includes(orderHistory[selectedOrder].status)\" *ngIf=\"!settings?.enable_product_appointment || (settings?.enable_product_appointment && !orderHistory[selectedOrder].product[0].is_appointment)\">{{4 | orderStatus | translate}}</option>\n                <option *ngIf=\"settings?.hide_pickup_status == 0\" [value]=\"5\"\n                  [selected]=\"orderHistory[selectedOrder].status == 5\"\n                  [disabled]=\"orderHistory[selectedOrder].status == 5\">{{(orderHistory[selectedOrder].type == 8 ||\n                  settings?.app_type == 8) ? 'End\n                  service' : 'Picked Up'}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n\n        <i [style.color]=\"style.primaryColor\" class=\"fa fa-arrow-left arrow-left cursor\"\n          (click)=\"selectedOrder = selectedOrder - 1\" *ngIf=\"selectedOrder != 0\"></i>\n        <i [style.color]=\"style.primaryColor\" class=\"fa fa-long-arrow-right arrow-right cursor\"\n          (click)=\"selectedOrder = selectedOrder + 1\" *ngIf=\"selectedOrder != orderHistory.length -1\"></i>\n\n        <!------------------------------ Supplier Detail Start ---------------------------------->\n        <div class=\"row\" *ngIf=\"settings.is_single_vendor == 0; else singleVendor\">\n          <div class=\"col-md-12\">\n            <div class=\"order-supplier\"\n              [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n              <div class=\"supplier-info\">\n                <h2 [ngStyle]=\"{'color': style.primaryColor}\" class=\"capitalize\" @fade>\n                  {{orderHistory[selectedOrder]?.supplier_name }}</h2>\n                <p *ngIf=\"orderHistory[selectedOrder]?.supplier_address\" [ngStyle]=\"{'color': style.baseColor}\" @fade><i\n                    class=\"fa fa-map-marker mr-1\" aria-hidden=\"true\"\n                    @fade></i>{{orderHistory[selectedOrder]?.supplier_address }}\n                </p>\n                <p *ngIf=\"orderHistory[selectedOrder]?.branch_address && settings?.branch_flow\"\n                  [ngStyle]=\"{'color': style.baseColor}\" @fade><i class=\"fa fa-map-marker mr-1\" aria-hidden=\"true\"\n                    @fade></i>Branch Address: {{orderHistory[selectedOrder]?.branch_address }}\n                </p>\n                <h5 [style.color]=\"style.baseColor\" @fade>\n                  {{settings?.app_type == 8 ? 'Service Booked On:' : 'Ordered On:' | translate}}\n                  {{orderHistory[selectedOrder]?.created_on | date: 'medium' : '+000'}}</h5>\n                <h5 @fade [style.color]=\"style.baseColor\"\n                  *ngIf=\"!orderHistory[selectedOrder]?.is_schedule && orderHistory[selectedOrder]?.delivered_on != 'Invalid date' && orderHistory[selectedOrder]?.delivered_on != '0000-00-00 00:00:00'  && !orderHistory[selectedOrder]?.agent.length\">\n                  <span *ngIf=\"settings?.app_type == 8\" @fade>{{'Service Date:' | translate}}\n                    {{orderHistory[selectedOrder]?.delivered_on | date: 'medium' : '+000'}}</span><br />\n                  <span\n                    *ngIf=\"settings?.app_type == 8 && orderHistory[selectedOrder]?.drop_off_date && settings?.dropoff_buffer == '1'\"\n                    @fade>\n                    {{'Drop Off Date:' | translate}}{{orderHistory[selectedOrder]?.drop_off_date | date: 'medium' :\n                    '+000'}}\n                  </span>\n                  <span *ngIf=\"settings?.app_type != 8 && settings.show_expected_delivery_between == 0 && settings?.selected_template!=4\n               &&   orderHistory[selectedOrder]?.self_pickup!=3 && orderHistory[selectedOrder]?.is_dine_in!=1\"\n                    @fade>{{(orderHistory[selectedOrder]?.self_pickup == 1 ? 'Expected Picked Up On:' :\n                    [5,6].includes(orderHistory[selectedOrder]?.status) && orderHistory[selectedOrder]?.self_pickup == 0\n                    ? 'Delivered On:' : 'Expected Delivery On:') | translate}}\n                    {{orderHistory[selectedOrder]?.delivered_on | date: 'medium' : '+000'}}</span>\n                  <span *ngIf=\"settings?.app_type != 8 && settings.show_expected_delivery_between == 0 && settings?.selected_template!=4 && \n                    orderHistory[selectedOrder]?.self_pickup==3 && orderHistory[selectedOrder]?.is_dine_in==1\"\n                    @fade>{{'Dine In Date' | translate}}\n                    {{orderHistory[selectedOrder]?.schedule_date | date: 'medium' : '+000'}}</span>\n\n                  <span\n                    *ngIf=\"orderHistory[selectedOrder]?.delivered_on != '0000-00-00 00:00:00' && settings?.app_type != 8 && settings.show_expected_delivery_between == 1\"\n                    @fade>{{(orderHistory[selectedOrder]?.self_pickup == 1 ? 'Expected Picked up on:' :\n                    [5,6].includes(orderHistory[selectedOrder]?.status) && orderHistory[selectedOrder]?.self_pickup == 0\n                    ? 'Delivered On:' : 'Expected Delivery In:') | translate}}\n                    {{orderHistory[selectedOrder]?.self_pickup == 1 ?\n                    (orderHistory[selectedOrder]?.delivered_on | date: 'medium' : '+000') :\n                    ([5,6].includes(orderHistory[selectedOrder]?.status)\n                    && orderHistory[selectedOrder]?.self_pickup == 0 ?\n                    (orderHistory[selectedOrder]?.delivered_on | date: 'medium' : '+000')\n                    : (orderHistory[selectedOrder]?.delivery_min_time + ' min to ' +\n                    orderHistory[selectedOrder]?.delivery_max_time +' min'))}}\n                  </span>\n                </h5>\n                <h5\n                  *ngIf=\"orderHistory[selectedOrder]?.is_schedule == 1 && orderHistory[selectedOrder]?.delivered_on != '0000-00-00 00:00:00'\"\n                  [style.color]=\"style.baseColor\" @fade>\n                  {{'Schedule Start Date:' | translate}}\n                  {{orderHistory[selectedOrder]?.delivered_on | date: 'medium' : '+000'}}</h5>\n\n                <h5 *ngIf=\"orderHistory[selectedOrder]?.is_schedule == 1\" [style.color]=\"style.baseColor\" @fade>\n                  {{'Schedule End Date:' | translate}}\n                  {{orderHistory[selectedOrder]?.schedule_end_date | date: 'medium' : '+000'}}</h5>\n\n                <h5 [style.color]=\"style.baseColor\"\n                  *ngIf=\"(settings?.app_type == 1 || orderHistory[selectedOrder]?.type == 1) && [1,10,11].includes(orderHistory[selectedOrder]?.status)\"\n                  @fade>\n                  {{'preparation_time' | localization | translate}}:\n                  {{orderHistory[selectedOrder]?.preparation_time}}\n                </h5>\n                <h5 [style.color]=\"style.baseColor\"\n                  *ngIf=\" orderHistory[selectedOrder]?.shippingData && orderHistory[selectedOrder]?.shippingData.length\"\n                  @fade>\n                  {{'order' | localization}} {{'shipment status' | translate}}\n                  {{orderHistory[selectedOrder]?.shippingData[0]?.orderStatus}}\n                </h5>\n\n              </div>\n              <div class=\"order-status\">\n                <h4 [ngStyle]=\"{'color': style.primaryColor}\"\n                  [style.color]=\"orderHistory[selectedOrder]?.status | orderStatusColor\" @fade>\n                  {{((orderHistory[selectedOrder]?.status == 5 && orderHistory[selectedOrder]?.self_pickup == 1) ?\n                  'Picked' : (orderHistory[selectedOrder]?.status | orderStatus: orderHistory[selectedOrder]))|\n                  translate }}\n                </h4>\n                <p *ngIf=\"orderHistory[selectedOrder]?.status == 2 && orderHistory[selectedOrder]?.approve_rejection_reason\"\n                  [style.color]=\"style?.baseColor\"><b>Rejection Reason:</b>\n                  {{orderHistory[selectedOrder]?.approve_rejection_reason}}</p>\n                <div class=\"order_track_buttons\">\n                  <a *ngIf=\"((orderHistory[selectedOrder].self_pickup == 0 && orderHistory[selectedOrder].agent.length) || orderHistory[selectedOrder].self_pickup == 1) && (([3,4].includes(orderHistory[selectedOrder]?.status) && settings?.app_type != 8) || ([11].includes(orderHistory[selectedOrder]?.status) && settings?.app_type == 8) )&& settings?.booking_track_status\"\n                    [ngStyle]=\"{'color': style.primaryColor, 'borderColor': style.primaryColor, 'backgroundColor': '#ffffff', 'cursor': 'pointer'}\"\n                    (click)=\"trackOrder(orderHistory[selectedOrder])\" @fade>\n                    <span *ngIf=\"orderHistory[selectedOrder].self_pickup == 1\" style=\"padding: 0px;\">{{'supplier' |\n                      localization }} {{'location' | translate}}</span>\n\n                    <span *ngIf=\"orderHistory[selectedOrder].self_pickup == 0\" style=\"padding: 0px;\">\n                      {{'track' | localization: orderHistory[selectedOrder]?.type | translate}}\n                      {{(settings?.app_type == 8 ? 'agent' : 'order') | localization: orderHistory[selectedOrder]?.type\n                      | translate}}\n                    </span>\n                  </a>\n\n                  <span\n                    *ngIf=\"[5,6].includes(orderHistory[selectedOrder]?.status) && orderHistory[selectedOrder].is_supplier_rated == 0 && settings.is_supplier_rating == 1\"\n                    (click)=\"toRateSupplier(orderHistory[selectedOrder])\" class=\"cursor\"\n                    [style.color]=\"style.primaryColor\" @fade>\n                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                    {{'Rate To' | translate}} {{ 'supplier' | localization: orderHistory[selectedOrder]?.type |\n                    translate}}\n                  </span>\n\n                  <app-chat\n                    *ngIf=\"settings.chat_enable == 1 && orderHistory[selectedOrder].agent && orderHistory[selectedOrder].agent.length && [11,10,3].includes(orderHistory[selectedOrder].status)\"\n                    [receiver_created_id]=\"orderHistory[selectedOrder].agent[0].agent_created_id\"\n                    [order]=\"orderHistory[selectedOrder]\"></app-chat>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <ng-template #singleVendor>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"order-supplier\"\n                [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n                <div class=\"single-supplier-info\">\n                  <h5 [style.color]=\"style.baseColor\" @fade>\n                    {{settings?.app_type == 8 ? 'Service Booked On:' : 'Ordered on:' | translate}}\n                    {{orderHistory[selectedOrder]?.created_on | date: 'medium' : '+000'}}</h5>\n                  <h5 @fade [style.color]=\"style.baseColor\"\n                    *ngIf=\"orderHistory[selectedOrder]?.delivered_on != 'Invalid date' && orderHistory[selectedOrder]?.delivered_on != '0000-00-00 00:00:00' && !orderHistory[selectedOrder]?.agent.length\">\n                    <span *ngIf=\"settings?.app_type == 8\" @fade>{{'Service Date:' | translate}}\n                      {{orderHistory[selectedOrder]?.delivered_on | date: 'medium' : '+000'}}</span>\n                    <span *ngIf=\"orderHistory[selectedOrder]?.delivered_on != '0000-00-00 00:00:00' && settings?.app_type != 8 \n                     && settings?.selected_template!=4 &&\n                      orderHistory[selectedOrder]?.self_pickup!=3 && orderHistory[selectedOrder]?.is_dine_in!=1\"\n                      @fade>{{ (orderHistory[selectedOrder]?.is_schedule == 1 ? 'Schedule Start Date' :\n                      orderHistory[selectedOrder]?.self_pickup == 1 ? 'Expected Picked up on:' :\n                      [5,6].includes(orderHistory[selectedOrder]?.status) && orderHistory[selectedOrder]?.self_pickup ==\n                      0 ? 'Delivered On:' : 'Expected Delivery On:') | translate}}\n                      {{orderHistory[selectedOrder]?.delivered_on | date: 'medium' : '+000'}}</span>\n\n                    <span *ngIf=\"orderHistory[selectedOrder]?.delivered_on != '0000-00-00 00:00:00' && settings?.app_type != 8 && \n                      orderHistory[selectedOrder]?.self_pickup==3 && orderHistory[selectedOrder]?.is_dine_in==1\"\n                      @fade>{{'Dinin Date' | translate}}\n                      {{orderHistory[selectedOrder]?.schedule_date | date: 'medium' : '+000'}}</span>\n                  </h5>\n\n                  <h5 *ngIf=\"orderHistory[selectedOrder]?.is_schedule == 1\" [style.color]=\"style.baseColor\" @fade>\n                    {{'Schedule End Date:' | translate}}\n                    {{orderHistory[selectedOrder]?.schedule_end_date | date: 'medium' : '+000'}}</h5>\n\n                  <h5 [style.color]=\"style.baseColor\"\n                    *ngIf=\"(settings?.app_type == 1 || orderHistory[selectedOrder]?.type == 1) && [1,10,11].includes(orderHistory[selectedOrder]?.status)\"\n                    @fade>\n                    {{'preparation_time' | localization | translate}}:\n                    {{orderHistory[selectedOrder]?.preparation_time | prepTime}}\n                  </h5>\n                  <h5 [style.color]=\"style.baseColor\"\n                    *ngIf=\" orderHistory[selectedOrder]?.shippingData && orderHistory[selectedOrder]?.shippingData.length\"\n                    @fade>\n                    {{'order' | localization}} {{'shipment status' | translate}}:\n                    {{orderHistory[selectedOrder]?.shippingData[0]?.orderStatus}}\n                  </h5>\n                </div>\n                <div class=\"order-status\">\n                  <h4 [ngStyle]=\"{'color': style.primaryColor}\" @fade>\n                    {{(orderHistory[selectedOrder]?.status == 5 && orderHistory[selectedOrder]?.self_pickup == 1 ?\n                    'Picked' : orderHistory[selectedOrder]?.status | orderStatus: orderHistory[selectedOrder]) |\n                    translate}}\n                  </h4>\n                  <div class=\"order_track_buttons\">\n                    <a *ngIf=\"[3,4].includes(orderHistory[selectedOrder]?.status) && settings?.booking_track_status && !orderHistory[selectedOrder]?.self_pickup\"\n                      [ngStyle]=\"{'color': style.primaryColor, 'borderColor': style.primaryColor, 'backgroundColor': '#ffffff'}\"\n                      (click)=\"trackOrder(orderHistory[selectedOrder])\" @fade>{{(settings?.app_type == 8 ? 'Track Agent'\n                      : 'Track Order') | translate}}</a>\n\n                    <!-- <span *ngIf=\"[5,6].includes(orderHistory[selectedOrder]?.status)\"\n                    (click)=\"toRateSupplier(orderHistory[selectedOrder])\" class=\"cursor\"\n                    [style.color]=\"style.primaryColor\" @fade>\n                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                    {{'Rate and Review' | translate}}\n                  </span> -->\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n\n\n        <!------------------------------ Supplier Detail End ---------------------------------->\n\n        <div class=\"row\">\n          <div *ngIf=\"!isEditOrder\" class=\"col-md-8\">\n            <!-- <h5 class=\"float-left\" *ngIf=\"orderHistory.length\" [style.color]=\"status[orderHistory[selectedOrder]?.status].color\">{{status[orderHistory[selectedOrder]?.status].name}}</h5> -->\n            <div *ngFor=\"let data of orderHistory[selectedOrder]?.products;trackBy:trackByOrderHistoryFn\">\n              <div class=\"track_order_outter food_track_order_outer\"\n                [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n                <div class=\"track_order_name_detail\" style=\"position: relative;\">\n                  <span class=\"track_order_img\">\n                    <img appImage [url]=\"data?.image_path\" [size]=\"'500x500'\" [src]=\"data?.image_path\"\n                      [settings]=\"settings\" @fade>\n                  </span>\n                  <div class=\"track_order_name\">\n                    <!-- <h6>Electronices</h6> -->\n                    <h2 [style.color]=\"style.baseColor\" @fade>{{data?.product_name}}</h2>\n                    <p *ngIf=\"settings?.branch_flow == 1 && data?.branch_name\">Branch: {{data?.branch_name}}</p>\n                    <p *ngIf=\"settings?.is_product_weight == 1 && data?.duration\">Weight: {{data?.duration}}g</p>\n\n                    <h4 @fade>\n                      <span [style.color]=\"style.baseColor\" *ngIf=\"data?.is_product\">{{(data?.price_type ? 'Hours' :\n                        'Quantity') | translate}} : </span>\n                      <span [style.color]=\"style.baseColor\" *ngIf=\"!data?.is_product\">{{(data?.price_type ? 'Duration' :\n                        'Quantity') | translate}} : </span>\n                      <span [style.color]=\"style.primaryColor\"\n                        *ngIf=\"!data?.is_product && data?.price_type; else other_content\">{{data?.duration |\n                        formatTimeInterval}}</span>\n                    </h4>\n                    <div *ngIf=\"data.customization\">\n                      <ul class=\"cart-product-addon\">\n                        <li *ngFor=\"let cust of data.customization.data;trackBy:trackByCustomizationFn\"\n                          [style.color]=\"style.baseColor\" opacity=\"0.5\">\n                          {{cust?.name}} -\n                          {{addOnNames(cust?.value)}}\n                        </li>\n                      </ul>\n                    </div>\n                    <div *ngIf=\"data.prod_variants && data.prod_variants.length\">\n                      <div *ngFor=\"let variant of data.prod_variants;trackBy:trackByVariantsFn\">\n                        <ng-template [ngIf]=\"variant.variant_type != 1\" [ngIfElse]=\"color\">\n                          <p class=\"mb-0\" [style.color]=\"style.baseColor\">\n                            {{variant?.variant_name}}:<span>{{variant?.variant_value}}</span></p>\n                        </ng-template>\n                        <ng-template #color>\n                          <p class=\"mb-0\" [style.color]=\"style.baseColor\">{{variant?.variant_name}}:<span\n                              class=\"cart-color-varient\" [style.background-color]=\"variant?.variant_value\"></span></p>\n                        </ng-template>\n                      </div>\n                    </div>\n                    <div *ngIf=\"settings?.enable_in_out_network\">\n                      <p *ngIf=\"data?.product_reference_id\">\n                        {{'Product Ref Id' |translate}}:&nbsp;<b>{{data?.product_reference_id}}</b>\n                      </p>\n                      <p *ngIf=\"data?.product_owner_name\">\n                        {{'Product Owner Name' |translate}}:&nbsp;<b>{{data?.product_owner_name}}</b>\n                      </p>\n                      <p *ngIf=\"data?.product_dimensions\">\n                        {{'Product Dimensions' |translate}}:&nbsp;<b>{{data?.product_dimensions}}</b>\n                      </p>\n                      <p *ngIf=\"data?.product_upload_reciept\">\n                        {{'Product Receipt' |translate}}:&nbsp;\n                        <span class=\"image_view\" (click)=\"downloadReceipt(data?.product_upload_reciept)\">\n                          <b>{{'View Receipt'}}</b>\n                        </span>\n                      </p>\n                    </div>\n\n                    <ng-template #other_content><span [style.color]=\"style.baseColor\">{{data?.quantity}}\n                        <ng-container *ngIf=\"data?.freeQuantity\">\n                          + {{data?.freeQuantity}} {{'Free' | translate}}\n                        </ng-container>\n                      </span>\n                    </ng-template>\n\n                    <!-- <h4 [style.color]=\"style.baseColor\">{{'supplier' | localization}} : <span\n                    [style.color]=\"style.primaryColor\">{{orderHistory[selectedOrder]?.supplier_name}}</span></h4>\n                <h4 [style.color]=\"style.baseColor\">{{'Status'}} : <span\n                    [style.color]=\"orderHistory[selectedOrder]?.status | orderStatusColor\">{{orderHistory[selectedOrder]?.status | orderStatus}}</span>\n                </h4> -->\n                  </div>\n                  <div class=\"tracker_order_price\">\n                    <!-- <h3>{{currency}}  {{util.convertIntoNumber(data?.price) * data?.quantity}}</h3> -->\n\n                    <h3 [style.color]=\"style.baseColor\" @fade>\n                      <p [style.color]=\"style.baseColor\" @fade>\n                        <span class=\"cursor instruction mr-4\" [style.color]=\"style.primaryColor\"\n                          *ngIf=\"settings?.enable_product_special_instruction && data.special_instructions\"\n                          (click)=\"showSpecialInstruction(data)\">\n                          {{'View Special Instructions' | translate}}\n                        </span>\n                      </p>\n                      {{orderHistory[selectedOrder]?.local_currency || currency }}\n                      {{util.convertIntoNumber((data?.totalPrice*1)*selected_currency?.conversion_rate)?.toFixed(settings?.price_decimal_length)}}\n                    </h3>\n                    <div *ngIf=\"data.recipe_pdf\">\n                      <a class=\"download-file\" (click)=\"download(data)\">{{'product_file_upload' | localization}}</a>\n                    </div>\n                    <!-- <div class=\"charges\">\n                  <h6 [style.color]=\"style.secondaryColor\">Delivery Charges:&nbsp; <span [style.color]=\"style.secondaryColor\">{{data?.delivery_charges}}</span></h6>\n                  <h6 [style.color]=\"style.secondaryColor\">Handling Charges:&nbsp; <span [style.color]=\"style.secondaryColor\">{{data?.handling_admin + data?.handling_supplier}}</span></h6>\n                </div> -->\n                    <span\n                      *ngIf=\"[5,6].includes(orderHistory[selectedOrder]?.status) && data.is_rated == 0 && settings.is_product_rating == 1\"\n                      (click)=\"toRateProduct(data, 'product')\" class=\"cursor\" [style.color]=\"style.primaryColor\">\n                      <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                      {{'Rate To' | translate}}\n                      {{'product' | localization: orderHistory[selectedOrder]?.type | translate}}\n                    </span>\n                  </div>\n                  <a type=\"button\" [style.color]=\"style.primaryColor\" class=\"return-request\"\n                    *ngIf=\"settings?.is_return_request == 1 && !(data?.return_data && data?.return_data.length) && [5,6].includes(orderHistory[selectedOrder]?.status)\"\n                    (click)=\"returnRequest(data)\">{{'Return Request' | translate}}</a>\n                  <span\n                    *ngIf=\"settings?.is_return_request == 1 && data?.return_data && data?.return_data.length > 0 && [5,6].includes(orderHistory[selectedOrder]?.status)\"\n                    class=\"return-status\">status: {{data?.return_data[0].status | returnStatus}}</span>\n                  <span\n                    *ngIf=\"settings?.is_return_request == 1 && data?.return_data && data?.return_data.length > 0 && data?.return_data[0].reason && [5,6].includes(orderHistory[selectedOrder]?.status)\"\n                    class=\"return-status\">reason: {{data?.return_data[0].reason}}</span>\n                </div>\n\n                <div class=\"track_order_number food_track_order\">\n\n                  <!-- <h5 [style.color]=\"style.baseColor\">{{settings?.app_type == 8 ? 'Service Booked On:' : 'Ordered on:'}}\n                {{orderHistory[selectedOrder]?.created_on | date: 'medium' : '+000'}}</h5> -->\n                  <!-- <h5 [style.color]=\"style.baseColor\"\n                *ngIf=\"orderHistory[selectedOrder]?.delivered_on != 'Invalid date' && !orderHistory[selectedOrder]?.agent.length\">\n                <span>{{settings?.app_type == 8 ? 'Service Date:' : [5,6].includes(orderHistory[selectedOrder]?.status) ? 'Delivered On:' : 'Expected Delivery On:'}}\n                  {{orderHistory[selectedOrder]?.delivered_on | date: 'medium' : '+000'}}</span></h5> -->\n                  <h5 [style.color]=\"style.baseColor\"\n                    *ngIf=\"settings?.app_type == 8 && orderHistory[selectedOrder]?.delivered_on != 'Invalid date'\"\n                    @fade>\n                    <span [style.color]=\"style.baseColor\">Start Time:\n                      {{orderHistory[selectedOrder]?.start_time | date: 'medium' : '+000'}}\n                    </span>\n                    <br><span [style.color]=\"style.baseColor\">End Time:\n                      {{orderHistory[selectedOrder]?.end_time | date: 'medium' : '+000'}}\n                    </span>\n                  </h5>\n\n                  <!-- <div class=\"order_track_buttons\">\n                <a *ngIf=\"[3,4].includes(orderHistory[selectedOrder]?.status) && settings?.booking_track_status && !orderHistory[selectedOrder]?.self_pickup\"\n                  [ngStyle]=\"{'color': style.primaryColor, 'borderColor': style.primaryColor, 'backgroundColor': '#ffffff'}\"\n                  (click)=\"trackOrder(orderHistory[selectedOrder])\">{{settings?.app_type == 8 ? 'Track Agent' : 'Track Order'}}</a> -->\n                  <!-- <a [ngStyle]=\"{'color': style.primaryColor, 'borderColor': style.primaryColor, 'backgroundColor': '#ffffff'}\">{{'Help' | translate}}</a> -->\n                  <!-- <a href=\"javascript:void(0)\">Reorder</a> -->\n                  <!-- </div> -->\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-12 order-detail\">\n                <app-questions-list\n                  *ngIf=\"orderHistory[selectedOrder].questions && orderHistory[selectedOrder].questions.length\"\n                  [questions]=\"orderHistory[selectedOrder].questions\" [style]=\"style\"\n                  [cartPrice]=\"{amount: orderHistory[selectedOrder]?.total_order_price}\">\n                </app-questions-list>\n              </div>\n            </div>\n\n            <app-order-attachments [order]=\"orderHistory[selectedOrder]\" [settings]=\"settings\"></app-order-attachments>\n\n            <div class=\"order-instruction\" *ngIf=\"orderHistory[selectedOrder].parking_instructions\">\n              <h5>{{'Parking Instructions' | translate}}</h5>\n              <p>{{orderHistory[selectedOrder].parking_instructions}}</p>\n            </div>\n            <div class=\"order-instruction\" *ngIf=\"orderHistory[selectedOrder].area_to_focus\">\n              <h5>{{'Area To Focus' | translate}}</h5>\n              <p>{{orderHistory[selectedOrder].area_to_focus}}</p>\n            </div>\n\n          </div>\n\n          <div *ngIf=\"isEditOrder\" class=\"col-md-8\">\n            <div *ngFor=\"let data of editOrder?.products;trackBy:trackByEditOrderFn\">\n              <div class=\"track_order_outter food_track_order_outer\"\n                [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n                <div class=\"track_order_name_detail\" style=\"position: relative;\">\n                  <span class=\"track_order_img\">\n                    <img appImage [url]=\"data?.image_path\" [size]=\"'500x500'\" [src]=\"data?.image_path\"\n                      [settings]=\"settings\" @fade>\n                  </span>\n                  <div class=\"track_order_name\">\n                    <!-- <h6>Electronices</h6> -->\n                    <h2 [style.color]=\"style.baseColor\" @fade>{{data?.product_name || data?.name}}</h2>\n                    <p *ngIf=\"settings?.branch_flow == 1 && data?.branch_name\">Branch: {{data?.branch_name}}</p>\n                    <!-- <h4 @fade>\n                    <span [style.color]=\"style.baseColor\"\n                      *ngIf=\"data?.is_product\">{{data?.price_type ? 'Hours' : 'Quantity' | translate}} : </span>\n                    <span [style.color]=\"style.baseColor\"\n                      *ngIf=\"!data?.is_product\">{{data?.price_type ? 'Duration' : 'Quantity'}} : </span>\n                    <span [style.color]=\"style.primaryColor\"\n                      *ngIf=\"!data?.is_product && data?.price_type; else other_content\">{{data?.duration | formatTimeInterval}}</span>\n                  </h4> -->\n                    <!-- <div *ngIf=\"data.customization\">\n                    <ul class=\"cart-product-addon\">\n                      <li *ngFor=\"let cust of data.customization.data\" [style.color]=\"style.baseColor\" opacity=\"0.5\">\n                        {{cust?.name}} -\n                        {{addOnNames(cust?.value)}}\n                      </li>\n                    </ul>\n                  </div> -->\n                    <!-- <div *ngIf=\"data.prod_variants && data.prod_variants.length\">\n                    <div *ngFor=\"let variant of data.prod_variants\">\n                      <ng-template [ngIf]=\"variant.variant_type != 1\" [ngIfElse]=\"color\">\n                        <p class=\"mb-0\" [style.color]=\"style.baseColor\">\n                          {{variant?.variant_name}}:<span>{{variant?.variant_value}}</span></p>\n                      </ng-template>\n                      <ng-template #color>\n                        <p class=\"mb-0\" [style.color]=\"style.baseColor\">{{variant?.variant_name}}:<span\n                            class=\"cart-color-varient\" [style.background-color]=\"variant?.variant_value\"></span></p>\n                      </ng-template>\n                    </div>\n                  </div> -->\n                    <!-- <ng-template #other_content><span [style.color]=\"style.baseColor\">{{data?.quantity}}</span>\n                  </ng-template> -->\n                    <div>\n                      <app-quantity-buttons [style]=\"style\" [settings]=\"settings\" [priceType]=\"data?.price_type\"\n                        [isProduct]=\"data?.is_product\" [selectedQuantity]=\"data?.selectedQuantity || data?.quantity\"\n                        (onAdd)=\"increaseValue(data)\" (onRemove)=\"decreaseValue(data)\">\n                      </app-quantity-buttons>\n                      <!-- <app-quantity-buttons *ngIf=\"settings.product_detail == 0\" [style]=\"style\"\n                              [settings]=\"settings\" [priceType]=\"product?.price_type\" [isProduct]=\"product?.is_product\"\n                              [selectedQuantity]=\"product.selectedQuantity\"\n                              (onRemove)=\"onServiceAddOrRemove(product, -1)\" (onAdd)=\"onServiceAddOrRemove(product, 1)\">\n                            </app-quantity-buttons> -->\n                    </div>\n                  </div>\n                  <div class=\"tracker_order_price\">\n                    <h3 [style.color]=\"style.baseColor\" @fade>\n                      {{orderHistory[selectedOrder]?.local_currency || currency }}\n                      {{util.convertIntoNumber((data?.fixed_price*1)*selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)}}\n                    </h3>\n                  </div>\n\n                </div>\n\n                <!-- <div class=\"track_order_number food_track_order\">\n                  <h5 [style.color]=\"style.baseColor\"\n                    *ngIf=\"settings?.app_type == 8 && orderHistory[selectedOrder]?.delivered_on != 'Invalid date' && orderHistory[selectedOrder]?.agent.length\"\n                    @fade>\n                    <span [style.color]=\"style.baseColor\">Start Time:\n                      {{orderHistory[selectedOrder]?.start_time | date: 'medium' : '+000'}}\n                    </span>\n                    <br><span [style.color]=\"style.baseColor\">End Time:\n                      {{orderHistory[selectedOrder]?.end_time | date: 'medium' : '+000'}}\n                    </span>\n                  </h5>\n                </div> -->\n\n              </div>\n            </div>\n\n            <div>\n              <button *ngIf=\"editOrder.products && editOrder.products.length\" class=\"btn cancel-order\"\n                [ngStyle]=\"{'border-color': style.primaryColor, 'color': style.baseColor}\"\n                (click)=\"onAddItems(orderHistory[selectedOrder])\">{{'Place' | translate}}\n                {{'order' | localization: orderHistory[selectedOrder]?.type | translate}} </button>\n              <button class=\"btn cancel-order\" (click)=\"itemSelection()\"\n                [ngStyle]=\"{'border-color': style.primaryColor, 'color': style.baseColor}\">{{'Add' | translate}}\n                {{'product' | localization: orderHistory[selectedOrder]?.type | translate}} </button>\n            </div>\n          </div>\n\n          <div class=\"col-md-4\">\n            <div class=\"track_order_outter_detail\"\n              [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n              <h3 [style.color]=\"style.baseColor\" @fade>{{'ADDRESS DETAILS' | translate}}</h3>\n              <ng-container *ngIf=\"orderHistory[selectedOrder]?.self_pickup === 1;then selfPick\">\n              </ng-container>\n              <ng-container *ngIf=\"orderHistory[selectedOrder]?.self_pickup === 0;then deliver\">\n              </ng-container>\n              <ng-container *ngIf=\"orderHistory[selectedOrder]?.self_pickup === 3;then dininBooking\">\n              </ng-container>\n              <ng-container *ngIf=\"settings?.enable_user_vehicle_number;then vehicleNo\">\n              </ng-container>\n              <ng-template #deliver>\n                <h6 [style.color]=\"style.baseColor\" @fade>\n                  <strong>{{settings?.app_type == 8 ? 'Service At' : 'Deliver To' | translate}}</strong>\n                </h6>\n                <address [style.color]=\"style.baseColor\" @fade><i class=\"fa fa-map-marker mr-1\" aria-hidden=\"true\"></i>\n                  {{'Address' | translate}}: <b>{{orderHistory[selectedOrder]?.delivery_address?.address_line_1}}<br>\n                    {{orderHistory[selectedOrder]?.delivery_address?.customer_address}}</b><br>\n                  {{'Name' | translate}}:<b>{{orderHistory[selectedOrder]?.delivery_address?.user_name}}</b><br>\n                  <span *ngIf=\"orderHistory[selectedOrder]?.delivery_address?.reference_address\">{{'Ref. Address'}}:\n                    &nbsp;<b>{{orderHistory[selectedOrder]?.delivery_address?.reference_address}}</b></span>\n                  <!-- {{'Phone No.' | translate}}:<b> {{orderHistory[selectedOrder]?.delivery_address?.phone_number}}</b> -->\n                </address>\n              </ng-template>\n              <ng-template #selfPick>\n                <h6 [style.color]=\"style.baseColor\" @fade>{{'Pick From' | translate}}</h6>\n                <address [style.color]=\"style.baseColor\" @fade><i class=\"fa fa-map-marker mr-1\" aria-hidden=\"true\"></i>\n                  {{orderHistory[selectedOrder]?.supplier_address}}<br>\n                </address>\n              </ng-template>\n              <ng-template #dininBooking>\n                <h6 [style.color]=\"style.baseColor\" @fade>{{'Dinin At' | translate}}</h6>\n                <address [style.color]=\"style.baseColor\" @fade><i class=\"fa fa-map-marker mr-1\" aria-hidden=\"true\"></i>\n                  {{orderHistory[selectedOrder]?.supplier_address}}<br>\n                </address>\n              </ng-template>\n              <ng-template #vehicleNo>\n                <address *ngIf=\"orderHistory[selectedOrder]?.vehicle_number\" [style.color]=\"style.baseColor\" @fade><i\n                    class=\"fa fa-car mr-1\" aria-hidden=\"true\"></i>\n                  {{'Vehicle Number' | translate}}:&nbsp;<b>{{orderHistory[selectedOrder]?.vehicle_number}}</b>\n                </address>\n              </ng-template>\n            </div>\n\n            <div *ngIf=\"orderHistory[selectedOrder].table_details || orderHistory[selectedOrder].seating_capacity\"\n              class=\"track_order_outter_detail\"\n              [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n              <h3 [style.color]=\"style.baseColor\" @fade>{{'TABLE DETAILS' | translate}}</h3>\n\n              <div *ngIf=\"orderHistory[selectedOrder].table_details\">\n                <h6 [style.color]=\"style.baseColor\">\n                  <label>{{'Table No.' | translate}}&nbsp;:&nbsp;</label>\n                  <strong>{{orderHistory[selectedOrder].table_details.table_number || 'N/A'}}</strong>\n                </h6>\n                <h6 [style.color]=\"style.baseColor\">\n                  <label>{{'Table Name' | translate}}&nbsp;:&nbsp;</label>\n                  <strong>{{orderHistory[selectedOrder].table_details.table_name || 'N/A'}}</strong>\n                </h6>\n                <h6 [style.color]=\"style.baseColor\">\n                  <label>{{'Seating Capacity' | translate}}&nbsp;:&nbsp;</label>\n                  <strong>{{orderHistory[selectedOrder].table_details.seating_capacity}}</strong>\n                </h6>\n                <h6 [style.color]=\"style.baseColor\">\n                  <label>{{'Slot Date' | translate}}&nbsp;:&nbsp;</label>\n                  <strong>\n                    {{orderHistory[selectedOrder].table_details.schedule_date | tableDateTime : 'DD MMM yyyy' ||\n                    'N/A'}}</strong>\n                </h6>\n                <h6 [style.color]=\"style.baseColor\">\n                  <label>{{'Slot Time' | translate}}&nbsp;:&nbsp;</label>\n                  <strong>\n                    {{orderHistory[selectedOrder].table_details.schedule_date | tableDateTime : 'h:mm a' ||\n                    'N/A'}}</strong>\n                </h6>\n              </div>\n            </div>\n\n\n            <div *ngIf=\"orderHistory[selectedOrder]\">\n              <app-order-status-tracker [style]=\"style\" [settings]=\"settings\" [order]=\"orderHistory[selectedOrder]\"\n                @fade>\n              </app-order-status-tracker>\n            </div>\n\n\n            <div *ngIf=\"orderHistory[selectedOrder]?.agent.length && !orderHistory[selectedOrder]?.self_pickup\">\n              <div class=\"track_order_outter_detail\"\n                [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n                <h3 [style.color]=\"style.baseColor\" class=\"text-uppercase\" @fade>\n                  {{'agent' | localization: orderHistory[selectedOrder]?.type | translate}} {{'DETAILS' |translate}}\n                  <span class=\"float-right\" style=\"font-size: 12px; float: right;\"\n                    *ngIf=\"[5].includes(orderHistory[selectedOrder]?.status) &&  settings.is_agent_rating == 1\"\n                    (click)=\"toRateAgent(orderHistory[selectedOrder])\" class=\"cursor\" [style.color]=\"style.primaryColor\"\n                    @fade>\n                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                    {{'Rate To'}} {{ 'agent' | localization: orderHistory[selectedOrder]?.type}}\n                  </span>\n                </h3>\n\n                <div class=\"billing-info\">\n                  <ul class=\"bill-list\" [style.color]=\"style.baseColor\">\n                    <li>\n                      <div class=\"row no-gutters word-break\">\n                        <div class=\"col-md-5 col-6\" @fade>{{'Name' | translate}}</div>\n                        <div class=\"col-md-7 col-6 word capitalize\" @fade>\n                          {{orderHistory[selectedOrder]?.agent[0]?.name}}\n                        </div>\n                      </div>\n                    </li>\n                    <!-- <li>\n                  <div class=\"row word-break\">\n                    <div class=\"col-md-4\">Email</div>\n                    <div class=\"col-md-8 word\">{{orderHistory[selectedOrder]?.agent[0]?.email}}</div>\n                  </div>\n                </li> -->\n                    <li *ngIf=\"!settings?.is_number_masking_enable\">\n                      <div class=\"row no-gutters word-break\">\n                        <div class=\"col-md-5 col-6\" @fade>Phone No.</div>\n                        <div class=\"col-md-7 col-6 word\" @fade>{{orderHistory[selectedOrder]?.agent[0]?.phone_number}}\n                        </div>\n                      </div>\n                    </li>\n\n                    <li *ngIf=\"orderHistory[selectedOrder]?.proxy_phone_number && settings?.is_number_masking_enable\">\n                      <div class=\"row no-gutters word-break\">\n                        <div class=\"col-md-5 col-6\" @fade>Phone No.</div>\n                        <div class=\"col-md-7 col-6 word\" @fade>\n                          {{orderHistory[selectedOrder]?.proxy_phone_number || 'N/A'}}\n                        </div>\n                      </div>\n                    </li>\n\n\n\n                    <!-- <li>\n                    <div class=\"row word-break\">\n                      <div class=\"col-md-4\" @fade>Experience</div>\n                      <div class=\"col-md-8 word\" @fade>{{orderHistory[selectedOrder]?.agent[0]?.experience}}</div>\n                    </div>\n                  </li> -->\n                    <!-- <li>\n                    <div class=\"row word-break\">\n                      <div class=\"col-md-4\" @fade>Occupation</div>\n                      <div class=\"col-md-8 word capitalize\" @fade>{{orderHistory[selectedOrder]?.agent[0]?.occupation}}\n                      </div>\n                    </div>\n                  </li> -->\n                  </ul>\n                </div>\n              </div>\n            </div>\n\n            <div *ngIf=\"!isEditOrder\">\n              <div class=\"track_order_outter_detail\"\n                *ngIf=\"settings?.enable_agent_leave_notes && orderHistory[selectedOrder]?.status==5 &&\n               (orderHistory[selectedOrder]?.agent[0]?.left_with_picture_url || orderHistory[selectedOrder]?.agent[0]?.order_left_reason)\"\n                [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n                <h3 [style.color]=\"style.baseColor\" @fade>{{'DELIVERY INFORMATION' | translate}}</h3>\n                <div class=\"billing-info\" *ngIf=\"orderHistory.length > 0\">\n                  <h5 [style.color]=\"style.baseColor\"\n                    *ngIf=\"orderHistory[selectedOrder]?.agent[0]?.left_with_picture_url\" @fade>\n                    <p>\n                      <b>\n                        <span class=\"image_view\"\n                          (click)=\"downloadReceipt(orderHistory[selectedOrder]?.agent[0]?.left_with_picture_url)\">\n                          {{'View Left Image'}}\n                        </span>\n                      </b>\n                    </p>\n                  </h5>\n                  <h5 [style.color]=\"style.baseColor\" style=\"font-size: 15px; font-weight: 600;\"\n                    *ngIf=\"orderHistory[selectedOrder]?.agent[0]?.order_left_reason\" @fade>\n                    {{'Order Left Reason' | translate}} :\n                    <strong>\n                      <span>{{orderHistory[selectedOrder]?.agent[0]?.order_left_reason || 'N/A'}}</span>\n                    </strong>\n                  </h5>\n                </div>\n              </div>\n\n\n\n              <div class=\"track_order_outter_detail\"\n                [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n                <h3 [style.color]=\"style.baseColor\" @fade>{{'BILLING INFORMATION' | translate}}</h3>\n\n                <div class=\"billing-info\" *ngIf=\"orderHistory.length > 0\">\n\n                  <h5 [style.color]=\"style.baseColor\"\n                    *ngIf=\"orderHistory[selectedOrder]?.is_cutlery_required && settings?.enable_cutlery_option\" @fade>\n                    {{'Cutlery Option?' | translate}} :\n                    <strong>\n                      <span>{{orderHistory[selectedOrder]?.is_cutlery_required?'Yes':'No'}}</span>\n                    </strong>\n                  </h5>\n\n                  <h5 [style.color]=\"style.baseColor\"\n                    *ngIf=\"orderHistory[selectedOrder]?.no_touch_delivery && settings?.enable_no_touch_delivery\" @fade>\n                    {{'No Touch Delivery?' | translate}} :\n                    <strong>\n                      <span>{{orderHistory[selectedOrder]?.no_touch_delivery?'Yes':'No'}}</span>\n                    </strong>\n                  </h5>\n\n\n                  <h5 [style.color]=\"style.baseColor\" *ngIf=\"orderHistory[selectedOrder]?.admin_price_update_receipt\"\n                    @fade>\n                    <p>\n                      <b>\n                        <span class=\"image_view\"\n                          (click)=\"downloadReceipt(orderHistory[selectedOrder]?.admin_price_update_receipt)\">\n                          {{'View Receipt'}}\n                        </span>\n                      </b>\n                    </p>\n                  </h5>\n\n                  <h5 [style.color]=\"style.baseColor\" style=\"font-size: 15px; font-weight: 600;\"\n                    *ngIf=\"orderHistory[selectedOrder]?.agent_verification_code && settings?.agent_verification_code_enable == '1'\"\n                    @fade>\n                    {{'Agent Verification Code' | translate}} :\n                    <strong>\n                      <span>{{orderHistory[selectedOrder]?.agent_verification_code}}</span>\n                    </strong>\n                  </h5>\n\n\n                  <h5 [style.color]=\"style.baseColor\"\n                    *ngIf=\"settings?.app_type == 1 || orderHistory[selectedOrder]?.type == 1\" @fade>\n                    {{'Delivery Mode' | translate}} :\n                    <strong *ngIf=\"orderHistory[selectedOrder]?.self_pickup == 1\">Self Pickup</strong>\n                    <strong *ngIf=\"orderHistory[selectedOrder]?.self_pickup == 0\">{{settings?.is_enable_delivery_type ==\n                      1 ? (orderHistory[selectedOrder]?.order_delivery_type == 1 ? 'Express Delivery' : 'Normal\n                      Delivery') : 'Delivery'}}</strong>\n                    <strong *ngIf=\"orderHistory[selectedOrder]?.self_pickup == 3\">Dine In</strong>\n                  </h5>\n\n                  <h5 [style.color]=\"style.baseColor\" @fade>\n                    {{'Payment Mode' | translate}} :\n                    <strong>{{orderHistory[selectedOrder]?.payment_type == 3 ? 'None' :\n                      (orderHistory[selectedOrder]?.payment_type == 2 ? 'Free' :\n                      (orderHistory[selectedOrder]?.payment_type == 0 ? (orderHistory[selectedOrder]?.self_pickup == 1 ?\n                      ('cash_on_pickup' | localization | translate) : ('cod' | localization | translate)) : 'Online' |\n                      localization: orderHistory[selectedOrder]?.type)) | translate}}<span\n                        *ngIf=\"orderHistory[selectedOrder]?.payment_source\">\n                        ({{orderHistory[selectedOrder]?.payment_source}})</span>\n                    </strong>\n                    <strong>\n                      <span *ngIf=\"orderHistory[selectedOrder].payment_type === 5\">\n                        Out of platform\n                      </span>\n                    </strong>\n                  </h5>\n\n                  <h5 *ngIf=\"orderHistory[selectedOrder]?.payment_type == 0 && settings?.is_coin_exchange == 1\"\n                    [style.color]=\"style.baseColor\" @fade>\n                    {{'Change in Request' | translate}} :\n                    <strong>{{orderHistory[selectedOrder]?.have_coin_change?'Yes':'No' }}\n                    </strong>\n                  </h5>\n\n                  <ul class=\"bill-list\" [style.color]=\"style.baseColor\">\n                    <li @fade>{{'Sub Total' | translate}}\n                      <span>\n                        <strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{((orderHistory[selectedOrder]?.total_order_price*1)*\n                          selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n\n                    <li *ngIf=\"orderHistory[selectedOrder]?.promoCode && orderHistory[selectedOrder]?.discountAmount\"\n                      @fade>{{'Discount' | translate}} -\n                      <small class=\"uppercase\"> ({{orderHistory[selectedOrder]?.promoCode}})</small><span> <strong> -\n                          {{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{((orderHistory[selectedOrder]?.discountAmount*1)*\n                          selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n\n                    <li\n                      *ngIf=\"orderHistory[selectedOrder]?.promoCode && !orderHistory[selectedOrder]?.discountAmount && freeProductQuantity\"\n                      @fade>{{'Offer Applied' | translate}} -\n                      <small class=\"uppercase\"> ({{orderHistory[selectedOrder]?.promoCode}})</small><span> <strong>\n                          {{freeProductQuantity}} {{'Free ' + ('product' | localization:\n                          orderHistory[selectedOrder]?.type | translate)}}</strong></span>\n                    </li>\n\n                    <li *ngIf=\"orderHistory[selectedOrder]?.gift_amount\" @fade>{{'Discount' | translate}} -\n                      <small class=\"uppercase\"> </small><span> <strong> -\n                          {{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{orderHistory[selectedOrder]?.discountAmount}}</strong></span>\n                    </li>\n                    <li *ngIf=\"orderHistory[selectedOrder]?.wallet_discount_amount\" @fade>\n                      {{'Wallet Discount' | translate}} -\n                      <small class=\"uppercase\"> </small><span> <strong> -\n                          {{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{orderHistory[selectedOrder]?.discountAmount}}</strong></span>\n                    </li>\n\n                    <li\n                      *ngIf=\"orderHistory[selectedOrder]?.self_pickup == 0  && orderHistory[selectedOrder].type != 8 && settings?.app_type != 8\"\n                      @fade>\n                      {{'Delivery Charges' | translate}}\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{((orderHistory[selectedOrder]?.delivery_charges*1)*\n                          selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n                    <li\n                      *ngIf=\"orderHistory[selectedOrder]?.addOn && (orderHistory[selectedOrder].type == 8 || settings?.app_type == 8)\"\n                      @fade>\n                      {{'AddOn Charges' | translate}}\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{orderHistory[selectedOrder]?.addOn?.toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n                    <li *ngIf=\"settings?.disable_tax == 0\" @fade>{{'tax' | localization | translate}}\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{((orderHistory[selectedOrder]?.handling_admin*1)*\n                          selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n                    <li *ngIf=\"orderHistory[selectedOrder].tip_agent\" @fade>\n                      {{'agent' | localization: orderHistory[selectedOrder]?.type}} {{'tip' | localization}}\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{(orderHistory[selectedOrder]?.tip_agent).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n                    <li *ngIf=\"orderHistory[selectedOrder].slot_price && settings?.is_schdule_order == 1\" @fade>\n                      Slot Price\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{(orderHistory[selectedOrder]?.slot_price).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n                    <li\n                      *ngIf=\"orderHistory[selectedOrder].slot_price && settings?.is_schdule_order == 1 && settings?.table_book_mac_theme == 1\"\n                      @fade>\n                      Table Booking Discount\n                      <span><strong>- {{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{(orderHistory[selectedOrder]?.slot_price).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n                    <li *ngIf=\"settings?.referral_feature == 1 && orderHistory[selectedOrder].referral_amount\" @fade>\n                      {{'Referral Discount' | translate}}\n                      <span><strong>- {{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{((orderHistory[selectedOrder]?.referral_amount*1)*\n                          selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n\n                    <li *ngIf=\"settings?.is_loyality_enable == 1 && orderHistory[selectedOrder].loyality_point_discount\"\n                      @fade>\n                      {{'Loyalty Discount' | translate}}\n                      <span><strong>- {{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{((orderHistory[selectedOrder]?.loyality_point_discount*1)*\n                          selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n\n                    <li *ngIf=\"settings?.supplier_service_fee == 1 && orderHistory[selectedOrder].user_service_charge\"\n                      @fade>\n                      {{'supplier_service_fee' | localization | translate}}\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{((orderHistory[selectedOrder]?.user_service_charge*1)*\n                          selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n\n\n                    <li *ngIf=\"orderHistory[selectedOrder]?.admin_updated_charge\" @fade>\n                      {{'Updated Charge' | translate}}\n                      <span>\n                        <strong>\n                          {{orderHistory[selectedOrder]?.is_subtotal_add==0?'-':'+'}}\n                          {{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{orderHistory[selectedOrder]?.admin_updated_charge.toFixed(2)}}\n                        </strong>\n                      </span>\n                    </li>\n\n\n\n                    <li @fade>{{'Net Total' | translate}}\n                      <small\n                        *ngIf=\"settings.is_currency_exchange_rate == 1 && orderHistory[selectedOrder].currency_exchange_rate\">\n                        ( XR:\n                        {{currency}} 1 = {{orderHistory[selectedOrder]?.local_currency || currency }}\n                        {{orderHistory[selectedOrder]?.currency_exchange_rate}} ) </small>\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{((orderHistory[selectedOrder]?.net_amount*1)*\n                          selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)}}\n                        </strong>\n                      </span>\n                    </li>\n\n                    <li\n                      *ngIf=\"orderHistory[selectedOrder]?.refund_amount && orderHistory[selectedOrder]?.payment_type != 0\"\n                      @fade>Refund Amount\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{(orderHistory[selectedOrder]?.refund_amount).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n\n                    <li *ngIf=\"orderHistory[selectedOrder]?.remaining_amount\" @fade>Remaining Amount\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{(orderHistory[selectedOrder]?.remaining_amount).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n\n\n            <div *ngIf=\"isEditOrder\">\n              <div class=\"track_order_outter_detail\"\n                [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n                <h3 [style.color]=\"style.baseColor\" @fade>{{'BILLING INFORMATION' | translate}}</h3>\n\n                <div class=\"billing-info\" *ngIf=\"orderHistory.length > 0\">\n                  <h5 [style.color]=\"style.baseColor\" @fade>\n                    {{'Payment Mode' | translate}} :\n                    <strong>{{editOrder?.payment_type == 3 ? 'None' : (editOrder?.payment_type == 2 ? 'Free' :\n                      (editOrder?.payment_type == 0 ? 'Cash' : 'Online' | localization: editOrder?.type)) |\n                      translate}}<span *ngIf=\"editOrder?.payment_source\">\n                        ({{editOrder?.payment_source}})</span>\n                    </strong>\n                  </h5>\n\n                  <h5 [style.color]=\"style.baseColor\"\n                    *ngIf=\"orderHistory[selectedOrder]?.agent_verification_code && settings?.agent_verification_code_enable == 1\"\n                    @fade>\n                    {{'Agent Verification Code' | translate}} :\n                    <strong>\n                      <span>{{orderHistory[selectedOrder]?.agent_verification_code}}</span>\n                    </strong>\n                  </h5>\n\n                  <h5 *ngIf=\"editOrder?.payment_type == 0 && settings?.is_coin_exchange == 1\"\n                    [style.color]=\"style.baseColor\" @fade>\n                    {{'Change in Request' | translate}} :\n                    <strong>{{editOrder?.have_coin_change?'Yes':'No' }}\n                    </strong>\n                  </h5>\n\n                  <ul class=\"bill-list\" [style.color]=\"style.baseColor\">\n                    <li @fade>{{'Sub Total' | translate}}<span>\n                        <strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{(editOrder?.total_order_price).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n                    <li *ngIf=\"editOrder?.promoCode\" @fade>{{'Discount' | translate}} -\n                      <small class=\"uppercase\"> ({{editOrder?.promoCode}})</small><span> <strong> -\n                          {{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{editOrder?.discountAmount}}</strong></span>\n                    </li>\n                    <li *ngIf=\"editOrder?.gift_amount\" @fade>{{'Discount' | translate}} -\n                      <small class=\"uppercase\"> </small><span> <strong> -\n                          {{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{editOrder?.discountAmount}}</strong></span>\n                    </li>\n                    <li *ngIf=\"editOrder?.wallet_discount_amount\" @fade>\n                      {{'Wallet Discount' | translate}} -\n                      <small class=\"uppercase\"> </small><span> <strong> -\n                          {{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{editOrder?.discountAmount}}</strong></span>\n                    </li>\n\n                    <li *ngIf=\"editOrder?.self_pickup == 0 && editOrder.type != 8 && settings?.app_type != 8\" @fade>\n                      {{'Delivery Charges' | translate}}\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{editOrder?.delivery_charges?.toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n                    <li *ngIf=\"editOrder?.addOn && (editOrder.type == 8 || settings?.app_type == 8)\" @fade>\n                      {{'AddOn Charges' | translate}}\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{editOrder?.addOn?.toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n                    <li *ngIf=\"settings?.disable_tax == 0\" @fade>{{'tax' | localization | translate}}\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{(editOrder?.handling_admin +\n                          editOrder?.handling_supplier).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n                    <li *ngIf=\"editOrder?.tip_agent\" @fade>\n                      {{'agent' | localization: editOrder?.type}} {{'tip' | localization}}\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{(editOrder?.tip_agent).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n                    <li *ngIf=\"editOrder?.slot_price && settings?.is_schdule_order == 1\" @fade>\n                      Slot Price\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{(editOrder?.slot_price).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n                    <li *ngIf=\"settings?.referral_feature == 1 && editOrder.referral_amount\" @fade>\n                      {{'Referral Discount' | translate}}\n                      <span><strong>- {{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{editOrder?.referral_amount?.toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n\n                    <li *ngIf=\"settings?.is_loyality_enable == 1 && editOrder.loyality_point_discount\" @fade>\n                      {{'Loyalty Discount' | translate}}\n                      <span><strong>- {{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{editOrder?.loyality_point_discount?.toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n\n                    <li *ngIf=\"settings?.supplier_service_fee == 1 && editOrder.user_service_charge\" @fade>\n                      {{'supplier_service_fee' | localization | translate}}\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{editOrder?.user_service_charge?.toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n\n                    <li @fade>{{'Net Total' | translate}}\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{(editOrder?.net_amount).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n\n                    <li *ngIf=\"editOrder?.refund_amount  && orderHistory[selectedOrder]?.payment_type != 0\" @fade>\n                      Refund\n                      Amount\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{(editOrder?.refund_amount).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n\n                    <li *ngIf=\"editOrder?.remaining_amount\" @fade>Remaining Amount\n                      <span><strong>{{orderHistory[selectedOrder]?.local_currency || currency }}\n                          {{(editOrder?.remaining_amount).toFixed(settings?.price_decimal_length)}}</strong></span>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n\n\n            <div>\n              <div *ngIf=\"orderHistory[selectedOrder].status == 8 && orderHistory[selectedOrder].refund_amount\"\n                class=\"track_order_outter_detail\"\n                [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n                <h3 class=\"mb-0\" [style.color]=\"style.baseColor\" @fade>{{'Refund Amount' | translate}}: <span\n                    class=\"float-right\">{{orderHistory[selectedOrder]?.local_currency || currency }}\n                    {{orderHistory[selectedOrder].refund_amount}}</span> </h3>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n    </section>\n    <!--================ End Product Result Page ================-->\n  </div>\n\n  <app-order-supplier-products *ngIf=\"isAddItems\" [settings]=\"settings\" [style]=\"style\"\n    [orderType]=\"orderHistory[selectedOrder].type || settings.app_type\"\n    [supplierId]=\"this.orderHistory[selectedOrder]?.supplier_id\" [selectedProducts]=\"editOrder.products\"\n    (onBack)=\"isAddItems = false\" (onAdd)=\"onProductAdd($event)\">\n  </app-order-supplier-products>\n</ng-container>\n\n\n<!-- The Modal -->\n<div class=\"modal fade\" id=\"walletRefund\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Refund Payment To</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"isReturnProduct = false\"></button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <form>\n          <div *ngIf=\"isReturnProduct\" class=\"form-group\">\n            <label for=\"comment\">Reason</label>\n            <textarea class=\"form-control\" rows=\"5\" id=\"comment\" name=\"reason\"\n              [(ngModel)]=\"returnProductReason\"></textarea>\n          </div>\n          <div class=\"form-check-inline\">\n            <label class=\"form-check-label\" for=\"radio1\">{{'Initial Payment Source' | translate}}\n              <input type=\"radio\" class=\"form-check-input\" id=\"radio1\" name=\"refund\" [value]=\"0\"\n                [(ngModel)]=\"refundToWallet\" [checked]=\"!refundToWallet\"><span class=\"check-span\"></span>\n            </label>\n          </div>\n          <div class=\"form-check-inline\">\n            <label class=\"form-check-label\" for=\"radio2\">{{'Wallet' | translate}}\n              <input type=\"radio\" class=\"form-check-input\" id=\"radio2\" name=\"refund\" [value]=\"1\"\n                [(ngModel)]=\"refundToWallet\" [checked]=\"refundToWallet\">\n              <span class=\"check-span\"></span>\n            </label>\n          </div>\n        </form>\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\"\n          (click)=\"isReturnProduct ? returnProductRequest() : cancelOrder(orderHistory[selectedOrder])\">Submit</button>\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\"\n          (click)=\"isReturnProduct = false\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<ng-template #skeleton>\n\n  <div class=\"skeleton\">\n    <div class=\"page_breadcrumb\" [style.background-color]=\"style.backgroundColor\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <p></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--================ End Page Breadcrumb Page ================-->\n\n    <section class=\"product_result_body\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <h4 class=\"mb-4\"> </h4>\n          </div>\n          <div class=\"col-md-4\">\n            <a></a>\n          </div>\n        </div>\n\n        <!------------------------------ Supplier Detail Start ---------------------------------->\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"order-supplier\"\n              [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n              <div class=\"supplier-info\">\n                <h2 [ngStyle]=\"{'height': '32px'}\"></h2>\n                <p [ngStyle]=\"{'height': '16px'}\"></p>\n                <h5 [ngStyle]=\"{'height': '14px'}\"></h5>\n              </div>\n              <div class=\"order-status\">\n                <h4 [ngStyle]=\"{'height': '22px', 'width': '100px', 'float': 'right' }\"></h4>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!------------------------------ Supplier Detail End ---------------------------------->\n\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div *ngFor=\"let data of util.generateFakeList(2);trackBy:trackByUtilGenerateFn\">\n              <div class=\"track_order_outter food_track_order_outer\"\n                [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n                <div class=\"track_order_name_detail\">\n                  <span class=\"track_order_img\">\n                    <img>\n                  </span>\n                  <div class=\"track_order_name\">\n                    <h2 [ngStyle]=\"{'height': '22px'}\"></h2>\n                    <h4 [ngStyle]=\"{'height': '14px','width': '150px'}\">\n                    </h4>\n                  </div>\n                  <div class=\"tracker_order_price\">\n                    <h3 [ngStyle]=\"{'height': '22px', 'width': '100px','float': 'right'}\"></h3>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-4\">\n            <div class=\"track_order_outter_detail\"\n              [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n              <h3></h3>\n              <ng-container>\n                <h6><strong></strong></h6>\n                <address [style.color]=\"style.baseColor\">\n                  <p></p>\n                  <p></p>\n                </address>\n              </ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n\n</ng-template>\n\n\n<div class=\"modal fade\" id=\"dhl_status\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">DHL Shipment Status</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"></button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <ul *ngIf=\"dhlData\">\n          <li>AWB No. : {{dhlData?.AWBNumber}}</li>\n          <li>Consignee Name : {{dhlData?.ShipmentInfo?.ConsigneeName}}</li>\n          <li>Consignee Address : {{dhlData?.ShipmentInfo?.Consignee?.City}},\n            {{dhlData?.ShipmentInfo?.Consignee?.CountryCode}}, {{dhlData?.ShipmentInfo?.Consignee?.PostalCode}}</li>\n          <li>Pieces : {{dhlData?.ShipmentInfo?.Pieces}}</li>\n          <li>Weight : {{dhlData?.ShipmentInfo?.Weight}}{{dhlData?.ShipmentInfo?.WeightUnit}}</li>\n          <li>Shipment Date : {{dhlData?.ShipmentInfo?.ShipmentDate | date: 'medium'}}</li>\n          <li>Shipment Description : {{dhlData?.ShipmentInfo?.ShipmentDesc}}</li>\n          <li>Status : {{dhlData?.ShipmentInfo?.ShipmentEvent?.ServiceEvent?.Description}}\n            ({{dhlData?.ShipmentInfo?.ShipmentEvent?.ServiceEvent?.EventCode}})</li>\n        </ul>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<app-image-viewer *ngIf=\"openImageViewer\" [viewImage]=\"imageToView\" (closeImageViewer)=\"closeImageViewer($event)\">\n\n</app-image-viewer>\n\n\n<app-special-instruction *ngIf=\"is_special_instruction\" [special_instructions]=\"special_instructions\"\n  [only_viewing]=\"true\" [style]=\"style\" [settings]=\"settings\" (onProcess)=\"onProcessSpecialInstruction($event)\">\n</app-special-instruction>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/order-listing/order-listing.component.html":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/order-listing/order-listing.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesOrdersOrderListingOrderListingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--================ Start Page Breadcrumb Page ================-->\n<div class=\"page_breadcrumb\" [style.background-color]=\"style.backgroundColor\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<ul>\n\t\t\t\t\t<!-- <li><a href=\"javascript:void(0)\" [style.color]=\"style.baseColor\">My Account</a></li> -->\n\t\t\t\t\t<li><a class=\"active\" href=\"javascript:void(0)\" [style.color]=\"style.baseColor\">{{('My ' + ('orders' | localization: settings?.app_type: 1)) | translate}} </a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!--================ End Page Breadcrumb Page ================-->\n\n<!--================ Start Product Result Page ================-->\n<section class=\"product_result_body\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h1 [style.color]=\"style.baseColor\">{{('My ' + ('orders' | localization: settings?.app_type: 1)) | translate}}</h1>\n\t\t\t\t<ul class=\"order-tabs\">\n\t\t\t\t\t<li class=\"cursor\" (click)=\"orderTypeSelect('pending_orders')\" [ngStyle]=\"orderType === 'pending_orders'\n\t\t\t\t\t\t ? {color: style.primaryColor, 'border-color' : style.primaryColor, opacity: 1} \n\t\t\t\t\t\t : {color: style.baseColor, 'border-color' : style.baseColor, opacity: 0.5}\">\n\t\t\t\t\t\t<a>{{('Active ' + ('orders' | localization: settings?.app_type: 1)) | translate}}</a></li>\n\n\t\t\t\t\t<!-- <li class=\"cursor\" (click)=\"orderTypeSelect('schedule_orders')\" *ngIf=\"settings?.app_type == 8\"\n\t\t\t\t\t\t[ngStyle]=\"orderType === 'schedule_orders'\n\t\t\t\t\t? {color: style.primaryColor, 'border-color' : style.primaryColor, opacity: 1} \n\t\t\t\t\t: {color: style.baseColor, 'border-color' : style.baseColor, opacity: 0.5}\">\n\t\t\t\t\t\t<a>{{'Schedule' | translate}} {{'orders' | localization | translate}}</a></li> -->\n\t\t\t\t\t<li class=\"cursor\" (click)=\"orderTypeSelect('orders')\" [ngStyle]=\"orderType === 'orders'\n\t\t\t\t\t? {color: style.primaryColor, 'border-color' : style.primaryColor, opacity: 1} \n\t\t\t\t\t: {color: style.baseColor, 'border-color' : style.baseColor, opacity: 0.5}\">\n\t\t\t\t\t\t<a>{{('Past ' + ('orders' | localization: settings?.app_type: 1)) | translate}}</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<ng-container *ngIf=\"!isLoading; else skeleton\">\n\t\t\t<div class=\"row\" *ngIf=\"pagination.count > 0\">\n\t\t\t\t<div class=\"col-xl-6 col-lg-8\"\n\t\t\t\t\t*ngFor=\"let order of orders | paginate: { itemsPerPage: pagination.perPageOrder, currentPage: pagination.currentPage, totalItems: pagination.count };trackBy:trackByOrderFn\">\n\t\t\t\t\t<app-order-list-item [order]=\"order\" [settings]=\"settings\" [style]=\"style\"\n\t\t\t\t\t\t(cancel)=\"cancelOrder(order)\"></app-order-list-item>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"custom-pagination\" *ngIf=\"pagination.count > pagination.perPageOrder\">\n\t\t\t\t\t<pagination-controls [style.color]=\"style.primaryColor\" (pageChange)=\"pageChange($event)\"\n\t\t\t\t\t\tpreviousLabel=\"Prev\" nextLabel=\"Next\">\n\t\t\t\t\t</pagination-controls>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"no-data\" *ngIf=\"!pagination.count && noData\">\n\t\t\t\t<h1 [style.color]=\"style.baseColor\">{{'No' | translate}} {{ 'order' | localization }}\n\t\t\t\t\t{{'Found' | translate}}</h1>\n\t\t\t</div>\n\n\t\t</ng-container>\n\t\t<ng-template #skeleton>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-6\" *ngFor=\"let data of util.generateFakeList(6);trackBy:trackByFakeListFn\">\n\t\t\t\t\t<app-order-list-item-skeleton [settings]=\"settings\" [style]=\"style\"></app-order-list-item-skeleton>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-template>\n\n\t</div>\n</section>\n<!--================ End Product Result Page ================-->\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/order-request/order-request.component.html":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/order-request/order-request.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesOrdersOrderRequestOrderRequestComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--================ Start Page Breadcrumb Page ================-->\n<div class=\"page_breadcrumb\" [style.background-color]=\"style.backgroundColor\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ul>\n                    <li><a class=\"active\" href=\"javascript:void(0)\" [style.color]=\"style.baseColor\">\n                            {{'orders' | localization | translate}} Request</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n<!--================ End Page Breadcrumb Page ================-->\n\n<!--================ Start Product Result Page ================-->\n<section class=\"product_result_body\">\n    <div class=\"container\">\n        <div class=\"row\" style=\"margin-bottom: 20px;\">\n            <div class=\"col-md-12\">\n                <h1 [style.color]=\"style.baseColor\">{{'orders' | localization}} Requests</h1>\n            </div>\n        </div>\n\n        <ng-container *ngIf=\"!isLoading; else skeleton\">\n            <div class=\"row\" *ngIf=\"pagination.count > 0\">\n                <div class=\"col-md-6\"\n                    *ngFor=\"let order of orders | paginate: { itemsPerPage: pagination.perPageOrder, currentPage: pagination.currentPage, totalItems: pagination.count };trackBy:trackByOrderFn\">\n\n                    <div class=\"track_order_outter order-request\"\n                        [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n                        <div class=\"head\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\"> <b>Request Id:</b> {{order?.id}}</div>\n                                    </div>\n\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\"><b>Requested On:</b>\n                                            {{order?.created_at | date: 'medium' : '+000'}}</div>\n                                    </div>\n\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\"><b>{{'supplier' | localization | translate}}:</b> {{order?.name}}\n                                        </div>\n                                    </div>\n\n                                    <div class=\"row\" *ngIf=\"order?.prescription\">\n                                        <div class=\"col-md-12\"><b>Description:</b> {{order?.prescription}}</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <img (click)=\"viewAttachment(order?.prescription_image)\" [src]=\"order?.prescription_image ? order?.prescription_image : '/assets/images/placeholder_image.svg'\"\n                                        onError=\"src = '/assets/images/placeholder_image.svg';\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"foot\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <a class=\"float-left\" style=\"margin-top: 5px;\"><b>Status :</b> {{request_status[order?.status]}} </a>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <a *ngIf=\"[0,1].includes(order?.status)\" class=\"float-right cancel-btn margin-left-10\" [ngStyle]=\"{'borderColor': style?.primarycolor, color: style?.primaryColor}\"\n                                        (click)=\"rejectRequest(order)\">Reject\n                                        {{'order' | localization: order?.type | translate}} Request</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"custom-pagination\" *ngIf=\"pagination.count > pagination.perPageOrder\">\n                    <pagination-controls [style.color]=\"style.primaryColor\" (pageChange)=\"pageChange($event)\"\n                        previousLabel=\"Prev\" nextLabel=\"Next\">\n                    </pagination-controls>\n                </div>\n            </div>\n\n            <div class=\"no-data\" *ngIf=\"!pagination.count && noData\">\n                <h1 [style.color]=\"style.baseColor\">{{'No' | translate}} {{ 'order' | localization }}\n                    {{'Found' | translate}}</h1>\n            </div>\n\n        </ng-container>\n        <ng-template #skeleton>\n            <div class=\"row\">\n                <div class=\"col-6\" *ngFor=\"let data of util.generateFakeList(6);trackBy:trackByFakelistFn\">\n                    <app-order-list-item-skeleton [settings]=\"settings\" [style]=\"style\">\n                    </app-order-list-item-skeleton>\n                </div>\n            </div>\n        </ng-template>\n    </div>\n</section>\n<!--================ End Product Result Page ================-->";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/rating/rating.component.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/rating/rating.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesOrdersRatingRatingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-processing-indicator *ngIf=\"isLoading\"></app-processing-indicator>\n\n<!--================ Start Ratings & Reviews Page ================-->\n<div class=\"rating_and_reviews_page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n        <div class=\"rating_and_reviews_left\"\n          [ngStyle]=\"{'background-color':style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n          <h2 [style.color]=\"style.baseColor\">{{'Ratings & Review' | translate}}</h2>\n          <div class=\"user_rating_reviews\" [style.background-color]=\"style.cardBackgroundColor\">\n            <img [src]=\"image\" onError=\"src = './assets/images/placeholder_image.svg';\">\n            <div class=\"user-review-part\">\n\n              <div *ngIf=\"productId && !supplierId\">\n                <h3 [style.color]=\"style.baseColor\">{{type === 'product' ? product?.name : product?.supplier_name}}\n                </h3>\n                <p *ngIf=\"type === 'product'\" [style.color]=\"style.baseColor\">{{'supplier' | localization}}:<span\n                    [style.color]=\"style.primaryColor\"> {{product?.supplier_name}} </span></p>\n              </div>\n\n              <div *ngIf=\"!productId && supplierId\">\n                <h3 [style.color]=\"style.baseColor\">{{supplier?.name}}</h3>\n                <h5 *ngIf=\"supplier?.address\" [style.color]=\"style.baseColor\"><i class=\"fa fa-map-marker mr-1\"\n                    aria-hidden=\"true\"></i>\n                  {{supplier.address}}</h5>\n              </div>\n\n              <div *ngIf=\"type == 'agent'\">\n                <h3 [style.color]=\"style.baseColor\">{{ agentName }}\n                </h3>\n                <!-- <p *ngIf=\"type === 'product'\" [style.color]=\"style.baseColor\">{{'supplier' | localization}}:<span\n                    [style.color]=\"style.primaryColor\"> {{product?.supplier_name}} </span></p> -->\n              </div>\n\n              <!-- <div class=\"row mb-2\" *ngIf=\"productId && !supplierId\">\n                <div class=\"col-md-5\">\n                  <label class=\"radio\" [style.color]=\"style.baseColor\"> Rate {{'product' | localization}} <input\n                      (change)=\"image = product?.image_path[0]\" [value]=\"'product'\" [(ngModel)]=\"type\"\n                      [style.backgroundColor]=\"type === 'product' ? style.primaryColor : ''\" class=\"uk-radio\"\n                      type=\"radio\" name=\"radio2\"></label>\n                </div>\n\n                <div class=\"col-md-7\" *ngIf=\"!settings?.is_single_vendor\">\n                  <label class=\"radio\" [style.color]=\"style.baseColor\">Rate {{'supplier' | localization}} <input\n                      [value]=\"'supplier'\" (change)=\"image = product?.supplier_image\" [(ngModel)]=\"type\"\n                      [style.backgroundColor]=\"type === 'supplier' ? style.primaryColor : ''\" class=\"uk-radio\"\n                      type=\"radio\" name=\"radio2\"></label>\n                </div>\n              </div> -->\n\n\n            </div>\n            <div class=\"user_rating_star\">\n              <span>\n                <i class=\"cursor\" (click)=\"rateProduct(1)\"\n                  [ngClass]=\"[1,2,3,4,5].includes(rating) ? 'fa fa-star' : 'fa fa-star-o'\" aria-hidden=\"true\"></i>\n                <i class=\"cursor\" (click)=\"rateProduct(2)\"\n                  [ngClass]=\"[2,3,4,5].includes(rating) ? 'fa fa-star' : 'fa fa-star-o'\" aria-hidden=\"true\"></i>\n                <i class=\"cursor\" (click)=\"rateProduct(3)\"\n                  [ngClass]=\"[3,4,5].includes(rating) ? 'fa fa-star' : 'fa fa-star-o'\" aria-hidden=\"true\"></i>\n                <i class=\"cursor\" (click)=\"rateProduct(4)\"\n                  [ngClass]=\"[4,5].includes(rating) ? 'fa fa-star' : 'fa fa-star-o'\" aria-hidden=\"true\"></i>\n                <i class=\"cursor\" (click)=\"rateProduct(5)\" [ngClass]=\"rating === 5 ? 'fa fa-star' : 'fa fa-star-o'\"\n                  aria-hidden=\"true\"></i>\n              </span>\n            </div>\n\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <form class=\"rating-form\">\n                <input class=\"title\" *ngIf=\"type === 'product'\" type=\"text\"\n                  placeholder=\"{{'Title for your review' | translate}}\" name=\"title\" [(ngModel)]=\"title\">\n                <textarea placeholder=\"{{'Write your review here' | translate}}...\" name=\"review\"\n                  [(ngModel)]=\"review\"></textarea>\n                <button class=\"btn\" [ngStyle]=\"submit\" (click)=\"onSubmit()\">{{'Submit' | translate}}</button>\n              </form>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<!--================ End Ratings & Reviews Page ================-->";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/track-order/track-order.component.html":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/track-order/track-order.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesOrdersTrackOrderTrackOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--================ Start Page Breadcrumb Page ================-->\n<div class=\"page_breadcrumb\" [style.background-color]=\"style.backgroundColor\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <ul>\n          <li><a href=\"javascript:void(0)\" [routerLink]=\"['/orders/order-detail']\" [queryParams]=\"{orderId: orderId}\"\n              [style.color]=\"style.baseColor\" translate>{{'order' | localization}} Detail</a></li>\n          <li><a class=\"active\" href=\"javascript:void(0)\" class=\"uk-text-bold\"\n              [style.color]=\"style.baseColor\" translate>{{'order' | localization}} Tracking</a></li>\n        </ul>\n      </div>\n\n    </div>\n  </div>\n</div>\n<!--================ End Page Breadcrumb Page ================-->\n\n<!--================ Start Tracking Page ================-->\n<section class=\"product_result_body pb-4\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <h3 *ngIf=\"self_pickup == 0\" [style.color]=\"style.baseColor\" translate>Track {{'agent' | localization }}</h3>\n            <h3 *ngIf=\"self_pickup == 1\" [style.color]=\"style.baseColor\" translate>{{'supplier' | localization }} {{'location' | translate}}</h3>\n          </div>\n          <div class=\"col\">\n            <h4 *ngIf=\"location.estimatedTimeInMinutes\" [style.color]=\"style.primaryColor\" class=\"text-right\">{{'Estimated Time Of Arrival' | translate}} :\n              {{location?.estimatedTimeInMinutes}}</h4>\n          </div>\n        </div>\n\n        <br>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <p *ngIf=\"location?.order_id\" [style.color]=\"style.baseColor\" translate>{{'order' | localization}} No:\n          {{location?.order_id}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        <p class=\"float-right\" [style.color]=\"location?.status | orderStatusColor\">{{location?.status | orderStatus | translate}}\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div id=\"trackLocation\"></div>\n      </div>\n    </div>\n  </div>\n</section>";
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/components/order-attachments/order-attachments.component.scss":
    /*!***************************************************************************************************!*\
      !*** ./src/app/layout/pages/orders/components/order-attachments/order-attachments.component.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesOrdersComponentsOrderAttachmentsOrderAttachmentsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h4 {\n  color: var(--baseColor);\n}\n\n.box {\n  border: 1px solid #ececec;\n  border-radius: 20px;\n  margin: 10px 0px;\n  background-color: var(--cardBackgroundColor);\n}\n\n.prescription {\n  padding: 15px;\n}\n\n.prescription ul {\n  display: inline-flex;\n}\n\n.prescription li {\n  margin-right: 15px;\n  list-style-type: none;\n}\n\n.prescription li img {\n  height: 70px;\n  width: 70px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.instructions {\n  padding: 15px;\n  overflow: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL29yZGVycy9jb21wb25lbnRzL29yZGVyLWF0dGFjaG1lbnRzL29yZGVyLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0VBQ0kseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsNENBQTRDO0FBQ2hEOztBQUVBO0VBQ0ksYUFBYTtBQUNqQjs7QUFFQTtFQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtFQUNJLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBQ25COztBQUVBO0VBQ0ksYUFBYTtFQUNiLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcGFnZXMvb3JkZXJzL2NvbXBvbmVudHMvb3JkZXItYXR0YWNobWVudHMvb3JkZXItYXR0YWNobWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gICAgY29sb3I6IHZhcigtLWJhc2VDb2xvcik7XG59XG5cbi5ib3gge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlY2VjZWM7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmRCYWNrZ3JvdW5kQ29sb3IpO1xufVxuXG4ucHJlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucHJlc2NyaXB0aW9uIHVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLnByZXNjcmlwdGlvbiBsaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnByZXNjcmlwdGlvbiBsaSBpbWcge1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5zdHJ1Y3Rpb25zIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/components/order-attachments/order-attachments.component.ts":
    /*!*************************************************************************************************!*\
      !*** ./src/app/layout/pages/orders/components/order-attachments/order-attachments.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: OrderAttachmentsComponent */

    /***/
    function srcAppLayoutPagesOrdersComponentsOrderAttachmentsOrderAttachmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderAttachmentsComponent", function () {
        return OrderAttachmentsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_models_appSettings_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../../shared/models/appSettings.model */
      "./src/app/shared/models/appSettings.model.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
      /* harmony import */


      var _layout_shared_layout_shared_components_multimedia_viewer_multimedia_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../layout/shared/layout-shared/components/multimedia-viewer/multimedia-viewer.component */
      "./src/app/layout/shared/layout-shared/components/multimedia-viewer/multimedia-viewer.component.ts");

      var OrderAttachmentsComponent = /*#__PURE__*/function () {
        function OrderAttachmentsComponent(dialogService) {
          _classCallCheck(this, OrderAttachmentsComponent);

          this.dialogService = dialogService;
          this.order = {};
          this.prescription_image_arr = [];
        }

        _createClass(OrderAttachmentsComponent, [{
          key: "orderData",
          set: function set(order) {
            if (order) {
              this.order = order;
              this.setPrescImages(this.order);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setPrescImages",
          value: function setPrescImages(order) {
            if (order.pres_image1) {
              var prescription_image_arr_obj = {
                url: '',
                type: ''
              };
              prescription_image_arr_obj.url = order.pres_image1;

              if (order.pres_image1.split('.').pop() === 'pdf') {
                prescription_image_arr_obj.type = 'pdf';
              } else {
                prescription_image_arr_obj.type = 'image';
              }

              this.prescription_image_arr.push(prescription_image_arr_obj);
            }

            if (order.pres_image2) {
              var prescription_image_arr_obj = {
                url: '',
                type: ''
              };
              prescription_image_arr_obj.url = order.pres_image2;

              if (order.pres_image1.split('.').pop() === 'pdf') {
                prescription_image_arr_obj.type = 'pdf';
              } else {
                prescription_image_arr_obj.type = 'image';
              }

              this.prescription_image_arr.push(prescription_image_arr_obj);
            }

            if (order.pres_image3) {
              var prescription_image_arr_obj = {
                url: '',
                type: ''
              };
              prescription_image_arr_obj.url = order.pres_image3;

              if (order.pres_image1.split('.').pop() === 'pdf') {
                prescription_image_arr_obj.type = 'pdf';
              } else {
                prescription_image_arr_obj.type = 'image';
              }

              this.prescription_image_arr.push(prescription_image_arr_obj);
            }

            if (order.pres_image4) {
              var prescription_image_arr_obj = {
                url: '',
                type: ''
              };
              prescription_image_arr_obj.url = order.pres_image4;

              if (order.pres_image1.split('.').pop() === 'pdf') {
                prescription_image_arr_obj.type = 'pdf';
              } else {
                prescription_image_arr_obj.type = 'image';
              }

              this.prescription_image_arr.push(prescription_image_arr_obj);
            }

            if (order.pres_image5) {
              var prescription_image_arr_obj = {
                url: '',
                type: ''
              };
              prescription_image_arr_obj.url = order.pres_image5;

              if (order.pres_image1.split('.').pop() === 'pdf') {
                prescription_image_arr_obj.type = 'pdf';
              } else {
                prescription_image_arr_obj.type = 'image';
              }

              this.prescription_image_arr.push(prescription_image_arr_obj);
            }
          }
        }, {
          key: "viewAttachment",
          value: function viewAttachment(image) {
            if (image.type == 'image') {
              var dialogRef = this.dialogService.open(_layout_shared_layout_shared_components_multimedia_viewer_multimedia_viewer_component__WEBPACK_IMPORTED_MODULE_4__["MultimediaViewerComponent"], {
                dismissableMask: true,
                showHeader: false,
                transitionOptions: '600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
                data: {
                  url: image.url,
                  type: 'image'
                }
              });
              dialogRef.onClose.subscribe(function () {});
            } else {
              window.open(image.url);
            }
          }
        }]);

        return OrderAttachmentsComponent;
      }();

      OrderAttachmentsComponent.ctorParameters = function () {
        return [{
          type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
        }];
      };

      OrderAttachmentsComponent.propDecorators = {
        orderData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['order']
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      OrderAttachmentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-order-attachments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./order-attachments.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-attachments/order-attachments.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./order-attachments.component.scss */
        "./src/app/layout/pages/orders/components/order-attachments/order-attachments.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DialogService"]])], OrderAttachmentsComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/components/order-list-item-skeleton/order-list-item-skeleton.component.scss":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/layout/pages/orders/components/order-list-item-skeleton/order-list-item-skeleton.component.scss ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesOrdersComponentsOrderListItemSkeletonOrderListItemSkeletonComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "a {\n  width: 100px;\n}\n\n.track_order_outter .foot .cancel-btn {\n  border: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL29yZGVycy9jb21wb25lbnRzL29yZGVyLWxpc3QtaXRlbS1za2VsZXRvbi9vcmRlci1saXN0LWl0ZW0tc2tlbGV0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0ksWUFBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3BhZ2VzL29yZGVycy9jb21wb25lbnRzL29yZGVyLWxpc3QtaXRlbS1za2VsZXRvbi9vcmRlci1saXN0LWl0ZW0tc2tlbGV0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi50cmFja19vcmRlcl9vdXR0ZXIgLmZvb3QgLmNhbmNlbC1idG4ge1xuICAgIGJvcmRlcjpub25lO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/components/order-list-item-skeleton/order-list-item-skeleton.component.ts":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/layout/pages/orders/components/order-list-item-skeleton/order-list-item-skeleton.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: OrderListItemSkeletonComponent */

    /***/
    function srcAppLayoutPagesOrdersComponentsOrderListItemSkeletonOrderListItemSkeletonComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderListItemSkeletonComponent", function () {
        return OrderListItemSkeletonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/theme/styleVariables.model */
      "./src/app/core/theme/styleVariables.model.ts");
      /* harmony import */


      var _shared_models_appSettings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../shared/models/appSettings.model */
      "./src/app/shared/models/appSettings.model.ts");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");

      var OrderListItemSkeletonComponent = /*#__PURE__*/function () {
        function OrderListItemSkeletonComponent(util) {
          _classCallCheck(this, OrderListItemSkeletonComponent);

          this.util = util;
        }

        _createClass(OrderListItemSkeletonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "trackByGenerateFakeFn",
          value: function trackByGenerateFakeFn(id, index) {
            return index;
          }
        }]);

        return OrderListItemSkeletonComponent;
      }();

      OrderListItemSkeletonComponent.ctorParameters = function () {
        return [{
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
        }];
      };

      OrderListItemSkeletonComponent.propDecorators = {
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      OrderListItemSkeletonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-list-item-skeleton',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./order-list-item-skeleton.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-list-item-skeleton/order-list-item-skeleton.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./order-list-item-skeleton.component.scss */
        "./src/app/layout/pages/orders/components/order-list-item-skeleton/order-list-item-skeleton.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]])], OrderListItemSkeletonComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/components/order-list-item/order-list-item.component.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/layout/pages/orders/components/order-list-item/order-list-item.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: OrderListItemComponent */

    /***/
    function srcAppLayoutPagesOrdersComponentsOrderListItemOrderListItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderListItemComponent", function () {
        return OrderListItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_models_appSettings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../shared/models/appSettings.model */
      "./src/app/shared/models/appSettings.model.ts");
      /* harmony import */


      var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../core/theme/styleVariables.model */
      "./src/app/core/theme/styleVariables.model.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _core_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../core/theme/styleConstants.model */
      "./src/app/core/theme/styleConstants.model.ts");

      var OrderListItemComponent = /*#__PURE__*/function () {
        function OrderListItemComponent(router) {
          _classCallCheck(this, OrderListItemComponent);

          this.router = router;
          this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.currency = _core_global__WEBPACK_IMPORTED_MODULE_5__["GlobalVariable"].CURRENCY;
          this.cancelButton = new _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_6__["StyleConstants"]();
        }

        _createClass(OrderListItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.cancelButton.color = this.style.primaryColor;
            this.cancelButton.borderColor = this.style.primaryColor;
            this.cancelButton.backgroundColor = '#ffffff';
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.style) {
              this.cancelButton.color = this.style.primaryColor;
              this.cancelButton.borderColor = this.style.primaryColor;
            }
          }
        }, {
          key: "makeProductCount",
          value: function makeProductCount(data) {
            var count = 0;

            for (var value in data) {
              count = count + data[value].quantity;
            }

            return count;
          }
        }, {
          key: "orderPrice",
          value: function orderPrice(order) {
            var price = parseFloat(order.net_amount);
            price = parseFloat(order.net_amount) + parseFloat(order.tip_agent) - parseFloat(order.discountAmount) - parseFloat(order.referral_amount);

            if (this.settings.supplier_service_fee == 1 && order.user_service_charge) {
              var charge_amount = order.user_service_charge / 100 * price;
              price += charge_amount;
            }

            return price ? price.toFixed(2) : price;
          }
        }, {
          key: "orderDetail",
          value: function orderDetail(data) {
            var obj = {
              orderId: [data.order_id]
            };
            this.router.navigate(['/orders/order-detail'], {
              queryParams: obj
            });
          }
        }, {
          key: "trackByProductFn",
          value: function trackByProductFn(id, index) {
            return index;
          }
        }]);

        return OrderListItemComponent;
      }();

      OrderListItemComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      OrderListItemComponent.propDecorators = {
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        order: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cancel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      OrderListItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-list-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./order-list-item.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-list-item/order-list-item.component.html"))["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], OrderListItemComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/components/order-payment/order-payment.component.scss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/layout/pages/orders/components/order-payment/order-payment.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesOrdersComponentsOrderPaymentOrderPaymentComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlcy9vcmRlcnMvY29tcG9uZW50cy9vcmRlci1wYXltZW50L29yZGVyLXBheW1lbnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/components/order-payment/order-payment.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/layout/pages/orders/components/order-payment/order-payment.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: OrderPaymentComponent */

    /***/
    function srcAppLayoutPagesOrdersComponentsOrderPaymentOrderPaymentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderPaymentComponent", function () {
        return OrderPaymentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");
      /* harmony import */


      var _core_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../core/apiUrl */
      "./src/app/core/apiUrl.ts");
      /* harmony import */


      var _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../services/http/http.service */
      "./src/app/services/http/http.service.ts");
      /* harmony import */


      var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../services/messaging/messaging.service */
      "./src/app/services/messaging/messaging.service.ts");
      /* harmony import */


      var _shared_models_appSettings_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../../shared/models/appSettings.model */
      "./src/app/shared/models/appSettings.model.ts");
      /* harmony import */


      var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../core/theme/styleVariables.model */
      "./src/app/core/theme/styleVariables.model.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var OrderPaymentComponent = /*#__PURE__*/function () {
        function OrderPaymentComponent(message, http, util, translate) {
          _classCallCheck(this, OrderPaymentComponent);

          this.message = message;
          this.http = http;
          this.util = util;
          this.translate = translate;
          this.paymentComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
          this.service_charge = 0;
          this.transaction = {};
          this.isPayOnline = false;
          this.loading = false;
          this.currency = '';
          this.paymentType = 1;
          this.geofencedGateways = [];
          this.hidePaymentModeSelection = false;
          this.currency = _core_global__WEBPACK_IMPORTED_MODULE_2__["GlobalVariable"].CURRENCY;
        }

        _createClass(OrderPaymentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.settings.is_tax_geofence == 1) {
              this.getGeofenceArea();
            }
          }
        }, {
          key: "orderPayment",
          value: function orderPayment() {
            if (this.paymentType == 1 && this.order.payment_type == 3 || this.order.payment_type == 1) {
              this.isPayOnline = true;
            } else {
              this.makePayment();
            }
          }
        }, {
          key: "onPaymentError",
          value: function onPaymentError(error) {
            this.isPayOnline = false;
            this.message.toast('error', error);
          }
        }, {
          key: "onPaymentSuccess",
          value: function onPaymentSuccess(transaction) {
            this.transaction = transaction;
            this.isPayOnline = false;
            this.makePayment();
          }
        }, {
          key: "getGeofenceArea",
          value: function getGeofenceArea() {
            var _this = this;

            var params = {
              lat: this.order.to_latitude,
              "long": this.order.to_longitude
            };
            this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].orders.geofenceAreas, params).subscribe(function (response) {
              if (!!response && response.data) {
                _this.geofencedGateways = response.data.gateways;

                if (_this.geofencedGateways.length) {
                  var cod_index = _this.geofencedGateways.findIndex(function (el) {
                    return el === 'cod';
                  });

                  if (cod_index > -1) {
                    _this.geofencedGateways.splice(cod_index, 1);

                    if (!_this.geofencedGateways.length) {
                      _this.hidePaymentModeSelection = true;
                      _this.paymentType = 0;
                    }
                  } else {
                    _this.paymentType = 1;
                    _this.hidePaymentModeSelection = true;
                  }
                }
              }
            });
          }
        }, {
          key: "makePayment",
          value: function makePayment() {
            var _this2 = this;

            this.loading = true;
            var form_data = {
              order_id: this.order.order_id.toString(),
              currency: _core_global__WEBPACK_IMPORTED_MODULE_2__["GlobalVariable"].CURRENCY_NAME,
              card_id: '',
              payment_token: this.transaction.token,
              gateway_unique_id: this.transaction.paymentGatewayId,
              languageId: this.util.handler.languageId
            };
            var api = '';

            if (this.order.remaining_amount) {
              api = _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].orders.payRmainingAmount;
            } else {
              form_data['payment_type'] = this.order.payment_after_confirmation == 1 && this.order.payment_type == 3 ? this.paymentType : this.order.payment_type;
              api = _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].orders.orderPayment;
            }

            this.http.postData(api, form_data).subscribe(function (response) {
              if (!!response) {
                _this2.message.toast('success', _this2.translate.instant('Payment Successfully'));

                _this2.paymentComplete.emit();
              }

              _this2.loading = false;
            }), function (err) {
              _this2.loading = false;
            };
          }
        }]);

        return OrderPaymentComponent;
      }();

      OrderPaymentComponent.ctorParameters = function () {
        return [{
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"]
        }, {
          type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
        }, {
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
        }];
      };

      OrderPaymentComponent.propDecorators = {
        order: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
        }],
        paymentComplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
        }]
      };
      OrderPaymentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-order-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./order-payment.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-payment/order-payment.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./order-payment.component.scss */
        "./src/app/layout/pages/orders/components/order-payment/order-payment.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])], OrderPaymentComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/components/order-status-tracker/order-status-tracker.component.ts":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/layout/pages/orders/components/order-status-tracker/order-status-tracker.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: OrderStatusTrackerComponent */

    /***/
    function srcAppLayoutPagesOrdersComponentsOrderStatusTrackerOrderStatusTrackerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderStatusTrackerComponent", function () {
        return OrderStatusTrackerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_models_appSettings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../shared/models/appSettings.model */
      "./src/app/shared/models/appSettings.model.ts");
      /* harmony import */


      var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../core/theme/styleVariables.model */
      "./src/app/core/theme/styleVariables.model.ts");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");

      var OrderStatusTrackerComponent = /*#__PURE__*/function () {
        function OrderStatusTrackerComponent(util) {
          _classCallCheck(this, OrderStatusTrackerComponent);

          this.util = util;
          this.order = {};
        }

        _createClass(OrderStatusTrackerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrderStatusTrackerComponent;
      }();

      OrderStatusTrackerComponent.ctorParameters = function () {
        return [{
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
        }];
      };

      OrderStatusTrackerComponent.propDecorators = {
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        order: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      OrderStatusTrackerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-status-tracker',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./order-status-tracker.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-status-tracker/order-status-tracker.component.html"))["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]])], OrderStatusTrackerComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/components/order-supplier-products/order-supplier-products.component.scss":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/layout/pages/orders/components/order-supplier-products/order-supplier-products.component.scss ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesOrdersComponentsOrderSupplierProductsOrderSupplierProductsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".action-btn {\n  border-top: 1px solid var(--secondaryColor);\n}\n\n.action-btn button {\n  margin-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL29yZGVycy9jb21wb25lbnRzL29yZGVyLXN1cHBsaWVyLXByb2R1Y3RzL29yZGVyLXN1cHBsaWVyLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csMkNBQTJDO0FBQzlDOztBQUZBO0VBSUksZ0JBQWdCO0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3BhZ2VzL29yZGVycy9jb21wb25lbnRzL29yZGVyLXN1cHBsaWVyLXByb2R1Y3RzL29yZGVyLXN1cHBsaWVyLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbi1idG4ge1xuICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeUNvbG9yKTtcblxuICAgYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/components/order-supplier-products/order-supplier-products.component.ts":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/layout/pages/orders/components/order-supplier-products/order-supplier-products.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: OrderSupplierProductsComponent */

    /***/
    function srcAppLayoutPagesOrdersComponentsOrderSupplierProductsOrderSupplierProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderSupplierProductsComponent", function () {
        return OrderSupplierProductsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../../shared/pipes/localization.pipe */
      "./src/app/shared/pipes/localization.pipe.ts");
      /* harmony import */


      var _core_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var _shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../shared/product/components/add-on/add-on.component */
      "./src/app/layout/shared/product/components/add-on/add-on.component.ts");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
      /* harmony import */


      var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../services/cart/cart.service */
      "./src/app/services/cart/cart.service.ts");
      /* harmony import */


      var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../../services/messaging/messaging.service */
      "./src/app/services/messaging/messaging.service.ts");
      /* harmony import */


      var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../core/theme/styleVariables.model */
      "./src/app/core/theme/styleVariables.model.ts");
      /* harmony import */


      var _shared_models_appSettings_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../../shared/models/appSettings.model */
      "./src/app/shared/models/appSettings.model.ts");
      /* harmony import */


      var _services_http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../../../services/http/http.service */
      "./src/app/services/http/http.service.ts");
      /* harmony import */


      var _core_apiUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../../../../core/apiUrl */
      "./src/app/core/apiUrl.ts");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var underscore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! underscore */
      "./node_modules/underscore/modules/index-all.js");

      var OrderSupplierProductsComponent = /*#__PURE__*/function () {
        function OrderSupplierProductsComponent(util, http, message, cartService, dialogService, localization) {
          _classCallCheck(this, OrderSupplierProductsComponent);

          this.util = util;
          this.http = http;
          this.message = message;
          this.cartService = cartService;
          this.dialogService = dialogService;
          this.localization = localization;
          this.isLoading = false;
          this.loggedIn = false;
          this.products = [];
          this.state = {
            'editOrder': true
          };
          this.currency = '';
          this.supplierId = '';
          this.selectedProducts = [];
          this.onBack = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
          this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
          this.currency = _core_global__WEBPACK_IMPORTED_MODULE_2__["GlobalVariable"].CURRENCY;
        }

        _createClass(OrderSupplierProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.util.setCart([]);

            if (this.supplierId) {
              this.getDetails();
            }
          }
        }, {
          key: "updateProduct",
          value: function updateProduct(product) {
            product['avg_rating'] = Number.parseFloat(product['avg_rating']).toFixed(1);

            if (product.display_price != product.fixed_price) {
              product["discount"] = Math.round((product.display_price - product.fixed_price) / product.display_price * 100);
            }

            product["selectedQuantity"] = 0;

            if (product['price_type']) {
              product['maxHour'] = product['hourly_price'][product['hourly_price'].length - 1]['max_hour'] - this.settings['interval'];

              if (product['discount'] && product['hourly_price'][0]['discount_price']) {
                product['fixed_price'] = product['hourly_price'][0]['discount_price'];
                product['display_price'] = product['hourly_price'][0]['price_per_hour'];
                product['discount_price'] = Math.round((product['hourly_price'][0]['price_per_hour'] - product['hourly_price'][0]['discount_price']) / product['hourly_price'][0]['price_per_hour'] * 100);
              } else {
                product['fixed_price'] = product['hourly_price'][0]['price_per_hour'];
              }
            }

            if (this.selectedProducts.length) {
              this.selectedProducts.forEach(function (cartProduct) {
                if (cartProduct.productId == product.product_id || cartProduct.product_id == product.product_id) {
                  product['selectedQuantity'] = cartProduct['selectedQuantity'] || cartProduct['quantity'];

                  if (product['price_type']) {
                    product['fixed_price'] = cartProduct['fixed_price'];
                  }

                  if (!!cartProduct['customization']) {
                    product['customization'] = cartProduct['customization'];
                  }
                }
              });
            }

            this.util.productPriceToFloat(product);
            product["discount"] = Math.round((product.display_price - product.fixed_price) / product.display_price * 100);
          }
        }, {
          key: "getDetails",
          value: function getDetails() {
            var _this3 = this;

            this.isLoading = true;
            var param_data = {
              languageId: this.util.handler.languageId,
              supplier_id: this.supplierId,
              latitude: this.util.handler.latitude,
              longitude: this.util.handler.longitude
            };
            this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_10__["ApiUrl"].getSupplierDetailProduct, param_data).subscribe(function (response) {
              if (!!response && response.data) {
                _this3.products = response.data.product;
                _this3.supplierDetail = response.data.supplier_detail; // if (!this.showBranches) {

                _this3.products.forEach(function (data) {
                  if (data.detailed_category_name && data.detailed_category_name.length) {
                    data.detailed_category_name = underscore__WEBPACK_IMPORTED_MODULE_13__["uniq"](data.detailed_category_name.slice(), 'detailed_sub_category_id');
                    data.detailed_category_name.forEach(function (cat) {
                      cat['value'] = [];
                      data.value.map(function (product) {
                        if (product.detailed_sub_category_id == cat.detailed_sub_category_id) {
                          _this3.updateProduct(product);

                          cat['value'].push(product);
                        }
                      });
                    });
                  } else {
                    data.value.map(function (product) {
                      _this3.updateProduct(product);
                    });
                  }
                });

                _this3.products = _this3.products.slice(); // }

                _this3.isLoading = false;
              }
            }, function (err) {
              _this3.isLoading = false;
            });
          }
        }, {
          key: "openAddOnDialog",
          value: function openAddOnDialog(product) {
            var dialogRef = this.dialogService.open(_shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_3__["AddOnComponent"], {
              header: product['name'],
              width: '45%',
              style: {
                'background-color': "".concat(this.style.primaryColor, " !important")
              },
              showHeader: false,
              // contentStyle: { "max-height": "350px", "overflow": "auto" },
              transitionOptions: '600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
              data: {
                product: product,
                addOnItems: product['adds_on']
              }
            });
            dialogRef.onClose.subscribe(function () {});
          }
        }, {
          key: "addProduct",
          value: function addProduct(product) {
            // if (product['is_product_adds_on'] !== 1) {
            this.cartService.addToCart(product, this.products); // return;
            // }
            // this.openAddOnDialog(product);
          }
        }, {
          key: "removeProduct",
          value: function removeProduct(product) {
            // if (product['customization'] && product['customization'].length) {
            //   this.openAddOnDialog(product);
            // } else {
            this.cartService.removeFromCart(product); // }
          }
        }, {
          key: "onBookNow",
          value: function onBookNow(product) {
            var _this4 = this;

            this.message.confirm("add this ".concat(this.localization.transform('product')), "Existing ".concat(this.localization.transform('product'), " will be removed")).then(function (result) {
              if (result.value) {
                _this4.cartService.addToCart(product, null, false);

                _this4.util.diableCart.next(false);

                return _this4.onAdd.emit(_this4.util.getLocalData('cart', true));
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var allProducts = [];
            var products = this.util.getLocalData('cart', true);
            this.selectedProducts.forEach(function (product) {
              if (!products.find(function (p) {
                return p.productId == product.product_id;
              })) {
                allProducts.push(product);
              }
            });
            allProducts.push.apply(allProducts, _toConsumableArray(products));
            this.onAdd.emit(allProducts);
            this.util.diableCart.next(false);
          }
        }, {
          key: "back",
          value: function back() {
            this.util.diableCart.next(false);
            this.onBack.emit(false);
          }
        }, {
          key: "trackByProductFn",
          value: function trackByProductFn(id, index) {
            return index;
          }
        }, {
          key: "trackByDetailedCategoryFn",
          value: function trackByDetailedCategoryFn(id, index) {
            return index;
          }
        }, {
          key: "trackByDetail_catFn",
          value: function trackByDetail_catFn(id, index) {
            return index;
          }
        }, {
          key: "trackByProductsFn",
          value: function trackByProductsFn(id, index) {
            return index;
          }
        }, {
          key: "trackByProductDataFn",
          value: function trackByProductDataFn(id, index) {
            return index;
          }
        }, {
          key: "trackByCategoryFn",
          value: function trackByCategoryFn(id, index) {
            return index;
          }
        }, {
          key: "trackByDetailCatFn",
          value: function trackByDetailCatFn(id, index) {
            return index;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.util.setCart([]);
          }
        }]);

        return OrderSupplierProductsComponent;
      }();

      OrderSupplierProductsComponent.ctorParameters = function () {
        return [{
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"]
        }, {
          type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]
        }, {
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_6__["MessagingService"]
        }, {
          type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
        }, {
          type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DialogService"]
        }, {
          type: _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_1__["LocalizationPipe"]
        }];
      };

      OrderSupplierProductsComponent.propDecorators = {
        orderType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
        }],
        supplierId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
        }],
        selectedProducts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
        }],
        onBack: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
        }],
        onAdd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
        }]
      };
      OrderSupplierProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"])({
        selector: 'app-order-supplier-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./order-supplier-products.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/order-supplier-products/order-supplier-products.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./order-supplier-products.component.scss */
        "./src/app/layout/pages/orders/components/order-supplier-products/order-supplier-products.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"], _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_6__["MessagingService"], _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DialogService"], _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_1__["LocalizationPipe"]])], OrderSupplierProductsComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/components/re-order/re-order.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/layout/pages/orders/components/re-order/re-order.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ReOrderComponent */

    /***/
    function srcAppLayoutPagesOrdersComponentsReOrderReOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReOrderComponent", function () {
        return ReOrderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash */
      "./node_modules/lodash/lodash.js");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");
      /* harmony import */


      var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../core/theme/styleVariables.model */
      "./src/app/core/theme/styleVariables.model.ts");
      /* harmony import */


      var _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../core/theme/styleConstants.model */
      "./src/app/core/theme/styleConstants.model.ts");
      /* harmony import */


      var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../services/cart/cart.service */
      "./src/app/services/cart/cart.service.ts");
      /* harmony import */


      var _shared_models_appSettings_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../../shared/models/appSettings.model */
      "./src/app/shared/models/appSettings.model.ts");

      var ReOrderComponent = /*#__PURE__*/function () {
        function ReOrderComponent(router, util, cartService) {
          _classCallCheck(this, ReOrderComponent);

          this.router = router;
          this.util = util;
          this.cartService = cartService;
          this.reOrderButton = new _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_6__["StyleConstants"]();
        }

        _createClass(ReOrderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buttonStyleChange();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.buttonStyleChange();
          }
        }, {
          key: "buttonStyleChange",
          value: function buttonStyleChange() {
            this.reOrderButton.color = '#FFFFFF';
            this.reOrderButton.borderColor = this.style.primaryColor;
            this.reOrderButton.backgroundColor = this.style.primaryColor;
          }
        }, {
          key: "onReOrder",
          value: function onReOrder() {
            var cart = this.mapForCart(this.order);
            this.cartService.setOrderPickType(parseInt(this.order['self_pickup']));
            this.util.setCart(cart);
            this.router.navigate(['/cart']);
          }
        }, {
          key: "mapForCart",
          value: function mapForCart(order) {
            var _this5 = this;

            var products = [];
            order.product.forEach(function (item) {
              if (item.adds_on && item.adds_on.length) {
                var groupObj = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.groupBy(item.adds_on, 'serial_number');

                if (Object.keys(groupObj).length) {
                  var customization = [];
                  var index = 0;

                  for (var key in groupObj) {
                    var addOns = groupObj[key];
                    customization.push({
                      id: ++index,
                      quantity: addOns[0].quantity,
                      data: _this5.makeCustomizationModel(addOns)
                    });
                  }

                  item.customization = customization;
                }

                item['selectedQuantity'] = item.customization.reduce(function (a, b) {
                  return a + (b['quantity'] || 0);
                }, 0);
              } else {
                item['selectedQuantity'] = item['quantity'];
              }

              item['productId'] = item.product_id || item.productId;
              delete item.product_id;
              products.push(item);
            });
            return products;
          }
        }, {
          key: "makeCustomizationModel",
          value: function makeCustomizationModel(addons) {
            var list = [];
            var groupObj = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.groupBy(addons, 'adds_on_name');

            var _loop = function _loop(key) {
              var obj = {
                name: key,
                value: [],
                selectedCount: 1
              };
              obj.value = groupObj[key].map(function (item) {
                return {
                  type_name: item['adds_on_type_name'],
                  type_id: item['adds_on_type_jd'],
                  name: key,
                  id: item['adds_on_id'],
                  price: item['price'],
                  quantity: item['quantity'],
                  adds_on_type_quantity: item['adds_on_type_quantity']
                };
              });
              list.push(obj);
            };

            for (var key in groupObj) {
              _loop(key);
            }

            return list;
          }
        }]);

        return ReOrderComponent;
      }();

      ReOrderComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
        }, {
          type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]
        }];
      };

      ReOrderComponent.propDecorators = {
        order: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ReOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-re-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./re-order.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/components/re-order/re-order.component.html"))["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"], _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]])], ReOrderComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/order-detail/order-detail.component.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/layout/pages/orders/order-detail/order-detail.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesOrdersOrderDetailOrderDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".charges h6 {\n  font-size: 14px;\n}\n\n.charges span {\n  margin-top: 0px !important;\n}\n\n.billing-info h5 {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: 400;\n}\n\n.billing-info .cancel-order {\n  background-color: #000 !important;\n  color: #fff !important;\n}\n\n.billing-info .bill-list {\n  list-style: none;\n  padding-left: 0px !important;\n  line-height: 28px;\n  font-size: 14px;\n}\n\n.billing-info .bill-list span {\n  float: right;\n}\n\n.billing-info .bill-list li {\n  width: 100%;\n  display: inline-block;\n}\n\n.word-break {\n  word-break: break-all;\n}\n\n.word-break .word {\n  text-align: right;\n}\n\n.addOnTable {\n  margin: 15px;\n}\n\n.order-instruction {\n  margin-top: 20px;\n  border: 1px solid var(--secondaryColor);\n  border-radius: 4px;\n  padding: 10px;\n}\n\n.order-instruction h5 {\n  border-bottom: 1px dashed var(--secondaryColor);\n  color: var(--primaryColor);\n  padding-bottom: 10px;\n}\n\n.order-instruction p {\n  color: var(--baseColor);\n  opacity: 0.8;\n}\n\n.return-request {\n  font-weight: 600;\n}\n\n.download-file {\n  font-size: 12px;\n  cursor: pointer;\n  text-transform: lowercase;\n  color: var(--primaryColor);\n  font-weight: bold;\n}\n\n.download-file:hover {\n  text-decoration: underline;\n  color: var(--primaryColor);\n}\n\n.btn-success {\n  color: #fff;\n  background-color: var(--primaryColor);\n  border-color: var(--primaryColor);\n}\n\n.btn-success:hover {\n  color: #fff;\n  background-color: var(--primaryColor);\n  border-color: var(--primaryColor);\n}\n\n.form-check-label {\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 16px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 100%;\n  float: left;\n}\n\n/* Hide the browser's default checkbox */\n\n.form-check-label input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n\n.check-span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #fff;\n  border-radius: 50%;\n  border: 2px solid var(--primaryColor);\n}\n\n/* When the checkbox is checked, add a blue background */\n\n.form-check-label input:checked ~ .check-span {\n  background-color: #fff;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.check-span:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n\n.form-check-label input:checked ~ .check-span:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n\n.form-check-label .check-span:after {\n  left: 2px;\n  top: 2px;\n  width: 17px;\n  height: 17px;\n  background: var(--primaryColor);\n  border-radius: 50%;\n}\n\n.form-check-inline {\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n  float: left;\n  width: 25%;\n}\n\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: var(--primaryColor);\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\nhtml[lang=\"ar\"] .track_order_outter_detail .billing-info .bill-list span {\n  float: left !important;\n}\n\n.image_view {\n  cursor: pointer;\n}\n\n.image_view:hover {\n  text-decoration: underline;\n}\n\n.instruction {\n  font-size: 11px;\n  font-weight: 500;\n  position: absolute;\n  right: 12em;\n}\n\n.instruction:hover {\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL29yZGVycy9vcmRlci1kZXRhaWwvb3JkZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUVJLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQXBCOztBQUpBO0VBT0ksaUNBQWlDO0VBQ2pDLHNCQUFzQjtBQUMxQjs7QUFUQTtFQVdJLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFFbkI7O0FBaEJBO0VBZ0JNLFlBQVk7QUFJbEI7O0FBcEJBO0VBcUJJLFdBQVc7RUFDWCxxQkFBcUI7QUFHekI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFFdkI7O0FBSEE7RUFJSSxpQkFBaUI7QUFHckI7O0FBQ0E7RUFDRSxZQUFZO0FBRWQ7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixhQUFhO0FBRWY7O0FBTkE7RUFPSSwrQ0FBK0M7RUFDL0MsMEJBQTBCO0VBQzFCLG9CQUFvQjtBQUd4Qjs7QUFaQTtFQWFJLHVCQUF1QjtFQUN2QixZQUFZO0FBR2hCOztBQUNBO0VBSUUsZ0JBQWdCO0FBRGxCOztBQU9BO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUpuQjs7QUFPQTtFQUNFLDBCQUEwQjtFQUMxQiwwQkFBMEI7QUFKNUI7O0FBT0E7RUFDRSxXQUFXO0VBQ1gscUNBQXFDO0VBQ3JDLGlDQUFpQztBQUpuQzs7QUFPQTtFQUNFLFdBQVc7RUFDWCxxQ0FBcUM7RUFDckMsaUNBQWlDO0FBSm5DOztBQU9BO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7QUFKYjs7QUFPQSx3Q0FBQTs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0FBSlY7O0FBT0EsNkJBQUE7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUNBQXFDO0FBSnZDOztBQU9BLHdEQUFBOztBQUNBO0VBQ0Usc0JBQXNCO0FBSnhCOztBQU9BLDZEQUFBOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0FBSmY7O0FBT0Esb0NBQUE7O0FBQ0E7RUFDRSxjQUFjO0FBSmhCOztBQU9BLGtDQUFBOztBQUNBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUVaLCtCQUErQjtFQUMvQixrQkFBa0I7QUFMcEI7O0FBUUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsVUFBVTtBQUxaOztBQVFBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMsVUFBVTtFQUNWLGdEQUFnRDtBQUxsRDs7QUFPQTtFQUNFLHNCQUFzQjtBQUp4Qjs7QUFPQTtFQUNFLGVBQWU7QUFKakI7O0FBTUE7RUFDRSwwQkFBMEI7QUFINUI7O0FBS0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0FBRmI7O0FBSUE7RUFDRSwwQkFBMEI7QUFENUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcGFnZXMvb3JkZXJzL29yZGVyLWRldGFpbC9vcmRlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcmdlcyBoNiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNoYXJnZXMgc3BhbiB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYmlsbGluZy1pbmZvIHtcbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgLmNhbmNlbC1vcmRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4gIC5iaWxsLWxpc3Qge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgc3BhbiB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLmJpbGwtbGlzdCBsaSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59XG5cbi53b3JkLWJyZWFrIHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuXG4gIC53b3JkIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuXG4uYWRkT25UYWJsZSB7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLm9yZGVyLWluc3RydWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgaDUge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6IHZhcigtLWJhc2VDb2xvcik7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG59XG5cbi5yZXR1cm4tcmVxdWVzdCB7XG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gYm90dG9tOiAyMHB4O1xuICAvLyByaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnJldHVybi1zdGF0dXMge1xufVxuXG4uZG93bmxvYWQtZmlsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kb3dubG9hZC1maWxlOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xufVxuXG4uYnRuLXN1Y2Nlc3M6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xufVxuXG4uZm9ybS1jaGVjay1sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xuLmZvcm0tY2hlY2stbGFiZWwgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cblxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXG4uY2hlY2stc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnlDb2xvcik7XG59XG5cbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuLmZvcm0tY2hlY2stbGFiZWwgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVjay1zcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cbi5jaGVjay1zcGFuOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXG4uZm9ybS1jaGVjay1sYWJlbCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrLXNwYW46YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cbi5mb3JtLWNoZWNrLWxhYmVsIC5jaGVjay1zcGFuOmFmdGVyIHtcbiAgbGVmdDogMnB4O1xuICB0b3A6IDJweDtcbiAgd2lkdGg6IDE3cHg7XG4gIGhlaWdodDogMTdweDtcblxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5mb3JtLWNoZWNrLWlubGluZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbn1cbmh0bWxbbGFuZz1cImFyXCJdIC50cmFja19vcmRlcl9vdXR0ZXJfZGV0YWlsIC5iaWxsaW5nLWluZm8gLmJpbGwtbGlzdCBzcGFuIHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLmltYWdlX3ZpZXcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW1hZ2Vfdmlldzpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmluc3RydWN0aW9uIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMmVtO1xufVxuLmluc3RydWN0aW9uOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/order-detail/order-detail.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/layout/pages/orders/order-detail/order-detail.component.ts ***!
      \****************************************************************************/

    /*! exports provided: OrderDetailComponent */

    /***/
    function srcAppLayoutPagesOrdersOrderDetailOrderDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailComponent", function () {
        return OrderDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../services/cart/cart.service */
      "./src/app/services/cart/cart.service.ts");
      /* harmony import */


      var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../services/seo/seo.service */
      "./src/app/services/seo/seo.service.ts");
      /* harmony import */


      var _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../core/apiUrl */
      "./src/app/core/apiUrl.ts");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../services/http/http.service */
      "./src/app/services/http/http.service.ts");
      /* harmony import */


      var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../core/theme/styleVariables.model */
      "./src/app/core/theme/styleVariables.model.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! lodash */
      "./node_modules/lodash/lodash.js");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _core_global__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../../../../services/fcm/fcm.service */
      "./src/app/services/fcm/fcm.service.ts");
      /* harmony import */


      var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../services/messaging/messaging.service */
      "./src/app/services/messaging/messaging.service.ts");
      /* harmony import */


      var _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../shared/pipes/localization.pipe */
      "./src/app/shared/pipes/localization.pipe.ts");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! sweetalert2 */
      "./node_modules/sweetalert2/dist/sweetalert2.all.js");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_17__);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _services_firebase_analytics_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../../services/firebase-analytics/firebase-analytics.service */
      "./src/app/services/firebase-analytics/firebase-analytics.service.ts");
      /* harmony import */


      var _services_location_location_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../../services/location/location.service */
      "./src/app/services/location/location.service.ts");
      /* harmony import */


      var src_app_shared_models_apiKeys_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/shared/models/apiKeys.model */
      "./src/app/shared/models/apiKeys.model.ts");

      var OrderDetailComponent = /*#__PURE__*/function () {
        function OrderDetailComponent(route, http, user, util, cartService, firebaseService, router, localization, message, seo, translate, firebaseAnalyticsSvc, location) {
          _classCallCheck(this, OrderDetailComponent);

          this.route = route;
          this.http = http;
          this.user = user;
          this.util = util;
          this.cartService = cartService;
          this.firebaseService = firebaseService;
          this.router = router;
          this.localization = localization;
          this.message = message;
          this.seo = seo;
          this.translate = translate;
          this.firebaseAnalyticsSvc = firebaseAnalyticsSvc;
          this.location = location;
          this.orderIds = [];
          this.orderHistory = [];
          this.selectedOrder = 0;
          this.currency = '';
          this.showLine = {
            isPlaced: false,
            isShipped: false,
            isNear: false,
            isDelivered: false
          };
          this.status = [];
          this.isLoading = true;
          this.isPayOnline = false;
          this.refundToWallet = 0;
          this.isReturnProduct = false;
          this.returnProductReason = '';
          this.isEditOrder = false;
          this.isAddItems = false;
          this.dhlData = '';
          this.userOrderStatus = 0;
          this.total_delivery_charges = 0;
          this.selected_currency = new src_app_shared_models_apiKeys_model__WEBPACK_IMPORTED_MODULE_21__["Currency"]();
          this.is_special_instruction = false;
          this.special_instructions = '';
          this.freeProductQuantity = 0;
          this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_7__["StyleVariables"]();
          this.currency = _core_global__WEBPACK_IMPORTED_MODULE_12__["GlobalVariable"].CURRENCY;
        }

        _createClass(OrderDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.seo.updateTitle("".concat(this.localization.transform('order'), " Details | ").concat(_core_global__WEBPACK_IMPORTED_MODULE_12__["GlobalVariable"].SITE_NAME));
            this.styleSubscription = this.util.getStyles.subscribe(function (style) {
              _this6.style = style;
            });
            this.settingsSubscription = this.util.getSettings.subscribe(function (settings) {
              if (settings) {
                _this6.settings = settings;
              }
            });
            this.subscribeRoute();
            this.makeSubscribe();
            this.getCurrentUser();

            if (this.settings.is_multicurrency_enable) {
              this.getCurrency();
            }
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            var _this7 = this;

            this.userSubscription = this.user.currentUser.subscribe(function (user) {
              _this7.currentUser = user;
            });
          }
        }, {
          key: "makeSubscribe",
          value: function makeSubscribe() {
            var _this8 = this;

            this.getDataSubscribe = this.util.callGetData.subscribe(function (data) {
              if (data) {
                _this8.getDetail();
              }
            });
            this.firebaseService.currentMessage.subscribe(function (message) {
              if (message && _this8.orderHistory && _this8.orderHistory.length) {
                if (message.data.orderId == _this8.orderHistory[_this8.selectedOrder].order_id) {
                  _this8.getDetail();
                }
              }
            });
          }
          /********* Route Subscription **********/

        }, {
          key: "subscribeRoute",
          value: function subscribeRoute() {
            var _this9 = this;

            this.subscription = this.route.queryParams.subscribe(function (params) {
              _this9.orderIds = params.orderId;
            });
          }
        }, {
          key: "getDetail",
          value: function getDetail() {
            var _this10 = this;

            this.isLoading = true;
            var obj = {
              languageId: parseInt(this.util.handler.languageId),
              accessToken: this.user.getUserToken,
              orderId: this.orderIds,
              latitude: this.util.handler.latitude,
              longitude: this.util.handler.longitude
            };
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].orders.getOrderDetail, obj).subscribe(function (response) {
              if (!!response && response.data) {
                _this10.orderHistory = response.data.orderHistory;

                _this10.orderHistory.forEach(function (element) {
                  _this10.total_delivery_charges += element.delivery_charges;
                }); // this.userOrderStatus = this.orderHistory[this.selectedOrder].staus


                if (_this10.orderHistory) {
                  _this10.orderHistory.map(function (order) {
                    // if (order.agent.length) {
                    order['start_time'] = order.delivered_on;
                    order['end_time'] = moment__WEBPACK_IMPORTED_MODULE_10__(order.delivered_on).add(order.duration, 'minutes'); // }
                  });

                  _this10.orderHistory.forEach(function (order) {
                    order.products = _this10.mapOrderProducts(order);
                    order.products[0].is_appointment = 1;
                    if (order.questions) order.questions = JSON.parse(order.questions); // order['subTotal'] = order.products.reduce((a, { totalPrice }) => a + totalPrice, 0);
                    // order['net_amount'] = parseFloat(order['net_amount']) - (parseFloat(order['discountAmount']) || parseFloat(order['gift_amount']));
                    // order['subTotal'] = parseFloat(order['subTotal']).toFixed(2);

                    if (order['discountAmount'] || order['gift_amount'] || order['wallet_discount_amount']) {
                      order['discountAmount'] = (parseFloat(order['discountAmount']) || parseFloat(order['gift_amount']) || parseFloat(order['wallet_discount_amount'])).toFixed(2);
                    } // if (order.tip_agent) order['net_amount'] += order.tip_agent;
                    // if (order.referral_amount) order['net_amount'] -= order['referral_amount'];
                    // if (this.settings.supplier_service_fee == 1 && order.user_service_charge) {
                    // order['service_charge'] = order.user_service_charge;
                    // order['net_amount'] += order['service_charge'];
                    // }

                  });
                }

                _this10.isLoading = false;
              }
            }, function (err) {
              return _this10.isLoading = false;
            });
          }
          /**
           distinguish product on basis of customization
           */

        }, {
          key: "mapOrderProducts",
          value: function mapOrderProducts(order) {
            var _this11 = this;

            var products = [];
            this.freeProductQuantity = 0;
            order.product.forEach(function (item) {
              if (item.adds_on && item.adds_on.length) {
                var groupObj = lodash__WEBPACK_IMPORTED_MODULE_11___default.a.groupBy(item.adds_on, 'serial_number');

                if (Object.keys(groupObj).length > 1) {
                  for (var key in groupObj) {
                    var addOns = groupObj[key];
                    var customization = {
                      quantity: addOns[0].quantity,
                      data: _this11.makeCustomizationModel(addOns)
                    };
                    var addOnPrice = 0;
                    addOns.forEach(function (item) {
                      addOnPrice += Number(item.price) * item.quantity;
                    });
                    var productObj = Object.assign({}, item);
                    productObj.customization = customization;
                    productObj.quantity = addOns[0].quantity;
                    productObj.freeQuantity = addOns[0].freeQuantity;
                    productObj.totalPrice = parseFloat(productObj.fixed_price) * addOns[0].quantity + addOnPrice;
                    products.push(productObj);
                  }
                } else {
                  item.customization = {
                    quantity: item.adds_on[0].quantity,
                    data: _this11.makeCustomizationModel(item.adds_on)
                  };
                  var _addOnPrice = 0;
                  item.adds_on.forEach(function (item) {
                    _addOnPrice += Number(item.price) * item.quantity;
                  });
                  item.totalPrice = parseFloat(item.fixed_price) * item.quantity + _addOnPrice;
                  products.push(item);
                }
              } else {
                item.totalPrice = parseFloat(item.fixed_price) * item.quantity;
                products.push(item);
              } // for buy x get x


              if (item.freeQuantity) {
                // this.freeProductQuantity += (item.freeQuantity * item.fixed_price);
                _this11.freeProductQuantity += item.freeQuantity;
              }
            });
            return products;
          }
        }, {
          key: "makeCustomizationModel",
          value: function makeCustomizationModel(addons) {
            var list = [];
            var groupObj = lodash__WEBPACK_IMPORTED_MODULE_11___default.a.groupBy(addons, 'adds_on_name');

            var _loop2 = function _loop2(key) {
              var obj = {
                name: key,
                value: []
              };
              obj.value = groupObj[key].map(function (item) {
                return {
                  type_name: item['adds_on_type_name'],
                  name: key,
                  type_id: item['adds_on_type_jd'],
                  // is_multiple: 0,
                  // min_adds_on: 0,
                  // max_adds_on: 0,
                  id: item['id'],
                  price: item['price'],
                  // is_default: 0,
                  adds_on_type_quantity: item['adds_on_type_quantity']
                };
              });
              list.push(obj);
            };

            for (var key in groupObj) {
              _loop2(key);
            }

            return list;
          }
        }, {
          key: "addOnNames",
          value: function addOnNames(values) {
            if (values.adds_on_type_quantity == 0) {
              return values.map(function (addon) {
                return "".concat(addon.type_name);
              }).toString();
            } else {
              return values.map(function (addon) {
                return "".concat(addon.type_name, "x").concat(addon.adds_on_type_quantity);
              }).toString();
            }
          }
        }, {
          key: "toRateProduct",
          value: function toRateProduct(product) {
            var obj = {
              productId: product['product_id'],
              supplierBranchId: product['supplier_branch_id'],
              orderId: this.orderIds,
              type: 'product'
            };
            this.router.navigate(['orders/rating'], {
              queryParams: obj
            });
          }
        }, {
          key: "toRateSupplier",
          value: function toRateSupplier(order) {
            this.router.navigate(['orders/rating'], {
              queryParams: {
                type: 'supplier',
                supplierId: order['supplier_id'],
                supplierBranchId: order['supplier_branch_id'],
                categoryId: order.product[0]['category_id'],
                orderId: order.order_id
              }
            });
          }
        }, {
          key: "toRateAgent",
          value: function toRateAgent(order) {
            this.router.navigate(['orders/rating'], {
              queryParams: {
                type: 'agent',
                agentId: order['agent'][0].id,
                agentName: order['agent'][0].name,
                agentImage: order['agent'][0].image,
                supplierBranchId: order['supplier_branch_id'],
                categoryId: order.product[0]['category_id'],
                orderId: order.order_id
              }
            });
          }
        }, {
          key: "trackOrder",
          value: function trackOrder(order) {
            if (this.settings.app_type == 2) {
              this.message.alert('info', this.translate.instant('Coming Soon'));
              return;
            }

            this.router.navigate(['/orders/track-order'], {
              queryParams: {
                orderId: order['order_id'],
                lng: order['longitude'],
                lat: order['latitude'],
                a_lat: order.agent.length ? order.agent[0].latitude : 0,
                a_lng: order.agent.length ? order.agent[0].longitude : 0,
                selfPickup: order['self_pickup']
              }
            });
          }
        }, {
          key: "onCancel",
          value: function onCancel(order) {
            var _this12 = this;

            if (order.payment_type == 1 && this.settings.wallet_module == 1) {
              return this.showWalletRefund();
            }

            this.message.confirm("".concat(this.translate.instant('Cancel This'), " ").concat(this.localization.transform('order'))).then(function (data) {
              if (data.value) {
                _this12.cancelOrder(order);
              }
            });
          }
        }, {
          key: "cancelOrder",
          value: function cancelOrder(order) {
            var _this13 = this;

            this.isLoading = true;
            var param_data = {
              languageId: this.util.handler.languageId,
              accessToken: this.user.getUserToken,
              orderId: order['order_id'],
              isScheduled: order['schedule_order']
            };

            if (order.payment_type != 1) {
              param_data['cancel_to_wallet'] = 1;
            } else {
              param_data['cancel_to_wallet'] = this.refundToWallet;
            }

            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].orders.cancelOrder, param_data).subscribe(function (response) {
              _this13.isLoading = false;

              if (!!response && response.data) {
                _this13.message.toast('success', "".concat(_this13.localization.transform('order'), " ").concat(_this13.translate.instant('Cancelled Successfully')));

                _this13.getDetail();
              }
            });
          }
        }, {
          key: "showWalletRefund",
          value: function showWalletRefund() {
            $('#walletRefund').modal('toggle');
          }
        }, {
          key: "returnRequest",
          value: function returnRequest(product) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _yield$sweetalert2__W, text, request_text;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.productToReturn = product;

                      if (!(this.orderHistory[this.selectedOrder].payment_type == 1)) {
                        _context.next = 5;
                        break;
                      }

                      this.isReturnProduct = true;
                      this.showWalletRefund();
                      return _context.abrupt("return");

                    case 5:
                      _context.next = 7;
                      return sweetalert2__WEBPACK_IMPORTED_MODULE_17___default.a.fire({
                        input: 'textarea',
                        inputPlaceholder: 'Type your reason here...',
                        inputAttributes: {
                          'aria-label': 'Type your reason here'
                        },
                        confirmButtonColor: this.style.primaryColor,
                        cancelButtonColor: this.style.secondaryColor,
                        showCancelButton: true
                      });

                    case 7:
                      _yield$sweetalert2__W = _context.sent;
                      text = _yield$sweetalert2__W.value;
                      request_text = text;

                      if (request_text) {
                        this.returnProductRequest(request_text);
                      }

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "returnProductRequest",
          value: function returnProductRequest(text) {
            var _this14 = this;

            this.isReturnProduct = false;
            var param_data = {
              order_price_id: this.productToReturn['order_price_id'],
              product_id: this.productToReturn['product_id'],
              reason: text || this.returnProductReason
            };

            if (this.orderHistory[this.selectedOrder].payment_type.payment_type != 1) {
              param_data['refund_to_wallet'] = 1;
            } else {
              param_data['refund_to_wallet'] = this.refundToWallet;
            }

            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].orders.requestReturn, param_data).subscribe(function (response) {
              if (!!response && response.data) {
                _this14.message.toast('success', "".concat(_this14.localization.transform('product'), " return request generated successfully"));

                _this14.getDetail();
              }
            });
          }
        }, {
          key: "onStatusChange",
          value: function onStatusChange(status) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this15 = this;

              var payload, _yield$sweetalert2__W2, text;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      payload = {
                        order_id: this.orderHistory[this.selectedOrder].order_id,
                        status: status,
                        offset: moment__WEBPACK_IMPORTED_MODULE_10__().format('Z')
                      };

                      if (!(payload.status == 4)) {
                        _context2.next = 7;
                        break;
                      }

                      _context2.next = 4;
                      return sweetalert2__WEBPACK_IMPORTED_MODULE_17___default.a.fire({
                        input: 'textarea',
                        inputPlaceholder: 'Type your parking instruction here...',
                        inputAttributes: {
                          'aria-label': 'Type your parking instruction here'
                        },
                        confirmButtonColor: this.style.primaryColor,
                        cancelButtonColor: this.style.secondaryColor,
                        showCancelButton: true
                      });

                    case 4:
                      _yield$sweetalert2__W2 = _context2.sent;
                      text = _yield$sweetalert2__W2.value;
                      payload['parking_instructions'] = text;

                    case 7:
                      this.isLoading = true;
                      this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].orders.changeOrderStatus, payload).subscribe(function (response) {
                        if (response && response.status == 200) {
                          _this15.getDetail();

                          _this15.message.toast('success', "".concat(_this15.translate.instant(_this15.localization.transform('order') + ' Status Updated!')));
                        }

                        _this15.isLoading = false;
                      }, function (err) {
                        _this15.message.toast('error', "".concat(_this15.translate.instant('Failed To Update'), " ").concat(_this15.localization.transform('order'), " ").concat(_this15.translate.instant('status')));

                        _this15.isLoading = false;
                      });

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "download",
          value: function download(product) {
            var a = document.createElement('a');
            document.body.appendChild(a);
            a.href = product.recipe_pdf;
            a.target = '_blank';
            a.setAttribute('style', 'display: none');
            a.download = product.name;
            a.click();
            document.body.removeChild(a);
          }
        }, {
          key: "onEditOrder",
          value: function onEditOrder(order) {
            this.isEditOrder = true;
            this.editOrder = Object.assign({}, order);
            this.editOrder.products = order.products.map(function (product) {
              return Object.assign({}, product);
            });
            this.editOrder.products.forEach(function (element) {
              element['selectedQuantity'] = element['quantity'];
            });
            this.getGeofenceData();
          }
        }, {
          key: "getGeofenceData",
          value: function getGeofenceData() {
            var _this16 = this;

            var product_ids = this.orderHistory[this.selectedOrder].product.map(function (product) {
              return product['product_id'];
            });
            var payload = {
              product_ids: product_ids,
              latitude: this.orderHistory[this.selectedOrder].to_latitude,
              longitude: this.orderHistory[this.selectedOrder].to_longitude
            };
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].checkProductList, payload).subscribe(function (response) {
              if (!!response && response.data) {
                var products = response.data.result;
                _this16.orderHistory[_this16.selectedOrder].delivery_charges = response.data.region_delivery_charge;
                _this16.orderHistory[_this16.selectedOrder].handling_admin = 0;

                _this16.orderHistory[_this16.selectedOrder].product.forEach(function (cart_item) {
                  products.forEach(function (element) {
                    if (cart_item['product_id'] == element['product_id']) {
                      _this16.orderHistory[_this16.selectedOrder].handling_admin = +element['handling_admin'];
                      cart_item['handling_admin'] = element['handling_admin'];
                    }
                  });
                });

                _this16.getTotal();
              }
            });
          }
        }, {
          key: "increaseValue",
          value: function increaseValue(data) {
            if (this.settings.enable_item_purchase_limit) {
              if (Number(data.purchase_limit) > 0) {
                if (data.selectedQuantity >= Number(data.purchase_limit)) {
                  this.message.alert('info', this.translate.instant('Maximum Limit Reached'));
                  return;
                }
              }
            }

            if (this.editOrder.type == 8) {
              if (data['price_type']) {
                data.selectedQuantity += data.duration / this.settings.interval;
              } else {
                data.selectedQuantity = ++data.selectedQuantity;
              }
            } else {
              if (!data['selectedQuantity']) {
                data['selectedQuantity'] = data.quantity || 0;
              }

              if (data['selectedQuantity'] <= 0) {
                data['selectedQuantity'] = 1;
              } else {
                data['selectedQuantity']++;
              }
            }
          }
        }, {
          key: "decreaseValue",
          value: function decreaseValue(data) {
            if (this.editOrder.type == 8) {
              if (data['price_type']) {
                data.selectedQuantity -= data.duration / this.settings.interval;
              } else {
                data.selectedQuantity = --data.selectedQuantity;
              }

              if (data['selectedQuantity'] < 1) {
                this.editOrder.products = this.editOrder.products.filter(function (product) {
                  return (product.product_id || product.productId) != (data.product_id || data.productId);
                });
                return;
              }
            } else {
              if (!data['selectedQuantity']) {
                data['selectedQuantity'] = data.quantity || 0;
              }

              if (data['selectedQuantity'] <= 1) {
                this.editOrder.products = this.editOrder.products.filter(function (product) {
                  return (product.product_id || product.productId) != (data.product_id || data.productId);
                });
                return;
              }

              data['selectedQuantity']--;
            }
          }
        }, {
          key: "onProductAdd",
          value: function onProductAdd(products) {
            var _this17 = this;

            this.editOrder.products = products;
            this.isAddItems = false;

            if (this.settings.app_type == 8) {
              this.editOrder.total_order_price = 0;
              this.editOrder.products.forEach(function (el) {
                _this17.editOrder.total_order_price += parseFloat(el.fixed_price) * el.selectedQuantity;
              });
              this.getEditTotal();
            }
          }
        }, {
          key: "onAddItems",
          value: function onAddItems() {
            var _this18 = this;

            var payload = {
              sectionId: 0,
              orderId: this.editOrder.order_id,
              handlingAdmin: this.editOrder.handling_admin,
              userServiceCharge: 0
            };
            var removalItems = [];
            this.orderHistory[this.selectedOrder].products.forEach(function (product) {
              if (!_this18.editOrder.products.find(function (p) {
                return (p.product_id || p.productId) == (product.product_id || product.productId);
              })) {
                removalItems.push(product.order_price_id);
              } else if (_this18.settings.app_type == 8 && _this18.editOrder.products.find(function (p) {
                return (p.product_id || p.productId) != (product.product_id || product.productId);
              })) {
                removalItems.push(product.order_price_id);
              }
            });

            if (removalItems && removalItems.length) {
              payload['removalItems'] = removalItems;
            }

            if (this.editOrder.type == 8 || this.settings.app_type == 8) {
              payload['duration'] = 0;
            }

            payload['items'] = this.editOrder.products.map(function (product) {
              var obj = {
                price: product.fixed_price,
                quantity: product['selectedQuantity'],
                productName: product['product_name'] || product['name'],
                productId: product['product_id'] || product['productId'],
                branchId: _this18.editOrder.supplier_branch_id,
                productDesc: product['product_desc'],
                imagePath: product['image_path'],
                orderPriceId: product['order_price_id']
              };

              if (product['is_product'] == 0) {
                if (product['price_type']) {
                  payload['pricing_type'] = 1;
                  payload['duration'] += _this18.settings.interval * product['selectedQuantity'];
                } else {
                  payload['pricing_type'] = 0;
                  payload['duration'] += product['duration'] * product['selectedQuantity'];
                }
              } else {
                if (product['price_type'] == 1) {
                  payload['pricing_type'] = 1;
                  payload['duration'] += product['selectedQuantity'] * 60;
                }
              }

              return obj;
            });
            var totalAdminHandling = 0;
            this.editOrder.products.forEach(function (product) {
              var productAmount = _this18.cartService.calulateProductPrice(product);

              totalAdminHandling += productAmount * product.handling_admin / 100;
            });

            if (this.settings.app_type == 8 && this.editOrder.addOn) {
              totalAdminHandling += this.editOrder.addOn * this.editOrder.products[0].handling_admin / 100;
            }

            payload['handlingAdmin'] = totalAdminHandling;
            var subTotal = payload['items'].reduce(function (total, item) {
              return Number(item.price) + total;
            }, 0);

            if (this.settings.supplier_service_fee == 1 && this.editOrder.user_service_charge) {
              payload['userServiceCharge'] = this.editOrder.user_service_charge / 100 * subTotal;
            }

            this.isLoading = true;
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].orders.addItems, payload).subscribe(function (response) {
              if (response && response.status == 200) {
                _this18.getDetail();
              }

              _this18.isLoading = false;
              _this18.isEditOrder = false;
            }, function (err) {
              return _this18.isLoading = false;
            });
          }
        }, {
          key: "getTotal",
          value: function getTotal() {
            this.orderHistory[this.selectedOrder].net_amount = this.orderHistory[this.selectedOrder].total_order_price + this.orderHistory[this.selectedOrder].delivery_charges + this.orderHistory[this.selectedOrder].handling_admin + this.orderHistory[this.selectedOrder].user_service_charge + this.orderHistory[this.selectedOrder].tip_agent + this.orderHistory[this.selectedOrder].slot_price - (this.orderHistory[this.selectedOrder].loyality_point_discount + this.orderHistory[this.selectedOrder].wallet_discount_amount + this.orderHistory[this.selectedOrder].referral_amount + this.orderHistory[this.selectedOrder].discountAmount);
          }
        }, {
          key: "getEditTotal",
          value: function getEditTotal() {
            var _this19 = this;

            var totalAdminHandling = 0;
            this.editOrder.products.forEach(function (product) {
              var productAmount = _this19.cartService.calulateProductPrice(product);

              totalAdminHandling += productAmount * product.handling_admin / 100;
            });

            if (this.settings.app_type == 8 && this.editOrder.addOn) {
              totalAdminHandling += this.editOrder.addOn * this.editOrder.products[0].handling_admin / 100;
            }

            this.editOrder.handling_admin = totalAdminHandling;
            this.editOrder.net_amount = this.editOrder.total_order_price + this.editOrder.delivery_charges + this.editOrder.handling_admin + this.editOrder.user_service_charge + this.editOrder.addOn + this.editOrder.tip_agent + this.editOrder.slot_price - (this.editOrder.loyality_point_discount + this.editOrder.wallet_discount_amount + this.editOrder.referral_amount + this.editOrder.discountAmount);
          }
        }, {
          key: "dhlStatus",
          value: function dhlStatus() {
            var _this20 = this;

            var params = {
              orderId: this.orderHistory[this.selectedOrder].order_id
            };
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].orders.trackDHL, params).subscribe(function (response) {
              if (!!response && response.data) {
                _this20.dhlData = response.data;
                $('#dhl_status').modal('toggle');
              }
            });
          }
        }, {
          key: "onSOSNotification",
          value: function onSOSNotification() {
            var _this21 = this;

            var obj = {
              user_id: this.currentUser.id,
              device_type: 3
            };
            this.isLoading = true;
            this.location.openTracker().subscribe(function (address) {
              obj['address'] = address.address;
              obj['latitude'] = address.lat;
              obj['longitude'] = address.lng;

              _this21.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].sosAlertNotification, obj).subscribe(function (response) {
                _this21.isLoading = false;

                if (!!response && response.data) {
                  _this21.message.toast('success', 'SOS notification sent successfuly');
                }
              }, function (error) {
                _this21.isLoading = false;
              });
            }, function (err) {
              _this21.message.alert('error', err.message);
            });
          }
        }, {
          key: "itemSelection",
          value: function itemSelection() {
            this.isAddItems = true;
            this.util.diableCart.next(true);
          }
        }, {
          key: "downloadReceipt",
          value: function downloadReceipt(image) {
            this.imageToView = image;
            this.openImageViewer = true;
          }
        }, {
          key: "closeImageViewer",
          value: function closeImageViewer(event) {
            this.openImageViewer = event;
          }
        }, {
          key: "zoomAuth",
          value: function zoomAuth() {
            var _this22 = this;

            this.isLoading = true;
            this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].zoom_auth).subscribe(function (res) {
              if (res.status == 200) {
                _this22.createZoomMeeting(res.data);
              } else {
                _this22.message.toast("error", "Zoom authentication failed");
              }

              _this22.isLoading = false;
            });
          }
        }, {
          key: "createZoomMeeting",
          value: function createZoomMeeting(auth_z) {
            var _this23 = this;

            this.isLoading = true;
            var data = {
              zoom_email: auth_z.zoom_email,
              token: auth_z.token,
              topic: 'Order Meeting',
              type: 5,
              start_time: new Date(),
              duration: 60,
              end_date_time: this.orderHistory[this.selectedOrder].schedule_date
            };
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].zoom_create_meeting, data).subscribe(function (res) {
              if (res.status == 200) {
                _this23.message.toast("success", "Zoom meeting created");

                _this23.getDetail();

                _this23.joinZoomMeeting(res.data.start_url);
              } else {
                _this23.message.toast("error", "Failed to create zoom meeting");
              }

              _this23.isLoading = false;
            });
          }
        }, {
          key: "joinZoomMeeting",
          value: function joinZoomMeeting(zoom_url) {
            window.open(zoom_url);
          }
        }, {
          key: "listenAgentBio",
          value: function listenAgentBio(biourl) {
            window.open(biourl);
          }
        }, {
          key: "trackByOrderHistoryFn",
          value: function trackByOrderHistoryFn(id, index) {
            return index;
          }
        }, {
          key: "trackByCustomizationFn",
          value: function trackByCustomizationFn(id, index) {
            return index;
          }
        }, {
          key: "trackByVariantsFn",
          value: function trackByVariantsFn(id, index) {
            return index;
          }
        }, {
          key: "trackByEditOrderFn",
          value: function trackByEditOrderFn(id, index) {
            return index;
          }
        }, {
          key: "trackByUtilGenerateFn",
          value: function trackByUtilGenerateFn(id, index) {
            return index;
          }
        }, {
          key: "getCurrency",
          value: function getCurrency() {
            var _this24 = this;

            this.util.getSelectedCurrency.subscribe(function (res) {
              if (res) {
                _this24.selected_currency = res;
                _this24.currency = _this24.selected_currency.currency_symbol;
              }
            });
          }
        }, {
          key: "showSpecialInstruction",
          value: function showSpecialInstruction(item) {
            this.special_instructions = item.special_instructions || 'No Special Instructions';
            this.is_special_instruction = true;
          }
        }, {
          key: "onProcessSpecialInstruction",
          value: function onProcessSpecialInstruction(event) {
            this.is_special_instruction = false;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.styleSubscription.unsubscribe();
            this.subscription.unsubscribe();
            this.getDataSubscribe.unsubscribe();
            this.settingsSubscription.unsubscribe();
            if (this.firebaseSubscription) this.firebaseSubscription.unsubscribe();
          }
        }]);

        return OrderDetailComponent;
      }();

      OrderDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
        }, {
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
        }, {
          type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }, {
          type: _services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_14__["FcmService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_16__["LocalizationPipe"]
        }, {
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_15__["MessagingService"]
        }, {
          type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateService"]
        }, {
          type: _services_firebase_analytics_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_19__["FirebaseAnalyticsService"]
        }, {
          type: _services_location_location_service__WEBPACK_IMPORTED_MODULE_20__["LocationService"]
        }];
      };

      OrderDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-order-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./order-detail.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/order-detail/order-detail.component.html"))["default"],
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
          opacity: 1
        }))])])],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./order-detail.component.scss */
        "./src/app/layout/pages/orders/order-detail/order-detail.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"], _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"], _services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_14__["FcmService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_16__["LocalizationPipe"], _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_15__["MessagingService"], _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateService"], _services_firebase_analytics_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_19__["FirebaseAnalyticsService"], _services_location_location_service__WEBPACK_IMPORTED_MODULE_20__["LocationService"]])], OrderDetailComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/order-listing/order-listing.component.scss":
    /*!********************************************************************************!*\
      !*** ./src/app/layout/pages/orders/order-listing/order-listing.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesOrdersOrderListingOrderListingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlcy9vcmRlcnMvb3JkZXItbGlzdGluZy9vcmRlci1saXN0aW5nLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/order-listing/order-listing.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/layout/pages/orders/order-listing/order-listing.component.ts ***!
      \******************************************************************************/

    /*! exports provided: OrderListingComponent */

    /***/
    function srcAppLayoutPagesOrdersOrderListingOrderListingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderListingComponent", function () {
        return OrderListingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../services/seo/seo.service */
      "./src/app/services/seo/seo.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../core/apiUrl */
      "./src/app/core/apiUrl.ts");
      /* harmony import */


      var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../services/messaging/messaging.service */
      "./src/app/services/messaging/messaging.service.ts");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");
      /* harmony import */


      var _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../services/http/http.service */
      "./src/app/services/http/http.service.ts");
      /* harmony import */


      var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../core/theme/styleVariables.model */
      "./src/app/core/theme/styleVariables.model.ts");
      /* harmony import */


      var _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../../core/theme/styleConstants.model */
      "./src/app/core/theme/styleConstants.model.ts");
      /* harmony import */


      var _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../../../shared/models/pagination.model */
      "./src/app/shared/models/pagination.model.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_window_window_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../../../services/window/window.service */
      "./src/app/services/window/window.service.ts");
      /* harmony import */


      var _core_global__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../shared/pipes/localization.pipe */
      "./src/app/shared/pipes/localization.pipe.ts");

      var OrderListingComponent = /*#__PURE__*/function () {
        function OrderListingComponent(route, router, http, util, user, message, localization, translate, seo, window) {
          _classCallCheck(this, OrderListingComponent);

          this.route = route;
          this.router = router;
          this.http = http;
          this.util = util;
          this.user = user;
          this.message = message;
          this.localization = localization;
          this.translate = translate;
          this.seo = seo;
          this.window = window;
          this.orders = [];
          this.status = [];
          this.noData = false;
          this.isLoading = true;
          this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_8__["StyleVariables"]();
          this.cancelButton = new _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_9__["StyleConstants"]();
          this.orderType = 'pending_orders';
          this.currency = _core_global__WEBPACK_IMPORTED_MODULE_14__["GlobalVariable"].CURRENCY;
          this.pagination = new _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_10__["PaginationModel"]();
          this.pagination.perPageOrder = 6;
        }

        _createClass(OrderListingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.seo.updateTitle("".concat(this.localization.transform('order'), " Listing | ").concat(_core_global__WEBPACK_IMPORTED_MODULE_14__["GlobalVariable"].SITE_NAME));

            if (this.route.snapshot.queryParams['orderType']) {
              this.orderType = this.route.snapshot.queryParams['orderType'];
              this.pagination.offset = this.route.snapshot.queryParams['offset'] || 0;
            }

            this.styleSubscription = this.util.getStyles.subscribe(function (style) {
              _this25.style = style;
              _this25.cancelButton.color = style.primaryColor;
              _this25.cancelButton.borderColor = style.primaryColor;
              _this25.cancelButton.backgroundColor = '#ffffff';
            });
            this.settingsSubscription = this.util.getSettings.subscribe(function (settings) {
              if (settings) {
                _this25.settings = settings;
              }
            });
            this.getOrders();
          }
        }, {
          key: "getOrders",
          value: function getOrders() {
            var _this26 = this;

            this.isLoading = true;
            var orderApi = '';

            switch (this.orderType) {
              case 'orders':
                orderApi = _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].orders.getOrderHistory;
                break;

              case 'pending_orders':
                orderApi = _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].orders.getUpcomingOrders;
                break;

              case 'schedule_orders':
                orderApi = _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].orders.getScheduledOrders;
                break;
            }

            var param_data = {
              languageId: this.util.handler.languageId,
              accessToken: this.user.getUserToken,
              offset: this.pagination.offset,
              limit: this.pagination.perPageOrder
            };
            this.noData = false;
            this.http.postData(orderApi, param_data).subscribe(function (response) {
              _this26.isLoading = false;
              _this26.noData = true;

              if (!!response && response.data) {
                _this26.pagination.count = response.data.count;
                _this26.orders = response.data.orderHistory;
              }

              _this26.navigateTo();
            }, function (err) {
              return _this26.isLoading = false;
            });
          }
        }, {
          key: "navigateTo",
          value: function navigateTo() {
            var _this27 = this;

            this.router.navigate([], {
              relativeTo: this.route,
              queryParams: {
                orderType: this.orderType,
                offset: this.pagination.offset
              } // skipLocationChange: true

            }).then(function () {
              _this27.seo.updateTitle("".concat(_this27.localization.transform('order'), " Listing | ").concat(_core_global__WEBPACK_IMPORTED_MODULE_14__["GlobalVariable"].SITE_NAME));
            });
          }
          /********* On Page Change **********/

        }, {
          key: "pageChange",
          value: function pageChange(event) {
            this.pagination.currentPage = event;
            this.pagination.offset = event > 1 ? (event - 1) * this.pagination.perPageOrder : 0;
            this.getOrders();
            this.window.scrollTo(0, 0);
          }
        }, {
          key: "orderTypeSelect",
          value: function orderTypeSelect(type) {
            if (this.orderType == type) {
              return;
            }

            this.orderType = type;
            this.pagination.currentPage = 1;
            this.pagination.offset = 0;
            this.getOrders();
          }
        }, {
          key: "cancelOrder",
          value: function cancelOrder(order) {
            var _this28 = this;

            this.message.confirm("".concat(this.translate.instant('Cancel This'), " ").concat(this.localization.transform('order'))).then(function (data) {
              if (data.value) {
                var param_data = {
                  languageId: _this28.util.handler.languageId,
                  accessToken: _this28.user.getUserToken,
                  orderId: order['order_id'],
                  isScheduled: order['schedule_order']
                };

                _this28.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].orders.cancelOrder, param_data).subscribe(function (response) {
                  if (!!response && response.data) {
                    _this28.message.toast('success', "".concat(_this28.localization.transform('order'), " ").concat(_this28.translate.instant('Cancelled Successfully')));

                    _this28.getOrders();
                  }
                });
              }
            });
          }
        }, {
          key: "trackByOrderFn",
          value: function trackByOrderFn(id, index) {
            return index;
          }
        }, {
          key: "trackByFakeListFn",
          value: function trackByFakeListFn(id, index) {
            return index;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.styleSubscription.unsubscribe();
            this.settingsSubscription.unsubscribe();
          }
        }]);

        return OrderListingComponent;
      }();

      OrderListingComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
        }, {
          type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]
        }, {
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
        }, {
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"]
        }, {
          type: _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_15__["LocalizationPipe"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }, {
          type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"]
        }, {
          type: Window,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
            args: [_services_window_window_service__WEBPACK_IMPORTED_MODULE_13__["WINDOW"]]
          }]
        }];
      };

      OrderListingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'app-order-listing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./order-listing.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/order-listing/order-listing.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./order-listing.component.scss */
        "./src/app/layout/pages/orders/order-listing/order-listing.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"], _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"], _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_15__["LocalizationPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"], Window])], OrderListingComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/order-request/order-request.component.scss":
    /*!********************************************************************************!*\
      !*** ./src/app/layout/pages/orders/order-request/order-request.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesOrdersOrderRequestOrderRequestComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".order-request img {\n  height: 100px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border: 1px solid #00000040;\n  border-radius: 4px;\n  cursor: pointer;\n  width: 100%;\n}\n\n.order-request .foot {\n  height: 70px;\n  border-top: 1px solid #00000029;\n  padding-top: 15px;\n  padding-bottom: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL29yZGVycy9vcmRlci1yZXF1ZXN0L29yZGVyLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxhQUFhO0VBQ2Isc0JBQW1CO0tBQW5CLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0FBRG5COztBQVBBO0VBWVEsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBRDVCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3BhZ2VzL29yZGVycy9vcmRlci1yZXF1ZXN0L29yZGVyLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItcmVxdWVzdCB7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDQwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Qge1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDAwMDI5O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/order-request/order-request.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/layout/pages/orders/order-request/order-request.component.ts ***!
      \******************************************************************************/

    /*! exports provided: OrderRequestComponent */

    /***/
    function srcAppLayoutPagesOrdersOrderRequestOrderRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderRequestComponent", function () {
        return OrderRequestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_layout_shared_components_multimedia_viewer_multimedia_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../shared/layout-shared/components/multimedia-viewer/multimedia-viewer.component */
      "./src/app/layout/shared/layout-shared/components/multimedia-viewer/multimedia-viewer.component.ts");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
      /* harmony import */


      var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../services/messaging/messaging.service */
      "./src/app/services/messaging/messaging.service.ts");
      /* harmony import */


      var _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../shared/models/pagination.model */
      "./src/app/shared/models/pagination.model.ts");
      /* harmony import */


      var _services_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../services/http/http.service */
      "./src/app/services/http/http.service.ts");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_apiUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../core/apiUrl */
      "./src/app/core/apiUrl.ts");

      var OrderRequestComponent = /*#__PURE__*/function () {
        function OrderRequestComponent(util, http, message, dialogService) {
          _classCallCheck(this, OrderRequestComponent);

          this.util = util;
          this.http = http;
          this.message = message;
          this.dialogService = dialogService;
          this.isLoading = false;
          this.noData = false;
          this.orders = [];
          this.request_status = [];
          this.pagination = new _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_4__["PaginationModel"]();
          this.pagination.perPageOrder = 6;
          this.request_status = ['Pending', 'Approved', 'Rejected By Admin', 'Cancelled By User'];
        }

        _createClass(OrderRequestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this29 = this;

            this.styleSubscription = this.util.getStyles.subscribe(function (style) {
              _this29.style = style;
            });
            this.settingsSubscription = this.util.getSettings.subscribe(function (settings) {
              if (settings) {
                _this29.settings = settings;
              }
            });
            this.getOrderResuestList();
          }
        }, {
          key: "getOrderResuestList",
          value: function getOrderResuestList() {
            var _this30 = this;

            this.isLoading = true;
            var param_data = {
              offset: this.pagination.offset,
              limit: this.pagination.perPageOrder
            };
            this.noData = false;
            this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].orders.requestList, param_data).subscribe(function (response) {
              _this30.noData = true;

              if (!!response && response.data) {
                _this30.pagination.count = response.data.totalCount;
                _this30.orders = response.data.data;
              }

              _this30.isLoading = false;
            }, function (err) {
              return _this30.isLoading = false;
            });
          }
        }, {
          key: "rejectRequest",
          value: function rejectRequest(orders) {
            var _this31 = this;

            this.message.confirm("reject this request").then(function (data) {
              if (data.value) {
                var param_data = {
                  id: orders.id,
                  reason: ''
                };

                _this31.http.putData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].orders.rejectOrderRequest, param_data).subscribe(function (response) {
                  if (!!response) {
                    _this31.message.toast('success', 'Request Rejected');

                    _this31.getOrderResuestList();
                  }
                });
              }
            });
          }
        }, {
          key: "viewAttachment",
          value: function viewAttachment(url) {
            var dialogRef = this.dialogService.open(_shared_layout_shared_components_multimedia_viewer_multimedia_viewer_component__WEBPACK_IMPORTED_MODULE_1__["MultimediaViewerComponent"], {
              dismissableMask: true,
              showHeader: false,
              transitionOptions: '600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
              data: {
                url: url,
                type: 'image'
              }
            });
          }
        }, {
          key: "trackByOrderFn",
          value: function trackByOrderFn(id, index) {
            return index;
          }
        }, {
          key: "trackByFakelistFn",
          value: function trackByFakelistFn(id, index) {
            return index;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.styleSubscription.unsubscribe();
            this.settingsSubscription.unsubscribe();
          }
        }]);

        return OrderRequestComponent;
      }();

      OrderRequestComponent.ctorParameters = function () {
        return [{
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
        }, {
          type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
        }, {
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_3__["MessagingService"]
        }, {
          type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]
        }];
      };

      OrderRequestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-order-request',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./order-request.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/order-request/order-request.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./order-request.component.scss */
        "./src/app/layout/pages/orders/order-request/order-request.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_3__["MessagingService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])], OrderRequestComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/orders.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/layout/pages/orders/orders.module.ts ***!
      \******************************************************/

    /*! exports provided: OrdersModule */

    /***/
    function srcAppLayoutPagesOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersModule", function () {
        return OrdersModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_layout_shared_pipes_return_status_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../shared/layout-shared/pipes/return-status.pipe */
      "./src/app/layout/shared/layout-shared/pipes/return-status.pipe.ts");
      /* harmony import */


      var _shared_layout_shared_pipes_prep_time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../shared/layout-shared/pipes/prep-time.pipe */
      "./src/app/layout/shared/layout-shared/pipes/prep-time.pipe.ts");
      /* harmony import */


      var _shared_layout_shared_pipes_order_status_color_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../shared/layout-shared/pipes/order-status-color.pipe */
      "./src/app/layout/shared/layout-shared/pipes/order-status-color.pipe.ts");
      /* harmony import */


      var _shared_layout_shared_pipes_order_status_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../shared/layout-shared/pipes/order-status.pipe */
      "./src/app/layout/shared/layout-shared/pipes/order-status.pipe.ts");
      /* harmony import */


      var _shared_online_payment_online_payment_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../shared/online-payment/online-payment.module */
      "./src/app/layout/shared/online-payment/online-payment.module.ts");
      /* harmony import */


      var _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../services/sockets/sockets.service */
      "./src/app/services/sockets/sockets.service.ts");
      /* harmony import */


      var _services_sockets_socket_connection_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../services/sockets/socket-connection.service */
      "./src/app/services/sockets/socket-connection.service.ts");
      /* harmony import */


      var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./order-detail/order-detail.component */
      "./src/app/layout/pages/orders/order-detail/order-detail.component.ts");
      /* harmony import */


      var _orders_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./orders.routing */
      "./src/app/layout/pages/orders/orders.routing.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-socket-io */
      "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
      /* harmony import */


      var _order_listing_order_listing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./order-listing/order-listing.component */
      "./src/app/layout/pages/orders/order-listing/order-listing.component.ts");
      /* harmony import */


      var _rating_rating_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./rating/rating.component */
      "./src/app/layout/pages/orders/rating/rating.component.ts");
      /* harmony import */


      var _track_order_track_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./track-order/track-order.component */
      "./src/app/layout/pages/orders/track-order/track-order.component.ts");
      /* harmony import */


      var _components_re_order_re_order_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/re-order/re-order.component */
      "./src/app/layout/pages/orders/components/re-order/re-order.component.ts");
      /* harmony import */


      var _components_order_status_tracker_order_status_tracker_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/order-status-tracker/order-status-tracker.component */
      "./src/app/layout/pages/orders/components/order-status-tracker/order-status-tracker.component.ts");
      /* harmony import */


      var _components_order_list_item_skeleton_order_list_item_skeleton_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/order-list-item-skeleton/order-list-item-skeleton.component */
      "./src/app/layout/pages/orders/components/order-list-item-skeleton/order-list-item-skeleton.component.ts");
      /* harmony import */


      var _components_order_list_item_order_list_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/order-list-item/order-list-item.component */
      "./src/app/layout/pages/orders/components/order-list-item/order-list-item.component.ts");
      /* harmony import */


      var _components_order_attachments_order_attachments_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/order-attachments/order-attachments.component */
      "./src/app/layout/pages/orders/components/order-attachments/order-attachments.component.ts");
      /* harmony import */


      var _components_order_payment_order_payment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/order-payment/order-payment.component */
      "./src/app/layout/pages/orders/components/order-payment/order-payment.component.ts");
      /* harmony import */


      var _shared_layout_shared_layout_shared_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../shared/layout-shared/layout-shared.module */
      "./src/app/layout/shared/layout-shared/layout-shared.module.ts");
      /* harmony import */


      var _order_request_order_request_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./order-request/order-request.component */
      "./src/app/layout/pages/orders/order-request/order-request.component.ts");
      /* harmony import */


      var _components_order_supplier_products_order_supplier_products_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/order-supplier-products/order-supplier-products.component */
      "./src/app/layout/pages/orders/components/order-supplier-products/order-supplier-products.component.ts");
      /* harmony import */


      var _shared_product_product_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../shared/product/product.module */
      "./src/app/layout/shared/product/product.module.ts"); // components


      var OrdersModule = function OrdersModule() {
        _classCallCheck(this, OrdersModule);
      };

      OrdersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
        declarations: [_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_8__["OrderDetailComponent"], _order_listing_order_listing_component__WEBPACK_IMPORTED_MODULE_13__["OrderListingComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_14__["RatingComponent"], _track_order_track_order_component__WEBPACK_IMPORTED_MODULE_15__["TrackOrderComponent"], _shared_layout_shared_pipes_order_status_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderStatusPipe"], _shared_layout_shared_pipes_order_status_color_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderStatusColorPipe"], _components_re_order_re_order_component__WEBPACK_IMPORTED_MODULE_16__["ReOrderComponent"], _components_order_status_tracker_order_status_tracker_component__WEBPACK_IMPORTED_MODULE_17__["OrderStatusTrackerComponent"], _components_order_list_item_skeleton_order_list_item_skeleton_component__WEBPACK_IMPORTED_MODULE_18__["OrderListItemSkeletonComponent"], _components_order_list_item_order_list_item_component__WEBPACK_IMPORTED_MODULE_19__["OrderListItemComponent"], _shared_layout_shared_pipes_prep_time_pipe__WEBPACK_IMPORTED_MODULE_2__["PrepTimePipe"], _shared_layout_shared_pipes_return_status_pipe__WEBPACK_IMPORTED_MODULE_1__["ReturnStatusPipe"], _components_order_attachments_order_attachments_component__WEBPACK_IMPORTED_MODULE_20__["OrderAttachmentsComponent"], _components_order_payment_order_payment_component__WEBPACK_IMPORTED_MODULE_21__["OrderPaymentComponent"], _order_request_order_request_component__WEBPACK_IMPORTED_MODULE_23__["OrderRequestComponent"], _components_order_supplier_products_order_supplier_products_component__WEBPACK_IMPORTED_MODULE_24__["OrderSupplierProductsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _shared_layout_shared_layout_shared_module__WEBPACK_IMPORTED_MODULE_22__["LayoutSharedModule"], _shared_online_payment_online_payment_module__WEBPACK_IMPORTED_MODULE_5__["OnlinePaymentModule"], _orders_routing__WEBPACK_IMPORTED_MODULE_9__["OrdersRoutingModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__["SocketIoModule"], _shared_product_product_module__WEBPACK_IMPORTED_MODULE_25__["ProductModule"]],
        providers: [_services_sockets_socket_connection_service__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"], _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_6__["SocketsService"]]
      })], OrdersModule);
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/orders.routing.ts":
    /*!*******************************************************!*\
      !*** ./src/app/layout/pages/orders/orders.routing.ts ***!
      \*******************************************************/

    /*! exports provided: OrdersRoutingModule */

    /***/
    function srcAppLayoutPagesOrdersOrdersRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function () {
        return OrdersRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _order_request_order_request_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./order-request/order-request.component */
      "./src/app/layout/pages/orders/order-request/order-request.component.ts");
      /* harmony import */


      var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order-detail/order-detail.component */
      "./src/app/layout/pages/orders/order-detail/order-detail.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _order_listing_order_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./order-listing/order-listing.component */
      "./src/app/layout/pages/orders/order-listing/order-listing.component.ts");
      /* harmony import */


      var _rating_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./rating/rating.component */
      "./src/app/layout/pages/orders/rating/rating.component.ts");
      /* harmony import */


      var _track_order_track_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./track-order/track-order.component */
      "./src/app/layout/pages/orders/track-order/track-order.component.ts");

      var routes = [{
        path: 'order-detail',
        component: _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_2__["OrderDetailComponent"],
        data: {
          title: 'Track order',
          description: 'Order Description',
          keyword: 'shopping, ecommerce'
        }
      }, {
        path: 'order-listing',
        component: _order_listing_order_listing_component__WEBPACK_IMPORTED_MODULE_6__["OrderListingComponent"],
        data: {
          title: 'Order listing',
          description: 'Order Description',
          keyword: 'shopping, ecommerce'
        }
      }, {
        path: 'rating',
        component: _rating_rating_component__WEBPACK_IMPORTED_MODULE_7__["RatingComponent"]
      }, {
        path: 'track-order',
        component: _track_order_track_order_component__WEBPACK_IMPORTED_MODULE_8__["TrackOrderComponent"],
        data: {
          title: 'tracking',
          description: 'Order tracking',
          keyword: 'shopping, ecommerce'
        }
      }, {
        path: 'order-request',
        component: _order_request_order_request_component__WEBPACK_IMPORTED_MODULE_1__["OrderRequestComponent"],
        data: {
          title: 'order request',
          description: 'Order request',
          keyword: 'shopping, ecommerce'
        }
      }];

      var OrdersRoutingModule = function OrdersRoutingModule() {
        _classCallCheck(this, OrdersRoutingModule);
      };

      OrdersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], OrdersRoutingModule);
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/rating/rating.component.scss":
    /*!******************************************************************!*\
      !*** ./src/app/layout/pages/orders/rating/rating.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesOrdersRatingRatingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".radio {\n  font-weight: 500;\n}\n\n.radio input {\n  vertical-align: sub;\n  margin-left: 6px;\n}\n\ninput, textarea {\n  border-radius: 4px;\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL29yZGVycy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUZBO0VBSUksbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUVwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcGFnZXMvb3JkZXJzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFkaW8ge1xuICBmb250LXdlaWdodDogNTAwO1xuXG4gIGlucHV0IHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIH1cbn1cblxuaW5wdXQsIHRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/rating/rating.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/layout/pages/orders/rating/rating.component.ts ***!
      \****************************************************************/

    /*! exports provided: RatingComponent */

    /***/
    function srcAppLayoutPagesOrdersRatingRatingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatingComponent", function () {
        return RatingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _core_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../services/seo/seo.service */
      "./src/app/services/seo/seo.service.ts");
      /* harmony import */


      var _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../core/apiUrl */
      "./src/app/core/apiUrl.ts");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../services/messaging/messaging.service */
      "./src/app/services/messaging/messaging.service.ts");
      /* harmony import */


      var _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../services/http/http.service */
      "./src/app/services/http/http.service.ts");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");
      /* harmony import */


      var _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../core/theme/styleConstants.model */
      "./src/app/core/theme/styleConstants.model.ts");
      /* harmony import */


      var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../../core/theme/styleVariables.model */
      "./src/app/core/theme/styleVariables.model.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../../../shared/pipes/localization.pipe */
      "./src/app/shared/pipes/localization.pipe.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var RatingComponent = /*#__PURE__*/function () {
        function RatingComponent(util, http, route, message, localization, translate, seo, user) {
          _classCallCheck(this, RatingComponent);

          this.util = util;
          this.http = http;
          this.route = route;
          this.message = message;
          this.localization = localization;
          this.translate = translate;
          this.seo = seo;
          this.user = user;
          this.branchId = '';
          this.productId = '';
          this.rating = 0;
          this.title = '';
          this.review = '';
          this.orderIds = [];
          this.type = '';
          this.supplierId = '';
          this.categoryId = '';
          this.image = '';
          this.supplier = '';
          this.isLoading = false;
          this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_9__["StyleVariables"]();
          this.submit = new _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_8__["StyleConstants"]();
        }

        _createClass(RatingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this32 = this;

            this.seo.updateTitle("Rating | ".concat(_core_global__WEBPACK_IMPORTED_MODULE_1__["GlobalVariable"].SITE_NAME));
            this.util.getStyles.subscribe(function (style) {
              _this32.style = style;
              _this32.submit.backgroundColor = style.primaryColor;
              _this32.submit.borderColor = style.primaryColor;
              _this32.submit.color = '#ffffff';
            });
            this.settingsSubscription = this.util.getSettings.subscribe(function (settings) {
              if (settings) {
                _this32.settings = settings;
              }
            });
            this.subscribeRoute();
          }
          /********* Route Subscription **********/

        }, {
          key: "subscribeRoute",
          value: function subscribeRoute() {
            var _this33 = this;

            this.routeSubscription = this.route.queryParams.subscribe(function (params) {
              _this33.type = params.type;
              _this33.branchId = params.supplierBranchId;
              _this33.productId = params.productId ? params.productId : null;
              _this33.supplierId = params.supplierId ? params.supplierId : null;
              _this33.orderIds = params.orderId ? params.orderId : null;
              _this33.categoryId = params.categoryId ? params.categoryId : null;
              _this33.agentId = params.categoryId ? params.agentId : null;
              _this33.agentName = params.categoryId ? params.agentName : null;

              if (_this33.type == 'product') {
                _this33.getProductDetail();
              } else if (_this33.type == 'supplier') {
                _this33.supplierDetail();
              } else if (_this33.type == 'agent') {
                _this33.orderDetails();
              }
            });
            var data = this.route.snapshot.data;
          }
        }, {
          key: "orderDetails",
          value: function orderDetails() {
            var _this34 = this;

            var obj = {
              languageId: parseInt(this.util.handler.languageId),
              accessToken: this.user.getUserToken,
              orderId: this.orderIds,
              latitude: this.util.handler.latitude,
              longitude: this.util.handler.longitude
            };
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].orders.getOrderDetail, obj).subscribe(function (response) {
              if (!!response && response.data) {
                _this34.agentId = response.data.orderHistory[0].agent[0].id;
                _this34.agentName = response.data.orderHistory[0].agent[0].name;
                _this34.image = response.data.orderHistory[0].agent[0].image;
              }
            });
          }
        }, {
          key: "supplierDetail",
          value: function supplierDetail() {
            var _this35 = this;

            var obj = {
              languageId: this.util.handler.languageId,
              branchId: this.branchId,
              supplierId: this.supplierId,
              categoryId: this.categoryId,
              latitude: this.util.handler.latitude,
              longitude: this.util.handler.longitude
            };
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].getSupplierDetail, obj).subscribe(function (response) {
              if (!!response && response.data) {
                _this35.image = response.data['logo'];
                _this35.supplier = response.data;
              }
            });
          }
        }, {
          key: "getProductDetail",
          value: function getProductDetail() {
            var _this36 = this;

            var obj = {
              languageId: this.util.handler.languageId,
              productId: this.productId,
              supplierBranchId: this.branchId,
              offer: 0,
              latitude: this.util.handler.latitude,
              longitude: this.util.handler.longitude
            };
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].getProductDetail, obj).subscribe(function (response) {
              console.log(response);

              if (!!response && response.data) {
                _this36.product = response.data;
                _this36.image = _this36.product.image_path[0];
              }
            });
          }
        }, {
          key: "rateProduct",
          value: function rateProduct(rating) {
            if (this.rating === rating) {
              if (this.rating > 0) {
                this.rating--;
              }
            } else {
              this.rating = rating;
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this37 = this;

            if (this.rating === 0) {
              this.message.toast('warning', "".concat(this.translate.instant('Please Rate'), " ").concat(this.type === 'PRODUCT' ? this.localization.transform('product') : this.localization.transform('supplier')));
              return;
            }

            if (this.type === 'product') {
              var param_data = {
                title: this.title,
                reviews: this.review,
                product_id: this.productId,
                value: this.rating,
                order_id: this.orderIds[0] || ''
              };
              this.isLoading = true;
              this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].rateProduct, param_data).subscribe(function (response) {
                if (!!response) {
                  _this37.moveTo();
                }

                _this37.isLoading = false;
              }, function (err) {
                return _this37.isLoading = false;
              });
            } else if (this.type === 'supplier') {
              var _param_data = {
                accessToken: this.user.getUserToken,
                comment: this.review,
                supplierId: this.product ? this.product.supplier_id : this.supplierId,
                rating: this.rating,
                orderId: this.orderIds
              };
              this.isLoading = true;
              this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].rateSupplier, _param_data).subscribe(function (response) {
                if (!!response) {
                  _this37.moveTo();
                }

                _this37.isLoading = false;
              }, function (err) {
                return _this37.isLoading = false;
              });
            } else if (this.type == 'agent') {
              var _param_data2 = {
                accessToken: this.user.getUserToken,
                comment: this.review,
                agnetId: this.agentId,
                rating: this.rating,
                orderId: this.orderIds,
                languageId: this.util.handler.languageId
              };
              this.isLoading = true;
              this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].rateAgent, _param_data2).subscribe(function (response) {
                if (!!response) {
                  _this37.moveTo();
                }

                _this37.isLoading = false;
              }, function (err) {
                return _this37.isLoading = false;
              });
            }
          }
        }, {
          key: "moveTo",
          value: function moveTo() {
            switch (this.type) {
              case 'PRODUCT':
                this.message.toast('success', "".concat(this.localization.transform('product'), " ").concat(this.translate.instant('Rated Successfully')));
                break;

              case 'SUPPLIER':
                this.message.toast('success', "".concat(this.localization.transform('supplier'), " ").concat(this.translate.instant('Rated Successfully')));
                break;

              case 'agent':
                this.message.toast('success', "".concat(this.localization.transform('agent'), " ").concat(this.translate.instant('Rated Successfully')));
            }

            this.util.goBack();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.routeSubscription.unsubscribe();
            this.settingsSubscription.unsubscribe();
          }
        }]);

        return RatingComponent;
      }();

      RatingComponent.ctorParameters = function () {
        return [{
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"]
        }, {
          type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"]
        }, {
          type: _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_12__["LocalizationPipe"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"]
        }, {
          type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"]
        }, {
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }];
      };

      RatingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'app-rating',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./rating.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/rating/rating.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./rating.component.scss */
        "./src/app/layout/pages/orders/rating/rating.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"], _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_12__["LocalizationPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"], _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])], RatingComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/track-order/track-order.component.scss":
    /*!****************************************************************************!*\
      !*** ./src/app/layout/pages/orders/track-order/track-order.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesOrdersTrackOrderTrackOrderComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#trackLocation {\n  height: 550px;\n  border-radius: 4px;\n}\n\nh3 {\n  font-weight: 400;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL29yZGVycy90cmFjay1vcmRlci90cmFjay1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcGFnZXMvb3JkZXJzL3RyYWNrLW9yZGVyL3RyYWNrLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RyYWNrTG9jYXRpb24ge1xuICBoZWlnaHQ6IDU1MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmgzIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/layout/pages/orders/track-order/track-order.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/layout/pages/orders/track-order/track-order.component.ts ***!
      \**************************************************************************/

    /*! exports provided: TrackOrderComponent */

    /***/
    function srcAppLayoutPagesOrdersTrackOrderTrackOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrackOrderComponent", function () {
        return TrackOrderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../services/sockets/sockets.service */
      "./src/app/services/sockets/sockets.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../shared/pipes/localization.pipe */
      "./src/app/shared/pipes/localization.pipe.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var src_app_core_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/global */
      "./src/app/core/global.ts");

      var TrackOrderComponent = /*#__PURE__*/function () {
        function TrackOrderComponent(socket, route, util, localization, translate, document) {
          var _this38 = this;

          _classCallCheck(this, TrackOrderComponent);

          this.socket = socket;
          this.route = route;
          this.util = util;
          this.localization = localization;
          this.translate = translate;
          this.document = document;
          this.orderId = '';
          this.map = {};
          this.agentMarker = null;
          this.destinationMaker = null;
          this.location = {};
          this.destination_icon = {};
          this.agent_icon = {};
          this.tracking = false;
          this.status = [];
          this.supplier_lat = 0;
          this.supplier_lng = 0;
          this.agent_lat = 0;
          this.agent_lng = 0;
          this.self_pickup = 0;
          this.client_code = src_app_core_global__WEBPACK_IMPORTED_MODULE_8__["GlobalVariable"].UNIQUE_ID;
          this.routeSubscription = this.route.queryParams.subscribe(function (params) {
            _this38.orderId = params.orderId;
            _this38.supplier_lat = parseFloat(params.lat);
            _this38.supplier_lng = parseFloat(params.lng);
            _this38.agent_lat = parseFloat(params.a_lat);
            _this38.agent_lng = parseFloat(params.a_lng);
            _this38.self_pickup = parseInt(params.selfPickup);
          });
          this.destination_icon = {
            url: this.self_pickup == 1 ? 'https://i.imgur.com/F5uH1Fr.png' : 'https://i.imgur.com/7teZKif.png',
            scaledSize: {
              width: 37,
              height: 37
            }
          };
          this.agent_icon = {
            url: this.client_code === 'freshfarmandlocal_0443' ? '../assets/images/car.png' : this.self_pickup == 1 ? '../assets/images/user.png' : '../assets/images/agentBike.png',
            scaledSize: {
              width: 65,
              height: 65
            }
          };
        }

        _createClass(TrackOrderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this39 = this;

            this.styleSubscription = this.util.getStyles.subscribe(function (style) {
              _this39.style = style;
            });
            this.util.settingsLoaded.subscribe(function (loaded) {
              if (loaded) {
                _this39.directionsService = new google.maps.DirectionsService();
                _this39.directionsDisplay = new google.maps.DirectionsRenderer({
                  suppressMarkers: true
                });

                _this39.initialize();

                if (_this39.self_pickup) {
                  _this39.location.latitude = _this39.util.handler.latitude;
                  _this39.location.longitude = _this39.util.handler.longitude;

                  _this39.trackLocation();
                } else {
                  _this39.getLocation();
                }
              }
            });
          }
        }, {
          key: "getLocation",
          value: function getLocation() {
            var _this40 = this;

            this.socket.getLocation().subscribe(function (response) {
              if (response) {
                _this40.location = response;

                if (response['order_id'] == _this40.orderId) {
                  _this40.trackLocation();
                }
              }
            });
          }
        }, {
          key: "initialize",
          value: function initialize() {
            var self = this;
            var myOptions = {
              zoom: 12,
              streetViewControl: false,
              disableDefaultUI: false,
              mapTypeControl: false
            };
            self.map = new google.maps.Map(this.document.getElementById("trackLocation"), myOptions);
            this.directionsDisplay.setMap(self.map);
            self.map.setCenter({
              lat: this.agent_lat,
              lng: this.agent_lng
            });
            var LatLng = new google.maps.LatLng({
              lat: this.agent_lat,
              lng: this.agent_lng
            });
            this.setAgentMarker(LatLng);
          }
        }, {
          key: "trackLocation",
          value: function trackLocation() {
            var _this41 = this;

            var self = this;
            /*************** Destination ***************/

            var coordinates = this.getDestination();
            var destination = new google.maps.LatLng(coordinates[0], coordinates[1]); // this.setDestinationMaker(destination); 

            /*************** Agent ***************/

            var agent = new google.maps.LatLng(self.location.latitude, self.location.longitude); // this.setAgentMarker(agent);

            /*************** Route ***************/

            var request = {
              origin: agent,
              destination: destination,
              optimizeWaypoints: true,
              travelMode: google.maps.DirectionsTravelMode.DRIVING
            };
            this.directionsService.route(request, function (response, status) {
              if (status == google.maps.DirectionsStatus.OK) {
                _this41.directionsDisplay.setDirections(response);

                _this41.directionsDisplay.setMap(self.map);

                if (!!_this41.agentMarker) {
                  _this41.agentMarker.setMap(null);
                }

                var route = response.routes[0].legs[0];

                _this41.setAgentMarker(route.start_location);

                _this41.setDestinationMaker(route.end_location);
              }
            });
          }
        }, {
          key: "setAgentMarker",
          value: function setAgentMarker(position) {
            var self = this;
            this.agent_icon.rotation = this.location.bearing;
            self.agentMarker = new google.maps.Marker({
              position: position,
              map: self.map,
              // draggable: false,
              title: this.self_pickup == 1 ? this.translate.instant('Customer') : this.localization.transform('agent'),
              icon: this.agent_icon
            });
          }
        }, {
          key: "setDestinationMaker",
          value: function setDestinationMaker(destinationPosition) {
            var self = this;
            self.destinationMaker = new google.maps.Marker({
              position: destinationPosition,
              map: self.map,
              // draggable: false,
              title: this.self_pickup == 1 ? this.localization.transform('supplier') : 'Destination',
              icon: this.destination_icon
            });

            if (!this.tracking) {
              self.destinationMaker.setPosition(destinationPosition);
              self.map.panTo(destinationPosition);
              this.tracking = true;
            }
          }
        }, {
          key: "getDestination",
          value: function getDestination() {
            if (this.self_pickup == 1) {
              return ["".concat(this.supplier_lat), "".concat(this.supplier_lng)];
            } else if (this.location['address'] && this.location['address'].length) {
              var destination = this.location['address'][0];
              return [destination.latitude, destination.longitude];
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.routeSubscription.unsubscribe();
            this.styleSubscription.unsubscribe();
            this.socket.removeListener('order_location');
          }
        }]);

        return TrackOrderComponent;
      }();

      TrackOrderComponent.ctorParameters = function () {
        return [{
          type: _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_4__["SocketsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
        }, {
          type: _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_6__["LocalizationPipe"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };

      TrackOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-track-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./track-order.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/orders/track-order/track-order.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./track-order.component.scss */
        "./src/app/layout/pages/orders/track-order/track-order.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_4__["SocketsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_6__["LocalizationPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], Object])], TrackOrderComponent);
      /***/
    },

    /***/
    "./src/app/layout/shared/layout-shared/pipes/order-status-color.pipe.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/layout/shared/layout-shared/pipes/order-status-color.pipe.ts ***!
      \******************************************************************************/

    /*! exports provided: OrderStatusColorPipe */

    /***/
    function srcAppLayoutSharedLayoutSharedPipesOrderStatusColorPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderStatusColorPipe", function () {
        return OrderStatusColorPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OrderStatusColorPipe = /*#__PURE__*/function () {
        function OrderStatusColorPipe() {
          _classCallCheck(this, OrderStatusColorPipe);
        }

        _createClass(OrderStatusColorPipe, [{
          key: "transform",
          value: function transform(value) {
            var color = '';

            switch (value) {
              case 0:
                color = 'brown';
                break;

              case 2:
              case 8:
                color = 'red';
                break;

              case 1:
              case 3:
              case 5:
              case 6:
              case 7:
              case 9:
              case 10:
              case 11:
                color = 'green';
                break;
            }

            return color;
          }
        }]);

        return OrderStatusColorPipe;
      }();

      OrderStatusColorPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'orderStatusColor'
      })], OrderStatusColorPipe);
      /***/
    },

    /***/
    "./src/app/layout/shared/layout-shared/pipes/order-status.pipe.ts":
    /*!************************************************************************!*\
      !*** ./src/app/layout/shared/layout-shared/pipes/order-status.pipe.ts ***!
      \************************************************************************/

    /*! exports provided: OrderStatusPipe */

    /***/
    function srcAppLayoutSharedLayoutSharedPipesOrderStatusPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderStatusPipe", function () {
        return OrderStatusPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OrderStatusPipe = /*#__PURE__*/function () {
        function OrderStatusPipe(util) {
          var _this42 = this;

          _classCallCheck(this, OrderStatusPipe);

          this.util = util;
          this.app_type = 0;
          this.is_single_vendor = 0;
          this.langType = 'english';
          this.terminology = {};
          this.categories = [];
          this.categorySubscription = this.util.getLanguageCategoryData.subscribe(function (data) {
            if (data && data.english) {
              _this42.categories = data.english;
            }
          });
          this.settingSubscription = this.util.getSettings.subscribe(function (settings) {
            if (settings) {
              _this42.app_type = settings['app_type'];
              _this42.is_single_vendor = settings['is_single_vendor'];
              _this42.settings = settings;
            }
          });
          var langData = this.util.getLocalData('langData', true) || {
            id: this.util.handler.languageId
          };
          this.langType = !langData || langData.id != 14 ? 'other' : 'english';
        }

        _createClass(OrderStatusPipe, [{
          key: "selectTerminology",
          value: function selectTerminology(type) {
            if (this.settings.isCustomFlow) {
              var category = this.categories.find(function (category) {
                return category.type == type;
              });

              if (category && category.terminology) {
                this.terminology = JSON.parse(category.terminology);
              }
            } else {
              this.terminology = this.settings.terminology || {};
            }
          }
        }, {
          key: "transform",
          value: function transform(value, order) {
            if (order && order.type) {
              this.app_type = order.type;
            }

            this.selectTerminology(this.app_type);
            var status = '';

            switch (value) {
              case 0:
                status = 'Pending';
                break;

              case 1:
                switch (this.app_type) {
                  case 2:
                    status = 'Approved';
                    break;

                  case 1:
                  case 8:
                    status = 'Confirmed';
                    break;
                }

                break;

              case 2:
                status = 'Rejected';
                break;

              case 3:
                switch (this.app_type) {
                  case 1:
                  case 3:
                  case 4:
                    if (order && order.self_pickup == 3 && order.is_dine_in == 1) {
                      status = 'Ready To Serve';
                    } else {
                      status = 'On The Way';
                    }

                    break;

                  case 2:
                    status = 'Out For Delivery';
                    break;

                  case 8:
                    status = 'Started';
                    break;
                }

                break;

              case 4:
                switch (this.app_type) {
                  case 1:
                    status = 'Arrived';
                    break;

                  default:
                    status = 'Near You';
                    break;
                }

                break;

              case 5:
                switch (this.app_type) {
                  case 8:
                    status = 'Ended';
                    break;

                  default:
                    if (order && order.self_pickup == 3 && order.is_dine_in == 1) {
                      status = 'Served';
                    } else {
                      status = 'Delivered';
                    }

                    break;
                }

                break;

              case 6:
                status = 'Rating Given';
                break;

              case 7:
                status = 'Track';
                break;

              case 8:
                status = 'Customer Cancelled';
                break;

              case 9:
                status = 'Scheduled';
                break;

              case 10:
                switch (this.app_type) {
                  case 8:
                    if (this.settings.enable_product_appointment && order.product[0].is_appointment == 1) {
                      status = 'Provider Available';
                    } else {
                      status = 'Reached';
                    }

                    break;

                  case 1:
                    status = 'Ready To Be Picked';
                    break;

                  default:
                    status = 'Shipped';
                    break;
                }

                break;

              case 11:
                switch (this.app_type) {
                  case 2:
                  case 4:
                  case 3:
                    status = 'Packed';
                    break;

                  case 1:
                    status = 'In Kitchen';
                    break;

                  case 8:
                    if (order && order.self_pickup == 3 && order.is_dine_in == 1) {
                      status = 'Ready To Serve';
                    } else {
                      status = 'On The Way';
                    }

                    break;
                }

                break;
            }

            if (order && order.self_pickup != 3 && order.is_dine_in != 1) {
              status = this.terminology && this.terminology[this.langType] && this.terminology[this.langType]['status'] && this.terminology[this.langType]['status']["".concat(value)] ? this.terminology[this.langType]['status']["".concat(value)] : status;
            }

            return status;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (!!this.settingSubscription) this.settingSubscription.unsubscribe();
            if (!!this.categorySubscription) this.categorySubscription.unsubscribe();
          }
        }]);

        return OrderStatusPipe;
      }();

      OrderStatusPipe.ctorParameters = function () {
        return [{
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
        }];
      };

      OrderStatusPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
        name: 'orderStatus'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]])], OrderStatusPipe);
      /***/
    },

    /***/
    "./src/app/layout/shared/layout-shared/pipes/prep-time.pipe.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/layout/shared/layout-shared/pipes/prep-time.pipe.ts ***!
      \*********************************************************************/

    /*! exports provided: PrepTimePipe */

    /***/
    function srcAppLayoutSharedLayoutSharedPipesPrepTimePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrepTimePipe", function () {
        return PrepTimePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

      var PrepTimePipe = /*#__PURE__*/function () {
        function PrepTimePipe() {
          _classCallCheck(this, PrepTimePipe);
        }

        _createClass(PrepTimePipe, [{
          key: "transform",
          value: function transform(value) {
            var time = '';
            var hour = moment__WEBPACK_IMPORTED_MODULE_2__(value, 'HH:mm:ss').hour();
            var minute = moment__WEBPACK_IMPORTED_MODULE_2__(value, 'HH:mm:ss').minute();

            if (hour) {
              time = hour + (hour > 1 ? ' Hours' : ' Hour');
            }

            if (minute) {
              time += ' ' + minute + (minute > 1 ? ' Minutes' : ' Minute');
            }

            return time;
          }
        }]);

        return PrepTimePipe;
      }();

      PrepTimePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'prepTime'
      })], PrepTimePipe);
      /***/
    },

    /***/
    "./src/app/layout/shared/layout-shared/pipes/return-status.pipe.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/layout/shared/layout-shared/pipes/return-status.pipe.ts ***!
      \*************************************************************************/

    /*! exports provided: ReturnStatusPipe */

    /***/
    function srcAppLayoutSharedLayoutSharedPipesReturnStatusPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReturnStatusPipe", function () {
        return ReturnStatusPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ReturnStatusPipe = /*#__PURE__*/function () {
        function ReturnStatusPipe(util) {
          var _this43 = this;

          _classCallCheck(this, ReturnStatusPipe);

          this.util = util;
          this.app_type = 0;
          this.langType = 'english';
          this.terminology = {};
          this.settingSubscription = this.util.getSettings.subscribe(function (settings) {
            if (settings) {
              _this43.app_type = settings['app_type'];
              _this43.settings = settings;
            }
          });
          var langData = this.util.getLocalData('langData', true) || {
            id: this.util.handler.languageId
          };
          this.langType = !langData || langData.id != 14 ? 'other' : 'english';
        }

        _createClass(ReturnStatusPipe, [{
          key: "transform",
          value: function transform(selected_status) {
            if (this.settings) {
              var terminologies = this.settings.terminology;
              var status_terminologies = {};

              if (!!terminologies) {
                if (localStorage.getItem('lang') === 'en') {
                  status_terminologies = terminologies[this.langType]['return_status'];
                } else {
                  status_terminologies = terminologies[this.langType]['return_status'];
                }
              }

              if (!!terminologies && !!status_terminologies && !!status_terminologies[selected_status]) {
                return status_terminologies[selected_status];
              } else {
                var status = '';

                switch (selected_status) {
                  case 0:
                    status = 'RETURN REQUESTED';
                    break;

                  case 1:
                    status = 'AGENT ON THE WAY';
                    break;

                  case 2:
                    status = 'PRODUCT PICKED';
                    break;

                  case 3:
                    status = 'RETURNED';
                    break;
                }

                return status;
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (!!this.settingSubscription) this.settingSubscription.unsubscribe();
          }
        }]);

        return ReturnStatusPipe;
      }();

      ReturnStatusPipe.ctorParameters = function () {
        return [{
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
        }];
      };

      ReturnStatusPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
        name: 'returnStatus'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]])], ReturnStatusPipe);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-orders-orders-module-es5.js.map