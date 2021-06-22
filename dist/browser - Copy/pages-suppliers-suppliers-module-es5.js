(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-suppliers-suppliers-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/suppliers/supplier-details/supplier-details.component.html":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/suppliers/supplier-details/supplier-details.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesSuppliersSupplierDetailsSupplierDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <div id=\"carousel-example\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div id=\"demo1\" class=\"carousel slide\" data-ride=\"carousel\">\n      <div class=\"carousel-inner\">\n        <span *ngIf=\"supplierData && supplierData?.supplier_image && supplierData?.supplier_image.length\">\n          <div [ngClass]=\"i == selectedIndex ? 'carousel-item item1 active' : 'carousel-item item1'\"\n            *ngFor=\"let banner of supplierData?.images; let i = index;trackBy:trackByBannerFn;\"\n            [style.height.px]=\"banner_height\">\n            <img appImage [url]=\"banner?.display_image\" [size]=\"'600x500'\" [src]=\"banner?.display_image\"\n              class=\"banner-image\" onError=\"src = './assets/images/placeholder_image.svg';\"\n              (load)=\"onBannerImageLoad(banner)\">\n          </div>\n        </span>\n        <div *ngIf=\"!supplierData?.images && !supplierData?.images?.length\" class=\"banner-placeholder\"\n          style=\"background-image: url('/assets/images/banner-tab-placeholder.png')\">\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#demo1\" data-slide=\"prev\"\n        *ngIf=\"supplierData && supplierData.supplier_image && supplierData.supplier_image.length > 1\">\n        <img src=\"/assets/images/arrow.png\">\n      </a>\n      <a class=\"carousel-control-next\" href=\"#demo1\" data-slide=\"next\"\n        *ngIf=\"supplierData && supplierData.supplier_image && supplierData.supplier_image.length > 1\">\n        <img src=\"/assets/images/arrow.png\">\n      </a>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"user-detail-suppler-outter\">\n  <div class=\"container\">\n    <div class=\"user-detail-suppler\">\n      <div class=\"user-detail-suppler-image\">\n        <img appImage [url]=\"supplierData?.logo\" [size]=\"'600x500'\" [src]=\"supplierData?.logo\" [settings]=\"settings\"\n          onError=\"src = './assets/images/placeholder_logo.svg';\">\n      </div>\n      <div class=\"user-detail-suppler-detail\">\n        <div class=\"shoes-limited\">\n\n          <p [style.color]=\"style.defaultColor\">{{supplierData?.name}}</p>\n          <div class=\"text\">\n            <p [style.color]=\"style.secondaryColor\">{{supplierData?.address}}</p>\n          </div>\n          <div class=\"address-text\"\n            [ngClass]=\"{'bg-green': supplierData?.status == 1, 'bg-red': supplierData?.status == 0, 'bg-yellow': supplierData?.status == 2}\">\n            <p>{{supplierData?.status == 1 ? 'Open Now - ' : (supplierData?.status == 2 ? 'Busy' : 'Closed')}}\n            </p>\n            <span class=\"address\"\n              [style.color]=\"style.secondaryColor\">{{supplierData?.open_time}}-{{supplierData?.close_time}}</span>\n          </div>\n          <div class=\"icons\">\n            <!-- <span class=\"review_no\">{{supplierData?.rating}}</span> -->\n            <!-- <rating [ngModel]=\"supplierData?.rating\" [readonly]=\"true\" [max]=\"5\" [float]=\"true\"></rating> -->\n            <p-rating [ngModel]=\"supplierData?.rating\" readonly=\"true\" stars=\"5\" [cancel]=\"false\"></p-rating>\n\n            <span [style.color]=\"style.defaultColor\"> {{supplierData?.total_reviews}} Review (s)</span>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"view-detail-popup-supplier\">\n        <div class=\"grp-btn\" [ngClass]=\"show_subcat ? 'float-right' : 'float-left'\">\n          <div class=\"share\" [style.color]=\"style.primaryColor\" data-toggle=\"modal\" data-target=\"#myModal\">\n            <i class=\"fa fa-share-alt\"></i>\n          </div>\n          <div *ngIf=\"loggedIn && settings?.app_type != 2\" class=\"favourite\"\n            [style.color]=\"supplierData?.Favourite ? style.primaryColor : ''\"\n            (click)=\"addRemoveFavourites(supplierData?.Favourite)\">\n            <i class=\"fa fa-heart\"></i>\n          </div>\n        </div>\n\n        <a class=\"float-right cancel-btn cursor\" *ngIf=\"!show_subcat\" [ngStyle]=\"btn\"\n          (click)=\"navigateToProducts(categoryId)\">View {{'products' | localization}}</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- end slider section -->\n<section class=\"supplier-page-outter-new\">\n  <div class=\"container\">\n\n    <ul>\n\n      <li>\n        <div class=\"supplier-box\">\n          <!-- <img src=\"assets/images/min delivery time.svg\"> -->\n          <svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <g id=\"New-Designs\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n              <g id=\"Seller_profile1\" transform=\"translate(-210.000000, -704.000000)\" [attr.fill]=\"style.primaryColor\"\n                fill-rule=\"nonzero\">\n                <g id=\"Group-2\" transform=\"translate(202.000000, 696.000000)\">\n                  <g id=\"min-delivery-time\" transform=\"translate(8.000000, 8.000000)\">\n                    <path\n                      d=\"M23.0420392,7.32207843 C21.7767059,4.37207843 19.6265098,2.22662745 16.6518824,0.957960784 C15.1651373,0.323882353 13.6075294,3.69482223e-13 11.9802745,3.69482223e-13 C10.3532941,3.69482223e-13 8.80717647,0.320823529 7.32207843,0.957960784 C4.37207843,2.2232549 2.21235294,4.36733333 0.944784314,7.32207843 C0.309607843,8.80239216 0,10.3532549 0,11.9802353 C0,13.6075294 0.309607843,15.1712549 0.944784314,16.6518824 C2.21235294,19.6066275 4.37235294,21.7635686 7.32207843,23.0291765 C8.80745098,23.6663137 10.3532549,23.9868235 11.9802745,23.9868235 C13.6072941,23.9868235 15.1651373,23.6629412 16.6516471,23.0291765 C19.6262745,21.7604706 21.7764706,19.6016078 23.0420784,16.6518824 C23.6791765,15.1665098 24,13.6075294 24,11.9802353 C24,10.3532549 23.679451,8.80741176 23.0420392,7.32207843 Z M21.1264314,17.2817647 C20.1844314,18.8972549 18.8939216,20.1788627 17.2685882,21.1264314 C15.653098,22.0684314 13.8830196,22.5434902 11.980549,22.5434902 C10.5503529,22.5434902 9.18564706,22.2680392 7.88643137,21.7036863 C6.5872549,21.1396078 5.46552941,20.3980392 4.52717647,19.4599608 C3.58882353,18.5216078 2.84196078,17.3889412 2.2834902,16.0875294 C1.72666667,14.7908627 1.45682353,13.4107451 1.45682353,11.9802745 C1.45682353,10.0775294 1.92431373,8.31643137 2.86101961,6.70541176 C3.80105882,5.0885098 5.09184314,3.80552941 6.70568627,2.86070588 C8.3192549,1.91592157 10.0778431,1.44337255 11.9802745,1.44337255 C13.8830196,1.44337255 15.6527843,1.91870588 17.2683137,2.86070588 C18.8936471,3.80831373 20.1813725,5.0912549 21.1261569,6.70537255 C22.0709412,8.31921569 22.5432157,10.0775294 22.5432157,11.9802353 C22.5432157,13.8830196 22.0740392,15.6561176 21.1264314,17.2817647 Z\"\n                      id=\"Shape\"></path>\n                    <path\n                      d=\"M12.7414118,11.8752941 L12.7414118,5.07807843 C12.7414118,4.67133333 12.3870196,4.3432549 11.9802353,4.3432549 C11.5998039,4.3432549 11.258549,4.67133333 11.258549,5.07807843 L11.258549,11.9802353 C11.258549,11.9934118 11.2848627,12.0460392 11.2848627,12.0852549 C11.258549,12.3214902 11.3243529,12.5183137 11.4816863,12.6759216 L15.4053333,16.5992941 C15.6678824,16.8618431 16.1532941,16.8618431 16.4156471,16.5992941 C16.7173725,16.2975294 16.6975294,15.8596863 16.4156471,15.5758039 L12.7414118,11.8752941 Z\"\n                      id=\"Path\"></path>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </svg>\n          <h4 *ngIf=\"supplierData?.delivery_min_time\">{{supplierData?.delivery_min_time | formatTimeInterval}}</h4>\n          <h4 *ngIf=\"!supplierData?.delivery_min_time\">0 minutes</h4>\n          <span>{{'Minimum delivery time' | translate}}</span>\n        </div>\n      </li>\n\n      <li>\n        <div class=\"supplier-box\">\n          <!-- <img src=\"assets/images/min order.svg\"> -->\n          <svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <g id=\"New-Designs\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n              <g id=\"Seller_profile1\" transform=\"translate(-410.000000, -704.000000)\" [attr.fill]=\"style.primaryColor\"\n                fill-rule=\"nonzero\">\n                <g id=\"Group-10\" transform=\"translate(402.000000, 696.000000)\">\n                  <g id=\"min-order\" transform=\"translate(8.000000, 8.000000)\">\n                    <path\n                      d=\"M20.4853125,3.5146875 C18.2188125,1.2481875 15.2053125,0 12,0 C8.7946875,0 5.7811875,1.2481875 3.5146875,3.5146875 C1.24823438,5.7811875 0,8.7946875 0,12 C0,15.2053125 1.24823438,18.2188125 3.5146875,20.4853125 C5.7811875,22.7518125 8.7946875,24 12,24 C15.2053125,24 18.2188125,22.7518125 20.4853125,20.4853125 C22.7517656,18.2188125 24,15.2053125 24,12 C24,8.7946875 22.7517656,5.7811875 20.4853125,3.5146875 Z M12,22.59375 C6.15857813,22.59375 1.40625,17.8414219 1.40625,12 C1.40625,6.15857812 6.15857813,1.40625 12,1.40625 C17.8414219,1.40625 22.59375,6.15857812 22.59375,12 C22.59375,17.8414219 17.8414219,22.59375 12,22.59375 Z\"\n                      id=\"Shape\"></path>\n                    <path\n                      d=\"M12.7531406,11.296875 L11.2468594,11.296875 C10.3887188,11.296875 9.69060938,10.5987656 9.69060938,9.74067188 C9.69060938,8.88253125 10.3887656,8.18442187 11.2468594,8.18442187 L14.259375,8.18442187 C14.6476875,8.18442187 14.9625,7.86960937 14.9625,7.48129687 C14.9625,7.09298438 14.6476875,6.77817187 14.259375,6.77817187 L12.703125,6.77817187 L12.703125,5.22192187 C12.703125,4.83360937 12.3883125,4.51879687 12,4.51879687 C11.6116875,4.51879687 11.296875,4.83360937 11.296875,5.22192187 L11.296875,6.77817187 L11.2469063,6.77817187 C9.61335938,6.77817187 8.28440625,8.10717188 8.28440625,9.74067188 C8.28440625,11.3741719 9.61340625,12.703125 11.2469062,12.703125 L12.7531875,12.703125 C13.6112812,12.703125 14.3093906,13.4012813 14.3093906,14.259375 C14.3093906,15.1174687 13.6112813,15.815625 12.7531875,15.815625 L9.74067188,15.815625 C9.35235938,15.815625 9.03754688,16.1304375 9.03754688,16.51875 C9.03754688,16.9070625 9.35235938,17.221875 9.74067188,17.221875 L11.296875,17.221875 L11.296875,18.7781719 C11.296875,19.1664844 11.6116875,19.4812969 12,19.4812969 C12.3883125,19.4812969 12.703125,19.1664844 12.703125,18.7781719 L12.703125,17.221875 L12.7531406,17.221875 C14.3866406,17.221875 15.7155938,15.892875 15.7155938,14.259375 C15.7155938,12.625875 14.3866406,11.296875 12.7531406,11.296875 Z\"\n                      id=\"Path\"></path>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </svg>\n          <h4>{{currency}} {{supplierData?.min_order}}</h4>\n          <span>{{'Minimum Order' | translate}}</span>\n        </div>\n      </li>\n\n      <li>\n        <div class=\"supplier-box\">\n          <!-- <img src=\"assets/images/delivery_charges.svg\" > -->\n          <svg width=\"31px\" height=\"22px\" viewBox=\"0 0 31 22\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <g id=\"New-Designs\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n              <g id=\"Seller_profile1\" transform=\"translate(-607.000000, -705.000000)\" [attr.fill]=\"style.primaryColor\"\n                fill-rule=\"nonzero\" stroke=\"#979797\" stroke-width=\"0.2\">\n                <g id=\"Group-3\" transform=\"translate(602.000000, 696.000000)\">\n                  <g id=\"delivery-truck(8)\" transform=\"translate(6.000000, 10.000000)\">\n                    <path\n                      d=\"M23.7090206,14.6236559 C23.0004072,14.6236559 22.3272246,14.9044205 21.8193851,15.4121864 C21.3115455,15.9259259 21.0281002,16.5949821 21.0281002,17.311828 C21.0281002,18.0286738 21.3056404,18.69773 21.8193851,19.2114695 C22.3331297,19.7192354 23.0004072,20 23.7090206,20 C25.1616779,20 26.3427001,18.7933094 26.3427001,17.311828 C26.3427001,15.8303465 25.1616779,14.6236559 23.7090206,14.6236559 Z M23.7090206,18.8052569 C22.8941153,18.8052569 22.2091224,18.1242533 22.2091224,17.311828 C22.2091224,16.4994026 22.8941153,15.818399 23.7090206,15.818399 C24.5121157,15.818399 25.1616779,16.4874552 25.1616779,17.311828 C25.1616779,18.1362007 24.5121157,18.8052569 23.7090206,18.8052569 Z M24.3940134,5.66905615 C24.2877214,5.56750299 24.1459988,5.51373955 23.998371,5.51373955 L20.9690491,5.51373955 C20.644268,5.51373955 20.378538,5.78255675 20.378538,6.11111111 L20.378538,11.0095579 C20.378538,11.3381123 20.644268,11.6069295 20.9690491,11.6069295 L25.7758094,11.6069295 C26.1005905,11.6069295 26.3663205,11.3381123 26.3663205,11.0095579 L26.3663205,7.72998805 C26.3663205,7.56272401 26.2954592,7.40143369 26.1714518,7.28793309 L24.3940134,5.66905615 Z M25.1852983,10.4121864 L21.5595602,10.4121864 L21.5595602,6.70250896 L23.7680717,6.70250896 L25.1852983,7.99283154 L25.1852983,10.4121864 Z M9.28873956,14.6236559 C8.58012625,14.6236559 7.9069436,14.9044205 7.39910405,15.4121864 C6.89126451,15.9259259 6.60781918,16.5949821 6.60781918,17.311828 C6.60781918,18.0286738 6.8853594,18.69773 7.39910405,19.2114695 C7.91284871,19.7192354 8.58012625,20 9.28873956,20 C10.7413969,20 11.9224191,18.7933094 11.9224191,17.311828 C11.9224191,15.8303465 10.7413969,14.6236559 9.28873956,14.6236559 Z M9.28873956,18.8052569 C8.47383425,18.8052569 7.78884138,18.1242533 7.78884138,17.311828 C7.78884138,16.4994026 8.47383425,15.818399 9.28873956,15.818399 C10.0918347,15.818399 10.7413969,16.4874552 10.7413969,17.311828 C10.7413969,18.1362007 10.0918347,18.8052569 9.28873956,18.8052569 Z M5.35003054,15.3584229 L4.16310324,15.3584229 L4.16310324,13.7694146 C4.16310324,13.4408602 3.89737324,13.172043 3.57259214,13.172043 C3.24781104,13.172043 2.98208104,13.4408602 2.98208104,13.7694146 L2.98208104,15.9557945 C2.98208104,16.2843489 3.24781104,16.5531661 3.57259214,16.5531661 L5.35003054,16.5531661 C5.67481165,16.5531661 5.94054164,16.2843489 5.94054164,15.9557945 C5.94054164,15.6272401 5.67481165,15.3584229 5.35003054,15.3584229 Z M8.34392181,12.1027479 C8.34392181,11.7741935 8.07819181,11.5053763 7.75341071,11.5053763 L0.590511098,11.5053763 C0.265729994,11.5053763 0,11.7741935 0,12.1027479 C0,12.4313023 0.265729994,12.7001195 0.590511098,12.7001195 L7.75341071,12.7001195 C8.07819181,12.7001195 8.34392181,12.437276 8.34392181,12.1027479 Z M1.78924863,9.94623656 L8.95214824,9.98805257 C9.27692934,9.98805257 9.54265934,9.72520908 9.54856445,9.39665472 C9.55446956,9.06212664 9.28873956,8.79330944 8.96395846,8.79330944 L1.80105885,8.75149343 C1.79515374,8.75149343 1.79515374,8.75149343 1.79515374,8.75149343 C1.47037263,8.75149343 1.20464264,9.01433692 1.20464264,9.34289128 C1.19873753,9.67741935 1.46446752,9.94623656 1.78924863,9.94623656 Z M2.99389126,7.23416965 L10.1567909,7.23416965 C10.481572,7.23416965 10.747302,6.96535245 10.747302,6.63679809 C10.747302,6.30824373 10.481572,6.03942652 10.1567909,6.03942652 L2.99389126,6.03942652 C2.66911016,6.03942652 2.40338017,6.30824373 2.40338017,6.63679809 C2.40338017,6.96535245 2.66911016,7.23416965 2.99389126,7.23416965 Z M28.7815109,6.42771804 L28.7815109,6.42771804 L24.5534514,2.88530466 C24.4471594,2.79569892 24.317247,2.7479092 24.1755243,2.7479092 L19.2034209,2.7479092 L19.2034209,0.597371565 C19.2034209,0.268817204 18.9376909,0 18.6129098,0 L3.57259214,0 C3.24781104,0 2.98208104,0.268817204 2.98208104,0.597371565 L2.98208104,4.97013142 C2.98208104,5.29868578 3.24781104,5.56750299 3.57259214,5.56750299 C3.89737324,5.56750299 4.16310324,5.29868578 4.16310324,4.97013142 L4.16310324,1.19474313 L18.0283038,1.19474313 L18.0283038,15.3584229 L13.1861128,15.3584229 C12.8613317,15.3584229 12.5956017,15.6272401 12.5956017,15.9557945 C12.5956017,16.2843489 12.8613317,16.5531661 13.1861128,16.5531661 L20.3962533,16.5531661 C20.7210344,16.5531661 20.9867644,16.2843489 20.9867644,15.9557945 C20.9867644,15.6272401 20.7210344,15.3584229 20.3962533,15.3584229 L19.209326,15.3584229 L19.209326,3.94265233 L23.9688454,3.94265233 L27.8189778,7.16845878 L27.777642,15.3464755 L27.1635105,15.3464755 C26.8387294,15.3464755 26.5729994,15.6152927 26.5729994,15.9438471 C26.5729994,16.2724014 26.8387294,16.5412186 27.1635105,16.5412186 L28.362248,16.5412186 C28.6870291,16.5412186 28.9527591,16.2783751 28.9527591,15.9498208 L29,6.89366786 C28.9940949,6.71445639 28.9173284,6.54121864 28.7815109,6.42771804 Z\"\n                      id=\"Shape\"></path>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </svg>\n          <h4>{{currency}} {{supplierData?.delivery_charges}}</h4>\n          <span> {{'Delivery Charges' | translate}}</span>\n        </div>\n      </li>\n\n      <li>\n        <div class=\"supplier-box\">\n          <!-- <img src=\"assets/images/payment_option.svg\"> -->\n          <svg width=\"23px\" height=\"20px\" viewBox=\"0 0 23 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <g id=\"New-Designs\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n              <g id=\"Seller_profile1\" transform=\"translate(-811.000000, -706.000000)\" [attr.fill]=\"style.primaryColor\"\n                fill-rule=\"nonzero\">\n                <g id=\"Group-11\" transform=\"translate(802.000000, 696.000000)\">\n                  <g id=\"wallet(3)\" transform=\"translate(9.000000, 10.000000)\">\n                    <path\n                      d=\"M21.6944672,8.69285714 L21.1477459,8.69285714 L21.1477459,5.37380952 C21.1477459,4.01666667 20.0543033,2.91666667 18.7157787,2.91666667 L18.2114754,2.91666667 L18.2161885,1.68333333 C18.2161885,0.769047619 17.4809426,0.0261904762 16.5760246,0.0261904762 L1.99364754,0.0261904762 C0.904918033,0.0261904762 0.0141393443,0.911904762 0,2.01190476 C0,2.02142857 0,2.03095238 0,2.04047619 L0,18.297619 C0,19.2119048 0.735245902,19.9547619 1.64016393,19.9547619 L18.7204918,19.9547619 C20.0637295,19.9547619 21.152459,18.85 21.152459,17.497619 L21.152459,14.1738095 L21.6991803,14.1738095 C22.4061475,14.1738095 22.9811475,13.5928571 22.9811475,12.8785714 L22.9811475,9.98809524 C22.9764344,9.27380952 22.4014344,8.69285714 21.6944672,8.69285714 Z M1.99364754,1.16904762 L16.5760246,1.16904762 C16.8540984,1.16904762 17.085041,1.39761905 17.085041,1.67857143 L17.0803279,2.91666667 L1.99364754,2.91666667 C1.51762295,2.91666667 1.13114754,2.52619048 1.13114754,2.0452381 C1.13114754,1.56428571 1.51762295,1.16904762 1.99364754,1.16904762 Z M20.0165984,17.4928571 C20.0165984,18.2166667 19.4321721,18.8071429 18.7157787,18.8071429 L1.63545082,18.8071429 C1.35737705,18.8071429 1.12643443,18.5785714 1.12643443,18.2928571 L1.12643443,3.85952381 C1.39036885,3.98809524 1.68258197,4.05952381 1.99364754,4.05952381 L18.7157787,4.05952381 C19.4321721,4.05952381 20.0165984,4.65 20.0165984,5.37380952 L20.0165984,8.69285714 L16.1565574,8.69285714 C15.4495902,8.69285714 14.8745902,9.27380952 14.8745902,9.98809524 L14.8745902,12.8785714 C14.8745902,13.5928571 15.4495902,14.1738095 16.1565574,14.1738095 L20.0165984,14.1738095 L20.0165984,17.4928571 Z M21.8452869,12.8785714 C21.8452869,12.9642857 21.7793033,13.0309524 21.6944672,13.0309524 L16.1612705,13.0309524 C16.0764344,13.0309524 16.0104508,12.9642857 16.0104508,12.8785714 L16.0104508,9.98809524 C16.0104508,9.90714286 16.0764344,9.83571429 16.1612705,9.83571429 L21.6944672,9.83571429 C21.7745902,9.83571429 21.8452869,9.90238095 21.8452869,9.98809524 L21.8452869,12.8785714 L21.8452869,12.8785714 Z\"\n                      id=\"Shape\"></path>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </svg>\n          <h4>{{supplierData?.payment_method == 0 ? 'Cash' : (supplierData?.payment_method == 1 ? 'Card'\n                : 'Cash & Card')}}</h4>\n          <span>{{'Payment Option' | translate}}</span>\n        </div>\n      </li>\n\n      <li>\n        <div class=\"supplier-box\">\n          <!-- <img src=\"assets/images/orders_done.svg\"> -->\n          <svg width=\"23px\" height=\"25px\" viewBox=\"0 0 23 25\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <g id=\"New-Designs\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n              <g id=\"Seller_profile1\" transform=\"translate(-1011.000000, -704.000000)\" [attr.fill]=\"style.primaryColor\"\n                fill-rule=\"nonzero\">\n                <g id=\"Group-12\" transform=\"translate(1002.000000, 696.000000)\">\n                  <g id=\"orders_done\" transform=\"translate(9.000000, 8.000000)\">\n                    <path\n                      d=\"M22.9894737,5.89135021 C22.9894737,5.7964135 22.9684211,5.70147679 22.9263158,5.61181435 C22.8421053,5.43248945 22.6789474,5.31118143 22.5,5.2742616 L11.7789474,0.0632911392 C11.6052632,-0.0210970464 11.4,-0.0210970464 11.2263158,0.0632911392 L0.4,5.32172996 C0.189473684,5.42194093 0.0526315789,5.63291139 0.0421052632,5.87025316 L0.0421052632,5.87552743 C0.0421052632,5.88080169 0.0421052632,5.88607595 0.0421052632,5.89662447 L0.0421052632,19.092827 C0.0421052632,19.335443 0.178947368,19.556962 0.4,19.6624473 L11.2263158,24.9208861 C11.2315789,24.9208861 11.2315789,24.9208861 11.2368421,24.9261603 C11.2526316,24.9314346 11.2684211,24.9367089 11.2842105,24.9472574 C11.2894737,24.9472574 11.2947368,24.9525316 11.3052632,24.9525316 C11.3210526,24.9578059 11.3368421,24.9630802 11.3526316,24.9683544 C11.3578947,24.9683544 11.3631579,24.9736287 11.3684211,24.9736287 C11.3842105,24.978903 11.4052632,24.978903 11.4210526,24.9841772 C11.4263158,24.9841772 11.4315789,24.9841772 11.4368421,24.9841772 C11.4578947,24.9841772 11.4842105,24.9894515 11.5052632,24.9894515 C11.5263158,24.9894515 11.5526316,24.9894515 11.5736842,24.9841772 C11.5789474,24.9841772 11.5842105,24.9841772 11.5894737,24.9841772 C11.6052632,24.9841772 11.6263158,24.978903 11.6421053,24.9736287 C11.6473684,24.9736287 11.6526316,24.9683544 11.6578947,24.9683544 C11.6736842,24.9630802 11.6894737,24.9578059 11.7052632,24.9525316 C11.7105263,24.9525316 11.7157895,24.9472574 11.7263158,24.9472574 C11.7421053,24.9419831 11.7578947,24.9367089 11.7736842,24.9261603 C11.7789474,24.9261603 11.7789474,24.9261603 11.7842105,24.9208861 L22.6421053,19.6466245 C22.8578947,19.5411392 23,19.3196203 23,19.0770042 L23,5.907173 C22.9894737,5.90189873 22.9894737,5.89662447 22.9894737,5.89135021 Z M11.5,1.33438819 L20.8894737,5.89662447 L17.4315789,7.57911392 L8.04210526,3.01687764 L11.5,1.33438819 Z M11.5,10.4588608 L2.11052632,5.89662447 L6.59473684,3.71835443 L15.9842105,8.28059072 L11.5,10.4588608 Z M1.30526316,6.91455696 L10.8684211,11.5611814 L10.8684211,23.3386076 L1.30526316,18.6919831 L1.30526316,6.91455696 Z M12.1315789,23.3386076 L12.1315789,11.5611814 L16.6210526,9.37763713 L16.6210526,12.4578059 C16.6210526,12.8059072 16.9052632,13.0907173 17.2526316,13.0907173 C17.6,13.0907173 17.8842105,12.8059072 17.8842105,12.4578059 L17.8842105,8.76054852 L21.7263158,6.89345992 L21.7263158,18.6708861 L12.1315789,23.3386076 Z\"\n                      id=\"Shape\"></path>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </svg>\n          <h4>{{supplierData?.total_order}}</h4>\n          <span>{{'Order Done So Far' | translate}}</span>\n        </div>\n      </li>\n\n      <li>\n        <div class=\"supplier-box\">\n          <!-- <img src=\"assets/images/bussiness_since.svg\"> -->\n          <svg width=\"22px\" height=\"22px\" viewBox=\"0 0 22 22\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <g id=\"New-Designs\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n              <g id=\"Seller_profile1\" transform=\"translate(-1211.000000, -705.000000)\" [attr.fill]=\"style.primaryColor\"\n                fill-rule=\"nonzero\">\n                <g id=\"Group-13\" transform=\"translate(1202.000000, 696.000000)\">\n                  <g id=\"bussiness_since\" transform=\"translate(9.000000, 9.000000)\">\n                    <path\n                      d=\"M20.167125,2.0625 L17.1875,2.0625 L17.1875,0.6875 C17.1875,0.3073125 16.8801875,0 16.5,0 C16.1198125,0 15.8125,0.3073125 15.8125,0.6875 L15.8125,2.0625 L11.6875,2.0625 L11.6875,0.6875 C11.6875,0.3073125 11.3795,0 11,0 C10.6205,0 10.3125,0.3073125 10.3125,0.6875 L10.3125,2.0625 L6.1875,2.0625 L6.1875,0.6875 C6.1875,0.3073125 5.8795,0 5.5,0 C5.1205,0 4.8125,0.3073125 4.8125,0.6875 L4.8125,2.0625 L1.8335625,2.0625 C0.820875,2.0625 0,2.8826875 0,3.895375 L0,20.1664375 C0,21.179125 0.820875,22 1.8335625,22 L20.167125,22 C21.1798125,22 22,21.179125 22,20.1664375 L22,3.895375 C22,2.8826875 21.1798125,2.0625 20.167125,2.0625 Z M20.625,20.1664375 C20.625,20.4194375 20.4194375,20.625 20.167125,20.625 L1.8335625,20.625 C1.5805625,20.625 1.375,20.4194375 1.375,20.1664375 L1.375,3.895375 C1.375,3.6430625 1.5805625,3.4375 1.8335625,3.4375 L4.8125,3.4375 L4.8125,4.8125 C4.8125,5.1926875 5.1205,5.5 5.5,5.5 C5.8795,5.5 6.1875,5.1926875 6.1875,4.8125 L6.1875,3.4375 L10.3125,3.4375 L10.3125,4.8125 C10.3125,5.1926875 10.6205,5.5 11,5.5 C11.3795,5.5 11.6875,5.1926875 11.6875,4.8125 L11.6875,3.4375 L15.8125,3.4375 L15.8125,4.8125 C15.8125,5.1926875 16.1198125,5.5 16.5,5.5 C16.8801875,5.5 17.1875,5.1926875 17.1875,4.8125 L17.1875,3.4375 L20.167125,3.4375 C20.4194375,3.4375 20.625,3.6430625 20.625,3.895375 L20.625,20.1664375 Z\"\n                      id=\"Shape\"></path>\n                    <rect id=\"Rectangle\" x=\"4.8125\" y=\"8.25\" width=\"2.75\" height=\"2.0625\"></rect>\n                    <rect id=\"Rectangle\" x=\"4.8125\" y=\"11.6875\" width=\"2.75\" height=\"2.0625\"></rect>\n                    <rect id=\"Rectangle\" x=\"4.8125\" y=\"15.125\" width=\"2.75\" height=\"2.0625\"></rect>\n                    <rect id=\"Rectangle\" x=\"9.625\" y=\"15.125\" width=\"2.75\" height=\"2.0625\"></rect>\n                    <rect id=\"Rectangle\" x=\"9.625\" y=\"11.6875\" width=\"2.75\" height=\"2.0625\"></rect>\n                    <rect id=\"Rectangle\" x=\"9.625\" y=\"8.25\" width=\"2.75\" height=\"2.0625\"></rect>\n                    <rect id=\"Rectangle\" x=\"14.4375\" y=\"15.125\" width=\"2.75\" height=\"2.0625\"></rect>\n                    <rect id=\"Rectangle\" x=\"14.4375\" y=\"11.6875\" width=\"2.75\" height=\"2.0625\"></rect>\n                    <rect id=\"Rectangle\" x=\"14.4375\" y=\"8.25\" width=\"2.75\" height=\"2.0625\"></rect>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </svg>\n          <h4>{{supplierData?.business_start_date ? supplierData?.business_start_date : 'NA'}}</h4>\n          <span>{{'In Business Since' | translate}}</span>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n</section>\n\n<section class=\"supplier-tabs-outter\" style=\"background-color: #F5F7FB;\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- <div class=\"col-md-3\">\n        <div class=\"tab\">\n          <button class=\"tablinks\" *ngIf=\"show_subcat\"\n            [ngStyle]=\"selectedTab == 0 ? {'color': style.primaryColor} : {'color': style.defaultColor}\"\n            (click)=\"selectedTab = 0\">Categories <i\n              [ngClass]=\"selectedTab == 0  ? 'fa fa-caret-up' : 'fa fa-caret-down' \"></i></button>\n          <ul *ngIf=\"selectedTab == 0\" class=\"list-group\">\n            <a class=\"list-group-item\" *ngFor=\"let subCat of subCategories[subCatIndex]\">{{subCat?.name}}</a>\n          </ul>\n          <button class=\"tablinks\"\n            [ngStyle]=\"selectedTab == 1 ? {'color': style.primaryColor} : {'color': style.defaultColor}\"\n            (click)=\"selectedTab = 1\">{{'About ' + localization?.supplier | translate}}</button>\n          <button class=\"tablinks\"\n            [ngStyle]=\"selectedTab == 2 ? {'color': style.primaryColor} : {'color': style.defaultColor}\"\n            (click)=\"selectedTab = 2\">{{'Uniqueness' | translate}}</button>\n          <button class=\"tablinks\"\n            [ngStyle]=\"selectedTab == 3 ? {'color': style.primaryColor} : {'color': style.defaultColor}\"\n            (click)=\"selectedTab = 3\">{{'Reviews' | translate}}</button>\n        </div>\n\n      </div> -->\n      <div class=\"col-md-7\" *ngIf=\"show_subcat\">\n\n        <div id=\"category\" class=\"tabcontent\" style=\"height: 100%\" [style.color]=\"style.defaultColor\">\n          <h3>\n            <!-- <span *ngIf=\"subCatIndex > 0\" class=\"back\" [style.color]=\"style.primaryColor\" (click)=\"back()\"><i\n                class=\"fa fa-arrow-left\"></i></span> -->\n            Select {{'category' | localization}}\n          </h3>\n          <div class=\"supdetbox\">\n            <div class=\"row\">\n              <div class=\"col-md-3 uk-animation-slide-right\"\n                *ngFor=\"let subCat of subCategories; let i = index;trackBy:trackBySubCategoryFn;\">\n                <figure (click)=\"!loading ? onSubCatSelect(subCat, true) : ''\">\n                  <img [src]=\"subCat?.display_image\" onError=\"src = './assets/images/placeholder_image.svg';\"\n                    (load)=\"onImageLoad(subCat)\">\n                </figure>\n                <p>{{subCat?.name}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <!-- \n        <div id=\"about_supplier\" class=\"tabcontent\" *ngIf=\"selectedTab == 1\" [style.color]=\"style.defaultColor\">\n          <h3>{{'About ' + localization?.supplier | translate}}</h3>\n          <p [innerHtml]=\"supplierData?.description | safe: 'html'\"></p>\n        </div>\n\n        <div id=\"uniqueness\" class=\"tabcontent\" *ngIf=\"selectedTab == 2\" [style.color]=\"style.defaultColor\">\n          <h3>{{'Uniqueness' | translate}}</h3>\n          <p [innerHtml]=\"supplierData?.about | safe: 'html'\"></p>\n        </div> -->\n      <div [ngClass]=\"show_subcat ? 'col-md-5' : 'col-md-12'\">\n        <div id=\"reviews\" class=\"tabcontent\" style=\"height: 100%\" [style.color]=\"style.defaultColor\">\n          <h3>{{'Reviews' | translate}} <span [style.color]=\"style.primaryColor\" class=\"rate\" (click)=\"rateSupplier()\">\n              Rate {{'supplier' | localization}}</span>\n          </h3>\n          <div class=\"no-data mt-5\" *ngIf=\"supplierData?.review_list.length === 0\">\n            <h1>{{'No Reviews' | translate}}!</h1>\n            <h6 *ngIf=\"loggedIn\" [style.color]=\"style.secondaryColor\">\n              Be the first one to rate this {{'supplier' | localization}}!\n              <!-- <a [style.color]=\"style.primaryColor\" (click)=\"rateSupplier()\">{{'Click Here' | translate}}</a> -->\n            </h6>\n          </div>\n\n          <div class=\"seller-information user-review-outter\" *ngIf=\"supplierData?.review_list.length > 0\">\n            <div class=\"user-reviews-box\" *ngFor=\"let rate of supplierData?.review_list;trackBy:trackBySupplierFn;\">\n              <div class=\"user-reviews\">\n                <img [src]=\"rate?.user_image\" onError=\"src = './assets/images/placeholder_image.svg';\">\n                <div class=\"user-reviews-info\">\n                  <h5 style=\"padding-top: 6px\" [style.color]=\"defaultColor\">{{rate?.firstname}}<p\n                      [style.color]=\"style.secondaryColor\">\n                      {{rate?.created_on}}</p>\n                  </h5>\n                  <div class=\"single-product-ratting\">\n                    <!-- <rating [ngModel]=\"rate?.rating\" [readonly]=\"true\" [max]=\"5\" [float]=\"true\"></rating> -->\n                    <p-rating [ngModel]=\"supplierData?.rating\" readonly=\"true\" stars=\"5\" [cancel]=\"false\"></p-rating>\n                  </div>\n                  <p [style.color]=\"style.defaultColor\" class=\"user-review-dec\">{{rate?.comment}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n\n<!-- Share Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" [style.color]=\"style.baseColor\">{{'Share' | translate}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeModal></button>\n      </div>\n      <div class=\"modal-body\">\n        <!-- <share-buttons theme=\"material-dark\" show=\"11\"></share-buttons> -->\n      </div>\n    </div>\n\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/suppliers/supplier-listing/supplier-listing.component.html":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/suppliers/supplier-listing/supplier-listing.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutPagesSuppliersSupplierListingSupplierListingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container [ngSwitch]=\"settings?.app_type\">\n\n  <!--================ Start Page Breadcrumb Page ================-->\n  <div class=\"page_breadcrumb\" [style.background-color]=\"style.backgroundColor\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <ul *ngIf=\"settings?.is_custom_category_template == 0\">\n            <li [style.color]=\"style.baseColor\"><b>{{categoryName}}</b>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-6\">\n          <p class=\"page-resultes\" [style.color]=\"style.baseColor\">\n            <span *ngIf=\"suppliers.length > 2\">\n              <!-- {{(pagination.currentPage - 1) * (pagination.perPage) + 1}}-{{((((pagination.currentPage - 1) * (pagination.perPage) + 1) + pagination.perPage)-1) > suppliers.length ? suppliers.length : ((((pagination.currentPage - 1) * (pagination.perPage) + 1) + pagination.perPage)-1)}} -->\n              {{(pagination.currentPage -1)*pagination.perPage + 1}} to\n              {{(pagination.currentPage -1)*pagination.perPage +suppliers?.length}}\n              {{'Of' | translate}}\n            </span>\n            {{pagination.count}} {{'Results' | translate}}</p>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!--================ End Page Breadcrumb Page ================-->\n\n\n\n  <ng-template [ngSwitchCase]=\"8\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h2 [ngStyle]=\"{'color': style?.baseColor, 'font-size': '22px'}\" class=\"text-uppercase\"\n            *ngIf=\"!is_favourite && !isRecommendedSuppliers\" \n            translate>{{'Choose'}} {{'supplier' | localization}}</h2>\n          <h2 [ngStyle]=\"{'color': style?.baseColor, 'font-size': '22px'}\" class=\"text-uppercase\"\n            *ngIf=\"!is_favourite && isRecommendedSuppliers\">\n            {{'recommended_supplier' | localization | translate}}\n          </h2>\n          <h2 [ngStyle]=\"{'color': style?.baseColor, 'font-size': '22px'}\" class=\"text-uppercase\"\n            *ngIf=\"is_favourite && !isRecommendedSuppliers\">\n            {{'Your Favourite' | translate}}\n            {{'suppliers' | localization}}</h2>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row mt-5\">\n        <div class=\"col-3 left_section\" *ngIf=\"categories.length\">\n          <ul>\n            <app-home-service-categories [settings]=\"settings\" [style]=\"style\" [categories]=\"categories\"\n              [selectedIds]=\"categoryFilter\">\n            </app-home-service-categories>\n          </ul>\n        </div>\n        <div [ngClass]=\"categories.length ? 'col-9' : 'col-12'\">\n\n          <div class=\"row\" *ngIf=\"showSubCat && categories.length\">\n            <div class=\"col-md-12 mt-4\">\n              <div id=\"category\" class=\"tabcontent\" style=\"height: 100%\" [style.color]=\"style.defaultColor\">\n                <h3 style=\"margin-bottom: 20px;\">\n                  Select {{'category' | localization}}\n                </h3>\n\n                <div class=\"supdetbox\">\n                  <div class=\"row\">\n                    <div class=\"col-md-4 uk-animation-slide-right\"\n                      *ngFor=\"let subCat of subCategories[subCatIndex]; let i = index;trackBy:trackBySubCatFn;\">\n                      <figure (click)=\"!isProcessing ? onSubCatSelect(subCat, true) : ''\">\n                        <img appImage [url]=\"subCat?.image\" [size]=\"'700x600'\" [src]=\"subCat?.image\"\n                          [settings]=\"settings\" style=\"width: 100%; height: 180px; cursor: pointer;\"\n                          onError=\"src = './assets/images/placeholder_image.svg';\" (load)=\"onImageLoad(subCat)\">\n                      </figure>\n                      <p>{{subCat?.name || subCat?.category_name}}</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"reccom-main_section\" *ngIf=\"!showSubCat\">\n            <h2 class=\"capitalize\" [style.color]=\"style.primaryColor\">{{categoryName}}</h2>\n\n            <ng-container *ngIf=\"!isLoading; else skeleton\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-6 neapolitan-section top-service-providers\"\n                  *ngFor=\"let supplier of suppliers | paginate: { itemsPerPage: pagination.perPage, currentPage: pagination.currentPage, totalItems: suppliers.length }; let i = index;trackBy:trackByProvidersFn;\">\n                  <app-supplier [settings]=\"settings\" [style]=\"style\" [supplier]=\"supplier\"\n                    (onFavourite)=\"onFavourite(supplier.id)\"></app-supplier>\n                </div>\n                <div *ngIf=\"suppliers.length === 0 && noData\" class=\"no-data w-100\">\n                  <h1 [style.color]=\"style.baseColor\">{{'No' | translate}} {{'supplier' | localization | translate}}\n                    {{\"Found\" | translate}}</h1>\n                </div>\n              </div>\n            </ng-container>\n\n            <ng-template #skeleton>\n              <div class=\"row\">\n                <div class=\"skeleton col-md-4\" *ngFor=\"let item of util.generateFakeList(9);trackBy:trackBySupplierFn;\">\n                  <app-supplier-skeleton [settings]=\"settings\" [style]=\"style\"></app-supplier-skeleton>\n                </div>\n              </div>\n            </ng-template>\n\n            <div class=\"custom-pagination mt-4\" *ngIf=\"suppliers.length > pagination.perPage\">\n              <pagination-controls [style.color]=\"style.primaryColor\" previousLabel=\"Prev\" nextLabel=\"Next\"\n                (pageChange)=\"pagination.currentPage = $event\"></pagination-controls>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template ngSwitchDefault>\n    <section *ngIf=\"!showSubCat\"\n      [style.margin-top.px]=\"settings?.app_type == 1 && settings?.selected_template == 1 ? '10' : '30'\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n\n            <div class=\"spechil-offer\" style=\"background-color: transparent; padding-top: 0px;\">\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <h2 [style.color]=\"style?.baseColor\" style=\"font-size: 24px;\"\n                    *ngIf=\"!is_favourite && !isRecommendedSuppliers\">\n                    <span translate>{{clientCode == 'expactor_0485' ? 'Make Your Choice!' : ('choose_supplier' | localization)}}</span>\n                    <i *ngIf=\"settings?.show_filter_on_home == 1\" class=\"fa fa-filter fa-lg filter-icon\" (click)=\"showFilter()\"></i>\n                  </h2>\n                  <h2 [style.color]=\"style?.baseColor\" class=\"text-uppercase\"\n                    *ngIf=\"!is_favourite && isRecommendedSuppliers\">\n                    {{'recommended_supplier' | localization | translate}}\n                  </h2>\n                  <h2 [style.color]=\"style?.baseColor\" class=\"text-uppercase\"\n                    *ngIf=\"is_favourite && !isRecommendedSuppliers\">\n                    {{'Your Favourite' | translate}}\n                    {{'suppliers' | localization}}</h2>\n                    \n                </div>\n                <app-supplier-price-sorting *ngIf=\"isPreparationTimeOpen\" [FilterValue]=\"FilterReset\" class=\"mx-2\" [style]=\"style\"\n                (onSort)=\"filterRecords($event)\" class=\"sorting-btn\">\n              </app-supplier-price-sorting>\n                <div *ngIf=\"is_all && !isTopSelling && !isRecommendedFoods\" class=\"col-md-9 text-right cat-fd\">\n                  <app-supplier-sorting [style]=\"style\" [sortValue]=\"sortBy\" [settings]=\"settings\"\n                    (onSort)=\"onSortBy($event)\">\n                  </app-supplier-sorting>\n                  <app-supplier-cat-sorting *ngIf=\"settings?.app_type == 1\" [style]=\"style\" [settings]=\"settings\"\n                    [catShortValue]=\"catShortValue\" (onCatSort)=\"onCatSortBy($event)\" class=\"sorting-btn\">\n                  </app-supplier-cat-sorting>\n                </div>\n              </div>\n              <hr>\n\n              <div class=\"itboxrec\" id=\"menu1\" *ngIf=\"!(settings?.app_type == 1 && settings?.selected_template == 1)\">\n                <div class=\"row reccom-main_section\">\n                  <ng-container *ngIf=\"!isLoading; else skeleton\">\n                    <div class=\"col col-md-4\"\n                      *ngFor=\"let supplier of suppliers | paginate: { itemsPerPage: pagination.perPage, currentPage: pagination.currentPage, totalItems: suppliers.length }; let i = index;trackBy:trackBySupplierDataFn;\">\n                      <app-supplier [settings]=\"settings\" [style]=\"style\" [supplier]=\"supplier\"\n                        (onFavourite)=\"onFavourite(supplier.id)\"></app-supplier>\n                    </div>\n                    \n                    <div *ngIf=\"suppliers.length === 0 && noData\" class=\"no-data\">\n                      <h1 [style.color]=\"style.baseColor\">{{'No' | translate}} {{'supplier' | localization | translate}}\n                        {{'Found' | translate}}</h1>\n                    </div>\n                  </ng-container>\n\n                  <ng-template #skeleton>\n                    <div class=\"skeleton col-md-3\"\n                      *ngFor=\"let item of util.generateFakeList(8);trackBy:trackByFakeListFn;\">\n                      <app-supplier-skeleton [settings]=\"settings\" [style]=\"style\"></app-supplier-skeleton>\n                    </div>\n                  </ng-template>\n\n                </div>\n              </div>\n\n              <div class=\"row\" *ngIf=\"settings?.app_type == 1 && settings?.selected_template == 1\">\n                <ng-container *ngIf=\"!isLoading; else skeleton2\">\n                  <div class=\"col-md-6\" *ngFor=\"let supplier of suppliers | \n                    paginate: { itemsPerPage: pagination.perPage, currentPage: pagination.currentPage, totalItems: pagination.count }; \n                    let i = index;trackBy:trackBySuppliersFn;\">\n                    <app-supplier [settings]=\"settings\" [style]=\"style\" [supplier]=\"supplier\"\n                      (onFavourite)=\"onFavourite(supplier.id)\"></app-supplier>\n                  </div>\n                </ng-container>\n\n                <div *ngIf=\"suppliers.length === 0 && noData\" class=\"no-data\">\n                  <h1 [style.color]=\"style.baseColor\">{{'No'  | translate}} {{'supplier' | localization | translate}}\n                    {{'Found' | translate}}</h1>\n                </div>\n              </div>\n\n              <ng-template #skeleton2>\n                <div class=\"skeleton col-md-6\" *ngFor=\"let offer of util.generateFakeList(6);trackBy:trackByOfferFn;\">\n                  <app-supplier-skeleton [settings]=\"settings\" [style]=\"style\"></app-supplier-skeleton>\n                </div>\n              </ng-template>\n            </div>\n            <app-supplier-category-sidebar *ngIf=\"showSidebar\" [supplierId]=\"selectedSupplierId\"\n              [categories]=\"sidebarCategories\" (onHide)=\"closeSidebar()\">\n            </app-supplier-category-sidebar>\n\n\n            <div class=\"custom-pagination mt-4\" *ngIf=\"suppliers.length < pagination.count\">\n              <pagination-controls [style.color]=\"style.primaryColor\" previousLabel=\"Prev\" nextLabel=\"Next\"\n                (pageChange)=\"pageChange($event)\"></pagination-controls>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section *ngIf=\"showSubCat && categories.length\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12 mt-4\">\n            <div id=\"category\" class=\"tabcontent\" style=\"height: 100%\" [style.color]=\"style.defaultColor\">\n              <h3 style=\"margin-bottom: 20px;\" *ngIf=\"settings?.is_custom_category_template == 0\">\n                Select {{'category' | localization}}\n              </h3>\n              <h3 style=\"margin-bottom: 20px;\" *ngIf=\"settings?.is_custom_category_template == 1\">\n                {{categoryName}}\n              </h3>\n              <div class=\"supdetbox\">\n                <div class=\"row\">\n                  <div class=\"col-md-4 uk-animation-slide-right\"\n                    *ngFor=\"let subCat of subCategories[subCatIndex]; let i = index;trackBy:trackBySubCategoriesFn;\">\n                    <figure (click)=\"onSubCatSelect(subCat, true)\" style=\"height: auto;\">\n                      <img appImage [url]=\"subCat?.image\" [size]=\"'700x600'\" [src]=\"subCat?.image\" [settings]=\"settings\"\n                        style=\"width: 100%; height: 180px; cursor: pointer; border-radius: 4px;\"\n                        onError=\"src = './assets/images/placeholder_image.svg';\" (load)=\"onImageLoad(subCat)\">\n                    </figure>\n                    <p>{{subCat?.name || subCat?.category_name}}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </ng-template>\n\n</ng-container>";
      /***/
    },

    /***/
    "./src/app/layout/pages/suppliers/supplier-details/supplier-details.component.scss":
    /*!*****************************************************************************************!*\
      !*** ./src/app/layout/pages/suppliers/supplier-details/supplier-details.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesSuppliersSupplierDetailsSupplierDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".banner-image {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.grp-btn {\n  float: left;\n  margin-top: -3px;\n}\n\n.rate {\n  float: right;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.logo {\n  position: absolute;\n  top: 8%;\n  left: 37%;\n}\n\n#nav-profile img {\n  width: 100% !important;\n}\n\n.wrapper {\n  background-color: #fff;\n  overflow: hidden;\n}\n\n.slider .carousel-inner .carousel-item img {\n  width: 100%;\n  height: 300px;\n}\n\n.user-detail-suppler {\n  margin: 0 auto;\n  border-radius: 7px;\n  padding: 20px;\n  height: 260px;\n}\n\n.user-detail-suppler-image {\n  float: left;\n  margin-right: 20px;\n  height: 178px;\n  width: 180px;\n  border: 5px solid #f7f7f7f7;\n  border-radius: 4px;\n  position: relative;\n  background: #fff;\n  box-shadow: 1px 1px 16px 2px rgba(0, 0, 0, 0.1);\n}\n\n.user-detail-suppler-detail {\n  float: left;\n  width: 60%;\n}\n\n.user-detail-suppler-image img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: scale-down;\n  object-fit: scale-down;\n}\n\n.user-detail-suppler {\n  height: auto;\n  padding: 20px 0px 0px;\n}\n\n.slider .slider-text {\n  text-align: center;\n  margin: auto;\n  position: absolute;\n  top: 240px;\n  margin: auto;\n  left: 0;\n  right: 0;\n}\n\n.mt-13 {\n  margin-top: 13%;\n}\n\n.slider-text01 {\n  width: 800px;\n  margin: 0 auto;\n  max-width: 100%;\n}\n\nspan.review_no {\n  height: 24px;\n  width: 40px;\n  border-radius: 4px;\n  background-color: #ffc53a;\n  color: #fff;\n  float: left;\n  text-align: center;\n  line-height: 24px;\n  margin-right: 10px;\n  font-size: 14px;\n}\n\n.icons {\n  color: #363636;\n  font-size: 12px;\n  line-height: 23px;\n}\n\n.icons .star {\n  color: #fec947;\n}\n\n.text p {\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 0px;\n}\n\n.red-round {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: red;\n  margin: 8px 15px;\n}\n\n.yellow-round {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: yellow;\n  margin: 8px 15px;\n}\n\n.green-round {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: green;\n  margin: 8px 15px;\n}\n\n.slider-text img {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n}\n\n.text {\n  display: flex;\n}\n\n.text span {\n  margin-top: 13px;\n  color: #999999;\n  padding-right: 13px;\n  font-size: 16px;\n}\n\n.icon-description {\n  border: 1px solid #f1f1f1;\n  text-align: center;\n  padding: 30px 0px;\n}\n\n.icon-description h6 {\n  font-size: 16px;\n  font-weight: 500;\n  padding-top: 15px;\n}\n\n.icon-description span {\n  color: #797979;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.plr-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\nsection .title {\n  text-align: center;\n  color: #007b5e;\n  margin-bottom: 50px;\n  text-transform: uppercase;\n}\n\n#tabs {\n  color: #6f6c6c;\n  padding: 30px 0px;\n}\n\n#tabs .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link.active {\n  background-color: transparent;\n  border-color: transparent transparent #f3f3f3;\n  border-bottom: 4px solid !important;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n#tabs .nav-tabs .nav-link {\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  color: #6f6c6c;\n  font-size: 16px;\n}\n\n/* start-responsive css */\n\n@media (max-width: 767px) {\n  .slider .carousel-inner .carousel-item img {\n    width: 100%;\n    height: 270px;\n  }\n  .mt-13 {\n    margin-top: 25%;\n  }\n  .slider .slider-text {\n    top: 210px;\n  }\n  .red-round {\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background-color: red;\n    margin: 5px 15px;\n  }\n  #tabs .nav-tabs .nav-link {\n    font-size: 12px;\n  }\n}\n\n/* end responsive css */\n\nul.categories-design {\n  padding: 0px;\n  list-style: none;\n}\n\nul.categories-design li a {\n  padding: 10px 15px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  margin: 10px 10px;\n  float: left;\n  font-size: 14px;\n  color: #555;\n}\n\n.cat-box {\n  border: 1px solid #d6d6d6b8;\n  padding: 10px 2px;\n  cursor: pointer;\n  margin: 10px 0px;\n  border-radius: 4px;\n}\n\n.cat-box:hover {\n  border-color: #df284d;\n}\n\n.back {\n  margin-right: 12px;\n  cursor: pointer;\n}\n\n.banner-placeholder {\n  display: block;\n  height: 450px !important;\n  min-height: 450px;\n  background-size: cover !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n}\n\n/* Style the tab */\n\n.bg-green {\n  color: green;\n}\n\n.bg-yellow {\n  color: yellow;\n}\n\n.bg-red {\n  color: red;\n}\n\n.carousel-control-next,\n.carousel-control-prev {\n  z-index: 2;\n  border-radius: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  height: 90px;\n  width: 90px;\n  top: 45%;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n}\n\n.carousel-control-prev {\n  left: -50px;\n}\n\n.carousel-control-prev img {\n  position: absolute;\n  right: 9px;\n}\n\n.carousel-control-next img {\n  position: absolute;\n  left: 9px;\n  transform: rotate(180deg);\n  -webkit-transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n}\n\n.carousel-control-next {\n  right: -50px;\n  z-index: 2;\n}\n\n.seller-information {\n  float: left;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.seller-information img {\n  height: 80px;\n  width: 80px;\n  border-radius: 4px;\n  float: left;\n  margin-right: 20px;\n  border: 1px solid #c2c2c275;\n  margin-left: 2px;\n}\n\n.seller-information h5 {\n  font-size: 14px;\n  margin-bottom: 0px;\n  float: left;\n  margin-right: 30px;\n}\n\n.seller-information p {\n  font-size: 12px;\n  text-transform: capitalize;\n}\n\n.seller-information a {\n  float: left;\n  font-size: 15px;\n  font-weight: 400;\n  margin-top: 20px;\n}\n\n.user-reviews-box {\n  float: left;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.user-reviews {\n  float: left;\n  width: 80%;\n}\n\n.user-review-outter h2 span {\n  font-size: 15px;\n  float: right;\n}\n\n.user-reviews .single-product-ratting {\n  width: auto;\n  margin-bottom: 0;\n  margin-top: 0px;\n}\n\n.user-reviews .single-product-ratting i {\n  font-size: 14px;\n}\n\np.user-review-dec {\n  float: left;\n  width: 100%;\n  font-size: 14px;\n}\n\n.user-reviews img {\n  height: 40px;\n  width: 40px;\n  background-color: #efefef;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.user-reviews-info {\n  float: left;\n  width: 80%;\n}\n\n.user-reviews-info h6 {\n  float: left;\n  width: 100%;\n  color: #515151;\n  font-size: 14px;\n}\n\n@media (max-width: 767px) {\n  .carousel-control-next, .carousel-control-prev {\n    height: 70px;\n    width: 80px;\n  }\n  .carousel-control-next img, .carousel-control-prev img {\n    width: 20px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL3N1cHBsaWVycy9zdXBwbGllci1kZXRhaWxzL3N1cHBsaWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsMEJBQXVCO0tBQXZCLHVCQUF1QjtBQU56Qjs7QUFTQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFObEI7O0FBU0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0FBTmpCOztBQVNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0FBTlg7O0FBUUE7RUFDRSxzQkFBc0I7QUFMeEI7O0FBUUE7RUFJRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBUmxCOztBQVdBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFSZjs7QUFXQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUdiLGFBQWE7QUFWZjs7QUFZQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBRWxCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0NBQStDO0FBVmpEOztBQVlBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFUWjs7QUFXQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQVJ4Qjs7QUFVQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFQdkI7O0FBU0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0FBTlY7O0FBU0E7RUFDRSxlQUFlO0FBTmpCOztBQW9DQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtBQWpDakI7O0FBb0NBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQWpDakI7O0FBbUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFoQ25COztBQTZCQTtFQU1JLGNBQWM7QUEvQmxCOztBQWtDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFFaEIsa0JBQWtCO0FBaENwQjs7QUFvQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBakNsQjs7QUFtQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBaENsQjs7QUFrQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBL0JsQjs7QUFpQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQTlCcEI7O0FBZ0NBO0VBQ0UsYUFBYTtBQTdCZjs7QUErQkE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0FBNUJqQjs7QUErQkE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQTVCbkI7O0FBOEJBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUEzQm5COztBQTZCQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBMUJsQjs7QUE0QkE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBekJwQjs7QUE0QkE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix5QkFBeUI7QUF6QjNCOztBQTJCQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUF4Qm5COztBQTJCQTs7RUFHRSw2QkFBNkI7RUFFN0IsNkNBQTZDO0VBQzdDLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2YsaUJBQWlCO0FBMUJuQjs7QUE0QkE7RUFDRSw2QkFBNkI7RUFDN0IsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZUFBZTtBQXpCakI7O0FBNkJBLHlCQUFBOztBQUNBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQTFCZjtFQTRCQTtJQUNFLGVBQWU7RUExQmpCO0VBNEJBO0lBQ0UsVUFBVTtFQTFCWjtFQTRCQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7RUExQmxCO0VBNEJBO0lBQ0UsZUFBZTtFQTFCakI7QUFDRjs7QUE0QkEsdUJBQUE7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBMUJsQjs7QUE0QkE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0FBekJiOztBQTRCQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUF6QnBCOztBQTRCQTtFQUNFLHFCQUFxQjtBQXpCdkI7O0FBNEJBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUF6QmpCOztBQThCQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyx1Q0FBdUM7RUFDdkMsc0NBQXNDO0FBM0J4Qzs7QUE4QkEsa0JBQUE7O0FBR0E7RUFDRSxZQUFZO0FBN0JkOztBQWdDQTtFQUNFLGFBQWE7QUE3QmY7O0FBZ0NBO0VBQ0UsVUFBVTtBQTdCWjs7QUFnQ0E7O0VBRUUsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLFdBQVc7RUFDWCxRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLG1DQUFtQztFQUNuQyxnQ0FBZ0M7RUFDaEMsK0JBQStCO0FBN0JqQzs7QUFnQ0E7RUFDRSxXQUFXO0FBN0JiOztBQStCQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBNUJaOztBQStCQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyw4QkFBOEI7RUFDOUIsNkJBQTZCO0FBNUIvQjs7QUErQkE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQTVCWjs7QUErQkE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtBQTVCckI7O0FBOEJBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBM0JsQjs7QUE2QkE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7QUExQnBCOztBQTRCQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUF6QjVCOztBQTJCQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQXhCbEI7O0FBMkJBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7QUF4QnJCOztBQTBCQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBdkJaOztBQXlCQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBdEJkOztBQXdCQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQXJCakI7O0FBdUJBO0VBQ0UsZUFBZTtBQXBCakI7O0FBc0JBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0FBbkJqQjs7QUFxQkE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsb0JBQWlCO0tBQWpCLGlCQUFpQjtBQWxCbkI7O0FBb0JBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFqQlo7O0FBbUJBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtBQWhCakI7O0FBbUJBO0VBQ0k7SUFDQSxZQUFZO0lBQ1osV0FBVztFQWhCYjtFQWtCRTtJQUNBLFdBQVc7RUFoQmI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlcy9zdXBwbGllcnMvc3VwcGxpZXItZGV0YWlscy9zdXBwbGllci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmRlZmF1bHRfYWRkcmVzcyB7XG4vLyAgICAgZmxvYXQ6IGxlZnQ7XG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4vLyAgICAgd2lkdGg6IDEyNHB4O1xuLy8gfVxuXG4uYmFubmVyLWltYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uZ3JwLWJ0biB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG4ucmF0ZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDglO1xuICBsZWZ0OiAzNyU7XG59XG4jbmF2LXByb2ZpbGUgaW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLndyYXBwZXIge1xuICAvLyBtYXgtd2lkdGg6IDQ1MHB4O1xuICAvLyBtYXJnaW46IDAgYXV0bztcbiAgLy9ib3gtc2hhZG93OiAwIDE0cHggMTlweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4udXNlci1kZXRhaWwtc3VwcGxlciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG5cblxuICBoZWlnaHQ6IDI2MHB4O1xufVxuLnVzZXItZGV0YWlsLXN1cHBsZXItaW1hZ2Uge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBoZWlnaHQ6IDE3OHB4O1xuICB3aWR0aDogMTgwcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNmN2Y3ZjdmNztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAvLyBtYXJnaW4tdG9wOiAtNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDE2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi51c2VyLWRldGFpbC1zdXBwbGVyLWRldGFpbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNjAlO1xufVxuLnVzZXItZGV0YWlsLXN1cHBsZXItaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLW8tb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbn1cbi51c2VyLWRldGFpbC1zdXBwbGVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDBweCAwcHg7XG59XG4uc2xpZGVyIC5zbGlkZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjQwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5tdC0xMyB7XG4gIG1hcmdpbi10b3A6IDEzJTtcbn1cbi8vIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAtbXMtZmxleDogMCAxIGF1dG87XG4vLyAgIGZsZXg6IDAgMSBhdXRvO1xuLy8gICB3aWR0aDogMTBweDtcbi8vICAgaGVpZ2h0OiAxMHB4O1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgIG1hcmdpbi1yaWdodDogM3B4O1xuLy8gICBtYXJnaW4tbGVmdDogM3B4O1xuLy8gICB0ZXh0LWluZGVudDogLTk5OXB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbi8vIH1cbi8vIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICByaWdodDogMDtcbi8vICAgbGVmdDogMDtcbi8vICAgei1pbmRleDogMTU7XG4vLyAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICBwYWRkaW5nLWxlZnQ6IDA7XG4vLyAgIG1hcmdpbi1yaWdodDogMTUlO1xuLy8gICBtYXJnaW4tbGVmdDogMTUlO1xuLy8gICBsaXN0LXN0eWxlOiBub25lO1xuLy8gfVxuXG4uc2xpZGVyLXRleHQwMSB7XG4gIHdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuc3Bhbi5yZXZpZXdfbm8ge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmM1M2E7XG4gIGNvbG9yOiAjZmZmO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaWNvbnMge1xuICBjb2xvcjogIzM2MzYzNjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcblxuICAuc3RhciB7XG4gICAgY29sb3I6ICNmZWM5NDc7XG4gIH1cbn1cbi50ZXh0IHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC8vIHBhZGRpbmc6IDE1cHggMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cblxuLnJlZC1yb3VuZCB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBtYXJnaW46IDhweCAxNXB4O1xufVxuLnllbGxvdy1yb3VuZCB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICBtYXJnaW46IDhweCAxNXB4O1xufVxuLmdyZWVuLXJvdW5kIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgbWFyZ2luOiA4cHggMTVweDtcbn1cbi5zbGlkZXItdGV4dCBpbWcge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi50ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50ZXh0IHNwYW4ge1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgcGFkZGluZy1yaWdodDogMTNweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaWNvbi1kZXNjcmlwdGlvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCAwcHg7XG59XG4uaWNvbi1kZXNjcmlwdGlvbiBoNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uaWNvbi1kZXNjcmlwdGlvbiBzcGFuIHtcbiAgY29sb3I6ICM3OTc5Nzk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wbHItMCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbnNlY3Rpb24gLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwN2I1ZTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiN0YWJzIHtcbiAgY29sb3I6ICM2ZjZjNmM7XG4gIHBhZGRpbmc6IDMwcHggMHB4O1xufVxuXG4jdGFicyAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLFxuLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICAvLyBjb2xvcjogI0RGMjg0RCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLy8gIWltcG9ydGFudDogO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmM2YzZjM7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI3RhYnMgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbiAgY29sb3I6ICM2ZjZjNmM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuXG4vKiBzdGFydC1yZXNwb25zaXZlIGNzcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNzBweDtcbiAgfVxuICAubXQtMTMge1xuICAgIG1hcmdpbi10b3A6IDI1JTtcbiAgfVxuICAuc2xpZGVyIC5zbGlkZXItdGV4dCB7XG4gICAgdG9wOiAyMTBweDtcbiAgfVxuICAucmVkLXJvdW5kIHtcbiAgICB3aWR0aDogMTNweDtcbiAgICBoZWlnaHQ6IDEzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBtYXJnaW46IDVweCAxNXB4O1xuICB9XG4gICN0YWJzIC5uYXYtdGFicyAubmF2LWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuLyogZW5kIHJlc3BvbnNpdmUgY3NzICovXG5cbnVsLmNhdGVnb3JpZXMtZGVzaWduIHtcbiAgcGFkZGluZzogMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxudWwuY2F0ZWdvcmllcy1kZXNpZ24gbGkgYSB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDEwcHggMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5jYXQtYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNmI4O1xuICBwYWRkaW5nOiAxMHB4IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jYXQtYm94OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGYyODRkO1xufVxuXG4uYmFjayB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cblxuLmJhbm5lci1wbGFjZWhvbGRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDQ1MHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi8qIFN0eWxlIHRoZSB0YWIgKi9cblxuXG4uYmctZ3JlZW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5iZy15ZWxsb3cge1xuICBjb2xvcjogeWVsbG93O1xufVxuXG4uYmctcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCxcbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICB6LWluZGV4OiAyO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIHRvcDogNDUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gIGxlZnQ6IC01MHB4O1xufVxuLmNhcm91c2VsLWNvbnRyb2wtcHJldiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5cHg7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLW5leHQgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA5cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHJpZ2h0OiAtNTBweDtcbiAgei1pbmRleDogMjtcbn1cblxuLnNlbGxlci1pbmZvcm1hdGlvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5zZWxsZXItaW5mb3JtYXRpb24gaW1nIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzJjMmMyNzU7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG4uc2VsbGVyLWluZm9ybWF0aW9uIGg1IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4uc2VsbGVyLWluZm9ybWF0aW9uIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnNlbGxlci1pbmZvcm1hdGlvbiBhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnVzZXItcmV2aWV3cy1ib3gge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udXNlci1yZXZpZXdzIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA4MCU7XG59XG4udXNlci1yZXZpZXctb3V0dGVyIGgyIHNwYW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi51c2VyLXJldmlld3MgLnNpbmdsZS1wcm9kdWN0LXJhdHRpbmcge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLnVzZXItcmV2aWV3cyAuc2luZ2xlLXByb2R1Y3QtcmF0dGluZyBpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxucC51c2VyLXJldmlldy1kZWMge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi51c2VyLXJldmlld3MgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi51c2VyLXJldmlld3MtaW5mbyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogODAlO1xufVxuLnVzZXItcmV2aWV3cy1pbmZvIGg2IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzUxNTE1MTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCl7XG4gICAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCwgLmNhcm91c2VsLWNvbnRyb2wtcHJldntcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG59XG4gICAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCBpbWcsIC5jYXJvdXNlbC1jb250cm9sLXByZXYgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbn1cbiAgICBcbiAgICBcbiAgICBcbiAgICBcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/layout/pages/suppliers/supplier-details/supplier-details.component.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/layout/pages/suppliers/supplier-details/supplier-details.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: SupplierDetailsComponent */

    /***/
    function srcAppLayoutPagesSuppliersSupplierDetailsSupplierDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupplierDetailsComponent", function () {
        return SupplierDetailsComponent;
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


      var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../services/messaging/messaging.service */
      "./src/app/services/messaging/messaging.service.ts");
      /* harmony import */


      var _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../core/apiUrl */
      "./src/app/core/apiUrl.ts");
      /* harmony import */


      var _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../services/http/http.service */
      "./src/app/services/http/http.service.ts");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");
      /* harmony import */


      var _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../core/theme/styleConstants.model */
      "./src/app/core/theme/styleConstants.model.ts");
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


      var _services_window_window_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../../../services/window/window.service */
      "./src/app/services/window/window.service.ts");
      /* harmony import */


      var _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../../../shared/pipes/localization.pipe */
      "./src/app/shared/pipes/localization.pipe.ts");
      /* harmony import */


      var _core_global__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var SupplierDetailsComponent = /*#__PURE__*/function () {
        function SupplierDetailsComponent(util, http, router, user, route, message, localization, translate, seo, window) {
          var _this = this;

          _classCallCheck(this, SupplierDetailsComponent);

          this.util = util;
          this.http = http;
          this.router = router;
          this.user = user;
          this.route = route;
          this.message = message;
          this.localization = localization;
          this.translate = translate;
          this.seo = seo;
          this.window = window;
          this.subCategories = [];
          this.selectedCatPath = [];
          this.categoryIds = [];
          this.selectedCatIds = [];
          this.currency = "";
          this.supplierId = "";
          this.branchId = "";
          this.userToken = "";
          this.categoryId = "";
          this.categoryName = "";
          this.loggedIn = false;
          this.subCatIndex = 0;
          this.selectedTab = 0;
          this.hoverIndex = -1;
          this.banner_height = 0;
          this.selectedIndex = 0;
          this.show_subcat = true;
          this.cat_flow = false;
          this.loading = false;
          this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_8__["StyleVariables"]();
          this.btn = new _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_7__["StyleConstants"]();
          this.currency = _core_global__WEBPACK_IMPORTED_MODULE_13__["GlobalVariable"].CURRENCY;
          this.userSubscription = this.user.currentUser.subscribe(function (user) {
            if (!!user && user["access_token"]) {
              _this.userToken = user["access_token"];
              _this.loggedIn = true;
            } else {
              _this.loggedIn = false;
            }
          });
          this.routeSubscription = this.route.queryParams.subscribe(function (params) {
            _this.supplierId = params["sup_id"];
            _this.branchId = params["branch_id"];
            _this.cat_flow = params['cat_flow'] ? params['cat_flow'] : false;
            _this.categoryIds = !!params["cat_ids"] && params["cat_ids"].split(",").length ? params["cat_ids"].split(",") : [];
            _this.categoryId = params['cat_id'];
            _this.categoryName = params['name'];
          });
          this.getScreenSize();
        }

        _createClass(SupplierDetailsComponent, [{
          key: "getScreenSize",
          value: function getScreenSize() {
            this.banner_height = this.window.innerWidth * (2 / 7);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.styleSubscription = this.util.getStyles.subscribe(function (style) {
              _this2.style = style;
              _this2.btn.borderColor = style.primaryColor;
              _this2.btn.color = style.primaryColor;
            });
            this.makeSubscribe();
          }
        }, {
          key: "makeSubscribe",
          value: function makeSubscribe() {
            var _this3 = this;

            this.getDataSubscribe = this.util.callGetData.subscribe(function (data) {
              if (data) {
                _this3.getSupplierDetail();
              }
            });
            this.categorySubscription = this.util.getLanguageCategoryData.subscribe(function (categories) {
              if (categories) {
                if (_this3.categoryId) {
                  var cat = categories.english.find(function (data) {
                    return data.id == _this3.categoryId;
                  });
                  var categoryFlow = cat.category_flow.split('>');
                  var index = categoryFlow.indexOf("SupplierInfo");

                  if (index > -1) {
                    if (categoryFlow[index + 1] === "SubCategory") {
                      _this3.show_subcat = true;
                    } else if (categoryFlow[index + 1] === "Pl") {
                      _this3.show_subcat = false;
                      _this3.selectedTab = 1;
                    }
                  }

                  _this3.onSubCatSelect({
                    name: _this3.categoryName,
                    id: _this3.categoryId,
                    is_cub_category: 1
                  }, false);
                } else {
                  var categoryData = [];
                  categories.english.forEach(function (element) {
                    if (_this3.categoryIds.includes(element.id.toString())) {
                      categoryData.push(element);
                    }
                  });
                  categoryData.map(function (data) {
                    data["display_image"] = _this3.util.thumbnail(data["image"]);
                    data["is_cub_category"] = 1;
                  });

                  _this3.subCategories.push(categoryData);
                }
              }
            });
          }
        }, {
          key: "getSupplierDetail",
          value: function getSupplierDetail() {
            var _this4 = this;

            var obj = {
              languageId: this.util.handler.languageId,
              branchId: this.branchId,
              supplierId: this.supplierId,
              categoryId: this.categoryId ? this.categoryId : this.categoryIds[0],
              latitude: this.util.handler.latitude,
              longitude: this.util.handler.longitude
            };

            if (this.loggedIn) {
              obj["accessToken"] = this.userToken;
            }

            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].getSupplierDetail, obj).subscribe(function (response) {
              if (!!response && response.data) {
                _this4.supplierData = Object.assign(Object.assign({}, _this4.supplierData), response.data);

                _this4.seo.updateTitle("".concat(_this4.supplierData.name, " | ").concat(_core_global__WEBPACK_IMPORTED_MODULE_13__["GlobalVariable"].SITE_NAME));

                _this4.seo.updateDescription(_this4.supplierData.address);

                _this4.supplierData.business_start_date = new Date(_this4.supplierData.business_start_date).getFullYear();
                _this4.supplierData["images"] = [];

                if (_this4.supplierData.supplier_image && _this4.supplierData.supplier_image.length) {
                  _this4.supplierData.supplier_image.forEach(function (image) {
                    _this4.supplierData["images"].push({
                      image: image,
                      display_image: _this4.util.thumbnail(image)
                    });
                  });
                }
              }
            });
          }
        }, {
          key: "onBannerImageLoad",
          value: function onBannerImageLoad(banner) {
            banner["display_image"] = banner["image"];
          }
        }, {
          key: "rateSupplier",
          value: function rateSupplier() {
            if (this.loggedIn) {
              var obj = {
                supplierId: this.supplierId,
                supplierBranchId: this.branchId,
                categoryId: this.categoryIds[0]
              };
              this.router.navigate(["orders/rating"], {
                queryParams: obj
              });
            } else {
              this.message.alert("warning", "".concat(this.translate.instant("Please login to continue!")));
            }
          }
        }, {
          key: "onSubCatSelect",
          value: function onSubCatSelect(subCatData, append) {
            var _this5 = this;

            if (this.categoryIds.length && !this.subCatIndex) {
              var flow = subCatData.category_flow.split('>');
              var index = flow.indexOf('SupplierInfo');

              if (index > -1) {
                if (flow[index + 1] === 'Pl') {
                  this.selectedCatPath.push(subCatData.name);
                  this.navigateToProducts(subCatData.id);
                  return;
                }
              }
            }

            this.selectedCatPath.push(subCatData["name"]);
            this.selectedCatIds.push(subCatData["id"]);

            if (subCatData["is_cub_category"]) {
              var param_data = {
                categoryId: subCatData.id,
                languageId: this.util.handler.languageId,
                supplierId: this.supplierId
              };
              this.loading = true;
              this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].getSubcategory, param_data, true).subscribe(function (response) {
                if (!!response && response.data) {
                  response.data.map(function (data) {
                    data["display_image"] = _this5.util.thumbnail(data["image"]);
                    data["id"] = data["sub_category_id"];
                  });

                  _this5.subCategories.push(response.data);

                  if (append) {
                    _this5.subCatIndex++;
                  }
                }

                _this5.loading = false;
              });
            } else {
              this.navigateToProducts(subCatData.id);
            }
          }
        }, {
          key: "onImageLoad",
          value: function onImageLoad(category) {
            category["display_image"] = category["image"];
          }
        }, {
          key: "navigateToProducts",
          value: function navigateToProducts(cat_id) {
            var seoValue = this.selectedCatPath[0].replace(/ &/g, "-");
            var param_obj = {};
            Object.assign(param_obj, this.util.handler);
            param_obj["subCatId"] = [cat_id];
            param_obj["category"] = this.selectedCatIds.length ? this.selectedCatIds[0] : this.categoryId;
            param_obj["product"] = this.route.snapshot.queryParamMap.get("product");
            param_obj["supplierId"] = [this.supplierId];
            param_obj["path"] = this.selectedCatPath;
            this.router.navigate(["products/product-listing", seoValue], {
              queryParams: {
                f: this.util.encryptData(param_obj)
              }
            });
          }
        }, {
          key: "back",
          value: function back() {
            if (this.subCatIndex > 0) {
              this.subCategories.splice(this.subCatIndex, 1);
              this.selectedCatPath.splice(this.subCatIndex, 1);
              this.selectedCatIds.splice(this.subCatIndex, 1);
              this.subCatIndex--;
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this.subCategories = [];
            this.selectedCatPath = [];
            this.subCatIndex = 0;
          }
        }, {
          key: "addRemoveFavourites",
          value: function addRemoveFavourites(is_favourite) {
            var _this6 = this;

            var url = "";

            if (is_favourite) {
              url = _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].favourite.removeFromFavourites;
            } else {
              url = _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].favourite.addToFavourites;
            }

            var form_data = {
              supplierId: this.supplierId,
              accessToken: this.user.getUserToken
            };
            this.http.postData(url, form_data, true).subscribe(function (response) {
              if (!!response && response.data) {
                _this6.message.toast("success", "".concat(_this6.localization.transform('supplier'), " ").concat(is_favourite ? _this6.translate.instant("Removed From") : _this6.translate.instant("Added To"), " ").concat(_this6.translate.instant('Favourites')));

                _this6.supplierData["Favourite"] = !is_favourite;
              }
            });
          }
        }, {
          key: "trackByBannerFn",
          value: function trackByBannerFn(id, index) {
            return index;
          }
        }, {
          key: "trackBySubCategoryFn",
          value: function trackBySubCategoryFn(id, index) {
            return index;
          }
        }, {
          key: "trackBySupplierFn",
          value: function trackBySupplierFn(id, index) {
            return index;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (!!this.styleSubscription) this.styleSubscription.unsubscribe();
            if (!!this.getDataSubscribe) this.getDataSubscribe.unsubscribe();
            if (!!this.routeSubscription) this.routeSubscription.unsubscribe();
            if (!!this.userSubscription) this.userSubscription.unsubscribe();
            this.closeModal.nativeElement.click();
            if (!!this.categorySubscription) this.categorySubscription.unsubscribe();
          }
        }]);

        return SupplierDetailsComponent;
      }();

      SupplierDetailsComponent.ctorParameters = function () {
        return [{
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
        }, {
          type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_2__["MessagingService"]
        }, {
          type: _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_12__["LocalizationPipe"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]
        }, {
          type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"]
        }, {
          type: Window,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
            args: [_services_window_window_service__WEBPACK_IMPORTED_MODULE_11__["WINDOW"]]
          }]
        }];
      };

      SupplierDetailsComponent.propDecorators = {
        closeModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"],
          args: ["closeModal", {
            "static": false
          }]
        }],
        getScreenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["HostListener"],
          args: ["window:resize", []]
        }]
      };
      SupplierDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: "app-supplier-details",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./supplier-details.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/suppliers/supplier-details/supplier-details.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./supplier-details.component.scss */
        "./src/app/layout/pages/suppliers/supplier-details/supplier-details.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_2__["MessagingService"], _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_12__["LocalizationPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"], _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"], Window])], SupplierDetailsComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/suppliers/supplier-listing/supplier-listing.component.scss":
    /*!*****************************************************************************************!*\
      !*** ./src/app/layout/pages/suppliers/supplier-listing/supplier-listing.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutPagesSuppliersSupplierListingSupplierListingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "hr {\n  border: 1px solid #cecece61;\n}\n\n.col-md-2 .spechial_products_image {\n  height: 126px;\n}\n\n.spechial_products_outter {\n  min-height: 220px;\n}\n\n.sorting-btn {\n  float: right;\n  margin-left: 20px;\n  margin-top: -4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL3N1cHBsaWVycy9zdXBwbGllci1saXN0aW5nL3N1cHBsaWVyLWxpc3RpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUVsQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlcy9zdXBwbGllcnMvc3VwcGxpZXItbGlzdGluZy9zdXBwbGllci1saXN0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VjZWNlNjE7XG59XG5cbi5jb2wtbWQtMiAuc3BlY2hpYWxfcHJvZHVjdHNfaW1hZ2V7XG4gIGhlaWdodDogMTI2cHg7XG59XG5cbi5zcGVjaGlhbF9wcm9kdWN0c19vdXR0ZXIge1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbn1cbi5zb3J0aW5nLWJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC00cHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/layout/pages/suppliers/supplier-listing/supplier-listing.component.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/layout/pages/suppliers/supplier-listing/supplier-listing.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: SupplierListingComponent */

    /***/
    function srcAppLayoutPagesSuppliersSupplierListingSupplierListingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupplierListingComponent", function () {
        return SupplierListingComponent;
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


      var _core_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../core/global */
      "./src/app/core/global.ts");
      /* harmony import */


      var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../services/seo/seo.service */
      "./src/app/services/seo/seo.service.ts");
      /* harmony import */


      var _shared_layout_shared_components_questions_questions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../shared/layout-shared/components/questions/questions.component */
      "./src/app/layout/shared/layout-shared/components/questions/questions.component.ts");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
      /* harmony import */


      var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../core/theme/styleVariables.model */
      "./src/app/core/theme/styleVariables.model.ts");
      /* harmony import */


      var _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../shared/models/pagination.model */
      "./src/app/shared/models/pagination.model.ts");
      /* harmony import */


      var _core_apiUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../core/apiUrl */
      "./src/app/core/apiUrl.ts");
      /* harmony import */


      var _services_http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../../services/http/http.service */
      "./src/app/services/http/http.service.ts");
      /* harmony import */


      var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../../../services/utility/utility.service */
      "./src/app/services/utility/utility.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../../../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _shared_models_categoryFilter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../shared/models/categoryFilter */
      "./src/app/shared/models/categoryFilter.ts");
      /* harmony import */


      var _services_data_cache_data_cache_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../services/data-cache/data-cache.service */
      "./src/app/services/data-cache/data-cache.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);

      ;

      var SupplierListingComponent = /*#__PURE__*/function () {
        function SupplierListingComponent(translate, route, util, http, router, user, seo, localization, cacheService, dialogService) {
          _classCallCheck(this, SupplierListingComponent);

          this.translate = translate;
          this.route = route;
          this.util = util;
          this.http = http;
          this.router = router;
          this.user = user;
          this.seo = seo;
          this.localization = localization;
          this.cacheService = cacheService;
          this.dialogService = dialogService;
          this.tags = [];
          this.isTagSearch = false;
          this.isPreparationTimeOpen = false;
          this.search = "";
          this.categoryId = "";
          this.categoryName = "";
          this.suppliers = [];
          this.noData = false;
          this.hoverIndex = -1;
          this.isRecommendedSuppliers = false;
          this.isBestSellers = false;
          this.isFastDelivery = false;
          this.is_subCat = 0;
          this.is_favourite = 0;
          this.is_all = 0;
          this.showSidebar = false;
          this.sidebarCategories = [];
          this.categories = [];
          this.isLoading = true;
          this.is_n_level = 0;
          this.showSubCat = 0;
          this.subCategories = [];
          this.subCatIndex = -1;
          this.subCategoryIds = [];
          this.selectedCatIds = [];
          this.isProcessing = false;
          this.sortBy = 0;
          this.selected_order_type = 1;
          this.clientCode = _core_global__WEBPACK_IMPORTED_MODULE_2__["GlobalVariable"].UNIQUE_ID;
          this.minPrepTime = 0;
          this.maxPrepTime = 100;
          this.isPreparationTime = 0;
          this.isFreeDelivery = 0;
          this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_6__["StyleVariables"]();
          this.pagination = new _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_7__["PaginationModel"]();
          this.categoryFilter = new _shared_models_categoryFilter__WEBPACK_IMPORTED_MODULE_14__["CategoryFilter"]();
        }

        _createClass(SupplierListingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.seo.updateTitle("".concat(this.localization.transform('suppliers'), " | ").concat(_core_global__WEBPACK_IMPORTED_MODULE_2__["GlobalVariable"].SITE_NAME));
            this.styleSubscription = this.util.getStyles.subscribe(function (styles) {
              _this7.style = styles;
            });
            this.settingsSubscription = this.util.getSettings.subscribe(function (settings) {
              if (settings) {
                _this7.settings = settings;
              }
            });
            this.routeSubscription = this.route.queryParams.subscribe(function (params) {
              _this7.categoryId = params["cat_id"] ? params["cat_id"] : null;
              _this7.isRecommendedSuppliers = params["rec"] && params["rec"] == 1 ? true : false;
              _this7.isBestSellers = params["best_seller"] && params["best_seller"] == 1 ? true : false;
              _this7.isFastDelivery = params["fast_delivery"] && params["fast_delivery"] == 1 ? true : false;
              _this7.is_subCat = params["is_subCat"] ? parseInt(params["is_subCat"]) : 0;
              _this7.is_all = params["all"] ? parseInt(params["all"]) : 0;
              _this7.is_favourite = params["favourites"] ? parseInt(params["favourites"]) : 0;
              _this7.categoryFilter.catId = _this7.categoryId;
              _this7.categoryFilter.subCatId = params['subCat_id'];
              _this7.categoryFilter.childCatId = params['childCat_id'];
              _this7.search = params['search'];
              _this7.tags = params['tags'] ? params['tags'].split(',') : [];
              _this7.isTagSearch = params['tag_search'] && params['tag_search'] == 1 ? true : false;
              var previousCatName = _this7.categoryName;
              _this7.categoryName = params["cat_name"];
              _this7.showSubCat = parseInt(params['n_lvl']);
              _this7.is_n_level = parseInt(params['n_lvl']);
              _this7.sortBy = params['sort'] ? parseInt(params['sort']) : 0;
              _this7.tag_id = params['tag_id'] ? parseInt(params['tag_id']) : undefined;
              if (params['mode']) _this7.catShortValue = parseInt(params['mode']);

              if (_this7.showSubCat) {
                _this7.getNlevelData();
              } else {
                if (!_this7.is_favourite) {
                  _this7.subscribeData();
                }
              }

              if (previousCatName && previousCatName != _this7.categoryName) _this7.subscribeData();
            });

            if (this.categoryName) {
              this.seo.updateTitle("".concat(this.categoryName, " | ").concat(_core_global__WEBPACK_IMPORTED_MODULE_2__["GlobalVariable"].SITE_NAME));
            }

            this.categorySubscription = this.util.getLanguageCategoryData.subscribe(function (data) {
              if (data && data.english) {
                if (_this7.settings.isCustomFlow) {
                  var selected_cat = _this7.util.getLocalData('selected_category', true);

                  if (selected_cat) {
                    var category = data.english.find(function (c) {
                      return c.type == _this7.settings['app_type'] && c.id == selected_cat.id;
                    });
                    _this7.categoryFlowId = category.id;
                    _this7.categories = category['sub_category'] || [];
                  }
                } else {
                  _this7.categories = data.english;
                }
              }

              _this7.subscribeData();
            });
          }
        }, {
          key: "subscribeData",
          value: function subscribeData() {
            var _this8 = this;

            this.dataSubscription = this.util.callGetData.subscribe(function (showData) {
              if (showData) {
                if (_this8.settings.selected_template == 4) {
                  _this8.getOrderType();
                }

                _this8.getSupplierListingData();
              }
            });
          }
        }, {
          key: "getOrderType",
          value: function getOrderType() {
            var _this9 = this;

            this.orderTypeSubscription = this.util.getOrderTypeData.subscribe(function (res) {
              if (res) {
                _this9.selected_order_type = Number(res);
              }
            });
          }
        }, {
          key: "getSupplierListingData",
          value: function getSupplierListingData() {
            if (this.isRecommendedSuppliers) {
              this.settings.selected_template == 3 || this.settings.selected_template == 4 ? this.getRecommendedSuppliersV1() : this.getRecommendedSuppliers();
              return;
            }

            if (this.isBestSellers && this.settings.enable_best_sellers) {
              this.settings.selected_template == 3 || this.settings.selected_template == 4 ? this.getRecommendedSuppliersV1() : this.getRecommendedSuppliers();
              return;
            }

            if (this.isFastDelivery) {
              this.getFastDeliveryData();
              return;
            } else if (this.is_favourite) {
              this.getFavourites();
              return;
            } else if (this.is_all) {
              this.settings.selected_template == 3 || this.settings.selected_template == 4 ? this.getAllSuppliersV1() : this.getAllSuppliers();
              return;
            } else if (this.isTagSearch) {
              this.getProductSupplierList();
              return;
            } else {
              if (this.tag_id && this.settings.show_tags_for_suppliers) {
                this.getSupplierListByTagId();
                return;
              } else {
                this.getSuppliers();
                return;
              }
            }
          }
        }, {
          key: "pageChange",
          value: function pageChange(event) {
            this.pagination.currentPage = event;
            this.pagination.offset = event > 1 ? (event - 1) * this.pagination.perPage : 0;
            this.getSupplierListingData();
          }
        }, {
          key: "onSortBy",
          value: function onSortBy(sortBy) {
            this.sortBy = sortBy;
            this.clearCache();
            this.getAllSuppliers();
          }
        }, {
          key: "onCatSortBy",
          value: function onCatSortBy(catShortBy) {
            this.pagination = new _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_7__["PaginationModel"]();
            this.catShortValue = catShortBy;
            this.clearCache();
            this.getAllSuppliers();
          }
        }, {
          key: "clearCache",
          value: function clearCache() {
            this.cacheService.removeKey(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getHomeSuppliers);
            this.cacheService.removeKey(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getHomeSuppliersV1);
            this.cacheService.removeKey(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getHomeSuppliersV2);
            this.cacheService.removeKey(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getHomeSuppliersV3);
            this.cacheService.removeKey(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getFastestDeliverySuppliers);
          }
        }, {
          key: "showFilter",
          value: function showFilter() {
            this.isPreparationTimeOpen = !this.isPreparationTimeOpen;
          }
        }, {
          key: "filterRecords",
          value: function filterRecords(event) {
            if (event.isSearch) {
              this.isFreeDelivery = event.freeDeliveryValue;
              this.minPrepTime = event.preparationTime.min;
              this.maxPrepTime = event.preparationTime.max;
              this.isPreparationTime = event.isPreparationTime;
              this.clearCache();
              this.getAllSuppliers();
            }

            this.isPreparationTimeOpen = false;
          }
        }, {
          key: "getNlevelData",
          value: function getNlevelData() {
            var _this10 = this;

            if (this.showSubCat) {
              var param_data = {
                categoryId: this.categoryFilter.subCatId || this.categoryFilter.catId,
                languageId: this.util.handler.languageId
              };
              this.isProcessing = true;
              this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getSubcategory, param_data, true).subscribe(function (response) {
                if (!!response && response.data) {
                  if (_this10.settings.app_type == 1) {
                    if (response.data.length == 0 || response.data[0].menu_type == 0) {
                      _this10.gotoSupplierList({
                        id: param_data.categoryId,
                        name: _this10.categoryName
                      });
                    }

                    _this10.subCategories.push(response.data);

                    _this10.subCatIndex++;
                    return;
                  }

                  var selected_cat = response.data.find(function (el) {
                    return el.sub_category_id == _this10.categoryFilter.childCatId;
                  });

                  if (!!selected_cat) {
                    selected_cat['id'] = selected_cat['sub_category_id'];

                    _this10.onSubCatSelect(selected_cat, true);
                  }
                }
              });
            }
          }
        }, {
          key: "getSuppliers",
          value: function getSuppliers() {
            var _this11 = this;

            if (this.settings.isCustomFlow && !this.categoryFlowId) return;
            this.isLoading = true;
            var param_data = {
              languageId: this.util.handler.languageId,
              categoryId: this.categoryId,
              latitude: this.util.handler.latitude,
              longitude: this.util.handler.longitude,
              search: this.search || '',
              sort_by: this.sortBy,
              offset: moment__WEBPACK_IMPORTED_MODULE_17__().format('Z')
            };

            if (this.settings.enable_rating_wise_sorting) {
              param_data.sort_by = 2;
            }

            if (this.settings.isCustomFlow) {
              param_data.categoryId = this.categoryFlowId;
              param_data['subCat'] = this.subCategoryIds.length ? this.subCategoryIds[0] : this.categoryId;
            }

            if (this.settings.selected_template == 4 && this.settings.app_type == 1) {
              switch (this.selected_order_type) {
                case 0:
                  param_data['filter_by'] = 1;
                  break;

                case 1:
                  param_data['filter_by'] = 2;
                  break;

                case 2:
                  param_data['filter_by'] = 3;
                  break;
              }
            }

            var api = _core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getSupplierList;

            if (this.settings.enable_zone_geofence) {
              api = _core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getSupplierListV1;
            }

            this.noData = false;
            this.http.postData(api, param_data).subscribe(function (response) {
              if (!!response && response.data) {
                // if (response.data.supplierList.length == 1 && !this.showSubCat) {
                //   this.supplierDetail(response.data.supplierList[0]);
                //   return;
                // }
                _this11.suppliers = response.data.supplierList;

                _this11.suppliers.map(function (data) {
                  parseFloat(data["rating"]);
                  data["display_supplier_image"] = _this11.util.thumbnail(data["supplier_image"]);
                  data["display_logo"] = _this11.util.thumbnail(data["logo"]);
                });
              }

              _this11.noData = true;
              _this11.isLoading = false;
            }, function (err) {
              return _this11.isLoading = false;
            });
          }
        }, {
          key: "getAllSuppliers",
          value: function getAllSuppliers() {
            var _this12 = this;

            this.isLoading = true;
            var param_data = {
              languageId: this.util.handler.languageId,
              latitude: this.util.handler.latitude,
              longitude: this.util.handler.longitude,
              sort_by: this.sortBy,
              search: this.search || '',
              limit: this.pagination.perPage,
              skip: this.pagination.offset,
              is_free_delivery: this.isFreeDelivery === 1 ? 1 : 0
            };
            var Obj = {
              isPreparationTime: this.isPreparationTime,
              preparationTime: {
                min: this.minPrepTime,
                max: this.maxPrepTime
              },
              freeDeliveryValue: this.isFreeDelivery,
              isSearch: false
            };
            this.FilterReset = Obj;

            if (this.settings.enable_rating_wise_sorting && this.sortBy !== 7) {
              param_data.sort_by = 2;
            }

            if (this.settings.app_type == 1) {
              param_data['self_pickup'] = this.util.handler.selfPickup;

              switch (this.catShortValue) {
                case 0:
                  param_data['self_pickup'] = 0;
                  param_data['is_dine_in'] = 0;
                  break;

                case 1:
                  param_data['self_pickup'] = 1;
                  param_data['is_dine_in'] = 0;
                  break;

                case 2:
                  param_data['is_dine_in'] = 1;
                  param_data['self_pickup'] = 0;
                  break;
              }
            }

            this.isPreparationTime === 1 ? param_data['min_preparation_time'] = this.minPrepTime : null;
            this.isPreparationTime === 1 ? param_data['max_preparation_time'] = this.maxPrepTime : null;
            this.noData = false;
            var api = _core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getHomeSuppliersV2;

            if (this.settings.enable_sequence_wise_supplier) {
              param_data.sort_by = 7;
            }

            if (this.settings.enable_zone_geofence) {
              api = _core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getHomeSuppliersV3;
            }

            this.http.getData(api, param_data).subscribe(function (response) {
              if (!!response && response.data) {
                _this12.suppliers = response.data.list;
                _this12.pagination.count = response.data.count;

                _this12.suppliers.map(function (data) {
                  parseFloat(data["rating"]);
                  data["display_supplier_image"] = _this12.util.thumbnail(data["supplier_image"]);
                  data["display_logo"] = _this12.util.thumbnail(data["logo"]);
                });
              }

              _this12.noData = true;
              _this12.isLoading = false;
            }, function (err) {
              return _this12.isLoading = false;
            });
          }
        }, {
          key: "getAllSuppliersV1",
          value: function getAllSuppliersV1() {
            var _this13 = this;

            this.isLoading = true;
            var param_data = {
              languageId: this.util.handler.languageId,
              latitude: this.util.handler.latitude,
              longitude: this.util.handler.longitude,
              sort_by: this.sortBy,
              search: this.search || ''
            };

            if (this.settings.app_type == 1) {
              param_data['self_pickup'] = this.util.handler.selfPickup;

              switch (this.catShortValue) {
                case 0:
                  param_data['self_pickup'] = 0;
                  param_data['is_dine_in'] = 0;
                  break;

                case 1:
                  param_data['self_pickup'] = 1;
                  param_data['is_dine_in'] = 0;
                  break;

                case 2:
                  param_data['is_dine_in'] = 1;
                  param_data['self_pickup'] = 0;
                  break;
              }
            }

            if (this.settings.enable_rating_wise_sorting) {
              param_data.sort_by = 2;
            }

            this.noData = false;
            var api = _core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getHomeSuppliersV1;

            if (this.settings.enable_sequence_wise_supplier) {
              param_data.sort_by = 7;
            }

            if (this.settings.enable_zone_geofence) {
              api = _core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getHomeSuppliersV3;
            }

            this.http.getData(api, param_data).subscribe(function (response) {
              if (!!response && response.data) {
                _this13.suppliers = response.data;

                _this13.suppliers.map(function (data) {
                  parseFloat(data["rating"]);
                  data["display_supplier_image"] = _this13.util.thumbnail(data["supplier_image"]);
                  data["display_logo"] = _this13.util.thumbnail(data["logo"]);
                });
              }

              _this13.noData = true;
              _this13.isLoading = false;
            }, function (err) {
              return _this13.isLoading = false;
            });
          }
        }, {
          key: "getRecommendedSuppliers",
          value: function getRecommendedSuppliers() {
            var _this14 = this;

            this.isLoading = true;
            var params = {
              languageId: this.util.handler.languageId,
              latitude: this.util.handler.latitude,
              longitude: this.util.handler.longitude
            };
            this.noData = false;

            if (this.settings.enable_rating_wise_sorting) {
              params['order_by'] = 1;
            }

            if (this.settings.selected_template == 4 && this.settings.app_type == 1) {
              switch (this.selected_order_type) {
                case 0:
                  params['filter_by'] = 1;
                  break;

                case 1:
                  params['filter_by'] = 2;
                  break;

                case 2:
                  params['filter_by'] = 3;
                  break;
              }
            }

            var api = _core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getSpecialOffers;

            if (this.settings.enable_zone_geofence) {
              api = _core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getSpecialOffersV2;
            }

            this.http.getData(api, params).subscribe(function (response) {
              _this14.noData = true;

              if (!!response && response.data) {
                _this14.suppliers = response.data.SupplierInArabic;

                _this14.suppliers.map(function (data) {
                  parseFloat(data["rating"]);
                  data["display_supplier_image"] = _this14.util.thumbnail(data["supplier_image"]);
                  data["display_logo"] = _this14.util.thumbnail(data["logo"]);
                });
              }

              _this14.isLoading = false;
            }, function (err) {
              return _this14.isLoading = false;
            });
          }
        }, {
          key: "getRecommendedSuppliersV1",
          value: function getRecommendedSuppliersV1() {
            var _this15 = this;

            this.isLoading = true;
            var params = {
              languageId: this.util.handler.languageId,
              latitude: this.util.handler.latitude,
              longitude: this.util.handler.longitude
            };

            if (this.settings.enable_rating_wise_sorting) {
              params['order_by'] = 1;
            }

            if (this.settings.selected_template == 4 && this.settings.app_type == 1) {
              switch (this.selected_order_type) {
                case 0:
                  params['filter_by'] = 1;
                  break;

                case 1:
                  params['filter_by'] = 2;
                  break;

                case 2:
                  params['filter_by'] = 3;
                  break;
              }
            }

            this.noData = false;
            this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getSpecialOffersV1, params).subscribe(function (response) {
              if (!!response && response.data) {
                if (_this15.isBestSellers && _this15.settings.enable_best_sellers) {
                  _this15.suppliers = response.data.bestSellersSuppliers;
                } else if (_this15.settings.selected_template == 3 && _this15.isRecommendedSuppliers) {
                  _this15.suppliers = response.data.bestSellersSuppliers;
                } else {
                  _this15.suppliers = response.data.SupplierInArabic;
                }

                _this15.suppliers.map(function (data) {
                  parseFloat(data["rating"]);
                  data["display_supplier_image"] = _this15.util.thumbnail(data["supplier_image"]);
                  data["display_logo"] = _this15.util.thumbnail(data["logo"]);
                });
              }

              _this15.noData = true;
              _this15.isLoading = false;
            }, function (err) {
              return _this15.isLoading = false;
            });
          }
        }, {
          key: "getFastDeliveryData",
          value: function getFastDeliveryData() {
            var _this16 = this;

            this.clearCache();
            var paramData = {
              latitude: this.util.handler.latitude,
              longitude: this.util.handler.longitude,
              languageId: this.util.handler.languageId,
              offset: 0
            };
            this.isLoading = true;
            this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getFastestDeliverySuppliers, paramData).subscribe(function (res) {
              _this16.isLoading = false;
              _this16.suppliers = [];
              _this16.suppliers = res.data;

              _this16.suppliers.map(function (data) {
                parseFloat(data["rating"]);
                data["display_supplier_image"] = _this16.util.thumbnail(data["supplier_image"]);
                data["display_logo"] = _this16.util.thumbnail(data["logo"]);
              });
            });
          }
        }, {
          key: "getFavourites",
          value: function getFavourites() {
            var _this17 = this;

            this.isLoading = true;
            this.suppliers = [];
            var param_data = {
              languageId: this.util.handler.languageId,
              accessToken: this.user.getUserToken,
              latitude: this.util.handler.latitude,
              longitude: this.util.handler.longitude
            };
            this.noData = false;
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].favourite.getFavourites, param_data).subscribe(function (response) {
              if (!!response && response.data) {
                _this17.suppliers = response.data.favourites;

                _this17.suppliers.map(function (data) {
                  parseFloat(data["rating"]);
                  data["id"] = data["supplier_id"];
                  data["display_supplier_image"] = _this17.util.thumbnail(data["supplier_image"]);
                  data["display_logo"] = _this17.util.thumbnail(data["logo"]);
                });
              }

              _this17.noData = true;
              _this17.isLoading = false;
            }, function (err) {
              return _this17.isLoading = false;
            });
          }
        }, {
          key: "getProductSupplierList",
          value: function getProductSupplierList() {
            var _this18 = this;

            this.isLoading = true;
            var param_data = {
              languageId: this.util.handler.languageId,
              latitude: this.util.handler.latitude,
              longitude: this.util.handler.longitude,
              productName: this.tags
            };
            this.noData = false;
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].productSupplierList, param_data).subscribe(function (response) {
              if (!!response && response.data) {
                _this18.suppliers = response.data.supplier;

                _this18.suppliers.map(function (data) {
                  parseFloat(data["rating"]);
                  data["display_supplier_image"] = _this18.util.thumbnail(data["supplier_image"]);
                  data["display_logo"] = _this18.util.thumbnail(data["logo"]);
                });
              }

              _this18.noData = true;
              _this18.isLoading = false;
            }, function (err) {
              return _this18.isLoading = false;
            });
          }
        }, {
          key: "getSupplierListByTagId",
          value: function getSupplierListByTagId() {
            var _this19 = this;

            if (this.settings.isCustomFlow && !this.categoryFlowId) return;
            this.isLoading = true;
            var param_data = {
              languageId: this.util.handler.languageId,
              latitude: this.util.handler.latitude,
              longitude: this.util.handler.longitude,
              tag_id: this.tag_id
            };

            if (this.settings.selected_template == 4 && this.settings.app_type == 1) {
              switch (this.selected_order_type) {
                case 0:
                  param_data['filter_by'] = 1;
                  break;

                case 1:
                  param_data['filter_by'] = 2;
                  break;

                case 2:
                  param_data['filter_by'] = 3;
                  break;
              }
            }

            var api = _core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getSupplierListByTagId;

            if (this.settings.enable_zone_geofence) {
              api = _core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getSupplierListByTagIdV1;
            }

            this.noData = false;
            this.http.getData(api, param_data).subscribe(function (response) {
              if (!!response && response.data) {
                // if (response.data.supplierList.length == 1 && !this.showSubCat) {
                //   this.supplierDetail(response.data.supplierList[0]);
                //   return;
                // }
                _this19.suppliers = response.data.supplierList;

                _this19.suppliers.map(function (data) {
                  parseFloat(data["rating"]);
                  data["display_supplier_image"] = _this19.util.thumbnail(data["supplier_image"]);
                  data["display_logo"] = _this19.util.thumbnail(data["logo"]);
                });
              }

              _this19.noData = true;
              _this19.isLoading = false;
            }, function (err) {
              return _this19.isLoading = false;
            });
          }
        }, {
          key: "onLogoLoad",
          value: function onLogoLoad(supplier) {
            supplier["display_logo"] = supplier["logo"];
          }
        }, {
          key: "onImageLoad",
          value: function onImageLoad(supplier) {
            supplier["display_supplier_image"] = supplier["supplier_image"];
          }
        }, {
          key: "supplierDetail",
          value: function supplierDetail(supplier) {
            var _this20 = this;

            if (this.settings.app_type == 1) {
              this.router.navigate(["products/listing"], {
                queryParams: {
                  supplierId: supplier.id
                }
              });
            } else if (this.settings.app_type == 8) {
              var cat_ids = [];

              if (supplier.category && supplier.category.length) {
                supplier["category"].forEach(function (element) {
                  cat_ids.push(element.category_id);
                });
              }

              var param_obj = Object.assign({}, this.util.handler);
              param_obj['agent'] = 1;
              param_obj["supplierId"] = [supplier.id];
              param_obj['categoryId'] = cat_ids.join();
              param_obj["showSupplier"] = false;
              param_obj['branch_id'] = supplier.supplier_branch_id;
              var queryParams = this.route.snapshot.queryParams;

              if (this.is_n_level) {
                param_obj['subCatId'] = [this.selectedCatIds[this.selectedCatIds.length - 1]];
              } // else {
              //   param_obj['subCatId'] = Object.values(queryParams).filter(value => {
              //     let parsed = Number.parseInt(value);
              //     if (!Number.isNaN(parsed)) return parsed;
              //   });
              // }
              // if (this.router.url.startsWith('/')) {
              //   this.util.clearLocalData('ques_data');
              //   this.util.setCart([]);
              //   param_obj["showSupplier"] = true;
              // }


              this.router.navigate(["/products/product-listing", supplier.name], {
                queryParams: {
                  f: this.util.encryptData(param_obj)
                }
              });
            } else {
              this.isLoading = true;
              this.showSidebar = false;
              this.selectedSupplierId = supplier.id;
              var query_params = {
                categoryId: this.categoryId,
                languageId: this.util.handler.languageId,
                supplierId: supplier.id
              };
              this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getSubcategory, query_params, false).subscribe(function (response) {
                if (!!response && response.data) {
                  if (response.data && response.data.length) {
                    _this20.sidebarCategories = response.data;
                    _this20.showSidebar = true;
                  } else {
                    _this20.sidebarCategories = [];
                    _this20.showSidebar = false;
                  }
                }

                _this20.isLoading = false;
              }, function (err) {
                return _this20.isLoading = false;
              });
            } //   if (this.categoryId) {
            //     this.router.navigate(["supplier/supplier-detail"], {
            //       queryParams: {
            //         sup_id: supplier.id,
            //         branch_id: supplier.supplier_branch_id,
            //         cat_id: this.categoryId,
            //         name: this.categoryName
            //       }
            //     });
            //   } else {
            //     let cat_ids: Array<any> = [];
            //     supplier["category"].forEach(element => {
            //       cat_ids.push(element.category_id);
            //     });
            //     this.router.navigate(["supplier/supplier-detail"], {
            //       queryParams: {
            //         sup_id: supplier.id,
            //         branch_id: supplier.supplier_branch_id,
            //         cat_ids: cat_ids.join(),
            //       }
            //     });
            //   }
            // }

          }
        }, {
          key: "onFavourite",
          value: function onFavourite(id) {
            if (this.is_favourite != 1) return;
            this.suppliers = this.suppliers.filter(function (supplier) {
              return supplier.id !== id;
            });
          }
        }, {
          key: "closeSidebar",
          value: function closeSidebar($event) {
            this.showSidebar = $event;
          }
        }, {
          key: "onSubCatSelect",
          value: function onSubCatSelect(subCatData, append) {
            var _this21 = this;

            this.selectedCatIds.push(subCatData["id"] || subCatData['sub_category_id']);

            if (subCatData["is_subcategory"] && (this.settings.app_type == 8 || this.settings.app_type == 1 && subCatData.menu_type == 1)) {
              this.categoryName = subCatData['name'];
              var param_data = {
                categoryId: subCatData.id || subCatData['category_id'],
                languageId: this.util.handler.languageId
              };
              this.isProcessing = true;
              this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"].getSubcategory, param_data, true).subscribe(function (response) {
                if (!!response && response.data) {
                  response.data.map(function (data) {
                    data["id"] = data["sub_category_id"];
                  });

                  if (response.data.length == 0 || response.data[0].menu_type == 0) {
                    _this21.gotoSupplierList(subCatData);
                  }

                  _this21.subCategories.push(response.data);

                  if (append) {
                    _this21.subCatIndex++;
                  }
                }

                _this21.isProcessing = false;
              });
            } else {
              if (subCatData.is_question) {
                var dialogRef = this.dialogService.open(_shared_layout_shared_components_questions_questions_component__WEBPACK_IMPORTED_MODULE_4__["QuestionsComponent"], {
                  width: '60%',
                  showHeader: false,
                  transitionOptions: '600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
                  data: {
                    cat_id: subCatData['id'] || subCatData['category_id']
                  }
                });
                dialogRef.onClose.subscribe(function (navigate) {
                  if (navigate) {
                    _this21.showSubCat = 0;
                    _this21.subCategoryIds = [subCatData['id'] || subCatData['category_id']];
                    _this21.categoryName = subCatData['name'];

                    _this21.getSuppliers(); // this.filterProducts(false);

                  }
                });
              } else {
                this.showSubCat = 0;
                this.subCategoryIds = [subCatData['id'] || subCatData['category_id']];
                this.categoryName = subCatData['name'];
                this.getSuppliers(); // this.filterProducts(false);
              }
            }
          }
        }, {
          key: "gotoSupplierList",
          value: function gotoSupplierList(subCatData) {
            this.showSubCat = 0;
            this.subCategoryIds = [subCatData['id'] || subCatData['category_id']];
            this.categoryName = subCatData['name'];
            this.getSuppliers();
          }
        }, {
          key: "trackBySubCatFn",
          value: function trackBySubCatFn(id, index) {
            return index;
          }
        }, {
          key: "trackByProvidersFn",
          value: function trackByProvidersFn(id, index) {
            return index;
          }
        }, {
          key: "trackBySupplierFn",
          value: function trackBySupplierFn(id, index) {
            return index;
          }
        }, {
          key: "trackBySupplierDataFn",
          value: function trackBySupplierDataFn(id, index) {
            return index;
          }
        }, {
          key: "trackByFakeListFn",
          value: function trackByFakeListFn(id, index) {
            return index;
          }
        }, {
          key: "trackByOfferFn",
          value: function trackByOfferFn(id, index) {
            return index;
          }
        }, {
          key: "trackBySubCategoriesFn",
          value: function trackBySubCategoriesFn(id, index) {
            return index;
          }
        }, {
          key: "trackBySuppliersFn",
          value: function trackBySuppliersFn(id, index) {
            return index;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (!!this.routeSubscription) this.routeSubscription.unsubscribe();
            if (!!this.dataSubscription) this.dataSubscription.unsubscribe();
            if (!!this.styleSubscription) this.styleSubscription.unsubscribe();
            if (!!this.settingsSubscription) this.settingsSubscription.unsubscribe();
            if (!!this.categorySubscription) this.categorySubscription.unsubscribe();
            if (!!this.orderTypeSubscription) this.orderTypeSubscription.unsubscribe();
          }
        }]);

        return SupplierListingComponent;
      }();

      SupplierListingComponent.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }, {
          type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"]
        }, {
          type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"]
        }, {
          type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"]
        }, {
          type: _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_1__["LocalizationPipe"]
        }, {
          type: _services_data_cache_data_cache_service__WEBPACK_IMPORTED_MODULE_15__["DataCacheService"]
        }, {
          type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }];
      };

      SupplierListingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"])({
        selector: "app-supplier-listing",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./supplier-listing.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/suppliers/supplier-listing/supplier-listing.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./supplier-listing.component.scss */
        "./src/app/layout/pages/suppliers/supplier-listing/supplier-listing.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"], _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"], _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_1__["LocalizationPipe"], _services_data_cache_data_cache_service__WEBPACK_IMPORTED_MODULE_15__["DataCacheService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__["DialogService"]])], SupplierListingComponent);
      /***/
    },

    /***/
    "./src/app/layout/pages/suppliers/suppliers.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/layout/pages/suppliers/suppliers.module.ts ***!
      \************************************************************/

    /*! exports provided: SuppliersModule */

    /***/
    function srcAppLayoutPagesSuppliersSuppliersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuppliersModule", function () {
        return SuppliersModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_supplier_supplier_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/supplier/supplier.module */
      "./src/app/layout/shared/supplier/supplier.module.ts");
      /* harmony import */


      var _suppliers_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./suppliers.routing */
      "./src/app/layout/pages/suppliers/suppliers.routing.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _supplier_listing_supplier_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./supplier-listing/supplier-listing.component */
      "./src/app/layout/pages/suppliers/supplier-listing/supplier-listing.component.ts");
      /* harmony import */


      var _supplier_details_supplier_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./supplier-details/supplier-details.component */
      "./src/app/layout/pages/suppliers/supplier-details/supplier-details.component.ts");
      /* harmony import */


      var _shared_layout_shared_layout_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/layout-shared/layout-shared.module */
      "./src/app/layout/shared/layout-shared/layout-shared.module.ts"); // components


      var SuppliersModule = function SuppliersModule() {
        _classCallCheck(this, SuppliersModule);
      };

      SuppliersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_supplier_listing_supplier_listing_component__WEBPACK_IMPORTED_MODULE_5__["SupplierListingComponent"], _supplier_details_supplier_details_component__WEBPACK_IMPORTED_MODULE_6__["SupplierDetailsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], // SharedModule,
        _shared_layout_shared_layout_shared_module__WEBPACK_IMPORTED_MODULE_7__["LayoutSharedModule"], _shared_supplier_supplier_module__WEBPACK_IMPORTED_MODULE_1__["SupplierModule"], _suppliers_routing__WEBPACK_IMPORTED_MODULE_2__["SupplierRoutingModule"]]
      })], SuppliersModule);
      /***/
    },

    /***/
    "./src/app/layout/pages/suppliers/suppliers.routing.ts":
    /*!*************************************************************!*\
      !*** ./src/app/layout/pages/suppliers/suppliers.routing.ts ***!
      \*************************************************************/

    /*! exports provided: SupplierRoutingModule */

    /***/
    function srcAppLayoutPagesSuppliersSuppliersRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupplierRoutingModule", function () {
        return SupplierRoutingModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _supplier_details_supplier_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./supplier-details/supplier-details.component */
      "./src/app/layout/pages/suppliers/supplier-details/supplier-details.component.ts");
      /* harmony import */


      var _supplier_listing_supplier_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./supplier-listing/supplier-listing.component */
      "./src/app/layout/pages/suppliers/supplier-listing/supplier-listing.component.ts");

      var routes = [{
        path: 'supplier-detail',
        component: _supplier_details_supplier_details_component__WEBPACK_IMPORTED_MODULE_4__["SupplierDetailsComponent"],
        data: {
          title: 'Supplier-Detail',
          description: 'Supplier Description',
          keyword: 'shopping, ecommerce'
        }
      }, {
        path: 'supplier-list',
        component: _supplier_listing_supplier_listing_component__WEBPACK_IMPORTED_MODULE_5__["SupplierListingComponent"],
        data: {
          title: 'Supplier-List',
          description: 'Supplier Description',
          keyword: 'shopping, ecommerce'
        }
      }];

      var SupplierRoutingModule = function SupplierRoutingModule() {
        _classCallCheck(this, SupplierRoutingModule);
      };

      SupplierRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], SupplierRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-suppliers-suppliers-module-es5.js.map