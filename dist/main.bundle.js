webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n\n    <!-- SIDENAV CONTENT -->\n    <mat-sidenav #sidenav  class=\"container-sidenav\">\n            <mat-nav-list class=\"custom-nav\">\n                    <div class=\"text-icon-container\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <i class=\"material-icons\">build</i> <span class=\"mat-display-1 title-nav\"> TAULA DE CONTROL</span>\n                    </div>\n                    <mat-divider> </mat-divider>\n                    <a mat-list-item routerLink=\"/control\"       (click) = \"sidenav.toggle()\">Control de llums</a>\n                    <a mat-list-item routerLink=\"/outputs\"       (click) = \"sidenav.toggle()\">Configuració</a>\n                    <a mat-list-item routerLink=\"/makers\"        (click) = \"sidenav.toggle()\">Qui l'ha fet?</a>\n            </mat-nav-list>\n    </mat-sidenav>\n\n    <div  fxLayout=\"column\" fxLayoutAlign=\"center\">\n        <!-- REST OF PAGE CONTENT -->\n        <mat-toolbar color=\"primary\" class=\"mat-elevation-z4\">\n                <button mat-icon-button (click)=\"sidenav.toggle()\">\n                    <i class=\"material-icons\" style=\"margin-bottom:2px;\">menu</i>\n                </button>￼\n                <span class=\"title-toolbar\"> {{title}} </span>\n        </mat-toolbar>\n\n        <!-- CONTENT OF THE WEB -->\n        <div class=\"container-content\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <router-outlet></router-outlet>\n        </div>\n\n        <!-- FOOTER -->\n        <app-footer> </app-footer>\n    </div>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title-toolbar {\n  font-weight: 300;\n  margin-left: 10px; }\n\n.container-sidenav {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 300px; }\n\n.title-nav {\n  text-align: center;\n  margin: 10px;\n  font-size: 18px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: white; }\n\n.custom-nav {\n  padding: 0;\n  margin: 0; }\n\n.custom-nav a {\n  margin: 10px;\n  border-radius: 5px;\n  margin: 10px; }\n\n.custom-nav a:hover {\n  background: #2bbd7e !important;\n  color: white; }\n\n.mat-list-item-focus {\n  background: none !important; }\n\n.container-content {\n  margin: 20px;\n  min-height: calc(100vh - 134px); }\n\n.text-icon-container {\n  height: 64px;\n  width: 100%;\n  background-color: #2bbd7e;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_config__ = __webpack_require__("../../../../../src/app/services/data-config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
    }
    Object.defineProperty(AppComponent.prototype, "title", {
        get: function () {
            console.log(this.dataService.currentPage);
            return this.dataService.currentPage;
        },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_config__["a" /* DataConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_config__["a" /* DataConfigService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_slider__ = __webpack_require__("../../../material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_output_output_component__ = __webpack_require__("../../../../../src/app/components/output/output.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_config_outputs_config_outputs_component__ = __webpack_require__("../../../../../src/app/components/config-outputs/config-outputs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_programable_programable_component__ = __webpack_require__("../../../../../src/app/components/programable/programable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_makers_makers_component__ = __webpack_require__("../../../../../src/app/components/makers/makers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_control_control_component__ = __webpack_require__("../../../../../src/app/components/control/control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_buttons_control_buttons_control_component__ = __webpack_require__("../../../../../src/app/components/buttons-control/buttons-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_data_config__ = __webpack_require__("../../../../../src/app/services/data-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipes_get_keys_pipe__ = __webpack_require__("../../../../../src/app/pipes/get-keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_program_program_component__ = __webpack_require__("../../../../../src/app/components/program/program.component.ts");
/* unused harmony export init */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Needed modules




// Material Imports
















// Components inputs



 // Routing






// Services

// Pipes


function init(dataConfig) {
    return function () {
        if (dataConfig.debug)
            return dataConfig.getLocalConfig();
        else
            return dataConfig.getRemoteConfig();
    };
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_output_output_component__["a" /* OutputComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_config_outputs_config_outputs_component__["a" /* ConfigOutputsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_programable_programable_component__["a" /* ProgramableComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_makers_makers_component__["a" /* MakersComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_control_control_component__["a" /* ControlComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_config_outputs_config_outputs_component__["b" /* DialogConfigComponent */],
            __WEBPACK_IMPORTED_MODULE_30__pipes_get_keys_pipe__["a" /* GetKeysPipe */],
            __WEBPACK_IMPORTED_MODULE_28__components_buttons_control_buttons_control_component__["a" /* ButtonsControlComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_program_program_component__["a" /* ProgramComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material_slider__["a" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_14__angular_material_select__["a" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_snack_bar__["a" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material_button__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material_sidenav__["a" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_dialog__["a" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_list__["a" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_material_form_field__["a" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_15__angular_material_input__["a" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_22__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_21__components_config_outputs_config_outputs_component__["b" /* DialogConfigComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_29__services_data_config__["a" /* DataConfigService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* APP_INITIALIZER */],
                useFactory: init,
                deps: [__WEBPACK_IMPORTED_MODULE_29__services_data_config__["a" /* DataConfigService */]],
                multi: true
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_config_outputs_config_outputs_component__ = __webpack_require__("../../../../../src/app/components/config-outputs/config-outputs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_programable_programable_component__ = __webpack_require__("../../../../../src/app/components/programable/programable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_makers_makers_component__ = __webpack_require__("../../../../../src/app/components/makers/makers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_control_control_component__ = __webpack_require__("../../../../../src/app/components/control/control.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Configuración de las rutas
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_control_control_component__["a" /* ControlComponent */] },
    { path: 'outputs', component: __WEBPACK_IMPORTED_MODULE_2__components_config_outputs_config_outputs_component__["a" /* ConfigOutputsComponent */] },
    { path: 'makers', component: __WEBPACK_IMPORTED_MODULE_4__components_makers_makers_component__["a" /* MakersComponent */] },
    { path: 'develop', component: __WEBPACK_IMPORTED_MODULE_3__components_programable_programable_component__["a" /* ProgramableComponent */] },
    { path: '404', redirectTo: '' },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/classes/output-device.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputDevice; });
var OutputDevice = (function () {
    function OutputDevice(typeTag, outputPin, name, description, active) {
        this.typeTag = typeTag;
        this.outputPin = outputPin;
        this.name = name;
        this.description = description;
        this.active = active;
    }
    return OutputDevice;
}());

//# sourceMappingURL=output-device.js.map

/***/ }),

/***/ "../../../../../src/app/classes/program-query.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Program; });
var Program = (function () {
    function Program(htmlQuery, name, description) {
        this.htmlQuery = htmlQuery;
        this.name = name;
        this.description = description;
    }
    return Program;
}());

//# sourceMappingURL=program-query.js.map

/***/ }),

