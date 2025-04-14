"use strict";
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 2994:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2485);
/* harmony import */ var _src_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5211);
/* harmony import */ var _src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1436);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__, _src_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_5__]);
([_src_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__, _src_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// @ts-nocheck
const Layout = ({ navbarSx , title , children , desc  })=>{
    const { 0: isOpen , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const toggleDrawer = (state)=>{
        setOpen(state !== undefined ? state : !isOpen);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title || "Leo Reus Personal Portfolio| Web Developer"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "shortcut icon",
                        href: "https://res.cloudinary.com/dwcu3wcol/image/upload/v1657099811/log_nkmcys.jpg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: `${desc || "Leo Reus"}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: "Leo Reus Personal Portfolio | Web Developerr"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: "https://leoreusportfolio.netlify.app/"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: "Leo | Web Developer based in Hungary. And this is my Portfolio and my blog "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: "https://res.cloudinary.com/dwcu3wcol/image/upload/v1658929513/log-removebg-preview_fygpsd.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        httpEquiv: "content-language",
                        content: "en"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: "Personal Portfolio"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "author",
                        content: "Leo Reus"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "publisher",
                        content: "publisher"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "copyright",
                        content: "copyright"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "page-topic",
                        content: "Web Development"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "page-type",
                        content: "Blogging"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "audience",
                        content: "Everyone"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                toggleDrawer: toggleDrawer,
                navbarSx: navbarSx
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                isOpen: isOpen,
                toggleDrawer: toggleDrawer
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                className: "site-content",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5211:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2485);
/* harmony import */ var _DrawerItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7360);
/* harmony import */ var gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3183);
/* harmony import */ var gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5656);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8654);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__, _DrawerItem__WEBPACK_IMPORTED_MODULE_4__, _pages_app__WEBPACK_IMPORTED_MODULE_7__]);
([_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__, _DrawerItem__WEBPACK_IMPORTED_MODULE_4__, _pages_app__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const CustomDrawer = ({ isOpen , toggleDrawer  })=>{
    gsap__WEBPACK_IMPORTED_MODULE_6___default().registerPlugin((gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_5___default()));
    const colorMode = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_7__.ColorModeContext);
    const color = colorMode.mode === "light" ? "black" : "white";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Drawer, {
        anchor: "right",
        open: isOpen,
        onClose: ()=>toggleDrawer(false),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    px: ".5em",
                    zIndex: "555555",
                    display: "flex",
                    width: "300px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "0 auto"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        color: color,
                        toggleDrawer: toggleDrawer,
                        colorMode: colorMode
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                        onClick: ()=>toggleDrawer(false),
                        size: "large",
                        sx: {
                            padding: 0,
                            ":hover": {
                                color
                            }
                        },
                        edge: "start",
                        "aria-label": "menu",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default()), {
                            sx: {
                                margin: ".6em .5em"
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                sx: {
                    borderColor: "#565656"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    pt: "1em",
                    height: "100%"
                },
                children: _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__/* .Links.map */ .y.map((link)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DrawerItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        isToggleTheme: link?.isToggleTheme,
                        toggleDrawer: toggleDrawer,
                        url: link.url,
                        Icon: link.Icon,
                        text: link.text
                    }, link.text);
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomDrawer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7360:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5656);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_app__WEBPACK_IMPORTED_MODULE_6__]);
_pages_app__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const DrawerItem = ({ text , Icon , url , toggleDrawer , isToggleTheme  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let isScrollTo = text === "Projects";
    const colorMode = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_6__.ColorModeContext);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
        onClick: ()=>{
            if (isToggleTheme) {
                toggleDrawer(false);
                isToggleTheme && colorMode.toggleColorMode();
                return;
            }
            toggleDrawer(false);
            router.push(`${url || "/"}`);
            isScrollTo && gsap__WEBPACK_IMPORTED_MODULE_4___default().to(window, {
                duration: 2,
                scrollTo: `#ProjectSection`
            });
        // isToggleTheme && colorMode.toggleColorMode()
        },
        disablePadding: true,
        sx: {
            my: ".5em"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
            sx: {
                py: ".75em"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                    variant: "h1",
                    fontSize: ".95em",
                    fontWeight: "500",
                    children: text
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





function Copyright() {
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Divider, {}),
            /*#__PURE__*/ _jsx(Box, {
                maxWidth: "lg",
                sx: {
                    textAlign: "center",
                    margin: "1em auto"
                },
                children: /*#__PURE__*/ _jsxs(Typography, {
                    variant: "h1",
                    fontSize: "1em",
                    children: [
                        "Copyright \xa9 ",
                        /*#__PURE__*/ _jsx(Link, {
                            color: "inherit",
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://onbeirut.onrender.com",
                            children: /*#__PURE__*/ _jsx("a", {
                                style: {
                                    color: "#0092ff"
                                },
                                children: "onbeirut.onrender.com"
                            })
                        }),
                        " ",
                        " ",
                        new Date().getFullYear(),
                        "."
                    ]
                })
            })
        ]
    });
}
const styles = {
    mt: "1em",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    flexWrap: "wrap",
    color: "white"
};
function Footer() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    width: "100%",
                    color: "white",
                    minHeight: "200px",
                    display: "flex",
                    margin: "0 auto"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    sx: {
                        gap: "1.5em",
                        mx: {
                            xs: "3vw",
                            lg: "auto"
                        },
                        my: "2em"
                    },
                    maxWidth: "lg",
                    container: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            sm: 6,
                            md: 5
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            sm: 4,
                            md: 3,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "h1",
                                    fontSize: "1.4em",
                                    fontWeight: "400",
                                    children: "Links"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    className: "link",
                                    sx: styles,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            style: {
                                                color: "#0092ff"
                                            },
                                            className: "FooterLink",
                                            onClick: ()=>{
                                                router.push("/");
                                                gsap__WEBPACK_IMPORTED_MODULE_1___default().to(window, {
                                                    duration: .8,
                                                    scrollTo: `#hero`
                                                });
                                            },
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/contact",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                style: {
                                                    color: "#0092ff"
                                                },
                                                children: " Contact"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            className: "FooterLink",
                                            style: {
                                                color: "#0092ff"
                                            },
                                            onClick: ()=>{
                                                router.push("/");
                                                gsap__WEBPACK_IMPORTED_MODULE_1___default().to(window, {
                                                    duration: .5,
                                                    scrollTo: `#about`
                                                });
                                            },
                                            children: "About"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            sm: 3,
                            md: 3,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "h1",
                                    fontSize: "1.4em",
                                    fontWeight: "400",
                                    children: "Contact"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    className: "link",
                                    sx: styles,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            target: "_blank",
                                            rel: "noreferrer",
                                            style: {
                                                color: "#0092ff"
                                            },
                                            href: "https://github.com/Leoka2000",
                                            children: "Github"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            variant: "h1",
                                            fontSize: "1em",
                                            children: "lreusoliveira@gmail.com"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            variant: "h1",
                                            fontSize: "1em",
                                            children: "Debrecen/Hungary"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            variant: "h1",
                                            fontSize: "1em",
                                            children: "+36/705819992"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 8654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Logo_Logo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Mui/CustomLink.tsx



