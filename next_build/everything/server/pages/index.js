"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,888];
exports.modules = {

/***/ 5075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Sections_TechTools_TechTools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7920);
/* harmony import */ var _src_components_Sections_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9997);
/* harmony import */ var _src_components_Sections_Perks_Perks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7746);
/* harmony import */ var _src_components_Sections_Projects_Projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4635);
/* harmony import */ var _src_components_Sections_CallToAction_CTA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9511);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_gsap_CursorAnimation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2535);
/* harmony import */ var _src_components_Sections_About_About__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9959);
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2994);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Sections_TechTools_TechTools__WEBPACK_IMPORTED_MODULE_2__, _src_components_Sections_About_About__WEBPACK_IMPORTED_MODULE_9__, _Layout_Layout__WEBPACK_IMPORTED_MODULE_10__]);
([_src_components_Sections_TechTools_TechTools__WEBPACK_IMPORTED_MODULE_2__, _src_components_Sections_About_About__WEBPACK_IMPORTED_MODULE_9__, _Layout_Layout__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Home = ({ projectsArray , iconsArray  })=>{
    const ball = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (ball && ball.current) {
            (0,_src_gsap_CursorAnimation__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(ball.current);
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Layout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        desc: `Leo Reus Portfolio`,
        title: "Leo Reus",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            sx: {
                margin: "0 auto",
                color: "white"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Sections_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Sections_Perks_Perks__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Sections_TechTools_TechTools__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Sections_Projects_Projects__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Sections_About_About__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Sections_CallToAction_CTA__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    ref: ball,
                    sx: {
                        display: {
                            xs: "none",
                            md: "block"
                        }
                    },
                    className: "ball"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
async function getStaticProps() {
    function removeEmpty(obj) {
        return Object.fromEntries(Object.entries(obj).filter(([_, v])=>v != null && v != false));
    }
    try {
        // first, grab our Contentful keys from the .env file
        const space = "k461xaf6lhl8";
        const accessToken = "T9X2MvTZr4fQGF8khAsXRUUGCGRqtvAVRxTdMJOVRj4";
        // then, send a request to Contentful (using the same URL from GraphiQL)
        const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${accessToken}`
            },
            // send the query we wrote in GraphiQL as a string
            body: JSON.stringify({
                // all requests start with "query: ", so we'll stringify that for convenience
                query: `
                {
                  projectCollection {
                    items {
                      title
                      repoUrl
                      siteUrl
                      description
                      img
                    }
                  }
                  iconsCollection {
                    items {
                      filter
                      svg
                      title
                      isBackend
                    }
                  }
                }
                
                  `
            })
        });
        // grab the data from our response
        const { data  } = await res.json();
        // const data :any = {}
        if (!data || data?.length < 1) {
            throw "Error fetching data";
        }
        let iconsArray = [];
        for(let i = 0; i < data?.iconsCollection?.items.length; i++){
            let clearedIcon = removeEmpty(data?.iconsCollection.items[i]);
            iconsArray.push(clearedIcon);
        }
        return {
            props: {
                projectsArray: data?.projectCollection.items,
                iconsArray
            }
        };
    } catch (err) {
        console.log("err: ", err);
        return {
            props: {
                data: null
            }
        };
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9959:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ReadMore_ReadMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5569);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5656);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_app__WEBPACK_IMPORTED_MODULE_5__]);
_pages_app__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const About = ()=>{
    const colorMode = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_5__.ColorModeContext);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
            id: "about",
            maxWidth: "lg",
            sx: {
                margin: "0 auto",
                py: "6em"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                container: true,
                sx: {
                    justifyContent: {
                        sm: "center",
                        md: "space-between"
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 12,
                        sm: 12,
                        md: 4,
                        lg: 5,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                maxWidth: "400px",
                                width: "100%",
                                height: "450px",
                                margin: "0 auto",
                                boxShadow: {
                                    xs: "-.5em 1.5em 0px #0092ff",
                                    sm: "-1.5em 1.5em 0px #0092ff"
                                },
                                position: "relative"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    sx: {
                                        width: "100px",
                                        height: "100px",
                                        zIndex: "0",
                                        position: "absolute",
                                        right: {
                                            xs: "-4%",
                                            sm: "90%"
                                        },
                                        bottom: {
                                            xs: "-5%",
                                            sm: "-10%"
                                        },
                                        background: "transparent",
                                        backgroundImage: colorMode.mode === "dark" ? "radial-gradient(white 2px, transparent 0)" : "radial-gradient(black 2px, transparent 0)",
                                        backgroundSize: "15px 13px"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    alt: "Personal Image",
                                    className: "img1 ",
                                    layout: "fill",
                                    src: "/me/hero-leo.jpg"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 12,
                        sm: 12,
                        md: 7.5,
                        lg: 7,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                sx: {
                                    pb: ".5em"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        variant: "h1",
                                        sx: {
                                            fontSize: {
                                                xs: "2.2em",
                                                sm: "2.5em",
                                                md: "3em"
                                            },
                                            py: ".5em",
                                            pt: {
                                                xs: "1.8em",
                                                md: 0
                                            }
                                        },
                                        fontWeight: "600",
                                        children: "About Me, Im Leo Reus"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        variant: "h2",
                                        sx: {
                                            maxWidth: "570px",
                                            fontSize: {
                                                xs: ".8em",
                                                sm: "1em"
                                            }
                                        },
                                        children: "A 24-year-old Hungary-based software developer. I first started developing games using Unity3D, but soon realized I preferred web development, and I've been building and working on that for the past 3 years now."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                variant: "h2",
                                sx: {
                                    maxWidth: "570px",
                                    fontSize: {
                                        xs: ".8em",
                                        sm: "1em"
                                    },
                                    pb: ".5em"
                                },
                                children: "Being self-taught made me appreciate education; thus, I'm studying programming and biochemical engineering simultaneously. Chemistry and technology are both my passions."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReadMore_ReadMore__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                children: "Aside from working hard, I tend to enjoy simple things like reading, petting dogs, hitting the gym, and other things we humans do. If any of what I said seems interesting, then please do not hesitate to send me a message."
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_5__);






const CTA = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        gsap__WEBPACK_IMPORTED_MODULE_5___default().to(".CTAbox", {
            left: "0%",
            duration: .8,
            scrollTrigger: {
                trigger: ".CTAbox",
                start: "top 65%"
            }
        });
        gsap__WEBPACK_IMPORTED_MODULE_5___default().to(".CTAcontainer p", {
            delay: .8,
            opacity: 1,
            scrollTrigger: {
                trigger: ".CTAbox",
                start: "top 65%"
            }
        });
        gsap__WEBPACK_IMPORTED_MODULE_5___default().to(".ctabtn", {
            delay: .95,
            opacity: 1,
            scrollTrigger: {
                trigger: ".CTAbox",
                start: "top 65%"
            }
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            width: "100%",
            height: "300px",
            my: "6em",
            position: "relative"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            className: "CTAbox",
            sx: {
                width: "100%",
                top: 0,
                left: "-100%",
                position: "absolute",
                background: "#0092ff"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
                className: "CTAcontainer ",
                maxWidth: "lg",
                sx: {
                    margin: "0 auto",
                    py: "3em"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "t25o0",
                        sx: {
                            textAlign: "center",
                            fontSize: {
                                xs: "1.5em",
                                sm: "2em",
                                md: "2.5em"
                            }
                        },
                        fontWeight: "600",
                        children: "What's holding you back? Send me a message!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            margin: "1.5em 0 auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            onClick: ()=>router.push("/contact"),
                            className: "ctabtn",
                            sx: {
                                color: "white",
                                opacity: 0,
                                border: "1px solid white",
                                mt: ".5em",
                                ":hover": {
                                    background: "white",
                                    color: "#0092ff"
                                },
                                padding: ".5em 3.5em"
                            },
                            variant: "outlined",
                            children: "Contact"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CTA);


/***/ }),

/***/ 9997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "s": () => (/* binding */ btnStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3183);
/* harmony import */ var gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _gsap_HeroSectionAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5705);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);







const btnStyles = {
    padding: ".77em 1.5em",
    borderRadius: "3px"
};
const Hero = ()=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const q = gsap__WEBPACK_IMPORTED_MODULE_2___default().utils.selector(ref);
    gsap__WEBPACK_IMPORTED_MODULE_2___default().registerPlugin((gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4___default()));
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        (0,_gsap_HeroSectionAnimation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(q);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
        id: "hero",
        maxWidth: "lg",
        sx: {
            margin: "0 auto",
            py: {
                xs: "7.5em",
                sm: "8.5em"
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            container: true,
            sx: {
                justifyContent: "space-between"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    item: true,
                    xs: 12,
                    sm: 10,
                    md: 8,
                    lg: 7,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        ref: ref,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                className: "t1",
                                variant: "h1",
                                sx: {
                                    fontSize: {
                                        xs: "2.4em",
                                        sm: "3.4em",
                                        md: "3.8em"
                                    },
                                    textAlign: "left",
                                    transform: "translateY(40px)",
                                    opacity: 0,
                                    pt: "1em",
                                    fontWeight: "600"
                                },
                                children: "The place where your business expands"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "h2",
                                className: "secondary t2 t25o0",
                                sx: {
                                    textAlign: "left",
                                    pt: "1.5em",
                                    fontSize: {
                                        xs: ".9em",
                                        sm: "1em"
                                    },
                                    maxWidth: "570px",
                                    fontWeight: "300"
                                },
                                children: "Hey there! Call me Leo Reus. I enjoy creating quality web apps, ones that suit your desires and needs using robust technologies and crispy design patterns."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                sx: {
                                    my: "2.5em",
                                    gap: ".8em",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "center"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    className: " b1 explore offset ",
                                    sx: {
                                        opacity: 0,
                                        borderRadius: 0,
                                        padding: ".75em 2.5em",
                                        flex: {
                                            xs: 1,
                                            sm: "inherit"
                                        }
                                    },
                                    onClick: ()=>gsap__WEBPACK_IMPORTED_MODULE_2___default().to(window, {
                                            duration: 2,
                                            scrollTo: `#ProjectSection`
                                        }),
                                    children: "View Projects"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    sx: {
                        mb: {
                            xs: "3.5em",
                            sm: "4em",
                            lg: "1em"
                        },
                        mr: {
                            sm: "1em",
                            md: "2em",
                            lg: "0em"
                        },
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "flex-end"
                    },
                    item: true,
                    xs: 12,
                    sm: 12,
                    md: 12,
                    lg: 5,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            borderRadius: "6px",
                            width: {
                                xs: "100%",
                                sm: "350px",
                                md: "400px"
                            }
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            className: "mainBox",
                            sx: {
                                opacity: 0,
                                display: "flex",
                                flexDirection: "column",
                                position: "relative",
                                height: "460px",
                                boxShadow: {
                                    xs: ".5em 3em 0 #313131 ",
                                    sm: "2em 3em 0px #313131"
                                }
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    layout: "fill",
                                    style: {
                                        opacity: 0,
                                        borderRadius: "6px",
                                        zIndex: "2"
                                    },
                                    className: "img1",
                                    src: "/me/leo-about.jpg",
                                    alt: "Personal Image"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    className: "gradientBg",
                                    sx: {
                                        width: "100px",
                                        height: "100px",
                                        zIndex: "0",
                                        position: "absolute",
                                        right: {
                                            xs: "-1%",
                                            sm: "-5%"
                                        },
                                        opacity: 0,
                                        bottom: "-5%",
                                        background: "transparent",
                                        backgroundImage: "radial-gradient(white 2px, transparent 0)",
                                        backgroundSize: "15px 13px"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    className: "quoteBox",
                                    sx: {
                                        zIndex: "2",
                                        position: "absolute",
                                        bottom: {
                                            xs: "0%",
                                            lg: "-5%"
                                        },
                                        width: "100%",
                                        right: {
                                            sm: "25%"
                                        },
                                        top: "105%",
                                        overflow: "hidden",
                                        opacity: 0,
                                        background: "#0092ff"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                        sx: {
                                            fontWeight: "300",
                                            fontSize: ".85em",
                                            padding: "1em"
                                        },
                                        children: `"Not having anything around to read is dangerous - you have to content yourself with life itself, and that can lead you to take risks."
– Michel Houellebecq`
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 4635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Projects_Projects)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/components/Sections/Perks/Perks.tsx + 1 modules
var Perks = __webpack_require__(7746);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Sections/Hero/Hero.tsx
var Hero = __webpack_require__(9997);
;// CONCATENATED MODULE: ./src/components/Sections/Projects/ProjectCard.tsx




const ProjectCard = ({ isReversed , img , className , repoUrl , siteUrl , title , description  })=>{
    const ref = (0,external_react_.useRef)(null);
    const { 0: cursorPosition , 1: setCursorPosition  } = (0,external_react_.useState)({
        y: 0,
        x: 0
    });
    const { 0: elementSize , 1: setElementSize  } = (0,external_react_.useState)({
        x: 0,
        y: 0
    });
    const onMouseMove = (e)=>{
        setCursorPosition({
            y: e.screenY,
            x: e.screenX
        });
    };
    (0,external_react_.useEffect)(()=>{
        if (ref && ref.current) setElementSize({
            x: ref.current["offsetWidth"],
            y: ref.current["offsetHeight"]
        });
    }, []);
    const rotation = `rotateY(${(elementSize.x / 2 - cursorPosition.x) / 25}deg) rotateX(${(elementSize.y / 2 - cursorPosition.y) / 30}deg)`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        className: className,
        sx: {
            display: "flex",
            my: {
                xs: "0em",
                sm: "1em",
                md: "3em"
            },
            flexDirection: {
                xs: "column",
                md: `${isReversed ? "row" : "row-reverse"}`
            },
            alignItems: "center",
            transform: isReversed ? "translateX(-150%)" : "translateX(150%)"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    width: {
                        xs: "100%",
                        sm: "600px"
                    },
                    minWidth: {
                        xs: "auto",
                        sm: "250px",
                        md: "390px"
                    },
                    height: "400px",
                    position: "relative"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    alt: "Project Image",
                    className: "img1",
                    src: `${img}`
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                ref: ref,
                onMouseMove: onMouseMove,
                sx: {
                    transition: " all .1s ease",
                    "&:hover": {
                        transform: {
                            xs: ` translateY(-25%)`,
                            md: `${rotation} ${isReversed ? "translateX(-25%)" : "translateX(25%)"}`
                        }
                    },
                    borderRadius: "6px",
                    width: {
                        xs: "94%",
                        md: "auto"
                    },
                    position: "relative",
                    transform: {
                        xs: "translateY(-25%)",
                        md: `${isReversed ? "translateX(-25%)" : "translateX(25%)"}`
                    },
                    maxWidth: "600px",
                    padding: "2em 1.5em",
                    textAlign: "left",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    background: "white",
                    color: "black",
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            color: "black",
                            sx: {
                                fontSize: "1.4em",
                                fontWeight: "500",
                                pb: ".25em"
                            },
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            color: "black",
                            variant: "h3",
                            sx: {
                                fontSize: {
                                    xs: ".83em",
                                    sm: ".9em"
                                },
                                fontWeight: "300"
                            },
                            children: description
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                gap: ".5em",
                                display: "flex",
                                flexWrap: "wrap",
                                mt: "1em"
                            },
                            children: [
                                siteUrl !== "https://fundhance.co.uk/" && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: siteUrl,
                                    rel: "noreferrer",
                                    target: "_blank",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        variant: "contained",
                                        sx: {
                                            ...Hero/* btnStyles */.s,
                                            padding: ".5em .8em",
                                            color: "white",
                                            border: "1px solid #0092ff"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            fontSize: "12px",
                                            children: "Live Site"
                                        })
                                    })
                                }),
                                repoUrl && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: `${repoUrl}`,
                                    rel: "noreferrer",
                                    target: "_blank",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        variant: "text",
                                        sx: {
                                            ...Hero/* btnStyles */.s,
                                            padding: ".5em .8em",
                                            color: "#0092ff",
                                            ":hover": {
                                                color: "#0092ff"
                                            }
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            fontSize: "12px",
                                            children: "Check Code"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Projects_ProjectCard = (ProjectCard);

// EXTERNAL MODULE: ./src/gsap/MainTitleAnimation.tsx
var MainTitleAnimation = __webpack_require__(3116);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
;// CONCATENATED MODULE: ./src/components/Sections/Projects/Projects.tsx







// Dummy data to replace server actions
const dummyProjectsArray = [
    {
        siteUrl: "https://fundhance.co.uk/",
        repoUrl: "",
        title: "FundHance",
        img: "/mockups/fundhancemockerup.png",
        description: "The Fundhance white-label software is a powerful tool for prop firms seeking to optimize their operations and drive growth. By automating tasks, enhancing risk management, and increasing profitability, the software offers a comprehensive solution. With the potential to reduce manual work by up to 30% and boost profits by 25%, Fundhance's software provides a competitive edge in the prop firm industry."
    },
    {
        siteUrl: "https://megyamelo.fly.dev/",
        repoUrl: "https://github.com/Leoka2000/megyamelo.git",
        title: "Megy a Mel\xf3",
        img: "/mockups/megymockup.png",
        description: "Application developed to help students of Hungarian universities to get jobs. It is currently being used by a variaety of students of different institutions in the country."
    },
    {
        siteUrl: "https://setimaideaink.netlify.app/",
        repoUrl: "https://github.com/Leoka2000/LuckyzLinez",
        title: "S\xe9tima idea ink",
        img: "/mockups/cauanmockup.png",
        description: "Custom portfolio website I made for a freelance client. "
    },
    {
        siteUrl: "https://futche.fly.dev/",
        repoUrl: "https://github.com/Leoka2000/e-commerce-website",
        title: "Futche",
        img: "/mockups/leocafemockup.png",
        description: 'My first "complex" web app. It is always good to look back and see how much we can improve over the years.'
    }, 
];
const Projects = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,MainTitleAnimation/* default */.Z)(".title3", ".title4");
        setTimeout(()=>{
            for(let i = 0; i < dummyProjectsArray.length; i++){
                external_gsap_default().to(`.p${i}`, {
                    duration: 0.8,
                    transform: "translateX(0%)",
                    ease: "easeIn",
                    scrollTrigger: {
                        trigger: `.p${i}`,
                        start: "top 60%"
                    }
                });
            }
        }, 100);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            overflowX: "hidden"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                id: "ProjectSection",
                maxWidth: "lg",
                sx: {
                    margin: "0 auto",
                    py: "6em"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            item: true,
                            sx: Perks/* centeredStyles */.J,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    className: "title3 t25o0",
                                    variant: "h1",
                                    sx: {
                                        fontSize: {
                                            xs: "2.2em",
                                            sm: "2.5em",
                                            md: "3em"
                                        }
                                    },
                                    fontWeight: "600",
                                    children: "Successful Projects I'm Proud Of"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    className: "title4 t25o0",
                                    variant: "h2",
                                    sx: {
                                        pt: "1.5em",
                                        maxWidth: "570px",
                                        fontSize: {
                                            xs: ".8em",
                                            sm: "1em"
                                        }
                                    },
                                    children: "No better way to get experience than real-life projects"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: {
                                ...Perks/* centeredStyles */.J,
                                mt: "3em"
                            },
                            children: dummyProjectsArray.map((project, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Projects_ProjectCard, {
                                    className: `p${index}`,
                                    isReversed: index % 2 === 0,
                                    siteUrl: project.siteUrl,
                                    repoUrl: project.repoUrl,
                                    title: project.title,
                                    img: project.img,
                                    description: project.description
                                }, project.title))
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: {
                                margin: "0 auto",
                                mt: "3em"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                                title: "More Projects Soon",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    className: "loadMore",
                                    variant: "contained",
                                    sx: {
                                        opacity: 0,
                                        padding: ".5em 3.5em",
                                        background: "transparent",
                                        border: "1px solid",
                                        color: "#0092ff",
                                        ":hover": {
                                            border: "1px solid transparent"
                                        }
                                    },
                                    children: "Load More"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                className: "divider"
            })
        ]
    });
};
/* harmony default export */ const Projects_Projects = (Projects);


/***/ }),

