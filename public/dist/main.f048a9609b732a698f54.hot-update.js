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

/***/ "./public/js/settingswindow.js":
/*!*************************************!*\
  !*** ./public/js/settingswindow.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showSettings: () => (/* binding */ showSettings)\n/* harmony export */ });\n/* harmony import */ var _fetchdatafromstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchdatafromstorage.js */ \"./public/js/fetchdatafromstorage.js\");\n\r\n\r\n\r\nasync function showSettings() {\r\n\tconst response = await fetch('templates/settingstemplate.html');\r\n\tconst templateHtml = await response.text();\r\n\tconst settingsContent = document.createElement('div');\r\n\tsettingsContent.innerHTML = templateHtml;\r\n\tconst canvas = document.getElementById('canvas');\r\n\tcanvas.appendChild(settingsContent);\r\n\r\n\tconst settingsWindow = document.getElementById('settingsWindow');\r\n\tconst closeButton = document.getElementById('closeButton');\r\n\tconst settingsOverlay = document.getElementById('settingsOverlay');\r\n\tconst resetButton = document.getElementById('resetButton');\r\n\r\n\tsettingsOverlay.style.display = 'block';\r\n\r\n\tcloseButton.addEventListener('click', () => {\r\n\t\tcanvas.removeChild(settingsContent);\r\n\t\tsettingsOverlay.style.display = 'none';\r\n\t});\r\n\r\n\tsettingsOverlay.addEventListener('click', () => {\r\n\t\tcanvas.removeChild(settingsContent);\r\n\t\tsettingsOverlay.style.display = 'none';\r\n\t});\r\n\tresetButton.addEventListener('click', () => {\r\n\t\tconst achievementData = (0,_fetchdatafromstorage_js__WEBPACK_IMPORTED_MODULE_0__.getAchievementData)();\r\n\t\tachievementData.forEach(achievement => {\r\n\t\t\tresetAchievement(achievement.internal_name);\r\n\t\t}); \r\n\t\tconsole.log(achievementData);\r\n\t\t});\r\n}\r\nfunction resetAchievement(internal_name){\r\n\tlocalStorage.setItem(internal_name, '0');\r\n}\n\n//# sourceURL=webpack://projectalpha/./public/js/settingswindow.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fc86d4b610a7bfb9c71b")
/******/ })();
/******/ 
/******/ }
);