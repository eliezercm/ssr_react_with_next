webpackHotUpdate("static/development/pages/users.js",{

/***/ "./node_modules/next/dist/server/lib/utils.js":
false,

/***/ "./src/hocs/withAnalytics.js":
/*!***********************************!*\
  !*** ./src/hocs/withAnalytics.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_server_dist_lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-server/dist/lib/utils */ "./node_modules/next-server/dist/lib/utils.js");
/* harmony import */ var next_server_dist_lib_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_server_dist_lib_utils__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");






var _jsxFileName = "/home/eliezer/Desktop/std/next_ssr/src/hocs/withAnalytics.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return function (Composed) {
    return (
      /*#__PURE__*/
      function (_Component) {
        Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_class, _Component);

        function _class() {
          Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _class);

          return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_class).apply(this, arguments));
        }

        Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_class, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            console.log("Page view");
            react_ga__WEBPACK_IMPORTED_MODULE_8__["default"].initialize("ID_ANALYTICS");
            react_ga__WEBPACK_IMPORTED_MODULE_8__["default"].pageview(window.location.pathname);
          }
        }, {
          key: "render",
          value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Composed, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            }));
          }
        }], [{
          key: "getInitialProps",
          value: function getInitialProps(ctx) {
            return Object(next_server_dist_lib_utils__WEBPACK_IMPORTED_MODULE_7__["loadGetInitialProps"])(Composed, ctx);
          }
        }]);

        return _class;
      }(react__WEBPACK_IMPORTED_MODULE_6__["Component"])
    );
  };
});

/***/ })

})
//# sourceMappingURL=users.js.55d1e3e67a57b29b3dd5.hot-update.js.map