/***/ 5569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const ReadMore = ({ children  })=>{
    const text = children;
    const { 0: isReadMore , 1: setIsReadMore  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const toggleReadMore = ()=>{
        setIsReadMore(!isReadMore);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
        variant: "h2",
        sx: {
            maxWidth: "570px",
            fontSize: {
                xs: ".82em",
                sm: "1em"
            }
        },
        children: [
            isReadMore ? text.slice(0, 90) : text,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                style: {
                    cursor: "pointer",
                    color: "#0092ff"
                },
                onClick: toggleReadMore,
                children: isReadMore ? "...read more" : " show less"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReadMore);


/***/ }),

/***/ 7920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5656);
/* harmony import */ var _gsap_MainTitleAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3116);
/* harmony import */ var _Perks_Perks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7746);
/* harmony import */ var _ToolCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6231);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_app__WEBPACK_IMPORTED_MODULE_3__]);
_pages_app__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








// Updated dummyIconsArray with all tools
const dummyIconsArray = [
    {
        title: "Django - Python",
        svg: "/icons/django.svg",
        isBackend: true,
        filter: false
    },
    {
        title: "Laravel - PHP",
        svg: "/icons/laravel.svg",
        isBackend: true,
        filter: false
    },
    {
        title: "ASP.NET - C#",
        svg: "/icons/aspnet.svg",
        isBackend: true,
        filter: false
    },
    {
        title: "Angular",
        svg: "/icons/angular.svg",
        isBackend: false,
        filter: false
    },
    {
        title: "JavaScript",
        svg: "/icons/js.svg",
        isBackend: false,
        filter: false
    },
    {
        title: "ReactJS",
        svg: "/icons/reactjs.svg",
        isBackend: false,
        filter: false
    },
    {
        title: "TypeScript",
        svg: "/icons/typescript.svg",
        isBackend: false,
        filter: false
    },
    {
        title: "TailwindCSS",
        svg: "/icons/tailwindcss.svg",
        isBackend: true,
        filter: false
    }, 
];
const dummyIconsArrayBackend = [
    {
        title: "MySQL",
        svg: "/icons/mysql.svg",
        isBackend: true,
        filter: false
    },
    {
        title: "PostgreSQL",
        svg: "/icons/postgresql.svg",
        isBackend: true,
        filter: false
    },
    {
        title: "GraphQL",
        svg: "/icons/graphql.svg",
        isBackend: true,
        filter: false
    },
    {
        title: "Docker",
        svg: "/icons/docker.svg",
        isBackend: true,
        filter: false
    },
    {
        title: "AWS",
        svg: "/icons/aws.svg",
        isBackend: true,
        filter: true
    },
    {
        title: "Redis DB",
        svg: "/icons/redis.svg",
        isBackend: true,
        filter: false
    },
    {
        title: "Jira",
        svg: "/icons/jira.svg",
        isBackend: true,
        filter: false
    },
    {
        title: "Jenkins",
        svg: "/icons/jenkins.svg",
        isBackend: true,
        filter: false
    }
];
const TechTools = ()=>{
    // Combine FrontendTools and OtherTools into a single Tools array
    const Tools = dummyIconsArray;
    const ToolsBackend = dummyIconsArrayBackend;
    const colorMode = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.ColorModeContext);
    const isfilterMode = (item)=>colorMode?.mode === "light" ? false : item?.filter;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_gsap_MainTitleAnimation__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(".title1", ".title2");
        gsap__WEBPACK_IMPORTED_MODULE_7___default().to(".secondTitle", {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: ".secondTitle",
                start: "top 70%"
            }
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
                maxWidth: "lg",
                sx: {
                    margin: "0 auto",
                    py: {
                        xs: "6em"
                    }
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    container: true,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            sx: _Perks_Perks__WEBPACK_IMPORTED_MODULE_5__/* .centeredStyles */ .J,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    className: "title1 t25o0",
                                    variant: "h1",
                                    sx: {
                                        fontSize: {
                                            xs: "2.2em",
                                            sm: "2.5em",
                                            md: "3em"
                                        },
                                        mb: "3rem"
                                    },
                                    fontWeight: "600",
                                    children: "Tools Of The Present And Future"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    variant: "h2",
                                    className: "secondary title2 t25o0",
                                    sx: {
                                        pt: "1.5em",
                                        maxWidth: "570px",
                                        fontSize: {
                                            xs: ".8em",
                                            sm: "1em"
                                        }
                                    },
                                    children: "Technologies I prefer using."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            sx: {
                                ..._Perks_Perks__WEBPACK_IMPORTED_MODULE_5__/* .centeredStyles */ .J,
                                flexDirection: "row",
                                justifyContent: {
                                    xs: "center"
                                },
                                mt: "1em",
                                flexWrap: "wrap"
                            },
                            xs: 12,
                            item: true,
                            children: Tools.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ToolCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    className: item.isBackend ? "toolCard2" : "toolCard1",
                                    filter: isfilterMode(item),
                                    svg: item.svg,
                                    title: item.title
                                }, item.title))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            sx: _Perks_Perks__WEBPACK_IMPORTED_MODULE_5__/* .centeredStyles */ .J,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "h2",
                                className: "secondary title2 t25o0",
                                sx: {
                                    pt: "3em",
                                    maxWidth: "570px",
                                    fontSize: {
                                        xs: ".8em",
                                        sm: "1em"
                                    }
                                },
                                children: "My picks for database and DevOps oriented technologies"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            sx: {
                                ..._Perks_Perks__WEBPACK_IMPORTED_MODULE_5__/* .centeredStyles */ .J,
                                flexDirection: "row",
                                justifyContent: {
                                    xs: "center"
                                },
                                mt: "1em",
                                flexWrap: "wrap"
                            },
                            xs: 12,
                            item: true,
                            children: ToolsBackend.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ToolCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    className: item.isBackend ? "toolCard2" : "toolCard1",
                                    filter: isfilterMode(item),
                                    svg: item.svg,
                                    title: item.title
                                }, item.title))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TechTools);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TechTools_ToolCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@mui/material/Box"
