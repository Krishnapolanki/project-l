(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MyWork\Project L\project-l\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CqDP":
/*!************************************************************!*\
  !*** ./src/app/core/components/layout/layout.component.ts ***!
  \************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = ["sidebar"];
function LayoutComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navMenu_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", navMenu_r2.routePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](navMenu_r2.iconClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](navMenu_r2.labelClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](navMenu_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](navMenu_r2.toolTipClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](navMenu_r2.toolTip);
} }
class LayoutComponent {
    constructor() {
        this.navMenus = [
            {
                iconClass: 'bx bx-grid-alt',
                toolTip: 'Dashboard',
                routePath: '',
                label: 'Dashboard',
                labelClass: 'links_name',
                toolTipClass: 'tooltip',
            },
            {
                iconClass: 'bx bx-user',
                toolTip: 'User',
                routePath: 'users',
                label: 'User',
                labelClass: 'links_name',
                toolTipClass: 'tooltip',
            },
            {
                iconClass: 'bx bx-chat',
                toolTip: 'Messages',
                routePath: '',
                label: 'Messages',
                labelClass: 'links_name',
                toolTipClass: 'tooltip',
            },
            {
                iconClass: 'bx bx-pie-chart-alt-2',
                toolTip: 'Analytics',
                routePath: '',
                label: 'Analytics',
                labelClass: 'links_name',
                toolTipClass: 'tooltip',
            },
            {
                iconClass: 'bx bx-folder',
                toolTip: 'Files',
                routePath: '',
                label: 'File Manager',
                labelClass: 'links_name',
                toolTipClass: 'tooltip',
            },
            {
                iconClass: 'bx bx-cart-alt',
                toolTip: 'Order',
                routePath: '',
                label: 'Order',
                labelClass: 'links_name',
                toolTipClass: 'tooltip',
            },
            {
                iconClass: 'bx bx-heart',
                toolTip: 'Saved',
                routePath: '',
                label: 'Saved',
                labelClass: 'links_name',
                toolTipClass: 'tooltip',
            },
            {
                iconClass: 'bx bx-cog',
                toolTip: 'Setting',
                routePath: '',
                label: 'Setting',
                labelClass: 'links_name',
                toolTipClass: 'tooltip',
            },
        ];
    }
    ngOnInit() { }
    toggleNavigationMenu() {
        this.sidebar.nativeElement.classList.toggle('open');
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], viewQuery: function LayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidebar = _t.first);
    } }, decls: 25, vars: 1, consts: [[1, "sidebar"], ["sidebar", ""], [1, "logo-details"], [1, "bx", "bxl-c-plus-plus", "icon"], [1, "logo_name"], ["id", "btn", 1, "bx", "bx-menu", 3, "click"], [1, "nav-list"], [1, "bx", "bx-search", 3, "click"], ["type", "text", "placeholder", "Search..."], [1, "tooltip"], [4, "ngFor", "ngForOf"], [1, "profile"], [1, "profile-details"], ["src", "./assets/images/default_profile.jpg", "alt", "profileImg"], [1, "name_job"], [1, "name"], [1, "job"], ["id", "log_out", 1, "bx", "bx-log-out"], [1, "home-section"], [3, "routerLink"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Project L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_i_click_6_listener() { return ctx.toggleNavigationMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_i_click_9_listener() { return ctx.toggleNavigationMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LayoutComponent_li_13_Template, 7, 12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Krishna Polanki");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Full stack Dev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navMenus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\");\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n.home-section[_ngcontent-%COMP%] {\n  position: relative;\n  max-height: 100vh;\n  top: 0;\n  left: 78px;\n  width: calc(100% - 78px);\n  transition: all 0.5s ease;\n  z-index: 2;\n}\n.home-section[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #11101d;\n  font-size: 25px;\n  font-weight: 500;\n  margin: 18px;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 78px;\n  background: #11101d;\n  padding: 6px 14px;\n  z-index: 99;\n  transition: all 0.5s ease;\n}\n.sidebar.open[_ngcontent-%COMP%] {\n  width: 250px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: all 0.5s ease;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n  font-weight: 600;\n  opacity: 0;\n  transition: all 0.5s ease;\n}\n.sidebar.open[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .sidebar.open[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   #btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n  font-size: 22px;\n  transition: all 0.4s ease;\n  font-size: 23px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n.sidebar.open[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   #btn[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.sidebar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  height: 60px;\n  min-width: 50px;\n  font-size: 28px;\n  text-align: center;\n  line-height: 60px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 100%;\n}\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 8px 0;\n  list-style: none;\n}\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  left: calc(100% + 15px);\n  z-index: 3;\n  background: #fff;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);\n  padding: 6px 12px;\n  border-radius: 4px;\n  font-size: 15px;\n  font-weight: 400;\n  opacity: 0;\n  pointer-events: none;\n  transition: 0s;\n}\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transition: all 0.4s ease;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.sidebar.open[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 400;\n  outline: none;\n  height: 50px;\n  width: 100%;\n  width: 50px;\n  border: none;\n  border-radius: 12px;\n  transition: all 0.5s ease;\n  background: #1d1b31;\n}\n.sidebar.open[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0 20px 0 50px;\n  width: 100%;\n}\n.sidebar[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  font-size: 22px;\n  background: #1d1b31;\n  color: #fff;\n}\n.sidebar.open[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%]:hover {\n  background: #1d1b31;\n  color: #fff;\n}\n.sidebar[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #11101d;\n}\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  border-radius: 12px;\n  align-items: center;\n  text-decoration: none;\n  transition: all 0.4s ease;\n  background: #11101d;\n}\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #fff;\n}\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 15px;\n  font-weight: 400;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  transition: 0.4s;\n}\n.sidebar.open[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .links_name[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transition: all 0.5s ease;\n  color: #11101d;\n}\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 50px;\n  line-height: 50px;\n  font-size: 18px;\n  border-radius: 12px;\n}\n.sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 60px;\n  width: 78px;\n  left: 0;\n  bottom: -8px;\n  padding: 10px 14px;\n  background: #1d1b31;\n  transition: all 0.5s ease;\n  overflow: hidden;\n}\n.sidebar.open[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%] {\n  width: 250px;\n}\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n}\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 45px;\n  object-fit: cover;\n  border-radius: 6px;\n  margin-right: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 400;\n  color: #fff;\n  white-space: nowrap;\n}\n.sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   #log_out[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n  background: #1d1b31;\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  border-radius: 0px;\n  transition: all 0.5s ease;\n}\n.sidebar.open[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   #log_out[_ngcontent-%COMP%] {\n  width: 50px;\n  background: none;\n}\n.sidebar.open[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n  left: 250px;\n  width: calc(100% - 250px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDUSx5R0FBQTtBQURSLHFCQUFBO0FBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFFRjtBQUNBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFFRjtBQUFBO0VBQ0UsWUFBQTtBQUdGO0FBREE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFJRjtBQUZBO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0FBS0Y7QUFIQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFNRjtBQUpBOztFQUVFLFVBQUE7QUFPRjtBQUxBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBUUY7QUFOQTtFQUNFLGlCQUFBO0FBU0Y7QUFQQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBVUY7QUFSQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQVdGO0FBVEE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQVlGO0FBVkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUFhRjtBQVhBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFjRjtBQVpBO0VBQ0UsYUFBQTtBQWVGO0FBYkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFnQkY7QUFkQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQWlCRjtBQWZBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQWtCRjtBQWhCQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQW1CRjtBQWpCQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQW9CRjtBQWxCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFxQkY7QUFuQkE7RUFDRSxnQkFBQTtBQXNCRjtBQXBCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBdUJGO0FBckJBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0FBd0JGO0FBdEJBOztFQUVFLHlCQUFBO0VBQ0EsY0FBQTtBQXlCRjtBQXZCQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQTBCRjtBQXhCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUEyQkY7QUF6QkE7RUFDRSxZQUFBO0FBNEJGO0FBMUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUE2QkY7QUEzQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQThCRjtBQTVCQTs7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUErQkY7QUE3QkE7RUFDRSxlQUFBO0FBZ0NGO0FBOUJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQWlDRjtBQS9CQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQWtDRjtBQWhDQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQW1DRiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHb29nbGUgRm9udCBMaW5rICovXHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4uaG9tZS1zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDc4cHg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDc4cHgpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmhvbWUtc2VjdGlvbiAudGV4dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiAjMTExMDFkO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMThweDtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDc4cHg7XHJcbiAgYmFja2dyb3VuZDogIzExMTAxZDtcclxuICBwYWRkaW5nOiA2cHggMTRweDtcclxuICB6LWluZGV4OiA5OTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcbi5zaWRlYmFyLm9wZW4ge1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG4uc2lkZWJhciAubG9nby1kZXRhaWxzIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2lkZWJhciAubG9nby1kZXRhaWxzIC5pY29uIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuLnNpZGViYXIgLmxvZ28tZGV0YWlscyAubG9nb19uYW1lIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuLnNpZGViYXIub3BlbiAubG9nby1kZXRhaWxzIC5pY29uLFxyXG4uc2lkZWJhci5vcGVuIC5sb2dvLWRldGFpbHMgLmxvZ29fbmFtZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uc2lkZWJhciAubG9nby1kZXRhaWxzICNidG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG4uc2lkZWJhci5vcGVuIC5sb2dvLWRldGFpbHMgI2J0biB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnNpZGViYXIgaSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1pbi13aWR0aDogNTBweDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlzdCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnNpZGViYXIgbGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLnNpZGViYXIgbGkgLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0yMHB4O1xyXG4gIGxlZnQ6IGNhbGMoMTAwJSArIDE1cHgpO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiAwcztcclxufVxyXG4uc2lkZWJhciBsaTpob3ZlciAudG9vbHRpcCB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG4uc2lkZWJhci5vcGVuIGxpIC50b29sdGlwIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zaWRlYmFyIGlucHV0IHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB3aWR0aDogNTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIGJhY2tncm91bmQ6ICMxZDFiMzE7XHJcbn1cclxuLnNpZGViYXIub3BlbiBpbnB1dCB7XHJcbiAgcGFkZGluZzogMCAyMHB4IDAgNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uc2lkZWJhciAuYngtc2VhcmNoIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGJhY2tncm91bmQ6ICMxZDFiMzE7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnNpZGViYXIub3BlbiAuYngtc2VhcmNoOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMWQxYjMxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5zaWRlYmFyIC5ieC1zZWFyY2g6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgY29sb3I6ICMxMTEwMWQ7XHJcbn1cclxuLnNpZGViYXIgbGkgYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIGJhY2tncm91bmQ6ICMxMTEwMWQ7XHJcbn1cclxuLnNpZGViYXIgbGkgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4uc2lkZWJhciBsaSBhIC5saW5rc19uYW1lIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG4uc2lkZWJhci5vcGVuIGxpIGEgLmxpbmtzX25hbWUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbn1cclxuLnNpZGViYXIgbGkgYTpob3ZlciAubGlua3NfbmFtZSxcclxuLnNpZGViYXIgbGkgYTpob3ZlciBpIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIGNvbG9yOiAjMTExMDFkO1xyXG59XHJcbi5zaWRlYmFyIGxpIGkge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG4uc2lkZWJhciBsaS5wcm9maWxlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA3OHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAtOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICBiYWNrZ3JvdW5kOiAjMWQxYjMxO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc2lkZWJhci5vcGVuIGxpLnByb2ZpbGUge1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG4uc2lkZWJhciBsaSAucHJvZmlsZS1kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuLnNpZGViYXIgbGkgaW1nIHtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uc2lkZWJhciBsaS5wcm9maWxlIC5uYW1lLFxyXG4uc2lkZWJhciBsaS5wcm9maWxlIC5qb2Ige1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnNpZGViYXIgbGkucHJvZmlsZSAuam9iIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnNpZGViYXIgLnByb2ZpbGUgI2xvZ19vdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgYmFja2dyb3VuZDogIzFkMWIzMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuLnNpZGViYXIub3BlbiAucHJvZmlsZSAjbG9nX291dCB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4uc2lkZWJhci5vcGVuIH4gLmhvbWUtc2VjdGlvbiB7XHJcbiAgbGVmdDogMjUwcHg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1MHB4KTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/components/layout/layout.component */ "CqDP");


class AppComponent {
    constructor() {
        this.title = 'project-l';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layout");
    } }, directives: [_core_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]] }); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout/layout.component */ "CqDP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | features-dashboard-dashboard-module */ "features-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./features/dashboard/dashboard.module */ "IAk5")).then((m) => m.DashboardModule),
    },
    {
        path: 'users',
        loadChildren: () => __webpack_require__.e(/*! import() | features-users-users-module */ "features-users-users-module").then(__webpack_require__.bind(null, /*! ./features/users/users.module */ "qRw5")).then((m) => m.UsersModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map