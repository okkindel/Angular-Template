(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ "./src/app/auth/index.ts");
/* harmony import */ var _auth_containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/containers */ "./src/app/auth/containers/index.ts");
/* harmony import */ var _shared_containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/containers */ "./src/app/shared/containers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: _home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'login',
        component: _auth_containers__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
    },
    {
        path: 'register',
        component: _auth_containers__WEBPACK_IMPORTED_MODULE_4__["RegisterPageComponent"],
    },
    {
        path: 'info',
        component: _shared_containers__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"],
    },
    {
        path: 'reset-pass',
        component: _shared_containers__WEBPACK_IMPORTED_MODULE_5__["PasswordResetComponent"],
        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: '404',
        component: _shared_containers__WEBPACK_IMPORTED_MODULE_5__["BadRequestComponent"]
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    enableTracing: false,
                }),
                _home__WEBPACK_IMPORTED_MODULE_2__["HomeModule"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  overflow: hidden;\n  height: 100vh; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_themes_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/themes/reducers */ "./src/app/state/themes/reducers/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _themes_models_themes_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themes/models/themes.enum */ "./src/app/themes/models/themes.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(store, overlayContainer) {
        this.store = store;
        this.overlayContainer = overlayContainer;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var state = (this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_state_themes_reducers__WEBPACK_IMPORTED_MODULE_1__["getTheme"])));
        state.subscribe(function (data) { return _this.changeColors(data); });
    };
    AppComponent.prototype.changeColors = function (theme) {
        var _this = this;
        Object.keys(_themes_models_themes_enum__WEBPACK_IMPORTED_MODULE_4__["Themes"]).forEach(function (item) {
            _this.overlayContainer.getContainerElement().classList.remove(_themes_models_themes_enum__WEBPACK_IMPORTED_MODULE_4__["Themes"][item]);
        });
        this.overlayContainer.getContainerElement().classList.add(theme);
        this.componentCssClass = theme;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "componentCssClass", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayContainer"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _state_state_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/state.module */ "./src/app/state/state.module.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material */ "./src/app/material/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth */ "./src/app/auth/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toolbar/toolbar.module */ "./src/app/toolbar/toolbar.module.ts");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./themes */ "./src/app/themes/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_containers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/containers */ "./src/app/shared/containers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _shared_containers__WEBPACK_IMPORTED_MODULE_10__["InfoComponent"],
                _shared_containers__WEBPACK_IMPORTED_MODULE_10__["BadRequestComponent"],
                _shared_containers__WEBPACK_IMPORTED_MODULE_10__["PasswordResetComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _material__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                _auth__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
                _state_state_module__WEBPACK_IMPORTED_MODULE_2__["StateModule"],
                _toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_7__["ToolbarModule"],
                _themes__WEBPACK_IMPORTED_MODULE_8__["ThemesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            exports: [
                _shared_containers__WEBPACK_IMPORTED_MODULE_10__["InfoComponent"],
                _shared_containers__WEBPACK_IMPORTED_MODULE_10__["BadRequestComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _containers___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/ */ "./src/app/auth/containers/index.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _state_auth_effects___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/auth/effects/ */ "./src/app/state/auth/effects/index.ts");
/* harmony import */ var _state_auth_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/auth/reducers */ "./src/app/state/auth/reducers/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./src/app/auth/components/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../material */ "./src/app/material/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../themes */ "./src/app/themes/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _material__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _themes__WEBPACK_IMPORTED_MODULE_14__["ThemesModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_state_auth_effects___WEBPACK_IMPORTED_MODULE_4__["AuthEffects"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forFeature('auth', _state_auth_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{ path: 'login', component: _containers___WEBPACK_IMPORTED_MODULE_1__["LoginPageComponent"] }]),
            ],
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _containers___WEBPACK_IMPORTED_MODULE_1__["LoginPageComponent"],
                _containers___WEBPACK_IMPORTED_MODULE_1__["RegisterPageComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/components/index.ts":
/*!******************************************!*\
  !*** ./src/app/auth/components/index.ts ***!
  \******************************************/
/*! exports provided: LoginComponent, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });

/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/components/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]; });





/***/ }),

/***/ "./src/app/auth/components/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/auth/components/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"login-form\" (ngSubmit)=\"login.emit(credentials)\" ngNativeValidate>\n\n  <mat-form-field class=\"full-width\">\n    <input \n    matInput\n    autofocus \n    required \n    placeholder=\"Email\" \n    [(ngModel)]=\"credentials.email\" \n    name=\"email\">\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <input \n    matInput\n    required \n    [type]=\"hide ? 'text' : 'password'\"\n    placeholder=\"Password\" \n    [(ngModel)]=\"credentials.password\" \n    name=\"password\">\n    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n  </mat-form-field>\n\n    <button mat-raised-button color=\"primary\" class=\"big\" type=\"submit\" [disabled]=\"disabled\">\n    Login\n    <mat-progress-bar *ngIf=\"disabled\" mode=\"indeterminate\"></mat-progress-bar>\n  </button>\n  <button [routerLink]=\"['/reset-pass']\"  mat-raised-button color=\"primary\" class=\"small\" routerLinkActive=\"active\" >Reset Password</button>\n</form>\n"

/***/ }),

/***/ "./src/app/auth/components/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/auth/components/login/login.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big {\n  margin-top: 5px;\n  width: 70%; }\n\n.small {\n  margin-top: 5px;\n  width: 25%;\n  margin-left: 5%; }\n\n.full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/auth/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.disabled = false;
        this.login = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reset_pass = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.credentials = {
            email: '',
            password: '',
        };
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LoginComponent.prototype, "login", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "reset_pass", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/components/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/components/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"register-form\" (ngSubmit)=\"validate() && register.emit(credentials)\" ngNativeValidate>\n\n  <mat-form-field class=\"full-width\">\n    <input \n    matInput\n    placeholder=\"Email\" \n    [(ngModel)]=\"credentials.email\"\n    [email]=\"true\"\n    type=\"email\"\n    name=\"email\"\n    required>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <input \n    matInput\n    placeholder=\"Password\" \n    [(ngModel)]=\"credentials.password\" \n    [type]=\"hide ? 'text' : 'password'\"\n    name=\"password\"\n    minlength=\"5\"\n    required>\n    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <input \n    matInput\n    placeholder=\"Confirm Password\" \n    [(ngModel)]=\"re_password\" \n    [type]=\"hide ? 'text' : 'password'\"\n    name=\"re-password\"\n    minlength=\"5\"\n    required>\n    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n  </mat-form-field>\n  \n  <div align=\"center\" *ngIf=\"!validate_password()\"> <small> Passwords do not match.</small> <br><br> </div>\n\n  <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!validate() || disabled\">\n    Register\n    <mat-progress-bar *ngIf=\"disabled\" mode=\"indeterminate\"></mat-progress-bar>\n  </button>\n</form>"

