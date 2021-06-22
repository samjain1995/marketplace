(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/address/address.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/address/address.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"settings\" class=\"main-location\" [style.background-image]=\"'url(' + settings?.placeholder?.user_location?.web +')'\">\n  <div id=\"subscriptionpage\">\n    <div class=\"location-wrap\">\n      <h1 [style.color]=\"style.primaryColor\">{{'order' | localization}} {{'product' | localization}} Online</h1>\n      <p [style.color]=\"style.baseColor\">{{'order' | localization}} {{'product' | localization}} from favorite {{'suppliers' | localization}} near you.</p>\n      <form>\n        <div class=\"input-icons\">\n          <i class=\"fa fa-map-marker mr-1 icons\" aria-hidden=\"true\"></i>\n          <input type=\"text\" alt=\"\" name=\"place\" [(ngModel)]=\"place.formatted_address\" appGoogleplace\n            class=\"form-control search-location\" placeholder=\"Enter your Delivery Location\"\n            (onSelect)=\"setPlace($event)\">\n        </div>\n        <button type=\"button\" class=\"detect-btn\" (click)=\"detectLocation()\"><i class=\"fa fa-crosshairs\"\n            aria-hidden=\"true\"></i>\n          Detect</button>\n        <input [ngStyle]=\"{'background': style.primaryColor, 'border-color': style.primaryColor}\" type=\"submit\" alt=\"\" value=\"Find {{'product' | localization}}\" class=\"btn btn-primary\"\n          (click)=\"addressSearch()\">\n      </form>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/loader/loader.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/loader/loader.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"global_loader\" class=\"glb-ldr-prt\" *ngIf=\"show && !refresh\">\r\n    <div class=\"gl-ldr-ctr\">\r\n        <div class=\"gl-loader \" [ngStyle]=\"{'borderBottomColor': style.primaryColor, borderLeftColor: style.primaryColor}\"></div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"loading-screen-wrapper\" *ngIf=\"refresh && !show\">\r\n    <div class=\"loading-screen-icon\">\r\n        <img *ngIf=\"this.loader_image\" class=\"pulse uk-animation-fade\" [src]=\"loader_image\">\r\n        <!-- <div class=\"pulse-ring\" [ngStyle]=\"{'borderColor': style.primaryColor}\"></div> -->\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hyper-pay-webview/hyper-pay-webview.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hyper-pay-webview/hyper-pay-webview.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n    <ng-container>\n        <div class=\"dialog-model\">\n            <div class=\"dialog-content\">\n                <div class=\"container\">\n                    <div class=\"dialog-header\">\n                        <h5>Pay With Hyper Pay</h5>\n                    </div>\n                    <div class=\"stripe-form form-row\">\n\n                        <div class=\"col-md-12\" *ngIf=\"!is_continue\">\n                            <p class=\"check\">\n                                <input type=\"checkbox\" [(ngModel)]=\"is_mada_entity_id\">\n                                <span>Is Card Type Mada?</span>\n                            </p>\n                            <div class=\"ml-5\">\n                                <button class=\"btn float-right\" [ngStyle]=\" {'backgroundColor': style.primaryColor, 'borderColor' : style.primaryColor, 'color'\n                            : '#ffffff' }\" href=\"javascript:void(0)\" (click)=\"continue()\"\n                                    type=\"submit\">{{'Continue' | translate}}</button>\n                            </div>\n                        </div>\n\n                        <div id=\"card-element\">\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/leads/leads.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/leads/leads.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\" style=\"text-align: center;\">\n    <img appImage [url]=\"settings?.site_logo\" [size]=\"'400x200'\" [src]=\"settings?.site_logo\" [noCrop]=\"true\" alt=\"logo\" routerLink=\"/\"\n        [settings]=\"settings\" style=\"object-fit: contain; width: 200px; cursor: pointer;\">\n</div>\n\n<div class=\"container\">\n    <div class=\"leads\">\n        <iframe\n            src=\"https://docs.google.com/forms/d/e/1FAIpQLScvDmpj1m_AatTJedaLiCCm5RYtPHrf6QN-VnhsU74V46EseA/viewform?embedded=true\"\n            width=\"640\" height=\"1730\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading…</iframe>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"notfound\">\n  <div class=\"notfound\">\n    <div class=\"notfound-404\">\n      <img alt=\"logo\" *ngIf=\"site_logo\" class=\"logo-img\" (click)=\"toHome()\" [src]=\"site_logo\">\n    </div>\n\n    <h1>404</h1>\n    <h2>Oops! Page Not Found</h2>\n    <p>Sorry, but the page that you are looking for does not exist. Either it has been removed, or is temporarily unavailable. Please try again in sometime..</p>\n    <a href=\"javascript: void(0)\" (click)=\"toHome()\">Back To Home</a>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/pages/payment-checkout/payment-checkout.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/pages/payment-checkout/payment-checkout.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!isLoading\" id=\"resultpage\">\n    <!-- <img src=\"/assets/images/success.png\" alt=\"payment success\"> -->\n    <h2>Your {{'payment' | localization}} is in Process!</h2>\n    <p>Please do not refresh page until your payment completes!</p>\n    <!-- <p>Thank you very much for your {{'order' | localization}}!</p> -->\n    <!-- <button class=\"home-btn\" [disabled]=\"!orderId\" (click)=\"onViewOrder()\"><a style=\"color: #fff;\">View\n            {{'order' | localization}}</a></button> -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/pages/payment-failure/payment-failure.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/pages/payment-failure/payment-failure.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"resultpage\">\n    <img src=\"/assets/images/failure.png\" alt=\"payment failure\">\n    <h2>{{'payment' | localization}} Failure!</h2>\n    <p>{{'payment' | localization}} was declined by your bank or credit card provider</p>\n    <button class=\"home-btn\"><a style=\"color: #fff;\" [routerLink]=\"['/cart']\">{{'order' | localization}}\n            Again</a></button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/pages/payment-success/payment-success.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/pages/payment-success/payment-success.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!isLoading\" id=\"resultpage\">\n    <img src=\"/assets/images/success.png\" alt=\"payment success\">\n    <h2>Your {{'payment' | localization}} is Successful!</h2>\n    <p>Thank you very much for your {{'order' | localization}}!</p>\n    <button class=\"home-btn\" [disabled]=\"!orderId\" (click)=\"onViewOrder()\"><a style=\"color: #fff;\">View\n            {{'order' | localization}}</a></button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/smtp-validate/smtp-validate.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/smtp-validate/smtp-validate.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Validation page for SMTP.com");

/***/ }),

/***/ "./src/app/address/address.component.scss":
/*!************************************************!*\
  !*** ./src/app/address/address.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-location {\n  width: 100%;\n  padding-right: 215px;\n}\n\n.main-location {\n  background: url(/assets/images/bg-img1.jpg) 0 0 no-repeat;\n  background-size: 100%;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  display: table;\n  min-height: 100vh;\n}\n\n#subscriptionpage {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n  /*         background: rgba(0,0,0,0.6);*/\n}\n\n#subscriptionpage h1 {\n  color: #df284e;\n  font-size: 40px;\n  font-weight: bold;\n  line-height: 40px;\n  margin: 0px 0 20px;\n  text-align: center;\n  /* text-shadow: 0px 0px 2px #777; */\n  /* color: #fff; */\n  text-transform: uppercase;\n}\n\n#subscriptionpage p {\n  color: #000;\n  font-size: 18px;\n  line-height: 24px;\n  text-align: center;\n}\n\n#subscriptionpage h2 {\n  padding: 20px 0 20px;\n  opacity: 0.8;\n  color: #484848;\n  font-size: 24px;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 45px;\n  border-bottom: 1px solid #ccc;\n}\n\n.location-wrap {\n  display: inline-block;\n  width: 100%;\n  max-width: 800px;\n  background: rgba(255, 255, 225, 0.8);\n  border-radius: 20px;\n  padding: 100px 30px;\n  box-shadow: 0px 40px 50px rgba(0, 0, 0, 0.4);\n}\n\n#subscriptionpage form {\n  position: relative;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  border-radius: 20px;\n  margin: 32px 0 30px;\n}\n\n#subscriptionpage form input.form-control {\n  line-height: 40px;\n  border-radius: 20px;\n  height: 49px;\n  padding-left: 30px;\n}\n\n#subscriptionpage form button.detect-btn {\n  position: absolute;\n  right: 140px;\n  top: 13px;\n  border: none;\n  background: none;\n  outline: none;\n  opacity: 0.54;\n  margin-right: 25px;\n}\n\n#subscriptionpage form button.detect-btn:hover {\n  background-color: #71777d;\n  color: #ffffff;\n  border: 1px solid #71777d;\n  border-radius: 20px;\n}\n\n#subscriptionpage form input.btn.btn-primary {\n  line-height: 35px;\n  padding-left: 25px;\n  padding-right: 25px;\n  border-radius: 0px 20px 20px 0px;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n#subscriptionpage form input.btn.btn-primary:hover {\n  background: #333;\n  border-color: #333;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlEQUF5RDtFQUN6RCxxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUV0Qix3Q0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBdUI7RUFFdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQXlCO0FBRDNCOztBQUlBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBRHBCOztBQUlBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUQvQjs7QUFJQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDRDQUE0QztBQUQ5Qzs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQURyQjs7QUFJQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtBQURwQjs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYixrQkFBa0I7QUFEcEI7O0FBSUE7RUFDRSx5QkFBb0M7RUFDcEMsY0FBYztFQUNkLHlCQUFvQztFQUNwQyxtQkFBbUI7QUFEckI7O0FBTUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0FBSFI7O0FBTUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBSHBCIiwiZmlsZSI6InNyYy9hcHAvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1sb2NhdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAyMTVweDtcbn1cblxuLm1haW4tbG9jYXRpb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYmctaW1nMS5qcGcpIDAgMCBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbiNzdWJzY3JpcHRpb25wYWdlIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgLyogICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7Ki9cbn1cblxuI3N1YnNjcmlwdGlvbnBhZ2UgaDEge1xuICBjb2xvcjogcmdiKDIyMywgNDAsIDc4KTtcblxuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwcHggMCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCAjNzc3OyAqL1xuICAvKiBjb2xvcjogI2ZmZjsgKi9cbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI3N1YnNjcmlwdGlvbnBhZ2UgcCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNzdWJzY3JpcHRpb25wYWdlIGgyIHtcbiAgcGFkZGluZzogMjBweCAwIDIwcHg7XG4gIG9wYWNpdHk6IDAuODtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLmxvY2F0aW9uLXdyYXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyMjUsIDAuOCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDEwMHB4IDMwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA0MHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4jc3Vic2NyaXB0aW9ucGFnZSBmb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbjogMzJweCAwIDMwcHg7XG59XG5cbiNzdWJzY3JpcHRpb25wYWdlIGZvcm0gaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGhlaWdodDogNDlweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4jc3Vic2NyaXB0aW9ucGFnZSBmb3JtIGJ1dHRvbi5kZXRlY3QtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTQwcHg7XG4gIHRvcDogMTNweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBvcGFjaXR5OiAwLjU0O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbiNzdWJzY3JpcHRpb25wYWdlIGZvcm0gYnV0dG9uLmRldGVjdC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEzLCAxMTksIDEyNSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTEzLCAxMTksIDEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbn1cblxuXG4jc3Vic2NyaXB0aW9ucGFnZSBmb3JtIGlucHV0LmJ0bi5idG4tcHJpbWFyeSB7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbiNzdWJzY3JpcHRpb25wYWdlIGZvcm0gaW5wdXQuYnRuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgYm9yZGVyLWNvbG9yOiAjMzMzO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/address/address.component.ts":
/*!**********************************************!*\
  !*** ./src/app/address/address.component.ts ***!
  \**********************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_location_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/location/location.service */ "./src/app/services/location/location.service.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/messaging/messaging.service */ "./src/app/services/messaging/messaging.service.ts");
/* harmony import */ var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loader/loader.service */ "./src/app/services/loader/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/theme/styleVariables.model */ "./src/app/core/theme/styleVariables.model.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










let AddressComponent = class AddressComponent {
    constructor(ngZone, location, util, message, loader, router, translate, platformId) {
        this.ngZone = ngZone;
        this.location = location;
        this.util = util;
        this.message = message;
        this.loader = loader;
        this.router = router;
        this.translate = translate;
        this.platformId = platformId;
        this.place = {
            lat: 0,
            lng: 0,
            formatted_address: ''
        };
        this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_8__["StyleVariables"]();
    }
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            document.getElementById("splash_screen").style.display = "none";
        }
        this.settingSubscription = this.util.getSettings.subscribe((settings) => {
            if (settings) {
                this.settings = settings;
                if (this.settings.header_theme == 2) {
                    this.detectLocation();
                }
            }
        });
        this.styleSubscription = this.util.getStyles.subscribe((style) => {
            this.style = style;
        });
        this.locationSubscription = this.util.getUserLocation.subscribe((location) => {
            if (location)
                this.place = {
                    lat: location['lat'],
                    lng: location['lng'],
                    formatted_address: location['address']
                };
        });
        this.loader.initialLoadingComplete.next(true);
    }
    setPlace(data) {
        this.place = data;
        this.place = {
            lat: data['lat'],
            lng: data['lng'],
            formatted_address: data['formatted_address']
        };
    }
    addressSearch() {
        if (!this.place || !this.place.lat || !this.place.lng) {
            this.message.alert('info', this.translate.instant('Please Enter Address'));
            return;
        }
        this.location.getGeoLocation(this.place.lat, this.place.lng).subscribe((address) => {
            this.ngZone.run(() => {
                this.util.setUserLocation(address);
                this.router.navigate(['/']);
            });
        }, (err) => {
            this.message.alert('error', err.message);
        });
    }
    detectLocation() {
        this.location.openTracker().subscribe((address) => {
            this.ngZone.run(() => {
                this.util.setUserLocation(address);
                this.router.navigate(['/']);
            });
        }, (err) => {
            this.message.alert('error', err.message);
        });
    }
    ngOnDestroy() {
        this.locationSubscription.unsubscribe();
    }
};
AddressComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _services_location_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] },
    { type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"] },
    { type: _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] }
];
AddressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-address',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./address.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/address/address.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./address.component.scss */ "./src/app/address/address.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _services_location_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"],
        _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"],
        _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], Object])
], AddressComponent);



/***/ }),

/***/ "./src/app/app.browser.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.browser.module.ts ***!
  \***************************************/
/*! exports provided: HttpLoaderFactory, AppBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function() { return AppBrowserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");






// import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '../environments/environment';


function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http);
}
let AppBrowserModule = class AppBrowserModule {
};
AppBrowserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [
            _app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserTransferStateModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                loader: { provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"], useFactory: HttpLoaderFactory, deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]] }
            }),
        ]
    })
], AppBrowserModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/loader/loader.service */ "./src/app/services/loader/loader.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_window_window_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/window/window.service */ "./src/app/services/window/window.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





let AppComponent = class AppComponent {
    constructor(loaderService, window, platformId) {
        this.loaderService = loaderService;
        this.window = window;
        this.platformId = platformId;
        this.load = false;
        this.loaderService.pageRefresh.next(true);
    }
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.setFavicon();
            document.getElementById("splash_screen").style.display = "none";
        }
    }
    setFavicon() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(this.platformId))
            return;
        const icon = this.window.localStorage.getItem('favicon');
        if (icon) {
            let link = this.window.document.getElementById('favicon');
            link.setAttribute('href', icon);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_services_window_window_service__WEBPACK_IMPORTED_MODULE_3__["WINDOW"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"],
        Window, String])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initializeApp, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return initializeApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_app_load_app_load_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/app-load/app-load.service */ "./src/app/services/app-load/app-load.service.ts");
/* harmony import */ var _core_interceptors_timeout_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/interceptors/timeout.interceptor */ "./src/app/core/interceptors/timeout.interceptor.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/__ivy_ngcc__/fesm2015/ng-toolkit-universal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nguniversal/common */ "./node_modules/@nguniversal/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
/* harmony import */ var _sh_mayank_cart_init__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @sh_mayank/cart-init */ "./node_modules/@sh_mayank/cart-init/__ivy_ngcc__/fesm2015/sh_mayank-cart-init.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_loader_loader_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/loader/loader.component */ "./src/app/core/loader/loader.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./address/address.component */ "./src/app/address/address.component.ts");
/* harmony import */ var _payment_pages_payment_failure_payment_failure_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./payment/pages/payment-failure/payment-failure.component */ "./src/app/payment/pages/payment-failure/payment-failure.component.ts");
/* harmony import */ var _payment_pages_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./payment/pages/payment-success/payment-success.component */ "./src/app/payment/pages/payment-success/payment-success.component.ts");
/* harmony import */ var _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/interceptors/error.interceptor */ "./src/app/core/interceptors/error.interceptor.ts");
/* harmony import */ var _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/interceptors/jwt.interceptor */ "./src/app/core/interceptors/jwt.interceptor.ts");
/* harmony import */ var _services_window_window_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/window/window.service */ "./src/app/services/window/window.service.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/terms/terms.component.ts");
/* harmony import */ var _hyper_pay_webview_hyper_pay_webview_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./hyper-pay-webview/hyper-pay-webview.component */ "./src/app/hyper-pay-webview/hyper-pay-webview.component.ts");
/* harmony import */ var _leads_leads_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./leads/leads.component */ "./src/app/leads/leads.component.ts");
/* harmony import */ var _smtp_validate_smtp_validate_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./smtp-validate/smtp-validate.component */ "./src/app/smtp-validate/smtp-validate.component.ts");
/* harmony import */ var _payment_pages_payment_checkout_payment_checkout_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./payment/pages/payment-checkout/payment-checkout.component */ "./src/app/payment/pages/payment-checkout/payment-checkout.component.ts");




/********** Imports **********/












/********** Declarations **********/






/********** Providers **********/








function initializeApp(appInitService) {
    return () => {
        return appInitService.init().then((val) => {
            console.log('welcome');
        }, (err) => {
            console.error(err);
        });
    };
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
            _core_loader_loader_component__WEBPACK_IMPORTED_MODULE_18__["LoaderComponent"],
            _terms_terms_component__WEBPACK_IMPORTED_MODULE_25__["TermsComponent"],
            _address_address_component__WEBPACK_IMPORTED_MODULE_19__["AddressComponent"],
            _payment_pages_payment_failure_payment_failure_component__WEBPACK_IMPORTED_MODULE_20__["PaymentFailureComponent"],
            _payment_pages_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_21__["PaymentSuccessComponent"],
            _hyper_pay_webview_hyper_pay_webview_component__WEBPACK_IMPORTED_MODULE_26__["HyperPayGatewayWebViewComponent"],
            _leads_leads_component__WEBPACK_IMPORTED_MODULE_27__["LeadsComponent"],
            _smtp_validate_smtp_validate_component__WEBPACK_IMPORTED_MODULE_28__["SmtpValidateComponent"],
            _payment_pages_payment_checkout_payment_checkout_component__WEBPACK_IMPORTED_MODULE_29__["PaymentCheckoutComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"].withServerTransition({ appId: 'saas-website' }),
            _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__["NgtUniversalModule"],
            _nguniversal_common__WEBPACK_IMPORTED_MODULE_7__["TransferHttpCacheModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_14__["DeviceDetectorModule"],
            _sh_mayank_cart_init__WEBPACK_IMPORTED_MODULE_15__["CartInitModule"].forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]),
            _app_routing__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        ],
        providers: [
            // {
            //   provide: HTTP_INTERCEPTORS,
            //   useClass: TransferStateInterceptor,
            //   multi: true
            // },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__["APP_INITIALIZER"],
                useFactory: initializeApp,
                deps: [_services_app_load_app_load_service__WEBPACK_IMPORTED_MODULE_1__["AppLoadService"]],
                multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                useClass: _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_22__["ErrorInterceptor"],
                multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                useClass: _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_23__["JwtInterceptor"],
                multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                useClass: _core_interceptors_timeout_interceptor__WEBPACK_IMPORTED_MODULE_2__["TimeoutInterceptor"],
                multi: true
            },
            {
                provide: _core_interceptors_timeout_interceptor__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TIMEOUT"],
                useValue: 20000
            },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModuleFactoryLoader"],
                useClass: _angular_core__WEBPACK_IMPORTED_MODULE_8__["SystemJsNgModuleLoader"]
            },
            _services_window_window_service__WEBPACK_IMPORTED_MODULE_24__["WINDOW_PROVIDERS"]
        ],
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _smtp_validate_smtp_validate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smtp-validate/smtp-validate.component */ "./src/app/smtp-validate/smtp-validate.component.ts");
/* harmony import */ var _leads_leads_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leads/leads.component */ "./src/app/leads/leads.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_selective_preloading_selective_preloading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/selective-preloading/selective-preloading.service */ "./src/app/services/selective-preloading/selective-preloading.service.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./address/address.component */ "./src/app/address/address.component.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/terms/terms.component.ts");
/* harmony import */ var _services_terms_and_policy_terms_and_policy_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/terms-and-policy/terms-and-policy.service */ "./src/app/services/terms-and-policy/terms-and-policy.service.ts");
/* harmony import */ var _core_guards_app_setting_guard_app_setting_guard_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/guards/app-setting-guard/app-setting-guard.guard */ "./src/app/core/guards/app-setting-guard/app-setting-guard.guard.ts");
/* harmony import */ var _payment_pages_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./payment/pages/payment-success/payment-success.component */ "./src/app/payment/pages/payment-success/payment-success.component.ts");
/* harmony import */ var _payment_pages_payment_failure_payment_failure_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./payment/pages/payment-failure/payment-failure.component */ "./src/app/payment/pages/payment-failure/payment-failure.component.ts");
/* harmony import */ var _hyper_pay_webview_hyper_pay_webview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hyper-pay-webview/hyper-pay-webview.component */ "./src/app/hyper-pay-webview/hyper-pay-webview.component.ts");
/* harmony import */ var _payment_pages_payment_checkout_payment_checkout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./payment/pages/payment-checkout/payment-checkout.component */ "./src/app/payment/pages/payment-checkout/payment-checkout.component.ts");
















