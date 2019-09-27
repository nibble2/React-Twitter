webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _jsxFileName = "/Users/dana/Documents/React-Twitter/front/pages/signup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // momo를 이용한 지나친 최적화 (?)
// const TextInput = memo(({ value, onChange }) => {
//     return (
//         <Input name="user-id" value={id} requiered onChange={onChange} />
//     ) ;
// }) ;

var signup = function signup() {
  var _jsx;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      nick = _useState2[0],
      setNick = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      passwordCheck = _useState4[0],
      setPasswordCheck = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      term = _useState5[0],
      setTerm = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      passwordError = _useState6[0],
      setPasswordError = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      termError = _useState7[0],
      setTermError = _useState7[1]; // 커스텀 훅스

  /* const useInput = (initValue = null) => {
      const [value, setter] = useState('') ;
      const handler = e => {
          setter(e.target.value) ;
      } ;
      return [value, handler] ;
  } ;
   const [id, onChangeId] = useInput('') ; 
  */


  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault();

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }
  }, [password, passwordCheck, term]);
  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setId(e.target.value);
  }, []);
  var onChangeNick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setNick(e.target.value);
  }, []);
  var onChangePassWord = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setPassword(e.target.value);
  }, []);
  var onChangePassWordCheck = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);
  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: onSubmit,
    style: {
      padding: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-id",
    value: id,
    required: true,
    onChange: onChangeId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-nick",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "\uB2C9\uB124\uC784"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-nick",
    value: nick,
    required: true,
    onChange: onChangeNick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    required: true,
    onChange: onChangePassWord,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-password-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "\uBE44\uBC00\uBC88\uD638 \uCCB4\uD06C"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-password-check",
    type: "password",
    value: passwordCheck,
    required: true,
    onChange: onChangePassWordCheck,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), passwordError && __jsx("div", {
    style: {
      color: 'red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. ")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], (_jsx = {
    name: "user-term",
    value: "term"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "value", term), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onChange", onChangeTerm), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 89
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), "1\uC77C 1\uCEF7\uC77C\uC744 \uD560 \uAC83\uC744 \uB3D9\uC758\uD569\uB2C8\uB2E4. "), termError && __jsx("div", {
    style: {
      color: 'red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), __jsx("div", {
    style: {
      marginTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "\uAC00\uC785\uD558\uAE30"))));
};

/* harmony default export */ __webpack_exports__["default"] = (signup);

/***/ })

})
//# sourceMappingURL=signup.js.02fc2d213733bae6e0af.hot-update.js.map