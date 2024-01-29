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

/***/ "./public/js/signupbuttons.js":
/*!************************************!*\
  !*** ./public/js/signupbuttons.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   signUpButtons: () => (/* binding */ signUpButtons)\n/* harmony export */ });\nfunction signUpButtons(topContainer){\r\n    const signUpButton = document.createElement('button');\r\n    signUpButton.classList.add('gameModeButton');\r\n    signUpButton.textContent = 'Sign Up';\r\n    signUpButton.addEventListener('click', () => {\r\n        console.log('Sign Up clicked');\r\n    });\r\n\r\n    const logInButton = document.createElement('button');\r\n    logInButton.classList.add('gameModeButton');\r\n    logInButton.textContent = 'Log In';\r\n\r\n    logInButton.addEventListener('click', () => {\r\n        console.log('Log In clicked');\r\n    });\r\n    topContainer.appendChild(signUpButton);\r\n    topContainer.appendChild(logInButton);\r\n}\n\n//# sourceURL=webpack://projectalpha/./public/js/signupbuttons.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("aa477c5a0eb5742519cc")
/******/ })();
/******/ 
/******/ }
);