const routes = [
    {
        path: 'error', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
    },
    {
        path: '', loadChildren: () => __webpack_require__.e(/*! import() | layout-layout-module */ "layout-layout-module").then(__webpack_require__.bind(null, /*! ./layout/layout.module */ "./src/app/layout/layout.module.ts")).then(m => m.LayoutModule), data: { preload: true, delay: false }
    },
    {
        path: 'terms', component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_9__["TermsComponent"],
        resolve: { termsAndPolicy: _services_terms_and_policy_terms_and_policy_service__WEBPACK_IMPORTED_MODULE_10__["TermsAndPolicyService"] },
        data: {
            type: 1,
            title: 'Terms And Condition'
        }
    },
    {
        path: 'policy', component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_9__["TermsComponent"],
        resolve: { termsAndPolicy: _services_terms_and_policy_terms_and_policy_service__WEBPACK_IMPORTED_MODULE_10__["TermsAndPolicyService"] },
        data: {
            type: 2,
            title: 'Policy'
        }
    },
    {
        path: 'about-us', component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_9__["TermsComponent"],
        resolve: { termsAndPolicy: _services_terms_and_policy_terms_and_policy_service__WEBPACK_IMPORTED_MODULE_10__["TermsAndPolicyService"] },
        data: {
            type: 3,
            title: 'About Us'
        }
    },
    {
        path: 'faqs', component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_9__["TermsComponent"],
        resolve: { termsAndPolicy: _services_terms_and_policy_terms_and_policy_service__WEBPACK_IMPORTED_MODULE_10__["TermsAndPolicyService"] },
        data: {
            type: 4,
            title: 'faqs'
        }
    },
    {
        path: 'address', component: _address_address_component__WEBPACK_IMPORTED_MODULE_8__["AddressComponent"], data: {
            title: 'Address',
            description: "User Current Address",
            keyword: 'food'
        }
    },
    {
        path: 'cleaning-services-in-hyderabad', component: _leads_leads_component__WEBPACK_IMPORTED_MODULE_2__["LeadsComponent"], data: {
            title: 'Leads',
            description: "Leads",
            keyword: 'Leads'
        }
    },
    {
        path: 'success',
        canActivate: [_core_guards_app_setting_guard_app_setting_guard_guard__WEBPACK_IMPORTED_MODULE_11__["AppSettingGuard"]],
        component: _payment_pages_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_12__["PaymentSuccessComponent"],
        data: {
            title: 'Payment Success',
            description: "Order Payment Success",
            keyword: 'Payment'
        }
    },
    {
        path: 'failure',
        canActivate: [_core_guards_app_setting_guard_app_setting_guard_guard__WEBPACK_IMPORTED_MODULE_11__["AppSettingGuard"]],
        component: _payment_pages_payment_failure_payment_failure_component__WEBPACK_IMPORTED_MODULE_13__["PaymentFailureComponent"],
        data: {
            title: 'Payment Failure',
            description: "Order Payment Failure",
            keyword: 'Payment'
        }
    },
    {
        path: 'checkout',
        canActivate: [_core_guards_app_setting_guard_app_setting_guard_guard__WEBPACK_IMPORTED_MODULE_11__["AppSettingGuard"]],
        component: _payment_pages_payment_checkout_payment_checkout_component__WEBPACK_IMPORTED_MODULE_15__["PaymentCheckoutComponent"],
        data: {
            title: 'Payment Checkout',
            description: "Order Payment",
            keyword: 'Payment'
        }
    },
    {
        path: 'hyper-pay-webview',
        canActivate: [_core_guards_app_setting_guard_app_setting_guard_guard__WEBPACK_IMPORTED_MODULE_11__["AppSettingGuard"]],
        component: _hyper_pay_webview_hyper_pay_webview_component__WEBPACK_IMPORTED_MODULE_14__["HyperPayGatewayWebViewComponent"],
        data: {
            title: 'Hyper Pay',
            description: "Order Payment",
            keyword: 'Payment'
        }
    },
    {
        path: 'validation', component: _smtp_validate_smtp_validate_component__WEBPACK_IMPORTED_MODULE_1__["SmtpValidateComponent"]
    },
    {
        path: '404', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
    },
    {
        path: '**', redirectTo: '/404'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes, { initialNavigation: 'enabled', preloadingStrategy: _services_selective_preloading_selective_preloading_service__WEBPACK_IMPORTED_MODULE_7__["SelectivePreloadingService"], enableTracing: false }),
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
        providers: [
            _services_terms_and_policy_terms_and_policy_service__WEBPACK_IMPORTED_MODULE_10__["TermsAndPolicyService"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/core/apiUrl.ts":
/*!********************************!*\
  !*** ./src/app/core/apiUrl.ts ***!
  \********************************/
/*! exports provided: ApiUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrl", function() { return ApiUrl; });
const ApiUrl = {
    getDbKey: '/secret_key',
    getSettings: '/getSettings',
    getSpecialOffers: '/get_all_offer_list',
    getSpecialOffersV1: '/get_all_offer_list/v1',
    getSpecialOffersV2: '/get_all_offer_list/v2',
    getAllCategories: '/get_all_category_new',
    getAllCategoriesV1: '/get_all_category_new/V1',
    getSubcategory: '/Subcategory_listing',
    getRecSubcategory: '/home/subcategory_listing_v1',
    getProductDetail: '/get_product_details',
    getProductAddon: '/product/adds_on/list',
    getProducts: '/get_products',
    getCoutries: '/get_all_country',
    getCities: '/get_all_city',
    getAreas: '/get_all_area',
    productSearchResults: '/product_acco_to_area',
    filterProducts: '/v1/product_filteration',
    addToCart: '/v1/add_to_cart',
    updateCartInfo: '/update_cart_info',
    generateOrder: '/v2/genrate_order',
    generateRentalBooking: '/v2/genrate_order',
    getVariantList: '/common/variant_list',
    getCategories: '/category_list',
    getAllOffers: '/view_all_offer',
    getAllPromotions: '/get_promoation_product',
    getSupplierDetail: '/supplier_details',
    getSupplierList: '/get_supplier_list',
    getSupplierListV1: '/get_supplier_list/V1',
    rateProduct: '/rate_product',
    getReviews: '/product_rating_review',
    rateSupplier: '/supplier_rating',
    checkPromo: '/checkPromoV1',
    getSupplierDetailProduct: '/supplier/product_list',
    getSupplierDetailProductV1: '/v1/supplier/product_list',
    getSupplierCategoryList: '/user/list_supplier_categories',
    getSupplierBranchProduct: '/supplier_branch/product_list',
    getHomeSuppliers: '/home/supplier_list',
    getHomeSuppliersV1: '/home/supplier_list/V1',
    getHomeSuppliersV2: '/home/supplier_list/V2',
    getHomeSuppliersV3: '/home/supplier_list/V3',
    addToWishlist: '/product_mark_fav_unfav',
    getWishList: '/favourite_product',
    checkProductList: '/v1/check_product_list',
    getPopularProduct: '/popular/product',
    getPopularProductV1: '/popular/product/V1',
    getTermsConditions: '/list_termsConditions',
    getQuestions: '/getQuestionsByCategoryId',
    getPayStackAccessCode: '/paystack/access_code',
    getChat: '/getChat',
    getMyReferral: '/user/myReferral',
    paypalCreateOrder: '/paypal/create-order',
    getBraintreeClientToken: '/braintree/client-token',
    getReferralAmount: '/user/referralAmount',
    uploadPaymentReceipt: '/user/order/addReceipt',
    sendEmail: '/common/send_email',
    tagSearch: '/search/tags',
    productSupplierList: '/product/supplier_list',
    supplierPrescriptionUpload: '/user/order/request',
    addCard: '/customer/add_card',
    getCards: '/customer/get_cards',
    deleteCard: '/customer/delete_card',
    getCaptureContext: '/customer/get_context',
    getNotification: '/get_all_notification',
    rateAgent: '/user_rate_order',
    getSadadPaymentUrl: '/user/Sadded/getPaymentUrl',
    getMyFatoorahPaymentUrl: '/get_myfatoorah_payment_url',
    getTapPaymentUrl: '/user/tap/getPaymentUrl',
    getTelrPaymentUrl: '/user/telr/getPaymentUrl',
    getConvergePaymentToken: '/get_converge_payment_token',
    getSupplierBranches: '/get_supplier_branch_list',
    getSupplierBranchesV1: '/get_supplier_branch_list/V1',
    getWindcavePaymentUrl: '/user/windcave/getUrl',
    getmPaisaPaymentUrl: '/user/mPaisa/getUrl',
    checkPayherePaymentStatus: '/check_payhere_payment_status',
    addWalletMoney: '/user/wallet/add_money',
    getUserWalletTransactions: '/user/wallet/transactions',
    shareWalletMoney: '/user/wallet/share',
    getSupplierSlots: '/user/list_supplier_slots',
    getSupplierSlotsV1: '/user/list_supplier_slots/v1',
    getSupplierAvailabilities: '/user/supplier_availabilities',
    getDialogFlowToken: '/common/dialog/token',
    documntUpload: '/user/upload/document',
    submitFeedback: '/add_feedback',
    getSuggestions: '/get_user_suggestions',
    getMessageId: '/getChatMessageId',
    updateRecentlyViewed: '/view/product',
    recentlyViewed: '/user/recent/view',
    registerSupplier: '/common/supplier_register',
    registerAgent: '/agent/registeration',
    getGoogleDistance: '/user/google/matrix',
    getGoogleDistanceV1: '/user/google/matrix/V1',
    getCountriesCodes: '/admin/list_country_codes',
    giftCard: {
        list: '/home/gift/list',
        purchase: '/user/gift/purchase',
        purchaseList: '/user/gift/purchaseList'
    },
    agent: {
        getAgents: '/sevice/agent/list',
        getAgentKeys: '/agent/get_agent_keys',
        availability: '/agent/availability',
        getSlots: '/agent/slots',
        getAllSlots: '/agent/available/slots',
        checkAgentSlot: '/agent/checkAgentSlotsAvailability'
    },
    address: {
        addAddress: '/add_new_address',
        editAddress: '/edit_address',
        deleteAddress: '/delete_customer_address',
        getAreaByPincode: '/get_area',
        getAddress: '/get_all_customer_address',
        setDefault: '/address/set_default'
    },
    favourite: {
        getFavourites: '/get_my_favourite',
        addToFavourites: '/add_to_favourite',
        removeFromFavourites: '/un_favourite'
    },
    orders: {
        getOrderDetail: '/v2/user_order_details',
        getOrderHistory: '/v2/history_order',
        getUpcomingOrders: '/v2/upcoming_order',
        getScheduledOrders: '/schedule_orders',
        cancelOrder: '/cancel_order',
        scheduleOrder: '/schedule_order_new',
        requestReturn: '/user/order/return_request',
        requestList: '/user/order/requestList',
        rejectOrderRequest: '/user/order/request_reject',
        orderPayment: '/user/order/make_payment',
        payRmainingAmount: '/user/order/remaining_payment',
        geofenceAreas: '/common/geofencing_gateways',
        addItems: '/user/order/add_items',
        changeOrderStatus: '/user/change_order_status',
        trackDHL: '/user/dhl/shipment/track'
    },
    auth: {
        login: '/login',
        signUp_step1: '/customer_register_step_first',
        signUp_step2: '/customer_register_step_second',
        signUp_step3: '/customer_register_step_third',
        checkOTP: '/check_otp',
        checkOTPNew: '/check_otp_new',
        resendOTP: '/resend_otp',
        forgotPassword: '/forget_password',
        facebookLogin: '/facebook_login',
        googleLogin: '/google_login',
        changePassword: '/change_password',
        signUp: '/v1/user/registration',
        whatsappSendOtp: '/user/register/byPhone',
        whatsappResendOtp: '/user/resend/otp',
        whatsappOtpVerify: '/user/otp/verify',
    },
    loyalty: {
        get: '/user/loyality'
    },
    getSubscriptions: '/get_user_subscriptions_list',
    buySubscription: '/buy_user_subscription',
    cancelSubscription: '/cancel_delete_user_subscription',
    getMySubscriptionList: '/get_my_subscriptions_list',
    getTableBookingRequestList: `/user/list_booking_requests`,
    makeTableBookingRequest: `/user/make_table_booking_requests`,
    getSupplierTableList: `/user/list_supplier_tables`,
    verifyTable: `/user/verify_table_number`,
    generateDeepLink: '/user/genrate_table_deeplink',
    getAamarPayPaymentUrl: '/user/aamarpay/getPaymentUrl',
    getPromoCodeList: '/user/promo_codes',
    saferpay_payment: '/user/order/make_safer_payment',
    paynow_payment: '/user/order/make_paynow_payment',
    check_paynow_payment: '/user/order/check_paynow_payment',
    socialEcommerce: {
        createPost: '/user/create_post',
        getPosts: '/user/get_posts',
        deletePost: '/user/post/delete',
        addComment: '/user/add_comment',
        addLike: '/user/add_like',
        getPostComments: '/user/get_post_comments',
        updatePost: '/user/update_post',
        getPostLikes: '/user/get_post_likes_users_list',
        updateComment: '/user/update_comment',
        deleteComment: '/user/delete_comment',
        removeLike: '/user/remove_like',
        getUserPostDetails: '/user/post_details',
        reportPost: '/user/post_report',
        blockUnblockUser: '/user/block_unblock_user'
    },
    sosAlertNotification: '/user/sos_alert_notification',
    getHyperPaymentUrl: '/user/hyperpay/getPaymentUrlId',
    getThawaniPaymentUrl: '/user/thawani/getPaymentUrl',
    getSupplierListByTagId: '/user/getSupplierListByTagId',
    getSupplierListByTagIdV1: '/user/getSupplierListByTagId/V1',
    zoom_auth: '/zoom_auth',
    zoom_create_meeting: '/zoom_create_meeting',
    getSupplierTags: '/admin/list_tags_for_supplier',
    getFastestDeliverySuppliers: '/home/fastest_delivery_suppliers',
    otpContactUs: '/user/contact_us',
    getPaymayaUrl: '/user/get_paymaya_url',
    getCatWiseVendors: '/user/category_wise_suppliers',
    getUserTableSittingCapacity: '/user/list_tables_seating_capacities',
    holdSupplierSlot: '/user/hold_supplier_slots',
    getSupplierZones: '/user/get_zone'
};


/***/ }),

/***/ "./src/app/core/global.ts":
/*!********************************!*\
  !*** ./src/app/core/global.ts ***!
  \********************************/
/*! exports provided: GlobalVariable, TableBookingStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalVariable", function() { return GlobalVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBookingStatus", function() { return TableBookingStatus; });
const GlobalVariable = {
    SITE_NAME: " ",
    CURRENCY: '$',
    CURRENCY_NAME: 'USD',
    device_token: 'web_brower_token',
    device_type: 2,
    COUNTRY: '',
    PHONE_NUMBER: '',
    COUNTRY_CODE: '',
    EMAIL: '',
    UNIQUE_ID: '',
    IS_MOBILE: false,
    AGENT_DB_KEY: '',
    WHATSAPP_NUMBER: '',
    WHATSAPP_NUMBER_CODE: '',
    // PATTERNS: {
    // email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    // colors: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    // },
    SECRET_DB_KEY: '',
    facebook_appId: '',
    google_clientId: '',
    imageType: ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'],
    BLOCK_HEADERS: ['https://apitest.cybersource.com/flex/v1/tokens', 'https://api.cybersource.com/flex/v1/tokens', 'https://testsecureacceptance.cybersource.com/pay', 'https://codebrew.royoapps.com/v1/common/client/user/track/info', 'https://jsonip.com', 'https://payments-dev.urway-tech.com', 'https://test.saferpay.com/api'],
    BLOCK_ERRORS: ['https://codebrew.royoapps.com/v1/common/client/user/track/info', 'https://jsonip.com', 'https://payments-dev.urway-tech.com', 'https://test.saferpay.com/api'],
    flowData: [],
    admin_domain: '',
    supplier_domain: '',
    DIALOGFLOW_PROJECT_ID: '',
    decimal_quantity_step: 0.15,
    INSTANCE_OPTIONS: {
        default: { user: 'https://api.royoapps.com', agent: 'https://onboarding-agent.royoapps.com' },
        monu: { user: 'https://monu-api.royodev.tk', agent: 'https://monu-agent.royodev.tk' },
        ishan: { user: 'https://ishan-api.royodev.tk', agent: 'https://onboarding-agent.royoapps.com', },
        gagan: { user: 'https://gagan-api.royodev.tk', agent: 'https://gagan-agent.royodev.tk' },
        sk: { user: 'https://sk-backend.netsolutionindia.com', agent: 'https://sk-backend.netsolutionindia.com' }
    },
    FIREBASE_CONFIG: {
        apiKey: "AIzaSyBDRuECPQxMDSNk10A_wQpXnsEFKHJouaM",
        authDomain: "royo-977f3.firebaseapp.com",
        databaseURL: "https://royo-977f3.firebaseio.com",
        projectId: "royo-977f3",
        storageBucket: "royo-977f3.appspot.com",
        messagingSenderId: "907248328957",
        appId: "1:907248328957:web:2c6ded397ad18a871e1e94",
        measurementId: "G-C5MEVC617D"
    }
};
const TableBookingStatus = {
    '': '',
    0: 'Pending',
    1: 'Confirm',
    2: 'Rejected',
    3: 'Completed'
};


/***/ }),

/***/ "./src/app/core/guards/app-setting-guard/app-setting-guard.guard.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/guards/app-setting-guard/app-setting-guard.guard.ts ***!
  \**************************************************************************/
/*! exports provided: AppSettingGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingGuard", function() { return AppSettingGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_app_load_app_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app-load/app-load.service */ "./src/app/services/app-load/app-load.service.ts");




let AppSettingGuard = class AppSettingGuard {
    constructor(settingService, router) {
        this.settingService = settingService;
        this.router = router;
    }
    canActivate() {
        return this.settingService.init().then(() => {
            return true;
        }).catch((err) => {
            this.router.navigate(['/error']);
            return false;
        });
    }
    canLoad() {
        return this.settingService.init().then(() => {
            return true;
        }).catch((err) => {
            this.router.navigate(['/error']);
            return false;
        });
    }
};
AppSettingGuard.ctorParameters = () => [
    { type: _services_app_load_app_load_service__WEBPACK_IMPORTED_MODULE_3__["AppLoadService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppSettingGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_app_load_app_load_service__WEBPACK_IMPORTED_MODULE_3__["AppLoadService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppSettingGuard);



/***/ }),

/***/ "./src/app/core/interceptors/error.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error.interceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/messaging/messaging.service */ "./src/app/services/messaging/messaging.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global */ "./src/app/core/global.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let ErrorInterceptor = class ErrorInterceptor {
    constructor(translate, message, userService) {
        this.translate = translate;
        this.message = message;
        this.userService = userService;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(event => {
            if (_global__WEBPACK_IMPORTED_MODULE_6__["GlobalVariable"].BLOCK_ERRORS.includes(request.url))
                return;
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                switch (event.body.status) {
                    case 401:
                        /********** Auto logout if 401 response returned from api **********/
                        this.userService.userSignOut();
                        this.userService.setUserLocalData({});
                        this.message.alert('error', 'OOPS!', `${this.translate.instant('Sorry, your account has been logged in other device! Please login again to continue.')}`);
                        break;
                    case 0:
                        /********** If server dosent respond **********/
                        // this.message.alert('error', 'OOPS!', `${this.translate.instant('HTTP Error Response.')}`);
                        this.message.toast('error', 'Something Has Gone Wrong, Please Check Back In A While');
                        break;
                    case 400:
                    case 500:
                    case 8:
                    case 404:
                        /********** Check for other serve-side errors **********/
                        this.message.toast('error', `${this.translate.instant(event.body.message)}`);
                        break;
                }
            }
        }, error => {
            if (_global__WEBPACK_IMPORTED_MODULE_6__["GlobalVariable"].BLOCK_ERRORS.includes(request.url))
                return;
            switch (error.status) {
                case 401:
                    if (!_global__WEBPACK_IMPORTED_MODULE_6__["GlobalVariable"].BLOCK_HEADERS.includes(request['url'])) {
                        this.userService.userSignOut();
                        this.userService.setUserLocalData({});
                        /********** Auto logout if 401 response returned from api **********/
                        this.message.alert('error', 'OOPS!', `${this.translate.instant('Sorry, your account has been logged in other device! Please login again to continue.')}`);
                    }
                    break;
                case 503:
                    /********** service unavailable **********/
                    // this.message.alert('error', 'OOPS!', `${this.translate.instant('Service Unavailable, Server Error.')}`);
                    this.message.toast('error', `${this.translate.instant('The server is experiencing an outage, Please Try Again')}`);
                    break;
                case 0:
                    /********** If server dosent respond **********/
                    // this.message.alert('error', 'OOPS!', `${this.translate.instant('HTTP Error Response.')}`);
                    this.message.toast('error', 'Something Has Gone Wrong, Please Check Back In A While');
                    break;
                default:
                    /********** Check for other serve-side errors **********/
                    if (!!error.error) {
                        this.message.toast('error', error.error.message);
                    }
                    break;
            }
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_1__["MessagingService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_1__["MessagingService"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/core/interceptors/jwt.interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
  \******************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global */ "./src/app/core/global.ts");





let JwtInterceptor = class JwtInterceptor {
    constructor(user, util) {
        this.user = user;
        this.util = util;
    }
    intercept(request, next) {
        /********** add authorization header with jwt token if available **********/
        if (!_global__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].BLOCK_HEADERS.includes(request['url'])) {
            let token = this.user.getUserToken;
            let headers = {};
            headers['secretdbkey'] = _global__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SECRET_DB_KEY;
            if (token) {
                headers['Authorization'] = token;
            }
            let langData = this.util.getLocalData('langData', true);
            headers['Accept-Language'] = langData ? langData.language_code : 'en';
            request = request.clone({
                setHeaders: headers
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"] }
];
JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]])
], JwtInterceptor);



/***/ }),

/***/ "./src/app/core/interceptors/timeout.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/timeout.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: DEFAULT_TIMEOUT, TimeoutInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TIMEOUT", function() { return DEFAULT_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutInterceptor", function() { return TimeoutInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



const DEFAULT_TIMEOUT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('defaultTimeout');
let TimeoutInterceptor = class TimeoutInterceptor {
    constructor(defaultTimeout) {
        this.defaultTimeout = defaultTimeout;
    }
    intercept(req, next) {
        const timeoutValue = req.headers.get('timeout') || this.defaultTimeout;
        const timeoutValueNumeric = Number(timeoutValue);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(timeoutValueNumeric));
    }
};
TimeoutInterceptor.ctorParameters = () => [
    { type: Number, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DEFAULT_TIMEOUT,] }] }
];
TimeoutInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])
], TimeoutInterceptor);



/***/ }),

/***/ "./src/app/core/loader/loader.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/loader/loader.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading-screen-wrapper {\n  z-index: 1000000;\n  position: fixed;\n  background-color: #ffffff;\n  display: block;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.loading-screen-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  height: 180px;\n  width: 180px;\n}\n\n.loading-screen-icon img {\n  height: 100%;\n  width: 100%;\n}\n\n.pulse-ring {\n  content: \"\";\n  width: 210px;\n  height: 210px;\n  border: 2px solid;\n  border-radius: 50%;\n  position: absolute;\n  top: -16px;\n  left: 214px;\n  margin: auto;\n  -webkit-animation: pulsate infinite 2s;\n  animation: pulsate infinite 2s;\n  -webkit-animation-delay: 1.00s;\n          animation-delay: 1.00s;\n  opacity: 0;\n}\n\n@-webkit-keyframes pulsate {\n  0% {\n    -webkit-transform: scale(1, 1);\n    opacity: 0.7;\n  }\n  100% {\n    -webkit-transform: scale(1.2, 1.2);\n    opacity: 0;\n  }\n}\n\n/* Progress Bar */\n\n.progress {\n  position: fixed;\n  height: 6px;\n  display: block;\n  width: 100%;\n  background-color: #fff;\n  overflow: hidden;\n}\n\n.progress .indeterminate {\n  background-color: #8bc542;\n}\n\n.progress .indeterminate:before {\n  content: \"\";\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n  animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n\n.progress .indeterminate:after {\n  content: \"\";\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  -webkit-animation-delay: 1.15s;\n  animation-delay: 1.15s;\n}\n\n@-webkit-keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n\n@keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n\n@-webkit-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n\n@keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n\n.margin_top_bar {\n  z-index: 99999999999 !important;\n  position: relative !important;\n  margin-top: 0px !important;\n}\n\n.loader-body {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 99999999;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\nbody {\n  background-color: #eaecfa;\n}\n\np {\n  color: white;\n  font: 300 4em/150% Impact;\n  text-align: center;\n}\n\n.loading {\n  width: 250px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-transform: uppercase;\n  font-weight: 900;\n  color: #fff;\n  letter-spacing: 0.2em;\n  font-size: 22px;\n}\n\n/* loading dots */\n\n.loading:after {\n  content: \" .\";\n  -webkit-animation: dots 1s steps(5, end) infinite;\n          animation: dots 1s steps(5, end) infinite;\n}\n\n@-webkit-keyframes dots {\n  0%,\n  20% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);\n  }\n  40% {\n    color: white;\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);\n  }\n  60% {\n    text-shadow: 0.25em 0 0 white, 0.5em 0 0 rgba(0, 0, 0, 0);\n  }\n  80%,\n  100% {\n    text-shadow: 0.25em 0 0 white, 0.5em 0 0 white;\n  }\n}\n\n@keyframes dots {\n  0%,\n  20% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);\n  }\n  40% {\n    color: white;\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);\n  }\n  60% {\n    text-shadow: 0.25em 0 0 white, 0.5em 0 0 rgba(0, 0, 0, 0);\n  }\n  80%,\n  100% {\n    text-shadow: 0.25em 0 0 white, 0.5em 0 0 white;\n  }\n}\n\n/* body {\r\nbackground: #eaecfa;\r\n}\r\n\r\n.loader {\r\nwidth: 250px;\r\nheight: 50px;\r\nline-height: 50px;\r\ntext-align: center;\r\nposition: absolute;\r\ntop: 50%;\r\nleft: 50%;\r\ntransform: translate(-50%, -50%);\r\ntext-transform: uppercase;\r\nfont-weight: 900;\r\ncolor: #fff;\r\nletter-spacing: 0.2em;\r\nfont-size: 30px;\r\n}\r\n.loader::before, .loader::after {\r\ncontent: \"\";\r\ndisplay: block;\r\nwidth: 15px;\r\nheight: 15px;\r\nbackground: #fff;\r\nposition: absolute;\r\nanimation: load 0.7s infinite alternate ease-in-out;\r\n}\r\n.loader::before {\r\ntop: 0;\r\n}\r\n.loader::after {\r\nbottom: 0;\r\n}\r\n\r\n@keyframes load {\r\n0% {\r\n  left: 0;\r\n  height: 30px;\r\n  width: 15px;\r\n}\r\n50% {\r\n  height: 8px;\r\n  width: 40px;\r\n}\r\n100% {\r\n  left: 235px;\r\n  height: 30px;\r\n  width: 15px;\r\n}\r\n} */\n\n.glb-ldr-prt {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  /* background-color: rgba(0, 0, 0, 0.7); */\n  background-color: rgba(185, 182, 182, 0.7);\n}\n\n.gl-ldr-cld,\n.glb-ldr-prt {\n  position: fixed;\n  text-align: center;\n}\n\n#page-loader,\n#route_loader,\n.glb-ldr-prt {\n  z-index: 100000;\n  right: 0;\n}\n\n.gl-ldr-cld {\n  top: 50%;\n  left: 10%;\n  margin-left: -40px;\n}\n\n.gl-ldr-cld,\n.glb-ldr-prt {\n  position: fixed;\n  text-align: center;\n}\n\n.gl-ldr-cld,\n.gl-ldr-cld1,\n.lg-btn,\n.md-btn,\n.modal.valign .modal-dialog,\n.modal.valign:before,\n.secondry-btn,\n.sm-btn,\n.sm-dot,\n.tk-checkbox,\n.xs-btn {\n  vertical-align: middle;\n}\n\n#global_loader .gl-ldr-ctr {\n  width: 80px;\n  height: 80px;\n  padding: 15px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.gl-ldr-ctr {\n  background-color: #f5f5f5;\n  margin: 0 auto;\n  border-radius: 10px;\n}\n\n.gl-loader,\n.gl-loader:after {\n  border-radius: 50%;\n}\n\n.gl-loader {\n  width: 50px;\n  height: 50px;\n  position: relative;\n  border-top: 5px solid rgba(0, 0, 0, 0.03);\n  border-right: 5px solid rgba(0, 0, 0, 0.03);\n  border-bottom: 5px solid;\n  border-left: 5px solid;\n  transform: translateZ(0);\n  -webkit-animation: load8 1.2s infinite linear;\n  animation: load8 1.2s infinite linear;\n}\n\n.loader {\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #DF284D;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n  /* Safari */\n  animation: spin 2s linear infinite;\n}\n\n/* Safari */\n\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes load8 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBUkE7RUFVSSxZQUFZO0VBQ1osV0FBVztBQUVmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLDhCQUE4QjtFQUM5Qiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0lBQzlCLFlBQVk7RUFDZDtFQUNBO0lBQ0Usa0NBQWtDO0lBQ2xDLFVBQVU7RUFDWjtBQUNGOztBQUVBLGlCQUFBOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsc0ZBQXNGO0VBQ3RGLDhFQUE4RTtBQUNoRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULHdCQUF3QjtFQUN4Qix1RkFBdUY7RUFDdkYsK0VBQStFO0VBQy9FLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQWI7RUFHQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBRGI7QUFDRjs7QUFJQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFEYjtFQUlBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFGYjtFQUtBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFIYjtBQUNGOztBQU1BO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsV0FBVztFQUhiO0VBTUE7SUFDRSxVQUFVO0lBQ1YsVUFBVTtFQUpaO0VBT0E7SUFDRSxVQUFVO0lBQ1YsVUFBVTtFQUxaO0FBQ0Y7O0FBUUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxXQUFXO0VBTGI7RUFRQTtJQUNFLFVBQVU7SUFDVixVQUFVO0VBTlo7RUFTQTtJQUNFLFVBQVU7SUFDVixVQUFVO0VBUFo7QUFDRjs7QUFTQTtFQUNFLCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0FBTjVCOztBQVNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9DQUFvQztBQU50Qzs7QUFTQTtFQUNFLHlCQUF5QjtBQU4zQjs7QUFRQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0FBTHBCOztBQVFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtBQUxqQjs7QUFPQSxpQkFBQTs7QUFFQTtFQUNFLGFBQWE7RUFDYixpREFBeUM7VUFBekMseUNBQXlDO0FBTDNDOztBQVFBO0VBQ0U7O0lBRUUsdUJBQXVCO0lBQ3ZCLG9FQUFvRTtFQUx0RTtFQU9BO0lBQ0UsWUFBWTtJQUNaLG9FQUFvRTtFQUx0RTtFQU9BO0lBQ0UseURBQXlEO0VBTDNEO0VBT0E7O0lBRUUsOENBQThDO0VBTGhEO0FBQ0Y7O0FBWEE7RUFDRTs7SUFFRSx1QkFBdUI7SUFDdkIsb0VBQW9FO0VBTHRFO0VBT0E7SUFDRSxZQUFZO0lBQ1osb0VBQW9FO0VBTHRFO0VBT0E7SUFDRSx5REFBeUQ7RUFMM0Q7RUFPQTs7SUFFRSw4Q0FBOEM7RUFMaEQ7QUFDRjs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Q0c7O0FBUUg7RUFDRSxNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDBDQUFBO0VBQ0EsMENBQTBDO0FBTjVDOztBQVNBOztFQUVFLGVBQWU7RUFDZixrQkFBa0I7QUFOcEI7O0FBUUE7OztFQUdFLGVBQWU7RUFDZixRQUFRO0FBTFY7O0FBT0E7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtBQUpwQjs7QUFNQTs7RUFFRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBSHBCOztBQUtBOzs7Ozs7Ozs7OztFQVdFLHNCQUFzQjtBQUZ4Qjs7QUFJQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtBQURkOztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUI7QUFBckI7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLDJDQUEyQztFQUMzQyx3QkFBd0I7RUFDeEIsc0JBQXNCO0VBR3RCLHdCQUF3QjtFQUN4Qiw2Q0FBNkM7RUFDN0MscUNBQXFDO0FBRXZDOztBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQ0FBMEM7RUFBRSxXQUFBO0VBQzVDLGtDQUFrQztBQUlwQzs7QUFEQSxXQUFBOztBQUNBO0VBQ0U7SUFDRSwrQkFBK0I7RUFJakM7RUFGQTtJQUNFLGlDQUFpQztFQUluQztBQUNGOztBQURBO0VBQ0U7SUFDRSx1QkFBdUI7RUFJekI7RUFGQTtJQUNFLHlCQUF5QjtFQUkzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctc2NyZWVuLXdyYXBwZXIge1xyXG4gIHotaW5kZXg6IDEwMDAwMDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxvYWRpbmctc2NyZWVuLWljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4ucHVsc2UtcmluZyB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMjEwcHg7XHJcbiAgaGVpZ2h0OiAyMTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTE2cHg7XHJcbiAgbGVmdDogMjE0cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzYXRlIGluZmluaXRlIDJzO1xyXG4gIGFuaW1hdGlvbjogcHVsc2F0ZSBpbmZpbml0ZSAycztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuMDBzO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzYXRlIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBQcm9ncmVzcyBCYXIgKi9cclxuLnByb2dyZXNzIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MgLmluZGV0ZXJtaW5hdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmM1NDI7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyAuaW5kZXRlcm1pbmF0ZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpbGwtY2hhbmdlOiBsZWZ0LCByaWdodDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogaW5kZXRlcm1pbmF0ZSAyLjFzIGN1YmljLWJlemllcigwLjY1LCAwLjgxNSwgMC43MzUsIDAuMzk1KSBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGluZGV0ZXJtaW5hdGUgMi4xcyBjdWJpYy1iZXppZXIoMC42NSwgMC44MTUsIDAuNzM1LCAwLjM5NSkgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyAuaW5kZXRlcm1pbmF0ZTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lsbC1jaGFuZ2U6IGxlZnQsIHJpZ2h0O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbmRldGVybWluYXRlLXNob3J0IDIuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGluZGV0ZXJtaW5hdGUtc2hvcnQgMi4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGluZmluaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjE1cztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuMTVzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW5kZXRlcm1pbmF0ZSB7XHJcbiAgMCUge1xyXG4gICAgbGVmdDogLTM1JTtcclxuICAgIHJpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICByaWdodDogLTkwJTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHJpZ2h0OiAtOTAlO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBpbmRldGVybWluYXRlIHtcclxuICAwJSB7XHJcbiAgICBsZWZ0OiAtMzUlO1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHJpZ2h0OiAtOTAlO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgcmlnaHQ6IC05MCU7XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW5kZXRlcm1pbmF0ZS1zaG9ydCB7XHJcbiAgMCUge1xyXG4gICAgbGVmdDogLTIwMCU7XHJcbiAgICByaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBsZWZ0OiAxMDclO1xyXG4gICAgcmlnaHQ6IC04JTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgbGVmdDogMTA3JTtcclxuICAgIHJpZ2h0OiAtOCU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGluZGV0ZXJtaW5hdGUtc2hvcnQge1xyXG4gIDAlIHtcclxuICAgIGxlZnQ6IC0yMDAlO1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgbGVmdDogMTA3JTtcclxuICAgIHJpZ2h0OiAtOCU7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGxlZnQ6IDEwNyU7XHJcbiAgICByaWdodDogLTglO1xyXG4gIH1cclxufVxyXG4ubWFyZ2luX3RvcF9iYXIge1xyXG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5ICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYm9keSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiA5OTk5OTk5OTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVjZmE7XHJcbn1cclxucCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQ6IDMwMCA0ZW0vMTUwJSBJbXBhY3Q7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9hZGluZyB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4vKiBsb2FkaW5nIGRvdHMgKi9cclxuXHJcbi5sb2FkaW5nOmFmdGVyIHtcclxuICBjb250ZW50OiBcIiAuXCI7XHJcbiAgYW5pbWF0aW9uOiBkb3RzIDFzIHN0ZXBzKDUsIGVuZCkgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZG90cyB7XHJcbiAgMCUsXHJcbiAgMjAlIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAuMjVlbSAwIDAgcmdiYSgwLCAwLCAwLCAwKSwgMC41ZW0gMCAwIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMC4yNWVtIDAgMCByZ2JhKDAsIDAsIDAsIDApLCAwLjVlbSAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIHRleHQtc2hhZG93OiAwLjI1ZW0gMCAwIHdoaXRlLCAwLjVlbSAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcclxuICB9XHJcbiAgODAlLFxyXG4gIDEwMCUge1xyXG4gICAgdGV4dC1zaGFkb3c6IDAuMjVlbSAwIDAgd2hpdGUsIDAuNWVtIDAgMCB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIGJvZHkge1xyXG5iYWNrZ3JvdW5kOiAjZWFlY2ZhO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxud2lkdGg6IDI1MHB4O1xyXG5oZWlnaHQ6IDUwcHg7XHJcbmxpbmUtaGVpZ2h0OiA1MHB4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiA1MCU7XHJcbmxlZnQ6IDUwJTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmZvbnQtd2VpZ2h0OiA5MDA7XHJcbmNvbG9yOiAjZmZmO1xyXG5sZXR0ZXItc3BhY2luZzogMC4yZW07XHJcbmZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4ubG9hZGVyOjpiZWZvcmUsIC5sb2FkZXI6OmFmdGVyIHtcclxuY29udGVudDogXCJcIjtcclxuZGlzcGxheTogYmxvY2s7XHJcbndpZHRoOiAxNXB4O1xyXG5oZWlnaHQ6IDE1cHg7XHJcbmJhY2tncm91bmQ6ICNmZmY7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYW5pbWF0aW9uOiBsb2FkIDAuN3MgaW5maW5pdGUgYWx0ZXJuYXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5sb2FkZXI6OmJlZm9yZSB7XHJcbnRvcDogMDtcclxufVxyXG4ubG9hZGVyOjphZnRlciB7XHJcbmJvdHRvbTogMDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBsb2FkIHtcclxuMCUge1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG59XHJcbjUwJSB7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuMTAwJSB7XHJcbiAgbGVmdDogMjM1cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG59XHJcbn0gKi9cclxuXHJcbi5nbGItbGRyLXBydCB7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODUsIDE4MiwgMTgyLCAwLjcpO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmdsLWxkci1jbGQsXHJcbi5nbGItbGRyLXBydCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jcGFnZS1sb2FkZXIsXHJcbiNyb3V0ZV9sb2FkZXIsXHJcbi5nbGItbGRyLXBydCB7XHJcbiAgei1pbmRleDogMTAwMDAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbi5nbC1sZHItY2xkIHtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAxMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG59XHJcbi5nbC1sZHItY2xkLFxyXG4uZ2xiLWxkci1wcnQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmdsLWxkci1jbGQsXHJcbi5nbC1sZHItY2xkMSxcclxuLmxnLWJ0bixcclxuLm1kLWJ0bixcclxuLm1vZGFsLnZhbGlnbiAubW9kYWwtZGlhbG9nLFxyXG4ubW9kYWwudmFsaWduOmJlZm9yZSxcclxuLnNlY29uZHJ5LWJ0bixcclxuLnNtLWJ0bixcclxuLnNtLWRvdCxcclxuLnRrLWNoZWNrYm94LFxyXG4ueHMtYnRuIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbiNnbG9iYWxfbG9hZGVyIC5nbC1sZHItY3RyIHtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uZ2wtbGRyLWN0ciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5nbC1sb2FkZXIsXHJcbi5nbC1sb2FkZXI6YWZ0ZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uZ2wtbG9hZGVyIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkO1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQ7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ4IDEuMnMgaW5maW5pdGUgbGluZWFyO1xyXG4gIGFuaW1hdGlvbjogbG9hZDggMS4ycyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuLmxvYWRlciB7XHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgI0RGMjg0RDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7IC8qIFNhZmFyaSAqL1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi8qIFNhZmFyaSAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDgge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBsb2FkOCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/core/loader/loader.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/loader/loader.component.ts ***!
  \*************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/loader/loader.service */ "./src/app/services/loader/loader.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let LoaderComponent = class LoaderComponent {
    constructor(loaderService, util) {
        this.loaderService = loaderService;
        this.util = util;
        this.show = false;
        this.refresh = false;
        this.loaderColor = '';
        this.loader_image = '';
        this.styleSubscription = this.util.getStyles
            .subscribe((style) => {
            this.loaderColor = style.primaryColor;
            this.style = style;
        });
    }
    ngOnInit() {
        this.subscription = this.loaderService.loaderState
            .subscribe((state) => {
            this.show = state.show;
            this.refresh = state.refresh;
        });
        this.settingsSubscription = this.util.getSettings
            .subscribe((settings) => {
            if (!!settings) {
                this.settings = settings;
                // this.loader_image = GlobalVariable.image_paths[settings['type']].loader;
            }
        });
    }
    ngOnDestroy() {
        this.show = false;
        this.refresh = false;
        this.subscription.unsubscribe();
        this.styleSubscription.unsubscribe();
        this.settingsSubscription.unsubscribe();
        this.loaderService.pageRefresh.next(false);
    }
};
LoaderComponent.ctorParameters = () => [
    { type: _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"] }
];
LoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loader',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/loader/loader.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./loader.component.scss */ "./src/app/core/loader/loader.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]])
], LoaderComponent);