/***/ "../../../../../src/app/components/buttons-control/buttons-control.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-slider min=\"0\" max=\"100\" step=\"5\" thumbLabel tickInterval=\"1\"></mat-slider>\n<button md-raised-button style=\"background-color:#69F0AE\">OFF</button>\n"

/***/ }),

/***/ "../../../../../src/app/components/buttons-control/buttons-control.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-slider {\n  width: 500px !important;\n  height: 25px;\n  color: #69F0AE; }\n\nbutton {\n  right: -530px;\n  top: -10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/buttons-control/buttons-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsControlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsControlComponent = (function () {
    function ButtonsControlComponent() {
    }
    ButtonsControlComponent.prototype.ngOnInit = function () {
    };
    return ButtonsControlComponent;
}());
ButtonsControlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'buttons-control',
        template: __webpack_require__("../../../../../src/app/components/buttons-control/buttons-control.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/buttons-control/buttons-control.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ButtonsControlComponent);

//# sourceMappingURL=buttons-control.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/config-outputs/config-outputs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"add\">\n    <button mat-fab (click)=\"open(undefined)\" > <i class=\"material-icons\">add</i> </button>\n</div>\n\n<div class=\"container-outputs\">\n    <div *ngFor=\"let device of data.conf | getKeys\" class=\"icons\">\n        <config-output *ngIf=\"data.conf[device].type != undefined\"\n                        [currentDevice]=\"data.conf[device]\"\n                        [changeColor] = \"false\"\n                        (click) = \"open(data.conf[device])\">\n        </config-output>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/config-outputs/config-outputs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add {\n  top: auto;\n  right: 20px;\n  bottom: 47px;\n  left: auto;\n  position: fixed;\n  color: #76FF03; }\n\n.icons {\n  float: left; }\n\n.container-outputs {\n  max-width: 960px;\n  min-height: calc(100vh - 134px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/config-outputs/config-outputs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_config__ = __webpack_require__("../../../../../src/app/services/data-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigOutputsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogConfigComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigOutputsComponent = (function () {
    function ConfigOutputsComponent(dataService, dialog) {
        this.dataService = dataService;
        this.dialog = dialog;
    }
    ConfigOutputsComponent.prototype.ngOnInit = function () {
        this.dataService.currentPage = "CONFIGURACIÓ DE LES SORTIDES";
    };
    ConfigOutputsComponent.prototype.ngOnDestroy = function () {
        this.dataService.currentPage = "";
    };
    Object.defineProperty(ConfigOutputsComponent.prototype, "data", {
        get: function () {
            return this.dataService.dataConfig;
        },
        enumerable: true,
        configurable: true
    });
    ConfigOutputsComponent.prototype.open = function (selectedDevice) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogConfigComponent, {
            width: '600px'
        });
        var instance = dialogRef.componentInstance; // Instance of Dialog
        instance.dataConfig = this.dataService.dataConfig; // Input to Dialog
        // Init object in DialogConfigComponent to solve errors modifying objects
        if (selectedDevice == undefined) {
            selectedDevice = { type: "", outputPin: "", name: "", description: "" };
        }
        instance.device = selectedDevice;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.dataService.putRemoteConfig();
        });
    };
    return ConfigOutputsComponent;
}());
ConfigOutputsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'config-outputs',
        template: __webpack_require__("../../../../../src/app/components/config-outputs/config-outputs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/config-outputs/config-outputs.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_config__["a" /* DataConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_config__["a" /* DataConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["b" /* MatDialog */]) === "function" && _b || Object])
], ConfigOutputsComponent);

