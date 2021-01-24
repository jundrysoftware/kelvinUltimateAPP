(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter/filter.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter/filter.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - Filter Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"dark\">\n\n        <!-- Page Title -->\n        <ion-title>Filter</ion-title>\n\n        <!-- Close Button of Filter page -->\n        <ion-buttons slot=\"end\">\n            <ion-back-button color=\"white\" default-href=\"\" (click)=\"dismiss()\" text=\"\" icon=\"close\">\n            </ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"filter\" fullscreen>\n    <ion-list lines=\"none\">\n\n        <!-- Price Section -->\n        <p class=\"title\">Price</p>\n\n        <ion-item>\n            <ion-range pin=\"true\" [(ngModel)]=\"priceRange\" dual-knobs pin color=\"dark\">\n            </ion-range>\n        </ion-item>\n\n        <!-- Colors Section -->\n        <p class=\"title\">Colors</p>\n\n        <ion-radio-group>\n            <ion-row class=\"ion-padding-start\">\n                <ion-col size=\"4\" *ngFor=\"let item of colors\">\n                    <ion-item class=\"border-style\" lines=\"none\" [style.border-color]=\"item\">\n                        <ion-radio color=\"dark\" mode=\"ios\" [value]=\"item\"></ion-radio>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-radio-group>\n\n        <!-- Size Section -->\n        <p class=\"title\">Sizes</p>\n\n        <ion-radio-group>\n            <ion-row class=\"ion-padding-start\">\n                <ion-col size=\"4\" *ngFor=\"let item of sizes\">\n                    <ion-item lines=\"none\">\n                        <ion-label class=\"size-label\">{{item}}</ion-label>\n                        <ion-radio color=\"dark\" mode=\"ios\" [value]=\"item\"></ion-radio>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-radio-group>\n\n        <!-- Brand Section -->\n        <p class=\"title\">Brands</p>\n\n        <ion-radio-group allow-empty-selection>\n            <ion-item *ngFor=\"let item of brands\">\n                <ion-label>{{item}}</ion-label>\n                <ion-radio slot=\"start\" color=\"dark\" mode=\"ios\" [value]=\"item\"></ion-radio>\n            </ion-item>\n        </ion-radio-group>\n    </ion-list>\n</ion-content>\n\n\n<!-- Footer -->\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar class=\"ion-padding\" transparent>\n        <ion-row>\n            <!-- Cancel Button -->\n            <ion-col>\n                <ion-button class=\"add-to-cart\" color=\"dark\" fill=\"outline\" expand=\"block\">Cancel</ion-button>\n            </ion-col>\n\n            <!-- Filter Apply Button -->\n            <ion-col>\n                <ion-button class=\"add-to-cart\" color=\"dark\" fill=\"outline\" expand=\"block\">Apply</ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - Product Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"dark\">\n\n        <!-- Side Menu Option -->\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n        <!-- Title of page -->\n        <ion-title>Products</ion-title>\n\n        <!-- Product Filter Option -->\n        <ion-buttons slot=\"end\">\n            <ion-button color=\"white\" (click)=\"openFilterPage()\">\n                <ion-icon name=\"funnel\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n<!-- Contents -->\n<ion-content id=\"products\">\n\n    <!-- Product View Options -->\n    <div class=\"ion-text-end\">\n\n        <!-- One Column Option -->\n        <ion-button fill=\"clear\" [color]=\"oneColumn ? 'dark' : 'dark'\" class=\"ion-no-padding\"\n            (click)=\"showOneColumn()\">\n            <ion-icon slot=\"icon-only\" name=\"square\"></ion-icon>\n        </ion-button>\n\n        <!-- Grid Option -->\n        <ion-button fill=\"clear\" [color]=\"grid ? 'dark' : 'dark'\" class=\"ion-no-padding\" (click)=\"showGrid()\">\n            <ion-icon slot=\"icon-only\" name=\"grid\"></ion-icon>\n        </ion-button>\n\n        <!-- List View Option -->\n        <ion-button fill=\"clear\" [color]=\"list ? 'dark' : 'dark'\" class=\"ion-no-padding\" (click)=\"showList()\">\n            <ion-icon slot=\"icon-only\" name=\"list\"></ion-icon>\n        </ion-button>\n    </div>\n    <!-- End Product View Options -->\n\n\n    <!-- Grid View Contents -->\n    <ion-grid id=\"grid\" *ngIf=\"grid\">\n        <ion-row>\n            <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let item of products\">\n                <ion-card class=\"ion-no-margin\">\n\n                    <!-- Product Image -->\n                    <div class=\"card-img\" [style.background-image]=\"'url(' + item.images[0] + ')'\"\n                        (click)=\"goToProductDetails(item)\"></div>\n\n                    <!-- Wish Button or Product Like/Dislike Button Option -->\n                    <ion-fab vertical=\"top\" horizontal=\"end\">\n                        <ion-fab-button>\n                            <ion-icon color=\"dark\" name=\"heart-outline\" *ngIf=\"!item.isWishlist\"></ion-icon>\n                            <ion-icon color=\"dark\" name=\"heart\" *ngIf=\"item.isWishlist\"></ion-icon>\n                        </ion-fab-button>\n                    </ion-fab>\n\n                    <!-- Product Contents -->\n                    <ion-card-content (click)=\"goToProductDetails(item)\">\n                        <ion-row>\n                            <ion-text color=\"dark\">${{item.discountPrice}} &nbsp;</ion-text>\n                            <span class=\"previous-price\"> ${{item.price}}</span>\n                        </ion-row>\n                        <ion-row>\n                            <h4 class=\"product-name\">{{item.name | slice:0:20}}</h4>\n                        </ion-row>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <!-- One Column View Contents -->\n    <ion-grid id=\"oneColumn\" *ngIf=\"oneColumn\">\n        <ion-row>\n            <ion-col size=\"12\" *ngFor=\"let item of products\">\n                <ion-card class=\"ion-no-margin\">\n\n                    <!-- Product Image -->\n                    <div class=\"card-img\" [style.background-image]=\"'url(' + item.images[0] + ')'\"\n                        (click)=\"goToProductDetails(item)\"></div>\n\n                    <!-- Wish Button or Product Like/Dislike Button Option -->\n                    <ion-fab vertical=\"top\" horizontal=\"end\">\n                        <ion-fab-button>\n                            <ion-icon color=\"dark\" name=\"heart-outline\" *ngIf=\"!item.isWishlist\"></ion-icon>\n                            <ion-icon color=\"dark\" name=\"heart\" *ngIf=\"item.isWishlist\"></ion-icon>\n                        </ion-fab-button>\n                    </ion-fab>\n\n                    <!-- Product Contents -->\n                    <ion-card-content (click)=\"goToProductDetails(item)\">\n                        <ion-row>\n                            <ion-text color=\"dark\">${{item.discountPrice}} &nbsp;</ion-text>\n                            <span class=\"previous-price\"> ${{item.price}}</span>\n                        </ion-row>\n                        <ion-row>\n                            <h4 class=\"product-name\">{{item.name | slice:0:20}}</h4>\n                        </ion-row>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <!-- List View Contents -->\n    <div id=\"list\" *ngIf=\"list\">\n        <ion-card *ngFor=\"let item of products\">\n            <ion-list lines=\"none\" (click)=\"goToProductDetails(item)\">\n                <ion-item class=\"ion-no-padding\">\n\n                    <!-- Product Image -->\n                    <ion-thumbnail slot=\"start\">\n                        <img style=\"vertical-align: middle;\" [src]=\"item.images[0]\">\n                    </ion-thumbnail>\n\n                    <!-- Wish Button or Product Like/Dislike Button Option -->\n                    <ion-fab vertical=\"bottom\" horizontal=\"end\">\n                        <ion-icon color=\"dark\" name=\"heart-outline\" *ngIf=\"!item.isWishlist\"></ion-icon>\n                        <ion-icon color=\"dark\" name=\"heart\" *ngIf=\"item.isWishlist\"></ion-icon>\n                    </ion-fab>\n\n                    <!-- Product Contents -->\n                    <ion-label class=\"ion-text-wrap\">\n                        <ion-row>\n                            <h4 class=\"product-name\">{{item.name | slice:0:20}}</h4>\n                        </ion-row>\n                        <ion-row>\n                            <ion-text color=\"dark\">${{item.discountPrice}} &nbsp;</ion-text>\n                            <span class=\"previous-price\"> ${{item.price}}</span>\n                        </ion-row>\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/filter/filter.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/filter/filter.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#filter ion-range {\n  --bar-height: 3px;\n  --bar-border-radius: 10px;\n  --bar-background-active: var(--ion-color-color1) !important;\n  --knob-background: var(--ion-color-color1);\n  --knob-box-shadow: -1px 1px 17px -3px var(--ion-color-color1);\n}\n#filter .title {\n  font-size: 1.4rem;\n  font-weight: 600;\n  padding-left: 30px;\n  font-family: serif;\n}\n#filter .border-style {\n  border: 4px solid;\n  width: 60px;\n  border-radius: 15%;\n}\n#filter .size-label {\n  font-weight: bold;\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3BlcnMvRG9jdW1lbnRvcy9rZWx2aW4vc3JjL2FwcC9wYWdlcy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJEQUFBO0VBQ0EsMENBQUE7RUFDQSw2REFBQTtBQ0FSO0FER0k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RSO0FESUk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0ZSO0FES0k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZpbHRlciB7XG4gICAgaW9uLXJhbmdlIHtcbiAgICAgICAgLS1iYXItaGVpZ2h0OiAzcHg7XG4gICAgICAgIC0tYmFyLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKSAhaW1wb3J0YW50O1xuICAgICAgICAtLWtub2ItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG4gICAgICAgIC0ta25vYi1ib3gtc2hhZG93OiAtMXB4IDFweCAxN3B4IC0zcHggdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNlcmlmO1xuICAgIH1cblxuICAgIC5ib3JkZXItc3R5bGUge1xuICAgICAgICBib3JkZXI6IDRweCBzb2xpZDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcbiAgICB9XG5cbiAgICAuc2l6ZS1sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG59IiwiI2ZpbHRlciBpb24tcmFuZ2Uge1xuICAtLWJhci1oZWlnaHQ6IDNweDtcbiAgLS1iYXItYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpICFpbXBvcnRhbnQ7XG4gIC0ta25vYi1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcbiAgLS1rbm9iLWJveC1zaGFkb3c6IC0xcHggMXB4IDE3cHggLTNweCB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcbn1cbiNmaWx0ZXIgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xufVxuI2ZpbHRlciAuYm9yZGVyLXN0eWxlIHtcbiAgYm9yZGVyOiA0cHggc29saWQ7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNSU7XG59XG4jZmlsdGVyIC5zaXplLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/filter/filter.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/filter/filter.component.ts ***!
  \**************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/**
 * Filter Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */



let FilterComponent = class FilterComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.colors = ["#CECE45", "#F951E2", "#CF0114"];
        this.sizes = ["S", "M", "L", "XL"];
        this.brands = ["Gucci", "Chanel", "Louis Vuitton", "Hermès", "Nike", "Prada"];
    }
    ngOnInit() {
        this.configure();
    }
    configure() {
        this.priceRange = {
            lower: 30,
            upper: 60
        };
    }
    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
};
FilterComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
FilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter/filter.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./filter.component.scss */ "./src/app/pages/filter/filter.component.scss")).default]
    })
], FilterComponent);



