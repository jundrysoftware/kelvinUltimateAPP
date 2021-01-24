(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wishlist-wishlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wishlist/wishlist.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wishlist/wishlist.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - WishList Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"dark\">\n\n    <!-- Menu Option -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <!-- Title -->\n    <ion-title>Wish List</ion-title>\n\n    <!-- Cart Button Option -->\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"white\" (click)=\"gotoCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"wishlist\" fullscreen>\n  <ion-grid>\n    <ion-row>\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let item of products\">\n        <ion-card class=\"ion-no-margin\">\n\n          <!-- Product Image -->\n          <div class=\"card-img\" [style.background-image]=\"'url(' + item.images[0] + ')'\"\n            (click)=\"goToProductDetails(item)\"></div>\n\n          <!-- Wish Button or Product Like/Dislike Button Option -->\n          <ion-fab vertical=\"top\" horizontal=\"end\">\n            <ion-fab-button>\n              <ion-icon color=\"dark\" name=\"heart\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n\n          <!-- Product Contents -->\n          <ion-card-content (click)=\"goToProductDetails(item)\">\n            <ion-row>\n              <ion-text color=\"dark\">${{item.discountPrice}} &nbsp;</ion-text>\n              <span class=\"previous-price\"> ${{item.price}}</span>\n            </ion-row>\n            <ion-row>\n              <h4 class=\"product-name\">{{item.name | slice:0:20}}</h4>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#wishlist .card-img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 150px;\n}\n#wishlist .product-name {\n  font-size: 1.2rem;\n  color: rgba(8, 8, 8, 0.58);\n}\n#wishlist .previous-price {\n  text-decoration: line-through;\n  font-size: 0.8rem;\n}\n#wishlist ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3BlcnMvRG9jdW1lbnRvcy9rZWx2aW4vc3JjL2FwcC9wYWdlcy93aXNobGlzdC93aXNobGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2lzaGxpc3Qvd2lzaGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0FDQVI7QURHSTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7QUNEUjtBRElJO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtBQ0ZSO0FES0k7RUFDSSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dpc2hsaXN0L3dpc2hsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dpc2hsaXN0IHtcbiAgICAuY2FyZC1pbWcge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH1cblxuICAgIC5wcm9kdWN0LW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgY29sb3I6IHJnYmEoOCwgOCwgOCwgMC41OCk7XG4gICAgfVxuXG4gICAgLnByZXZpb3VzLXByaWNlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cblxuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgICB9XG59IiwiI3dpc2hsaXN0IC5jYXJkLWltZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGhlaWdodDogMTUwcHg7XG59XG4jd2lzaGxpc3QgLnByb2R1Y3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogcmdiYSg4LCA4LCA4LCAwLjU4KTtcbn1cbiN3aXNobGlzdCAucHJldmlvdXMtcHJpY2Uge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4jd2lzaGxpc3QgaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.component.ts ***!
  \******************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-details/product-details.component */ "./src/app/pages/product-details/product-details.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/**
 * Wishlist Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */






let WishlistComponent = class WishlistComponent {
    constructor(productsService, modalController, router) {
        this.productsService = productsService;
        this.modalController = modalController;
        this.router = router;
    }
    ngOnInit() {
        this.getProductList();
    }
    // Get Products
    getProductList() {
        this.products = this.productsService.productList();
    }
    // Go to product details page
    goToProductDetails(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"],
                componentProps: product
            });
            return yield modal.present();
        });
    }
    // Go to cart page
    gotoCartPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['/cart']);
        });
    }
};
WishlistComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
WishlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wishlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./wishlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wishlist/wishlist.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./wishlist.component.scss */ "./src/app/pages/wishlist/wishlist.component.scss")).default]
    })
], WishlistComponent);



/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.module.ts ***!
  \***************************************************/
/*! exports provided: WishlistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistModule", function() { return WishlistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _wishlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist.component */ "./src/app/pages/wishlist/wishlist.component.ts");







let WishlistModule = class WishlistModule {
};
WishlistModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _wishlist_component__WEBPACK_IMPORTED_MODULE_6__["WishlistComponent"]
                }
            ])
        ],
        declarations: [_wishlist_component__WEBPACK_IMPORTED_MODULE_6__["WishlistComponent"]]
    })
], WishlistModule);



/***/ })

}]);
//# sourceMappingURL=wishlist-wishlist-module-es2015.js.map