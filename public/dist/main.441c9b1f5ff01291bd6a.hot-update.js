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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _practicescene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./practicescene.js */ \"./public/js/practicescene.js\");\n/* harmony import */ var _mainmenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainmenu.js */ \"./public/js/mainmenu.js\");\n/* harmony import */ var _beginnerscene_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beginnerscene.js */ \"./public/js/beginnerscene.js\");\n\r\n\r\n\r\nconst menu = new _mainmenu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst practice = new _practicescene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst beginner = new _beginnerscene_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\nconst modeNames = ['practice', 'menu', 'beginner'];\r\n\r\nconst levelConfig = {};\r\n\r\nmodeNames.forEach(mode => {\r\n    levelConfig[mode] = {\r\n        init: function () {\r\n            window[mode].init();\r\n        },\r\n        exit: function () {\r\n            window[mode].exit();\r\n        }\r\n    };\r\n});\r\n\r\n\r\n// Now levelConfig contains entries for all modes\r\n\r\n\r\nclass LevelScene {\r\n\tconstructor(levelNumber) {\r\n\t\tthis.levelNumber = levelNumber;\r\n\t\tthis.levelInit = levelConfig[levelNumber].init;\r\n\t\tthis.levelExit = levelConfig[levelNumber].exit;\r\n\t}\r\n\tinit() {\r\n\t\tthis.levelInit();\r\n\t}\r\n\texit() {\r\n\t\tthis.levelExit();\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LevelScene);\n\n//# sourceURL=webpack://projectalpha/./public/js/levelscene.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b69ebc1acd43ec464b82")
/******/ })();
/******/ 
/******/ }
);