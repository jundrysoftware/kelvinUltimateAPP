function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Header -->\n<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <!-- Back to previous page -->\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"dark\" default-href=\"\" (click)=\"dismiss()\" text=\"\" icon=\"arrow-back\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <!-- Page title -->\n        <ion-title>Cart</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"cart\" fullscreen>\n\n    <!-- When Cart is Empty -->\n    <ion-grid class=\"ion-padding\" id=\"empty\" *ngIf=\"cartProducts.length == 0\" style=\"height: 100%\">\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\" style=\"height: 100%; flex-direction: column\">\n            <div class=\"ion-text-center ion-padding\">\n                <ion-icon name=\"cart\" style=\"zoom:5.0;\" color=\"medium\"></ion-icon>\n                <h4>Your Cart is Empty</h4>\n                <p>Looks like you haven't added anything to your cart yet</p>\n            </div>\n        </ion-row>\n    </ion-grid>\n\n    <!-- Cart Contents -->\n    <div *ngIf=\"cartProducts.length != 0\">\n        <!-- Cart Product List -->\n        <ion-card *ngFor=\"let item of cartProducts; let i = index\">\n            <ion-list lines=\"none\">\n                <ion-item class=\"ion-no-padding\">\n\n                    <!-- Product Image -->\n                    <ion-thumbnail slot=\"start\">\n                        <img style=\"vertical-align: middle;\" [src]=\"item.images[0]\">\n                    </ion-thumbnail>\n\n                    <ion-label class=\"ion-text-wrap\">\n\n                        <!-- Product Name -->\n                        <ion-text color=\"dark\">\n                            <h2> {{ item.name }}</h2>\n                        </ion-text>\n\n                        <!-- Product Price -->\n                        <ion-text color=\"dark\">\n                            <p>${{item.discountPrice}}</p>\n                        </ion-text>\n                    </ion-label>\n\n                    <!-- Remove Product From Cart -->\n                    <ion-icon name=\"close-circle\" slot=\"end\" color=\"medium\" (click)=\"removeProduct(item, i)\"></ion-icon>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n\n\n        <!-- summary Of Products Price -->\n        <ion-list lines=\"none\">\n            <ion-item>\n                <ion-label>Sub Total</ion-label>\n                <ion-note slot=\"end\" color=\"dark\">{{total}}</ion-note>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Shipping</ion-label>\n                <ion-note slot=\"end\" color=\"dark\">${{shipping}}</ion-note>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Tax(10%)</ion-label>\n                <ion-note slot=\"end\" color=\"dark\">${{tax}}</ion-note>\n            </ion-item>\n\n            <ion-item-divider></ion-item-divider>\n\n            <ion-item>\n                <ion-label>Total</ion-label>\n                <ion-note slot=\"end\" color=\"dark\">${{total + 25 + 100}}</ion-note>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n\n<!-- Footer -->\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar class=\"ion-padding\" transparent>\n        <!-- Checkout Button Option -->\n        <ion-button color=\"dark\" expand=\"block\" (click)=\"goToCheckout()\" *ngIf=\"cartProducts.length != 0\">PROCEED TO\n            CHECKOUT\n        </ion-button>\n    </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/cart/cart.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCartCartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#cart .item ion-thumbnail {\n  width: 140px;\n  height: 90px;\n}\n#cart .item ion-thumbnail img {\n  width: 140px;\n  height: 90px;\n  border-radius: 5px;\n}\n#cart .item ion-note {\n  font-size: 1.3rem;\n  font-weight: 600;\n}\n#cart #empty h4 {\n  color: #888888;\n  font-weight: bolder;\n}\n#cart #empty p {\n  color: #888888;\n}\nion-footer ion-toolbar {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n}\nion-footer ion-button {\n  --box-shadow: -1px 1px 17px -3px var(--ion-color-color1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3BlcnMvRG9jdW1lbnRvcy9rZWx2aW4vc3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDRFo7QURHWTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNEaEI7QURPUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNMWjtBRFdRO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FDVFo7QURZUTtFQUNJLGNBQUE7QUNWWjtBRGdCSTtFQUNJLCtCQUFBO0VBQ0Esd0NBQUE7QUNiUjtBRGdCSTtFQUNJLHdEQUFBO0FDZFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2FydCB7XG4gICAgLml0ZW0ge1xuICAgICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuICAgICAgICBpb24tbm90ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjZW1wdHkge1xuXG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4ODg4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICM4ODg4ODg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1mb290ZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1ib3gtc2hhZG93OiAtMXB4IDFweCAxN3B4IC0zcHggdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG4gICAgfVxufSIsIiNjYXJ0IC5pdGVtIGlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogOTBweDtcbn1cbiNjYXJ0IC5pdGVtIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiNjYXJ0IC5pdGVtIGlvbi1ub3RlIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4jY2FydCAjZW1wdHkgaDQge1xuICBjb2xvcjogIzg4ODg4ODtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbiNjYXJ0ICNlbXB0eSBwIHtcbiAgY29sb3I6ICM4ODg4ODg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciBpb24tYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93OiAtMXB4IDFweCAxN3B4IC0zcHggdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/cart/cart.component.ts ***!
    \**********************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppPagesCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
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


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /**
     * Cart Screen
     * @author    ThemesBuckets <themebucketbd@gmail.com>
     * @copyright Copyright (c) 2020
     * @license   ThemesBuckets
     */


    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(modalController, storageService, router) {
        _classCallCheck(this, CartComponent);

        this.modalController = modalController;
        this.storageService = storageService;
        this.router = router;
        this.cartProducts = [];
        this.total = 0;
        this.shipping = localStorage.getItem('shipping');
        this.tax = localStorage.getItem('tax');
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.getCartItems();
        } // Get Cart Items From Storage

      }, {
        key: "getCartItems",
        value: function getCartItems() {
          var _this = this;

          this.total = 0;
          this.storageService.getObject('my-cart').then(function (products) {
            _this.cartProducts = products;

            for (var i = 0; i < _this.cartProducts.length; i++) {
              _this.total += _this.cartProducts[i].discountPrice * _this.cartProducts[i].quantity;
            }
          });
        } // Remove Product From Cart

      }, {
        key: "removeProduct",
        value: function removeProduct(product, index) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.cartProducts.splice(index, 1);
                    _context.next = 3;
                    return this.storageService.removeStorageValue(product.id, 'my-cart');

                  case 3:
                    _context.next = 5;
                    return this.getCartItems();

                  case 5:
                    this.total = this.total - product.discountPrice * product.quantity;

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // Go to checkout page

      }, {
        key: "goToCheckout",
        value: function goToCheckout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var shipping, tax, result, pago;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    shipping = parseInt(localStorage.getItem('shipping'));
                    tax = parseInt(localStorage.getItem('tax'));
                    result = this.total + shipping + tax;
                    pago = result.toString();
                    localStorage.setItem('pagos', pago);
                    this.router.navigate(['/checkout']);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // Back to previous page options

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.router.navigate(['/tabs/tab1']);
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cart.component.scss */
      "./src/app/pages/cart/cart.component.scss"))["default"]]
    })], CartComponent);
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/cart/cart.module.ts ***!
    \*******************************************/

  /*! exports provided: CartModule */

  /***/
  function srcAppPagesCartCartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartModule", function () {
      return CartModule;
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


    var _cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cart.component */
    "./src/app/pages/cart/cart.component.ts");

    var CartModule = function CartModule() {
      _classCallCheck(this, CartModule);
    };

    CartModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"]
      }])],
      declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"]]
    })], CartModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-cart-cart-module-es5.js.map