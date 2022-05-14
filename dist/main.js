/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/based.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/based.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/cog-outline.svg */ "./src/images/cog-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/granular.jpg */ "./src/images/granular.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/plus-box-outline.svg */ "./src/images/plus-box-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    transition: all .33s;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root.light {\n    --nav-bg: rgb(136, 188, 226);\n    --body-bg: rgb(255, 255, 255);\n    --color: rgb(31, 20, 20);\n    --cog-filter: none;\n    --cog-hover-filter: invert(25%);\n    --aside-bg: rgb(119, 154, 202);\n    --period-bg: rgb(192, 193, 255);\n    --project-bg: rgb(229, 97, 97);\n    --box-shadow: none;\n}\n\n:root.dark {\n    --nav-bg: rgb(8, 15, 33);\n    --body-bg: rgb(67, 18, 65);\n    --color: azure;\n    --cog-filter: invert(100%);\n    --cog-hover-filter: invert(75%);\n    --aside-bg: rgb(21, 38, 82);\n    --period-bg: rgb(26, 191, 191);\n    --project-bg: rgb(148, 108, 108);\n    --box-shadow:  0 0 5px 2px azure;\n}\n\nbody {\n    background: var(--body-bg);\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: auto auto;\n    /* min-height: 100vh; */\n}\n\n/* NAV */\n\nnav {\n    background: var(--nav-bg);\n    color: var(--color);\n    padding: 10px 20px;\n    display: flex;\n    justify-content: space-between;\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n}\n\nnav>div {\n    display: flex;\n    align-items: center;\n}\n\nnav .logo h1 {\n    margin-left: 20px;\n}\n\nnav .config .settings {\n    margin-right: 20px;\n    width: 30px;\n    height: 30px;\n    background-color: transparent;\n    border: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    filter: var(--cog-filter);\n}\n\nnav .config .settings:hover {\n    filter: var(--cog-hover-filter);\n}\n\nnav .config .settings:hover {\n    transform: rotate(90deg);\n}\n\nnav .logo .burger {\n    display: none;\n}\n\n/* ASIDE */\n\naside {\n    background: var(--aside-bg);\n    color: var(--color);\n    position: relative; \n    padding: 20px;\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n}\n\naside ul {\n    list-style: none;\n}\n\naside h2 {\n    font-size: 2rem;\n    margin: 20px 0;\n}\n\naside .activity button {\n    background: var(--period-bg);\n    /* box-shadow: var(--box-shadow); */\n    border: none;\n    width: 100%;\n    text-align: start;\n    border-radius: 5px;\n    margin: 0 20px 20px 0;\n    padding: 10px;\n    font-size: 1.25rem;\n}\n\naside #active-sidebar-element {\n    border: 3px solid yellow;\n    color: azure;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n}\n\naside .projects:last-child {\n    margin-bottom: 75px;\n}\n\naside .add-project {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    background-color: rgb(251, 251, 252);\n    filter: invert(32%) sepia(96%) saturate(558%) hue-rotate(182deg) brightness(94%) contrast(200%);\n    border-radius: 10px;\n    border: none;\n    width: 50px;\n    height: 50px;\n    position: absolute;\n    right: calc(50% - 25px);\n}\n\naside .add-project:hover {\n    filter: invert(32%) sepia(96%) saturate(558%) hue-rotate(182deg) brightness(94%) contrast(150%);\n}\n\naside .add-project:active {\n    transform: scale(.975);\n}\n\naside .project {\n    background: var(--project-bg);\n    /* box-shadow: var(--box-shadow); */\n    color: azure;\n    text-align: center;\n    margin: 20px 5px;\n    padding: 10px;\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\naside .project h3 {\n    margin: 0 10px;\n}\n\naside .project img {\n    filter: invert(100%);\n    width: 30px;\n    height: 30px;\n}\n\naside .project canvas {\n    border: 2px solid yellow;\n    border-radius: 50%;\n}\n\n/* MAIN */\n\nmain {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n}\n\n@media screen and (max-width: 480px) {\n    body {\n        display: block;\n        position: relative;\n    }\n\n    nav .logo .burger {\n        display: flex;\n    }\n\n    aside {\n        width: 90%;\n        height: 100%;\n        position: absolute;\n        transform: translateX(-100%);\n        z-index: 1;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/based.css"],"names":[],"mappings":"AAAA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,oBAAoB;IACpB,yCAAyC;AAC7C;;AAEA;IACI,4BAA4B;IAC5B,6BAA6B;IAC7B,wBAAwB;IACxB,kBAAkB;IAClB,+BAA+B;IAC/B,8BAA8B;IAC9B,+BAA+B;IAC/B,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,0BAA0B;IAC1B,cAAc;IACd,0BAA0B;IAC1B,+BAA+B;IAC/B,2BAA2B;IAC3B,8BAA8B;IAC9B,gCAAgC;IAChC,gCAAgC;AACpC;;AAEA;IACI,0BAA0B;IAC1B,aAAa;IACb,8BAA8B;IAC9B,6BAA6B;IAC7B,uBAAuB;AAC3B;;AAEA,QAAQ;;AAER;IACI,yBAAyB;IACzB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,YAAY;IACZ,yDAAkD;IAClD,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;AACjB;;AAEA,UAAU;;AAEV;IACI,2BAA2B;IAC3B,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,4BAA4B;IAC5B,mCAAmC;IACnC,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,yDAA+C;IAC/C,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,yDAAuD;IACvD,sBAAsB;IACtB,oCAAoC;IACpC,+FAA+F;IAC/F,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,+FAA+F;AACnG;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,6BAA6B;IAC7B,mCAAmC;IACnC,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,oBAAoB;IACpB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA,SAAS;;AAET;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI;QACI,cAAc;QACd,kBAAkB;IACtB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,UAAU;QACV,YAAY;QACZ,kBAAkB;QAClB,4BAA4B;QAC5B,UAAU;IACd;AACJ","sourcesContent":["*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    transition: all .33s;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root.light {\n    --nav-bg: rgb(136, 188, 226);\n    --body-bg: rgb(255, 255, 255);\n    --color: rgb(31, 20, 20);\n    --cog-filter: none;\n    --cog-hover-filter: invert(25%);\n    --aside-bg: rgb(119, 154, 202);\n    --period-bg: rgb(192, 193, 255);\n    --project-bg: rgb(229, 97, 97);\n    --box-shadow: none;\n}\n\n:root.dark {\n    --nav-bg: rgb(8, 15, 33);\n    --body-bg: rgb(67, 18, 65);\n    --color: azure;\n    --cog-filter: invert(100%);\n    --cog-hover-filter: invert(75%);\n    --aside-bg: rgb(21, 38, 82);\n    --period-bg: rgb(26, 191, 191);\n    --project-bg: rgb(148, 108, 108);\n    --box-shadow:  0 0 5px 2px azure;\n}\n\nbody {\n    background: var(--body-bg);\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: auto auto;\n    /* min-height: 100vh; */\n}\n\n/* NAV */\n\nnav {\n    background: var(--nav-bg);\n    color: var(--color);\n    padding: 10px 20px;\n    display: flex;\n    justify-content: space-between;\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n}\n\nnav>div {\n    display: flex;\n    align-items: center;\n}\n\nnav .logo h1 {\n    margin-left: 20px;\n}\n\nnav .config .settings {\n    margin-right: 20px;\n    width: 30px;\n    height: 30px;\n    background-color: transparent;\n    border: none;\n    background-image: url(\"../images/cog-outline.svg\");\n    background-size: cover;\n    filter: var(--cog-filter);\n}\n\nnav .config .settings:hover {\n    filter: var(--cog-hover-filter);\n}\n\nnav .config .settings:hover {\n    transform: rotate(90deg);\n}\n\nnav .logo .burger {\n    display: none;\n}\n\n/* ASIDE */\n\naside {\n    background: var(--aside-bg);\n    color: var(--color);\n    position: relative; \n    padding: 20px;\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n}\n\naside ul {\n    list-style: none;\n}\n\naside h2 {\n    font-size: 2rem;\n    margin: 20px 0;\n}\n\naside .activity button {\n    background: var(--period-bg);\n    /* box-shadow: var(--box-shadow); */\n    border: none;\n    width: 100%;\n    text-align: start;\n    border-radius: 5px;\n    margin: 0 20px 20px 0;\n    padding: 10px;\n    font-size: 1.25rem;\n}\n\naside #active-sidebar-element {\n    border: 3px solid yellow;\n    color: azure;\n    background-image: url(\"../images/granular.jpg\");\n    background-size: cover;\n}\n\naside .projects:last-child {\n    margin-bottom: 75px;\n}\n\naside .add-project {\n    background-image: url(\"../images/plus-box-outline.svg\");\n    background-size: cover;\n    background-color: rgb(251, 251, 252);\n    filter: invert(32%) sepia(96%) saturate(558%) hue-rotate(182deg) brightness(94%) contrast(200%);\n    border-radius: 10px;\n    border: none;\n    width: 50px;\n    height: 50px;\n    position: absolute;\n    right: calc(50% - 25px);\n}\n\naside .add-project:hover {\n    filter: invert(32%) sepia(96%) saturate(558%) hue-rotate(182deg) brightness(94%) contrast(150%);\n}\n\naside .add-project:active {\n    transform: scale(.975);\n}\n\naside .project {\n    background: var(--project-bg);\n    /* box-shadow: var(--box-shadow); */\n    color: azure;\n    text-align: center;\n    margin: 20px 5px;\n    padding: 10px;\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\naside .project h3 {\n    margin: 0 10px;\n}\n\naside .project img {\n    filter: invert(100%);\n    width: 30px;\n    height: 30px;\n}\n\naside .project canvas {\n    border: 2px solid yellow;\n    border-radius: 50%;\n}\n\n/* MAIN */\n\nmain {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n}\n\n@media screen and (max-width: 480px) {\n    body {\n        display: block;\n        position: relative;\n    }\n\n    nav .logo .burger {\n        display: flex;\n    }\n\n    aside {\n        width: 90%;\n        height: 100%;\n        position: absolute;\n        transform: translateX(-100%);\n        z-index: 1;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/burger.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/burger.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root.light {\n  --burger-bg: rgb(112, 30, 8);\n}\n\n:root.dark {\n  --burger-bg: rgb(247, 247, 188);\n}\n\n.burger {\n    width: 30px;\n    height: 30px;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .burger input[type=\"checkbox\"] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    appearance: none;\n    width: 100%;\n    height: 100%;\n  }\n  \n  .burger .bars {\n    width: 100%;\n    height: 3px;\n    background: var(--burger-bg);\n    z-index: 1;\n    border-radius: 5px;\n    pointer-events: none;\n    transition: all 0.33s ease-in-out;\n  }\n  \n  .burger .bars::before,\n  .burger .bars::after {\n    background: var(--burger-bg);\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 3px;\n    border-radius: 5px;\n    transition: all 0.33s ease-in-out;\n  }\n  \n  .burger .bars::before {\n    transform: translateY(-10px);\n  }\n  \n  .burger .bars::after {\n    transform: translateY(10px);\n  }\n  \n  .burger input[type=\"checkbox\"]:checked + .bars {\n    width: 0;\n    left: 50%;\n  }\n  \n  .burger input[type=\"checkbox\"]:checked + .bars::before {\n    transform: rotate(45deg) translate(-10px, 10px);\n  }\n  \n  .burger input[type=\"checkbox\"]:checked + .bars::after {\n    transform: rotate(-45deg) translate(-10px, -10px);\n  }\n  ", "",{"version":3,"sources":["webpack://./src/css/burger.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;AAC9B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,gBAAgB;IAChB,WAAW;IACX,YAAY;EACd;;EAEA;IACE,WAAW;IACX,WAAW;IACX,4BAA4B;IAC5B,UAAU;IACV,kBAAkB;IAClB,oBAAoB;IACpB,iCAAiC;EACnC;;EAEA;;IAEE,4BAA4B;IAC5B,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,iCAAiC;EACnC;;EAEA;IACE,4BAA4B;EAC9B;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,+CAA+C;EACjD;;EAEA;IACE,iDAAiD;EACnD","sourcesContent":[":root.light {\n  --burger-bg: rgb(112, 30, 8);\n}\n\n:root.dark {\n  --burger-bg: rgb(247, 247, 188);\n}\n\n.burger {\n    width: 30px;\n    height: 30px;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .burger input[type=\"checkbox\"] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    appearance: none;\n    width: 100%;\n    height: 100%;\n  }\n  \n  .burger .bars {\n    width: 100%;\n    height: 3px;\n    background: var(--burger-bg);\n    z-index: 1;\n    border-radius: 5px;\n    pointer-events: none;\n    transition: all 0.33s ease-in-out;\n  }\n  \n  .burger .bars::before,\n  .burger .bars::after {\n    background: var(--burger-bg);\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 3px;\n    border-radius: 5px;\n    transition: all 0.33s ease-in-out;\n  }\n  \n  .burger .bars::before {\n    transform: translateY(-10px);\n  }\n  \n  .burger .bars::after {\n    transform: translateY(10px);\n  }\n  \n  .burger input[type=\"checkbox\"]:checked + .bars {\n    width: 0;\n    left: 50%;\n  }\n  \n  .burger input[type=\"checkbox\"]:checked + .bars::before {\n    transform: rotate(45deg) translate(-10px, 10px);\n  }\n  \n  .burger input[type=\"checkbox\"]:checked + .bars::after {\n    transform: rotate(-45deg) translate(-10px, -10px);\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/project.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/project.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/plus-box-outline.svg */ "./src/images/plus-box-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/delete-outline.svg */ "./src/images/delete-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root.light {\n    --project-name-bg: peachpuff;\n    --project-description-bg: rgb(249, 239, 221);\n    --project-color: rgb(31, 35, 96);\n\n}\n\n:root.dark {\n    --project-name-bg: rgb(55, 57, 107);\n    --project-description-bg: black;\n    --project-color: azure;\n}\n\n.project-item {\n    color: var(--project-color);\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n\n.project-item .info {\n    text-align: center;\n    display: flex;\n    gap: 20px;\n    align-self: center;\n    align-items: center;\n    margin: 20px;\n}\n\n.project-item .info .details {\n    background: var(--project-name-bg);\n    padding: 10px;\n    border-radius: 10px;\n    width: 300px;\n}\n\n.project-item .info .details h2 {\n    font-size: 1.55rem;\n}\n\n.project-item .info .details p {\n    background: var(--project-description-bg);\n    border-radius: 10px;\n    padding: 10px;\n    margin: 10px;\n}\n\n.project-item .info .graphics {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.project-item .info .graphics img {\n    border: 3px solid azure;\n    width: 200px;\n    border-radius: 30px;\n}\n\n.project-item .info .graphics .canvas-container {\n    position: relative;\n}\n\n.project-item .info .graphics .canvas-container p {\n    position: absolute;\n    display: grid;\n    place-items: center;\n    font-size: 2rem;\n    width: 6rem;\n    height: 6rem;\n    top: calc(50% - 3rem);\n    left: calc(50% - 3rem);\n}\n\n.project-item .tasks {\n    display: flex;\n    justify-content: space-around;\n}\n\n.project-item .checked-container .remove-all-checked {\n    background: rgb(236, 151, 145);\n    color: azure;\n    padding: 5px;\n    margin: 20px;\n    width: 100px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.project-item .checked-container .remove-all-checked:hover {\n    background: rgb(212, 131, 128);\n}\n\n.project-item .checked-container .remove-all-checked:active {\n    transform: scale(.975);\n}\n\n.project-item .checked-container .remove-all-checked img {\n    filter: invert(100%);\n}\n\n.project-item .checked-container .remove-all-checked p {\n    width: 100px;\n}\n\n.project-item .add-task {\n    background-color: rgb(164, 230, 209);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    width: calc(100% + 10px);\n    height: 50px;\n    margin: 20px 0;\n    border-radius: 10px;\n}\n\n.project-item .add-task:hover {\n    filter: invert(10%);\n}\n\n.project-item .add-task:active {\n    transform: scale(.975);\n}\n\n.project-item .delete-project {\n    background-color: transparent;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: contain;\n    border: 2px solid rgb(40, 36, 36);\n    border-radius: 5px;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    width: 30px;\n    height: 30px;\n}\n\n.project-item .delete-project:hover {\n    background-color: rgba(111, 97, 97, 0.25);\n}\n\n.project-item .delete-project:active {\n    transform: scale(.975);\n}\n\n@media screen and (max-width: 700px) {\n    .project-item .tasks {\n        flex-direction: column;\n    }\n}\n\n@media screen and (max-width: 480px) {\n    .project-item {\n        padding: 10px;\n    }\n\n    .project-item .info {\n        flex-direction: column;\n    }\n\n    .project-item .info .graphics img {\n        width: 150px;\n    }\n\n    .project-item .info canvas {\n        width: 150px;\n        height: 150px;\n    }\n\n    .project-item .delete-project {\n       top: 10px;\n       right: 10px; \n    }\n}", "",{"version":3,"sources":["webpack://./src/css/project.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,4CAA4C;IAC5C,gCAAgC;;AAEpC;;AAEA;IACI,mCAAmC;IACnC,+BAA+B;IAC/B,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,SAAS;IACT,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,yCAAyC;IACzC,mBAAmB;IACnB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,8BAA8B;IAC9B,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,yDAAuD;IACvD,wBAAwB;IACxB,4BAA4B;IAC5B,2BAA2B;IAC3B,wBAAwB;IACxB,YAAY;IACZ,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,6BAA6B;IAC7B,yDAAqD;IACrD,wBAAwB;IACxB,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI;QACI,sBAAsB;IAC1B;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;;IAEA;QACI,sBAAsB;IAC1B;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,YAAY;QACZ,aAAa;IACjB;;IAEA;OACG,SAAS;OACT,WAAW;IACd;AACJ","sourcesContent":[":root.light {\n    --project-name-bg: peachpuff;\n    --project-description-bg: rgb(249, 239, 221);\n    --project-color: rgb(31, 35, 96);\n\n}\n\n:root.dark {\n    --project-name-bg: rgb(55, 57, 107);\n    --project-description-bg: black;\n    --project-color: azure;\n}\n\n.project-item {\n    color: var(--project-color);\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n\n.project-item .info {\n    text-align: center;\n    display: flex;\n    gap: 20px;\n    align-self: center;\n    align-items: center;\n    margin: 20px;\n}\n\n.project-item .info .details {\n    background: var(--project-name-bg);\n    padding: 10px;\n    border-radius: 10px;\n    width: 300px;\n}\n\n.project-item .info .details h2 {\n    font-size: 1.55rem;\n}\n\n.project-item .info .details p {\n    background: var(--project-description-bg);\n    border-radius: 10px;\n    padding: 10px;\n    margin: 10px;\n}\n\n.project-item .info .graphics {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.project-item .info .graphics img {\n    border: 3px solid azure;\n    width: 200px;\n    border-radius: 30px;\n}\n\n.project-item .info .graphics .canvas-container {\n    position: relative;\n}\n\n.project-item .info .graphics .canvas-container p {\n    position: absolute;\n    display: grid;\n    place-items: center;\n    font-size: 2rem;\n    width: 6rem;\n    height: 6rem;\n    top: calc(50% - 3rem);\n    left: calc(50% - 3rem);\n}\n\n.project-item .tasks {\n    display: flex;\n    justify-content: space-around;\n}\n\n.project-item .checked-container .remove-all-checked {\n    background: rgb(236, 151, 145);\n    color: azure;\n    padding: 5px;\n    margin: 20px;\n    width: 100px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.project-item .checked-container .remove-all-checked:hover {\n    background: rgb(212, 131, 128);\n}\n\n.project-item .checked-container .remove-all-checked:active {\n    transform: scale(.975);\n}\n\n.project-item .checked-container .remove-all-checked img {\n    filter: invert(100%);\n}\n\n.project-item .checked-container .remove-all-checked p {\n    width: 100px;\n}\n\n.project-item .add-task {\n    background-color: rgb(164, 230, 209);\n    background-image: url(\"../images/plus-box-outline.svg\");\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    width: calc(100% + 10px);\n    height: 50px;\n    margin: 20px 0;\n    border-radius: 10px;\n}\n\n.project-item .add-task:hover {\n    filter: invert(10%);\n}\n\n.project-item .add-task:active {\n    transform: scale(.975);\n}\n\n.project-item .delete-project {\n    background-color: transparent;\n    background-image: url(\"../images/delete-outline.svg\");\n    background-size: contain;\n    border: 2px solid rgb(40, 36, 36);\n    border-radius: 5px;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    width: 30px;\n    height: 30px;\n}\n\n.project-item .delete-project:hover {\n    background-color: rgba(111, 97, 97, 0.25);\n}\n\n.project-item .delete-project:active {\n    transform: scale(.975);\n}\n\n@media screen and (max-width: 700px) {\n    .project-item .tasks {\n        flex-direction: column;\n    }\n}\n\n@media screen and (max-width: 480px) {\n    .project-item {\n        padding: 10px;\n    }\n\n    .project-item .info {\n        flex-direction: column;\n    }\n\n    .project-item .info .graphics img {\n        width: 150px;\n    }\n\n    .project-item .info canvas {\n        width: 150px;\n        height: 150px;\n    }\n\n    .project-item .delete-project {\n       top: 10px;\n       right: 10px; \n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/task.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/task.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/check-bold.svg */ "./src/images/check-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/arrow-expand-all.svg */ "./src/images/arrow-expand-all.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/arrow-collapse-all.svg */ "./src/images/arrow-collapse-all.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/delete-outline.svg */ "./src/images/delete-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/plus-box-outline.svg */ "./src/images/plus-box-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root.light {\n    --unchecked-bg: rgb(237, 239, 243);\n    --checked-bg: rgb(235, 229, 229);\n    --label-unchecked-bg: rgb(135, 217, 222);\n    --label-unchecked-color: rgb(85, 75, 75);\n    --label-checked-bg: rgb(155, 162, 163);\n    --label-checked-color: rgb(238, 230, 230);\n    --unchecked-extra-bg: rgb(255, 227, 227);\n    --checked-extra-bg: rgb(216, 209, 209);\n    --change-label-color: rgb(73, 62, 62);\n    --unchecked-note-bg: blanchedalmond;\n    --checked-note-bg: rgb(232, 227, 220);\n    --control-filter: none;\n}\n\n:root.dark {\n    --unchecked-bg: rgb(29, 64, 133);\n    --checked-bg: rgb(122, 94, 94);\n    --label-unchecked-bg: rgb(19, 3, 44);\n    --label-unchecked-color: rgb(247, 241, 241);\n    --label-checked-bg: rgb(201, 176, 176);\n    --label-checked-color: rgb(34, 4, 4);\n    --unchecked-extra-bg: rgb(88, 88, 173);\n    --checked-extra-bg: rgb(109, 109, 148);\n    --change-label-color: azure;\n    --unchecked-note-bg: rgb(61, 8, 74);\n    --checked-note-bg: rgb(85, 62, 90);\n    --control-filter: invert(100%);\n}\n\n.task {\n    max-width: 500px;\n    padding: 5px;\n    margin-bottom: 30px;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    position: relative;\n    transition: all .33s;\n}\n\n.task * {\n    transition: all .33s;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.task button {\n    filter: var(--control-filter);\n}\n\n.task.unchecked {\n    background: var(--unchecked-bg);\n}\n\n.task.checked {\n    background: var(--checked-bg);\n}\n\n.task .main-section {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.task .checkmark {\n    font-size: 1.25rem;\n}\n\n.task .checkmark input[type=\"checkbox\"] {\n    background: rgb(244, 244, 214);\n    border-radius: 3px;\n    appearance: none;\n    width: 1.25rem;\n    height: 1.25rem;\n    margin-right: 5px;\n    border: 1px solid rgb(199, 167, 167);\n}\n\n.task .checkmark input[type=\"checkbox\"]:checked {\n    background-color: rgb(231, 222, 211);\n    border-color: rgb(107, 75, 75);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n}\n\n.task .label, .task input[type=\"text\"] {\n    font-size: 1rem;\n    text-align: center;\n    padding: 3px;\n    width: 150px;\n    border-radius: 5px;\n    min-height: 45px;\n    display: grid;\n    place-items: center;\n    margin: 0 10px;\n}\n\n.task.unchecked .label, .task input[type=\"text\"] {\n    background: var(--label-unchecked-bg);\n    color: var(--label-unchecked-color);\n}\n\n.task.checked .label {\n    background: var(--label-checked-bg);\n    color: var(--label-checked-color);\n    text-decoration: line-through;\n}\n\n.task .extra-wrapper {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n}\n\n.task .expand-contract {\n    appearance: none;\n}\n\n.task .expand-contract, .task .delete {\n    width: 20px;\n    height: 20px;\n    border: none;\n    background-color: transparent;\n    background-size: cover;\n}\n\n.task .due-date {\n    margin: 0 10px;\n}\n\n.task button:hover {\n    filter: invert(50%);\n}\n\n.task button:active {\n    transform: scale(.95);\n}\n\n.task.unchecked .extra-section {\n    background: var(--unchecked-extra-bg);\n}\n\n.task.checked .extra-section {\n    background: var(--checked-extra-bg);\n}\n\n.task .extra-section {\n    width: 100%;\n    /* background: var(--extra-bg); */\n    position: relative;\n    border-radius: 10px;\n    padding: 5px;\n    margin-top: 10px;\n    position: absolute;\n}\n\n.task .expand-contract {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    filter: var(--control-filter);\n}\n\n.task .expand-contract:checked {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.task .delete {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    position: absolute;\n    top: 5px;\n    right: 5px;\n}\n\n.extra-section .change-date {\n    width: fit-content;\n    display: flex;\n    flex-direction: column;\n}\n\n.extra-section .change-date label, .extra-section .change-priority p  {\n    color: var(--change-label-color);\n    margin-bottom: 10px;\n    font-size: 1.25rem;\n}\n\n.extra-section .change-priority {\n    margin-top: 20px;\n}\n\n.extra-section .change-priority input[type=\"checkbox\"] {\n    appearance: none;\n    width: 75px;\n    height: 20px;\n}\n\n.extra-section .change-priority .priorities {\n    display: flex;\n}\n\n.extra-section .change-priority .priorities div {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.extra-section .change-priority .high-priority input[type=\"checkbox\"] {\n    background: rgb(239, 93, 93, .35);\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.extra-section .change-priority .medium-priority input[type=\"checkbox\"] {\n    background: rgb(235, 241, 7, .35);\n}\n\n.extra-section .change-priority .low-priority input[type=\"checkbox\"] {\n    background: rgb(59, 180, 213, .35);\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n.extra-section .change-priority .high-priority input[type=\"checkbox\"]:checked {\n    background: rgb(239, 93, 93);\n    border-top: 3px solid rgb(154, 28, 28);\n    border-left: 3px solid rgb(154, 28, 28);\n    border-bottom: 3px solid rgb(154, 28, 28);\n}\n\n.extra-section .change-priority .medium-priority input[type=\"checkbox\"]:checked {\n    background: rgb(235 241 7);\n    border-top: 3px solid rgb(176, 182, 12);\n    border-bottom: 3px solid rgb(176, 182, 12);\n}\n\n.extra-section .change-priority .low-priority input[type=\"checkbox\"]:checked {\n    background: rgb(59, 180, 213);\n    border-top: 3px solid rgb(35, 144, 171);\n    border-right: 3px solid rgb(35, 144, 171);\n    border-bottom: 3px solid rgb(35, 144, 171);\n}\n\n.extra-section .notes {\n    padding: 10px;\n    margin-top: 20px;\n    position: relative;\n}\n\n.task.checked .extra-section .note, .extra-section textarea {\n    background: var(--checked-note-bg);\n}\n\n.task.unchecked .extra-section .note, .extra-section textarea {\n    background: var(--unchecked-note-bg);\n}\n\n.extra-section .note, .extra-section textarea {\n    border: 2px solid rgb(215, 205, 205);\n    width: 100%;\n    margin-bottom: 30px;\n    padding: 20px;\n    position: relative;\n    border-radius: 10px;\n}\n\n.task .notes .add-note {\n    width: 40px;\n    height: 40px;\n    background-color: transparent;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-size: cover;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    border: none;\n}\n\n.task .priority {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    right: -10px;\n    width: 10px;\n    height: 100%;\n}\n\n.task .priority div {\n    height: 33.3%;\n}\n\n.task .priority .high {\n    background: rgb(239, 93, 93, .25);\n    border-top-right-radius: 5px;\n}\n\n.task .priority .high.active {\n    background: rgb(239, 93, 93);\n}\n\n.task .priority .medium {\n    background: rgb(235, 241, 7, .25);\n}\n\n.task .priority .medium.active {\n    background: rgb(235, 241, 7);\n}\n\n.task .priority .low {\n    background: rgb(59, 180, 213);\n    border-bottom-right-radius: 5px;\n}\n\n@media screen and (max-width: 480px) {\n    .task {\n        width: 350px;\n    }\n\n    .task .checkmark label {\n        display: none;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/task.css"],"names":[],"mappings":"AAAA;IACI,kCAAkC;IAClC,gCAAgC;IAChC,wCAAwC;IACxC,wCAAwC;IACxC,sCAAsC;IACtC,yCAAyC;IACzC,wCAAwC;IACxC,sCAAsC;IACtC,qCAAqC;IACrC,mCAAmC;IACnC,qCAAqC;IACrC,sBAAsB;AAC1B;;AAEA;IACI,gCAAgC;IAChC,8BAA8B;IAC9B,oCAAoC;IACpC,2CAA2C;IAC3C,sCAAsC;IACtC,oCAAoC;IACpC,sCAAsC;IACtC,sCAAsC;IACtC,2BAA2B;IAC3B,mCAAmC;IACnC,kCAAkC;IAClC,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,2BAA2B;IAC3B,8BAA8B;IAC9B,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;IACpB,yCAAyC;AAC7C;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;IACpC,8BAA8B;IAC9B,yDAAiD;IACjD,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,qCAAqC;IACrC,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;IACnC,iCAAiC;IACjC,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,6BAA6B;IAC7B,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,WAAW;IACX,iCAAiC;IACjC,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,yDAAuD;IACvD,6BAA6B;AACjC;;AAEA;IACI,yDAAyD;AAC7D;;AAEA;IACI,yDAAqD;IACrD,kBAAkB;IAClB,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gCAAgC;IAChC,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,iCAAiC;IACjC,4BAA4B;IAC5B,+BAA+B;AACnC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,kCAAkC;IAClC,6BAA6B;IAC7B,gCAAgC;AACpC;;AAEA;IACI,4BAA4B;IAC5B,sCAAsC;IACtC,uCAAuC;IACvC,yCAAyC;AAC7C;;AAEA;IACI,0BAA0B;IAC1B,uCAAuC;IACvC,0CAA0C;AAC9C;;AAEA;IACI,6BAA6B;IAC7B,uCAAuC;IACvC,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;IACpC,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,yDAAuD;IACvD,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,MAAM;IACN,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iCAAiC;IACjC,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,6BAA6B;IAC7B,+BAA+B;AACnC;;AAEA;IACI;QACI,YAAY;IAChB;;IAEA;QACI,aAAa;IACjB;AACJ","sourcesContent":[":root.light {\n    --unchecked-bg: rgb(237, 239, 243);\n    --checked-bg: rgb(235, 229, 229);\n    --label-unchecked-bg: rgb(135, 217, 222);\n    --label-unchecked-color: rgb(85, 75, 75);\n    --label-checked-bg: rgb(155, 162, 163);\n    --label-checked-color: rgb(238, 230, 230);\n    --unchecked-extra-bg: rgb(255, 227, 227);\n    --checked-extra-bg: rgb(216, 209, 209);\n    --change-label-color: rgb(73, 62, 62);\n    --unchecked-note-bg: blanchedalmond;\n    --checked-note-bg: rgb(232, 227, 220);\n    --control-filter: none;\n}\n\n:root.dark {\n    --unchecked-bg: rgb(29, 64, 133);\n    --checked-bg: rgb(122, 94, 94);\n    --label-unchecked-bg: rgb(19, 3, 44);\n    --label-unchecked-color: rgb(247, 241, 241);\n    --label-checked-bg: rgb(201, 176, 176);\n    --label-checked-color: rgb(34, 4, 4);\n    --unchecked-extra-bg: rgb(88, 88, 173);\n    --checked-extra-bg: rgb(109, 109, 148);\n    --change-label-color: azure;\n    --unchecked-note-bg: rgb(61, 8, 74);\n    --checked-note-bg: rgb(85, 62, 90);\n    --control-filter: invert(100%);\n}\n\n.task {\n    max-width: 500px;\n    padding: 5px;\n    margin-bottom: 30px;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    position: relative;\n    transition: all .33s;\n}\n\n.task * {\n    transition: all .33s;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.task button {\n    filter: var(--control-filter);\n}\n\n.task.unchecked {\n    background: var(--unchecked-bg);\n}\n\n.task.checked {\n    background: var(--checked-bg);\n}\n\n.task .main-section {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.task .checkmark {\n    font-size: 1.25rem;\n}\n\n.task .checkmark input[type=\"checkbox\"] {\n    background: rgb(244, 244, 214);\n    border-radius: 3px;\n    appearance: none;\n    width: 1.25rem;\n    height: 1.25rem;\n    margin-right: 5px;\n    border: 1px solid rgb(199, 167, 167);\n}\n\n.task .checkmark input[type=\"checkbox\"]:checked {\n    background-color: rgb(231, 222, 211);\n    border-color: rgb(107, 75, 75);\n    background-image: url(\"../images/check-bold.svg\");\n    background-size: cover;\n}\n\n.task .label, .task input[type=\"text\"] {\n    font-size: 1rem;\n    text-align: center;\n    padding: 3px;\n    width: 150px;\n    border-radius: 5px;\n    min-height: 45px;\n    display: grid;\n    place-items: center;\n    margin: 0 10px;\n}\n\n.task.unchecked .label, .task input[type=\"text\"] {\n    background: var(--label-unchecked-bg);\n    color: var(--label-unchecked-color);\n}\n\n.task.checked .label {\n    background: var(--label-checked-bg);\n    color: var(--label-checked-color);\n    text-decoration: line-through;\n}\n\n.task .extra-wrapper {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n}\n\n.task .expand-contract {\n    appearance: none;\n}\n\n.task .expand-contract, .task .delete {\n    width: 20px;\n    height: 20px;\n    border: none;\n    background-color: transparent;\n    background-size: cover;\n}\n\n.task .due-date {\n    margin: 0 10px;\n}\n\n.task button:hover {\n    filter: invert(50%);\n}\n\n.task button:active {\n    transform: scale(.95);\n}\n\n.task.unchecked .extra-section {\n    background: var(--unchecked-extra-bg);\n}\n\n.task.checked .extra-section {\n    background: var(--checked-extra-bg);\n}\n\n.task .extra-section {\n    width: 100%;\n    /* background: var(--extra-bg); */\n    position: relative;\n    border-radius: 10px;\n    padding: 5px;\n    margin-top: 10px;\n    position: absolute;\n}\n\n.task .expand-contract {\n    background-image: url(\"../images/arrow-expand-all.svg\");\n    filter: var(--control-filter);\n}\n\n.task .expand-contract:checked {\n    background-image: url(\"../images/arrow-collapse-all.svg\");\n}\n\n.task .delete {\n    background-image: url(\"../images/delete-outline.svg\");\n    position: absolute;\n    top: 5px;\n    right: 5px;\n}\n\n.extra-section .change-date {\n    width: fit-content;\n    display: flex;\n    flex-direction: column;\n}\n\n.extra-section .change-date label, .extra-section .change-priority p  {\n    color: var(--change-label-color);\n    margin-bottom: 10px;\n    font-size: 1.25rem;\n}\n\n.extra-section .change-priority {\n    margin-top: 20px;\n}\n\n.extra-section .change-priority input[type=\"checkbox\"] {\n    appearance: none;\n    width: 75px;\n    height: 20px;\n}\n\n.extra-section .change-priority .priorities {\n    display: flex;\n}\n\n.extra-section .change-priority .priorities div {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.extra-section .change-priority .high-priority input[type=\"checkbox\"] {\n    background: rgb(239, 93, 93, .35);\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.extra-section .change-priority .medium-priority input[type=\"checkbox\"] {\n    background: rgb(235, 241, 7, .35);\n}\n\n.extra-section .change-priority .low-priority input[type=\"checkbox\"] {\n    background: rgb(59, 180, 213, .35);\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n.extra-section .change-priority .high-priority input[type=\"checkbox\"]:checked {\n    background: rgb(239, 93, 93);\n    border-top: 3px solid rgb(154, 28, 28);\n    border-left: 3px solid rgb(154, 28, 28);\n    border-bottom: 3px solid rgb(154, 28, 28);\n}\n\n.extra-section .change-priority .medium-priority input[type=\"checkbox\"]:checked {\n    background: rgb(235 241 7);\n    border-top: 3px solid rgb(176, 182, 12);\n    border-bottom: 3px solid rgb(176, 182, 12);\n}\n\n.extra-section .change-priority .low-priority input[type=\"checkbox\"]:checked {\n    background: rgb(59, 180, 213);\n    border-top: 3px solid rgb(35, 144, 171);\n    border-right: 3px solid rgb(35, 144, 171);\n    border-bottom: 3px solid rgb(35, 144, 171);\n}\n\n.extra-section .notes {\n    padding: 10px;\n    margin-top: 20px;\n    position: relative;\n}\n\n.task.checked .extra-section .note, .extra-section textarea {\n    background: var(--checked-note-bg);\n}\n\n.task.unchecked .extra-section .note, .extra-section textarea {\n    background: var(--unchecked-note-bg);\n}\n\n.extra-section .note, .extra-section textarea {\n    border: 2px solid rgb(215, 205, 205);\n    width: 100%;\n    margin-bottom: 30px;\n    padding: 20px;\n    position: relative;\n    border-radius: 10px;\n}\n\n.task .notes .add-note {\n    width: 40px;\n    height: 40px;\n    background-color: transparent;\n    background-image: url(\"../images/plus-box-outline.svg\");\n    background-size: cover;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    border: none;\n}\n\n.task .priority {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    right: -10px;\n    width: 10px;\n    height: 100%;\n}\n\n.task .priority div {\n    height: 33.3%;\n}\n\n.task .priority .high {\n    background: rgb(239, 93, 93, .25);\n    border-top-right-radius: 5px;\n}\n\n.task .priority .high.active {\n    background: rgb(239, 93, 93);\n}\n\n.task .priority .medium {\n    background: rgb(235, 241, 7, .25);\n}\n\n.task .priority .medium.active {\n    background: rgb(235, 241, 7);\n}\n\n.task .priority .low {\n    background: rgb(59, 180, 213);\n    border-bottom-right-radius: 5px;\n}\n\n@media screen and (max-width: 480px) {\n    .task {\n        width: 350px;\n    }\n\n    .task .checkmark label {\n        display: none;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/toggle.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/toggle.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/sun.svg */ "./src/images/sun.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/night.svg */ "./src/images/night.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".check-container {\n  --width: 40px;\n  --height: 20px;\n  --span-radius: 16px;\n  --padding: calc(0.5 * (var(--height) - var(--span-radius)));\n  position: relative;\n  border-radius: 16px;\n  width: var(--width);\n  height: var(--height);\n}\n\n.check-container * {\n  transition: all 0.33s;\n}\n\n.check-container input[type=\"checkbox\"] {\n  background: rgb(226, 241, 93);\n  border-radius: var(--height);\n  appearance: none;\n  width: 100%;\n  height: 100%;\n}\n\n.check-container span {\n  background: rgb(253, 252, 209);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  position: absolute;\n  width: var(--span-radius);\n  height: var(--span-radius);\n  top: var(--padding);\n  left: var(--padding);\n  border-radius: 50%;\n  pointer-events: none;\n}\n\n.check-container input[type=\"checkbox\"]:checked {\n  background: rgb(100, 136, 154);\n}\n\n.check-container input[type=\"checkbox\"]:checked+span {\n  transform: translateX(calc(var(--width) - 2 * var(--padding) - var(--span-radius)));\n  background: rgb(255, 241, 187);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  filter: contrast(100%);\n  filter: invert(100%);\n}", "",{"version":3,"sources":["webpack://./src/css/toggle.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,2DAA2D;EAC3D,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;EAC7B,4BAA4B;EAC5B,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,8BAA8B;EAC9B,yDAA0C;EAC1C,sBAAsB;EACtB,kBAAkB;EAClB,yBAAyB;EACzB,0BAA0B;EAC1B,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,mFAAmF;EACnF,8BAA8B;EAC9B,yDAA4C;EAC5C,sBAAsB;EACtB,sBAAsB;EACtB,oBAAoB;AACtB","sourcesContent":[".check-container {\n  --width: 40px;\n  --height: 20px;\n  --span-radius: 16px;\n  --padding: calc(0.5 * (var(--height) - var(--span-radius)));\n  position: relative;\n  border-radius: 16px;\n  width: var(--width);\n  height: var(--height);\n}\n\n.check-container * {\n  transition: all 0.33s;\n}\n\n.check-container input[type=\"checkbox\"] {\n  background: rgb(226, 241, 93);\n  border-radius: var(--height);\n  appearance: none;\n  width: 100%;\n  height: 100%;\n}\n\n.check-container span {\n  background: rgb(253, 252, 209);\n  background-image: url(\"../images/sun.svg\");\n  background-size: cover;\n  position: absolute;\n  width: var(--span-radius);\n  height: var(--span-radius);\n  top: var(--padding);\n  left: var(--padding);\n  border-radius: 50%;\n  pointer-events: none;\n}\n\n.check-container input[type=\"checkbox\"]:checked {\n  background: rgb(100, 136, 154);\n}\n\n.check-container input[type=\"checkbox\"]:checked+span {\n  transform: translateX(calc(var(--width) - 2 * var(--padding) - var(--span-radius)));\n  background: rgb(255, 241, 187);\n  background-image: url(\"../images/night.svg\");\n  background-size: cover;\n  filter: contrast(100%);\n  filter: invert(100%);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/based.css":
/*!***************************!*\
  !*** ./src/css/based.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_based_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./based.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/based.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_based_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_based_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_based_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_based_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/burger.css":
/*!****************************!*\
  !*** ./src/css/burger.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./burger.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/burger.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/project.css":
/*!*****************************!*\
  !*** ./src/css/project.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./project.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/project.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/task.css":
/*!**************************!*\
  !*** ./src/css/task.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./task.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/task.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/toggle.css":
/*!****************************!*\
  !*** ./src/css/toggle.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_toggle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./toggle.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/toggle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_toggle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_toggle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_toggle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_toggle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/aside.js":
/*!**********************!*\
  !*** ./src/aside.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asideInterface": () => (/* binding */ asideInterface)
/* harmony export */ });
const aside = document.querySelector("aside");
const burger = document.querySelector(".burger input[type='checkbox']");

const asideInterface = (
    () => {
        const aside = document.querySelector("aside");

        function resize_aside() {
            let nav, height;
        
            setTimeout(() => {
                nav = document.querySelector("nav");
                height = window.getComputedStyle(nav).getPropertyValue("height");
                aside.style.minHeight = `calc(100vh - ${height})`;
            }, 500);
        }        

        return { resize_aside };
    }
)();

burger.addEventListener("click", () => {
    aside.style.transform = burger.checked ? "translateX(0)" : "translateX(-100%)";
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 480)
        aside.style.transform = "translateX(0)";
});

asideInterface.resize_aside();

/***/ }),

/***/ "./src/imports.js":
/*!************************!*\
  !*** ./src/imports.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalize.css */ "./src/css/normalize.css");
/* harmony import */ var _css_based_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/based.css */ "./src/css/based.css");
/* harmony import */ var _css_toggle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/toggle.css */ "./src/css/toggle.css");
/* harmony import */ var _css_burger_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/burger.css */ "./src/css/burger.css");
/* harmony import */ var _css_task_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/task.css */ "./src/css/task.css");
/* harmony import */ var _css_project_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/project.css */ "./src/css/project.css");
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme.js */ "./src/theme.js");
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_theme_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _aside_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aside.js */ "./src/aside.js");
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test.js */ "./src/test.js");
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_test_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _taskdom_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./taskdom.js */ "./src/taskdom.js");
/* harmony import */ var _images_project_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/project.svg */ "./src/images/project.svg");
/* harmony import */ var _images_granular_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/granular.jpg */ "./src/images/granular.jpg");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_check_bold_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/check-bold.svg */ "./src/images/check-bold.svg");
/* harmony import */ var _images_arrow_expand_all_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/arrow-expand-all.svg */ "./src/images/arrow-expand-all.svg");
/* harmony import */ var _images_arrow_collapse_all_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/arrow-collapse-all.svg */ "./src/images/arrow-collapse-all.svg");
/* harmony import */ var _images_delete_outline_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/delete-outline.svg */ "./src/images/delete-outline.svg");
/* harmony import */ var _images_plus_box_outline_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/plus-box-outline.svg */ "./src/images/plus-box-outline.svg");
/* harmony import */ var _images_shredder_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/shredder.svg */ "./src/images/shredder.svg");

























