(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"dark\">\n\n    <!-- Back to previous page -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"white\" default-href=\"\" (click)=\"dismiss()\" text=\"\" icon=\"arrow-back\">\n      </ion-back-button>\n    </ion-buttons>\n\n    <!-- Title -->\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-card class=\"welcome-card\" style=\"margin-top: auto;margin-bottom: auto;\">\n  <ion-img src=\"/assets/stripe.png\"></ion-img>\n  <ion-card-header>\n    <ion-card-subtitle>Checkout</ion-card-subtitle>\n    <ion-card-title>Pay with Stripe</ion-card-title>\n    <ion-row>\n      <ion-col>Total Payment</ion-col>\n      <ion-col>$ {{valorpago}} </ion-col>\n    </ion-row>\n  </ion-card-header>\n  <ion-card-content>\n    <form action=\"/\" method=\"post\" id=\"payment-form\">\n      <div class=\"form-row\">\n        <div id=\"card-element\">\n          <!-- a Stripe Element will be inserted here. -->\n        </div>\n        <!-- Used to display Element errors -->\n        <div id=\"card-errors\" role=\"alert\"></div>\n      </div>\n      <ion-button type=\"submit\" color=\"success\" expand=\"full\">Make Payment</ion-button>\n    </form>\n  </ion-card-content>\n</ion-card>");

/***/ }),

/***/ "./src/app/pages/checkout/checkout-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/checkout/checkout-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function() { return CheckoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout.page */ "./src/app/pages/checkout/checkout.page.ts");




const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckoutPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/checkout/checkout.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.module.ts ***!
  \***************************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-routing.module */ "./src/app/pages/checkout/checkout-routing.module.ts");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/pages/checkout/checkout.page.ts");







let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"]
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })
], CheckoutPageModule);



/***/ }),

/***/ "./src/app/pages/checkout/checkout.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/checkout/checkout.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.ts ***!
  \*************************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/method-api-service.service */ "./src/app/services/method-api-service.service.ts");







let CheckoutPage = class CheckoutPage {
    constructor(http, router, storageService, _methodsApiRestService) {
        this.http = http;
        this.router = router;
        this.storageService = storageService;
        this._methodsApiRestService = _methodsApiRestService;
        this.stripe = Stripe('pk_test_51HdzaMJIWmXMvhqj9x3dBdLLpuuiYlI4EJcFF15XEvajtun9Qm6wu1SdopTvCYcML57NB5An5D62CdlGRytg6Wph00PkDTlUOG');
        this.valorpago = '0';
        this.cartProducts = [];
    }
    ngOnInit() {
        this.setupStripe();
        this.valorpago = localStorage.getItem('pagos');
        if (this.valorpago == '' || this.valorpago == null) {
            this.valorpago = '0';
        }
    }
    setupStripe() {
        let elements = this.stripe.elements();
        var style = {
            base: {
                color: '#32325d',
                lineHeight: '24px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };
        this.card = elements.create('card', { style: style });
        console.log(this.card);
        this.card.mount('#card-element');
        this.card.addEventListener('change', event => {
            var displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            }
            else {
                displayError.textContent = '';
            }
        });
        var form = document.getElementById('payment-form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            this.stripe.createSource(this.card).then(result => {
                if (result.error) {
                    var errorElement = document.getElementById('card-errors');
                    errorElement.textContent = result.error.message;
                }
                else {
                    this.makePayment(result);
                }
            });
        });
    }
    makePayment(token) {
        var name = localStorage.getItem('name');
        var email = localStorage.getItem('email');
        var amount = localStorage.getItem('pagos') + '00';
        if (parseInt(amount) > 0) {
            this.http
                .post('http://localhost:4242/create-charge', {
                token: token.source.id,
                name: name,
                email: email,
                amount: amount
            })
                .subscribe(data => {
                if (data['charge']['status'] = 'succeeded') {
                    let datos = {
                        price: localStorage.getItem('pagos'),
                        status: 'approed',
                        cliente: localStorage.getItem('iduser'),
                        shipping: '123',
                        tax: '12'
                    };
                    this._methodsApiRestService.PostMethod('create_orders_controller.php', datos)
                        .subscribe(response => {
                        if (response['code'] == 200) {
                            let obj = JSON.parse(localStorage.getItem('_cap_my-cart'));
                            localStorage.removeItem("_cap_my-cart");
                            localStorage.removeItem("pagos");
                            for (let x of obj) {
                                let prod = {
                                    orden: response['orden'],
                                    product: x['id'],
                                    cant: x['quantity']
                                };
                                this._methodsApiRestService.PostMethod('create_product_order_controller.php', prod)
                                    .subscribe(response => {
                                    console.log(response);
                                }, error => {
                                    if (!error.ok) {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Ups!", "Error en Petición", "error");
                                    }
                                });
                            }
                        }
                    }, error => {
                        if (!error.ok) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Ups!", "Error en Petición", "error");
                        }
                    });
                    this.valorpago = '0';
                    this.router.navigate(['/tabs/tab1']);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Transaction succesfull!', 'Your transaction has been aproved succesfully', 'success');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Transaction Error!', 'Status: ' + data['charge']['status'], 'error');
                }
            });
        }
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_6__["MethodApiServiceService"] }
];
CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./checkout.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./checkout.page.scss */ "./src/app/pages/checkout/checkout.page.scss")).default]
    })
], CheckoutPage);



/***/ })

}]);
//# sourceMappingURL=pages-checkout-checkout-module-es2015.js.map