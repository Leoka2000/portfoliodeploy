"use strict";
exports.id = 656;
exports.ids = [656];
exports.modules = {

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorModeContext": () => (/* binding */ ColorModeContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3139);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_Hooks_ThemeHook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6983);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_1__]);
_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const ColorModeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({
    mode: "dark",
    toggleColorMode: ()=>{}
});
function MyApp({ Component , pageProps  }) {
    const { 0: mode , 1: setMode  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("dark");
    const getDesignTokens = (0,_src_Hooks_ThemeHook__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(mode, setMode);
    const Theme = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>(0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.createTheme)(getDesignTokens(mode)), [
        mode
    ]);
    const colorMode = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({
            mode,
            toggleColorMode: ()=>{
                setMode((prevMode)=>prevMode === "light" ? "dark" : "light");
            }
        }), [
        mode
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ColorModeContext.Provider, {
        value: colorMode,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
            theme: {
                ...Theme
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ThemeHook = (mode, setMode)=>{
    const color = mode === "light" ? "#000000" : "#ffffff";
    const getDesignTokens = (mode)=>({
            typography: {
                "fontFamily": `Nunito, sans-serif`,
                "fontSize": 16,
                h1: {
                    color
                },
                h2: {
                    color: mode === "light" ? "#292929" : "#b9b9b9",
                    lineHeight: "1.3em"
                },
                h3: {
                    color: mode === "light" ? "#737373" : "#a7a7a7",
                    lineHeight: "1.3em"
                }
            },
            button: {
                "borderRadius": "5000px"
            },
            palette: {
                mode,
                ...mode === "light" ? {
                    primary: {
                        main: "#0092ff"
                    },
                    // palette values for light mode
                    divider: "#d6d6d6",
                    Drawer: "#ffffff",
                    background: {
                        default: "#ffffff"
                    },
                    text: {
                        primary: "#000000"
                    }
                } : {
                    // palette values for dark mode
                    divider: "#353535",
                    background: {
                        default: "#232323"
                    },
                    primary: {
                        main: "#0092ff"
                    },
                    text: {
                        primary: "#000000"
                    }
                }
            }
        });
    return getDesignTokens;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeHook);


/***/ })

};
;