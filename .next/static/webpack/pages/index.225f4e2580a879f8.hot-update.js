"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersToolbar.js":
/*!*******************************************!*\
  !*** ./src/components/SpeakersToolbar.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ThemeContext */ \"./src/contexts/ThemeContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ \"./src/contexts/SpeakerFilterContext.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SpeakersToolbar() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeContext), theme = ref.theme, setTheme = ref.setTheme;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerFilterContext), showSessions = ref1.showSessions, setShowSessions = ref1.setShowSessions, eventYear = ref1.eventYear, setEventYear = ref1.setEventYear, setSearchQuery = ref1.setSearchQuery, EVENT_YEARS = ref1.EVENT_YEARS;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"toolbar dark-theme-header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-content-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"toolrow d-flex flex-column flex-lg-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"Show Sessions\\xa0\\xa0\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"fav\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            checked: showSessions,\n                                            onChange: function(event) {\n                                                setShowSessions(event.target.checked);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                                            lineNumber: 24,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"switch\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row ml-sm-5 ml-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Theme\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"dropdown\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \"form-control theme\",\n                                        value: theme,\n                                        onChange: function(event) {\n                                            setTheme(event.target.value);\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"light\",\n                                                children: \"Light\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"dark\",\n                                                children: \"Dark\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-group\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        className: \"form-control\",\n                                        placeholder: \"Search...\",\n                                        onChange: function(event) {\n                                            setSearchQuery(event.target.value);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"input-group-append\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn btn-secondary\",\n                                            type: \"button\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                className: \"fa fa-search\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Year\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"dropmenu\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \"form-control\",\n                                        value: eventYear,\n                                        onChange: function(param) {\n                                            var currentTarget = param.currentTarget;\n                                            setEventYear(currentTarget.value);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/eh/Sites/react-component-design/src/components/SpeakersToolbar.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(SpeakersToolbar, \"oX64Ht3jkg0r3dG/FCojGWlQhaI=\");\n_c = SpeakersToolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersToolbar);\nvar _c;\n$RefreshReg$(_c, \"SpeakersToolbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqQyw0RUFBQ2tCLFFBQU07NENBQUNsQixTQUFTLEVBQUMsbUJBQW1COzRDQUFDTyxJQUFJLEVBQUMsUUFBUTtzREFDakQsNEVBQUNZLEdBQUM7Z0RBQUNuQixTQUFTLEVBQUMsY0FBYzs7Ozs7b0RBQUs7Ozs7O2dEQUN6Qjs7Ozs7NENBQ0w7Ozs7OztvQ0FDRjs7Ozs7Z0NBQ0g7c0NBQ0wsOERBQUNHLElBQUU7NEJBQUNILFNBQVMsRUFBQyxnQ0FBZ0M7OzhDQUM1Qyw4REFBQ2EsUUFBTTs4Q0FBQyxNQUFJOzs7Ozt3Q0FBUzs4Q0FDckIsOERBQUNSLE9BQUs7b0NBQUNMLFNBQVMsRUFBQyxVQUFVOzhDQUN6Qiw0RUFBQ2MsUUFBTTt3Q0FDTGQsU0FBUyxFQUFDLGNBQWM7d0NBQ3hCZSxLQUFLLEVBQUVwQixTQUFTO3dDQUNoQmMsUUFBUSxFQUFFLGdCQUF1QjtnREFBcEJXLGFBQWEsU0FBYkEsYUFBYTs0Q0FDeEJ4QixZQUFZLENBQUN3QixhQUFhLENBQUNMLEtBQUssQ0FBQyxDQUFDO3lDQUNuQzs7Ozs7NENBU007Ozs7O3dDQUNIOzs7Ozs7Z0NBQ0w7Ozs7Ozt3QkFDRjs7Ozs7b0JBQ0Q7Ozs7O2dCQUNGOzs7OztZQUNFLENBQ1Y7Q0FDSDtHQXRGUXpCLGVBQWU7QUFBZkEsS0FBQUEsZUFBZTtBQXdGeEIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc1Rvb2xiYXIuanM/MWVjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9UaGVtZUNvbnRleHQnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNwZWFrZXJGaWx0ZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvU3BlYWtlckZpbHRlckNvbnRleHQnO1xuXG5mdW5jdGlvbiBTcGVha2Vyc1Rvb2xiYXIoKSB7XG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gIGNvbnN0IHtcbiAgICBzaG93U2Vzc2lvbnMsXG4gICAgc2V0U2hvd1Nlc3Npb25zLFxuICAgIGV2ZW50WWVhcixcbiAgICBzZXRFdmVudFllYXIsXG4gICAgc2V0U2VhcmNoUXVlcnksXG4gICAgRVZFTlRfWUVBUlMsXG4gIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndG9vbGJhciBkYXJrLXRoZW1lLWhlYWRlcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2p1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSd0b29scm93IGQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LWxnLXJvdyc+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3cnPlxuICAgICAgICAgICAgICA8Yj5TaG93IFNlc3Npb25zJm5ic3A7Jm5ic3A7PC9iPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmYXYnPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0nY2hlY2tib3gnXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtzaG93U2Vzc2lvbnN9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dTZXNzaW9ucyhldmVudC50YXJnZXQuY2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzd2l0Y2gnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3cgbWwtc20tNSBtbC0wJz5cbiAgICAgICAgICAgICAgPHN0cm9uZz5UaGVtZTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdkcm9wZG93bic+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgdGhlbWUnXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhlbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRoZW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2xpZ2h0Jz5MaWdodDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nZGFyayc+RGFyazwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwJz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2guLi4nXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwLWFwcGVuZCc+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1zZWNvbmRhcnknIHR5cGU9J2J1dHRvbic+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJz48L2k+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93Jz5cbiAgICAgICAgICAgICAgPHN0cm9uZz5ZZWFyPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Ryb3BtZW51Jz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtldmVudFllYXJ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgY3VycmVudFRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEV2ZW50WWVhcihjdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgey8qIHtFVkVOVF9ZRUFSUy5tYXAoZnVuY3Rpb24gKHllYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt5ZWFyfSBrZXk9e3llYXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3llYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX0gKi99XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc1Rvb2xiYXI7XG4iXSwibmFtZXMiOlsiVGhlbWVDb250ZXh0IiwidXNlQ29udGV4dCIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiU3BlYWtlcnNUb29sYmFyIiwidGhlbWUiLCJzZXRUaGVtZSIsInNob3dTZXNzaW9ucyIsInNldFNob3dTZXNzaW9ucyIsImV2ZW50WWVhciIsInNldEV2ZW50WWVhciIsInNldFNlYXJjaFF1ZXJ5IiwiRVZFTlRfWUVBUlMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwidWwiLCJsaSIsImIiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0Iiwic3BhbiIsInN0cm9uZyIsInNlbGVjdCIsInZhbHVlIiwib3B0aW9uIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJpIiwiY3VycmVudFRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakersToolbar.js\n");

/***/ })

});