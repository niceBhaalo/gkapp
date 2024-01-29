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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _classicscene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classicscene.js */ \"./public/js/classicscene.js\");\n/* harmony import */ var _mainmenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainmenu.js */ \"./public/js/mainmenu.js\");\n/* harmony import */ var _namesymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./namesymbols.js */ \"./public/js/namesymbols.js\");\n/* harmony import */ var _nameelements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nameelements.js */ \"./public/js/nameelements.js\");\n/* harmony import */ var _dragelement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dragelement.js */ \"./public/js/dragelement.js\");\n/* harmony import */ var _beginnerscene_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./beginnerscene.js */ \"./public/js/beginnerscene.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './extremescene.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _sblockscene_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sblockscene.js */ \"./public/js/sblockscene.js\");\n/* harmony import */ var _pblockscene_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pblockscene.js */ \"./public/js/pblockscene.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './dblockscene.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './fblockscene.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './arrangescene.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _guidedscene_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guidedscene.js */ \"./public/js/guidedscene.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst menu = new _mainmenu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst classic = new _classicscene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst namesymbols = new _namesymbols_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst nameelements = new _nameelements_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\nconst placeelements = new _dragelement_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\n\r\nconst beginner = new _beginnerscene_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\r\nconst extreme = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './extremescene.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\nconst sblock = new _sblockscene_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\r\nconst pblock = new _pblockscene_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\r\nconst dblock = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './dblockscene.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\nconst fblock = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './fblockscene.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\nconst arrange = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './arrangescene.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\nconst guided = new _guidedscene_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]();\r\n\r\n\r\nconst modeInstances = {\r\n    'classic': classic,\r\n    'menu': menu,\r\n    'namesymbols': namesymbols,\r\n    'nameelements': nameelements,\r\n    'placeelements': placeelements,\r\n    'beginner': beginner,\r\n    'extreme': extreme,\r\n    'sblock': sblock,\r\n    'pblock': pblock,\r\n    'dblock': dblock,\r\n    'fblock': fblock,\r\n    'arrange': arrange,\r\n    'guided': guided\r\n};\r\n\r\nconst levelConfig = {};\r\n\r\nObject.keys(modeInstances).forEach(mode => {\r\n    levelConfig[mode] = {\r\n        init: function () {\r\n            modeInstances[mode].init();\r\n        },\r\n        exit: function () {\r\n            modeInstances[mode].exit();\r\n        }\r\n    };\r\n});\r\n\r\nclass LevelScene {\r\n    constructor(levelNumber) {\r\n        this.levelNumber = levelNumber;\r\n        this.levelInit = levelConfig[levelNumber].init;\r\n        this.levelExit = levelConfig[levelNumber].exit;\r\n    }\r\n    init() {\r\n        this.levelInit();\r\n    }\r\n    exit() {\r\n        this.levelExit();\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LevelScene);\n\n//# sourceURL=webpack://projectalpha/./public/js/levelscene.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9cfad1fb8a2f2acb6c25")
/******/ })();
/******/ 
/******/ }
);