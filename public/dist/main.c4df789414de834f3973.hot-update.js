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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mainmenuscene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainmenuscene.js */ \"./public/js/mainmenuscene.js\");\n/* harmony import */ var _classicmodescene_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classicmodescene.js */ \"./public/js/classicmodescene.js\");\n/* harmony import */ var _mainmenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainmenu.js */ \"./public/js/mainmenu.js\");\n\r\n\r\n\r\n\r\nconst menu = new _mainmenu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst mainMenu = new _mainmenuscene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst classicMode = new _classicmodescene_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\nconst levelConfig = {\r\n\tmainMenu: {\r\n\t\tinit: function(){\r\n\t\t\tmainMenu.init();\r\n\t\t},\r\n\t\texit: function(){\r\n\t\t\tmainMenu.exit();\r\n\t\t}\r\n\t},\r\n\tclassicMode: {\r\n\t\tinit: function(){\r\n\t\t\tclassicMode.init();\r\n\t\t},\r\n\t\texit: function(){\r\n\t\t\tclassicMode.exit();\r\n\t\t}\r\n\t},\r\n\tmenu: {\r\n\t\tinit: function(){\r\n\t\t\tmenu.init();\r\n\t\t},\r\n\t\texit: function(){\r\n\t\t\tmenu.exit();\r\n\t\t}\r\n\t}\r\n};\r\n\r\nclass LevelScene {\r\n\tconstructor(levelNumber) {\r\n\t\tthis.levelNumber = levelNumber;\r\n\t\tthis.levelInit = levelConfig[levelNumber].init;\r\n\t\tthis.levelExit = levelConfig[levelNumber].exit;\r\n\t}\r\n\tinit() {\r\n\t\tthis.levelInit();\r\n\t}\r\n\texit() {\r\n\t\tthis.levelExit();\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LevelScene);\n\n//# sourceURL=webpack://projectalpha/./public/js/levelscene.js?");

/***/ }),

/***/ "./public/js/mainmenu.js":
/*!*******************************!*\
  !*** ./public/js/mainmenu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scenemanager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenemanager.js */ \"./public/js/scenemanager.js\");\n\r\n\r\nconst canvas = document.getElementById('canvas');\r\n\r\nclass MainMenu {\r\n\tinit(){\r\n\r\n\t}\r\n\r\n\r\n\texit()\r\n\t{\r\n\r\n\t}\r\n}\n\n//# sourceURL=webpack://projectalpha/./public/js/mainmenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("232f0b71b9c4a7415b08")
/******/ })();
/******/ 
/******/ }
);