/***/ }),

/***/ "./src/app/auth/components/register/register.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin-top: 5px;\n  margin-left: 15%;\n  width: 70%; }\n\n.full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/auth/components/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        var _this = this;
        this.re_password = '';
        this.disabled = false;
        this.register = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.credentials = {
            email: '',
            password: '',
        };
        this.validate_password = function () { return _this.re_password === _this.credentials.password; };
        this.validate = function () { return _this.validate_password()
            && _this.credentials.email !== ''
            && _this.credentials.password !== ''; };
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RegisterComponent.prototype, "register", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/components/register/register.component.scss")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/containers/index.ts":
/*!******************************************!*\
  !*** ./src/app/auth/containers/index.ts ***!
  \******************************************/
/*! exports provided: LoginPageComponent, RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/auth/containers/login-page/login-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__["LoginPageComponent"]; });

/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-page/register-page.component */ "./src/app/auth/containers/register-page/register-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_1__["RegisterPageComponent"]; });





/***/ }),

/***/ "./src/app/auth/containers/login-page/login-page.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/auth/containers/login-page/login-page.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" appAddTheme>\n\n  <mat-card class=\"form\">\n    <app-login \n      (login)=\"login($event)\" \n      [disabled]=\"isPending$ | async\">\n    </app-login>\n  </mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/auth/containers/login-page/login-page.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/auth/containers/login-page/login-page.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100%;\n  width: 100%; }\n\n.form {\n  margin-left: calc(35% - 30px);\n  top: 25%;\n  width: 30%;\n  padding: 30px; }\n"

/***/ }),

/***/ "./src/app/auth/containers/login-page/login-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/auth/containers/login-page/login-page.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _state_auth_actions___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../state/auth/actions/ */ "./src/app/state/auth/actions/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _state_auth_reducers___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../state/auth/reducers/ */ "./src/app/state/auth/reducers/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(store, snackBar) {
        this.store = store;
        this.snackBar = snackBar;
        this.errorMessage$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_state_auth_reducers___WEBPACK_IMPORTED_MODULE_2__["getError"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(Object(ramda__WEBPACK_IMPORTED_MODULE_5__["compose"])(ramda__WEBPACK_IMPORTED_MODULE_5__["not"], ramda__WEBPACK_IMPORTED_MODULE_5__["isNil"])));
        this.isPending$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_state_auth_reducers___WEBPACK_IMPORTED_MODULE_2__["getIsPending"]));
    }
    LoginPageComponent.prototype.login = function (credentials) {
        var _this = this;
        this.store.dispatch(new _state_auth_actions___WEBPACK_IMPORTED_MODULE_0__["Login"](credentials));
        this.errorMessage$.subscribe(function (response) { return _this.snackBar.showMessage(response.error.status || 'No server connection.'); });
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/auth/containers/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/auth/containers/login-page/login-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _shared_services__WEBPACK_IMPORTED_MODULE_1__["SnackbarService"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/auth/containers/register-page/register-page.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/auth/containers/register-page/register-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" appAddTheme>\n\n  <mat-card class=\"form\">\n    <app-register \n      (register)=\"register($event)\"\n      [disabled]=\"isPending$ | async\">\n    </app-register>\n  </mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/auth/containers/register-page/register-page.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/auth/containers/register-page/register-page.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100%;\n  width: 100%; }\n\n.form {\n  margin-left: calc(35% - 30px);\n  top: 25%;\n  width: 30%;\n  padding: 30px; }\n"

/***/ }),

/***/ "./src/app/auth/containers/register-page/register-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/auth/containers/register-page/register-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/auth/services/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(service, snackBar, infoSevice) {
        this.service = service;
        this.snackBar = snackBar;
        this.infoSevice = infoSevice;
    }
    RegisterPageComponent.prototype.register = function (credentials) {
        var _this = this;
        this.isPending$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
        this.service.register(credentials.email, credentials.password)
            .subscribe(function (response) {
            _this.infoSevice.showInfo('You were successfully registered.');
        }, function (error) {
            _this.snackBar.showMessage(error.error.status || 'No server connection');
            _this.isPending$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        });
    };
    RegisterPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/auth/containers/register-page/register-page.component.html"),
            styles: [__webpack_require__(/*! ./register-page.component.scss */ "./src/app/auth/containers/register-page/register-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["RegisterService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_2__["SnackbarService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_2__["InfoService"]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/auth/index.ts":
/*!*******************************!*\
  !*** ./src/app/auth/index.ts ***!
  \*******************************/
/*! exports provided: AuthGuard, AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.module */ "./src/app/auth/auth.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return _auth_module__WEBPACK_IMPORTED_MODULE_0__["AuthModule"]; });

/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/auth/services/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });





/***/ }),

/***/ "./src/app/auth/services/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/services/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _state_auth_actions___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/auth/actions/ */ "./src/app/state/auth/actions/index.ts");
/* harmony import */ var _state_auth_reducers___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/auth/reducers/ */ "./src/app/state/auth/reducers/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(store) {
        var _this = this;
        this.store = store;
        this.handleLoginStatus = function (isLoggedIn) {
            if (isLoggedIn) {
                return true;
            }
            setTimeout(function () {
                _this.store.dispatch(new _state_auth_actions___WEBPACK_IMPORTED_MODULE_0__["LoginRedirect"]());
            }, 0);
            return false;
        };
    }
    AuthGuard.prototype.canActivate = function () {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_state_auth_reducers___WEBPACK_IMPORTED_MODULE_1__["getIsLoggedIn"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.handleLoginStatus), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.login = function (email, password) {
        var url = this.BASE_URL + "/api/users";
        var body = { 'username': email, 'password': password };
        return this.http.post(url, body);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/auth/services/index.ts ***!
  \****************************************/
/*! exports provided: AuthGuard, AuthService, RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth/services/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.service */ "./src/app/auth/services/register.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return _register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]; });






/***/ }),

