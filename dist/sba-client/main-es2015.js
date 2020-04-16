(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");



class AppComponent {
    constructor() {
        this.title = 'spa-client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "app"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_content_content_component__WEBPACK_IMPORTED_MODULE_1__["ContentComponent"]], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow: hidden;\n}\n\n.vertical-align[_ngcontent-%COMP%], .app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.word[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 24px;\n  min-height: 24px;\n  min-width: 0.1px;\n  color: #323232;\n  font-family: \"Courier\";\n  line-break: loose;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 14px;\n  height: 18px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  height: 6px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  -webkit-border-radius: 7px;\n  background-color: #f57364;\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::-webkit-placeholder {\n  color: #949494;\n}\n\n[contenteditable][_ngcontent-%COMP%] {\n  outline: 0px solid transparent;\n}\n\n.app[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  background-image: url('background.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZsb3NrYXJhbGlzL0Rlc2t0b3Avc2JhX2Zyb250ZW5kL3NyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Bhdmxvc2thcmFsaXMvRGVza3RvcC9zYmFfZnJvbnRlbmQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QUR5QkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ3RCSjs7QUR5QkE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FkSTtFQWVKLHNCQXhCSTtFQXlCSixpQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBbENLO0VBbUNMLGtHQUFBO0FDdkJKOztBRDBCQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSw2QkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxtQkFBQTtBQ3ZCSjs7QURzQkE7RUFDSSxtQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxtQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxjQUFBO0FDdkJKOztBRDBCQTtFQUNJLDhCQUFBO0FDdkJKOztBQ3pEQTtFQUdJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FEMERKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKiB7XG4vLyAgICAgei1pbmRleDogLTI7XG4vLyB9XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4kYnJlYWtwb2ludEE6IDEyMDBweDtcbiRicmVha3BvaW50QjogOTkycHg7XG4kYnJlYWtwb2ludEM6IDc2OHB4O1xuJGJyZWFrcG9pbnREOiA1NzZweDtcbiRicmVha3BvaW50RTogNDk5cHg7XG4kYnJlYWtwb2ludEY6IDM4MHB4O1xuXG4kZm9udEE6ICdWZXJkYW5hJztcbiRmb250QjogJ0NvdXJpZXInO1xuXG4kYm94U2hhZG93OiAgMCAxLjVweCA3LjVweCAxLjVweCByZ2JhKDAsMCwwLC4yNSk7XG5cbiRvcmFuZ2U6IHJnYigyNDUsIDExNSwgMTAwKTtcbiR5ZWxsb3c6IHJnYigyNDAsIDIxNSwgMTAwKTtcbiRwaW5rOiByZ2IoMjQwLCAxNDUsIDE2MCk7XG4kcmVkOiByZ2IoMjM1LCA4MCwgMTAwKTtcbiR3aGl0ZTogcmdiKDI1MCwyNTAsMjUwKTtcbiRibGFjazogcmdiKDUwLDUwLDUwKTtcblxuLnZlcnRpY2FsLWFsaWduIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud29yZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMjRweDsgXG4gICAgbWluLWhlaWdodDogMjRweDtcblxuICAgIG1pbi13aWR0aDogLjFweDtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udEI7XG4gICAgbGluZS1icmVhazogbG9vc2U7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGhlaWdodDogMThweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAtMXB4IC0xcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG46OnNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRlbigkcGluaywgMTIuNSUpOyBcbn1cblxuOjotbW96LXNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRlbigkcGluaywgMTIuNSUpOyBcbn1cblxuOjotd2Via2l0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogZGFya2VuKCR3aGl0ZSwgNDAlKTtcbn1cblxuW2NvbnRlbnRlZGl0YWJsZV0ge1xuICAgIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfSIsImJvZHkge1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi52ZXJ0aWNhbC1hbGlnbiwgLmFwcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud29yZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyNHB4O1xuICBtaW4taGVpZ2h0OiAyNHB4O1xuICBtaW4td2lkdGg6IDAuMXB4O1xuICBjb2xvcjogIzMyMzIzMjtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllclwiO1xuICBsaW5lLWJyZWFrOiBsb29zZTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTczNjQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2Y4YzlkMDtcbn1cblxuOjotbW96LXNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmOGM5ZDA7XG59XG5cbjo6LXdlYmtpdC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTQ5NDk0O1xufVxuXG5bY29udGVudGVkaXRhYmxlXSB7XG4gIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmFwcCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9iYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufSIsIkBpbXBvcnQgJy4uL3N0eWxlcy5zY3NzJztcblxuLmFwcCB7XG4gICAgQGV4dGVuZCAudmVydGljYWwtYWxpZ247XG5cbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmFja2dyb3VuZC5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button/button.component */ "./src/app/button/button.component.ts");
/* harmony import */ var _suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./suggestion/suggestion.component */ "./src/app/suggestion/suggestion.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/popup/popup.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"],
        _button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"],
        _suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_8__["SuggestionComponent"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"],
        _popup_popup_component__WEBPACK_IMPORTED_MODULE_10__["PopupComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"],
                    _button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"],
                    _suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_8__["SuggestionComponent"],
                    _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"],
                    _popup_popup_component__WEBPACK_IMPORTED_MODULE_10__["PopupComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/button/button.component.ts":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ButtonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function ButtonComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r19.buttonType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r19.buttonType, " ");
} }
function ButtonComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r21.buttonType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.buttonType, " ");
} }
function ButtonComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r23.buttonType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r23.buttonType, " ");
} }
class ButtonComponent {
    constructor() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    callParent() {
        this.click.emit();
    }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { buttonType: "buttonType" }, outputs: { click: "click" }, decls: 7, vars: 1, consts: [[4, "ngTemplateOutlet"], ["check", ""], ["copy", ""], ["erase", ""], [1, "button"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ButtonComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_ng_template_1_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ButtonComponent_ng_template_3_Template, 2, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ButtonComponent_ng_template_5_Template, 2, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.buttonType["check"] ? _r18 : ctx.buttonType["copy"] ? _r20 : _r22);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow: hidden;\n}\n\n.vertical-align[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.word[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 24px;\n  min-height: 24px;\n  min-width: 0.1px;\n  color: #323232;\n  font-family: \"Courier\";\n  line-break: loose;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 14px;\n  height: 18px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  height: 6px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  -webkit-border-radius: 7px;\n  background-color: #f57364;\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::-webkit-placeholder {\n  color: #949494;\n}\n\n[contenteditable][_ngcontent-%COMP%] {\n  outline: 0px solid transparent;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 40px;\n  background-color: #323232;\n  border-radius: 10px;\n  font-family: \"Verdana\";\n  font-size: 15.5px;\n  font-weight: 600;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  text-transform: capitalize;\n  cursor: pointer;\n  line-height: 12px;\n}\n\n@media (max-width: 499px) {\n  .button[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 68px;\n    height: 34px;\n  }\n}\n\n@media (max-width: 380px) {\n  .button[_ngcontent-%COMP%] {\n    font-size: 12px;\n    height: 30px;\n    width: 60px;\n  }\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #3f3f3f;\n}\n\n.check[_ngcontent-%COMP%] {\n  color: #f0d764;\n}\n\n.copy[_ngcontent-%COMP%] {\n  color: #f091a0;\n}\n\n.erase[_ngcontent-%COMP%] {\n  color: #eb5064;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZsb3NrYXJhbGlzL0Rlc2t0b3Avc2JhX2Zyb250ZW5kL3NyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9wYXZsb3NrYXJhbGlzL0Rlc2t0b3Avc2JhX2Zyb250ZW5kL3NyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRHlCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDdEJKOztBRHlCQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQWRJO0VBZUosc0JBeEJJO0VBeUJKLGlCQUFBO0FDdkJKOztBRDBCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDdkJKOztBRDBCQTtFQUNJLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFsQ0s7RUFtQ0wsa0dBQUE7QUN2Qko7O0FEMEJBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDdkJKOztBRDBCQTtFQUNJLDZCQUFBO0FDdkJKOztBRDBCQTtFQUNJLG1CQUFBO0FDdkJKOztBRHNCQTtFQUNJLG1CQUFBO0FDdkJKOztBRDBCQTtFQUNJLG1CQUFBO0FDdkJKOztBRDBCQTtFQUNJLGNBQUE7QUN2Qko7O0FEMEJBO0VBQ0ksOEJBQUE7QUN2Qko7O0FDeERBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkZvQkk7RUVuQkosbUJBQUE7RUFDQSxzQkZRSTtFRVBKLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUQyREo7O0FDMURJO0VBZko7SUFnQlEsZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VENkROO0FBQ0Y7O0FDNURJO0VBcEJKO0lBcUJRLGVBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFRCtETjtBQUNGOztBQzlESTtFQUNJLHlCQUFBO0FEZ0VSOztBQzVEQTtFQUNJLGNGWks7QUMyRVQ7O0FDNURBO0VBQ0ksY0ZmRztBQzhFUDs7QUM1REE7RUFDSSxjRmxCRTtBQ2lGTiIsImZpbGUiOiJzcmMvYXBwL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqIHtcbi8vICAgICB6LWluZGV4OiAtMjtcbi8vIH1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiRicmVha3BvaW50QTogMTIwMHB4O1xuJGJyZWFrcG9pbnRCOiA5OTJweDtcbiRicmVha3BvaW50QzogNzY4cHg7XG4kYnJlYWtwb2ludEQ6IDU3NnB4O1xuJGJyZWFrcG9pbnRFOiA0OTlweDtcbiRicmVha3BvaW50RjogMzgwcHg7XG5cbiRmb250QTogJ1ZlcmRhbmEnO1xuJGZvbnRCOiAnQ291cmllcic7XG5cbiRib3hTaGFkb3c6ICAwIDEuNXB4IDcuNXB4IDEuNXB4IHJnYmEoMCwwLDAsLjI1KTtcblxuJG9yYW5nZTogcmdiKDI0NSwgMTE1LCAxMDApO1xuJHllbGxvdzogcmdiKDI0MCwgMjE1LCAxMDApO1xuJHBpbms6IHJnYigyNDAsIDE0NSwgMTYwKTtcbiRyZWQ6IHJnYigyMzUsIDgwLCAxMDApO1xuJHdoaXRlOiByZ2IoMjUwLDI1MCwyNTApO1xuJGJsYWNrOiByZ2IoNTAsNTAsNTApO1xuXG4udmVydGljYWwtYWxpZ24ge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53b3JkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAyNHB4OyBcbiAgICBtaW4taGVpZ2h0OiAyNHB4O1xuXG4gICAgbWluLXdpZHRoOiAuMXB4O1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICRmb250QjtcbiAgICBsaW5lLWJyZWFrOiBsb29zZTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRwaW5rLCAxMi41JSk7IFxufVxuXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRwaW5rLCAxMi41JSk7IFxufVxuXG46Oi13ZWJraXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBkYXJrZW4oJHdoaXRlLCA0MCUpO1xufVxuXG5bY29udGVudGVkaXRhYmxlXSB7XG4gICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9IiwiYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnZlcnRpY2FsLWFsaWduIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53b3JkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIG1pbi13aWR0aDogMC4xcHg7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyXCI7XG4gIGxpbmUtYnJlYWs6IGxvb3NlO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMThweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1NzM2NDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAtMXB4IC0xcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZjhjOWQwO1xufVxuXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2Y4YzlkMDtcbn1cblxuOjotd2Via2l0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5NDk0OTQ7XG59XG5cbltjb250ZW50ZWRpdGFibGVdIHtcbiAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uYnV0dG9uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xuICBmb250LXNpemU6IDE1LjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDk5cHgpIHtcbiAgLmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiA2OHB4O1xuICAgIGhlaWdodDogMzRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XG4gIC5idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gIH1cbn1cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZjNmO1xufVxuXG4uY2hlY2sge1xuICBjb2xvcjogI2YwZDc2NDtcbn1cblxuLmNvcHkge1xuICBjb2xvcjogI2YwOTFhMDtcbn1cblxuLmVyYXNlIHtcbiAgY29sb3I6ICNlYjUwNjQ7XG59IiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnO1xuXG5cbi5idXR0b24ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LWZhbWlseTogJGZvbnRBO1xuICAgIGZvbnQtc2l6ZTogMTUuNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgQG1lZGlhKG1heC13aWR0aDogJGJyZWFrcG9pbnRFKXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB3aWR0aDogNjhweDtcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgIH1cbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkYnJlYWtwb2ludEYpe1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGhlaWdodDogMzBweDsgXG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYmxhY2ssIDUlKTtcbiAgICB9XG59XG5cbi5jaGVjayB7XG4gICAgY29sb3I6ICR5ZWxsb3c7XG59XG5cbi5jb3B5IHtcbiAgICBjb2xvcjogJHBpbms7IFxufSBcblxuLmVyYXNlIHtcbiAgICBjb2xvcjogJHJlZDsgXG59IFxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss']
            }]
    }], function () { return []; }, { buttonType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dictionary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dictionary.service */ "./src/app/dictionary.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/button.component */ "./src/app/button/button.component.ts");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popup/popup.component */ "./src/app/popup/popup.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../suggestion/suggestion.component */ "./src/app/suggestion/suggestion.component.ts");