/***/ }),

/***/ "./src/app/core/localization.ts":
/*!**************************************!*\
  !*** ./src/app/core/localization.ts ***!
  \**************************************/
/*! exports provided: LocalizationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationModel", function() { return LocalizationModel; });
class LocalizationModel {
    constructor() {
        this.supplier = 'Supplier';
        this.suppliers = 'Suppliers';
        this.order = 'Order';
        this.orders = 'Orders';
        this.availability = 'Availability';
        this.product = 'Product';
        this.products = 'Products';
        this.agent = 'Agent';
        this.delivery = 'Delivery';
        this.category = 'Category';
        this.viewDetail = 'View Details';
        this.emptyCartMsg = "There is nothing in your bag. Let's add some items.";
        this.track = 'Track';
        this.categories = 'Categories';
        this.brand = "Brand";
        this.brands = "Brands";
        this.payment = 'Payment';
        this.cash = 'Cash';
        this.total_revenue = 'Total Revenue';
        this.prescription_value = 'Prescription';
        this.instruction = 'Instructions';
        this.product_file_upload = 'Download Recipe';
        this.search_for = 'Search For';
        this.unserviceable = 'Unserviceable';
        this.recommended_supplier = 'Recommended Supplier For You';
        this.complete_address = 'Complete Address';
        this.tax = 'Tax';
        this.tip = 'Tip';
        this.wishlist = 'Wishlist';
        this.top_suppliers_near_you = '';
        this.choose_supplier = 'Choose Supplier';
        this.suppliers_near_you = '';
        this.download_app_text = 'para una mejor experincia discarga el app';
        this.login = 'Login';
        this.select_prescription_to_upload = 'Select prescription to upload';
        this.nationality = 'Nationality';
        this.done = 'Done';
        this.supplier_service_fee = 'Supplier Service Fee';
        this.timings = 'Timings';
        this.wallet = 'Wallet';
        this.loyalty_points = "Loyalty Programs";
        this.loyalty_discount = "Loyalty Discount";
        this.my_subscription = "My Subscription";
        this.subscription = 'Subscription';
        this.subscription_plans = 'Subscription Plans';
        this.cuisines = 'Cuisines';
        this.popular_brands = 'Popular Brands';
        this.license_number = 'License Number';
        this.popular_products = 'Popular Products';
        this.recently_viewed_products = 'Recently Viewed Products';
        this.what_are_u_looking_for = "What are you looking for?";
        this.best_sellers = "Best Sellers";
        this.cod = 'Cash On Delivery';
        this.selfpickup = 'Self Pick-Up';
        this.customizable = 'Customizable';
        this.special_offers = 'Special Offers';
        this.tags = "Tags";
        this.flavor_of_the_week = "Flavor of the Week";
        this.become_a_flavor = "Become a Flavor";
        this.top_selling_items = "Top-Selling Dishes";
        this.preparation_time = 'Preparation Time';
        this.terms_and_conditions = 'Terms And Conditions';
        this.privacy_policy = 'Privacy Policy';
        this.about_us = 'About Us';
        this.faq = 'FAQ';
        this.cash_on_pickup = 'Cash On Pickup';
        this.cash_on_appointment = 'Cash On Appointment';
        this.address_full_name = 'Full Name';
        this.address_phone_no = 'Contact Number';
        this.notifications = 'Notifications';
        this.email = 'Email';
        this.sub_total = 'Sub Total';
        this.oxxo = 'Oxxo';
        this.apartmant_no = 'Apartment No.';
        this.place_order = 'Place Order';
    }
}


/***/ }),

/***/ "./src/app/core/theme/styleConstants.model.ts":
/*!****************************************************!*\
  !*** ./src/app/core/theme/styleConstants.model.ts ***!
  \****************************************************/
/*! exports provided: StyleConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleConstants", function() { return StyleConstants; });
class StyleConstants {
}


/***/ }),

/***/ "./src/app/core/theme/styleVariables.model.ts":
/*!****************************************************!*\
  !*** ./src/app/core/theme/styleVariables.model.ts ***!
  \****************************************************/
/*! exports provided: StyleVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleVariables", function() { return StyleVariables; });
class StyleVariables {
    constructor() {
        this.fontFamily = '';
        this.primaryColor = '#262626';
        this.secondaryColor = '#999999';
        this.defaultColor = '#515151';
        this.baseColor = '#484848';
        this.backgroundColor = '#ffffff';
        this.cardBackgroundColor = '#f8f8f8';
        this.headerTextColor = '#484848';
        this.headerBackgroundColor = '';
        this.topHeaderTextColor = '#484848';
        this.topHeaderBackgroundColor = '';
        this.headerFontFamily = '';
        this.footerColor = '#fffffff';
        this.footerSecColor = '';
        this.footerTextColor = '#484848';
    }
}


/***/ }),

/***/ "./src/app/hyper-pay-webview/hyper-pay-webview.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/hyper-pay-webview/hyper-pay-webview.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dialog-model {\n  display: block;\n  position: fixed;\n  z-index: 99999999 !important;\n  padding-top: 150px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n#card-element {\n  width: 100% !important;\n}\n\n.check input {\n  width: 24px;\n  height: 35px;\n}\n\n.check span {\n  position: relative;\n  bottom: 12px;\n  left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHlwZXItcGF5LXdlYnZpZXcvaHlwZXItcGF5LXdlYnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsb0NBQW9DO0FBQ3hDOztBQUNBO0VBQ0ksc0JBQXNCO0FBRTFCOztBQUNBO0VBQ0ksV0FBVztFQUNYLFlBQVk7QUFFaEI7O0FBQUE7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7QUFHZCIsImZpbGUiOiJzcmMvYXBwL2h5cGVyLXBheS13ZWJ2aWV3L2h5cGVyLXBheS13ZWJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1tb2RlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTk5OTk5ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4jY2FyZC1lbGVtZW50IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uY2hlY2sgaW5wdXQge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMzVweDtcbn1cbi5jaGVjayBzcGFuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAxMnB4O1xuICAgIGxlZnQ6IDEwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/hyper-pay-webview/hyper-pay-webview.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/hyper-pay-webview/hyper-pay-webview.component.ts ***!
  \******************************************************************/
/*! exports provided: HyperPayGatewayWebViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HyperPayGatewayWebViewComponent", function() { return HyperPayGatewayWebViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _services_window_window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/window/window.service */ "./src/app/services/window/window.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _services_script_script_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/script/script.service */ "./src/app/services/script/script.service.ts");
/* harmony import */ var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/theme/styleVariables.model */ "./src/app/core/theme/styleVariables.model.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/messaging/messaging.service */ "./src/app/services/messaging/messaging.service.ts");












let HyperPayGatewayWebViewComponent = class HyperPayGatewayWebViewComponent {
    constructor(utilService, scriptService, window, document, http, route, message) {
        this.utilService = utilService;
        this.scriptService = scriptService;
        this.window = window;
        this.document = document;
        this.http = http;
        this.route = route;
        this.message = message;
        this.showAddCard = false;
        this.disabled = false;
        this.order = {};
        this.is_mada_entity_id = 0;
        this.is_continue = false;
        this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_7__["StyleVariables"]();
    }
    ngOnInit() {
        this.styleSubscription = this.utilService.getStyles.subscribe((style) => {
            this.style = style;
        });
        this.getQueryParams();
    }
    getQueryParams() {
        this.routeSubscription = this.route.queryParams
            .subscribe(params => {
            if (params['amount'] && params['is_web_view'] == '1') {
                this.order['amount'] = params['amount'];
                this.order['address'] = {};
                if (params['address']) {
                    this.order['address'] = JSON.parse(params['address']);
                }
            }
        });
    }
    continue() {
        this.getPaymentUrl();
    }
    getPaymentUrl() {
        var data = {
            amount: this.order.amount,
            currency: _core_global__WEBPACK_IMPORTED_MODULE_1__["GlobalVariable"].CURRENCY_NAME,
            is_mada_entity_id: this.is_mada_entity_id ? 1 : 0,
            email: this.order.address.email || '',
            street1: this.order.address.address_line_1 || '',
            city: this.order.address.city || '',
            state: this.order.address.state || '',
            country: this.order.address.country_code || '',
            postcode: this.order.address.pincode || '',
            givenName: this.order.address.name || '',
            surname: this.order.address.name || '',
        };
        this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_9__["ApiUrl"].getHyperPaymentUrl, data).subscribe((res) => {
            if (res.status == 200) {
                this.is_continue = true;
                this.initializeHyperPay(res);
            }
            else {
                this.is_continue = false;
                this.message.toast("error", "Payment could not processed");
            }
        });
    }
    initializeHyperPay(res) {
        const scriptLink = this.document.createElement('script');
        scriptLink.id = `hyper-pay-checkout`;
        scriptLink.setAttribute("type", "text/javascript");
        scriptLink.setAttribute("src", res.data.baseUrl);
        this.document.body.appendChild(scriptLink);
        const body = this.document.getElementsByTagName('body')[0];
        const scriptLink1 = this.document.createElement('script');
        scriptLink1.id = `hyper-pay-checkout1`;
        scriptLink1.setAttribute("type", "text/javascript");
        scriptLink1.appendChild(document.createTextNode(this.payFormSettings()));
        body.appendChild(scriptLink1);
        const form = this.document.createElement('form');
        form.id = `hyper-pay-checkout-form`;
        form.setAttribute("action", this.window.origin + "/success?gateway='hyperpay'");
        form.setAttribute("class", "paymentWidgets");
        var selected_brand = this.is_mada_entity_id ? `MADA` : `VISA MASTER AMEX`;
        form.setAttribute("data-brands", selected_brand);
        // form.action = "https://wordpresshyperpay.docs.oppwa.com/tutorials/integration-guide/advanced-options";
        form.class = "paymentWidgets";
        const ele = document.getElementById('card-element');
        ele.appendChild(form);
    }
    payFormSettings() {
        return `var wpwlOptions={
            billingAddress: {
                country: ${this.order.address.country_code ? '"' + this.order.address.country_code + '"' : '""'},
                state: "",
                city: ${this.order.address.city ? '"' + this.order.address.city + '"' : '""'},
                postcode: ${this.order.address.pincode ? '"' + this.order.address.pincode + '"' : '""'},
                street1: ${this.order.address.address_line_1 ? '"' + this.order.address.address_line_1 + '"' : '""'},
                street2: ${this.order.address.customer_address ? '"' + this.order.address.customer_address + '"' : '""'}
            },
            mandatoryBillingFields: {
                country: true,
                state: true,
                city: true,
                postcode: true,
                street1: true,
                street2: false
            },
            style: "card",
            onReady: function (e) {
                $('.wpwl-form-card').find('.wpwl-button-pay').on('click', function (e) {
                    validateHolder(e);
                });
            },
            onBeforeSubmitCard: function (e) {
                return validateHolder(e);
            }
        }
       function validateHolder(e) {
            var holder = $('.wpwl-control-cardHolder').val();
            if (holder.trim().length < 2) {
                $('.wpwl-control-cardHolder').addClass('wpwl-has-error').after('<div class="wpwl-hint wpwl-hint-cardHolderError">Invalid card holder</div>');
                return false;
            }
            return true;
        }
        `;
    }
    ngOnDestroy() {
        if (this.styleSubscription)
            this.styleSubscription.unsubscribe();
    }
};
HyperPayGatewayWebViewComponent.ctorParameters = () => [
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: _services_script_script_service__WEBPACK_IMPORTED_MODULE_6__["ScriptService"] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_services_window_window_service__WEBPACK_IMPORTED_MODULE_2__["WINDOW"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_11__["MessagingService"] }
];
HyperPayGatewayWebViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-hyper-pay-webview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hyper-pay-webview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hyper-pay-webview/hyper-pay-webview.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hyper-pay-webview.component.scss */ "./src/app/hyper-pay-webview/hyper-pay-webview.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"],
        _services_script_script_service__WEBPACK_IMPORTED_MODULE_6__["ScriptService"],
        Window, Object, _services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_11__["MessagingService"]])
], HyperPayGatewayWebViewComponent);



/***/ }),

/***/ "./src/app/leads/leads.component.scss":
/*!********************************************!*\
  !*** ./src/app/leads/leads.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".leads {\n  text-align: center;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhZHMvbGVhZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2xlYWRzL2xlYWRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlYWRzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/leads/leads.component.ts":
/*!******************************************!*\
  !*** ./src/app/leads/leads.component.ts ***!
  \******************************************/
/*! exports provided: LeadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsComponent", function() { return LeadsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");





let LeadsComponent = class LeadsComponent {
    constructor(platformId, util) {
        this.platformId = platformId;
        this.util = util;
    }
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            document.getElementById("splash_screen").style.display = "none";
        }
        this.settingsSubscription = this.util.getSettings.subscribe((settings) => {
            this.settings = settings;
        });
    }
    ngOnDestroy() {
        if (!!this.settingsSubscription)
            this.settingsSubscription.unsubscribe();
    }
};
LeadsComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"],] }] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"] }
];
LeadsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leads',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./leads.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/leads/leads.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./leads.component.scss */ "./src/app/leads/leads.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]])
], LeadsComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#notfound {\n  position: relative;\n  height: 100vh;\n}\n\n#notfound .notfound {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.notfound {\n  max-width: 560px;\n  width: 100%;\n  padding-left: 160px;\n  line-height: 1.1;\n}\n\n.notfound .notfound-404 {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 140px;\n  height: 140px;\n  background-size: cover;\n}\n\n.notfound .notfound-404 img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n}\n\n.notfound .notfound-404:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: scale(2.4);\n  border-radius: 50%;\n  background-color: #f2f5f8;\n  z-index: -1;\n}\n\n.notfound h1 {\n  font-size: 65px;\n  font-weight: 700;\n  margin-top: 0px;\n  margin-bottom: 10px;\n  color: #151723;\n  text-transform: uppercase;\n}\n\n.notfound h2 {\n  font-size: 21px;\n  font-weight: 400;\n  margin: 0;\n  text-transform: uppercase;\n  color: #151723;\n}\n\n.notfound p {\n  color: #999fa5;\n  font-weight: 400;\n}\n\n.notfound a {\n  display: inline-block;\n  font-weight: 700;\n  border-radius: 40px;\n  text-decoration: none;\n  color: #388dbc;\n}\n\n.logo-img {\n  width: 130px;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 767px) {\n  .notfound .notfound-404 {\n    width: 110px;\n    height: 110px;\n  }\n  .notfound {\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 110px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBR1IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04scUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBRWIsc0JBQXNCO0FBQXhCOztBQVJBO0VBV0ksc0JBQW1CO0tBQW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUN0Qjs7QUFHQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFHWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0FBQWI7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtBQUEzQjs7QUFHQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixjQUFjO0FBQWhCOztBQUdBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUFsQjs7QUFHQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixjQUFjO0FBQWhCOztBQUdBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFBakI7O0FBR0E7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQWY7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQXBCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3Rmb3VuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI25vdGZvdW5kIC5ub3Rmb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLm5vdGZvdW5kIHtcbiAgbWF4LXdpZHRoOiA1NjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9lbW9qaS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbn1cblxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMi40KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMi40KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmY1Zjg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubm90Zm91bmQgaDEge1xuICBmb250LXNpemU6IDY1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICMxNTE3MjM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5ub3Rmb3VuZCBoMiB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzE1MTcyMztcbn1cblxuLm5vdGZvdW5kIHAge1xuICBjb2xvcjogIzk5OWZhNTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5vdGZvdW5kIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzODhkYmM7XG59XG5cbi5sb2dvLWltZyB7XG4gIHdpZHRoOiAxMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuICAubm90Zm91bmQge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMTBweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_app_load_app_load_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/app-load/app-load.service */ "./src/app/services/app-load/app-load.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nguniversal/express-engine/tokens */ "./node_modules/@nguniversal/express-engine/__ivy_ngcc__/fesm2015/tokens.js");







let PageNotFoundComponent = class PageNotFoundComponent {
    constructor(router, appInitService, util, response, platformId) {
        this.router = router;
        this.appInitService = appInitService;
        this.util = util;
        this.response = response;
        this.platformId = platformId;
        this.settingsLoaded = false;
        this.site_logo = '/assets/images/emoji.png';
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            document.getElementById("splash_screen").style.display = "none";
        }
    }
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId)) {
            this.response.status(404);
            this.response.statusMessage = '404 - Page Not Found';
        }
        if (this.util.getLocalData('site_logo')) {
            this.site_logo = this.util.getLocalData('site_logo');
        }
        this.settingsSubscription = this.util.getSettings
            .subscribe(settings => {
            this.settingsLoaded = !!settings;
        });
    }
    toHome() {
        if (this.settingsLoaded) {
            this.router.navigate(['']);
        }
        else {
            this.appInitService.init().then((val) => {
                console.log('welcome');
                this.router.navigate(['']);
            }, (err) => {
                console.error(err);
            });
        }
    }
    ngOnDestroy() {
        if (!!this.settingsSubscription)
            this.settingsSubscription.unsubscribe();
    }
};
PageNotFoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_app_load_app_load_service__WEBPACK_IMPORTED_MODULE_2__["AppLoadService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_6__["RESPONSE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"],] }] }
];
PageNotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-page-not-found",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_app_load_app_load_service__WEBPACK_IMPORTED_MODULE_2__["AppLoadService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"], Object, Object])
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/payment/pages/payment-checkout/payment-checkout.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/payment/pages/payment-checkout/payment-checkout.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGFnZXMvcGF5bWVudC1jaGVja291dC9wYXltZW50LWNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/payment/pages/payment-checkout/payment-checkout.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/payment/pages/payment-checkout/payment-checkout.component.ts ***!
  \******************************************************************************/
/*! exports provided: PaymentCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentCheckoutComponent", function() { return PaymentCheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_core_apiUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let PaymentCheckoutComponent = class PaymentCheckoutComponent {
    constructor(util, http, router, route) {
        this.util = util;
        this.http = http;
        this.router = router;
        this.route = route;
        this.isLoading = false;
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.isLoading = true;
        let params = {
            reference: this.route.snapshot.queryParams['requestId']
        };
        this.http.postData(src_app_core_apiUrl__WEBPACK_IMPORTED_MODULE_1__["ApiUrl"].check_paynow_payment, params)
            .subscribe(response => {
            if (!!response && response.data) {
                if (response.data.status == 'paid') {
                    this.router.navigate(['/success'], { queryParams: { referenceId: this.route.snapshot.queryParams['requestId'] } });
                }
                else if (response.data.status == 'cancelled') {
                    this.router.navigate(['/cart']);
                }
            }
            this.isLoading = false;
        }, error => {
            this.isLoading = false;
        });
    }
};
PaymentCheckoutComponent.ctorParameters = () => [
    { type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"] },
    { type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
PaymentCheckoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-payment-checkout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment-checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/pages/payment-checkout/payment-checkout.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment-checkout.component.scss */ "./src/app/payment/pages/payment-checkout/payment-checkout.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"],
        src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], PaymentCheckoutComponent);



/***/ }),

/***/ "./src/app/payment/pages/payment-failure/payment-failure.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/payment/pages/payment-failure/payment-failure.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGFnZXMvcGF5bWVudC1mYWlsdXJlL3BheW1lbnQtZmFpbHVyZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/payment/pages/payment-failure/payment-failure.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/payment/pages/payment-failure/payment-failure.component.ts ***!
  \****************************************************************************/
/*! exports provided: PaymentFailureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentFailureComponent", function() { return PaymentFailureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PaymentFailureComponent = class PaymentFailureComponent {
    constructor() { }
    ngOnInit() {
    }
};
PaymentFailureComponent.ctorParameters = () => [];
PaymentFailureComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-failure',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment-failure.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/pages/payment-failure/payment-failure.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment-failure.component.scss */ "./src/app/payment/pages/payment-failure/payment-failure.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PaymentFailureComponent);



/***/ }),