/***/ "./src/app/auth/services/register.service.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/services/register.service.ts ***!
  \***************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_url;
    }
    RegisterService.prototype.register = function (email, password) {
        var url = this.BASE_URL + "/register";
        var body = { 'email': email, 'password': password };
        return this.http.post(url, body);
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/home/containers/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/home/containers/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" appAddTheme>\n    <mat-card class=\"card\">\n        <div align=\"center\">\n            <img src='../../../../assets/icons/icon_white.svg' />\n            <br><br>\n            <h1>\n                <p>\n                    Welcome to Hackathon!\n                </p>\n            </h1>\n        </div>\n    </mat-card>\n    <mat-card class=\"card\">\n        <div align=\"center\">\n            <p>\n                Begin with <a routerLink=\"#\" routerLinkActive=\"active\">something</a> or <a routerLink=\"#\"\n                    routerLinkActive=\"active\">something other</a> now!\n            </p>\n        </div>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/home/containers/home/home.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/home/containers/home/home.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100%;\n  width: 100%;\n  overflow: auto; }\n\n.card {\n  top: 15%;\n  padding: 30px 20%;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 0;\n  color: white;\n  margin-bottom: 1em; }\n\nimg {\n  height: 15em; }\n\nbutton {\n  position: absolute;\n  bottom: 2em;\n  right: 2em;\n  padding: 1em;\n  border-radius: 60px; }\n"

/***/ }),

/***/ "./src/app/home/containers/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home/containers/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_auth_reducers___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../state/auth/reducers/ */ "./src/app/state/auth/reducers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(store) {
        this.store = store;
        this.email$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_auth_reducers___WEBPACK_IMPORTED_MODULE_2__["getEmail"]));
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/containers/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/containers/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/containers/index.ts":
/*!******************************************!*\
  !*** ./src/app/home/containers/index.ts ***!
  \******************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/containers/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material */ "./src/app/material/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers */ "./src/app/home/containers/index.ts");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../themes */ "./src/app/themes/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                _themes__WEBPACK_IMPORTED_MODULE_7__["ThemesModule"]
            ],
            declarations: [
                _containers__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeModule, HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers */ "./src/app/home/containers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _containers__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });

/* harmony import */ var _home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.module */ "./src/app/home/home.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return _home_module__WEBPACK_IMPORTED_MODULE_1__["HomeModule"]; });





/***/ }),

/***/ "./src/app/material/index.ts":
/*!***********************************!*\
  !*** ./src/app/material/index.ts ***!
  \***********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ "./src/app/material/material.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"]; });




/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/containers/bad-request/bad-request.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/containers/bad-request/bad-request.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" appAddTheme>\n\n  <mat-card class=\"info\" align=\"center\">\n    <div *ngIf=\"theme=='light-theme'\">\n      <img src='../../../../assets/icons/icon_black.svg' />\n    </div>\n    <div *ngIf=\"theme=='dark-theme'\">\n      <img src='../../../../assets/icons/icon_white.svg' />\n    </div>\n    <br>\n    <h2>\n      Error 404\n    </h2>\n    <p>\n      Route not found.\n    </p>\n  </mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/shared/containers/bad-request/bad-request.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/containers/bad-request/bad-request.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100%;\n  width: 100%; }\n\n.info {\n  margin-left: calc(35% - 30px);\n  top: 25%;\n  width: 30%;\n  padding: 30px; }\n\nimg {\n  height: 10em; }\n"

/***/ }),

/***/ "./src/app/shared/containers/bad-request/bad-request.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/containers/bad-request/bad-request.component.ts ***!
  \************************************************************************/
/*! exports provided: BadRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadRequestComponent", function() { return BadRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_themes_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../state/themes/reducers */ "./src/app/state/themes/reducers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BadRequestComponent = /** @class */ (function () {
    function BadRequestComponent(store) {
        this.store = store;
    }
    BadRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_themes_reducers__WEBPACK_IMPORTED_MODULE_2__["getTheme"])).subscribe(function (res) { return _this.theme = res; });
    };
    BadRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bad-request',
            template: __webpack_require__(/*! ./bad-request.component.html */ "./src/app/shared/containers/bad-request/bad-request.component.html"),
            styles: [__webpack_require__(/*! ./bad-request.component.scss */ "./src/app/shared/containers/bad-request/bad-request.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], BadRequestComponent);
    return BadRequestComponent;
}());



/***/ }),

/***/ "./src/app/shared/containers/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/containers/index.ts ***!
  \********************************************/
/*! exports provided: BadRequestComponent, InfoComponent, PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bad_request_bad_request_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bad-request/bad-request.component */ "./src/app/shared/containers/bad-request/bad-request.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BadRequestComponent", function() { return _bad_request_bad_request_component__WEBPACK_IMPORTED_MODULE_0__["BadRequestComponent"]; });

/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info/info.component */ "./src/app/shared/containers/info/info.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return _info_info_component__WEBPACK_IMPORTED_MODULE_1__["InfoComponent"]; });

/* harmony import */ var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset/password-reset.component */ "./src/app/shared/containers/password-reset/password-reset.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_2__["PasswordResetComponent"]; });






/***/ }),

/***/ "./src/app/shared/containers/info/info.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/containers/info/info.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" appAddTheme>\n\n  <mat-card class=\"info\" align=\"center\">\n\n    <div *ngIf=\"theme=='light-theme'\">\n      <img src='../../../../assets/icons/icon_black.svg' />\n    </div>\n    <div *ngIf=\"theme=='dark-theme'\">\n      <img src='../../../../assets/icons/icon_white.svg' />\n    </div>\n    <br>\n    <h2>\n      {{ message }}\n    </h2>\n    <br>\n\n    <p>\n      You will be redirected in a while.\n    </p>\n\n    <a routerLink=\"/home\" routerLinkActive=\"active\">Redirect back.</a>\n  </mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/shared/containers/info/info.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/containers/info/info.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100%;\n  width: 100%; }\n\nimg {\n  height: 10em; }\n\n.info {\n  margin-left: calc(35% - 30px);\n  top: 25%;\n  width: 30%;\n  padding: 30px; }\n"

/***/ }),

