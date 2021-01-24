function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-menu side=\"start\" menuId=\"pages\" type=\"overlay\" contentId=\"mainContent\">\n\n    <!-- Header -->\n    <ion-header>\n      <ion-toolbar color=\"dark\">\n        <ion-row>\n          <!-- App Icon/ User Profile Image -->\n          <ion-col size=\"3\"><img src=\"assets/images/icon.png\"></ion-col>\n\n          <!-- Name of the app/ user name -->\n          <ion-col class=\"text-content\">\n            <div>Kelvin open door</div>\n          </ion-col>\n        </ion-row>\n      </ion-toolbar>\n    </ion-header>\n\n    <!-- Content Options -->\n    <!-- Menus -->\n    <ion-content>\n      <ion-list class=\"ion-padding\" lines=\"none\">\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\n          <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\n            <ion-icon size=\"small\" slot=\"start\" [name]=\"p.icon\"></ion-icon>\n            <ion-label>\n              {{p.title}}\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n\n    <!-- Footer -->\n    <ion-footer class=\"ion-no-border\">\n      <div class=\"ion-padding\">\n        <ion-button color=\"dark\" expand=\"block\" (click)=\"signout()\">\n          Signout</ion-button>\n      </div>\n    </ion-footer>\n  </ion-menu>\n  <ion-router-outlet id=\"mainContent\"></ion-router-outlet>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-details/product-details.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-details/product-details.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductDetailsProductDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\n  - Product Details Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"dark\">\n\n    <!-- Back to previous page -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"white\" default-href=\"\" (click)=\"dismiss()\" text=\"\" icon=\"arrow-back\">\n      </ion-back-button>\n    </ion-buttons>\n\n    <!-- Title -->\n    <ion-title></ion-title>\n\n    <!-- Cart Page Button -->\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"white\" (click)=\"gotoCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<!-- Main Contents of Page -->\n<ion-content id=\"product-details\" fullscreen>\n\n  <!-- Slider of Product Images -->\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let item of images\">\n      <img [src]=\"item\" />\n\n      <!-- Wish Button or Product Like/Dislike Button Option -->\n      <ion-fab vertical=\"top\" horizontal=\"end\">\n        <ion-fab-button>\n          <ion-icon color=\"dark\" name=\"heart-outline\" *ngIf=\"!isWishlist\"></ion-icon>\n          <ion-icon color=\"dark\" name=\"heart\" *ngIf=\"isWishlist\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ion-slide>\n  </ion-slides>\n\n  <!-- Product Price -->\n  <ion-row class=\"ion-padding\">\n    <ion-text color=\"dark\" class=\"price\">${{discountPrice}} USD &nbsp;</ion-text>\n    <span class=\"previous-price\"> ${{price}}</span>\n  </ion-row>\n\n  <!-- Product Name -->\n  <ion-row class=\"ion-padding-start product-name\">\n    <ion-text>{{name}}</ion-text>\n  </ion-row>\n\n  <!-- Product Description -->\n  <ion-row class=\"ion-padding\">\n    <ion-text color=\"medium\" [innerHTML]=\"description\"></ion-text>\n  </ion-row>\n\n  <!-- Selct Color -->\n  <ion-row class=\"ion-padding-start select-heading\">\n    <ion-text>Select Color</ion-text>\n  </ion-row>\n\n  <!-- Product Colors -->\n  <ion-radio-group>\n    <ion-row class=\"ion-padding-start ion-padding-bottom\">\n      <ion-col size=\"4\" *ngFor=\"let item of color\">\n        <ion-item class=\"border-style\" lines=\"none\" [style.border-color]=\"item\">\n          <ion-radio color=\"dark\" mode=\"ios\" (click)=\"SelectColor(item)\" [value]=\"item\"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-radio-group>\n\n  <!-- Select Size -->\n  <ion-row class=\"ion-padding-start select-heading\">\n    <ion-text>Select Size</ion-text>\n  </ion-row>\n\n  <!-- Product Sizes -->\n  <ion-radio-group>\n    <ion-row class=\"ion-padding-start\">\n      <ion-col size=\"4\" *ngFor=\"let item of size\">\n        <ion-item lines=\"none\">\n          <ion-label class=\"size-label\">{{item}}</ion-label>\n          <ion-radio color=\"dark\" mode=\"ios\" (click)=\"SelectSize(item)\" [value]=\"item\"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- Quantity -->\n    <ion-row class=\"ion-padding-start select-heading\">\n      <ion-text>Select quantity</ion-text>\n    </ion-row>\n    <ion-item class=\"ion-no-padding\" style=\"margin-left: 3%;\">\n    <ion-row>\n      <!-- Add More Product Quantity -->\n      <ion-col (click)=\"addQuantity()\">\n        <ion-icon style=\"zoom:2.5;\" name=\"add-circle-outline\" color=\"medium\"></ion-icon>\n      </ion-col>\n      <!-- Total Quantity -->\n      <ion-col  class=\"ion-text-center\" style=\"margin-top: 8%;font-size: 18px;\">{{cant}}</ion-col>\n      <!-- Minus Product Quantity -->\n      <ion-col (click)=\"minusQuantity()\">\n        <ion-icon style=\"zoom:2.5;\" name=\"remove-circle-outline\" color=\"medium\"></ion-icon>\n      </ion-col>\n    </ion-row></ion-item>\n  </ion-radio-group>\n\n\n</ion-content>\n\n\n<!-- Footer -->\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar class=\"ion-padding\" transparent>\n    <!-- Add To Cart Button -->\n    <ion-button class=\"add-to-cart\" color=\"dark\" expand=\"block\" (click)=\"addToCart()\">ADD TO CART\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'onbroading',
      pathMatch: 'full'
    }, {
      path: 'onbroading',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-onboarding-onboarding-module */
        "pages-onboarding-onboarding-module").then(__webpack_require__.bind(null,
        /*! ./pages/onboarding/onboarding.module */
        "./src/app/pages/onboarding/onboarding.module.ts")).then(function (m) {
          return m.OnboardingModule;
        });
      }
    }, {
      path: 'landing',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-auth-landing-page-landing-page-module */
        "pages-auth-landing-page-landing-page-module").then(__webpack_require__.bind(null,
        /*! ./pages/auth/landing-page/landing-page.module */
        "./src/app/pages/auth/landing-page/landing-page.module.ts")).then(function (m) {
          return m.LandingPageModule;
        });
      }
    }, {
      path: 'signup',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-auth-signup-signup-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-auth-signup-signup-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/auth/signup/signup.module */
        "./src/app/pages/auth/signup/signup.module.ts")).then(function (m) {
          return m.SignupModule;
        });
      }
    }, {
      path: 'signin',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-auth-signin-signin-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-auth-signin-signin-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/auth/signin/signin.module */
        "./src/app/pages/auth/signin/signin.module.ts")).then(function (m) {
          return m.SigninModule;
        });
      }
    }, {
      path: 'forget-password',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-auth-forget-password-forget-password-module */
        "pages-auth-forget-password-forget-password-module").then(__webpack_require__.bind(null,
        /*! ./pages/auth/forget-password/forget-password.module */
        "./src/app/pages/auth/forget-password/forget-password.module.ts")).then(function (m) {
          return m.ForgetPasswordModule;
        });
      }
    }, {
      path: 'verification',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-auth-verification-verification-module */
        "pages-auth-verification-verification-module").then(__webpack_require__.bind(null,
        /*! ./pages/auth/verification/verification.module */
        "./src/app/pages/auth/verification/verification.module.ts")).then(function (m) {
          return m.VerificationModule;
        });
      }
    }, {
      path: 'checkout',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-checkout-checkout-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-checkout-checkout-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/checkout/checkout.module */
        "./src/app/pages/checkout/checkout.module.ts")).then(function (m) {
          return m.CheckoutPageModule;
        });
      }
    }, {
      path: 'cart',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-cart-cart-module */
        "pages-cart-cart-module").then(__webpack_require__.bind(null,
        /*! ./pages/cart/cart.module */
        "./src/app/pages/cart/cart.module.ts")).then(function (m) {
          return m.CartModule;
        });
      }
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-tabs-tabs-module */
        "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./pages/tabs/tabs.module */
        "./src/app/pages/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'checkout',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-checkout-checkout-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-checkout-checkout-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/checkout/checkout.module */
        "./src/app/pages/checkout/checkout.module.ts")).then(function (m) {
          return m.CheckoutPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu ion-toolbar {\n  --background: var(--ion-color-color1);\n  height: 150px;\n}\nion-menu ion-toolbar ion-row {\n  padding-top: 30px;\n}\nion-menu ion-toolbar ion-row img {\n  height: 50px;\n}\nion-menu ion-toolbar ion-row .text-content {\n  display: flex;\n  align-items: center;\n  font-size: 1.4rem;\n  font-weight: bold;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3BlcnMvRG9jdW1lbnRvcy9rZWx2aW4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFDQUFBO0VBQ0EsYUFBQTtBQ0FKO0FERUk7RUFDRSxpQkFBQTtBQ0FOO0FERU07RUFDRSxZQUFBO0FDQVI7QURHTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICAgIGhlaWdodDogMTUwcHg7XG5cbiAgICBpb24tcm93IHtcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICB9XG5cbiAgICAgIC50ZXh0LWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJpb24tbWVudSBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG4gIGhlaWdodDogMTUwcHg7XG59XG5pb24tbWVudSBpb24tdG9vbGJhciBpb24tcm93IHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5pb24tbWVudSBpb24tdG9vbGJhciBpb24tcm93IGltZyB7XG4gIGhlaWdodDogNTBweDtcbn1cbmlvbi1tZW51IGlvbi10b29sYmFyIGlvbi1yb3cgLnRleHQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_pages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/pages.service */
    "./src/app/services/pages.service.ts");
    /**
     * Main App Components
     * @author    ThemesBuckets <themebucketbd@gmail.com>
     * @copyright Copyright (c) 2020
     * @license   ThemesBuckets
     *
     */


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, menuController, router, pagesService) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menuController = menuController;
        this.router = router;
        this.pagesService = pagesService;
        this.appPages = [];
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide(); // Get Menus For Side Menu


            _this.appPages = _this.pagesService.getPages(); //Remove this method to stop OneSignal Debugging 

            window["plugins"].OneSignal.setLogLevel({
              logLevel: 6,
              visualLevel: 0
            });

            var notificationOpenedCallback = function notificationOpenedCallback(jsonData) {
              console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
            }; // Set your iOS Settings


            var iosSettings = {};
            iosSettings["kOSSettingsKeyAutoPrompt"] = false;
            iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
            window["plugins"].OneSignal.startInit("2fcd1a81-b2a1-4e3b-9468-de3d2803194d").handleNotificationOpened(notificationOpenedCallback).iOSSettings(iosSettings).inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification).endInit(); // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)

            window["plugins"].OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
              console.log("User accepted notifications: " + accepted);
            });
          });
        } // Signout Button

      }, {
        key: "signout",
        value: function signout() {
          this.router.navigate(['/onbroading']);
          this.menuController.enable(false); // Make Sidemenu disable
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_pages_service__WEBPACK_IMPORTED_MODULE_6__["PagesService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/product-details/product-details.component */
    "./src/app/pages/product-details/product-details.component.ts");
    /* harmony import */


    var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/stripe/ngx */
    "./node_modules/@ionic-native/stripe/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsComponent"]],
      entryComponents: [_pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsComponent"]],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_10__["Stripe"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/pages/product-details/product-details.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/product-details/product-details.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductDetailsProductDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#product-details img {\n  width: 100%;\n  height: 400px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n#product-details ion-slides {\n  --bullet-background: var(--ion-color-light);\n  --bullet-background-active: var(--ion-color-color1);\n}\n#product-details ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n#product-details .product-name {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--ion-color-medium);\n}\n#product-details .price {\n  font-weight: bold;\n}\n#product-details .previous-price {\n  text-decoration: line-through;\n  font-size: 0.8rem;\n}\n#product-details .border-style {\n  border: 4px solid;\n  width: 60px;\n  border-radius: 15%;\n}\n#product-details .select-heading {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: var(--ion-color-medium);\n}\n#product-details .size-label {\n  font-weight: bold;\n  font-size: 1.1rem;\n}\nion-footer ion-toolbar {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n}\nion-footer ion-button {\n  --box-shadow: -1px 1px 17px -3px var(--ion-color-color1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3BlcnMvRG9jdW1lbnRvcy9rZWx2aW4vc3JjL2FwcC9wYWdlcy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQVI7QURHSTtFQUNJLDJDQUFBO0VBQ0EsbURBQUE7QUNEUjtBRElJO0VBQ0kseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0FDRlI7QURLSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ0hSO0FETUk7RUFDSSxpQkFBQTtBQ0pSO0FET0k7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FDTFI7QURRSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDTlI7QURTSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ1BSO0FEVUk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDUlI7QURhSTtFQUNJLCtCQUFBO0VBQ0Esd0NBQUE7QUNWUjtBRGFJO0VBQ0ksd0RBQUE7QUNYUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZHVjdC1kZXRhaWxzIHtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuXG4gICAgaW9uLXNsaWRlcyB7XG4gICAgICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcbiAgICB9XG5cbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIH1cblxuICAgIC5wcmljZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5wcmV2aW91cy1wcmljZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG5cbiAgICAuYm9yZGVyLXN0eWxlIHtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQ7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNSU7XG4gICAgfVxuXG4gICAgLnNlbGVjdC1oZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgfVxuXG4gICAgLnNpemUtbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYm94LXNoYWRvdzogLTFweCAxcHggMTdweCAtM3B4IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICAgIH1cbn0iLCIjcHJvZHVjdC1kZXRhaWxzIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbiNwcm9kdWN0LWRldGFpbHMgaW9uLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcbn1cbiNwcm9kdWN0LWRldGFpbHMgaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xufVxuI3Byb2R1Y3QtZGV0YWlscyAucHJvZHVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4jcHJvZHVjdC1kZXRhaWxzIC5wcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI3Byb2R1Y3QtZGV0YWlscyAucHJldmlvdXMtcHJpY2Uge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4jcHJvZHVjdC1kZXRhaWxzIC5ib3JkZXItc3R5bGUge1xuICBib3JkZXI6IDRweCBzb2xpZDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcbn1cbiNwcm9kdWN0LWRldGFpbHMgLnNlbGVjdC1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4jcHJvZHVjdC1kZXRhaWxzIC5zaXplLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgaW9uLWJ1dHRvbiB7XG4gIC0tYm94LXNoYWRvdzogLTFweCAxcHggMTdweCAtM3B4IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/product-details/product-details.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/product-details/product-details.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProductDetailsComponent */

  /***/
  function srcAppPagesProductDetailsProductDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
      return ProductDetailsComponent;
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


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);

    var ProductDetailsComponent = /*#__PURE__*/function () {
      function ProductDetailsComponent(router, storageService, modalController) {
        _classCallCheck(this, ProductDetailsComponent);

        this.router = router;
        this.storageService = storageService;
        this.modalController = modalController; // Slider Options

        this.slideOpts = {
          initialSlide: 0,
          loop: true,
          autoplay: true,
          speed: 400,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          }
        };
        this.selsize = '';
        this.selcolor = '';
        this.cant = 1;
      }

      _createClass(ProductDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "SelectSize",
        value: function SelectSize(size) {
          this.selsize = size;
        }
      }, {
        key: "SelectColor",
        value: function SelectColor(color) {
          this.selcolor = color;
        } // Add to Cart Function

      }, {
        key: "addToCart",
        value: function addToCart() {
          this.products = {
            id: this.id,
            name: this.name,
            description: this.description,
            price: this.price,
            discountPrice: this.discountPrice,
            images: this.images,
            size: this.selsize,
            color: this.selcolor,
            quantity: this.cant,
            isWishlist: this.isWishlist
          }; // Save cart product in storage

          this.storageService.setObject(this.products, 'my-cart');
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('shopping cart', 'product added to shopping cart', 'success');
        } // Minus Product Quantity

      }, {
        key: "minusQuantity",
        value: function minusQuantity() {
          if (this.cant > 1) {
            this.cant = this.cant - 1;
          }
        } // Add More Quantity

      }, {
        key: "addQuantity",
        value: function addQuantity() {
          this.cant = this.cant + 1;
        } // Go to cart page

      }, {
        key: "gotoCartPage",
        value: function gotoCartPage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.dismiss();
                    this.router.navigate(['/cart']);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // Back to previous page function

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss({
            'dismissed': true
          });
        }
      }]);

      return ProductDetailsComponent;
    }();

    ProductDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductDetailsComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductDetailsComponent.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductDetailsComponent.prototype, "description", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductDetailsComponent.prototype, "price", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductDetailsComponent.prototype, "discountPrice", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductDetailsComponent.prototype, "images", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductDetailsComponent.prototype, "size", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductDetailsComponent.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductDetailsComponent.prototype, "isWishlist", void 0);
    ProductDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-details/product-details.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-details.component.scss */
      "./src/app/pages/product-details/product-details.component.scss"))["default"]]
    })], ProductDetailsComponent);
    /***/
  },

  /***/
  "./src/app/services/pages.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/pages.service.ts ***!
    \*******************************************/

  /*! exports provided: PagesService */

  /***/
  function srcAppServicesPagesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesService", function () {
      return PagesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PagesService = /*#__PURE__*/function () {
      function PagesService() {
        _classCallCheck(this, PagesService);
      }

      _createClass(PagesService, [{
        key: "getPages",
        value: function getPages() {
          return [{
            title: 'Home',
            url: '/tabs/tab1',
            icon: 'home'
          }, {
            title: 'Categories',
            url: '/tabs/categories',
            icon: 'grid'
          }, {
            title: 'Shop',
            url: '/tabs/products',
            icon: 'basket'
          }, {
            title: 'Cart',
            url: '/cart',
            icon: 'cart'
          }, {
            title: 'Search',
            url: '/tabs/search',
            icon: 'search'
          }, {
            title: 'Wishlist',
            url: '/tabs/tab3',
            icon: 'heart'
          }, {
            title: 'Notification',
            url: '/tabs/tab4',
            icon: 'notifications-outline'
          }, {
            title: 'Orders',
            url: '/tabs/orders',
            icon: 'checkmark-circle-outline'
          }];
        }
      }]);

      return PagesService;
    }();

    PagesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PagesService);
    /***/
  },

  /***/
  "./src/app/services/storage.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/storage.service.ts ***!
    \*********************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /**
    * Storage Services
    * @author    ThemesBuckets <themebucketbd@gmail.com>
    * @copyright Copyright (c) 2020
    * @license   ThemesBuckets
    */


    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage;

    var StorageService = /*#__PURE__*/function () {
      function StorageService() {
        _classCallCheck(this, StorageService);
      }

      _createClass(StorageService, [{
        key: "setObject",
        value: function setObject(product, ITEMS_KEY) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return Storage.get({
                      key: ITEMS_KEY
                    }).then(function (products) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var newProducts;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                if (!products.value) {
                                  _context2.next = 7;
                                  break;
                                }

                                newProducts = JSON.parse(products.value);
                                newProducts.push(product);
                                _context2.next = 5;
                                return Storage.set({
                                  key: ITEMS_KEY,
                                  value: JSON.stringify(newProducts)
                                });

                              case 5:
                                _context2.next = 9;
                                break;

                              case 7:
                                _context2.next = 9;
                                return Storage.set({
                                  key: ITEMS_KEY,
                                  value: JSON.stringify([product])
                                });

                              case 9:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2);
                      }));
                    });

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "getObject",
        value: function getObject(ITEMS_KEY) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var ret, products;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return Storage.get({
                      key: ITEMS_KEY
                    });

                  case 2:
                    ret = _context4.sent;
                    products = JSON.parse(ret.value);
                    return _context4.abrupt("return", products);

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }, {
        key: "removeStorageValue",
        value: function removeStorageValue(id, ITEMS_KEY) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var ret, products, toKeep, _iterator, _step, i;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return Storage.get({
                      key: ITEMS_KEY
                    });

                  case 2:
                    ret = _context5.sent;
                    products = JSON.parse(ret.value);

                    if (!(!products || products.length === 0)) {
                      _context5.next = 6;
                      break;
                    }

                    return _context5.abrupt("return", null);

                  case 6:
                    toKeep = [];
                    _iterator = _createForOfIteratorHelper(products);

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        i = _step.value;

                        if (i.id !== id) {
                          toKeep.push(i);
                        }
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }

                    _context5.next = 11;
                    return Storage.set({
                      key: ITEMS_KEY,
                      value: JSON.stringify(toKeep)
                    });

                  case 11:
                    return _context5.abrupt("return", true);

                  case 12:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));
        }
      }, {
        key: "clear",
        value: function clear() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return Storage.clear();

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6);
          }));
        }
      }]);

      return StorageService;
    }();

    StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StorageService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/developers/Documentos/kelvin/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map