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

/***/ "./public/js/mainmenuscene.js":
/*!************************************!*\
  !*** ./public/js/mainmenuscene.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./public/js/utils.js\");\n/* harmony import */ var _scenemanager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenemanager.js */ \"./public/js/scenemanager.js\");\n\r\n\r\n\r\nconst canvas = document.getElementById('canvas');\r\n\r\nclass MainMenuScene{\r\n\tconstructor(){\r\n\t\tthis.noteElement = null;\r\n\t}\r\n\tinit(){\r\n\t\tthis.buttonContainer = document.createElement('div');\r\n\t\tthis.buttonContainer.classList.add('buttonContainer');\r\n\t\tcanvas.appendChild(this.buttonContainer);\r\n\r\n\t\tthis.startButton = document.createElement('button');\r\n\t\tthis.startButton.classList.add('startButton');\r\n\t\tthis.startButton.textContent = 'Start';\r\n\t\t\r\n\t\tthis.mode1Button = document.createElement('button');\r\n\t\tthis.mode1Button.classList.add('modeButton');\r\n\t\tthis.mode1Button.style.left = 40 + 'vw';\r\n\t\tthis.mode1Button.textContent = 'Classic Mode';\r\n\r\n\t\tthis.mode2Button = document.createElement('button');\r\n\t\tthis.mode2Button.classList.add('modeButton');\r\n\t\tthis.mode2Button.style.left = 60 + 'vw';\r\n\t\tthis.mode2Button.textContent = 'Mode 2'\r\n\t\tthis.mode2Button.style.outline = '2px solid black';\r\n\r\n\t\tthis.loginButton = document.createElement('button');\r\n\t\tthis.loginButton.classList.add('modeButton');\r\n\t\tthis.loginButton.style.left = 1 + 'vw';\r\n\t\tthis.loginButton.style.top = 1 + 'vw';\r\n\t\tthis.loginButton.textContent = 'Log In';\r\n\t\t\r\n\t\tthis.loginButton.addEventListener('click', signInCall);\r\n\t\t\r\n\t\tfunction signInCall (){\r\n\t\t\twindow.location.href = '/auth/google';\r\n\t\t}\r\n \t\tlet targetMode = 'classicMode';\r\n\t\tthis.buttonContainer.appendChild(this.startButton);\r\n\t\tthis.buttonContainer.appendChild(this.mode1Button);\r\n\t\tthis.buttonContainer.appendChild(this.mode2Button);\r\n\t\tthis.buttonContainer.appendChild(this.loginButton);\r\n\t\t\r\n\t\tthis.startButton.addEventListener('click', () => {\r\n\t\t\t_scenemanager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].goToScene(targetMode);\r\n\t\t});\r\n\t\tthis.mode1Button.addEventListener('click', () => {\r\n\t\t\tthis.mode1Button.style.outline = '2px solid white';\r\n\t\t\tthis.mode2Button.style.outline = '2px solid black';\r\n\t\t\ttargetMode = 'classicMode';\r\n\t\t});\r\n\t\tthis.mode2Button.addEventListener('click', () => {\r\n\t\t\tthis.mode1Button.style.outline = '2px solid black';\r\n\t\t\tthis.mode2Button.style.outline = '2px solid white';\r\n\t\t\ttargetMode = 'classicMode';\r\n\t\t});\r\n\t}\r\n\texit(){\r\n\t\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(canvas);\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainMenuScene);\n\n//# sourceURL=webpack://projectalpha/./public/js/mainmenuscene.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("76aa0335d0cf8f481f7a")
/******/ })();
/******/ 
/******/ }
);