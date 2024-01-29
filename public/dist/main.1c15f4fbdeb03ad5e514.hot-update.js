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

/***/ "./public/js/instructionwindow.js":
/*!****************************************!*\
  !*** ./public/js/instructionwindow.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showInstruction: () => (/* binding */ showInstruction)\n/* harmony export */ });\nasync function showInstruction(isHelpButtonTriggered = true, heading, texthtml) {\r\n\tconst response = await fetch('templates/instructiontemplate.html');\r\n\tconst templateHtml = await response.text();\r\n\tconst instructionContent = document.createElement('div');\r\n\tinstructionContent.innerHTML = templateHtml;\r\n\t//canvas.appendChild(instructionContent);\r\n\r\n\tconst instructionWindow = document.getElementById('instructionWindow');\r\n\tconst instructionHeader = document.getElementById('instructionHeader');\r\n\tconst closeButton = document.getElementById('closeButton');\r\n\tconst instructionText = document.getElementById('instructionText');\r\n\tconst doNotShowCheckbox = document.getElementById('doNotShowCheckbox');\r\n\tconst instructionOverlay = document.getElementById('instructionOverlay');\r\n\tinstructionOverlay.style.display = 'block';\r\n\tif (isHelpButtonTriggered){\r\n\t\tconst footer = document.getElementById('instructionFooter');\r\n\t\tfooter.style.display = 'none';\r\n\t}\r\n\r\n\tcloseButton.addEventListener('click', () => {\r\n\t\tcanvas.removeChild(instructionContent);\r\n\t\tinstructionOverlay.style.display = 'none';\r\n\t});\r\n\r\n\tinstructionOverlay.addEventListener('click', () => {\r\n\t\tcanvas.removeChild(instructionContent);\r\n\t\tinstructionOverlay.style.display = 'none';\r\n\t});\r\n\tdoNotShowCheckbox.addEventListener('change', () => {\r\n\t\tlocalStorage.setItem('classicInstructionDontShow', false);\r\n\t});\r\n\tinstructionHeader.textContent = heading;\r\n\tinstructionText.innerHTML = texthtml;\t\r\n}\n\n//# sourceURL=webpack://projectalpha/./public/js/instructionwindow.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("35573ec3c56f2e82adeb")
/******/ })();
/******/ 
/******/ }
);