/***/ "./src/app/shared/containers/info/info.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/containers/info/info.component.ts ***!
  \**********************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/info.service */ "./src/app/shared/services/info.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_themes_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../state/themes/reducers */ "./src/app/state/themes/reducers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InfoComponent = /** @class */ (function () {
    function InfoComponent(router, service, store) {
        this.router = router;
        this.service = service;
        this.store = store;
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = this.service.message;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_state_themes_reducers__WEBPACK_IMPORTED_MODULE_6__["getTheme"])).subscribe(function (res) { return _this.theme = res; });
    };
    InfoComponent.prototype.observe = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            observer.next(true);
        });
    };
    InfoComponent.prototype.redirect = function () {
        var _this = this;
        this.observe().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(3000)).subscribe(function () {
            if (_this.router.url === '/info') {
                _this.router.navigate(['home']);
            }
        });
    };
    InfoComponent.prototype.ngAfterViewInit = function () {
        this.redirect();
    };
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/shared/containers/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.scss */ "./src/app/shared/containers/info/info.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_info_service__WEBPACK_IMPORTED_MODULE_2__["InfoService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/containers/password-reset/password-reset.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shared/containers/password-reset/password-reset.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" appAddTheme>\n\n  <mat-card class=\"info\" align=\"center\">\n\n    <div *ngIf=\"theme=='light-theme'\">\n      <img src='../../../../assets/icons/icon_black.svg' />\n    </div>\n    <div *ngIf=\"theme=='dark-theme'\">\n      <img src='../../../../assets/icons/icon_white.svg' />\n    </div>\n    <br>\n    <mat-form-field style=\"width: 80%\">\n      <input [(ngModel)]=\"email\" matInput placeholder=\"Your email.\">\n    </mat-form-field>\n    <br>\n    <mat-form-field style=\"width: 80%\">\n      <input matInput [(ngModel)]=\"pass\" placeholder=\"Your new password.\">\n    </mat-form-field>\n    <br>\n    <div align=\"center\" *ngIf=\"!validate()\"> <small> One of inputs is empty.</small> <br><br> </div>\n    <button mat-button (click)=\"submit()\" color=\"primary\" [disabled]=\"!validate() || disabled\">Submit\n      <mat-progress-bar *ngIf=\"disabled\" mode=\"indeterminate\"></mat-progress-bar>\n    </button>\n  </mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/shared/containers/password-reset/password-reset.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/containers/password-reset/password-reset.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100%;\n  width: 100%; }\n\nimg {\n  height: 10em; }\n\n.info {\n  margin-left: calc(35% - 30px);\n  top: 25%;\n  width: 30%;\n  padding: 30px; }\n"

/***/ }),

/***/ "./src/app/shared/containers/password-reset/password-reset.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/containers/password-reset/password-reset.component.ts ***!
  \******************************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_themes_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../state/themes/reducers */ "./src/app/state/themes/reducers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent(service, infoSevice, store, snackBar) {
        var _this = this;
        this.service = service;
        this.infoSevice = infoSevice;
        this.store = store;
        this.snackBar = snackBar;
        this.disabled = false;
        this.email = '';
        this.pass = '';
        this.validate = function () { return _this.email !== '' && _this.pass !== ''; };
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = this.service.message;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_themes_reducers__WEBPACK_IMPORTED_MODULE_2__["getTheme"])).subscribe(function (res) { return _this.theme = res; });
    };
    PasswordResetComponent.prototype.submit = function () {
        var _this = this;
        this.disabled = true;
        this.service.resetPassword(this.email, this.pass)
            .subscribe(function (response) {
            _this.infoSevice.showInfo('Your password is changed.');
        }, function (error) {
            _this.disabled = false;
            _this.snackBar.showMessage(error.error.status || 'No server connection');
        });
    };
    PasswordResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password-reset',
            template: __webpack_require__(/*! ./password-reset.component.html */ "./src/app/shared/containers/password-reset/password-reset.component.html"),
            styles: [__webpack_require__(/*! ./password-reset.component.scss */ "./src/app/shared/containers/password-reset/password-reset.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["PasswordService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["InfoService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _services__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"]])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: InfoService, SnackbarService, PasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _snakbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snakbar.service */ "./src/app/shared/services/snakbar.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SnackbarService", function() { return _snakbar_service__WEBPACK_IMPORTED_MODULE_0__["SnackbarService"]; });

/* harmony import */ var _info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.service */ "./src/app/shared/services/info.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoService", function() { return _info_service__WEBPACK_IMPORTED_MODULE_1__["InfoService"]; });

/* harmony import */ var _password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password.service */ "./src/app/shared/services/password.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordService", function() { return _password_service__WEBPACK_IMPORTED_MODULE_2__["PasswordService"]; });






/***/ }),

/***/ "./src/app/shared/services/info.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/info.service.ts ***!
  \*************************************************/
/*! exports provided: InfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoService", function() { return InfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoService = /** @class */ (function () {
    function InfoService(router) {
        this.router = router;
        this.message = '';
    }
    InfoService.prototype.showInfo = function (msg) {
        this.message = msg;
        this.router.navigate(['info']);
    };
    InfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], InfoService);
    return InfoService;
}());



/***/ }),

/***/ "./src/app/shared/services/password.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/password.service.ts ***!
  \*****************************************************/
/*! exports provided: PasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordService", function() { return PasswordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordService = /** @class */ (function () {
    function PasswordService(http) {
        this.http = http;
        this.message = '';
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url;
    }
    PasswordService.prototype.resetPassword = function (email, password) {
        var url = this.BASE_URL + "/reset";
        var body = { 'email': email, 'password': password };
        return this.http.post(url, body);
    };
    PasswordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PasswordService);
    return PasswordService;
}());



/***/ }),

/***/ "./src/app/shared/services/snakbar.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/snakbar.service.ts ***!
  \****************************************************/
/*! exports provided: SnackbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarService", function() { return SnackbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnackbarService = /** @class */ (function () {
    function SnackbarService(snackBar) {
        this.snackBar = snackBar;
    }
    SnackbarService.prototype.showMessage = function (message) {
        this.snackBar.open(message, null, { duration: 4000 });
    };
    SnackbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SnackbarService);
    return SnackbarService;
}());



/***/ }),

/***/ "./src/app/state/app/app.effects.ts":
/*!******************************************!*\
  !*** ./src/app/state/app/app.effects.ts ***!
  \******************************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppEffects = /** @class */ (function () {
    function AppEffects(actions) {
        this.actions = actions;
    }
    AppEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], AppEffects);
    return AppEffects;
}());



