(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gift-card-gift-card-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/gift-card/gift-card-list/gift-card-list.component.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/gift-card/gift-card-list/gift-card-list.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesGiftCardGiftCardListGiftCardListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section id=\"Coupons-page\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h3>Gift Cards</h3>\n            </div>\n            <ng-container *ngIf=\"giftList.length; then gifts else noGift\"></ng-container>\n            <ng-template #gifts>\n                <div class=\"col-md-6\" *ngFor=\"let gift of giftList;trackBy:trackByGiftFn\">\n                    <div class=\"Coupons-box\">\n                        <div class=\"Coupons-number\">\n                            <h1 class=\"red_color\" *ngIf=\"gift.price_type == 1\">{{gift.percentage_value}}%</h1>\n                            <h1 class=\"red_color\" *ngIf=\"gift.price_type != 1\">{{gift.price}}</h1>\n                            <span>OFF</span>\n                        </div>\n                        <div class=\"Coupons-detail\">\n                            <p class=\"gift-price d-inline-block float-right\">{{currency}} {{gift.price}}</p>\n                            <h2 class=\"d-inline-block\" (click)=\"selectedGift = gift\"><a data-toggle=\"modal\"\n                                    data-target=\"#myModal\">{{gift?.name}}</a>\n                            </h2>\n                            <div class=\"text-left\">\n                                <app-see-more [max]='100' [text]=\"gift?.description\"></app-see-more>\n                            </div>\n\n                            <div class=\"Coupons-btn\">\n                                <a class=\"Coupons-buy\" (click)=\"onBuyNow(gift)\">Buy Now</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ng-template>\n\n            <ng-template #noGift>\n                <div class=\"no-gift\">\n                    <h4>no gift card avaiable</h4>\n                </div>\n            </ng-template>\n        </div>\n    </div>\n</section>\n\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-md\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"></button>\n                <!-- <h4 class=\"modal-title\">{{selectedGift?.gift_name}}</h4> -->\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"Coupons-detail-outter\">\n                    <div class=\"Coupons-detail-discount\">\n                        <h1 *ngIf=\"selectedGift?.price_type == 1\"><strong>{{selectedGift?.percentage_value}}%</strong>\n                            OFF</h1>\n                        <h1 *ngIf=\"selectedGift?.price_type != 1\"><strong>{{selectedGift?.price}}%</strong> OFF</h1>\n                    </div>\n                    <div class=\"Coupons-detail-inner-box\">\n                        <h3 *ngIf=\"selectedGift?.price_type == 1\">{{selectedGift?.percentage_value}}% off Coupon</h3>\n                        <h3 *ngIf=\"selectedGift?.price_type != 1\">{{selectedGift?.price}} off Coupon</h3>\n                        <p>{{selectedGift?.gift_name}}</p>\n\n                        <h5>Coupon Code</h5>\n                        <div class=\"discount-coupon\">\n                            <h4>{{selectedGift?.gift_name}}</h4>\n                        </div>\n\n                        <div>\n                            <p>{{selectedGift?.description}}</p>\n                        </div>\n\n                        <div class=\"QA-code\">\n                        </div>\n\n                        <!-- <div class=\"share-download\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6 col-6\">\n                                    <div class=\"share-download-btn\">\n                                        <a href=\"\"><i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n                                            Share</a>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6 col-6\">\n                                    <div class=\"share-download-btn float-right\">\n                                        <a href=\"\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                                            Download</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div> -->\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div> -->\n        </div>\n\n    </div>\n</div>\n\n<app-online-payment [settings]=\"settings\" [order]=\"paymentOrderModel\" *ngIf=\"isPayOnline\" (onError)=\"onPaymentError()\"\n    (onClose)=\"isPayOnline = $event\" (onSuccess)=\"onPaymentSuccess($event)\">\n</app-online-payment>\n\n<app-processing-indicator *ngIf=\"isLoading\"></app-processing-indicator>\n";
      /***/
    },

    /***/
    "./src/app/layout/pages/gift-card/gift-card-list/gift-card-list.component.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/layout/pages/gift-card/gift-card-list/gift-card-list.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesGiftCardGiftCardListGiftCardListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#Coupons-page {\n  padding: 40px 0px;\n}\n\n#Coupons-page h3 {\n  font-size: 24px;\n  margin-bottom: 20px;\n  color: var(--baseColor);\n}\n\n.Coupons-box {\n  margin-bottom: 20px;\n  border: 1px dashed var(--secondaryColor);\n  border-radius: 7px;\n  padding: 20px;\n  display: flex;\n}\n\n.Coupons-number {\n  border: 1px dashed var(--secondaryColor);\n  border-radius: 7px;\n  padding: 15px;\n  margin-right: 20px;\n  text-align: center;\n  display: inline-table;\n}\n\n.Coupons-number h1 {\n  font-weight: 600;\n}\n\n.Coupons-number span {\n  font-size: 18px;\n  letter-spacing: 6px;\n  font-weight: 500;\n}\n\n.Coupons-detail .gift-price {\n  margin-left: 320px;\n}\n\n.Coupons-detail p {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.Coupons-detail h2 {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.Coupons-detail p a {\n  margin-left: 5px;\n  color: var(--primaryColor);\n  text-decoration: underline;\n}\n\n.Coupons-detail h2 a {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.Coupons-detail h2 a:hover {\n  color: var(--primaryColor);\n}\n\n.Coupons-btn a {\n  padding: 10px 20px;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n\na.Coupons-buy {\n  background: var(--primaryColor);\n  border-radius: 6px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.Coupons-btn a:hover {\n  text-decoration: none;\n}\n\na.Coupons-share {\n  margin: 0 0 0 auto;\n  float: right;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n/* Start Coupons-detail-page CSS */\n\n#Coupons-page-title {\n  padding: 10px 0px;\n  background: #fff;\n  text-align: center;\n}\n\n#Coupons-page-title h3 {\n  font-size: 24px;\n}\n\n#Coupons-detail-page {\n  padding: 40px 0px;\n  background: #fafafa;\n}\n\n.Coupons-detail-outter {\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0px 0px 6px rgba(187, 176, 176, 0.5);\n}\n\n.Coupons-detail-discount {\n  background: var(--baseColor);\n  text-align: center;\n  padding: 30px;\n  color: #fff;\n  margin-bottom: 20px;\n}\n\n.Coupons-detail-inner-box {\n  text-align: center;\n  padding: 20px 70px;\n}\n\n.Coupons-detail-inner-box h3 {\n  font-size: 24px;\n}\n\n.Coupons-detail-inner-box p {\n  font-size: 14px;\n  margin: 0 auto 40px;\n  width: 350px;\n  max-width: 100%;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.Coupons-detail-inner-box h5 {\n  text-transform: uppercase;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.5);\n  margin: 0px;\n}\n\n.discount-coupon {\n  border: 1px dashed var(--secondaryColor);\n  width: 350px;\n  margin: 20px auto;\n  max-width: 100%;\n  padding: 15px;\n  border-radius: 6px;\n}\n\n.discount-coupon h4 {\n  margin: 0px;\n  text-transform: uppercase;\n  letter-spacing: 7px;\n  font-size: 30px;\n}\n\n.Coupons-detail-inner-box ul {\n  text-align: left;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.5);\n  line-height: 28px;\n  padding-top: 30px;\n  border-bottom: 1px solid var(--secondaryColor);\n  padding-bottom: 30px;\n}\n\n.share-download-btn a {\n  color: rgba(0, 0, 0, 0.5);\n  text-transform: uppercase;\n}\n\n.share-download-btn {\n  text-align: left;\n}\n\n.no-gift {\n  margin-top: 40px;\n  border: 1px solid var(--secondaryColor);\n  border-radius: 4px;\n  padding: 50px;\n  width: 100%;\n  text-align: center;\n  text-transform: capitalize;\n}\n\n.no-gift h4 {\n  color: var(--baseColor);\n}\n\n/* End Coupons-detail-page CSS */\n\n@media (max-width: 812px) {\n  .Coupons-box {\n    display: block;\n  }\n  .Coupons-number {\n    margin-bottom: 20px;\n  }\n  .Coupons-detail-inner-box {\n    padding: 20px 20px;\n    margin-bottom: 20px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL2dpZnQtY2FyZC9naWZ0LWNhcmQtbGlzdC9naWZ0LWNhcmQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtFQUNJLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBRTNCOztBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7QUFHakI7O0FBREE7RUFDSSx3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUl6Qjs7QUFGQTtFQUNJLGdCQUFnQjtBQUtwQjs7QUFIQTtFQUNJLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBTXBCOztBQUpBO0VBQ0Usa0JBQWtCO0FBT3BCOztBQUxBO0VBQ0ksZUFBZTtFQUNmLHlCQUF5QjtBQVE3Qjs7QUFOQTtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7QUFTcEI7O0FBUEE7RUFDSSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLDBCQUEwQjtBQVU5Qjs7QUFQQTtFQUNDLDBCQUEwQjtFQUMxQixlQUFlO0FBVWhCOztBQVJBO0VBQ0MsMEJBQTBCO0FBVzNCOztBQVJBO0VBQ0ksa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlO0FBV25COztBQVRBO0VBQ0ksK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQVluQjs7QUFWQTtFQUNJLHFCQUFxQjtBQWF6Qjs7QUFWQTtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0FBYTdCOztBQVZBLGtDQUFBOztBQUNBO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFhdEI7O0FBWEE7RUFDSSxlQUFlO0FBY25COztBQVpBO0VBQ0ksaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQWV2Qjs7QUFiQTtFQUNJLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0RBQWdEO0FBZ0JwRDs7QUFkQTtFQUNJLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7QUFpQnZCOztBQWZBO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQWtCdEI7O0FBaEJBO0VBQ0ksZUFBZTtBQW1CbkI7O0FBakJBO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUF5QjtBQW9CN0I7O0FBbEJBO0VBQ0kseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVztBQXFCZjs7QUFuQkE7RUFDSSx3Q0FBd0M7RUFDeEMsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtBQXNCdEI7O0FBcEJBO0VBQ0ksV0FBVztFQUNYLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTtBQXVCbkI7O0FBckJBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiw4Q0FBOEM7RUFDOUMsb0JBQW9CO0FBd0J4Qjs7QUF0QkE7RUFDSSx5QkFBeUI7RUFDekIseUJBQXlCO0FBeUI3Qjs7QUF2QkE7RUFDSSxnQkFBZ0I7QUEwQnBCOztBQXhCQTtFQUNJLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQTJCOUI7O0FBbENBO0VBU1EsdUJBQXVCO0FBNkIvQjs7QUExQkEsZ0NBQUE7O0FBRUE7RUFDSTtJQUNJLGNBQWM7RUE0QnBCO0VBMUJFO0lBQ0ksbUJBQW1CO0VBNEJ6QjtFQTFCRTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7RUE0QnpCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcGFnZXMvZ2lmdC1jYXJkL2dpZnQtY2FyZC1saXN0L2dpZnQtY2FyZC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI0NvdXBvbnMtcGFnZSB7XG4gICAgcGFkZGluZzogNDBweCAwcHg7XG59XG4jQ291cG9ucy1wYWdlIGgzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogdmFyKC0tYmFzZUNvbG9yKTtcbn1cbi5Db3Vwb25zLWJveCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uQ291cG9ucy1udW1iZXIge1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG59XG4uQ291cG9ucy1udW1iZXIgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uQ291cG9ucy1udW1iZXIgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiA2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5Db3Vwb25zLWRldGFpbCAuZ2lmdC1wcmljZSB7XG4gIG1hcmdpbi1sZWZ0OiAzMjBweDtcbn1cbi5Db3Vwb25zLWRldGFpbCBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5Db3Vwb25zLWRldGFpbCBoMiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uQ291cG9ucy1kZXRhaWwgcCBhIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uQ291cG9ucy1kZXRhaWwgaDIgYSB7XG4gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gY3Vyc29yOiBwb2ludGVyO1xufVxuLkNvdXBvbnMtZGV0YWlsIGgyIGE6aG92ZXIge1xuIGNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xufVxuXG4uQ291cG9ucy1idG4gYSB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuYS5Db3Vwb25zLWJ1eSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeUNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLkNvdXBvbnMtYnRuIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYS5Db3Vwb25zLXNoYXJlIHtcbiAgICBtYXJnaW46IDAgMCAwIGF1dG87XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi8qIFN0YXJ0IENvdXBvbnMtZGV0YWlsLXBhZ2UgQ1NTICovXG4jQ291cG9ucy1wYWdlLXRpdGxlIHtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNDb3Vwb25zLXBhZ2UtdGl0bGUgaDMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cbiNDb3Vwb25zLWRldGFpbC1wYWdlIHtcbiAgICBwYWRkaW5nOiA0MHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuLkNvdXBvbnMtZGV0YWlsLW91dHRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMTg3LCAxNzYsIDE3NiwgMC41KTtcbn1cbi5Db3Vwb25zLWRldGFpbC1kaXNjb3VudCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFzZUNvbG9yKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLkNvdXBvbnMtZGV0YWlsLWlubmVyLWJveCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggNzBweDtcbn1cbi5Db3Vwb25zLWRldGFpbC1pbm5lci1ib3ggaDMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5Db3Vwb25zLWRldGFpbC1pbm5lci1ib3ggcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDQwcHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLkNvdXBvbnMtZGV0YWlsLWlubmVyLWJveCBoNSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5kaXNjb3VudC1jb3Vwb24ge1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5kaXNjb3VudC1jb3Vwb24gaDQge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDdweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG4uQ291cG9ucy1kZXRhaWwtaW5uZXItYm94IHVsIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4uc2hhcmUtZG93bmxvYWQtYnRuIGEge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5zaGFyZS1kb3dubG9hZC1idG4ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubm8tZ2lmdCB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGg0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJhc2VDb2xvcik7XG4gICAgfVxufVxuLyogRW5kIENvdXBvbnMtZGV0YWlsLXBhZ2UgQ1NTICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MTJweCkge1xuICAgIC5Db3Vwb25zLWJveCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuQ291cG9ucy1udW1iZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICAuQ291cG9ucy1kZXRhaWwtaW5uZXItYm94IHtcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/layout/pages/gift-card/gift-card-list/gift-card-list.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/layout/pages/gift-card/gift-card-list/gift-card-list.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: GiftCardListComponent */

    /***/
    function srcAppLayoutPagesGiftCardGiftCardListGiftCardListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GiftCardListComponent", function () {
        return GiftCardListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _core_apiUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/apiUrl */
      "./src/app/core/apiUrl.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _core_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../services/messaging/messaging.service */
      "./src/app/services/messaging/messaging.service.ts");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");
      /* harmony import */


      var _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../services/http/http.service */
      "./src/app/services/http/http.service.ts");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var GiftCardListComponent = /*#__PURE__*/function () {
        function GiftCardListComponent(http, util, message, userService, translate) {
          _classCallCheck(this, GiftCardListComponent);

          this.http = http;
          this.util = util;
          this.message = message;
          this.userService = userService;
          this.translate = translate;
          this.isPayOnline = false;
          this.isLoading = false;
          this.loggedIn = false;
          this.seeMore = false;
          this.max = 2;
          this.giftList = [];
          this.transaction = {};
          this.paymentOrderModel = {};
          this.selectedGift = {};
          this.currency = '';
          this.currency = _core_global__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].CURRENCY;
        }

        _createClass(GiftCardListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.settingsSubscription = this.util.getSettings.subscribe(function (settings) {
              if (settings) {
                _this.settings = settings;
              }
            });
            this.styleSubscription = this.util.getStyles.subscribe(function (style) {
              if (style) {
                _this.style = style;
              }
            });
            this.userSubscription = this.userService.currentUser.subscribe(function (user) {
              if (!!user && user['access_token']) {
                _this.paymentOrderModel.user = user;
                _this.loggedIn = true;
              } else {
                _this.loggedIn = false;
              }
            });
            this.getGiftCards();
          }
        }, {
          key: "getGiftCards",
          value: function getGiftCards() {
            var _this2 = this;

            this.isLoading = true;
            var params = {
              languageId: this.util.handler.languageId,
              zoneOffset: moment__WEBPACK_IMPORTED_MODULE_3__().format('Z')
            };
            this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_1__["ApiUrl"].giftCard.list, params).subscribe(function (response) {
              if (!!response && response.data) {
                _this2.giftList = response.data.gift;
              }

              _this2.isLoading = false;
            }, function (err) {
              return _this2.isLoading = false;
            });
          }
        }, {
          key: "onBuyNow",
          value: function onBuyNow(gift) {
            if (!this.loggedIn) {
              this.message.alert('info', "".concat(this.translate.instant('Please Login First'), "!"));
              return;
            }

            this.selectedGift = gift;
            this.paymentOrderModel.amount = gift.amount;
            this.isPayOnline = true;
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
          key: "makePayment",
          value: function makePayment() {
            var _this3 = this;

            this.isLoading = true;
            var form_data = {
              gift_id: "".concat(this.selectedGift.id),
              gateway_unique_id: this.transaction.paymentGatewayId,
              customer_payment_id: this.paymentOrderModel.user.customer_payment_id,
              card_id: this.transaction.card_id,
              currency: _core_global__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].CURRENCY_NAME,
              zone_offset: moment__WEBPACK_IMPORTED_MODULE_3__().format('Z'),
              languageId: this.util.handler.languageId,
              quantity: 1
            };

            if (this.transaction.token) {
              form_data['payment_token'] = this.transaction.token;
            }

            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_1__["ApiUrl"].giftCard.purchase, form_data).subscribe(function (response) {
              if (!!response) {
                _this3.message.alert('success', _this3.translate.instant('Gift Card Successfully Purchased'));
              }

              _this3.isLoading = false;
            }), function (err) {
              _this3.isLoading = false;
            };
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.settingsSubscription.unsubscribe();
            this.styleSubscription.unsubscribe();
            this.userSubscription.unsubscribe();
          }
        }, {
          key: "trackByGiftFn",
          value: function trackByGiftFn(id, index) {
            return index;
          }
        }]);

        return GiftCardListComponent;
      }();

      GiftCardListComponent.ctorParameters = function () {
        return [{
          type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]
        }, {
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
        }, {
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"]
        }, {
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
        }];
      };

      GiftCardListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-gift-card-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./gift-card-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/gift-card/gift-card-list/gift-card-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./gift-card-list.component.scss */
        "./src/app/layout/pages/gift-card/gift-card-list/gift-card-list.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"], _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"], _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])], GiftCardListComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/gift-card/gift-card-routing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/layout/pages/gift-card/gift-card-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: GiftCardRoutingModule */

    /***/
    function srcAppLayoutPagesGiftCardGiftCardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GiftCardRoutingModule", function () {
        return GiftCardRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _gift_card_list_gift_card_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./gift-card-list/gift-card-list.component */
      "./src/app/layout/pages/gift-card/gift-card-list/gift-card-list.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: 'list',
        component: _gift_card_list_gift_card_list_component__WEBPACK_IMPORTED_MODULE_1__["GiftCardListComponent"],
        data: {
          title: 'Gift Cards',
          description: 'Gift Card List',
          keyword: 'shopping'
        }
      }];

      var GiftCardRoutingModule = function GiftCardRoutingModule() {
        _classCallCheck(this, GiftCardRoutingModule);
      };

      GiftCardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], GiftCardRoutingModule);
      /***/
    },

    /***/
    "./src/app/layout/pages/gift-card/gift-card.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/layout/pages/gift-card/gift-card.module.ts ***!
      \************************************************************/

    /*! exports provided: GiftCardModule */

    /***/
    function srcAppLayoutPagesGiftCardGiftCardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GiftCardModule", function () {
        return GiftCardModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _gift_card_list_gift_card_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./gift-card-list/gift-card-list.component */
      "./src/app/layout/pages/gift-card/gift-card-list/gift-card-list.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _gift_card_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./gift-card-routing.module */
      "./src/app/layout/pages/gift-card/gift-card-routing.module.ts");
      /* harmony import */


      var _shared_layout_shared_layout_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/layout-shared/layout-shared.module */
      "./src/app/layout/shared/layout-shared/layout-shared.module.ts");
      /* harmony import */


      var _shared_online_payment_online_payment_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/online-payment/online-payment.module */
      "./src/app/layout/shared/online-payment/online-payment.module.ts");

      var GiftCardModule = function GiftCardModule() {
        _classCallCheck(this, GiftCardModule);
      };

      GiftCardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_gift_card_list_gift_card_list_component__WEBPACK_IMPORTED_MODULE_1__["GiftCardListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _shared_layout_shared_layout_shared_module__WEBPACK_IMPORTED_MODULE_5__["LayoutSharedModule"], _shared_online_payment_online_payment_module__WEBPACK_IMPORTED_MODULE_6__["OnlinePaymentModule"], _gift_card_routing_module__WEBPACK_IMPORTED_MODULE_4__["GiftCardRoutingModule"]]
      })], GiftCardModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-gift-card-gift-card-module-es5.js.map