/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create_task": () => (/* binding */ create_task)
/* harmony export */ });
function create_task(description, checked, priority, duedate, id, notes) {
    return { description, checked, priority, duedate, id, notes };
}

/***/ }),

/***/ "./src/taskdom.js":
/*!************************!*\
  !*** ./src/taskdom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create_task_dom": () => (/* binding */ create_task_dom)
/* harmony export */ });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");


function create_task_dom(taskObj, extInterface) {
    const task = document.createElement("div");
    const mainSection = document.createElement("div");
    const checkMark = document.createElement("div");
    const checkInput = document.createElement("input");
    const checkLabel = document.createElement("label")
    const label = document.createElement("h2");
    const labelInput = document.createElement("input");
    const dueDate = document.createElement("p");
    const expand = document.createElement("input");
    const priority = document.createElement("div");
    const high = document.createElement("div");
    const medium = document.createElement("div");
    const low = document.createElement("div");
    const extraWrapper = document.createElement("div");
    const extraSection = document.createElement("div");
    const edit = document.createElement("div");
    const deleteTask = document.createElement("button");
    const changeDate = document.createElement("div");
    const dateLabel = document.createElement("label");
    const dateInput = document.createElement("input");
    const changePriority = document.createElement("div");
    const priorityLabel = document.createElement("p");
    const priorities = document.createElement("div");
    const priorityHigh = document.createElement("div");
    const priorityMedium = document.createElement("div");
    const priorityLow = document.createElement("div");
    const highCheck = document.createElement("input");
    const highLabel = document.createElement("label");
    const mediumCheck = document.createElement("input");
    const mediumLabel = document.createElement("label");
    const lowCheck = document.createElement("input");
    const lowLabel = document.createElement("label");
    const notes = document.createElement("div");
    const notesContainer = document.createElement("div");
    const notesTitle = document.createElement("h2");
    const addNote = document.createElement("button");
    const noteArea = document.createElement("textarea");

    task.append(mainSection);
    mainSection.append(checkMark);
    checkMark.append(checkInput);
    checkMark.append(checkLabel);
    mainSection.append(label);
    mainSection.append(dueDate);
    mainSection.append(expand);
    mainSection.append(priority);
    priority.append(high);
    priority.append(medium);
    priority.append(medium);
    priority.append(low);
    task.append(extraWrapper);
    extraWrapper.append(extraSection);
    extraSection.append(edit);
    edit.append(deleteTask);
    edit.append(changeDate);
    changeDate.append(dateLabel);
    changeDate.append(dateInput);
    edit.append(changePriority);
    changePriority.append(priorityLabel);
    changePriority.append(priorities);
    priorities.append(priorityHigh);
    priorityHigh.append(highCheck);
    priorityHigh.append(highLabel);
    priorities.append(priorityMedium);
    priorityMedium.append(mediumCheck);
    priorityMedium.append(mediumLabel);
    priorities.append(priorityLow);
    priorityLow.append(lowCheck);
    priorityLow.append(lowLabel);
    extraSection.append(notes);
    notes.append(notesTitle);
    notes.append(notesContainer);
    notes.append(addNote);

    task.classList.add("task");
    task.classList.add("unchecked");
    mainSection.classList.add("main-section");
    checkMark.classList.add("checkmark");
    label.classList.add("label");
    labelInput.setAttribute("type", "text");
    dueDate.classList.add("due-date");
    expand.classList.add("expand-contract");
    expand.setAttribute("type", "checkbox");
    priority.classList.add("priority");
    high.classList.add("high");
    medium.classList.add("medium");
    low.classList.add("low");
    extraWrapper.classList.add("extra-wrapper");
    extraSection.classList.add("extra-section");
    edit.classList.add("edit");
    deleteTask.classList.add("delete");
    changeDate.classList.add("change-date");
    changePriority.classList.add("change-priority");
    priorities.classList.add("priorities");
    priorityHigh.classList.add("high-priority");
    priorityMedium.classList.add("medium-priority");
    priorityLow.classList.add("low-priority");
    notes.classList.add("notes");
    notesContainer.classList.add("container");
    addNote.classList.add("add-note");

    priorityLabel.innerText = "Priority";
    checkInput.setAttribute("type", "checkbox");
    checkInput.id = `check-${taskObj.id}`;
    checkInput.checked = taskObj.checked;
    checkLabel.setAttribute("for", `check-${taskObj.id}`);
    checkLabel.innerText = "Done!";
    label.innerText = taskObj.description;
    dueDate.innerText = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.due_date)(taskObj.duedate);
    dateInput.setAttribute("type", "date");
    dateInput.id = `date-input-${taskObj.id}`;
    dateInput.value = taskObj.duedate;
    dateLabel.setAttribute("for", `date-input-${taskObj.id}`);
    dateLabel.innerText = "Due Date";
    highCheck.setAttribute("type", "checkbox");
    highCheck.id = `high-${taskObj.id}`;
    highCheck.id = `high-${taskObj.id}`;
    highLabel.setAttribute("for", `high-${taskObj.id}`);
    highLabel.innerText = "High";
    mediumCheck.setAttribute("type", "checkbox");
    mediumCheck.id = `medium-${taskObj.id}`;
    mediumLabel.setAttribute("for", `medium-${taskObj.id}`);
    mediumLabel.innerText = "Medium";
    lowCheck.setAttribute("type", "checkbox");
    lowCheck.id = `low-${taskObj.id}`;
    lowLabel.setAttribute("for", `low-${taskObj.id}`);
    lowLabel.innerText = "Low";
    notesTitle.innerText = "Notes";

    if (taskObj.priority == "high") {
        highCheck.checked = true;
        mediumCheck.checked = true;
        lowCheck.checked = true;

        high.classList.add("active");
        medium.classList.add("active");
    }
    else if (taskObj.priority == "medium") {
        highCheck.checked = false;
        mediumCheck.checked = true;
        lowCheck.checked = true;

        medium.classList.add("active");
    }
    else if (taskObj.priority == "low") {
        highCheck.checked = false;
        mediumCheck.checked = false;
        lowCheck.checked = true;
    }

    highCheck.addEventListener("click", () => {
        if (highCheck.checked) {
            mediumCheck.checked = true;
            lowCheck.checked = true;
            taskObj.priority = "high";

            high.classList.add("active");
        }
        else {
            taskObj.priority = "medium";

            high.classList.remove("active");
        }

        medium.classList.add("active");
    });

    mediumCheck.addEventListener("click", () => {
        if (mediumCheck.checked) {
            lowCheck.checked = true;
            taskObj.priority = "medium";

            high.classList.remove("active");
            medium.classList.add("active");
        }
        else {
            highCheck.checked = false;
            taskObj.priority = "low";

            high.classList.remove("active");
            medium.classList.remove("active");
        }
    });

    lowCheck.addEventListener("click", () => {
        if (!lowCheck.checked) {
            highCheck.checked = false;
            mediumCheck.checked = false;
        }
        lowCheck.checked = true;
        taskObj.priority = "low";

        high.classList.remove("active");
        medium.classList.remove("active");
    });

    for (let note of taskObj.notes) {
        notesContainer.append(create_note(note));
    }

    expand.addEventListener("click", resize_expanded);

    checkInput.addEventListener("click", () => {
        taskObj.checked = checkInput.checked;
        task.classList.toggle("checked");
        task.classList.toggle("unchecked");

        if (checkInput.checked) {
            extInterface.unchecked.removeChild(task);
            extInterface.checked.append(task);
            highCheck.disabled = true;
            mediumCheck.disabled = true;
            lowCheck.disabled = true;
            dateInput.disabled = true;
            addNote.disabled = true;
        }
        else {
            extInterface.checked.removeChild(task);
            extInterface.unchecked.append(task);
            highCheck.disabled = false;
            mediumCheck.disabled = false;
            lowCheck.disabled = false;
            dateInput.disabled = false;
            addNote.disabled = false;
        }
        task.scrollIntoView({ behavior: "smooth" });
    });

    dateInput.addEventListener("change", () => {
        dueDate.innerText = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.due_date)(dateInput.value);
        taskObj.duedate = dateInput.value;
    });

    addNote.addEventListener("click", () => {
        notesContainer.append(noteArea);
        resize_expanded();
        noteArea.focus();
    });

    noteArea.addEventListener("focusout", () => {
        let value;

        value = noteArea.value.trim();
        if (value) {
            let braveNewNote;

            braveNewNote = { text: value, id: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.create_id)(10) };
            notesContainer.append(create_note(braveNewNote));
            taskObj.notes.push(braveNewNote);
        }
        noteArea.value = '';
        noteArea.parentElement.removeChild(noteArea);
        resize_expanded();
    });

    document.addEventListener("keydown", event => {
        if (event.key == "Enter" && document.activeElement == noteArea)
            document.activeElement.blur();
    });

    label.addEventListener("click", () => {
        if (!checkInput.checked) {
            labelInput.value = label.innerText;
            label.replaceWith(labelInput);
            labelInput.focus();
        }
    });

    labelInput.addEventListener("focusout", () => {
        let value;

        value = labelInput.value.trim();
        if (value) {
            label.innerText = value;
            labelInput.replaceWith(label);
            taskObj.description = value;
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key == "Enter" && document.activeElement == labelInput)
            document.activeElement.blur();
    });

    deleteTask.addEventListener("click", () => {
        let name, deleteButton, cancelButton;

        name = extInterface.modal.querySelector(".modal-content p");
        name.innerText = taskObj.description;
        extInterface.modal.style.display = "grid";
        deleteButton = extInterface.modal.querySelector(".yes");
        cancelButton = extInterface.modal.querySelector(".no");

        deleteButton.addEventListener("click", delete_task);

        cancelButton.addEventListener("click", hide);

        function delete_task() {
            let index;

            index = extInterface.array.findIndex(task => task.id == taskObj.id);
            extInterface.array.splice(index, 1);
            task.parentElement.removeChild(task);
            hide();
        }

        function hide() {
            extInterface.modal.style.display = "none";

            deleteButton.removeEventListener("click", delete_task);

            cancelButton.removeEventListener("click", hide);
        }
    });

    function resize_expanded() {
        let height;

        height = window.getComputedStyle(extraSection).height;
        if (expand.checked) {
            extraWrapper.style.height = height;
            extraSection.style.top = 0;
        }
        else {
            extraWrapper.style.height = 0;
            extraSection.style.top = `-${height}`;
        }
    }

    function create_note(newNote) {
        const note = document.createElement("div");
        const deleteNote = document.createElement("button");
        const noteContent = document.createElement("p");

        note.append(deleteNote);
        note.append(noteContent);

        note.classList.add("note");
        deleteNote.classList.add("delete");

        noteContent.innerText = newNote.text;

        deleteNote.addEventListener("click", () => {
            if (checkInput.checked)
                return;

            let index;

            index = taskObj.notes.findIndex(deathNote => deathNote.id == newNote.id);
            taskObj.notes.splice(index, 1);

            note.parentElement.removeChild(note);
            resize_expanded();
        });
        return note;
    }

    return task;
}

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/***/ (() => {

//const buttons = document.querySelectorAll(".activity button");
const active = "active-sidebar-element";

const elems = [
    ...document.querySelectorAll(".activity button"),
    ...document.querySelectorAll(".projects .project")
];

elems.forEach(elem => elem.addEventListener("click", () => {
    if (elem.id != active) {
        document.getElementById(active).id = '';
        elem.id = active;
    }
}));

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ (() => {

const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle input[type='checkbox']");

root.className = "light";
toggle.addEventListener("click", () => root.className = toggle.checked ? "dark" : "light");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create_id": () => (/* binding */ create_id),
/* harmony export */   "due_date": () => (/* binding */ due_date)
/* harmony export */ });
function due_date(value) {
    const days = [
        "Sun",
        "Mon", 
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let date, data;

    data = value.split('-').map((res, index) => (index % 2) ? res - 1 : res);
    date = new Date(data[0], data[1], data[2]);
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
}

function create_id(size) {
    let id;

    id = '';
    for (let i = 0; i < size; i++) {
        let number;

        do
            number = Math.floor(Math.random() * 94) + 33;
        while (number == 34 || number == 39 || number == 96 || number == 92);
        id += String.fromCharCode(number);
    }
    return id;
}

/***/ }),

/***/ "./src/images/arrow-collapse-all.svg":
/*!*******************************************!*\
  !*** ./src/images/arrow-collapse-all.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "arrow-collapse-all.svg";

/***/ }),