/***/ "./src/app/payment/pages/payment-success/payment-success.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/payment/pages/payment-success/payment-success.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGFnZXMvcGF5bWVudC1zdWNjZXNzL3BheW1lbnQtc3VjY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/payment/pages/payment-success/payment-success.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/payment/pages/payment-success/payment-success.component.ts ***!
  \****************************************************************************/
/*! exports provided: PaymentSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessComponent", function() { return PaymentSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/messaging/messaging.service */ "./src/app/services/messaging/messaging.service.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");







let PaymentSuccessComponent = class PaymentSuccessComponent {
    constructor(utilityService, message, httpService, router, route) {
        this.utilityService = utilityService;
        this.message = message;
        this.httpService = httpService;
        this.router = router;
        this.route = route;
        this.orderId = '';
        this.isLoading = false;
        this.checkError();
    }
    ngOnInit() {
        const payload = this.utilityService.getLocalData('gop', true);
        if (payload) {
            switch (payload['gateway_unique_id']) {
                case 'myfatoorah':
                    payload['payment_token'] = this.route.snapshot.queryParams['paymentId'];
                    break;
                case 'tap':
                    payload['payment_token'] = this.route.snapshot.queryParams['tap_id'];
                    break;
                case 'converge':
                    payload['payment_token'] = this.route.snapshot.queryParams['ssl_txn_id'];
                    break;
                case 'windcave':
                    payload['payment_token'] = this.route.snapshot.queryParams['result'];
                    break;
                case 'mpaisa':
                    payload['payment_token'] = this.route.snapshot.queryParams['tID'];
                    break;
                case 'telr':
                    payload['payment_token'] = this.route.snapshot.queryParams['tran_id'];
                    break;
                case 'hyperpay':
                    payload['payment_token'] = this.route.snapshot.queryParams['id'];
                    break;
                case 'thawani':
                    payload['payment_token'] = this.route.snapshot.queryParams['id'];
                    break;
                case 'sadadqa':
                    payload['payment_token'] = this.route.snapshot.queryParams['tran_id'];
                    break;
                case 'transbank':
                    var res = JSON.stringify(this.route.snapshot.queryParams['response']);
                    payload['payment_token'] = res['buyOrder'];
                    break;
                case 'paymaya':
                    payload['payment_token'] = this.route.snapshot.queryParams['ref_id'];
                    break;
                case 'saferpay':
                    payload['payment_token'] = this.route.snapshot.queryParams['requestId'];
                case 'urway':
                    payload['payment_token'] = this.route.snapshot.queryParams['TranId'];
                    break;
                case 'paynow':
                    payload['payment_token'] = this.route.snapshot.queryParams['referenceId'];
                    break;
            }
            let transactionType = this.utilityService.getLocalData('transactionType');
            if (transactionType == 'wallet') {
                this.isLoading = true;
                this.httpService.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_4__["ApiUrl"].addWalletMoney, payload).subscribe((response) => {
                    this.router.navigate(['/', 'account', 'my-wallet']).then(() => {
                        if (response && response.status == 200) {
                            this.message.toast('success', 'money added');
                        }
                        else {
                            this.message.toast('success', 'payment failed');
                        }
                        this.utilityService.setLocalData('transactionType', null);
                        this.utilityService.setLocalData('gop', null);
                    });
                }, (err) => {
                    this.router.navigate(['/', 'account', 'my-wallet']).then(() => {
                        this.message.toast('success', 'payment failed');
                        this.utilityService.setLocalData('transactionType', null);
                        this.utilityService.setLocalData('gop', null);
                    });
                });
            }
            else if (transactionType == 'subscription') {
                this.httpService.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_4__["ApiUrl"].buySubscription, payload).subscribe((response) => {
                    if (response) {
                        this.router.navigate(['/', 'account', 'subscriptions']).then(() => {
                            if (response && response.status == 200) {
                                this.message.toast('success', 'subscription added');
                            }
                            else {
                                this.message.toast('success', 'payment failed');
                            }
                            this.utilityService.setLocalData('transactionType', null);
                            this.utilityService.setLocalData('gop', null);
                        });
                    }
                    this.isLoading = false;
                }, (err) => this.router.navigate(['/', 'account', 'subscriptions']).then(() => {
                    this.message.toast('success', 'payment failed');
                    this.utilityService.setLocalData('transactionType', null);
                    this.utilityService.setLocalData('gop', null);
                }));
            }
            else {
                this.httpService.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_4__["ApiUrl"].generateOrder, payload, false)
                    .subscribe(response => {
                    if (!!response && response.data) {
                        this.orderId = response.data;
                        localStorage.removeItem('gop');
                        this.utilityService.setCart([]);
                        setTimeout(() => {
                            this.onViewOrder();
                        }, 2000);
                    }
                });
            }
        }
    }
    onViewOrder() {
        this.router.navigate(['/orders/order-detail'], { queryParams: { orderId: this.orderId } });
    }
    checkError() {
        if (this.route.snapshot.queryParams['rCode'] == 111) {
            return this.router.navigate(['/', 'failure']);
        }
    }
};
PaymentSuccessComponent.ctorParameters = () => [
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] },
    { type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_1__["MessagingService"] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PaymentSuccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-payment-success',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment-success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/pages/payment-success/payment-success.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment-success.component.scss */ "./src/app/payment/pages/payment-success/payment-success.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"],
        _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_1__["MessagingService"],
        _services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], PaymentSuccessComponent);



/***/ }),

/***/ "./src/app/services/app-load/app-load.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/app-load/app-load.service.ts ***!
  \*******************************************************/
/*! exports provided: AppLoadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoadService", function() { return AppLoadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _location_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../location/location.service */ "./src/app/services/location/location.service.ts");
/* harmony import */ var _seo_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../seo/seo.service */ "./src/app/services/seo/seo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _window_window_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../window/window.service */ "./src/app/services/window/window.service.ts");
/* harmony import */ var _app_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../app/core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _app_core_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../app/core/global */ "./src/app/core/global.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _theme_theme_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../theme/theme.service */ "./src/app/services/theme/theme.service.ts");
/* harmony import */ var _utility_utility_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _shared_models_apiKeys_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../shared/models/apiKeys.model */ "./src/app/shared/models/apiKeys.model.ts");
/* harmony import */ var _script_script_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../script/script.service */ "./src/app/services/script/script.service.ts");
/* harmony import */ var _shared_models_script_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/models/script.model */ "./src/app/shared/models/script.model.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
/* harmony import */ var _shared_models_appSettings_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/models/appSettings.model */ "./src/app/shared/models/appSettings.model.ts");



















let AppLoadService = class AppLoadService {
    constructor(http, platformId, window, injector, title, themeService, util, scriptService, _seoService, deviceService, ngZone, _http, location) {
        this.http = http;
        this.platformId = platformId;
        this.window = window;
        this.injector = injector;
        this.title = title;
        this.themeService = themeService;
        this.util = util;
        this.scriptService = scriptService;
        this._seoService = _seoService;
        this.deviceService = deviceService;
        this.ngZone = ngZone;
        this._http = _http;
        this.location = location;
        this.DOMAIN = '';
        this.apiKeys = new _shared_models_apiKeys_model__WEBPACK_IMPORTED_MODULE_14__["ApiKeys"]();
        this.DOMAIN = this.window.origin;
        // this.DOMAIN = 'https://ecommercesingledev.royoapps.com';
        // this.DOMAIN = 'https://grocerrysinglevendor.royoapps.com';
        // this.DOMAIN = 'https://newsinglevendorfood.royoapps.com';
        // this.DOMAIN = 'https://foodsingledev.royoapps.com';
        // this.DOMAIN = 'https://ecommercen.royoapps.com';
        // this.DOMAIN = 'https://medexpertt.royoapps.com';
        // this.DOMAIN = 'https://palmmarketplace.royoapps.com';
        // this.DOMAIN = 'https://healthcare.royoapps.com';
        // this.DOMAIN = 'https://royofood.royoapps.com';
        // this.DOMAIN = 'https://tidycoop01.royoapps.com'
        // this.DOMAIN = 'https://jiibli.royoapps.com',
        // this.DOMAIN = 'https://website.poneeex.com'
        // this.DOMAIN = 'https://fijieats.com'
        // this.DOMAIN = 'https://tianquiz.royoapps.com'
        // this.DOMAIN = 'https://laundry.royoapps.com'
        // this.DOMAIN = "https://royokarts.royoapps.com"
        // this.DOMAIN = 'https://zmarkett.royoapps.com';
        // this.DOMAIN = 'https://alikhlass.royoapps.com';
        // this.DOMAIN = "https://fooodo.royoapps.com"
        // this.DOMAIN = 'https://theclikat.royoapps.com';
        // this.DOMAIN = 'https://royoessentials.royoapps.com'
        // this.DOMAIN = 'https://hungerdeliverydemo.royoapps.com',
        // this.DOMAIN = 'https://carinito.royoapps.com';
        // this.DOMAIN = 'https://royohomes.royoapps.com';
        // this.DOMAIN = 'https://icecreamhub.royoapps.com'
        // this.DOMAIN = 'https://wrclive.royoapps.com'
        // this.DOMAIN = 'https://hempireca.com'
        // this.DOMAIN = 'https://thetazeja.royoapps.com'
        // this.DOMAIN = 'https://newsinglevendorfood.royoapps.com'
        // this.DOMAIN = 'https://kury.royoapps.com'
        // this.DOMAIN = 'https://ajak.app'
        // this.DOMAIN = 'https://clickattest.royoapps.com'
        // this.DOMAIN = 'https://faindy.net'
        // this.DOMAIN = 'https://order.alqadifoods.com'
        // this.DOMAIN = 'https://alkhaliligroup.royokart.com'
        // this.DOMAIN = 'https://netritemall.co.bw'
        // this.DOMAIN = 'https://found.royoapps.com'
        // this.DOMAIN = 'https://little-caesars.royoapps.com'
        // this.DOMAIN = 'https://freshfarms.royoapps.com'
        // this.DOMAIN = 'https://laundry.royoapps.com'
        // this.DOMAIN = 'https://order.zipeats.ca'
        // this.DOMAIN = 'https://thepeoplesstore.royoapps.com'
        // this.DOMAIN = 'https://cleanfaxlive.royoapps.com'
        // this.DOMAIN = 'https://foodydoo.com'
        // this.DOMAIN = 'https://tappdelivery.com'
        // this.DOMAIN = 'https://ulagula.com'
        // this.DOMAIN = 'https://netritemall.co.bw'
        // this.DOMAIN = 'https://readychef.com'
        // this.DOMAIN = 'https://ecommercen.royoapps.com'
        // this.DOMAIN = 'https://expactor.com'
        // this.DOMAIN = 'https://bodyformula.ca'
        // this.DOMAIN = 'https://freshfarmsandlocal.royokart.com'
        // this.DOMAIN = 'https://singlevendordev.royokart.com'
        // this.DOMAIN = 'https://order.klikdelivery.com'
        // this.DOMAIN = 'https://cravzz.com'
        // this.DOMAIN = 'https://hajaty.royoapps.com'
        // this.DOMAIN = 'https://platesapp.ae'
        // this.DOMAIN = 'https://experience.royoapps.com'
        // this.DOMAIN = 'https://wholesaledrop.com.au'
        // this.DOMAIN = 'https://pideyummy.com';
        // this.DOMAIN = 'https://speedybites.com'
        // this.DOMAIN = 'https://rushdelivery.royoapps.com'
        // this.DOMAIN = 'https://rush.rest'
        //  this.DOMAIN = 'https://meezzaafood.com'
        // this.DOMAIN = 'https://hotboxdeliveryservice.com'
        // this.DOMAIN = 'https://delifood.royoapps.com',
        // this.DOMAIN = 'https://roadsideassistance.royoapps.com'
        // this.DOMAIN = 'https://lubanah.royoapps.com'
        // this.DOMAIN = 'https://pickittt.royoapps.com',
        // this.DOMAIN = 'https://brandchasers.royoapps.com',
        // this.DOMAIN = 'https://fooddemolive.royoapps.com'
        // this.DOMAIN = 'https://ecommercen.royoapps.com'
        // this.DOMAIN = 'https://homerr.royoapps.com'
        // this.DOMAIN = 'https://delibear.royoapps.com'
        // this.DOMAIN = 'https://lebanon.klikdelivery.com'
        // this.DOMAIN = 'https://scrubble.in'
        // this.DOMAIN = 'https://gurumarket.royoapps.com'
        // this.DOMAIN = 'https://ondemandinterprators.royoapps.com'
        // this.DOMAIN = 'https://4n1delivery.royoapps.com'
        // this.DOMAIN = 'https://experienceembrun.ca'
        //this.DOMAIN = 'https://erastore.lk'
        // this.DOMAIN = 'https://mazu.royoapps.com'
        //this.DOMAIN = 'https://onmyway.royoapps.com'
        // this.DOMAIN = 'https://bookmytable.royoapps.com',
        // this.DOMAIN = 'https://rajatcustom.royoapps.com'
        // this.DOMAIN = 'https://dailyooz.com'
        // this.DOMAIN = 'https://homent.royoapps.com'
        // this.DOMAIN = 'https://tophandscleaningservice.royoapps.com'
        // this.DOMAIN = 'https://erastore.lk'
        // this.DOMAIN = 'https://yammfood.royoapps.com'
        // this.DOMAIN = 'https://homerr.royoapps.com'
        // this.DOMAIN = 'https://bookmytable.royokart.com'
        // this.DOMAIN = 'https://ecommercen.royoapps.com'
        // this.DOMAIN = 'https://sangtini.royoapps.com'
        // this.DOMAIN = 'https://yourbutler.royoapps.com'
        //this.DOMAIN = 'https://grooming-app.com'
        // this.DOMAIN = 'https://shopperdemo.healthyboost.life'
        // this.DOMAIN = 'https://meezzaafood.com'
        // this.DOMAIN = 'https://yourbutler.royoapps.com'
        // this.DOMAIN = 'https://faitotest.royoapps.com'
        // this.DOMAIN = 'https://newcoach.royoapps.com'
        // this.DOMAIN = 'https://vubzii.royoapps.com'
        // this.DOMAIN = 'https://onmyway.royoapps.com'
        // this.DOMAIN = 'https://localflavorkc.com'
        // this.DOMAIN = 'https://cravzz.com'
        // this.DOMAIN = 'https://tophandscleaningservice.royoapps.com'
        // this.DOMAIN = 'https://yummyclone.royokart.com'
        // this.DOMAIN = 'https://profixhogarlive.royoapps.com'
        // this.DOMAIN = 'https://mosich.royoapps.com'
        // this.DOMAIN = 'https://profixhogarlive.royoapps.com',
        // this.DOMAIN = 'https://yayeen.royostaging.com'
        // this.DOMAIN = 'https://yammfood.royoapps.com';
        // this.DOMAIN = 'https://homeservicesingledev-admin.royokart.com';
        // this.DOMAIN = 'https://homerr.royoapps.com'
        // this.DOMAIN = 'https://bookmytable.royokart.com'
        // this.DOMAIN = 'https://ecommercen.royoapps.com'
        // this.DOMAIN = 'https://homent.royoapps.com'
        //this.DOMAIN = 'https://bookmytable.royokart.com'
        // this.DOMAIN = 'https://takakk.royoapps.com'
        // this.DOMAIN = 'https://mazu.royoapps.com'
        //this.DOMAIN = 'https://pickittt.royoapps.com'
        // this.DOMAIN = 'https://pickittstage.royostaging.com'
        // this.DOMAIN = 'https://newsinglevendorfood.royoapps.com'
        //this.DOMAIN = 'https://sangtini.royoapps.com'
        //this.DOMAIN = 'https://dailyooz.com'
        // this.DOMAIN = 'https://taiaar.royostaging.com'
        //this.DOMAIN = 'https://yayeen.royostaging.com'
        //this.DOMAIN = 'https://tophandscleaningservice.royoapps.com'
        //this.DOMAIN = 'https://epitodelivery.com'
        // this.DOMAIN = 'https://pickittstage.royostaging.com'
        //this.DOMAIN = 'https://yourbutler.royoapps.com'
        // this.DOMAIN = 'https://onmyway.royoapps.com'
        // this.DOMAIN = 'https://yammfood.royoapps.com'
        //this.DOMAIN = 'https://faindy.net'
        // this.DOMAIN = 'https://cityruner.royoapps.com'
        // this.DOMAIN = 'https://localflavorkc.com'
        // this.DOMAIN = 'https://royofood.royoapps.com';
        // this.DOMAIN = 'https://yammfood.royoapps.com'
        //this.DOMAIN = 'https://ulagula.com'
        // this.DOMAIN = 'https://expactor.com'
        //this.DOMAIN = 'https://grooming-app.com'
        // this.DOMAIN='https://pickittt.royoapps.com'
        // this.DOMAIN = 'https://maazaj.com'
        this.DOMAIN = 'https://marketplace24.ch';
    }
    init() {
        return this.establishDbConnection();
    }
    establishDbConnection() {
        let domain = '';
        //domain = this.DOMAIN;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformServer"])(this.platformId)) {
            domain = 'https://' + this.injector.get('host');
        }
        else {
            domain = this.window.origin;
        }
        let router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]);
        const promise = new Promise((resolve, reject) => {
            this.http.getDBKey(_app_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getDbKey, { domain: domain }).toPromise()
                .then(response => {
                if (!!response && response.data.data.length) {
                    if (response.data.currency && response.data.currency.length) {
                        const { currency_symbol, currency_name } = response.data.currency[0];
                        _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].CURRENCY = currency_symbol;
                        _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].CURRENCY_NAME = currency_name;
                    }
                    const app_data = (response.data.data)[0];
                    _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].flowData = response.data.flowData || [];
                    _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].UNIQUE_ID = app_data.uniqueId;
                    _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].SITE_NAME = app_data.business_name;
                    _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].EMAIL = app_data.email || _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].EMAIL;
                    _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].PHONE_NUMBER = app_data.phone_number || _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].PHONE_NUMBER;
                    _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].COUNTRY_CODE = app_data.country_code;
                    _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].WHATSAPP_NUMBER = app_data.whatsapp_phone_number;
                    _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].WHATSAPP_NUMBER_CODE = app_data.whatsapp_country_code;
                    _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].COUNTRY = app_data.country || _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].COUNTRY;
                    _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].admin_domain = app_data.cbl_customer_domains[0].admin_domain;
                    _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].AGENT_DB_KEY = app_data.cbl_customer_domains[0].agent_db_secret_key;
                    if (app_data.cbl_customer_domains[0].supplier_domain) {
                        _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].supplier_domain = app_data.cbl_customer_domains[0].supplier_domain;
                    }
                    else {
                        _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].supplier_domain = app_data.cbl_customer_domains[0].admin_domain;
                    }
                    this.title.setTitle(_app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].SITE_NAME);
                    const dbKey = app_data.cbl_customer_domains[0].db_secret_key;
                    if (dbKey) {
                        this.util.setLocalData('DB_KEY', dbKey);
                        /*********** Set Keys & Load Scripts *********/
                        const featureData = response.data.featureData;
                        this.setApiKeys(featureData, response.data.settingsData);
                        /*********************************************/
                        _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].SECRET_DB_KEY = dbKey;
                        this.loadSettings(response.data.settingsData);
                        if (response.data['currency']) {
                            this.util.setMultiCurrency(response.data['currency']);
                        }
                    }
                }
                resolve(response.data.settingsData);
            }, err => {
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
                    document.getElementById("splash_screen").style.display = "none";
                }
                router.navigate(['error']);
                reject(err);
            });
        });
        return promise;
    }
    loadSettings(settingData) {
        if (!!settingData) {
            return this.fetchSettings(settingData);
        }
        else {
            return this.http.getData(_app_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getSettings, {}).toPromise().then((response) => {
                if (!!response && response.data) {
                    const appData = response.data;
                    return this.fetchSettings(appData);
                }
            });
        }
    }
    fetchSettings(appData) {
        /************* Set Settings Data *************/
        const settings = this.setSettingsData(appData);
        if (settings.isCustomFlow && Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            let flow_data = this.util.getLocalData('selected_category', true);
            if (!!flow_data && flow_data.type < 11) {
                settings.app_type = flow_data.type;
                this.util.setSettings(settings);
                this.themeService.setStyles();
            }
        }
        if (settings.no_default_product_sort == 1) {
            this.util.defaultFilters.low_to_high = -1;
        }
        this._seoService.setDefault();
        /*********************************************/
        /************* Dynamic Theme *****************/
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            const appColor = {};
            if (appData.key_value) {
                appColor.baseColor = appData.key_value['element_color'];
                appColor.primaryColor = appData.key_value['theme_color'];
                appColor.headerFontFamily = appData.key_value['font_family'];
                appColor.headerBackgroundColor = appData.key_value['header_color'];
                appColor.headerTextColor = appData.key_value['header_text_color'];
                appColor.topHeaderBackgroundColor = appData.key_value['top_header_color'];
                appColor.topHeaderTextColor = appData.key_value['top_header_text_color'];
                appColor.footerColor = appData.key_value['footer_color'];
                appColor.footerSecColor = appData.key_value['footer_sec_color'];
                appColor.footerTextColor = appData.key_value['footer_text_color'];
            }
            this.themeService.setStyles(appColor);
            this.util.setLocalData('site_logo', settings.site_logo);
        }
        /*********************************************/
        /******************** set self pickup ************************/
        if (appData['bookingFlow'][0].is_pickup_order <= 1) {
            this.util.setSelfPickup(appData['bookingFlow'][0].is_pickup_order);
        }
        /**************************************** set favicon **************************************************/
        if (appData.key_value && appData.key_value.favicon_url) {
            this.setFavicon(appData.key_value.favicon_url);
        }
        return settings;
    }
    setSettingsData(appData) {
        if (appData.screenFlow.length && appData.bookingFlow.length && appData.key_value) {
            let settingsObj = Object.assign(Object.assign(Object.assign(Object.assign({}, appData.screenFlow[0]), appData.bookingFlow[0]), appData.key_value), appData.adminDetails[0]);
            settingsObj['single_vendor_id'] = appData['supplier_id'];
            settingsObj['has054321234567890-DafaultAddrees'] = (appData['default_address'] && appData['default_address'].length);
            let terms = !!appData.termsAndConditions && appData.termsAndConditions[0] ? appData.termsAndConditions[0] : null;
            settingsObj['privacyPolicy'] = terms ? terms.privacyPolicy : 0;
            settingsObj['termsAndConditions'] = terms ? terms.termsAndConditions : 0;
            settingsObj['aboutUs'] = terms ? terms.aboutUs : 0;
            settingsObj['faqs'] = terms ? terms.faqs : 0;
            settingsObj['default_address'] = appData.default_address ? appData.default_address[0] : {};
            settingsObj['payment_card_images'] = appData.key_value.payment_card_images ? appData.key_value.payment_card_images : 0;
            settingsObj['isFirebaseAnalytics'] = appData.key_value.isFirebaseAnalytics;
            settingsObj['is_segment'] = appData.key_value.is_segment;
            settingsObj['by_pass_tables_selection'] = appData.key_value.by_pass_tables_selection;
            settingsObj['is_table_booking'] = appData.key_value.is_table_booking;
            settingsObj['is_table_invite_allowed'] = appData.key_value.is_table_invite_allowed;
            settingsObj['is_coin_exchange'] = appData.key_value.is_coin_exchange;
            settingsObj['is_abn_business'] = appData.key_value.is_abn_business;
            settingsObj['table_booking_add_food_allow'] = appData.key_value.table_booking_add_food_allow;
            settingsObj['is_sos_allow'] = appData.key_value.is_sos_allow;
            settingsObj['is_survey_monkey_allow'] = appData.key_value.is_survey_monkey_allow;
            settingsObj['content_id'] = appData.key_value.content_id;
            settingsObj['is_custom_category_template'] = appData.key_value.is_custom_category_template;
            settingsObj['is_laundry_theme'] = appData.key_value.is_laundry_theme;
            settingsObj['dropoff_buffer'] = appData.key_value.dropoff_buffer;
            settingsObj['signup_declaration'] = appData.key_value.signup_declaration;
            settingsObj['enable_size_chart_in_product'] = appData.key_value.enable_size_chart_in_product;
            settingsObj['enable_country_of_origin_in_product'] = appData.key_value.enable_country_of_origin_in_product;
            settingsObj['is_guest_user_feedback_enable'] = appData.key_value.is_guest_user_feedback_enable;
            settingsObj['is_compare_products'] = appData.key_value.is_compare_products;
            settingsObj['enable_promo_code_list'] = appData.key_value.enable_promo_code_list;
            settingsObj['enable_best_sellers'] = appData.key_value.enable_best_sellers;
            settingsObj['enable_min_order_distance_wise'] = appData.key_value.enable_min_order_distance_wise;
            settingsObj['show_tags_for_suppliers'] = appData.key_value.show_tags_for_suppliers;
            settingsObj['show_user_subscription_home_button'] = appData.key_value.show_user_subscription_home_button;
            settingsObj['show_reward_home_button'] = appData.key_value.show_reward_home_button;
            settingsObj['countryCodes'] = appData.countryCodes;
            const settings = new _shared_models_appSettings_model__WEBPACK_IMPORTED_MODULE_18__["AppSettings"](settingsObj);
            this.util.setSettings(settings);
            return settings;
        }
    }
    setApiKeys(featureData, appData) {
        /******************************* FCM ******************************/
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].IS_MOBILE = this.deviceService.isMobile();
            // this._http.get<{ ip: string }>('https://jsonip.com')
            //   .subscribe(data => {
            //     if (data && data.ip) {
            //       this.util.setLocalData('ip', data.ip);
            //     }
            //   });
            const notification = featureData.find(data => data['type_name'] == 'notification' && data['name'] === 'FCM');
            if (!!notification && notification.key_value_front.length) {
                if (notification.key_value_front.length) {
                    notification.key_value_front.forEach(el => {
                        this.apiKeys.fcm_config[el.key] = el.value;
                        _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].FIREBASE_CONFIG[el.key] = el.value;
                    });
                }
            }
            const chatbot = featureData.find(data => data['type_name'] == 'chat_bot');
            if (!!chatbot && chatbot.key_value_front.length) {
                const dialogflow = (chatbot.key_value_front).find(el => el.key == 'dialog_project_id');
                if (!!dialogflow) {
                    _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].DIALOGFLOW_PROJECT_ID = dialogflow.value;
                }
            }
        }
        /******************************* Gateways ******************************/
        this.apiKeys.paymentGateways = (featureData.filter(element => element['type_name'] == 'payment_gateway')).map(({ id, name, is_active, key_value_front }) => new Object({
            id, name, is_active, key_value_front
        }));
        /***********************************************************************/
        const socialLoginProviders = featureData.filter(data => data['type_name'] == 'social_login');
        if (socialLoginProviders.length) {
            socialLoginProviders.forEach(socialLogin => {
                if (!!socialLogin && socialLogin.key_value_front.length) {
                    if ((socialLogin.name).toLowerCase() === 'facebook') {
                        const facebook = (socialLogin.key_value_front).find(el => el.key == 'app_id');
                        if (!!facebook) {
                            _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].facebook_appId = facebook.value;
                        }
                    }
                    else if ((socialLogin.name).toLowerCase() === 'google') {
                        const google = (socialLogin.key_value_front).find(el => el.key == 'client_id');
                        if (!!google) {
                            _app_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].google_clientId = google.value;
                        }
                    }
                }
            });
        }
        const geoLocationProvider = featureData.filter(data => data['type_name'] == 'map');
        if (geoLocationProvider.length) {
            geoLocationProvider.forEach(googleMaps => {
                if (!!googleMaps && googleMaps.key_value_front.length) {
                    if ((googleMaps.name).toLowerCase() === 'new google maps') {
                        const new_map_key = (googleMaps.key_value_front).find(el => el.key == 'google_map_key_web');
                        if (!!new_map_key) {
                            this.apiKeys.google_maps = new_map_key.value;
                        }
                    }
                    else if ((googleMaps.name).toLowerCase() === 'google maps') {
                        const map_key = (googleMaps.key_value_front).find(el => el.key == 'google_map_key');
                        if (!!map_key) {
                            this.apiKeys.google_maps = map_key.value;
                        }
                    }
                }
            });
        }
        const meta = featureData.filter(data => data['type_name'] == 'meta');
        if (meta.length) {
            meta.forEach(meta_tags => {
                if (!!meta_tags && meta_tags.key_value_front.length) {
                    if ((meta_tags.name).toLowerCase() === 'pinterest meta tag') {
                        const pinterest_meta = (meta_tags.key_value_front).find(el => el.key == 'pinterest_content_id');
                        if (!!pinterest_meta) {
                            this.apiKeys.pinterest_content_id = pinterest_meta.value;
                        }
                    }
                    else if ((meta_tags.name).toLowerCase() === 'google search console') {
                        const google_search_meta = (meta_tags.key_value_front).find(el => el.key == 'google_search_content_id');
                        if (!!google_search_meta) {
                            this.apiKeys.google_search_content_id = google_search_meta.value;
                        }
                    }
                }
            });
        }
        const chat_services = featureData.filter(data => data['type_name'] == 'chat_service');
        if (chat_services.length) {
            chat_services.forEach(chat_service => {
                if (!!chat_service && chat_service.key_value_front.length) {
                    if ((chat_service.name).toLowerCase() === 'tawk') {
                        const site_id_obj = (chat_service.key_value_front).find(el => el.key == 'site_id');
                        if (!!site_id_obj) {
                            this.apiKeys.tawk_site_id = site_id_obj.value;
                        }
                    }
                    if ((chat_service.name).toLowerCase() === 'hijiffy') {
                        const token = (chat_service.key_value_front).find(el => el.key == 'token');
                        if (!!token) {
                            this.apiKeys.hijiffy_token = token.value;
                        }
                    }
                    if ((chat_service.name).toLowerCase() === 'zendesk') {
                        const web_zendesk_key = (chat_service.key_value_front).find(el => el.key == 'web_zendesk_key');
                        if (!!web_zendesk_key) {
                            this.apiKeys.zendesk_key = web_zendesk_key.value;
                        }
                    }
                }
            });
        }
        const analytics = featureData.filter(data => data['type_name'] == 'analytics');
        if (analytics.length) {
            analytics.forEach(analytic => {
                if (!!analytic && analytic.key_value_front.length) {
                    if (analytic.name.toLowerCase() === "google tag manager") {
                        const container = analytic.key_value_front.find(item => item.key == 'container_id');
                        if (!!container)
                            this.apiKeys.gtm = container['value'];
                    }
                    if (analytic.name.toLowerCase() === "google tag manager") {
                        const property_id = analytic.key_value_front.find(item => item.key == 'property_id');
                        if (!!property_id)
                            this.apiKeys.google_property_id = property_id['value'];
                    }
                    if (analytic.name.toLowerCase() === "facebook pixel") {
                        const pixel = analytic.key_value_front.find(item => item.key == 'facebook_id');
                        if (!!pixel)
                            this.apiKeys.facebook_pixel_id = pixel['value'];
                    }
                    if (analytic.name.toLowerCase() === "segment") {
                        const segment = analytic.key_value_front.find(item => item.key == 'segment_key');
                        if (!!segment)
                            this.apiKeys.segment_key = segment['value'];
                    }
                    if (analytic.name.toLowerCase() === "oribi") {
                        const oribi = analytic.key_value_front.find(item => item.key == 'scriptToken');
                        if (!!oribi)
                            this.apiKeys.oribi_analytics = oribi['value'];
                    }
                    if (analytic.name.toLowerCase() === "site scout pixel") {
                        const site_scout = analytic.key_value_front.find(item => item.key == 'pixel_id');
                        if (!!site_scout)
                            this.apiKeys.sitescout_pixel_id = site_scout['value'];
                    }
                }
            });
        }
        this.util.setKeys(this.apiKeys);
        //Load Map Script
        if (!!this.apiKeys.google_maps) {
            const script = new _shared_models_script_model__WEBPACK_IMPORTED_MODULE_16__["ScriptModel"]('googleMaps', `https://maps.google.com/maps/api/js?key=${this.apiKeys.google_maps}&libraries=places,visualization,drawing,geometry`);
            this.scriptService.loadScript(script).then((script) => {
                if (script.isLoaded) {
                    this.util.settingsLoaded.next(true);
                    /********************************  set location ****************************************/
                    if (appData.default_address && appData.default_address.length && !(this.util.handler.longitude && this.util.handler.longitude) && appData.key_value.no_default_address != 1 && appData.key_value.fetch_current_location_first != 1) {
                        this.util.setUserLocation(appData.default_address[0]);
                    }
                    else if (this.util.getLocalData('user_location')) {
                        let user_location = this.util.getLocalData('user_location', true);
                        this.util.setUserLocation(user_location);
                    }
                    else if (appData.screenFlow && appData.screenFlow.length && appData.screenFlow[0].app_type != 1) {
                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition(position => {
                                this.location.getGeoLocation(position.coords.latitude, position.coords.longitude).subscribe((address) => {
                                    this.ngZone.run(() => {
                                        this.util.setUserLocation(address);
                                    });
                                }, (err) => {
                                    this.defaultLocation(appData);
                                });
                            }, err => {
                                this.defaultLocation(appData);
                            }, { enableHighAccuracy: true });
                        }
                        else {
                            this.defaultLocation(appData);
                        }
                    }
                }
            });
        }
    }
    defaultLocation(appData) {
        if (appData.key_value.fetch_current_location_first == 1) {
            if (appData.default_address && appData.default_address.length) {
                this.util.setUserLocation(appData.default_address[0]);
            }
            else {
                this.util.setDefaultLocation();
            }
        }
        else {
            this.util.setDefaultLocation();
        }
    }
    setFavicon(favicon) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformServer"])(this.platformId)) {
            return;
        }
        ;
        // let favicon = `https://royo.imgix.net/${icon}?w=64&h=64&fit=crop&auto=format&fm=ico`;
        let link = this.window.document.getElementById('favicon');
        link.setAttribute('href', favicon);
        this.util.setLocalData('favicon', favicon);
    }
};
AppLoadService.ctorParameters = () => [
    { type: _http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"],] }] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_window_window_service__WEBPACK_IMPORTED_MODULE_7__["WINDOW"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["Title"] },
    { type: _theme_theme_service__WEBPACK_IMPORTED_MODULE_12__["ThemeService"] },
    { type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_13__["UtilityService"] },
    { type: _script_script_service__WEBPACK_IMPORTED_MODULE_15__["ScriptService"] },
    { type: _seo_seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"] },
    { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_17__["DeviceDetectorService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _location_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"] }
];
AppLoadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], String, Window,
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["Title"],
        _theme_theme_service__WEBPACK_IMPORTED_MODULE_12__["ThemeService"],
        _utility_utility_service__WEBPACK_IMPORTED_MODULE_13__["UtilityService"],
        _script_script_service__WEBPACK_IMPORTED_MODULE_15__["ScriptService"],
        _seo_seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"],
        ngx_device_detector__WEBPACK_IMPORTED_MODULE_17__["DeviceDetectorService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _location_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"]])
], AppLoadService);