var DialogConfigComponent = (function () {
    function DialogConfigComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogConfigComponent.prototype.save = function () {
        this.dataConfig.conf[this.device.outputPin] = this.device;
        this.dialogRef.close();
    };
    DialogConfigComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DialogConfigComponent.prototype.delete = function () {
        this.dataConfig.conf[this.device.outputPin] = {};
        this.close();
    };
    return DialogConfigComponent;
}());
DialogConfigComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'dialog-config',
        template: __webpack_require__("../../../../../src/app/components/config-outputs/dialog-config.html"),
        styles: [__webpack_require__("../../../../../src/app/components/config-outputs/dialog-config.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["c" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["c" /* MatDialogRef */]) === "function" && _c || Object])
], DialogConfigComponent);

var _a, _b, _c;
//# sourceMappingURL=config-outputs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/config-outputs/dialog-config.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"padding:10px;\"> DETALLS DE CONFIGURACIÓ D'UNA SORTIDA </h1>\n\n<!-- TIPUS -->\n<div class=\"option-form mat-dialog-content\">\n    <span class=\"placeh\">Tipus de sortida</span>\n    <mat-form-field style=\"width:40%;\">\n        <mat-select [(ngModel)]=\"device.type\" name=\"type\">\n            <mat-option *ngFor=\"let type of dataConfig.typeTags\" [value]=\"type\">\n                {{type}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n</div>\n\n<!-- OUTPUT PIN -->\n<div class=\"option-form mat-dialog-content\">\n    <!-- OUTPUT PIN -->\n    <span class=\"placeh\">PIN de sortida</span>\n    <mat-form-field style=\"width:40%;\">\n        <mat-select [(ngModel)]=\"device.outputPin\" name=\"pin\">\n            <mat-option *ngFor=\"let pin of dataConfig.conf | getKeys\" [value]=\"pin\">\n                {{pin}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n</div>\n\n<!-- NOM -->\n<div class=\"option-form mat-dialog-content\">\n    <span class=\"placeh\">Nom </span>\n    <mat-input-container style=\"width:60%\">\n        <input  matInput\n                [maxlength]=\"9\"\n                [value]=\"name\"\n                [(ngModel)]=\"device.name\"\n                name=\"name\"\n                class=\"mat-input-element\">\n    </mat-input-container>\n</div>\n\n<!-- DESCRIPCIÓ -->\n<div class=\"option-form mat-dialog-content\">\n    <span class=\"placeh\">Descripció</span>\n    <mat-input-container style=\"width:60%\">\n        <input  matInput [maxlength]=\"10\" [value]=\"description\"  [(ngModel)]=\"device.description\" name=\"description\" class=\"mat-input-element\">\n    </mat-input-container>\n</div>\n\n<!-- BOTONS D'ACCIÓ -->\n<button mat-button (click)=\"delete()\" class=\"tbutton\"> ELIMINAR </button>\n<button mat-button (click)=\"close()\" id=\"cancel\" class=\"tbutton\"> CANCELAR </button>\n<button mat-button (click)=\"save()\" class=\"flat tbutton\"> DESAR </button>\n"

