(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 61929:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(45282);
;// CONCATENATED MODULE: external "@panelbear/panelbear-js"
var panelbear_js_namespaceObject = require("@panelbear/panelbear-js");;
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(69297);
;// CONCATENATED MODULE: ./hooks/panelbear.js



const usePanelbear = (site, config = {}) => {
  const router = (0,router_namespaceObject.useRouter)();
  (0,external_react_.useEffect)(() => {
    panelbear_js_namespaceObject.load(site, config); // Trigger initial page view

    panelbear_js_namespaceObject.trackPageview(); // Add on route change handler for client-side navigation

    const handleRouteChange = () => panelbear_js_namespaceObject.trackPageview();

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
};
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function App({
  Component,
  pageProps
}) {
  // Load Panelbear only once during the app lifecycle
  usePanelbear("7xnHCCmKRWj", {// Uncomment to allow sending events on localhost, and log to console too.
    // debug: true
  });
  return /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps));
}

/***/ }),

/***/ 69297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 45282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(61929));
module.exports = __webpack_exports__;

})();