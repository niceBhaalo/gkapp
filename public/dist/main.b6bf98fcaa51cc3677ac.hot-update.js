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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scenemanager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenemanager.js */ \"./public/js/scenemanager.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./public/js/utils.js\");\n/* harmony import */ var _fetchdatafromstorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchdatafromstorage.js */ \"./public/js/fetchdatafromstorage.js\");\n/* harmony import */ var _instructionwindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instructionwindow.js */ \"./public/js/instructionwindow.js\");\n/* harmony import */ var _achievementwindow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./achievementwindow.js */ \"./public/js/achievementwindow.js\");\n/* harmony import */ var _achievementprogress_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./achievementprogress.js */ \"./public/js/achievementprogress.js\");\n\r\n\r\nconst canvas = document.getElementById('canvas');\r\n\r\n\r\n\r\n\r\n\r\nlet tilesData;\r\nlet elementNames;\r\n\r\nconst levelid = 10;\r\nconst instructionHeading = 'Identify the Symbol';\r\nconst instructionText = `\r\n\t\t<p><em>Type the name of the element for the symbol to place it.</em></p>\r\n\t\t<p>You can use the hint button to show parts of the name until you figure the name out/</p>`;\r\n\r\nconst achievements = (0,_fetchdatafromstorage_js__WEBPACK_IMPORTED_MODULE_2__.getAchievementsForLevel)(levelid);\r\n\r\nclass NameSymbols {\r\n\tconstructor(){\r\n\t\tthis.handleKeyDown = this.handleKeyDown.bind(this);\r\n\t\tthis.textBoxOpen = false;\r\n\t}\r\n\tasync init(){\r\n\t\t({ tilesData, elementNames } = (0,_fetchdatafromstorage_js__WEBPACK_IMPORTED_MODULE_2__.getTileData)());\r\n\t\tif (!localStorage.getItem('classicInstructionDontShow')){\r\n\t\t\t(0,_instructionwindow_js__WEBPACK_IMPORTED_MODULE_3__.showInstruction)(false, instructionHeading, instructionText);\r\n\t\t}\r\n\t\tconst responseTemplate = await fetch('templates/classictemplate.html');\r\n\t\tconst templateHtml = await responseTemplate.text();\r\n\t\tconst templateContainer = document.createElement('div');\r\n\t\ttemplateContainer.innerHTML = templateHtml;\r\n\t\tcanvas.appendChild(templateContainer);\r\n\r\n\t\tthis.buttonContainer = document.getElementById('buttonContainer');\r\n\t\tthis.restartButton = document.getElementById('restartButton');\r\n\t\tthis.exitButton = document.getElementById('exitButton');\r\n\t\tthis.timerElement = document.getElementById('timer');\r\n\t\tthis.scoreElement = document.getElementById('score');\r\n\t\tthis.shuffleButton = document.getElementById('shuffleButton');\r\n\t\tthis.shuffleButton.style.display = 'none';\r\n\t\t\t\tthis.shuffleButton.style.visibility = 'hidden';\r\n\r\n\t\tthis.gridContainer = document.getElementById('gridContainer');\r\n\t\tthis.messageContainer = document.getElementById('messageContainer');\r\n\t\tthis.instructionContainer = document.getElementById('instructionContainer');\r\n\t\tthis.achievementButton = document.getElementById('achievementButton');\r\n\r\n\t\tconst helpButton = document.getElementById('helpButton');\r\n\t\tthis.tileContainer = document.getElementById('tileContainer');\r\n\r\n\t\thelpButton.addEventListener('click', function() {\r\n\t\t\t(0,_instructionwindow_js__WEBPACK_IMPORTED_MODULE_3__.showInstruction)(true, instructionHeading, instructionText);\r\n\t\t});\t\r\n\t\tachievementButton.addEventListener('click', function(event) {\r\n\t\t\t(0,_achievementwindow_js__WEBPACK_IMPORTED_MODULE_4__.showAchievements)(levelid, event.clientX, event.clientY);\r\n\t\t});\r\n\r\n\t\tthis.handleKeyDown = this.handleKeyDown.bind(this); // Bind the method to the class instance\r\n\t\tthis.textBoxOpen = false;\r\n\t\t\t\r\n\t\tthis.scoreElement.dataset.total = 118;\r\n\t\tthis.scoreElement.dataset.current = 0;\r\n\t\tthis.scoreElement.textContent = this.scoreElement.dataset.current + '/' + this.scoreElement.dataset.total;\r\n\r\n\t\tthis.createTilesOutlines();\r\n\r\n\t\tthis.timerInterval;\r\n\t\tthis.milliseconds = 0;\r\n\t\tthis.seconds = 0;\r\n\t\tthis.minutes = 0;\r\n\r\n\t\tthis.startTimer();\r\n\t\t\r\n\t\tthis.restartButton.addEventListener('click', () => {\r\n\t\t\twindow.removeEventListener('keydown', this.handleKeyDown);\t\r\n\t\t\t_scenemanager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].goToScene('namesymbols');\r\n\t\t});\r\n\t\tthis.exitButton.addEventListener('click', () => {\r\n\t\t\twindow.removeEventListener('keydown', this.handleKeyDown);\r\n\t\t\t_scenemanager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].goToScene('menu');\r\n\t\t});\r\n\t\twindow.addEventListener('keydown', this.handleKeyDown);\t\t\r\n\r\n\r\n\t}\r\n\texit(){\r\n\t\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(canvas);\r\n\t\tclearInterval(this.timerInterval);\r\n\t\twindow.removeEventListener('keydown', this.handleKeyDown);\r\n\t\tthis.textBoxOpen = false;\r\n\t}\r\n\thandleKeyDown(event) {\r\n\t\tif (this.textBoxOpen === false) {\r\n\t\t\tconst alphabetKeys = /^[a-zA-Z]$/;\r\n\t\t\tif (alphabetKeys.test(event.key)) {\r\n\t\t\t\tthis.textBoxOpen = true;\r\n\t\t\t\tthis.createNewNote(event.key);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\tcreateTilesOutlines(){\r\n\t\tconst windowRatio = 0.7;\r\n\t\tconst screenRatio = window.innerWidth / window.innerHeight;\r\n\t\tconst screenWidth = window.innerWidth * windowRatio;\r\n\t\tconst leftPadding = window.innerWidth * (1-windowRatio)/2;\r\n\t\tconsole.log(window.innerWidth);\r\n\t\tconst topPadding = window.innerWidth * 0.01;\r\n\t\tconst tileWidth = screenWidth / 18;\r\n\t\tconst columnElementsSet = new Set([1,4,21,22,23,24,25,26,27,28,29,30,5,6,7,8,9,2,58,59,60,61,62,63,64,65,66,67,68,69,70,71]);\r\n\t\tconst rowElementsSet = new Set([1,3,11,19,37,55,87,22,40,72,104,58,90]);\r\n\t\tconst columnElementsList = [1,4,21,22,23,24,25,26,27,28,29,30,5,6,7,8,9,2,58,59,60,61,62,63,64,65,66,67,68,69,70,71];\r\n\t\tconst rowElementsList = [1,3,11,19,37,55,87,58,90,22,40,72,104];\r\n\t\tconst rowCorrespondence = {};\r\n\t\tconst columnCorrespondence = {};\r\n\t\tfor (let i=0; i < rowElementsList.length; i++){\r\n\t\t\trowCorrespondence[rowElementsList[i]] = i + 1;\r\n\t\t}\r\n\t\tfor (let i=0; i < columnElementsList.length; i++){\r\n\t\t\tcolumnCorrespondence[columnElementsList[i]] = i + 1;\r\n\t\t}\r\n\t\tlet currentTileNumber = 1;\r\n\t\ttilesData.forEach(elementData => {\r\n\t\t\tlet hDisplace = 0;\r\n\t\t\tlet vDisplace = 0;\r\n\t\t\tconst tileOutline = document.createElement('div');\r\n\t\t\ttileOutline.classList.add('tileOutline');\r\n\t\t\ttileOutline.style.position = 'absolute';\r\n\t\t\ttileOutline.style.width = (tileWidth - 8) / window.innerWidth  * 100 + 'vw';\r\n\t\t\ttileOutline.style.height = tileOutline.style.width;\r\n\t\t\tif (elementData.hDisplace === 'TRUE')\r\n\t\t\t{\r\n\t\t\t\thDisplace = 10;\r\n\t\t\t}\r\n\t\t\tif (elementData.vDisplace === 'TRUE')\r\n\t\t\t{\r\n\t\t\t\tvDisplace = 10;\r\n\t\t\t}\r\n\t\t\ttileOutline.style.left = (hDisplace + leftPadding - tileWidth + elementData.elementColumn*(tileWidth)) / window.innerWidth  * 100 + 'vw';\r\n\t\t\ttileOutline.style.top = (vDisplace + topPadding - tileWidth  + elementData.elementRow * (tileWidth)) / window.innerWidth  * 100 + 'vh';\r\n\t\t\ttileOutline.id = elementData.an + \" outline\";\r\n\t\t\tthis.gridContainer.appendChild(tileOutline);\r\n\t\t\tcurrentTileNumber++;\r\n\t\t});\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NameSymbols);\n\n//# sourceURL=webpack://projectalpha/./public/js/namesymbols.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ddf0ca0339bd72acd5bb")
/******/ })();
/******/ 
/******/ }
);