/***/ }),

/***/ "../../../../../src/app/components/config-outputs/dialog-config.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tbutton {\n  color: #69f0ae; }\n\n/deep/\n.mat-input-infix {\n  border: 0;\n  padding-top: 4px; }\n\n/deep/\n.md-dialog-content {\n  padding-top: 4px; }\n\n#cancel {\n  margin-left: 45%; }\n\n.placeh {\n  color: grey;\n  min-width: 150px;\n  margin-top: 5px; }\n\n.option-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: top;\n      -ms-flex-align: top;\n          align-items: top;\n  height: 55px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/control/control.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group style=\"min-height: calc(100vh - 134px);\">\n    <mat-tab label=\"Manual\">\n        <div class=\"container-outputs\">\n            <div *ngFor=\"let device of data.conf | getKeys\" class=\"icons\">\n                <config-output *ngIf=\"data.conf[device].type != undefined\"\n                    [currentDevice]=\"data.conf[device]\"\n                    (click)=\"toggleLED(data.conf[device].outputPin)\">\n                </config-output>\n            </div>\n        </div>\n    </mat-tab>\n    <mat-tab label=\"Automàtic\">\n        <div class=\"container-outputs\">\n            <div *ngFor=\"let program of data.programs | getKeys\" class=\"icons\">\n                <app-program  [currentProgram]=\"data.programs[program]\"\n                    (click)=\"onProgram(data.programs[program].htmlQuery)\">\n                </app-program>\n            </div>\n        </div>\n    </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "../../../../../src/app/components/control/control.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add {\n  top: auto;\n  right: 20px;\n  bottom: 47px;\n  left: auto;\n  position: fixed; }\n\n.icons {\n  float: left; }\n\n.container-outputs {\n  width: 90vw;\n  max-width: 960px;\n  float: left; }\n\n/deep/\n.mat-tab-label {\n  width: 50%; }\n\n.material-icons {\n  color: #1b5e20; }\n\n.icons2 {\n  color: #d50000; }\n\n.container-buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 100%; }\n\n.container-buttons div {\n  height: 30%;\n  margin-left: auto;\n  margin-right: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.container-options {\n  text-align: center;\n  width: 150px;\n  height: 80%;\n  float: right;\n  margin: 10px;\n  padding: 0px; }\n\n.material-icons {\n  color: black; }\n\nh4 {\n  font-family: 'Roboto';\n  color: black; }\n\n/deep/\n.mat-slider-thumb {\n  background-color: #69f0ae !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/control/control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_config__ = __webpack_require__("../../../../../src/app/services/data-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__("../../../../rxjs/add/operator/timeout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ControlComponent = (function () {
    function ControlComponent(dataService, httpclient, snackBar) {
        this.dataService = dataService;
        this.httpclient = httpclient;
        this.snackBar = snackBar;
        this.outputs = []; // Selected OUTPUTS
    }
    ControlComponent.prototype.ngOnInit = function () {
        this.dataService.currentPage = "TAULA DE CONTROL";
    };
    ControlComponent.prototype.ngOnDestroy = function () {
        this.dataService.currentPage = "";
    };
    ControlComponent.prototype.toggleLED = function (pin) {
        if (!this.dataService.dataConfig.conf[pin].active) {
            this.dataService.dataConfig.conf[pin].active = true;
            // Crida HTTP per engegar el LED que està en el PIN: <pin>
            var crida = this.dataService.serverIP + "on?pins=" + pin;
            // Make the HTTP request:
            this.httpclient.get(crida)
                .subscribe(function (data) {
                console.log("Resposta rebuda");
            });
        }
        else {
            this.dataService.dataConfig.conf[pin].active = false;
            // Crida HTTP per apagar el LED que està en el PIN: <pin>
            var crida = this.dataService.serverIP + "off?pins=" + pin;
            // Make the HTTP request:
            this.httpclient.get(crida)
                .subscribe(function (data) {
                console.log("Resposta rebuda");
            });
        }
    };
    ControlComponent.prototype.onProgram = function (crida) {
        console.log(crida);
        this.httpclient.get(crida)
            .subscribe(function (data) {
            console.log("Resposta rebuda");
        });
    };
    ControlComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    Object.defineProperty(ControlComponent.prototype, "data", {
        get: function () {
            return this.dataService.dataConfig;
        },
        enumerable: true,
        configurable: true
    });
    return ControlComponent;
}());
ControlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-control',
        template: __webpack_require__("../../../../../src/app/components/control/control.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/control/control.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_config__["a" /* DataConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_config__["a" /* DataConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material_snack_bar__["b" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material_snack_bar__["b" /* MatSnackBar */]) === "function" && _c || Object])
], ControlComponent);

