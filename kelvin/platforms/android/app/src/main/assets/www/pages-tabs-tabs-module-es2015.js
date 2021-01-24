(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"heart\"></ion-icon>\n      <ion-label>Wishlist</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab4\">\n      <ion-icon name=\"notifications\"></ion-icon>\n      <ion-label>Notification</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab5\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Account</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>");

/***/ }),

/***/ "./src/app/pages/tabs/tabs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");




// Tab Routes
const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomeModule)
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | deal-deal-module */[__webpack_require__.e("common"), __webpack_require__.e("deal-deal-module")]).then(__webpack_require__.bind(null, /*! ../deal/deal.module */ "./src/app/pages/deal/deal.module.ts")).then(m => m.DealModule)
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | wishlist-wishlist-module */[__webpack_require__.e("common"), __webpack_require__.e("wishlist-wishlist-module")]).then(__webpack_require__.bind(null, /*! ../wishlist/wishlist.module */ "./src/app/pages/wishlist/wishlist.module.ts")).then(m => m.WishlistModule)
                    }
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | notification-notification-module */ "notification-notification-module").then(__webpack_require__.bind(null, /*! ../notification/notification.module */ "./src/app/pages/notification/notification.module.ts")).then(m => m.NotificationModule)
                    }
                ]
            },
            {
                path: 'tab5',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ../account/account.module */ "./src/app/pages/account/account.module.ts")).then(m => m.AccountModule)
                    }
                ]
            },
            {
                path: 'categories',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | category-category-module */[__webpack_require__.e("common"), __webpack_require__.e("category-category-module")]).then(__webpack_require__.bind(null, /*! ../category/category.module */ "./src/app/pages/category/category.module.ts")).then(m => m.CategoryModule)
                    }
                ]
            },
            {
                path: 'products/:id',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | products-products-module */[__webpack_require__.e("common"), __webpack_require__.e("products-products-module")]).then(__webpack_require__.bind(null, /*! ../products/products.module */ "./src/app/pages/products/products.module.ts")).then(m => m.ProductsModule)
                    }
                ]
            },
            {
                path: 'orders',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | orders-orders-module */ "orders-orders-module").then(__webpack_require__.bind(null, /*! ../orders/orders.module */ "./src/app/pages/orders/orders.module.ts")).then(m => m.OrdersModule)
                    }
                ]
            },
            {
                path: 'search',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | search-search-module */[__webpack_require__.e("common"), __webpack_require__.e("search-search-module")]).then(__webpack_require__.bind(null, /*! ../search/search.module */ "./src/app/pages/search/search.module.ts")).then(m => m.SearchModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/pages/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-bar {\n  --border: 0px;\n  --color-selected: var(--ion-color-color1);\n  --color: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3BlcnMvRG9jdW1lbnRvcy9rZWx2aW4vc3JjL2FwcC9wYWdlcy90YWJzL3RhYnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJhciB7XG4gICAgLS1ib3JkZXI6IDBweDtcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn0iLCJpb24tdGFiLWJhciB7XG4gIC0tYm9yZGVyOiAwcHg7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let TabsPage = class TabsPage {
    constructor(menuController) {
        this.menuController = menuController;
        this.menuController.enable(true); // Enable side menu
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module-es2015.js.map