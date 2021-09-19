(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login-menu/login-menu.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login-menu/login-menu.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"navbar-nav\" *ngIf=\"isAuthenticated | async\">\r\n    <li class=\"nav-item\">\r\n        <a  class=\"nav-link text-dark\" [routerLink]='[\"/authentication/profile\"]' title=\"Manage\">Hello {{ userName | async }}</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a  class=\"nav-link text-dark\" [routerLink]='[\"/authentication/logout\"]' [state]='{ local: true }' title=\"Logout\">Logout</a>\r\n    </li>\r\n</ul>\r\n<ul class=\"navbar-nav\" *ngIf=\"!(isAuthenticated | async)\">\r\n  <li class=\"nav-item\">\r\n        <a class=\"nav-link text-dark\" [routerLink]='[\"/authentication/register\"]'>Register</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link text-dark\" [routerLink]='[\"/authentication/login\"]'>Login</a>\r\n    </li>\r\n</ul>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login/login.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login/login.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-container\">\r\n    <div class=\"signin-content\">\r\n        <div class=\"signin-image\">\r\n            <figure><img src=\"./assets/images/signin-image.jpg\" alt=\"sing up image\"></figure>\r\n            <a href=\"/authentication/register\" class=\"signup-image-link\">Create an account</a>\r\n        </div>\r\n\r\n        <div class=\"signin-form\">\r\n            <h2 class=\"form-title\">Log in</h2>\r\n            <form method=\"POST\" class=\"register-form\" id=\"login-form\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"email\"><i class=\"zmdi zmdi-email\"></i></label>\r\n                    <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Your Email\"/>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"your_pass\"><i class=\"zmdi zmdi-lock\"></i></label>\r\n                    <input type=\"password\" name=\"your_pass\" id=\"your_pass\" placeholder=\"Password\"/>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"checkbox\" name=\"remember-me\" id=\"remember-me\" class=\"agree-term\" />\r\n                    <label for=\"remember-me\" class=\"label-agree-term\"><span><span></span></span>Remember me</label>\r\n                </div>\r\n                <div class=\"form-group form-button\">\r\n                    <input type=\"submit\" name=\"signin\" id=\"signin\" class=\"form-submit\" value=\"Log in\"/>\r\n                    <a routerLink=\"/\" class=\"btn btn-link\">Cancel</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/logout/logout.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/logout/logout.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{ message | async }}</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/register/register.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/register/register.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\">\r\n    <section class=\"signup\">\r\n        <div class=\"signup-container\">\r\n            <div class=\"signup-content\">\r\n                <div class=\"signup-form\">\r\n                    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n                    <h2 class=\"form-title\">Register</h2>\r\n                    <form class=\"register-form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"firstName\"><i class=\"zmdi zmdi-account material-icons-name\"></i></label>\r\n                            <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" placeholder=\"First Name\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" required />\r\n                            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"lastName\"><i class=\"zmdi zmdi-account-o material-icons-name\"></i></label>\r\n                            <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" placeholder=\"Last Name\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" required />\r\n                            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"email\"><i class=\"zmdi zmdi-email\"></i></label>\r\n                            <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" required />\r\n                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"password\"><i class=\"zmdi zmdi-lock-outline\"></i></label>\r\n                            <input type=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                                placeholder=\"Password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\r\n                                required />\r\n                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"confirm_password\"><i class=\"zmdi zmdi-lock\"></i></label>\r\n                            <input type=\"password\" formControlName=\"confirm_password\" class=\"form-control\"\r\n                                placeholder=\"Confirm password\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.confirm_password.errors }\" required />\r\n                            <div *ngIf=\"submitted && f.confirm_password.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.confirm_password.errors.required\">Password is required</div>\r\n                                <div *ngIf=\"f.confirm_password.errors.minlength\">Password must be at least 6 characters</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group form-button\">\r\n                            <button type=\"submit\" id=\"signin\" class=\"form-submit\">Log in</button>\r\n                            <a routerLink=\"/\" class=\"btn btn-link\">Cancel</a>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div class=\"signup-image\">\r\n                    <figure><img src=\"./assets/images/signup-image.jpg\" alt=\"sing up image\"></figure>\r\n                    <a href=\"/authentication/login\" class=\"signup-image-link\">I am already member</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.date }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Hey there<img src=\"https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif\" width=\"25px\"></h3>\r\nThank you for your kind visit. It means a lot to me that you took the time to be here. I know how busy you are, and I truly value your time.\r\n<br/>\r\n<br/>\r\n\r\n<h3>Click on <a [routerLink]='[\"/authentication/register\"]'>Register</a>/<a [routerLink]='[\"/authentication/login\"]'>Login</a> in the Menu</h3>\r\n\r\n<br/>\r\n<h3>About this project</h3>\r\nThe project is developed using Angular.<br/>\r\nThe github page only demostrates the UI and requires the <a href=\"https://github.com/AnujDivkar/dotnet-core-authorization/\">dot net core authorization</a> project to be setup as an API to work properly.<br/>\r\nCheck out the code repository here <a href=\"https://github.com/AnujDivkar/angular-signin-signup-ui\">here</a>.<br/>\r\nGo through the README.md file for instructions on setting up the code \r\n\r\n<br/>\r\n<br/>\r\n<h3>About me</h3>\r\nI'm <a href=\"https://anujdivkar.github.io/\">Anuj Divkar</a>, a passionate full-stack developer and software engineer from India.\r\n\r\n\r\n<br/>\r\n<br/>\r\n<h3>Other projects on my profile</h3>\r\nThere are other cool projects on <a href=\"https://anujdivkar.github.io/\">my profile</a>, kindly have a look.\r\n\r\n<br/>\r\n<br/>\r\nRegards<br/>\r\n<a href=\"https://anujdivkar.github.io/\">Anuj Divkar</a>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\" (click)=\"collapse()\">APP NAME</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\" (click)=\"collapse()\"\r\n      >\r\n        <app-login-menu></app-login-menu>\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li\r\n            class=\"nav-item\"\r\n            [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\"\r\n              >Counter</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/api-authorization/api-authorization.constants.ts":
/*!**************************************************************!*\
  !*** ./src/api-authorization/api-authorization.constants.ts ***!
  \**************************************************************/
/*! exports provided: ApplicationName, ReturnUrlType, QueryParameterNames, LogoutActions, LoginActions, ApplicationPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationName", function() { return ApplicationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnUrlType", function() { return ReturnUrlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryParameterNames", function() { return QueryParameterNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutActions", function() { return LogoutActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginActions", function() { return LoginActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationPaths", function() { return ApplicationPaths; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const ApplicationName = 'client';
const ReturnUrlType = 'returnUrl';
const QueryParameterNames = {
    ReturnUrl: ReturnUrlType,
    Message: 'message'
};
const LogoutActions = {
    LogoutCallback: 'logout-callback',
    Logout: 'logout',
    LoggedOut: 'logged-out'
};
const LoginActions = {
    Login: 'login',
    LoginCallback: 'login-callback',
    LoginFailed: 'login-failed',
    Profile: 'profile',
    Register: 'register'
};
let applicationPaths = {
    DefaultLoginRedirectPath: '/',
    ApiAuthorizationClientConfigurationUrl: `/_configuration/${ApplicationName}`,
    Login: `authentication/${LoginActions.Login}`,
    LoginFailed: `authentication/${LoginActions.LoginFailed}`,
    LoginCallback: `authentication/${LoginActions.LoginCallback}`,
    Register: `authentication/${LoginActions.Register}`,
    Profile: `authentication/${LoginActions.Profile}`,
    LogOut: `authentication/${LogoutActions.Logout}`,
    LoggedOut: `authentication/${LogoutActions.LoggedOut}`,
    LogOutCallback: `authentication/${LogoutActions.LogoutCallback}`,
    LoginPathComponents: [],
    LoginFailedPathComponents: [],
    LoginCallbackPathComponents: [],
    RegisterPathComponents: [],
    ProfilePathComponents: [],
    LogOutPathComponents: [],
    LoggedOutPathComponents: [],
    LogOutCallbackPathComponents: [],
    IdentityRegisterPath: '/Identity/Account/Register',
    IdentityManagePath: '/Identity/Account/Manage'
};
applicationPaths = Object.assign({}, applicationPaths, { LoginPathComponents: applicationPaths.Login.split('/'), LoginFailedPathComponents: applicationPaths.LoginFailed.split('/'), RegisterPathComponents: applicationPaths.Register.split('/'), ProfilePathComponents: applicationPaths.Profile.split('/'), LogOutPathComponents: applicationPaths.LogOut.split('/'), LoggedOutPathComponents: applicationPaths.LoggedOut.split('/'), LogOutCallbackPathComponents: applicationPaths.LogOutCallback.split('/') });
const ApplicationPaths = applicationPaths;


/***/ }),