/***/ }),

/***/ "./src/app/pages/products/products.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/products/products.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#products .card-img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n#products #grid .card-img {\n  height: 150px;\n}\n#products #oneColumn .card-img {\n  height: 200px;\n}\n#products .product-name {\n  font-size: 1.2rem;\n  color: rgba(8, 8, 8, 0.58);\n}\n#products .previous-price {\n  text-decoration: line-through;\n  font-size: 0.8rem;\n}\n#products #list .item ion-thumbnail {\n  width: 140px;\n  height: 90px;\n}\n#products #list .item ion-thumbnail img {\n  width: 130px;\n  height: 90px;\n  border-radius: 5px;\n  margin-left: 5px;\n}\n#products #list .item ion-note {\n  font-size: 1.3rem;\n  font-weight: 600;\n}\n#products ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3BlcnMvRG9jdW1lbnRvcy9rZWx2aW4vc3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUNBUjtBREdJO0VBQ0ksYUFBQTtBQ0RSO0FESUk7RUFDSSxhQUFBO0FDRlI7QURLSTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7QUNIUjtBRE1JO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtBQ0pSO0FEU1k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ1BoQjtBRFNnQjtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1BwQjtBRFdZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ1RoQjtBRGNJO0VBQ0kseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0FDWlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9kdWN0cyB7XG4gICAgLmNhcmQtaW1nIHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICB9XG5cbiAgICAjZ3JpZCAuY2FyZC1pbWcge1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH1cblxuICAgICNvbmVDb2x1bW4gLmNhcmQtaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGNvbG9yOiByZ2JhKDgsIDgsIDgsIDAuNTgpO1xuICAgIH1cblxuICAgIC5wcmV2aW91cy1wcmljZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG5cbiAgICAjbGlzdCB7XG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG5cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4OztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1ub3RlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn0iLCIjcHJvZHVjdHMgLmNhcmQtaW1nIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbiNwcm9kdWN0cyAjZ3JpZCAuY2FyZC1pbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuI3Byb2R1Y3RzICNvbmVDb2x1bW4gLmNhcmQtaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbiNwcm9kdWN0cyAucHJvZHVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiByZ2JhKDgsIDgsIDgsIDAuNTgpO1xufVxuI3Byb2R1Y3RzIC5wcmV2aW91cy1wcmljZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbiNwcm9kdWN0cyAjbGlzdCAuaXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG4jcHJvZHVjdHMgI2xpc3QgLml0ZW0gaW9uLXRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuI3Byb2R1Y3RzICNsaXN0IC5pdGVtIGlvbi1ub3RlIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4jcHJvZHVjdHMgaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-details/product-details.component */ "./src/app/pages/product-details/product-details.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filter/filter.component */ "./src/app/pages/filter/filter.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/**
 * Product Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */







let ProductsComponent = class ProductsComponent {
    constructor(productsService, modalController, activeRoute) {
        this.productsService = productsService;
        this.modalController = modalController;
        this.activeRoute = activeRoute;
        this.grid = true;
        this.oneColumn = false;
        this.list = false;
    }
    ngOnInit() {
        this.getProductList();
    }
    // Get List of Products
    getProductList() {
        var id = this.activeRoute.snapshot.paramMap.get('id');
        this.products = this.productsService.productListByID(id);
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
    // Open Filter page
    openFilterPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _filter_filter_component__WEBPACK_IMPORTED_MODULE_5__["FilterComponent"]
            });
            return yield modal.present();
        });
    }
    // One column view function
    showOneColumn() {
        this.oneColumn = true;
        this.grid = false;
        this.list = false;
    }
    // Grid view function
    showGrid() {
        this.grid = true;
        this.oneColumn = false;
        this.list = false;
    }
    // List view function
    showList() {
        this.list = true;
        this.grid = false;
        this.oneColumn = false;
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./products.component.scss */ "./src/app/pages/products/products.component.scss")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/pages/products/products.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../filter/filter.component */ "./src/app/pages/filter/filter.component.ts");








let ProductsModule = class ProductsModule {
};
ProductsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"]
                }
            ])
        ],
        declarations: [_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterComponent"]],
        entryComponents: [_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterComponent"]],
        providers: []
    })
], ProductsModule);



/***/ })

}]);
//# sourceMappingURL=products-products-module-es2015.js.map