/***/ "./src/images/arrow-expand-all.svg":
/*!*****************************************!*\
  !*** ./src/images/arrow-expand-all.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "arrow-expand-all.svg";

/***/ }),

/***/ "./src/images/check-bold.svg":
/*!***********************************!*\
  !*** ./src/images/check-bold.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "check-bold.svg";

/***/ }),

/***/ "./src/images/cog-outline.svg":
/*!************************************!*\
  !*** ./src/images/cog-outline.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cog-outline.svg";

/***/ }),

/***/ "./src/images/delete-outline.svg":
/*!***************************************!*\
  !*** ./src/images/delete-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "delete-outline.svg";

/***/ }),

/***/ "./src/images/granular.jpg":
/*!*********************************!*\
  !*** ./src/images/granular.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "granular.jpg";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "logo.png";

/***/ }),

/***/ "./src/images/night.svg":
/*!******************************!*\
  !*** ./src/images/night.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "night.svg";

/***/ }),

/***/ "./src/images/plus-box-outline.svg":
/*!*****************************************!*\
  !*** ./src/images/plus-box-outline.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "plus-box-outline.svg";

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "plus.svg";

/***/ }),

/***/ "./src/images/project.svg":
/*!********************************!*\
  !*** ./src/images/project.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "project.svg";

/***/ }),