/***/ "./src/api-authorization/api-authorization.module.ts":
/*!***********************************************************!*\
  !*** ./src/api-authorization/api-authorization.module.ts ***!
  \***********************************************************/
/*! exports provided: ApiAuthorizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAuthorizationModule", function() { return ApiAuthorizationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-menu/login-menu.component */ "./src/api-authorization/login-menu/login-menu.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/api-authorization/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logout/logout.component */ "./src/api-authorization/logout/logout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api-authorization.constants */ "./src/api-authorization/api-authorization.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/api-authorization/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










let ApiAuthorizationModule = class ApiAuthorizationModule {
};
ApiAuthorizationModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].Register, component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].Profile, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].Login, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LoginFailed, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LoginCallback, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LogOut, component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LoggedOut, component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LogOutCallback, component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"] }
            ]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ],
        declarations: [_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_2__["LoginMenuComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]],
        exports: [_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_2__["LoginMenuComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]]
    })
], ApiAuthorizationModule);



/***/ }),

/***/ "./src/api-authorization/authorize.guard.ts":
/*!**************************************************!*\
  !*** ./src/api-authorization/authorize.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthorizeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeGuard", function() { return AuthorizeGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorize.service */ "./src/api-authorization/authorize.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-authorization.constants */ "./src/api-authorization/api-authorization.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let AuthorizeGuard = class AuthorizeGuard {
    constructor(authorize, router) {
        this.authorize = authorize;
        this.router = router;
    }
    canActivate(_next, state) {
        return this.authorize.isAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(isAuthenticated => this.handleAuthorization(isAuthenticated, state)));
    }
    handleAuthorization(isAuthenticated, state) {
        if (!isAuthenticated) {
            this.router.navigate(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].LoginPathComponents, {
                queryParams: {
                    [_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["QueryParameterNames"].ReturnUrl]: state.url
                }
            });
        }
    }
};
AuthorizeGuard.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthorizeGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthorizeGuard);



/***/ }),

/***/ "./src/api-authorization/authorize.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/api-authorization/authorize.interceptor.ts ***!
  \********************************************************/
/*! exports provided: AuthorizeInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeInterceptor", function() { return AuthorizeInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorize.service */ "./src/api-authorization/authorize.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AuthorizeInterceptor = class AuthorizeInterceptor {
    constructor(authorize) {
        this.authorize = authorize;
    }
    intercept(req, next) {
        return this.authorize.getAccessToken()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(token => this.processRequestWithToken(token, req, next)));
    }
    // Checks if there is an access_token available in the authorize service
    // and adds it to the request in case it's targeted at the same origin as the
    // single page application.
    processRequestWithToken(token, req, next) {
        if (!!token && this.isSameOriginUrl(req)) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(req);
    }
    isSameOriginUrl(req) {
        // It's an absolute url with the same origin.
        if (req.url.startsWith(`${window.location.origin}/`)) {
            return true;
        }
        // It's a protocol relative url with the same origin.
        // For example: //www.example.com/api/Products
        if (req.url.startsWith(`//${window.location.host}/`)) {
            return true;
        }
        // It's a relative url like /api/Products
        if (/^\/[^\/].*/.test(req.url)) {
            return true;
        }
        // It's an absolute or protocol relative url that
        // doesn't have the same origin.
        return false;
    }
};
AuthorizeInterceptor.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] }
];
AuthorizeInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"]])
], AuthorizeInterceptor);



/***/ }),

/***/ "./src/api-authorization/authorize.service.ts":
/*!****************************************************!*\
  !*** ./src/api-authorization/authorize.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationResultStatus, AuthorizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationResultStatus", function() { return AuthenticationResultStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeService", function() { return AuthorizeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! oidc-client */ "./node_modules/oidc-client/lib/oidc-client.min.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-authorization.constants */ "./src/api-authorization/api-authorization.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var AuthenticationResultStatus;
(function (AuthenticationResultStatus) {
    AuthenticationResultStatus[AuthenticationResultStatus["Success"] = 0] = "Success";
    AuthenticationResultStatus[AuthenticationResultStatus["Redirect"] = 1] = "Redirect";
    AuthenticationResultStatus[AuthenticationResultStatus["Fail"] = 2] = "Fail";
})(AuthenticationResultStatus || (AuthenticationResultStatus = {}));
let AuthorizeService = class AuthorizeService {
    constructor(http) {
        this.http = http;
        // By default pop ups are disabled because they don't work properly on Edge.
        // If you want to enable pop up authentication simply set this flag to false.
        this.popUpDisabled = true;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    isAuthenticated() {
        return this.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((u) => !!u));
    }
    getUser() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(this.userSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((u) => !!u)), this.getUserFromStorage().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((u) => !!u), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((u) => this.userSubject.next(u))), this.userSubject.asObservable());
    }
    getAccessToken() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.ensureUserManagerInitialized()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.userManager.getUser())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => user && user.access_token));
    }
    // We try to authenticate the user in three different ways:
    // 1) We try to see if we can authenticate the user silently. This happens
    //    when the user is already logged in on the IdP and is done using a hidden iframe
    //    on the client.
    // 2) We try to authenticate the user using a PopUp Window. This might fail if there is a
    //    Pop-Up blocker or the user has disabled PopUps.
    // 3) If the two methods above fail, we redirect the browser to the IdP to perform a traditional
    //    redirect flow.
    signIn(state) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureUserManagerInitialized();
            let user = null;
            try {
                user = yield this.userManager.signinSilent(this.createArguments());
                this.userSubject.next(user.profile);
                return this.success(state);
            }
            catch (silentError) {
                // User might not be authenticated, fallback to popup authentication
                console.log("Silent authentication error: ", silentError);
                try {
                    if (this.popUpDisabled) {
                        throw new Error("Popup disabled. Change 'authorize.service.ts:AuthorizeService.popupDisabled' to false to enable it.");
                    }
                    user = yield this.userManager.signinPopup(this.createArguments());
                    this.userSubject.next(user.profile);
                    return this.success(state);
                }
                catch (popupError) {
                    if (popupError.message === "Popup window closed") {
                        // The user explicitly cancelled the login action by closing an opened popup.
                        return this.error("The user closed the window.");
                    }
                    else if (!this.popUpDisabled) {
                        console.log("Popup authentication error: ", popupError);
                    }
                    // PopUps might be blocked by the user, fallback to redirect
                    try {
                        yield this.userManager.signinRedirect(this.createArguments(state));
                        return this.redirect();
                    }
                    catch (redirectError) {
                        console.log("Redirect authentication error: ", redirectError);
                        return this.error(redirectError);
                    }
                }
            }
        });
    }
    completeSignIn(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.ensureUserManagerInitialized();
                const user = yield this.userManager.signinCallback(url);
                this.userSubject.next(user && user.profile);
                return this.success(user && user.state);
            }
            catch (error) {
                console.log("There was an error signing in: ", error);
                return this.error("There was an error signing in.");
            }
        });
    }
    signOut(state) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.popUpDisabled) {
                    throw new Error("Popup disabled. Change 'authorize.service.ts:AuthorizeService.popupDisabled' to false to enable it.");
                }
                yield this.ensureUserManagerInitialized();
                yield this.userManager.signoutPopup(this.createArguments());
                this.userSubject.next(null);
                return this.success(state);
            }
            catch (popupSignOutError) {
                console.log("Popup signout error: ", popupSignOutError);
                try {
                    yield this.userManager.signoutRedirect(this.createArguments(state));
                    return this.redirect();
                }
                catch (redirectSignOutError) {
                    console.log("Redirect signout error: ", popupSignOutError);
                    return this.error(redirectSignOutError);
                }
            }
        });
    }
    completeSignOut(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureUserManagerInitialized();
            try {
                const response = yield this.userManager.signoutCallback(url);
                this.userSubject.next(null);
                return this.success(response && response.state);
            }
            catch (error) {
                console.log(`There was an error trying to log out '${error}'.`);
                return this.error(error);
            }
        });
    }
    createArguments(state) {
        return { useReplaceToNavigate: true, data: state };
    }
    error(message) {
        return { status: AuthenticationResultStatus.Fail, message };
    }
    success(state) {
        return { status: AuthenticationResultStatus.Success, state };
    }
    redirect() {
        return { status: AuthenticationResultStatus.Redirect };
    }
    ensureUserManagerInitialized() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.userManager !== undefined) {
                return;
            }
            const response = yield fetch("https://localhost:44373" +
                _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].ApiAuthorizationClientConfigurationUrl);
            if (!response.ok) {
                throw new Error(`Could not load settings for '${_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationName"]}'`);
            }
            const settings = yield response.json();
            settings.automaticSilentRenew = true;
            settings.includeIdTokenInSilentRenew = true;
            this.userManager = new oidc_client__WEBPACK_IMPORTED_MODULE_1__["UserManager"](settings);
            this.userManager.events.addUserSignedOut(() => __awaiter(this, void 0, void 0, function* () {
                yield this.userManager.removeUser();
                this.userSubject.next(null);
            }));
        });
    }
    getUserFromStorage() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.ensureUserManagerInitialized()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.userManager.getUser()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((u) => u && u.profile));
    }
    register(user) {
        return this.http.post(`config.apiUrl/users/register`, user);
    }
};
AuthorizeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
AuthorizeService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: "root",
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
], AuthorizeService);