/***/ }),

/***/ "./src/app/state/app/app.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/state/app/app.reducer.ts ***!
  \******************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");

var reducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"],
};


/***/ }),

/***/ "./src/app/state/auth/actions/auth.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/state/auth/actions/auth.actions.ts ***!
  \****************************************************/
/*! exports provided: AuthActionTypes, Login, LoginSuccess, LoginFailure, LoginRedirect, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFailure", function() { return LoginFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRedirect", function() { return LoginRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["Login"] = "[Auth] Login";
    AuthActionTypes["Logout"] = "[Auth] Logout";
    AuthActionTypes["LoginSuccess"] = "[Auth] Login Success";
    AuthActionTypes["LoginFailure"] = "[Auth] Login Failure";
    AuthActionTypes["LoginRedirect"] = "[Auth] Login Redirect";
})(AuthActionTypes || (AuthActionTypes = {}));
var Login = /** @class */ (function () {
    function Login(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.Login;
    }
    return Login;
}());

var LoginSuccess = /** @class */ (function () {
    function LoginSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LoginSuccess;
    }
    return LoginSuccess;
}());

var LoginFailure = /** @class */ (function () {
    function LoginFailure(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LoginFailure;
    }
    return LoginFailure;
}());

var LoginRedirect = /** @class */ (function () {
    function LoginRedirect() {
        this.type = AuthActionTypes.LoginRedirect;
    }
    return LoginRedirect;
}());

var Logout = /** @class */ (function () {
    function Logout() {
        this.type = AuthActionTypes.Logout;
    }
    return Logout;
}());



/***/ }),

/***/ "./src/app/state/auth/actions/index.ts":
/*!*********************************************!*\
  !*** ./src/app/state/auth/actions/index.ts ***!
  \*********************************************/
/*! exports provided: AuthActionTypes, Login, LoginSuccess, LoginFailure, LoginRedirect, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "./src/app/state/auth/actions/auth.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["Login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["LoginSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFailure", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["LoginFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginRedirect", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["LoginRedirect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["Logout"]; });




/***/ }),

/***/ "./src/app/state/auth/components/index.ts":
/*!************************************************!*\
  !*** ./src/app/state/auth/components/index.ts ***!
  \************************************************/
/*! exports provided: initialState, reducer, getError, getIsPending */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers_login_page_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/login-page.reducer */ "./src/app/state/auth/components/reducers/login-page.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _reducers_login_page_reducer__WEBPACK_IMPORTED_MODULE_0__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducers_login_page_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return _reducers_login_page_reducer__WEBPACK_IMPORTED_MODULE_0__["getError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsPending", function() { return _reducers_login_page_reducer__WEBPACK_IMPORTED_MODULE_0__["getIsPending"]; });




/***/ }),

/***/ "./src/app/state/auth/components/reducers/login-page.reducer.ts":
/*!**********************************************************************!*\
  !*** ./src/app/state/auth/components/reducers/login-page.reducer.ts ***!
  \**********************************************************************/
/*! exports provided: initialState, reducer, getError, getIsPending */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsPending", function() { return getIsPending; });
/* harmony import */ var _actions___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/ */ "./src/app/state/auth/actions/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var initialState = {
    error: undefined,
    isPending: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions___WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].Login: {
            return __assign({}, state, { error: undefined, isPending: true });
        }
        case _actions___WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LoginSuccess: {
            return __assign({}, state, { error: undefined, isPending: false });
        }
        case _actions___WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LoginFailure: {
            return __assign({}, state, { error: action.payload, isPending: false });
        }
        default: {
            return state;
        }
    }
}
var getError = function (state) { return state.error; };
var getIsPending = function (state) { return state.isPending; };


/***/ }),

/***/ "./src/app/state/auth/effects/auth.effects.ts":
/*!****************************************************!*\
  !*** ./src/app/state/auth/effects/auth.effects.ts ***!
  \****************************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/state/auth/actions/auth.actions.ts");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, authService, router, infoService) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.router = router;
        this.infoService = infoService;
        this.login$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].Login), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(function (credentials) {
            return _this.authService
                .login(credentials.email, credentials.password)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (auth) { return auth ? new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["LoginSuccess"]({ email: credentials.email, token: auth.token }) : new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["LoginFailure"](false); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["LoginFailure"](error)); }));
        }));
        this.loginSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LoginSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (action) {
            localStorage.setItem('token', action.payload.token);
            _this.router.navigate(['home']);
            _this.infoService.showInfo('You were successfully logged in.');
        }));
        this.loginRedirect$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LoginRedirect), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.router.navigate(['login']); }));
        this.logout$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].Logout), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.router.navigate(['home']); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "login$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "loginSuccess$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "loginRedirect$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "logout$", void 0);
    AuthEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["InfoService"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/state/auth/effects/index.ts":
/*!*********************************************!*\
  !*** ./src/app/state/auth/effects/index.ts ***!
  \*********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.effects */ "./src/app/state/auth/effects/auth.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return _auth_effects__WEBPACK_IMPORTED_MODULE_0__["AuthEffects"]; });




/***/ }),

/***/ "./src/app/state/auth/reducers/auth.reducers.ts":
/*!******************************************************!*\
  !*** ./src/app/state/auth/reducers/auth.reducers.ts ***!
  \******************************************************/
/*! exports provided: initialState, reducer, getIsLoggedIn, getEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoggedIn", function() { return getIsLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmail", function() { return getEmail; });
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/state/auth/actions/auth.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var initialState = {
    isLoggedIn: false,
    email: undefined,
    token: undefined
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LoginSuccess: {
            return __assign({}, state, { isLoggedIn: true, email: action.payload.email, token: action.payload.token });
        }
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].Logout: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
var getIsLoggedIn = function (state) { return state.isLoggedIn; };
var getEmail = function (state) { return state.email; };


/***/ }),

/***/ "./src/app/state/auth/reducers/index.ts":
/*!**********************************************!*\
  !*** ./src/app/state/auth/reducers/index.ts ***!
  \**********************************************/
