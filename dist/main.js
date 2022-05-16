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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    transition: all .33s;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root.light {\n    --nav-bg: rgb(136, 188, 226);\n    --body-bg: rgb(255, 255, 255);\n    --color: rgb(31, 20, 20);\n    --cog-filter: none;\n    --cog-hover-filter: invert(25%);\n    --aside-bg: rgb(119, 154, 202);\n    --period-bg: rgb(192, 193, 255);\n    --project-bg: rgb(229, 97, 97);\n}\n\n:root.dark {\n    --nav-bg: rgb(8, 15, 33);\n    --body-bg: rgb(67, 18, 65);\n    --color: azure;\n    --cog-filter: invert(100%);\n    --cog-hover-filter: invert(75%);\n    --aside-bg: rgb(21, 38, 82);\n    --period-bg: rgb(26, 191, 191);\n    --project-bg: rgb(148, 108, 108);\n}\n\nbody {\n    background: var(--body-bg);\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: auto auto;\n}\n\n/* NAV */\n\nnav {\n    background: var(--nav-bg);\n    color: var(--color);\n    padding: 10px 20px;\n    display: flex;\n    justify-content: space-between;\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n}\n\nnav>div {\n    display: flex;\n    align-items: center;\n}\n\nnav .logo h1 {\n    margin-left: 20px;\n}\n\nnav .config .settings {\n    margin-right: 20px;\n    width: 30px;\n    height: 30px;\n    background-color: transparent;\n    border: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    filter: var(--cog-filter);\n}\n\nnav .config .settings:hover {\n    filter: var(--cog-hover-filter);\n}\n\nnav .config .settings:hover {\n    transform: rotate(90deg);\n}\n\nnav .logo .burger {\n    display: none;\n}\n\n/* ASIDE */\n\naside {\n    background: var(--aside-bg);\n    color: var(--color);\n    position: relative; \n    padding: 20px;\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n}\n\naside ul {\n    list-style: none;\n}\n\naside h2 {\n    font-size: 2rem;\n    margin: 20px 0;\n}\n\naside .activity button {\n    background: var(--period-bg);\n    border: none;\n    width: 100%;\n    text-align: start;\n    border-radius: 5px;\n    margin: 0 20px 20px 0;\n    padding: 10px;\n    font-size: 1.25rem;\n}\n\naside #active-sidebar-element {\n    border: 3px solid yellow;\n    color: azure;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n}\n\naside .projects:last-child {\n    margin-bottom: 75px;\n}\n\naside .add-project {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: rgb(251, 251, 252);\n    filter: invert(32%) sepia(96%) saturate(558%) hue-rotate(182deg) brightness(94%) contrast(200%);\n    border-radius: 10px;\n    width: 100%;\n    height: 75px;\n}\n\naside .add-project:hover {\n    filter: invert(32%) sepia(96%) saturate(558%) hue-rotate(182deg) brightness(94%) contrast(150%);\n}\n\naside .add-project:active {\n    transform: scale(.975);\n}\n\naside .project {\n    background: var(--project-bg);\n    color: azure;\n    text-align: center;\n    margin: 20px 5px;\n    padding: 10px;\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\naside .project h3 {\n    margin: 0 10px;\n}\n\naside .project img {\n    filter: invert(100%);\n    width: 30px;\n    height: 30px;\n}\n\naside .project canvas {\n    border: 2px solid yellow;\n    border-radius: 50%;\n}\n\n/* MAIN */\n\nmain {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n}\n\n@media screen and (max-width: 480px) {\n    body {\n        display: block;\n        position: relative;\n    }\n\n    nav .logo .burger {\n        display: flex;\n    }\n\n    aside {\n        width: 90%;\n        height: 100%;\n        position: absolute;\n        transform: translateX(-100%);\n        z-index: 1;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/based.css"],"names":[],"mappings":"AAAA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,oBAAoB;IACpB,yCAAyC;AAC7C;;AAEA;IACI,4BAA4B;IAC5B,6BAA6B;IAC7B,wBAAwB;IACxB,kBAAkB;IAClB,+BAA+B;IAC/B,8BAA8B;IAC9B,+BAA+B;IAC/B,8BAA8B;AAClC;;AAEA;IACI,wBAAwB;IACxB,0BAA0B;IAC1B,cAAc;IACd,0BAA0B;IAC1B,+BAA+B;IAC/B,2BAA2B;IAC3B,8BAA8B;IAC9B,gCAAgC;AACpC;;AAEA;IACI,0BAA0B;IAC1B,aAAa;IACb,8BAA8B;IAC9B,6BAA6B;AACjC;;AAEA,QAAQ;;AAER;IACI,yBAAyB;IACzB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,YAAY;IACZ,yDAAkD;IAClD,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;AACjB;;AAEA,UAAU;;AAEV;IACI,2BAA2B;IAC3B,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,yDAA+C;IAC/C,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,yDAAuD;IACvD,wBAAwB;IACxB,4BAA4B;IAC5B,2BAA2B;IAC3B,oCAAoC;IACpC,+FAA+F;IAC/F,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,+FAA+F;AACnG;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,oBAAoB;IACpB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA,SAAS;;AAET;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI;QACI,cAAc;QACd,kBAAkB;IACtB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,UAAU;QACV,YAAY;QACZ,kBAAkB;QAClB,4BAA4B;QAC5B,UAAU;IACd;AACJ","sourcesContent":["*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    transition: all .33s;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root.light {\n    --nav-bg: rgb(136, 188, 226);\n    --body-bg: rgb(255, 255, 255);\n    --color: rgb(31, 20, 20);\n    --cog-filter: none;\n    --cog-hover-filter: invert(25%);\n    --aside-bg: rgb(119, 154, 202);\n    --period-bg: rgb(192, 193, 255);\n    --project-bg: rgb(229, 97, 97);\n}\n\n:root.dark {\n    --nav-bg: rgb(8, 15, 33);\n    --body-bg: rgb(67, 18, 65);\n    --color: azure;\n    --cog-filter: invert(100%);\n    --cog-hover-filter: invert(75%);\n    --aside-bg: rgb(21, 38, 82);\n    --period-bg: rgb(26, 191, 191);\n    --project-bg: rgb(148, 108, 108);\n}\n\nbody {\n    background: var(--body-bg);\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: auto auto;\n}\n\n/* NAV */\n\nnav {\n    background: var(--nav-bg);\n    color: var(--color);\n    padding: 10px 20px;\n    display: flex;\n    justify-content: space-between;\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n}\n\nnav>div {\n    display: flex;\n    align-items: center;\n}\n\nnav .logo h1 {\n    margin-left: 20px;\n}\n\nnav .config .settings {\n    margin-right: 20px;\n    width: 30px;\n    height: 30px;\n    background-color: transparent;\n    border: none;\n    background-image: url(\"../images/cog-outline.svg\");\n    background-size: cover;\n    filter: var(--cog-filter);\n}\n\nnav .config .settings:hover {\n    filter: var(--cog-hover-filter);\n}\n\nnav .config .settings:hover {\n    transform: rotate(90deg);\n}\n\nnav .logo .burger {\n    display: none;\n}\n\n/* ASIDE */\n\naside {\n    background: var(--aside-bg);\n    color: var(--color);\n    position: relative; \n    padding: 20px;\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n}\n\naside ul {\n    list-style: none;\n}\n\naside h2 {\n    font-size: 2rem;\n    margin: 20px 0;\n}\n\naside .activity button {\n    background: var(--period-bg);\n    border: none;\n    width: 100%;\n    text-align: start;\n    border-radius: 5px;\n    margin: 0 20px 20px 0;\n    padding: 10px;\n    font-size: 1.25rem;\n}\n\naside #active-sidebar-element {\n    border: 3px solid yellow;\n    color: azure;\n    background-image: url(\"../images/granular.jpg\");\n    background-size: cover;\n}\n\naside .projects:last-child {\n    margin-bottom: 75px;\n}\n\naside .add-project {\n    background-image: url(\"../images/plus-box-outline.svg\");\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: rgb(251, 251, 252);\n    filter: invert(32%) sepia(96%) saturate(558%) hue-rotate(182deg) brightness(94%) contrast(200%);\n    border-radius: 10px;\n    width: 100%;\n    height: 75px;\n}\n\naside .add-project:hover {\n    filter: invert(32%) sepia(96%) saturate(558%) hue-rotate(182deg) brightness(94%) contrast(150%);\n}\n\naside .add-project:active {\n    transform: scale(.975);\n}\n\naside .project {\n    background: var(--project-bg);\n    color: azure;\n    text-align: center;\n    margin: 20px 5px;\n    padding: 10px;\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\naside .project h3 {\n    margin: 0 10px;\n}\n\naside .project img {\n    filter: invert(100%);\n    width: 30px;\n    height: 30px;\n}\n\naside .project canvas {\n    border: 2px solid yellow;\n    border-radius: 50%;\n}\n\n/* MAIN */\n\nmain {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n}\n\n@media screen and (max-width: 480px) {\n    body {\n        display: block;\n        position: relative;\n    }\n\n    nav .logo .burger {\n        display: flex;\n    }\n\n    aside {\n        width: 90%;\n        height: 100%;\n        position: absolute;\n        transform: translateX(-100%);\n        z-index: 1;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/empty.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/empty.css ***!
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/reload.svg */ "./src/images/reload.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root.light {\n    --empty-color: rgb(149, 217, 246);\n    --color: rgb(95, 75, 75);\n}\n\n:root.dark {\n    --empty-color: rgb(0, 10, 126);\n    --color: azure;\n}\n\n.empty-period {\n    background: var(--empty-color);\n    color: var(--color);\n    margin: 50px auto;\n    width: fit-content;\n    border-radius: 20px;\n    padding: 20px;\n    position: relative;\n    display: grid;\n    place-items: center;\n}\n\n.empty-period .empty-container {\n    position: relative;\n}\n\n.empty-period h2 {\n    width: 50%;\n    text-align: center;\n    margin-bottom: 20px;\n}\n\n.empty-period img {\n    border-radius: 20px;\n}\n\n.empty-period button {\n    background-color: rgba(249, 243, 243, 0.75);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    border: none;\n    width: 30px;\n    height: 30px;\n    border-radius: 100%;\n    position: absolute;\n    bottom: 20px;\n    right: 20px;\n}\n\n.empty-period button:hover {\n    filter: invert(10%);\n}\n\n.empty-period button:active {\n    transform: scale(.975);\n}\n\n.empty-period img {\n    width: 700px;\n}\n\n@media screen and (max-width: 800px) {\n    .empty-period img {\n        width: 500px;\n    }\n}\n\n@media screen and (max-width: 480px) {\n    .empty-period {\n        max-width: 350px;\n    }\n\n    .empty-period img {\n        width: 300px;\n    }\n\n    .empty-period h2 {\n        width: 100%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/empty.css"],"names":[],"mappings":"AAAA;IACI,iCAAiC;IACjC,wBAAwB;AAC5B;;AAEA;IACI,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;IACI,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,2CAA2C;IAC3C,yDAA6C;IAC7C,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI;QACI,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,gBAAgB;IACpB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,WAAW;IACf;AACJ","sourcesContent":[":root.light {\n    --empty-color: rgb(149, 217, 246);\n    --color: rgb(95, 75, 75);\n}\n\n:root.dark {\n    --empty-color: rgb(0, 10, 126);\n    --color: azure;\n}\n\n.empty-period {\n    background: var(--empty-color);\n    color: var(--color);\n    margin: 50px auto;\n    width: fit-content;\n    border-radius: 20px;\n    padding: 20px;\n    position: relative;\n    display: grid;\n    place-items: center;\n}\n\n.empty-period .empty-container {\n    position: relative;\n}\n\n.empty-period h2 {\n    width: 50%;\n    text-align: center;\n    margin-bottom: 20px;\n}\n\n.empty-period img {\n    border-radius: 20px;\n}\n\n.empty-period button {\n    background-color: rgba(249, 243, 243, 0.75);\n    background-image: url(\"../images/reload.svg\");\n    background-size: cover;\n    border: none;\n    width: 30px;\n    height: 30px;\n    border-radius: 100%;\n    position: absolute;\n    bottom: 20px;\n    right: 20px;\n}\n\n.empty-period button:hover {\n    filter: invert(10%);\n}\n\n.empty-period button:active {\n    transform: scale(.975);\n}\n\n.empty-period img {\n    width: 700px;\n}\n\n@media screen and (max-width: 800px) {\n    .empty-period img {\n        width: 500px;\n    }\n}\n\n@media screen and (max-width: 480px) {\n    .empty-period {\n        max-width: 350px;\n    }\n\n    .empty-period img {\n        width: 300px;\n    }\n\n    .empty-period h2 {\n        width: 100%;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/period_project.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/period_project.css ***!
  \**************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/chevron-right.svg */ "./src/images/chevron-right.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root.light {\n    --project-bg: rgb(229, 97, 97);\n    --color: black;\n\n}\n\n:root.dark {\n    --project-bg: rgb(148, 108, 108);\n    --color: azure;\n}\n\n.period-projects {\n    color: var(--color);\n    list-style: none;\n    display: grid;\n    place-items: center;\n}\n\n.period-project {\n    background: var(--project-bg);\n    width: fit-content;\n    margin: 20px;\n    padding: 20px;\n    border-radius: 10px;\n}\n\n.period-project .principal-section {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: 20px;\n    margin-bottom: 20px;\n}\n\n.period-project .principal-section img {\n    width: 40px;\n    height: 40px;\n    filter: invert(100%);\n}\n\n.period-project .principal-section h2 {\n    text-align: center;\n}\n\n.period-project canvas {\n    width: 50px;\n    height: 50px;\n    border: 3px solid snow;\n}\n\n.period-project .show-tasks {\n    appearance: none;\n    background-color: transparent;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    border: none;\n    filter: invert(100%);\n    width: 40px;\n    height: 40px;\n}\n\n.period-project .show-tasks:checked {\n    transform: rotate(90deg);\n}\n\n.period-project .show-tasks:hover {\n    filter: invert(90%);\n}\n\n.period-project .lower-section {\n    background: rgb(185, 185, 248);\n    padding: 15px 15px 15px 5px;\n    border-radius: 10px;\n    display: grid;\n    place-items: center;\n    position: absolute;\n}\n\n.period-project .extra-wrapper {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n}\n\n@media screen and (max-width: 480px) {\n    .period-project {\n        margin: 20px 5px;\n        padding: 5px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/period_project.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,cAAc;;AAElB;;AAEA;IACI,gCAAgC;IAChC,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,6BAA6B;IAC7B,yDAAoD;IACpD,sBAAsB;IACtB,YAAY;IACZ,oBAAoB;IACpB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;IAC9B,2BAA2B;IAC3B,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI;QACI,gBAAgB;QAChB,YAAY;IAChB;AACJ","sourcesContent":[":root.light {\n    --project-bg: rgb(229, 97, 97);\n    --color: black;\n\n}\n\n:root.dark {\n    --project-bg: rgb(148, 108, 108);\n    --color: azure;\n}\n\n.period-projects {\n    color: var(--color);\n    list-style: none;\n    display: grid;\n    place-items: center;\n}\n\n.period-project {\n    background: var(--project-bg);\n    width: fit-content;\n    margin: 20px;\n    padding: 20px;\n    border-radius: 10px;\n}\n\n.period-project .principal-section {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: 20px;\n    margin-bottom: 20px;\n}\n\n.period-project .principal-section img {\n    width: 40px;\n    height: 40px;\n    filter: invert(100%);\n}\n\n.period-project .principal-section h2 {\n    text-align: center;\n}\n\n.period-project canvas {\n    width: 50px;\n    height: 50px;\n    border: 3px solid snow;\n}\n\n.period-project .show-tasks {\n    appearance: none;\n    background-color: transparent;\n    background-image: url(\"../images/chevron-right.svg\");\n    background-size: cover;\n    border: none;\n    filter: invert(100%);\n    width: 40px;\n    height: 40px;\n}\n\n.period-project .show-tasks:checked {\n    transform: rotate(90deg);\n}\n\n.period-project .show-tasks:hover {\n    filter: invert(90%);\n}\n\n.period-project .lower-section {\n    background: rgb(185, 185, 248);\n    padding: 15px 15px 15px 5px;\n    border-radius: 10px;\n    display: grid;\n    place-items: center;\n    position: absolute;\n}\n\n.period-project .extra-wrapper {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n}\n\n@media screen and (max-width: 480px) {\n    .period-project {\n        margin: 20px 5px;\n        padding: 5px;\n    }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root.light {\n    --project-name-bg: peachpuff;\n    --project-description-bg: rgb(249, 239, 221);\n    --project-color: rgb(31, 35, 96);\n    --button-filter: none;\n\n}\n\n:root.dark {\n    --project-name-bg: rgb(55, 57, 107);\n    --project-description-bg: black;\n    --project-color: azure;\n    --button-filter: invert(100%);\n}\n\n.project-item {\n    color: var(--project-color);\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n\n.project-item ul {\n    list-style: none;\n}\n\n.project-item .info {\n    text-align: center;\n    display: flex;\n    gap: 20px;\n    align-self: center;\n    align-items: center;\n    margin: 20px;\n}\n\n.project-item .info .details {\n    background: var(--project-name-bg);\n    padding: 10px;\n    border-radius: 10px;\n    width: 300px;\n}\n\n.project-item .info .details h2 {\n    font-size: 1.55rem;\n}\n\n.project-item .info .details p {\n    background: var(--project-description-bg);\n    border-radius: 10px;\n    padding: 10px;\n    margin: 10px;\n}\n\n.project-item .info .graphics {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.project-item .info .graphics img {\n    border: 3px solid azure;\n    width: 200px;\n    border-radius: 30px;\n}\n\n.project-item .info .graphics .canvas-container {\n    position: relative;\n}\n\n.project-item .info .graphics .canvas-container p {\n    position: absolute;\n    display: grid;\n    place-items: center;\n    font-size: 2rem;\n    width: 6rem;\n    height: 6rem;\n    top: calc(50% - 3rem);\n    left: calc(50% - 3rem);\n}\n\n.project-item .tasks {\n    display: flex;\n    justify-content: space-around;\n}\n\n.project-item .checked-container .remove-all-checked {\n    background: rgb(236, 151, 145);\n    color: azure;\n    padding: 5px;\n    margin: 20px;\n    width: 100px;\n    height: 50px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n}\n\n.project-item .checked-container .remove-all-checked:hover {\n    background: rgb(212, 131, 128);\n}\n\n.project-item .checked-container .remove-all-checked:active {\n    transform: scale(.975);\n}\n\n.project-item .checked-container .remove-all-checked img {\n    width: 30px;\n    height: 30px;\n    filter: invert(100%);\n}\n\n.project-item .checked-container .remove-all-checked p {\n    width: 100px;\n}\n\n.project-item .add-task {\n    background-color: rgb(164, 230, 209);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    min-width: 300px;\n    width: calc(100% + 10px);\n    height: 50px;\n    margin: 20px 0;\n    border-radius: 10px;\n    border: none;\n}\n\n.project-item .add-task:hover {\n    filter: invert(10%);\n}\n\n.project-item .add-task:active {\n    transform: scale(.975);\n}\n\n.project-item .delete-project {\n    background-color: transparent;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: contain;\n    border: 2px solid rgb(40, 36, 36);\n    border-radius: 5px;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    width: 30px;\n    height: 30px;\n    filter: var(--button-filter);\n}\n\n.project-item .delete-project:hover {\n    background-color: rgba(111, 97, 97, 0.25);\n}\n\n.project-item .delete-project:active {\n    transform: scale(.975);\n}\n\n:root.light {\n    --modal-content-bg: rgb(174, 179, 224);\n    --new-task-notes-bg: rgb(228, 224, 171);\n    --new-note-bg: rgb(249, 255, 232);\n    --create-bg: rgb(87, 233, 102);\n    --create-color: rgb(18, 22, 22);\n    --create-hover: rgb(82, 218, 96);\n    --filter: none;\n}\n\n:root.dark {\n    --modal-content-bg: rgb(0, 45, 128);\n    --new-task-notes-bg: rgb(13, 36, 57);\n    --new-note-bg: rgb(0, 0, 29);\n    --create-bg: rgb(2, 14, 68);\n    --create-color: azure;\n    --create-hover: rgb(1, 1, 20);\n    --filter: invert(100%);\n}\n\n.project-item .modal {\n    background: rgba(66, 43, 43, 0.5);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.project-item .modal-content {\n    background: var(--modal-content-bg);\n    border-radius: 10px;\n    margin: 100px auto; \n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    width: 300px;\n}\n\n.project-item .modal .variables > li {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-item .modal input[type=\"date\"] {\n    width: fit-content;\n}\n\n.project-item .modal input[type=\"text\"] {\n    background: beige;\n    width: 70%;\n    padding: 5px;\n    font-size: 1.25rem;\n    border-radius: 5px;\n    border: none;\n}\n\n.project-item .modal .variables > li > p, .project-item .modal .variables > li > label {\n    font-size: 1.5rem;\n    margin-top: 20px;\n}\n\n.project-item .modal .choices {\n    display: flex;\n    text-align: center;\n}\n\n.project-item .modal #new-task-high {\n    background: rgb(239, 93, 93, .5);\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.project-item .modal #new-task-high:checked {\n    background: rgb(239, 93, 93);\n    border-top: 1px solid azure;\n    border-left: 1px solid azure;\n    border-bottom: 1px solid azure;\n}\n\n.project-item .modal #new-task-medium {\n    background: rgb(235, 241, 7, .5);\n}\n\n.project-item .modal #new-task-medium:checked {\n    background: rgb(235, 241, 7);\n    border-top: 1px solid azure;\n    border-bottom: 1px solid azure;\n}\n\n.project-item .modal #new-task-low {\n    background: rgb(59, 180, 213);\n    border-top: 1px solid azure;\n    border-right: 1px solid azure;\n    border-bottom: 1px solid azure;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px\n}\n\n.project-item .modal .choices input[type=\"checkbox\"] {\n    appearance: none;\n    width: 75px;\n    height: 20px;\n}\n\n.project-item .modal .choices li {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-item .modal .new-task-notes {\n    background: var(--new-task-notes-bg);\n    position: relative;\n    border-radius: 10px;\n    padding: 10px;\n}\n\n.project-item .modal .new-task-notes .remove-new-task-note {\n    background-color: transparent;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    filter: var(--filter);\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    width: 20px;\n    height: 20px;\n    border: none;\n}\n\n.project-item .modal .new-task-notes li {\n    background: var(--new-note-bg);\n    padding: 5px;\n    border-radius: 5px;\n    margin-bottom: 30px;\n    position: relative;\n}\n\n.project-item .modal .new-task-notes .new-task-add-note {\n    background-color: transparent;\n    border: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    filter: var(--filter);\n    position: absolute;\n    bottom: 5px;\n    right: 5px;\n    width: 30px;\n    height: 30px;\n}\n\n.project-item .modal .create {\n    background: var(--create-bg);\n    color: var(--create-color);\n    display: block;\n    padding: 10px;\n    font-size: 1.25rem;\n    margin: 10px auto;\n    border-radius: 5px;\n    border: none;\n}\n\n.project-item .modal .create:hover {\n    background: var(--create-hover);\n}\n\n.project-item .modal .create:active {\n    transform: scale(.99);\n}\n\n@media screen and (max-width: 700px) {\n    .project-item .tasks {\n        flex-direction: column;\n    }\n}\n\n@media screen and (max-width: 480px) {\n    .project-item {\n        padding: 10px;\n    }\n\n    .project-item .info {\n        flex-direction: column;\n    }\n\n    .project-item .info .graphics img {\n        width: 150px;\n    }\n\n    .project-item .info canvas {\n        width: 150px;\n        height: 150px;\n    }\n\n    .project-item .delete-project {\n       top: 10px;\n       right: 10px; \n    }\n}\n\n/* ... */\n#shalom {\n    position: fixed;\n    bottom: 20px;\n    left: 20px;\n    z-index: 100;\n}", "",{"version":3,"sources":["webpack://./src/css/project.css"],"names":[],"mappings":"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","sourcesContent":[":root.light {\n    --project-name-bg: peachpuff;\n    --project-description-bg: rgb(249, 239, 221);\n    --project-color: rgb(31, 35, 96);\n    --button-filter: none;\n\n}\n\n:root.dark {\n    --project-name-bg: rgb(55, 57, 107);\n    --project-description-bg: black;\n    --project-color: azure;\n    --button-filter: invert(100%);\n}\n\n.project-item {\n    color: var(--project-color);\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n\n.project-item ul {\n    list-style: none;\n}\n\n.project-item .info {\n    text-align: center;\n    display: flex;\n    gap: 20px;\n    align-self: center;\n    align-items: center;\n    margin: 20px;\n}\n\n.project-item .info .details {\n    background: var(--project-name-bg);\n    padding: 10px;\n    border-radius: 10px;\n    width: 300px;\n}\n\n.project-item .info .details h2 {\n    font-size: 1.55rem;\n}\n\n.project-item .info .details p {\n    background: var(--project-description-bg);\n    border-radius: 10px;\n    padding: 10px;\n    margin: 10px;\n}\n\n.project-item .info .graphics {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.project-item .info .graphics img {\n    border: 3px solid azure;\n    width: 200px;\n    border-radius: 30px;\n}\n\n.project-item .info .graphics .canvas-container {\n    position: relative;\n}\n\n.project-item .info .graphics .canvas-container p {\n    position: absolute;\n    display: grid;\n    place-items: center;\n    font-size: 2rem;\n    width: 6rem;\n    height: 6rem;\n    top: calc(50% - 3rem);\n    left: calc(50% - 3rem);\n}\n\n.project-item .tasks {\n    display: flex;\n    justify-content: space-around;\n}\n\n.project-item .checked-container .remove-all-checked {\n    background: rgb(236, 151, 145);\n    color: azure;\n    padding: 5px;\n    margin: 20px;\n    width: 100px;\n    height: 50px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n}\n\n.project-item .checked-container .remove-all-checked:hover {\n    background: rgb(212, 131, 128);\n}\n\n.project-item .checked-container .remove-all-checked:active {\n    transform: scale(.975);\n}\n\n.project-item .checked-container .remove-all-checked img {\n    width: 30px;\n    height: 30px;\n    filter: invert(100%);\n}\n\n.project-item .checked-container .remove-all-checked p {\n    width: 100px;\n}\n\n.project-item .add-task {\n    background-color: rgb(164, 230, 209);\n    background-image: url(\"../images/plus-box-outline.svg\");\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    min-width: 300px;\n    width: calc(100% + 10px);\n    height: 50px;\n    margin: 20px 0;\n    border-radius: 10px;\n    border: none;\n}\n\n.project-item .add-task:hover {\n    filter: invert(10%);\n}\n\n.project-item .add-task:active {\n    transform: scale(.975);\n}\n\n.project-item .delete-project {\n    background-color: transparent;\n    background-image: url(\"../images/delete-outline.svg\");\n    background-size: contain;\n    border: 2px solid rgb(40, 36, 36);\n    border-radius: 5px;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    width: 30px;\n    height: 30px;\n    filter: var(--button-filter);\n}\n\n.project-item .delete-project:hover {\n    background-color: rgba(111, 97, 97, 0.25);\n}\n\n.project-item .delete-project:active {\n    transform: scale(.975);\n}\n\n:root.light {\n    --modal-content-bg: rgb(174, 179, 224);\n    --new-task-notes-bg: rgb(228, 224, 171);\n    --new-note-bg: rgb(249, 255, 232);\n    --create-bg: rgb(87, 233, 102);\n    --create-color: rgb(18, 22, 22);\n    --create-hover: rgb(82, 218, 96);\n    --filter: none;\n}\n\n:root.dark {\n    --modal-content-bg: rgb(0, 45, 128);\n    --new-task-notes-bg: rgb(13, 36, 57);\n    --new-note-bg: rgb(0, 0, 29);\n    --create-bg: rgb(2, 14, 68);\n    --create-color: azure;\n    --create-hover: rgb(1, 1, 20);\n    --filter: invert(100%);\n}\n\n.project-item .modal {\n    background: rgba(66, 43, 43, 0.5);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.project-item .modal-content {\n    background: var(--modal-content-bg);\n    border-radius: 10px;\n    margin: 100px auto; \n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    width: 300px;\n}\n\n.project-item .modal .variables > li {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-item .modal input[type=\"date\"] {\n    width: fit-content;\n}\n\n.project-item .modal input[type=\"text\"] {\n    background: beige;\n    width: 70%;\n    padding: 5px;\n    font-size: 1.25rem;\n    border-radius: 5px;\n    border: none;\n}\n\n.project-item .modal .variables > li > p, .project-item .modal .variables > li > label {\n    font-size: 1.5rem;\n    margin-top: 20px;\n}\n\n.project-item .modal .choices {\n    display: flex;\n    text-align: center;\n}\n\n.project-item .modal #new-task-high {\n    background: rgb(239, 93, 93, .5);\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.project-item .modal #new-task-high:checked {\n    background: rgb(239, 93, 93);\n    border-top: 1px solid azure;\n    border-left: 1px solid azure;\n    border-bottom: 1px solid azure;\n}\n\n.project-item .modal #new-task-medium {\n    background: rgb(235, 241, 7, .5);\n}\n\n.project-item .modal #new-task-medium:checked {\n    background: rgb(235, 241, 7);\n    border-top: 1px solid azure;\n    border-bottom: 1px solid azure;\n}\n\n.project-item .modal #new-task-low {\n    background: rgb(59, 180, 213);\n    border-top: 1px solid azure;\n    border-right: 1px solid azure;\n    border-bottom: 1px solid azure;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px\n}\n\n.project-item .modal .choices input[type=\"checkbox\"] {\n    appearance: none;\n    width: 75px;\n    height: 20px;\n}\n\n.project-item .modal .choices li {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-item .modal .new-task-notes {\n    background: var(--new-task-notes-bg);\n    position: relative;\n    border-radius: 10px;\n    padding: 10px;\n}\n\n.project-item .modal .new-task-notes .remove-new-task-note {\n    background-color: transparent;\n    background-image: url(\"../images/delete-outline.svg\");\n    background-size: cover;\n    filter: var(--filter);\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    width: 20px;\n    height: 20px;\n    border: none;\n}\n\n.project-item .modal .new-task-notes li {\n    background: var(--new-note-bg);\n    padding: 5px;\n    border-radius: 5px;\n    margin-bottom: 30px;\n    position: relative;\n}\n\n.project-item .modal .new-task-notes .new-task-add-note {\n    background-color: transparent;\n    border: none;\n    background-image: url(\"../images/plus-box-outline.svg\");\n    background-size: cover;\n    filter: var(--filter);\n    position: absolute;\n    bottom: 5px;\n    right: 5px;\n    width: 30px;\n    height: 30px;\n}\n\n.project-item .modal .create {\n    background: var(--create-bg);\n    color: var(--create-color);\n    display: block;\n    padding: 10px;\n    font-size: 1.25rem;\n    margin: 10px auto;\n    border-radius: 5px;\n    border: none;\n}\n\n.project-item .modal .create:hover {\n    background: var(--create-hover);\n}\n\n.project-item .modal .create:active {\n    transform: scale(.99);\n}\n\n@media screen and (max-width: 700px) {\n    .project-item .tasks {\n        flex-direction: column;\n    }\n}\n\n@media screen and (max-width: 480px) {\n    .project-item {\n        padding: 10px;\n    }\n\n    .project-item .info {\n        flex-direction: column;\n    }\n\n    .project-item .info .graphics img {\n        width: 150px;\n    }\n\n    .project-item .info canvas {\n        width: 150px;\n        height: 150px;\n    }\n\n    .project-item .delete-project {\n       top: 10px;\n       right: 10px; \n    }\n}\n\n/* ... */\n#shalom {\n    position: fixed;\n    bottom: 20px;\n    left: 20px;\n    z-index: 100;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root.light {\n    --unchecked-bg: rgb(237, 239, 243);\n    --checked-bg: rgb(235, 229, 229);\n    --label-unchecked-bg: rgb(135, 217, 222);\n    --label-unchecked-color: rgb(85, 75, 75);\n    --label-checked-bg: rgb(155, 162, 163);\n    --label-checked-color: rgb(238, 230, 230);\n    --unchecked-extra-bg: rgb(255, 227, 227);\n    --checked-extra-bg: rgb(216, 209, 209);\n    --change-label-color: rgb(73, 62, 62);\n    --unchecked-note-bg: blanchedalmond;\n    --checked-note-bg: rgb(232, 227, 220);\n    --control-filter: none;\n}\n\n:root.dark {\n    --unchecked-bg: rgb(29, 64, 133);\n    --checked-bg: rgb(122, 94, 94);\n    --label-unchecked-bg: rgb(19, 3, 44);\n    --label-unchecked-color: rgb(247, 241, 241);\n    --label-checked-bg: rgb(201, 176, 176);\n    --label-checked-color: rgb(34, 4, 4);\n    --unchecked-extra-bg: rgb(88, 88, 173);\n    --checked-extra-bg: rgb(109, 109, 148);\n    --change-label-color: azure;\n    --unchecked-note-bg: rgb(61, 8, 74);\n    --checked-note-bg: rgb(85, 62, 90);\n    --control-filter: invert(100%);\n}\n\n.task {\n    max-width: 500px;\n    padding: 5px;\n    margin-bottom: 30px;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    position: relative;\n    transition: all .33s;\n}\n\n.task * {\n    transition: all .33s;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.task button {\n    filter: var(--control-filter);\n}\n\n.task.unchecked {\n    background: var(--unchecked-bg);\n}\n\n.task.checked {\n    background: var(--checked-bg);\n}\n\n.task .main-section {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.task .checkmark {\n    font-size: 1.25rem;\n    display: flex;\n}\n\n.task .checkmark input[type=\"checkbox\"] {\n    background: rgb(244, 244, 214);\n    border-radius: 3px;\n    appearance: none;\n    width: 1.25rem;\n    height: 1.25rem;\n    margin-right: 5px;\n    border: 1px solid rgb(199, 167, 167);\n}\n\n.task .checkmark input[type=\"checkbox\"]:checked {\n    background-color: rgb(231, 222, 211);\n    border-color: rgb(107, 75, 75);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n}\n\n.task .label, .task input[type=\"text\"] {\n    font-size: 1rem;\n    text-align: center;\n    padding: 3px;\n    width: 150px;\n    border-radius: 5px;\n    min-height: 45px;\n    display: grid;\n    place-items: center;\n    margin: 0 10px;\n}\n\n.task.unchecked .label, .task input[type=\"text\"] {\n    background: var(--label-unchecked-bg);\n    color: var(--label-unchecked-color);\n}\n\n.task.checked .label {\n    background: var(--label-checked-bg);\n    color: var(--label-checked-color);\n    text-decoration: line-through;\n}\n\n.task .extra-wrapper {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n}\n\n.task .expand-contract {\n    appearance: none;\n}\n\n.task .expand-contract, .task .delete {\n    width: 20px;\n    height: 20px;\n    border: none;\n    background-color: transparent;\n    background-size: cover;\n}\n\n.task .due-date {\n    margin: 0 10px;\n}\n\n.task button:hover {\n    filter: invert(50%);\n}\n\n.task button:active {\n    transform: scale(.95);\n}\n\n.task.unchecked .extra-section {\n    background: var(--unchecked-extra-bg);\n}\n\n.task.checked .extra-section {\n    background: var(--checked-extra-bg);\n}\n\n.task .extra-section {\n    width: 100%;\n    border-radius: 10px;\n    padding: 5px;\n    margin-top: 10px;\n    position: absolute;\n}\n\n.task .expand-contract {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    filter: var(--control-filter);\n}\n\n.task .expand-contract:checked {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.task .delete {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    position: absolute;\n    top: 5px;\n    right: 5px;\n}\n\n.extra-section .change-date {\n    width: fit-content;\n    display: flex;\n    flex-direction: column;\n}\n\n.extra-section .change-date label, .extra-section .change-priority p  {\n    color: var(--change-label-color);\n    margin-bottom: 10px;\n    font-size: 1.25rem;\n}\n\n.extra-section .change-priority {\n    margin-top: 20px;\n}\n\n.extra-section .change-priority input[type=\"checkbox\"] {\n    appearance: none;\n    width: 75px;\n    height: 20px;\n}\n\n.extra-section .change-priority .priorities {\n    display: flex;\n}\n\n.extra-section .change-priority .priorities div {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.extra-section .change-priority .high-priority input[type=\"checkbox\"] {\n    background: rgb(239, 93, 93, .35);\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.extra-section .change-priority .medium-priority input[type=\"checkbox\"] {\n    background: rgb(235, 241, 7, .35);\n}\n\n.extra-section .change-priority .low-priority input[type=\"checkbox\"] {\n    background: rgb(59, 180, 213, .35);\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n.extra-section .change-priority .high-priority input[type=\"checkbox\"]:checked {\n    background: rgb(239, 93, 93);\n    border-top: 3px solid rgb(154, 28, 28);\n    border-left: 3px solid rgb(154, 28, 28);\n    border-bottom: 3px solid rgb(154, 28, 28);\n}\n\n.extra-section .change-priority .medium-priority input[type=\"checkbox\"]:checked {\n    background: rgb(235 241 7);\n    border-top: 3px solid rgb(176, 182, 12);\n    border-bottom: 3px solid rgb(176, 182, 12);\n}\n\n.extra-section .change-priority .low-priority input[type=\"checkbox\"]:checked {\n    background: rgb(59, 180, 213);\n    border-top: 3px solid rgb(35, 144, 171);\n    border-right: 3px solid rgb(35, 144, 171);\n    border-bottom: 3px solid rgb(35, 144, 171);\n}\n\n.extra-section .notes {\n    padding: 10px;\n    margin-top: 20px;\n    position: relative;\n}\n\n.task.checked .extra-section .note, .extra-section textarea {\n    background: var(--checked-note-bg);\n}\n\n.task.unchecked .extra-section .note, .extra-section textarea {\n    background: var(--unchecked-note-bg);\n}\n\n.extra-section .note, .extra-section textarea {\n    border: 2px solid rgb(215, 205, 205);\n    width: 100%;\n    margin-bottom: 30px;\n    padding: 20px;\n    position: relative;\n    border-radius: 10px;\n}\n\n.task .notes .add-note {\n    width: 40px;\n    height: 40px;\n    background-color: transparent;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-size: cover;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    border: none;\n}\n\n.task .priority {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    right: -10px;\n    width: 10px;\n    height: 100%;\n}\n\n.task .priority div {\n    height: 33.3%;\n}\n\n.task .priority .high {\n    background: rgb(239, 93, 93, .25);\n    border-top-right-radius: 5px;\n}\n\n.task .priority .high.active {\n    background: rgb(239, 93, 93);\n}\n\n.task .priority .medium {\n    background: rgb(235, 241, 7, .25);\n}\n\n.task .priority .medium.active {\n    background: rgb(235, 241, 7);\n}\n\n.task .priority .low {\n    background: rgb(59, 180, 213);\n    border-bottom-right-radius: 5px;\n}\n\n@media screen and (max-width: 480px) {\n    .task {\n        width: fit-content;\n    }\n\n    .task .checkmark label {\n        display: none;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/task.css"],"names":[],"mappings":"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","sourcesContent":[":root.light {\n    --unchecked-bg: rgb(237, 239, 243);\n    --checked-bg: rgb(235, 229, 229);\n    --label-unchecked-bg: rgb(135, 217, 222);\n    --label-unchecked-color: rgb(85, 75, 75);\n    --label-checked-bg: rgb(155, 162, 163);\n    --label-checked-color: rgb(238, 230, 230);\n    --unchecked-extra-bg: rgb(255, 227, 227);\n    --checked-extra-bg: rgb(216, 209, 209);\n    --change-label-color: rgb(73, 62, 62);\n    --unchecked-note-bg: blanchedalmond;\n    --checked-note-bg: rgb(232, 227, 220);\n    --control-filter: none;\n}\n\n:root.dark {\n    --unchecked-bg: rgb(29, 64, 133);\n    --checked-bg: rgb(122, 94, 94);\n    --label-unchecked-bg: rgb(19, 3, 44);\n    --label-unchecked-color: rgb(247, 241, 241);\n    --label-checked-bg: rgb(201, 176, 176);\n    --label-checked-color: rgb(34, 4, 4);\n    --unchecked-extra-bg: rgb(88, 88, 173);\n    --checked-extra-bg: rgb(109, 109, 148);\n    --change-label-color: azure;\n    --unchecked-note-bg: rgb(61, 8, 74);\n    --checked-note-bg: rgb(85, 62, 90);\n    --control-filter: invert(100%);\n}\n\n.task {\n    max-width: 500px;\n    padding: 5px;\n    margin-bottom: 30px;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    position: relative;\n    transition: all .33s;\n}\n\n.task * {\n    transition: all .33s;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.task button {\n    filter: var(--control-filter);\n}\n\n.task.unchecked {\n    background: var(--unchecked-bg);\n}\n\n.task.checked {\n    background: var(--checked-bg);\n}\n\n.task .main-section {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.task .checkmark {\n    font-size: 1.25rem;\n    display: flex;\n}\n\n.task .checkmark input[type=\"checkbox\"] {\n    background: rgb(244, 244, 214);\n    border-radius: 3px;\n    appearance: none;\n    width: 1.25rem;\n    height: 1.25rem;\n    margin-right: 5px;\n    border: 1px solid rgb(199, 167, 167);\n}\n\n.task .checkmark input[type=\"checkbox\"]:checked {\n    background-color: rgb(231, 222, 211);\n    border-color: rgb(107, 75, 75);\n    background-image: url(\"../images/check-bold.svg\");\n    background-size: cover;\n}\n\n.task .label, .task input[type=\"text\"] {\n    font-size: 1rem;\n    text-align: center;\n    padding: 3px;\n    width: 150px;\n    border-radius: 5px;\n    min-height: 45px;\n    display: grid;\n    place-items: center;\n    margin: 0 10px;\n}\n\n.task.unchecked .label, .task input[type=\"text\"] {\n    background: var(--label-unchecked-bg);\n    color: var(--label-unchecked-color);\n}\n\n.task.checked .label {\n    background: var(--label-checked-bg);\n    color: var(--label-checked-color);\n    text-decoration: line-through;\n}\n\n.task .extra-wrapper {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n}\n\n.task .expand-contract {\n    appearance: none;\n}\n\n.task .expand-contract, .task .delete {\n    width: 20px;\n    height: 20px;\n    border: none;\n    background-color: transparent;\n    background-size: cover;\n}\n\n.task .due-date {\n    margin: 0 10px;\n}\n\n.task button:hover {\n    filter: invert(50%);\n}\n\n.task button:active {\n    transform: scale(.95);\n}\n\n.task.unchecked .extra-section {\n    background: var(--unchecked-extra-bg);\n}\n\n.task.checked .extra-section {\n    background: var(--checked-extra-bg);\n}\n\n.task .extra-section {\n    width: 100%;\n    border-radius: 10px;\n    padding: 5px;\n    margin-top: 10px;\n    position: absolute;\n}\n\n.task .expand-contract {\n    background-image: url(\"../images/arrow-expand-all.svg\");\n    filter: var(--control-filter);\n}\n\n.task .expand-contract:checked {\n    background-image: url(\"../images/arrow-collapse-all.svg\");\n}\n\n.task .delete {\n    background-image: url(\"../images/delete-outline.svg\");\n    position: absolute;\n    top: 5px;\n    right: 5px;\n}\n\n.extra-section .change-date {\n    width: fit-content;\n    display: flex;\n    flex-direction: column;\n}\n\n.extra-section .change-date label, .extra-section .change-priority p  {\n    color: var(--change-label-color);\n    margin-bottom: 10px;\n    font-size: 1.25rem;\n}\n\n.extra-section .change-priority {\n    margin-top: 20px;\n}\n\n.extra-section .change-priority input[type=\"checkbox\"] {\n    appearance: none;\n    width: 75px;\n    height: 20px;\n}\n\n.extra-section .change-priority .priorities {\n    display: flex;\n}\n\n.extra-section .change-priority .priorities div {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.extra-section .change-priority .high-priority input[type=\"checkbox\"] {\n    background: rgb(239, 93, 93, .35);\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.extra-section .change-priority .medium-priority input[type=\"checkbox\"] {\n    background: rgb(235, 241, 7, .35);\n}\n\n.extra-section .change-priority .low-priority input[type=\"checkbox\"] {\n    background: rgb(59, 180, 213, .35);\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n.extra-section .change-priority .high-priority input[type=\"checkbox\"]:checked {\n    background: rgb(239, 93, 93);\n    border-top: 3px solid rgb(154, 28, 28);\n    border-left: 3px solid rgb(154, 28, 28);\n    border-bottom: 3px solid rgb(154, 28, 28);\n}\n\n.extra-section .change-priority .medium-priority input[type=\"checkbox\"]:checked {\n    background: rgb(235 241 7);\n    border-top: 3px solid rgb(176, 182, 12);\n    border-bottom: 3px solid rgb(176, 182, 12);\n}\n\n.extra-section .change-priority .low-priority input[type=\"checkbox\"]:checked {\n    background: rgb(59, 180, 213);\n    border-top: 3px solid rgb(35, 144, 171);\n    border-right: 3px solid rgb(35, 144, 171);\n    border-bottom: 3px solid rgb(35, 144, 171);\n}\n\n.extra-section .notes {\n    padding: 10px;\n    margin-top: 20px;\n    position: relative;\n}\n\n.task.checked .extra-section .note, .extra-section textarea {\n    background: var(--checked-note-bg);\n}\n\n.task.unchecked .extra-section .note, .extra-section textarea {\n    background: var(--unchecked-note-bg);\n}\n\n.extra-section .note, .extra-section textarea {\n    border: 2px solid rgb(215, 205, 205);\n    width: 100%;\n    margin-bottom: 30px;\n    padding: 20px;\n    position: relative;\n    border-radius: 10px;\n}\n\n.task .notes .add-note {\n    width: 40px;\n    height: 40px;\n    background-color: transparent;\n    background-image: url(\"../images/plus-box-outline.svg\");\n    background-size: cover;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    border: none;\n}\n\n.task .priority {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    right: -10px;\n    width: 10px;\n    height: 100%;\n}\n\n.task .priority div {\n    height: 33.3%;\n}\n\n.task .priority .high {\n    background: rgb(239, 93, 93, .25);\n    border-top-right-radius: 5px;\n}\n\n.task .priority .high.active {\n    background: rgb(239, 93, 93);\n}\n\n.task .priority .medium {\n    background: rgb(235, 241, 7, .25);\n}\n\n.task .priority .medium.active {\n    background: rgb(235, 241, 7);\n}\n\n.task .priority .low {\n    background: rgb(59, 180, 213);\n    border-bottom-right-radius: 5px;\n}\n\n@media screen and (max-width: 480px) {\n    .task {\n        width: fit-content;\n    }\n\n    .task .checkmark label {\n        display: none;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/css/empty.css":
/*!***************************!*\
  !*** ./src/css/empty.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_empty_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./empty.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/empty.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_empty_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_empty_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_empty_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_empty_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/css/period_project.css":
/*!************************************!*\
  !*** ./src/css/period_project.css ***!
  \************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_period_project_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./period_project.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/period_project.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_period_project_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_period_project_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_period_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_period_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/empty_period.js":
/*!*****************************!*\
  !*** ./src/empty_period.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyObj": () => (/* binding */ emptyObj)
/* harmony export */ });
const emptyObj = (
    () => {
        const empty = document.createElement("div");
        const message = document.createElement("h2");
        const container = document.createElement("div");
        const img = document.createElement("img");
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const reload = document.createElement("button");
        let animeKiller, reg, intervals, subs;

        intervals = ["week", "month", "year", "all"];
        subs = ["earthporn", "TouhouArt", "brutalism"];
        reg = /^https:\/\/i\.redd\.it\/\w+\.(jpg|png|jpeg)/i;

        empty.append(message);
        empty.append(container);
        container.append(img);
        container.append(reload);

        empty.classList.add("empty-period");
        container.classList.add("empty-container");

        message.innerText = "There doesn't seem to be anything for this period, have a pic instead.";
        canvas.width = 200;
        canvas.height = 200;

        img.addEventListener("load", replace);

        reload.addEventListener("click", fetch_image);

        show_loading();
        fetch_image();

        function replace() {
            cancelAnimationFrame(animeKiller);
            canvas.replaceWith(img);
            reload.style.display = "block";
        }

        function fetch_image() {
            let interval, sub;

            interval = intervals[~~(Math.random() * intervals.length)];
            sub = subs[~~(Math.random() * subs.length)];
            show_loading();
            reload.style.display = "none";
            img.replaceWith(canvas);
            fetch(`https://www.reddit.com/r/${sub}/top.json?t=${interval}&limit=100`, { method: "GET" })
                .then(res => res.json())
                .then(res => {
                    let child;

                    do {    
                        child = res.data.children[~~(Math.random() * res.data.children.length)];
                    } while (!reg.test(child.data.url));

                    img.src = child.data.url;
                }).catch(error => {
                    console.log(error);
                    img.src = "./pepe.jpg";
                });
        }

        function show_loading() {
            let x, y, radius;

            x = Math.random() * canvas.width;
            y = Math.random() * canvas.height;
            radius = Math.random() * 100 + 50;
            context.fillStyle = "rgb(255, 255, 255, .05)";
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = "red";
            context.beginPath();
            context.arc(x, y, radius, 0, Math.PI * 2);
            context.stroke();

            animeKiller = requestAnimationFrame(show_loading);
        }

        return empty;
    }
)();

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
/* harmony import */ var _css_period_project_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/period_project.css */ "./src/css/period_project.css");
/* harmony import */ var _css_empty_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/empty.css */ "./src/css/empty.css");
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme.js */ "./src/theme.js");
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_theme_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _aside_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aside.js */ "./src/aside.js");
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./test.js */ "./src/test.js");
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_test_js__WEBPACK_IMPORTED_MODULE_10__);
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
/* harmony import */ var _images_chevron_right_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/chevron-right.svg */ "./src/images/chevron-right.svg");
/* harmony import */ var _images_reload_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/reload.svg */ "./src/images/reload.svg");
/* harmony import */ var _images_pepe_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/pepe.jpg */ "./src/images/pepe.jpg");



























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

        if (window.innerWidth < 480) {
            let aside;
            
            if (elem.classList.contains(".activity button"))
                aside.style.height = "fit-content";   
            else if (elem.classList.contains(".project"))
                aside.style.height = "100%";
        }
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

