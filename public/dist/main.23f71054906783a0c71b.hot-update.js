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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './classicmodescene.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _mainmenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainmenu.js */ \"./public/js/mainmenu.js\");\n\r\n\r\n\r\nconst menu = new _mainmenu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst practice = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './classicmodescene.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\n\r\nconst levelConfig = {\r\n\tpractice: {\r\n\t\tinit: function(){\r\n\t\t\tpractice.init();\r\n\t\t},\r\n\t\texit: function(){\r\n\t\t\tpractice.exit();\r\n\t\t}\r\n\t},\r\n\tmenu: {\r\n\t\tinit: function(){\r\n\t\t\tmenu.init();\r\n\t\t},\r\n\t\texit: function(){\r\n\t\t\tmenu.exit();\r\n\t\t}\r\n\t}\r\n};\r\n\r\nclass LevelScene {\r\n\tconstructor(levelNumber) {\r\n\t\tthis.levelNumber = levelNumber;\r\n\t\tthis.levelInit = levelConfig[levelNumber].init;\r\n\t\tthis.levelExit = levelConfig[levelNumber].exit;\r\n\t}\r\n\tinit() {\r\n\t\tthis.levelInit();\r\n\t}\r\n\texit() {\r\n\t\tthis.levelExit();\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LevelScene);\n\n//# sourceURL=webpack://projectalpha/./public/js/levelscene.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("410f7cda3864bf2cb9ac")
/******/ })();
/******/ 
/******/ }
);