const _c0 = ["contentBody"];
function ContentComponent_popup_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "popup", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeRequest", function ContentComponent_popup_7_Template_popup_closeRequest_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.closePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx_r0.status);
} }
function ContentComponent_spinner_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "spinner");
} }
function ContentComponent_ng_container_12_suggestion_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "suggestion", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ignoreRequest", function ContentComponent_ng_container_12_suggestion_1_Template_suggestion_ignoreRequest_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const result_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.addIgnored(result_r6.word); })("setRequest", function ContentComponent_ng_container_12_suggestion_1_Template_suggestion_setRequest_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.buffer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const result_r6 = ctx_r14.$implicit;
    const index_r7 = ctx_r14.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", result_r6)("wordID", index_r7);
} }
function ContentComponent_ng_container_12_span_2_br_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
function ContentComponent_ng_container_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContentComponent_ng_container_12_span_2_br_3_Template, 1, 0, "br", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const index_r7 = ctx_r16.index;
    const result_r6 = ctx_r16.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", index_r7 !== ctx_r9.response.length - 1 && ctx_r9.response[index_r7 + 1].word !== "" ? result_r6.word + "\u00A0" : result_r6.word, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", index_r7 === ctx_r9.response.length - 1 && result_r6.word === "");
} }
function ContentComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContentComponent_ng_container_12_suggestion_1_Template, 1, 2, "suggestion", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContentComponent_ng_container_12_span_2_Template, 4, 2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const result_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", result_r6.misspelled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !result_r6.misspelled);
} }
class ContentComponent {
    constructor(dictionary) {
        this.dictionary = dictionary;
        //prevents animations on page load
        this.preload = true;
        this.fullScreen = false;
        //reconfigured text content
        this.content = " ";
        this.wordcount = 0;
        //configured response of results from api
        this.response = [
            { word: "", suggestions: [], misspelled: false }
        ];
        //all misspelled results for checking value changes of misspelled words
        this.misspellings = [];
        //stores all ignored
        this.ignored = [];
        //loading state boolean
        this.loading = false;
        //pop up toggle for no misspellings and clipboard copied
        this.popup = false;
        //track keydown for select all delete
        this.keys = [];
    }
    //resize button
    resize() {
        this.fullScreen = !this.fullScreen;
    }
    //set content buffer for suggestion submit emit or manual user change
    buffer() {
        setTimeout(() => this.setContent(), 0);
    }
    //configure text content for api request
    setContent() {
        // console.log("Live:",this.contentBody.nativeElement.textContent)
        let noTrim = this.contentBody.nativeElement.textContent.replace(/(No\sSuggestions)/g, "NoSuggestions").replace(/[^(No)]Suggestions.+?[^(Found)](Ignore|Submit)/g, " ").replace(/NoSuggestions\s(FoundIgnore|FoundSubmit)/g, " ");
        if (noTrim)
            this.lastChar = noTrim.split("")[noTrim.length - 1].charCodeAt(0);
        setTimeout(() => {
            this.content = noTrim.replace(/\s{2,}/g, " ").replace(/\u00A0/g, " ").trim();
            // console.log("set:", this.content)      
            this.splitContent = this.content.split(/\s+/);
            // console.log("split",this.splitContent);
            this.setWordCount();
        }, 0);
    }
    setWordCount() {
        this.splitContent[0] === "" ? this.wordcount = 0 : this.wordcount = this.splitContent.length;
    }
    //check button api call
    checkContent() {
        //configure to empty stay
        // this.popup = false;
        this.status = { message: "Loading...", check: true };
        this.loading = true;
        if (this.content.length === 0)
            this.content = " ";
        let request = { content: this.content };
        // console.log("request",this.content)
        this.dictionary.checkContent(request)
            .subscribe(response => {
            // console.log("raw response", response["results"])
            let configuredResponse = this.configureResponse(response["results"]);
            setTimeout(() => {
                this.response = configuredResponse;
                this.setContent();
                // console.log("configured response", this.response)
                this.misspellings = this.response.filter(result => result.misspelled);
                this.loading = false;
                this.popup = true;
                this.status = this.misspellings.length === 0 ? { message: "No Misspellings Found", check: true } : { message: "Click A Word To Edit", check: true };
            }, 0);
        }, (error) => {
            if (error.status === 404) {
                console.log(error.status);
            }
            else if (error.status === 400) {
                console.log(error.status);
            }
            else {
                console.log(error.status);
            }
        });
    }
    configureResponse(response) {
        //re-add punctuation and spaces
        let configuredResponse = [];
        let createResult = word => { return { word: word, suggestions: [], misspelled: false }; };
        //re-add spacing and any removed characters from plural to singular conversion by api
        for (let i = 0; i < response.length; i++) {
            let lastLoop = response.length - 1;
            let result = response[i];
            let request = this.splitContent[i];
            let lastIndex = request.split("").length - 1;
            let lastChar = request.split("")[lastIndex];
            let exceptLast = request.slice(0, request.length - 1);
            //if result word exactly matches request word directly add it
            if (result.word === request) {
                configuredResponse.push(result);
                //otherwise (because of api plural swap)
            }
            else {
                //if all but the last characters match
                if (result.word.slice(0, result.word.length - 1) === exceptLast) {
                    result.word += lastChar;
                    configuredResponse.push(result);
                    // } else if(/[.,;!?:]/.test(lastChar) && result.misspelled) {
                    //     result.word = request.slice(0,lastIndex);
                    //     configuredResponse.push(result);
                    //     configuredResponse.push(createResult(lastChar));
                    //     // console.log("configured",configuredResponse)
                }
                else {
                    result.word = request;
                    configuredResponse.push(result);
                }
            }
            //don't consider ignored words as misspelled
            if (this.ignored.indexOf(result.word) !== -1)
                result.misspelled = false;
            //add space between words except for end
            if (result.misspelled)
                configuredResponse.push(createResult(""));
        }
        return configuredResponse;
    }
    addIgnored(ignored) {
        // console.log("ignore received")
        this.ignored.push(ignored);
    }
    //copy button
    copyContent() {
        let textarea = document.createElement("textarea");
        textarea.value = this.content;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        this.popup = true;
        this.status = { message: "Copied To Clipboard", check: false };
    }
    //erase button
    eraseContent() {
        console.log("erased");
        this.response = [{ word: " ", suggestions: [], misspelled: false }];
        this.popup = false;
        this.misspellings = [];
        this.ignored = [];
        this.buffer();
    }
    closePopup() {
        this.popup = false;
    }
    ngOnInit() {
        //prevents content-editable from deleting innerHTML formatting
        document.addEventListener("keydown", (e) => {
            switch (this.keys.length) {
                case 0:
                    if (this.keys.length === 0 && (e.keyCode === 224 || e.keyCode === 91 || e.keyCode === 17))
                        this.keys.push(e.keyCode);
                    break;
                case 1:
                    this.keys.length === 1 && (e.keyCode === 65 || e.keyCode == 67) ? this.keys.push(e.keyCode) : this.keys = [];
                    break;
                case 2: this.keys.length === 2 && (e.keyCode === 46 || e.keyCode === 8 || e.keyCode === 67) ? this.keys.push(e.keyCode) : this.keys = [];
            }
            // console.log("content:", this.content.length, "response:", this.response.length, "misspelled:", this.misspellings[0].word.length)
            //if backspace with no content disable delete
            // console.log(this.response.length, this.misspellings.length === 1)
            if ((e.keyCode === 46 || e.keyCode === 8) && (this.content.length < 2 || this.content.length === this.misspellings[0].word.length)) {
                console.log("blocked");
                if (e.preventDefault) {
                    e.preventDefault();
                }
                else {
                    e.returnValue = false;
                }
                this.eraseContent();
                // if control a delete swap with erase method
            }
            else if ((e.keyCode === 46 || e.keyCode === 8) && this.keys.length === 3) {
                console.log("switched");
                if (e.preventDefault) {
                    e.preventDefault();
                }
                else {
                    e.returnValue = false;
                }
                this.eraseContent();
                this.keys = [];
                // if control c
            }
            else if (e.keyCode === 67 && this.keys.length > 1) {
                console.log("coppied");
                if (e.preventDefault) {
                    e.preventDefault();
                }
                else {
                    e.returnValue = false;
                }
                let textarea = document.createElement("textarea");
                textarea.value = this.content;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                this.keys = [];
            }
            //format text on paste
            // document.addEventListener("paste", (event) => {
            // let paste = (event.clipboardData).getData('text/plain');
            // event.preventDefault();
            // event.clipboardData["bubbles"] = false; 
            // // console.log(event)
            // const selection = window.getSelection();
            // if (!selection.rangeCount) return false;
            // selection.deleteFromDocument();
            // selection.getRangeAt(0).insertNode(document.createTextNode(paste));
            // selection.removeAllRanges();
            // this.setContent();
            // console.log(document.getElementById("content-body"))
            // setTimeout(()=> {
            //   let content = document.getElementById("content-body");
            //   content.click();
            //   content.focus();
            // }, 0);
            //   });
        });
        //required to avoid initial animation for resize button transition 
        setTimeout(() => {
            this.preload = false;
        }, 500);
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"])); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["content"]], viewQuery: function ContentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentBody = _t.first);
    } }, decls: 23, vars: 19, consts: [[1, "content-wrap"], [1, "content-container", "content-container-shrink"], [1, "content-header"], [1, "header-title"], [1, "resize-container"], [1, "resize-button", 3, "click"], [3, "status", "closeRequest", 4, "ngIf"], [4, "ngIf"], [1, "content-body-container"], ["autofocus", "", "id", "content-body", "contenteditable", "", "spellcheck", "false", 1, "content-body", 3, "input"], ["contentBody", ""], [4, "ngFor", "ngForOf"], [1, "content-footer"], [1, "word-count"], [1, "button-container"], [1, "button-wrap"], [3, "buttonType", "click"], [3, "status", "closeRequest"], [3, "result", "wordID", "ignoreRequest", "setRequest", 4, "ngIf"], ["class", "correct-container", 4, "ngIf"], [3, "result", "wordID", "ignoreRequest", "setRequest"], [1, "correct-container"], ["ng-bind-html", "\u00A0", 1, "correct-spelling"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Spell \u2713 That");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_Template_div_click_6_listener() { return ctx.resize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ContentComponent_popup_7_Template, 1, 1, "popup", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContentComponent_spinner_8_Template, 1, 0, "spinner", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ContentComponent_Template_div_input_10_listener() { return ctx.setContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ContentComponent_ng_container_12_Template, 3, 2, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_Template_app_button_click_18_listener() { return ctx.checkContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_Template_app_button_click_20_listener() { return ctx.copyContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_Template_app_button_click_22_listener() { return ctx.eraseContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.fullScreen ? "content-container-grow" : "content-container-shrink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("preload", ctx.preload);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("inner-content-full", ctx.fullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled-content", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.response);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("inner-content-full", ctx.fullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Word Count: ", ctx.wordcount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled-buttons", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonType", "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonType", "copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonType", "erase");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"], _suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_6__["SuggestionComponent"]], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow: hidden;\n}\n\n.vertical-align[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .content-footer[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button-wrap[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .content-footer[_ngcontent-%COMP%]   .word-count[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .resize-container[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.word[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .content-body-container[_ngcontent-%COMP%]   .content-body[_ngcontent-%COMP%]   .correct-container[_ngcontent-%COMP%]   .correct-spelling[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 24px;\n  min-height: 24px;\n  min-width: 0.1px;\n  color: #323232;\n  font-family: \"Courier\";\n  line-break: loose;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 14px;\n  height: 18px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  height: 6px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  -webkit-border-radius: 7px;\n  background-color: #f57364;\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::-webkit-placeholder {\n  color: #949494;\n}\n\n[contenteditable][_ngcontent-%COMP%] {\n  outline: 0px solid transparent;\n}\n\n.preload[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 0s !important;\n          animation-duration: 0s !important;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  width: 992px;\n  height: 576px;\n  margin: 0 auto;\n  border-radius: 25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0 1.5px 7.5px 1.5px rgba(0, 0, 0, 0.25);\n  transition: 0.75s;\n}\n\n@media (max-width: 1200px) {\n  .content-container[_ngcontent-%COMP%] {\n    width: 768px;\n  }\n}\n\n@media (max-width: 992px) {\n  .content-container[_ngcontent-%COMP%] {\n    width: 576px;\n  }\n}\n\n@media (max-width: 576px) {\n  .content-container[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 100vh;\n    border-radius: 0;\n    transition: 0s;\n  }\n}\n\n@media (max-height: 576px) {\n  .content-container[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n}\n\n.content-container[_ngcontent-%COMP%]   .inner-content[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .content-footer[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0 20px;\n  transition: 0.75s;\n}\n\n@media (max-height: 576px) and (max-width: 576px) {\n  .content-container[_ngcontent-%COMP%]   .inner-content[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .content-footer[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%] {\n    transition: 0s;\n  }\n}\n\n.content-container[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 50px;\n  background-color: #f57364;\n  border-radius: 25px 25px 0 0;\n}\n\n@media (max-width: 576px) {\n  .content-container[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n}\n\n.content-container[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-family: \"Verdana\";\n  font-weight: 600;\n  font-size: 20px;\n  color: #fafafa;\n  cursor: default;\n}\n\n@media (max-width: 499px) {\n  .content-container[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n@media (max-width: 380px) {\n  .content-container[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.content-container[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .resize-container[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.content-container[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .resize-container[_ngcontent-%COMP%]   .resize-button[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  padding: 5px;\n  width: 25px;\n  height: 25px;\n  background-image: url('resize.png');\n  background-size: 25px;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin: 0 0 0 auto;\n  cursor: pointer;\n}\n\n.content-container[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .resize-container[_ngcontent-%COMP%]   .resize-button[_ngcontent-%COMP%]:hover {\n  background-color: #f89e94;\n}\n\n@media (max-width: 576px) {\n  .content-container[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .resize-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 576px) {\n  .content-container[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.content-container[_ngcontent-%COMP%]   .content-body-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #fafafa;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.content-container[_ngcontent-%COMP%]   .content-body-container[_ngcontent-%COMP%]   .content-body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 100vw;\n  color: #323232;\n  font-family: \"Courier\";\n  line-height: 26px;\n  box-sizing: border-box;\n  padding: 16px 0 16px 20px;\n  cursor: text;\n  color: #323232;\n  font-family: \"Courier\";\n  line-break: loose;\n}\n\n.content-container[_ngcontent-%COMP%]   .content-body-container[_ngcontent-%COMP%]   .content-body[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.content-container[_ngcontent-%COMP%]   .content-body-container[_ngcontent-%COMP%]   .content-body[_ngcontent-%COMP%]   .correct-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.content-container[_ngcontent-%COMP%]   .content-body-container[_ngcontent-%COMP%]   .content-body[_ngcontent-%COMP%]   .correct-container[_ngcontent-%COMP%]   .correct-spelling[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.content-container[_ngcontent-%COMP%]   .content-body-container[_ngcontent-%COMP%]   .buffer[_ngcontent-%COMP%] {\n  min-width: 0.1px;\n  min-height: 0.1px;\n  position: absolute;\n  display: inline;\n}\n\n.content-container[_ngcontent-%COMP%]   .content-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100px;\n  background-color: #f57364;\n  border-radius: 0 0 25px 25px;\n}\n\n@media (max-width: 576px) {\n  .content-container[_ngcontent-%COMP%]   .content-footer[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n}\n\n.content-container[_ngcontent-%COMP%]   .content-footer[_ngcontent-%COMP%]   .word-count[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  font-family: \"Verdana\";\n  color: #fafafa;\n  font-weight: 600;\n  cursor: default;\n  font-size: 15.5px;\n}\n\n@media (max-width: 499px) {\n  .content-container[_ngcontent-%COMP%]   .content-footer[_ngcontent-%COMP%]   .word-count[_ngcontent-%COMP%] {\n    max-width: 100px;\n    font-size: 14px;\n  }\n}\n\n@media (max-width: 380px) {\n  .content-container[_ngcontent-%COMP%]   .content-footer[_ngcontent-%COMP%]   .word-count[_ngcontent-%COMP%] {\n    max-width: 50px;\n    font-size: 12px;\n  }\n}\n\n.content-container[_ngcontent-%COMP%]   .content-footer[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  min-height: 100%;\n  width: 280px;\n}\n\n@media (max-width: 499px) {\n  .content-container[_ngcontent-%COMP%]   .content-footer[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n    width: 245px;\n  }\n}\n\n@media (max-width: 380px) {\n  .content-container[_ngcontent-%COMP%]   .content-footer[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n    width: 215px;\n  }\n}\n\n.content-container-shrink[_ngcontent-%COMP%] {\n  -webkit-animation: shrink;\n          animation: shrink;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-duration: 1.25s;\n          animation-duration: 1.25s;\n  transition: 0.75s;\n}\n\n@media (max-width: 576px) {\n  .content-container-shrink[_ngcontent-%COMP%] {\n    transition: 0s;\n  }\n}\n\n.content-container-grow[_ngcontent-%COMP%] {\n  -webkit-animation: grow;\n          animation: grow;\n  -webkit-animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n          animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-duration: 0.75s;\n          animation-duration: 0.75s;\n  border-radius: 0;\n}\n\n.inner-content-full[_ngcontent-%COMP%] {\n  border-radius: 0px !important;\n  transition: 0.75s !important;\n}\n\n@-webkit-keyframes grow {\n  from {\n    transition: 0.75s;\n    min-width: 0;\n    min-height: 0;\n  }\n  to {\n    transition: 0s;\n    min-width: 100%;\n    min-height: 100%;\n  }\n}\n\n@keyframes grow {\n  from {\n    transition: 0.75s;\n    min-width: 0;\n    min-height: 0;\n  }\n  to {\n    transition: 0s;\n    min-width: 100%;\n    min-height: 100%;\n  }\n}\n\n@-webkit-keyframes shrink {\n  from {\n    min-width: 100vw;\n    min-height: 100vh;\n  }\n  to {\n    min-width: 0;\n    min-height: 0;\n  }\n}\n\n@keyframes shrink {\n  from {\n    min-width: 100vw;\n    min-height: 100vh;\n  }\n  to {\n    min-width: 0;\n    min-height: 0;\n  }\n}\n\n.disabled-content[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.disabled-buttons[_ngcontent-%COMP%] {\n  transition: 0.75s;\n  opacity: 0.85;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZsb3NrYXJhbGlzL0Rlc2t0b3Avc2JhX2Zyb250ZW5kL3NyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Bhdmxvc2thcmFsaXMvRGVza3RvcC9zYmFfZnJvbnRlbmQvc3JjL2FwcC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QUR5QkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ3RCSjs7QUR5QkE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FkSTtFQWVKLHNCQXhCSTtFQXlCSixpQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBbENLO0VBbUNMLGtHQUFBO0FDdkJKOztBRDBCQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSw2QkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxtQkFBQTtBQ3ZCSjs7QURzQkE7RUFDSSxtQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxtQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxjQUFBO0FDdkJKOztBRDBCQTtFQUNJLDhCQUFBO0FDdkJKOztBQ3pEQTtFQUNJLHlDQUFBO1VBQUEsaUNBQUE7QUQ0REo7O0FDekRBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBRDRESjs7QUMxREE7RUFFSSxZRkxVO0VFTVYsYUZKVTtFRUtWLGNBQUE7RUFDQSxtQkFKZ0I7RUFLaEIsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtREZIUztFRUlULGlCQUFBO0FENERKOztBQzFESTtFQVpKO0lBYVEsWUZmTTtFQzRFWjtBQUNGOztBQzVESTtFQWZKO0lBZ0JRLFlGakJNO0VDZ0ZaO0FBQ0Y7O0FDOURJO0VBbEJKO0lBbUJRLFlBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VEaUVOO0FBQ0Y7O0FDaEVJO0VBeEJKO0lBeUJRLGFBQUE7RURtRU47QUFDRjs7QUM3REk7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FEK0RSOztBQzdEUTtFQVJKO0lBU1EsY0FBQTtFRGdFVjtBQUNGOztBQzdESTtFQUdJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCRjFDQztFRTJDRCw0QkFBQTtBRDZEUjs7QUMzRFE7RUFSSjtJQVNRLGdCQUFBO0VEOERWO0FBQ0Y7O0FDNURRO0VBRUksc0JGeERKO0VFeURJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNGbERKO0VFbURJLGVBQUE7QUQ2RFo7O0FDNURZO0VBUEo7SUFRUSxlQUFBO0VEK0RkO0FBQ0Y7O0FDN0RZO0VBWEo7SUFZUSxlQUFBO0VEZ0VkO0FBQ0Y7O0FDN0RRO0VBR0ksV0FBQTtFQUNBLFlBQUE7QUQ2RFo7O0FDM0RZO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRDZEaEI7O0FDM0RnQjtFQUNJLHlCQUFBO0FENkRwQjs7QUN6RFk7RUF2Qko7SUF3QlEsYUFBQTtFRDREZDtBQUNGOztBQ3hEUTtFQXpESjtJQTBEUSx1QkFBQTtFRDJEVjtBQUNGOztBQ3hESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJGbEdBO0VFbUdBLGtCQUFBO0VBQ0Esa0JBQUE7QUQwRFI7O0FDekRRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNGeEdKO0VFeUdJLHNCRmxISjtFRW1ISSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBRUEsY0YvR0o7RUVnSEksc0JGekhKO0VFMEhJLGlCQUFBO0FEMERaOztBQ3hEWTtFQUNJLGFBQUE7QUQwRGhCOztBQ3ZEWTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7QUR5RGhCOztBQ3BEb0I7RUFDSSxhQUFBO0FEc0R4Qjs7QUNoRFE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEa0RaOztBQzVDSTtFQUdJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCRnpKQztFRTBKRCw0QkFBQTtBRDRDUjs7QUN6Q1E7RUFUSjtJQVVRLGdCQUFBO0VENENWO0FBQ0Y7O0FDMUNRO0VBRUksa0JBQUE7RUFDQSxzQkZ6S0o7RUUwS0ksY0ZqS0o7RUVrS0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUQyQ1o7O0FDdENZO0VBWko7SUFhUSxnQkFBQTtJQUNBLGVBQUE7RUR5Q2Q7QUFDRjs7QUN0Q1k7RUFsQko7SUFtQlEsZUFBQTtJQUNBLGVBQUE7RUR5Q2Q7QUFDRjs7QUNyQ1E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUR1Q1o7O0FDckNZO0VBTko7SUFPUSxZQUFBO0VEd0NkO0FBQ0Y7O0FDdENZO0VBVko7SUFXUSxZQUFBO0VEeUNkO0FBQ0Y7O0FDaENBO0VBQ0kseUJBQUE7VUFBQSxpQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLGlCQUFBO0FEa0NKOztBQ2pDSTtFQU5KO0lBT1EsY0FBQTtFRG9DTjtBQUNGOztBQ2pDQTtFQUNJLHVCQUFBO1VBQUEsZUFBQTtFQUNBLHNFQUFBO1VBQUEsOERBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLGdCQUFBO0FEb0NKOztBQ2pDQTtFQUNJLDZCQUFBO0VBQ0EsNEJBQUE7QURvQ0o7O0FDakNBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VEb0NOO0VDbENFO0lBQ0ksY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFRG9DTjtBQUNGOztBQzlDQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFRG9DTjtFQ2xDRTtJQUNJLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RURvQ047QUFDRjs7QUNqQ0E7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RURtQ047RUNqQ0U7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFRG1DTjtBQUNGOztBQzNDQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtFRG1DTjtFQ2pDRTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VEbUNOO0FBQ0Y7O0FDaENBO0VBQ0ksb0JBQUE7QURrQ0o7O0FDL0JBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QURrQ0oiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqIHtcbi8vICAgICB6LWluZGV4OiAtMjtcbi8vIH1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiRicmVha3BvaW50QTogMTIwMHB4O1xuJGJyZWFrcG9pbnRCOiA5OTJweDtcbiRicmVha3BvaW50QzogNzY4cHg7XG4kYnJlYWtwb2ludEQ6IDU3NnB4O1xuJGJyZWFrcG9pbnRFOiA0OTlweDtcbiRicmVha3BvaW50RjogMzgwcHg7XG5cbiRmb250QTogJ1ZlcmRhbmEnO1xuJGZvbnRCOiAnQ291cmllcic7XG5cbiRib3hTaGFkb3c6ICAwIDEuNXB4IDcuNXB4IDEuNXB4IHJnYmEoMCwwLDAsLjI1KTtcblxuJG9yYW5nZTogcmdiKDI0NSwgMTE1LCAxMDApO1xuJHllbGxvdzogcmdiKDI0MCwgMjE1LCAxMDApO1xuJHBpbms6IHJnYigyNDAsIDE0NSwgMTYwKTtcbiRyZWQ6IHJnYigyMzUsIDgwLCAxMDApO1xuJHdoaXRlOiByZ2IoMjUwLDI1MCwyNTApO1xuJGJsYWNrOiByZ2IoNTAsNTAsNTApO1xuXG4udmVydGljYWwtYWxpZ24ge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53b3JkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAyNHB4OyBcbiAgICBtaW4taGVpZ2h0OiAyNHB4O1xuXG4gICAgbWluLXdpZHRoOiAuMXB4O1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICRmb250QjtcbiAgICBsaW5lLWJyZWFrOiBsb29zZTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRwaW5rLCAxMi41JSk7IFxufVxuXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRwaW5rLCAxMi41JSk7IFxufVxuXG46Oi13ZWJraXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBkYXJrZW4oJHdoaXRlLCA0MCUpO1xufVxuXG5bY29udGVudGVkaXRhYmxlXSB7XG4gICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9IiwiYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnZlcnRpY2FsLWFsaWduLCAuY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtZm9vdGVyIC5idXR0b24tY29udGFpbmVyIC5idXR0b24td3JhcCwgLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50LWZvb3RlciAud29yZC1jb3VudCwgLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50LWhlYWRlciAucmVzaXplLWNvbnRhaW5lciwgLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50LWhlYWRlciAuaGVhZGVyLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53b3JkLCAuY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtYm9keS1jb250YWluZXIgLmNvbnRlbnQtYm9keSAuY29ycmVjdC1jb250YWluZXIgLmNvcnJlY3Qtc3BlbGxpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjRweDtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgbWluLXdpZHRoOiAwLjFweDtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXJcIjtcbiAgbGluZS1icmVhazogbG9vc2U7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3MzY0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG46OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmOGM5ZDA7XG59XG5cbjo6LW1vei1zZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZjhjOWQwO1xufVxuXG46Oi13ZWJraXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk0OTQ5NDtcbn1cblxuW2NvbnRlbnRlZGl0YWJsZV0ge1xuICBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5wcmVsb2FkIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwcyAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC13cmFwIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDk5MnB4O1xuICBoZWlnaHQ6IDU3NnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2hhZG93OiAwIDEuNXB4IDcuNXB4IDEuNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHRyYW5zaXRpb246IDAuNzVzO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGVudC1jb250YWluZXIge1xuICAgIHdpZHRoOiA3NjhweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDU3NnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHRyYW5zaXRpb246IDBzO1xuICB9XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDU3NnB4KSB7XG4gIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuLmNvbnRlbnQtY29udGFpbmVyIC5pbm5lci1jb250ZW50LCAuY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtZm9vdGVyLCAuY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtaGVhZGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHRyYW5zaXRpb246IDAuNzVzO1xufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jb250ZW50LWNvbnRhaW5lciAuaW5uZXItY29udGVudCwgLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50LWZvb3RlciwgLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50LWhlYWRlciB7XG4gICAgdHJhbnNpdGlvbjogMHM7XG4gIH1cbn1cbi5jb250ZW50LWNvbnRhaW5lciAuY29udGVudC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1NzM2NDtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtaGVhZGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG59XG4uY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtaGVhZGVyIC5oZWFkZXItdGl0bGUge1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0OTlweCkge1xuICAuY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtaGVhZGVyIC5oZWFkZXItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XG4gIC5jb250ZW50LWNvbnRhaW5lciAuY29udGVudC1oZWFkZXIgLmhlYWRlci10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4uY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtaGVhZGVyIC5yZXNpemUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAuY29udGVudC1oZWFkZXIgLnJlc2l6ZS1jb250YWluZXIgLnJlc2l6ZS1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL3Jlc2l6ZS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMjVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW46IDAgMCAwIGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAuY29udGVudC1oZWFkZXIgLnJlc2l6ZS1jb250YWluZXIgLnJlc2l6ZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg5ZTk0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jb250ZW50LWNvbnRhaW5lciAuY29udGVudC1oZWFkZXIgLnJlc2l6ZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtaGVhZGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50LWJvZHktY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtYm9keS1jb250YWluZXIgLmNvbnRlbnQtYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyXCI7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxNnB4IDAgMTZweCAyMHB4O1xuICBjdXJzb3I6IHRleHQ7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyXCI7XG4gIGxpbmUtYnJlYWs6IGxvb3NlO1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50LWJvZHktY29udGFpbmVyIC5jb250ZW50LWJvZHk6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50LWJvZHktY29udGFpbmVyIC5jb250ZW50LWJvZHkgLmNvcnJlY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtYm9keS1jb250YWluZXIgLmNvbnRlbnQtYm9keSAuY29ycmVjdC1jb250YWluZXIgLmNvcnJlY3Qtc3BlbGxpbmc6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50LWJvZHktY29udGFpbmVyIC5idWZmZXIge1xuICBtaW4td2lkdGg6IDAuMXB4O1xuICBtaW4taGVpZ2h0OiAwLjFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4uY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3MzY0O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMjVweCAyNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jb250ZW50LWNvbnRhaW5lciAuY29udGVudC1mb290ZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbn1cbi5jb250ZW50LWNvbnRhaW5lciAuY29udGVudC1mb290ZXIgLndvcmQtY291bnQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgZm9udC1zaXplOiAxNS41cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDk5cHgpIHtcbiAgLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50LWZvb3RlciAud29yZC1jb3VudCB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xuICAuY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtZm9vdGVyIC53b3JkLWNvdW50IHtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG4uY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtZm9vdGVyIC5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjgwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDk5cHgpIHtcbiAgLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50LWZvb3RlciAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDI0NXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50LWZvb3RlciAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDIxNXB4O1xuICB9XG59XG4uY29udGVudC1jb250YWluZXItc2hyaW5rIHtcbiAgYW5pbWF0aW9uOiBzaHJpbms7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cztcbiAgdHJhbnNpdGlvbjogMC43NXM7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmNvbnRlbnQtY29udGFpbmVyLXNocmluayB7XG4gICAgdHJhbnNpdGlvbjogMHM7XG4gIH1cbn1cblxuLmNvbnRlbnQtY29udGFpbmVyLWdyb3cge1xuICBhbmltYXRpb246IGdyb3c7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjc1cztcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmlubmVyLWNvbnRlbnQtZnVsbCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiAwLjc1cyAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGdyb3cge1xuICBmcm9tIHtcbiAgICB0cmFuc2l0aW9uOiAwLjc1cztcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgbWluLWhlaWdodDogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNpdGlvbjogMHM7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2hyaW5rIHtcbiAgZnJvbSB7XG4gICAgbWluLXdpZHRoOiAxMDB2dztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxuICB0byB7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gIH1cbn1cbi5kaXNhYmxlZC1jb250ZW50IHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5kaXNhYmxlZC1idXR0b25zIHtcbiAgdHJhbnNpdGlvbjogMC43NXM7XG4gIG9wYWNpdHk6IDAuODU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy5zY3NzJztcblxuLnByZWxvYWQge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMHMgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnQtd3JhcCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbnRlbnQtY29udGFpbmVye1xuICAgICRib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiAkYnJlYWtwb2ludEI7XG4gICAgaGVpZ2h0OiAkYnJlYWtwb2ludEQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3gtc2hhZG93OiAkYm94U2hhZG93O1xuICAgIHRyYW5zaXRpb246IC43NXM7XG5cbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkYnJlYWtwb2ludEEpIHtcbiAgICAgICAgd2lkdGg6ICRicmVha3BvaW50QztcbiAgICB9XG4gICAgQG1lZGlhKG1heC13aWR0aDogJGJyZWFrcG9pbnRCKSB7XG4gICAgICAgIHdpZHRoOiAkYnJlYWtwb2ludEQ7XG4gICAgfVxuICAgIEBtZWRpYShtYXgtd2lkdGg6ICRicmVha3BvaW50RCkge1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIGhlaWdodDogMTAwdmg7IFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiAwcztcbiAgICB9XG4gICAgQG1lZGlhKG1heC1oZWlnaHQ6ICRicmVha3BvaW50RCkge1xuICAgICAgICBoZWlnaHQ6IDEwMHZoOyBcbiAgICB9XG4gICAgLy8gQG1lZGlhKG1heC1oZWlnaHQ6ICRicmVha3BvaW50RCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50RCkgeyBcbiAgICAvLyAgICAgdHJhbnNpdGlvbjogMHM7XG4gICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLy8gfVxuXG4gICAgLmlubmVyLWNvbnRlbnQge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IC43NXM7IFxuXG4gICAgICAgIEBtZWRpYShtYXgtaGVpZ2h0OiAkYnJlYWtwb2ludEQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludEQpIHsgXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50LWhlYWRlciB7XG4gICAgICAgIEBleHRlbmQgLmlubmVyLWNvbnRlbnQ7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7IFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAkYm9yZGVyLXJhZGl1cyAwIDA7XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogJGJyZWFrcG9pbnREKSB7IFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXItdGl0bGUge1xuICAgICAgICAgICAgQGV4dGVuZCAudmVydGljYWwtYWxpZ247XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnRBO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiAkYnJlYWtwb2ludEUpe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogJGJyZWFrcG9pbnRGKXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVzaXplLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBAZXh0ZW5kIC52ZXJ0aWNhbC1hbGlnbjtcblxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5yZXNpemUtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9yZXNpemUucG5nJyk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgYXV0bztcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJG9yYW5nZSwgMTAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6ICRicmVha3BvaW50RCkgeyBcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lOyBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogJGJyZWFrcG9pbnREKSB7IFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtYm9keS1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAuY29udGVudC1ib2R5IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnRCO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweCAwIDE2cHggMjBweDtcbiAgICAgICAgICAgIGN1cnNvcjogdGV4dDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udEI7XG4gICAgICAgICAgICBsaW5lLWJyZWFrOiBsb29zZTtcblxuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvcnJlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAuY29ycmVjdC1zcGVsbGluZyB7XG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgLndvcmQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJ1ZmZlciB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IC4xcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAuMXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIC5jb250ZW50LWZvb3RlciB7XG4gICAgICAgIEBleHRlbmQgLmlubmVyLWNvbnRlbnQ7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4OyBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwICRib3JkZXItcmFkaXVzICRib3JkZXItcmFkaXVzO1xuXG4gICAgICAgXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6ICRicmVha3BvaW50RCkgeyBcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAud29yZC1jb3VudCB7XG4gICAgICAgICAgICBAZXh0ZW5kIC52ZXJ0aWNhbC1hbGlnbjsgXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnRBO1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1LjVweDtcbiAgICAgICAgICAgIC8vIEBtZWRpYShtYXgtd2lkdGg6ICRicmVha3BvaW50RCkge1xuICAgICAgICAgICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIC8vICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogJGJyZWFrcG9pbnRFKXtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6ICRicmVha3BvaW50Ril7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgICAgIC8vIHRyYW5zaXRpb246IC43NXM7XG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiAkYnJlYWtwb2ludEUpe1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogJGJyZWFrcG9pbnRGKXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idXR0b24td3JhcCB7XG4gICAgICAgICAgICAgICAgQGV4dGVuZCAudmVydGljYWwtYWxpZ247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jb250ZW50LWNvbnRhaW5lci1zaHJpbmsge1xuICAgIGFuaW1hdGlvbjogc2hyaW5rOyBcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuMjVzOyBcbiAgICB0cmFuc2l0aW9uOiAuNzVzOyBcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkYnJlYWtwb2ludEQpIHsgXG4gICAgICAgIHRyYW5zaXRpb246IDBzO1xuICAgIH1cbn1cblxuLmNvbnRlbnQtY29udGFpbmVyLWdyb3cge1xuICAgIGFuaW1hdGlvbjogZ3JvdzsgXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNzVzOyBcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uaW5uZXItY29udGVudC1mdWxsIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDsgXG4gICAgdHJhbnNpdGlvbjogLjc1cyAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGdyb3cge1xuICAgIGZyb20ge1xuICAgICAgICB0cmFuc2l0aW9uOiAuNzVzO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7IFxuICAgIH1cbiAgICB0b3sgXG4gICAgICAgIHRyYW5zaXRpb246IDBzOyBcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzaHJpbmsge1xuICAgIGZyb20ge1xuICAgICAgICBtaW4td2lkdGg6IDEwMHZ3O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDsgXG4gICAgfVxuICAgIHRveyBcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICBtaW4taGVpZ2h0OiAwOyBcbiAgICB9XG59XG5cbi5kaXNhYmxlZC1jb250ZW50IHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmRpc2FibGVkLWJ1dHRvbnMge1xuICAgIHRyYW5zaXRpb246IC43NXM7IFxuICAgIG9wYWNpdHk6IC44NTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.scss']
            }]
    }], function () { return [{ type: _dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"] }]; }, { contentBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["contentBody"]
        }] }); })();