const CustomLink = ({ fontWeight ="300" , text , href , handleClick , color ="white"  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
            onClick: handleClick && handleClick,
            sx: {
                cursor: "pointer",
                color,
                fontWeight
            },
            children: text
        })
    });
};
/* harmony default export */ const Mui_CustomLink = (CustomLink);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
;// CONCATENATED MODULE: ./src/components/Logo/Logo.tsx





const Logo = ({ toggleDrawer , colorMode , color  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        onClick: ()=>{
            toggleDrawer(false);
            if (router.pathname !== "/") {
                console.log("pathname: ", router);
                router.push("/");
            }
            external_gsap_default().to(window, {
                duration: 1,
                scrollTo: `#hero`
            });
        },
        sx: {
            flex: 1,
            cursor: "pointer",
            display: "flex",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: `${colorMode.mode === "dark" ? "logoImg " : ""}small`,
                src: "https://res.cloudinary.com/dwcu3wcol/image/upload/v1658929513/log-removebg-preview_fygpsd.png",
                alt: ""
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Mui_CustomLink, {
                color: color,
                fontWeight: "600",
                text: "Leo Reus",
                href: "/"
            })
        ]
    });
};
/* harmony default export */ const Logo_Logo = (Logo);


/***/ }),

/***/ 2485:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "y": () => (/* binding */ Links)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3467);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_DarkMode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5262);
/* harmony import */ var _mui_icons_material_DarkMode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DarkMode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5656);
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8654);
/* harmony import */ var _mui_icons_material_AssignmentTurnedIn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6913);
/* harmony import */ var _mui_icons_material_AssignmentTurnedIn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AssignmentTurnedIn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_ConnectWithoutContact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2289);
/* harmony import */ var _mui_icons_material_ConnectWithoutContact__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ConnectWithoutContact__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_app__WEBPACK_IMPORTED_MODULE_7__]);
_pages_app__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const Links = [
    {
        text: "Home",
        Icon: (_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5___default()),
        url: "/"
    },
    {
        text: "Contact",
        Icon: (_mui_icons_material_ConnectWithoutContact__WEBPACK_IMPORTED_MODULE_10___default()),
        url: "/contact"
    },
    {
        text: "Projects",
        Icon: (_mui_icons_material_AssignmentTurnedIn__WEBPACK_IMPORTED_MODULE_9___default()),
        url: "/"
    },
    {
        text: "Theme",
        Icon: (_mui_icons_material_DarkMode__WEBPACK_IMPORTED_MODULE_6___default()),
        url: "/",
        isToggleTheme: true
    }
];
const Navbar = ({ toggleDrawer , navbarSx  })=>{
    const colorMode = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_7__.ColorModeContext);
    const color = colorMode.mode === "light" ? "black" : "white";
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.AppBar, {
        sx: {
            background: "transparent",
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            py: ".45em",
            zIndex: "555",
            backdropFilter: "blur(6px)",
            position: "fixed",
            ...navbarSx
        },
        position: "static",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default()), {
            sx: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "0 auto"
            },
            maxWidth: "lg",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    color: color,
                    toggleDrawer: toggleDrawer,
                    colorMode: colorMode
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                    sx: {
                        color,
                        ":hover": {
                            color
                        },
                        ":focus": {
                            color
                        }
                    },
                    onClick: ()=>toggleDrawer(),
                    size: "large",
                    edge: "start",
                    "aria-label": "menu",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default()), {})
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;