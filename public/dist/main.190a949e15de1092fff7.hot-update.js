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

/***/ "./public/js/achievementwindow.js":
/*!****************************************!*\
  !*** ./public/js/achievementwindow.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showAchievements: () => (/* binding */ showAchievements)\n/* harmony export */ });\n/* harmony import */ var _fetchdatafromstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchdatafromstorage.js */ \"./public/js/fetchdatafromstorage.js\");\n\r\n\r\nasync function showAchievements (levelid){\r\n\tconst response = await fetch('templates/achievementwindowtemplate.html');\r\n\tconst templateHtml = await response.text();\r\n\tconst achievementContent = document.createElement('div');\r\n\tachievementContent.innerHTML = templateHtml;\r\n\tconst canvas = document.getElementById('canvas');\r\n\tcanvas.appendChild(achievementContent);\r\n\tconsole.log(\"Huh\");\r\n\tconst achievements = (0,_fetchdatafromstorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(levelid);\r\n\r\n\tconst iconsContainer = document.getElementById('achievementIconsContainer');\r\n\tachievements.forEach((achievement) => {\r\n        const iconElement = document.createElement('img');\r\n        const imageSource = `../images/achievementicons/${achievement.internal_name}.png`;\r\n    \r\n        iconElement.src = imageSource;\r\n        iconElement.alt = achievement.internal_name; \r\n\r\n        iconsContainer.appendChild(iconElement);\r\n\r\n    });\r\n\r\n}\n\n//# sourceURL=webpack://projectalpha/./public/js/achievementwindow.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("055b2cfee7c15e650e2f")
/******/ })();
/******/ 
/******/ }
);