/***/ }),

/***/ "./src/api-authorization/login-menu/login-menu.component.css":
/*!*******************************************************************!*\
  !*** ./src/api-authorization/login-menu/login-menu.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBpLWF1dGhvcml6YXRpb24vbG9naW4tbWVudS9sb2dpbi1tZW51LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/api-authorization/login-menu/login-menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/api-authorization/login-menu/login-menu.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginMenuComponent", function() { return LoginMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorize.service */ "./src/api-authorization/authorize.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let LoginMenuComponent = class LoginMenuComponent {
    constructor(authorizeService) {
        this.authorizeService = authorizeService;
    }
    ngOnInit() {
        this.isAuthenticated = this.authorizeService.isAuthenticated();
        this.userName = this.authorizeService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(u => u && u.name));
    }
};
LoginMenuComponent.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] }
];
LoginMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login-menu/login-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login-menu.component.css */ "./src/api-authorization/login-menu/login-menu.component.css")).default]
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"]])
], LoginMenuComponent);



/***/ }),

/***/ "./src/api-authorization/login/login.component.css":
/*!*********************************************************!*\
  !*** ./src/api-authorization/login/login.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* @extend display-flex; */\r\ndisplay-flex, .display-flex, .display-flex-center, .signin-content {\r\n    display: flex;\r\n    display: -webkit-flex; }\r\n/* @extend list-type-ulli; */\r\nlist-type-ulli {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0; }\r\na:focus, a:active {\r\n    text-decoration: none;\r\n    outline: none;\r\n    transition: all 300ms ease 0s;\r\n    -moz-transition: all 300ms ease 0s;\r\n    -webkit-transition: all 300ms ease 0s;\r\n    -o-transition: all 300ms ease 0s;\r\n    -ms-transition: all 300ms ease 0s; }\r\ninput, select, textarea {\r\n    outline: none;\r\n    appearance: unset !important;\r\n    -moz-appearance: unset !important;\r\n    -webkit-appearance: unset !important;\r\n    -o-appearance: unset !important;\r\n    -ms-appearance: unset !important; }\r\ninput::-webkit-outer-spin-button, input::-webkit-inner-spin-button {\r\n    appearance: none !important;\r\n    -moz-appearance: none !important;\r\n    -webkit-appearance: none !important;\r\n    -o-appearance: none !important;\r\n    -ms-appearance: none !important;\r\n    margin: 0; }\r\ninput:focus, select:focus, textarea:focus {\r\n    outline: none;\r\n    box-shadow: none !important;\r\n    -moz-box-shadow: none !important;\r\n    -webkit-box-shadow: none !important;\r\n    -o-box-shadow: none !important;\r\n    -ms-box-shadow: none !important; }\r\ninput[type=checkbox] {\r\n    appearance: checkbox !important;\r\n    -moz-appearance: checkbox !important;\r\n    -webkit-appearance: checkbox !important;\r\n    -o-appearance: checkbox !important;\r\n    -ms-appearance: checkbox !important; }\r\ninput[type=radio] {\r\n    appearance: radio !important;\r\n    -moz-appearance: radio !important;\r\n    -webkit-appearance: radio !important;\r\n    -o-appearance: radio !important;\r\n    -ms-appearance: radio !important; }\r\nimg {\r\n    max-width: 100%;\r\n    height: auto; }\r\nfigure {\r\n    margin: 0; }\r\np {\r\n    margin-bottom: 0px;\r\n    font-size: 15px;\r\n    color: #777; }\r\nh2 {\r\n    line-height: 1.66;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: bold;\r\n    color: #222;\r\n    font-family: Poppins;\r\n    font-size: 36px; }\r\n.main {\r\n    background: #f8f8f8;\r\n    padding: 150px 0; }\r\n.clear {\r\n    clear: both; }\r\n.login-container {\r\n    width: 900px;\r\n    background: #fff;\r\n    margin: 0 auto;\r\n    box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n    -moz-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n    -webkit-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n    -o-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n    -ms-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n    border-radius: 20px;\r\n    -moz-border-radius: 20px;\r\n    -webkit-border-radius: 20px;\r\n    -o-border-radius: 20px;\r\n    -ms-border-radius: 20px; }\r\n.display-flex {\r\n    justify-content: space-between;\r\n    -moz-justify-content: space-between;\r\n    -webkit-justify-content: space-between;\r\n    -o-justify-content: space-between;\r\n    -ms-justify-content: space-between;\r\n    align-items: center;\r\n    -moz-align-items: center;\r\n    -webkit-align-items: center;\r\n    -o-align-items: center;\r\n    -ms-align-items: center; }\r\n.display-flex-center {\r\n    justify-content: center;\r\n    -moz-justify-content: center;\r\n    -webkit-justify-content: center;\r\n    -o-justify-content: center;\r\n    -ms-justify-content: center;\r\n    align-items: center;\r\n    -moz-align-items: center;\r\n    -webkit-align-items: center;\r\n    -o-align-items: center;\r\n    -ms-align-items: center; }\r\n.position-center {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    -moz-transform: translate(-50%, -50%);\r\n    -webkit-transform: translate(-50%, -50%);\r\n    -o-transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%); }\r\n.signup {\r\n    margin-bottom: 150px; }\r\n.signup-content {\r\n    padding: 75px 0; }\r\n.signup-form, .signup-image, .signin-form, .signin-image {\r\n    width: 50%;\r\n    overflow: hidden; }\r\n.signup-image {\r\n    margin: 0 55px; }\r\n.form-title {\r\n    margin-bottom: 33px; }\r\n.signup-image {\r\n    margin-top: 45px; }\r\nfigure {\r\n    margin-bottom: 50px;\r\n    text-align: center; }\r\n.form-submit {\r\n    display: inline-block;\r\n    background: #6dabe4;\r\n    color: #fff;\r\n    border-bottom: none;\r\n    width: auto;\r\n    padding: 15px 39px;\r\n    border-radius: 5px;\r\n    -moz-border-radius: 5px;\r\n    -webkit-border-radius: 5px;\r\n    -o-border-radius: 5px;\r\n    -ms-border-radius: 5px;\r\n    margin-top: 25px;\r\n    cursor: pointer; }\r\n.form-submit:hover {\r\n      background: #4292dc; }\r\n.signup-image-link {\r\n    font-size: 14px;\r\n    color: #222;\r\n    display: block;\r\n    text-align: center; }\r\n.term-service {\r\n    font-size: 13px;\r\n    color: #222; }\r\n.signup-form {\r\n    margin-left: 75px;\r\n    margin-right: 75px;\r\n    padding-left: 34px; }\r\n.register-form {\r\n    width: 100%; }\r\n.form-group {\r\n    position: relative;\r\n    margin-bottom: 25px;\r\n    overflow: hidden; }\r\n.form-group:last-child {\r\n      margin-bottom: 0px; }\r\ninput {\r\n    width: 100%;\r\n    display: block;\r\n    border: none;\r\n    border-bottom: 1px solid #999;\r\n    padding: 6px 30px;\r\n    font-family: Poppins;\r\n    box-sizing: border-box; }\r\ninput::-webkit-input-placeholder {\r\n      color: #999; }\r\ninput::-moz-placeholder {\r\n      color: #999; }\r\ninput:-ms-input-placeholder {\r\n      color: #999; }\r\ninput:-moz-placeholder {\r\n      color: #999; }\r\ninput:focus {\r\n      border-bottom: 1px solid #222; }\r\ninput:focus::-webkit-input-placeholder {\r\n        color: #222; }\r\ninput:focus::-moz-placeholder {\r\n        color: #222; }\r\ninput:focus:-ms-input-placeholder {\r\n        color: #222; }\r\ninput:focus:-moz-placeholder {\r\n        color: #222; }\r\ninput[type=checkbox]:not(old) {\r\n    width: 2em;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 1em;\r\n    display: none; }\r\ninput[type=checkbox]:not(old) + label {\r\n    display: inline-block;\r\n    line-height: 1.5em;\r\n    margin-top: 6px; }\r\ninput[type=checkbox]:not(old) + label > span {\r\n    display: inline-block;\r\n    width: 13px;\r\n    height: 13px;\r\n    margin-right: 15px;\r\n    margin-bottom: 3px;\r\n    border: 1px solid #999;\r\n    border-radius: 2px;\r\n    -moz-border-radius: 2px;\r\n    -webkit-border-radius: 2px;\r\n    -o-border-radius: 2px;\r\n    -ms-border-radius: 2px;\r\n    background: white;\r\n    background-image: linear-gradient(white, white);\r\n    vertical-align: bottom; }\r\ninput[type=checkbox]:not(old):checked + label > span {\r\n    background-image: linear-gradient(white, white); }\r\ninput[type=checkbox]:not(old):checked + label > span:before {\r\n    content: '\\f26b';\r\n    display: block;\r\n    color: #222;\r\n    font-size: 11px;\r\n    line-height: 1.2;\r\n    text-align: center;\r\n    font-family: 'Material-Design-Iconic-Font';\r\n    font-weight: bold; }\r\n.agree-term {\r\n    display: inline-block;\r\n    width: auto; }\r\nlabel {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    -moz-transform: translateY(-50%);\r\n    -webkit-transform: translateY(-50%);\r\n    -o-transform: translateY(-50%);\r\n    -ms-transform: translateY(-50%);\r\n    color: #222; }\r\n.label-has-error {\r\n    top: 22%; }\r\nlabel.error {\r\n    position: relative;\r\n    background: url(\"/assets/images/unchecked.gif\") no-repeat;\r\n    background-position-y: 3px;\r\n    padding-left: 20px;\r\n    display: block;\r\n    margin-top: 20px; }\r\nlabel.valid {\r\n    display: block;\r\n    position: absolute;\r\n    right: 0;\r\n    left: auto;\r\n    margin-top: -6px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: transparent; }\r\nlabel.valid:after {\r\n      font-family: 'Material-Design-Iconic-Font';\r\n      content: '\\f269';\r\n      width: 100%;\r\n      height: 100%;\r\n      position: absolute;\r\n      /* right: 0; */\r\n      font-size: 16px;\r\n      color: green; }\r\n.label-agree-term {\r\n    position: relative;\r\n    top: 0%;\r\n    transform: translateY(0);\r\n    -moz-transform: translateY(0);\r\n    -webkit-transform: translateY(0);\r\n    -o-transform: translateY(0);\r\n    -ms-transform: translateY(0); }\r\n.material-icons-name {\r\n    font-size: 18px; }\r\n.signin-content {\r\n    padding-top: 67px;\r\n    padding-bottom: 87px; }\r\n.signin-form {\r\n    margin-right: 90px;\r\n    margin-left: 80px; }\r\n.signin-image {\r\n    margin-left: 110px;\r\n    margin-right: 20px;\r\n    margin-top: 10px; }\r\n@media screen and (max-width: 1200px) {\r\n    .login-container {\r\n      width: calc( 100% - 30px);\r\n      max-width: 100%; } }\r\n@media screen and (min-width: 1024px) {\r\n    .login-container {\r\n      max-width: 1200px; } }\r\n@media screen and (max-width: 768px) {\r\n    .signup-content, .signin-content {\r\n      flex-direction: column;\r\n      -moz-flex-direction: column;\r\n      -o-flex-direction: column;\r\n      justify-content: center;\r\n      -moz-justify-content: center;\r\n      -webkit-justify-content: center;\r\n      -o-justify-content: center;\r\n      -ms-justify-content: center; }\r\n  \r\n    .signup-form {\r\n      margin-left: 0px;\r\n      margin-right: 0px;\r\n      padding-left: 0px;\r\n      /* box-sizing: border-box; */\r\n      padding: 0 30px; }\r\n  \r\n    .signin-image {\r\n      margin-left: 0px;\r\n      margin-right: 0px;\r\n      margin-top: 50px;\r\n      order: 2;\r\n      -moz-order: 2;\r\n      -webkit-order: 2;\r\n      -o-order: 2;\r\n      -ms-order: 2; }\r\n  \r\n    .signup-form, .signup-image, .signin-form, .signin-image {\r\n      width: auto; }\r\n  \r\n  \r\n    .form-button {\r\n      text-align: center; }\r\n  \r\n    .signin-form {\r\n      order: 1;\r\n      -moz-order: 1;\r\n      -webkit-order: 1;\r\n      -o-order: 1;\r\n      -ms-order: 1;\r\n      margin-right: 0px;\r\n      margin-left: 0px;\r\n      padding: 0 30px; }\r\n  \r\n    .form-title {\r\n      text-align: center; } }\r\n\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGktYXV0aG9yaXphdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQjtJQUNJLGFBQWE7SUFDYixxQkFBcUIsRUFBRTtBQUV6Qiw0QkFBNEI7QUFDNUI7SUFDRSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVUsRUFBRTtBQUVkO0lBQ0UscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQyxnQ0FBZ0M7SUFDaEMsaUNBQWlDLEVBQUU7QUFFckM7SUFDRSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEMsK0JBQStCO0lBQy9CLGdDQUFnQyxFQUFFO0FBRXBDO0lBQ0UsMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQyxtQ0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixTQUFTLEVBQUU7QUFFYjtJQUNFLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsZ0NBQWdDO0lBQ2hDLG1DQUFtQztJQUNuQyw4QkFBOEI7SUFDOUIsK0JBQStCLEVBQUU7QUFFbkM7SUFDRSwrQkFBK0I7SUFDL0Isb0NBQW9DO0lBQ3BDLHVDQUF1QztJQUN2QyxrQ0FBa0M7SUFDbEMsbUNBQW1DLEVBQUU7QUFFdkM7SUFDRSw0QkFBNEI7SUFDNUIsaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUNwQywrQkFBK0I7SUFDL0IsZ0NBQWdDLEVBQUU7QUFFcEM7SUFDRSxlQUFlO0lBQ2YsWUFBWSxFQUFFO0FBRWhCO0lBQ0UsU0FBUyxFQUFFO0FBRWI7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVcsRUFBRTtBQUVmO0lBQ0UsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZUFBZSxFQUFFO0FBRW5CO0lBQ0UsbUJB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MkJBQTJCO01BRTNCLHlCQUF5QjtNQUV6Qix1QkFBdUI7TUFDdkIsNEJBQTRCO01BQzVCLCtCQUErQjtNQUMvQiwwQkFBMEI7TUFDMUIsMkJBQTJCLEVBQUU7O0lBRS9CO01BQ0UsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsNEJBQTRCO01BQzVCLGVBQWUsRUFBRTs7SUFFbkI7TUFDRSxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixRQUFRO01BQ1IsYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsWUFBWSxFQUFFOztJQUVoQjtNQUNFLFdBQVcsRUFBRTs7O0lBR2Y7TUFDRSxrQkFBa0IsRUFBRTs7SUFFdEI7TUFDRSxRQUFRO01BQ1IsYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsZUFBZSxFQUFFOztJQUVuQjtNQUNFLGtCQUFrQixFQUFFLEVBQUUiLCJmaWxlIjoic3JjL2FwaS1hdXRob3JpemF0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZXh0ZW5kIGRpc3BsYXktZmxleDsgKi9cclxuZGlzcGxheS1mbGV4LCAuZGlzcGxheS1mbGV4LCAuZGlzcGxheS1mbGV4LWNlbnRlciwgLnNpZ25pbi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7IH1cclxuICBcclxuICAvKiBAZXh0ZW5kIGxpc3QtdHlwZS11bGxpOyAqL1xyXG4gIGxpc3QtdHlwZS11bGxpIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7IH1cclxuICBcclxuICBhOmZvY3VzLCBhOmFjdGl2ZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzOyB9XHJcbiAgXHJcbiAgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAtby1hcHBlYXJhbmNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWFwcGVhcmFuY2U6IHVuc2V0ICFpbXBvcnRhbnQ7IH1cclxuICBcclxuICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiwgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC1vLWFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC1tcy1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7IH1cclxuICBcclxuICBpbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC1vLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC1tcy1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7IH1cclxuICBcclxuICBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XHJcbiAgICBhcHBlYXJhbmNlOiBjaGVja2JveCAhaW1wb3J0YW50O1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBjaGVja2JveCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBjaGVja2JveCAhaW1wb3J0YW50O1xyXG4gICAgLW8tYXBwZWFyYW5jZTogY2hlY2tib3ggIWltcG9ydGFudDtcclxuICAgIC1tcy1hcHBlYXJhbmNlOiBjaGVja2JveCAhaW1wb3J0YW50OyB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1yYWRpb10ge1xyXG4gICAgYXBwZWFyYW5jZTogcmFkaW8gIWltcG9ydGFudDtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogcmFkaW8gIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogcmFkaW8gIWltcG9ydGFudDtcclxuICAgIC1vLWFwcGVhcmFuY2U6IHJhZGlvICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtYXBwZWFyYW5jZTogcmFkaW8gIWltcG9ydGFudDsgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87IH1cclxuICBcclxuICBmaWd1cmUge1xyXG4gICAgbWFyZ2luOiAwOyB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzc3NzsgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY2O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc2l6ZTogMzZweDsgfVxyXG4gIFxyXG4gIC5tYWluIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICBwYWRkaW5nOiAxNTBweCAwOyB9XHJcbiAgXHJcbiAgLmNsZWFyIHtcclxuICAgIGNsZWFyOiBib3RoOyB9XHJcbiAgXHJcblxyXG4gIFxyXG4gIC5sb2dpbi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTYuODNweCAwLjE3cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDE1cHggMTYuODNweCAwLjE3cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDE1cHggMTYuODNweCAwLjE3cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIC1vLWJveC1zaGFkb3c6IDBweCAxNXB4IDE2LjgzcHggMC4xN3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAtbXMtYm94LXNoYWRvdzogMHB4IDE1cHggMTYuODNweCAwLjE3cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAtby1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7IH1cclxuICBcclxuICAuZGlzcGxheS1mbGV4IHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC1tb3otanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAtby1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAtbXMtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC1vLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4gIFxyXG4gIC5kaXNwbGF5LWZsZXgtY2VudGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtby1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtby1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuICBcclxuICAucG9zaXRpb24tY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XHJcbiAgXHJcbiAgLnNpZ251cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNTBweDsgfVxyXG4gIFxyXG4gIC5zaWdudXAtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA3NXB4IDA7IH1cclxuICBcclxuICAuc2lnbnVwLWZvcm0sIC5zaWdudXAtaW1hZ2UsIC5zaWduaW4tZm9ybSwgLnNpZ25pbi1pbWFnZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4gIFxyXG4gIC5zaWdudXAtaW1hZ2Uge1xyXG4gICAgbWFyZ2luOiAwIDU1cHg7IH1cclxuICBcclxuICAuZm9ybS10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzM3B4OyB9XHJcbiAgXHJcbiAgLnNpZ251cC1pbWFnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0NXB4OyB9XHJcbiAgXHJcbiAgZmlndXJlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuICBcclxuICAuZm9ybS1zdWJtaXQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogIzZkYWJlNDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweCAzOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XHJcbiAgICAuZm9ybS1zdWJtaXQ6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNDI5MmRjOyB9XHJcblxyXG4gIFxyXG4gIC5zaWdudXAtaW1hZ2UtbGluayB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbiAgXHJcbiAgLnRlcm0tc2VydmljZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzIyMjsgfVxyXG4gIFxyXG4gIC5zaWdudXAtZm9ybSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNzVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzRweDsgfVxyXG4gIFxyXG4gIC5yZWdpc3Rlci1mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlOyB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cclxuICAgIC5mb3JtLWdyb3VwOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7IH1cclxuICBcclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XHJcbiAgICBwYWRkaW5nOiA2cHggMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gICAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogIzk5OTsgfVxyXG4gICAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogIzk5OTsgfVxyXG4gICAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICM5OTk7IH1cclxuICAgIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogIzk5OTsgfVxyXG4gICAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIyMjsgfVxyXG4gICAgICBpbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICMyMjI7IH1cclxuICAgICAgaW5wdXQ6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMjIyOyB9XHJcbiAgICAgIGlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICMyMjI7IH1cclxuICAgICAgaW5wdXQ6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICMyMjI7IH1cclxuICBcclxuICBpbnB1dFt0eXBlPWNoZWNrYm94XTpub3Qob2xkKSB7XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgZGlzcGxheTogbm9uZTsgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdOm5vdChvbGQpICsgbGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4OyB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1jaGVja2JveF06bm90KG9sZCkgKyBsYWJlbCA+IHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207IH1cclxuICBcclxuICBpbnB1dFt0eXBlPWNoZWNrYm94XTpub3Qob2xkKTpjaGVja2VkICsgbGFiZWwgPiBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTsgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdOm5vdChvbGQpOmNoZWNrZWQgKyBsYWJlbCA+IHNwYW46YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdcXGYyNmInO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsLURlc2lnbi1JY29uaWMtRm9udCc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxyXG4gIFxyXG4gIC5hZ3JlZS10ZXJtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiBhdXRvOyB9XHJcbiAgXHJcbiAgbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBjb2xvcjogIzIyMjsgfVxyXG4gIFxyXG4gIC5sYWJlbC1oYXMtZXJyb3Ige1xyXG4gICAgdG9wOiAyMiU7IH1cclxuICBcclxuICBsYWJlbC5lcnJvciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy91bmNoZWNrZWQuZ2lmXCIpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyB9XHJcbiAgXHJcbiAgbGFiZWwudmFsaWQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxyXG4gICAgbGFiZWwudmFsaWQ6YWZ0ZXIge1xyXG4gICAgICBmb250LWZhbWlseTogJ01hdGVyaWFsLURlc2lnbi1JY29uaWMtRm9udCc7XHJcbiAgICAgIGNvbnRlbnQ6ICdcXGYyNjknO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIC8qIHJpZ2h0OiAwOyAqL1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiBncmVlbjsgfVxyXG4gIFxyXG4gIC5sYWJlbC1hZ3JlZS10ZXJtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG4gIFxyXG4gIC5tYXRlcmlhbC1pY29ucy1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDsgfVxyXG4gIFxyXG4gIC5zaWduaW4tY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNjdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4N3B4OyB9XHJcbiAgXHJcbiAgLnNpZ25pbi1mb3JtIHtcclxuICAgIG1hcmdpbi1yaWdodDogOTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4OyB9XHJcbiAgXHJcbiAgLnNpZ25pbi1pbWFnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAubG9naW4tY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAzMHB4KTtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlOyB9IH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5sb2dpbi1jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IDEyMDBweDsgfSB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zaWdudXAtY29udGVudCwgLnNpZ25pbi1jb250ZW50IHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgLW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgLW8tanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxyXG4gIFxyXG4gICAgLnNpZ251cC1mb3JtIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAvKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xyXG4gICAgICBwYWRkaW5nOiAwIDMwcHg7IH1cclxuICBcclxuICAgIC5zaWduaW4taW1hZ2Uge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgb3JkZXI6IDI7XHJcbiAgICAgIC1tb3otb3JkZXI6IDI7XHJcbiAgICAgIC13ZWJraXQtb3JkZXI6IDI7XHJcbiAgICAgIC1vLW9yZGVyOiAyO1xyXG4gICAgICAtbXMtb3JkZXI6IDI7IH1cclxuICBcclxuICAgIC5zaWdudXAtZm9ybSwgLnNpZ251cC1pbWFnZSwgLnNpZ25pbi1mb3JtLCAuc2lnbmluLWltYWdlIHtcclxuICAgICAgd2lkdGg6IGF1dG87IH1cclxuICBcclxuICBcclxuICAgIC5mb3JtLWJ1dHRvbiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4gIFxyXG4gICAgLnNpZ25pbi1mb3JtIHtcclxuICAgICAgb3JkZXI6IDE7XHJcbiAgICAgIC1tb3otb3JkZXI6IDE7XHJcbiAgICAgIC13ZWJraXQtb3JkZXI6IDE7XHJcbiAgICAgIC1vLW9yZGVyOiAxO1xyXG4gICAgICAtbXMtb3JkZXI6IDE7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDMwcHg7IH1cclxuICBcclxuICAgIC5mb3JtLXRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9IH1cclxuXHJcbiAgXHJcbiAgIl19 */");

/***/ }),