/***/ }),

/***/ "./src/app/dictionary.service.ts":
/*!***************************************!*\
  !*** ./src/app/dictionary.service.ts ***!
  \***************************************/
/*! exports provided: DictionaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryService", function() { return DictionaryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class DictionaryService {
    // private url = "http://localhost:8080/"
    constructor(http) {
        this.http = http;
        this.url = 'https://sba-spell-checker-api.herokuapp.com/';
    }
    checkContent(request) {
        return this.http.put(this.url, request);
    }
    addSelection(request) {
        return this.http.post(this.url, request);
    }
}
DictionaryService.ɵfac = function DictionaryService_Factory(t) { return new (t || DictionaryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DictionaryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DictionaryService, factory: DictionaryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DictionaryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/popup/popup.component.ts":
/*!******************************************!*\
  !*** ./src/app/popup/popup.component.ts ***!
  \******************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PopupComponent {
    constructor() {
        this.closeRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    close() {
        this.closeRequest.next();
    }
    ngOnInit() {
    }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) { return new (t || PopupComponent)(); };
PopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupComponent, selectors: [["popup"]], inputs: { status: "status" }, outputs: { closeRequest: "closeRequest" }, decls: 6, vars: 5, consts: [[1, "popup-container"], [1, "message-wrap"], [1, "button-wrap"], [1, "button", 3, "click"]], template: function PopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_Template_div_click_4_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("check-message", ctx.status.check)("copy-message", !ctx.status.check);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status.message, " ");
    } }, styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow: hidden;\n}\n\n.vertical-align[_ngcontent-%COMP%], .popup-container[_ngcontent-%COMP%]   .button-wrap[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], .popup-container[_ngcontent-%COMP%]   .button-wrap[_ngcontent-%COMP%], .popup-container[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.word[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 24px;\n  min-height: 24px;\n  min-width: 0.1px;\n  color: #323232;\n  font-family: \"Courier\";\n  line-break: loose;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 14px;\n  height: 18px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  height: 6px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  -webkit-border-radius: 7px;\n  background-color: #f57364;\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::-webkit-placeholder {\n  color: #949494;\n}\n\n[contenteditable][_ngcontent-%COMP%] {\n  outline: 0px solid transparent;\n}\n\n.popup-container[_ngcontent-%COMP%] {\n  min-height: 50px;\n  width: 100%;\n  color: #323232;\n  display: flex;\n  font-family: \"Verdana\";\n  text-align: center;\n  justify-content: space-between;\n}\n\n.popup-container[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 50px;\n  cursor: default;\n}\n\n.popup-container[_ngcontent-%COMP%]   .button-wrap[_ngcontent-%COMP%] {\n  min-width: 50px;\n}\n\n.popup-container[_ngcontent-%COMP%]   .button-wrap[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 100px;\n  padding-bottom: 2px;\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n  background-color: #323232;\n  color: #fafafa;\n  font-size: 14px;\n}\n\n.popup-container[_ngcontent-%COMP%]   .button-wrap[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\n  background-color: #414141;\n}\n\n.check-message[_ngcontent-%COMP%] {\n  background-color: #f0d764;\n}\n\n.copy-message[_ngcontent-%COMP%] {\n  background-color: #f091a0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZsb3NrYXJhbGlzL0Rlc2t0b3Avc2JhX2Zyb250ZW5kL3NyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvcG9wdXAvcG9wdXAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvcGF2bG9za2FyYWxpcy9EZXNrdG9wL3NiYV9mcm9udGVuZC9zcmMvYXBwL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FDSEo7O0FEeUJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUN0Qko7O0FEeUJBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLGNBZEk7RUFlSixzQkF4Qkk7RUF5QkosaUJBQUE7QUN2Qko7O0FEMEJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUN2Qko7O0FEMEJBO0VBQ0ksV0FBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQWxDSztFQW1DTCxrR0FBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUN2Qko7O0FEMEJBO0VBQ0ksNkJBQUE7QUN2Qko7O0FEMEJBO0VBQ0ksbUJBQUE7QUN2Qko7O0FEc0JBO0VBQ0ksbUJBQUE7QUN2Qko7O0FEMEJBO0VBQ0ksbUJBQUE7QUN2Qko7O0FEMEJBO0VBQ0ksY0FBQTtBQ3ZCSjs7QUQwQkE7RUFDSSw4QkFBQTtBQ3ZCSjs7QUN6REE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjRnFCSTtFRXBCSixhQUFBO0VBQ0Esc0JGU0k7RUVSSixrQkFBQTtFQUNBLDhCQUFBO0FENERKOztBQzFESTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUQyRFI7O0FDeERJO0VBRUksZUFBQTtBRHlEUjs7QUN2RFE7RUFFSSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFDQSx5QkZMSjtFRU9JLGNGUko7RUVTSSxlQUFBO0FEc0RaOztBQ3BEWTtFQUNJLHlCQUFBO0FEc0RoQjs7QUMvQ0E7RUFDSSx5QkZ2Qks7QUN5RVQ7O0FDL0NBO0VBQ0kseUJGMUJHO0FDNEVQIiwiZmlsZSI6InNyYy9hcHAvcG9wdXAvcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqIHtcbi8vICAgICB6LWluZGV4OiAtMjtcbi8vIH1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiRicmVha3BvaW50QTogMTIwMHB4O1xuJGJyZWFrcG9pbnRCOiA5OTJweDtcbiRicmVha3BvaW50QzogNzY4cHg7XG4kYnJlYWtwb2ludEQ6IDU3NnB4O1xuJGJyZWFrcG9pbnRFOiA0OTlweDtcbiRicmVha3BvaW50RjogMzgwcHg7XG5cbiRmb250QTogJ1ZlcmRhbmEnO1xuJGZvbnRCOiAnQ291cmllcic7XG5cbiRib3hTaGFkb3c6ICAwIDEuNXB4IDcuNXB4IDEuNXB4IHJnYmEoMCwwLDAsLjI1KTtcblxuJG9yYW5nZTogcmdiKDI0NSwgMTE1LCAxMDApO1xuJHllbGxvdzogcmdiKDI0MCwgMjE1LCAxMDApO1xuJHBpbms6IHJnYigyNDAsIDE0NSwgMTYwKTtcbiRyZWQ6IHJnYigyMzUsIDgwLCAxMDApO1xuJHdoaXRlOiByZ2IoMjUwLDI1MCwyNTApO1xuJGJsYWNrOiByZ2IoNTAsNTAsNTApO1xuXG4udmVydGljYWwtYWxpZ24ge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53b3JkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAyNHB4OyBcbiAgICBtaW4taGVpZ2h0OiAyNHB4O1xuXG4gICAgbWluLXdpZHRoOiAuMXB4O1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICRmb250QjtcbiAgICBsaW5lLWJyZWFrOiBsb29zZTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRwaW5rLCAxMi41JSk7IFxufVxuXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRwaW5rLCAxMi41JSk7IFxufVxuXG46Oi13ZWJraXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBkYXJrZW4oJHdoaXRlLCA0MCUpO1xufVxuXG5bY29udGVudGVkaXRhYmxlXSB7XG4gICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9IiwiYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnZlcnRpY2FsLWFsaWduLCAucG9wdXAtY29udGFpbmVyIC5idXR0b24td3JhcCAuYnV0dG9uLCAucG9wdXAtY29udGFpbmVyIC5idXR0b24td3JhcCwgLnBvcHVwLWNvbnRhaW5lciAubWVzc2FnZS13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53b3JkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIG1pbi13aWR0aDogMC4xcHg7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyXCI7XG4gIGxpbmUtYnJlYWs6IGxvb3NlO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMThweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1NzM2NDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAtMXB4IC0xcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZjhjOWQwO1xufVxuXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2Y4YzlkMDtcbn1cblxuOjotd2Via2l0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5NDk0OTQ7XG59XG5cbltjb250ZW50ZWRpdGFibGVdIHtcbiAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucG9wdXAtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnBvcHVwLWNvbnRhaW5lciAubWVzc2FnZS13cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLnBvcHVwLWNvbnRhaW5lciAuYnV0dG9uLXdyYXAge1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG4ucG9wdXAtY29udGFpbmVyIC5idXR0b24td3JhcCAuYnV0dG9uIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wb3B1cC1jb250YWluZXIgLmJ1dHRvbi13cmFwIC5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xufVxuXG4uY2hlY2stbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGQ3NjQ7XG59XG5cbi5jb3B5LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA5MWEwO1xufSIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG4ucG9wdXAtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LWZhbWlseTogJGZvbnRBOyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLm1lc3NhZ2Utd3JhcCB7XG4gICAgICAgIEBleHRlbmQgLnZlcnRpY2FsLWFsaWduO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi13cmFwIHtcbiAgICAgICAgQGV4dGVuZCAudmVydGljYWwtYWxpZ247XG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAgXG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgQGV4dGVuZCAudmVydGljYWwtYWxpZ247XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAvLyBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xuICAgICAgICAgICAgLy8gYm9yZGVyOiBzb2xpZCAkYmxhY2sgMXB4O1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRibGFjayw2JSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jaGVjay1tZXNzYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93O1xufVxuXG4uY29weS1tZXNzYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'popup',
                templateUrl: './popup.component.html',
                styleUrls: ['./popup.component.scss']
            }]
    }], function () { return []; }, { status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeRequest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["spinner"]], decls: 14, vars: 0, consts: [[1, "spinner-container"], [1, "lds-spinner"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow: hidden;\n}\n\n.vertical-align[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.word[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 24px;\n  min-height: 24px;\n  min-width: 0.1px;\n  color: #323232;\n  font-family: \"Courier\";\n  line-break: loose;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 14px;\n  height: 18px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  height: 6px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  -webkit-border-radius: 7px;\n  background-color: #f57364;\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::-webkit-placeholder {\n  color: #949494;\n}\n\n[contenteditable][_ngcontent-%COMP%] {\n  outline: 0px solid transparent;\n}\n\n.spinner-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  pointer-events: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.spinner-container[_ngcontent-%COMP%]   .lds-spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  color: #f57364;\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n  cursor: default;\n}\n\n.spinner-container[_ngcontent-%COMP%]   .lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform-origin: 40px 40px;\n  -webkit-animation: lds-spinner 1.2s linear infinite;\n          animation: lds-spinner 1.2s linear infinite;\n}\n\n.spinner-container[_ngcontent-%COMP%]   .lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: #f57364;\n}\n\n.spinner-container[_ngcontent-%COMP%]   .lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(0deg);\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n}\n\n.spinner-container[_ngcontent-%COMP%]   .lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotate(30deg);\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n\n.spinner-container[_ngcontent-%COMP%]   .lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(60deg);\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n}\n\n.spinner-container[_ngcontent-%COMP%]   .lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotate(90deg);\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n\n.spinner-container[_ngcontent-%COMP%]   .lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n  transform: rotate(120deg);\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s;\n}\n\n.spinner-container[_ngcontent-%COMP%]   .lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\n  transform: rotate(150deg);\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s;\n}\n\n.spinner-container[_ngcontent-%COMP%]   .lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\n  transform: rotate(180deg);\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n\n.spinner-container[_ngcontent-%COMP%]   .lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\n  transform: rotate(210deg);\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s;\n}\n\n.spinner-container[_ngcontent-%COMP%]   .lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9) {\n  transform: rotate(240deg);\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n\n.spinner-container[_ngcontent-%COMP%]   .lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10) {\n  transform: rotate(270deg);\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s;\n}\n\n.spinner-container[_ngcontent-%COMP%]   .lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11) {\n  transform: rotate(300deg);\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s;\n}\n\n.spinner-container[_ngcontent-%COMP%]   .lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12) {\n  transform: rotate(330deg);\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n\n@-webkit-keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZsb3NrYXJhbGlzL0Rlc2t0b3Avc2JhX2Zyb250ZW5kL3NyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Bhdmxvc2thcmFsaXMvRGVza3RvcC9zYmFfZnJvbnRlbmQvc3JjL2FwcC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QUR5QkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ3RCSjs7QUR5QkE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FkSTtFQWVKLHNCQXhCSTtFQXlCSixpQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBbENLO0VBbUNMLGtHQUFBO0FDdkJKOztBRDBCQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSw2QkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxtQkFBQTtBQ3ZCSjs7QURzQkE7RUFDSSxtQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxtQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxjQUFBO0FDdkJKOztBRDBCQTtFQUNJLDhCQUFBO0FDdkJKOztBQzFEQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FENERGOztBQzFERTtFQUNFLGNBQUE7RUFDQSxjRktLO0VFSkwscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRDRESjs7QUN6REU7RUFDRSwyQkFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7QUQyREo7O0FDekRFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CRmhCSztBQzJFVDs7QUN6REU7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUQyREo7O0FDekRFO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FEMkRKOztBQ3pERTtFQUNFLHdCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBRDJESjs7QUN6REU7RUFDRSx3QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUQyREo7O0FDekRFO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FEMkRKOztBQ3pERTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBRDJESjs7QUN6REU7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUQyREo7O0FDekRFO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FEMkRKOztBQ3pERTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBRDJESjs7QUN6REU7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUQyREo7O0FDekRFO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FEMkRKOztBQ3pERTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBRDJESjs7QUN6REU7RUFDRTtJQUNFLFVBQUE7RUQyREo7RUN6REU7SUFDRSxVQUFBO0VEMkRKO0FBQ0Y7O0FDakVFO0VBQ0U7SUFDRSxVQUFBO0VEMkRKO0VDekRFO0lBQ0UsVUFBQTtFRDJESjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKiB7XG4vLyAgICAgei1pbmRleDogLTI7XG4vLyB9XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4kYnJlYWtwb2ludEE6IDEyMDBweDtcbiRicmVha3BvaW50QjogOTkycHg7XG4kYnJlYWtwb2ludEM6IDc2OHB4O1xuJGJyZWFrcG9pbnREOiA1NzZweDtcbiRicmVha3BvaW50RTogNDk5cHg7XG4kYnJlYWtwb2ludEY6IDM4MHB4O1xuXG4kZm9udEE6ICdWZXJkYW5hJztcbiRmb250QjogJ0NvdXJpZXInO1xuXG4kYm94U2hhZG93OiAgMCAxLjVweCA3LjVweCAxLjVweCByZ2JhKDAsMCwwLC4yNSk7XG5cbiRvcmFuZ2U6IHJnYigyNDUsIDExNSwgMTAwKTtcbiR5ZWxsb3c6IHJnYigyNDAsIDIxNSwgMTAwKTtcbiRwaW5rOiByZ2IoMjQwLCAxNDUsIDE2MCk7XG4kcmVkOiByZ2IoMjM1LCA4MCwgMTAwKTtcbiR3aGl0ZTogcmdiKDI1MCwyNTAsMjUwKTtcbiRibGFjazogcmdiKDUwLDUwLDUwKTtcblxuLnZlcnRpY2FsLWFsaWduIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud29yZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMjRweDsgXG4gICAgbWluLWhlaWdodDogMjRweDtcblxuICAgIG1pbi13aWR0aDogLjFweDtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udEI7XG4gICAgbGluZS1icmVhazogbG9vc2U7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGhlaWdodDogMThweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAtMXB4IC0xcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG46OnNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRlbigkcGluaywgMTIuNSUpOyBcbn1cblxuOjotbW96LXNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRlbigkcGluaywgMTIuNSUpOyBcbn1cblxuOjotd2Via2l0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogZGFya2VuKCR3aGl0ZSwgNDAlKTtcbn1cblxuW2NvbnRlbnRlZGl0YWJsZV0ge1xuICAgIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfSIsImJvZHkge1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi52ZXJ0aWNhbC1hbGlnbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud29yZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyNHB4O1xuICBtaW4taGVpZ2h0OiAyNHB4O1xuICBtaW4td2lkdGg6IDAuMXB4O1xuICBjb2xvcjogIzMyMzIzMjtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllclwiO1xuICBsaW5lLWJyZWFrOiBsb29zZTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTczNjQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2Y4YzlkMDtcbn1cblxuOjotbW96LXNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmOGM5ZDA7XG59XG5cbjo6LXdlYmtpdC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTQ5NDk0O1xufVxuXG5bY29udGVudGVkaXRhYmxlXSB7XG4gIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnNwaW5uZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNwaW5uZXItY29udGFpbmVyIC5sZHMtc3Bpbm5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogI2Y1NzM2NDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5zcGlubmVyLWNvbnRhaW5lciAubGRzLXNwaW5uZXIgZGl2IHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNDBweCA0MHB4O1xuICBhbmltYXRpb246IGxkcy1zcGlubmVyIDEuMnMgbGluZWFyIGluZmluaXRlO1xufVxuLnNwaW5uZXItY29udGFpbmVyIC5sZHMtc3Bpbm5lciBkaXY6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDM3cHg7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBiYWNrZ3JvdW5kOiAjZjU3MzY0O1xufVxuLnNwaW5uZXItY29udGFpbmVyIC5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XG59XG4uc3Bpbm5lci1jb250YWluZXIgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMikge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIGFuaW1hdGlvbi1kZWxheTogLTFzO1xufVxuLnNwaW5uZXItY29udGFpbmVyIC5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xufVxuLnNwaW5uZXItY29udGFpbmVyIC5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xufVxuLnNwaW5uZXItY29udGFpbmVyIC5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcbn1cbi5zcGlubmVyLWNvbnRhaW5lciAubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCg2KSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XG59XG4uc3Bpbm5lci1jb250YWluZXIgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoNykge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xufVxuLnNwaW5uZXItY29udGFpbmVyIC5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDgpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcbn1cbi5zcGlubmVyLWNvbnRhaW5lciAubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCg5KSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG59XG4uc3Bpbm5lci1jb250YWluZXIgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMTApIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcbn1cbi5zcGlubmVyLWNvbnRhaW5lciAubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgxMSkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjFzO1xufVxuLnNwaW5uZXItY29udGFpbmVyIC5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDEyKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG59XG5Aa2V5ZnJhbWVzIGxkcy1zcGlubmVyIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy5zY3NzJztcbi5zcGlubmVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAubGRzLXNwaW5uZXIge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGNvbG9yOiAkb3JhbmdlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcblxuICB9XG4gIC5sZHMtc3Bpbm5lciBkaXYge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDQwcHggNDBweDtcbiAgICBhbmltYXRpb246IGxkcy1zcGlubmVyIDEuMnMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIC5sZHMtc3Bpbm5lciBkaXY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDNweDtcbiAgICBsZWZ0OiAzN3B4O1xuICAgIHdpZHRoOiA2cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgICBiYWNrZ3JvdW5kOiAkb3JhbmdlO1xuICB9XG4gIC5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xuICB9XG4gIC5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gIH1cbiAgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMykge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xuICB9XG4gIC5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcbiAgfVxuICAubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCg1KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjdzO1xuICB9XG4gIC5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDYpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XG4gIH1cbiAgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoNykge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbiAgfVxuICAubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCg4KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xuICB9XG4gIC5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDkpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG4gIH1cbiAgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMTApIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMnM7XG4gIH1cbiAgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMTEpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMXM7XG4gIH1cbiAgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMTIpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gIH1cbiAgQGtleWZyYW1lcyBsZHMtc3Bpbm5lciB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/suggestion/suggestion.component.ts":
/*!****************************************************!*\
  !*** ./src/app/suggestion/suggestion.component.ts ***!
  \****************************************************/
