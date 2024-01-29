/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateprojectalpha"]("main",{

/***/ "./public/js/classicscene.js":
/*!***********************************!*\
  !*** ./public/js/classicscene.js ***!
  \***********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Identifier 'moveTileToCorrect' has already been declared (652:9)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| }\\n| \\n> function moveTileToCorrect(tileElement, outlineElement){\\n| \\tconst distanceX = parseFloat(outlineElement.style.left) - parseFloat(tileElement.style.left);\\n| \\tconst distanceY = parseFloat(outlineElement.style.top) - parseFloat(tileElement.style.top);\");\n\n//# sourceURL=webpack://projectalpha/./public/js/classicscene.js?");

/***/ }),

/***/ "./public/js/namesymbols.js":
/*!**********************************!*\
  !*** ./public/js/namesymbols.js ***!
  \**********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (160:1)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\t\\t\\tcurrentTileNumber++;\\n| \\t}\\n> \\tcreateNewNote(firstLetter){\\n| \\t\\tthis.noteElement = document.createElement('div');\\n| \\t\\tthis.noteElement.classList.add('note');\");\n\n//# sourceURL=webpack://projectalpha/./public/js/namesymbols.js?");

/***/ }),

/***/ "./public/js/utils.js":
/*!****************************!*\
  !*** ./public/js/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isLoggedIn: () => (/* binding */ isLoggedIn),\n/* harmony export */   moveTileToCorrect: () => (/* binding */ moveTileToCorrect),\n/* harmony export */   removeAllChildren: () => (/* binding */ removeAllChildren)\n/* harmony export */ });\nfunction removeAllChildren(element) {\r\n    const children = Array.from(element.childNodes);\r\n    \r\n    for (const child of children) {\r\n        if (child.nodeType === Node.ELEMENT_NODE) {\r\n            // Remove element nodes\r\n            element.removeChild(child);\r\n        }\r\n    }\r\n}\r\n\r\nfunction isLoggedIn(){\r\n    return false;\r\n\r\n}\r\n\r\n\r\nfunction moveTileToCorrect(tileElement, outlineElement){\r\n\tconst distanceX = parseFloat(outlineElement.style.left) - parseFloat(tileElement.style.left);\r\n\tconst distanceY = parseFloat(outlineElement.style.top) - parseFloat(tileElement.style.top);\r\n\ttileElement.style.left = `${parseFloat(tileElement.style.left) + distanceX}vw`;\r\n\ttileElement.style.top = `${parseFloat(tileElement.style.top) + distanceY}vw`;\r\n\ttileElement.dataset.placed = 'true';\r\n\ttileElement.dataset.correctlyPlaced = 'true';\r\n\ttileElement.style.cursor = 'default';\r\n\ttileElement.classList.add('transition-class');\r\n\tsetTimeout(() => {\r\n\t\ttileElement.classList.remove('transition-class');\r\n\t\ttileElement.classList.add('correctlyPlaced');\r\n\t\ttileElement.classList.remove('incorrectlyPlaced');\r\n\t\ttileElement.display = 'block';\r\n\t}, 500); \r\n}\n\n//# sourceURL=webpack://projectalpha/./public/js/utils.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("09f5759c340707f646a0")
/******/ })();
/******/ 
/******/ }
);