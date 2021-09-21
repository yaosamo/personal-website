/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./hooks/panelbear.js":
/*!****************************!*\
  !*** ./hooks/panelbear.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usePanelbear\": () => (/* binding */ usePanelbear)\n/* harmony export */ });\n/* harmony import */ var _panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @panelbear/panelbear-js */ \"@panelbear/panelbear-js\");\n/* harmony import */ var _panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst usePanelbear = (site, config = {}) => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    _panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0__.load(site, config); // Trigger initial page view\n\n    _panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0__.trackPageview(); // Add on route change handler for client-side navigation\n\n    const handleRouteChange = () => _panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0__.trackPageview();\n\n    router.events.on(\"routeChangeComplete\", handleRouteChange);\n    return () => {\n      router.events.off(\"routeChangeComplete\", handleRouteChange);\n    };\n  }, []);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9wYW5lbGJlYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLE1BQU1HLFlBQVksR0FBRyxDQUFDQyxJQUFELEVBQU9DLE1BQU0sR0FBRyxFQUFoQixLQUF1QjtBQUNqRCxRQUFNQyxNQUFNLEdBQUdMLHNEQUFTLEVBQXhCO0FBRUFDLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkRixJQUFBQSx5REFBQSxDQUFlSSxJQUFmLEVBQXFCQyxNQUFyQixFQURjLENBR2Q7O0FBQ0FMLElBQUFBLGtFQUFBLEdBSmMsQ0FNZDs7QUFDQSxVQUFNUyxpQkFBaUIsR0FBRyxNQUFNVCxrRUFBQSxFQUFoQzs7QUFDQU0sSUFBQUEsTUFBTSxDQUFDSSxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDRixpQkFBeEM7QUFFQSxXQUFPLE1BQU07QUFDWEgsTUFBQUEsTUFBTSxDQUFDSSxNQUFQLENBQWNFLEdBQWQsQ0FBa0IscUJBQWxCLEVBQXlDSCxpQkFBekM7QUFDRCxLQUZEO0FBR0QsR0FiUSxFQWFOLEVBYk0sQ0FBVDtBQWNELENBakJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL2hvb2tzL3BhbmVsYmVhci5qcz9iOTkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFBhbmVsYmVhciBmcm9tIFwiQHBhbmVsYmVhci9wYW5lbGJlYXItanNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCB1c2VQYW5lbGJlYXIgPSAoc2l0ZSwgY29uZmlnID0ge30pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBQYW5lbGJlYXIubG9hZChzaXRlLCBjb25maWcpO1xuXG4gICAgLy8gVHJpZ2dlciBpbml0aWFsIHBhZ2Ugdmlld1xuICAgIFBhbmVsYmVhci50cmFja1BhZ2V2aWV3KCk7XG5cbiAgICAvLyBBZGQgb24gcm91dGUgY2hhbmdlIGhhbmRsZXIgZm9yIGNsaWVudC1zaWRlIG5hdmlnYXRpb25cbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICgpID0+IFBhbmVsYmVhci50cmFja1BhZ2V2aWV3KCk7XG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgfTtcbiAgfSwgW10pO1xufTsiXSwibmFtZXMiOlsiUGFuZWxiZWFyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlUGFuZWxiZWFyIiwic2l0ZSIsImNvbmZpZyIsInJvdXRlciIsImxvYWQiLCJ0cmFja1BhZ2V2aWV3IiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJldmVudHMiLCJvbiIsIm9mZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/panelbear.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_panelbear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/panelbear */ \"./hooks/panelbear.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/yaroslavsamoylov/yaosamo.git/personal-website/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  // Load Panelbear only once during the app lifecycle\n  (0,_hooks_panelbear__WEBPACK_IMPORTED_MODULE_1__.usePanelbear)(\"7xnHCCmKRWj\", {// Uncomment to allow sending events on localhost, and log to console too.\n    // debug: true\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 12\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFZSxTQUFTRSxHQUFULENBQWE7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWIsRUFBdUM7QUFDdEQ7QUFDQUgsRUFBQUEsOERBQVksQ0FBQyxhQUFELEVBQWdCLENBQzFCO0FBQ0E7QUFGMEIsR0FBaEIsQ0FBWjtBQUtJLHNCQUFPLDhEQUFDLFNBQUQsb0JBQWVHLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnXG5pbXBvcnQgeyB1c2VQYW5lbGJlYXIgfSBmcm9tIFwiLi4vaG9va3MvcGFuZWxiZWFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbi8vIExvYWQgUGFuZWxiZWFyIG9ubHkgb25jZSBkdXJpbmcgdGhlIGFwcCBsaWZlY3ljbGVcbnVzZVBhbmVsYmVhcihcIjd4bkhDQ21LUldqXCIsIHtcbiAgLy8gVW5jb21tZW50IHRvIGFsbG93IHNlbmRpbmcgZXZlbnRzIG9uIGxvY2FsaG9zdCwgYW5kIGxvZyB0byBjb25zb2xlIHRvby5cbiAgLy8gZGVidWc6IHRydWVcbn0pO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgfVxuXG4gIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVBhbmVsYmVhciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "@panelbear/panelbear-js":
/*!******************************************!*\
  !*** external "@panelbear/panelbear-js" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@panelbear/panelbear-js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();