/***/ }),

/***/ "./src/app/services/data-cache/data-cache.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/data-cache/data-cache.service.ts ***!
  \***********************************************************/
/*! exports provided: DataCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataCacheService", function() { return DataCacheService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const maxAge = 15 * 60 * 1000;
let DataCacheService = class DataCacheService {
    constructor() {
        this.requests = new Map();
    }
    put(url, response) {
        this.requests.set(url, { response, updatedOn: Date.now() });
    }
    get(url) {
        const cached = this.requests.get(url);
        if (!cached) {
            return undefined;
        }
        const isExpired = cached.updatedOn < (Date.now() - maxAge);
        if (isExpired) {
            this.removeKey(url);
            return undefined;
        }
        return cached.response;
    }
    hasKey(url) {
        return this.requests.has(url);
    }
    invalidateCache() {
        return this.requests.clear();
    }
    removeKey(url) {
        return this.requests.delete(url);
    }
};
DataCacheService.ctorParameters = () => [];
DataCacheService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DataCacheService);



/***/ }),

/***/ "./src/app/services/http/http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/http/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loader/loader.service */ "./src/app/services/loader/loader.service.ts");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _data_cache_data_cache_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data-cache/data-cache.service */ "./src/app/services/data-cache/data-cache.service.ts");









let HttpService = class HttpService {
    constructor(http, loader, data_cache) {
        this.http = http;
        this.loader = loader;
        this.data_cache = data_cache;
    }
    getDBKey(url, params) {
        let _params = params ? { params: this.appendParams(params) } : {};
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ONBOARDING_BASE_API_URL + url, _params);
    }
    /******************** HTTP Requests ********************/
    getData(url, params, backGroundUrls, is_cache) {
        if (!!this.data_cache.get(url) && is_cache) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => observer.next(this.data_cache.get(url)));
        }
        else {
            let _params = params ? { params: this.appendParams(params) } : {};
            if (backGroundUrls) {
                this.loader.backGroundUrls.push(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_API_URL + url);
            }
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_API_URL + url, _params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
                if (response['status'] === 200 || response['status'] === 4) {
                    if (is_cache) {
                        this.data_cache.put(url, response);
                    }
                    return response;
                }
            }));
        }
    }
    postData(url, data, backGroundUrls) {
        if (backGroundUrls) {
            this.loader.backGroundUrls.push(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_API_URL + url);
        }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_API_URL + url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            if (response['status'] === 200) {
                return response;
            }
        }));
    }
    putData(url, data, backGroundUrls) {
        if (backGroundUrls) {
            this.loader.backGroundUrls.push(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_API_URL + url);
        }
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_API_URL + url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            if (response['status'] === 200)
                return response;
        }));
    }
    deleteData(url, id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_API_URL + url + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            if (response['status'] === 200)
                return response;
        }));
    }
    postAgentData(url, data, _headers, backGroundUrls) {
        if (backGroundUrls) {
            this.loader.backGroundUrls.push(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].AGENT_BASE_API_URL + url);
        }
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        _headers.forEach(element => {
            headers = headers.append(element.key, element.value);
        });
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].AGENT_BASE_API_URL + url, data, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            if (response['statusCode'] === 200) {
                return response;
            }
        }));
    }
    getAgentData(url, params, _headers, backGroundUrls) {
        let _params = this.appendParams(params);
        if (backGroundUrls) {
            this.loader.backGroundUrls.push(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].AGENT_BASE_API_URL + url);
        }
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        _headers.forEach(element => {
            headers = headers.append(element.key, element.value);
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].AGENT_BASE_API_URL + url, { headers: headers, params: _params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            if (response['statusCode'] === 200) {
                return response;
            }
        }));
    }
    /******************** HTTP Request For Dialog Flow ********************/
    dialogFlowMsg(access_token, data) {
        const api_path = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].DIALOGFLOW_API_URL_V2 + `/projects/${_core_global__WEBPACK_IMPORTED_MODULE_7__["GlobalVariable"].DIALOGFLOW_PROJECT_ID}/agent/sessions/1234:detectIntent`;
        this.loader.backGroundUrls.push(api_path);
        if (!_core_global__WEBPACK_IMPORTED_MODULE_7__["GlobalVariable"].BLOCK_HEADERS.includes(api_path)) {
            _core_global__WEBPACK_IMPORTED_MODULE_7__["GlobalVariable"].BLOCK_HEADERS.push(api_path);
        }
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        headers = headers.append('Authorization', `Bearer ${access_token}`);
        return this.http.post(api_path, data, { headers: headers });
    }
    getDialogFlowAgent(access_token) {
        const api_path = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].DIALOGFLOW_API_URL_V2 + `/projects/${_core_global__WEBPACK_IMPORTED_MODULE_7__["GlobalVariable"].DIALOGFLOW_PROJECT_ID}/agent`;
        this.loader.backGroundUrls.push(api_path);
        if (!_core_global__WEBPACK_IMPORTED_MODULE_7__["GlobalVariable"].BLOCK_HEADERS.includes(api_path)) {
            _core_global__WEBPACK_IMPORTED_MODULE_7__["GlobalVariable"].BLOCK_HEADERS.push(api_path);
        }
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        headers = headers.append('Authorization', `Bearer ${access_token}`);
        return this.http.get(api_path, { headers: headers });
    }
    /******************** HTTP Formdata ********************/
    appendFormData(myFormData) {
        let fd = new FormData();
        for (let key in myFormData) {
            fd.append(key, myFormData[key]);
        }
        return fd;
    }
    /******************** HTTP Params ********************/
    appendParams(myParams) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        for (let key in myParams) {
            params = params.append(key, myParams[key]);
        }
        return params;
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
    { type: _data_cache_data_cache_service__WEBPACK_IMPORTED_MODULE_8__["DataCacheService"] }
];
HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
        _data_cache_data_cache_service__WEBPACK_IMPORTED_MODULE_8__["DataCacheService"]])
], HttpService);



/***/ }),

/***/ "./src/app/services/loader/loader.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/loader/loader.service.ts ***!
  \***************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoaderService = class LoaderService {
    constructor() {
        this.backGroundUrls = [];
        this.initialLoadingComplete = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.pageRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ show: false, refresh: false });
        this.loaderState = this.loaderSubject.asObservable();
    }
    show() {
        this.loaderSubject.next({ show: true, refresh: false });
    }
    hide() {
        this.loaderSubject.next({ show: false, refresh: false });
        this.pageRefresh.next(false);
    }
    refreshShow() {
        this.loaderSubject.next({ show: false, refresh: true });
    }
};
LoaderService.ctorParameters = () => [];
LoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], LoaderService);



/***/ }),

/***/ "./src/app/services/location/location.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/location/location.service.ts ***!
  \*******************************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let LocationService = class LocationService {
    constructor(util) {
        this.util = util;
    }
    openTracker() {
        const subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.getGeoLocation(pos.lat, pos.lng).subscribe((address) => {
                    subject.next(address);
                });
            }, error => {
                subject.error(error);
            }, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
        }
        else {
            this.getGeoLocation(this.util.handler.latitude, this.util.handler.longitude).subscribe((address) => {
                subject.next(address);
            });
        }
        return subject.asObservable();
    }
    getGeoLocation(lat, lng) {
        const subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        const geocoder = new google.maps.Geocoder();
        const latlng = new google.maps.LatLng(lat, lng);
        const request = { latLng: latlng };
        geocoder.geocode(request, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    let address = results[0].formatted_address;
                    subject.next({ lat, lng, address });
                }
            }
        });
        return subject.asObservable();
    }
    getDistance(origin, destination) {
        let latlngA = new google.maps.LatLng(origin.lat, origin.lng);
        let latlngB = new google.maps.LatLng(destination.lat, destination.lng);
        const subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        let service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
            origins: [latlngA],
            destinations: [latlngB],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
        }, (response, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
                let distanceArr = response.rows;
                let distanceObj = {};
                for (let val of distanceArr) {
                    distanceObj = (val.elements).find(element => element.status === google.maps.GeocoderStatus.OK);
                    if (!!distanceObj)
                        break;
                }
                ;
                if (!!distanceObj) {
                    subject.next(distanceObj['distance']);
                }
                else {
                    subject.next(null);
                }
            }
        });
        return subject.asObservable();
    }
};
LocationService.ctorParameters = () => [
    { type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] }
];
LocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])
], LocationService);



/***/ }),

/***/ "./src/app/services/messaging/messaging.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/messaging/messaging.service.ts ***!
  \*********************************************************/
/*! exports provided: MessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return MessagingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let MessagingService = class MessagingService {
    constructor(util, translate, router) {
        this.util = util;
        this.translate = translate;
        this.router = router;
        this.util.getStyles.subscribe(style => {
            this.style = style;
        });
    }
    /******************* toast messages ********************/
    toast(type, title) {
        const toast = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            showCloseButton: true,
            animation: false,
            timer: 6000,
        });
        toast.fire({
            icon: type,
            title: title,
        });
    }
    /******************* confirmation dialog box (returns a promise) ********************/
    confirm(title, text, addremoveFromCartClass, removeHeader) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: removeHeader ? `${title}?` : `${this.translate.instant('Are You Sure You Want To')} ${title}?`,
                text: text,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: this.style.primaryColor,
                cancelButtonColor: this.style.secondaryColor,
                confirmButtonText: this.translate.instant('Yes'),
                cancelButtonText: this.translate.instant(`${removeHeader ? 'No' : 'Cancel'}`),
                animation: false,
                allowOutsideClick: false,
                // customClass: 'uk-animation-slide-top-small'
                customClass: {
                    confirmButton: addremoveFromCartClass ? 'removeFromCartGA' : ''
                }
            });
            return result;
        });
    }
    /******************* alert dialog box with button ********************/
    alert(type, title, text) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            icon: type,
            title: title,
            text: text,
            confirmButtonColor: this.style.primaryColor,
            confirmButtonText: this.translate.instant('Ok'),
        });
    }
    /******************* FOR DEVELOPMENT: SELECTION OF BACKEND INSTANCES ********************/
    backendInstance() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let options = {};
            Object.keys(_core_global__WEBPACK_IMPORTED_MODULE_6__["GlobalVariable"].INSTANCE_OPTIONS).forEach(key => {
                options[key] = _core_global__WEBPACK_IMPORTED_MODULE_6__["GlobalVariable"].INSTANCE_OPTIONS[key].user;
            });
            const { value: instance } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Select Backend Instance',
                input: 'select',
                inputOptions: options,
                confirmButtonColor: this.style.primaryColor,
                cancelButtonColor: this.style.secondaryColor,
                showCancelButton: true
            });
            let current_instance = instance;
            if (current_instance) {
                _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_API_URL = _core_global__WEBPACK_IMPORTED_MODULE_6__["GlobalVariable"].INSTANCE_OPTIONS[current_instance].user;
                _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].AGENT_BASE_API_URL = _core_global__WEBPACK_IMPORTED_MODULE_6__["GlobalVariable"].INSTANCE_OPTIONS[current_instance].agent;
                localStorage.setItem('current_selected_instance', current_instance);
            }
        });
    }
    /******************* RATE ALERT WHEN THE ORDER IS DELIVERED ********************/
    rateAgent(type, title, text, product) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: this.translate.instant(`${title}`),
            text: this.translate.instant(`${text}`),
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('Yes!'),
            cancelButtonText: this.translate.instant('Not now')
        }).then((result) => {
            if (result.value) {
                let obj = {
                    type: type,
                    orderId: product.data.orderId || ''
                };
                this.router.navigate(['orders/rating'], { queryParams: obj });
            }
        });
    }
};
MessagingService.ctorParameters = () => [
    { type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
MessagingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], MessagingService);



/***/ }),

/***/ "./src/app/services/script/script.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/script/script.service.ts ***!
  \***************************************************/
/*! exports provided: ScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _window_window_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../window/window.service */ "./src/app/services/window/window.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





// declare var document: any;
let ScriptService = class ScriptService {
    constructor(util, window, document) {
        this.util = util;
        this.window = window;
        this.document = document;
    }
    loadScript(script) {
        return new Promise((resolve, reject) => {
            //resolve if already loaded
            if (this.document.getElementById(script.id)) {
                script.isLoaded = true;
                return resolve(script);
            }
            else {
                //load script
                let scriptElement = this.document.createElement('script');
                scriptElement.id = script.id;
                scriptElement.type = 'text/javascript';
                scriptElement.src = script.src;
                if (scriptElement.readyState) { //IE
                    scriptElement.onreadystatechange = () => {
                        if (scriptElement.readyState === "loaded" || scriptElement.readyState === "complete") {
                            scriptElement.onreadystatechange = null;
                            script.isLoaded = true;
                            return resolve(script);
                        }
                    };
                }
                else { //Others
                    scriptElement.onload = () => {
                        script.isLoaded = true;
                        return resolve(script);
                    };
                }
                scriptElement.onerror = (error) => resolve(script);
                this.document.getElementsByTagName('head')[0].appendChild(scriptElement);
            }
        });
    }
};
ScriptService.ctorParameters = () => [
    { type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_window_window_service__WEBPACK_IMPORTED_MODULE_3__["WINDOW"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
];
ScriptService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"],
        Window, Object])
], ScriptService);



/***/ }),

/***/ "./src/app/services/selective-preloading/selective-preloading.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/selective-preloading/selective-preloading.service.ts ***!
  \*******************************************************************************/
/*! exports provided: SelectivePreloadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectivePreloadingService", function() { return SelectivePreloadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/timer */ "./node_modules/rxjs/observable/timer.js");
/* harmony import */ var rxjs_observable_timer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable_timer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs/add/operator/mergeMap.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_4__);





let SelectivePreloadingService = class SelectivePreloadingService {
    preload(route, load) {
        if (route.data && route.data['preload']) {
            if (route.data['delay']) {
                return Object(rxjs_observable_timer__WEBPACK_IMPORTED_MODULE_2__["timer"])(4000).mergeMap(() => load());
            }
            return load();
        }
        else
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
    }
};
SelectivePreloadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SelectivePreloadingService);



/***/ }),

/***/ "./src/app/services/seo/seo.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/seo/seo.service.ts ***!
  \*********************************************/
/*! exports provided: SeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return SeoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





let SeoService = class SeoService {
    constructor(title, meta, util) {
        this.title = title;
        this.meta = meta;
        this.util = util;
        this.settingsSubscription = this.util.getSettings
            .subscribe((settings) => {
            this.settings = settings;
        });
    }
    updateTitle(title) {
        if (!this.settings.webMetaTitle) {
            this.title.setTitle(title);
        }
    }
    updateDescription(desc) {
        this.meta.updateTag({ name: 'description', content: desc });
    }
    updateKeyWords(keyword) {
        this.meta.updateTag({ name: 'keyword', content: keyword });
    }
    setDefault() {
        this.title.setTitle(_core_global__WEBPACK_IMPORTED_MODULE_2__["GlobalVariable"].SITE_NAME);
        if (!!this.settings.webMetaTitle) {
            this.meta.updateTag({ name: 'title', content: this.settings.webMetaTitle });
            this.title.setTitle(this.settings.webMetaTitle);
        }
        if (!!this.settings.webMetaDescription) {
            this.meta.updateTag({ name: 'description', content: this.settings.webMetaDescription });
        }
        if (!!this.settings.webMetaKeywords) {
            this.meta.updateTag({ name: 'keyword', content: this.settings.webMetaKeywords });
        }
    }
    // updateOgUrl(url: string) {
    //   this.meta.updateTag({ name: 'og:url', content: url })
    // }
    ngOnDestroy() {
        if (!!this.settingsSubscription)
            this.settingsSubscription.unsubscribe();
    }
};
SeoService.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
    { type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"] }
];
SeoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"],
        _utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]])
], SeoService);



/***/ }),

/***/ "./src/app/services/terms-and-policy/terms-and-policy.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/terms-and-policy/terms-and-policy.service.ts ***!
  \***********************************************************************/
/*! exports provided: TermsAndPolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndPolicyService", function() { return TermsAndPolicyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility/utility.service */ "./src/app/services/utility/utility.service.ts");






let TermsAndPolicyService = class TermsAndPolicyService {
    constructor(http, utilService) {
        this.http = http;
        this.utilService = utilService;
    }
    resolve() {
        return new Promise((resolve, reject) => {
            this.utilService.getSettings.subscribe((settings) => {
                if (settings) {
                    this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].getTermsConditions, {}, true, false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response.data)).subscribe((response) => {
                        return resolve(response);
                    }, (err) => {
                        return reject(err);
                    });
                }
            });
        });
    }
};
TermsAndPolicyService.ctorParameters = () => [
    { type: _http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] }
];
TermsAndPolicyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
        _utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"]])
], TermsAndPolicyService);



/***/ }),

/***/ "./src/app/services/theme/theme.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/theme/theme.service.ts ***!
  \*************************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/theme/styleVariables.model */ "./src/app/core/theme/styleVariables.model.ts");
/* harmony import */ var _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/theme/styleConstants.model */ "./src/app/core/theme/styleConstants.model.ts");