/*! exports provided: reducers, selectAuthState, selectAuthStatusState, getIsLoggedIn, getEmail, selectLoginPageState, getError, getIsPending */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthState", function() { return selectAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthStatusState", function() { return selectAuthStatusState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoggedIn", function() { return getIsLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmail", function() { return getEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoginPageState", function() { return selectLoginPageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsPending", function() { return getIsPending; });
/* harmony import */ var _auth_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.reducers */ "./src/app/state/auth/reducers/auth.reducers.ts");
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ */ "./src/app/state/auth/components/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var reducers = {
    status: _auth_reducers__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    loginPage: _components___WEBPACK_IMPORTED_MODULE_1__["reducer"]
};
var selectAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('auth');
var selectAuthStatusState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectAuthState, function (state) { return state.status; });
var getIsLoggedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectAuthStatusState, _auth_reducers__WEBPACK_IMPORTED_MODULE_0__["getIsLoggedIn"]);
var getEmail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectAuthStatusState, _auth_reducers__WEBPACK_IMPORTED_MODULE_0__["getEmail"]);
var selectLoginPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectAuthState, function (state) { return state.loginPage; });
var getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectLoginPageState, _components___WEBPACK_IMPORTED_MODULE_1__["getError"]);
var getIsPending = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectLoginPageState, _components___WEBPACK_IMPORTED_MODULE_1__["getIsPending"]);


/***/ }),

/***/ "./src/app/state/shared/utils.ts":
/*!***************************************!*\
  !*** ./src/app/state/shared/utils.ts ***!
  \***************************************/
/*! exports provided: createActionType, CustomSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createActionType", function() { return createActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
var typeCache = {};
function createActionType(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unique\"");
    }
    typeCache[label] = true;
    return label;
}
var CustomSerializer = /** @class */ (function () {
    function CustomSerializer() {
    }
    CustomSerializer.prototype.serialize = function (routerState) {
        var route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        var url = routerState.url;
        var queryParams = routerState.root.queryParams;
        var params = route.params;
        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url: url, params: params, queryParams: queryParams };
    };
    return CustomSerializer;
}());

// FOR STORE ROUTING


/***/ }),

/***/ "./src/app/state/state.module.ts":
/*!***************************************!*\
  !*** ./src/app/state/state.module.ts ***!
  \***************************************/
/*! exports provided: StateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateModule", function() { return StateModule; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/utils */ "./src/app/state/shared/utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_app_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/app.effects */ "./src/app/state/app/app.effects.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_app_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app/app.reducer */ "./src/app/state/app/app.reducer.ts");
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










var StateModule = /** @class */ (function () {
    function StateModule(parentModule) {
        if (parentModule) {
            throw new Error('StateModule is already loaded. Import it in the AppModule only');
        }
    }
    StateModule_1 = StateModule;
    StateModule.forRoot = function () {
        return {
            ngModule: StateModule_1,
            providers: []
        };
    };
    var StateModule_1;
    StateModule = StateModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["StoreRouterConnectingModule"].forRoot({ stateKey: 'router' }),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_app_app_reducer__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([
                    _app_app_effects__WEBPACK_IMPORTED_MODULE_6__["AppEffects"]
                ]),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"].instrument() : [],
            ],
            providers: [
                {
                    provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["RouterStateSerializer"],
                    useClass: _shared_utils__WEBPACK_IMPORTED_MODULE_4__["CustomSerializer"]
                },
            ],
            declarations: []
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        __metadata("design:paramtypes", [StateModule])
    ], StateModule);
    return StateModule;
}());



/***/ }),

/***/ "./src/app/state/themes/actions/themes.actions.ts":
/*!********************************************************!*\
  !*** ./src/app/state/themes/actions/themes.actions.ts ***!
  \********************************************************/
/*! exports provided: ThemesActions, ChangeTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesActions", function() { return ThemesActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeTheme", function() { return ChangeTheme; });
var ThemesActions;
(function (ThemesActions) {
    ThemesActions["ChangeTheme"] = "[Themes] Change Theme";
})(ThemesActions || (ThemesActions = {}));
var ChangeTheme = /** @class */ (function () {
    function ChangeTheme(payload) {
        this.payload = payload;
        this.type = ThemesActions.ChangeTheme;
    }
    return ChangeTheme;
}());



/***/ }),

/***/ "./src/app/state/themes/reducers/index.ts":
/*!************************************************!*\
  !*** ./src/app/state/themes/reducers/index.ts ***!
  \************************************************/
/*! exports provided: initialState, reducer, getThemesState, getTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThemesState", function() { return getThemesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return getTheme; });
/* harmony import */ var _themes_models_themes_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../themes/models/themes.enum */ "./src/app/themes/models/themes.enum.ts");
/* harmony import */ var _actions_themes_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/themes.actions */ "./src/app/state/themes/actions/themes.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var initialState = {
    currentTheme: localStorage.theme || _themes_models_themes_enum__WEBPACK_IMPORTED_MODULE_0__["Themes"].Dark
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_themes_actions__WEBPACK_IMPORTED_MODULE_1__["ThemesActions"].ChangeTheme: {
            return __assign({}, state, { currentTheme: action.payload });
        }
        default: {
            return state;
        }
    }
}
var getThemesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('themes');
var getTheme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getThemesState, function (state) { return state.currentTheme; });


/***/ }),

/***/ "./src/app/themes/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/themes/components/index.ts ***!
  \********************************************/
/*! exports provided: ThemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _themes_themes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themes/themes.component */ "./src/app/themes/components/themes/themes.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemesComponent", function() { return _themes_themes_component__WEBPACK_IMPORTED_MODULE_0__["ThemesComponent"]; });




/***/ }),

/***/ "./src/app/themes/components/themes/themes.component.html":
/*!****************************************************************!*\
  !*** ./src/app/themes/components/themes/themes.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button [matMenuTriggerFor]=\"menu\" class=\"toolbar__btn\">\n  <mat-icon>format_color_fill</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\n    <button \n      mat-menu-item \n      *ngFor=\"let theme of themes()\" \n      (click)=\"changeTheme(theme)\">\n      {{theme}}\n    </button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/themes/components/themes/themes.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/themes/components/themes/themes.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/themes/components/themes/themes.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/themes/components/themes/themes.component.ts ***!
  \**************************************************************/
