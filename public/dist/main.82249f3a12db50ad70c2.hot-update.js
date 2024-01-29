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

/***/ "./public/js/script.js":
/*!*****************************!*\
  !*** ./public/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scenemanager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenemanager.js */ \"./public/js/scenemanager.js\");\n/* harmony import */ var _fetchdata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchdata.js */ \"./public/js/fetchdata.js\");\n/* harmony import */ var _sounds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sounds.js */ \"./public/js/sounds.js\");\n/* harmony import */ var _sounds_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sounds_js__WEBPACK_IMPORTED_MODULE_2__);\n﻿\r\n\r\n\r\nasync function initializeApp() {\r\n    await (0,_fetchdata_js__WEBPACK_IMPORTED_MODULE_1__.metaData)();\r\n    await (0,_fetchdata_js__WEBPACK_IMPORTED_MODULE_1__.loadIcons)();\r\n    new _scenemanager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    _scenemanager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].goToScene('menu');\r\n}\r\n\r\nwindow.addEventListener('load', initializeApp);\r\n\n\n//# sourceURL=webpack://projectalpha/./public/js/script.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("385a20d4fff5ec178bf7")
/******/ })();
/******/ 
/******/ }
);