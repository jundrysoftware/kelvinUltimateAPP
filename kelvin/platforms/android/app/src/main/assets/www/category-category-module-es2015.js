(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - Category Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"dark\">\n\n    <!-- Side menu option -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <!-- Page tile -->\n    <ion-title>Categories</ion-title>\n\n    <!-- Cart Button Option -->\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"white\" (click)=\"gotoCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Main Contents -->\n<ion-content id=\"category\" class=\"ion-padding\">\n\n  <!-- Category View Options -->\n  <div class=\"ion-text-end\">\n\n    <!-- One Column Option -->\n    <ion-button fill=\"clear\" [color]=\"oneColumn ? 'dark' : 'dark'\" class=\"ion-no-padding\" (click)=\"showOneColumn()\">\n      <ion-icon slot=\"icon-only\" name=\"square\"></ion-icon>\n    </ion-button>\n\n    <!-- Grid View Option -->\n    <ion-button fill=\"clear\" [color]=\"grid ? 'dark' : 'dark'\" class=\"ion-no-padding\" (click)=\"showGrid()\">\n      <ion-icon slot=\"icon-only\" name=\"grid\"></ion-icon>\n    </ion-button>\n\n    <!-- List view option -->\n    <ion-button fill=\"clear\" [color]=\"list ? 'dark' : 'dark'\" class=\"ion-no-padding\" (click)=\"showList()\">\n      <ion-icon slot=\"icon-only\" name=\"list\"></ion-icon>\n    </ion-button>\n  </div>\n  <!-- End Category View Options -->\n\n  <!-- Grid View Contents -->\n  <ion-grid>\n    <ion-row *ngIf=\"grid\">\n      <ion-col size=\"6\" *ngFor=\"let item of categories\">\n        <ion-card class=\"ion-no-padding ion-no-margin\" routerLink=\"/tabs/products/{{item.id}}\" routerDirection=\"root\">\n          <img [src]=\"item.image\" />\n          <ion-card-header>\n            <ion-card-subtitle>{{item.name}}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <!-- One COlumn View Contents -->\n    <ion-row *ngIf=\"oneColumn\">\n      <ion-col size=\"12\" *ngFor=\"let item of categories\">\n        <ion-card class=\"ion-no-padding ion-no-margin\" routerLink=\"/tabs/products/{{item.id}}\" routerDirection=\"root\">\n          <img [src]=\"item.image\" />\n          <ion-card-header>\n            <ion-card-subtitle>{{item.name}}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- List View Contents -->\n  <div id=\"list\" *ngIf=\"list\">\n    <ion-card *ngFor=\"let item of categories\" routerLink=\"/tabs/products/{{item.id}}\"\n    routerDirection=\"root\">\n        <ion-list lines=\"none\">\n            <ion-item class=\"ion-no-padding\">\n\n                <!-- Product Image -->\n                <ion-thumbnail slot=\"start\">\n                    <img style=\"vertical-align: middle;\" [src]=\"item.image\">\n                </ion-thumbnail>\n\n                <!-- Product Contents -->\n                <ion-label class=\"ion-text-wrap\">\n                    <ion-row>\n                        <h2 class=\"product-name\">{{ item.name }}</h2>\n                    </ion-row>\n                   \n                </ion-label>\n            </ion-item>\n        </ion-list>\n    </ion-card>\n</div>\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/category/category.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/category/category.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#category ion-list {\n  margin-bottom: 0px !important;\n}\n#category .item ion-thumbnail {\n  width: 140px;\n  height: 90px;\n}\n#category .item ion-thumbnail img {\n  width: 140px;\n  height: 90px;\n  border-radius: 5px;\n}\n#category .item h2 {\n  font-size: 1.5rem;\n}\n#list .item ion-thumbnail {\n  width: 140px;\n  height: 90px;\n}\n#list .item ion-thumbnail img {\n  width: 130px;\n  height: 90px;\n  border-radius: 5px;\n  margin-left: 15px;\n}\n#list .item ion-note {\n  font-size: 1.3rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3BlcnMvRG9jdW1lbnRvcy9rZWx2aW4vc3JjL2FwcC9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSw2QkFBQTtBQ0FSO0FESVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0ZaO0FESVk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRmhCO0FETVE7RUFDSSxpQkFBQTtBQ0paO0FEV1E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ1JaO0FEVVk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSaEI7QURZUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNWWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhdGVnb3J5IHtcbiAgICBpb24tbGlzdCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pdGVtIHtcbiAgICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuI2xpc3Qge1xuICAgIC5pdGVtIHtcbiAgICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLW5vdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgfVxufSIsIiNjYXRlZ29yeSBpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuI2NhdGVnb3J5IC5pdGVtIGlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogOTBweDtcbn1cbiNjYXRlZ29yeSAuaXRlbSBpb24tdGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4jY2F0ZWdvcnkgLml0ZW0gaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuI2xpc3QgLml0ZW0gaW9uLXRodW1ibmFpbCB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuI2xpc3QgLml0ZW0gaW9uLXRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbiNsaXN0IC5pdGVtIGlvbi1ub3RlIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/category/category.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/category/category.component.ts ***!
  \******************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/**
 * Category Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */




let CategoryComponent = class CategoryComponent {
    constructor(router, categoryService) {
        this.router = router;
        this.categoryService = categoryService;
        this.categories = [];
        this.grid = true;
        this.oneColumn = false;
        this.list = false;
    }
    ngOnInit() {
        this.getCategories();
    }
    // Get list of categories
    getCategories() {
        this.categories = this.categoryService.categoryList();
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
    // Go to cart page function
    gotoCartPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['/cart']);
        });
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
];
CategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category.component.scss */ "./src/app/pages/category/category.component.scss")).default]
    })
], CategoryComponent);



/***/ }),

/***/ "./src/app/pages/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.component */ "./src/app/pages/category/category.component.ts");







let CategoryModule = class CategoryModule {
};
CategoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"]
                }
            ])
        ],
        declarations: [_category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"]],
    })
], CategoryModule);



/***/ })

}]);
//# sourceMappingURL=category-category-module-es2015.js.map