const Box_namespaceObject = require("@mui/material/Box");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Sections/Perks/Perks.tsx + 1 modules
var Perks = __webpack_require__(7746);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
;// CONCATENATED MODULE: ./src/components/Sections/TechTools/ToolCard.tsx







const ToolCard = ({ title , svg , filter , className  })=>{
    (0,external_react_.useEffect)(()=>{
        external_gsap_default().to(`.${className}`, {
            opacity: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: `.${className}`,
                start: "top 70%"
            }
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        className: className,
        sx: {
            my: "1em",
            opacity: 0,
            maxWidth: "250px",
            transition: ".2s ease",
            width: {
                xs: "50%",
                sm: "33%"
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    ...Perks/* centeredStyles */.J,
                    width: {
                        xs: "35px",
                        sm: "60px"
                    },
                    height: {
                        xs: "40px",
                        sm: "60px"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    alt: "Icon",
                    className: `${filter ? "filter " : ""} icon`,
                    width: "100%",
                    height: "100%",
                    src: `${svg}`
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h3",
                sx: {
                    fontSize: {
                        xs: ".86em",
                        sm: "1em"
                    }
                },
                children: title
            })
        ]
    });
};
/* harmony default export */ const TechTools_ToolCard = (ToolCard);


/***/ }),

/***/ 2535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);

