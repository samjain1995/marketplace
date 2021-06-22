(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/agent/agent.component.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/agent/agent.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesCartAgentAgentComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-processing-indicator *ngIf=\"isLoading\"></app-processing-indicator>\n\n<!--================ start banner tab section =================-->\n<section class=\"agent_main_wrapper\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-12\">\n        <div class=\"back-page\" (click)=\"onBack()\">\n          <i class=\"fa fa-chevron-left\"\n            aria-hidden=\"true\"></i><span>{{settings.app_type == 8 ? 'Back'  :  'Back To Cart' | translate}}</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6 col-7\">\n        <h5 [style.color]=\"style.defaultColor\">{{'Choose Your' | translate}} {{'agent' | localization}} </h5>\n      </div>\n      <div class=\"col-sm-6 col-5 text-right\">\n        <p [style.color]=\"style.primaryColor\" class=\"cursor\" (click)=\"selectDate()\">\n          <span><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n          </span>\n          {{'Select Date' | translate}}</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 mb-3 mt-3\" *ngFor=\"let agent of agents; let k = index;trackBy:trackByAgentFn\">\n        <div class=\"tab-main-outer\">\n          <div class=\"tab-main_wrapper d-flex align-items-center justify-content-between\">\n            <div class=\"tab-outer\">\n              <div class=\"tab-main-outer-img\">\n                <img [src]=\"agent?.cbl_user?.image\" onError=\"src = './assets/images/placeholder_image.svg';\">\n              </div>\n              <div class=\"tab-main-outer-data\">\n                <h1 [style.color]=\"style.primaryColor\">{{agent?.cbl_user?.name}}\n                  <span *ngIf=\"agent.is_instant_available == 1\" class=\"logged-in\">●</span></h1>\n                <!-- <p>Email: {{agent?.cbl_user?.email}}</p> -->\n                <p *ngIf=\"settings?.hide_agent_details == 0\" [style.color]=\"style.defaultColor\">\n                  {{'Phone Number:' | translate}} {{agent?.cbl_user?.phone_number}}\n                </p>\n                <p *ngIf=\"settings?.hide_agent_details == 0\" [style.color]=\"style.defaultColor\">\n                  {{'Occupation:' | translate}} {{agent?.cbl_user?.occupation}}</p>\n                <span *ngIf=\"settings?.enable_freelancer_flow\">\n                  <!-- <p [style.color]=\"style.defaultColor\" *ngIf=\"agent?.fixed_price\"><b>{{'Price:' | translate}}\n                      {{agent?.fixed_price}}</b></p> -->\n                  <p [style.color]=\"style.defaultColor\" *ngIf=\"agent?.agent_service_price\">\n                    <b>{{'Total Price:' | translate}} {{curreny}}{{agent?.agent_service_price}}</b></p>\n                    <p [style.color]=\"style.defaultColor\" *ngIf=\"agent?.description\">\n                      <b>{{'Description:' | translate}}</b> {{agent?.description}}</p>\n                  <!-- <p [style.color]=\"style.defaultColor\"><b>{{'Sub Total Price:' | translate}}\n                      {{agent?.fixed_price+agent?.agent_service_price}}</b></p> -->\n                </span>\n              </div>\n            </div>\n\n            <div class=\"outer-btn\">\n              <button class=\"tab-btn\" data-toggle=\"collapse\" [attr.data-target]=\"'#'+k\"\n                [ngStyle]=\"{'backgroundColor': style.primaryColor, 'color': '#ffffff', 'borderColor': style.primaryColor}\"\n                (click)=\"getAvailability(agent)\">\n                <div class=\"btn-data\">\n                  <!-- <i class=\"fa fa-bolt\" aria-hidden=\"true\"></i>{{'Slot Selection' | translate}}  -->\n                  <i class=\"fa fa-bolt\" aria-hidden=\"true\"></i>{{'View Slots' | translate}}\n                </div>\n              </button>\n              <br>\n              <button class=\"tab-btn mt-3 p-2\" (click)=\"checkSlot(agent)\"\n                [ngStyle]=\"{'backgroundColor': style.primaryColor, 'color': '#ffffff', 'borderColor': style.primaryColor}\">\n                {{ 'Select' | translate}} {{'agent' | localization | translate}}</button>\n\n              <button *ngIf=\"checkIfBioFound(agent)\" class=\"tab-btn mt-6 p-2 ml-2\" (click)=\"viewBoi(agent)\"\n                [ngStyle]=\"{'backgroundColor': style.primaryColor, 'color': '#ffffff', 'borderColor': style.primaryColor}\">\n                {{ 'View/Listen Bio' | translate }}</button>\n            </div>\n          </div>\n          <!--================start tab section =================-->\n\n          <section [id]=\"k\" [ngClass]=\"agent.cbl_user?.id === a_id ? 'collapse tabs show' : 'collapse tabs'\">\n\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-md-12\">\n                <nav>\n                  <button [style.color]=\"style.primaryColor\" class=\"fa fa-arrow-circle-left slide-arrow-left\"\n                    (click)=\"decrement()\" *ngIf=\"datesArr.length > 5\" [disabled]=\"dateCount <= 5\">\n                  </button>\n\n                  <div class=\"nav nav-tabs nav-fill\" id=\"nav-tab\" role=\"tablist\">\n                    <a class=\"nav-item nav-link active cursor\" [id]=\"i\" data-toggle=\"tab\" role=\"tab\"\n                      (click)=\"slotTime = ''; getSlots(date, agent)\" aria-controls=\"nav-home\" aria-selected=\"true\"\n                      [ngStyle]=\"selectedDate === date ? {'color': style.primaryColor, 'borderBottomColor': style.primaryColor} : ''\"\n                      *ngFor=\"let date of getDates(); let i = index;trackBy:trackByDateFn\">{{date | date}}</a>\n                  </div>\n                  <button [style.color]=\"style.primaryColor\" class=\"fa fa-arrow-circle-right slide-arrow-right\"\n                    (click)=\"increment()\" [disabled]=\"dateCount >= datesArr.length\"\n                    *ngIf=\"datesArr.length > 5\"></button>\n                </nav>\n\n                <div class=\"tab-content pt-3 pb-3 px-sm-0\" id=\"nav-tabContent\">\n                  <div class=\"tab-pane fade show active\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\n\n                    <div class=\"tab-content\" *ngIf=\"slotData.Morning.length\">\n                      <div class=\"tabsleft-content\"> <i class=\"fa fa-sun-o\"\n                          aria-hidden=\"true\"></i><span>{{'Morning' | translate}}</span>\n                      </div>\n                      <div class=\"tabsright-content\" [style.color]=\"style.defaultColor\">\n                        <div class=\"tabsright-content-data\"\n                          *ngFor=\"let slot of slotData.Morning; let i = index;trackBy:trackByMorningFn\"\n                          (click)=\"selectSlot(slot)\">\n                          <span (mouseover)=\"hover.index = i; hover.tab = 'Morning'\"\n                            [ngStyle]=\"(hover.index === i && hover.tab === 'Morning') || slotTime === slot ? {'backgroundColor': style.primaryColor, color: '#ffffff', 'borderColor': style.primaryColor} : ''\"\n                            (mouseleave)=\"hover.index = -1; hover.tab = null\">{{slot}}</span>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"tab-content bt\" *ngIf=\"slotData.Afternoon.length\">\n                      <div class=\"tabsleft-content\"> <i class=\"fa fa-sun-o\"\n                          aria-hidden=\"true\"></i><span>{{'Afternoon' | translate}}</span>\n                      </div>\n                      <div class=\"tabsright-content\" [style.color]=\"style.defaultColor\">\n                        <div class=\"tabsright-content-data\"\n                          *ngFor=\"let slot of slotData.Afternoon; let i = index;trackBy:trackByAfternoonFn;\"\n                          (click)=\"selectSlot(slot)\">\n                          <span (mouseover)=\"hover.index = i; hover.tab = 'Afternoon'\"\n                            [ngStyle]=\"(hover?.index === i && hover?.tab === 'Afternoon') || slotTime === slot ? {'backgroundColor': style.primaryColor, color: '#ffffff', 'borderColor': style.primaryColor} : ''\"\n                            (mouseleave)=\"hover.index = -1; hover.tab = null\">{{slot}}</span>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"tab-content bt\" *ngIf=\"slotData.Evening.length\">\n                      <div class=\"tabsleft-content\"> <i class=\"fa fa-moon-o\"\n                          aria-hidden=\"true\"></i><span>{{'Evening' | translate}}</span>\n                      </div>\n                      <div class=\"tabsright-content\" [style.color]=\"style.defaultColor\">\n                        <div class=\"tabsright-content-data\"\n                          *ngFor=\"let slot of slotData.Evening; let i = index;trackBy:trackByEveningFn\"\n                          (click)=\"selectSlot(slot)\">\n                          <span (mouseover)=\"hover.index = i; hover.tab = 'Evening'\"\n                            [ngStyle]=\"(hover.index === i && hover.tab === 'Evening') || slotTime === slot ? {'backgroundColor': style.primaryColor, color: '#ffffff', 'borderColor': style.primaryColor} : ''\"\n                            (mouseleave)=\"hover.index = -1; hover.tab = null\">{{slot}}</span>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"tab-content bt\" *ngIf=\"slotData.Night.length\">\n                      <div class=\"tabsleft-content\"> <i class=\"fa fa-moon-o\"\n                          aria-hidden=\"true\"></i><span>{{'Night' | translate}}</span>\n                      </div>\n                      <div class=\"tabsright-content\" [style.color]=\"style.defaultColor\">\n                        <div class=\"tabsright-content-data\"\n                          *ngFor=\"let slot of slotData.Night; let i = index;trackBy:trackBySlotFn\"\n                          (click)=\"selectSlot(slot)\">\n                          <span (mouseover)=\"hover.index = i; hover.tab = 'Night'\"\n                            [ngStyle]=\"(hover.index === i && hover.tab === 'Night') || slotTime === slot ? {'backgroundColor': style.primaryColor, color: '#ffffff', 'borderColor': style.primaryColor} : ''\"\n                            (mouseleave)=\"hover.index = -1; hover.tab = null\">{{slot}}</span>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                </div>\n\n                <div class=\"no-data\"\n                  *ngIf=\"!slotData.Morning.length && !slotData.Afternoon.length && !slotData.Evening.length && !slotData.Night.length && noData\">\n                  <h1 [style.color]=\"style.defaultColor\">{{'No Slots Found' | translate}}</h1>\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <!-- <button class=\"book-btn float-right\" [ngClass]=\"!selectedSlot ? 'disabled' : ''\" [disabled]=\"!selectedSlot\" (click)=\"generateOrder(agent?.cbl_user?.id)\" [ngStyle]=\"{'backgroundColor': style.primaryColor, 'color': '#ffffff', 'borderColor': style.primaryColor}\">\n                  {{'Done' | translate}}\n                </button> -->\n              </div>\n            </div>\n          </section>\n          <!--================end tab section =================-->\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"!agents.length && noAgent\" class=\"no-data\">\n      <h1 [style.color]=\"style.defaultColor\">{{'No' | translate}} {{'agent' | localization}} {{'Found' | translate}}\n      </h1>\n      <p [style.color]=\"style.secondaryColor\" class=\"cursor\">{{'Try selecting different date-time' | translate}}</p>\n    </div>\n\n  </div>\n</section>\n<!--================ end banner tab section =================-->\n\n<app-cart-date-time *ngIf=\"cartDateTimeData.is_open\" [dateTimeData]=\"cartDateTimeData\"></app-cart-date-time>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/cart-detail/cart.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/cart-detail/cart.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesCartCartDetailCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!----------------------------page loader------------------------------------>\n<app-processing-indicator *ngIf=\"isLoading\"\n  [loaderImage]=\"settings?.placeholder.order_loader.web || '/assets/loader-images/' + settings?.app_type + '.gif'\">\n</app-processing-indicator>\n\n<!--================ Start Cart Page Detail ================-->\n<div class=\"cart_page-detail\">\n  <div class=\"container\" [style.width]=\"settings?.app_type == 2 && settings?.selected_template == 2 ? '80%' : '100%'\">\n    <div class=\"row\">\n      <div class=\"col-md-12\" *ngIf=\"settings?.app_type == 2 && settings?.selected_template == 2\">\n        <h3>My Cart<span [style.color]=\"style.baseColor\" *ngIf=\"totalItems > 0 && cart.length > 0\"\n            class=\"\">({{cart.length}})</span></h3>\n      </div>\n      <div [ngClass]=\"totalItems > 0 && cart.length > 0 ? 'col-md-8' : 'col-md-12'\" class=\"cart-products\">\n        <!-- class=\"cart-product-inner\" -->\n        <div [style.border-color]=\"style.secondaryColor\"\n          [ngClass]=\"settings?.app_type == 2 && settings?.selected_template == 2 ? '' :'cart-product-inner'\">\n          <app-cart-products-list *ngIf=\"settings\" [style]=\"style\" [settings]=\"settings\" [darkTheme]=\"isDarkTheme\"\n            [products]=\"cart\" [totalItems]=\"totalItems\">\n          </app-cart-products-list>\n        </div>\n\n        <app-questions-list *ngIf=\"settings?.app_type == 8  && questions && questions.length && cart.length\"\n          [questions]=\"questions\" [cartPrice]=\"priceObj\" [style]=\"style\">\n        </app-questions-list>\n\n        <app-instructions *ngIf=\"settings?.order_instructions && show_instructions && cart.length\" [style]=\"style\"\n          [settings]=\"settings\" (instructionText)=\"instructionChange($event)\"></app-instructions>\n\n        <app-instructions *ngIf=\"settings?.extra_instructions && cart.length\" [title]=\"'Parking Instructions'\"\n          [style]=\"style\" [settings]=\"settings\" (instructionText)=\"parking_instruction = $event\"></app-instructions>\n\n        <app-instructions *ngIf=\"settings?.extra_instructions && cart.length\" [title]=\"'Area To Focus'\" [style]=\"style\"\n          [settings]=\"settings\" (instructionText)=\"area_to_focus = $event\"></app-instructions>\n      </div>\n\n      <div class=\"col-md-4\" *ngIf=\"totalItems > 0 && cart.length > 0\">\n        <div class=\"cart_slidebar\">\n          <app-referral *ngIf=\"settings?.referral_feature == 1 && loggedIn\" [style]=\"style\" [settings]=\"settings\"\n            (referralAmount)=\"referralAmountChange($event)\"></app-referral>\n\n          <app-loyalty-discount *ngIf=\"settings?.is_loyality_enable == 1 && loggedIn && priceObj.totalLoyaltyAmount > 0\"\n            [style]=\"style\" [settings]=\"settings\" [loyalty_amount]=\"priceObj.totalLoyaltyAmount\" [priceObj]=\"priceObj\"\n            [loyalty_points]=\"loyalty_points\" (loyaltylAmount)=\"loyaltyAmountChange($event)\"></app-loyalty-discount>\n\n\n          <app-cart-price-detail *ngIf=\"settings\" [style]=\"style\" [settings]=\"settings\" [loggedIn]=\"loggedIn\"\n            [priceObj]=\"priceObj\" [rest_user_service_charges]=\"rest_user_service_charges\" [is_dinin]=\"book_dining\"\n            [delivery_charge]=\"book_dining==0?delivery_charge:0\" [selfPickup]=\"self_pickup\"\n            (priceDetail)=\"setPrice($event)\" [questions]=\"questions\" [walletAmount]=\"walletAmount\"\n            [applyWalletDiscount]=\"applyWalletDiscount\" [activePlan]=\"activePlan\"\n            [table_booking_details]=\"table_booking_details\" [total_product_weight]=\"total_product_weight\"\n            [product_weight_list]=\"product_weight_list\" [is_out_network]='is_out_network'>\n          </app-cart-price-detail>\n\n          <div class=\"price_details\" *ngIf=\"showDeliveryOption && settings?.app_type == 1\"\n            [style.background-color]=\"style.cardBackgroundColor\" [style.border-color]=\"style.secondaryColor\">\n\n            <ul class=\"list-inline pt-2 self-pickup\" *ngIf=\"!settings?.dynamic_order_type_client_wise\">\n              <li class=\"list-inline-item\"\n                *ngIf=\"!is_after_table_booking && !appointmentOrderInCart && [0,2].includes(settings.is_pickup_order)\">\n                <button class=\"btn\"\n                  [ngStyle]=\"(delivery_opt == 1) ? saveBtn : {'color': style.primaryColor, 'backgroundColor': style.cardBackgroundColor, 'borderColor': style.primaryColor}\"\n                  (click)=\"onDelivery()\">{{'Delivery' | translate}}</button>\n              </li>\n              <li class=\"list-inline-item\" *ngIf=\"!is_after_table_booking && !is_out_network\">\n                <button class=\"btn\"\n                  [ngStyle]=\"self_pickup == 1 ? saveBtn : {'color': style.primaryColor, 'backgroundColor': style.cardBackgroundColor, 'borderColor': style.primaryColor}\"\n                  (click)=\"onSelfPickup()\">{{'selfpickup' | localization | translate}}</button>\n              </li>\n              <li\n                *ngIf=\"settings?.is_table_booking && !is_out_network && is_supplier_scheduling || is_after_table_booking\"\n                class=\"list-inline-item\">\n                <button class=\"btn\"\n                  [ngStyle]=\"book_dining == 1 ? saveBtn : {'color': style.primaryColor, 'backgroundColor': style.cardBackgroundColor, 'borderColor': style.primaryColor}\"\n                  (click)=\"onDining()\">{{'Book Dining' | translate}}</button>\n              </li>\n            </ul>\n\n            <ul class=\"list-inline pt-2 self-pickup\" *ngIf=\"settings?.dynamic_order_type_client_wise\">\n              <li class=\"list-inline-item\"\n                *ngIf=\"!is_after_table_booking && settings?.dynamic_order_type_client_wise_delivery && !appointmentOrderInCart\">\n                <button class=\"btn\"\n                  [ngStyle]=\"(delivery_opt == 1) ? saveBtn : {'color': style.primaryColor, 'backgroundColor': style.cardBackgroundColor, 'borderColor': style.primaryColor}\"\n                  (click)=\"onDelivery()\">{{'Delivery' | translate}}</button>\n              </li>\n              <li class=\"list-inline-item\"\n                *ngIf=\"!is_after_table_booking && settings?.dynamic_order_type_client_wise_pickup && !is_out_network\">\n                <button class=\"btn\"\n                  [ngStyle]=\"self_pickup == 1 ? saveBtn : {'color': style.primaryColor, 'backgroundColor': style.cardBackgroundColor, 'borderColor': style.primaryColor}\"\n                  (click)=\"onSelfPickup()\">{{'selfpickup' | localization | translate}}</button>\n              </li>\n              <li\n                *ngIf=\"settings?.is_table_booking && settings?.dynamic_order_type_client_wise_dinein  && !is_out_network && is_supplier_scheduling || is_after_table_booking\"\n                class=\"list-inline-item\">\n                <button class=\"btn\"\n                  [ngStyle]=\"book_dining == 1 ? saveBtn : {'color': style.primaryColor, 'backgroundColor': style.cardBackgroundColor, 'borderColor': style.primaryColor}\"\n                  (click)=\"onDining()\">{{'Book Dining' | translate}}</button>\n              </li>\n            </ul>\n\n          </div>\n\n\n\n          <div class=\"price_details\"\n            *ngIf=\"settings?.is_enable_delivery_type && delivery_opt && !is_own_delivery && (supplier_delivery_type_normal || supplier_delivery_type_express)\"\n            [style.background-color]=\"style.cardBackgroundColor\" [style.border-color]=\"style.secondaryColor\">\n            <ul class=\"list-inline pt-2 self-pickup\">\n              <li class=\"list-inline-item\" *ngIf=\"supplier_delivery_type_normal\">\n                <button class=\"btn\"\n                  [ngStyle]=\"(normal_delivery == 1) ? saveBtn : {'color': style.primaryColor, 'backgroundColor': style.cardBackgroundColor, 'borderColor': style.primaryColor}\"\n                  (click)=\"onSelectDeliveryType(0)\">{{'Normal Delivery' | translate}}</button>\n              </li>\n              <li class=\"list-inline-item\" *ngIf=\"supplier_delivery_type_express\">\n                <button class=\"btn\"\n                  [ngStyle]=\"(express_delivery == 1) ? saveBtn : {'color': style.primaryColor, 'backgroundColor': style.cardBackgroundColor, 'borderColor': style.primaryColor}\"\n                  (click)=\"onSelectDeliveryType(1)\">{{'Express Delivery' | translate}}</button>\n              </li>\n            </ul>\n          </div>\n          <div class=\"price_details\" *ngIf=\"settings?.is_enable_delivery_type && delivery_opt && !is_own_delivery\"\n            [style.background-color]=\"style.cardBackgroundColor\" [style.border-color]=\"style.secondaryColor\">\n            <ul class=\"list-inline pt-2 self-pickup\">\n              <li class=\"list-inline-item w-100\" *ngIf=\"normal_delivery && supplier_delivery_type_normal.buffer_time\">\n                {{'Expected Delivery Time'}}:&nbsp;<b>{{supplier_delivery_type_normal.buffer_time +\n                  supplier_delivery_time_duration.time}}&nbsp;{{ supplier_delivery_time_duration.time_unit}}</b><br />\n                <!-- Price:&nbsp;<b>{{supplier_delivery_type_normal.price}}</b> -->\n              </li>\n              <li class=\"list-inline-item w-100\" *ngIf=\"express_delivery && supplier_delivery_type_express.buffer_time\">\n                {{'Expected Delivery Time'}}:&nbsp;<b>{{supplier_delivery_type_express.buffer_time +\n                  supplier_delivery_time_duration.time}}&nbsp;{{ supplier_delivery_time_duration.time_unit}}</b><br />\n                <!-- Price:&nbsp;<b>{{supplier_delivery_type_express.price}}</b> -->\n              </li>\n            </ul>\n          </div>\n\n\n          <div class=\"price_details mb-3\"\n            *ngIf=\"cart?.length && settings?.enable_user_vehicle_number && self_pickup==1\">\n            <input type=\"text\" placeholder=\"Enter Vehicle No.(Optional)\" class=\"form-control\"\n              [(ngModel)]=\"vehicle_number\">\n          </div>\n          <div class=\"price_details row\"\n            *ngIf=\"settings?.enable_id_for_invoice_in_profile == 1 && web_user && web_user.id_for_invoice=== '' \">\n            <div class=\"col-sm-8\">\n              <input type=\"text\" placeholder=\"Enter No.for Invoice(Optional)\" #invoiceValue class=\"form-control\"\n                [(ngModel)]=\"id_for_invoice\">\n            </div>\n            <div class=\"col-sm-4\">\n              <button class=\"btn profile-submit-form mt-0\" (click)=\"onInvoiceUpdate(invoiceValue.value)\">Done</button>\n            </div>\n          </div>\n\n          <app-delivery-address-detail *ngIf=\"isCartCheck\" [isAddressHide]=\"book_dining || appointmentOrderInCart\"\n            [calc_distance]=\"calc_distance\" class=\"hide\" [style]=\"style\" [settings]=\"settings\"\n            [addAddressModel]=\"displayAddModal\" [cart]=\"cart\" [loggedInData]=\"currentUser\"\n            [class.show]=\"!pickUp_dateTime && self_pickup == 0\" (serviceCharge)=\"calculateServiceCharge($event)\"\n            (addressDetail)=\"setAddress($event)\">\n          </app-delivery-address-detail>\n\n          <app-cart-payment-mode\n            *ngIf=\"!payment_after_confirmation &&\n           !hidePaymentModeSelection && ((book_dining===0 && !is_after_table_booking) || settings?.table_book_mac_theme)\" [style]=\"style\"\n            [settings]=\"settings\" [selfPickup]=\"self_pickup\" [appointmentOrderInCart]=\"appointmentOrderInCart\"\n            [hidePaymentModeOption]=\"hidePaymentModeOption\" [walletAmount]=\"addressDetail?.wallet_amount\"\n            (paymentMode)=\"setPaymentType($event)\" (changeInRequest)=\"onChangeInRequest($event)\">\n          </app-cart-payment-mode>\n\n          <app-agent-tip [style]=\"style\" [settings]=\"settings\"\n            *ngIf=\"agent_tips.length && ['1','4'].includes(paymentType) && (settings?.app_type == 1 || settings?.agent_tip) && self_pickup == 0 && settings?.hide_agent_tip == 0 && book_dining===0 \"\n            [tips]=\"agent_tips\" (addedTip)=\"agentTipChange($event)\"></app-agent-tip>\n\n          <app-online-payment [settings]=\"settings\" [order]=\"paymentOrderModel\" *ngIf=\"isPayOnline\"\n            [geofencedGateways]=\"geofencedGateways\" (onError)=\"onPaymentError()\" (onClose)=\"isPayOnline = $event\"\n            (onSuccess)=\"onPaymentSuccess($event)\">\n          </app-online-payment>\n\n          <app-cart-image-upload\n            *ngIf=\"(settings?.cart_image_upload || settings?.product_prescription) && show_prescription\" [style]=\"style\"\n            [settings]=\"settings\" [loggedIn]=\"loggedIn\" (prescriptionImages)=\"prescriptionImagesCheck($event)\">\n          </app-cart-image-upload>\n\n          <app-table-details *ngIf=\"table_booking_details && is_after_table_booking\"\n            [tableDetails]=\"table_booking_details\" [style]=\"style\" [settings]=\"settings\"\n            (onRemoveTableBooking)=\"removeTableBookingRequest($event)\">\n          </app-table-details>\n\n\n          <div class=\"place_order mb-5\" *ngIf=\"cart?.length && \n          !is_after_table_booking  && book_dining==1 && settings?.by_pass_tables_selection=='0'\">\n            <input type=\"text\" placeholder=\"Enter table no.(Optional)\" class=\"form-control\" [(ngModel)]=\"manualTableNo\"\n              [appInputMaxLength]=\"4\">\n            <span class=\"verify-tbl\" (click)=\"verifyManualTableNo()\">Verfiy</span>\n          </div>\n\n\n          <div *ngIf=\"settings?.enable_cutlery_option\">\n            <input id=\"cutlry\" type=\"checkbox\" [(ngModel)]=\"is_cutlery_required\">\n            <span [ngStyle]=\"{color: style.primaryColor, 'font-size': '12px','margin-left':'1em'}\">\n              <span class=\"font-weight-bold\">\n                <label [for]=\"'cutlry'\">\n                  {{'Cutlery?' | translate}}</label>\n              </span>\n            </span>\n          </div>\n\n          <div *ngIf=\"settings?.enable_no_touch_delivery && delivery_opt==1\">\n            <input id=\"cutlry\" type=\"checkbox\" [(ngModel)]=\"no_touch_delivery\">\n            <span [ngStyle]=\"{color: style.primaryColor, 'font-size': '12px','margin-left':'1em'}\">\n              <span class=\"font-weight-bold\">\n                <label [for]=\"'cutlry'\">\n                  {{'No Touch Delivery?' | translate}}</label>\n              </span>\n            </span>\n          </div>\n\n\n          <div class=\"place_order mb-2\" *ngIf=\"cart?.length && \n          settings?.is_schdule_order == 1 && !scheduleOrderSlot && \n          !is_after_table_booking && is_supplier_scheduling\">\n            <button [ngStyle]=\"saveBtn\" (click)=\"openSchedulingModal()\">\n              {{ book_dining == 1 ? ('Book Table' | translate) : ('Schedule Order' | translate)}}</button>\n          </div>\n\n          <div class=\"place_order mb-2\" *ngIf=\"cart?.length && settings?.is_schdule_order == 1 && scheduleOrderSlot\">\n            <button [ngStyle]=\"saveBtn\" style=\"width: 48%;\" (click)=\"openSchedulingModal()\">Pick Another Slot</button>\n            <button [ngStyle]=\"saveBtn\" style=\"width: 48%; float: right;\" (click)=\"removeSlot()\">Remove Slot</button>\n          </div>\n\n\n          <!-- <div class=\"place_order mb-2\" *ngIf=\"cart?.length && \n          settings?.is_laundry_theme == 1 && !serviceDateTime\">\n            <button [ngStyle]=\"saveBtn\" (click)=\"onPlaceOrder()\">\n              {{ \"Choose Booking Date Slot\" | translate}}</button>\n          </div> -->\n\n          <div class=\"place_order mb-2\" *ngIf=\"cart?.length && settings?.is_laundry_theme == 1 && serviceDateTime\">\n            <button [ngStyle]=\"saveBtn\" style=\"width: 48%;\" (click)=\"pickOtherSlots()\">Pick Other Slots</button>\n            <button [ngStyle]=\"saveBtn\" style=\"width: 48%; float: right;\" (click)=\"removeSlot()\">Remove Slots</button>\n          </div>\n\n\n\n          <div class=\"place_order\"\n            *ngIf=\"cart?.length !== 0 && !isPayOnline && (paymentType != '1' || priceObj?.referral_amount >= priceObj?.netTotal)\">\n            <button [ngStyle]=\"saveBtn\" (click)=\"onPlaceOrder()\">\n              {{ is_agent && is_service ? (settings?.laundary_service_flow == 1 ? 'Standard Booking' : 'Book Now') :\n              ('place_order' | localization | translate) }}</button>\n          </div>\n          <div class=\"place_order\"\n            *ngIf=\"!isPayOnline && paymentType == '1' && priceObj?.referral_amount < priceObj?.netTotal\">\n            <button *ngIf=\"settings?.laundary_service_flow == 0\" [ngStyle]=\"saveBtn\" (click)=\"onPay('online')\">\n              {{ 'Pay' | translate }}\n              {{currency?currency: priceObj?.local_currency\n              }}{{(priceObj.displayNetTotal).toFixed(settings?.price_decimal_length)}}</button>\n            <button *ngIf=\"settings?.laundary_service_flow == 1\" [ngStyle]=\"saveBtn\" (click)=\"onPay('schedule')\">\n              Schedule Booking</button>\n          </div>\n\n          <div class=\"place_order\" style=\"margin-top: 20px;\"\n            *ngIf=\"cart?.length !== 0 && settings?.laundary_service_flow == 1\">\n            <button [ngStyle]=\"saveBtn\" (click)=\"bookServiceNow()\">\n              Urgent Booking</button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"remember mt-5\" *ngIf=\"settings?.things_to_remember && cart.length\">\n        <h4>{{'Things To Remember' | translate}}</h4>\n        <p [innerText]=\"settings?.things_to_remember\"></p>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<!-- Schedule order Modal -->\n<!-- <div class=\"modal fade\" id=\"scheduleDateModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"scheduleDateModalLabel\"\n  aria-hidden=\"true\" data-backdrop=\"static\">\n  <div class=\"modal-dialog modal-dialog-centered timemod\" role=\"document\">\n    <div class=\"modal-content\" style=\"text-align: center\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"scheduleDateModalLabel\" [style.color]=\"style.baseColor\">\n          {{ \"SCHEDULE ORDER\" | translate }}\n        </h5>\n      </div>\n      <div class=\"modal-body\">\n        <p-calendar [showTime]=\"true\" [(ngModel)]=\"selectedScheduleDate\" [minDate]=\"min\" [maxDate]=\"scheduleMaxDate\"\n          selectionMode=\"multiple\" [inline]=\"true\" [readonlyInput]=\"true\"></p-calendar>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" (click)=\"toOrderDetail()\" [ngStyle]=\"{\n            backgroundColor: '#ffffff',\n            borderColor: style.secondaryColor,\n            color: style.secondaryColor\n          }\" class=\"btn\" data-dismiss=\"modal\" aria-label=\"Close\">\n          {{ \"Skip\" | translate }}\n        </button>\n        <button type=\"button\" (click)=\"scheduleOrder()\"\n          [disabled]=\"!selectedScheduleDate || !selectedScheduleDate?.length\" [ngClass]=\"!selectedScheduleDate || !selectedScheduleDate?.length ? 'disabled' : ''\" \n          [ngStyle]=\"{backgroundColor: style.primaryColor, borderColor: style.primaryColor, color: '#ffffff'}\" class=\"btn\" data-dismiss=\"modal\" aria-label=\"Close\">\n          {{ \"Done\" | translate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n<app-cart-date-time *ngIf=\"cartDateTimeData?.is_open\" [dateTimeData]=\"cartDateTimeData\" (payNow)=\"setDateTime($event)\">\n</app-cart-date-time>\n\n<app-cart-schedule-time [style]=\"style\" [settings]=\"settings\" [table_flow]=\"0\" *ngIf=\"showScheduleTime\"\n  [schedulingData]=\"schedulingData\" (onScheduling)=\"onSchedulingProcess($event)\"\n  (onClose)=\"this.showScheduleTime = false\"></app-cart-schedule-time>\n\n\n\n<app-declaration-form *ngIf=\"is_order_try\" [style]=\"style\" (onCheckDeclaration)=\"onCheckDeclaration($event)\"\n  (onClose)=\"onCloseDeclaration($event)\">\n</app-declaration-form>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/agent-tip/agent-tip.component.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/agent-tip/agent-tip.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesCartComponentsAgentTipAgentTipComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"price_details\"\n    [ngStyle]=\"{'background-color': style.cardBackgroundColor, 'border-color': style.secondaryColor }\">\n\n    <div class=\"tips\">\n        <div class=\"top\">\n            <div class=\"right\" *ngIf=\"total_tip\">\n                <p [style.color]=\"style?.baseColor\">{{currency}}{{total_tip}}</p>\n                <a [style.color]=\"style?.primaryColor\" (click)=\"removeTip()\">Clear</a>\n            </div>\n            <h3 [style.color]=\"style?.baseColor\">Add a {{'tip' | localization}} for your {{'agent' | localization}}</h3>\n            <small [style.color]=\"style?.baseColor\">{{'The entire amount will be transferred to the' | translate}}\n                {{'agent' | localization}}</small>\n        </div>\n\n        <ul>\n            <li [ngStyle]=\"selectedTip == tip ? {'color': '#ffffff', 'background-color': style?.primaryColor, 'border-color': style?.primaryColor } : {'color': style?.primaryColor, 'border-color': style?.primaryColor }\"\n                *ngFor=\"let tip of tips;trackBy:trackByAfternoonFn\" (click)=\"addTip(tip)\">\n                <span *ngIf=\"settings?.agentTipPercentage == 0\">+ {{currency}}{{tip}}</span>\n                <span *ngIf=\"settings?.agentTipPercentage == 1\">{{tip}}%</span>\n            </li>\n        </ul>\n\n        <div *ngIf=\"settings?.agentTipPercentage == 1\" class=\"tip-percent\">\n            <div class=\"or\">OR</div>\n\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" appAmount [appInputMaxLength]=\"6\" placeholder=\"Enter Tip\" [(ngModel)]=\"total_tip\">\n                <div class=\"input-group-append\">\n                    <span class=\"input-group-text cursor\" [ngStyle]=\"{'color': '#ffffff', 'background-color': style?.primaryColor, 'border-color': style?.primaryColor }\" (click)=\"addCustomTip()\" id=\"basic-addon2\">Add {{'tip' | localization}}</span>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-gift-cards/cart-gift-cards.component.html":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-gift-cards/cart-gift-cards.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesCartComponentsCartGiftCardsCartGiftCardsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"gift-cards container\">\n    <p class=\"d-inline-block\"> {{'Gift Cards' | translate}}</p>\n    <a *ngIf=\"priceObj.gift && priceObj.gift.id\" class=\"d-inline-block float-right text-danger\"\n        (click)=\"removeGiftCard()\">{{'Remove' | translate}}</a>\n    <div class=\"row\">\n        <div class=\"col\" *ngIf=\"!giftList.length\">\n            <h5 class=\"text-center\">{{'Gift Card Not Found' | translate}}</h5>\n        </div>\n        <div class=\"col-3\" *ngFor=\"let gift of giftList;trackBy:trackByGiftFn\">\n            <h6 [class.active]=\"gift.id == priceObj?.gift?.id\" (click)=\"onGiftCardSelect(gift)\">\n                {{gift.gift_name}}</h6>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-image-upload/cart-image-upload.component.html":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-image-upload/cart-image-upload.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesCartComponentsCartImageUploadCartImageUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"price_details\"\n    [ngStyle]=\"{'background-color': style.cardBackgroundColor, 'border-color': style.secondaryColor }\">\n\n    <div class=\"cart-image-upload\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"add-image image\" *ngIf=\"!loading\" (click)=\"fileInput.click()\">\n                    <img src=\"/assets/images/add.png\">\n                    <input #fileInput type=\"file\" accept=\"image/*\" (change)=\"onImageSelect($event)\">\n                </div>\n                <div class=\"spinner-imaeg\" *ngIf=\"loading\">\n                    <img src=\"/assets/images/spinner.svg\">\n                </div>\n            </div>\n\n            <div class=\"col-md-3\" *ngFor=\"let image of images; let i = index;trackBy:trackByImageFn\">\n                <div class=\"image\">\n                    <img [src]=\"image\" onError=\"src = './assets/images/placeholder_image.svg';\">\n                    <i class=\"remove fa fa-times-circle\" (click)=\"removeImage(i)\"></i>\n                </div>\n            </div>\n\n            <div *ngIf=\"!images.length\" class=\"col-md-9 count\">\n                <p [style.color]=\"style?.baseColor\">{{'select_prescription_to_upload' | localization}}</p>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-payment-mode/cart-payment-mode.component.html":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-payment-mode/cart-payment-mode.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesCartComponentsCartPaymentModeCartPaymentModeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"settings?.app_type == 2 && settings?.selected_template == 2; else default\">\n\n  <div class=\"price_details payment_method_outter theme1_custom_div\">\n    <h5 class=\"p-b-n\" [style.color]=\"style.baseColor\">\n      {{'payment' | localization}}\n    </h5>\n    <div class=\"address-detail payment_method_inner\">\n      <div class=\"payment_method_opt\">\n        <div *ngIf=\"settings.payment_method == '1' || settings.payment_method == '2'\">\n          <input [id]=\"'card'\" type=\"radio\" name=\"payment\" [value]=\"'1'\" [(ngModel)]=\"paymentType\"\n            (change)=\"paymentMode.emit(paymentType)\">\n          <label [style.color]=\"style.baseColor\" [for]=\"'card'\">{{'Online' | translate}}</label>\n        </div>\n        <div *ngIf=\"!settings.payment_method || settings.payment_method != '1'\">\n          <input [id]=\"'cash'\" type=\"radio\" (change)=\"paymentMode.emit(paymentType)\" name=\"payment\" [value]=\"'0'\"\n            [(ngModel)]=\"paymentType\" />\n          <label *ngIf=\"selfPickup == 1 && !hidePaymentModeOption\" [style.color]=\"style.baseColor\" [for]=\"'cash'\">\n            {{'cash_on_pickup' | localization}}</label>\n          <label *ngIf=\"selfPickup != 1 && !hidePaymentModeOption\" [style.color]=\"style.baseColor\" [for]=\"'cash'\">\n            {{'cod' | localization | translate}}</label>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #default>\n  <div class=\"price_details payment_method_outter\"\n    [ngStyle]=\"{'background-color': style.cardBackgroundColor, 'border-color': style.secondaryColor}\">\n    <h5 [style.color]=\"style.baseColor\">\n      {{(('payment' | localization) + \" Method\") | translate }}\n    </h5>\n    <div class=\"address-detail payment_method_inner\">\n      <div class=\"payment_method_opt\">\n        <div *ngIf=\"settings.skip_payment_option ==1\">\n          <input [id]=\"'skip'\" type=\"checkbox\" name=\"skip\" (click)=\"skipPayment(isSkip ? false : true)\"\n            [checked]=\"isSkip\">\n          <label [style.color]=\"style.baseColor\" class=\"skipPayment\" [for]=\"'skip'\">{{'Skip' | translate}} {{'Payment\n            Option' | translate}}</label>\n        </div>\n        <div *ngIf=\"(settings.payment_method == '1' || settings.payment_method == '2')  && !isSkip\">\n          <input [id]=\"'card'\" type=\"radio\" name=\"payment\" [value]=\"'1'\" [(ngModel)]=\"paymentType\"\n            (change)=\"paymentMode.emit(paymentType)\">\n          <label [style.color]=\"style.baseColor\" [for]=\"'card'\">{{'Online' | translate}}</label>\n        </div>\n        <div *ngIf=\"(!settings.payment_method || settings.payment_method != '1')  && !isSkip\">\n          <input [id]=\"'cash'\" type=\"radio\" (change)=\"paymentMode.emit(paymentType)\" name=\"payment\" [value]=\"'0'\"\n            [(ngModel)]=\"paymentType\" />\n          <label *ngIf=\"selfPickup == 1 && !hidePaymentModeOption\" [style.color]=\"style.baseColor\" [for]=\"'cash'\">\n            {{(appointmentOrderInCart?'cash_on_appointment': 'cash_on_pickup') | localization}}\n          </label>\n          <label *ngIf=\"selfPickup != 1 && !hidePaymentModeOption\" [style.color]=\"style.baseColor\" [for]=\"'cash'\">\n            {{'cod' | localization | translate}}</label>\n        </div>\n        <div *ngIf=\"(settings.wallet_module == 1) && !isSkip\">\n          <input [id]=\"'wallet'\" type=\"radio\" name=\"payment\" [value]=\"'4'\" [(ngModel)]=\"paymentType\"\n            (change)=\"paymentMode.emit(paymentType)\">\n          <label [style.color]=\"style.baseColor\" [for]=\"'wallet'\">{{'Wallet' | translate}} ( {{currency}}\n            {{walletAmount || 0}})</label>\n          <span class=\"float-right cursor\" [ngStyle]=\"{color: style.primaryColor}\"\n            [routerLink]=\"['/', 'account','my-wallet']\" [queryParams]=\"{'from_cart': 1}\">{{'Add Amount'}}</span>\n          <p [ngStyle]=\"{color: style.primaryColor, 'font-size': '12px'}\"\n            *ngIf=\"(settings.payment_through_wallet_discount>0)    && !isSkip\">Pay by wallet, and you will get <span\n              class=\"font-weight-bold\">\n              {{settings.payment_through_wallet_discount}}%\n            </span> discount!</p>\n        </div>\n        <div *ngIf=\"settings?.is_coin_exchange == 1 && paymentType==='0'\" [ngStyle]=\"{'display':'flex'}\">\n          <input id=\"changeIn\" type=\"checkbox\" (change)=\"changeInRequest.emit($event.currentTarget.checked)\">\n          <span [ngStyle]=\"{color: style.primaryColor, 'font-size': '12px','margin-left':'1em'}\">\n            <span class=\"font-weight-bold\">\n              <label [for]=\"'changeIn'\">\n                {{'Request for change in money?' | translate}}</label>\n            </span>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-price-detail/cart-price-detail.component.html":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-price-detail/cart-price-detail.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesCartComponentsCartPriceDetailCartPriceDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"settings?.app_type == 2 && settings?.selected_template == 2; else default\">\n\n    <div class=\"price_details theme1_custom_div\" *ngIf=\"loggedIn && settings.gift_card == 1\"\n        [ngStyle]=\"{'background-color': style.cardBackgroundColor, 'border-color': style.secondaryColor }\">\n        <app-cart-gift-cards (onSelect)=\"onGiftCardSelect($event)\" (onRemove)=\"onGiftCardRemove()\"\n            [priceObj]=\"priceObj\">\n        </app-cart-gift-cards>\n    </div>\n\n    <div class=\"price_details theme1_custom_div\"\n        [ngStyle]=\"{'background-color': style.cardBackgroundColor, 'border-color': style.secondaryColor }\">\n\n        <h5 class=\"cstm-border\" [style.color]=\"style.baseColor\">\n            {{ \"Order Details\" | translate }}\n            <p class=\"m-b-n promo_label\" *ngIf=\"!priceObj?.discount && !is_voucher_applied\">\n                <span>Apply Coupon</span>\n                <a href=\"#promoCode\" (click)=\"promoCode = ''\" data-toggle=\"collapse\"\n                    [style.color]=\"style.primaryColor\">{{ \"Add code\" | translate }}</a>\n            </p>\n            <p class=\"m-b-n promo_label\" *ngIf=\"priceObj?.discount || is_voucher_applied\">\n                <span class=\"uppercase\">{{promoCode}}</span>\n                <a href=\"javascript:void(0)\" (click)=\"priceObj.discount = 0; applyDiscount()\"\n                    [style.color]=\"style.primaryColor\">{{ \"Remove code\" | translate }}</a>\n            </p>\n            <div id=\"promoCode\" #closePromoCode class=\"promo-form collapse\">\n                <input [(ngModel)]=\"promoCode\" (keypress)=\"restrictSpace($event)\" class=\"form-control\" type=\"text\"\n                    placeholder=\"{{ 'Enter Promo Code' | translate }}\" />\n                <button class=\"btn profile-submit-form ml-3\" [ngStyle]=\"saveBtn\" type=\"button\"\n                    (click)=\"submitPromoCode()\">\n                    {{ \"Apply\" | translate }}\n                </button>\n            </div>\n\n        </h5>\n\n        <ul [style.color]=\"style.baseColor\" class=\"b-n\">\n            <li> {{ \"sub_total\" | localization | translate }} <span>{{ currency }}\n                    {{ ((priceObj?.amount*1)*\n                    selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length) }}</span>\n            </li>\n            <li *ngIf=\"priceObj?.discount > 0\"> {{ \"Discount\" | translate }} <small class=\"uppercase\"> -\n                    ({{ promoCode || this.priceObj.gift.gift_name}})</small>\n                <span> - {{ currency }} {{ priceObj?.discount.toFixed(settings?.price_decimal_length) }}</span>\n            </li>\n            <!-- <li>{{'Total' | translate}} <span>{{currency}} {{priceObj?.subTotal}}</span></li> -->\n            <li *ngIf=\"(selfPickup != 1 && settings?.app_type != 8 && priceObj?.deliveryCharges && is_dinin==0)\">\n                {{ \"Delivery Charges\" | translate }}\n                <span>{{ currency }}\n                    {{ deliveryType == 1 ? (((priceObj?.deliveryCharges*1)*selected_currency?.conversion_rate) +\n                    urgentPrice) :\n                    ((priceObj?.deliveryCharges*1)*selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)\n                    }}</span>\n            </li>\n            <li *ngIf=\"settings?.app_type == 8\">{{ \"Addon Charges\" | translate }} <span>{{ currency }}\n                    {{ priceObj?.questionPrice.toFixed(settings?.price_decimal_length) }}</span> </li>\n            <li *ngIf=\"settings?.disable_tax == 0\">{{ 'tax' | localization | translate }} <span>{{ currency }}\n                    {{\n                    ((priceObj?.handingCharges*1)*selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)\n                    }}</span>\n            </li>\n            <li *ngIf=\"priceObj?.agent_tip\">{{'agent' | localization}} {{'tip' | localization}} <span>{{ currency }}\n                    {{ priceObj?.agent_tip.toFixed(settings?.price_decimal_length) }}</span> </li>\n            <li *ngIf=\"priceObj?.referral_amount\">Referral Discount <span>- {{ currency }}\n                    {{ (priceObj?.referral_amount > priceObj?.netTotal ? priceObj?.netTotal :\n                    priceObj?.referral_amount).toFixed(settings?.price_decimal_length) }}</span>\n            </li>\n            <li *ngIf=\"priceObj?.slot_price && settings?.is_schdule_order == 1\">Slot Price <span>{{ currency }}\n                    {{ (priceObj?.slot_price).toFixed(settings?.price_decimal_length) }}</span>\n            </li>\n            <li *ngIf=\"settings?.supplier_service_fee == 1\">{{'supplier_service_fee' | localization | translate}}\n                <span>{{ currency }}\n                    {{\n                    ((priceObj.serviceCharge*1)*selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)\n                    }}</span>\n            </li>\n            <li *ngIf=\"priceObj?.appliedLoyaltyAmount || priceObj?.productLoyaltyDiscountAmount\">Loyalty Discount\n                <span>- {{ currency }}\n                    {{ (priceObj?.appliedLoyaltyAmount +\n                    priceObj.productLoyaltyDiscountAmount).toFixed(settings?.price_decimal_length) }}</span>\n            </li>\n        </ul>\n        <h6 [style.color]=\"style.baseColor\"> {{ \"Net Total\" | translate }}\n            <!-- <span *ngIf=\"!priceObj?.referral_amount\">{{ currency }} {{ priceObj?.netTotal.toFixed(2) }}</span> -->\n            <span [style.color]=\"style.baseColor\">{{ currency }}\n                {{ (netAmount).toFixed(settings?.price_decimal_length) }}</span>\n        </h6>\n    </div>\n</ng-container>\n\n<ng-template #default>\n\n    <div class=\"price_details\" *ngIf=\"loggedIn && settings.gift_card == 1\"\n        [ngStyle]=\"{'background-color': style.cardBackgroundColor, 'border-color': style.secondaryColor }\">\n        <app-cart-gift-cards (onSelect)=\"onGiftCardSelect($event)\" (onRemove)=\"onGiftCardRemove()\"\n            [priceObj]=\"priceObj\">\n        </app-cart-gift-cards>\n    </div>\n\n    <div class=\"price_details\"\n        [ngStyle]=\"{'background-color': style.cardBackgroundColor, 'border-color': style.secondaryColor }\">\n        <h5 [style.color]=\"style.baseColor\" style=\"margin-bottom: 15px;\">\n            {{ \"Price Details\" | translate }}\n            <a href=\"#promoCode\" *ngIf=\"!priceObj?.discount && !is_voucher_applied\" (click)=\"promoCode = ''\"\n                data-toggle=\"collapse\" [style.color]=\"style.primaryColor\">{{ \"Apply Promo code\" | translate }}</a>\n            <a href=\"javascript:void(0)\" *ngIf=\"priceObj?.discount || is_voucher_applied\"\n                (click)=\"priceObj.discount = 0; applyDiscount()\" [style.color]=\"style.primaryColor\">{{ \"Remove Promo\n                code\" | translate }}</a>\n\n            <div class=\"show-promo-code\">\n                <div id=\"promoCode\" #closePromoCode class=\"promo-form collapse\">\n                    <input [(ngModel)]=\"promoCode\" (keypress)=\"restrictSpace($event)\" class=\"form-control\" type=\"text\"\n                        placeholder=\"{{ 'Enter Promo Code' | translate }}\" />\n                    <button class=\"btn profile-submit-form ml-3\" [ngStyle]=\"saveBtn\" type=\"button\"\n                        (click)=\"submitPromoCode()\">\n                        {{ \"Apply\" | translate }}\n                    </button>\n                    <br />\n                    <a *ngIf=\"settings?.enable_promo_code_list == 1 || activePlan\" class=\"p-1 ml-3 p-code-btn\"\n                        [ngStyle]=\"saveBtn\" type=\"button\" (click)=\"openPromoCodeList()\">\n                        {{ \"Promo Codes\" | translate }}\n                    </a>\n                </div>\n            </div>\n        </h5>\n\n        <ul [style.color]=\"style.baseColor\">\n            <li> {{ \"sub_total\" | localization | translate }} <span>{{ currency }}\n                    {{ ((priceObj?.amount*1)*\n                    selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length) }}</span>\n            </li>\n            <li *ngIf=\"priceObj?.discount > 0\"> {{ \"Discount\" | translate }} <small class=\"uppercase\"> -\n                    ({{ promoCode || this.priceObj.gift.gift_name}})</small>\n                <span> - {{ currency }} {{ priceObj?.discount.toFixed(settings?.price_decimal_length) }}</span>\n            </li>\n            <li *ngIf=\"priceObj?.walletDiscountAmount > 0\"> {{ \"Wallet Discount\" | translate }}\n                <span> - {{ currency }}\n                    {{ priceObj?.walletDiscountAmount.toFixed(settings?.price_decimal_length) }}</span>\n            </li>\n            <!-- <li>{{'Total' | translate}} <span>{{currency}} {{priceObj?.subTotal}}</span></li> -->\n            <li *ngIf=\"(selfPickup != 1 && settings?.app_type != 8 && priceObj?.deliveryCharges && is_dinin==0)\">\n                {{ \"Delivery Charges\" | translate }}\n                <span>{{ currency }}\n                    {{ deliveryType == 1 ? (((priceObj?.deliveryCharges*1)*selected_currency?.conversion_rate) +\n                    urgentPrice) :\n                    ((priceObj?.deliveryCharges*1)*selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)\n                    }}</span>\n            </li>\n            <li *ngIf=\"settings?.app_type == 8\">{{ \"Addon Charges\" | translate }} <span>{{ currency }}\n                    {{ priceObj?.questionPrice.toFixed(settings?.price_decimal_length) }}</span> </li>\n            <li *ngIf=\"settings?.disable_tax == 0\">{{ \"tax\" | localization | translate }} <span>{{ currency }}\n                    {{\n                    ((priceObj?.handingCharges*1)*selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)\n                    }}</span>\n            </li>\n            <li *ngIf=\"priceObj?.agent_tip\">{{'agent' | localization}} {{'tip' | localization}} <span>{{ currency }}\n                    {{ priceObj?.agent_tip.toFixed(settings?.price_decimal_length) }}</span> </li>\n            <li *ngIf=\"priceObj?.referral_amount\">{{'Referral Discount' | translate}} <span>- {{ currency }}\n                    {{ (priceObj?.referral_amount > priceObj?.netTotal ? priceObj?.netTotal :\n                    priceObj?.referral_amount).toFixed(settings?.price_decimal_length) }}</span>\n            </li>\n            <li *ngIf=\"priceObj?.slot_price && settings?.is_schdule_order == 1\">Slot Price <span>{{ currency }}\n                    {{ (priceObj?.slot_price).toFixed(settings?.price_decimal_length) }}</span>\n            </li>\n            <li *ngIf=\"is_dinin==1 && settings?.is_dinin == 1 && priceObj?.slot_price>0\">Slot\n                Price <span>{{ currency }}\n                    {{ (priceObj?.slot_price).toFixed(settings?.price_decimal_length) }}</span>\n            </li>\n\n            <li *ngIf=\"settings?.supplier_service_fee == 1\">{{'supplier_service_fee' | localization | translate}}\n                <span>{{ currency }}\n                    {{\n                    ((priceObj.serviceCharge*1)*selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)\n                    }}</span>\n            </li>\n            <li\n                *ngIf=\"(priceObj?.appliedLoyaltyAmount || priceObj?.productLoyaltyDiscountAmount) && !settings.loyality_discount_on_product_listing\">\n                Loyalty Discount\n                <span>- {{ currency }}\n                    {{ (priceObj?.appliedLoyaltyAmount +\n                    priceObj.productLoyaltyDiscountAmount).toFixed(settings?.price_decimal_length) }}</span>\n            </li>\n\n            <li\n                *ngIf=\"settings?.table_book_mac_theme == 1 && !!table_booking_details && table_booking_details.table_booking_price\">\n                {{'Table Booking Fee' | translate}}\n                <span>{{ currency }}\n                    {{\n                    ((table_booking_details.table_booking_price*1)*selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)\n                    }}</span>\n            </li>\n\n            <li\n                *ngIf=\"settings?.table_book_mac_theme == 1 && !!table_booking_details && table_booking_details.table_booking_price\">\n                {{'Table Booking Discount' | translate}}\n                <span>- {{ currency }}\n                    {{\n                    ((table_booking_details.table_booking_price*1)*selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)\n                    }}</span>\n            </li>\n        </ul>\n        <h6 [style.color]=\"style.baseColor\"> {{ \"Net Total\" | translate }}\n            <!-- <span *ngIf=\"!priceObj?.referral_amount\">{{ currency }} {{ priceObj?.netTotal.toFixed(2) }}</span> -->\n            <span [style.color]=\"style.baseColor\">{{ priceObj?.local_currency || currency }}\n                {{ ((priceObj.displayNetTotal*1)*\n                selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length) }}\n                <small *ngIf=\"settings.is_currency_exchange_rate == 1 && priceObj.currency_exchange_rate\">( XR:\n                    {{currency}} 1 = {{priceObj?.local_currency || currency }} {{priceObj?.currency_exchange_rate}} )\n                </small></span>\n        </h6>\n    </div>\n</ng-template>\n\n<!-- Voucher Modal -->\n<!-- <div id=\"promoCode\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog promo-modal-width\">\n        Modal content\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"></button>\n                <h4 class=\"modal-title\" [style.color]=\"style.defaultColor\">\n                    {{ \"Promo Code\" | translate }}\n                </h4>\n            </div>\n\n            <div class=\"modal-body\">\n                <div class=\"profile_form\">\n                    <div class=\"form-group\">\n                        <label>{{ \"Promo Code\" | translate }}</label>\n                        <input [(ngModel)]=\"promoCode\" (keypress)=\"restrictSpace($event)\" type=\"text\" placeholder=\"{{ 'Enter Promo Code' | translate }}\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn profile-submit-form ml-3\" [ngStyle]=\"saveBtn\" type=\"button\"\n                    (click)=\"submitPromoCode()\">\n                    {{ \"Apply\" | translate }}\n                </button>\n            </div>\n        </div>\n    </div>\n</div> -->\n\n<app-promo-code-list *ngIf=\"isPromoCodeList\" [style]=\"style\" [settings]=\"settings\" [dialogData]=\"supplier_ids\"\n    [hideBtns]=\"false\" (onItemSelect)=\"onItemSelectEvt($event)\">\n</app-promo-code-list>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-product/cart-product.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-product/cart-product.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesCartComponentsCartProductCartProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"settings?.app_type == 2 && settings?.selected_template == 2; else default\">\n    <ng-container *ngIf=\"!product.customization || !product.customization.length\">\n        <tbody [ngStyle]=\"{'border-color': style.secondaryColor}\">\n            <tr>\n                <td>\n                    <div class=\"p-dtl\">\n                        <img [src]=\"product?.image_path\" class=\"cart-product-img\"\n                            onError=\"src = './assets/images/placeholder_image.svg';\" />\n                        <span *ngIf=\"product?.isOutOfStock\" class=\"overlay-txt\">Out of stock</span>\n                        <h5 [style.color]=\"style.baseColor\">{{ product?.name }}\n                            <span *ngIf=\"settings?.is_single_vendor == 0\" [style.color]=\"style.primaryColor\">\n                                <a (click)=\"onSupplier(product?.supplier_id)\">{{ \"by\" | translate }}\n                                    {{ product?.supplier_name }}</a>\n                            </span>\n                        </h5>\n                        <div *ngIf=\"settings?.enable_in_out_network\">\n                            <p *ngIf=\"product?.product_reference_id\">\n                                {{'Product Ref Id' |translate}}:&nbsp;<b>{{product?.product_reference_id}}</b>\n                            </p>\n                            <p *ngIf=\"product?.product_owner_name\">\n                                {{'Product Owner Name' |translate}}:&nbsp;<b>{{product?.product_owner_name}}</b>\n                            </p>\n                            <p *ngIf=\"product?.product_dimensions\">\n                                {{'Product Dimensions' |translate}}:&nbsp;<b>{{product?.product_dimensions}}</b>\n                            </p>\n                            <p *ngIf=\"product?.product_upload_reciept\">\n                                {{'Product Receipt' |translate}}:&nbsp;\n                                <span class=\"image_view\" (click)=\"downloadReceipt(product?.product_upload_reciept)\">\n                                    <b>{{'View Receipt'}}</b>\n                                </span>\n                            </p>\n                        </div>\n                        <div *ngIf=\"product.cartVariants && product.cartVariants.length\">\n                            <div style=\"display: flex; word-break: break-word;\"\n                                *ngFor=\"let variant of product.cartVariants;trackBy:trackByCartVariantsFn\">\n                                <ng-template [ngIf]=\"variant.variant_type != 1\" [ngIfElse]=\"color\">\n                                    <p class=\"mb-0\" [style.color]=\"style.baseColor\">\n                                        {{variant?.variant_name}}:<span>{{variant?.variant_value}}</span></p>\n                                </ng-template>\n                                <ng-template #color>\n                                    <p class=\"mb-0\" [style.color]=\"style.baseColor\">{{variant?.variant_name}}:<span\n                                            class=\"cart-color-varient\"\n                                            [style.background-color]=\"variant?.variant_value\"></span>\n                                    </p>\n                                </ng-template>\n                            </div>\n                        </div>\n                    </div>\n\n                </td>\n                <td>\n                    <app-quantity-buttons *ngIf=\"product?.selectedQuantity && !product?.isOutOfStock\" [style]=\"style\"\n                        [settings]=\"settings\" [selectedQuantity]=\"product?.selectedQuantity\"\n                        [priceType]=\"product?.price_type\" [isProduct]=\"product?.is_product\" (onAdd)=\"increaseQuantity()\"\n                        (onRemove)=\"decreaseQuantity()\">\n                    </app-quantity-buttons>\n                    <!-- <input type=\"number\" min=\"1\" max=\"9\" step=\"1\" value=\"1\"> -->\n\n                </td>\n                <td>\n                    {{ currency }}\n                    {{ ((product?.fixed_price * 1)* selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length) }}\n                    <span *ngIf=\"product?.price_type && product?.is_product\"> / Hour</span>\n                    <span *ngIf=\"product?.price_type && !product?.is_product\">\n                        / {{ timeInterval | formatTimeInterval }}</span>\n                    <span *ngIf=\"!product?.price_type && !product?.is_product\">\n                        / {{ product?.duration | formatTimeInterval }}</span>\n                </td>\n                <td>\n                    <a href=\"javascript:void(0)\" (click)=\"onRemove()\" [style.color]=\"style.baseColor\">\n                        <img src=\"assets/images/trash-2-outline.png\" class=\"del-icon\">\n                    </a>\n                </td>\n            </tr>\n        </tbody>\n    </ng-container>\n</ng-container>\n<!-- {'out-of-stock':product?.isOutOfStock} -->\n<ng-template #default>\n    <ng-container *ngIf=\"!product.customization || !product.customization.length\">\n        <div class=\"single_item_detail\" [ngClass]=\"{'out-of-stock':product?.isOutOfStock}\"\n            [style.background-color]=\"style.cardBackgroundColor\" [ngStyle]=\"{'border-color': style.secondaryColor}\">\n            <div class=\"row\">\n                <div class=\"col-sm-3 cart-image\">\n                    <img [src]=\"product?.image_path\" class=\"cart-product-img cursor\" (click)=\"productDetail(product)\"\n                        onError=\"src = './assets/images/placeholder_image.svg';\" />\n                    <div *ngIf=\"product?.isOutOfStock\" class=\"cart-out-of-stock-msg\">\n                        <p>Out Of Stock</p>\n                    </div>\n                </div>\n                <div class=\"col-sm-9  mt-sm-0 mt-4\">\n                    <div class=\"single_item_name\">\n                        <h5 [style.color]=\"style.baseColor\">\n                            {{ product?.name }}\n                            <br />\n                            <span *ngIf=\"settings?.is_single_vendor == 0\" [style.color]=\"style.primaryColor\">\n                                <a (click)=\"onSupplier(product?.supplier_id)\"\n                                    [style.cursor]=\"settings?.app_type == 1 ? 'pointer' : 'default'\">{{ \"by\" | translate }}\n                                    {{ product?.supplier_name }}</a>\n                            </span>\n\n                            <p [style.color]=\"style.baseColor\" *ngIf=\"settings?.is_product_weight == 1\">Weight:\n                                {{product?.duration}}gm</p>\n                        </h5>\n\n                        <h6 [style.color]=\"style.baseColor\">\n\n                            <span class=\"cursor instruction mr-4\" [style.color]=\"style.primaryColor\"\n                                *ngIf=\"settings?.enable_product_special_instruction && product?.special_instructions\"\n                                (click)=\"showSpecialInstruction(product)\">\n                                {{'View Special Instructions' | translate}}\n                            </span>\n\n                            {{ currency }}\n                            {{ ((product?.fixed_price * 1)* selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length) }}\n                            <span *ngIf=\"product?.price_type && product?.is_product\"> / Hour</span>\n                            <span\n                                *ngIf=\"product?.price_type && !product?.is_product && settings?.laundary_service_flow == 0\">\n                                / {{(product?.selectedQuantity * timeInterval) | formatTimeInterval}}\n                                <!-- {{ timeInterval | formatTimeInterval }} -->\n                            </span>\n                            <!-- <span\n                                *ngIf=\"!product?.price_type && !product?.is_product && settings?.laundary_service_flow == 0\">\n                                / {{ product?.duration | formatTimeInterval }}</span> -->\n                            <span\n                                *ngIf=\"!product?.price_type && !product?.is_product && settings?.laundary_service_flow == 1\">\n                                / Piece</span>\n                        </h6>\n                    </div>\n\n                    <div *ngIf=\"settings?.enable_in_out_network\">\n                        <p *ngIf=\"product?.product_reference_id\">\n                            {{'Product Ref Id' |translate}}:&nbsp;<b>{{product?.product_reference_id}}</b>\n                        </p>\n                        <p *ngIf=\"product?.product_owner_name\">\n                            {{'Product Owner Name' |translate}}:&nbsp;<b>{{product?.product_owner_name}}</b>\n                        </p>\n                        <p *ngIf=\"product?.product_dimensions\">\n                            {{'Product Dimensions' |translate}}:&nbsp;<b>{{product?.product_dimensions}}</b>\n                        </p>\n                        <p *ngIf=\"product?.product_upload_reciept\">\n                            {{'Product Receipt' |translate}}:&nbsp;\n                            <span class=\"image_view\" (click)=\"downloadReceipt(product?.product_upload_reciept)\">\n                                <b>{{'View Receipt'}}</b>\n                            </span>\n                        </p>\n                    </div>\n                    <div *ngIf=\"product.cartVariants && product.cartVariants.length\">\n                        <div *ngFor=\"let variant of product.cartVariants;trackBy:trackByProductFn;\">\n                            <ng-template [ngIf]=\"variant.variant_type != 1\" [ngIfElse]=\"color\">\n                                <p class=\"mb-0\" [style.color]=\"style.baseColor\">\n                                    {{variant?.variant_name}}:<span>{{variant?.variant_value}}</span></p>\n                            </ng-template>\n                            <ng-template #color>\n                                <p class=\"mb-0\" [style.color]=\"style.baseColor\">{{variant?.variant_name}}:<span\n                                        class=\"cart-color-varient\"\n                                        [style.background-color]=\"variant?.variant_value\"></span>\n                                </p>\n                            </ng-template>\n                        </div>\n                    </div>\n\n                    <div class=\"single_item_quantity d-flex align-items-center justify-content-between\">\n\n                        <app-quantity-buttons *ngIf=\"product?.selectedQuantity && !product?.isOutOfStock\"\n                            [style]=\"style\" [settings]=\"settings\" [selectedQuantity]=\"product?.selectedQuantity\"\n                            [priceType]=\"product?.price_type\" [isProduct]=\"product?.is_product\"\n                            (onAdd)=\"increaseQuantity()\" (onRemove)=\"decreaseQuantity()\">\n                        </app-quantity-buttons>\n\n                        <div class=\"cart_button\"\n                            [ngStyle]=\"{'margin-top': settings?.is_single_vendor == 0 ? '-20px ' : '0px'}\">\n                            <a href=\"javascript:void(0)\" (click)=\"onRemove()\"\n                                [style.color]=\"style.baseColor\">{{ \"Remove\" | translate }}</a>\n                        </div>\n\n                        <span *ngIf=\"product?.freeQuantity\" class=\"cart_button\">+ {{product?.freeQuantity}} {{'Free' | translate}}</span>\n                    </div>\n                </div>\n            </div>\n\n            <div *ngIf=\"product.agent_slot\" class=\"row cart-service-agent\">\n                <div class=\"col-md-3\">\n                    <img style=\"border-radius: 5px;\" [src]=\"product?.agent_slot?.agent?.cbl_user?.image\"\n                        [alt]=\"'Agent Image'\" onError=\"src = './assets/images/placeholder_image.svg';\">\n                </div>\n                <div class=\"col-md-9  mt-md-0 mt-4\">\n                    <p>{{'agent' | localization | translate}} {{'Name' | translate}}: <span\n                            class=\"pl-2 text-capitalize\">{{product.agent_slot?.agent?.cbl_user?.name}}</span></p>\n                    <!-- <p>phone: <span class=\"pl-2\">{{product.agent_slot?.agent?.cbl_user?.phone_number}}</span></p> -->\n                    <p *ngIf=\"settings?.hide_agent_details == 0\">Email: <span\n                            class=\"pl-2\">{{product.agent_slot?.agent?.cbl_user?.email}}</span></p>\n                    <p *ngIf=\"settings?.hide_agent_details == 0\">Occupation: <span\n                            class=\"pl-2 text-capitalize\">{{product.agent_slot?.agent?.cbl_user?.occupation}}</span>\n                    </p>\n                    <!-- <p *ngIf=\"settings?.hide_agent_details == 0\">Experience: <span\n                            class=\"pl-2 text-capitalize\">{{product.agent_slot?.agent?.cbl_user?.experience}}</span>\n                    </p> -->\n                    <span *ngIf=\"settings?.enable_freelancer_flow\">\n                        <!-- <p [style.color]=\"style.defaultColor\" *ngIf=\"agent?.fixed_price\"><b>{{'Price:' | translate}}\n                            {{agent?.fixed_price}}</b></p> -->\n                        <p [style.color]=\"style.defaultColor\" *ngIf=\"product?.agent_slot?.agent?.agent_service_price\">\n                            {{'Total Price:' | translate}} {{curreny}}{{product?.agent_slot?.agent?.agent_service_price}}</p>\n                        <p [style.color]=\"style.defaultColor\" *ngIf=\"product?.agent_slot?.agent?.description\">\n                            {{'Description:' | translate}} {{product?.agent_slot?.agent?.description}}</p>\n                        <!-- <p [style.color]=\"style.defaultColor\"><b>{{'Sub Total Price:' | translate}}\n                            {{agent?.fixed_price+agent?.agent_service_price}}</b></p> -->\n                    </span>\n                </div>\n            </div>\n\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"product.customization && product.customization.length\">\n        <div *ngFor=\"let item of product.customization;trackBy:trackByCustomizationFn;\" class=\"single_item_detail\"\n            [ngClass]=\"{'out-of-stock':product?.isOutOfStock}\" [style.background-color]=\"style.cardBackgroundColor\"\n            [ngStyle]=\"{'border-color': style.secondaryColor}\">\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                    <img [src]=\"product?.image_path\" class=\"cart-product-img\"\n                        onError=\"src = './assets/images/placeholder_image.svg';\" />\n                    <div *ngIf=\"product?.isOutOfStock\" class=\"cart-out-of-stock-msg\">\n                        <p>Out Of Stock</p>\n                    </div>\n                </div>\n                <div class=\"col-sm-9\">\n                    <div class=\"single_item_name\">\n                        <h5 [style.color]=\"style.baseColor\">\n                            {{ product?.name }}\n                            <br />\n                            <span *ngIf=\"settings?.is_single_vendor == 0\" [style.color]=\"style.primaryColor\">\n                                <a (click)=\"onSupplier(product?.supplier_id)\">{{ \"by\" | translate }}\n                                    {{ product?.supplier_name }}</a>\n                            </span>\n                            <ul class=\"cart-product-addon\">\n                                <li *ngFor=\"let cust of item.data;trackBy:trackByItemFn;\"\n                                    [style.color]=\"style.baseColor\" opacity=\"0.5\">\n                                    {{cust?.name}} -\n                                    {{addOnNames(cust?.value)}}\n                                </li>\n                            </ul>\n                        </h5>\n\n                        <h6 [style.color]=\"style.baseColor\">\n                            {{ currency }} {{getAddonProductPrice(product?.fixed_price,item.data) }}\n                            <!-- <span *ngIf=\"product?.price_type && product?.is_product\"> / Hour</span> -->\n                            <!-- <span *ngIf=\"product?.price_type && !product?.is_product\">\n                            / {{ timeInterval | formatTimeInterval }}</span> -->\n                            <!-- <span *ngIf=\"!product?.price_type && !product?.is_product\">\n                            / {{ product?.duration | formatTimeInterval }}</span> -->\n                        </h6>\n                    </div>\n                    <div class=\"single_item_quantity d-flex align-items-center justify-content-between\">\n                        <app-quantity-buttons *ngIf=\"!product?.isOutOfStock\" [style]=\"style\"\n                            [selectedQuantity]=\"item?.quantity\" (onAdd)=\"updateQuantity(item.id, 1, false)\"\n                            (onRemove)=\"updateQuantity(item.id, -1)\">\n                        </app-quantity-buttons>\n                        <div class=\"cart_button\">\n                            <a href=\"javascript:void(0)\" (click)=\"updateQuantity(item.id, -item.quantity, true)\"\n                                [style.color]=\"style.baseColor\">{{ \"Remove\" | translate }}</a>\n                        </div>\n\n                        <span *ngIf=\"product?.freeQuantity\" class=\"cart_button\">+ {{product?.freeQuantity}} {{'Free' | translate}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n\n</ng-template>\n\n<!-- <td>\n        <div class=\"p-dtl\">\n          <img src=\"img/product.png\">\n          <h5>Nike Air Max Excee\n            <span>Universe Infotech</span>\n          </h5>\n        </div>\n\n      </td>\n      <td>\n\n        <input type=\"number\" min=\"1\" max=\"9\" step=\"1\" value=\"1\">\n\n      </td>\n      <td>\n        $55.00\n      </td>\n      <td>\n        <img src=\"assets/images/trash-2-outline.png\" class=\"del-icon\">\n      </td> -->\n\n\n<app-image-viewer *ngIf=\"openImageViewer\" [viewImage]=\"imageToView\" (closeImageViewer)=\"closeImageViewer($event)\">\n\n</app-image-viewer>\n\n\n<app-special-instruction *ngIf=\"is_special_instruction\" [only_viewing]=\"false\"\n    [special_instructions]=\"special_instructions\" [style]=\"style\" [settings]=\"settings\"\n    (onProcess)=\"onProcessSpecialInstruction($event)\"></app-special-instruction>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-products-list/cart-products-list.component.html":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-products-list/cart-products-list.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesCartComponentsCartProductsListCartProductsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"!!products?.length; then data; else noData\"></ng-container>\n\n<ng-template #data>\n  <ng-container *ngIf=\"settings?.app_type == 2 && settings?.selected_template == 2; else theme1\">\n    <div class=\"\">\n      <table class=\"p-table table\">\n        <thead>\n          <tr>\n            <th>Product</th>\n            <th>Qty.</th>\n            <th>Price</th>\n            <th></th>\n          </tr>\n        </thead>\n        <div *ngFor=\"let product of products; let index = index;trackBy:trackByProductsFn\">\n            <app-cart-product [settings]=\"settings\" [style]=\"style\" [product]=\"product\" (remove)=removeFromCart(index)\n              (onPlus)=\"add(product, index)\" (onMins)=\"mins(product, index)\"\n              (onCustomizationUpdate)=\"updateCustomizationQuantity($event, index)\"></app-cart-product>\n          </div>\n      </table>\n    </div>\n  </ng-container>\n\n  <ng-template #theme1>\n    <div class=\"items_added_outter_box\">\n      <h4 [ngStyle]=\"{backgroundColor: style.cardBackgroundColor, color: style.baseColor}\">\n        {{ settings?.app_type == 8 ? \"Services Added\"  :  \"Items Added\" | translate }}\n        ({{settings?.app_type == 8 && settings?.laundary_service_flow == 0 ? products.length : totalItems }})\n      </h4>\n    </div>\n\n    <div *ngFor=\"let product of products; let index = index;trackBy:trackByProduct2Fn\" class=\"single-item-wrap\">\n      <app-cart-product [settings]=\"settings\" [style]=\"style\" [product]=\"product\" (remove)=removeFromCart(index)\n        (onPlus)=\"add(product, index)\" (onMins)=\"mins(product, index)\"\n        (onCustomizationUpdate)=\"updateCustomizationQuantity($event, index)\"></app-cart-product>\n    </div>\n  </ng-template>\n\n</ng-template>\n\n<ng-template #noData>\n  <div class=\"empty-cart\" [ngStyle]=\"{'border-color': darkTheme ? style.baseColor : style.cardBackgroundColor}\">\n    <img [src]=\"settings.placeholder.empty_cart.web || '/assets/images/empty-cart' + settings.app_type + '.png'\"\n      height=\"150\" width=\"200\">\n    <h5 [style.color]=\"style.baseColor\">{{'emptyCartMsg' | localization | translate}} </h5>\n    <p>\n      <a [style.color]=\"style.primaryColor\" [routerLink]=\"['/']\" class=\"next-btn\">{{\"Continue\" | translate }}</a>\n    </p>\n  </div>\n</ng-template>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-skeleton/cart-skeleton.component.html":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-skeleton/cart-skeleton.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesCartComponentsCartSkeletonCartSkeletonComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"cart_page-detail skeleton\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"cart-products col-md-8\">\n                <div class=\"cart-product-inner\">\n                    <div class=\"items_added_outter_box\">\n                        <h3></h3>\n                    </div>\n                    <div *ngFor=\"let product of util.generateFakeList(4); let index = index;trackBy:trackByFakeListFn\" class=\"single-item-wrap\">\n                        <div class=\"single_item_detail\">\n                            <div class=\"row\">\n                                <div class=\"col-md-3 cart-image\">\n                                    <img class=\"w-100\" [style.height]=\"'100px'\">\n                                </div>\n                                <div class=\"col-md-9\">\n                                    <div class=\"single_item_name\">\n                                        <h5><br />\n                                            <span></span>\n                                        </h5>\n                                        <h6></h6>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"cart_slidebar\">\n                    <div class=\"price_details\">\n                        <h5></h5>\n                        <ul>\n                            <li class=\"skeleton\">\n                                <p></p>\n                            </li>\n                            <li>\n                                <p> </p>\n                            </li>\n                            <!-- <li>{{'Total' | translate}} <span>{{currency}} {{priceObj?.subTotal}}</span></li> -->\n                            <li>\n                                <p></p>\n                            </li>\n                            <li>\n                                <p></p>\n                            </li>\n                        </ul>\n                        <h6>\n                            <span></span>\n                        </h6>\n                    </div>\n                    <div class=\"price_details\">\n                        <ul class=\"list-inline pt-2 self-pickup\">\n                            <li class=\"list-inline-item\">\n                                <h5 [style.height]=\"'50px'\"></h5>\n                            </li>\n                            <li class=\"list-inline-item\">\n                                <h5 [style.height]=\"'50px'\"></h5>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/delivery-address-detail/delivery-address-detail.component.html":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/delivery-address-detail/delivery-address-detail.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesCartComponentsDeliveryAddressDetailDeliveryAddressDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-processing-indicator *ngIf=\"isLoading\"></app-processing-indicator>\n\n<ng-container *ngIf=\"isAddressHide===0 && settings?.app_type == 2 && settings?.selected_template == 2; else default\">\n\n    <div class=\"price_details theme1_custom_div\"\n        [ngStyle]=\"{'background-color': style.cardBackgroundColor,'border-color': style.secondaryColor  }\">\n        <h5 class=\"p-b-n\" [style.color]=\"style.baseColor\">\n            {{ \"Address\" | translate }}\n            <a style=\"font-weight: 600\" href=\"javascript:void(0)\" (click)=\"openNewAddressDialog()\"\n                [style.color]=\"style.primaryColor\">{{'Add Address' | translate}}</a>\n        </h5>\n        <div class=\"address-detail\">\n            <div *ngIf=\"!addressList?.length\">\n                <h5 class=\"logo-outter\" [style.color]=\"style.baseColor\">\n                    {{ \"No Address Found\" | translate }}\n                </h5>\n            </div>\n            <div *ngIf=\"addressList.length\">\n                <!-- <h4 [style.color]=\"style.baseColor\">\n                    {{settings?.app_type == 8 ? 'Service At' : 'Deliver To' | translate }}\n                </h4> -->\n                <img class=\"pin_location\" src=\"/assets/images/pin-outline.png\">\n                <address class=\"address_block\" [style.color]=\"style.baseColor\">\n                    {{ addressList[selectedAreaIndex]?.name }}\n                    <br *ngIf=\"addressList[selectedAreaIndex]?.name\" />\n                    {{ addressList[selectedAreaIndex]?.address_line_1 }}<br />\n                    <span *ngIf=\"addressList[selectedAreaIndex]?.collectNumber\">{{\n                        addressList[selectedAreaIndex]?.collectNumber}}\n                        <br></span>\n                    {{ addressList[selectedAreaIndex]?.customer_address }}\n                    {{ addressList[selectedAreaIndex]?.phone_number }}\n                </address>\n            </div>\n            <a *ngIf=\"addressList.length > 0\" href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#addressModel\"\n                [style.color]=\"style.primaryColor\">{{ \"Change\" | translate }}</a>\n        </div>\n    </div>\n</ng-container>\n<ng-template #default>\n    <div *ngIf=\"isAddressHide===0\" class=\"price_details\"\n        [ngStyle]=\"{'background-color': style.cardBackgroundColor,'border-color': style.secondaryColor  }\">\n        <h5 [style.color]=\"style.baseColor\">\n            {{ \"Address Details\" | translate }}\n            <a style=\"font-weight: 600\" href=\"javascript:void(0)\" (click)=\"openNewAddressDialog()\"\n                [style.color]=\"style.primaryColor\">{{'Add New Address' | translate}}</a>\n        </h5>\n        <div class=\"address-detail\">\n            <div *ngIf=\"!addressList?.length\">\n                <h5 class=\"logo-outter\" [style.color]=\"style.baseColor\">\n                    {{ \"No Address Found\" | translate }}\n                </h5>\n            </div>\n            <div *ngIf=\"addressList.length\">\n                <h4 [style.color]=\"style.baseColor\">\n                    {{settings?.app_type == 8 ? 'Service At' : 'Deliver To' | translate }}\n                </h4>\n                <address [style.color]=\"style.baseColor\">\n                    {{ addressList[selectedAreaIndex]?.name }}\n                    <br *ngIf=\"addressList[selectedAreaIndex]?.name\" />\n                    {{ addressList[selectedAreaIndex]?.address_line_1 }}<br />\n                    <span *ngIf=\"addressList[selectedAreaIndex]?.collectNumber\">{{\n                        addressList[selectedAreaIndex]?.collectNumber}}\n                        <br></span>\n                    {{ addressList[selectedAreaIndex]?.customer_address }}\n                    <br>\n                    {{ addressList[selectedAreaIndex]?.phone_number }}<br />\n                    <span>{{addressList[selectedAreaIndex]?.reference_address||''}}</span><br />\n                    <span *ngIf=\"calc_distance\">{{calc_distance.toFixed(2)}}\n                        {{settings?.delivery_distance_unit=='0'?'KM':'Miles'}}</span>\n\n                </address>\n            </div>\n            <a *ngIf=\"addressList.length > 0\" href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#addressModel\"\n                [style.color]=\"style.primaryColor\">{{ \"Change\" | translate }}</a>\n        </div>\n    </div>\n</ng-template>\n\n<!--popup-->\n<div class=\"modal fade\" id=\"addressModel\" role=\"dialog\" data-backdrop=\"static\" data-keyboard=\"false\">\n    <div class=\"modal-dialog\">\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeAddressModal\n                    (click)=\"changeAddress()\"></button>\n                <!-- <h4 class=\"modal-title\" [style.color]=\"style.defaultColor\">\n                    {{ \"Address\" | translate }}\n                </h4> -->\n                <p [style.color]=\"style.primaryColor\" routerLink=\"/account/address\">\n                    {{ \"Manage Address\" | translate }}\n                </p>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"Address_outter\">\n                    <div class=\"default_address cursor\" (click)=\"this.localAreaIndex = i\"\n                        *ngFor=\"let data of addressList; let i = index;trackBy:trackByAddressFn\"\n                        [style.borderColor]=\"i == localAreaIndex ? style.primaryColor : style.secondaryColor \"\n                        [ngClass]=\"i == localAreaIndex ? 'active' : ''\">\n                        <div class=\"ddress-inner\" [style.color]=\"style.baseColor\">\n                            <h2>{{ data?.name }}</h2>\n                            <address>\n                                {{ data?.name }} <br *ngIf=\"data.name\" />\n                                {{ data?.address_line_1 }} <br />\n                                <span *ngIf=\"data?.collectNumber\">{{data?.collectNumber}} <br></span>\n                                {{ data?.customer_address }}, {{ data?.pincode }}\n                                <br />\n                                {{ data?.reference_address||'' }}\n                            </address>\n                        </div>\n                    </div>\n                    <div *ngIf=\"!addressList?.length\" class=\"no-data\">\n                        <h1>{{ \"No Address Found\" | translate }}</h1>\n                    </div>\n                </div>\n            </div>\n            <div class=\"model-footer\">\n                <button class=\"btn\" (click)=\"onAddressSelect()\">{{'Proceed' | translate}}</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!-------------------- Add New Address Popup ------------------------->\n\n<div class=\"backdrop\" [ngStyle]=\"{'display': display}\"></div>\n\n<div class=\"modal\" tabindex=\"-1\" id=\"newAddress\" role=\"dialog\" [ngStyle]=\"{'display':display}\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n        <!-- Modal content-->\n        <div class=\"modal-content\" role=\"document\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" (click)=\"display = 'none';\" #closeNewAddress></button>\n                <p [style.color]=\"style.defaultColor\">{{ \"Add New Address\" | translate }}</p>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"form\" (ngSubmit)=\"onAdd(form.value)\">\n                    <div class=\"profile_form\">\n\n                        <div class=\"form-group\">\n                            <label [style.color]=\"style.baseColor\">{{'address_full_name' | localization |\n                                translate}}</label>\n                            <input class=\"w-100\" type=\"text\" formControlName=\"name\"\n                                placeholder=\"{{'Enter ' | translate}}{{'address_full_name' | localization | translate}}\"\n                                (keydown.space)=\"!form.controls.name.value ? $event.preventDefault() : ''\">\n                            <div class=\"text-error\"\n                                *ngIf=\"(form.controls['name'].errors?.required || form.controls['name'].errors?.whitespace) && showError\">\n                                {{'Please enter name' | translate}}</div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label [style.color]=\"style.baseColor\">{{'complete_address' | localization |\n                                translate}}</label>\n                            <input class=\"w-100\" type=\"text\" formControlName=\"addressLineFirst\"\n                                placeholder=\"{{'Enter a location' | translate}}\" appGoogleplace\n                                (onSelect)=\"onAddressSearch($event)\">\n                            <div class=\"text-error\"\n                                *ngIf=\"form.controls['addressLineFirst'].errors?.required && showError\">\n                                {{'Please enter address' | translate}}</div>\n                            <div class=\"text-error\"\n                                *ngIf=\"!form.controls['addressLineFirst'].errors?.required && form.controls['latitude'].errors?.required && showError\">\n                                {{'Please enter valid address' | translate}}</div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label [style.color]=\"style.baseColor\">{{'apartmant_no' | localization | translate}}</label>\n                            <input class=\"w-100\" type=\"text\" formControlName=\"houseNo\"\n                                placeholder=\"{{'apartmant_no' | localization | translate}}\"\n                                (keydown.space)=\"!form.controls.houseNo.value ? $event.preventDefault() : ''\">\n                            <div class=\"text-error\"\n                                *ngIf=\"(form.controls['houseNo'].errors?.required || form.controls['houseNo'].errors?.whitespace) && showError\">\n                                {{'Please enter ' | translate}}{{'apartmant_no' | localization| translate}}</div>\n                        </div>\n\n\n                        <div class=\"form-group\" *ngIf=\"settings?.addCollectFieldInAddress == 1\">\n                            <label [style.color]=\"style.baseColor\">{{'Click/Collect Number' | translate}}</label>\n                            <input class=\"w-100\" type=\"text\" formControlName=\"collectNo\"\n                                placeholder=\"{{'Enter Click/Collect Number' | translate}}\"\n                                (keydown.space)=\"!form.controls.collectNo.value ? $event.preventDefault() : ''\">\n                            <div class=\"text-error\"\n                                *ngIf=\"(form.controls['collectNo'].errors?.required || form.controls['collectNo'].errors?.whitespace) && showError\">\n                                {{'Please enter click/collect number' | translate}}</div>\n                        </div>\n\n                        <div class=\"form-group signup-phone\">\n                            <label [style.color]=\"style.baseColor\">{{'address_phone_no' | localization |\n                                translate}}</label>\n                            <!-- <input class=\"w-100\" type=\"text\" formControlName=\"phone_number\"\n                                placeholder=\"{{'Enter Contact Number' | translate}}\" numbersOnly> -->\n                            <div class=\"input-group\" *ngIf=\"settings?.cutom_country_code\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-3\">\n                                        <!-- <select class=\"input-large input-large-altered select-box\" formControlName=\"countryCode\">\n                                            <option value=\"\">Select </option>\n                                            <option *ngFor=\"let opt of preferredCountries\" [value]=\"opt.country_code\">\n                                                {{opt.country_code}}&nbsp;\n                                                {{opt.country_name | slice:0:7}}</option>\n                                        </select> -->\n\n                                        <div class=\"country_dropbox home-page-search-restorent dropdown\">\n                                            <a class=\" dropdown-toggle pointer\" data-toggle=\"dropdown\"><img\n                                                    class=\"country_flag\" *ngIf=\"countryCodeFlag\"\n                                                    src=\"{{countryCodeFlag}}\"> {{countryCodeString || 'Select'}}\n                                                <img src=\"/assets/images/down_black.png\"></a>\n                                            <ul class=\"dropdown-menu country_text\">\n                                                <li class=\"pointer\"><a *ngFor=\"let opt of preferredCountries\"\n                                                        (click)=\"setCountryCode(opt)\"><img src=\"{{opt.flag_image}}\">\n                                                        <p>{{opt.country_code}}</p>&nbsp;\n                                                        {{opt.country_name}}\n                                                    </a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-8 input-number\" style=\"margin-left: 26px;\">\n                                        <input style=\"width: 100%\" name=\"TypeCode\" type=\"text\"\n                                            placeholder=\"Phone Number\" formControlName=\"phone_number\" />\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div *ngIf=\"!settings?.cutom_country_code\">\n                                <ngx-intl-tel-input [selectedCountryISO]=\"countryISO\"\n                                    [preferredCountries]=\"preferredCountries\" [searchCountryFlag]=\"true\"\n                                    placeholder=\"Phone Number\" [enableAutoCountrySelect]=\"false\"\n                                    [enablePlaceholder]=\"true\" name=\"phone_number\" [separateDialCode]=\"true\"\n                                    [phoneValidation]=\"true\" formControlName=\"phone_number\"\n                                    [searchCountryPlaceholder]=\"'Search Country' | translate\">\n                                </ngx-intl-tel-input>\n                            </div>\n                            <div class=\"text-error\" *ngIf=\"form.controls['phone_number'].errors?.required && showError\">\n                                {{'Please Enter Contact Number' | translate}}</div>\n                            <div class=\"text-error\"\n                                *ngIf=\"!form.controls['phone_number'].errors?.required && form.controls['phone_number'].invalid && showError\">\n                                {{'Please Enter a Valid Phone Number.' | translate}}</div>\n                            <div class=\"text-error\"\n                                *ngIf=\"settings?.cutom_country_code && form.controls['countryCode'].errors?.required && showError\">\n                                {{'Please select a country code' | translate}}</div>\n                        </div>\n\n                        <div class=\"form-group\" *ngIf=\"settings?.enable_address_reference\">\n                            <label [style.color]=\"style.baseColor\">{{'Address Reference' | translate}}</label>\n                            <input type=\"text\" formControlName=\"reference_address\"\n                                placeholder=\"{{'Enter Reference Address' | translate}}\">\n                            <div class=\"text-error\"\n                                *ngIf=\"form.controls['reference_address'].errors?.maxlength && showError\">\n                                {{'Max. length should be ' | translate}}{{settings?.address_reference_char_limit}}</div>\n                        </div>\n\n                        <button class=\"btn profile-submit-form ml-3 float-right text-capitalize\" [ngStyle]=\"saveBtn\"\n                            type=\"submit\">{{'ADD' | translate}}</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/instructions/instructions.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/instructions/instructions.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesCartComponentsInstructionsInstructionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"instructions\">\n    <h4 [ngStyle]=\"{color: style.baseColor}\">\n        {{title ? title : 'instruction' | localization}}\n    </h4>\n    <hr>\n    <textarea rows=\"5\" class=\"form-control\" [placeholder]=\"placeholder\"\n        [(ngModel)]=\"instructions\" (ngModelChange)=\"onInstructionChange($event)\"></textarea>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/loyalty-discount/loyalty-discount.component.html":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/loyalty-discount/loyalty-discount.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesCartComponentsLoyaltyDiscountLoyaltyDiscountComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"price_details\"\n    [ngStyle]=\"{'background-color': style.cardBackgroundColor, 'border-color': style.secondaryColor }\">\n\n    <div class=\"referral-cart\">\n        <a [style.color]=\"style?.primaryColor\" (click)=\"applyReferral()\">{{(loyalty_applied ? 'Remove' : 'Apply') | translate}}</a>\n        <h6><i *ngIf=\"loyalty_applied\" class=\"fa fa-check-circle-o applied\"></i>{{'Your Loyalty Amount' | translate}} : {{currency}}\n            {{(((loyalty_amount*1)*selected_currency?.conversion_rate) - ((applied_admount*1)*selected_currency?.conversion_rate)).toFixed(settings?.price_decimal_length)}}\n        </h6>\n        <small *ngIf=\"loyalty_applied\" style=\"padding: 10px 20px; margin-left: 26px;\">{{'Amount Applied' | translate}}: {{currency}}\n            {{((applied_admount*1)*selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)}}</small>\n\n    </div>\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/referral/referral.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/referral/referral.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesCartComponentsReferralReferralComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"settings?.app_type == 2 && settings?.selected_template == 2; else theme1\">\n    <div class=\"price_details theme1_custom_div\"\n        [ngStyle]=\"{'background-color': style.cardBackgroundColor, 'border-color': style.secondaryColor }\">\n\n        <div class=\"referral-cart\">\n            <a *ngIf=\"referral_amount\" [style.color]=\"style?.primaryColor\"\n                (click)=\"applyReferral()\">{{referral_applied ? 'Remove' : 'Apply'}}</a>\n            <h6><i *ngIf=\"referral_applied\" class=\"fa fa-check-circle-o applied\"></i>{{'Your Referral Amount' | translate}} : {{currency}}\n                {{((referral_amount*1)*selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)}}</h6>\n        </div>\n\n    </div>\n</ng-container>\n\n<ng-template #theme1>\n    <div class=\"price_details\"\n        [ngStyle]=\"{'background-color': style.cardBackgroundColor, 'border-color': style.secondaryColor }\">\n\n        <div class=\"referral-cart\">\n            <a *ngIf=\"referral_amount\" [style.color]=\"style?.primaryColor\"\n                (click)=\"applyReferral()\">{{referral_applied ? 'Remove' : 'Apply'}}</a>\n            <h6><i *ngIf=\"referral_applied\" class=\"fa fa-check-circle-o applied\"></i>{{'Your Referral Amount' | translate}} : {{currency}}\n                {{((referral_amount*1)*selected_currency?.conversion_rate).toFixed(settings?.price_decimal_length)}}\n            </h6>\n        </div>\n\n    </div>\n</ng-template>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/rental-booking/rental-booking.component.html":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/rental-booking/rental-booking.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesCartRentalBookingRentalBookingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"product-dtl m-top-100\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col col-md-8\">\n        <div class=\"listing\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"list-img\">\n                <img [src]=\"cart_data?.image_path\" onError=\"src = './assets/images/placeholder_image.svg';\">\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"list-details\">\n                <div class=\"title-and-price\">\n                  <h2 class=\"float-left\">{{cart_data?.name}}\n                    <span>{{(cart_data?.distance).toFixed(2)}}km. away</span>\n                  </h2>\n                  <h3 class=\"float-right\">{{currency}} {{cart_data?.fixed_price}}\n                    <!-- <span>+ Booking Fee</span> -->\n                  </h3>\n                </div>\n              </div>\n              <div class=\"listing supplier-dtl\">\n                <h4>Supplier Details</h4>\n                <ul>\n                  <li>\n                    <div class=\"address\">\n                      <img [src]=\"cart_data?.supplier_logo\" onError=\"src = './assets/images/placeholder_image.svg';\">\n                      <p>{{cart_data?.supplier_name}} <span class=\"d-block\">{{cart_data?.supplier_address}}</span></p>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"listing address-details\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <h4>Pickup Details</h4>\n              <ul>\n                <li>\n                  <div class=\"mb-2\">\n                    {{cart_data?.from_address}}<span class=\"d-block\">{{cart_data?.booking_from_date | date: 'MMM d, y . hh:mm a'}}</span>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"listing supplier-dtl\">\n          <h4>Details</h4>\n          <div [innerHtml]=\"cart_data?.product_desc | safe: 'html'\"></div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"listing payment-dtl\">\n          <div class=\"list-details\">\n            <h4>Payment Details</h4>\n            <ul>\n              <li>\n                <div class=\"mb-2\">\n                  Car fare<span class=\"float-right\">{{currency}} {{priceObj?.amount.toFixed(2)}}</span>\n                </div>\n                <!-- <div class=\"mb-2\">\n                  Booking fee<span class=\"float-right\">{{currency}} 10.00</span>\n                </div> -->\n              </li>\n              <li>\n                <h5>Total<span class=\"float-right\">{{currency}} {{(priceObj?.netTotal).toFixed(2)}}</span></h5>\n                <!-- <h6>You will pay now <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i><span\n                    class=\"float-right\">$25.00</span></h6> -->\n              </li>\n              <li>\n                <h4>Choose your payment type</h4>\n                <label class=\"form-check-label\" *ngIf=\"[0,2].includes(settings?.payment_method)\">\n                  <input class=\"form-check-input\" type=\"radio\"\n                    [style.backgroundColor]=\"paymentType == '0' ? style.primaryColor : ''\" name=\"payment\" [value]=\"'0'\"\n                    [(ngModel)]=\"paymentType\">Cash On Delivery\n                  <span class=\"checkmark\" [style.color]=\"style.baseColor\"></span>\n                </label>\n\n                <label class=\"form-check-label\" *ngIf=\"[1,2].includes(settings?.payment_method)\">\n                  <input class=\"form-check-input\" type=\"radio\"\n                    [style.backgroundColor]=\"paymentType == '1' ? style.primaryColor : ''\" name=\"payment\" [value]=\"'1'\"\n                    [(ngModel)]=\"paymentType\">Online\n                  <span class=\"checkmark\" [style.color]=\"style.baseColor\"></span>\n                </label>\n                <p>By clicking on payment, you agree to the rental policy and our <a href=\"term.html\" target=\"_blank\">Terms and Conditions</a>\n                </p>\n              </li>\n              <li>\n                <button type=\"button\" class=\"btn btn-primary w-100\" (click)=\"placeOrder()\">Book Now</button>\n              </li>\n            </ul>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/agent/agent.component.scss":
    /*!**************************************************************!*\
      !*** ./src/app/layout/pages/cart/agent/agent.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesCartAgentAgentComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tab-main-outer {\n  box-shadow: 0 1px 2px 1px rgba(109, 109, 109, 0.14);\n  background-color: #fff;\n  padding: 16px;\n  width: 100%;\n  float: left;\n}\n\n.outer-btn {\n  float: left;\n  min-width: 30%;\n  text-align: right;\n}\n\n.tab-main-outer-img {\n  float: left;\n  width: 14%;\n  margin-right: 35px;\n}\n\n.tab-main-outer-data {\n  width: 75%;\n  margin-bottom: 10px;\n  float: left;\n}\n\n.tab-main-outer-img img {\n  height: 100px;\n  width: 100px;\n}\n\n.tab-main-outer-data h1 {\n  font-size: 18px;\n  font-weight: 700px;\n  color: #14bef0;\n  text-transform: capitalize;\n}\n\n.tab-main-outer-data p {\n  color: #414146;\n  font-weight: 400;\n  font-size: 14px;\n  margin-bottom: 0px;\n}\n\n.tab-btn {\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n  border: none;\n  background-color: #14bef0;\n  padding: 4px;\n  border-radius: 4px;\n}\n\n.tab-btn .btn-data i {\n  color: #fff;\n  margin-right: 10px;\n}\n\n.btn-data {\n  padding: 2px 30px;\n}\n\n.tab-btn span {\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.tab-outer {\n  width: 70%;\n  float: left;\n}\n\n.tabs {\n  padding-top: 16px;\n  padding-bottom: 16px;\n  background-color: #fff;\n  float: left;\n  width: 100%;\n}\n\n.tabs .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link.active {\n  color: #28328c;\n  background-color: transparent;\n  border-bottom: 4px solid #28328c;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.tabs .nav-tabs .nav-link {\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  color: #6f6c6c;\n  font-size: 14px;\n}\n\n.tab-heading {\n  font-size: 14px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.tab-content {\n  width: 100%;\n  float: left;\n  padding: 16px 0px;\n}\n\n.tabsleft-content {\n  width: 14%;\n  float: left;\n  padding-left: 10px;\n}\n\n.tabsright-content {\n  width: 86%;\n  float: left;\n}\n\n.tabsright-content-data {\n  width: 13%;\n  padding: 4px;\n  letter-spacing: normal;\n  float: left;\n}\n\n.tabsright-content-data span {\n  border-radius: 3px;\n  border: 1px solid #e0e0e4;\n  padding: 5px 20px;\n  display: inline-block;\n  text-align: center;\n  color: inherit;\n  cursor: pointer;\n}\n\n.tabsright-content-data span:hover {\n  background-color: #28328c;\n  color: #fff;\n}\n\n.bt {\n  border-top: 1px solid #e0e0e4;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.slot-avail {\n  text-align: center;\n}\n\n.slot-avail p {\n  color: #787887;\n  font-size: 12px;\n  font-weight: 500;\n  margin: 18px 0px 15px;\n}\n\n.slot-avail-btn {\n  border-radius: 0 2px 2px 0;\n  background-color: #df284d;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 21px;\n  padding: 13px 20px;\n  float: left;\n  height: 48px;\n}\n\n.slot-avail-btn:hover {\n  background-color: #0eaedc;\n  border: 1px solid #0eaedc;\n}\n\n.tabsleft-content i {\n  padding: 12px 10px;\n}\n\n.back-page {\n  cursor: pointer;\n  outline: none;\n}\n\n.back-page i {\n  padding: 10px 10px 15px 0px;\n}\n\n@media screen and (max-width: 767px) {\n  .tab-main-outer {\n    margin-top: 80px;\n  }\n  .tab-main-outer-img {\n    width: 100%;\n  }\n  .tabsleft-content {\n    width: 100%;\n  }\n  .tabsright-content {\n    width: 100%;\n  }\n  .tabsright-content-data {\n    width: 40%;\n  }\n  .tab-main-outer-data {\n    min-width: 75%;\n    margin: 20px 0px;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .tab-main-outer {\n    margin-top: 80px;\n  }\n  .tabsright-content-data {\n    width: 25%;\n  }\n  .tab-main-outer-img {\n    width: 100%;\n  }\n  .tabsleft-content {\n    width: 100%;\n  }\n  .tabsright-content {\n    width: 100%;\n  }\n}\n\n.slide-arrow-left {\n  margin-left: 15px;\n  font-size: 30px;\n  margin-top: 2px;\n  position: absolute;\n  color: #16bef0;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n}\n\n.slide-arrow-right {\n  font-size: 30px;\n  margin-top: -38px;\n  position: absolute;\n  color: #16bef0;\n  right: 30px;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n}\n\n.collapse {\n  margin-bottom: 10px !important;\n}\n\n.book-btn {\n  display: inline-block;\n  font-weight: 500;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  width: 100px !important;\n}\n\n.day-img {\n  height: 25px;\n  width: 25px;\n  margin: 0px 10px;\n}\n\n.no-data {\n  margin: 30px 0px;\n}\n\n.no-data p {\n  text-align: center;\n}\n\n.logged-in {\n  color: green;\n  size: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvYWdlbnQvYWdlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtREFBa0Q7RUFDbEQsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7QUFFbkI7O0FBQUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtBQUdwQjs7QUFEQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsV0FBVztBQUliOztBQUZBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFLZDs7QUFIQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDBCQUEwQjtBQU01Qjs7QUFKQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQU9wQjs7QUFMQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtBQVFwQjs7QUFOQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFTcEI7O0FBUEE7RUFDRSxpQkFBaUI7QUFVbkI7O0FBUkE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBV2xCOztBQVRBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFZYjs7QUFUQTtFQUVFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxXQUFXO0FBV2I7O0FBUkE7O0VBRUUsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGlCQUFpQjtBQVduQjs7QUFUQTtFQUNFLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxlQUFlO0FBWWpCOztBQVZBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFhcEI7O0FBWEE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtBQWNuQjs7QUFaQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0FBZXBCOztBQWJBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFnQmI7O0FBZEE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixXQUFXO0FBaUJiOztBQWZBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQWtCakI7O0FBaEJBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFtQmI7O0FBakJBO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFvQnRCOztBQWxCQTtFQUNFLGtCQUFrQjtBQXFCcEI7O0FBbkJBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBc0J2Qjs7QUFwQkE7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUF1QmQ7O0FBckJBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQXdCM0I7O0FBdEJBO0VBQ0Usa0JBQWtCO0FBeUJwQjs7QUF2QkE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQTBCZjs7QUF4QkE7RUFDRSwyQkFBMkI7QUEyQjdCOztBQXhCQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBMkJsQjtFQXpCQTtJQUNFLFdBQVc7RUEyQmI7RUF4QkE7SUFDRSxXQUFXO0VBMEJiO0VBeEJBO0lBQ0UsV0FBVztFQTBCYjtFQXZCQTtJQUNFLFVBQVU7RUF5Qlo7RUF2QkE7SUFDRSxjQUFjO0lBRWQsZ0JBQWdCO0VBd0JsQjtBQUNGOztBQXJCQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBd0JsQjtFQXRCQTtJQUNFLFVBQVU7RUF3Qlo7RUF0QkE7SUFDRSxXQUFXO0VBd0JiO0VBckJBO0lBQ0UsV0FBVztFQXVCYjtFQXJCQTtJQUNFLFdBQVc7RUF1QmI7QUFDRjs7QUFwQkE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsWUFBWTtBQXVCZDs7QUFyQkE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsWUFBWTtBQXdCZDs7QUFyQkE7RUFDRSw4QkFBOEI7QUF3QmhDOztBQXJCQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUF3QnpCOztBQXJCQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBd0JsQjs7QUFyQkE7RUFDRSxnQkFBZ0I7QUF3QmxCOztBQXpCQTtFQUlJLGtCQUFrQjtBQXlCdEI7O0FBdEJBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUF5QloiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcGFnZXMvY2FydC9hZ2VudC9hZ2VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItbWFpbi1vdXRlciB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAxcHggaHNsYSgwLCAwJSwgNDIuNyUsIDAuMTQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ub3V0ZXItYnRuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1pbi13aWR0aDogMzAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi50YWItbWFpbi1vdXRlci1pbWcge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDE0JTtcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xufVxuLnRhYi1tYWluLW91dGVyLWRhdGEge1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi50YWItbWFpbi1vdXRlci1pbWcgaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLnRhYi1tYWluLW91dGVyLWRhdGEgaDEge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDBweDtcbiAgY29sb3I6ICMxNGJlZjA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnRhYi1tYWluLW91dGVyLWRhdGEgcCB7XG4gIGNvbG9yOiAjNDE0MTQ2O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi50YWItYnRuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTRiZWYwO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi50YWItYnRuIC5idG4tZGF0YSBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5idG4tZGF0YSB7XG4gIHBhZGRpbmc6IDJweCAzMHB4O1xufVxuLnRhYi1idG4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi50YWItb3V0ZXIge1xuICB3aWR0aDogNzAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnRhYnMge1xuICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlNDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50YWJzIC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssXG4ubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMjgzMjhjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMyODMyOGM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGFicyAubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xuICBjb2xvcjogIzZmNmM2YztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRhYi1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGFiLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDE2cHggMHB4O1xufVxuLnRhYnNsZWZ0LWNvbnRlbnQge1xuICB3aWR0aDogMTQlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnRhYnNyaWdodC1jb250ZW50IHtcbiAgd2lkdGg6IDg2JTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4udGFic3JpZ2h0LWNvbnRlbnQtZGF0YSB7XG4gIHdpZHRoOiAxMyU7XG4gIHBhZGRpbmc6IDRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4udGFic3JpZ2h0LWNvbnRlbnQtZGF0YSBzcGFuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGU0O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFic3JpZ2h0LWNvbnRlbnQtZGF0YSBzcGFuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MzI4YztcbiAgY29sb3I6ICNmZmY7XG59XG4uYnQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlNDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuLnNsb3QtYXZhaWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2xvdC1hdmFpbCBwIHtcbiAgY29sb3I6ICM3ODc4ODc7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAxOHB4IDBweCAxNXB4O1xufVxuLnNsb3QtYXZhaWwtYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZjI4NGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBwYWRkaW5nOiAxM3B4IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uc2xvdC1hdmFpbC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGVhZWRjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGVhZWRjO1xufVxuLnRhYnNsZWZ0LWNvbnRlbnQgaSB7XG4gIHBhZGRpbmc6IDEycHggMTBweDtcbn1cbi5iYWNrLXBhZ2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYmFjay1wYWdlIGkge1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTVweCAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC50YWItbWFpbi1vdXRlciB7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgfVxuICAudGFiLW1haW4tb3V0ZXItaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC50YWJzbGVmdC1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudGFic3JpZ2h0LWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnRhYnNyaWdodC1jb250ZW50LWRhdGEge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgLnRhYi1tYWluLW91dGVyLWRhdGEge1xuICAgIG1pbi13aWR0aDogNzUlO1xuXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudGFiLW1haW4tb3V0ZXIge1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gIH1cbiAgLnRhYnNyaWdodC1jb250ZW50LWRhdGEge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgLnRhYi1tYWluLW91dGVyLWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudGFic2xlZnQtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnRhYnNyaWdodC1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uc2xpZGUtYXJyb3ctbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogIzE2YmVmMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuLnNsaWRlLWFycm93LXJpZ2h0IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAtMzhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogIzE2YmVmMDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvbGxhcHNlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uYm9vay1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXktaW1nIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbn1cblxuLm5vLWRhdGEge1xuICBtYXJnaW46IDMwcHggMHB4O1xuXG4gIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmxvZ2dlZC1pbiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgc2l6ZTogMzBweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/agent/agent.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/layout/pages/cart/agent/agent.component.ts ***!
      \************************************************************/

    /*! exports provided: AgentComponent */

    /***/
    function srcAppLayoutPagesCartAgentAgentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentComponent", function () {
        return AgentComponent;
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


      var _core_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../services/cart/cart.service */
      "./src/app/services/cart/cart.service.ts");
      /* harmony import */


      var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../services/messaging/messaging.service */
      "./src/app/services/messaging/messaging.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _core_apiUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../core/apiUrl */
      "./src/app/core/apiUrl.ts");
      /* harmony import */


      var _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../services/http/http.service */
      "./src/app/services/http/http.service.ts");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var underscore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! underscore */
      "./node_modules/underscore/modules/index-all.js");
      /* harmony import */


      var _shared_models_slots_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../../../shared/models/slots.model */
      "./src/app/shared/models/slots.model.ts");
      /* harmony import */


      var _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../shared/pipes/localization.pipe */
      "./src/app/shared/pipes/localization.pipe.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var src_app_services_window_window_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/services/window/window.service */
      "./src/app/services/window/window.service.ts");

      var AgentComponent = /*#__PURE__*/function () {
        function AgentComponent(util, http, route, router, message, cartService, localization, seo, translate, window) {
          _classCallCheck(this, AgentComponent);

          this.util = util;
          this.http = http;
          this.route = route;
          this.router = router;
          this.message = message;
          this.cartService = cartService;
          this.localization = localization;
          this.seo = seo;
          this.translate = translate;
          this.window = window;
          this.params = {};
          this.agents = [];
          this.headers = [];
          this.datesArr = [];
          this.cart = [];
          this.dateCount = 5;
          this.selectedSlot = '';
          this.selectedDate = '';
          this.hover = {
            index: -1,
            tab: null
          };
          this.slotTime = '';
          this.a_id = -1;
          this.noData = false;
          this.noAgent = false;
          this.is_service = false;
          this.duration = 0;
          this.date_time = '';
          this.cartDateTimeData = {
            is_open: false,
            data: {}
          };
          this.questions = [];
          this.isLoading = false;
          this.curreny = _core_global__WEBPACK_IMPORTED_MODULE_2__["GlobalVariable"].CURRENCY;
          this.slotData = new _shared_models_slots_model__WEBPACK_IMPORTED_MODULE_12__["Slots"]();
        }

        _createClass(AgentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.seo.updateTitle("".concat(this.localization.transform('agent'), " | ").concat(_core_global__WEBPACK_IMPORTED_MODULE_2__["GlobalVariable"].SITE_NAME));
            this.styleSubscription = this.util.getStyles.subscribe(function (style) {
              _this.style = style;
            });
            this.cartSubscription = this.util.getCart.subscribe(function (cart) {
              _this.cart = cart && cart.length ? cart : [_this.util.getLocalData('selected_service', true)];
              _this.is_service = _this.cart.some(function (product) {
                return product['is_product'] == 0;
              });
              _this.routeSubscription = _this.route.queryParams.subscribe(function (params) {
                if (params) {
                  _this.params = params;
                  _this.date_time = params.date_time ? moment__WEBPACK_IMPORTED_MODULE_10__["unix"](params.date_time).format('YYYY-MM-DD HH:mm:ss') : '';
                  _this.cartDateTimeData.is_open = false;

                  _this.makeSubscribe();
                }
              });
            });
            this.makeSubscribe();
          }
          /********* Wait till true is returned **********/

        }, {
          key: "makeSubscribe",
          value: function makeSubscribe() {
            var _this2 = this;

            this.dataSubscription = this.util.callGetData.subscribe(function (showData) {
              if (showData) {
                _this2.settingSubscription = _this2.util.getSettings.subscribe(function (settings) {
                  _this2.settings = settings;

                  if (_this2.util.getLocalData('ques_data', true) && settings.app_type == 8) {
                    _this2.questions = _this2.util.getLocalData('ques_data', true);
                  }

                  _this2.getDuration();
                });

                if (!_this2.headers || !_this2.headers.length) {
                  _this2.getAgentKeys();
                } else {
                  _this2.getAgents();
                }
              }
            });
          }
        }, {
          key: "getDuration",
          value: function getDuration() {
            var _this3 = this;

            if (this.is_service) {
              this.duration = 0;
              this.cart.forEach(function (data) {
                if (data['price_type']) {
                  _this3.duration += _this3.settings.interval * data['selectedQuantity'];
                } else {
                  _this3.duration += data['duration'] * data['selectedQuantity'];
                }
              });
            }
          }
        }, {
          key: "getAgentKeys",
          value: function getAgentKeys() {
            var _this4 = this;

            this.isLoading = true;
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_6__["ApiUrl"].agent.getAgentKeys, {}).subscribe(function (response) {
              if (!!response && response.data) {
                _this4.headers = response.data;

                _this4.getAgents();
              }

              _this4.isLoading = false;
            }, function (err) {
              return _this4.isLoading = false;
            });
          }
        }, {
          key: "getAgents",
          value: function getAgents() {
            var _this5 = this;

            var form_data = {
              serviceIds: this.params['service_ids'].split(','),
              duration: this.duration,
              offset: moment__WEBPACK_IMPORTED_MODULE_10__().format('Z')
            };

            if (this.date_time) {
              form_data['datetime'] = this.date_time;
            }

            this.noAgent = false;
            this.isLoading = true;
            this.http.postAgentData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_6__["ApiUrl"].agent.getAgents, form_data, this.headers).subscribe(function (response) {
              if (!!response && response.data) {
                _this5.agents = response.data;

                _this5.createResponseModel();
              }

              _this5.noAgent = true;
              _this5.isLoading = false;
            }, function (err) {
              return _this5.isLoading = false;
            });
          }
        }, {
          key: "createResponseModel",
          value: function createResponseModel() {
            var service = this.util.getLocalData('selected_service', true);
            this.agents.forEach(function (element) {
              element['fixed_price'] = parseFloat(service.fixed_price);
              element['agent_service_price'] = 0;

              if (element.cbl_user_service_pricing && element.cbl_user_service_pricing.length) {
                var pricing = element.cbl_user_service_pricing.find(function (x) {
                  return x.service_id == service.product_id;
                });
                element['agent_service_price'] = pricing ? parseFloat(pricing.agentBufferPrice) : 0;
                element['description'] = pricing ? pricing.description : '';
              }
            });
          }
        }, {
          key: "getAvailability",
          value: function getAvailability(agent) {
            var _this6 = this;

            if (this.a_id === agent.cbl_user.id) {
              this.a_id = -1;
              return;
            } else {
              this.a_id = agent.cbl_user.id;
              this.selectedSlot = '';
              this.slotTime = '';
            }

            this.isLoading = true;
            this.http.getAgentData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_6__["ApiUrl"].agent.availability, {
              id: agent.cbl_user.id
            }, this.headers).subscribe(function (response) {
              if (!!response && response.data) {
                var datesArr = response.data[0].cbl_user_avail_dates;
                _this6.datesArr = [];
                _this6.dateCount = 5;

                if (datesArr.length) {
                  datesArr.forEach(function (el) {
                    _this6.datesArr.push(el['from_date']);
                  });
                  var repeatingDaysCheck = response.data[0].cbl_user_availablities.some(function (day) {
                    return day.status === 1;
                  });

                  if (repeatingDaysCheck) {
                    _this6.daysSlots(response.data[0], agent);
                  } else {
                    // var monentDate = moment(new Date().toString()).format('YYYY-MM-DD');
                    _this6.getSlots(_this6.datesArr[0], agent);
                  }
                } else {
                  _this6.daysSlots(response.data[0], agent);
                }
              }

              _this6.isLoading = false;
            }, function (err) {
              return _this6.isLoading = false;
            });
          }
        }, {
          key: "daysSlots",
          value: function daysSlots(data, agent) {
            var _this7 = this;

            var avalability = data.cbl_user_availablities;
            avalability.forEach(function (day) {
              if (day.status) {
                if (moment__WEBPACK_IMPORTED_MODULE_10__().day() <= day.day_id) {
                  _this7.repeatingDates(moment__WEBPACK_IMPORTED_MODULE_10__().isoWeekday(day.day_id));
                } else {
                  _this7.repeatingDates(moment__WEBPACK_IMPORTED_MODULE_10__().add(1, 'weeks').isoWeekday(day.day_id));
                }
              }
            });
            var datesArr = underscore__WEBPACK_IMPORTED_MODULE_11__["uniq"](this.datesArr.slice());
            this.datesArr = underscore__WEBPACK_IMPORTED_MODULE_11__["sortBy"](datesArr, function (o) {
              return o;
            });
            this.datesArr = this.datesArr.slice().filter(function (date) {
              return moment__WEBPACK_IMPORTED_MODULE_10__(date).format('YYYY-MM-DD') >= moment__WEBPACK_IMPORTED_MODULE_10__().format('YYYY-MM-DD');
            });
            this.getSlots(this.datesArr[0], agent);
          }
        }, {
          key: "repeatingDates",
          value: function repeatingDates(first) {
            var i = 0;

            while (i < 4) {
              this.datesArr.push(moment__WEBPACK_IMPORTED_MODULE_10__(first).add(7 * i, 'd').format('YYYY-MM-DD'));
              i++;
            }
          }
        }, {
          key: "getSlots",
          value: function getSlots(date, agent) {
            var _this8 = this;

            this.selectedDate = date;
            var params = {
              date: date,
              id: agent.cbl_user.id,
              offset: moment__WEBPACK_IMPORTED_MODULE_10__().format('Z')
            };
            this.noData = false;
            this.isLoading = true;
            this.http.getAgentData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_6__["ApiUrl"].agent.getSlots, params, this.headers, true).subscribe(function (response) {
              if (!!response && response.data) {
                var slots = response.data;
                var selectedDate = _this8.date_time || date ? moment__WEBPACK_IMPORTED_MODULE_10__(_this8.date_time || date).format('YYYY-MM-DD') : moment__WEBPACK_IMPORTED_MODULE_10__().format('YYYY-MM-DD');

                if (selectedDate == moment__WEBPACK_IMPORTED_MODULE_10__().format('YYYY-MM-DD')) {
                  slots = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](slots, function (slot) {
                    return moment__WEBPACK_IMPORTED_MODULE_10__(selectedDate + ' ' + slot).isAfter(moment__WEBPACK_IMPORTED_MODULE_10__(), 'minutes');
                  });
                }

                slots = underscore__WEBPACK_IMPORTED_MODULE_11__["sortBy"](slots, function (o) {
                  return o;
                });

                if (slots.length) {
                  _this8.slotData = new _shared_models_slots_model__WEBPACK_IMPORTED_MODULE_12__["Slots"]();
                  slots.forEach(function (time) {
                    switch (true) {
                      case _this8.getHours(time) >= 0 && _this8.getHours(time) < 12:
                        _this8.slotData.Morning.push(_this8.timeFormat(time));

                        break;

                      case _this8.getHours(time) >= 12 && _this8.getHours(time) < 16:
                        _this8.slotData.Afternoon.push(_this8.timeFormat(time));

                        break;

                      case _this8.getHours(time) >= 16 && _this8.getHours(time) < 21:
                        _this8.slotData.Evening.push(_this8.timeFormat(time));

                        break;

                      case _this8.getHours(time) >= 21 && _this8.getHours(time) < 24:
                        _this8.slotData.Night.push(_this8.timeFormat(time));

                        break;
                    }
                  });
                } else {
                  _this8.slotData = new _shared_models_slots_model__WEBPACK_IMPORTED_MODULE_12__["Slots"]();
                }
              }

              _this8.noData = true;
              _this8.isLoading = false;
            }, function (err) {
              return _this8.isLoading = false;
            });
          }
        }, {
          key: "getHours",
          value: function getHours(time) {
            return moment__WEBPACK_IMPORTED_MODULE_10__["duration"](time).asHours();
          }
        }, {
          key: "timeFormat",
          value: function timeFormat(time) {
            return moment__WEBPACK_IMPORTED_MODULE_10__(time, ["HH:mm:ss"]).format('h:mm A');
          }
        }, {
          key: "selectSlot",
          value: function selectSlot(slot) {
            this.slotTime = slot;
            this.selectedSlot = this.selectedDate + ' ' + moment__WEBPACK_IMPORTED_MODULE_10__(slot, ["h:mm A"]).format('HH:mm:ss');
          }
        }, {
          key: "getDates",
          value: function getDates() {
            this.datesArr = this.datesArr.filter(function (el) {
              return new Date(el) >= new Date();
            });
            return this.datesArr.slice(this.dateCount - 5, this.dateCount);
          }
        }, {
          key: "increment",
          value: function increment() {
            this.dateCount += 5;
            this.getDates();
          }
        }, {
          key: "decrement",
          value: function decrement() {
            this.dateCount -= 5;
            this.getDates();
          }
        }, {
          key: "checkSlot",
          value: function checkSlot(selectedAgent) {
            var _this9 = this;

            if ((!this.selectedSlot || !this.slotTime) && !this.date_time) {
              this.message.toast('warning', this.translate.instant("Please Select ".concat(this.localization.transform('agent'), " Slot")));
              return;
            }

            var payload = {
              id: selectedAgent.cbl_user.id,
              duration: this.duration,
              offset: moment__WEBPACK_IMPORTED_MODULE_10__().format('Z'),
              datetime: this.selectedSlot || this.date_time
            };
            this.isLoading = true;
            this.http.getAgentData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_6__["ApiUrl"].agent.checkAgentSlot, payload, this.headers).subscribe(function (response) {
              if (response && response.statusCode == 200) {
                _this9.addToCart(selectedAgent);
              }

              _this9.isLoading = false;
            }, function (err) {
              _this9.isLoading = false;
            });
          }
        }, {
          key: "addToCart",
          value: function addToCart(selectedAgent) {
            if ((!this.selectedSlot || !this.slotTime) && !this.date_time) {
              this.message.toast('warning', this.translate.instant("Please Select ".concat(this.localization.transform('agent'), " Slot")));
              return;
            }

            var agentSlot = {
              date_time: this.selectedSlot || this.date_time,
              agent: selectedAgent,
              isPackage: this.params.isPkg
            };
            var service = this.util.getLocalData('selected_service', true);

            if (!!service) {
              service['agent_slot'] = agentSlot;
            }

            this.cartService.addToCart(service, [], true);
            this.util.setLocalData('selected_service', null);
            return;
          } // generateOrder(selectedAgent) {
          // let obj = {
          //   cartId: this.params.cart_id,
          //   languageId: this.util.handler.languageId,
          //   isPackage: this.params.isPkg,
          //   paymentType: this.params.payType,
          //   accessToken: this.user.getUserToken,
          //   offset: moment().format('Z'),
          //   agentIds: [selectedAgent.cbl_user.id],
          //   // date_time: this.selectedSlot
          //   date_time: this.date_time,
          //   duration: this.duration,
          //   type: this.settings.app_type
          // }
          // if (this.params.promo) {
          //   obj['promoCode'] = this.params.promo;
          //   obj['discountAmount'] = this.params.discount;
          //   obj['promoId'] = this.params.promoId;
          // }
          // if (this.params.paymentGatewayId) {
          //   obj['gateway_unique_id'] = this.params.paymentGatewayId;
          //   obj['payment_token'] = this.params.token;
          // }
          // if (this.settings.extra_instructions == 1) {
          //   obj['parking_instructions'] = this.params.parking_instructions;
          //   obj['area_to_focus'] = this.params.area_to_focus;
          // }
          // obj['duration'] = 0;
          // if (this.is_service) {
          //   obj['duration'] = 0;
          //   this.cart.forEach(data => {
          //     if (data['price_type']) {
          //       obj['duration'] += (this.settings.interval * data['selectedQuantity']);
          //     } else {
          //       obj['duration'] += (data['duration'] * data['selectedQuantity']);
          //     }
          //   });
          // }
          // if (this.settings.app_type == 8 && this.questions.length) {
          //   obj['questions'] = this.questions.slice();
          // }
          // this.isLoading = true;
          // this.http.postData(ApiUrl.generateOrder, obj, false)
          //   .subscribe(response => {
          //     if (!!response && response.data) {
          //       this.router.navigate(['/orders/order-detail'], { queryParams: { orderId: response.data } });
          //       this.util.setCart([]);
          //       setTimeout(() => {
          //         this.message.alert('success', `${this.localization.transform('order')} Placed Successfully!`);
          //       }, 500);
          //       this.util.clearLocalData('cart_id');
          //       this.util.clearLocalData('pickUp_DT');
          //     }
          //     this.isLoading = false;
          //   }, (err) => this.isLoading = false);
          // }

        }, {
          key: "selectDate",
          value: function selectDate() {
            this.cartDateTimeData = {
              is_open: true,
              data: this.params
            };
          }
        }, {
          key: "checkIfBioFound",
          value: function checkIfBioFound(agent) {
            if (agent.cbl_user.agent_bio_url !== null) {
              return true;
            } else if (agent.cbl_user.image !== null) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "viewBoi",
          value: function viewBoi(agent) {
            if (agent.cbl_user.agent_bio_url !== null) {
              window.open(agent.cbl_user.agent_bio_url, '_blank');
            } else if (agent.cbl_user.image !== null) {
              window.open(agent.cbl_user.image, '_blank');
            } else {
              return false;
            }
          }
        }, {
          key: "onBack",
          value: function onBack() {
            var url = this.util.getRedirectUrl();

            if (url && url == '/') {
              this.router.navigate(['/', 'cart']);
            } else {
              this.router.navigateByUrl(url);
            }
          }
        }, {
          key: "trackByAgentFn",
          value: function trackByAgentFn(id, index) {
            return index;
          }
        }, {
          key: "trackByDateFn",
          value: function trackByDateFn(id, index) {
            return index;
          }
        }, {
          key: "trackByMorningFn",
          value: function trackByMorningFn(id, index) {
            return index;
          }
        }, {
          key: "trackByAfternoonFn",
          value: function trackByAfternoonFn(id, index) {
            return index;
          }
        }, {
          key: "trackByEveningFn",
          value: function trackByEveningFn(id, index) {
            return index;
          }
        }, {
          key: "trackBySlotFn",
          value: function trackBySlotFn(id, index) {
            return index;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.styleSubscription.unsubscribe();
            this.dataSubscription.unsubscribe();
            this.routeSubscription.unsubscribe();
            this.settingSubscription.unsubscribe();
            this.cartSubscription.unsubscribe();
          }
        }]);

        return AgentComponent;
      }();

      AgentComponent.ctorParameters = function () {
        return [{
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"]
        }, {
          type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"]
        }, {
          type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
        }, {
          type: _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_13__["LocalizationPipe"]
        }, {
          type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]
        }, {
          type: Window,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
            args: [src_app_services_window_window_service__WEBPACK_IMPORTED_MODULE_15__["WINDOW"]]
          }]
        }];
      };

      AgentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'app-agent',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./agent.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/agent/agent.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./agent.component.scss */
        "./src/app/layout/pages/cart/agent/agent.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"], _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"], _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_13__["LocalizationPipe"], _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"], Window])], AgentComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/cart-detail/cart.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/layout/pages/cart/cart-detail/cart.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesCartCartDetailCartComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".default_address.active {\n  border-color: #47d7ff;\n}\n\n.delvr-type {\n  margin: 5px 0px;\n}\n\n.delvr-type .radio_text {\n  font-size: 15px;\n}\n\n.delvr-type .text {\n  font-size: 12px !important;\n  color: #919191;\n  margin-left: 30px;\n}\n\n.agent {\n  margin-bottom: -10px;\n  float: right;\n}\n\n.radio span {\n  margin-left: 13px;\n  cursor: pointer;\n}\n\n.modal-header h4 {\n  float: left;\n}\n\n.modal-header p {\n  display: inline-flex;\n  margin-left: 20px;\n  margin-top: 8px;\n  cursor: pointer;\n}\n\n.qty {\n  padding: 0px 5px;\n  margin: 5px 0px 0px;\n  font-size: 14px;\n}\n\n.btn-number {\n  padding: 2px 10px;\n  line-height: 1.5;\n}\n\n.cart-product-img {\n  border-radius: 4px;\n}\n\nul li {\n  color: inherit;\n}\n\n.self-pickup {\n  border-bottom: 0px;\n  display: flex;\n}\n\n.self-pickup li {\n  width: 50%;\n}\n\n.self-pickup li button {\n  display: block;\n  width: 100%;\n}\n\n.remember {\n  border: 1px solid var(--secondaryColor);\n  padding: 20px;\n  border-radius: 4px;\n}\n\n.remember h4 {\n  border-bottom: 1px dashed var(--secondaryColor);\n  color: var(--primaryColor);\n}\n\n.remember p {\n  color: var(--baseColor);\n  opacity: 0.8;\n}\n\n.offer-msg {\n  border: 1px solid var(--secondaryColor);\n  padding: 10px;\n  color: var(--primaryColor);\n  border-radius: 4px;\n}\n\n.list-inline-item .btn {\n  padding: 0px;\n}\n\n.verify-tbl {\n  position: absolute;\n  right: 20px;\n  cursor: pointer;\n  color: #28a68d;\n  font-weight: 700;\n}\n\n.verify-tbl:hover {\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvY2FydC1kZXRhaWwvY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRkE7RUFJSSxlQUFlO0FBRW5COztBQU5BO0VBUUksMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxpQkFBaUI7QUFFckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtBQUNkOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFBakI7O0FBSUE7RUFFSSxXQUFXO0FBRmY7O0FBQUE7RUFLSSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0FBRG5COztBQUtBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0FBRmpCOztBQUtBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUZsQjs7QUFLQTtFQUNFLGtCQUFrQjtBQUZwQjs7QUFLQTtFQUNFLGNBQWM7QUFGaEI7O0FBS0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUZmOztBQUFBO0VBS0ksVUFBVTtBQURkOztBQUpBO0VBUU0sY0FBYztFQUNkLFdBQVc7QUFBakI7O0FBS0E7RUFDRSx1Q0FBdUM7RUFDdkMsYUFBYTtFQUNiLGtCQUFrQjtBQUZwQjs7QUFEQTtFQU1JLCtDQUErQztFQUMvQywwQkFBMEI7QUFEOUI7O0FBTkE7RUFXSSx1QkFBdUI7RUFDdkIsWUFBWTtBQURoQjs7QUFLQTtFQUNFLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUZwQjs7QUFJQTtFQUNFLFlBQVk7QUFEZDs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQXdCO0VBQ3hCLGdCQUFnQjtBQUFsQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlcy9jYXJ0L2NhcnQtZGV0YWlsL2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVmYXVsdF9hZGRyZXNzLmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogIzQ3ZDdmZjtcbn1cblxuLmRlbHZyLXR5cGUge1xuICBtYXJnaW46IDVweCAwcHg7XG5cbiAgLnJhZGlvX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG4gIC50ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzkxOTE5MTtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgfVxufVxuXG4uYWdlbnQge1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4vLyAubWV0aG9kLW9wdC1vdXR0ZXIge1xuLnJhZGlvIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLy8gfVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgaDQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIHAge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLnF0eSB7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogNXB4IDBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJ0bi1udW1iZXIge1xuICBwYWRkaW5nOiAycHggMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmNhcnQtcHJvZHVjdC1pbWcge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbnVsIGxpIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zZWxmLXBpY2t1cCB7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbiAgZGlzcGxheTogZmxleDtcblxuICBsaSB7XG4gICAgd2lkdGg6IDUwJTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG4ucmVtZW1iZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICBoNCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogdmFyKC0tYmFzZUNvbG9yKTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbn1cblxuLm9mZmVyLW1zZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeUNvbG9yKTtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5saXN0LWlubGluZS1pdGVtIC5idG4ge1xuICBwYWRkaW5nOiAwcHg7XG59XG4udmVyaWZ5LXRibCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHJnYig0MCwgMTY2LCAxNDEpOztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi52ZXJpZnktdGJsOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/cart-detail/cart.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/layout/pages/cart/cart-detail/cart.component.ts ***!
      \*****************************************************************/

    /*! exports provided: CartComponent */

    /***/
    function srcAppLayoutPagesCartCartDetailCartComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
        return CartComponent;
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


      var _components_delivery_address_detail_delivery_address_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../components/delivery-address-detail/delivery-address-detail.component */
      "./src/app/layout/pages/cart/components/delivery-address-detail/delivery-address-detail.component.ts");
      /* harmony import */


      var _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../core/apiUrl */
      "./src/app/core/apiUrl.ts");
      /* harmony import */


      var _shared_models_cart_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../shared/models/cart.model */
      "./src/app/shared/models/cart.model.ts");
      /* harmony import */


      var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../services/messaging/messaging.service */
      "./src/app/services/messaging/messaging.service.ts");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");
      /* harmony import */


      var _services_http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../services/http/http.service */
      "./src/app/services/http/http.service.ts");
      /* harmony import */


      var _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../../core/theme/styleConstants.model */
      "./src/app/core/theme/styleConstants.model.ts");
      /* harmony import */


      var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../../../core/theme/styleVariables.model */
      "./src/app/core/theme/styleVariables.model.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
      /* harmony import */


      var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./../../../../services/cart/cart.service */
      "./src/app/services/cart/cart.service.ts");
      /* harmony import */


      var _shared_models_cart_price_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../shared/models/cart-price.model */
      "./src/app/shared/models/cart-price.model.ts");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! lodash */
      "./node_modules/lodash/lodash.js");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_18__);
      /* harmony import */


      var _core_global__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
      /* harmony import */


      var _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../../shared/pipes/localization.pipe */
      "./src/app/shared/pipes/localization.pipe.ts");
      /* harmony import */


      var _components_cart_price_detail_cart_price_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../components/cart-price-detail/cart-price-detail.component */
      "./src/app/layout/pages/cart/components/cart-price-detail/cart-price-detail.component.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _services_firebase_analytics_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../../../services/firebase-analytics/firebase-analytics.service */
      "./src/app/services/firebase-analytics/firebase-analytics.service.ts");
      /* harmony import */


      var _services_firebase_analytics_segment_analytics_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../../../services/firebase-analytics/segment-analytics.service */
      "./src/app/services/firebase-analytics/segment-analytics.service.ts");
      /* harmony import */


      var _shared_models_apiKeys_model__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./../../../../shared/models/apiKeys.model */
      "./src/app/shared/models/apiKeys.model.ts"); // declare const $;


      var CartComponent = /*#__PURE__*/function () {
        function CartComponent(http, util, user, cartService, message, router, route, dialogService, localization, translate, userService, seo, firebaseAnalyticsSvc, segmentAnalyticsSvc) {
          _classCallCheck(this, CartComponent);

          this.http = http;
          this.util = util;
          this.user = user;
          this.cartService = cartService;
          this.message = message;
          this.router = router;
          this.route = route;
          this.dialogService = dialogService;
          this.localization = localization;
          this.translate = translate;
          this.userService = userService;
          this.seo = seo;
          this.firebaseAnalyticsSvc = firebaseAnalyticsSvc;
          this.segmentAnalyticsSvc = segmentAnalyticsSvc;
          this.cart = [];
          this.full_cart = [];
          this.currentUser = {};
          this.priceObj = new _shared_models_cart_price_model__WEBPACK_IMPORTED_MODULE_17__["CartPriceModel"]();
          this.addressDetail = {};
          this.cartModel = {};
          this.updateCartModel = {};
          this.cartDateTimeData = {
            is_open: false,
            data: {}
          };
          this.paymentOrderModel = {};
          this.walletAmount = 0;
          this.totalItems = 0;
          this.deliveryType = 0;
          this.urgentPrice = 0;
          this.self_pickup = 0;
          this.book_dining = 0;
          this.delivery_opt = 1;
          this.showDeliveryOption = false;
          this.showScheduleTime = false;
          this.scheduleOrderSlot = null;
          this.schedulingData = {};
          this.currency = '';
          this.orderId = '';
          this.paymentType = '0';
          this.product_id = '';
          this.min = new Date();
          this.is_agent = false;
          this.loggedIn = false;
          this.is_service = false;
          this.delivery_charge = 0;
          this.isDarkTheme = false;
          this.isPayOnline = false;
          this.isLoading = false;
          this.isCartCheck = false;
          this.agent_tips = [];
          this.questions = [];
          this.transaction = {};
          this.instructions = '';
          this.parking_instruction = '';
          this.area_to_focus = '';
          this.show_prescription = false;
          this.show_instructions = false;
          this.displayAddModal = new rxjs__WEBPACK_IMPORTED_MODULE_13__["BehaviorSubject"](false);
          this.payment_after_confirmation = 0;
          this.geofencedGateways = [];
          this.region_delivery_charge = 0;
          this.hidePaymentModeSelection = false;
          this.isBookNow = false;
          this.distance_value = 0;
          this.applyWalletDiscount = false;
          this.place_order_directly = 0;
          this.serviceDateTime = '';
          this.is_supplier_scheduling = false;
          this.have_coin_change = "0";
          this.min_distance_price_list = [];
          this.calc_distance = 0;
          this.total_product_weight = 0;
          this.product_weight_list = [];
          this.supplier_delivery_time_duration = {
            time: 0,
            time_unit: ''
          };
          this.is_own_delivery = 0;
          this.order_type_wise_gateways = [];
          this.hidePaymentModeOption = false;
          this.is_cutlery_required = false;
          this.no_touch_delivery = false;
          this.is_out_network = false;
          this.rest_user_service_charges = [];
          this.checkedProdList = [];
          this.delivery_charges_array = [];
          this.loyalty_points = 0;
          this.selected_currency = new _shared_models_apiKeys_model__WEBPACK_IMPORTED_MODULE_26__["Currency"]();
          this.appointmentOrderInCart = 0;
          this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_10__["StyleVariables"]();
          this.saveBtn = new _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_9__["StyleConstants"]();
          this.cartModel = new _shared_models_cart_model__WEBPACK_IMPORTED_MODULE_4__["CartModel"]();
          this.currency = _core_global__WEBPACK_IMPORTED_MODULE_19__["GlobalVariable"].CURRENCY;
        }

        _createClass(CartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.web_user = this.util.getLocalData('web_user', true);
            this.seo.updateTitle("Cart | ".concat(_core_global__WEBPACK_IMPORTED_MODULE_19__["GlobalVariable"].SITE_NAME));
            this.styleSubscription = this.util.getStyles.subscribe(function (style) {
              _this10.style = style;
              _this10.saveBtn.backgroundColor = style.primaryColor;
              _this10.saveBtn.borderColor = style.primaryColor;
              _this10.saveBtn.color = '#ffffff';
            });
            this.themeSubscription = this.util.getDarkTheme.subscribe(function (darkTheme) {
              _this10.isDarkTheme = darkTheme;
            });
            this.settingSubscription = this.util.getSettings.subscribe(function (settings) {
              if (settings) {
                _this10.settings = settings;

                if (settings.app_type == 7) {
                  _this10.self_pickup = 1;
                } else if (settings.app_type == 8) {
                  // || (settings.is_pickup_order == 2 && settings.is_table_booking == '0')
                  _this10.self_pickup = 0;
                  _this10.showDeliveryOption = false;
                }

                if (settings.enable_id_for_invoice_in_profile) {
                  _this10.id_for_invoice = _this10.web_user.id_for_invoice;
                }

                var selfPickup = _this10.cartService.getOrderPickType();

                if (selfPickup == 2) {
                  if (_this10.util.handler.selfPickup == 1) {
                    _this10.self_pickup = 1;
                  } else {
                    _this10.self_pickup = 0;
                    _this10.showDeliveryOption = true;
                  }
                } else {
                  _this10.showDeliveryOption = true;
                  _this10.self_pickup = selfPickup || 0;
                }

                switch (selfPickup) {
                  case "0":
                    _this10.onDelivery();

                    break;

                  case "1":
                    _this10.onSelfPickup();

                    break;

                  case "3":
                    _this10.onDining();

                    break;
                }
              }
            });

            if (JSON.parse(localStorage.getItem('table_booking_details'))) {
              this.table_booking_details = JSON.parse(localStorage.getItem('table_booking_details'));
              this.table_booking_details.table_booking_actual_price = this.table_booking_details.table_booking_price;
              this.is_after_table_booking = true;
              this.onDining();
            }

            this.userSubscription = this.user.currentUser.subscribe(function (user) {
              if (!!user && user['access_token']) {
                _this10.paymentOrderModel.user = user;
                _this10.loggedIn = true;
                _this10.currentUser = user;
              } else {
                _this10.loggedIn = false;
              }
            });
            this.cartInit();

            if (this.settings.is_multicurrency_enable) {
              this.getCurrency();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.getLocalData();
          }
        }, {
          key: "cartInit",
          value: function cartInit() {
            var _this11 = this;

            this.routeSubscription = this.route.queryParams.subscribe(function (params) {
              if (params['place_order'] == 1) {
                _this11.isLoading = true;
                _this11.place_order_directly = parseInt(params['place_order']);
              }

              _this11.cartSubscription = _this11.util.getCart.subscribe(function (cart) {
                if (cart) {
                  _this11.calculateProductWeight(cart);

                  if (params && params['p_id']) {
                    _this11.product_id = params['p_id'];
                    var product = cart.slice().find(function (product) {
                      return params['p_id'] == product['productId'];
                    });

                    if (!!product) {
                      _this11.cart = [product];
                      _this11.totalItems = product['selectedQuantity'];
                    }
                  } else {
                    _this11.cart = cart;
                    console.log(_this11.cart);
                    _this11.totalItems = _this11.util.getTotalCountCart();
                  }

                  _this11.is_agent = false;
                  _this11.is_service = false;
                  _this11.show_prescription = false;
                  _this11.show_instructions = false;

                  _this11.cart.forEach(function (product, i, arr) {
                    if (product['is_agent'] == 1) _this11.is_agent = true;
                    if (product['is_product'] == 0) _this11.is_service = true;
                    if (product['cart_image_upload'] == 1) _this11.show_prescription = true;
                    if (product['order_instructions'] == 1) _this11.show_instructions = true;

                    if ((arr.length > 1 && i > 0 && product.self_pickup == arr[i - 1].self_pickup || _this11.cart.length == 1) && product.self_pickup != 2 && _this11.showDeliveryOption && _this11.settings.app_type == 1 && _this11.settings.is_table_booking == 0) {
                      _this11.showDeliveryOption = false;
                    }
                  });

                  if (_this11.cart.length && _this11.settings.order_request == 1) {
                    _this11.payment_after_confirmation = _this11.cart[0].payment_after_confirmation;
                  }

                  if (_this11.cart.length && _this11.settings.enable_product_appointment && _this11.cart[0].is_appointment) {
                    _this11.onSelfPickup();
                  }
                }
              });

              if (_this11.cart.length) {
                _this11.checkCartUpdate();
              }
            });
          }
        }, {
          key: "checkCartUpdate",
          value: function checkCartUpdate() {
            var _this12 = this;

            var product_ids = this.cart.map(function (product) {
              return product['productId'] || product['product_id'];
            });
            var payload = {
              product_ids: product_ids,
              latitude: this.util.handler.latitude,
              longitude: this.util.handler.longitude
            };
            var cart_address = this.util.getLocalData('cart_address', true);

            if (cart_address) {
              payload.latitude = cart_address.latitude;
              payload.longitude = cart_address.longitude;
            } else if (this.addressDetail && this.addressDetail.address) {
              payload.latitude = this.addressDetail.address.latitude;
              payload.longitude = this.addressDetail.address.longitude;
            }

            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].checkProductList, payload).subscribe(function (response) {
              _this12.isCartCheck = true;

              if (!!response && response.data) {
                if (response.data.min_order_distance_wise) {
                  _this12.min_distance_price_list = response.data.min_order_distance_wise;
                }

                if (response.data.supplier_weight_wise_delivery_charge) {
                  _this12.product_weight_list = response.data.supplier_weight_wise_delivery_charge;
                }

                if (_this12.settings.is_customized_commision_enable == 1) {
                  _this12.priceObj.minimum_commission_amount = response.data.customized_commission_data.minimum_amount;
                  _this12.priceObj.minimum_cart_fee = response.data.customized_commission_data.minimum_cart_fee;
                }

                _this12.is_own_delivery = response.data.is_own_delivery || 0;

                if (_this12.settings.is_enable_delivery_type && response.data.supplier_delivery_types.length && !_this12.is_own_delivery) {
                  response.data.supplier_delivery_types.forEach(function (element) {
                    switch (element.type) {
                      case 0:
                        _this12.supplier_delivery_type_normal = element;
                        break;

                      case 1:
                        _this12.supplier_delivery_type_express = element;
                        break;
                    }
                  });

                  if (_this12.supplier_delivery_type_normal || _this12.supplier_delivery_type_express) {
                    _this12.onSelectDeliveryType(_this12.supplier_delivery_type_normal ? 0 : 1);
                  }
                }

                if (_this12.settings.dynamic_order_type_client_wise) {
                  if (_this12.settings.is_table_booking && _this12.settings.dynamic_order_type_client_wise_dinein) {
                    _this12.onDining();
                  }

                  if ((_this12.settings.dynamic_order_type_client_wise_pickup || _this12.settings.enable_product_appointment && response.data.result[0].is_appointment) && !Object.keys(_this12.table_booking_details || {}).length) {
                    _this12.onSelfPickup();
                  }

                  if (_this12.settings.dynamic_order_type_client_wise_delivery && !Object.keys(_this12.table_booking_details || {}).length) {
                    _this12.onDelivery();
                  }

                  if (!_this12.settings.dynamic_order_type_client_wise_delivery) {
                    _this12.hidePaymentModeOption = true;
                    _this12.paymentType = '1';
                  }
                }

                if (response.data.userSubscriptionData) {
                  _this12.activePlan = response.data.userSubscriptionData;
                }

                if (_this12.settings.is_loyality_enable == 1) {
                  _this12.priceObj.productLoyaltyDiscountAmount = response.data.loyalityLevelDiscountAmount;
                  _this12.priceObj.totalLoyaltyAmount = response.data.loyalitPointDiscountAmount;

                  if (_this12.settings.enable_referral_bal_limit) {
                    if (response.data.loyalitPointDiscountAmount > _this12.settings.referral_bal_limit_per_order) {
                      _this12.priceObj.totalLoyaltyAmount = _this12.settings.referral_bal_limit_per_order;
                    }
                  }
                }

                if (_this12.settings.enable_min_loyality_points) {
                  _this12.loyalty_points = response.data.loyalty_points;
                }

                if (response.data.payment_gateways.length) {
                  _this12.geofencedGateways = response.data.payment_gateways;

                  var cod_index = _this12.geofencedGateways.findIndex(function (el) {
                    return el === 'cod';
                  });

                  if (cod_index > -1) {
                    _this12.geofencedGateways.splice(cod_index, 1);

                    if (!_this12.geofencedGateways.length) {
                      // this.hidePaymentModeSelection = true;
                      _this12.setPaymentType('0');
                    }
                  } else {
                    _this12.setPaymentType('1'); // this.hidePaymentModeSelection = true;

                  }
                }

                if (_this12.settings && _this12.settings.is_enable_orderwise_gateways && response.data.order_type_wise_gateways.length) {
                  _this12.order_type_wise_gateways = response.data.order_type_wise_gateways;

                  _this12.setOrderwiseGateways();
                }

                _this12.region_delivery_charge = response.data.region_delivery_charge ? response.data.region_delivery_charge : 0;
                _this12.agent_tips = response.data.tips || [];
                var products = response.data.result;
                _this12.checkedProdList = products;

                if (!products || !products.length) {
                  return;
                }

                ;
                _this12.distance_value = products[0].distance_value;
                _this12.is_supplier_scheduling = products.some(function (product) {
                  return product['is_scheduled'] == 1;
                });

                if (_this12.settings.is_currency_exchange_rate == 1) {
                  _this12.priceObj.currency_exchange_rate = products[0].currency_exchange_rate;
                  _this12.priceObj.local_currency = products[0].local_currency;
                }

                _this12.is_out_network = _this12.cart.some(function (item) {
                  return item['is_out_network'] == 1;
                });

                _this12.calculateSupplierUserSvcCharges(products);

                if (_this12.settings.table_book_mac_theme == 1 && _this12.table_booking_details) {
                  _this12.table_booking_details.table_booking_discount = products[0].table_booking_discount;
                  _this12.table_booking_details.table_booking_actual_price = _this12.table_booking_details.table_booking_price;
                  var table_discount_price = _this12.priceObj.amount * _this12.table_booking_details.table_booking_discount / 100;

                  if (table_discount_price > _this12.table_booking_details.table_booking_price) {
                    _this12.table_booking_details.table_booking_price = table_discount_price;
                  }
                }

                _this12.cart.forEach(function (cart_item) {
                  products.forEach(function (element) {
                    if (cart_item['productId'] == element['product_id']) {
                      if (element.quantity > 0 && element.purchased_quantity < element.quantity) {
                        cart_item['price_type'] = element['price_type'];
                        cart_item['quantity'] = element['quantity'];
                        cart_item['purchased_quantity'] = element['purchased_quantity'];

                        if (element['quantity'] < cart_item['selectedQuantity']) {
                          cart_item['selectedQuantity'] = 1;
                        }

                        if (_this12.settings.is_loyality_enable == 1) {
                          cart_item['perProductLoyalityDiscount'] = element['perProductLoyalityDiscount'];
                        }

                        cart_item['latitude'] = element['latitude'];
                        cart_item['longitude'] = element['longitude'];
                        cart_item['handling_supplier'] = element['handling_supplier'];
                        cart_item['handling_admin'] = element['handling_admin'];
                        cart_item['delivery_charges'] = element['delivery_charges'];
                        cart_item['radius_price'] = element['radius_price'];
                        cart_item['is_product'] = element['is_product'];
                        cart_item['distance_value'] = element['distance_value'];
                        cart_item['base_delivery_charges'] = element['base_delivery_charges'];
                        cart_item['base_delivery_charges_array'] = element['base_delivery_charges_array'];
                        cart_item['user_service_charge'] = element['user_service_charge'];

                        if (cart_item['discount'] == element['discount']) {
                          cart_item['isOutOfStock'] = false;

                          if (cart_item['price_type']) {
                            cart_item['hourly_price'] = element['hourly_price'];

                            _this12.cartService.calculateProductHourlyPrice(cart_item);
                          } else {
                            cart_item['fixed_price'] = parseFloat(element['fixed_price']);

                            if (_this12.settings.loyality_discount_on_product_listing == 1) {
                              if (!!element['perProductLoyalityDiscount']) {
                                cart_item.fixed_price = cart_item.fixed_price - (element['perProductLoyalityDiscount'] || 0);
                              }
                            }

                            cart_item['display_price'] = parseFloat(element['display_price']);
                          }

                          if (cart_item['customization'] && cart_item['customization'].length) {
                            var addons = _this12.makeAddOnModel(cart_item['customization']);

                            element.adds_on.forEach(function (addon) {
                              addon.value.forEach(function (type) {
                                addons.forEach(function (cart_type) {
                                  if (cart_type['type_id'] == type['type_id']) {
                                    cart_type['price'] = type['price'];
                                    cart_type['type_name'] = type['type_name'];
                                  }
                                });
                              });
                            });
                          }
                        }

                        cart_item['isOutOfStock'] = false;
                      } else {
                        cart_item['isOutOfStock'] = true; // this.cart.splice(this.cart.indexOf(cart_item), 1);
                      }

                      _this12.util.setCart(_this12.cart);
                    }
                  });
                });
              }
            });
          }
        }, {
          key: "calculateSupplierUserSvcCharges",
          value: function calculateSupplierUserSvcCharges(products) {
            if (this.settings.enable_flat_user_service_charge) {
              this.rest_user_service_charges = [];
              var dumyList = Object.assign([], products);
              var uniques = [];
              dumyList.forEach(function (item) {
                var i = uniques.findIndex(function (x) {
                  return x.supplier_id == item.supplier_id;
                });

                if (i <= -1) {
                  uniques.push(item);
                }
              });
              this.rest_user_service_charges = uniques;
            } else if (this.settings.vendor_status == 1) {
              this.rest_user_service_charges = this.cart;
            }
          }
        }, {
          key: "calculateProductWeight",
          value: function calculateProductWeight(cartItems) {
            var _this13 = this;

            this.total_product_weight = 0;
            cartItems.forEach(function (element) {
              _this13.total_product_weight += element.duration * element.selectedQuantity;
            });
          }
        }, {
          key: "getLocalData",
          value: function getLocalData() {
            if (this.util.getLocalData('ques_data', true)) {
              this.questions = this.util.getLocalData('ques_data', true);
            }

            this.pickUp_dateTime = this.util.getLocalData('pickUp_DT', true);
          }
        }, {
          key: "setPrice",
          value: function setPrice(priceDetail) {
            // setTimeout(() => { this.priceObj = priceDetail; }, 100);
            this.priceObj = priceDetail;

            if (this.settings.table_book_mac_theme == 1 && this.table_booking_details) {
              var table_discount_price = this.priceObj.amount * this.table_booking_details.table_booking_discount / 100;

              if (table_discount_price > this.table_booking_details.table_booking_actual_price) {
                this.table_booking_details.table_booking_price = table_discount_price;
              } else {
                this.table_booking_details.table_booking_price = this.table_booking_details.table_booking_actual_price;
              }
            }
          }
        }, {
          key: "setAddress",
          value: function setAddress(addressObj) {
            var _this14 = this;

            if (addressObj) {
              this.addressDetail = addressObj;
              this.walletAmount = this.addressDetail['wallet_amount'];

              if (addressObj.region_delivery_charge) {
                this.region_delivery_charge = addressObj.region_delivery_charge;
              }

              if (this.cart.length && addressObj.address && addressObj.address.latitude && addressObj.address.longitude && (this.settings.app_type == 1 || this.settings.app_type == 2 && this.settings.ecom_agent_module == 1) && this.self_pickup != 1) {
                if (this.settings.delivery_charge_type == 1) {
                  if (this.cart.length > 1) {
                    this.delivery_charge = 0;

                    var products = _toConsumableArray(new Map(this.cart.map(function (item) {
                      return [item['supplier_branch_id'], item];
                    })).values());

                    products.forEach(function (el) {
                      _this14.delivery_charge += el.radius_price;
                    });
                    this.addressDetail.address['delivery_charge'] = this.delivery_charge;
                  } else {
                    this.delivery_charge = this.cart[0].radius_price;
                    this.addressDetail.address['delivery_charge'] = this.delivery_charge;
                  }
                } else {
                  if (this.settings.enable_multi_supplier_delivery_charge_distance_wise == 1) {
                    var supplier_data = _toConsumableArray(new Map(this.cart.map(function (item) {
                      return [item['supplier_id'], item];
                    })).values()).map(function (product) {
                      return {
                        supplierId: product.supplier_id,
                        source_latitude: product.latitude,
                        source_longitude: product.longitude,
                        dest_latitude: addressObj.address.latitude,
                        dest_longitude: addressObj.address.longitude
                      };
                    });

                    if (this.region_delivery_charge) {
                      if (this.settings.is_enabled_multiple_base_delivery_charges == 1) {
                        this.delivery_charge = this.region_delivery_charge;
                      } else {
                        this.delivery_charge = this.region_delivery_charge + this.addressDetail['base_delivery_charges'];
                      }

                      this.addressDetail.address['delivery_charge'] = this.delivery_charge;

                      if (this.settings.enable_min_order_distance_wise == '1') {
                        this.getGoogleMatrixLocationSupplierWise(supplier_data);
                      }
                    } else {
                      this.getGoogleMatrixLocationSupplierWise(supplier_data);
                    }
                  } else {
                    var origin = {
                      lat: this.cart[0].latitude,
                      lng: this.cart[0].longitude
                    };
                    var destination = {
                      lat: addressObj.address.latitude,
                      lng: addressObj.address.longitude
                    };

                    if (this.region_delivery_charge) {
                      if (this.settings.is_enabled_multiple_base_delivery_charges == 1) {
                        this.delivery_charge = this.region_delivery_charge;
                      } else {
                        this.delivery_charge = this.region_delivery_charge + this.addressDetail['base_delivery_charges'];
                      }

                      this.addressDetail.address['delivery_charge'] = this.delivery_charge;

                      if (this.settings.enable_min_order_distance_wise == '1') {
                        this.getGoogleMatrixLocation(origin, destination);
                      }
                    } else {
                      this.getGoogleMatrixLocation(origin, destination);
                    }
                  }
                }

                this.paymentOrderModel.address = this.addressDetail.address;
              }

              if (this.place_order_directly == 1) {
                (function () {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return this.delay(2000);

                          case 2:
                            this.placeOrder();

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));
                })();
              }
            }
          }
        }, {
          key: "getGoogleMatrixLocation",
          value: function getGoogleMatrixLocation(origin, destination) {
            var _this15 = this;

            var params = {
              source_latitude: origin.lat,
              source_longitude: origin.lng,
              dest_latitude: destination.lat,
              dest_longitude: destination.lng
            };
            this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].getGoogleDistance, params).subscribe(function (response) {
              var distanceObj = response.data;
              _this15.calc_distance = distanceObj.distance;

              if (!_this15.region_delivery_charge) {
                if (distanceObj && distanceObj.distance) {
                  var distance = distanceObj.distance;
                  var calc_duration = distanceObj.duration || 0;

                  if (calc_duration) {
                    var split_duration = calc_duration.split(' ');
                    _this15.supplier_delivery_time_duration['time'] = split_duration[0] ? Number(split_duration[0]) : 0;
                    _this15.supplier_delivery_time_duration['time_unit'] = split_duration[1] ? split_duration[1] : '';
                  }

                  if (!_this15.settings.is_enable_delivery_type || _this15.is_own_delivery) {
                    if (_this15.settings.is_enabled_multiple_base_delivery_charges == 1 && _this15.addressDetail['base_delivery_charges_array'] && _this15.addressDetail['base_delivery_charges_array'].length) {
                      var base_charges = _this15.addressDetail['base_delivery_charges_array'].filter(function (el) {
                        return distance < el.distance_value;
                      });

                      var max_base = null;

                      if (base_charges.length) {
                        max_base = base_charges.reduce(function (prev, current) {
                          return prev.distance_value < current.distance_value ? prev : current;
                        });

                        if (!!max_base) {
                          _this15.delivery_charge = max_base.base_delivery_charges;
                        } else {
                          _this15.delivery_charge = 0;
                        }
                      } else {
                        var maxBase = _this15.addressDetail['base_delivery_charges_array'].reduce(function (prev, current) {
                          return prev.distance_value > current.distance_value ? prev : current;
                        });

                        _this15.delivery_charge = (distance - maxBase.distance_value) * _this15.cart[0].radius_price + maxBase.base_delivery_charges;
                      }
                    } else {
                      if (distance > _this15.distance_value) {
                        _this15.delivery_charge = (distance - _this15.distance_value) * _this15.cart[0].radius_price + _this15.addressDetail['base_delivery_charges'];

                        if (_this15.settings.is_customized_commision_enable == 1) {
                          if (_this15.priceObj.amount > _this15.priceObj.minimum_commission_amount) {
                            _this15.delivery_charge = (distance - _this15.distance_value) * _this15.cart[0].radius_price + 0;
                          }
                        }
                      } else {
                        _this15.delivery_charge = _this15.addressDetail['base_delivery_charges'];

                        if (_this15.settings.is_customized_commision_enable == 1) {
                          if (_this15.priceObj.amount > _this15.priceObj.minimum_commission_amount) {
                            _this15.delivery_charge = 0;
                          }
                        }
                      }
                    }
                  } else {
                    if (!_this15.is_own_delivery && (_this15.supplier_delivery_type_normal || _this15.supplier_delivery_type_express)) {
                      _this15.calcDeliveryChargesWithDelTypes(_this15.supplier_delivery_type_normal ? 0 : 1);
                    }
                  }
                } else {
                  _this15.delivery_charge = 0;

                  if (!_this15.settings.is_enabled_multiple_base_delivery_charges) {
                    _this15.delivery_charge = _this15.addressDetail['base_delivery_charges'] || 0;
                  }
                }

                _this15.addressDetail.address['delivery_charge'] = _this15.delivery_charge;
              }
            });
          }
        }, {
          key: "getGoogleMatrixLocationSupplierWise",
          value: function getGoogleMatrixLocationSupplierWise(supplier_data) {
            var _this16 = this;

            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].getGoogleDistanceV1, {
              supplierUserLatLongs: supplier_data
            }).subscribe(function (response) {
              if (!!response && response.data) {
                var supplier_distance = response.data;
                _this16.delivery_charge = 0;
                _this16.calc_distance = 0;

                if (!_this16.region_delivery_charge && supplier_distance.length) {
                  var calc_duration = 0;

                  if (!_this16.settings.is_enable_delivery_type || _this16.is_own_delivery) {
                    supplier_distance.forEach(function (sp) {
                      _this16.calc_distance += sp.distance;

                      if (sp.duration) {
                        calc_duration += sp.duration;
                      }

                      var delivery_charges_obj = {};
                      delivery_charges_obj['supplier_id'] = sp.supplierId;

                      var product = _this16.cart.find(function (el) {
                        return el.supplier_id == sp.supplierId;
                      });

                      if (_this16.settings.is_enabled_multiple_base_delivery_charges == 1 && product['base_delivery_charges_array'] && product['base_delivery_charges_array'].length) {
                        var base_charges = product['base_delivery_charges_array'].filter(function (el) {
                          return sp.distance < el.distance_value;
                        });
                        var max_base = null;

                        if (base_charges.length) {
                          max_base = base_charges.reduce(function (prev, current) {
                            return prev.distance_value < current.distance_value ? prev : current;
                          });

                          if (!!max_base) {
                            delivery_charges_obj['delivery_charges'] = max_base.base_delivery_charges;
                            _this16.delivery_charge += max_base.base_delivery_charges;
                          } else {
                            _this16.delivery_charge = 0;
                            delivery_charges_obj['delivery_charges'] = _this16.delivery_charge;
                          }
                        } else {
                          var maxBase = product['base_delivery_charges_array'].reduce(function (prev, current) {
                            return prev.distance_value > current.distance_value ? prev : current;
                          });
                          delivery_charges_obj['delivery_charges'] = (sp.distance - maxBase.distance_value) * product.radius_price + maxBase.base_delivery_charges;
                          _this16.delivery_charge += (sp.distance - maxBase.distance_value) * product.radius_price + maxBase.base_delivery_charges;
                        }
                      } else {
                        if (sp.distance > product.distance_value) {
                          delivery_charges_obj['delivery_charges'] = (sp.distance - product.distance_value) * product.radius_price + product['base_delivery_charges'];
                          _this16.delivery_charge += (sp.distance - product.distance_value) * product.radius_price + product['base_delivery_charges'];
                        } else {
                          _this16.delivery_charge += product['base_delivery_charges'] || 0;
                          delivery_charges_obj['delivery_charges'] = product['base_delivery_charges'] || 0;
                        }
                      }

                      _this16.delivery_charges_array.push(delivery_charges_obj);
                    });

                    _this16.cart.forEach(function (element) {
                      var rec = _this16.delivery_charges_array.find(function (x) {
                        return x.supplier_id == element.supplier_id;
                      });

                      if (rec) {
                        element['delivery_charges'] = rec.delivery_charges;
                      }
                    });
                  } else {
                    if (!_this16.is_own_delivery && (_this16.supplier_delivery_type_normal || _this16.supplier_delivery_type_express)) {
                      _this16.calcDeliveryChargesWithDelTypes(_this16.supplier_delivery_type_normal ? 0 : 1);
                    }
                  }

                  if (calc_duration) {
                    _this16.supplier_delivery_time_duration['time'] = calc_duration / 60;
                    _this16.supplier_delivery_time_duration['time_unit'] = 'minutes';
                  }
                } else {
                  _this16.delivery_charge = 0;
                }

                _this16.addressDetail.address['delivery_charge'] = _this16.delivery_charge;
              }
            });
          }
        }, {
          key: "delay",
          value: function delay(ms) {
            return new Promise(function (resolve) {
              return setTimeout(resolve, ms);
            });
          }
        }, {
          key: "onChangeInRequest",
          value: function onChangeInRequest(event) {
            if (event) {
              this.have_coin_change = "1";
            } else {
              this.have_coin_change = "0";
            }
          }
        }, {
          key: "setPaymentType",
          value: function setPaymentType(mode) {
            this.paymentType = mode;

            if (this.agent_tips.length) {
              this.agentTipChange({
                tip: 0,
                isCustom: false
              });
            }

            if (this.paymentType == '0') {
              this.isPayOnline = false;
              this.applyWalletDiscount = false;
            } else if (this.paymentType == '4') {
              // if (this.priceObj.netTotal > this.addressDetail['wallet_amount']) {
              //   this.message.alert('warning', `${this.translate.instant('Wallet Amount Must Be Greater Than')} ${this.priceObj.netTotal}`);
              // } else {
              this.applyWalletDiscount = true; // }
            } else if (this.paymentType == '5') {
              this.isPayOnline = false;
              this.applyWalletDiscount = false;
            } else {
              this.applyWalletDiscount = false;
            }
          }
        }, {
          key: "setOrderwiseGateways",
          value: function setOrderwiseGateways() {
            this.hidePaymentModeOption = false;

            if (this.settings && this.settings.is_enable_orderwise_gateways && this.order_type_wise_gateways.length) {
              this.geofencedGateways = [];

              if (this.self_pickup == 1) {
                var data = this.order_type_wise_gateways.find(function (x) {
                  return x.order_type == 0;
                });

                if (data) {
                  this.geofencedGateways = data.payment_gateways.replace(/#/g, ',').split(',');
                }
              } else if (this.delivery_opt == 1) {
                var data = this.order_type_wise_gateways.find(function (x) {
                  return x.order_type == 1;
                });

                if (data) {
                  this.geofencedGateways = data.payment_gateways.replace(/#/g, ',').split(',');
                }
              } else if (this.book_dining == 1) {
                var data = this.order_type_wise_gateways.find(function (x) {
                  return x.order_type == 2;
                });

                if (data) {
                  this.geofencedGateways = data.payment_gateways.replace(/#/g, ',').split(',');
                }
              }

              if (!this.hidePaymentModeOption) {
                var cod = this.geofencedGateways.find(function (gateway) {
                  return gateway == 'cod';
                });
                this.hidePaymentModeOption = !cod ? true : false;

                if (this.hidePaymentModeOption) {
                  this.paymentType = '1';
                }
              }

              if (this.hidePaymentModeOption) {
                this.setPaymentType('1');
              }
            }

            if (!this.is_own_delivery && (this.supplier_delivery_type_normal || this.supplier_delivery_type_express)) {
              this.onSelectDeliveryType(this.supplier_delivery_type_normal ? 0 : 1);
            }
          }
        }, {
          key: "calcDeliveryChargesWithDelTypes",
          value: function calcDeliveryChargesWithDelTypes(delv_type) {
            switch (delv_type) {
              case 0:
                this.delivery_charge = this.supplier_delivery_type_normal.price * this.calc_distance;
                break;

              case 1:
                this.delivery_charge = this.supplier_delivery_type_express.price * this.calc_distance;
                break;
            }

            if (this.delivery_charge) {
              this.addressDetail.address['delivery_charge'] = this.delivery_charge;
            }
          }
        }, {
          key: "onSelfPickup",
          value: function onSelfPickup() {
            this.self_pickup = 1;
            this.delivery_opt = 0;
            this.delivery_charge = 0;
            this.book_dining = 0;
            this.normal_delivery = 0;
            this.express_delivery = 0;

            if (this.settings.enable_product_appointment && this.cart.length & this.cart[0].is_appointment) {
              this.appointmentOrderInCart = 1;
            }

            this.setOrderwiseGateways();
          }
        }, {
          key: "onDining",
          value: function onDining() {
            this.self_pickup = 0;
            this.delivery_charge = 0;
            this.delivery_opt = 0;
            this.book_dining = 1;
            this.normal_delivery = 0;
            this.express_delivery = 0;
            this.setOrderwiseGateways();
          }
        }, {
          key: "onDelivery",
          value: function onDelivery() {
            this.self_pickup = 0;
            this.delivery_opt = 1;
            this.book_dining = 0;

            if (!lodash__WEBPACK_IMPORTED_MODULE_18___default.a.isEmpty(this.addressDetail)) {
              this.delivery_charge = this.delivery_charge || this.addressDetail.address['delivery_charge'] || this.priceObj.deliveryCharges || 0;
            }

            this.setOrderwiseGateways();
          }
        }, {
          key: "onSelectDeliveryType",
          value: function onSelectDeliveryType(type) {
            // if (!this.loggedIn) {
            //   this.util.authToggle.next(true);
            //   return false;
            // }
            // if (!((!!this.addressDetail && !!this.addressDetail.address && this.addressDetail.address.id) || this.self_pickup == 1) && !this.is_after_table_booking) {
            //   if (this.settings.header_theme == 2) {
            //     this.displayAddModal.next(true);
            //   } else {
            //     this.deliveryAddress.openNewAddressDialog();
            //     // this.message.alert('info', `${this.translate.instant('Firstly Add Address')}!`);
            //   }
            //   return false;
            // }
            this.selected_delivery_type = type;

            switch (type) {
              case 0:
                this.normal_delivery = 1;
                this.express_delivery = 0;
                break;

              case 1:
                this.normal_delivery = 0;
                this.express_delivery = 1;
                break;
            }

            this.calcDeliveryChargesWithDelTypes(type);
          }
        }, {
          key: "placeOrder",
          value: function placeOrder() {
            this.cartModel = new _shared_models_cart_model__WEBPACK_IMPORTED_MODULE_4__["CartModel"]();
            this.updateCartModel = new _shared_models_cart_model__WEBPACK_IMPORTED_MODULE_4__["UpdateCartModel"]();
            var cart_id = this.util.getLocalData('cart_id', true);

            if (cart_id) {
              var check = false;

              var _iterator = _createForOfIteratorHelper(this.cart),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var el = _step.value;

                  if (!cart_id.service_ids.includes(el.id)) {
                    check = true;
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              ;

              if (check) {
                this.makeModelData();
              } else {
                this.router.navigate(['/', 'cart', 'agent'], {
                  queryParams: {
                    service_ids: cart_id.service_ids.join(),
                    cart_id: cart_id.id,
                    isPkg: '0',
                    payType: '0',
                    promo: this.priceObj.promo && this.priceObj.promo.code ? this.priceObj.promo.code : null,
                    discount: this.priceObj.discount,
                    user_gift_ids: this.priceObj.gift && this.priceObj.gift.id ? [this.priceObj.gift.id] : null
                  }
                });
              }
            } else {
              this.makeModelData();
            }
          }
        }, {
          key: "onInvoiceUpdate",
          value: function onInvoiceUpdate(value) {
            var _this17 = this;

            var obj = {
              'id_for_invoice': value,
              'name': [this.web_user.firstname],
              'accessToken': this.userService.getUserToken,
              'profilePic': this.web_user.user_image,
              'abn_number': this.web_user.abn_number,
              'business_name': this.web_user.business_name
            };
            var formData = this.http.appendFormData(obj);
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].auth.signUp_step3, formData).subscribe(function (response) {
              _this17.isLoading = false;

              if (!!response && response.data) {
                _this17.userService.setUserLocalData(response.data);

                _this17.ngOnInit();
              }
            }, function (error) {
              _this17.isLoading = false;
            });
          }
        }, {
          key: "makeAddOnModel",
          value: function makeAddOnModel(customization) {
            var addOns = [];

            if (!customization || !customization.length) {
              return addOns;
            }

            customization.forEach(function (item, index) {
              var quantity = item.quantity;
              item.data.forEach(function (d) {
                addOns.push.apply(addOns, _toConsumableArray(d.value.map(function (v) {
                  v.quantity = quantity;
                  v.serial_number = index + 1;
                  return v;
                })));
              });
            });
            return addOns;
          }
        }, {
          key: "makeModelData",
          value: function makeModelData() {
            var _this18 = this;

            this.cartModel.accessToken = this.user.getUserToken;
            this.cartModel.supplierBranchId = this.cart[0].supplier_branch_id;
            this.cartModel.supplier_id = this.cart[0].supplier_id;
            this.cartModel.order_time = moment__WEBPACK_IMPORTED_MODULE_15__().format('HH:mm:ss');
            var day = [6, 0, 1, 2, 3, 4, 5];
            this.cartModel.order_day = day[new Date().getDay()];
            this.cartModel.adds_on = [];
            this.cartModel.variants = [];

            var _loop = function _loop(i) {
              var _this18$cartModel$add;

              var model = new _shared_models_cart_model__WEBPACK_IMPORTED_MODULE_4__["CartProductModel"](_this18.cart[i]);

              if (_this18.cart[i].cartVariants && _this18.cart[i].cartVariants.length) {
                var _this18$cartModel$var;

                (_this18$cartModel$var = _this18.cartModel.variants).push.apply(_this18$cartModel$var, _toConsumableArray(_this18.cart[i].cartVariants));
              }

              (_this18$cartModel$add = _this18.cartModel.adds_on).push.apply(_this18$cartModel$add, _toConsumableArray(_this18.makeAddOnModel(_this18.cart[i]['customization'])));

              model['category_id'] = _this18.cart[i].categoryId || _this18.cart[i].category_id;
              model['agent_type'] = _this18.cart[i].agent_list && _this18.cart[i].is_agent ? 1 : 0;
              model.quantity = _this18.cart[i]['price_type'] ? 1 : _this18.cart[i].selectedQuantity;
              model['freeQuantity'] = _this18.cart[i].freeQuantity;

              if (_this18.cart[i].is_out_network) {
                _this18.is_out_network = true;
                model['product_dimensions'] = _this18.cart[i].product_dimensions;
                model['product_owner_name'] = _this18.cart[i].product_owner_name;
                model['product_reference_id'] = _this18.cart[i].product_reference_id;
                model['product_upload_reciept'] = _this18.cart[i].product_upload_reciept;
              }

              if (_this18.settings.enable_product_special_instruction == 1 && _this18.cart[i].special_instructions) {
                model['special_instructions'] = _this18.cart[i].special_instructions;
              }

              if (_this18.cart[i].agentBufferPrice) {
                model['agentBufferPrice'] = _this18.cart[i].agentBufferPrice;
              }

              if (_this18.settings.enable_multi_supplier_delivery_charge_distance_wise && _this18.settings.delivery_charge_type == 0) {
                model['delivery_charge'] = _this18.cart[i].delivery_charges;
              } else if (_this18.settings.delivery_charge_type == 1) {
                model['delivery_charge'] = _this18.cart[i].radius_price;
              }

              if (_this18.settings.enable_flat_user_service_charge && _this18.priceObj.flat_user_service_charges.length) {
                model['handling_supplier'] = _this18.priceObj.flat_user_service_charges.find(function (x) {
                  return x.supplier_id == _this18.cart[i].supplier_id;
                }).serviceCharge;
              } else if (_this18.settings.vendor_status == 1) {
                var supplier_data = _toConsumableArray(new Map(_this18.cart.map(function (item) {
                  return [item['supplier_id'], item];
                })).values());

                if (supplier_data.length > 1) {
                  model['tax'] = _this18.cart[i].handling_admin / 100 * (_this18.cart[i].fixed_price * _this18.cart[i].selectedQuantity);
                  model['handling_supplier'] = _this18.cart[i].user_service_charge / 100 * _this18.cartService.calulateProductPrice(_this18.cart[i]);
                }
              }

              _this18.cartModel.productList.push(model);
            };

            for (var i = 0; i < this.cart.length; i++) {
              _loop(i);
            } // update cart model data


            this.updateCartModel.accessToken = this.user.getUserToken;
            this.updateCartModel.currencyId = this.util.handler.currencyId;
            this.updateCartModel.languageId = this.util.handler.languageId;
            this.updateCartModel.deliveryType = this.deliveryType.toString();
            this.updateCartModel.deliveryCharges = this.priceObj.deliveryCharges.toString();
            this.updateCartModel.handlingAdmin = this.priceObj.handlingAdmin.toString();
            this.updateCartModel.handlingSupplier = this.priceObj.handlingSupplier.toString();
            this.updateCartModel.netAmount = this.priceObj.netTotal;
            this.updateCartModel.delivery_max_time = this.pickUp_dateTime ? moment__WEBPACK_IMPORTED_MODULE_15__(this.pickUp_dateTime['date_time']).format('YYYY-MM-DD') : moment__WEBPACK_IMPORTED_MODULE_15__().format('YYYY-MM-DD');
            var date = moment__WEBPACK_IMPORTED_MODULE_15__();

            if (this.addressDetail['delivery_max_time']) {
              date = date.add(this.addressDetail['delivery_max_time'], 'minutes');
            }

            if (this.deliveryType == 1) {
              date = date.add(this.addressDetail['urgent_delivery_time'], 'minutes');
              this.updateCartModel.urgentPrice = this.urgentPrice;
            }

            this.updateCartModel.deliveryDate = this.pickUp_dateTime ? moment__WEBPACK_IMPORTED_MODULE_15__(this.pickUp_dateTime['date_time']).format('YYYY-MM-DD') : date.format('YYYY-MM-DD');
            this.updateCartModel.deliveryTime = this.pickUp_dateTime ? moment__WEBPACK_IMPORTED_MODULE_15__(this.pickUp_dateTime['date_time']).format('HH:mm') : date.format('HH:mm');
            this.updateCartModel.day = this.pickUp_dateTime ? moment__WEBPACK_IMPORTED_MODULE_15__(this.pickUp_dateTime['date_time']).day() : new Date().getDay();

            if (this.priceObj.amount + this.priceObj.handlingSupplier + this.priceObj.handlingAdmin >= this.addressDetail.free_delivery_amount) {
              this.updateCartModel.minOrderDeliveryCrossed = 1;
            } else {
              this.updateCartModel.minOrderDeliveryCrossed = 0;
            }

            if (this.self_pickup == 1) {
              this.updateCartModel.deliveryId = '0';
            } else {
              this.cartModel.latitude = this.addressDetail.address.latitude;
              this.cartModel.longitude = this.addressDetail.address.longitude;
              this.updateCartModel.deliveryId = this.addressDetail.address.id;
            }

            if (this.settings.app_type == 8 && this.questions.length) {
              this.cartModel.questions = this.questions.slice();
              this.cartModel.addOn = this.priceObj.questionPrice;
              this.updateCartModel.questions = this.questions.slice();
              this.updateCartModel.addOn = this.priceObj.questionPrice;
            }

            this.addToCart();
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            var _this19 = this;

            this.isLoading = true;
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].addToCart, this.cartModel, false).subscribe(function (response) {
              if (!!response && response.data) {
                _this19.updateCartModel.cartId = response.data.cartId;

                _this19.updateCart();
              } else {
                _this19.isLoading = false;
              }
            }, function (err) {
              return _this19.isLoading = false;
            });
          }
        }, {
          key: "makePaymentOrderModel",
          value: function makePaymentOrderModel() {
            this.paymentOrderModel.amount = this.priceObj.netTotal; //+ this.priceObj.serviceCharge;

            this.paymentOrderModel.address = this.addressDetail.address;
          }
        }, {
          key: "updateCart",
          value: function updateCart() {
            var _this20 = this;

            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].updateCartInfo, this.updateCartModel, false).subscribe(function (response) {
              if (!!response && response.data) {
                _this20.afterUpdateCart();
              } else {
                _this20.isLoading = false;
              }
            }, function (err) {
              return _this20.isLoading = false;
            });
          }
        }, {
          key: "afterUpdateCart",
          value: function afterUpdateCart() {
            if (!this.is_service || (!this.is_agent || this.cart[0].agent_slot) && this.settings.hideAgentList == 0 || this.isBookNow || this.serviceDateTime) {
              this.generateOrder();
            } else {
              var serviceIds = [];
              this.cart.forEach(function (data) {
                serviceIds.push(data.productId);
              });
              this.util.setLocalData('cart_id', {
                id: this.updateCartModel.cartId,
                service_ids: serviceIds
              }, true);
              this.cartDateTimeData = {
                is_open: true,
                cart: this.cart,
                // addressDetail: this.addressDetail,
                priceObj: this.priceObj,
                data: {
                  service_ids: serviceIds.join(),
                  cart_id: this.updateCartModel.cartId,
                  isPkg: '0',
                  payType: this.paymentType,
                  promo: this.priceObj.promo && this.priceObj.promo.code ? this.priceObj.promo.code : null,
                  discount: this.priceObj.discount,
                  promoId: this.priceObj.promo && this.priceObj.promo.id ? this.priceObj.promo.id : null
                }
              };

              if (this.settings.extra_instructions == 1) {
                this.cartDateTimeData.data['parking_instructions'] = this.parking_instruction;
                this.cartDateTimeData.data['area_to_focus'] = this.area_to_focus;
              }

              if (this.transaction) {
                this.cartDateTimeData.data['paymentGatewayId'] = this.transaction.paymentGatewayId;

                if (this.transaction.token) {
                  this.cartDateTimeData.data['token'] = this.transaction.token;
                } else {
                  if (this.transaction.paymentGatewayId != "authorize_net") {
                    this.cartDateTimeData.data['customer_payment_id'] = this.transaction.customer_payment_id;
                    this.cartDateTimeData.data['card_id'] = this.transaction.card_id;
                  } else {
                    this.cartDateTimeData.data['authnet_profile_id'] = this.transaction.customer_payment_id || this.paymentOrderModel.user.authnet_profile_id;
                    this.cartDateTimeData.data['authnet_payment_profile_id'] = this.transaction.card_id;
                  }
                }
              }

              this.isLoading = false;
            }
          }
        }, {
          key: "generateOrder",
          value: function generateOrder() {
            var _this21 = this;

            var offset = moment__WEBPACK_IMPORTED_MODULE_15__().format('Z');
            var obj = {
              cartId: this.updateCartModel.cartId,
              languageId: this.util.handler.languageId,
              isPackage: '0',
              paymentType: this.payment_after_confirmation == 1 ? '3' : this.priceObj.referral_amount >= this.priceObj.netTotal ? '2' : this.paymentType,
              accessToken: this.user.getUserToken,
              offset: offset,
              self_pickup: this.self_pickup,
              type: this.settings.app_type,
              payment_after_confirmation: this.payment_after_confirmation,
              order_delivery_type: this.selected_delivery_type,
              order_source: 2
            };

            if (this.settings.enable_cutlery_option) {
              obj['is_cutlery_required'] = this.is_cutlery_required ? 1 : 0;
            }

            if (this.settings.enable_no_touch_delivery) {
              obj['no_touch_delivery'] = this.no_touch_delivery ? 1 : 0;
            }

            if (this.applyWalletDiscount && this.priceObj.walletDiscountAmount && this.paymentType == '4') {
              obj['wallet_discount_amount'] = this.priceObj.walletDiscountAmount;
            }

            console.log(this.transaction.card_details);

            if (this.transaction && !this.transaction.card_details) {
              obj['gateway_unique_id'] = this.transaction.paymentGatewayId;
              obj['currency'] = _core_global__WEBPACK_IMPORTED_MODULE_19__["GlobalVariable"].CURRENCY_NAME;

              if (this.transaction.token) {
                obj['payment_token'] = this.transaction.token;
              } else if (this.transaction.mobile_no) {
                obj['mobile_no'] = this.transaction.mobile_no;
              } else {
                if (this.transaction.paymentGatewayId != "authorize_net") {
                  obj['customer_payment_id'] = this.transaction.customer_payment_id;
                  obj['card_id'] = this.transaction.card_id;
                }

                if (this.transaction.paymentGatewayId == "authorize_net") {
                  this.cartDateTimeData.data['authnet_profile_id'] = this.paymentOrderModel.user.authnet_profile_id;
                  this.cartDateTimeData.data['authnet_payment_profile_id'] = this.transaction.card_id;
                  obj['authnet_profile_id'] = this.paymentOrderModel.user.authnet_profile_id;
                  obj['authnet_payment_profile_id'] = this.transaction.card_id;
                }
              }
            } else {
              obj['gateway_unique_id'] = this.transaction.card_details.paymentGatewayId;
              obj['currency'] = _core_global__WEBPACK_IMPORTED_MODULE_19__["GlobalVariable"].CURRENCY_NAME;
              obj['payment_token'] = this.transaction.card_details.card_number;
              obj['cvt'] = this.transaction.card_details.cvc;
              obj['cp'] = this.transaction.card_details.p_code;
              obj['expMonth'] = this.transaction.card_details.exp_month;
              obj['expYear'] = this.transaction.card_details.exp_year;
              obj['cardHolderName'] = this.transaction.card_details.card_holder_name;
            }

            obj['order_time'] = moment__WEBPACK_IMPORTED_MODULE_15__().format('HH:mm:ss');
            var day = [6, 0, 1, 2, 3, 4, 5];
            obj['order_day'] = day[new Date().getDay()];

            if (this.priceObj.promo && this.priceObj.promo.code) {
              obj['promoId'] = this.priceObj.promo.id;
              obj['promoCode'] = this.priceObj.promo.code;
              obj['discountAmount'] = this.priceObj.discount;
            }

            if (this.priceObj.gift && this.priceObj.gift.id) {
              obj['user_gift_ids'] = [this.priceObj.gift.id];
              obj['gift_amount'] = this.priceObj.discount;
            }

            if (this.pickUp_dateTime) {
              obj['date_time'] = this.pickUp_dateTime.date_time;
            } else {
              if (this.serviceDateTime) {
                obj['date_time'] = this.serviceDateTime.date_time;

                if (this.serviceDateTime.drop_off_date) {
                  obj['drop_off_date'] = this.serviceDateTime.drop_off_date;
                }
              } else {
                var date = moment__WEBPACK_IMPORTED_MODULE_15__();
                obj['date_time'] = date.format('YYYY-MM-DD HH:mm:ss');
              }
            }

            obj['duration'] = 0;
            this.cart.forEach(function (data) {
              if (data['is_product'] == 0) {
                if (data['price_type']) {
                  obj['duration'] += _this21.settings.interval * data['selectedQuantity'];
                } else {
                  obj['duration'] += data['duration'] * data['selectedQuantity'];
                }
              } else {
                if (data['price_type'] == 1) {
                  obj['duration'] += data['selectedQuantity'] * 60;
                }
              }
            });

            if (this.cart[0].agent_slot) {
              obj['date_time'] = this.cart[0].agent_slot.date_time;
              obj['agentIds'] = [this.cart[0].agent_slot.agent.cbl_user.id];
            }

            if (this.priceObj.agent_tip) {
              obj['tip_agent'] = this.priceObj.agent_tip;
            }

            if (this.settings.app_type == 8 && this.questions.length) {
              obj['questions'] = this.questions.slice();
            }

            if (this.settings.referral_feature == 1) {
              obj['use_refferal'] = this.priceObj.referral_amount ? 1 : 0;
            }

            if (this.settings.supplier_service_fee == 1) {
              obj['user_service_charge'] = this.priceObj.serviceCharge;
            }

            if ((this.settings.cart_image_upload == 1 || this.settings.product_prescription) && this.show_prescription) {
              Object.keys(this.prescription_images).forEach(function (key) {
                if (_this21.prescription_images[key]) {
                  obj[key] = _this21.prescription_images[key];
                }
              });
            }

            if (this.settings.order_instructions == 1 && this.show_instructions && this.instructions) {
              obj['pres_description'] = this.instructions;
            }

            if (this.settings.extra_instructions == 1) {
              obj['parking_instructions'] = this.parking_instruction;
              obj['area_to_focus'] = this.area_to_focus;
            }

            if (this.settings.is_loyality_enable == 1 && this.priceObj.appliedLoyaltyAmount) {
              obj['use_loyality_point'] = 1;
            }

            if (this.scheduleOrderSlot && this.settings.is_schdule_order == 1) {
              obj['is_schedule'] = this.scheduleOrderSlot.table_id ? 0 : 1; //0 in case of dining

              obj['schedule_date'] = this.scheduleOrderSlot.startTime;
              obj['schedule_end_date'] = this.scheduleOrderSlot.endTime;
              obj['slot_price'] = this.scheduleOrderSlot.price;
              obj['slot_id'] = this.scheduleOrderSlot.slot_id;

              if (this.scheduleOrderSlot.table_id) {
                obj['is_dine_in_with_food'] = 1;
                obj['is_dine_in'] = 1;
                obj['table_id'] = this.scheduleOrderSlot.table_id;
              }
            }

            if (this.is_after_table_booking && this.table_booking_details) {
              obj['is_dine_in'] = 1;
              obj['table_id'] = this.table_booking_details.table_id;

              if (this.table_booking_details && this.table_booking_details.table_booking_price) {
                obj['slot_price'] = this.table_booking_details.table_booking_price;
              }

              if (this.settings.table_book_mac_theme) {
                obj['seating_capacity'] = this.table_booking_details.table_seating;
                obj['schedule_date'] = this.table_booking_details.table_slot;
                obj['schedule_end_date'] = this.table_booking_details.table_slot_endTime;
              } else {
                obj['table_request_id'] = this.table_booking_details.table_request_id;
              }
            }

            if (this.manualTableNo) {
              if (this.manualTable_id) {
                obj['table_id'] = this.manualTable_id;
              } else {
                this.message.toast("error", "Please verify the table no.");
                return;
              }
            }

            if (this.settings.dynamic_order_type_client_wise_dinein && this.settings.is_table_booking && this.book_dining == 1) {
              if (!obj['table_id']) {
                this.isLoading = false;
                this.message.toast("error", "Please select the table no.");
                return;
              }
            }

            if (this.paymentType === "0") {
              obj['have_coin_change'] = this.have_coin_change;
            }

            if (this.book_dining == 1) {
              obj['self_pickup'] = 3;
              obj['is_dine_in'] = 1;
            }

            if (this.settings.enable_user_vehicle_number) {
              obj['vehicle_number'] = this.vehicle_number;
            }

            console.log('this.transaction', this.transaction);

            if (this.transaction && this.transaction.waitForSuccess) {
              this.util.setLocalData('gop', obj, true);

              if (this.transaction.paymentGatewayId != 'hyperpay') {
                var a = document.createElement('a'); //a.target = '_blank'

                a.href = this.transaction['paymentUrl'];
                a.click();
              }

              this.isLoading = false;
              return;
            }

            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].generateOrder, obj, false).subscribe(function (response) {
              if (!!response && response.data) {
                _this21.firebaseAnalyticsSvc.firebaseAnalyticsEvents('place_order', 'place_order');

                _this21.segmentAnalyticsSvc.segmentAnalyticsEvent('item_purchase', {
                  name: 'new item',
                  info: 'new item purchage done'
                });

                _this21.isLoading = false;
                _this21.orderId = response.data; // if (this.settings.is_scheduled && !this.is_agent && !this.pickUp_dateTime && !this.is_service) {
                //   this.scheduleMaxDate = moment().add('days', this.settings.schedule_time).toDate();
                //   $("#scheduleDateModal").modal('show');
                // } else {

                _this21.toOrderDetail(); // }


                _this21.util.clearLocalData('pickUp_DT');

                _this21.util.clearLocalData('table_booking_details');
              }

              _this21.isLoading = false;
              _this21.isBookNow = false;
            }, function (err) {
              _this21.isLoading = false;
              _this21.isBookNow = false;
            });
          } // scheduleOrder() {
          //   let orderDates: Array<any> = [];
          //   this.selectedScheduleDate.forEach(date => {
          //     orderDates.push({
          //       deliveryDate: date,
          //       delivery_time: this.updateCartModel.deliveryTime
          //     });
          //   });
          //   let form_data = {
          //     accessToken: this.user.getUserToken,
          //     orderDates: orderDates,
          //     orderId: this.orderId
          //   };
          //   this.http.postData(ApiUrl.orders.scheduleOrder, form_data, false)
          //     .subscribe(response => {
          //       if (!!response && response.data) {
          //         $("#scheduleDateModal").modal('hide');
          //         this.toOrderDetail();
          //       }
          //     });
          // }

        }, {
          key: "toOrderDetail",
          value: function toOrderDetail() {
            var _this22 = this;

            this.router.navigate(['/orders/order-detail'], {
              queryParams: {
                orderId: this.orderId
              }
            });
            this.util.setCart([]);
            setTimeout(function () {
              _this22.message.alert('success', "".concat(_this22.translate.instant('Thanks for waiting, we are processing your'), " ").concat(_this22.localization.transform('order')));
            }, 600);
          }
        }, {
          key: "validateOrder",
          value: function validateOrder() {
            var isOutOfStock = this.cart.find(function (p) {
              return p.isOutOfStock;
            });

            if (isOutOfStock) {
              this.message.alert('info', this.translate.instant('Some Item Out Of Stock'));
              return false;
            }

            if (!this.loggedIn) {
              this.util.authToggle.next(true);
              return false;
            }

            if (!(!!this.addressDetail && !!this.addressDetail.address && this.addressDetail.address.id || this.self_pickup == 1) && !this.is_after_table_booking) {
              if (this.settings.header_theme == 2) {
                this.displayAddModal.next(true);
              } else {
                this.deliveryAddress.openNewAddressDialog(); // this.message.alert('info', `${this.translate.instant('Firstly Add Address')}!`);
              }

              return false;
            }

            if (!this.is_out_network) {
              if (this.settings.enable_min_order_distance_wise == '1' && this.min_distance_price_list.length > 0) {
                var self = this;
                var availablePrice;
                this.min_distance_price_list.sort(function (a, b) {
                  return b.distance - a.distance;
                });
                this.min_distance_price_list.every(function (minPrice) {
                  if (minPrice.distance <= self.calc_distance) {
                    availablePrice = minPrice;
                    return false;
                  }

                  return true;
                });

                if (availablePrice && this.priceObj.amount < availablePrice.min_amount) {
                  this.message.alert('warning', "".concat(this.translate.instant('Sub Total Must Be Greater Than'), " ").concat(availablePrice.min_amount));
                  return false;
                }
              }

              if (this.priceObj.amount < this.addressDetail['min_order']) {
                this.message.alert('warning', "".concat(this.translate.instant('Sub Total Must Be Greater Than'), " ").concat(this.addressDetail['min_order']));
                return false;
              }

              if (this.paymentType == '4' && this.priceObj.netTotal > this.addressDetail['wallet_amount']) {
                this.message.alert('warning', "".concat(this.translate.instant('Wallet Amount Must Be Greater Than'), " ").concat(this.priceObj.netTotal));
                return false;
              }

              if (this.pickUp_dateTime && moment__WEBPACK_IMPORTED_MODULE_15__(this.pickUp_dateTime['date_time']) < moment__WEBPACK_IMPORTED_MODULE_15__()) {
                this.message.alert('warning', this.translate.instant('Please Reselect Date-Time'), this.translate.instant('Your Date-Time Cannot Be Less Than Current Time.'));
                return false;
              }

              if (this.show_prescription && !this.prescription_images) {
                this.message.alert('warning', this.translate.instant('Please Upload Prescription'));
                return false;
              }
            }

            return true;
          }
        }, {
          key: "onPlaceOrder",
          value: function onPlaceOrder() {
            var _a;

            if (this.settings.signup_declaration == '1' && !this.is_declaration_checked) {
              this.is_order_try = true;
              return;
            }

            if (this.settings.cart_image_upload == 1 && this.show_prescription && !(this.prescription_images && Object.values(this.prescription_images).length)) {
              this.message.alert('warning', this.translate.instant('Please Select Image'));
              return;
            }

            if (this.settings.enable_no_order_without_scheduling == 1 && ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.is_schdule_order) == 1 && !this.scheduleOrderSlot) {
              this.message.alert('warning', this.translate.instant('Please Schedule Your Order First!'));
              return;
            }

            if (this.validateOrder()) {
              this.placeOrder();
            }
          }
        }, {
          key: "bookServiceNow",
          value: function bookServiceNow() {
            if (this.settings.signup_declaration == '1' && !this.is_declaration_checked) {
              this.is_order_try = true;
              return;
            }

            if (this.validateOrder()) {
              this.isBookNow = true;

              if (this.paymentType == '1') {
                this.makePaymentOrderModel();
                this.isPayOnline = true;
              } else {
                this.placeOrder();
              }
            }
          }
        }, {
          key: "onPay",
          value: function onPay(type) {
            if (this.settings.signup_declaration == '1' && !this.is_declaration_checked) {
              this.is_order_try = true;

              if (type == 'online') {
                this.is_order_try_online = true;
              } else {
                this.is_order_try_online = false;
              }

              return;
            }

            if (this.settings.cart_image_upload == 1 && this.show_prescription && !(this.prescription_images && Object.values(this.prescription_images).length)) {
              this.message.alert('warning', this.translate.instant('Please Select Image'));
              return;
            }

            if (this.validateOrder()) {
              if (this.is_service && this.settings.hideAgentList == 1 && !this.serviceDateTime) {
                //&& !this.cartDateTimeData
                this.cartDateTimeData = {
                  is_open: true,
                  isOnlinePayment: true,
                  cart: this.cart,
                  data: {}
                };
              } else {
                this.makePaymentOrderModel();
                this.isPayOnline = true;
              }
            }
          }
        }, {
          key: "onPaymentError",
          value: function onPaymentError(error) {
            this.firebaseAnalyticsSvc.firebaseAnalyticsEvents('initiate_checkout_failed', 'initiate_checkout_failed');
            this.isPayOnline = false;
            this.message.toast('error', error);
          }
        }, {
          key: "onPaymentSuccess",
          value: function onPaymentSuccess(transaction) {
            this.firebaseAnalyticsSvc.firebaseAnalyticsEvents('initiate_checkout_success', 'initiate_checkout_success');
            this.transaction = transaction;

            if (this.transaction.paymentGatewayId != 'hyperpay') {
              this.isPayOnline = false;
            }

            this.isLoading = true;
            this.placeOrder();
          }
        }, {
          key: "agentTipChange",
          value: function agentTipChange(tipData) {
            if (this.settings.agentTipPercentage == 1) {
              if (tipData.isCustom) {
                this.priceObj.agent_tip = parseFloat(tipData.tip);
              } else {
                this.priceObj.agent_tip = parseFloat(tipData.tip) / 100 * this.priceObj.amount;
              }
            } else {
              this.priceObj.agent_tip = parseFloat(tipData.tip);
            }

            this.cartPriceClass.getTotal();
          }
        }, {
          key: "referralAmountChange",
          value: function referralAmountChange(amount) {
            this.priceObj.referral_amount = amount;
            this.cartPriceClass.getTotal();
          }
        }, {
          key: "loyaltyAmountChange",
          value: function loyaltyAmountChange(loyaltyAmount) {
            this.priceObj.appliedLoyaltyAmount = loyaltyAmount;
            this.cartPriceClass.getTotal();
          }
        }, {
          key: "calculateServiceCharge",
          value: function calculateServiceCharge(service_charge) {
            if (service_charge) {
              this.priceObj.supplier_service_charge = service_charge;
              this.cartPriceClass.getTotal();
            }
          }
        }, {
          key: "prescriptionImagesCheck",
          value: function prescriptionImagesCheck(event) {
            this.prescription_images = event;
          }
        }, {
          key: "instructionChange",
          value: function instructionChange(instruction) {
            this.instructions = instruction;
          }
        }, {
          key: "onSchedulingProcess",
          value: function onSchedulingProcess(eventData) {
            this.scheduleOrderSlot = eventData;
            this.priceObj.slot_price = eventData.price;
            this.cartPriceClass.getTotal();
            this.showScheduleTime = false;
          }
        }, {
          key: "verifyManualTableNo",
          value: function verifyManualTableNo() {
            var _this23 = this;

            if (!this.manualTableNo || !Number(this.manualTableNo)) {
              this.message.toast("error", "Please enter valid table number");
              return;
            }

            var obj = {
              table_number: this.manualTableNo,
              supplier_id: this.cart[0].supplier_id
            };
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].verifyTable, obj).subscribe(function (res) {
              if (res && res.status == 200) {
                if (res.data.length) {
                  _this23.manualTable_id = res.data[0].id;

                  _this23.message.toast("success", "Table is available");
                } else {
                  setTimeout(function () {
                    _this23.message.toast("error", "Please try another table no.");
                  }, 4000);
                }
              }
            });
          }
        }, {
          key: "openSchedulingModal",
          value: function openSchedulingModal() {
            if (!this.loggedIn) {
              this.util.authToggle.next(true);
              return false;
            }

            if (!(!!this.addressDetail && !!this.addressDetail.address && this.addressDetail.address.id || this.self_pickup == 1)) {
              this.deliveryAddress.openNewAddressDialog();
              return false;
            }

            this.schedulingData = {
              supplier_id: this.cart[0].supplier_id,
              branch_id: this.cart[0].supplier_branch_id,
              date_order_type: this.book_dining ? 3 : this.self_pickup == 1 ? 2 : 1,
              latitude: this.addressDetail.address.latitude,
              longitude: this.addressDetail.address.longitude,
              by_pass_tables_selection: this.settings.by_pass_tables_selection
            };
            this.showScheduleTime = true;
          }
        }, {
          key: "removeSlot",
          value: function removeSlot() {
            this.cartDateTimeData = {
              is_open: false,
              data: {}
            };
            this.serviceDateTime = '';
            this.showScheduleTime = false;
            this.priceObj.slot_price = 0;
            this.scheduleOrderSlot = null;
          }
        }, {
          key: "pickOtherSlots",
          value: function pickOtherSlots() {
            this.cartDateTimeData = {
              is_open: false,
              data: {}
            };
            this.serviceDateTime = '';
            this.placeOrder();
          }
        }, {
          key: "setDateTime",
          value: function setDateTime(event) {
            this.serviceDateTime = event;

            if (this.cartDateTimeData.isOnlinePayment) {
              this.makePaymentOrderModel();
              this.isPayOnline = true;
            }
          }
        }, {
          key: "removeTableBookingRequest",
          value: function removeTableBookingRequest(event) {
            if (event) {
              this.is_after_table_booking = false;
              this.onDelivery();
              this.util.clearLocalData('table_booking_details');
            }
          }
        }, {
          key: "onCheckDeclaration",
          value: function onCheckDeclaration(event) {
            this.is_declaration_checked = event;
            this.is_order_try = false;

            if (this.is_declaration_checked) {
              if (this.is_order_try_online) {
                this.onPay();
                return;
              } else if (!this.is_order_try_online) {
                this.onPlaceOrder();
                return;
              } else if (this.settings.laundary_service_flow == 1) {
                this.bookServiceNow();
                return;
              }
            }
          }
        }, {
          key: "onCloseDeclaration",
          value: function onCloseDeclaration(event) {
            this.is_declaration_checked = event;
            this.is_order_try = false;
          }
        }, {
          key: "getCurrency",
          value: function getCurrency() {
            var _this24 = this;

            this.util.getSelectedCurrency.subscribe(function (res) {
              if (res) {
                _this24.selected_currency = Object.assign({}, res);

                if (_this24.selected_currency.currency_name) {
                  _this24.currency = _this24.selected_currency.currency_name;
                }
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (!!this.settingSubscription) this.settingSubscription.unsubscribe();
            if (!!this.styleSubscription) this.styleSubscription.unsubscribe();
            if (!!this.cartSubscription) this.cartSubscription.unsubscribe();
            if (!!this.userSubscription) this.userSubscription.unsubscribe();
            if (!!this.themeSubscription) this.themeSubscription.unsubscribe();
            if (!!this.routeSubscription) this.routeSubscription.unsubscribe(); // $("#scheduleDateModal").modal('hide');
          }
        }]);

        return CartComponent;
      }();

      CartComponent.ctorParameters = function () {
        return [{
          type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]
        }, {
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"]
        }, {
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_16__["CartService"]
        }, {
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]
        }, {
          type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_20__["DialogService"]
        }, {
          type: _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_21__["LocalizationPipe"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateService"]
        }, {
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"]
        }, {
          type: _services_firebase_analytics_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_24__["FirebaseAnalyticsService"]
        }, {
          type: _services_firebase_analytics_segment_analytics_service__WEBPACK_IMPORTED_MODULE_25__["SegmentAnalyticsService"]
        }];
      };

      CartComponent.propDecorators = {
        cartPriceClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
          args: [_components_cart_price_detail_cart_price_detail_component__WEBPACK_IMPORTED_MODULE_22__["CartPriceDetailComponent"], {
            "static": false
          }]
        }],
        deliveryAddress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
          args: [_components_delivery_address_detail_delivery_address_detail_component__WEBPACK_IMPORTED_MODULE_2__["DeliveryAddressDetailComponent"], {
            "static": false
          }]
        }]
      };
      CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'app-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cart.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/cart-detail/cart.component.html"))["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cart.component.scss */
        "./src/app/layout/pages/cart/cart-detail/cart.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"], _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_16__["CartService"], _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_20__["DialogService"], _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_21__["LocalizationPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"], _services_firebase_analytics_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_24__["FirebaseAnalyticsService"], _services_firebase_analytics_segment_analytics_service__WEBPACK_IMPORTED_MODULE_25__["SegmentAnalyticsService"]])], CartComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/cart.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/layout/pages/cart/cart.module.ts ***!
      \**************************************************/

    /*! exports provided: CartModule */

    /***/
    function srcAppLayoutPagesCartCartModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartModule", function () {
        return CartModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_layout_shared_cart_shared_cart_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/layout-shared/cart-shared/cart-shared.module */
      "./src/app/layout/shared/layout-shared/cart-shared/cart-shared.module.ts");
      /* harmony import */


      var _shared_online_payment_online_payment_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../shared/online-payment/online-payment.module */
      "./src/app/layout/shared/online-payment/online-payment.module.ts");
      /* harmony import */


      var _cart_cart_detail_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../cart/cart-detail/cart.component */
      "./src/app/layout/pages/cart/cart-detail/cart.component.ts");
      /* harmony import */


      var _cart_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cart.routing */
      "./src/app/layout/pages/cart/cart.routing.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _agent_agent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./agent/agent.component */
      "./src/app/layout/pages/cart/agent/agent.component.ts");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
      /* harmony import */


      var _rental_booking_rental_booking_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./rental-booking/rental-booking.component */
      "./src/app/layout/pages/cart/rental-booking/rental-booking.component.ts");
      /* harmony import */


      var _components_cart_products_list_cart_products_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/cart-products-list/cart-products-list.component */
      "./src/app/layout/pages/cart/components/cart-products-list/cart-products-list.component.ts");
      /* harmony import */


      var _components_cart_product_cart_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/cart-product/cart-product.component */
      "./src/app/layout/pages/cart/components/cart-product/cart-product.component.ts");
      /* harmony import */


      var _components_cart_price_detail_cart_price_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/cart-price-detail/cart-price-detail.component */
      "./src/app/layout/pages/cart/components/cart-price-detail/cart-price-detail.component.ts");
      /* harmony import */


      var _components_cart_payment_mode_cart_payment_mode_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/cart-payment-mode/cart-payment-mode.component */
      "./src/app/layout/pages/cart/components/cart-payment-mode/cart-payment-mode.component.ts");
      /* harmony import */


      var _components_cart_skeleton_cart_skeleton_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/cart-skeleton/cart-skeleton.component */
      "./src/app/layout/pages/cart/components/cart-skeleton/cart-skeleton.component.ts");
      /* harmony import */


      var _components_agent_tip_agent_tip_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/agent-tip/agent-tip.component */
      "./src/app/layout/pages/cart/components/agent-tip/agent-tip.component.ts");
      /* harmony import */


      var _components_referral_referral_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/referral/referral.component */
      "./src/app/layout/pages/cart/components/referral/referral.component.ts");
      /* harmony import */


      var _components_cart_image_upload_cart_image_upload_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/cart-image-upload/cart-image-upload.component */
      "./src/app/layout/pages/cart/components/cart-image-upload/cart-image-upload.component.ts");
      /* harmony import */


      var _components_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/instructions/instructions.component */
      "./src/app/layout/pages/cart/components/instructions/instructions.component.ts");
      /* harmony import */


      var _components_cart_gift_cards_cart_gift_cards_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/cart-gift-cards/cart-gift-cards.component */
      "./src/app/layout/pages/cart/components/cart-gift-cards/cart-gift-cards.component.ts");
      /* harmony import */


      var _components_delivery_address_detail_delivery_address_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/delivery-address-detail/delivery-address-detail.component */
      "./src/app/layout/pages/cart/components/delivery-address-detail/delivery-address-detail.component.ts");
      /* harmony import */


      var _components_loyalty_discount_loyalty_discount_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/loyalty-discount/loyalty-discount.component */
      "./src/app/layout/pages/cart/components/loyalty-discount/loyalty-discount.component.ts");
      /* harmony import */


      var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-intl-tel-input */
      "./node_modules/ngx-intl-tel-input/__ivy_ngcc__/fesm2015/ngx-intl-tel-input.js"); // components
      //********************************************* components *************************************************/


      var CartModule = function CartModule() {
        _classCallCheck(this, CartModule);
      };

      CartModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [_cart_cart_detail_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"], _agent_agent_component__WEBPACK_IMPORTED_MODULE_6__["AgentComponent"], _rental_booking_rental_booking_component__WEBPACK_IMPORTED_MODULE_8__["RentalBookingComponent"], _components_cart_products_list_cart_products_list_component__WEBPACK_IMPORTED_MODULE_9__["CartProductsListComponent"], _components_cart_product_cart_product_component__WEBPACK_IMPORTED_MODULE_10__["CartProductComponent"], _components_cart_price_detail_cart_price_detail_component__WEBPACK_IMPORTED_MODULE_11__["CartPriceDetailComponent"], _components_cart_payment_mode_cart_payment_mode_component__WEBPACK_IMPORTED_MODULE_12__["CartPaymentModeComponent"], _components_referral_referral_component__WEBPACK_IMPORTED_MODULE_15__["ReferralComponent"], _components_cart_skeleton_cart_skeleton_component__WEBPACK_IMPORTED_MODULE_13__["CartSkeletonComponent"], _components_agent_tip_agent_tip_component__WEBPACK_IMPORTED_MODULE_14__["AgentTipComponent"], _components_cart_image_upload_cart_image_upload_component__WEBPACK_IMPORTED_MODULE_16__["CartImageUploadComponent"], _components_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_17__["InstructionsComponent"], _components_cart_gift_cards_cart_gift_cards_component__WEBPACK_IMPORTED_MODULE_18__["CartGiftCardsComponent"], _components_delivery_address_detail_delivery_address_detail_component__WEBPACK_IMPORTED_MODULE_19__["DeliveryAddressDetailComponent"], _components_loyalty_discount_loyalty_discount_component__WEBPACK_IMPORTED_MODULE_20__["LoyaltyDiscountComponent"]],
        imports: [_shared_layout_shared_cart_shared_cart_shared_module__WEBPACK_IMPORTED_MODULE_1__["CartSharedModule"], _shared_online_payment_online_payment_module__WEBPACK_IMPORTED_MODULE_2__["OnlinePaymentModule"], _cart_routing__WEBPACK_IMPORTED_MODULE_4__["CartRoutingModule"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_21__["NgxIntlTelInputModule"]],
        providers: [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__["DialogService"]]
      })], CartModule);
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/cart.routing.ts":
    /*!***************************************************!*\
      !*** ./src/app/layout/pages/cart/cart.routing.ts ***!
      \***************************************************/

    /*! exports provided: CartRoutingModule */

    /***/
    function srcAppLayoutPagesCartCartRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartRoutingModule", function () {
        return CartRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _cart_cart_detail_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../cart/cart-detail/cart.component */
      "./src/app/layout/pages/cart/cart-detail/cart.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _agent_agent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./agent/agent.component */
      "./src/app/layout/pages/cart/agent/agent.component.ts");
      /* harmony import */


      var _rental_booking_rental_booking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./rental-booking/rental-booking.component */
      "./src/app/layout/pages/cart/rental-booking/rental-booking.component.ts");

      var routes = [{
        path: '',
        component: _cart_cart_detail_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"],
        data: {
          title: 'Cart',
          description: 'Cart Description',
          keyword: 'shopping, ecommerce'
        }
      }, {
        path: 'agent',
        component: _agent_agent_component__WEBPACK_IMPORTED_MODULE_5__["AgentComponent"],
        data: {
          title: 'Agent',
          description: 'Agent Description',
          keyword: 'shopping, ecommerce'
        }
      }, {
        path: 'rental-booking',
        component: _rental_booking_rental_booking_component__WEBPACK_IMPORTED_MODULE_6__["RentalBookingComponent"],
        data: {
          title: 'Cart',
          description: 'Cart Description',
          keyword: 'shopping, ecommerce'
        }
      }];

      var CartRoutingModule = function CartRoutingModule() {
        _classCallCheck(this, CartRoutingModule);
      };

      CartRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CartRoutingModule);
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/agent-tip/agent-tip.component.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/agent-tip/agent-tip.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesCartComponentsAgentTipAgentTipComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tips {\n  padding: 10px 0px;\n}\n\n.tips .top {\n  margin: 0px 20px !important;\n}\n\n.tips .top small {\n  opacity: 0.8;\n  text-transform: capitalize;\n  width: 88%;\n}\n\n.tips .top h3 {\n  font-size: 16px;\n  margin-bottom: -2px;\n  text-transform: capitalize;\n  width: 88%;\n}\n\n.tips .top .right {\n  float: right;\n  margin-top: -5px;\n}\n\n.tips .top .right a {\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.tips .top .right p {\n  font-weight: 600;\n  opacity: 0.8;\n  margin-bottom: 0px;\n}\n\n.tips ul > li {\n  display: inline-block;\n  cursor: pointer;\n  border: 1px solid;\n  border-radius: 10px;\n  padding: 5px 10px;\n  margin-right: 10px;\n  zoom: 1;\n  *display: inline;\n}\n\n.tips ul {\n  border-bottom: none;\n  padding-bottom: 0px;\n  margin-top: 12px !important;\n}\n\n.tips .tip-percent .or {\n  text-align: center;\n  padding: 15px 10px;\n}\n\n.tips .tip-percent .input-group {\n  padding: 10px 20px;\n}\n\n.tips .tip-percent .input-group input {\n  border: 1px solid #00000040;\n  color: #0000009e;\n  text-align: center;\n  padding: 0px 20px !important;\n  line-height: normal;\n  height: 45px;\n  outline: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvY29tcG9uZW50cy9hZ2VudC10aXAvYWdlbnQtdGlwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0FBQ3JCOztBQUZBO0VBSVEsMkJBQTJCO0FBRW5DOztBQU5BO0VBT1ksWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixVQUFVO0FBR3RCOztBQVpBO0VBYVksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsVUFBVTtBQUd0Qjs7QUFuQkE7RUFvQlksWUFBWTtFQUNaLGdCQUFnQjtBQUc1Qjs7QUF4QkE7RUF3QmdCLGVBQWU7RUFDZixlQUFlO0FBSS9COztBQTdCQTtFQTZCZ0IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7QUFJbEM7O0FBbkNBO0VBcUNRLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLE9BQU87R0FFYixlQURzQjtBQUV4Qjs7QUE5Q0E7RUFnRFEsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFFbkM7O0FBcERBO0VBdURZLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDOUI7O0FBekRBO0VBNERZLGtCQUFrQjtBQUM5Qjs7QUE3REE7RUErRGdCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHdCQUF3QjtBQUV4QyIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlcy9jYXJ0L2NvbXBvbmVudHMvYWdlbnQtdGlwL2FnZW50LXRpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXBzIHtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcblxuICAgIC50b3Age1xuICAgICAgICBtYXJnaW46IDBweCAyMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICB3aWR0aDogODglO1xuICAgICAgICB9XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgd2lkdGg6IDg4JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bCA+IGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB6b29tOiAxO1xuICAgICAgICAqZGlzcGxheTogaW5saW5lO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC50aXAtcGVyY2VudCB7XG4gICAgICAgIC5vciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5wdXQtZ3JvdXAge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuXG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDQwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwOWU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/agent-tip/agent-tip.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/agent-tip/agent-tip.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: AgentTipComponent */

    /***/
    function srcAppLayoutPagesCartComponentsAgentTipAgentTipComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentTipComponent", function () {
        return AgentTipComponent;
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


      var _core_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../core/theme/styleVariables.model */
      "./src/app/core/theme/styleVariables.model.ts");

      var AgentTipComponent = /*#__PURE__*/function () {
        function AgentTipComponent() {
          _classCallCheck(this, AgentTipComponent);

          this.addedTip = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.currency = '';
          this.total_tip = 0;
          this.selectedTip = -1;
          this.currency = _core_global__WEBPACK_IMPORTED_MODULE_3__["GlobalVariable"].CURRENCY;
        }

        _createClass(AgentTipComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addTip",
          value: function addTip(tip) {
            if (this.settings.agentTipPercentage == 1) {
              this.total_tip = 0;

              if (this.selectedTip == tip) {
                this.selectedTip = -1;
              } else {
                this.selectedTip = tip;
              }

              this.addedTip.emit({
                tip: this.selectedTip > -1 ? tip : 0,
                isCustom: false
              });
            } else {
              this.total_tip += tip;
              this.addedTip.emit({
                tip: this.total_tip,
                isCustom: false
              });
            }
          }
        }, {
          key: "addCustomTip",
          value: function addCustomTip() {
            this.selectedTip = -1;
            this.addedTip.emit({
              tip: this.total_tip,
              isCustom: true
            });
          }
        }, {
          key: "removeTip",
          value: function removeTip() {
            this.selectedTip = -1;
            this.total_tip = 0;
            this.addedTip.emit({
              tip: this.total_tip,
              isCustom: false
            });
          }
        }, {
          key: "trackByAfternoonFn",
          value: function trackByAfternoonFn(id, index) {
            return index;
          }
        }]);

        return AgentTipComponent;
      }();

      AgentTipComponent.ctorParameters = function () {
        return [];
      };

      AgentTipComponent.propDecorators = {
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        tips: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        addedTip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      AgentTipComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-agent-tip',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./agent-tip.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/agent-tip/agent-tip.component.html"))["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./agent-tip.component.scss */
        "./src/app/layout/pages/cart/components/agent-tip/agent-tip.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AgentTipComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/cart-gift-cards/cart-gift-cards.component.scss":
    /*!*********************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/cart-gift-cards/cart-gift-cards.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesCartComponentsCartGiftCardsCartGiftCardsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".gift-cards p {\n  text-transform: capitalize;\n  color: var(--baseColor);\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 0px;\n}\n\n.gift-cards h6 {\n  border: 1px solid var(--primaryColor);\n  border-radius: 20px;\n  padding: 10px;\n  text-align: center;\n  color: var(--baseColor);\n  cursor: pointer;\n}\n\n.gift-cards .active {\n  color: #ffffff;\n  background-color: var(--primaryColor);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvY29tcG9uZW50cy9jYXJ0LWdpZnQtY2FyZHMvY2FydC1naWZ0LWNhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ1osa0JBQWtCO0FBQTlCOztBQU5BO0VBU1EscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ3ZCOztBQWZBO0VBa0JRLGNBQWM7RUFDZCxxQ0FBcUM7QUFDN0MiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcGFnZXMvY2FydC9jb21wb25lbnRzL2NhcnQtZ2lmdC1jYXJkcy9jYXJ0LWdpZnQtY2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2lmdC1jYXJkcyB7XG4gICAgcCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBjb2xvcjogdmFyKC0tYmFzZUNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cbiAgICBoNiB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnlDb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLWJhc2VDb2xvcik7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/cart-gift-cards/cart-gift-cards.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/cart-gift-cards/cart-gift-cards.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: CartGiftCardsComponent */

    /***/
    function srcAppLayoutPagesCartComponentsCartGiftCardsCartGiftCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartGiftCardsComponent", function () {
        return CartGiftCardsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_models_cart_price_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../../shared/models/cart-price.model */
      "./src/app/shared/models/cart-price.model.ts");
      /* harmony import */


      var _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../../services/http/http.service */
      "./src/app/services/http/http.service.ts");
      /* harmony import */


      var _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../core/apiUrl */
      "./src/app/core/apiUrl.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CartGiftCardsComponent = /*#__PURE__*/function () {
        function CartGiftCardsComponent(httpService) {
          _classCallCheck(this, CartGiftCardsComponent);

          this.httpService = httpService;
          this.giftList = [];
          this.isLoading = false;
          this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        }

        _createClass(CartGiftCardsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fetch();
          }
        }, {
          key: "onGiftCardSelect",
          value: function onGiftCardSelect(gift) {
            this.onSelect.emit(gift);
          }
        }, {
          key: "removeGiftCard",
          value: function removeGiftCard() {
            this.onRemove.emit();
          }
        }, {
          key: "fetch",
          value: function fetch() {
            var _this25 = this;

            this.isLoading = true;
            this.httpService.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].giftCard.purchaseList, {
              limit: 20,
              offset: 0
            }).subscribe(function (response) {
              if (response && response.data && response.data.giftData) _this25.giftList = response.data.giftData;
              _this25.isLoading = false;
            }, function (err) {
              return _this25.isLoading = false;
            });
          }
        }, {
          key: "trackByGiftFn",
          value: function trackByGiftFn(id, index) {
            return index;
          }
        }]);

        return CartGiftCardsComponent;
      }();

      CartGiftCardsComponent.ctorParameters = function () {
        return [{
          type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
        }];
      };

      CartGiftCardsComponent.propDecorators = {
        priceObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        onSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        onRemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      CartGiftCardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-cart-gift-cards',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cart-gift-cards.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-gift-cards/cart-gift-cards.component.html"))["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cart-gift-cards.component.scss */
        "./src/app/layout/pages/cart/components/cart-gift-cards/cart-gift-cards.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])], CartGiftCardsComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/cart-image-upload/cart-image-upload.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/cart-image-upload/cart-image-upload.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesCartComponentsCartImageUploadCartImageUploadComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cart-image-upload {\n  padding: 4px 25px;\n}\n\n.cart-image-upload .add-image {\n  cursor: pointer;\n  padding: 18px;\n}\n\n.cart-image-upload .add-image input {\n  display: none;\n}\n\n.cart-image-upload .image {\n  height: 80px;\n  width: 80px;\n  border: 1px solid rgba(0, 0, 0, 0.19);\n  border-radius: 4px;\n  margin: 8px 0px;\n  position: relative;\n}\n\n.cart-image-upload .image img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 100%;\n  width: 100%;\n}\n\n.cart-image-upload .image .remove {\n  position: absolute;\n  font-size: 20px;\n  color: #ec2828;\n  cursor: pointer;\n  right: -9px;\n  top: -9px;\n}\n\n.cart-image-upload .count p {\n  font-size: 18px;\n  margin-top: 32px;\n  margin-left: 20px;\n}\n\n.cart-image-upload .spinner-imaeg {\n  height: 80px;\n  width: 80px;\n  border: 1px solid rgba(0, 0, 0, 0.19);\n  border-radius: 4px;\n  margin: 8px 0px;\n  position: relative;\n}\n\n.cart-image-upload .spinner-imaeg img {\n  height: 60px;\n  width: 60px;\n  margin-top: 10px;\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvY29tcG9uZW50cy9jYXJ0LWltYWdlLXVwbG9hZC9jYXJ0LWltYWdlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFpQjtBQUFyQjs7QUFGQTtFQUtRLGVBQWU7RUFDZixhQUFhO0FBQ3JCOztBQVBBO0VBU1ksYUFBYTtBQUV6Qjs7QUFYQTtFQWVRLFlBQVk7RUFDWixXQUFXO0VBQ1gscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQTFCOztBQXBCQTtFQXVCWSxzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0FBQ3ZCOztBQTFCQTtFQTZCWSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVM7QUFDckI7O0FBbkNBO0VBMENZLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBSDdCOztBQXpDQTtFQWlEUSxZQUFZO0VBQ1osV0FBVztFQUNYLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtBQUoxQjs7QUFsREE7RUF5RFksWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBSDdCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvY29tcG9uZW50cy9jYXJ0LWltYWdlLXVwbG9hZC9jYXJ0LWltYWdlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LWltYWdlLXVwbG9hZCB7XG5cbiAgICBwYWRkaW5nOiA0cHggMjVweDtcblxuICAgIC5hZGQtaW1hZ2Uge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE4cHg7XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbWFnZSB7XG5cbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBtYXJnaW46IDhweCAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlbW92ZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2VjMjgyODtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHJpZ2h0OiAtOXB4O1xuICAgICAgICAgICAgdG9wOiAtOXB4O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAuY291bnQge1xuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNwaW5uZXItaW1hZWcge1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIG1hcmdpbjogOHB4IDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/cart-image-upload/cart-image-upload.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/cart-image-upload/cart-image-upload.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: CartImageUploadComponent */

    /***/
    function srcAppLayoutPagesCartComponentsCartImageUploadCartImageUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartImageUploadComponent", function () {
        return CartImageUploadComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_models_imageUpload_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../../shared/models/imageUpload.model */
      "./src/app/shared/models/imageUpload.model.ts");
      /* harmony import */


      var _core_apiUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../../core/apiUrl */
      "./src/app/core/apiUrl.ts");
      /* harmony import */


      var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../services/messaging/messaging.service */
      "./src/app/services/messaging/messaging.service.ts");
      /* harmony import */


      var _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../services/http/http.service */
      "./src/app/services/http/http.service.ts");
      /* harmony import */


      var _core_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../core/global */
      "./src/app/core/global.ts");
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

      var CartImageUploadComponent = /*#__PURE__*/function () {
        function CartImageUploadComponent(http, message, translate) {
          _classCallCheck(this, CartImageUploadComponent);

          this.http = http;
          this.message = message;
          this.translate = translate;
          this.loggedIn = false;
          this.prescriptionImages = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"](null);
          this.images = [];
          this.imageType = [];
          this.loading = false;
          this.imageType = _core_global__WEBPACK_IMPORTED_MODULE_5__["GlobalVariable"].imageType;
        }

        _createClass(CartImageUploadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onImageSelect",
          value: function onImageSelect(event) {
            if (!this.loggedIn) {
              this.message.alert('warning', this.translate.instant('Please Login To Continue'));
              return;
            }

            if (this.images.length > 4) {
              this.message.alert('warning', this.translate.instant('You Cannot Upload More Than 5 Images'));
              return;
            }

            if (event.target.files && event.target.files[0]) {
              var file = event.target.files[0];

              if (this.imageType.includes(file.type)) {
                if (file.size / Math.pow(1024, 2) <= 1) {
                  this.uploadImage(event.target.files[0]);
                } else this.message.toast('warning', this.translate.instant('Image Size Must Be Less Than 1mb'));
              } else this.message.toast('warning', this.translate.instant('Invalid File Type'));
            }
          }
        }, {
          key: "uploadImage",
          value: function uploadImage(file) {
            var _this26 = this;

            this.loading = true;
            var formData = this.http.appendFormData({
              file: file
            });
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_2__["ApiUrl"].uploadPaymentReceipt, formData).subscribe(function (response) {
              if (!!response && response.data) {
                _this26.images.push(response.data);

                _this26.prescriptionImages.emit(new _shared_models_imageUpload_model__WEBPACK_IMPORTED_MODULE_1__["ImageUpload"](_this26.images));
              }

              _this26.loading = false;
            }, function (err) {
              _this26.loading = false;
            });
          }
        }, {
          key: "removeImage",
          value: function removeImage(i) {
            this.images.splice(i, 1);
            this.prescriptionImages.emit(new _shared_models_imageUpload_model__WEBPACK_IMPORTED_MODULE_1__["ImageUpload"](this.images));
          }
        }, {
          key: "trackByImageFn",
          value: function trackByImageFn(id, index) {
            return index;
          }
        }]);

        return CartImageUploadComponent;
      }();

      CartImageUploadComponent.ctorParameters = function () {
        return [{
          type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
        }, {
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_3__["MessagingService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
        }];
      };

      CartImageUploadComponent.propDecorators = {
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
        }],
        loggedIn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
        }],
        prescriptionImages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
        }]
      };
      CartImageUploadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-cart-image-upload',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cart-image-upload.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-image-upload/cart-image-upload.component.html"))["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cart-image-upload.component.scss */
        "./src/app/layout/pages/cart/components/cart-image-upload/cart-image-upload.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_3__["MessagingService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])], CartImageUploadComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/cart-payment-mode/cart-payment-mode.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/cart-payment-mode/cart-payment-mode.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesCartComponentsCartPaymentModeCartPaymentModeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "[type=\"radio\"]:checked,\n[type=\"radio\"]:not(:checked) {\n  position: absolute;\n  left: -9999px;\n}\n\n[type=\"radio\"]:checked + label,\n[type=\"radio\"]:not(:checked) + label {\n  position: relative;\n  padding-left: 28px;\n  cursor: pointer;\n  line-height: 20px;\n  display: inline-block;\n  color: #666;\n}\n\n[type=\"radio\"]:checked + label:before {\n  content: '';\n  position: absolute;\n  left: 1px;\n  top: 1px;\n  width: 18px;\n  height: 18px;\n  border: 1px solid var(--primaryColor);\n  border-radius: 100%;\n  background: #fff;\n}\n\n[type=\"radio\"]:not(:checked) + label:before {\n  content: '';\n  position: absolute;\n  left: 1px;\n  top: 1px;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #ddd;\n  border-radius: 100%;\n  background: #fff;\n}\n\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"]:not(:checked) + label:after {\n  content: '';\n  width: 12px;\n  height: 12px;\n  background: var(--primaryColor);\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  border-radius: 100%;\n  border-color: var(--primaryColor);\n  transition: all 0.2s ease;\n}\n\n[type=\"radio\"]:not(:checked) + label:after {\n  opacity: 0;\n  transform: scale(0);\n}\n\n[type=\"radio\"]:checked + label:after {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.skipPayment {\n  margin-left: 2em;\n  display: block;\n  position: relative;\n  margin-top: -1.5em;\n  line-height: 1.4em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvY29tcG9uZW50cy9jYXJ0LXBheW1lbnQtbW9kZS9jYXJ0LXBheW1lbnQtbW9kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNqQjs7QUFFQTs7RUFFSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDZjs7QUFFQTtFQUFJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBRXBCOztBQUVBO0VBREksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFHcEI7O0FBRUE7O0VBREksV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFFakMseUJBQXlCO0FBSTdCOztBQUVBO0VBSEksVUFBVTtFQUVWLG1CQUFtQjtBQUt2Qjs7QUFFQTtFQUpJLFVBQVU7RUFFVixtQkFBbUI7QUFNdkI7O0FBSkE7RUFDSSxnQkFBZ0I7RUFDakIsY0FBYztFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBT3RCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvY29tcG9uZW50cy9jYXJ0LXBheW1lbnQtbW9kZS9jYXJ0LXBheW1lbnQtbW9kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCxcblt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTk5OTlweDtcbn1cblxuW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwsXG5bdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG5bdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxcHg7XG4gIHRvcDogMXB4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5Q29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5bdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxcHg7XG4gIHRvcDogMXB4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5bdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlcixcblt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnlDb2xvcik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cblt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG5bdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnNraXBQYXltZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogLTEuNWVtO1xuICBsaW5lLWhlaWdodDogMS40ZW07XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/cart-payment-mode/cart-payment-mode.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/cart-payment-mode/cart-payment-mode.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: CartPaymentModeComponent */

    /***/
    function srcAppLayoutPagesCartComponentsCartPaymentModeCartPaymentModeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPaymentModeComponent", function () {
        return CartPaymentModeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _core_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../core/theme/styleVariables.model */
      "./src/app/core/theme/styleVariables.model.ts");
      /* harmony import */


      var _shared_models_appSettings_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../shared/models/appSettings.model */
      "./src/app/shared/models/appSettings.model.ts");

      var CartPaymentModeComponent = /*#__PURE__*/function () {
        function CartPaymentModeComponent(route) {
          _classCallCheck(this, CartPaymentModeComponent);

          this.route = route;
          this.paymentType = '0';
          this.isSkip = false;
          this.currency = '';
          this.appointmentOrderInCart = 0;
          this.walletAmount = 0;
          this.hidePaymentModeOption = false;
          this.paymentMode = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.changeInRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.currency = _core_global__WEBPACK_IMPORTED_MODULE_2__["GlobalVariable"].CURRENCY;
        }

        _createClass(CartPaymentModeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            this.routeSubscription = this.route.queryParams.subscribe(function (params) {
              if (params['p_mode']) {
                _this27.paymentType = params['p_mode'];

                _this27.paymentMode.emit(params['p_mode']);
              } else {
                if (_this27.settings.payment_method == '1') {
                  _this27.paymentType = '1';

                  _this27.paymentMode.emit(_this27.paymentType);
                } else {
                  _this27.paymentMode.emit(_this27.paymentType);
                }
              }
            });
          }
        }, {
          key: "skipPayment",
          value: function skipPayment(paymentType) {
            if (paymentType) {
              this.isSkip = true;
            } else {
              this.isSkip = false;
            }

            this.paymentMode.emit(paymentType ? '5' : '0');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (!!this.routeSubscription) this.routeSubscription.unsubscribe();
          }
        }]);

        return CartPaymentModeComponent;
      }();

      CartPaymentModeComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      };

      CartPaymentModeComponent.propDecorators = {
        selfPickup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        appointmentOrderInCart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        walletAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hidePaymentModeOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        paymentMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        changeInRequest: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      CartPaymentModeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart-payment-mode',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cart-payment-mode.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-payment-mode/cart-payment-mode.component.html"))["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cart-payment-mode.component.scss */
        "./src/app/layout/pages/cart/components/cart-payment-mode/cart-payment-mode.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])], CartPaymentModeComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/cart-price-detail/cart-price-detail.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/cart-price-detail/cart-price-detail.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesCartComponentsCartPriceDetailCartPriceDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlcy9jYXJ0L2NvbXBvbmVudHMvY2FydC1wcmljZS1kZXRhaWwvY2FydC1wcmljZS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/cart-price-detail/cart-price-detail.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/cart-price-detail/cart-price-detail.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: CartPriceDetailComponent */

    /***/
    function srcAppLayoutPagesCartComponentsCartPriceDetailCartPriceDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPriceDetailComponent", function () {
        return CartPriceDetailComponent;
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
      /* harmony import */


      var _shared_models_cart_price_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../shared/models/cart-price.model */
      "./src/app/shared/models/cart-price.model.ts");
      /* harmony import */


      var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../services/cart/cart.service */
      "./src/app/services/cart/cart.service.ts");
      /* harmony import */


      var _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../services/http/http.service */
      "./src/app/services/http/http.service.ts");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../services/messaging/messaging.service */
      "./src/app/services/messaging/messaging.service.ts");
      /* harmony import */


      var _app_core_apiUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../../app/core/apiUrl */
      "./src/app/core/apiUrl.ts");
      /* harmony import */


      var _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../core/theme/styleConstants.model */
      "./src/app/core/theme/styleConstants.model.ts");
      /* harmony import */


      var _core_global__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _services_firebase_analytics_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../../services/firebase-analytics/firebase-analytics.service */
      "./src/app/services/firebase-analytics/firebase-analytics.service.ts");
      /* harmony import */


      var src_app_shared_models_apiKeys_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/models/apiKeys.model */
      "./src/app/shared/models/apiKeys.model.ts");

      var CartPriceDetailComponent = /*#__PURE__*/function () {
        function CartPriceDetailComponent(translate, util, cartService, http, user, message, fireBaseAnSvc, ref) {
          var _this28 = this;

          _classCallCheck(this, CartPriceDetailComponent);

          this.translate = translate;
          this.util = util;
          this.cartService = cartService;
          this.http = http;
          this.user = user;
          this.message = message;
          this.fireBaseAnSvc = fireBaseAnSvc;
          this.ref = ref;
          this.deliveryType = 0;
          this.urgentPrice = 0;
          this.cart = [];
          this.promoCode = '';
          this.promoModel = {};
          this.currency = "";
          this.is_voucher_applied = false;
          this.delivery_charge = 0;
          this.is_dinin = 0;
          this.applyWalletDiscount = false;
          this.walletAmount = 0;
          this.loggedIn = false;
          this.questions = [];
          this.total_product_weight = 0;
          this.product_weight_list = [];
          this.is_out_network = false;
          this.rest_user_service_charges = [];
          this.cartUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.priceDetail = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.supplier_ids = "";
          this.category_ids = "";
          this.delivery_charge_with_check = 0;
          this.is_any_in_network = false;
          this.selected_currency = new src_app_shared_models_apiKeys_model__WEBPACK_IMPORTED_MODULE_15__["Currency"]();
          this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_2__["StyleVariables"]();
          this.saveBtn = new _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_11__["StyleConstants"]();
          this.currency = _core_global__WEBPACK_IMPORTED_MODULE_12__["GlobalVariable"].CURRENCY;
          this.ref.detach();
          setInterval(function () {
            _this28.ref.detectChanges();
          }, 2000);
        }

        _createClass(CartPriceDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this29 = this;

            this.cartSubscription = this.util.getCart.subscribe(function (cart) {
              if (cart) {
                _this29.cart = cart;

                _this29.cart.forEach(function (product) {
                  if (!_this29.supplier_ids.includes(product.supplier_id)) {
                    _this29.supplier_ids += product.supplier_id + ',';
                  }

                  if (!_this29.category_ids.includes(product.categoryId)) {
                    _this29.category_ids += product.categoryId + ',';
                  }
                });

                _this29.getTotal();
              }
            });
            this.saveBtn.backgroundColor = this.style.primaryColor;
            this.saveBtn.borderColor = this.style.primaryColor;
            this.saveBtn.color = '#ffffff';

            if (this.settings.is_multicurrency_enable) {
              this.getCurrency();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.saveBtn.backgroundColor = this.style.primaryColor;
            this.saveBtn.borderColor = this.style.primaryColor;
            this.saveBtn.color = '#ffffff';

            if (!!changes.delivery_charge && !isNaN(changes.delivery_charge.currentValue)) {
              this.delivery_charge = changes.delivery_charge.currentValue;
              this.getTotal();
            }

            if (changes.applyWalletDiscount != undefined || changes.applyWalletDiscount != null) {
              this.applyWalletDiscount = changes.applyWalletDiscount.currentValue;
              this.getTotal();
            }

            if (!!changes.walletAmount && !isNaN(changes.walletAmount.currentValue)) {
              this.priceObj.walletAmount = changes.walletAmount.currentValue;
            }
          }
        }, {
          key: "getTotal",
          value: function getTotal() {
            var _this30 = this;

            var promo = new _shared_models_cart_price_model__WEBPACK_IMPORTED_MODULE_5__["PromoModel"](this.promoModel);
            promo.code = this.promoCode;
            this.priceObj = new _shared_models_cart_price_model__WEBPACK_IMPORTED_MODULE_5__["CartPriceModel"](Object.assign(Object.assign({}, this.priceObj), {
              promo: promo,
              walletAmount: this.walletAmount
            }));

            if (this.cart && this.cart.length) {
              var totalAdminHandling = 0;
              var maxSupplierHandling = 0;
              var maxDeliveryCharges = 0;
              this.priceObj.amount = 0;

              for (var i = 0; i < this.cart.length; i++) {
                var productAmount = this.cartService.calulateProductPrice(this.cart[i]);

                if (!this.cart[i].is_out_network) {
                  this.priceObj.amount += productAmount;
                }

                if (maxDeliveryCharges < this.cart[i].delivery_charges) {
                  maxDeliveryCharges = this.cart[i].delivery_charges;
                }

                if (this.cart[i].handling_admin && this.settings.disable_tax == 0) {
                  totalAdminHandling += productAmount * this.cart[i].handling_admin / 100;
                }

                if (maxSupplierHandling < this.cart[i].handling_supplier) {
                  maxSupplierHandling = this.cart[i].handling_supplier;
                }

                if (!this.cart[i].is_out_network) {
                  this.is_any_in_network = true;
                }
              }

              this.calculateQuestionPrice();

              if (this.priceObj.questionPrice && this.settings.disable_tax == 0) {
                // calculate taxes on question price (Addons Charges)
                totalAdminHandling += this.priceObj.questionPrice * this.cart[0].handling_admin / 100;
              } // if (this.settings.delivery_charge_type == 1) {
              //   this.delivery_charge = this.cart[0].radius_price;
              //   // this.addressDetail.address['delivery_charge'] = this.delivery_charge;
              // }


              if (this.settings.is_customized_commision_enable == 1) {
                totalAdminHandling = this.priceObj.minimum_cart_fee;

                if (this.priceObj.amount > this.priceObj.minimum_commission_amount) {
                  totalAdminHandling = 0;
                }
              }

              this.priceObj.deliveryCharges = this.settings.app_type == 1 || this.settings.app_type == 2 && this.settings.ecom_agent_module == 1 ? this.delivery_charge : this.settings.app_type == 8 ? 0 : maxDeliveryCharges;
              this.priceObj.handlingAdmin = totalAdminHandling;
              this.priceObj.handlingSupplier = maxSupplierHandling;
              this.priceObj.handingCharges = totalAdminHandling; // if (this.activePlan && this.activePlan.benefits && this.activePlan.benefits.length) {
              //   if (!!this.activePlan.benefits.find((benefit) => benefit.benefit_unique_id == 'FD_1')) {
              //     this.priceObj.deliveryCharges = 0;
              //   }
              // }

              if (this.activePlan) {
                if (this.priceObj.amount > this.activePlan.min_order_amount) {
                  this.priceObj.deliveryCharges = 0;
                }
              }

              if (this.settings.is_delivery_charge_weight_wise_enable) {
                setTimeout(function () {
                  if (_this30.product_weight_list.length > 0) {
                    var self = _this30;
                    var availablePrice;

                    _this30.product_weight_list.sort(function (a, b) {
                      return b.weight - a.weight;
                    });

                    _this30.product_weight_list.every(function (weight) {
                      if (weight.weight <= self.total_product_weight) {
                        availablePrice = weight;
                        return false;
                      }

                      return true;
                    });

                    if (availablePrice) {
                      _this30.priceObj.deliveryCharges = availablePrice.delivery_charge;
                    } else {
                      _this30.priceObj.deliveryCharges = _this30.settings.app_type == 1 || _this30.settings.app_type == 2 && _this30.settings.ecom_agent_module == 1 ? _this30.delivery_charge : _this30.settings.app_type == 8 ? 0 : maxDeliveryCharges;
                    }
                  }
                }, 500);
              }
            }

            if (!!this.promoModel && !!this.promoModel.id) {
              if (this.priceObj.amount < this.promoModel['minOrder']) {
                if (this.cart && this.cart.length) this.message.toast('info', "".concat(this.translate.instant('Your Cart Total Must Be Greater Than'), " ").concat(this.currency).concat(this.promoModel.minOrder));
                this.promoModel = null;
                this.applyDiscount();
              } else {
                this.calDiscountAmount();
              }
            } else {
              this.applyDiscount();
            }
          }
        }, {
          key: "calDiscountAmount",
          value: function calDiscountAmount() {
            var _this31 = this;

            var cart_total = 0;
            var discount_amount = 0;
            this.is_voucher_applied = false;
            this.cart.forEach(function (product) {
              if (_this31.promoModel.discountType != 2) {
                if (_this31.promoModel['categoryIds'].length) {
                  _this31.promoModel['categoryIds'].forEach(function (element) {
                    if (element == product.categoryId) {
                      cart_total += _this31.cartService.calulateProductPrice(product);
                    }
                  });
                } else if (_this31.promoModel['supplierIds'].length) {
                  _this31.promoModel['supplierIds'].forEach(function (element) {
                    if (element == product.supplier_id) {
                      cart_total += _this31.cartService.calulateProductPrice(product);
                    }
                  });
                }
              } // if (element == product.productId) {
              //   cart_total += this.cartService.calulateProductPrice(product);
              // }


              if (_this31.promoModel.discountType === 2) {
                _this31.promoModel.discountPrice = 0;
                console.log('enterrrrr');

                if (_this31.promoModel.product_ids) {
                  var productArray = _this31.promoModel.product_ids.split(','); // if (this.promoModel.discountType === 2) { // buy some get some free
                  // this.cart.forEach((element,index) => {


                  if (productArray.includes(typeof product.productId !== 'string' ? JSON.stringify(product.productId) : product.productId)) {
                    console.log(product.selectedQuantity);

                    if (product.selectedQuantity >= _this31.promoModel.promo_buy_x_quantity) {
                      // tslint:disable-next-line: radix
                      var productsFree = _this31.promoModel.promo_get_x_quantity - _this31.promoModel.promo_buy_x_quantity;
                      console.log(productsFree, _this31.priceObj.freeQuantity);
                      var freeQuantity = Math.floor(product.selectedQuantity / productsFree) * productsFree;
                      freeQuantity = freeQuantity > _this31.promoModel.max_buy_x_get ? _this31.promoModel.max_buy_x_get : freeQuantity;
                      _this31.priceObj.freeQuantity = _this31.priceObj.freeQuantity + freeQuantity; // this.cart[index]['freeQuantity'] =  freeQuantity;

                      console.log('qwertyuiop', freeQuantity, _this31.promoModel.max_buy_x_get, _this31.priceObj.freeQuantity);
                      product['freeQuantity'] = freeQuantity;
                      _this31.promoModel.discountPrice += product['freeQuantity'] * product.fixed_price;
                      console.log('this.promoModel.discountPrice', _this31.promoModel.discountPrice);
                      discount_amount = _this31.promoModel.discountPrice >= cart_total ? cart_total : _this31.promoModel.discountPrice;
                    } else {
                      product['freeQuantity'] = 0;
                    }
                  } // });
                  // }


                  if (_this31.priceObj.freeQuantity > 0) {
                    _this31.is_voucher_applied = true;
                  }
                }
              }
            });

            if (cart_total > 0) {
              if (this.promoModel.discountType) {
                discount_amount = cart_total * (this.promoModel.discountPrice / 100);
              } else {
                discount_amount = this.promoModel.discountPrice >= cart_total ? cart_total : this.promoModel.discountPrice;
              }
            }

            this.priceObj.discount = discount_amount > 0 ? discount_amount : 0;

            if (this.settings.is_enable_max_discount_value) {
              if (this.promoModel.max_discount_value > 0 && this.priceObj.discount > this.promoModel.max_discount_value) {
                this.priceObj.discount = this.promoModel.max_discount_value;
              }
            }

            this.applyDiscount();
          }
        }, {
          key: "serviceChargeCalculation",
          value: function serviceChargeCalculation() {
            var _this32 = this;

            if (this.settings.enable_flat_user_service_charge) {
              this.priceObj.flat_user_service_charges = [];
              this.rest_user_service_charges.forEach(function (element) {
                var prods = _this32.cart.filter(function (x) {
                  return x.supplier_id == element.supplier_id;
                });

                element['product_amount'] = prods.reduce(function (a, b) {
                  return a + parseFloat(b.fixed_price) * parseInt(b.selectedQuantity);
                }, 0);

                if (element.is_user_service_charge_flat) {
                  _this32.priceObj.flat_user_service_charges.push({
                    supplier_id: element.supplier_id,
                    serviceCharge: element.user_service_charge
                  });

                  _this32.priceObj.serviceCharge += element.user_service_charge;
                } else {
                  var perCharge = element.user_service_charge / 100 * element.product_amount;

                  _this32.priceObj.flat_user_service_charges.push({
                    supplier_id: element.supplier_id,
                    serviceCharge: perCharge
                  });

                  _this32.priceObj.serviceCharge += perCharge;
                }
              });
            } else {
              if (this.settings.supplier_service_fee == 1 && this.priceObj.supplier_service_charge && this.settings.vendor_status == 0) {
                this.priceObj.serviceCharge = this.priceObj.supplier_service_charge / 100 * this.priceObj.amount;
              } else if (this.settings.supplier_service_fee == 1 && this.rest_user_service_charges) {
                this.priceObj.serviceCharge = 0;
                var supplier_wise_data = this.util.groupBy(this.rest_user_service_charges, 'supplier_id');
                Object.values(supplier_wise_data).forEach(function (products) {
                  products.forEach(function (product) {
                    var productAmount = _this32.cartService.calulateProductPrice(product);

                    _this32.priceObj.serviceCharge += product.user_service_charge / 100 * productAmount;
                  });
                });
              }
            }
          }
        }, {
          key: "applyDiscount",
          value: function applyDiscount() {
            var _this33 = this;

            this.serviceChargeCalculation();

            if (this.promoModel && this.promoModel.discountType === 2) {
              this.cart.forEach(function (ele) {
                if (!_this33.priceObj.freeQuantity) {
                  ele.freeQuantity = 0;
                }
              });
              this.cartUpdated.emit(this.cart);
            }

            var subtotal = 0;

            if (this.applyWalletDiscount && this.settings.payment_through_wallet_discount) {
              this.priceObj.walletDiscountAmount = this.priceObj.amount / 100 * this.settings.payment_through_wallet_discount;

              if (this.priceObj.walletAmount >= this.priceObj.walletDiscountAmount) {
                subtotal = this.priceObj.amount - this.priceObj.walletDiscountAmount;
              } else {
                subtotal = this.priceObj.amount; // this.message.toast('info', `${this.translate.instant('Your Wallet Total Must Be Greater Than')} ${this.currency}${this.promoModel.minOrder}`);
              }
            } else {
              this.priceObj.walletAmount = 0;
              subtotal = this.priceObj.amount >= this.priceObj.discount ? this.priceObj.amount - this.priceObj.discount : 0;
            }

            this.priceObj.netTotal = subtotal + this.priceObj.questionPrice + this.priceObj.deliveryCharges + this.priceObj.handingCharges + this.priceObj.agent_tip + this.priceObj.serviceCharge + this.priceObj.slot_price; //To Display Calculations

            this.priceObj.displayNetTotal = this.priceObj.netTotal;

            if (!!this.priceObj.perProductLoyalityDiscount && !this.settings.loyality_discount_on_product_listing) {
              this.priceObj.displayNetTotal -= this.priceObj.productLoyaltyDiscountAmount;
            }

            if (this.priceObj.displayNetTotal >= this.priceObj.referral_amount) {
              this.priceObj.displayNetTotal -= this.priceObj.referral_amount;
            }

            if (this.priceObj.appliedLoyaltyAmount && !this.settings.loyality_discount_on_product_listing) {
              if (this.priceObj.displayNetTotal >= this.priceObj.totalLoyaltyAmount) {
                this.priceObj.displayNetTotal -= this.priceObj.appliedLoyaltyAmount;
              } else {
                this.priceObj.displayNetTotal = 0;
              }
            }

            if (this.settings.is_currency_exchange_rate == 1 && this.priceObj.currency_exchange_rate) {
              this.priceObj.displayNetTotal = this.priceObj.displayNetTotal * this.priceObj.currency_exchange_rate;
            }

            if (this.settings.enable_tax_on_total_amt && this.cart.length > 0) {
              this.priceObj.displayNetTotal -= this.priceObj.handlingAdmin;
              this.priceObj.handlingAdmin = this.priceObj.displayNetTotal * this.cart[0].handling_admin / 100;
              this.priceObj.handingCharges = this.priceObj.handlingAdmin;
              this.priceObj.displayNetTotal += this.priceObj.handingCharges;
            }

            if (this.is_out_network && !this.is_any_in_network) {
              this.priceObj.displayNetTotal -= this.priceObj.handingCharges;
              this.priceObj.handingCharges = 0;
              this.priceObj.handlingAdmin = 0;
            }

            if (this.table_booking_details) {
              if (this.table_booking_details.table_booking_price) {
                if (!this.settings.table_book_mac_theme) {
                  this.priceObj.netTotal += this.table_booking_details.table_booking_price;
                }

                this.priceObj.displayNetTotal = this.priceObj.netTotal;
              }
            }

            this.priceDetail.emit(this.priceObj);
          }
        }, {
          key: "restrictSpace",
          value: function restrictSpace($event) {
            return $event.keyCode == 32 ? false : true;
          }
        }, {
          key: "submitPromoCode",
          value: function submitPromoCode() {
            var _this34 = this;

            if (!this.loggedIn) {
              this.message.alert('warning', this.translate.instant('Please Login To Continue'));
              return;
            }

            if (this.promoCode.trim()) {
              var obj = {
                totalBill: this.priceObj.amount,
                supplierId: [],
                promoCode: this.promoCode.toUpperCase(),
                accessToken: this.user.getUserToken,
                categoryId: [],
                langId: this.util.handler.languageId
              };
              this.http.postData(_app_core_apiUrl__WEBPACK_IMPORTED_MODULE_10__["ApiUrl"].checkPromo, obj, false).subscribe(function (response) {
                if (!!response && response.data) {
                  _this34.fireBaseAnSvc.firebaseAnalyticsEvents('promo_code_used', 'promo_code_used');

                  _this34.promoModel = response.data;
                  _this34.priceObj.promo = new _shared_models_cart_price_model__WEBPACK_IMPORTED_MODULE_5__["PromoModel"](response.data);
                  _this34.priceObj.promo.code = _this34.promoCode;

                  if (_this34.priceObj.amount < response.data['minOrder']) {
                    _this34.message.toast('info', "".concat(_this34.translate.instant('Your Cart Total Must Be Greater Than'), " ").concat(_this34.currency).concat(_this34.promoModel.minOrder));

                    _this34.clearPromo();

                    return;
                  }

                  _this34.calDiscountAmount();

                  if (_this34.priceObj.discount || _this34.priceObj.freeQuantity) {
                    console.log('4444444');

                    _this34.applyDiscount();

                    _this34.message.toast('success', _this34.translate.instant('Promo Code Applied Successfully'));
                  } else {
                    _this34.clearPromo();

                    _this34.message.toast('warning', _this34.translate.instant('Promo Code Not Applicable For This Cart'));
                  }

                  _this34.closePromoCode.nativeElement.className = 'promo-form collapse';
                }
              });
            } else {
              this.message.toast('error', this.translate.instant('Please Enter Promo Code'));
            }
          }
        }, {
          key: "clearPromo",
          value: function clearPromo() {
            this.promoModel = null;
            this.priceObj.promo = new _shared_models_cart_price_model__WEBPACK_IMPORTED_MODULE_5__["PromoModel"]();
            this.priceObj.promo.code = '';
          }
        }, {
          key: "onGiftCardSelect",
          value: function onGiftCardSelect(gift) {
            var _this35 = this;

            this.clearPromo();
            this.priceObj.gift = gift;
            var cartTotal = 0;
            var discountAmount = 0;
            this.cart.forEach(function (product) {
              cartTotal += _this35.cartService.calulateProductPrice(product);
            });

            if (cartTotal > 0) {
              discountAmount = this.priceObj.gift.price_type ? cartTotal * (this.priceObj.gift.percentage_value / 100) : this.priceObj.gift.price;
            }

            this.priceObj.discount = discountAmount > 0 ? discountAmount : 0;
            this.applyDiscount();
          }
        }, {
          key: "onGiftCardRemove",
          value: function onGiftCardRemove() {
            this.priceObj.gift = {};
            this.priceObj.discount = 0;
            this.applyDiscount();
          }
        }, {
          key: "calculateQuestionPrice",
          value: function calculateQuestionPrice() {
            var _this36 = this;

            if (this.questions.length && this.settings.app_type == 8) {
              this.questions.forEach(function (question) {
                question.optionsList.forEach(function (option) {
                  if (option.valueChargeType == 1) {
                    _this36.priceObj.questionPrice += option.flatValue;
                  } else {
                    var percentageValue = _this36.priceObj.amount * option.percentageValue / 100;
                    _this36.priceObj.questionPrice += percentageValue;
                  }
                });
              });
            }
          }
        }, {
          key: "openPromoCodeList",
          value: function openPromoCodeList() {
            this.isPromoCodeList = true;
          }
        }, {
          key: "onItemSelectEvt",
          value: function onItemSelectEvt(event) {
            this.promoCode = event.promoCode;
            this.isPromoCodeList = false;
          }
        }, {
          key: "getCurrency",
          value: function getCurrency() {
            var _this37 = this;

            this.util.getSelectedCurrency.subscribe(function (res) {
              if (res) {
                _this37.selected_currency = Object.assign({}, res);

                if (_this37.selected_currency.currency_name) {
                  _this37.currency = _this37.selected_currency.currency_name;
                }
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.cartSubscription.unsubscribe();
          }
        }]);

        return CartPriceDetailComponent;
      }();

      CartPriceDetailComponent.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"]
        }, {
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
        }, {
          type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]
        }, {
          type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]
        }, {
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_9__["MessagingService"]
        }, {
          type: _services_firebase_analytics_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_14__["FirebaseAnalyticsService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      CartPriceDetailComponent.propDecorators = {
        closePromoCode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['closePromoCode', {
            "static": false
          }]
        }],
        delivery_charge: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        is_dinin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        applyWalletDiscount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        walletAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        loggedIn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selfPickup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        activePlan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        priceObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        questions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        total_product_weight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        product_weight_list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        is_out_network: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rest_user_service_charges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        table_booking_details: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cartUpdated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        priceDetail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      CartPriceDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-price-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cart-price-detail.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-price-detail/cart-price-detail.component.html"))["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cart-price-detail.component.scss */
        "./src/app/layout/pages/cart/components/cart-price-detail/cart-price-detail.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"], _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"], _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_9__["MessagingService"], _services_firebase_analytics_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_14__["FirebaseAnalyticsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], CartPriceDetailComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/cart-product/cart-product.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/cart-product/cart-product.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesCartComponentsCartProductCartProductComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".image_view {\n  cursor: pointer;\n}\n\n.image_view:hover {\n  text-decoration: underline;\n}\n\n.instruction {\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.instruction:hover {\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvY29tcG9uZW50cy9jYXJ0LXByb2R1Y3QvY2FydC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtBQUNuQjs7QUFDQTtFQUNJLDBCQUEwQjtBQUU5Qjs7QUFBQTtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7QUFHcEI7O0FBREE7RUFDSSwwQkFBMEI7QUFJOUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcGFnZXMvY2FydC9jb21wb25lbnRzL2NhcnQtcHJvZHVjdC9jYXJ0LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VfdmlldyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmltYWdlX3ZpZXc6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmluc3RydWN0aW9uIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5pbnN0cnVjdGlvbjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/cart-product/cart-product.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/cart-product/cart-product.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: CartProductComponent */

    /***/
    function srcAppLayoutPagesCartComponentsCartProductCartProductComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartProductComponent", function () {
        return CartProductComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../core/theme/styleVariables.model */
      "./src/app/core/theme/styleVariables.model.ts");
      /* harmony import */


      var _shared_models_appSettings_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../shared/models/appSettings.model */
      "./src/app/shared/models/appSettings.model.ts");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");
      /* harmony import */


      var _core_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../services/messaging/messaging.service */
      "./src/app/services/messaging/messaging.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var src_app_shared_models_apiKeys_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/models/apiKeys.model */
      "./src/app/shared/models/apiKeys.model.ts");

      var CartProductComponent = /*#__PURE__*/function () {
        function CartProductComponent(router, util, message, translate, ref) {
          var _this38 = this;

          _classCallCheck(this, CartProductComponent);

          this.router = router;
          this.util = util;
          this.message = message;
          this.translate = translate;
          this.ref = ref;
          this.onPlus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.onMins = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.onCustomizationUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.timeInterval = 0;
          this.currency = "";
          this.selected_currency = new src_app_shared_models_apiKeys_model__WEBPACK_IMPORTED_MODULE_9__["Currency"]();
          this.is_special_instruction = false;
          this.special_instructions = '';
          this.cartItems = [];
          this.ref.detach();
          setInterval(function () {
            _this38.ref.detectChanges();
          }, 2000);
        }

        _createClass(CartProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currency = _core_global__WEBPACK_IMPORTED_MODULE_6__["GlobalVariable"].CURRENCY;

            if (this.settings.is_multicurrency_enable) {
              this.getCurrency();
            }

            this.getCartItems();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.settings.currentValue) {
              this.settings = changes.settings.currentValue;
              this.timeInterval = this.settings['interval'];
            }
          }
        }, {
          key: "onRemove",
          value: function onRemove() {
            this.remove.emit();
          }
        }, {
          key: "increaseQuantity",
          value: function increaseQuantity() {
            if (this.settings.enable_item_purchase_limit) {
              if (Number(this.product.purchase_limit) > 0) {
                if (this.product.selectedQuantity >= Number(this.product.purchase_limit)) {
                  this.message.alert('info', this.translate.instant('Maximum Limit Reached'));
                  return;
                }
              }
            }

            if (this.product.selectedQuantity >= this.product.quantity || this.product.selectedQuantity * this.timeInterval >= this.product.maxHour) {
              this.message.alert('info', this.translate.instant('Maximum Limit Reached'));
              return;
            }

            this.onPlus.emit();
          }
        }, {
          key: "decreaseQuantity",
          value: function decreaseQuantity() {
            if (this.product.selectedQuantity == 0) {
              return;
            }

            this.onMins.emit();
          }
        }, {
          key: "updateQuantity",
          value: function updateQuantity(id, value, remove) {
            this.onCustomizationUpdate.emit({
              id: id,
              value: value,
              remove: remove
            });
          }
        }, {
          key: "addOnNames",
          value: function addOnNames(values) {
            return values.map(function (addon) {
              return " ".concat(addon.type_name, " * ").concat(addon.is_default == '1' ? '1' : addon.adds_on_type_quantity);
            }).toString();
          }
        }, {
          key: "getAddonProductPrice",
          value: function getAddonProductPrice(productPrice, addons) {
            var amount = parseFloat(productPrice);

            if (!addons && !addons.length) {
              return amount.toFixed(this.settings.price_decimal_length);
            }

            ;
            addons.forEach(function (item) {
              // amount += item.value.reduce((a, { price }) => a + parseFloat(price), 0)
              item.value.forEach(function (element) {
                amount = amount + Number(element.price) * Number(element.adds_on_type_quantity);
              });
            });
            return amount.toFixed(this.settings.price_decimal_length);
          }
        }, {
          key: "onSupplier",
          value: function onSupplier(supplierId) {
            if (this.settings.app_type == 1) this.router.navigate(['products', 'listing'], {
              queryParams: {
                supplierId: supplierId
              }
            });
          }
        }, {
          key: "productDetail",
          value: function productDetail(data) {
            if (this.settings.app_type != 1 || this.settings.product_detail == 1) {
              var obj = {
                productId: data.unitId || data.id,
                supplierBranchId: data.supplier_branch_id,
                category: data.categoryId
              };
              data.name = data.name.replace(/ &/g, "-");
              obj = Object.assign(Object.assign({}, this.util.handler), obj);
              this.router.navigate(["/", "products", "product-detail", data.name], {
                queryParams: {
                  f: this.util.encryptData(obj)
                }
              });
            }
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
          key: "getCurrency",
          value: function getCurrency() {
            var _this39 = this;

            this.utilSubscription = this.util.getSelectedCurrency.subscribe(function (res) {
              if (res) {
                _this39.selected_currency = new src_app_shared_models_apiKeys_model__WEBPACK_IMPORTED_MODULE_9__["Currency"]();
                _this39.selected_currency = res;

                if (_this39.selected_currency.currency_name) {
                  _this39.currency = _this39.selected_currency.currency_name;
                }
              }
            });
          }
        }, {
          key: "showSpecialInstruction",
          value: function showSpecialInstruction(item) {
            this.special_instructions = item.special_instructions || '';
            this.is_special_instruction = true;
          }
        }, {
          key: "getCartItems",
          value: function getCartItems() {
            var _this40 = this;

            this.cartSubscription = this.util.getCart.subscribe(function (cart) {
              if (cart) {
                _this40.cartItems = cart;
              }
            });

            if (this.cartSubscription) {
              this.cartSubscription.unsubscribe();
            }
          }
        }, {
          key: "onProcessSpecialInstruction",
          value: function onProcessSpecialInstruction(event) {
            for (var i in this.cartItems) {
              if (Number(this.cartItems[i].productId) == this.product.productId) {
                this.cartItems[i]['special_instructions'] = event;
                break;
              }
            }

            this.util.setCart(this.cartItems);
            this.is_special_instruction = false;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.utilSubscription) {
              this.utilSubscription.unsubscribe();
            }
          }
        }, {
          key: "trackByCartVariantsFn",
          value: function trackByCartVariantsFn(id, index) {
            return index;
          }
        }, {
          key: "trackByProductFn",
          value: function trackByProductFn(id, index) {
            return index;
          }
        }, {
          key: "trackByCustomizationFn",
          value: function trackByCustomizationFn(id, index) {
            return index;
          }
        }, {
          key: "trackByItemFn",
          value: function trackByItemFn(id, index) {
            return index;
          }
        }]);

        return CartProductComponent;
      }();

      CartProductComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"]
        }, {
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_7__["MessagingService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }];
      };

      CartProductComponent.propDecorators = {
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        onPlus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        onMins: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        remove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        onCustomizationUpdate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      CartProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-cart-product",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cart-product.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-product/cart-product.component.html"))["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cart-product.component.scss */
        "./src/app/layout/pages/cart/components/cart-product/cart-product.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"], _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_7__["MessagingService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])], CartProductComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/cart-products-list/cart-products-list.component.scss":
    /*!***************************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/cart-products-list/cart-products-list.component.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesCartComponentsCartProductsListCartProductsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlcy9jYXJ0L2NvbXBvbmVudHMvY2FydC1wcm9kdWN0cy1saXN0L2NhcnQtcHJvZHVjdHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/cart-products-list/cart-products-list.component.ts":
    /*!*************************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/cart-products-list/cart-products-list.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: CartProductsListComponent */

    /***/
    function srcAppLayoutPagesCartComponentsCartProductsListCartProductsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartProductsListComponent", function () {
        return CartProductsListComponent;
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
      /* harmony import */


      var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../services/messaging/messaging.service */
      "./src/app/services/messaging/messaging.service.ts");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
      /* harmony import */


      var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../services/cart/cart.service */
      "./src/app/services/cart/cart.service.ts");
      /* harmony import */


      var _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../shared/pipes/localization.pipe */
      "./src/app/shared/pipes/localization.pipe.ts");
      /* harmony import */


      var _layout_shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../../../layout/shared/product/components/add-on/add-on.component */
      "./src/app/layout/shared/product/components/add-on/add-on.component.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _core_global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../../../../core/global */
      "./src/app/core/global.ts");

      var CartProductsListComponent = /*#__PURE__*/function () {
        function CartProductsListComponent(util, cartService, message, dialogService, localization, translate) {
          _classCallCheck(this, CartProductsListComponent);

          this.util = util;
          this.cartService = cartService;
          this.message = message;
          this.dialogService = dialogService;
          this.localization = localization;
          this.translate = translate;
          this.totalItems = 0;
          this.darkTheme = false;
          this.decimalQuantityStep = _core_global__WEBPACK_IMPORTED_MODULE_11__["GlobalVariable"].decimal_quantity_step;
        }

        _createClass(CartProductsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.products.forEach(function (ele) {
              ele.freeQuantity = 0;
            });
          }
        }, {
          key: "openAddOnDialog",
          value: function openAddOnDialog(product) {
            var dialogRef = this.dialogService.open(_layout_shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_9__["AddOnComponent"], {
              header: product['name'],
              width: '50%',
              showHeader: false,
              // contentStyle: { "max-height": "350px", "overflow": "auto" },
              transitionOptions: '600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
              data: {
                product: Object.assign({}, product),
                addOnItems: product['adds_on']
              }
            });
            dialogRef.onClose.subscribe(function () {});
          }
        }, {
          key: "add",
          value: function add(product, index) {
            if (this.settings.enable_in_out_network) {
              if (product.is_out_network) {
                if (product.selectedQuantity >= 1) {
                  this.message.alert('info', this.translate.instant('Maximum Limit Reached'));
                  return;
                }
              }
            }

            if (product['customization'] && product['customization'].length) {
              return this.openAddOnDialog(product);
            } else {
              if (product.selectedQuantity >= Number(product.quantity) - Number(product.purchased_quantity)) {
                this.message.alert('info', this.translate.instant('Maximum Limit Reached'));
                return;
              }

              if (product['price_type']) {
                product.selectedQuantity += product.duration / this.settings.interval;
                this.cartService.calculateProductHourlyPrice(product);
              } else {
                if (this.settings.is_decimal_quantity_allowed == 1) {
                  this.products[index].selectedQuantity = this.cartService.decimalRoundOff(this.products[index].selectedQuantity + this.decimalQuantityStep);
                } else {
                  this.products[index].selectedQuantity++;
                }
              }

              this.setCart();
            }
          }
        }, {
          key: "mins",
          value: function mins(product, index) {
            var _this41 = this;

            var minQty = product['price_type'] ? product.duration / this.settings.interval : this.settings.is_decimal_quantity_allowed == 1 ? this.decimalQuantityStep : 1;

            if (product.selectedQuantity > minQty) {
              if (product['customization'] && product['customization'].length) {
                return this.openAddOnDialog(product);
              } else {
                if (product['price_type']) {
                  product.selectedQuantity -= product.duration / this.settings.interval;
                  this.cartService.calculateProductHourlyPrice(product);
                } else {
                  if (this.settings.is_decimal_quantity_allowed == 1) {
                    this.products[index].selectedQuantity = this.cartService.decimalRoundOff(this.products[index].selectedQuantity - this.decimalQuantityStep);
                  } else {
                    this.products[index].selectedQuantity--;
                  }
                }

                this.setCart();
              }
            } else {
              this.message.confirm("".concat(this.translate.instant('Remove This'), " ").concat(this.localization.transform('product')), "".concat(this.translate.instant('This'), " ").concat(this.localization.transform('product'), " ").concat(this.translate.instant('Will Get Removed From The Cart'), "."), true).then(function (result) {
                if (result.value) {
                  if (_this41.settings.is_decimal_quantity_allowed == 1) {
                    _this41.products[index].selectedQuantity = _this41.cartService.decimalRoundOff(_this41.products[index].selectedQuantity - _this41.decimalQuantityStep);
                  } else {
                    _this41.products[index].selectedQuantity -= minQty;
                  }

                  if (_this41.products[index].selectedQuantity == 0) {
                    _this41.products.splice(index, 1);
                  }

                  _this41.util.clearLocalData('ques_data');

                  _this41.setCart();
                }
              });
            }
          }
        }, {
          key: "updateCustomizationQuantity",
          value: function updateCustomizationQuantity($event, productIndex) {
            var custId = $event.id;
            var quantity = $event.value;
            var product = this.products[productIndex];

            if (quantity > 0 && product.selectedQuantity >= Number(product.quantity) - Number(product.purchased_quantity)) {
              this.message.alert('info', this.translate.instant('Maximum Limit Reached'));
              return;
            }

            var item = product.customization.find(function (item) {
              return item.id == custId;
            });
            var qty_to_set = 0;

            if (this.settings.is_decimal_quantity_allowed == 1) {
              var calculated_quantity = 0;

              if ($event.remove) {
                calculated_quantity = item.quantity + quantity;
              } else {
                calculated_quantity = item.quantity + this.decimalQuantityStep * quantity;
              }

              qty_to_set = this.cartService.decimalRoundOff(calculated_quantity);
            } else {
              qty_to_set = item.quantity + quantity;
            }

            if (qty_to_set <= 0) {
              // let _addons = product.customization.filter(
              //   item => item.quantity > 0
              // );
              // if (_addons.length < 1) {
              this.removeFromCart(productIndex); // } else {
              //   this.setProductCart(product);
              //   // this.totalPrice = this.cartService.calulateProductPrice(this.product);
              // }
            } else {
              item.quantity = qty_to_set;
              this.setProductCart(product); // this.totalPrice = this.cartService.calulateProductPrice(this.product);
            }
          }
        }, {
          key: "setProductCart",
          value: function setProductCart(product) {
            this.cartService.addToCart(product);
          }
        }, {
          key: "setCart",
          value: function setCart() {
            this.util.setCart(this.products);
          }
        }, {
          key: "removeFromCart",
          value: function removeFromCart(index) {
            var _this42 = this;

            this.message.confirm("".concat(this.translate.instant('Remove This'), " ").concat(this.localization.transform('product')), "".concat(this.translate.instant('This'), " ").concat(this.localization.transform('product'), " ").concat(this.translate.instant('Will Get Removed From The Cart'), "."), true).then(function (data) {
              if (data.value) {
                _this42.products.splice(index, 1);

                _this42.setCart();

                _this42.util.clearLocalData('ques_data');
              }
            });
          }
        }, {
          key: "trackByProductsFn",
          value: function trackByProductsFn(id, index) {
            return index;
          }
        }, {
          key: "trackByProduct2Fn",
          value: function trackByProduct2Fn(id, index) {
            return index;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }]);

        return CartProductsListComponent;
      }();

      CartProductsListComponent.ctorParameters = function () {
        return [{
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
        }, {
          type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]
        }, {
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"]
        }, {
          type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
        }, {
          type: _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_8__["LocalizationPipe"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
        }];
      };

      CartProductsListComponent.propDecorators = {
        products: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        totalItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        darkTheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      CartProductsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-cart-products-list",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cart-products-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-products-list/cart-products-list.component.html"))["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cart-products-list.component.scss */
        "./src/app/layout/pages/cart/components/cart-products-list/cart-products-list.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"], _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"], _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__["DialogService"], _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_8__["LocalizationPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])], CartProductsListComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/cart-skeleton/cart-skeleton.component.scss":
    /*!*****************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/cart-skeleton/cart-skeleton.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesCartComponentsCartSkeletonCartSkeletonComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".items_added_outter_box h3 {\n  margin: 20px;\n}\n\n.price_details ul {\n  border-bottom: none;\n}\n\n.price_details {\n  border-color: #dddddd;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvY29tcG9uZW50cy9jYXJ0LXNrZWxldG9uL2NhcnQtc2tlbGV0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0kscUJBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvY29tcG9uZW50cy9jYXJ0LXNrZWxldG9uL2NhcnQtc2tlbGV0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbXNfYWRkZWRfb3V0dGVyX2JveCBoMyB7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4ucHJpY2VfZGV0YWlscyB1bCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnByaWNlX2RldGFpbHMge1xuICAgIGJvcmRlci1jb2xvcjogI2RkZGRkZCA7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/cart-skeleton/cart-skeleton.component.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/cart-skeleton/cart-skeleton.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: CartSkeletonComponent */

    /***/
    function srcAppLayoutPagesCartComponentsCartSkeletonCartSkeletonComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartSkeletonComponent", function () {
        return CartSkeletonComponent;
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


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");

      var CartSkeletonComponent = /*#__PURE__*/function () {
        function CartSkeletonComponent(util) {
          _classCallCheck(this, CartSkeletonComponent);

          this.util = util;
        }

        _createClass(CartSkeletonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "trackByFakeListFn",
          value: function trackByFakeListFn(id, index) {
            return index;
          }
        }]);

        return CartSkeletonComponent;
      }();

      CartSkeletonComponent.ctorParameters = function () {
        return [{
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
        }];
      };

      CartSkeletonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-skeleton',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cart-skeleton.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/cart-skeleton/cart-skeleton.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cart-skeleton.component.scss */
        "./src/app/layout/pages/cart/components/cart-skeleton/cart-skeleton.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])], CartSkeletonComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/delivery-address-detail/delivery-address-detail.component.scss":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/delivery-address-detail/delivery-address-detail.component.scss ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesCartComponentsDeliveryAddressDetailDeliveryAddressDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".modal-content {\n  overflow: scroll;\n  max-height: 500px;\n}\n\n.signup-phone select {\n  height: 40px !important;\n  padding: 0 !important;\n  border-color: #ccc !important;\n  border-radius: 5px !important;\n}\n\ninput {\n  background: #fff !important;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.02);\n  border-radius: 5px;\n  margin-bottom: 25px;\n  border: 1px solid #dddddd75;\n  font-size: 14px;\n  height: 40px !important;\n  padding: 10px 20px !important;\n}\n\n/* Country Dropdown Box */\n\n.country_dropbox.home-page-search-restorent.dropdown a.dropdown-toggle {\n  font-size: 16px;\n  color: #2b2d32;\n  font-weight: 400;\n  border: 1px solid #dddddd75;\n  border-radius: 10px;\n  padding: 10px 5px;\n  margin-right: 5px;\n}\n\n.country_dropbox.home-page-search-restorent.dropdown {\n  padding: 0;\n  border: none;\n  margin: 9px 0 0 0;\n}\n\n.country_dropbox.home-page-search-restorent.dropdown img {\n  width: 10px;\n  margin-left: 5px;\n}\n\n.country_dropbox.home-page-search-restorent.dropdown ul {\n  left: 3px !important;\n  top: 0px !important;\n  min-width: 10.7rem !important;\n  width: 300px;\n  max-width: 20rem;\n}\n\n.country_dropbox.dropdown-toggle::after {\n  border: none !important;\n  border-right: 1px solid #dddddd75 !important;\n}\n\n.country_dropbox .country_text p {\n  width: 25%;\n  display: -webkit-inline-box;\n  margin-bottom: 0;\n}\n\n.country_dropbox .country_text img {\n  width: 20px !important;\n  margin-right: 9px;\n}\n\n.country_dropbox .country_flag {\n  width: 22px !important;\n  margin-right: 10px;\n}\n\n/* ************************************ */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvY29tcG9uZW50cy9kZWxpdmVyeS1hZGRyZXNzLWRldGFpbC9kZWxpdmVyeS1hZGRyZXNzLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7RUFDSSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7QUFFakM7O0FBQUU7RUFDRSwyQkFBMEI7RUFDMUIsMkNBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsNkJBQTZCO0FBR2pDOztBQURFLHlCQUFBOztBQUVGO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBR25COztBQUFBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7QUFHbkI7O0FBQUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBR2xCOztBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGdCQUFnQjtBQUdsQjs7QUFEQTtFQUNFLHVCQUFzQjtFQUN0Qiw0Q0FBNEM7QUFJOUM7O0FBREE7RUFDRSxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQUlsQjs7QUFEQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFJbkI7O0FBREE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBSXBCOztBQUZBLHlDQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvY29tcG9uZW50cy9kZWxpdmVyeS1hZGRyZXNzLWRldGFpbC9kZWxpdmVyeS1hZGRyZXNzLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuLnNpZ251cC1waG9uZSBzZWxlY3Qge1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICNjY2MgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgfVxuICBpbnB1dCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZiFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAuMDIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ3NTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLyogQ291bnRyeSBEcm9wZG93biBCb3ggKi9cblxuLmNvdW50cnlfZHJvcGJveC5ob21lLXBhZ2Utc2VhcmNoLXJlc3RvcmVudC5kcm9wZG93biBhLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyYjJkMzI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ3NTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY291bnRyeV9kcm9wYm94LmhvbWUtcGFnZS1zZWFyY2gtcmVzdG9yZW50LmRyb3Bkb3duIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDlweCAwIDAgMDtcbn1cblxuLmNvdW50cnlfZHJvcGJveC5ob21lLXBhZ2Utc2VhcmNoLXJlc3RvcmVudC5kcm9wZG93biBpbWcge1xuICB3aWR0aDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmNvdW50cnlfZHJvcGJveC5ob21lLXBhZ2Utc2VhcmNoLXJlc3RvcmVudC5kcm9wZG93biB1bCB7XG4gIGxlZnQ6IDNweCAhaW1wb3J0YW50O1xuICB0b3A6IDBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwLjdyZW0gIWltcG9ydGFudDtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDIwcmVtO1xufVxuLmNvdW50cnlfZHJvcGJveC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZGRkZDc1ICFpbXBvcnRhbnQ7XG59XG5cbi5jb3VudHJ5X2Ryb3Bib3ggLmNvdW50cnlfdGV4dCBwIHtcbiAgd2lkdGg6IDI1JTtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY291bnRyeV9kcm9wYm94IC5jb3VudHJ5X3RleHQgaW1nIHtcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XG59XG5cbi5jb3VudHJ5X2Ryb3Bib3ggLmNvdW50cnlfZmxhZyB7XG4gIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLyJdfQ== */";
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/delivery-address-detail/delivery-address-detail.component.ts":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/delivery-address-detail/delivery-address-detail.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: DeliveryAddressDetailComponent */

    /***/
    function srcAppLayoutPagesCartComponentsDeliveryAddressDetailDeliveryAddressDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveryAddressDetailComponent", function () {
        return DeliveryAddressDetailComponent;
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
      /* harmony import */


      var _services_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../services/http/http.service */
      "./src/app/services/http/http.service.ts");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../services/messaging/messaging.service */
      "./src/app/services/messaging/messaging.service.ts");
      /* harmony import */


      var _core_apiUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../core/apiUrl */
      "./src/app/core/apiUrl.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_validation_validation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../services/validation/validation.service */
      "./src/app/services/validation/validation.service.ts");
      /* harmony import */


      var _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../core/theme/styleConstants.model */
      "./src/app/core/theme/styleConstants.model.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-intl-tel-input */
      "./node_modules/ngx-intl-tel-input/__ivy_ngcc__/fesm2015/ngx-intl-tel-input.js");
      /* harmony import */


      var src_app_core_global__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/core/global */
      "./src/app/core/global.ts");

      var DeliveryAddressDetailComponent = /*#__PURE__*/function () {
        function DeliveryAddressDetailComponent(router, fb, http, user, util, message, validator, translate, route) {
          var _this43 = this;

          _classCallCheck(this, DeliveryAddressDetailComponent);

          this.router = router;
          this.fb = fb;
          this.http = http;
          this.user = user;
          this.util = util;
          this.message = message;
          this.validator = validator;
          this.translate = translate;
          this.route = route;
          this.isLoading = false;
          this.showError = false;
          this.is_self_pickup = 0;
          this.addressList = [];
          this.selectedAreaIndex = 0;
          this.localAreaIndex = 0;
          this.addressModel = {};
          this.display = "none";
          this.countryCodeString = '';
          this.countryCodeFlag = '';
          this.loggedIn = false;
          this.cart = [];
          this.isAddressHide = 0;
          this.calc_distance = 0;
          this.addressDetail = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.serviceCharge = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](null);
          this.addressId = 0;
          this.separateDialCode = true;
          this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_15__["SearchCountryField"];
          this.countryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_15__["CountryISO"].Switzerland;
          this.preferredCountries = [];
          this.client_code = src_app_core_global__WEBPACK_IMPORTED_MODULE_16__["GlobalVariable"].UNIQUE_ID;
          this.cancelBtn = new _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_12__["StyleConstants"]();
          this.saveBtn = new _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_12__["StyleConstants"]();
          this.routeSubscription = this.route.queryParams.subscribe(function (params) {
            if (params['place_order'] == 1 && params['adrs_id']) {
              _this43.addressId = parseInt(params['adrs_id']);
            }
          });
        }

        _createClass(DeliveryAddressDetailComponent, [{
          key: "setLoggedInData",
          set: function set(data) {
            if (data) {
              this.loggedInDataObj = data;

              if (this.loggedInDataObj.access_token) {
                this.loggedIn = true;
                this.countryISO = this.loggedInDataObj.iso || 'us';
              }
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this44 = this;

            if (this.settings && this.settings.app_type == 7) {
              this.is_self_pickup = 1;
            }

            if (this.settings.countryCodes.length > 0) {
              this.settings.countryCodes.forEach(function (item) {
                if (_this44.settings.cutom_country_code == 1) {
                  _this44.preferredCountries.push(item);
                } else {
                  _this44.preferredCountries.push(item.iso.toLowerCase());
                }
              });
            }

            this.cancelBtn.color = this.style.defaultColor;
            this.cancelBtn.borderColor = this.style.defaultColor;
            this.saveBtn.backgroundColor = this.style.primaryColor;
            this.saveBtn.borderColor = this.style.primaryColor;
            this.saveBtn.color = '#ffffff';
            this.makeNewAddressForm();
            this.getAddress();
            this.addAddressModel.subscribe(function (item) {
              if (item && _this44.settings.header_theme == 2) {
                _this44.display = 'block';
              }
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.loggedIn && changes.loggedIn.currentValue) {
              this.getAddress();
            }

            if (changes.setLoggedInData && changes.setLoggedInData.currentValue) {
              this.getAddress();
            }
          }
        }, {
          key: "makeNewAddressForm",
          value: function makeNewAddressForm() {
            this.form = this.fb.group({
              'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, this.validator.noWhitespaceValidator])],
              'houseNo': [''],
              'collectNo': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, this.validator.noWhitespaceValidator])],
              'addressLineFirst': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])],
              'latitude': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])],
              'longitude': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])],
              'phone_number': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])],
              'reference_address': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(this.settings.address_reference_char_limit)])]
            });

            if (this.settings.cutom_country_code) {
              this.form.addControl('countryCode', new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]));
            }

            if (this.settings.addCollectFieldInAddress == 0) {
              this.form.controls['collectNo'].setValidators(null);
              this.form.controls['collectNo'].updateValueAndValidity();
            }
          }
        }, {
          key: "getAddress",
          value: function getAddress() {
            var _this45 = this;

            var obj = {
              accessToken: this.user.getUserToken,
              languageId: this.util.handler.languageId,
              latitude: this.util.handler.latitude,
              longitude: this.util.handler.longitude
            };

            if (this.cart.length) {
              obj['supplierBranchId'] = this.cart[0].supplier_branch_id;
            }

            if (!this.loggedIn) {
              return;
            }

            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].address.getAddress, obj, true).subscribe(function (response) {
              if (!!response && response.data) {
                _this45.addressModel = response.data;
                _this45.addressList = [];
                _this45.addressList = response.data.address;
                var index = -1;

                if (_this45.addressId) {
                  index = response.data.address.findIndex(function (add) {
                    return add.id == _this45.addressId;
                  });
                } else {
                  if (_this45.util.getLocalData('cart_address', true)) {
                    var cart_address = _this45.util.getLocalData('cart_address', true);

                    index = response.data.address.findIndex(function (add) {
                      return add.id == cart_address.id;
                    });
                  } else {
                    index = response.data.address.findIndex(function (add) {
                      return add.is_default == 1;
                    });
                  }
                }

                if (index > -1) {
                  _this45.selectedAreaIndex = index;
                  _this45.localAreaIndex = index;
                }

                if (_this45.settings.supplier_service_fee == 1 && response.data.user_service_charge) {
                  _this45.serviceCharge.emit(response.data.user_service_charge);
                }

                _this45.onAddressSelect();
              }
            });
          }
        }, {
          key: "onAddressSelect",
          value: function onAddressSelect() {
            this.selectedAreaIndex = this.localAreaIndex;
            var completeInfo = Object.assign({}, this.addressModel);
            completeInfo.address = this.addressList[this.selectedAreaIndex];
            this.addressDetail.emit(completeInfo);
            this.closeAddressModal.nativeElement.click();
          }
        }, {
          key: "addAddress",
          value: function addAddress() {
            if (this.loggedIn) {
              this.router.navigate(['/account/address/add-edit-address']);
            } else {
              this.message.alert('info', "".concat(this.translate.instant('Please Login First'), "!"));
            }
          }
        }, {
          key: "openNewAddressDialog",
          value: function openNewAddressDialog() {
            if (!this.loggedIn) {
              this.message.alert('info', "".concat(this.translate.instant('Please Login First'), "!"));
            } else {
              this.display = 'block';
            }
          }
        }, {
          key: "onAddressSearch",
          value: function onAddressSearch(data) {
            this.form.controls.addressLineFirst.setValue(data.formatted_address);
            this.form.controls.latitude.setValue(data.lat);
            this.form.controls.longitude.setValue(data.lng);
          }
        }, {
          key: "setCountryCode",
          value: function setCountryCode(data) {
            this.form.controls.countryCode.setValue(data.country_code);
            this.countryCodeString = data.country_code;
            this.countryCodeFlag = data.flag_image;
          }
        }, {
          key: "onAdd",
          value: function onAdd(value) {
            var _this46 = this;

            if (this.form.invalid) {
              this.showError = true;
              setTimeout(function () {
                _this46.showError = false;
              }, 300000);
              return;
            }

            var payload = {
              name: value.name.trim(),
              addressLineFirst: value.houseNo.trim(),
              customer_address: value.addressLineFirst.trim(),
              phone_number: !this.settings.cutom_country_code ? Number(value.phone_number.number.replace(/[^\d]/g, "")) : value.phone_number,
              country_code: !this.settings.cutom_country_code ? value.phone_number.countryCode.replace(/ +/g, "") : value.countryCode,
              accessToken: this.user.getUserToken,
              latitude: value.latitude,
              longitude: value.longitude,
              languageId: this.util.handler.languageId
            };

            if (this.settings.addCollectFieldInAddress == 1) {
              payload['collectNumber'] = value.collectNo.trim();
            }

            if (this.settings.enable_address_reference) {
              payload['reference_address'] = value.reference_address;
            }

            this.isLoading = true;
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].address.addAddress, payload).subscribe(function (response) {
              if (response && response.status === 200) {
                _this46.addressList.push(response.data);

                _this46.message.toast('success', "".concat(_this46.translate.instant('Address Added Successfully'), "!"));

                var completeInfo = Object.assign({}, _this46.addressModel);
                completeInfo.address = response.data;
                _this46.selectedAreaIndex = _this46.addressList.length - 1;

                _this46.addressDetail.emit(completeInfo);

                _this46.util.setLocalData('cart_address', response.data, true);

                _this46.countryCodeString = '';
                _this46.countryCodeFlag = '';

                _this46.form.reset();

                _this46.closeNewAddress.nativeElement.click();
              }

              _this46.isLoading = false;
            }, function (err) {
              _this46.isLoading = false;
            });
          }
        }, {
          key: "changeAddress",
          value: function changeAddress() {
            this.localAreaIndex = this.selectedAreaIndex;
            this.util.setLocalData('cart_address', this.addressList[this.localAreaIndex], true);
          }
        }, {
          key: "trackByAddressFn",
          value: function trackByAddressFn(id, index) {
            return index;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.closeAddressModal.nativeElement.click();
            this.closeNewAddress.nativeElement.click();
            if (!!this.routeSubscription) this.routeSubscription.unsubscribe();
          }
        }]);

        return DeliveryAddressDetailComponent;
      }();

      DeliveryAddressDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
        }, {
          type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
        }, {
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
        }, {
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_7__["MessagingService"]
        }, {
          type: _services_validation_validation_service__WEBPACK_IMPORTED_MODULE_11__["ValidationService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }];
      };

      DeliveryAddressDetailComponent.propDecorators = {
        cart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        addAddressModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        isAddressHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        calc_distance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        setLoggedInData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['loggedInData']
        }],
        closeAddressModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['closeAddressModal', {
            "static": false
          }]
        }],
        closeNewAddress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['closeNewAddress', {
            "static": false
          }]
        }],
        addressDetail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        serviceCharge: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      DeliveryAddressDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery-address-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./delivery-address-detail.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/delivery-address-detail/delivery-address-detail.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./delivery-address-detail.component.scss */
        "./src/app/layout/pages/cart/components/delivery-address-detail/delivery-address-detail.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"], _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_7__["MessagingService"], _services_validation_validation_service__WEBPACK_IMPORTED_MODULE_11__["ValidationService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])], DeliveryAddressDetailComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/instructions/instructions.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/instructions/instructions.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesCartComponentsInstructionsInstructionsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".instructions {\n  padding: 15px 25px 25px;\n  border: 1px solid #999999;\n  border-radius: 4px;\n  background-color: #f8f8f8;\n  margin-top: 30px;\n}\n\n.instructions h4 {\n  font-size: 19px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvaW5zdHJ1Y3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBTXZCLHlCQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIseUJBQW9DO0VBQ3BDLGdCQUFnQjtBQUpwQjs7QUFOQTtFQUlRLGVBQWU7QUFNdkIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcGFnZXMvY2FydC9jb21wb25lbnRzL2luc3RydWN0aW9ucy9pbnN0cnVjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5zdHJ1Y3Rpb25zIHtcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHggMjVweDtcblxuICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgIH1cblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNTMsIDE1MywgMTUzKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/instructions/instructions.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/instructions/instructions.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: InstructionsComponent */

    /***/
    function srcAppLayoutPagesCartComponentsInstructionsInstructionsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstructionsComponent", function () {
        return InstructionsComponent;
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


      var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../../core/theme/styleVariables.model */
      "./src/app/core/theme/styleVariables.model.ts");
      /* harmony import */


      var _shared_models_appSettings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../shared/models/appSettings.model */
      "./src/app/shared/models/appSettings.model.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_core_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/global */
      "./src/app/core/global.ts");

      var InstructionsComponent = /*#__PURE__*/function () {
        function InstructionsComponent(localization) {
          _classCallCheck(this, InstructionsComponent);

          this.localization = localization;
          this.title = '';
          this.instructionText = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](null);
          this.clientCode = src_app_core_global__WEBPACK_IMPORTED_MODULE_5__["GlobalVariable"].UNIQUE_ID;
          this.instructions = '';
          this.placeholder = '';
          this.clientCode;
          this.placeholder = this.clientCode == 'experience_0655' ? 'Note instructions and desired pick-up time here.' : "Enter ".concat(this.title ? this.title : this.localization.transform('instruction'), " Here");
        }

        _createClass(InstructionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onInstructionChange",
          value: function onInstructionChange(instruction) {
            this.instructionText.emit(instruction);
          }
        }]);

        return InstructionsComponent;
      }();

      InstructionsComponent.ctorParameters = function () {
        return [{
          type: _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_1__["LocalizationPipe"]
        }];
      };

      InstructionsComponent.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        instructionText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      InstructionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-instructions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./instructions.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/instructions/instructions.component.html"))["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./instructions.component.scss */
        "./src/app/layout/pages/cart/components/instructions/instructions.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_1__["LocalizationPipe"]])], InstructionsComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/loyalty-discount/loyalty-discount.component.scss":
    /*!***********************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/loyalty-discount/loyalty-discount.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesCartComponentsLoyaltyDiscountLoyaltyDiscountComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".referral-cart a {\n  float: right;\n  margin-right: 22px;\n  margin-top: 7px;\n  cursor: pointer;\n  position: relative;\n}\n\n.referral-cart .applied {\n  font-size: 20px;\n  color: #2da72d;\n  margin-right: 6px;\n  vertical-align: bottom;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvY29tcG9uZW50cy9sb3lhbHR5LWRpc2NvdW50L2xveWFsdHktZGlzY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0FBQXhCOztBQU5BO0VBVU0sZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsc0JBQXNCO0FBQTVCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvY29tcG9uZW50cy9sb3lhbHR5LWRpc2NvdW50L2xveWFsdHktZGlzY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVmZXJyYWwtY2FydCB7XHJcbiAgICBhIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIycHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYXBwbGllZCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6ICMyZGE3MmQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */";
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/loyalty-discount/loyalty-discount.component.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/loyalty-discount/loyalty-discount.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: LoyaltyDiscountComponent */

    /***/
    function srcAppLayoutPagesCartComponentsLoyaltyDiscountLoyaltyDiscountComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoyaltyDiscountComponent", function () {
        return LoyaltyDiscountComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_models_cart_price_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../../shared/models/cart-price.model */
      "./src/app/shared/models/cart-price.model.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../services/messaging/messaging.service */
      "./src/app/services/messaging/messaging.service.ts");
      /* harmony import */


      var _shared_models_appSettings_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../shared/models/appSettings.model */
      "./src/app/shared/models/appSettings.model.ts");
      /* harmony import */


      var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../core/theme/styleVariables.model */
      "./src/app/core/theme/styleVariables.model.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");
      /* harmony import */


      var src_app_shared_models_apiKeys_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/models/apiKeys.model */
      "./src/app/shared/models/apiKeys.model.ts");

      var LoyaltyDiscountComponent = /*#__PURE__*/function () {
        function LoyaltyDiscountComponent(message, translate, util, ref) {
          var _this47 = this;

          _classCallCheck(this, LoyaltyDiscountComponent);

          this.message = message;
          this.translate = translate;
          this.util = util;
          this.ref = ref;
          this.loyalty_amount = 0;
          this.loyalty_points = 0;
          this.loyaltylAmount = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"](null);
          this.currency = '';
          this.loyalty_applied = false;
          this.applied_admount = 0;
          this.selected_currency = new src_app_shared_models_apiKeys_model__WEBPACK_IMPORTED_MODULE_9__["Currency"]();
          this.currency = _core_global__WEBPACK_IMPORTED_MODULE_7__["GlobalVariable"].CURRENCY;
          this.ref.detach();
          setInterval(function () {
            _this47.ref.detectChanges();
          }, 2000);
        }

        _createClass(LoyaltyDiscountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.settings.is_multicurrency_enable) {
              this.getCurrency();
            }
          }
        }, {
          key: "applyReferral",
          value: function applyReferral() {
            if (this.settings.enable_min_loyality_points) {
              if (this.loyalty_points >= this.settings.min_loyalty_points_to_redeem) {
                this.setLoyaltyPoints();
                return;
              } else {
                this.message.toast('info', "Loyalty Points Must Be Greater Than Or Equal To ".concat(this.settings.min_loyalty_points_to_redeem));
                return;
              }
            }

            this.setLoyaltyPoints();
          }
        }, {
          key: "setLoyaltyPoints",
          value: function setLoyaltyPoints() {
            this.loyalty_applied = !this.loyalty_applied;
            this.message.toast('success', "Loyalty Points Discount ".concat(this.loyalty_applied ? this.translate.instant('Applied') : this.translate.instant('Removed'), " ").concat(this.translate.instant('Successully')));

            if (this.loyalty_applied) {
              this.applied_admount = this.loyalty_amount > this.priceObj.netTotal ? this.priceObj.netTotal : this.loyalty_amount;
            } else {
              this.applied_admount = 0;
            }

            this.loyaltylAmount.emit(this.applied_admount);
          }
        }, {
          key: "getCurrency",
          value: function getCurrency() {
            var _this48 = this;

            this.utilSubscription = this.util.getSelectedCurrency.subscribe(function (res) {
              if (res) {
                _this48.selected_currency = Object.assign({}, res);

                if (_this48.selected_currency.currency_name) {
                  _this48.currency = _this48.selected_currency.currency_name;
                }
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.utilSubscription) {
              this.utilSubscription.unsubscribe();
            }
          }
        }]);

        return LoyaltyDiscountComponent;
      }();

      LoyaltyDiscountComponent.ctorParameters = function () {
        return [{
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_3__["MessagingService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }, {
          type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
        }];
      };

      LoyaltyDiscountComponent.propDecorators = {
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }],
        loyalty_amount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }],
        priceObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }],
        loyalty_points: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }],
        loyaltylAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
        }]
      };
      LoyaltyDiscountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-loyalty-discount',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./loyalty-discount.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/loyalty-discount/loyalty-discount.component.html"))["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./loyalty-discount.component.scss */
        "./src/app/layout/pages/cart/components/loyalty-discount/loyalty-discount.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_3__["MessagingService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]])], LoyaltyDiscountComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/referral/referral.component.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/referral/referral.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesCartComponentsReferralReferralComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".referral-cart a {\n  float: right;\n  margin-right: 22px;\n  margin-top: 7px;\n  cursor: pointer;\n  position: relative;\n}\n\n.referral-cart .applied {\n  font-size: 20px;\n  color: #2da72d;\n  margin-right: 6px;\n  vertical-align: bottom;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvY29tcG9uZW50cy9yZWZlcnJhbC9yZWZlcnJhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7QUFBdEI7O0FBTkE7RUFVSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFBMUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcGFnZXMvY2FydC9jb21wb25lbnRzL3JlZmVycmFsL3JlZmVycmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZmVycmFsLWNhcnQge1xuICBhIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLmFwcGxpZWQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzJkYTcyZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/components/referral/referral.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/layout/pages/cart/components/referral/referral.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ReferralComponent */

    /***/
    function srcAppLayoutPagesCartComponentsReferralReferralComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReferralComponent", function () {
        return ReferralComponent;
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
      /*! ./../../../../../core/theme/styleVariables.model */
      "./src/app/core/theme/styleVariables.model.ts");
      /* harmony import */


      var _shared_models_appSettings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../shared/models/appSettings.model */
      "./src/app/shared/models/appSettings.model.ts");
      /* harmony import */


      var _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../services/http/http.service */
      "./src/app/services/http/http.service.ts");
      /* harmony import */


      var _core_apiUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../core/apiUrl */
      "./src/app/core/apiUrl.ts");
      /* harmony import */


      var _core_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../services/messaging/messaging.service */
      "./src/app/services/messaging/messaging.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var src_app_shared_models_apiKeys_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/models/apiKeys.model */
      "./src/app/shared/models/apiKeys.model.ts");
      /* harmony import */


      var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");

      var ReferralComponent = /*#__PURE__*/function () {
        function ReferralComponent(http, message, translate, util, ref) {
          var _this49 = this;

          _classCallCheck(this, ReferralComponent);

          this.http = http;
          this.message = message;
          this.translate = translate;
          this.util = util;
          this.ref = ref;
          this.referralAmount = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](null);
          this.currency = '';
          this.referral_applied = false;
          this.referral_amount = 0;
          this.selected_currency = new src_app_shared_models_apiKeys_model__WEBPACK_IMPORTED_MODULE_9__["Currency"]();
          this.currency = _core_global__WEBPACK_IMPORTED_MODULE_6__["GlobalVariable"].CURRENCY;
          this.ref.detach();
          setInterval(function () {
            _this49.ref.detectChanges();
          }, 2000);
        }

        _createClass(ReferralComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getReferralAmount();

            if (this.settings.is_multicurrency_enable) {
              this.getCurrency();
            }
          }
        }, {
          key: "getReferralAmount",
          value: function getReferralAmount() {
            var _this50 = this;

            this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_5__["ApiUrl"].getReferralAmount, {}).subscribe(function (response) {
              if (!!response && response.data) {
                _this50.referral_amount = response.data.referalAmount;

                if (_this50.settings.enable_referral_bal_limit) {
                  if (response.data.referalAmount > _this50.settings.referral_bal_limit_per_order) {
                    _this50.referral_amount = _this50.settings.referral_bal_limit_per_order;
                  }
                }
              }
            });
          }
        }, {
          key: "applyReferral",
          value: function applyReferral() {
            this.referral_applied = !this.referral_applied;
            this.message.toast('success', "".concat(this.translate.instant('Referral Amount'), " ").concat(this.referral_applied ? this.translate.instant('Applied') : this.translate.instant('Removed'), " ").concat(this.translate.instant('Successully')));
            this.referralAmount.emit(this.referral_applied ? this.referral_amount : 0);
          }
        }, {
          key: "getCurrency",
          value: function getCurrency() {
            var _this51 = this;

            this.utilSubscription = this.util.getSelectedCurrency.subscribe(function (res) {
              if (res) {
                _this51.selected_currency = Object.assign({}, res);

                if (_this51.selected_currency.currency_name) {
                  _this51.currency = _this51.selected_currency.currency_name;
                }
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.utilSubscription) {
              this.utilSubscription.unsubscribe();
            }
          }
        }]);

        return ReferralComponent;
      }();

      ReferralComponent.ctorParameters = function () {
        return [{
          type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
        }, {
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_7__["MessagingService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }, {
          type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      ReferralComponent.propDecorators = {
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        referralAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      ReferralComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-referral',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./referral.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/components/referral/referral.component.html"))["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./referral.component.scss */
        "./src/app/layout/pages/cart/components/referral/referral.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_7__["MessagingService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], ReferralComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/rental-booking/rental-booking.component.scss":
    /*!********************************************************************************!*\
      !*** ./src/app/layout/pages/cart/rental-booking/rental-booking.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesCartRentalBookingRentalBookingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".address p {\n  margin-left: 20px;\n}\n\n.address img {\n  width: 56px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL2NhcnQvcmVudGFsLWJvb2tpbmcvcmVudGFsLWJvb2tpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcGFnZXMvY2FydC9yZW50YWwtYm9va2luZy9yZW50YWwtYm9va2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRyZXNzIHAge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmFkZHJlc3MgaW1nIHtcbiAgd2lkdGg6IDU2cHggIWltcG9ydGFudDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/layout/pages/cart/rental-booking/rental-booking.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/layout/pages/cart/rental-booking/rental-booking.component.ts ***!
      \******************************************************************************/

    /*! exports provided: RentalBookingComponent */

    /***/
    function srcAppLayoutPagesCartRentalBookingRentalBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RentalBookingComponent", function () {
        return RentalBookingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../shared/pipes/localization.pipe */
      "./src/app/shared/pipes/localization.pipe.ts");
      /* harmony import */


      var _core_apiUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../core/apiUrl */
      "./src/app/core/apiUrl.ts");
      /* harmony import */


      var _shared_models_cart_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../shared/models/cart.model */
      "./src/app/shared/models/cart.model.ts");
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../../../services/cart/cart.service */
      "./src/app/services/cart/cart.service.ts");
      /* harmony import */


      var _core_global__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var RentalBookingComponent = /*#__PURE__*/function () {
        function RentalBookingComponent(http, util, user, cartService, message, router, translate, localization) {
          _classCallCheck(this, RentalBookingComponent);

          this.http = http;
          this.util = util;
          this.user = user;
          this.cartService = cartService;
          this.message = message;
          this.router = router;
          this.translate = translate;
          this.localization = localization;
          this.cart = [];
          this.full_cart = [];
          this.priceObj = {
            amount: 0,
            delivery_charges: 0,
            handingCharges: 0,
            subTotal: 0,
            netTotal: 0,
            handlingAdmin: 0,
            handlingSupplier: 0,
            discount: 0
          };
          this.cartModel = {};
          this.updateCartModel = {};
          this.selectedAreaIndex = 0;
          this.totalItems = 0;
          this.deliveryType = 0;
          this.timeInterval = 0;
          this.currency = '';
          this.orderId = '';
          this.paymentType = '0';
          this.promoCode = '';
          this.product_id = '';
          this.is_agent = false;
          this.loggedIn = false;
          this.is_service = false;
          this.cart_data = {};
          this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_8__["StyleVariables"]();
          this.currency = _core_global__WEBPACK_IMPORTED_MODULE_13__["GlobalVariable"].CURRENCY;
        }

        _createClass(RentalBookingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this52 = this;

            this.styleSubscriptuion = this.util.getStyles.subscribe(function (style) {
              _this52.style = style;
            });
            this.cartModel = new _shared_models_cart_model__WEBPACK_IMPORTED_MODULE_3__["CartModel"]();
            this.cartSubscription = this.util.getCart.subscribe(function (cart) {
              if (cart) {
                _this52.cart = cart;
                _this52.cart_data = cart[0];
                _this52.totalItems = _this52.util.getTotalCountCart();

                _this52.getTotal();
              }
            });
            this.userSubscription = this.user.currentUser.subscribe(function (user) {
              if (!!user && user['access_token']) {
                _this52.loggedIn = true;
              } else {
                _this52.loggedIn = false;
              }
            });
            this.makeSubscribe();
          }
        }, {
          key: "makeSubscribe",
          value: function makeSubscribe() {
            var _this53 = this;

            this.getDataSubscribe = this.util.callGetData.subscribe(function (data) {
              if (data) {
                _this53.settingSubscription = _this53.util.getSettings.subscribe(function (settings) {
                  _this53.settings = settings;
                  _this53.timeInterval = settings['interval'];
                });
              }
            });
          }
        }, {
          key: "getTotal",
          value: function getTotal() {
            if (this.cart && this.cart.length) {
              var maxAdminHandling = 0;
              var maxSupplierHandling = 0;
              this.priceObj.amount = 0;

              for (var i = 0; i < this.cart.length; i++) {
                this.priceObj.amount += this.cartService.calulateProductPrice(this.cart[i]);
                this.priceObj.delivery_charges = 0;

                if (this.priceObj.delivery_charges < this.cart[i].delivery_charges) {
                  this.priceObj.delivery_charges = this.cart[i].delivery_charges;
                }

                if (maxAdminHandling < this.cart[i].handling_admin) {
                  maxAdminHandling = this.cart[i].handling_admin;
                }

                if (maxSupplierHandling < this.cart[i].handling_supplier) {
                  maxSupplierHandling = this.cart[i].handling_supplier;
                }
              }

              this.priceObj.handlingAdmin = maxAdminHandling;
              this.priceObj.handlingSupplier = maxSupplierHandling;
              this.priceObj.handingCharges = maxAdminHandling + maxSupplierHandling;
            }

            this.priceObj.subTotal = this.priceObj.amount + this.priceObj.delivery_charges + this.priceObj.handingCharges;
            this.priceObj.netTotal = this.priceObj.subTotal - this.priceObj.discount;
          }
        }, {
          key: "placeOrder",
          value: function placeOrder() {
            this.cartModel = new _shared_models_cart_model__WEBPACK_IMPORTED_MODULE_3__["CartModel"]();
            this.updateCartModel = new _shared_models_cart_model__WEBPACK_IMPORTED_MODULE_3__["UpdateCartModel"]();

            if (this.loggedIn) {
              this.makeModelData();
            } else {
              this.message.alert('info', "".concat(this.translate.instant('Please Login First'), "!"));
            }
          }
        }, {
          key: "makeModelData",
          value: function makeModelData() {
            this.cartModel.accessToken = this.user.getUserToken;
            this.cartModel.latitude = this.util.handler.latitude;
            this.cartModel.longitude = this.util.handler.longitude;
            this.cartModel.supplierBranchId = this.cart[0].supplier_branch_id;
            this.cartModel.supplier_id = this.cart[0].supplier_id;
            this.cartModel.adds_on = [];

            for (var i = 0; i < this.cart.length; i++) {
              var model = new _shared_models_cart_model__WEBPACK_IMPORTED_MODULE_3__["CartProductModel"]();

              for (var data in model) {
                model[data] = this.cart[i][data];
              }

              model['category_id'] = this.cart[i].categoryId;
              model['agent_type'] = this.cart[i].agent_list && this.cart[i].is_agent ? 1 : 0;
              model.quantity = this.cart[i].selectedQuantity;
              this.cartModel.productList.push(model);
            } // update cart model data


            this.updateCartModel.accessToken = this.user.getUserToken;
            this.updateCartModel.currencyId = this.util.handler.currencyId;
            this.updateCartModel.languageId = this.util.handler.languageId;
            this.updateCartModel.handlingSupplier = '0';
            this.updateCartModel.handlingAdmin = '0';
            this.updateCartModel.netAmount = this.priceObj.amount + this.priceObj.handlingSupplier + this.priceObj.handlingAdmin;
            this.updateCartModel.urgentPrice = '0';
            this.updateCartModel.deliveryDate = moment__WEBPACK_IMPORTED_MODULE_11__(this.cart[0].booking_to_date).format('YYYY-MM-DD');
            this.updateCartModel.deliveryTime = moment__WEBPACK_IMPORTED_MODULE_11__(this.cart[0].booking_to_date).format('HH:mm');
            this.updateCartModel.day = moment__WEBPACK_IMPORTED_MODULE_11__(this.cart[0].booking_to_date).day();
            this.updateCartModel.deliveryCharges = this.priceObj.delivery_charges;
            this.updateCartModel.deliveryType = this.deliveryType.toString();
            this.updateCartModel.minOrderDeliveryCrossed = '0';
            this.updateCartModel.deliveryId = '0';
            this.addToCart();
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            var _this54 = this;

            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_2__["ApiUrl"].addToCart, this.cartModel, false).subscribe(function (response) {
              if (!!response && response.data) {
                _this54.updateCartModel.cartId = response.data.cartId;

                _this54.updateCart();
              }
            });
          }
        }, {
          key: "updateCart",
          value: function updateCart() {
            var _this55 = this;

            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_2__["ApiUrl"].updateCartInfo, this.updateCartModel, false).subscribe(function (response) {
              if (!!response && response.data) {
                _this55.generateOrder();
              }
            });
          }
        }, {
          key: "generateOrder",
          value: function generateOrder() {
            var _this56 = this;

            var offset = moment__WEBPACK_IMPORTED_MODULE_11__().format('Z');
            var obj = {
              cartId: this.updateCartModel.cartId,
              languageId: this.util.handler.languageId,
              isPackage: '0',
              paymentType: this.paymentType,
              accessToken: this.user.getUserToken,
              offset: offset,
              self_pickup: 0,
              type: this.settings.app_type
            };

            if (this.promoCode) {
              obj['promoCode'] = this.promoCode;
              obj['discountAmount'] = this.priceObj.discountAmount;
            }

            var date = moment__WEBPACK_IMPORTED_MODULE_11__();
            obj['date_time'] = date.format('YYYY-MM-DD HH:mm:ss');
            obj['duration'] = 0;
            obj['from_latitude'] = this.cart[0].from_latitude;
            obj['to_latitude'] = this.cart[0].to_latitude;
            obj['from_longitude'] = this.cart[0].from_longitude;
            obj['to_longitude'] = this.cart[0].to_longitude;
            obj['booking_from_date'] = this.cart[0].booking_from_date;
            obj['booking_to_date'] = this.cart[0].booking_to_date;
            obj['from_address'] = this.cart[0].from_address;
            obj['to_address'] = this.cart[0].to_address;
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_2__["ApiUrl"].generateRentalBooking, obj, false).subscribe(function (response) {
              if (!!response && response.data) {
                _this56.orderId = response.data;

                _this56.toOrderDetail();
              }
            });
          }
        }, {
          key: "toOrderDetail",
          value: function toOrderDetail() {
            var _this57 = this;

            this.router.navigate(['/orders/order-detail'], {
              queryParams: {
                orderId: this.orderId
              }
            });
            this.util.setCart([]);
            setTimeout(function () {
              _this57.message.alert('success', "".concat(_this57.localization.transform('order'), " ").concat(_this57.translate.instant('Placed Successfully'), "!"));
            }, 500);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (!!this.getDataSubscribe) this.getDataSubscribe.unsubscribe();
            if (!!this.settingSubscription) this.settingSubscription.unsubscribe();
            if (!!this.styleSubscriptuion) this.styleSubscriptuion.unsubscribe();
            if (!!this.cartSubscription) this.cartSubscription.unsubscribe();
            if (!!this.userSubscription) this.userSubscription.unsubscribe();
          }
        }]);

        return RentalBookingComponent;
      }();

      RentalBookingComponent.ctorParameters = function () {
        return [{
          type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]
        }, {
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
        }, {
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_12__["CartService"]
        }, {
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]
        }, {
          type: _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_1__["LocalizationPipe"]
        }];
      };

      RentalBookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'app-rental-booking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./rental-booking.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/cart/rental-booking/rental-booking.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./rental-booking.component.scss */
        "./src/app/layout/pages/cart/rental-booking/rental-booking.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"], _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_12__["CartService"], _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"], _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_1__["LocalizationPipe"]])], RentalBookingComponent);
      /***/
    },

    /***/
    "./src/app/shared/models/cart.model.ts":
    /*!*********************************************!*\
      !*** ./src/app/shared/models/cart.model.ts ***!
      \*********************************************/

    /*! exports provided: CartModel, CartProductModel, UpdateCartModel */

    /***/
    function srcAppSharedModelsCartModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartModel", function () {
        return CartModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartProductModel", function () {
        return CartProductModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateCartModel", function () {
        return UpdateCartModel;
      });

      var CartModel = function CartModel() {
        _classCallCheck(this, CartModel);

        this.deviceId = '0';
        this.productList = [];
        this.promoationType = '0';
        this.remarks = '0';
        this.supplierBranchId = '';
        this.supplier_id = '';
        this.cartId = '0';
        this.accessToken = '';
        this.latitude = 0;
        this.longitude = 0;
        this.questions = [];
        this.addOn = 0;
      };

      var CartProductModel = function CartProductModel(obj) {
        _classCallCheck(this, CartProductModel);

        this.handling_admin = '';
        this.handling_supplier = '';
        this.price_type = 0;
        this.supplier_branch_id = '';
        this.supplier_id = '';
        this.quantity = '';
        this.productId = '';
        this.category_id = 0;
        this.agent_type = 0;
        this.price = '';
        this.perProductLoyalityDiscount = 0;
        this.duration = 0;
        this.tax = 0;

        if (!obj) {
          return;
        }

        this.handling_admin = obj.handling_admin;
        this.handling_supplier = obj.handling_supplier;
        this.price_type = obj.price_type;
        this.supplier_branch_id = obj.supplier_branch_id;
        this.supplier_id = obj.supplier_id;
        this.quantity = obj.quantity;
        this.productId = (obj.productId || obj.product_id || obj.id).toString();
        this.category_id = obj.category_id;
        this.agent_type = obj.agent_type;
        this.price = obj.fixed_price;
        this.perProductLoyalityDiscount = obj.perProductLoyalityDiscount;
        this.duration = obj.duration;
      };

      var UpdateCartModel = // offset: string = '';
      function UpdateCartModel() {
        _classCallCheck(this, UpdateCartModel);

        this.currencyId = '';
        this.netAmount = '';
        this.deliveryId = '';
        this.languageId = '';
        this.minOrderDeliveryCrossed = '';
        this.handlingSupplier = '';
        this.handlingAdmin = '';
        this.delivery_max_time = '';
        this.deliveryDate = '';
        this.deliveryTime = '';
        this.day = '';
        this.deliveryCharges = '';
        this.urgentPrice = '0';
        this.deliveryType = 0;
        this.cartId = '';
        this.accessToken = '';
        this.questions = [];
        this.addOn = 0;
      };
      /***/

    },

    /***/
    "./src/app/shared/models/imageUpload.model.ts":
    /*!****************************************************!*\
      !*** ./src/app/shared/models/imageUpload.model.ts ***!
      \****************************************************/

    /*! exports provided: ImageUpload */

    /***/
    function srcAppSharedModelsImageUploadModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageUpload", function () {
        return ImageUpload;
      });

      var ImageUpload = function ImageUpload(images) {
        var _this58 = this;

        _classCallCheck(this, ImageUpload);

        images.map(function (image, index) {
          _this58["pres_image".concat(index + 1)] = image;
        });
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-cart-cart-module-es5.js.map