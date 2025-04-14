"use strict";
exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 7746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ centeredStyles),
  "Z": () => (/* binding */ Perks_Perks)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Sections/Perks/PerkCard.tsx




const PerkCard = ({ text , title , Icon  })=>{
    (0,external_react_.useEffect)(()=>{
        external_gsap_default().to(".perkCard ", {
            opacity: 1,
            y: 0,
            delay: .25,
            stagger: .25,
            scrollTrigger: {
                trigger: ".perkCard h2",
                start: "top 80%"
            }
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        className: "perkCard",
        sx: {
            opacity: 0,
            transform: "translateY(15px)",
            width: {
                xs: "90%",
                sm: "45%",
                md: "30%"
            },
            my: "2em"
        },
        children: [
            Icon && /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                className: "cardIcon",
                sx: {
                    boxSizing: "content-box",
                    background: "#0092ff",
                    color: "white",
                    padding: ".55em",
                    borderRadius: "50%"
                },
                fontSize: "medium"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                variant: "h2",
                sx: {
                    pt: ".5em"
                },
                fontWeight: "400",
                fontSize: "1.5em",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                variant: "h3",
                sx: {
                    pt: "1em"
                },
                fontWeight: "300",
                fontSize: ".8em",
                className: "secondary",
                children: text
            })
        ]
    });
};
/* harmony default export */ const Perks_PerkCard = (PerkCard);

// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
var ScrollTrigger_default = /*#__PURE__*/__webpack_require__.n(ScrollTrigger_);
// EXTERNAL MODULE: ./src/gsap/MainTitleAnimation.tsx
var MainTitleAnimation = __webpack_require__(3116);
// EXTERNAL MODULE: external "@mui/icons-material/Handyman"
var Handyman_ = __webpack_require__(8790);
var Handyman_default = /*#__PURE__*/__webpack_require__.n(Handyman_);
// EXTERNAL MODULE: external "@mui/icons-material/Http"
var Http_ = __webpack_require__(1164);
var Http_default = /*#__PURE__*/__webpack_require__.n(Http_);
// EXTERNAL MODULE: external "@mui/icons-material/Devices"
var Devices_ = __webpack_require__(2472);
var Devices_default = /*#__PURE__*/__webpack_require__.n(Devices_);
;// CONCATENATED MODULE: ./src/components/Sections/Perks/Perks.tsx










const centeredStyles = {
    alignItems: "center",
    textAlign: "center",
    margin: "0 auto",
    width: "100%",
    display: "flex",
    flexDirection: "column"
};
external_gsap_default().registerPlugin((ScrollTrigger_default()));
const perksArray = [
    {
        title: "Continuous support",
        Icon: (Handyman_default()),
        text: "I will advance your web-based software to keep it efficient, competitive on the market. Using a well-established DevOps processes, It helps me roll out urgent updates within few hours and release new, planned functional modules every other week."
    },
    {
        title: "Back-end development",
        text: "I accurately implement the business logic of your web app on the back end. I always rely on proven frameworks to ensure fast and quality coding. And I build well structured APIs to integrate your web app with corporate or third-party systems and services",
        Icon: (Http_default())
    },
    {
        title: "Frontend design/dev",
        Icon: (Devices_default()),
        text: "As a web expert I tend to closely analyze the user audience to understand their needs and reflect these findings in UI design. Having agreed on the look and feel of a web app with project stakeholders, I push to bring it to life with smart front-end technologies."
    }
];
const Perks = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,MainTitleAnimation/* default */.Z)(".h1", ".h2");
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                maxWidth: "lg",
                sx: {
                    margin: "0 auto",
                    my: "4em"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: centeredStyles,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            className: "h1 t25o0",
                            variant: "h1",
                            sx: {
                                fontSize: {
                                    xs: "2.2em",
                                    sm: "2.5em",
                                    md: "3em"
                                }
                            },
                            fontWeight: "600",
                            children: "You\u2018re Safe And in Good Hands"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "h2",
                            className: "secondary h2",
                            sx: {
                                pt: "1.5em",
                                transform: "translateY(15px)",
                                opacity: 0,
                                maxWidth: "570px",
                                fontSize: {
                                    xs: ".8em",
                                    sm: "1em"
                                }
                            },
                            children: "Customer satisfaction comes first, and in order to do that I decided to pickup skills and principles to provide quality service."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: {
                                mt: "3em",
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "5%",
                                justifyContent: {
                                    xs: "center",
                                    sm: "space-between"
                                }
                            },
                            children: perksArray.map((perk)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx(Perks_PerkCard, {
                                    title: perk.title,
                                    text: perk.text,
                                    Icon: perk.Icon
                                }, perk.title);
                            })
                        })
                    ]
                })
            }),
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
            " "
        ]
    });
};
/* harmony default export */ const Perks_Perks = (Perks);


/***/ }),

/***/ 5705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);

const HeroSectionAnimation = (q)=>{
    gsap__WEBPACK_IMPORTED_MODULE_0___default().to(q(".t1"), {
        delay: ".25",
        opacity: "1",
        y: 0,
        duration: ".5",
        ease: "ease"
    });
    gsap__WEBPACK_IMPORTED_MODULE_0___default().to(q(".t2"), {
        delay: ".6",
        opacity: "1",
        y: 0,
        duration: ".4",
        ease: "ease"
    });
    gsap__WEBPACK_IMPORTED_MODULE_0___default().to(q(".b1"), {
        delay: "1.1",
        opacity: "1",
        duration: ".3"
    });
    gsap__WEBPACK_IMPORTED_MODULE_0___default().to(q(".b2"), {
        delay: "1.5",
        opacity: "1",
        duration: ".5"
    });
    gsap__WEBPACK_IMPORTED_MODULE_0___default().to(".mainBox", {
        delay: "1.4",
        opacity: "1",
        duration: ".6"
    });
    gsap__WEBPACK_IMPORTED_MODULE_0___default().to(".quoteBox", {
        delay: "1.8",
        opacity: "1",
        duration: ".6",
        top: "auto"
    });
    gsap__WEBPACK_IMPORTED_MODULE_0___default().to(".gradientBg", {
        delay: "2.3",
        opacity: "1",
        duration: ".8"
    });
    gsap__WEBPACK_IMPORTED_MODULE_0___default().to(".img1", {
        delay: "1.6",
        opacity: 1,
        duration: ".9"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSectionAnimation);


/***/ }),

/***/ 3116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);

const MainTitleAnimation = (t1, t2)=>{
    gsap__WEBPACK_IMPORTED_MODULE_0___default().to(t1, {
        duration: ".5",
        y: "0",
        opacity: 1,
        scrollTrigger: {
            trigger: t1,
            start: "center 65%"
        }
    });
    gsap__WEBPACK_IMPORTED_MODULE_0___default().to(t2, {
        delay: ".1",
        duration: ".6",
        y: "0",
        opacity: 1,
        scrollTrigger: {
            trigger: t2,
            start: "center 65%"
        }
    });
    gsap__WEBPACK_IMPORTED_MODULE_0___default().to(".loadMore", {
        duration: .5,
        opacity: 1,
        scrollTrigger: {
            trigger: ".loadMore",
            start: "top 90%"
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainTitleAnimation);


/***/ })

};
;