var _a, _b, _c;
//# sourceMappingURL=control.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"custom-footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <i class=\"material-icons\">copyright</i> <span class=\"footer-text\"> CAMP DE TREBALL MAKER 2017: Arnau, David, Giancarlo, Guillem C, Guillem R, Gemma, Marc i Marta.  </span>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-footer {\n  background-color: #bc477b;\n  color: #fff;\n  font-weight: 400;\n  height: 30px;\n  width: 100%; }\n\n.footer-text {\n  font-size: 12px;\n  font-family: 'Roboto', sans-serif; }\n\n.custom-footer i {\n  margin-right: 5px;\n  font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/makers/makers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-typography\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"space-around center\" style=\"line-height:150%; font-size: 16px;\">\n    <p style=\"margin: 40px; margin-left:20px;\"> <img src=\"./assets/images/jpg/makers.jpg\"> </p>\n\n    <div>\n        <p>Nosaltres som la Marta, en Guillem R, en Guillem C, en Giancarlo,\n            l’Arnau, en David, en Marc i la Gemma, i vam fer el Camp de Treball Maker durant l'estiu 2017.\n\n            En aquest camp vam crear un nou sistema per al control de les llums\n            d’un teatre.\n\n            Controlem les llums fent servir una aplicació web programada amb Angular 2 fent ús del Material Design.\n            Aquesta aplicació web es comunica amb una Raspberry que controla els relés per engegar i apagar les llums.\n\n            Ens hem repartit la feina en dues parts:\n        </p>\n        <ul>\n            <li>la instal·lació elèctrica</li>\n            <li>la programació web i del servidor de la Raspberry</li>\n        </ul>\n        <p>Vam tenir aquesta idea ja que en el nostre col·legi, hi ha un quadre de llums\n            i el voliem modernitzar.\n            El camp de treball ha durat 3 setmanes, i aquest en ha donat una oportunitat per\n            aprendre i mouren’s millor per aquest món tecnològic.\n        </p>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/makers/makers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 450px;\n  text-align: center; }\n\np {\n  text-align: justify; }\n\n.md-grid-tile {\n  background-color: blue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/makers/makers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_config__ = __webpack_require__("../../../../../src/app/services/data-config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MakersComponent = (function () {
    function MakersComponent(dataService) {
        this.dataService = dataService;
    }
    MakersComponent.prototype.ngOnInit = function () {
        this.dataService.currentPage = "QUI SÓN ELS MAKERS?";
    };
    return MakersComponent;
}());
MakersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'makers',
        template: __webpack_require__("../../../../../src/app/components/makers/makers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/makers/makers.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_config__["a" /* DataConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_config__["a" /* DataConfigService */]) === "function" && _a || Object])
], MakersComponent);