/*! exports provided: ThemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesComponent", function() { return ThemesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_themes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/themes.service */ "./src/app/themes/services/themes.service.ts");
/* harmony import */ var _models_themes_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/themes.enum */ "./src/app/themes/models/themes.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThemesComponent = /** @class */ (function () {
    function ThemesComponent(themesService) {
        this.themesService = themesService;
        this.themes = function () { return (Object.keys(_models_themes_enum__WEBPACK_IMPORTED_MODULE_2__["Themes"])); };
    }
    ThemesComponent.prototype.changeTheme = function (theme) {
        this.themesService.changeTheme(_models_themes_enum__WEBPACK_IMPORTED_MODULE_2__["Themes"][theme]);
    };
    ThemesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-theme-picker',
            template: __webpack_require__(/*! ./themes.component.html */ "./src/app/themes/components/themes/themes.component.html"),
            styles: [__webpack_require__(/*! ./themes.component.scss */ "./src/app/themes/components/themes/themes.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_themes_service__WEBPACK_IMPORTED_MODULE_1__["ThemesService"]])
    ], ThemesComponent);
    return ThemesComponent;
}());



/***/ }),

/***/ "./src/app/themes/directives/index.ts":
/*!********************************************!*\
  !*** ./src/app/themes/directives/index.ts ***!
  \********************************************/
/*! exports provided: ThemedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _themed_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themed.directive */ "./src/app/themes/directives/themed.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemedDirective", function() { return _themed_directive__WEBPACK_IMPORTED_MODULE_0__["ThemedDirective"]; });




/***/ }),

/***/ "./src/app/themes/directives/themed.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/themes/directives/themed.directive.ts ***!
  \*******************************************************/
/*! exports provided: ThemedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemedDirective", function() { return ThemedDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThemedDirective = /** @class */ (function () {
    function ThemedDirective(renderer, el) {
        renderer.setElementClass(el.nativeElement, 'mat-app-background', true);
    }
    ThemedDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAddTheme]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ThemedDirective);
    return ThemedDirective;
}());



/***/ }),

/***/ "./src/app/themes/index.ts":
/*!*********************************!*\
  !*** ./src/app/themes/index.ts ***!
  \*********************************/
/*! exports provided: ThemesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _themes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themes.module */ "./src/app/themes/themes.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemesModule", function() { return _themes_module__WEBPACK_IMPORTED_MODULE_0__["ThemesModule"]; });




/***/ }),

/***/ "./src/app/themes/models/themes.enum.ts":
/*!**********************************************!*\
  !*** ./src/app/themes/models/themes.enum.ts ***!
  \**********************************************/
/*! exports provided: Themes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Themes", function() { return Themes; });
var Themes;
(function (Themes) {
    Themes["Light"] = "light-theme";
    Themes["Dark"] = "dark-theme";
})(Themes || (Themes = {}));


/***/ }),

/***/ "./src/app/themes/services/themes.service.ts":
/*!***************************************************!*\
  !*** ./src/app/themes/services/themes.service.ts ***!
  \***************************************************/
/*! exports provided: ThemesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesService", function() { return ThemesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_themes_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/themes/reducers */ "./src/app/state/themes/reducers/index.ts");
/* harmony import */ var _state_themes_actions_themes_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/themes/actions/themes.actions */ "./src/app/state/themes/actions/themes.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThemesService = /** @class */ (function () {
    function ThemesService(store) {
        this.store = store;
        this.themeChoosen$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_themes_reducers__WEBPACK_IMPORTED_MODULE_2__["getTheme"]));
    }
    ThemesService.prototype.changeTheme = function (theme) {
        this.store.dispatch(new _state_themes_actions_themes_actions__WEBPACK_IMPORTED_MODULE_3__["ChangeTheme"](theme));
        localStorage.theme = theme;
    };
    ThemesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ThemesService);
    return ThemesService;
}());



/***/ }),

/***/ "./src/app/themes/themes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/themes/themes.module.ts ***!
  \*****************************************/
/*! exports provided: ThemesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesModule", function() { return ThemesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_themes_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/themes/reducers */ "./src/app/state/themes/reducers/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives */ "./src/app/themes/directives/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/themes/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ThemesModule = /** @class */ (function () {
    function ThemesModule() {
    }
    ThemesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('themes', _state_themes_reducers__WEBPACK_IMPORTED_MODULE_3__["reducer"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]
            ],
            declarations: [_components__WEBPACK_IMPORTED_MODULE_6__["ThemesComponent"], _directives__WEBPACK_IMPORTED_MODULE_5__["ThemedDirective"]],
            exports: [_components__WEBPACK_IMPORTED_MODULE_6__["ThemesComponent"], _directives__WEBPACK_IMPORTED_MODULE_5__["ThemedDirective"]]
        })
    ], ThemesModule);
    return ThemesModule;
}());



/***/ }),

/***/ "./src/app/toolbar/components/index.ts":
/*!*********************************************!*\
  !*** ./src/app/toolbar/components/index.ts ***!
  \*********************************************/
/*! exports provided: UserSettingsComponent, NoUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-settings/user-settings.component */ "./src/app/toolbar/components/user-settings/user-settings.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSettingsComponent", function() { return _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_0__["UserSettingsComponent"]; });

/* harmony import */ var _no_user_no_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-user/no-user.component */ "./src/app/toolbar/components/no-user/no-user.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUserComponent", function() { return _no_user_no_user_component__WEBPACK_IMPORTED_MODULE_1__["NoUserComponent"]; });





/***/ }),

/***/ "./src/app/toolbar/components/no-user/no-user.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/toolbar/components/no-user/no-user.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>\n  <button mat-button (click)=\"login.emit()\" class=\"toolbar__btn shadow_010\">\n    <mat-icon>account_box</mat-icon>\n    Login\n  </button>\n  <button mat-button (click)=\"register.emit()\" class=\"toolbar__btn shadow_005\">\n    <mat-icon>edit</mat-icon>\n    Register\n  </button>\n</span>"

/***/ }),

/***/ "./src/app/toolbar/components/no-user/no-user.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/toolbar/components/no-user/no-user.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-icon {\n  margin-right: 5px; }\n\n.shadow_010 {\n  background-color: rgba(0, 0, 0, 0.15); }\n\n.shadow_005 {\n  background-color: rgba(0, 0, 0, 0.15); }\n"

/***/ }),