/***/ "./src/api-authorization/login/login.component.ts":
/*!********************************************************!*\
  !*** ./src/api-authorization/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorize.service */ "./src/api-authorization/authorize.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-authorization.constants */ "./src/api-authorization/api-authorization.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





// The main responsibility of this component is to handle the user's login process.
// This is the starting point for the login process. Any component that needs to authenticate
// a user can simply perform a redirect to this component with a returnUrl query parameter and
// let the component perform the login and return back to the return url.
let LoginComponent = class LoginComponent {
    constructor(authorizeService, activatedRoute, router) {
        this.authorizeService = authorizeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const action = this.activatedRoute.snapshot.url[1];
            switch (action.path) {
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].Login:
                    yield this.login(this.getReturnUrl());
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].LoginCallback:
                    yield this.processLoginCallback();
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].LoginFailed:
                    const message = this.activatedRoute.snapshot.queryParamMap.get(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["QueryParameterNames"].Message);
                    this.message.next(message);
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].Profile:
                    this.redirectToProfile();
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].Register:
                    this.redirectToRegister();
                    break;
                default:
                    throw new Error(`Invalid action '${action}'`);
            }
        });
    }
    login(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const state = { returnUrl };
            const result = yield this.authorizeService.signIn(state);
            this.message.next(undefined);
            switch (result.status) {
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect:
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success:
                    yield this.navigateToReturnUrl(returnUrl);
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail:
                    yield this.router.navigate(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].LoginFailedPathComponents, {
                        queryParams: { [_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["QueryParameterNames"].Message]: result.message }
                    });
                    break;
                default:
                    throw new Error(`Invalid status result ${result.status}.`);
            }
        });
    }
    processLoginCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = window.location.href;
            const result = yield this.authorizeService.completeSignIn(url);
            switch (result.status) {
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect:
                    // There should not be any redirects as completeSignIn never redirects.
                    throw new Error('Should not redirect.');
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success:
                    yield this.navigateToReturnUrl(this.getReturnUrl(result.state));
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail:
                    this.message.next(result.message);
                    break;
            }
        });
    }
    redirectToRegister() {
        this.redirectToApiAuthorizationPath(`${_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].IdentityRegisterPath}?returnUrl=${encodeURI('/' + _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].Login)}`);
    }
    redirectToProfile() {
        this.redirectToApiAuthorizationPath(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].IdentityManagePath);
    }
    navigateToReturnUrl(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            // It's important that we do a replace here so that we remove the callback uri with the
            // fragment containing the tokens from the browser history.
            yield this.router.navigateByUrl(returnUrl, {
                replaceUrl: true
            });
        });
    }
    getReturnUrl(state) {
        const fromQuery = this.activatedRoute.snapshot.queryParams.returnUrl;
        // If the url is comming from the query string, check that is either
        // a relative url or an absolute url
        if (fromQuery &&
            !(fromQuery.startsWith(`${window.location.origin}/`) ||
                /\/[^\/].*/.test(fromQuery))) {
            // This is an extra check to prevent open redirects.
            throw new Error('Invalid return url. The return url needs to have the same origin as the current page.');
        }
        return (state && state.returnUrl) ||
            fromQuery ||
            _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].DefaultLoginRedirectPath;
    }
    redirectToApiAuthorizationPath(apiAuthorizationPath) {
        // It's important that we do a replace here so that when the user hits the back arrow on the
        // browser they get sent back to where it was on the app instead of to an endpoint on this
        // component.
        const redirectUrl = `${window.location.origin}${apiAuthorizationPath}`;
        window.location.replace(redirectUrl);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/login/login.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/api-authorization/login/login.component.css")).default]
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/api-authorization/logout/logout.component.css":
/*!***********************************************************!*\
  !*** ./src/api-authorization/logout/logout.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBpLWF1dGhvcml6YXRpb24vbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/api-authorization/logout/logout.component.ts":
/*!**********************************************************!*\
  !*** ./src/api-authorization/logout/logout.component.ts ***!
  \**********************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorize.service */ "./src/api-authorization/authorize.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-authorization.constants */ "./src/api-authorization/api-authorization.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






// The main responsibility of this component is to handle the user's logout process.
// This is the starting point for the logout process, which is usually initiated when a
// user clicks on the logout button on the LoginMenu component.
let LogoutComponent = class LogoutComponent {
    constructor(authorizeService, activatedRoute, router) {
        this.authorizeService = authorizeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const action = this.activatedRoute.snapshot.url[1];
            switch (action.path) {
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["LogoutActions"].Logout:
                    if (!!window.history.state.local) {
                        yield this.logout(this.getReturnUrl());
                    }
                    else {
                        // This prevents regular links to <app>/authentication/logout from triggering a logout
                        this.message.next('The logout was not initiated from within the page.');
                    }
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["LogoutActions"].LogoutCallback:
                    yield this.processLogoutCallback();
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["LogoutActions"].LoggedOut:
                    this.message.next('You successfully logged out!');
                    break;
                default:
                    throw new Error(`Invalid action '${action}'`);
            }
        });
    }
    logout(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const state = { returnUrl };
            const isauthenticated = yield this.authorizeService.isAuthenticated().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).toPromise();
            if (isauthenticated) {
                const result = yield this.authorizeService.signOut(state);
                switch (result.status) {
                    case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect:
                        break;
                    case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success:
                        yield this.navigateToReturnUrl(returnUrl);
                        break;
                    case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail:
                        this.message.next(result.message);
                        break;
                    default:
                        throw new Error('Invalid authentication result status.');
                }
            }
            else {
                this.message.next('You successfully logged out!');
            }
        });
    }
    processLogoutCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = window.location.href;
            const result = yield this.authorizeService.completeSignOut(url);
            switch (result.status) {
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect:
                    // There should not be any redirects as the only time completeAuthentication finishes
                    // is when we are doing a redirect sign in flow.
                    throw new Error('Should not redirect.');
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success:
                    yield this.navigateToReturnUrl(this.getReturnUrl(result.state));
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail:
                    this.message.next(result.message);
                    break;
                default:
                    throw new Error('Invalid authentication result status.');
            }
        });
    }
    navigateToReturnUrl(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.router.navigateByUrl(returnUrl, {
                replaceUrl: true
            });
        });
    }
    getReturnUrl(state) {
        const fromQuery = this.activatedRoute.snapshot.queryParams.returnUrl;
        // If the url is comming from the query string, check that is either
        // a relative url or an absolute url
        if (fromQuery &&
            !(fromQuery.startsWith(`${window.location.origin}/`) ||
                /\/[^\/].*/.test(fromQuery))) {
            // This is an extra check to prevent open redirects.
            throw new Error('Invalid return url. The return url needs to have the same origin as the current page.');
        }
        return (state && state.returnUrl) ||
            fromQuery ||
            _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["ApplicationPaths"].LoggedOut;
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LogoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-logout',
        template: __importDefault(__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/logout/logout.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./logout.component.css */ "./src/api-authorization/logout/logout.component.css")).default]
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LogoutComponent);



