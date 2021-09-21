/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./hooks/panelbear.js":
/*!****************************!*\
  !*** ./hooks/panelbear.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usePanelbear\": function() { return /* binding */ usePanelbear; }\n/* harmony export */ });\n/* harmony import */ var _panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @panelbear/panelbear-js */ \"@panelbear/panelbear-js\");\n/* harmony import */ var _panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst usePanelbear = (site, config = {}) => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    _panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0__.load(site, config); // Trigger initial page view\n\n    _panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0__.trackPageview(); // Add on route change handler for client-side navigation\n\n    const handleRouteChange = () => _panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0__.trackPageview();\n\n    router.events.on(\"routeChangeComplete\", handleRouteChange);\n    return () => {\n      router.events.off(\"routeChangeComplete\", handleRouteChange);\n    };\n  }, []);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vaG9va3MvcGFuZWxiZWFyLmpzP2I5OTMiXSwibmFtZXMiOlsidXNlUGFuZWxiZWFyIiwic2l0ZSIsImNvbmZpZyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIlBhbmVsYmVhciIsImhhbmRsZVJvdXRlQ2hhbmdlIiwiZXZlbnRzIiwib24iLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxZQUFZLEdBQUcsQ0FBQ0MsSUFBRCxFQUFPQyxNQUFNLEdBQUcsRUFBaEIsS0FBdUI7QUFDakQsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyxrREFBUyxDQUFDLE1BQU07QUFDZEMsNkRBQUEsQ0FBZUwsSUFBZixFQUFxQkMsTUFBckIsRUFEYyxDQUdkOztBQUNBSSxzRUFBQSxHQUpjLENBTWQ7O0FBQ0EsVUFBTUMsaUJBQWlCLEdBQUcsTUFBTUQsa0VBQUEsRUFBaEM7O0FBQ0FILFVBQU0sQ0FBQ0ssTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3Q0YsaUJBQXhDO0FBRUEsV0FBTyxNQUFNO0FBQ1hKLFlBQU0sQ0FBQ0ssTUFBUCxDQUFjRSxHQUFkLENBQWtCLHFCQUFsQixFQUF5Q0gsaUJBQXpDO0FBQ0QsS0FGRDtBQUdELEdBYlEsRUFhTixFQWJNLENBQVQ7QUFjRCxDQWpCTSIsImZpbGUiOiIuL2hvb2tzL3BhbmVsYmVhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFBhbmVsYmVhciBmcm9tIFwiQHBhbmVsYmVhci9wYW5lbGJlYXItanNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCB1c2VQYW5lbGJlYXIgPSAoc2l0ZSwgY29uZmlnID0ge30pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBQYW5lbGJlYXIubG9hZChzaXRlLCBjb25maWcpO1xuXG4gICAgLy8gVHJpZ2dlciBpbml0aWFsIHBhZ2Ugdmlld1xuICAgIFBhbmVsYmVhci50cmFja1BhZ2V2aWV3KCk7XG5cbiAgICAvLyBBZGQgb24gcm91dGUgY2hhbmdlIGhhbmRsZXIgZm9yIGNsaWVudC1zaWRlIG5hdmlnYXRpb25cbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICgpID0+IFBhbmVsYmVhci50cmFja1BhZ2V2aWV3KCk7XG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgfTtcbiAgfSwgW10pO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/panelbear.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_panelbear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/panelbear */ \"./hooks/panelbear.js\");\n\nvar _jsxFileName = \"/Users/yaroslavsamoylov/yaosamo.git/personal-website/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  // Load Panelbear only once during the app lifecycle\n  (0,_hooks_panelbear__WEBPACK_IMPORTED_MODULE_2__.usePanelbear)(\"7xnHCCmKRWj\", {// Uncomment to allow sending events on localhost, and log to console too.\n    // debug: true\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 12\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVBhbmVsYmVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUF1QztBQUN0RDtBQUNBQyxnRUFBWSxDQUFDLGFBQUQsRUFBZ0IsQ0FDMUI7QUFDQTtBQUYwQixHQUFoQixDQUFaO0FBS0ksc0JBQU8sOERBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy9zdHlsZXMvZ2xvYmFsLmNzcydcbmltcG9ydCB7IHVzZVBhbmVsYmVhciB9IGZyb20gXCIuLi9ob29rcy9wYW5lbGJlYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuLy8gTG9hZCBQYW5lbGJlYXIgb25seSBvbmNlIGR1cmluZyB0aGUgYXBwIGxpZmVjeWNsZVxudXNlUGFuZWxiZWFyKFwiN3huSENDbUtSV2pcIiwge1xuICAvLyBVbmNvbW1lbnQgdG8gYWxsb3cgc2VuZGluZyBldmVudHMgb24gbG9jYWxob3N0LCBhbmQgbG9nIHRvIGNvbnNvbGUgdG9vLlxuICAvLyBkZWJ1ZzogdHJ1ZVxufSk7XG5cbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICB9XG5cbiAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function() {



/***/ }),

/***/ "@panelbear/panelbear-js":
/*!******************************************!*\
  !*** external "@panelbear/panelbear-js" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@panelbear/panelbear-js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();