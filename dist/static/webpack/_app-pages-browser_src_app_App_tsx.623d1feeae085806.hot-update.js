"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_app_App_tsx",{

/***/ "(app-pages-browser)/./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ \"(app-pages-browser)/./node_modules/react-device-detect/dist/lib.js\");\n\n\n\nlet isMobile;\nif (true) {\n    isMobile = window.innerWidth < 1024;\n} else {}\nconst Navbar = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            id: \"header\",\n            className: \"header-sticky sticky-active\",\n            \"data-fullwidth\": \"true\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header-inner\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"logo\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            className: \"logo vcenter\",\n                            children: \"Configurator\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\moemi\\\\Desktop\\\\dashgit\\\\form-builder\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moemi\\\\Desktop\\\\dashgit\\\\form-builder\\\\src\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moemi\\\\Desktop\\\\dashgit\\\\form-builder\\\\src\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\moemi\\\\Desktop\\\\dashgit\\\\form-builder\\\\src\\\\components\\\\Navbar.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\moemi\\\\Desktop\\\\dashgit\\\\form-builder\\\\src\\\\components\\\\Navbar.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBSXBCO0FBQzdCLElBQUlDO0FBQ0osSUFBSUksSUFBc0MsRUFBRTtJQUMxQ0osV0FBV0ssT0FBT0MsVUFBVSxHQUFHO0FBQ2pDLE9BQU8sRUFFTjtBQUtELE1BQU1DLFNBQXlDLENBQUNDO0lBRTlDLHFCQUNFO2tCQUNFLDRFQUFDQztZQUNDQyxJQUFHO1lBQ0hDLFdBQVU7WUFDVkMsa0JBQWU7c0JBRWYsNEVBQUNDO2dCQUFJRixXQUFVOzBCQUNiLDRFQUFDRTtvQkFBSUYsV0FBVTs4QkFDYiw0RUFBQ0U7d0JBQUlILElBQUc7a0NBQ04sNEVBQUNJOzRCQUNDQyxNQUFLOzRCQUNMSixXQUFVO3NDQUVYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZjtLQXpCTUo7QUEyQk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLnRzeD85YTZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgaXNNb2JpbGUgYXMgbGliSXNNb2JpbGUsXG4gIGlzVGFibGV0IGFzIGxpYklzVGFibGV0XG59IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XG5sZXQgaXNNb2JpbGU6Qm9vbGVhbjtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gIGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCAxMDI0O1xufSBlbHNlIHtcbiAgaXNNb2JpbGUgPSBsaWJJc01vYmlsZSB8fCBsaWJJc1RhYmxldCB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQ7XG59XG5pbnRlcmZhY2UgTmF2YmFyUHJvcHMge1xuICB3aW5kb3c/OiAoKT0+V2luZG93XG59XG4gXG5jb25zdCBOYXZiYXI6IEZ1bmN0aW9uQ29tcG9uZW50PE5hdmJhclByb3BzPiA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoZWFkZXJcbiAgICAgICAgaWQ9XCJoZWFkZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc3RpY2t5IHN0aWNreS1hY3RpdmVcIlxuICAgICAgICBkYXRhLWZ1bGx3aWR0aD1cInRydWVcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbm5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9nb1wiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvIHZjZW50ZXJcIlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ29uZmlndXJhdG9yXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvPlxuICApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdLCJuYW1lcyI6WyJSZWFjdCIsImlzTW9iaWxlIiwibGliSXNNb2JpbGUiLCJpc1RhYmxldCIsImxpYklzVGFibGV0IiwicHJvY2VzcyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJOYXZiYXIiLCJwcm9wcyIsImhlYWRlciIsImlkIiwiY2xhc3NOYW1lIiwiZGF0YS1mdWxsd2lkdGgiLCJkaXYiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar.tsx\n"));

/***/ })

});