/***/ "./src/app/toolbar/components/no-user/no-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/toolbar/components/no-user/no-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: NoUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoUserComponent", function() { return NoUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoUserComponent = /** @class */ (function () {
    function NoUserComponent() {
        this.login = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.register = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NoUserComponent.prototype, "login", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NoUserComponent.prototype, "register", void 0);
    NoUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-no-user',
            template: __webpack_require__(/*! ./no-user.component.html */ "./src/app/toolbar/components/no-user/no-user.component.html"),
            styles: [__webpack_require__(/*! ./no-user.component.scss */ "./src/app/toolbar/components/no-user/no-user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NoUserComponent);
    return NoUserComponent;
}());



/***/ }),

/***/ "./src/app/toolbar/components/user-settings/user-settings.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/toolbar/components/user-settings/user-settings.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button \n  class=\"toolbar__btn shadow\"\n  mat-button \n  [matMenuTriggerFor]=\"menu\">\n  <mat-icon class=\"\">account_circle</mat-icon>\n  {{email}}\n</button>\n\n<mat-menu \n  #menu=\"matMenu\" \n  [overlapTrigger]=\"false\">\n  <button \n    mat-menu-item \n    (click)=\"logout.emit()\">\n    <mat-icon>logout</mat-icon>\n    Logout\n  </button>\n</mat-menu>"

/***/ }),

/***/ "./src/app/toolbar/components/user-settings/user-settings.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/toolbar/components/user-settings/user-settings.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shadow {\n  background-color: rgba(0, 0, 0, 0.15); }\n"

/***/ }),

/***/ "./src/app/toolbar/components/user-settings/user-settings.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/toolbar/components/user-settings/user-settings.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsComponent", function() { return UserSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserSettingsComponent = /** @class */ (function () {
    function UserSettingsComponent() {
        this.logout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserSettingsComponent.prototype, "email", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserSettingsComponent.prototype, "logout", void 0);
    UserSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-settings',
            template: __webpack_require__(/*! ./user-settings.component.html */ "./src/app/toolbar/components/user-settings/user-settings.component.html"),
            styles: [__webpack_require__(/*! ./user-settings.component.scss */ "./src/app/toolbar/components/user-settings/user-settings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserSettingsComponent);
    return UserSettingsComponent;
}());



/***/ }),

/***/ "./src/app/toolbar/containers/index.ts":
/*!*********************************************!*\
  !*** ./src/app/toolbar/containers/index.ts ***!
  \*********************************************/
/*! exports provided: ToolbarComponent, MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/containers/toolbar/toolbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__["ToolbarComponent"]; });

/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/toolbar/containers/menu/menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]; });





/***/ }),

/***/ "./src/app/toolbar/containers/menu/menu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/toolbar/containers/menu/menu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-settings \n*ngIf=\"email$ | async\"\n[email]=\"email$ | async\" \n(logout)=\"logout()\">\n</app-user-settings>\n\n<app-no-user\n  *ngIf=\"!(email$ | async)\"\n  (login)=\"navigateToLogin()\"\n  (register)=\"navigateToRegister()\">\n</app-no-user>\n\n<app-theme-picker></app-theme-picker>\n"

/***/ }),

/***/ "./src/app/toolbar/containers/menu/menu.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/toolbar/containers/menu/menu.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  color: white; }\n\nmat-icon {\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/toolbar/containers/menu/menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/toolbar/containers/menu/menu.component.ts ***!
  \***********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_auth_actions___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../state/auth/actions/ */ "./src/app/state/auth/actions/index.ts");
/* harmony import */ var _state_auth_reducers___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../state/auth/reducers/ */ "./src/app/state/auth/reducers/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_shared_services_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/info.service */ "./src/app/shared/services/info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MenuComponent = /** @class */ (function () {
    function MenuComponent(store, router, infoService) {
        this.store = store;
        this.router = router;
        this.infoService = infoService;
        this.email$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_state_auth_reducers___WEBPACK_IMPORTED_MODULE_2__["getEmail"]));
    }
    MenuComponent.prototype.logout = function () {
        this.store.dispatch(new _state_auth_actions___WEBPACK_IMPORTED_MODULE_1__["Logout"]());
        this.infoService.showInfo('You were successfully logged out.');
    };
    MenuComponent.prototype.navigateToLogin = function () {
        this.router.navigate(['login']);
    };
    MenuComponent.prototype.navigateToRegister = function () {
        this.router.navigate(['register']);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/toolbar/containers/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/toolbar/containers/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_info_service__WEBPACK_IMPORTED_MODULE_5__["InfoService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/toolbar/containers/toolbar/toolbar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/toolbar/containers/toolbar/toolbar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n\n  <button mat-button (click)=\"navigateToHome()\" class=\"toolbar__main\">\n    <img src='../../../../assets/icons/icon_white.svg' />\n    <span>Hackathon</span>\n  </button>\n\n  <span class=\"spacer\"></span>\n\n  <app-menu class=\"menu\"></app-menu>\n\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/toolbar/containers/toolbar/toolbar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/toolbar/containers/toolbar/toolbar.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  color: white; }\n\n.spacer {\n  flex: 1 1 auto; }\n\nimg {\n  height: 2em;\n  margin-right: 10px; }\n\n.toolbar__main {\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 0;\n  height: 100%;\n  margin-left: -20px;\n  padding-right: 30px;\n  padding-left: 25px; }\n\n.menu {\n  height: 100%;\n  margin-right: -15px; }\n"

/***/ }),

/***/ "./src/app/toolbar/containers/toolbar/toolbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/toolbar/containers/toolbar/toolbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(router) {
        this.router = router;
    }
    ToolbarComponent.prototype.navigateToHome = function () {
        this.router.navigate(['home']);
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/toolbar/containers/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/toolbar/containers/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/toolbar/toolbar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/toolbar/toolbar.module.ts ***!
  \*******************************************/
/*! exports provided: ToolbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarModule", function() { return ToolbarModule; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/app/toolbar/components/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ "./src/app/toolbar/containers/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material */ "./src/app/material/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../themes */ "./src/app/themes/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ToolbarModule = /** @class */ (function () {
    function ToolbarModule() {
    }
    ToolbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _themes__WEBPACK_IMPORTED_MODULE_5__["ThemesModule"]
            ],
            declarations: [
                _containers__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"],
                _components__WEBPACK_IMPORTED_MODULE_0__["UserSettingsComponent"],
                _components__WEBPACK_IMPORTED_MODULE_0__["NoUserComponent"],
                _containers__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"],
            ],
            exports: [
                _containers__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"],
            ]
        })
    ], ToolbarModule);
    return ToolbarModule;
}());



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
var environment = {
    production: false,
    api_url: 'http://localhost:8080'
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/okkindel/Dokumenty/HACKATON/Hackathon-Template/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map