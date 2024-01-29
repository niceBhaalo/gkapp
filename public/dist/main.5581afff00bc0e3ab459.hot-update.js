"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateprojectalpha"]("main",{

/***/ "./public/js/levelscene.js":
/*!*********************************!*\
  !*** ./public/js/levelscene.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _classicscene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classicscene.js */ \"./public/js/classicscene.js\");\n/* harmony import */ var _mainmenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainmenu.js */ \"./public/js/mainmenu.js\");\n/* harmony import */ var _namesymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./namesymbols.js */ \"./public/js/namesymbols.js\");\n/* harmony import */ var _nameelements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nameelements.js */ \"./public/js/nameelements.js\");\n/* harmony import */ var _dragelement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dragelement.js */ \"./public/js/dragelement.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst menu = new _mainmenu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst classic = new _classicscene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst namesymbols = new _namesymbols_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst nameelements = new _nameelements_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\nconst placeelements = new _dragelement_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\n\r\nconst modeInstances = {\r\n    'classic': classic,\r\n    'menu': menu,\r\n    'namesymbols': namesymbols,\r\n    'nameelements': nameelements,\r\n    'placeelements': placeelements,\r\n};\r\n\r\nconst levelConfig = {};\r\n\r\nObject.keys(modeInstances).forEach(mode => {\r\n    levelConfig[mode] = {\r\n        init: function () {\r\n            modeInstances[mode].init();\r\n        },\r\n        exit: function () {\r\n            modeInstances[mode].exit();\r\n        }\r\n    };\r\n});\r\n\r\nclass LevelScene {\r\n    constructor(levelNumber) {\r\n        this.levelNumber = levelNumber;\r\n        this.levelInit = levelConfig[levelNumber].init;\r\n        this.levelExit = levelConfig[levelNumber].exit;\r\n    }\r\n    init() {\r\n        this.levelInit();\r\n    }\r\n    exit() {\r\n        this.levelExit();\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LevelScene);\n\n//# sourceURL=webpack://projectalpha/./public/js/levelscene.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a493abf436e2ac1d7a8a")
/******/ })();
/******/ 
/******/ }
);