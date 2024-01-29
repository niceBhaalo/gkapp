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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _levelscene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levelscene.js */ \"./public/js/levelscene.js\");\n\r\n\r\nclass SceneManager {\r\n  static instance;\r\n\r\n  constructor() {\r\n    if (!SceneManager.instance) {\r\n      SceneManager.instance = this;\r\n      this.currentScene = null;\r\n    }\r\n\r\n    return SceneManager.instance;\r\n  }\r\n\r\n  static goToScene(scene) {\r\n    if (this.currentScene) {\r\n      this.currentScene.exit();\r\n    }\r\n    console.log(\"Scene: \", scene);\r\n    this.currentScene = new _levelscene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](scene);\r\n    this.currentScene.init();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneManager);\r\n\n\n//# sourceURL=webpack://projectalpha/./public/js/scenemanager.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2a396710d48183b66c84")
/******/ })();
/******/ 
/******/ }
);