let ThemeService = class ThemeService {
    constructor(util, platformId, document) {
        this.util = util;
        this.platformId = platformId;
        this.document = document;
        this.isDarkTheme = false;
        this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_4__["StyleVariables"]();
        this.body = new _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_5__["StyleConstants"]();
        this.settingSubscription = this.util.getSettings.subscribe((settings) => {
            this.settings = settings;
        });
        this.themeSubscription = this.util.getDarkTheme.subscribe((isDark) => {
            this.isDarkTheme = isDark;
            if (this.settings)
                this._setThemeColor(this.isDarkTheme);
        });
    }
    addScripts(script, app_type) {
        script.map((link, index) => {
            const head = this.document.getElementsByTagName('head')[0];
            const scriptLink = this.document.createElement('script');
            scriptLink.id = `app-script-${app_type}${index}`;
            scriptLink.setAttribute("type", "text/javascript");
            scriptLink.setAttribute("src", link);
            head.appendChild(scriptLink);
        });
    }
    addScriptsToBody(script, app_type) {
        script.map((link, index) => {
            const body = this.document.getElementsByTagName('body')[0];
            const scriptLink = this.document.createElement('script');
            scriptLink.id = `app-script-${app_type}${index}`;
            scriptLink.setAttribute("type", "text/javascript");
            scriptLink.setAttribute("src", link);
            body.appendChild(scriptLink);
        });
    }
    addStyleSheets(style_sheets, app_type) {
        style_sheets.map((link, index) => {
            if (this.document.getElementById(`app-${app_type}${index}`))
                return;
            const head = this.document.getElementsByTagName('head')[0];
            const styleLink = this.document.createElement('link');
            styleLink.id = `app-${app_type}${index}`;
            styleLink.rel = 'stylesheet';
            styleLink.type = 'text/css';
            styleLink.href = link;
            head.appendChild(styleLink);
        });
    }
    getStyleSheets(app_type) {
        let style_sheets = [];
        switch (app_type) {
            case 1: //Food
                switch (this.settings.selected_template) {
                    case 0:
                        style_sheets.push('/assets/styles/food.css');
                        break;
                    case 1:
                        style_sheets.push('/assets/styles/food-template-one/inner.css');
                        style_sheets.push('/assets/styles/food-template-one/style.css');
                        break;
                    case 2:
                        if (this.settings.is_single_vendor == 1) {
                            style_sheets.push('/assets/styles/food-single-template-two/inner.css');
                            style_sheets.push('/assets/styles/food-single-template-two/style.css');
                        }
                        else {
                            style_sheets.push('/assets/styles/food-template-two/inner.css');
                            style_sheets.push('/assets/styles/food-template-two/style.css');
                        }
                        break;
                    case 3:
                        style_sheets.push('/assets/styles/food-template-three/inner.css');
                        style_sheets.push('/assets/styles/food-template-three/style.css');
                        break;
                    case 4:
                        style_sheets.push('/assets/styles/food-template-four/style.css');
                        style_sheets.push('/assets/styles/food-template-four/inner.css');
                        break;
                }
                break;
            case 2: //Ecommerce
                switch (this.settings.selected_template) {
                    case 0:
                        style_sheets.push('/assets/styles/ecommerce.css');
                        break;
                    case 1:
                    case 2:
                        style_sheets.push('/assets/styles/ecom-template-one/inner.css');
                        style_sheets.push('https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Montserrat:300,400,500,600,700|Merriweather:300,400,300i,400i');
                        style_sheets.push('/assets/styles/ecom-template-one/animate.css');
                        style_sheets.push('/assets/styles/ecom-template-one/ecommerce.css');
                        style_sheets.push('/assets/styles/ecom-template-one/font-icons.css');
                        style_sheets.push('/assets/styles/ecom-template-one/fonts.css');
                        style_sheets.push('/assets/styles/ecom-template-one/responsive.css');
                        style_sheets.push('/assets/styles/ecom-template-one/shop.css');
                        style_sheets.push('/assets/styles/ecom-template-one/style.css');
                        style_sheets.push('/assets/styles/ecom-template-one/swipper.css');
                        break;
                    case 3:
                        style_sheets.push('/assets/styles/ecom-template-one/inner.css');
                        style_sheets.push('https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Montserrat:300,400,500,600,700|Merriweather:300,400,300i,400i');
                        style_sheets.push('/assets/styles/ecom-template-one/animate.css');
                        style_sheets.push('/assets/styles/ecom-template-one/ecommerce.css');
                        style_sheets.push('/assets/styles/ecom-template-one/font-icons.css');
                        style_sheets.push('/assets/styles/ecom-template-one/fonts.css');
                        style_sheets.push('/assets/styles/ecom-template-one/responsive.css');
                        style_sheets.push('/assets/styles/ecom-template-one/shop.css');
                        // style_sheets.push('/assets/styles/ecom-template-one/style.css');
                        style_sheets.push('/assets/styles/ecom-template-three/style.css');
                        style_sheets.push('/assets/styles/ecom-template-three/inner.css');
                        style_sheets.push('/assets/styles/ecom-template-one/swipper.css');
                        break;
                    case 4:
                        style_sheets.push('/assets/styles/ecom-template-four/inner.css');
                        style_sheets.push('/assets/styles/ecom-template-four/style.css');
                        break;
                    case 5:
                        style_sheets.push('/assets/styles/ecommerce.css');
                        // style_sheets.push('/assets/styles/ecommerce.css');
                        // style_sheets.push('/assets/styles/ecom-template-five/css/color.css');
                        // style_sheets.push('/assets/styles/ecom-template-five/css/sequence-theme.modern-slide-in.css');
                        style_sheets.push('/assets/styles/ecom-template-five/css/style.css');
                        break;
                }
                break;
            case 5: //Rental
                style_sheets.push('/assets/styles/rental.css');
                break;
            case 8: //Home Service
                style_sheets.push('/assets/styles/home-service.css');
                break;
            default:
                style_sheets.push('/assets/styles/custom.css');
        }
        return style_sheets;
    }
    setStyles(appColor) {
        let style_sheets = this.getStyleSheets(this.settings.app_type);
        this.addStyleSheets(style_sheets, this.settings.app_type);
        if (this.settings.isCustomFlow) {
            let flow_data = this.util.getLocalData('selected_category', true);
            if (!!flow_data && flow_data.type < 11) {
                this.addStyleSheets(['/assets/styles/custom.css'], this.settings.type);
            }
        }
        this._setThemeColor(this.isDarkTheme, appColor || this.style);
        this.styleSubscription = this.util.getStyles.subscribe((style) => {
            this.body.fontFamily = style.fontFamily;
            this.body.backgroundColor = style.backgroundColor;
        });
        // if (isPlatformBrowser(this.platformId)) {
        //   setTimeout(() => {
        //     document.getElementById("splash_screen").style.display = "none";
        //   }, 500);
        // }
    }
    _setThemeColor(is_dark, appColor) {
        if (is_dark) {
            this.style.primaryColor = appColor.primaryColor || '#DF284E';
            this.style.backgroundColor = '#191926';
            this.style.cardBackgroundColor = '#232331';
            this.style.baseColor = '#ffffff';
            this.style.secondaryColor = "#191926";
        }
        else {
            switch (this.settings.app_type) {
                case 1: //Food
                    this.style.primaryColor = appColor.primaryColor || '#DF284E';
                    this.style.backgroundColor = '#ffffff';
                    this.style.cardBackgroundColor = '#ffffff';
                    this.style.baseColor = appColor.baseColor || '#2f313a';
                    this.style.secondaryColor = '#ccc';
                    this.style.headerBackgroundColor = appColor.headerBackgroundColor;
                    this.style.headerFontFamily = appColor.headerFontFamily;
                    this.style.headerTextColor = appColor.headerTextColor || this.style.baseColor;
                    this.style.topHeaderBackgroundColor = appColor.topHeaderBackgroundColor || appColor.headerBackgroundColor;
                    this.style.topHeaderTextColor = appColor.topHeaderTextColor || this.style.headerTextColor;
                    break;
                case 2: //Ecommerce
                    this.style.primaryColor = appColor.primaryColor || '#25494D';
                    this.style.baseColor = appColor.baseColor || '#484848';
                    this.style.backgroundColor = '#ffffff';
                    this.style.cardBackgroundColor = '#f8f8f8';
                    this.style.headerBackgroundColor = appColor.headerBackgroundColor;
                    this.style.headerFontFamily = appColor.headerFontFamily;
                    this.style.headerTextColor = appColor.headerTextColor || this.style.baseColor;
                    this.style.topHeaderBackgroundColor = appColor.topHeaderBackgroundColor || appColor.headerBackgroundColor;
                    this.style.topHeaderTextColor = appColor.topHeaderTextColor || this.style.headerTextColor;
                    break;
                case 5: //Rental
                    this.style.primaryColor = '#F03A76';
                    this.style.cardBackgroundColor = '#ffffff';
                    this.style.fontFamily = 'gilroy-bold';
                    break;
                case 8: //Home Service
                    this.style.primaryColor = appColor.primaryColor || '#45AFB0';
                    this.style.baseColor = appColor.baseColor || '#000000';
                    this.style.backgroundColor = '#f3f3f3';
                    this.style.cardBackgroundColor = '#f3f3f3';
                    this.style.headerBackgroundColor = appColor.headerBackgroundColor;
                    this.style.headerFontFamily = appColor.headerFontFamily;
                    this.style.headerTextColor = appColor.headerTextColor || this.style.baseColor;
                    this.style.topHeaderBackgroundColor = appColor.topHeaderBackgroundColor || appColor.headerBackgroundColor;
                    this.style.topHeaderTextColor = appColor.topHeaderTextColor || this.style.headerTextColor;
                    break;
                default:
                    this.style.primaryColor = appColor.primaryColor || '#25494D';
                    this.style.baseColor = appColor.baseColor || '#484848';
                    this.style.backgroundColor = '#ffffff';
                    this.style.cardBackgroundColor = '#f8f8f8';
                    this.style.headerBackgroundColor = appColor.headerBackgroundColor;
                    this.style.headerFontFamily = appColor.headerFontFamily;
                    this.style.headerTextColor = appColor.headerTextColor || this.style.baseColor;
                    this.style.topHeaderBackgroundColor = appColor.topHeaderBackgroundColor || appColor.headerBackgroundColor;
                    this.style.topHeaderTextColor = appColor.topHeaderTextColor || this.style.headerTextColor;
                    this.style.footerColor = appColor.footerColor || '#ffffff';
                    this.style.footerSecColor = appColor.footerSecColor || this.style.primaryColor;
                    this.style.footerTextColor = appColor.footerTextColor || this.style.baseColor;
            }
            if (this.settings.is_custom_category_template === '1') {
                // this.style.backgroundColor = "rgb(242 255 255)";
                this.style.backgroundColor = "#f0f0f0";
                this.style.footerColor = "#f0f0f0";
            }
            if (this.settings.footer_color_same_as_header == 1) {
                this.style.footerColor = this.style.headerBackgroundColor;
                this.style.footerTextColor = this.style.headerTextColor;
            }
        }
        this.setRootColorProperties(this.style);
        this.util.setStyles(this.style);
    }
    setRootColorProperties(style) {
        this.document.documentElement.style.setProperty('--primaryColor', style.primaryColor);
        this.document.documentElement.style.setProperty('--baseColor', style.baseColor);
        this.document.documentElement.style.setProperty('--secondaryColor', style.secondaryColor);
        this.document.documentElement.style.setProperty('--backgroundColor', style.backgroundColor);
        this.document.documentElement.style.setProperty('--cardBackgroundColor', style.cardBackgroundColor);
        this.document.documentElement.style.setProperty('--headerTextColor', style.headerTextColor);
        this.document.documentElement.style.setProperty('--headerBackgroundColor', style.headerBackgroundColor);
        this.document.documentElement.style.setProperty('--topHeaderTextColor', style.topHeaderTextColor);
        this.document.documentElement.style.setProperty('--topHeaderBackgroundColor', style.topHeaderBackgroundColor);
    }
    removeStyleLink(app_type) {
        let style_sheets = this.getStyleSheets(app_type);
        style_sheets.map((sheet, index) => {
            let id = 'app-' + app_type + index;
            let styleLinkElement = this.document.getElementById(id);
            if (styleLinkElement) {
                styleLinkElement.parentNode.removeChild(styleLinkElement);
            }
        });
    }
    ngOnDestroy() {
        if (!!this.settingSubscription)
            this.settingSubscription.unsubscribe();
        if (!!this.styleSubscription)
            this.styleSubscription.unsubscribe();
        if (!!this.themeSubscription)
            this.themeSubscription.unsubscribe();
    }
};
ThemeService.ctorParameters = () => [
    { type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
ThemeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], String, Object])
], ThemeService);



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/__ivy_ngcc__/fesm2015/ng-toolkit-universal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility/utility.service */ "./src/app/services/utility/utility.service.ts");






let UserService = class UserService {
    constructor(util, localStorage, router) {
        this.util = util;
        this.localStorage = localStorage;
        this.router = router;
        this.logoutSocialUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.util.getSettings.subscribe((settings) => {
            this.settings = settings;
        });
        /********* Check JSON parse error on fetching currentUser from local storage **********/
        let _user = null;
        try {
            _user = JSON.parse(localStorage.getItem('web_user'));
        }
        catch (error) {
            if (error instanceof SyntaxError)
                this.removeUser();
        }
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_user);
        this.currentUser = this.currentUserSubject.asObservable();
    }
    /********* Get the current value of the logged in user **********/
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    /********* Get the current user token **********/
    get getUserToken() {
        if (!!this.currentUserValue)
            return this.currentUserValue.access_token;
    }
    /********* Set user in local storage **********/
    setUserLocalData(userData) {
        this.localStorage.setItem('web_user', JSON.stringify(userData));
        this.currentUserSubject.next(userData);
    }
    /********* Remove user from local storage **********/
    removeUser() {
        this.localStorage.removeItem('web_user');
        this.localStorage.removeItem('cart_address');
        this.logoutSocialUser.next(true);
        if (this.currentUserSubject) {
            this.currentUserSubject.next(null);
        }
    }
    /********* User Sign-Out **********/
    userSignOut() {
        this.removeUser();
        this.router.navigate(['']);
    }
    isUserType(type) {
        if (type == 'seller') {
            return true;
        }
    }
    ngOnDestroy() {
        if (!!this.settingsSubscription)
            this.settingsSubscription.unsubscribe();
    }
};
UserService.ctorParameters = () => [
    { type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], UserService);



/***/ }),

/***/ "./src/app/services/utility/utility.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/utility/utility.service.ts ***!
  \*****************************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/models/filters.model */ "./src/app/shared/models/filters.model.ts");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/__ivy_ngcc__/fesm2015/ng-toolkit-universal.js");
/* harmony import */ var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/theme/styleVariables.model */ "./src/app/core/theme/styleVariables.model.ts");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_models_appHandler_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../shared/models/appHandler.model */ "./src/app/shared/models/appHandler.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_9__);










let UtilityService = class UtilityService {
    constructor(localStorage, window, _location) {
        this.localStorage = localStorage;
        this.window = window;
        this._location = _location;
        this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_3__["StyleVariables"]();
        this.defaultFilters = new _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_1__["FiltersModel"]();
        this.siteName = "";
        this._redirectUrl = "/";
        this.recomendedSupplier = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        // Settings change call function
        this.settingsLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        // location change call function
        this.callGetData = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        // location toggle function
        this.locationToggle = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        // location toggle function
        this.authToggle = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.walletRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.diableCart = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        /********* Share UI data **********/
        this.ui = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](this.style);
        this.getStyles = this.ui.asObservable();
        /********* Share Key data **********/
        this.key = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.getKeys = this.key.asObservable();
        /********* Share settings data **********/
        this.settings = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.getSettings = this.settings.asObservable();
        /********* Share Promotion data **********/
        this.promotions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.getPromotions = this.promotions.asObservable();
        /********* Share Offer data **********/
        this.offers = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.getOffers = this.offers.asObservable();
        /********* Share Supplier data **********/
        this.suppliers = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.getSuppliers = this.suppliers.asObservable();
        /********* Share language data **********/
        this.languageCategory = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.getLanguageCategoryData = this.languageCategory.asObservable();
        /********* Share Category data **********/
        // private categories: BehaviorSubject<any> = new BehaviorSubject(null);
        // getCategories: Observable<any> = this.categories.asObservable();
        // setCategories(data: any) {
        //   this.categories.next(data);
        // }
        /********* Filter data **********/
        this.filter = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](this.defaultFilters);
        this.getFilters = this.filter.asObservable();
        /********* Product detail type **********/
        this.productList = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.getProductListType = this.productList.asObservable();
        /********* Share data between siblings through observable **********/
        this.orderTypeDataSrc = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.getOrderTypeData = this.orderTypeDataSrc.asObservable();
        /********* Share data between siblings through observable **********/
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.getData = this.dataSource.asObservable();
        /********* Share data between siblings through observable **********/
        this.checkDbKey = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.getDBKey = this.checkDbKey.asObservable();
        /********* Share cart data **********/
        this.cartSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](this.getLocalData("cart", true));
        this.getCart = this.cartSource.asObservable();
        /******************************* self pick ***************************************/
        this.selfPickup = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](0);
        this.getSelfPickup = this.selfPickup.asObservable();
        /******************************* set multi currency ***************************************/
        this.multiCurrency = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        this.getMultiCurrency = this.multiCurrency.asObservable();
        /******************************* set multi currency ***************************************/
        this.selectedCurrency = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.getSelectedCurrency = this.selectedCurrency.asObservable();
        /******************************* set zone geofence ***************************************/
        this.zoneGeofence = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.getZoneGeofences = this.zoneGeofence.asObservable();
        /************************************* foreground notification*************************************/
        this.foregroundNotification = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({ showChat: true, showOrder: true });
        this.getForegroundNotification = this.foregroundNotification.asObservable();
        /************************** user location  ********************************/
        this.userLocation = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](this.getLocalData("user_location", true));
        this.getUserLocation = this.userLocation.asObservable();
        /************************** dark theme ****************************/
        this.darkTheme = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](this.getLocalData('dark_theme', true));
        this.getDarkTheme = this.darkTheme.asObservable();
        this.flow = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](this.getLocalData('selected_category', true));
        this.getFlow = this.flow.asObservable();
        this.handler = new _shared_models_appHandler_model__WEBPACK_IMPORTED_MODULE_7__["AppHandler"]();
        this.setFilters(this.defaultFilters);
        this.siteName = _core_global__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SITE_NAME;
        this.initializeLocation();
        let _orderType = null;
        try {
            _orderType = JSON.parse(localStorage.getItem('selected_order_type'));
        }
        catch (error) {
            if (error instanceof SyntaxError)
                null;
        }
        this.orderTypeDataSrc = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](_orderType);
        this.getOrderTypeData = this.orderTypeDataSrc.asObservable();
        let _selectedCurrency = null;
        try {
            _selectedCurrency = JSON.parse(localStorage.getItem('selectedCurrency'));
        }
        catch (error) {
            if (error instanceof SyntaxError)
                null;
        }
        this.selectedCurrency = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](_selectedCurrency);
        this.getSelectedCurrency = this.selectedCurrency.asObservable();
    }
    setStyles(data) {
        this.ui.next(data);
    }
    setKeys(data) {
        this.key.next(data);
    }
    setSettings(data) {
        data.app_type = 2;
        this.settings.next(data);
    }
    setPromotions(data) {
        this.promotions.next(data);
    }
    setOffers(data) {
        this.offers.next(data);
    }
    setSuppliers(data) {
        this.suppliers.next(data);
    }
    setLanguageCategoryData(data) {
        this.languageCategory.next(data);
    }
    setFilters(data) {
        this.filter.next(data);
    }
    setProductListType(data) {
        this.productList.next(data);
    }
    setOrderTypeData(data) {
        localStorage.setItem('selected_order_type', data);
        this.orderTypeDataSrc.next(data);
    }
    setData(data) {
        this.dataSource.next(data);
    }
    setDBKey(data) {
        this.checkDbKey.next(data);
    }
    setCart(data) {
        this.setLocalData("cart", data, true);
        this.cartSource.next(data);
    }
    setSelfPickup(value) {
        /** check for self pick */
        if (this.handler.selfPickup == value) {
            return;
        }
        this.handler.selfPickup = value;
        this.selfPickup.next(value);
    }
    setMultiCurrency(value) {
        this.multiCurrency.next(value);
    }
    setSelectedCurrency(value) {
        this.setLocalData('selectedCurrency', value, true);
        this.selectedCurrency.next(value);
    }
    setZoneGeofence(value) {
        this.zoneGeofence.next(value);
    }
    setForegroundNotification(value) { this.foregroundNotification.next(value); }
    ;
    setUserLocation(location) {
        const latitude = location.lat || location.latitude;
        const longitude = location.lng || location.longitude;
        /** check for location change */
        if (this.handler.latitude == latitude && this.handler.longitude == longitude) {
            return;
        }
        this.setLocalData('user_location', location, true);
        this.handler.address = location.address;
        this.handler.latitude = latitude;
        this.handler.longitude = longitude;
        this.userLocation.next(location);
        this.callGetData.next(true);
    }
    setDefaultLocation() {
        this.setUserLocation({
            address: "Chandigarh, India",
            latitude: 30.7333148,
            longitude: 76.7794179
        });
    }
    initializeLocation() {
        const location = this.getLocalData("user_location", true);
        if (this.handler.latitude && this.handler.longitude) {
            this.setUserLocation({
                lat: this.handler.latitude,
                lng: this.handler.longitude,
                address: this.handler.address
            });
        }
        else if (location) {
            this.handler.latitude = location.lat || location.latitude;
            this.handler.longitude = location.lng || location.longitude;
            this.handler.address = location.address;
            this.callGetData.next(true);
        }
    }
    setDarkTheme(isDark) {
        this.setLocalData('dark_theme', isDark, true);
        this.darkTheme.next(isDark);
    }
    /********* Set data in local storage **********/
    setLocalData(key, data, json) {
        this.localStorage.setItem(key, json ? JSON.stringify(data) : data);
    }
    /********* Get data from local storage **********/
    getLocalData(key, json) {
        let _data = null;
        try {
            _data = json
                ? JSON.parse(this.localStorage.getItem(key))
                : this.localStorage.getItem(key);
            return _data;
        }
        catch (error) {
            if (error instanceof SyntaxError)
                this.clearLocalData(key);
            return null;
        }
    }
    /********* Remove data from local storage **********/
    clearLocalData(key) {
        this.localStorage.removeItem(key);
    }
    thumbnail(img_path) {
        // if (img_path) {
        //   var index = img_path.lastIndexOf("/") + 1;
        //   var start = img_path.substring(0, index);
        //   var end = img_path.substring(index, img_path.length);
        //   return start + 'thumb_' + end;
        // }
        return img_path;
    }
    // make unique
    findUnique(ar1, ar2) {
        let map = {};
        let ar3 = ar1.concat(ar2);
        let responseArray = [];
        for (let i = 0; i < ar3.length; i++) {
            if (ar3[i].name in map) {
                responseArray[map[ar3[i].name]].values = responseArray[map[ar3[i].name]].values.concat(ar3[i].values);
            }
            else {
                map[ar3[i].name] = responseArray.length;
                responseArray.push(ar3[i]);
            }
        }
        return responseArray;
    }
    //  cart total count
    getTotalCountCart() {
        let totalCart = 0;
        let cart = this.getLocalData("cart", true);
        if (cart && cart.length) {
            cart.forEach(element => {
                totalCart += element["selectedQuantity"];
            });
        }
        return totalCart;
    }
    decimalCartCount() {
        let totalCart = 0;
        let cart = this.getLocalData("cart", true);
        if (cart && cart.length) {
            cart.forEach(element => {
                totalCart += element["selectedQuantity"];
            });
        }
        return Math.round(totalCart * 100 + Number.EPSILON) / 100;
    }
    productPriceToFloat(productData) {
        const decimalLength = this.settings.getValue().price_decimal_length;
        ["price", "display_price", "fixed_price"].forEach(price => {
            productData[price] = Number.parseFloat(productData[price]).toFixed(decimalLength);
        });
        return productData;
    }
    goBack() {
        this._location.back();
    }
    convertIntoNumber(value) {
        if (value) {
            return parseFloat(value);
        }
    }
    getFormattedTime(minutes) {
        let s = "";
        if (minutes < 60 || minutes % 60 != 0) {
            s = minutes + " " + "Min (s)";
        }
        else {
            let hours = minutes / 60;
            if (hours >= 24) {
                let day = hours / 24;
                if (day > 1)
                    s = day + " " + "Days";
                else
                    s = day + " " + "Day";
            }
            else {
                if (hours <= 1)
                    s = hours + " " + "Hour";
                else
                    s = hours + " " + "Hours";
            }
        }
        return s;
    }
    encryptData(data) {
        try {
            return crypto_js__WEBPACK_IMPORTED_MODULE_9__["AES"].encrypt(JSON.stringify(data), this.siteName).toString();
        }
        catch (e) {
        }
    }
    decryptData(data) {
        try {
            const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_9__["AES"].decrypt(data, this.siteName);
            if (bytes.toString()) {
                return JSON.parse(bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_9__["enc"].Utf8));
            }
            return data;
        }
        catch (e) {
        }
    }
    generateFakeList(count) {
        const indexes = [];
        for (let i = 0; i < count; i++) {
            indexes.push(i);
        }
        return indexes;
    }
    goToTop() {
        // $("html, body").animate({ scrollTop: 0 }, "slow");
        this.window.scrollTo(0, 0);
    }
    setRedirectUrl(url) {
        this._redirectUrl = url;
    }
    getRedirectUrl() {
        return this._redirectUrl;
    }
    getSelectedCategory() {
        let category = this.getLocalData('selected_category', true);
        return category ? category.id : null;
    }
    setFlow(_flow) {
        this.setLocalData('selected_category', _flow, true);
        this.flow.next(_flow);
    }
    groupBy(features, key) {
        return features.reduce(function (rv, x) {
            if (!!key) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }
        }, {});
    }
    ;
    // private module: BehaviorSubject<any> = new BehaviorSubject(null);
    // getApptype: Observable<any> = this.module.asObservable();
    // setApptype(type: any) {
    //   this.module.next(type);
    // }
    //////////////////////////////// GTM Data layer (starts)///////////////////////////////////////
    addToDatalayer(objToPush) {
        dataLayer.push(objToPush);
    }
};
UtilityService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"],] }] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_2__["WINDOW"],] }] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] }
];
UtilityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
        providedIn: "root"
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Window,
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
], UtilityService);



/***/ }),

/***/ "./src/app/services/window/window.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/window/window.service.ts ***!
  \***************************************************/
/*! exports provided: WINDOW, WindowRef, WindowService, windowFactory, browserWindowProvider, windowProvider, WINDOW_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowFactory", function() { return windowFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserWindowProvider", function() { return browserWindowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowProvider", function() { return windowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function() { return WINDOW_PROVIDERS; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/* Create a new injection token for injecting the window into a component. */
const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('WindowToken');
/* Define abstract class for obtaining reference to the global window object. */
class WindowRef {
    get nativeWindow() {
        throw new Error('Not implemented.');
    }
}
class WindowService extends WindowRef {
    constructor() {
        super();
    }
    get nativeWindow() {
        return window;
    }
}
/* Create an factory function that returns the native window object. */
function windowFactory(browserWindowRef, platformId) {
    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
const browserWindowProvider = {
    provide: WindowRef,
    useClass: WindowService
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
const windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
};
/* Create an array of providers. */
const WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider
];


/***/ }),

/***/ "./src/app/shared/directives/googleplace.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/googleplace.directive.ts ***!
  \************************************************************/
/*! exports provided: GoogleplaceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleplaceDirective", function() { return GoogleplaceDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let GoogleplaceDirective = class GoogleplaceDirective {
    constructor(elRef, _ngZone, util) {
        this._ngZone = _ngZone;
        this.util = util;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.element = elRef.nativeElement;
    }
    getFormattedAddress(place) {
        let location_obj = {};
        for (let i in place.address_components) {
            let item = place.address_components[i];
            location_obj['formatted_address'] = place.formatted_address;
            if (item['types'].indexOf('locality') > -1) {
                location_obj['locality'] = item['long_name'];
            }
            else if (item['types'].indexOf('administrative_area_level_1') > -1) {
                location_obj['admin_area_l1'] = item['short_name'];
            }
            else if (item['types'].indexOf('street_number') > -1) {
                location_obj['street_number'] = item['short_name'];
            }
            else if (item['types'].indexOf('route') > -1) {
                location_obj['route'] = item['long_name'];
            }
            else if (item['types'].indexOf('country') > -1) {
                location_obj['country'] = item['long_name'];
            }
            else if (item['types'].indexOf('postal_code') > -1) {
                location_obj['postal_code'] = item['short_name'];
            }
        }
        location_obj['name'] = place.name;
        if (!!place.geometry) {
            location_obj['lat'] = place.geometry.location.lat();
            location_obj['lng'] = place.geometry.location.lng();
        }
        return location_obj;
    }
    ngOnInit() {
        this.util.settingsLoaded.subscribe(loaded => {
            if (loaded) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                        var geolocation = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        let circle = new google.maps.Circle({ center: geolocation, radius: position.coords.accuracy });
                        let options = {};
                        if (circle) {
                            options['bounds'] = circle.getBounds();
                        }
                        const autocomplete = new google.maps.places.Autocomplete(this.element, options);
                        google.maps.event.addListener(autocomplete, 'place_changed', () => {
                            this._ngZone.run(() => {
                                this.onSelect.emit(this.getFormattedAddress(autocomplete.getPlace()));
                            });
                        });
                    }, err => { }, { enableHighAccuracy: true });
                }
            }
        });
    }
};
GoogleplaceDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"] }
];
GoogleplaceDirective.propDecorators = {
    onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
GoogleplaceDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
        selector: '[appGoogleplace]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]])
], GoogleplaceDirective);



/***/ }),

/***/ "./src/app/shared/directives/image-compression.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/image-compression.directive.ts ***!
  \******************************************************************/
/*! exports provided: ImageCompressionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCompressionDirective", function() { return ImageCompressionDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_models_appSettings_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/appSettings.model */ "./src/app/shared/models/appSettings.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let ImageCompressionDirective = class ImageCompressionDirective {
    constructor(el, imageRef) {
        this.el = el;
        this.imageRef = imageRef;
        this.noCrop = false;
    }
    ngAfterViewInit() {
        this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
    }
    canLazyLoad() {
        return window && 'IntersectionObserver' in window;
    }
    lazyLoadImage() {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(({ isIntersecting }) => {
                if (isIntersecting) {
                    this.loadImage();
                    obs.unobserve(this.el.nativeElement);
                }
            });
        });
        obs.observe(this.el.nativeElement);
    }
    loadImage() {
        if (!!this.url) {
            let image = this.url.match(/\/([^\/?#]+)[^\/]*$/) ? (this.url.match(/\/([^\/?#]+)[^\/]*$/))[1] : null;
            if (!!image) {
                let size = this.size.split('x');
                const imageLink = `https://cpshift-assets.s3-us-west-2.amazonaws.com/${image}?w=${size[0]}&h=${size[1]}${!this.noCrop ? '&fit=crop' : ''}&auto=format`;
                if (this.settings && this.settings.disable_image_force_compression == 1) {
                    const img = new Image();
                    img.onload = () => this.setImage(imageLink);
                    img.onerror = () => { this.setImage(this.url); };
                }
                else {
                    this.setImage(imageLink);
                }
            }
        }
    }
    setImage(src) {
        this.imageRef.nativeElement.setAttribute('src', src);
    }
};
ImageCompressionDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
ImageCompressionDirective.propDecorators = {
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    settings: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    noCrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
ImageCompressionDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
        selector: '[appImage]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
], ImageCompressionDirective);



/***/ }),