var _a;
//# sourceMappingURL=makers.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/output/output.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"custom-div\" *ngIf = \"currentDevice.type == 'LED'; else other_content\">\n    <p>\n        <svg [ngClass] = \"toggleColor()\" id=\"Objects\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 70.594 105.2785\"><title>LED</title><path  d=\"M435.152,96.6214a35.297,35.297,0,1,0-70.594,0,34.8358,34.8358,0,0,0,7.55579,21.7748,134.026,134.026,0,0,1,9.6457,14.033v21.467a3.53363,3.53363,0,0,0,3.5349,3.5336h4.0105v1.7103a7.46187,7.46187,0,0,0,7.462,7.462h6.1765a7.4617,7.4617,0,0,0,7.4618-7.462v-1.7103h4.0105a3.53386,3.53386,0,0,0,3.5351-3.5336V132.4585a131.76126,131.76126,0,0,1,9.6425-14.0609A34.83537,34.83537,0,0,0,435.152,96.6214Zm-40.41911,31.279-6.1118-26.6433,3.6715-2.263,4.5389,4.2676a1.83179,1.83179,0,0,0,1.325.4769,1.77441,1.77441,0,0,0,1.2533-.6422l3.9208-4.7802,2.285,4.464a1.76945,1.76945,0,0,0,1.5731.9613,1.74432,1.74432,0,0,0,.67631-0.1344l2.96879-1.2318-5.8567,25.5251h-10.2442Zm16.1492,7.0689v5.9291H388.828v-5.9291h22.05409ZM388.828,150.3619v-5.9293h22.05409v5.9293H388.828Zm23.58329-22.4615h-1.9986l6.6914-29.16a2.64958,2.64958,0,1,0-5.1653-1.1835l-0.1352.5871-3.7859,1.5737L405.25,94.3042a1.77345,1.77345,0,0,0-1.388-.9508,1.74046,1.74046,0,0,0-1.55251.6347l-4.4319,5.4031-4.1454-3.8982a1.77014,1.77014,0,0,0-2.1365-.2174l-3.8096,2.3437-0.0146-.0639a2.65222,2.65222,0,0,0-5.1699,1.1871l6.6931,29.1579h-1.9986a140.096,140.096,0,0,0-9.6324-13.8812,27.83507,27.83507,0,0,1-6.037-17.3978,28.2283,28.2283,0,1,1,56.4566,0,27.834,27.834,0,0,1-6.0399,17.4001A139.52658,139.52658,0,0,0,412.41129,127.9004Z\" transform=\"translate(-364.558 -61.3236)\"/></svg>\n    </p>\n    <p class=\"title\">{{currentDevice.name}}</p>\n    <p class=\"subtitle\">{{currentDevice.description}}</p>\n</div>\n\n<!-- <mat-template #other_content>\n    <p>\n        <img class =\"icon\" src='./assets/images/svg/ic_help_outline_black_24px.svg'  onmouseover=\"this.src='./assets/images/svg/ic_help_outline_black_24px.svg';\"  onmouseout=\"this.src='./assets/images/svg/ic_help_outline_black_24px.svg';\"/>\n    </p>\n    <p class=\"title\">{{currentDevice.name}}</p>\n    <p class=\"subtitle\">{{currentDevice.description}}</p>\n</mat-template> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/output/output.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-div {\n  min-height: 175px;\n  float: center;\n  width: 100px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  margin-left: 10px;\n  margin-right: 10px; }\n\nsvg {\n  width: 80px; }\n\n.active {\n  fill: rgba(43, 189, 126, 0.54); }\n\n.inactive {\n  fill: rgba(0, 0, 0, 0.54); }\n\n.custom-div:hover {\n  color: #9fffe0; }\n\np {\n  text-align: center;\n  margin: 0; }\n\n.title {\n  color: rgba(0, 0, 0, 0.54);\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px; }\n\n.subtitle {\n  color: rgba(0, 0, 0, 0.38);\n  font-size: 14px;\n  font-family: 'Roboto', sans-serif; }\n\n.icon {\n  height: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/output/output.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_output_device__ = __webpack_require__("../../../../../src/app/classes/output-device.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OutputComponent = (function () {
    function OutputComponent() {
        this.currentDevice = { typeTag: "LED", outputPin: "A13", name: "PIN:", description: "hola què tal?", active: false };
        this.changeColor = true;
        this.currentColor = "rgba(0, 0, 0, 0.54)";
    }
    OutputComponent.prototype.ngOnInit = function () {
        console.log(this.currentDevice);
    };
    OutputComponent.prototype.ngOnChange = function () {
        console.log(this.currentDevice);
    };
    OutputComponent.prototype.toggleColor = function () {
        console.log("Change color");
        if (this.changeColor) {
            if (this.currentColor == "rgba(0, 0, 0, 0.54)") {
                this.currentColor = "rgba(43, 189, 126, 0.54)";
            }
            else {
                this.currentColor = "rgba(0, 0, 0, 0.54)";
            }
        }
    };
    return OutputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__classes_output_device__["a" /* OutputDevice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__classes_output_device__["a" /* OutputDevice */]) === "function" && _a || Object)
], OutputComponent.prototype, "currentDevice", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], OutputComponent.prototype, "changeColor", void 0);
OutputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'config-output',
        template: __webpack_require__("../../../../../src/app/components/output/output.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/output/output.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], OutputComponent);

var _a;
//# sourceMappingURL=output.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/program/program.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"custom-div\" >\n    <p>\n          <i [ngClass] = \"toggleColor()\" class=\"material-icons program\">device_hub</i>\n    </p>\n    <p class=\"title\">{{currentProgram.name}}</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/program/program.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-div {\n  min-height: 175px;\n  float: center;\n  width: 100px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.program {\n  font-size: 80px; }\n\n.active {\n  fill: rgba(43, 189, 126, 0.54); }\n\n.inactive {\n  fill: rgba(0, 0, 0, 0.54); }\n\n.custom-div:hover {\n  color: #9fffe0; }\n\np {\n  text-align: center;\n  margin: 0; }\n\n.title {\n  color: rgba(0, 0, 0, 0.54);\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px; }\n\n.subtitle {\n  color: rgba(0, 0, 0, 0.38);\n  font-size: 14px;\n  font-family: 'Roboto', sans-serif; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/program/program.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_program_query__ = __webpack_require__("../../../../../src/app/classes/program-query.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramComponent = (function () {
    function ProgramComponent() {
        this.changeColor = true;
        this.currentColor = "rgba(0, 0, 0, 0.54)";
    }
    ProgramComponent.prototype.ngOnInit = function () {
        console.log(this.currentProgram);
    };
    ProgramComponent.prototype.toggleColor = function () {
        return "inactive";
        // if (this.changeColor) {
        //     if (this.currentProgram)   return "inactive";
        //     else                             return "inactive";
        // } else return "inactive"
    };
    return ProgramComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__classes_program_query__["a" /* Program */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__classes_program_query__["a" /* Program */]) === "function" && _a || Object)
], ProgramComponent.prototype, "currentProgram", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], ProgramComponent.prototype, "changeColor", void 0);
ProgramComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-program',
        template: __webpack_require__("../../../../../src/app/components/program/program.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/program/program.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProgramComponent);

var _a;
//# sourceMappingURL=program.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/programable/programable.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select placeholder=\"Favorite food\">\n    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n      {{ food.viewValue }}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "../../../../../src/app/components/programable/programable.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/programable/programable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_config__ = __webpack_require__("../../../../../src/app/services/data-config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramableComponent = (function () {
    function ProgramableComponent(dataService) {
        this.dataService = dataService;
    }
    ProgramableComponent.prototype.ngOnInit = function () {
        this.dataService.currentPage = "PROGRAMACIÓ D'ESDEVENIMENTS";
    };
    return ProgramableComponent;
}());
ProgramableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'programable',
        template: __webpack_require__("../../../../../src/app/components/programable/programable.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/programable/programable.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_config__["a" /* DataConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_config__["a" /* DataConfigService */]) === "function" && _a || Object])
], ProgramableComponent);