/***/ }),

/***/ "./src/api-authorization/register/register.component.css":
/*!***************************************************************!*\
  !*** ./src/api-authorization/register/register.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("display-flex,\r\n.display-flex,\r\n.display-flex-center,\r\n.signup-content {\r\n  display: flex;\r\n  display: -webkit-flex;\r\n}\r\n\r\n\r\na:focus,\r\na:active {\r\n  text-decoration: none;\r\n  outline: none;\r\n  transition: all 300ms ease 0s;\r\n  -moz-transition: all 300ms ease 0s;\r\n  -webkit-transition: all 300ms ease 0s;\r\n  -o-transition: all 300ms ease 0s;\r\n  -ms-transition: all 300ms ease 0s;\r\n}\r\n\r\n\r\ninput,\r\nselect,\r\ntextarea {\r\n  outline: none;\r\n  appearance: unset !important;\r\n  -moz-appearance: unset !important;\r\n  -webkit-appearance: unset !important;\r\n  -o-appearance: unset !important;\r\n  -ms-appearance: unset !important;\r\n}\r\n\r\n\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  appearance: none !important;\r\n  -moz-appearance: none !important;\r\n  -webkit-appearance: none !important;\r\n  -o-appearance: none !important;\r\n  -ms-appearance: none !important;\r\n  margin: 0;\r\n}\r\n\r\n\r\ninput:focus,\r\nselect:focus,\r\ntextarea:focus {\r\n  outline: none;\r\n  box-shadow: none !important;\r\n  -moz-box-shadow: none !important;\r\n  -webkit-box-shadow: none !important;\r\n  -o-box-shadow: none !important;\r\n  -ms-box-shadow: none !important;\r\n}\r\n\r\n\r\ninput[type=\"checkbox\"] {\r\n  appearance: checkbox !important;\r\n  -moz-appearance: checkbox !important;\r\n  -webkit-appearance: checkbox !important;\r\n  -o-appearance: checkbox !important;\r\n  -ms-appearance: checkbox !important;\r\n}\r\n\r\n\r\ninput[type=\"radio\"] {\r\n  appearance: radio !important;\r\n  -moz-appearance: radio !important;\r\n  -webkit-appearance: radio !important;\r\n  -o-appearance: radio !important;\r\n  -ms-appearance: radio !important;\r\n}\r\n\r\n\r\nfigure {\r\n  margin: 0;\r\n}\r\n\r\n\r\np {\r\n  margin-bottom: 0px;\r\n  font-size: 15px;\r\n  color: #777;\r\n}\r\n\r\n\r\nh2 {\r\n  line-height: 1.66;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: bold;\r\n  color: #222;\r\n  font-family: Poppins;\r\n  font-size: 36px;\r\n}\r\n\r\n\r\n.main {\r\n  background: #f8f8f8;\r\n  padding: 2px;\r\n}\r\n\r\n\r\n.clear {\r\n  clear: both;\r\n}\r\n\r\n\r\n.signup-container {\r\n  width: 900px;\r\n  background: fff;\r\n  margin: 0 auto;\r\n  box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n  -moz-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n  -webkit-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n  -o-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n  -ms-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n  border-radius: 20px;\r\n  -moz-border-radius: 20px;\r\n  -webkit-border-radius: 20px;\r\n  -o-border-radius: 20px;\r\n  -ms-border-radius: 20px;\r\n}\r\n\r\n\r\n.display-flex {\r\n  justify-content: space-between;\r\n  -moz-justify-content: space-between;\r\n  -webkit-justify-content: space-between;\r\n  -o-justify-content: space-between;\r\n  -ms-justify-content: space-between;\r\n  align-items: center;\r\n  -moz-align-items: center;\r\n  -webkit-align-items: center;\r\n  -o-align-items: center;\r\n  -ms-align-items: center;\r\n}\r\n\r\n\r\n.display-flex-center {\r\n  justify-content: center;\r\n  -moz-justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -o-justify-content: center;\r\n  -ms-justify-content: center;\r\n  align-items: center;\r\n  -moz-align-items: center;\r\n  -webkit-align-items: center;\r\n  -o-align-items: center;\r\n  -ms-align-items: center;\r\n}\r\n\r\n\r\n.position-center {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -moz-transform: translate(-50%, -50%);\r\n  -webkit-transform: translate(-50%, -50%);\r\n  -o-transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n.signup-content {\r\n  padding: 50px 0;\r\n}\r\n\r\n\r\n.signup-form {\r\n  width: 50%;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n.signup-image {\r\n  margin: 0 55px;\r\n}\r\n\r\n\r\n.form-title {\r\n  margin-bottom: 33px;\r\n}\r\n\r\n\r\n.signup-image {\r\n  margin-top: 45px;\r\n}\r\n\r\n\r\nfigure {\r\n  margin-bottom: 50px;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.form-submit {\r\n  display: inline-block;\r\n  background: #6dabe4;\r\n  color: #fff;\r\n  border-bottom: none;\r\n  width: auto;\r\n  padding: 15px 39px;\r\n  border-radius: 5px;\r\n  -moz-border-radius: 5px;\r\n  -webkit-border-radius: 5px;\r\n  -o-border-radius: 5px;\r\n  -ms-border-radius: 5px;\r\n  margin-top: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.form-submit:hover {\r\n  background: #4292dc;\r\n}\r\n\r\n\r\n.signup-image-link {\r\n  font-size: 14px;\r\n  color: #222;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.signup-form {\r\n  margin-left: 75px;\r\n  margin-right: 75px;\r\n  padding-left: 34px;\r\n}\r\n\r\n\r\n.register-form {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.form-group {\r\n  position: relative;\r\n  margin-bottom: 25px;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n.form-group:last-child {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n\r\ninput {\r\n  width: 100%;\r\n  display: block;\r\n  border: none;\r\n  border-bottom: 1px solid #999;\r\n  padding: 6px 30px;\r\n  font-family: Poppins;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\ninput::-webkit-input-placeholder {\r\n  color: #999;\r\n}\r\n\r\n\r\ninput::-moz-placeholder {\r\n  color: #999;\r\n}\r\n\r\n\r\ninput:-ms-input-placeholder {\r\n  color: #999;\r\n}\r\n\r\n\r\ninput:-moz-placeholder {\r\n  color: #999;\r\n}\r\n\r\n\r\ninput:focus {\r\n  border-bottom: 1px solid #222;\r\n}\r\n\r\n\r\ninput:focus::-webkit-input-placeholder {\r\n  color: #222;\r\n}\r\n\r\n\r\ninput:focus::-moz-placeholder {\r\n  color: #222;\r\n}\r\n\r\n\r\ninput:focus:-ms-input-placeholder {\r\n  color: #222;\r\n}\r\n\r\n\r\ninput:focus:-moz-placeholder {\r\n  color: #222;\r\n}\r\n\r\n\r\ninput[type=\"checkbox\"]:not(old) {\r\n  width: 2em;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 1em;\r\n  display: none;\r\n}\r\n\r\n\r\ninput[type=\"checkbox\"]:not(old) + label {\r\n  display: inline-block;\r\n  line-height: 1.5em;\r\n  margin-top: 6px;\r\n}\r\n\r\n\r\ninput[type=\"checkbox\"]:not(old) + label > span {\r\n  display: inline-block;\r\n  width: 13px;\r\n  height: 13px;\r\n  margin-right: 15px;\r\n  margin-bottom: 3px;\r\n  border: 1px solid #999;\r\n  border-radius: 2px;\r\n  -moz-border-radius: 2px;\r\n  -webkit-border-radius: 2px;\r\n  -o-border-radius: 2px;\r\n  -ms-border-radius: 2px;\r\n  background: white;\r\n  background-image: linear-gradient(white, white);\r\n  vertical-align: bottom;\r\n}\r\n\r\n\r\ninput[type=\"checkbox\"]:not(old):checked + label > span {\r\n  background-image: linear-gradient(white, white);\r\n}\r\n\r\n\r\ninput[type=\"checkbox\"]:not(old):checked + label > span:before {\r\n  content: \"\\f26b\";\r\n  display: block;\r\n  color: #222;\r\n  font-size: 11px;\r\n  line-height: 1.2;\r\n  text-align: center;\r\n  font-family: \"Material-Design-Iconic-Font\";\r\n  font-weight: bold;\r\n}\r\n\r\n\r\nlabel {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  -moz-transform: translateY(-50%);\r\n  -webkit-transform: translateY(-50%);\r\n  -o-transform: translateY(-50%);\r\n  -ms-transform: translateY(-50%);\r\n  color: #222;\r\n}\r\n\r\n\r\n.label-has-error {\r\n  top: 22%;\r\n}\r\n\r\n\r\nlabel.error {\r\n  position: relative;\r\n  background-position-y: 3px;\r\n  padding-left: 20px;\r\n  display: block;\r\n  margin-top: 20px;\r\n}\r\n\r\n\r\nlabel.valid {\r\n  display: block;\r\n  position: absolute;\r\n  right: 0;\r\n  left: auto;\r\n  margin-top: -6px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: transparent;\r\n}\r\n\r\n\r\nlabel.valid:after {\r\n  font-family: \"Material-Design-Iconic-Font\";\r\n  content: \"\\f269\";\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  font-size: 16px;\r\n  color: green;\r\n}\r\n\r\n\r\n.label-agree-term {\r\n  position: relative;\r\n  top: 0%;\r\n  transform: translateY(0);\r\n  -moz-transform: translateY(0);\r\n  -webkit-transform: translateY(0);\r\n  -o-transform: translateY(0);\r\n  -ms-transform: translateY(0);\r\n}\r\n\r\n\r\n.material-icons-name {\r\n  font-size: 18px;\r\n}\r\n\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .signup-container {\r\n    width: calc(100% - 30px);\r\n    max-width: 100%;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (min-width: 1024px) {\r\n  .signup-container {\r\n    max-width: 1200px;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 768px) {\r\n  .signup-content {\r\n    flex-direction: column;\r\n    -moz-flex-direction: column;\r\n    -o-flex-direction: column;\r\n    justify-content: center;\r\n    -moz-justify-content: center;\r\n    -webkit-justify-content: center;\r\n    -o-justify-content: center;\r\n    -ms-justify-content: center;\r\n  }\r\n\r\n  .signup-form {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    padding-left: 0px;\r\n    padding: 0 30px;\r\n  }\r\n\r\n  .signup-form,\r\n  .signup-image {\r\n    width: auto;\r\n  }\r\n\r\n  .form-button {\r\n    text-align: center;\r\n  }\r\n\r\n  .form-title {\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGktYXV0aG9yaXphdGlvbi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUUsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7O0FBR0E7O0VBRUUscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLHFDQUFxQztFQUNyQyxnQ0FBZ0M7RUFDaEMsaUNBQWlDO0FBQ25DOzs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsb0NBQW9DO0VBQ3BDLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUFDbEM7OztBQUVBOztFQUVFLDJCQUEyQjtFQUMzQixnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsU0FBUztBQUNYOzs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLDhCQUE4QjtFQUM5QiwrQkFBK0I7QUFDakM7OztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLG9DQUFvQztFQUNwQyx1Q0FBdUM7RUFDdkMsa0NBQWtDO0VBQ2xDLG1DQUFtQztBQUNyQzs7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsaUNBQWlDO0VBQ2pDLG9DQUFvQztFQUNwQywrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDOzs7QUFHQTtFQUNFLFNBQVM7QUFDWDs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsU0FBUztFQUNULFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsV0FBVztBQUNiOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixl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Q3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwaS1hdXRob3JpemF0aW9uL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXNwbGF5LWZsZXgsXHJcbi5kaXNwbGF5LWZsZXgsXHJcbi5kaXNwbGF5LWZsZXgtY2VudGVyLFxyXG4uc2lnbnVwLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG59XHJcblxyXG5cclxuYTpmb2N1cyxcclxuYTphY3RpdmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7XHJcbn1cclxuXHJcbmlucHV0LFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAtby1hcHBlYXJhbmNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIC1tcy1hcHBlYXJhbmNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIGFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAtby1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLW1zLWFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzLFxyXG5zZWxlY3Q6Zm9jdXMsXHJcbnRleHRhcmVhOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAtby1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLW1zLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBhcHBlYXJhbmNlOiBjaGVja2JveCAhaW1wb3J0YW50O1xyXG4gIC1tb3otYXBwZWFyYW5jZTogY2hlY2tib3ggIWltcG9ydGFudDtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGNoZWNrYm94ICFpbXBvcnRhbnQ7XHJcbiAgLW8tYXBwZWFyYW5jZTogY2hlY2tib3ggIWltcG9ydGFudDtcclxuICAtbXMtYXBwZWFyYW5jZTogY2hlY2tib3ggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICBhcHBlYXJhbmNlOiByYWRpbyAhaW1wb3J0YW50O1xyXG4gIC1tb3otYXBwZWFyYW5jZTogcmFkaW8gIWltcG9ydGFudDtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHJhZGlvICFpbXBvcnRhbnQ7XHJcbiAgLW8tYXBwZWFyYW5jZTogcmFkaW8gIWltcG9ydGFudDtcclxuICAtbXMtYXBwZWFyYW5jZTogcmFkaW8gIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbmZpZ3VyZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjNzc3O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5jbGVhciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5zaWdudXAtY29udGFpbmVyIHtcclxuICB3aWR0aDogOTAwcHg7XHJcbiAgYmFja2dyb3VuZDogZmZmO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDE2LjgzcHggMC4xN3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMTVweCAxNi44M3B4IDAuMTdweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDE1cHggMTYuODNweCAwLjE3cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAtby1ib3gtc2hhZG93OiAwcHggMTVweCAxNi44M3B4IDAuMTdweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIC1tcy1ib3gtc2hhZG93OiAwcHggMTVweCAxNi44M3B4IDAuMTdweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAtby1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uZGlzcGxheS1mbGV4IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLW8tanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1vLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXNwbGF5LWZsZXgtY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLW8tanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLW1zLWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtby1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucG9zaXRpb24tY2VudGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5zaWdudXAtY29udGVudCB7XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG59XHJcblxyXG4uc2lnbnVwLWZvcm0ge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNpZ251cC1pbWFnZSB7XHJcbiAgbWFyZ2luOiAwIDU1cHg7XHJcbn1cclxuXHJcbi5mb3JtLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAzM3B4O1xyXG59XHJcblxyXG4uc2lnbnVwLWltYWdlIHtcclxuICBtYXJnaW4tdG9wOiA0NXB4O1xyXG59XHJcblxyXG5maWd1cmUge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1zdWJtaXQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjNmRhYmU0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogMTVweCAzOXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZm9ybS1zdWJtaXQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM0MjkyZGM7XHJcbn1cclxuXHJcbi5zaWdudXAtaW1hZ2UtbGluayB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5zaWdudXAtZm9ybSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzRweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uZm9ybS1ncm91cDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XHJcbiAgcGFkZGluZzogNnB4IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyO1xyXG59XHJcbmlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzIyMjtcclxufVxyXG5pbnB1dDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICMyMjI7XHJcbn1cclxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzIyMjtcclxufVxyXG5pbnB1dDpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzIyMjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdChvbGQpIHtcclxuICB3aWR0aDogMmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3Qob2xkKSArIGxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdChvbGQpICsgbGFiZWwgPiBzcGFuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEzcHg7XHJcbiAgaGVpZ2h0OiAxM3B4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KG9sZCk6Y2hlY2tlZCArIGxhYmVsID4gc3BhbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdChvbGQpOmNoZWNrZWQgKyBsYWJlbCA+IHNwYW46YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZjI2YlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnRcIjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbmxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgY29sb3I6ICMyMjI7XHJcbn1cclxuXHJcbi5sYWJlbC1oYXMtZXJyb3Ige1xyXG4gIHRvcDogMjIlO1xyXG59XHJcblxyXG5sYWJlbC5lcnJvciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogM3B4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5sYWJlbC52YWxpZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogLTZweDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxubGFiZWwudmFsaWQ6YWZ0ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsLURlc2lnbi1JY29uaWMtRm9udFwiO1xyXG4gIGNvbnRlbnQ6IFwiXFxmMjY5XCI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ubGFiZWwtYWdyZWUtdGVybSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMtbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLnNpZ251cC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAuc2lnbnVwLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuc2lnbnVwLWNvbnRlbnQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtby1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zaWdudXAtZm9ybSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICB9XHJcblxyXG4gIC5zaWdudXAtZm9ybSxcclxuICAuc2lnbnVwLWltYWdlIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tYnV0dG9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5mb3JtLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/api-authorization/register/register.component.ts":
/*!**************************************************************!*\
  !*** ./src/api-authorization/register/register.component.ts ***!
  \**************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorize.service */ "./src/api-authorization/authorize.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let RegisterComponent = class RegisterComponent {
    constructor(authorizeService, activatedRoute, router, formBuilder) {
        this.authorizeService = authorizeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.registerForm = this.formBuilder.group({
                firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
                confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
            });
        });
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.authorizeService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            this.router.navigate(['/login'], { queryParams: { registered: true } });
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
RegisterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-register',
        template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/api-authorization/register/register.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./register.component.css */ "./src/api-authorization/register/register.component.css")).default]
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var src_api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/api-authorization/api-authorization.module */ "./src/api-authorization/api-authorization.module.ts");
/* harmony import */ var src_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/api-authorization/authorize.guard */ "./src/api-authorization/authorize.guard.ts");
/* harmony import */ var src_api_authorization_authorize_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/api-authorization/authorize.interceptor */ "./src/api-authorization/authorize.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            src_api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_10__["ApiAuthorizationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"] },
                { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"], canActivate: [src_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_11__["AuthorizeGuard"]] },
            ])
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: src_api_authorization_authorize_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthorizeInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        http.get(baseUrl + 'weatherforecast').subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], FetchDataComponent);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false,
    api_url: "https://localhost:44373/",
    url: "http://localhost:4200/"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitHub\angular-signin-signup-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map