/***/ "./src/app/shared/models/apiKeys.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/apiKeys.model.ts ***!
  \************************************************/
/*! exports provided: ApiKeys, FCMKeys, Currency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiKeys", function() { return ApiKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FCMKeys", function() { return FCMKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Currency", function() { return Currency; });
class ApiKeys {
    constructor() {
        this.google_maps = '';
        this.dialogflow_token = '';
        this.tawk_site_id = '';
        this.hijiffy_token = '';
        this.gtm = '';
        this.google_property_id = '';
        this.facebook_pixel_id = '';
        this.pinterest_content_id = '';
        this.zendesk_key = '';
        this.oribi_analytics = '';
        this.segment_key = '';
        this.google_search_content_id = '';
        this.sitescout_pixel_id = '';
        this.fcm_config = new FCMKeys();
    }
}
class FCMKeys {
    constructor() {
        this.apiKey = '';
        this.authDomain = '';
        this.databaseURL = '';
        this.projectId = '';
        this.storageBucket = '';
        this.messagingSenderId = '';
        this.appId = '';
        this.measurementId = '';
    }
}
class Currency {
    constructor() {
        this.id = 0;
        this.currency_name = '';
        this.currency_symbol = '';
        this.conversion_rate = 1;
        this.currency_description = '';
    }
}


/***/ }),

/***/ "./src/app/shared/models/appHandler.model.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/appHandler.model.ts ***!
  \***************************************************/
/*! exports provided: AppHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHandler", function() { return AppHandler; });
class AppHandler {
    constructor() {
        this.languageId = '14';
        this.rtl = '0';
        this.currencyId = '1';
        this.currencyValue = 'USD';
        this.latitude = 0.000000;
        this.longitude = 0.000000;
        this.address = '';
        this.selfPickup = 0;
    }
}


/***/ }),

/***/ "./src/app/shared/models/appSettings.model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/models/appSettings.model.ts ***!
  \****************************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/global */ "./src/app/core/global.ts");

class AppSettings {
    constructor(settingObj) {
        this.isCustomFlow = false;
        this.tag_search = 0;
        this.service_booking_flow = 0;
        this.extra_instructions = 0;
        this.agent_tip = 0;
        this.secondary_language = 0;
        this.things_to_remember = '';
        this.product_detail = 0;
        this.bypass_otp = 0;
        this.payment_card_images = 0;
        this.is_return_request = 0;
        this.delivery_distance_unit = 0;
        this.show_prescription_requests = 0;
        this.category_selection = 0;
        this.footer_type = 0;
        this.is_tax_geofence = 0;
        this.isProductCustomTabDescriptionEnable = 0;
        this.productCustomTabDescriptionLabel = [];
        this.laundary_service_flow = 0;
        this.is_product_wishlist = 0;
        this.is_supplier_wishlist = 0;
        this.is_agent_rating = 0;
        this.is_supplier_rating = 0;
        this.is_product_rating = 0;
        this.addCollectFieldInAddress = 0;
        this.social_media_icons = 0;
        this.product_prescription = 0;
        this.categories_above_supplier = 0;
        this.single_vendor_popular_text = '';
        this.single_vendor_offer_text = '';
        this.is_dine_in = 0;
        this.user_id_proof = 0;
        this.disable_tax = 0;
        this.disable_user_cancel_order = 0;
        this.is_user_subscription = 0;
        this.singleFoodStoryBackground = 0;
        this.agentTipPercentage = 0;
        this.is_loyality_enable = 0;
        this.is_feedback_form_enabled = 0;
        this.is_product_weight = 0;
        this.hideAgentList = 0;
        this.addon_type_quantity = 0;
        this.no_default_product_sort = 0;
        this.logo_background_color = 0;
        this.order_request = 0;
        this.auth_terms_check = 0;
        this.disable_image_force_compression = 0;
        this.agentsignup = 0;
        this.enable_multi_supplier_delivery_charge_distance_wise = 0;
        this.google_pay_merchant_id = '';
        this.webMetaKeywords = '';
        this.not_all_variant_required = 0;
        this.hide_supplier_timing = 0;
        this.hide_supplier_delivery_time = 0;
        this.web_custom_domain_theme = 0;
        this.is_vendor_registration = 0;
        this.ecom_agent_module = 0;
        this.price_decimal_length = 2;
        this.show_expected_delivery_between = 0;
        this.is_product_border = 0;
        this.category_popup_width = 250;
        this.disable_zoom_in_product = 0;
        this.separate_images_product_detail = 0;
        this.show_barcode = 0;
        this.setlogoHeight = 0;
        this.logoHeight = 0;
        this.hide_offers_category_home = 0;
        this.wallet_module = 0;
        this.is_unify_search = 0;
        this.is_decimal_quantity_allowed = 0;
        this.is_social_ecommerce = 0;
        this.hide_supplier_address = 0;
        this.disable_user_cancel_after_confirm = 0;
        this.hide_pickup_status = 0;
        this.hide_supplier_license_number = 0;
        this.footer_mockup_image = '';
        this.footer_mockup_title = '';
        this.footer_mockup_description = '';
        this.fackbook_link = '';
        this.twitter_link = '';
        this.google_link = '';
        this.linkedin_link = '';
        this.instagram_link = '';
        this.youtube_link = '';
        this.is_schdule_order = 0;
        this.payment_through_wallet_discount = 0;
        this.default_language = 0;
        this.isFirebaseAnalytics = "0";
        this.admin_to_user_chat = 0;
        this.is_segment = "0";
        this.supplier_to_user_chat = 0;
        this.is_branch_image_optional = 0;
        this.agent_android_app_url = '';
        this.agent_ios_app_url = '';
        this.can_user_edit = '';
        this.is_enabled_multiple_base_delivery_charges = 0;
        this.hide_supplier_phone_email = '';
        this.is_currency_exchange_rate = 0;
        this.show_wallet_on_home = 0;
        this.agent_verification_code_enable = 0;
        this.enable_promo_code_list = 0;
        this.hide_supplier_email = 0;
        this.hide_agent_tip = 0;
        this.disbale_user_cancel_pending_order = 0;
        this.footer_color_same_as_header = 0;
        this.hide_agent_details = 0;
        this.food_list_pagination = 0;
        this.disable_login_with_phone = 0;
        this.no_default_address = 0;
        this.fetch_current_location_first = 0;
        this.glassdoor_link = '';
        this.singleVendorBottomBanner = {};
        this.by_pass_tables_selection = "0";
        this.is_table_invite_allowed = "0";
        this.is_coin_exchange = 0;
        this.is_abn_business = "0";
        this.table_booking_add_food_allow = "0";
        this.is_sos_allow = "0";
        this.is_survey_monkey_allow = "0";
        this.content_id = "0";
        this.is_custom_category_template = "0";
        this.is_laundry_theme = "0";
        this.dropoff_buffer = "";
        this.signup_declaration = "";
        this.enable_size_chart_in_product = "";
        this.enable_country_of_origin_in_product = "";
        this.show_reward_home_button = "";
        this.is_guest_user_feedback_enable = "";
        this.is_compare_products = "";
        this.is_glassdoor_link = 0;
        this.allow_dynamic_image_on_fotter = '0';
        this.enable_best_sellers = "0";
        this.aboutus_two_english = "";
        this.aboutus_two_other = "";
        this.countryCodes = [];
        this.footer_ad_image = '';
        this.enable_no_touch_delivery = 0;
        this.card_gateway = {};
        if (settingObj) {
            this.app_type = settingObj['app_type'];
            this.type = settingObj['app_type'];
            this.countryISO = settingObj['iso'];
            this.webMetaDescription = settingObj['web_meta_description'] || '';
            this.webMetaTitle = settingObj['web_meta_title'] || '';
            this.admin_order_priority = settingObj['admin_order_priority'];
            this.cart_flow = settingObj['cart_flow'];
            this.branch_flow = settingObj['branch_flow'] || 0;
            this.is_pickup_order = settingObj['is_pickup_order'];
            this.is_scheduled = settingObj['is_scheduled'];
            this.schedule_time = settingObj['schedule_time'];
            this.vendor_status = settingObj['vendor_status'];
            this.booking_track_status = settingObj['booking_track_status'];
            this.is_social_module = settingObj['is_social_module'];
            this.interval = settingObj['interval'];
            this.android_app_url = settingObj['android_app_url'];
            this.app_color = settingObj['app_color'];
            this.ios_app_url = settingObj['ios_app_url'];
            this.site_logo = settingObj['logo_url'];
            this.payment_method = settingObj['payment_method'];
            this.is_single_vendor = settingObj['is_single_vendor'];
            this.single_vendor_id = settingObj['single_vendor_id'];
            this.termsAndConditions = settingObj['termsAndConditions'];
            this.privacyPolicy = settingObj['privacyPolicy'];
            this.aboutUs = settingObj['aboutUs'];
            this.countryCodes = settingObj['countryCodes'] || [];
            this.allow_dynamic_image_on_fotter = settingObj['allow_dynamic_image_on_fotter'];
            this.faqs = settingObj['faqs'];
            this.template_section = !!settingObj['template_section'] ? parseInt(settingObj['template_section']) : 0;
            this.referral_feature = settingObj['referral_feature'] || 0;
            this.search_by = settingObj['search_by'] ? parseInt(settingObj['search_by']) : 0;
            this.chat_enable = settingObj['chat_enable'];
            this.referral_given_price = settingObj['referral_given_price'] || 0;
            this.referral_receive_price = settingObj['referral_receive_price'] || 0;
            this.delivery_charge_type = settingObj['delivery_charge_type'] || 0;
            this.supplier_service_fee = settingObj['user_service_fee'] || 0;
            this.cart_image_upload = settingObj['cart_image_upload'] || 0;
            this.order_instructions = settingObj['order_instructions'] || 0;
            this.email = settingObj['email'] || 0;
            this.header_theme = settingObj['header_theme'] || 0;
            this.dynamic_home_section = settingObj['dynamic_home_section'] || 0;
            this.selected_template = !!settingObj['selected_template'] ? parseInt(settingObj['selected_template']) : 0;
            this.phone_registration_flag = settingObj['phone_registration_flag'] || 0;
            this.tag_search = settingObj['tag_search'] || 0;
            this.card_gateway = settingObj['card_gateway'] ? jsonParser(settingObj['card_gateway']) : {};
            this.user_register_flow = !!settingObj['user_register_flow'] ? parseInt(settingObj['user_register_flow']) : 0;
            this.descriptionSections = settingObj['description_sections'] ? jsonParser(settingObj['description_sections']) : [];
            this.service_booking_flow = settingObj['service_booking_flow'] || 0;
            this.gift_card = settingObj['gift_card'] || 0;
            this.things_to_remember = settingObj['things_to_remember'] || '';
            this.extra_instructions = settingObj['extra_instructions'] || 0;
            this.secondary_language = settingObj['secondary_language'] || 0;
            this.agent_tip = settingObj['agent_tip'] || 0;
            this.product_detail = settingObj['product_detail'] || 0;
            this.bypass_otp = settingObj['bypass_otp'] || 0;
            this.footer_ad_image = settingObj['footer_ad_image'];
            this.payment_card_images = settingObj['payment_card_images'] || 0;
            this.is_return_request = settingObj['is_return_request'] || 0;
            this.delivery_distance_unit = settingObj['delivery_distance_unit'] || 0;
            this.show_prescription_requests = settingObj['show_prescription_requests'] || 0;
            this.category_selection = settingObj['category_selection'] || 0;
            this.footer_type = settingObj['footer_type'] || 0;
            this.is_tax_geofence = settingObj['is_tax_geofence'] || 0;
            this.isProductCustomTabDescriptionEnable = settingObj['isProductCustomTabDescriptionEnable'] || 0;
            this.social_media_icons = settingObj['social_media_icons'] || 0;
            this.product_prescription = settingObj['product_prescription'] || 0;
            this.categories_above_supplier = settingObj['categories_above_supplier'] || 0;
            this.is_dine_in = settingObj['is_dine_in'] || 0;
            this.user_id_proof = settingObj['user_id_proof'] || 0;
            this.disable_tax = settingObj['disable_tax'] || 0;
            this.is_user_subscription = settingObj['is_user_subscription'] || 0;
            this.agentTipPercentage = settingObj['agentTipPercentage'] || 0;
            this.is_loyality_enable = settingObj['is_loyality_enable'] || 0;
            this.is_feedback_form_enabled = settingObj['is_feedback_form_enabled'] || 0;
            this.is_product_weight = settingObj['is_product_weight'] || 0;
            this.admin_to_user_chat = settingObj['admin_to_user_chat'] || 0;
            this.supplier_to_user_chat = settingObj['supplier_to_user_chat'] || 0;
            this.can_user_edit = settingObj['can_user_edit'] || 0;
            this.hideAgentList = settingObj['hideAgentList'] || 0;
            this.addon_type_quantity = settingObj['addon_type_quantity'] || 0;
            this.is_unify_search = settingObj['is_unify_search'] || 0;
            this.is_decimal_quantity_allowed = settingObj['is_decimal_quantity_allowed'] || 0;
            this.is_social_ecommerce = settingObj['is_social_ecommerce'] || 0;
            this.is_enabled_multiple_base_delivery_charges = settingObj['is_enabled_multiple_base_delivery_charges'] || 0;
            this.hide_supplier_phone_email = settingObj['hide_supplier_phone_email'] || 0;
            this.is_currency_exchange_rate = settingObj['is_currency_exchange_rate'] || 0;
            this.show_wallet_on_home = settingObj['show_wallet_on_home'] || 0;
            this.agent_verification_code_enable = settingObj['agent_verification_code_enable'] || 0;
            this.no_default_product_sort = settingObj['no_default_product_sort'] || 0;
            this.logo_background_color = settingObj['logo_background_color'] || 0;
            this.hide_supplier_email = settingObj['hide_supplier_email'] || 0;
            this.hide_agent_tip = settingObj['hide_agent_tip'] || 0;
            this.footer_color_same_as_header = settingObj['footer_color_same_as_header'] || 0;
            this.hide_agent_details = settingObj['hide_agent_details'] || 0;
            this.disbale_user_cancel_pending_order = settingObj['disbale_user_cancel_pending_order'] || 0;
            this.disable_user_cancel_after_confirm = settingObj['disable_user_cancel_after_confirm'] || 0;
            this.order_request = settingObj['order_request'] || 0;
            this.food_list_pagination = settingObj['food_list_pagination'] || 0;
            this.disable_login_with_phone = settingObj['disable_login_with_phone'] || 0;
            this.auth_terms_check = settingObj['auth_terms_check'] || 0;
            this.hide_pickup_status = settingObj['hide_pickup_status'] || 0;
            this.no_default_address = settingObj['no_default_address'] || 0;
            this.fetch_current_location_first = settingObj['fetch_current_location_first'] || 0;
            this.disable_image_force_compression = settingObj['disable_image_force_compression'] || 0;
            this.agentsignup = settingObj['agentsignup'] || 0;
            this.is_glassdoor_link = settingObj['is_glassdoor_link'] || 0;
            this.glassdoor_link = settingObj['glassdoor_link'] || '';
            this.enable_multi_supplier_delivery_charge_distance_wise = settingObj['enable_multi_supplier_delivery_charge_distance_wise'] || 0;
            this.google_pay_merchant_id = settingObj['google_pay_merchant_id'] || '';
            this.webMetaKeywords = settingObj['web_meta_keywords'] || '';
            this.show_user_subscription_home_button = settingObj['show_user_subscription_home_button'];
            this.show_reward_home_button = settingObj['show_reward_home_button'];
            this.is_crop_banner = settingObj['is_crop_banner'] ? (Number)(settingObj['is_crop_banner']) : 0;
            if (settingObj['productCustomTabDescriptionLabel']) {
                this.productCustomTabDescriptionLabel = jsonParser(settingObj['productCustomTabDescriptionLabel']);
            }
            this.laundary_service_flow = settingObj['laundary_service_flow'] || 0;
            this.web_custom_domain_theme = settingObj['web_custom_domain_theme'] || 0;
            this.ecom_agent_module = settingObj['ecom_agent_module'] || 0;
            this.is_product_wishlist = settingObj['is_product_wishlist'] || 0;
            this.is_supplier_wishlist = settingObj['is_supplier_wishlist'] || 0;
            this.is_agent_rating = settingObj['is_agent_rating'] || 0;
            this.is_supplier_rating = settingObj['is_supplier_rating'] || 0;
            this.is_product_rating = settingObj['is_product_rating'] || 0;
            this.addCollectFieldInAddress = settingObj['addCollectFieldInAddress'] || 0;
            this.hide_supplier_timing = settingObj['hide_supplier_timing'] || 0;
            this.hide_supplier_delivery_time = settingObj['hide_supplier_delivery_time'] || 0;
            this.wallet_module = settingObj['wallet_module'] || 0;
            this.show_expected_delivery_between = settingObj['show_expected_delivery_between'] || 0;
            this.is_schdule_order = settingObj['is_schdule_order'] || 0;
            this.not_all_variant_required = settingObj['not_all_variant_required'] || 0;
            this.is_product_border = settingObj['is_product_border'] || 0;
            this.category_popup_width = settingObj['category_popup_width'] || 250;
            this.disable_zoom_in_product = settingObj['disable_zoom_in_product'] || 0;
            this.separate_images_product_detail = settingObj['separate_images_product_detail'] || 0;
            this.show_barcode = settingObj['show_barcode'] || 0;
            this.setlogoHeight = settingObj['setlogoHeight'] || 0;
            this.logoHeight = settingObj['logoHeight'] || 0;
            this.disable_user_cancel_order = settingObj['disable_user_cancel_order'] || 0;
            this.payment_through_wallet_discount = settingObj['payment_through_wallet_discount'] ? parseInt(settingObj['payment_through_wallet_discount']) : 0;
            this.default_language = settingObj['default_language'] ? parseInt(settingObj['default_language']) : 0;
            this.hide_offers_category_home = settingObj['hide_offers_category_home'] || 0;
            this.display_image_on_customization = settingObj['display_image_on_customization'] ? (Number)(settingObj['display_image_on_customization']) : 0;
            this.is_vendor_registration = settingObj['is_vendor_registration'] || 0;
            this.price_decimal_length = settingObj['price_decimal_length'] ? parseInt(settingObj['price_decimal_length']) : 2;
            this.footer_mockup_image = settingObj['footer_mockup_image'] || '';
            this.footer_mockup_title = settingObj['footer_mockup_title'] || '';
            this.footer_mockup_description = settingObj['footer_mockup_description'] || '';
            this.fackbook_link = settingObj['fackbook_link'] || '';
            this.twitter_link = settingObj['twitter_link'] || '';
            this.google_link = settingObj['google_link'] || '';
            this.linkedin_link = settingObj['linkedin_link'] || '';
            this.instagram_link = settingObj['instagram_link'] || '';
            this.youtube_link = settingObj['youtube_link'] || '';
            this.is_branch_image_optional = settingObj['is_branch_image_optional'] || 0;
            this.agent_android_app_url = settingObj['agent_android_app_url'] || '';
            this.agent_ios_app_url = settingObj['agent_ios_app_url'] || '';
            this.enable_id_for_invoice_in_profile = settingObj['enable_id_for_invoice_in_profile'] ? parseInt(settingObj['enable_id_for_invoice_in_profile']) : 0;
            this.single_vendor_popular_text = settingObj['single_vendor_popular_text'] || '';
            this.single_vendor_offer_text = settingObj['single_vendor_offer_text'] || '';
            this.singleFoodStoryBackground = settingObj['singleFoodStoryBackground'] || '';
            this.loyality_discount_on_product_listing = settingObj['loyality_discount_on_product_listing'] ? parseInt(settingObj['loyality_discount_on_product_listing']) : 0;
            this.enable_whatsapp_contact_us = settingObj['enable_whatsapp_contact_us'] ? parseInt(settingObj['enable_whatsapp_contact_us']) : 0;
            this.cutom_country_code = settingObj['cutom_country_code'] ? parseInt(settingObj['cutom_country_code']) : 0;
            this.enable_product_appointment = settingObj['enable_product_appointment'] ? parseInt(settingObj['enable_product_appointment']) : 0;
            this.show_filter_on_home = settingObj['show_filter_on_home '] || 0;
            this.singleVendorBottomBanner = {
                banner1: settingObj['singleFoodBottomBanner1'] || '',
                banner2: settingObj['singleFoodBottomBanner2'] || '',
                offer_Text: settingObj['single_vendor_offer_text'] || '',
                popular_Text: settingObj['single_vendor_popular_text'] || '',
            };
            const placeholder = {};
            if (settingObj['user_location']) {
                placeholder['user_location'] = jsonParser(settingObj['user_location']);
            }
            if (settingObj['empty_cart']) {
                placeholder['empty_cart'] = jsonParser(settingObj['empty_cart']);
            }
            if (settingObj['order_loader']) {
                placeholder['order_loader'] = jsonParser(settingObj['order_loader']);
            }
            if (settingObj['website_background']) {
                placeholder['website_background'] = jsonParser(settingObj['website_background']);
            }
            if (settingObj['user_subscription_placeholder']) {
                placeholder['user_subscription_placeholder'] = jsonParser(settingObj['user_subscription_placeholder']);
            }
            this.placeholder = new Placeholder(placeholder);
            if (settingObj['terminology']) {
                try {
                    this.terminology = JSON.parse(settingObj['terminology']);
                }
                catch (_a) {
                    this.terminology = {};
                }
            }
            this.appStyle = {
                baseColor: settingObj['element_color'],
                primaryColor: settingObj['theme_color'],
                headerFontFamily: settingObj['font_family'],
                headerBackgroundColor: settingObj['header_color'],
                headerTextColor: settingObj['header_text_color'],
                topHeaderBackgroundColor: settingObj['header_color'],
                topHeaderTextColor: settingObj['header_text_color']
            };
            this.logo = {
                background: settingObj['logo_background'],
                url: settingObj['logo_url'],
                thumb_url: settingObj['logo_thumb_url']
            };
            this.temp_banners = [
                { display_image: settingObj['banner_one_thumb'], website_image: settingObj['banner_one'] },
                { display_image: settingObj['banner_two_thumb'], website_image: settingObj['banner_two'] },
                { display_image: settingObj['banner_three_thumb'], website_image: settingObj['banner_three'] },
                { display_image: settingObj['banner_four_thumb'], website_image: settingObj['banner_four'] }
            ];
            // if (!!settingObj['banner_url']) {
            //   this.temp_banners.unshift({
            //     display_image: settingObj['banner_thumb_url'],
            //     website_image: settingObj['banner_url']
            //   });
            // }
            if (_core_global__WEBPACK_IMPORTED_MODULE_0__["GlobalVariable"].flowData && _core_global__WEBPACK_IMPORTED_MODULE_0__["GlobalVariable"].flowData.length) {
                if (_core_global__WEBPACK_IMPORTED_MODULE_0__["GlobalVariable"].flowData.length > 1) {
                    this.isCustomFlow = true;
                }
                else {
                    this.app_type = _core_global__WEBPACK_IMPORTED_MODULE_0__["GlobalVariable"].flowData[0].flow_type;
                    this.isCustomFlow = false;
                }
            }
            if (settingObj.default_address) {
                this.default_address = {
                    address: settingObj['default_address']['address'],
                    latitude: settingObj['default_address']['latitude'],
                    longitude: settingObj['default_address']['longitude']
                };
            }
            this.isFirebaseAnalytics = settingObj['isFirebaseAnalytics'] || "0";
            this.is_segment = settingObj['is_segment'] || "0";
            this.by_pass_tables_selection = settingObj['by_pass_tables_selection'] || "0";
            this.is_table_booking = (Number)(settingObj['is_table_booking']) ?
                (Number)(settingObj['is_table_booking']) : 0;
            this.is_table_invite_allowed = settingObj['is_table_invite_allowed'] || "0";
            this.is_coin_exchange = settingObj['is_coin_exchange'] || 0;
            this.is_abn_business = settingObj['is_abn_business'] || "0";
            this.table_booking_add_food_allow = settingObj['table_booking_add_food_allow'] || "0";
            this.is_sos_allow = settingObj['is_sos_allow'] || "0";
            this.is_survey_monkey_allow = settingObj['is_survey_monkey_allow'] || "0";
            this.content_id = settingObj['content_id'] || "0";
            this.is_custom_category_template = settingObj['is_custom_category_template'] || "0";
            this.enable_best_sellers = settingObj['enable_best_sellers'] || "0";
            this.is_alternate_about_us = settingObj['is_alternate_about_us'] ? (Number)(settingObj['is_alternate_about_us']) : 0;
            if (this.is_alternate_about_us) {
                this.aboutus_two_english = settingObj['aboutus_two_english'] || "";
                this.aboutus_two_other = settingObj['aboutus_two_other'] || "";
            }
            this.is_laundry_theme = settingObj['is_laundry_theme'] || "0";
            this.dropoff_buffer = settingObj['dropoff_buffer'] || "0";
            this.signup_declaration = settingObj['signup_declaration'] || "0";
            this.enable_size_chart_in_product = settingObj['enable_size_chart_in_product'] || "0";
            this.enable_country_of_origin_in_product = settingObj['enable_country_of_origin_in_product'] || "0";
            this.is_guest_user_feedback_enable = settingObj['is_guest_user_feedback_enable'] || "0";
            this.is_compare_products = settingObj['is_compare_products'] || "0";
            this.enable_promo_code_list = settingObj['enable_promo_code_list'] || "0";
            this.enable_best_sellers = settingObj['enable_best_sellers'] || "0";
            this.enable_min_order_distance_wise = settingObj['enable_min_order_distance_wise'] || "0";
            this.show_tags_for_suppliers = settingObj['show_tags_for_suppliers'] ? (Number)(settingObj['show_tags_for_suppliers']) : 0;
            this.show_supplier_info_settings = settingObj['show_supplier_info_settings'] ? (Number)(settingObj['show_supplier_info_settings']) : 0;
            this.hide_supplier_address = settingObj['hide_supplier_address'] ? (Number)(settingObj['hide_supplier_address']) : 0;
            this.hide_supplier_license_number = settingObj['hide_supplier_license_number'] ? (Number)(settingObj['hide_supplier_license_number']) : 0;
            if (this.show_supplier_info_settings) {
                this.show_supplier_categories = settingObj['show_supplier_categories'] ? (Number)(settingObj['show_supplier_categories']) : 0;
                this.show_supplier_phone = settingObj['show_supplier_phone'] ? (Number)(settingObj['show_supplier_phone']) : 0;
                this.show_supplier_email = settingObj['show_supplier_email'] ? (Number)(settingObj['show_supplier_email']) : 0;
                this.show_supplier_delivery_timing = settingObj['show_supplier_delivery_timing'] ? (Number)(settingObj['show_supplier_delivery_timing']) : 0;
                this.show_supplier_open_close = settingObj['show_supplier_open_close'] ? (Number)(settingObj['show_supplier_open_close']) : 0;
                this.show_supplier_nationality = settingObj['show_supplier_nationality'] ? (Number)(settingObj['show_supplier_nationality']) : 0;
                this.show_supplier_speciality = settingObj['show_supplier_speciality'] ? (Number)(settingObj['show_supplier_speciality']) : 0;
                this.show_supplier_brand_name = settingObj['show_supplier_brand_name'] ? (Number)(settingObj['show_supplier_brand_name']) : 0;
            }
            this.is_near_by_supplier_enable = settingObj['is_near_by_supplier_enable'] ? (Number)(settingObj['is_near_by_supplier_enable']) : 0;
            this.is_zoom_call_enabled = settingObj['is_zoom_call_enabled'] ? (Number)(settingObj['is_zoom_call_enabled']) : 0;
            this.enable_tax_on_total_amt = settingObj['enable_tax_on_total_amt'] ? (Number)(settingObj['enable_tax_on_total_amt']) : 0;
            this.is_flavor_of_week_enable = settingObj['is_flavor_of_week_enable'] ? (Number)(settingObj['is_flavor_of_week_enable']) : 0;
            if (this.is_flavor_of_week_enable) {
                this.flavor_of_week = settingObj['flavor_of_week'] ? settingObj['flavor_of_week'] : '';
            }
            this.is_delivery_charge_weight_wise_enable = settingObj['is_delivery_charge_weight_wise_enable'] ?
                (Number)(settingObj['is_delivery_charge_weight_wise_enable']) : 0;
            this.is_eligible_order_amount = settingObj['is_eligible_order_amount'] ? (Number)(settingObj['is_eligible_order_amount']) : 0;
            this.eligible_order_amount = settingObj['eligible_order_amount'] ? (Number)(settingObj['eligible_order_amount']) : 0;
            this.is_enable_delivery_type = settingObj['is_enable_delivery_type'] ? (Number)(settingObj['is_enable_delivery_type']) : 0;
            this.is_enable_multiple_banner = settingObj['is_enable_multiple_banner'] ? (Number)(settingObj['is_enable_multiple_banner']) : 0;
            this.is_enable_orderwise_gateways = settingObj['is_enable_orderwise_gateways'] ? (Number)(settingObj['is_enable_orderwise_gateways']) : 0;
            this.dynamic_order_type_client_wise = settingObj['dynamic_order_type_client_wise'] ?
                (Number)(settingObj['dynamic_order_type_client_wise']) : 0;
            if (this.dynamic_order_type_client_wise) {
                this.dynamic_order_type_client_wise_delivery = (Number)(settingObj['dynamic_order_type_client_wise_delivery']) ?
                    (Number)(settingObj['dynamic_order_type_client_wise_delivery']) : 0;
                this.dynamic_order_type_client_wise_pickup = (Number)(settingObj['dynamic_order_type_client_wise_pickup']) ?
                    (Number)(settingObj['dynamic_order_type_client_wise_pickup']) : 0;
                if (this.is_table_booking) {
                    this.dynamic_order_type_client_wise_dinein = (Number)(settingObj['dynamic_order_type_client_wise_dinein']) ?
                        (Number)(settingObj['dynamic_order_type_client_wise_dinein']) : 0;
                }
            }
            this.hide_supplier_license_number = settingObj['hide_supplier_license_number'] ? (Number)(settingObj['hide_supplier_license_number']) : 0;
            this.enable_user_vehicle_number = settingObj['enable_user_vehicle_number'] ? (Number)(settingObj['enable_user_vehicle_number']) : 0;
            this.enable_rest_pagination_category_wise = settingObj['enable_rest_pagination_category_wise'] ?
                (Number)(settingObj['enable_rest_pagination_category_wise']) : 0;
            this.address_reference_char_limit = (Number)(settingObj['address_reference_char_limit']) || 0;
            this.enable_item_purchase_limit = settingObj['enable_item_purchase_limit'] ?
                (Number)(settingObj['enable_item_purchase_limit']) : 0;
            this.is_enable_subscription_required = settingObj['is_enable_subscription_required'] ?
                (Number)(settingObj['is_enable_subscription_required']) : 0;
            this.is_enable_max_discount_value = settingObj['is_enable_max_discount_value'] ?
                (Number)(settingObj['is_enable_max_discount_value']) : 0;
            this.enable_address_reference = settingObj['enable_address_reference'] ?
                (Number)(settingObj['enable_address_reference']) : 0;
            this.enable_referral_bal_limit = settingObj['enable_referral_bal_limit'] ?
                (Number)(settingObj['enable_referral_bal_limit']) : 0;
            if (this.enable_referral_bal_limit) {
                this.referral_bal_limit_per_order = settingObj['referral_bal_limit_per_order'] ?
                    (Number)(settingObj['referral_bal_limit_per_order']) : 0;
            }
            this.enable_agent_leave_notes = settingObj['enable_agent_leave_notes'] ?
                (Number)(settingObj['enable_agent_leave_notes']) : 0;
            if (this.enable_agent_leave_notes) {
                this.leave_notes_reasons = settingObj['leave_notes_reasons'] || '';
            }
            this.enable_cutlery_option = settingObj['enable_cutlery_option'] ?
                (Number)(settingObj['enable_cutlery_option']) : 0;
            this.is_instance_selection = settingObj['is_instance_selection'] ?
                (Number)(settingObj['is_instance_selection']) : 0;
            this.enable_in_out_network = settingObj['enable_in_out_network'] ?
                (Number)(settingObj['enable_in_out_network']) : 0;
            this.enable_audio_video = settingObj['enable_audio_video'] ?
                (Number)(settingObj['enable_audio_video']) : 0;
            this.enable_contact_us = settingObj['enable_contact_us'] ?
                (Number)(settingObj['enable_contact_us']) : 0;
            this.enable_date_of_birth = settingObj['enable_date_of_birth'] ?
                (Number)(settingObj['enable_date_of_birth']) : 0;
            this.dynamic_home_screen_sections = settingObj['dynamic_home_screen_sections'] ?
                (Number)(settingObj['dynamic_home_screen_sections']) : 0;
            if (this.dynamic_home_screen_sections) {
                this.home_screen_sections = settingObj['home_screen_sections'] ? JSON.parse(settingObj['home_screen_sections']) : null;
                if (this.home_screen_sections) {
                    this.home_screen_sections = this.home_screen_sections.sort(function (a, b) { return a.section_place - b.section_place; });
                    this.trending_rest_section = this.home_screen_sections.find(x => x.code == 'trending_rest');
                    this.special_offer_section = this.home_screen_sections.find(x => x.code == 'special_offer');
                    this.best_seller_section = this.home_screen_sections.find(x => x.code == 'best_seller');
                    this.top_selling_section = this.home_screen_sections.find(x => x.code == 'top_selling');
                    this.fastest_del_section = this.home_screen_sections.find(x => x.code == 'fastest_del');
                    this.recomm_items_section = this.home_screen_sections.find(x => x.code == 'recomm_items');
                    this.near_you_section = this.home_screen_sections.find(x => x.code == 'near_you');
                    this.cat_wise_rest_section = this.home_screen_sections.find(x => x.code == 'category_wise_rest');
                    this.rating_wise_rest_section = this.home_screen_sections.find(x => x.code == 'highest_rating_resturant');
                    this.new_rest_section = this.home_screen_sections.find(x => x.code == 'new_resturant');
                    this.recent_order_section = this.home_screen_sections.find(x => x.code == 'recent_orders');
                }
            }
            this.enable_food_varients = settingObj['enable_food_varients'] ?
                (Number)(settingObj['enable_food_varients']) : 0;
            this.enable_freelancer_flow = settingObj['enable_freelancer_flow'] ?
                (Number)(settingObj['enable_freelancer_flow']) : 0;
            this.enable_rating_wise_sorting = settingObj['enable_rating_wise_sorting'] ?
                (Number)(settingObj['enable_rating_wise_sorting']) : 0;
            this.is_twilio_authy_enable = settingObj['is_twilio_authy_enable'] ?
                (Number)(settingObj['is_twilio_authy_enable']) : 0;
            this.is_number_masking_enable = settingObj['is_number_masking_enable'] ?
                (Number)(settingObj['is_number_masking_enable']) : 0;
            this.enable_flat_user_service_charge = settingObj['enable_flat_user_service_charge'] ?
                (Number)(settingObj['enable_flat_user_service_charge']) : 0;
            this.enable_product_allergy = settingObj['enable_product_allergy'] ?
                (Number)(settingObj['enable_product_allergy']) : 0;
            this.enable_supplier_review_list = settingObj['enable_supplier_review_list'] ?
                (Number)(settingObj['enable_supplier_review_list']) : 0;
            this.enable_supplier_promo_list = settingObj['enable_supplier_promo_list'] ?
                (Number)(settingObj['enable_supplier_promo_list']) : 0;
            this.enable_supplier_in_special_offer = settingObj['enable_supplier_in_special_offer'] ?
                (Number)(settingObj['enable_supplier_in_special_offer']) : 0;
            this.table_book_mac_theme = settingObj['table_book_mac_theme'] ?
                (Number)(settingObj['table_book_mac_theme']) : 0;
            this.is_multicurrency_enable = settingObj['is_multicurrency_enable'] ?
                (Number)(settingObj['is_multicurrency_enable']) : 0;
            this.enable_min_loyality_points = settingObj['enable_min_loyality_points'] ?
                (Number)(settingObj['enable_min_loyality_points']) : 0;
            if (this.enable_min_loyality_points) {
                this.min_loyalty_points_to_redeem = settingObj['min_loyalty_points_to_redeem'] ?
                    (Number)(settingObj['min_loyalty_points_to_redeem']) : 0;
                this.min_order_amount_for_loyality_points = settingObj['min_order_amount_for_loyality_points'] ?
                    (Number)(settingObj['min_order_amount_for_loyality_points']) : 0;
                this.loyality_point_per_order = settingObj['loyality_point_per_order'] ?
                    (Number)(settingObj['loyality_point_per_order']) : 0;
                this.loyality_point_value = settingObj['loyality_point_value'] ?
                    (Number)(settingObj['loyality_point_value']) : 0;
            }
            this.enable_non_veg_filter = settingObj['enable_non_veg_filter'] ?
                (Number)(settingObj['enable_non_veg_filter']) : 0;
            this.enable_signup_phone_only = settingObj['enable_signup_phone_only'] ?
                (Number)(settingObj['enable_signup_phone_only']) : 0;
            this.enable_product_special_instruction = settingObj['enable_product_special_instruction'] ?
                (Number)(settingObj['enable_product_special_instruction']) : 0;
            this.skip_payment_option = settingObj['skip_payment_option'] ?
                (Number)(settingObj['skip_payment_option']) : 0;
            this.enable_custom_footer_home_service = settingObj['enable_custom_footer_home_service'] ?
                (Number)(settingObj['enable_custom_footer_home_service']) : 0;
            this.is_address_phone_no_optional = settingObj['is_address_phone_no_optional'] ?
                (Number)(settingObj['is_address_phone_no_optional']) : 0;
            this.enable_zone_geofence = settingObj['enable_zone_geofence'] ?
                (Number)(settingObj['enable_zone_geofence']) : 0;
            this.enable_sequence_wise_supplier = settingObj['enable_sequence_wise_supplier'] ?
                (Number)(settingObj['enable_sequence_wise_supplier']) : 0;
            this.enable_no_touch_delivery = settingObj['enable_no_touch_delivery'] ?
                (Number)(settingObj['enable_no_touch_delivery']) : 0;
            this.display_slot_with_difference = settingObj['display_slot_with_difference'] ?
                (Number)(settingObj['display_slot_with_difference']) : 0;
            this.enable_video_in_banner = settingObj['enable_video_in_banner'] ?
                (Number)(settingObj['enable_video_in_banner']) : 0;
            this.is_flash_sale = settingObj['is_flash_sale'] ?
                (Number)(settingObj['is_flash_sale']) : 0;
            this.is_custom_cart_icon = settingObj['is_custom_cart_icon'] ?
                (Number)(settingObj['is_custom_cart_icon']) : 0;
            this.enable_bypassing_cart = settingObj['enable_bypassing_cart'] ?
                (Number)(settingObj['enable_bypassing_cart']) : 0;
            this.enable_no_order_without_scheduling = settingObj['enable_no_order_without_scheduling'] ?
                (Number)(settingObj['enable_no_order_without_scheduling']) : 0;
            this.is_customized_commision_enable = settingObj['is_customized_commision_enable'] ?
                (Number)(settingObj['is_customized_commision_enable']) : 0;
            this.enable_comma_separation_text = settingObj['enable_comma_separation_text'] ?
                (Number)(settingObj['enable_comma_separation_text']) : 0;
            this.home_section_padding_bottom = settingObj['home_section_padding_bottom'] ?
                (Number)(settingObj['home_section_padding_bottom']) : 40;
            this.home_supplier_section_padding_top = settingObj['home_supplier_section_padding_top'] ?
                (Number)(settingObj['home_supplier_section_padding_top']) : 60;
            this.enable_custom_header_contant = settingObj['enable_custom_header_contant'] ?
                (Number)(settingObj['enable_custom_header_contant']) : 0;
        }
    }
}
class Placeholder {
    constructor(obj) {
        if (!obj)
            return;
        this.user_location = new PlaceholderKey(obj.user_location);
        this.empty_cart = new PlaceholderKey(obj.empty_cart);
        this.order_loader = new PlaceholderKey(obj.order_loader);
        this.website_background = new PlaceholderKey(obj.website_background);
    }
}
class PlaceholderKey {
    constructor(obj) {
        if (!obj)
            return;
        this.id = obj.id;
        this.app = obj.app;
        this.web = obj.web;
    }
}
class HomeScreenSection {
}
function jsonParser(json) {
    if (!json)
        return;
    try {
        return JSON.parse(json);
    }
    catch (err) {
        return;
    }
}


