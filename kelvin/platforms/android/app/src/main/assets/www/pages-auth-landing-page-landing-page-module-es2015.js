(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-landing-page-landing-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/landing-page/landing-page.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/landing-page/landing-page.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - Landing Page Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<ion-content id=\"landing-page\" fullscreen>\n  <div class=\"section_one\">\n    <h2>WELLCOME</h2>\n    <p>Buy product online or offline</p>\n  </div>\n\n  <div class=\"section_two\">\n    <img class=\"ion-padding\" src=\"assets/images/girls-shopping.jpg\" />\n  </div>\n\n  <div class=\"section_three\">\n    <p class=\"ion-padding\">It is a long established fact that a reader will be distracted by the readable content of a\n      page when looking at its layout.</p>\n\n    <!-- Button Options -->\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" color=\"primary\" routerLink=\"/signin\" routerDirection=\"root\">Login</ion-button><br>\n      <ion-button expand=\"block\" fill=\"outline\" color=\"primary\" routerLink=\"/signup\" routerDirection=\"root\">Sign Up\n      </ion-button>\n    </div>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/auth/landing-page/landing-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/auth/landing-page/landing-page.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#landing-page {\n  text-align: center;\n}\n#landing-page .section_one {\n  height: 15%;\n}\n#landing-page .section_one h2 {\n  font-weight: 900;\n  padding-top: 5%;\n}\n#landing-page .section_one p {\n  color: var(--ion-color-color1);\n  font-weight: bold;\n}\n#landing-page .section_two {\n  height: 30%;\n}\n#landing-page .section_three {\n  height: 55%;\n  padding: 10px;\n}\n#landing-page .section_three p {\n  font-size: 1rem;\n  color: #6d6b6b;\n}\n#landing-page a.btn-social,\n#landing-page .btn-social {\n  border-radius: 50%;\n  color: #ffffff !important;\n  display: inline-block;\n  height: 54px;\n  line-height: 54px;\n  margin: 8px 4px;\n  text-align: center;\n  text-decoration: none;\n  transition: background-color 0.3s;\n  width: 54px;\n}\n#landing-page .btn-facebook {\n  background-color: #3b5998;\n}\n#landing-page .btn-google-plus {\n  background-color: #dd4b39;\n}\n#landing-page .btn-instagram {\n  background-color: #3f729b;\n}\n#landing-page .btn-twitter {\n  background-color: #55acee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3BlcnMvRG9jdW1lbnRvcy9rZWx2aW4vc3JjL2FwcC9wYWdlcy9hdXRoL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7QUNDUjtBRENRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ1o7QURFUTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7QUNBWjtBRElJO0VBQ0ksV0FBQTtBQ0ZSO0FES0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0hSO0FES1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0haO0FET0k7O0VBRUksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7QUNMUjtBRFFJO0VBQ0kseUJBQUE7QUNOUjtBRFNJO0VBQ0kseUJBQUE7QUNQUjtBRFVJO0VBQ0kseUJBQUE7QUNSUjtBRFdJO0VBQ0kseUJBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsYW5kaW5nLXBhZ2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5zZWN0aW9uX29uZSB7XG4gICAgICAgIGhlaWdodDogMTUlO1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlY3Rpb25fdHdvIHtcbiAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgfVxuXG4gICAgLnNlY3Rpb25fdGhyZWUge1xuICAgICAgICBoZWlnaHQ6IDU1JTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjNmQ2YjZiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYS5idG4tc29jaWFsLFxuICAgIC5idG4tc29jaWFsIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogNTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gICAgICAgIG1hcmdpbjogOHB4IDRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xuICAgICAgICB3aWR0aDogNTRweDtcbiAgICB9XG5cbiAgICAuYnRuLWZhY2Vib29rIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbiAgICB9XG5cbiAgICAuYnRuLWdvb2dsZS1wbHVzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOTtcbiAgICB9XG5cbiAgICAuYnRuLWluc3RhZ3JhbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjcyOWI7XG4gICAgfVxuXG4gICAgLmJ0bi10d2l0dGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZTtcbiAgICB9XG5cbn0iLCIjbGFuZGluZy1wYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2xhbmRpbmctcGFnZSAuc2VjdGlvbl9vbmUge1xuICBoZWlnaHQ6IDE1JTtcbn1cbiNsYW5kaW5nLXBhZ2UgLnNlY3Rpb25fb25lIGgyIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuI2xhbmRpbmctcGFnZSAuc2VjdGlvbl9vbmUgcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jbGFuZGluZy1wYWdlIC5zZWN0aW9uX3R3byB7XG4gIGhlaWdodDogMzAlO1xufVxuI2xhbmRpbmctcGFnZSAuc2VjdGlvbl90aHJlZSB7XG4gIGhlaWdodDogNTUlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuI2xhbmRpbmctcGFnZSAuc2VjdGlvbl90aHJlZSBwIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzZkNmI2Yjtcbn1cbiNsYW5kaW5nLXBhZ2UgYS5idG4tc29jaWFsLFxuI2xhbmRpbmctcGFnZSAuYnRuLXNvY2lhbCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDU0cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xuICBtYXJnaW46IDhweCA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gIHdpZHRoOiA1NHB4O1xufVxuI2xhbmRpbmctcGFnZSAuYnRuLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbn1cbiNsYW5kaW5nLXBhZ2UgLmJ0bi1nb29nbGUtcGx1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7XG59XG4jbGFuZGluZy1wYWdlIC5idG4taW5zdGFncmFtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNzI5Yjtcbn1cbiNsYW5kaW5nLXBhZ2UgLmJ0bi10d2l0dGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/auth/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/**
 * Landing Page Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 *
 * File path - 'src/pages/auth/landing-page/landing-page.component.ts'
 */


let LandingPageComponent = class LandingPageComponent {
    constructor() { }
    ngOnInit() { }
};
LandingPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/landing-page/landing-page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/pages/auth/landing-page/landing-page.component.scss")).default]
    })
], LandingPageComponent);



/***/ }),

/***/ "./src/app/pages/auth/landing-page/landing-page.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/landing-page/landing-page.module.ts ***!
  \****************************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page.component */ "./src/app/pages/auth/landing-page/landing-page.component.ts");







let LandingPageModule = class LandingPageModule {
};
LandingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"]
                }
            ])
        ],
        declarations: [_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"]]
    })
], LandingPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-auth-landing-page-landing-page-module-es2015.js.map