/***/ "./src/images/chevron-right.svg":
/*!**************************************!*\
  !*** ./src/images/chevron-right.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "chevron-right.svg";

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

/***/ "./src/images/pepe.jpg":
/*!*****************************!*\
  !*** ./src/images/pepe.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "pepe.jpg";

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

/***/ "./src/images/reload.svg":
/*!*******************************!*\
  !*** ./src/images/reload.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "reload.svg";

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
/* harmony import */ var _empty_period_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./empty_period.js */ "./src/empty_period.js");






// import { asideInterface } from "./aside.js";

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
for (let i = 0; i < 3; i++) {
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

// asideInterface.resize_aside();

//--------------------------------------------------------------------------------------

// const extras = document.querySelectorAll(".period-project .lower-section");
// const checks = document.querySelectorAll(".period-project .show-tasks");
// const tasks = [];
// const extInterface = {
//     array: tasks,
//     warning: null,
//     checked: null,
//     unchecked: null,
//     userDataString: null
// };

// let priorities = ["low", "medium", "high"];

// extras.forEach(extra => {
//     for (let i = 0; i < 3; i++) {
//         let description, checkedBox, priority, duedate, id, notes, task;

//         description = "This is a test task";
//         checkedBox = false;
//         priority = priorities[~~(Math.random() * priorities.length)];
//         duedate = "2022-05-13";
//         id = create_id(10);
//         notes = [
//             {
//                 text: "This is a string",
//                 id: create_id(10)
//             },
//             {
//                 text: "This is a test",
//                 id: create_id(10)
//             }
//         ];

//         task = create_task(description, checkedBox, priority, duedate, id, notes);
//         extra.append(create_task_dom(task, extInterface));
//     }
// });

// checks.forEach(check => check.addEventListener("click", () => {
//     resize_secs(check);
// }));

// checks.forEach(check => {
//     let parent, taskChecks, wrapper, lowerSecs;
//     parent = check.parentElement.parentElement;
//     console.log(parent);
//     taskChecks = parent.querySelectorAll(".task .expand-contract");
//     wrapper = parent.querySelector(".extra-wrapper");
//     lowerSecs = parent.querySelector(".lower-section");

//     taskChecks.forEach(task => task.addEventListener("click", () => {
//         let height;

//         setTimeout(() => {
//             height = window.getComputedStyle(lowerSecs).height;
//             wrapper.style.height = height;
//         }, 330);
//     }));
// });

// function resize_secs(check) {
//     let grandParent, wrapper, lowerSecs, height;

//     grandParent = check.parentElement.parentElement;
//     wrapper = grandParent.querySelector(".extra-wrapper");
//     lowerSecs = grandParent.querySelector(".lower-section");
//     height = window.getComputedStyle(lowerSecs).height;

//     if (check.checked) {
//         wrapper.style.height = height;
//         lowerSecs.style.top = 0;
//     }
//     else {
//         wrapper.style.height = 0;
//         lowerSecs.style.top = `-${height}`;
//     }
// }

//--------------------------------------------------------------------------------------

// const main = document.querySelector("main");

// main.append(emptyObj);

//--------------------------------------------------------------------------------------

// import { create_project_main_dom } from "./project_dom.js";
// import { create_project } from "./project.js";

// const main = document.querySelector("main");

// let label, description, img, tasks, id, project, projectDom;

// label = "By Me";
// description = "This is a title, it's unclear, but its obvious."
// //#region
// img = "data:image/png;base64,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";
// //#endregion
// //create_task(description, checked, priority, duedate, id, notes);
// tasks = [
//     {
//         description: "Description",
//         checked : false,
//         priority : "high",
//         duedate : "2022-12-25",
//         id : create_id(10),
//         notes : [
//             {
//                 text: "this machine",
//                 id : create_id(10)
//             }
//         ]
//     },
//     {
//         description: "Description",
//         checked : false,
//         priority : "high",
//         duedate : "2022-12-25",
//         id : create_id(10),
//         notes : [
//             {
//                 text: "this machine",
//                 id : create_id(10)
//             }
//         ]
//     },
// ];

// id = create_id(10);

// project = create_project(label, description, img, tasks, id);
// projectDom = create_project_main_dom(project, null);
// main.append(projectDom);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map