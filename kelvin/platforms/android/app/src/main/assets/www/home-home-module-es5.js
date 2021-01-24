function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories/categories.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories/categories.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCategoriesCategoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Categories -->\n<div id=\"categories\">\n  <ion-item-divider color=\"white\" class=\"ion-padding-top\">\n    <ion-label color=\"dark\" class=\"text-bold\">Categories</ion-label>\n    <ion-button class=\"ion-margin-end\" size=\"small\" slot=\"end\" color=\"dark\" fill=\"clear\" routerLink=\"/tabs/categories\"\n      routerDirection=\"root\">Sell All</ion-button>\n  </ion-item-divider>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"6\" *ngFor=\"let item of (categories ? categories.slice(0,2): []); let i=index\">\n        <ion-card class=\"ion-no-padding\" routerLink=\"/tabs/products/{{item.id}}\" routerDirection=\"root\">\n          <img [src]=\"item.image\" />\n          <ion-card-header>\n            <ion-card-subtitle>{{item.name}}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n<!-- End Categories -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/featured-products/featured-products.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/featured-products/featured-products.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFeaturedProductsFeaturedProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"featured-products\">\n  <ion-item-divider color=\"white\" class=\"ion-padding-top\">\n    <ion-label color=\"dark\" class=\"text-bold\">Featured Products</ion-label>\n    <ion-button class=\"ion-margin-end\" size=\"small\" slot=\"end\" color=\"dark\" fill=\"clear\" routerLink=\"/tabs/products\"\n      routerDirection=\"root\">Sell All</ion-button>\n  </ion-item-divider>\n\n  <ion-slides [options]=\"slideOpts\" class=\"ion-padding-top\">\n    <ion-slide *ngFor=\"let item of products\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card class=\"ion-no-margin\">\n              <div class=\"card-img\" [style.background-image]=\"'url(' + item.images[0] + ')'\"\n                (click)=\"goToProductDetails(item)\"></div>\n\n              <ion-fab vertical=\"top\" horizontal=\"end\">\n                <ion-fab-button>\n                  <ion-icon color=\"dark\" name=\"heart-outline\" *ngIf=\"!item.isWishlist\"></ion-icon>\n                  <ion-icon color=\"dark\" name=\"heart\" *ngIf=\"item.isWishlist\"></ion-icon>\n                </ion-fab-button>\n              </ion-fab>\n\n              <ion-card-content (click)=\"goToProductDetails(item)\">\n                <ion-row>\n                  <ion-text color=\"dark\">${{item.discountPrice}} &nbsp;</ion-text>\n                  <span class=\"previous-price\"> ${{item.price}}</span>\n                </ion-row>\n                <ion-row class=\"product-name\">\n                  <h4>{{item.name | slice:0:20}}</h4>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-top-slider/home-top-slider.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-top-slider/home-top-slider.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeTopSliderHomeTopSliderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Top Banner Slider -->\n<div id=\"top-slider\" class=\"ion-padding\">\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide>\n      <img src=\"assets/images/banner-1.jpg\" />\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/images/banner-2.jpg\" />\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/images/banner-3.jpg\" />\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/images/banner-4.jpg\" />\n    </ion-slide>\n  </ion-slides>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hot-deals/hot-deals.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/hot-deals/hot-deals.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHotDealsHotDealsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"hot-deals\">\n  <ion-item-divider color=\"white\" class=\"ion-padding-top\">\n    <ion-label color=\"dark\" class=\"text-bold\">Hot Deals</ion-label>\n    <ion-button class=\"ion-margin-end\" size=\"small\" slot=\"end\" color=\"dark\" fill=\"clear\" routerLink=\"/tabs/tab2\"\n      routerDirection=\"root\">Sell All</ion-button>\n  </ion-item-divider>\n\n  <ion-slides [options]=\"slideOpts\" class=\"ion-padding-top\">\n    <ion-slide *ngFor=\"let item of deals\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card class=\"ion-no-margin\" routerLink=\"/tabs/tab2\" routerDirection=\"root\">\n              <div class=\"card-img\" [style.background-image]=\"'url(' + item.image + ')'\"></div>\n\n              <ion-fab vertical=\"top\" horizontal=\"end\">\n                <ion-fab-button>\n                  <ion-icon color=\"light\" name=\"heart\"></ion-icon>\n                </ion-fab-button>\n              </ion-fab>\n\n              <ion-card-header>\n                <ion-card-title class=\"ion-padding-bottom\">{{item.title}}</ion-card-title>\n                <ion-card-subtitle class=\"ion-text-wrap\">{{item.subTitle}}</ion-card-subtitle>\n                <ion-button color=\"primary\" size=\"small\">Shop Now</ion-button>\n              </ion-card-header>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/searchbar/searchbar.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/searchbar/searchbar.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSearchbarSearchbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"searchbar\" class=\"ion-padding\">\n  <ion-searchbar placeholder=\"Search your product\" (ionFocus)=\"gotoSearchPage()\"></ion-searchbar>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\n  - Home Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar color=\"dark\">\n\n    <!-- Menu Option -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <!-- Title of the app -->\n    <ion-title>Kelvin open door</ion-title>\n\n    <!-- Cart Button Option -->\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"white\" (click)=\"gotoCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"home\" fullscreen>\n\n  <!-- Search bar -->\n  <app-searchbar></app-searchbar>\n\n  <!-- Top Banner Slider -->\n  <app-home-top-slider></app-home-top-slider>\n\n  <!-- Categories -->\n  <app-categories></app-categories>\n\n  <!-- Featured Products -->\n  <app-featured-products></app-featured-products>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/components/categories/categories.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/categories/categories.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCategoriesCategoriesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#categories .text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3BlcnMvRG9jdW1lbnRvcy9rZWx2aW4vc3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2F0ZWdvcmllcyB7XG4gICAgLnRleHQtYm9sZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn0iLCIjY2F0ZWdvcmllcyAudGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/categories/categories.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/categories/categories.component.ts ***!
    \***************************************************************/

  /*! exports provided: CategoriesComponent */

  /***/
  function srcAppComponentsCategoriesCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function () {
      return CategoriesComponent;
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


    var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/category.service */
    "./src/app/services/category.service.ts");

    var CategoriesComponent = /*#__PURE__*/function () {
      function CategoriesComponent(categoryService) {
        _classCallCheck(this, CategoriesComponent);

        this.categoryService = categoryService;
        this.categories = [];
      }

      _createClass(CategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCategories();
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          this.categories = this.categoryService.categoryList();
        }
      }]);

      return CategoriesComponent;
    }();

    CategoriesComponent.ctorParameters = function () {
      return [{
        type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
      }];
    };

    CategoriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./categories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories/categories.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./categories.component.scss */
      "./src/app/components/categories/categories.component.scss"))["default"]]
    })], CategoriesComponent);
    /***/
  },

  /***/
  "./src/app/components/featured-products/featured-products.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/featured-products/featured-products.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFeaturedProductsFeaturedProductsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#featured-products .card-img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 150px;\n}\n#featured-products .product-name {\n  padding: 0;\n  text-align: left;\n}\n#featured-products .product-name h4 {\n  font-size: 1rem;\n  color: rgba(8, 8, 8, 0.58);\n}\n#featured-products .previous-price {\n  text-decoration: line-through;\n  font-size: 0.8rem;\n}\n#featured-products ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n#featured-products .text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3BlcnMvRG9jdW1lbnRvcy9rZWx2aW4vc3JjL2FwcC9jb21wb25lbnRzL2ZlYXR1cmVkLXByb2R1Y3RzL2ZlYXR1cmVkLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZlYXR1cmVkLXByb2R1Y3RzL2ZlYXR1cmVkLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtBQ0FSO0FER0k7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBREdRO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0FDRFo7QURLSTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7QUNIUjtBRE1JO0VBQ0kseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0FDSlI7QURPSTtFQUNJLGlCQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZlYXR1cmVkLXByb2R1Y3RzL2ZlYXR1cmVkLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZlYXR1cmVkLXByb2R1Y3RzIHtcbiAgICAuY2FyZC1pbWcge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH1cblxuICAgIC5wcm9kdWN0LW5hbWUge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDgsIDgsIDgsIDAuNTgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnByZXZpb3VzLXByaWNlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cblxuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAudGV4dC1ib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufSIsIiNmZWF0dXJlZC1wcm9kdWN0cyAuY2FyZC1pbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuI2ZlYXR1cmVkLXByb2R1Y3RzIC5wcm9kdWN0LW5hbWUge1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuI2ZlYXR1cmVkLXByb2R1Y3RzIC5wcm9kdWN0LW5hbWUgaDQge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiByZ2JhKDgsIDgsIDgsIDAuNTgpO1xufVxuI2ZlYXR1cmVkLXByb2R1Y3RzIC5wcmV2aW91cy1wcmljZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbiNmZWF0dXJlZC1wcm9kdWN0cyBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59XG4jZmVhdHVyZWQtcHJvZHVjdHMgLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/featured-products/featured-products.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/featured-products/featured-products.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: FeaturedProductsComponent */

  /***/
  function srcAppComponentsFeaturedProductsFeaturedProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeaturedProductsComponent", function () {
      return FeaturedProductsComponent;
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


    var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../pages/product-details/product-details.component */
    "./src/app/pages/product-details/product-details.component.ts");

    var FeaturedProductsComponent = /*#__PURE__*/function () {
      function FeaturedProductsComponent(productsService, modalController) {
        _classCallCheck(this, FeaturedProductsComponent);

        this.productsService = productsService;
        this.modalController = modalController; // Slider Options

        this.slideOpts = {
          initialSlide: 0,
          speed: 400,
          slidesPerView: 2
        };
      }

      _createClass(FeaturedProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProductList();
        }
      }, {
        key: "getProductList",
        value: function getProductList() {
          this.products = this.productsService.productList();
        }
      }, {
        key: "goToProductDetails",
        value: function goToProductDetails(product) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"],
                      componentProps: product
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return FeaturedProductsComponent;
    }();

    FeaturedProductsComponent.ctorParameters = function () {
      return [{
        type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    FeaturedProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-featured-products',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./featured-products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/featured-products/featured-products.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./featured-products.component.scss */
      "./src/app/components/featured-products/featured-products.component.scss"))["default"]]
    })], FeaturedProductsComponent);
    /***/
  },

  /***/
  "./src/app/components/home-top-slider/home-top-slider.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/home-top-slider/home-top-slider.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeTopSliderHomeTopSliderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#top-slider ion-slides {\n  --bullet-background: var(--ion-color-light);\n  --bullet-background-active: var(--ion-color-white);\n}\n#top-slider ion-slides img {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3BlcnMvRG9jdW1lbnRvcy9rZWx2aW4vc3JjL2FwcC9jb21wb25lbnRzL2hvbWUtdG9wLXNsaWRlci9ob21lLXRvcC1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS10b3Atc2xpZGVyL2hvbWUtdG9wLXNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDJDQUFBO0VBQ0Esa0RBQUE7QUNBUjtBREVRO0VBQ0ksbUJBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS10b3Atc2xpZGVyL2hvbWUtdG9wLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b3Atc2xpZGVyIHtcbiAgICBpb24tc2xpZGVzIHtcbiAgICAgICAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiI3RvcC1zbGlkZXIgaW9uLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xufVxuI3RvcC1zbGlkZXIgaW9uLXNsaWRlcyBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/home-top-slider/home-top-slider.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/home-top-slider/home-top-slider.component.ts ***!
    \*************************************************************************/

  /*! exports provided: HomeTopSliderComponent */

  /***/
  function srcAppComponentsHomeTopSliderHomeTopSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeTopSliderComponent", function () {
      return HomeTopSliderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeTopSliderComponent = /*#__PURE__*/function () {
      function HomeTopSliderComponent() {
        _classCallCheck(this, HomeTopSliderComponent);

        // Slider Options
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
      }

      _createClass(HomeTopSliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeTopSliderComponent;
    }();

    HomeTopSliderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-top-slider',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home-top-slider.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-top-slider/home-top-slider.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home-top-slider.component.scss */
      "./src/app/components/home-top-slider/home-top-slider.component.scss"))["default"]]
    })], HomeTopSliderComponent);
    /***/
  },

  /***/
  "./src/app/components/hot-deals/hot-deals.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/hot-deals/hot-deals.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHotDealsHotDealsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#hot-deals ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n#hot-deals ion-card-title {\n  font-size: 1.2rem;\n}\n#hot-deals .card-img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 150px;\n}\n#hot-deals .text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3BlcnMvRG9jdW1lbnRvcy9rZWx2aW4vc3JjL2FwcC9jb21wb25lbnRzL2hvdC1kZWFscy9ob3QtZGVhbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG90LWRlYWxzL2hvdC1kZWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtBQ0FSO0FER0k7RUFDSSxpQkFBQTtBQ0RSO0FESUk7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0FDRlI7QURLSTtFQUNJLGlCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvdC1kZWFscy9ob3QtZGVhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG90LWRlYWxzIHtcbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG5cbiAgICAuY2FyZC1pbWcge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH1cblxuICAgIC50ZXh0LWJvbGQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59IiwiI2hvdC1kZWFscyBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59XG4jaG90LWRlYWxzIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4jaG90LWRlYWxzIC5jYXJkLWltZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGhlaWdodDogMTUwcHg7XG59XG4jaG90LWRlYWxzIC50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/hot-deals/hot-deals.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/hot-deals/hot-deals.component.ts ***!
    \*************************************************************/

  /*! exports provided: HotDealsComponent */

  /***/
  function srcAppComponentsHotDealsHotDealsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotDealsComponent", function () {
      return HotDealsComponent;
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


    var _services_deals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/deals.service */
    "./src/app/services/deals.service.ts");

    var HotDealsComponent = /*#__PURE__*/function () {
      function HotDealsComponent(dealsService) {
        _classCallCheck(this, HotDealsComponent);

        this.dealsService = dealsService; // Slider Options

        this.slideOpts = {
          initialSlide: 0,
          speed: 400,
          slidesPerView: 2
        };
        this.deals = [];
      }

      _createClass(HotDealsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDeals();
        }
      }, {
        key: "getDeals",
        value: function getDeals() {
          this.deals = this.dealsService.getDeals();
        }
      }]);

      return HotDealsComponent;
    }();

    HotDealsComponent.ctorParameters = function () {
      return [{
        type: _services_deals_service__WEBPACK_IMPORTED_MODULE_2__["DealsService"]
      }];
    };

    HotDealsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hot-deals',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./hot-deals.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hot-deals/hot-deals.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./hot-deals.component.scss */
      "./src/app/components/hot-deals/hot-deals.component.scss"))["default"]]
    })], HotDealsComponent);
    /***/
  },

  /***/
  "./src/app/components/searchbar/searchbar.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/searchbar/searchbar.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSearchbarSearchbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#searchbar ion-searchbar {\n  --background: var(--ion-color-white);\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3BlcnMvRG9jdW1lbnRvcy9rZWx2aW4vc3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaGJhci9zZWFyY2hiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw4QkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlYXJjaGJhciB7XG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcbiAgICB9XG59IiwiI3NlYXJjaGJhciBpb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/searchbar/searchbar.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/searchbar/searchbar.component.ts ***!
    \*************************************************************/

  /*! exports provided: SearchbarComponent */

  /***/
  function srcAppComponentsSearchbarSearchbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function () {
      return SearchbarComponent;
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

    var SearchbarComponent = /*#__PURE__*/function () {
      function SearchbarComponent(router) {
        _classCallCheck(this, SearchbarComponent);

        this.router = router;
      }

      _createClass(SearchbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "gotoSearchPage",
        value: function gotoSearchPage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.router.navigate(['/tabs/search']);

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return SearchbarComponent;
    }();

    SearchbarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SearchbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-searchbar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./searchbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/searchbar/searchbar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./searchbar.component.scss */
      "./src/app/components/searchbar/searchbar.component.scss"))["default"]]
    })], SearchbarComponent);
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/home/home.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
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
    /**
     * Home Screen
     * @author    ThemesBuckets <themebucketbd@gmail.com>
     * @copyright Copyright (c) 2020
     * @license   ThemesBuckets
     */


    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // Go to cart page

      }, {
        key: "gotoCartPage",
        value: function gotoCartPage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.router.navigate(['/cart']);

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/pages/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/featured-products/featured-products.component */
    "./src/app/components/featured-products/featured-products.component.ts");
    /* harmony import */


    var _components_hot_deals_hot_deals_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/hot-deals/hot-deals.component */
    "./src/app/components/hot-deals/hot-deals.component.ts");
    /* harmony import */


    var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/categories/categories.component */
    "./src/app/components/categories/categories.component.ts");
    /* harmony import */


    var _components_home_top_slider_home_top_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../components/home-top-slider/home-top-slider.component */
    "./src/app/components/home-top-slider/home-top-slider.component.ts");
    /* harmony import */


    var _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../components/searchbar/searchbar.component */
    "./src/app/components/searchbar/searchbar.component.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
      }])],
      declarations: [_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_7__["FeaturedProductsComponent"], _components_hot_deals_hot_deals_component__WEBPACK_IMPORTED_MODULE_8__["HotDealsComponent"], _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_9__["CategoriesComponent"], _components_home_top_slider_home_top_slider_component__WEBPACK_IMPORTED_MODULE_10__["HomeTopSliderComponent"], _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_11__["SearchbarComponent"]]
    })], HomeModule);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map