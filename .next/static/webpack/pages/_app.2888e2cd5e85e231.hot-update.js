"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar LinkItem = function(param) {\n    var href = param.href, children = param.children, path = param.path;\n    _s();\n    var active = path === href;\n    var inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)('gray.200', 'whiteAlpha.900');\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            p: 2,\n            bg: active ? 'glassTeal' : undefined,\n            color: active ? '#202023' : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"/home/shvin/ashvin.codes/components/navbar.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/shvin/ashvin.codes/components/navbar.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, _this));\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nvar Navbar = function(props) {\n    _s1();\n    var path = props.path;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, _objectSpread({\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)('#ffffff40', '20202380'),\n        style: {\n            backdropFilter: 'blur(10px)'\n        },\n        zIndex: 1\n    }, props, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: 'tighter',\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/shvin/ashvin.codes/components/navbar.js\",\n                            lineNumber: 56,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/shvin/ashvin.codes/components/navbar.js\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/shvin/ashvin.codes/components/navbar.js\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    direction: {\n                        base: 'column',\n                        md: 'row'\n                    },\n                    display: {\n                        base: 'none',\n                        md: 'flex'\n                    },\n                    width: {\n                        base: 'full',\n                        md: 'auto'\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        nmd: 0\n                    },\n                    textColor: \"blackAlpha.100\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/work\",\n                            path: path,\n                            children: \"Work\"\n                        }, void 0, false, {\n                            fileName: \"/home/shvin/ashvin.codes/components/navbar.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/about\",\n                            path: path,\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"/home/shvin/ashvin.codes/components/navbar.js\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/shvin/ashvin.codes/components/navbar.js\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    flex: 1,\n                    align: \"right\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        ml: 2,\n                        display: {\n                            base: 'inline-block',\n                            md: 'none'\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuButton, {\n                                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton,\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.HamburgerIcon, {}, void 0, false, void 0, void 0),\n                                variant: \"outline\",\n                                \"aria-label\": \"Options\"\n                            }, void 0, false, {\n                                fileName: \"/home/shvin/ashvin.codes/components/navbar.js\",\n                                lineNumber: 80,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/shvin/ashvin.codes/components/navbar.js\",\n                            lineNumber: 79,\n                            columnNumber: 23\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/shvin/ashvin.codes/components/navbar.js\",\n                        lineNumber: 78,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/shvin/ashvin.codes/components/navbar.js\",\n                    lineNumber: 77,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/shvin/ashvin.codes/components/navbar.js\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, _this)\n    }), void 0, false, {\n        fileName: \"/home/shvin/ashvin.codes/components/navbar.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, _this));\n};\n_s1(Navbar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFZCxLQUFLLEVBQUMsQ0FBTzswR0FDdEJqQyxpREFBRzt3QkFBQ2dELEVBQUUsRUFBRSxDQUFDO3dCQUFFbEIsT0FBTyxFQUFFLENBQUNTOzRCQUFBQSxJQUFJLEVBQUUsQ0FBYzs0QkFBRUMsRUFBRSxFQUFFLENBQU07d0JBQUEsQ0FBQzs4R0FDcERuQyxrREFBSTtrSEFDRkcsd0RBQVU7Z0NBQUNpQixFQUFFLEVBQUVoQix3REFBVTtnQ0FBRXdDLElBQUksOEVBQUd0QywyREFBYTtnQ0FBS3VDLE9BQU8sRUFBQyxDQUFTO2dDQUFDQyxDQUFVLGFBQUMsQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbkgsQ0FBQztJQXJESzdCLE1BQU07O1FBT0FaLCtEQUFpQjs7O01BUHZCWSxNQUFNO0FBdURaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzPzViNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJ1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7XG4gICAgQ29udGFpbmVyLFxuICAgIEJveCxcbiAgICBMaW5rLFxuICAgIFN0YWNrLFxuICAgIEhlYWRpbmcsXG4gICAgRmxleCxcbiAgICBNZW51LFxuICAgIE1lbnVJdGVtLFxuICAgIE1lbnVMaXN0LFxuICAgIE1lbnVCdXR0b24sXG4gICAgSWNvbkJ1dHRvbixcbiAgICB1c2VDb2xvck1vZGVWYWx1ZSxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEhhbWJ1cmdlckljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuXG5jb25zdCBMaW5rSXRlbSA9ICh7IGhyZWYsIGNoaWxkcmVuLCBwYXRoIH0pID0+IHtcbiAgICBjb25zdCBhY3RpdmUgPSBwYXRoID09PSBocmVmXG4gICAgY29uc3QgaW5hY3RpdmVDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjIwMCcsICd3aGl0ZUFscGhhLjkwMCcpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICBiZz17YWN0aXZlID8gJ2dsYXNzVGVhbCcgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBjb2xvcj17YWN0aXZlID8gJyMyMDIwMjMnIDogaW5hY3RpdmVDb2xvcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmV4dExpbms+XG4gICAgKVxufVxuXG5jb25zdCBOYXZiYXIgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgeyBwYXRoIH0gPSBwcm9wc1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgIGFzPVwibmF2XCJcbiAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJyNmZmZmZmY0MCcsICcyMDIwMjM4MCcpfVxuICAgICAgICBzdHlsZT17e2JhY2tkcm9wRmlsdGVyOiAnYmx1cigxMHB4KSd9fVxuICAgICAgICB6SW5kZXg9ezF9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPENvbnRhaW5lciBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAgICAgICAgcD17Mn0gXG4gICAgICAgICAgICBtYXhXPVwiY29udGFpbmVyLm1kXCJcbiAgICAgICAgICAgIHdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIG1yPXs1fT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiIGxldHRlclNwYWNpbmc9eyd0aWdodGVyJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7YmFzZTogJ2NvbHVtbicsIG1kOiAncm93J319XG4gICAgICAgICAgICAgICAgZGlzcGxheT17e2Jhc2U6ICdub25lJywgbWQ6ICdmbGV4J319XG4gICAgICAgICAgICAgICAgd2lkdGg9e3tiYXNlOiAnZnVsbCcsIG1kOiAnYXV0byd9fVxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGZsZXhHcm93PXsxfVxuICAgICAgICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG5tZDogMCB9fVxuICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cImJsYWNrQWxwaGEuMTAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rSXRlbSBocmVmPVwiL3dvcmtcIiBwYXRoPXtwYXRofT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdvcmtcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCIvYWJvdXRcIiBwYXRoPXtwYXRofT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgICAgICAgIDwvTGlua0l0ZW0+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICAgIDxCb3ggZmxleD17MX0gYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1sPXsyfSBkaXNwbGF5PXt7YmFzZTogJ2lubGluZS1ibG9jaycsIG1kOiAnbm9uZSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uIGFzPXtJY29uQnV0dG9ufSBpY29uPXs8SGFtYnVyZ2VySWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVcIiBhcmlhLWxhYmVsPVwiT3B0aW9uc1wiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl0sIm5hbWVzIjpbIkxvZ28iLCJOZXh0TGluayIsIkNvbnRhaW5lciIsIkJveCIsIkxpbmsiLCJTdGFjayIsIkhlYWRpbmciLCJGbGV4IiwiTWVudSIsIk1lbnVJdGVtIiwiTWVudUxpc3QiLCJNZW51QnV0dG9uIiwiSWNvbkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwiSGFtYnVyZ2VySWNvbiIsIkxpbmtJdGVtIiwiaHJlZiIsImNoaWxkcmVuIiwicGF0aCIsImFjdGl2ZSIsImluYWN0aXZlQ29sb3IiLCJwIiwiYmciLCJ1bmRlZmluZWQiLCJjb2xvciIsIk5hdmJhciIsInByb3BzIiwicG9zaXRpb24iLCJhcyIsInciLCJzdHlsZSIsImJhY2tkcm9wRmlsdGVyIiwiekluZGV4IiwiZGlzcGxheSIsIm1heFciLCJ3cmFwIiwiYWxpZ24iLCJqdXN0aWZ5IiwibXIiLCJzaXplIiwibGV0dGVyU3BhY2luZyIsImRpcmVjdGlvbiIsImJhc2UiLCJtZCIsIndpZHRoIiwiYWxpZ25JdGVtcyIsImZsZXhHcm93IiwibXQiLCJubWQiLCJ0ZXh0Q29sb3IiLCJmbGV4IiwibWwiLCJpY29uIiwidmFyaWFudCIsImFyaWEtbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

});