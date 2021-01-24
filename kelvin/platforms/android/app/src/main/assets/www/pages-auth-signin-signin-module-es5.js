function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-signin-signin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signin/signin.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signin/signin.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthSigninSigninComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" default-href=\"\" text=\"\" icon=\"arrow-back\" routerLink=\"/landing\"\n        routerDirection=\"root\">\n      </ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"signin\" fullscreen>\n  <div class=\"section_one\">\n    <h2>LOGIN</h2>\n    <p>Buy product online or offline</p>\n  </div>\n\n  <div class=\"section_two ion-padding\">\n    <img class=\"ion-padding\" src=\"assets/images/eCommerce-img.png\" />\n\n    <!-- SignIn Form -->\n    <form class=\"ion-padding\">\n      <!-- Email -->\n      <ion-item>\n        <ion-label>\n          <ion-icon name=\"mail\" color=\"dark\"></ion-icon>\n        </ion-label>\n        <ion-input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\"></ion-input>\n      </ion-item>\n\n      <!-- Password -->\n      <ion-item class=\"ion-padding-top\">\n        <ion-label>\n          <ion-icon name=\"eye\" color=\"dark\"></ion-icon>\n        </ion-label>\n        <ion-input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\"></ion-input>\n      </ion-item>\n\n      <!-- Forget Password Button -->\n      <ion-button expand=\"block\" color=\"dark\" fill=\"clear\" slot=\"end\" routerLink=\"/forget-password\"\n        routerDirection=\"root\">\n        Forget Password?\n      </ion-button>\n\n\n      <!-- SignIn Buttons -->\n      <div class=\"buttons\">\n        <ion-button expand=\"block\" color=\"dark\" (click)=\"sendLogin()\">\n          <ion-text><strong>SIGN IN</strong></ion-text>\n        </ion-button></div>\n    </form>\n  </div>\n\n  <!-- SignUp Buttons -->\n  <div class=\"section_three\">\n    <ion-button fill=\"clear\" color=\"dark\" routerLink=\"/signup\" routerDirection=\"root\">\n      <span>Don't have an account? <b>Sign Up</b></span>\n    </ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/auth/signin/signin.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/auth/signin/signin.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthSigninSigninComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#signin {\n  text-align: center;\n}\n#signin .section_one {\n  height: 10%;\n}\n#signin .section_one h2 {\n  font-weight: 900;\n  padding-top: 2%;\n}\n#signin .section_one p {\n  color: var(--ion-color-color1);\n  font-weight: bold;\n}\n#signin .section_two {\n  height: 80%;\n}\n#signin .section_two img {\n  height: 40%;\n}\n#signin .section_three {\n  height: 5%;\n}\n#signin a.btn-social,\n#signin .btn-social {\n  border-radius: 50%;\n  color: #ffffff !important;\n  display: inline-block;\n  height: 35px;\n  line-height: 35px;\n  margin: 8px 4px;\n  text-align: center;\n  text-decoration: none;\n  transition: background-color 0.3s;\n  width: 35px;\n}\n#signin .btn-facebook {\n  background-color: #3b5998;\n}\n#signin .btn-google-plus {\n  background-color: #dd4b39;\n}\n#signin .btn-instagram {\n  background-color: #3f729b;\n}\n#signin .btn-twitter {\n  background-color: #55acee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3BlcnMvRG9jdW1lbnRvcy9rZWx2aW4vc3JjL2FwcC9wYWdlcy9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7QUNDUjtBRENRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ1o7QURFUTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7QUNBWjtBRElJO0VBQ0ksV0FBQTtBQ0ZSO0FESVE7RUFDSSxXQUFBO0FDRlo7QURNSTtFQUNJLFVBQUE7QUNKUjtBRE9JOztFQUVJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FDTFI7QURRSTtFQUNJLHlCQUFBO0FDTlI7QURTSTtFQUNJLHlCQUFBO0FDUFI7QURVSTtFQUNJLHlCQUFBO0FDUlI7QURXSTtFQUNJLHlCQUFBO0FDVFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2lnbmluIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuc2VjdGlvbl9vbmUge1xuICAgICAgICBoZWlnaHQ6IDEwJTtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIlO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWN0aW9uX3R3byB7XG4gICAgICAgIGhlaWdodDogODAlO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWN0aW9uX3RocmVlIHtcbiAgICAgICAgaGVpZ2h0OiA1JTtcbiAgICB9XG5cbiAgICBhLmJ0bi1zb2NpYWwsXG4gICAgLmJ0bi1zb2NpYWwge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgICAgbWFyZ2luOiA4cHggNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgIH1cblxuICAgIC5idG4tZmFjZWJvb2sge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICAgIH1cblxuICAgIC5idG4tZ29vZ2xlLXBsdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xuICAgIH1cblxuICAgIC5idG4taW5zdGFncmFtIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNzI5YjtcbiAgICB9XG5cbiAgICAuYnRuLXR3aXR0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhY2VlO1xuICAgIH1cblxufSIsIiNzaWduaW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jc2lnbmluIC5zZWN0aW9uX29uZSB7XG4gIGhlaWdodDogMTAlO1xufVxuI3NpZ25pbiAuc2VjdGlvbl9vbmUgaDIge1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nLXRvcDogMiU7XG59XG4jc2lnbmluIC5zZWN0aW9uX29uZSBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNzaWduaW4gLnNlY3Rpb25fdHdvIHtcbiAgaGVpZ2h0OiA4MCU7XG59XG4jc2lnbmluIC5zZWN0aW9uX3R3byBpbWcge1xuICBoZWlnaHQ6IDQwJTtcbn1cbiNzaWduaW4gLnNlY3Rpb25fdGhyZWUge1xuICBoZWlnaHQ6IDUlO1xufVxuI3NpZ25pbiBhLmJ0bi1zb2NpYWwsXG4jc2lnbmluIC5idG4tc29jaWFsIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbjogOHB4IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgd2lkdGg6IDM1cHg7XG59XG4jc2lnbmluIC5idG4tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xufVxuI3NpZ25pbiAuYnRuLWdvb2dsZS1wbHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOTtcbn1cbiNzaWduaW4gLmJ0bi1pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y3MjliO1xufVxuI3NpZ25pbiAuYnRuLXR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhY2VlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/auth/signin/signin.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/auth/signin/signin.component.ts ***!
    \*******************************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppPagesAuthSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
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


    var _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/method-api-service.service */
    "./src/app/services/method-api-service.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var SigninComponent = /*#__PURE__*/function () {
      function SigninComponent(_methodsApiRestService, navCtrl) {
        _classCallCheck(this, SigninComponent);

        this._methodsApiRestService = _methodsApiRestService;
        this.navCtrl = navCtrl;
      }

      _createClass(SigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendLogin",
        value: function sendLogin() {
          var _this = this;

          var datos = {
            "email": this.email,
            "password": this.password
          };

          this._methodsApiRestService.PostMethod('login_client_controller.php', datos).subscribe(function (response) {
            if (response[0]['id'] > 0) {
              _this._methodsApiRestService.PostMethod('get_taxes_controller.php', datos).subscribe(function (taxes) {
                localStorage.setItem('shipping', taxes[0]['shipping']);
                localStorage.setItem('tax', taxes[0]['tax']);
                localStorage.setItem('name', response[0]['name'] + ' ' + response[0]['lastname']);
                localStorage.setItem('iduser', response[0]['id']);
                localStorage.setItem('email', response[0]['email']);

                _this.navCtrl.navigateRoot('/tabs/tab1');
              }, function (error) {
                //console.log(error);
                if (!error.ok) {}
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('incorrect data', 'check the fields entered', 'error');
            }
          }, function (error) {
            //console.log(error);
            if (!error.ok) {}
          });
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ctorParameters = function () {
      return [{
        type: _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__["MethodApiServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    SigninComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signin',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signin/signin.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signin.component.scss */
      "./src/app/pages/auth/signin/signin.component.scss"))["default"]]
    })], SigninComponent);
    /***/
  },

  /***/
  "./src/app/pages/auth/signin/signin.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/auth/signin/signin.module.ts ***!
    \****************************************************/

  /*! exports provided: SigninModule */

  /***/
  function srcAppPagesAuthSigninSigninModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninModule", function () {
      return SigninModule;
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


    var _signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signin.component */
    "./src/app/pages/auth/signin/signin.component.ts");

    var SigninModule = function SigninModule() {
      _classCallCheck(this, SigninModule);
    };

    SigninModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"]
      }])],
      declarations: [_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"]]
    })], SigninModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-auth-signin-signin-module-es5.js.map