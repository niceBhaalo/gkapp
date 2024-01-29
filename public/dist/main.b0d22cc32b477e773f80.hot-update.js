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

/***/ "./public/js/dragelement.js":
/*!**********************************!*\
  !*** ./public/js/dragelement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scenemanager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenemanager.js */ \"./public/js/scenemanager.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./public/js/utils.js\");\n/* harmony import */ var _fetchdatafromstorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchdatafromstorage.js */ \"./public/js/fetchdatafromstorage.js\");\n/* harmony import */ var _instructionwindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instructionwindow.js */ \"./public/js/instructionwindow.js\");\n/* harmony import */ var _achievementwindow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./achievementwindow.js */ \"./public/js/achievementwindow.js\");\n/* harmony import */ var _achievementprogress_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./achievementprogress.js */ \"./public/js/achievementprogress.js\");\n\r\n\r\nconst canvas = document.getElementById('canvas');\r\n\r\n\r\n\r\n\r\n\r\nlet tilesData;\r\nlet elementNames;\r\nlet checkState = true;\r\n\r\nconst levelid = 12;\r\nconst instructionHeading = 'Fill the Periodic Table';\r\nconst instructionText = `\r\n\t\t<p><em>Drag the given tiles to their proper spot to fill the periodic table</em></p>\r\n\t\t<p>If stuck, discard the given tiles to refresh the available stock. You can also look at the accompanying information for each element to figure out where it belongs</p>`;\r\n\r\nconst achievements = (0,_fetchdatafromstorage_js__WEBPACK_IMPORTED_MODULE_2__.getAchievementsForLevel)(levelid);\r\nclass PlaceElements{\r\n\tasync init(){\r\n\t\t({ tilesData, elementNames } = (0,_fetchdatafromstorage_js__WEBPACK_IMPORTED_MODULE_2__.getTileData)());\r\n\t    if (!localStorage.getItem('showInstruction'+ levelid)){\r\n\t\t\t(0,_instructionwindow_js__WEBPACK_IMPORTED_MODULE_3__.showInstruction)(false, instructionHeading, instructionText, levelid);\r\n\t\t}\r\n\t    const responseTemplate = await fetch('templates/classictemplate.html');\r\n\t\tconst templateHtml = await responseTemplate.text();\r\n\t\tconst templateContainer = document.createElement('div');\r\n\t\ttemplateContainer.innerHTML = templateHtml;\r\n\t\tcanvas.appendChild(templateContainer);\r\n\r\n\t\tthis.buttonContainer = document.getElementById('buttonContainer');\r\n\t\tthis.restartButton = document.getElementById('restartButton');\r\n\t\tthis.shuffleButton = document.getElementById('shuffleButton');\r\n\t\tthis.exitButton = document.getElementById('exitButton');\r\n\t\tthis.timerElement = document.getElementById('timer');\r\n\t\tthis.scoreElement = document.getElementById('score');\r\n\t\tthis.gridContainer = document.getElementById('gridContainer');\r\n\t\tthis.togglesContainer = document.getElementById('toggleContainer');\r\n\t\tthis.messageContainer = document.getElementById('messageContainer');\r\n\t\tthis.instructionContainer = document.getElementById('instructionContainer');\r\n\t\tthis.achievementButton = document.getElementById('achievementButton');\r\n\t\tthis.tileBox = document.getElementById('tileBox');\r\n\t\tconst helpButton = document.getElementById('helpButton');\r\n\t\tthis.tileContainer = document.getElementById('tileContainer');\r\n\r\n\t\thelpButton.addEventListener('click', function() {\r\n\t\t\t(0,_instructionwindow_js__WEBPACK_IMPORTED_MODULE_3__.showInstruction)(true, instructionHeading, instructionText);\r\n\t\t});\t\r\n\t\tachievementButton.addEventListener('click', function(event) {\r\n\t\t\t(0,_achievementwindow_js__WEBPACK_IMPORTED_MODULE_4__.showAchievements)(levelid, event.clientX, event.clientY);\r\n\t\t});\r\n\t\t\t\r\n\t\tthis.scoreElement.dataset.total = 118;\r\n\t\tthis.scoreElement.dataset.current = 0;\r\n\t\tthis.scoreElement.textContent = this.scoreElement.dataset.current + '/' + this.scoreElement.dataset.total;\r\n\r\n\t\tthis.snapPoints = {};\r\n\t\t\r\n\t\tthis.createTilesOutlines();\r\n\t\tthis.timerInterval;\r\n\t\tthis.milliseconds = 0;\r\n\t\tthis.seconds = 0;\r\n\t\tthis.minutes = 0;\r\n\t\tthis.createQuestion();\r\n\t\tthis.startTimer();\r\n\t\t\r\n\t\tthis.restartButton.addEventListener('click', () => {\r\n\t\t\twindow.removeEventListener('keydown', this.handleKeyDown);\t\r\n\t\t\t_scenemanager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].goToScene('placeelements');\r\n\t\t});\r\n\t\tthis.exitButton.addEventListener('click', () => {\r\n\t\t\twindow.removeEventListener('keydown', this.handleKeyDown);\r\n\t\t\t_scenemanager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].goToScene('menu');\r\n\t\t});\r\n\t\t\r\n\t\tthis.shuffleButton.addEventListener('click', () => {\r\n\t\t\tthis.discardTiles();\r\n\t\t});\r\n\t\twindow.addEventListener('keydown', this.handleKeyDown);\t\t\r\n\t}\r\n\texit(){\r\n\t\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(canvas);\r\n\t\tclearInterval(this.timerInterval);\r\n\t}\r\n\tdiscardTiles(){\r\n\t\tthis.tilesArray = Array.from(this.tileContainer.children);\r\n\t\t\t\tconsole.log(this.tilesArray.length);\r\n\r\n\t\tthis.tileBoxChildren.forEach((slot) => {\r\n\t\t\tslot.dataset.filled = 'false';\r\n\t\t});\r\n\t\tthis.tilesArray = Array.from(this.tileContainer.children).filter(tile => {\r\n\t\t\treturn !tile.classList.contains('correctlyPlaced');\r\n\t\t});\r\n\t\tconsole.log(this.tilesArray.length);\r\n\t\tthis.tilesArray.forEach(tile => {\r\n\t\t\ttile.classList.add('tileFadeOut');\r\n\t\t});\r\n\t\t\t\tconsole.log(this.tilesArray.length);\r\n\r\n\t\tsetTimeout(() => {\r\n\t\t\tthis.tilesArray.forEach(tile => {\r\n\t\t\t\tconsole.log(\"Huh\");\r\n\t\t\t\ttile.classList.remove('tileFadeOut');\r\n\t\t\t\ttile.style.visibility = 'hidden';\r\n\t\t\t});\r\n\t\t}, 1000); // 1000 milliseconds (1 second) delay\r\n\t\t\t\tconsole.log(this.tilesArray.length);\r\n\r\n\t\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.shuffleArray)(this.tilesArray);\r\n\t\tthis.displayTiles();\r\n\t\t\t\t\t\tconsole.log(this.tilesArray.length);\r\n\r\n\t}\r\n\tcreateQuestion(){\r\n\t\tconst questionContainer = document.createElement('div');\r\n\t\tquestionContainer.classList.add('questionContainer');\r\n\t\tquestionContainer.textContent = 'Drag the tiles to their correct place: ';\r\n\t\tquestionContainer.style.fontSize = this.refSize / 2 + 'vw'; \r\n\r\n\t\tthis.tileBox.style.visibility = 'visible';\r\n\t\tthis.tileBoxChildren = Array.from(this.tileBox.children);\r\n\r\n\t\tthis.tileBoxChildren.forEach((slot) => {\r\n\t\t\tslot.style.height = this.refSize + 'vw';\r\n\t\t\tslot.style.width = this.refSize + 'vw';\r\n\t\t});\r\n\t\tcanvas.append(questionContainer);\r\n\t\tthis.tilesArray = Array.from(this.tileContainer.children);\r\n\t\tthis.displayTiles();\r\n\t}\r\n\tdisplayTiles(){\r\n\t\tthis.tileBoxChildren.forEach((slot) => {\r\n\t\t\tif (slot.dataset.filled !== 'true'){\r\n\t\t\t\tconsole.log(\"Running Here\");\r\n\t\t\t\tconst tile = this.tilesArray.shift();\r\n\t\t\t\tmoveTileToSlot(tile, slot);\r\n\t\t\t\tslot.dataset.filled = 'true';\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tcreateTilesOutlines(){\r\n\t\tconst windowRatio = 0.7;\r\n\t\tconst screenRatio = window.innerWidth / window.innerHeight;\r\n\t\tconst screenWidth = window.innerWidth * windowRatio;\r\n\t\tconst leftPadding = window.innerWidth * (1-windowRatio)/2;\r\n\t\tconst topPadding = window.innerWidth * 0.01;\r\n\t\tconst tileWidth = screenWidth / 18;\r\n\t\tconst columnElementsSet = new Set([1,4,21,22,23,24,25,26,27,28,29,30,5,6,7,8,9,2,58,59,60,61,62,63,64,65,66,67,68,69,70,71]);\r\n\t\tconst rowElementsSet = new Set([1,3,11,19,37,55,87,22,40,72,104,58,90]);\r\n\t\tconst columnElementsList = [1,4,21,22,23,24,25,26,27,28,29,30,5,6,7,8,9,2,58,59,60,61,62,63,64,65,66,67,68,69,70,71];\r\n\t\tconst rowElementsList = [1,3,11,19,37,55,87,58,90,22,40,72,104];\r\n\t\tconst rowCorrespondence = {};\r\n\t\tconst columnCorrespondence = {};\r\n\t\tthis.refSize = (tileWidth - 8) / window.innerWidth  * 100;\r\n\r\n\t\tfor (let i=0; i < rowElementsList.length; i++){\r\n\t\t\trowCorrespondence[rowElementsList[i]] = i + 1;\r\n\t\t}\r\n\t\tfor (let i=0; i < columnElementsList.length; i++){\r\n\t\t\tcolumnCorrespondence[columnElementsList[i]] = i + 1;\r\n\t\t}\r\n\t\tconst vw_value = window.innerHeight * 90 / window.innerWidth;\r\n\t\tconst topGap = vw_value - ((10 + topPadding - tileWidth + 9 * tileWidth) / window.innerWidth * 100);\r\n\t\tlet currentTileNumber = 1;\r\n\t\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.shuffleArray)(tilesData);\r\n\t\ttilesData.forEach(elementData => {\r\n\t\t\tlet hDisplace = 0;\r\n\t\t\tlet vDisplace = 0;\r\n\t\t\tconst tileOutline = document.createElement('div');\r\n\t\t\ttileOutline.classList.add('tileOutline');\r\n\t\t\ttileOutline.style.position = 'absolute';\r\n\t\t\ttileOutline.style.width = (tileWidth - 8) / window.innerWidth  * 100 + 'vw';\r\n\t\t\ttileOutline.style.height = tileOutline.style.width;\r\n\t\t\tif (elementData.hDisplace === 'TRUE')\r\n\t\t\t{\r\n\t\t\t\thDisplace = 10;\r\n\t\t\t}\r\n\t\t\tif (elementData.vDisplace === 'TRUE')\r\n\t\t\t{\r\n\t\t\t\tvDisplace = 10;\r\n\t\t\t}\r\n\t\t\ttileOutline.style.left = (hDisplace + leftPadding - tileWidth + elementData.elementColumn*(tileWidth)) / window.innerWidth  * 100 + 'vw';\r\n\t\t\ttileOutline.style.top = (vDisplace + topPadding - tileWidth  + elementData.elementRow * (tileWidth)) / window.innerWidth  * 100 + topGap + 'vw';\r\n\t\t\ttileOutline.id = elementData.an + \" outline\";\r\n\t\t\tthis.gridContainer.appendChild(tileOutline);\r\n\t\t\tconst snapPoint = {x: tileOutline.style.left, y: tileOutline.style.top, occupied: false, occupiedBy: 0};\r\n\t\t\tthis.snapPoints[elementData.an] = snapPoint;\r\n\t\t\tconst tileElement = document.createElement('div');\r\n\t\t\ttileElement.classList.add('tile');\r\n\t\t\ttileElement.style.visibility = 'hidden';\r\n\t\t\ttileElement.style.position = 'absolute';\r\n\t\t\ttileElement.style.width = (tileWidth - 8) / window.innerWidth  * 100 + 'vw';\r\n\t\t\ttileElement.style.height = tileElement.style.width;\r\n\t\t\ttileElement.style.backgroundColor = elementData.color;\r\n\t\t\ttileElement.textContent = elementData.symbol;\r\n\t\t\ttileElement.dataset.symbol = elementData.symbol;\r\n\t\t\ttileElement.dataset.elementID = elementData.an;\r\n\t\t\ttileElement.dataset.currentPos = 0;\r\n\t\t\ttileElement.dataset.correctlyPlaced = 'false';\r\n\t\t\ttileElement.dataset.placed = 'false';\r\n\t\t\ttileElement.id = elementData.an;\r\n\t\t\ttileElement.dataset.englishName = elementData.elementName;\r\n\t\t\ttileElement.dataset.latinName = elementData.latinName;\r\n\t\t\ttileElement.dataset.hasLatin = elementData.hasLatin;\r\n\t\t\ttileElement.dataset.realRow = elementData.realRow;\r\n\t\t\ttileElement.dataset.realColumn = elementData.realColumn;\r\n\t\t\ttileElement.dataset.category = elementData.category;\r\n\t\t\ttileElement.dataset.state = elementData.state;\r\n\t\t\ttileElement.dataset.radioactivity = elementData.radioactivity;\r\n\t\t\ttileElement.dataset.am = elementData.am;\r\n\t\t\ttileElement.dataset.stableIsotopes = elementData.stableIsotopes;\r\n\t\t\ttileElement.dataset.discoveryYear = elementData.discovery;\r\n\t\t\ttileElement.dataset.electronConfiguration = elementData.electronConfiguration;\r\n\t\t\ttileElement.dataset.meltingPoint = elementData.meltingPoint;\r\n\t\t\ttileElement.dataset.boilingPoint = elementData.boilingPoint;\r\n\t\t\ttileElement.dataset.block = elementData.elementBlock;\r\n\t\t\ttileElement.dataset.period = elementData.period;\r\n\t\t\ttileElement.dataset.source = elementData.elementSource;\r\n\t\t\ttileElement.dataset.slot = '0';\r\n\t\t\tthis.tileContainer.appendChild(tileElement);\r\n\t\t\tthis.dragElement(tileElement);\r\n\t\t\tcurrentTileNumber++;\r\n\t\t});\r\n\t}\r\n\tstartTimer() {\r\n\t\tthis.timerInterval = setInterval( () => this.updateTimer(), 10); // Update every 10 milliseconds\r\n\t}\r\n\tupdateTimer() {\r\n\t\tthis.milliseconds += 10;\r\n\t\tif (this.milliseconds >= 1000) {\r\n\t\t\tthis.milliseconds = 0;\r\n\t\t\tthis.seconds++;\r\n\t\t}\r\n\t\tif (this.seconds >= 60) {\r\n\t\t\tthis.seconds = 0;\r\n\t\t\tthis.minutes++;\r\n\t\t}\r\n\t\tconst formattedTime = `${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}:${this.milliseconds.toString().padStart(3, '0')}`;\r\n\t\tthis.timerElement.textContent = formattedTime;\r\n\t}\r\n\tstopTimer() {\r\n\t\tclearInterval(this.timerInterval);\r\n\t}\r\n\tresetTimer() {\r\n\t\tclearInterval(this.timerInterval);\r\n\t\tthis.milliseconds = 0;\r\n\t\tthis.seconds = 0;\r\n\t\tthis.minutes = 0;\r\n\t\tthis.timerElement.textContent = '00:00:000';\r\n\t}\r\n\tdragElement(elmnt) {\r\n\t\tthis.pos1 = 0, this.pos2 = 0, this.pos3 = 0, this.pos4 = 0;\r\n\t\telmnt.style.cursor = 'grab'\r\n\t\telmnt.onmousedown = this.dragMouseDown.bind(this,elmnt);\t\r\n\t}\r\n\tdragMouseDown(elmnt, e) {\r\n\t\tif (elmnt.dataset.correctlyPlaced === 'false'){\r\n\t\t\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.displayInfo)(elmnt);\r\n\t\t\telmnt.style.cursor = 'grabbing'\r\n\t\t\te = e || window.event;\r\n\t\t\te.preventDefault();\r\n\t\t\tthis.pos3 = e.clientX;\r\n\t\t\tthis.pos4 = e.clientY;\r\n\t\t\tif (elmnt.dataset.currentPos != 0){\r\n\t\t\t\tthis.snapPoints[elmnt.dataset.currentPos].occupied = false;\r\n\t\t\t\tthis.snapPoints[elmnt.dataset.currentPos].occupiedBy = 0;\r\n\t\t\t\telmnt.dataset.correctlyPlaced = false;\r\n\t\t\t\telmnt.dataset.currentPos = 0;\r\n\t\t\t}\r\n\t\t\telmnt.classList.remove('correctlyPlaced');\r\n\t\t\telmnt.classList.remove('incorrectlyPlaced');\r\n\t\t\telmnt.parentElement.appendChild(elmnt);\t\r\n\t\t\tdocument.onmouseup = this.closeDragElement.bind(this,elmnt);\r\n\t\t\tdocument.onmousemove = this.elementDrag.bind(this,elmnt);\r\n\t\t} else if (elmnt.dataset.correctlyPlaced === 'true'){\r\n\t\t\tdocument.onmousedown = this.showDisplayInfo.bind(this,elmnt);\r\n\t\t\tdocument.onmouseup = this.stopDisplayInfo;\r\n\t\t}\r\n\t}\r\n\telementDrag(elmnt, e) {\r\n\t\te = e || window.event;\r\n\t\te.preventDefault();\r\n\t\tconst vw = window.innerWidth;\r\n\t\tconst vh = window.innerHeight;\r\n\t\tthis.pos1 = this.pos3 - e.clientX;\r\n\t\tthis.pos2 = this.pos4 - e.clientY;\r\n\t\tthis.pos3 = e.clientX;\r\n\t\tthis.pos4 = e.clientY;\r\n\t\telmnt.style.left = ((elmnt.offsetLeft - this.pos1) / vw ) * 100 + \"vw\";\r\n\t\telmnt.style.top = ((elmnt.offsetTop - this.pos2) / vw ) * 100 + \"vw\";\r\n\t}\r\n\tupdateScore(){\r\n\t\tthis.scoreElement.dataset.current = parseInt(this.scoreElement.dataset.current) + 1;\r\n\t\tthis.scoreElement.textContent = this.scoreElement.dataset.current + '/' + this.scoreElement.dataset.total;\r\n\t\tif (this.scoreElement.dataset.current === this.scoreElement.dataset.total){\r\n\t\t\tthis.stopTimer();\r\n\t\t\tthis.gameWon();\r\n\t\t}\r\n\r\n\t}\r\n\tgameWon(){\r\n\t\tconsole.log(\"Congratulations!!!\");\r\n\t\tconst timeInMilliSeconds = timeToMilliseconds(this.minutes, this.seconds, this.milliseconds);\r\n\r\n\t\tif (!(0,_achievementprogress_js__WEBPACK_IMPORTED_MODULE_5__.isAchievementComplete)('elementalist')){\r\n\t\t\t(0,_achievementprogress_js__WEBPACK_IMPORTED_MODULE_5__.storeAchievementInStorage)('elementalist');\r\n\t\t}\r\n\t\tif (!(0,_achievementprogress_js__WEBPACK_IMPORTED_MODULE_5__.isAchievementComplete)('symphony')){\r\n\t\t\tconsole.log(\"Huh\")\r\n\t\t}\r\n\t\tif (!(0,_achievementprogress_js__WEBPACK_IMPORTED_MODULE_5__.isAchievementComplete)('bane')){\r\n\t\t\tif(timeInMilliSeconds < 240000){\r\n\t\t\t\t(0,_achievementprogress_js__WEBPACK_IMPORTED_MODULE_5__.storeAchievementInStorage)('bane');\r\n\t\t\t}\t\r\n\t\t}\r\n\t\tif (!(0,_achievementprogress_js__WEBPACK_IMPORTED_MODULE_5__.isAchievementComplete)('sprinter')){\r\n\t\t\tif(timeInMilliSeconds < 360000){\r\n\t\t\t\t(0,_achievementprogress_js__WEBPACK_IMPORTED_MODULE_5__.storeAchievementInStorage)('sprinter');\r\n\t\t\t}\t\t\t\r\n\t\t}\r\n\t\tif (!(0,_achievementprogress_js__WEBPACK_IMPORTED_MODULE_5__.isAchievementComplete)('keyboard')){\r\n\t\t\tconsole.log(\"huh\");\r\n\t\t}\r\n\t}\r\n\tcloseDragElement(elmnt) {\r\n\t\tconst keysArray = Object.keys(this.snapPoints);\r\n\t\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(elmnt);\r\n\t\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(document.getElementById('infoContainer'));\r\n\t\tconst rect = elmnt.getBoundingClientRect();\r\n\t\tconsole.log(\"Closing Drag Element\");\r\n\t\tconst targetSlot = document.getElementById(elmnt.dataset.slot);\r\n\r\n\t\tfor (const key of keysArray) {\r\n\t\t\tconst point = this.snapPoints[key];\r\n\t\t\tif (Math.abs(parseFloat(elmnt.style.left) - parseFloat(point.x)) < 1.5 && Math.abs(parseFloat(elmnt.style.top) - parseFloat(point.y)) < 1.5 && point.occupied === false) {\r\n\t\t\t\telmnt.style.left = point.x;\r\n\t\t\t\telmnt.style.top = point.y;\r\n\t\t\t\telmnt.dataset.placed = true;\r\n\t\t\t\tpoint.occupied = true;\r\n\t\t\t\tpoint.occupiedBy = elmnt.elementID;\r\n\t\t\t\telmnt.dataset.currentPos = key;\r\n\t\t\t\tconsole.log('Running If');\r\n\t\t\t\tif (elmnt.dataset.currentPos === elmnt.dataset.elementID){\r\n\t\t\t\t\telmnt.dataset.correctlyPlaced = true;\r\n\t\t\t\t\telmnt.style.cursor = 'default';\r\n\t\t\t\t\tif (checkState === true){  \r\n\t\t\t\t\t\telmnt.classList.add('correctlyPlaced');\r\n\t\t\t\t\t\telmnt.dataset.slot = '0';\r\n\t\t\t\t\t\ttargetSlot.dataset.filled = 'false';\r\n\t\t\t\t\t\tthis.displayTiles();\r\n\t\t\t\t\t\tthis.updateScore();\r\n\t\t\t\t\t\telmnt.classList.remove('incorrectlyPlaced');\r\n\t\t\t\t\t\tthis.mouseInput = true;\r\n\t\t\t\t\t}\r\n\t\t\t\t} else {\r\n\t\t\t\t\telmnt.dataset.correctlyPlaced = false;\r\n\t\t\t\t\tif (checkState === true){\r\n\t\t\t\t\t\telmnt.classList.remove('correctlyPlaced');\r\n\t\t\t\t\t\telmnt.classList.add('incorrectlyPlaced');\r\n\t\t\t\t\t\telmnt.style.cursor = 'grab';\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\tbreak;\r\n\t\t\t} else {\r\n\t\t\t\telmnt.dataset.currentPos = 0;\r\n\t\t\t\telmnt.dataset.correctlyPlaced = false;\r\n\t\t\t\telmnt.dataset.placed = false;\r\n\t\t\t\telmnt.style.cursor = 'grab';\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\tconsole.log(elmnt.dataset.placed);\r\n\t\tif (elmnt.dataset.placed === 'false'){\r\n\t\t\tmoveTileToSlot(elmnt, targetSlot);\r\n\t\t\tconsole.log(\"Not Placed\")\r\n\t\t}\r\n\t\tdocument.onmouseup = null;\r\n\t\tdocument.onmousemove = null;\r\n\t}\r\n\tstopDisplayInfo (){\r\n\t\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(document.getElementById('infoContainer'));\r\n\t\tdocument.onmouseup = null;\r\n\t\tdocument.onmousedown = null;\r\n\t}\r\n\tshowDisplayInfo (elmnt){\r\n\t\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.displayInfo)(elmnt);\r\n\t}\r\n}\r\n\r\nfunction timeToMilliseconds(minutes, seconds, milliseconds){\r\n\treturn (minutes * 60 * 1000 + seconds * 1000 + milliseconds);\r\n}\r\n\r\nfunction moveTileToSlot(tile, slot) {\r\n    const tileRect = tile.getBoundingClientRect();\r\n    const slotRect = slot.getBoundingClientRect();\r\n\r\n    const offsetX = slotRect.left - tileRect.left;\r\n    const offsetY = slotRect.top - tileRect.top;\r\n\r\n    // Apply transform for animation\r\n    tile.style.transition = 'transform 0.3s ease'; // Adjust the duration and easing as needed\r\n    tile.style.transform = `translate(${offsetX}px, ${offsetY}px)`;\r\n\ttile.dataset.slot = slot.id;\r\n    // After the animation, set the final position without transform\r\n    setTimeout(() => {\r\n        tile.style.transition = 'none'; // Remove transition for immediate position update\r\n        tile.style.transform = 'translate(0, 0)';\r\n        tile.style.left = slotRect.left + 'px';\r\n        tile.style.top = slotRect.top + 'px';\r\n        tile.style.visibility = 'visible';\r\n        slot.dataset.filled = 'true';\r\n    }, 300); // Adjust the time to match the transition duration\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceElements);\n\n//# sourceURL=webpack://projectalpha/./public/js/dragelement.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5a4d12c52ab5fdf54af2")
/******/ })();
/******/ 
/******/ }
);