/*! exports provided: SuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionComponent", function() { return SuggestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dictionary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dictionary.service */ "./src/app/dictionary.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





const _c0 = ["suggestionContainer"];
function SuggestionComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuggestionComponent_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const suggestion_r28 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.updateWord(suggestion_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const suggestion_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", suggestion_r28, " ");
} }
function SuggestionComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuggestionComponent_div_12_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.ignore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ignore");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SuggestionComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuggestionComponent_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.updateWord(ctx_r33.otherInput); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SuggestionComponent {
    constructor(dictionary) {
        this.dictionary = dictionary;
        //signals to parent to add word to ignored array
        this.ignoreRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //signals to parent to recheck content
        this.setRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //title default; changes if no suggestions are found
        this.title = "Suggestions";
        //tracks user input in other field of dropdown
        this.other = false;
        //toggles position of dropdown when overflowing
        this.overflowRight = false;
        this.overflowBottom = false;
        //toggles dropdown visibility
        this.dropdown = false;
    }
    // @ViewChild("misspelledWord") misspelledWord: ElementRef; 
    //on init checks for suggestions
    setTittle() {
        if (this.result.suggestions && this.result.suggestions.length < 1)
            this.title = "No Suggestions Found";
    }
    toggleDropdown(event) {
        event.preventDefault();
        this.dropdown = !this.dropdown;
        this.dropdown ? this.checkOverflow() : () => { this.overflowRight = false; this.overflowBottom = false; };
        this.other = false;
        this.otherInput = "";
    }
    //allows offclick toggle of dropdown
    dropdownOffClick(event) {
        if (this.suggestionContainer && !this.suggestionContainer.nativeElement.contains(event.target)) { // or some similar check
            if (this.dropdown) {
                this.toggleDropdown(event);
            }
        }
    }
    //realigns dropdown if overflowing
    checkOverflow() {
        let content = document.querySelector('.content-container');
        let dropdown = document.getElementById(this.dropdownID);
        setTimeout(() => {
            let borders = content.getBoundingClientRect();
            let rightBorder = borders["right"];
            let bottomBorder = borders["bottom"];
            let positions = dropdown.getBoundingClientRect();
            let rightPosition = positions["right"];
            let bottomPosition = positions["bottom"];
            let overflowRight = rightBorder - rightPosition;
            let overflowBottom = bottomBorder - bottomPosition;
            if (overflowRight < 0)
                this.overflowRight = true;
            if (overflowBottom < 0)
                this.overflowBottom = true;
        }, 0);
    }
    //ignore button of dropdown; sends selection to database
    ignore() {
        this.result.misspelled = false;
        this.ignoreRequest.next();
        let request = {
            original: this.result.word,
            original_length: this.result.word.length,
            replacement: "",
            replacement_length: 0,
            ignored: true
        };
        this.addSelection(request);
    }
    //tracks user input of other suggestion
    otherChange() {
        this.otherInput ? this.other = true : this.other = false;
        // console.log(this.otherInput)
    }
    //when user clicks provided suggestion or inputs their own; provides selection to database
    updateWord(suggestion) {
        let request = {
            original: this.result.word,
            original_length: this.result.word.length,
            replacement: suggestion,
            replacement_length: suggestion.length,
            ignored: false
        };
        this.addSelection(request);
        this.result.word = suggestion;
        this.result.misspelled = false;
        // setTimeout(()=>{
        this.setRequest.next();
        // console.log("request sent")
        // });
    }
    //sends user's selection to database for any future relational table implementation
    addSelection(request) {
        // console.log("raw request", request)
        // JSON.stringify(request);
        // this.dictionary.addSelection(request)
        //   .subscribe( response => {
        //     // console.log("added selection:",response)
        //   }, (error: Response) => {
        //     if(error.status === 404) {
        //       console.log(error.status)
        //     } else if (error.status === 400) {
        //       console.log(error.status)
        //     } else {
        //       console.log(error.status)
        //     }
        //   })
    }
    ngOnInit() {
        this.setTittle();
        this.dropdownID = this.wordID + "dropdown";
    }
}
SuggestionComponent.ɵfac = function SuggestionComponent_Factory(t) { return new (t || SuggestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"])); };
SuggestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuggestionComponent, selectors: [["suggestion"]], viewQuery: function SuggestionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.suggestionContainer = _t.first);
    } }, hostBindings: function SuggestionComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuggestionComponent_click_HostBindingHandler($event) { return ctx.dropdownOffClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { result: "result", wordID: "wordID", otherInput: "otherInput" }, outputs: { ignoreRequest: "ignoreRequest", setRequest: "setRequest" }, decls: 14, vars: 18, consts: [["contenteditable", "", 1, "suggestion-container"], ["suggestionContainer", ""], ["contenteditable", "false", 1, "misspelling", 3, "id", "click"], ["contenteditable", "false", 1, "dropdown-container"], [1, "dropdown-fill", 3, "click"], [1, "dropdown-body", 3, "id"], [1, "dropdown-title"], ["class", "dropdown-suggestion", 3, "click", 4, "ngFor", "ngForOf"], ["placeholder", "Other (Enter Text)", 1, "dropdown-other", 3, "ngModel", "ngModelChange", "keydown.enter", "input"], ["class", "dropdown-ignore", 3, "click", 4, "ngIf"], [1, "dropdown-suggestion", 3, "click"], [1, "dropdown-ignore", 3, "click"]], template: function SuggestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuggestionComponent_Template_div_click_3_listener($event) { return ctx.toggleDropdown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuggestionComponent_Template_div_click_6_listener($event) { return ctx.toggleDropdown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SuggestionComponent_div_10_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SuggestionComponent_Template_input_ngModelChange_11_listener($event) { return ctx.otherInput = $event; })("keydown.enter", function SuggestionComponent_Template_input_keydown_enter_11_listener() { return ctx.updateWord(ctx.otherInput); })("input", function SuggestionComponent_Template_input_input_11_listener() { return ctx.otherChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SuggestionComponent_div_12_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SuggestionComponent_div_13_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropdown-z-index", ctx.dropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropdown-z-index", ctx.dropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.wordID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.result.word, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropdown-active", ctx.dropdown)("dropdown-right-overflow", ctx.overflowRight)("dropdown-bottom-overflow", ctx.overflowBottom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.dropdownID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result.suggestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.otherInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.other);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.other);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow: hidden;\n}\n\n.vertical-align[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.word[_ngcontent-%COMP%], .suggestion-container[_ngcontent-%COMP%]   .misspelling[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 24px;\n  min-height: 24px;\n  min-width: 0.1px;\n  color: #323232;\n  font-family: \"Courier\";\n  line-break: loose;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 14px;\n  height: 18px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  height: 6px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  -webkit-border-radius: 7px;\n  background-color: #f57364;\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #f8c9d0;\n}\n\n[_ngcontent-%COMP%]::-webkit-placeholder {\n  color: #949494;\n}\n\n[contenteditable][_ngcontent-%COMP%] {\n  outline: 0px solid transparent;\n}\n\n.dropdown-z-index[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.suggestion-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  position: relative;\n  transform: translateZ(0);\n}\n\n.suggestion-container[_ngcontent-%COMP%]   .misspelling[_ngcontent-%COMP%] {\n  background-color: #f0d764;\n  cursor: pointer;\n}\n\n.suggestion-container[_ngcontent-%COMP%]   .misspelling[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.suggestion-container[_ngcontent-%COMP%]   .dropdown-active[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n}\n\n.suggestion-container[_ngcontent-%COMP%]   .dropdown-row[_ngcontent-%COMP%], .suggestion-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   .dropdown-ignore[_ngcontent-%COMP%], .suggestion-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   .dropdown-other[_ngcontent-%COMP%], .suggestion-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   .dropdown-no-suggestion[_ngcontent-%COMP%], .suggestion-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   .dropdown-suggestion[_ngcontent-%COMP%], .suggestion-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   .dropdown-title[_ngcontent-%COMP%], .suggestion-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-fill[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 26px;\n  background-color: #fafafa;\n  box-sizing: border-box;\n  padding: 0 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 14px;\n  font-family: \"Verdana\";\n  cursor: pointer;\n}\n\n.suggestion-container[_ngcontent-%COMP%]   .dropdown-row-hover[_ngcontent-%COMP%]:hover, .suggestion-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   .dropdown-ignore[_ngcontent-%COMP%]:hover, .suggestion-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   .dropdown-other[_ngcontent-%COMP%]:hover, .suggestion-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   .dropdown-suggestion[_ngcontent-%COMP%]:hover {\n  background-color: #ededed;\n}\n\n.suggestion-container[_ngcontent-%COMP%]   .dropdown-right-overflow[_ngcontent-%COMP%] {\n  right: 0 !important;\n}\n\n.suggestion-container[_ngcontent-%COMP%]   .dropdown-bottom-overflow[_ngcontent-%COMP%] {\n  bottom: 0 !important;\n}\n\n.suggestion-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%] {\n  position: fixed;\n  display: none;\n  flex-direction: column;\n}\n\n.suggestion-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-fill[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 24px;\n  cursor: default;\n}\n\n.suggestion-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%] {\n  background: red;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 1.5px 7.5px 1.5px rgba(0, 0, 0, 0.25);\n}\n\n.suggestion-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   .dropdown-title[_ngcontent-%COMP%] {\n  background-color: #f091a0;\n  font-weight: 600;\n  cursor: default;\n}\n\n.suggestion-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   .dropdown-no-suggestion[_ngcontent-%COMP%] {\n  color: #949494;\n  cursor: default;\n}\n\n.suggestion-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   .dropdown-other[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  border-top: 1px solid #c7c7c7;\n  color: #323232;\n  cursor: text;\n}\n\n.suggestion-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   .dropdown-ignore[_ngcontent-%COMP%] {\n  border-top: 1px solid #c7c7c7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZsb3NrYXJhbGlzL0Rlc2t0b3Avc2JhX2Zyb250ZW5kL3NyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvc3VnZ2VzdGlvbi9zdWdnZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Bhdmxvc2thcmFsaXMvRGVza3RvcC9zYmFfZnJvbnRlbmQvc3JjL2FwcC9zdWdnZXN0aW9uL3N1Z2dlc3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QUR5QkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ3RCSjs7QUR5QkE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FkSTtFQWVKLHNCQXhCSTtFQXlCSixpQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBbENLO0VBbUNMLGtHQUFBO0FDdkJKOztBRDBCQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSw2QkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxtQkFBQTtBQ3ZCSjs7QURzQkE7RUFDSSxtQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxtQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxjQUFBO0FDdkJKOztBRDBCQTtFQUNJLDhCQUFBO0FDdkJKOztBQ3hEQTtFQUNHLFVBQUE7QUQyREg7O0FDeERBO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUQyREo7O0FDekRRO0VBRUkseUJGT0g7RUVORyxlQUFBO0FEMERaOztBQ3pEWTtFQUNJLGFBQUE7QUQyRGhCOztBQ3ZEUTtFQUNJLCtCQUFBO0FEeURaOztBQ3REUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJGSko7RUVLSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkZwQko7RUVxQkksZUFBQTtBRHdEWjs7QUNwRFk7RUFDSSx5QkFBQTtBRHNEaEI7O0FDbERRO0VBQ0ksbUJBQUE7QURvRFo7O0FDbERRO0VBQ0ksb0JBQUE7QURvRFo7O0FDakRRO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBRG1EWjs7QUNqRFk7RUFFSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FEa0RoQjs7QUMvQ1k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbURGbERIO0FDbUdiOztBQzlDZ0I7RUFFSSx5QkZuRGI7RUVvRGEsZ0JBQUE7RUFDQSxlQUFBO0FEK0NwQjs7QUN4Q2dCO0VBRUksY0FBQTtFQUNBLGVBQUE7QUR5Q3BCOztBQ3ZDZ0I7RUFFSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0ZuRVo7RUVvRVksWUFBQTtBRHdDcEI7O0FDdENnQjtFQUdJLDZCQUFBO0FEc0NwQiIsImZpbGUiOiJzcmMvYXBwL3N1Z2dlc3Rpb24vc3VnZ2VzdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICoge1xuLy8gICAgIHotaW5kZXg6IC0yO1xuLy8gfVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuJGJyZWFrcG9pbnRBOiAxMjAwcHg7XG4kYnJlYWtwb2ludEI6IDk5MnB4O1xuJGJyZWFrcG9pbnRDOiA3NjhweDtcbiRicmVha3BvaW50RDogNTc2cHg7XG4kYnJlYWtwb2ludEU6IDQ5OXB4O1xuJGJyZWFrcG9pbnRGOiAzODBweDtcblxuJGZvbnRBOiAnVmVyZGFuYSc7XG4kZm9udEI6ICdDb3VyaWVyJztcblxuJGJveFNoYWRvdzogIDAgMS41cHggNy41cHggMS41cHggcmdiYSgwLDAsMCwuMjUpO1xuXG4kb3JhbmdlOiByZ2IoMjQ1LCAxMTUsIDEwMCk7XG4keWVsbG93OiByZ2IoMjQwLCAyMTUsIDEwMCk7XG4kcGluazogcmdiKDI0MCwgMTQ1LCAxNjApO1xuJHJlZDogcmdiKDIzNSwgODAsIDEwMCk7XG4kd2hpdGU6IHJnYigyNTAsMjUwLDI1MCk7XG4kYmxhY2s6IHJnYig1MCw1MCw1MCk7XG5cbi52ZXJ0aWNhbC1hbGlnbiB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndvcmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDI0cHg7IFxuICAgIG1pbi1oZWlnaHQ6IDI0cHg7XG5cbiAgICBtaW4td2lkdGg6IC4xcHg7XG4gICAgY29sb3I6ICRibGFjaztcbiAgICBmb250LWZhbWlseTogJGZvbnRCO1xuICAgIGxpbmUtYnJlYWs6IGxvb3NlO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTRweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJHBpbmssIDEyLjUlKTsgXG59XG5cbjo6LW1vei1zZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJHBpbmssIDEyLjUlKTsgXG59XG5cbjo6LXdlYmtpdC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IGRhcmtlbigkd2hpdGUsIDQwJSk7XG59XG5cbltjb250ZW50ZWRpdGFibGVdIHtcbiAgICBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH0iLCJib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udmVydGljYWwtYWxpZ24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndvcmQsIC5zdWdnZXN0aW9uLWNvbnRhaW5lciAubWlzc3BlbGxpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjRweDtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgbWluLXdpZHRoOiAwLjFweDtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXJcIjtcbiAgbGluZS1icmVhazogbG9vc2U7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3MzY0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG46OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmOGM5ZDA7XG59XG5cbjo6LW1vei1zZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZjhjOWQwO1xufVxuXG46Oi13ZWJraXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk0OTQ5NDtcbn1cblxuW2NvbnRlbnRlZGl0YWJsZV0ge1xuICBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5kcm9wZG93bi16LWluZGV4IHtcbiAgei1pbmRleDogMjtcbn1cblxuLnN1Z2dlc3Rpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xufVxuLnN1Z2dlc3Rpb24tY29udGFpbmVyIC5taXNzcGVsbGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGQ3NjQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zdWdnZXN0aW9uLWNvbnRhaW5lciAubWlzc3BlbGxpbmc6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnN1Z2dlc3Rpb24tY29udGFpbmVyIC5kcm9wZG93bi1hY3RpdmUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xufVxuLnN1Z2dlc3Rpb24tY29udGFpbmVyIC5kcm9wZG93bi1yb3csIC5zdWdnZXN0aW9uLWNvbnRhaW5lciAuZHJvcGRvd24tY29udGFpbmVyIC5kcm9wZG93bi1ib2R5IC5kcm9wZG93bi1pZ25vcmUsIC5zdWdnZXN0aW9uLWNvbnRhaW5lciAuZHJvcGRvd24tY29udGFpbmVyIC5kcm9wZG93bi1ib2R5IC5kcm9wZG93bi1vdGhlciwgLnN1Z2dlc3Rpb24tY29udGFpbmVyIC5kcm9wZG93bi1jb250YWluZXIgLmRyb3Bkb3duLWJvZHkgLmRyb3Bkb3duLW5vLXN1Z2dlc3Rpb24sIC5zdWdnZXN0aW9uLWNvbnRhaW5lciAuZHJvcGRvd24tY29udGFpbmVyIC5kcm9wZG93bi1ib2R5IC5kcm9wZG93bi1zdWdnZXN0aW9uLCAuc3VnZ2VzdGlvbi1jb250YWluZXIgLmRyb3Bkb3duLWNvbnRhaW5lciAuZHJvcGRvd24tYm9keSAuZHJvcGRvd24tdGl0bGUsIC5zdWdnZXN0aW9uLWNvbnRhaW5lciAuZHJvcGRvd24tY29udGFpbmVyIC5kcm9wZG93bi1maWxsIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3VnZ2VzdGlvbi1jb250YWluZXIgLmRyb3Bkb3duLXJvdy1ob3Zlcjpob3ZlciwgLnN1Z2dlc3Rpb24tY29udGFpbmVyIC5kcm9wZG93bi1jb250YWluZXIgLmRyb3Bkb3duLWJvZHkgLmRyb3Bkb3duLWlnbm9yZTpob3ZlciwgLnN1Z2dlc3Rpb24tY29udGFpbmVyIC5kcm9wZG93bi1jb250YWluZXIgLmRyb3Bkb3duLWJvZHkgLmRyb3Bkb3duLW90aGVyOmhvdmVyLCAuc3VnZ2VzdGlvbi1jb250YWluZXIgLmRyb3Bkb3duLWNvbnRhaW5lciAuZHJvcGRvd24tYm9keSAuZHJvcGRvd24tc3VnZ2VzdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG59XG4uc3VnZ2VzdGlvbi1jb250YWluZXIgLmRyb3Bkb3duLXJpZ2h0LW92ZXJmbG93IHtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbi5zdWdnZXN0aW9uLWNvbnRhaW5lciAuZHJvcGRvd24tYm90dG9tLW92ZXJmbG93IHtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG4uc3VnZ2VzdGlvbi1jb250YWluZXIgLmRyb3Bkb3duLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogbm9uZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zdWdnZXN0aW9uLWNvbnRhaW5lciAuZHJvcGRvd24tY29udGFpbmVyIC5kcm9wZG93bi1maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMjRweDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLnN1Z2dlc3Rpb24tY29udGFpbmVyIC5kcm9wZG93bi1jb250YWluZXIgLmRyb3Bkb3duLWJvZHkge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDAgMS41cHggNy41cHggMS41cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cbi5zdWdnZXN0aW9uLWNvbnRhaW5lciAuZHJvcGRvd24tY29udGFpbmVyIC5kcm9wZG93bi1ib2R5IC5kcm9wZG93bi10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDkxYTA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5zdWdnZXN0aW9uLWNvbnRhaW5lciAuZHJvcGRvd24tY29udGFpbmVyIC5kcm9wZG93bi1ib2R5IC5kcm9wZG93bi1uby1zdWdnZXN0aW9uIHtcbiAgY29sb3I6ICM5NDk0OTQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5zdWdnZXN0aW9uLWNvbnRhaW5lciAuZHJvcGRvd24tY29udGFpbmVyIC5kcm9wZG93bi1ib2R5IC5kcm9wZG93bi1vdGhlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjN2M3Yzc7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBjdXJzb3I6IHRleHQ7XG59XG4uc3VnZ2VzdGlvbi1jb250YWluZXIgLmRyb3Bkb3duLWNvbnRhaW5lciAuZHJvcGRvd24tYm9keSAuZHJvcGRvd24taWdub3JlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjN2M3Yzc7XG59IiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnO1xuXG5cbi5kcm9wZG93bi16LWluZGV4IHtcbiAgIHotaW5kZXg6IDI7XG59XG5cbi5zdWdnZXN0aW9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuXG4gICAgICAgIC5taXNzcGVsbGluZ3tcbiAgICAgICAgICAgIEBleHRlbmQgLndvcmQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgJjpmb2N1cyB7IFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZHJvcGRvd24tYWN0aXZlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuZHJvcGRvd24tcm93IHtcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTsgXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4OyBcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnRBO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRyb3Bkb3duLXJvdy1ob3ZlciB7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHdoaXRlLDUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgLmRyb3Bkb3duLXJpZ2h0LW92ZXJmbG93IHtcbiAgICAgICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmRyb3Bkb3duLWJvdHRvbS1vdmVyZmxvdyB7XG4gICAgICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRyb3Bkb3duLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgXG4gICAgICAgICAgICAuZHJvcGRvd24tZmlsbCB7XG4gICAgICAgICAgICAgICAgQGV4dGVuZCAuZHJvcGRvd24tcm93O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDsgXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZHJvcGRvd24tYm9keSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkOyBcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJGJveFNoYWRvdztcblxuXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAuZHJvcGRvd24tcm93O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tc3VnZ2VzdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgLmRyb3Bkb3duLXJvdywgLmRyb3Bkb3duLXJvdy1ob3ZlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW5vLXN1Z2dlc3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kIC5kcm9wZG93bi1yb3c7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHdoaXRlLCA0MCUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1vdGhlciB7XG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgLmRyb3Bkb3duLXJvdywgLmRyb3Bkb3duLXJvdy1ob3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgZGFya2VuKCR3aGl0ZSwgMjAlKTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjazsgXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogdGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLWlnbm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgLmRyb3Bkb3duLXJvdywgLmRyb3Bkb3duLXJvdy1ob3ZlcjtcblxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgZGFya2VuKCR3aGl0ZSwgMjAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG5cbiAgICAgICAgfVxuXG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuggestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                host: {
                    '(document:click)': 'dropdownOffClick($event)',
                },
                selector: 'suggestion',
                templateUrl: './suggestion.component.html',
                styleUrls: ['./suggestion.component.scss']
            }]
    }], function () { return [{ type: _dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"] }]; }, { result: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], wordID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], otherInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ignoreRequest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], setRequest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], suggestionContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["suggestionContainer"]
        }] }); })();


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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pavloskaralis/Desktop/sba_frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map