(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - Search Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"dark\">\n\n    <!-- Back to previous page option button -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"white\" default-href=\"\" (click)=\"dismiss()\" text=\"\" icon=\"arrow-back\">\n      </ion-back-button>\n    </ion-buttons>\n\n    <!-- Page Title -->\n    <ion-title>Search</ion-title>\n\n    <!-- Cart Button Option -->\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"white\" (click)=\"gotoCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"search\" fullscreen class=\"ion-padding\">\n\n  <!-- Search bar -->\n  <ion-searchbar placeholder=\"Search your product\" debounce=\"500\" (ionInput)=\"getProducts($event)\"></ion-searchbar>\n\n  <!-- When search result is empty -->\n  <!-- No products Found -->\n  <ion-grid class=\"ion-padding\" id=\"empty\" *ngIf=\"products.length == 0\" style=\"height: 100%\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\" style=\"height: 100%; flex-direction: column\">\n      <div class=\"ion-text-center ion-padding\">\n        <ion-icon name=\"search\" style=\"zoom:5.0;\" color=\"medium\"></ion-icon>\n        <h4>No Search Found</h4>\n        <p>Looks like there are no products available at this moment</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Search Result Content -->\n  <ion-grid>\n    <ion-row>\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let item of products\">\n        <ion-card class=\"ion-no-margin\" (click)=\"goToProductDetails(item)\">\n\n          <!-- Product Image -->\n          <div class=\"card-img\" [style.background-image]=\"'url(' + item.images[0] + ')'\"></div>\n\n          <!-- Wish Button or Product Like/Dislike Button Option -->\n          <ion-fab vertical=\"top\" horizontal=\"end\">\n            <ion-fab-button>\n              <ion-icon color=\"dark\" name=\"heart-outline\" *ngIf=\"!item.isWishlist\"></ion-icon>\n              <ion-icon color=\"dark\" name=\"heart\" *ngIf=\"item.isWishlist\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n\n          <!-- Product Contents -->\n          <ion-card-content>\n            <ion-row>\n              <ion-text color=\"dark\">${{item.discountPrice}} &nbsp;</ion-text>\n              <span class=\"previous-price\"> ${{item.price}}</span>\n            </ion-row>\n            <ion-row>\n              <h4 class=\"product-name\">{{item.name | slice:0:20}}</h4>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/search/search.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#search ion-searchbar {\n  --background: var(--ion-color-white);\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 25px !important;\n}\n#search .card-img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 150px;\n}\n#search .product-name {\n  font-size: 1.2rem;\n  color: rgba(8, 8, 8, 0.58);\n}\n#search .previous-price {\n  text-decoration: line-through;\n  font-size: 0.8rem;\n}\n#search ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3BlcnMvRG9jdW1lbnRvcy9rZWx2aW4vc3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDhCQUFBO0FDQVI7QURHSTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7QUNEUjtBRElJO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtBQ0ZSO0FES0k7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FDSFI7QURNSTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtBQ0pSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWFyY2gge1xuICAgIGlvbi1zZWFyY2hiYXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNhcmQtaW1nIHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGNvbG9yOiByZ2JhKDgsIDgsIDgsIDAuNTgpO1xuICAgIH1cblxuICAgIC5wcmV2aW91cy1wcmljZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG5cbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufSIsIiNzZWFyY2ggaW9uLXNlYXJjaGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcbn1cbiNzZWFyY2ggLmNhcmQtaW1nIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbiNzZWFyY2ggLnByb2R1Y3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogcmdiYSg4LCA4LCA4LCAwLjU4KTtcbn1cbiNzZWFyY2ggLnByZXZpb3VzLXByaWNlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuI3NlYXJjaCBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-details/product-details.component */ "./src/app/pages/product-details/product-details.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/method-api-service.service */ "./src/app/services/method-api-service.service.ts");






let SearchComponent = class SearchComponent {
    constructor(modalController, router, _methodsApiRestService) {
        this.modalController = modalController;
        this.router = router;
        this._methodsApiRestService = _methodsApiRestService;
        // List of Products
        this.products = [];
        // Check is product available or not
        this.isProductAvailable = false;
    }
    ngOnInit() {
        this.getProductList('');
    }
    // Get All Products
    getProductList(name) {
        this.products = [];
        this._methodsApiRestService.GetMethod('getAll_product_controller.php?like=' + name)
            .subscribe(response => {
            if (typeof response[0] === 'undefined' || response[0] === null) {
                //swal.fire("Ups!", "Usuario no encontrado", "error");
            }
            else {
                for (let x in response) {
                    let datos = {
                        id: response[x].id,
                        name: response[x].name,
                        description: response[x].description,
                        price: response[x].price,
                        discountPrice: response[x].discount,
                        images: response[x].images,
                        color: response[x].colors,
                        size: response[x].sizes,
                        quantity: 1,
                        isWishlist: false
                    };
                    this.products.push(datos);
                }
            }
        }, error => {
            if (!error.ok) {
            }
        });
        return this.products;
    }
    // Get Search Result
    getProducts(ev) {
        // set val to the value of the searchbar
        const val = ev.target.value;
        this.getProductList(val);
        // if the value is an empty string don't filter the product
        if (val && val.trim() != '') {
            this.isProductAvailable = true;
            this.products = this.products.filter((item) => {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
    // Go to product details page function
    goToProductDetails(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsComponent"],
                componentProps: product
            });
            return yield modal.present();
        });
    }
    // Go to cart page function
    gotoCartPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['/cart']);
        });
    }
    // Back to previous page function
    dismiss() {
        this.router.navigate(['/tabs/tab1']);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_5__["MethodApiServiceService"] }
];
SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search.component.scss */ "./src/app/pages/search/search.component.scss")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/pages/search/search.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.module.ts ***!
  \***********************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.component */ "./src/app/pages/search/search.component.ts");







let SearchModule = class SearchModule {
};
SearchModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"]
                }
            ])
        ],
        declarations: [_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"]]
    })
], SearchModule);



/***/ })

}]);
//# sourceMappingURL=search-search-module-es2015.js.map