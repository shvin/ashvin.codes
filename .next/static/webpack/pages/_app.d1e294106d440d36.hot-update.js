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

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#f0e7db', '#202023')(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            'secction-title': {\n                textDecoration: 'underline',\n                fontSize: 20,\n                textUnderlineOffset: 6,\n                textDecorationColor: '#525252',\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#1191fa', '#733bff')(props),\n                textUnderlineOffset: 3\n            };\n        }\n    }\n};\nvar fonts = {\n    heading: \"'M PLUS Rounded 1c'\"\n};\nvar colors = {\n    glassTeal: '#88ccca'\n};\nvar config = {\n    initialColorMode: 'dark',\n    useSystemColorMode: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.TriangleUpIcon\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    colors: colors,\n    fonts: fonts\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUQ7QUFDSDtBQUNEO0FBRTdDLEdBQUssQ0FBQ0csTUFBTSxHQUFHLENBQUM7SUFDWkMsTUFBTSxFQUFFQyxRQUFRLENBQVJBLEtBQUs7UUFBSSxNQUNsQixDQURtQixDQUFDO1lBQ2ZDLElBQUksRUFBRSxDQUFDO2dCQUNIQyxFQUFFLEVBQUVMLDREQUFJLENBQUMsQ0FBUyxVQUFFLENBQVMsVUFBRUcsS0FBSztZQUN4QyxDQUFDO1FBQ0wsQ0FBQzs7QUFDTCxDQUFDO0FBRUQsR0FBSyxDQUFDRyxVQUFVLEdBQUcsQ0FBQztJQUNoQkMsT0FBTyxFQUFFLENBQUM7UUFDTkMsUUFBUSxFQUFFLENBQUM7WUFDUCxDQUFnQixpQkFBRSxDQUFDO2dCQUNmQyxjQUFjLEVBQUUsQ0FBVztnQkFDM0JDLFFBQVEsRUFBRSxFQUFFO2dCQUNaQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUN0QkMsbUJBQW1CLEVBQUUsQ0FBUztnQkFDOUJDLHVCQUF1QixFQUFFLENBQUM7Z0JBQzFCQyxTQUFTLEVBQUUsQ0FBQztnQkFDWkMsWUFBWSxFQUFFLENBQUM7WUFDbkIsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBQ0RDLElBQUksRUFBRSxDQUFDO1FBQ0hDLFNBQVMsRUFBRWQsUUFBUSxDQUFSQSxLQUFLO1lBQUksTUFDekIsQ0FEMEIsQ0FBQztnQkFDbEJlLEtBQUssRUFBRWxCLDREQUFJLENBQUMsQ0FBUyxVQUFFLENBQVMsVUFBRUcsS0FBSztnQkFDdkNRLG1CQUFtQixFQUFFLENBQUM7WUFDMUIsQ0FBQzs7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVELEdBQUssQ0FBQ1EsS0FBSyxHQUFHLENBQUM7SUFDWEMsT0FBTyxFQUFFLENBQXFCO0FBQ2xDLENBQUM7QUFFRCxHQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ1pDLFNBQVMsRUFBRSxDQUFTO0FBQ3hCLENBQUM7QUFFRCxHQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ1pDLGdCQUFnQixFQUFFLENBQU07SUFDeEJDLGtCQUFrQixFQUFFM0IsNERBQWM7QUFDdEMsQ0FBQztBQUVELEdBQUssQ0FBQzRCLEtBQUssR0FBRzNCLDZEQUFXLENBQUMsQ0FBQztJQUN2QndCLE1BQU0sRUFBTkEsTUFBTTtJQUNOdEIsTUFBTSxFQUFOQSxNQUFNO0lBQ05LLFVBQVUsRUFBVkEsVUFBVTtJQUNWZSxNQUFNLEVBQU5BLE1BQU07SUFDTkYsS0FBSyxFQUFMQSxLQUFLO0FBQ1QsQ0FBQztBQUVELCtEQUFlTyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi90aGVtZS5qcz8zMzMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyaWFuZ2xlVXBJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcbmltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IG1vZGUgfSBmcm9tICdAY2hha3JhLXVpL3RoZW1lLXRvb2xzJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgZ2xvYmFsOiBwcm9wcyA9PiAoe1xuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICBiZzogbW9kZSgnI2YwZTdkYicsICcjMjAyMDIzJykocHJvcHMpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICAgIEhlYWRpbmc6IHtcbiAgICAgICAgdmFyaWFudHM6IHtcbiAgICAgICAgICAgICdzZWNjdGlvbi10aXRsZSc6IHtcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICAgICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDYsXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb25Db2xvcjogJyM1MjUyNTInLFxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiA0LFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMyxcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgTGluazoge1xuICAgICAgICBiYXNlU3R5bGU6IHByb3BzID0+ICh7XG4gICAgICAgICAgICBjb2xvcjogbW9kZSgnIzExOTFmYScsICcjNzMzYmZmJykocHJvcHMpLFxuICAgICAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldDogM1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuY29uc3QgZm9udHMgPSB7XG4gICAgaGVhZGluZzogXCInTSBQTFVTIFJvdW5kZWQgMWMnXCJcbn1cblxuY29uc3QgY29sb3JzID0ge1xuICAgIGdsYXNzVGVhbDogJyM4OGNjY2EnXG59XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBpbml0aWFsQ29sb3JNb2RlOiAnZGFyaycsXG4gICAgdXNlU3lzdGVtQ29sb3JNb2RlOiBUcmlhbmdsZVVwSWNvblxufVxuXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgICBjb25maWcsXG4gICAgc3R5bGVzLFxuICAgIGNvbXBvbmVudHMsXG4gICAgY29sb3JzLFxuICAgIGZvbnRzXG59KVxuXG5leHBvcnQgZGVmYXVsdCB0aGVtZSJdLCJuYW1lcyI6WyJUcmlhbmdsZVVwSWNvbiIsImV4dGVuZFRoZW1lIiwibW9kZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ2YXJpYW50cyIsInRleHREZWNvcmF0aW9uIiwiZm9udFNpemUiLCJ0ZXh0VW5kZXJsaW5lT2Zmc2V0IiwidGV4dERlY29yYXRpb25Db2xvciIsInRleHREZWNvcmF0aW9uVGhpY2tuZXNzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiTGluayIsImJhc2VTdHlsZSIsImNvbG9yIiwiZm9udHMiLCJoZWFkaW5nIiwiY29sb3JzIiwiZ2xhc3NUZWFsIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ })

});