/***/ "./src/images/shredder.svg":
/*!*********************************!*\
  !*** ./src/images/shredder.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "shredder.svg";

/***/ }),

/***/ "./src/images/sun.svg":
/*!****************************!*\
  !*** ./src/images/sun.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sun.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _imports_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imports.js */ "./src/imports.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _taskdom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskdom.js */ "./src/taskdom.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");





//import { asideInterface } from "./aside.js";

const checked = document.querySelector(".checked");
const unchecked = document.querySelector(".unchecked");

const tasks = [];
const extInterface = {
    array: tasks,
    warning: null,
    checked,
    unchecked,
    userDataString: null
};

let priorities = ["low", "medium", "high"];
for (let i = 0; i < 10; i++) {
    let description, checkedBox, priority, duedate, id, notes, task;

    description = "This is a test task";
    checkedBox = false;
    priority = priorities[~~(Math.random() * priorities.length)];
    duedate = "2022-05-13";
    id = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.create_id)(10);
    notes = [
        {
            text: "This is a string",
            id: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.create_id)(10)
        },
        {
            text: "This is a test",
            id: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.create_id)(10)
        }
    ];

    task = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.create_task)(description, checkedBox, priority, duedate, id, notes);
    unchecked.append((0,_taskdom_js__WEBPACK_IMPORTED_MODULE_2__.create_task_dom)(task, extInterface));
}

//asideInterface.resize_aside();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map