/***/ }),

/***/ "./src/app/shared/models/filters.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/filters.model.ts ***!
  \************************************************/
/*! exports provided: FiltersModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersModel", function() { return FiltersModel; });
class FiltersModel {
    constructor() {
        this.low_to_high = 1;
        this.is_availability = 1;
        this.max_price_range = 50000;
        this.min_price_range = 0;
        this.is_discount = 0;
        this.variant_ids = [];
        this.brand_ids = [];
        this.subCategoryId = [];
    }
}


/***/ }),

/***/ "./src/app/shared/models/script.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/script.model.ts ***!
  \***********************************************/
/*! exports provided: ScriptModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptModel", function() { return ScriptModel; });
class ScriptModel {
    constructor(id, src, text) {
        this.id = id;
        this.src = src;
        if (text) {
            this.text = text;
        }
        this.isLoaded = false;
    }
}


/***/ }),

/***/ "./src/app/shared/pipes/image-compression.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/image-compression.pipe.ts ***!
  \********************************************************/
/*! exports provided: ImageCompressionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCompressionPipe", function() { return ImageCompressionPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let ImageCompressionPipe = class ImageCompressionPipe {
    transform(imageUrl, dimensions) {
        const subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        let imageLink = '';
        if (!!imageUrl) {
            let image = imageUrl.match(/\/([^\/?#]+)[^\/]*$/) ? (imageUrl.match(/\/([^\/?#]+)[^\/]*$/))[1] : null;
            if (!!image) {
                imageLink = `https://d1cihd31wcy9pr.cloudfront.net/royoapps-assets.s3-us-west-2.amazonaws.com/${image}?fill=${dimensions}&crop=center`;
                this.imageExists(imageLink).then((isExist) => {
                    if (isExist)
                        subject.next(imageLink);
                    else
                        subject.next(imageUrl);
                });
            }
        }
        else {
            subject.next(imageUrl);
        }
        return subject.asObservable();
    }
    imageExists(path) {
        return new Promise(resolve => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = path;
        });
    }
    ;
};
ImageCompressionPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({ name: 'imagePipe' })
], ImageCompressionPipe);



/***/ }),

/***/ "./src/app/shared/pipes/localization.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/localization.pipe.ts ***!
  \***************************************************/
/*! exports provided: LocalizationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationPipe", function() { return LocalizationPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/localization */ "./src/app/core/localization.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");




let LocalizationPipe = class LocalizationPipe {
    constructor(util) {
        this.util = util;
        this.app_type = 0;
        this.langType = 'english';
        this.terminology = {};
        this.categories = [];
        this.categorySubscription = this.util.getLanguageCategoryData.subscribe((data) => {
            if (data && data.english) {
                this.categories = data.english;
            }
        });
        this.settingSubscription = this.util.getSettings
            .subscribe((settings) => {
            if (settings) {
                this.app_type = settings['app_type'];
                this.settings = settings;
                this.terminology = settings.terminology;
            }
        });
        let langData = this.util.getLocalData('langData', true) || { id: this.util.handler.languageId };
        this.langType = !langData || langData.id != 14 ? 'other' : 'english';
        this.localization = new _core_localization__WEBPACK_IMPORTED_MODULE_2__["LocalizationModel"]();
        this.localization.recommended_supplier = `Recommended ${this.transform('suppliers', 0, 1)} For You`;
        this.localization.top_suppliers_near_you = `Top ${this.transform('suppliers', 0, 1)} Near You`;
        this.localization.popular_brands = `Popular ${this.transform('brands', 0, 1)}`;
        this.localization.popular_products = `Popular ${this.transform('products', 0, 1)}`;
        this.localization.recently_viewed_products = `Recently Viewed ${this.transform('products', 0, 1)}`;
        if (!!this.terminology['english']) {
            this.localization.choose_supplier = `Choose ${this.terminology['english'].supplier}`;
            this.localization.suppliers_near_you = `${this.terminology['english'].suppliers} Near You`;
            this.localization.supplier_service_fee = `${this.terminology['english'].supplier} Service Fee`;
        }
    }
    selectTerminology(type) {
        if (this.settings.isCustomFlow) {
            const category = this.categories.find(category => category.type == type);
            if (category && category.terminology) {
                this.terminology = JSON.parse(category.terminology);
            }
        }
        else {
            this.terminology = this.settings.terminology || {};
        }
    }
    transform(value, type, only_english) {
        if (type)
            this.app_type = type;
        if (only_english == 1)
            this.langType = 'english';
        if (!!this.settings) {
            this.selectTerminology(this.app_type);
        }
        //Ecommerce is default
        switch (this.app_type) {
            case 1: //food
                this.localization.supplier = 'Restaurant';
                this.localization.suppliers = 'Restaurants';
                this.localization.product = 'Food Item';
                this.localization.products = 'Food Items';
                this.localization.agent = 'Delivery Boy';
                this.localization.category = 'Cuisine';
                this.localization.viewDetail = 'View Menu';
                this.localization.emptyCartMsg = 'Your cart is empty.';
                break;
            case 5: //car rental
                this.localization.order = 'Booking';
                this.localization.orders = 'Bookings';
                this.localization.product = 'Vehicle';
                this.localization.products = 'Vehicles';
                this.localization.agent = 'Driver';
                break;
            case 8: //home service
                this.localization.supplier = 'Service Provider';
                this.localization.suppliers = 'Service Providers';
                this.localization.order = 'Booking';
                this.localization.orders = 'Bookings';
                this.localization.product = 'Service';
                this.localization.products = 'Services';
                this.localization.agent = 'Agent';
                this.localization.viewDetail = 'View All Services';
                this.localization.emptyCartMsg = 'Please Select Service.';
                break;
        }
        for (let key in this.localization) {
            this.localization[key] = this.terminology && this.terminology[this.langType] && this.terminology[this.langType][key] ? this.terminology[this.langType][key] : this.localization[key];
        }
        return this.localization[value];
    }
    ngOnDestroy() {
        if (!!this.settingSubscription)
            this.settingSubscription.unsubscribe();
        if (!!this.categorySubscription)
            this.categorySubscription.unsubscribe();
    }
};
LocalizationPipe.ctorParameters = () => [
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"] }
];
LocalizationPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'localization'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
], LocalizationPipe);



/***/ }),

/***/ "./src/app/shared/pipes/safe-DOM.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/safe-DOM.pipe.ts ***!
  \***********************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], SafePipe);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pipes_image_compression_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/image-compression.pipe */ "./src/app/shared/pipes/image-compression.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quicklink */ "./node_modules/ngx-quicklink/__ivy_ngcc__/fesm2015/ngx-quicklink.js");
/* harmony import */ var _directives_googleplace_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/googleplace.directive */ "./src/app/shared/directives/googleplace.directive.ts");
/* harmony import */ var _pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/localization.pipe */ "./src/app/shared/pipes/localization.pipe.ts");
/* harmony import */ var _pipes_safe_DOM_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/safe-DOM.pipe */ "./src/app/shared/pipes/safe-DOM.pipe.ts");
/* harmony import */ var _directives_image_compression_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/image-compression.directive */ "./src/app/shared/directives/image-compression.directive.ts");








/*************************** Directives *****************************/

/*************************** Pipes *******************************/



const directives = [
    _directives_googleplace_directive__WEBPACK_IMPORTED_MODULE_8__["GoogleplaceDirective"],
    _directives_image_compression_directive__WEBPACK_IMPORTED_MODULE_11__["ImageCompressionDirective"]
];
const pipes = [
    _pipes_safe_DOM_pipe__WEBPACK_IMPORTED_MODULE_10__["SafePipe"],
    _pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_9__["LocalizationPipe"],
    _pipes_image_compression_pipe__WEBPACK_IMPORTED_MODULE_1__["ImageCompressionPipe"]
];
let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            ...pipes,
            ...directives
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            ngx_quicklink__WEBPACK_IMPORTED_MODULE_7__["QuicklinkModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ],
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ...directives,
            ...pipes
        ],
        providers: [
            _pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_9__["LocalizationPipe"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/smtp-validate/smtp-validate.component.scss":
/*!************************************************************!*\
  !*** ./src/app/smtp-validate/smtp-validate.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NtdHAtdmFsaWRhdGUvc210cC12YWxpZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/smtp-validate/smtp-validate.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/smtp-validate/smtp-validate.component.ts ***!
  \**********************************************************/
/*! exports provided: SmtpValidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmtpValidateComponent", function() { return SmtpValidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SmtpValidateComponent = class SmtpValidateComponent {
    constructor() { }
    ngOnInit() {
    }
};
SmtpValidateComponent.ctorParameters = () => [];
SmtpValidateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-smtp-validate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./smtp-validate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/smtp-validate/smtp-validate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./smtp-validate.component.scss */ "./src/app/smtp-validate/smtp-validate.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SmtpValidateComponent);



/***/ }),

/***/ "./src/app/terms/terms.component.scss":
/*!********************************************!*\
  !*** ./src/app/terms/terms.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".term-header {\n  margin-bottom: 20px;\n  height: 65px;\n  background: #fff;\n  font-size: 24px;\n  padding: 10px 0px 10px 20px;\n  font-weight: 500;\n  text-align: center;\n  box-shadow: 1px 1px 10px 2px #ddd;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybXMvdGVybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUNBQWlDO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvdGVybXMvdGVybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybS1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggMnB4ICNkZGQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/terms/terms.component.ts":
/*!******************************************!*\
  !*** ./src/app/terms/terms.component.ts ***!
  \******************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let TermsComponent = class TermsComponent {
    constructor(route, util) {
        this.route = route;
        this.util = util;
        this.heading = '';
    }
    ngOnInit() {
        let langData = this.util.getLocalData('langData', true) || { id: this.util.handler.languageId };
        let data = this.route.snapshot.data.termsAndPolicy;
        let termsAndPolicy = data.find(item => item.language_id == langData.id);
        let type = this.route.snapshot.data.type;
        switch (type) {
            case 1:
                this.terms = termsAndPolicy['terms_and_conditions'];
                this.heading = 'Terms And Conditions';
                break;
            case 2:
                this.terms = termsAndPolicy['faq'];
                this.heading = 'Privacy Policy';
                break;
            case 3:
                this.terms = termsAndPolicy['about_us'];
                this.heading = 'About Us';
                break;
            case 4:
                this.terms = termsAndPolicy['faqs'];
                this.heading = "FAQ's";
                break;
        }
    }
};
TermsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"] }
];
TermsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-terms',
        template: `<div > <header class="term-header">{{heading}}</header> <div class="container" [innerHtml]="terms | safe: 'html'"></div> </div>`,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./terms.component.scss */ "./src/app/terms/terms.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]])
], TermsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the fileReplacements array.
// ng build ---prod replaces environment.ts with environment.prod.ts.
// The list of file replacements can be found in angular.json.
const environment = {
    production: false,
    // ONBOARDING_BASE_API_URL: 'https://codebrew.royoapps.com/v1/common',
    // BASE_API_URL:  'https://api.royoapps.com',
    // AGENT_BASE_API_URL: 'https://onboarding-agent.royoapps.com',
    // ONBOARDING_TRACK_BASE_URL: 'https://codebrew.royoapps.com',
    ONBOARDING_BASE_API_URL: 'https://ordersapi.marketplace24.ch/v1/common',
    BASE_API_URL: 'https://ordersapi.marketplace24.ch',
    AGENT_BASE_API_URL: 'https://ordersagent.marketplace24.ch',
    // ONBOARDING_BASE_API_URL: 'https://onboarding-api.royostaging.com/v1/common',
    // BASE_API_URL: 'https://api.royostaging.com',
    // AGENT_BASE_API_URL: 'https://agent.royostaging.com',
    // ONBOARDING_TRACK_BASE_URL: 'https://onboarding-api.royostaging.com',
    DIALOGFLOW_API_URL_V2: 'https://dialogflow.googleapis.com/v2',
    ONBOARDING_TRACK_BASE_URL: 'https://onboarding-livebkend.royoapps.com',
    INSTANCE_SELECTION: true,
    CYBERSOURCE_API_URL: 'https://apitest.cybersource.com/flex/v1/tokens',
    CONVERGEPAY_API_URL: 'https://api.demo.convergepay.com/hosted-payments',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * zone.run, zoneDelegate.invokeTask for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/icons.ts":
/*!**********************!*\
  !*** ./src/icons.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faFacebookF */ "./node_modules/@fortawesome/free-brands-svg-icons/faFacebookF.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTwitter */ "./node_modules/@fortawesome/free-brands-svg-icons/faTwitter.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faRedditAlien */ "./node_modules/@fortawesome/free-brands-svg-icons/faRedditAlien.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faLinkedinIn */ "./node_modules/@fortawesome/free-brands-svg-icons/faLinkedinIn.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faGooglePlusG */ "./node_modules/@fortawesome/free-brands-svg-icons/faGooglePlusG.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTumblr */ "./node_modules/@fortawesome/free-brands-svg-icons/faTumblr.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faPinterestP */ "./node_modules/@fortawesome/free-brands-svg-icons/faPinterestP.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faWhatsapp */ "./node_modules/@fortawesome/free-brands-svg-icons/faWhatsapp.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faVk */ "./node_modules/@fortawesome/free-brands-svg-icons/faVk.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faFacebookMessenger */ "./node_modules/@fortawesome/free-brands-svg-icons/faFacebookMessenger.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTelegramPlane */ "./node_modules/@fortawesome/free-brands-svg-icons/faTelegramPlane.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faStumbleupon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faStumbleupon */ "./node_modules/@fortawesome/free-brands-svg-icons/faStumbleupon.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faStumbleupon__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faStumbleupon__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faXing */ "./node_modules/@fortawesome/free-brands-svg-icons/faXing.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCommentAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faCommentAlt.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faMinus */ "./node_modules/@fortawesome/free-solid-svg-icons/faMinus.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faEllipsisH */ "./node_modules/@fortawesome/free-solid-svg-icons/faEllipsisH.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faLink */ "./node_modules/@fortawesome/free-solid-svg-icons/faLink.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faExclamation */ "./node_modules/@fortawesome/free-solid-svg-icons/faExclamation.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPrint */ "./node_modules/@fortawesome/free-solid-svg-icons/faPrint.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCheck */ "./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faEnvelope */ "./node_modules/@fortawesome/free-solid-svg-icons/faEnvelope.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_21__);






















const shareButtonsIcons = [
    _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1__["faFacebookF"], _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__["faTwitter"], _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4__["faLinkedinIn"], _fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_5__["faGooglePlusG"], _fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_7__["faPinterestP"], _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3__["faRedditAlien"], _fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_6__["faTumblr"],
    _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8__["faWhatsapp"], _fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9__["faVk"], _fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10__["faFacebookMessenger"], _fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11__["faTelegramPlane"], _fortawesome_free_brands_svg_icons_faStumbleupon__WEBPACK_IMPORTED_MODULE_12__["faStumbleupon"], _fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13__["faXing"], _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_14__["faCommentAlt"],
    _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_21__["faEnvelope"], _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_20__["faCheck"], _fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_19__["faPrint"], _fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_18__["faExclamation"], _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_17__["faLink"], _fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_16__["faEllipsisH"], _fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_15__["faMinus"]
];
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(...shareButtonsIcons);


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.browser.module */ "./src/app/app.browser.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./src/icons.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__["AppBrowserModule"])
        .catch(err => console.log(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dell\Downloads\jasmine\marketplace\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map