var _a;
//# sourceMappingURL=programable.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/get-keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetKeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GetKeysPipe = (function () {
    function GetKeysPipe() {
    }
    GetKeysPipe.prototype.transform = function (value, args) {
        return Object.keys(value); //.map(key => value[key]);
    };
    return GetKeysPipe;
}());
GetKeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'getKeys'
    })
], GetKeysPipe);

//# sourceMappingURL=get-keys.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/data-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__ = __webpack_require__("../../../../rxjs/add/operator/timeout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataConfigService = (function () {
    function DataConfigService(httpclient) {
        this.httpclient = httpclient;
        this.serverIP = "http://lights-controller.local:5000/"; // Server IP
        this.currentPage = "TAULA DE CONTROL";
        this.debug = true;
    }
    DataConfigService.prototype.getLocalConfig = function () {
        this.dataConfig = {
            "typeTags": ["LED"],
            "conf": {
                "33": { "active": false, "description": "Vermell", "outputPin": "33", "name": "Mig", "type": "LED" },
                "31": { "active": true, "description": "Dreta", "outputPin": "31", "name": "Dalt", "type": "LED" },
                "37": { "active": false, "description": "Vermell", "outputPin": "37", "name": "Mig", "type": "LED" },
                "29": { "active": false, "outputPin": "29", "description": "dreta", "name": "Baix", "type": "LED" },
                "35": { "active": false, "description": "Vermell", "outputPin": "29", "name": "Mig", "type": "LED" },
                "3": { "active": true, "outputPin": "3", "description": "Esquerre", "name": "Dalt", "type": "LED" },
                "5": { "active": false, "description": "Esquerre", "outputPin": "5", "name": "Baix", "type": "LED" },
                "7": { "active": false, "description": "Vermell", "outputPin": "7", "name": "Mig", "type": "LED" }
            },
            "programs": [
                { "htmlQuery": "http://lights-controller.local:5000/rafaga?pins=3&pins=5&pins=7&pins=29&pins=31&delay=0.5&times=20", "name": "Rafaga", "description": "Rafaga senzilla" },
                { "htmlQuery": "http://lights-controller.local:5000/circular?delay=0.5&times=5", "name": "Circular", "description": "Circular senzill" },
                { "htmlQuery": "http://lights-controller.local:5000/off?pins=3&pins=5&pins=7&pins=29&pins=31", "name": "Apaga tots", "description": "Apaga tots" },
                { "htmlQuery": "http://lights-controller.local:5000/on?pins=3&pins=5&pins=7&pins=29&pins=31", "name": "Engega tots", "description": "Engega tots" },
                { "htmlQuery": "http://lights-controller.local:5000/updown?delay=0.25&times=5", "name": "Engega tots", "description": "Engega tots" }
            ]
        };
    };
    // Get configuration JSON from server
    DataConfigService.prototype.getRemoteConfig = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var promise = this.httpclient.get(this.serverIP + "config", { headers: headers }).map(function (res) { return res.json(); }).toPromise();
        promise
            .then(function (config) {
            _this.dataConfig = config; // <--- THIS RESOLVES AFTER
            console.log(_this.dataConfig);
        });
        return promise;
    };
    // Update configuration JSON from server
    DataConfigService.prototype.putRemoteConfig = function () {
        console.log("Update config");
        this.httpclient.post(this.serverIP + "update", this.dataConfig)
            .subscribe();
    };
    // Update default configuration JSON from server
    DataConfigService.prototype.defaultRemoteConfig = function () {
        // Get default configuration from server
    };
    // Export configuration JSON
    DataConfigService.prototype.exportConfig = function () {
        // Download file
    };
    // Import configuration JSON
    DataConfigService.prototype.importConfig = function (data) {
    };
    return DataConfigService;
}());
DataConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DataConfigService);

var _a;
//# sourceMappingURL=data-config.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map