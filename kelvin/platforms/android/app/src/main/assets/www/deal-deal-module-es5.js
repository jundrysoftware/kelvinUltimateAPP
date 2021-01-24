function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deal-deal-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deal/deal.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deal/deal.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDealDealComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\n  - Deal Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"dark\">\n\n    <!-- Side menu option -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <!-- Page title -->\n    <ion-title>Deals</ion-title>\n\n    <!-- Cart Button Option -->\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"white\" (click)=\"gotoCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<!-- Contents -->\n<ion-content id=\"deal\">\n  <ion-card *ngFor=\"let item of deals\">\n\n    <!-- Any deal content image -->\n    <img [src]=\"item.image\" />\n\n    <!-- Wish Button or Product Like/Dislike Button Option -->\n    <ion-fab vertical=\"top\" horizontal=\"end\">\n      <ion-fab-button>\n        <ion-icon color=\"light\" name=\"heart\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n    <!-- Deal contents -->\n    <ion-card-header>\n      <ion-card-title class=\"ion-padding-bottom\">{{item.title}}</ion-card-title>\n      <ion-card-subtitle class=\"ion-text-wrap\">{{item.subTitle}}</ion-card-subtitle>\n      <ion-button color=\"primary\" size=\"small\">Shop Now</ion-button>\n    </ion-card-header>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/deal/deal.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/deal/deal.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDealDealComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#deal ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n#deal ion-card-title {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3BlcnMvRG9jdW1lbnRvcy9rZWx2aW4vc3JjL2FwcC9wYWdlcy9kZWFsL2RlYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RlYWwvZGVhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtBQ0FSO0FER0k7RUFDSSxpQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGVhbC9kZWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RlYWwge1xuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBpb24tY2FyZC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbn0iLCIjZGVhbCBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59XG4jZGVhbCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/deal/deal.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/deal/deal.component.ts ***!
    \**********************************************/

  /*! exports provided: DealComponent */

  /***/
  function srcAppPagesDealDealComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealComponent", function () {
      return DealComponent;
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /**
     * Deal Screen
     * @author    ThemesBuckets <themebucketbd@gmail.com>
     * @copyright Copyright (c) 2020
     * @license   ThemesBuckets
     */


    var DealComponent = /*#__PURE__*/function () {
      function DealComponent(dealsService, router) {
        _classCallCheck(this, DealComponent);

        this.dealsService = dealsService;
        this.router = router;
        this.deals = [];
      }

      _createClass(DealComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDeals();
        } // Get list of deals

      }, {
        key: "getDeals",
        value: function getDeals() {
          this.deals = this.dealsService.getDeals();
        } // Go to cart page function

      }, {
        key: "gotoCartPage",
        value: function gotoCartPage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.router.navigate(['/cart']);

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return DealComponent;
    }();

    DealComponent.ctorParameters = function () {
      return [{
        type: _services_deals_service__WEBPACK_IMPORTED_MODULE_2__["DealsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    DealComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./deal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deal/deal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./deal.component.scss */
      "./src/app/pages/deal/deal.component.scss"))["default"]]
    })], DealComponent);
    /***/
  },

  /***/
  "./src/app/pages/deal/deal.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/deal/deal.module.ts ***!
    \*******************************************/

  /*! exports provided: DealModule */

  /***/
  function srcAppPagesDealDealModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealModule", function () {
      return DealModule;
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


    var _deal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./deal.component */
    "./src/app/pages/deal/deal.component.ts");

    var DealModule = function DealModule() {
      _classCallCheck(this, DealModule);
    };

    DealModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _deal_component__WEBPACK_IMPORTED_MODULE_6__["DealComponent"]
      }])],
      declarations: [_deal_component__WEBPACK_IMPORTED_MODULE_6__["DealComponent"]]
    })], DealModule);
    /***/
  }
}]);
//# sourceMappingURL=deal-deal-module-es5.js.map