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

/***/ "./public/js/scenemanager.js":
/*!***********************************!*\
  !*** ./public/js/scenemanager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SceneManager {\r\n  static instance;\r\n\r\n  constructor() {\r\n    if (!SceneManager.instance) {\r\n      SceneManager.instance = this;\r\n      this.currentScene = null;\r\n    }\r\n    return SceneManager.instance;\r\n  }\r\n  goToScene(scene) {\r\n    if (this.currentScene) {\r\n      this.currentScene.exit();\r\n    }\r\n    this.currentScene = scene;\r\n    this.currentScene.init();\r\n    // You can add history manipulation here if needed\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneManager);\n\n//# sourceURL=webpack://projectalpha/./public/js/scenemanager.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1a73166a6d9b1ffc3867")
/******/ })();
/******/ 
/******/ }
);