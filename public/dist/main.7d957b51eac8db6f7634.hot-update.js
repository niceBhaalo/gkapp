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

/***/ "./public/js/namesymbols.js":
/*!**********************************!*\
  !*** ./public/js/namesymbols.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scenemanager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenemanager.js */ \"./public/js/scenemanager.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./public/js/utils.js\");\n/* harmony import */ var _fetchdatafromstorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchdatafromstorage.js */ \"./public/js/fetchdatafromstorage.js\");\n/* harmony import */ var _instructionwindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instructionwindow.js */ \"./public/js/instructionwindow.js\");\n/* harmony import */ var _achievementwindow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./achievementwindow.js */ \"./public/js/achievementwindow.js\");\n/* harmony import */ var _achievementprogress_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./achievementprogress.js */ \"./public/js/achievementprogress.js\");\n\r\n\r\nconst canvas = document.getElementById('canvas');\r\n\r\n\r\n\r\n\r\n\r\nlet tilesData;\r\nlet elementNames;\r\n\r\nconst levelid = 10;\r\nconst instructionHeading = 'Identify the Symbol';\r\nconst instructionText = `\r\n\t\t<p><em>Type the name of the element for the symbol to place it.</em></p>\r\n\t\t<p>You can use the hint button to show parts of the name until you figure the name out/</p>`;\r\n\r\nconst achievements = (0,_fetchdatafromstorage_js__WEBPACK_IMPORTED_MODULE_2__.getAchievementsForLevel)(levelid);\r\n\r\nclass IdentifySymbol {\r\n\tconstructor(){\r\n\r\n\t}\r\n\tasync init(){\r\n\t\t({ tilesData, elementNames } = (0,_fetchdatafromstorage_js__WEBPACK_IMPORTED_MODULE_2__.getTileData)());\r\n\t\tif (!localStorage.getItem('classicInstructionDontShow')){\r\n\t\t\t(0,_instructionwindow_js__WEBPACK_IMPORTED_MODULE_3__.showInstruction)(false, instructionHeading, instructionText);\r\n\t\t}\r\n\t\tconst responseTemplate = await fetch('templates/classictemplate.html');\r\n\t\tconst templateHtml = await responseTemplate.text();\r\n\t\tconst templateContainer = document.createElement('div');\r\n\t\ttemplateContainer.innerHTML = templateHtml;\r\n\t\tcanvas.appendChild(templateContainer);\r\n\r\n\t\tthis.buttonContainer = document.getElementById('buttonContainer');\r\n\t\tthis.restartButton = document.getElementById('restartButton');\r\n\t\tthis.exitButton = document.getElementById('exitButton');\r\n\t\tthis.timerElement = document.getElementById('timer');\r\n\t\tthis.scoreElement = document.getElementById('score');\r\n\t\tthis.gridContainer = document.getElementById('gridContainer');\r\n\t\tthis.messageContainer = document.getElementById('messageContainer');\r\n\t\tthis.instructionContainer = document.getElementById('instructionContainer');\r\n\t\tthis.achievementButton = document.getElementById('achievementButton');\r\n\r\n\t\tconst helpButton = document.getElementById('helpButton');\r\n\t\tthis.tileContainer = document.getElementById('tileContainer');\r\n\r\n\t\thelpButton.addEventListener('click', function() {\r\n\t\t\t(0,_instructionwindow_js__WEBPACK_IMPORTED_MODULE_3__.showInstruction)(true, instructionHeading, instructionText);\r\n\t\t});\t\r\n\t\tachievementButton.addEventListener('click', function(event) {\r\n\t\t\t(0,_achievementwindow_js__WEBPACK_IMPORTED_MODULE_4__.showAchievements)(levelid, event.clientX, event.clientY);\r\n\t\t});\r\n\r\n\t\tthis.handleKeyDown = this.handleKeyDown.bind(this); // Bind the method to the class instance\r\n\t\tthis.textBoxOpen = false;\r\n\t\t\t\r\n\t\tthis.scoreElement.dataset.total = 118;\r\n\t\tthis.scoreElement.dataset.current = 0;\r\n\t\tthis.scoreElement.textContent = this.scoreElement.dataset.current + '/' + this.scoreElement.dataset.total;\r\n\r\n\t\tthis.createTilesOutlines();\r\n\r\n\t\tthis.timerInterval;\r\n\t\tthis.milliseconds = 0;\r\n\t\tthis.seconds = 0;\r\n\t\tthis.minutes = 0;\r\n\r\n\t\tthis.startTimer();\r\n\t\t\r\n\t\tthis.restartButton.addEventListener('click', () => {\r\n\t\t\twindow.removeEventListener('keydown', this.handleKeyDown);\t\r\n\t\t\t_scenemanager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].goToScene('namesymbols');\r\n\t\t});\r\n\t\tthis.exitButton.addEventListener('click', () => {\r\n\t\t\twindow.removeEventListener('keydown', this.handleKeyDown);\r\n\t\t\t_scenemanager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].goToScene('menu');\r\n\t\t});\r\n\r\n\t}\r\n\texit(){\r\n\r\n\t}\r\n\r\n}\n\n//# sourceURL=webpack://projectalpha/./public/js/namesymbols.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b2644d3d3687a92d60a7")
/******/ })();
/******/ 
/******/ }
);