const CursorAnimation = (ball)=>{
    gsap__WEBPACK_IMPORTED_MODULE_0___default().set(".ball", {
        xPercent: -50,
        yPercent: -50
    });
    // const ball = document.querySelector(".ball");
    const pos = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };
    const mouse = {
        x: pos.x,
        y: pos.y
    };
    const speed = .1;
    const xSet = gsap__WEBPACK_IMPORTED_MODULE_0___default().quickSetter(ball, "x", "px");
    const ySet = gsap__WEBPACK_IMPORTED_MODULE_0___default().quickSetter(ball, "y", "px");
    window.addEventListener("mousemove", (e)=>{
        mouse.x = e.x;
        mouse.y = e.y;
    });
    gsap__WEBPACK_IMPORTED_MODULE_0___default().ticker.add(()=>{
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap__WEBPACK_IMPORTED_MODULE_0___default().ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorAnimation);


/***/ }),

/***/ 6913:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AssignmentTurnedIn");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 2289:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ConnectWithoutContact");

/***/ }),

/***/ 5262:
/***/ ((module) => {

module.exports = require("@mui/icons-material/DarkMode");

/***/ }),

/***/ 2472:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Devices");

/***/ }),

/***/ 8790:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Handyman");

/***/ }),

/***/ 3467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 1164:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Http");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 4960:
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 3183:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollToPlugin");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3139:
/***/ ((module) => {

module.exports = import("@emotion/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675,656,994,835], () => (__webpack_exec__(5075)));
module.exports = __webpack_exports__;

})();