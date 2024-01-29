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

/***/ "./public/js/classicmodescene.js":
/*!***************************************!*\
  !*** ./public/js/classicmodescene.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scenemanager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenemanager.js */ \"./public/js/scenemanager.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./public/js/utils.js\");\n﻿\r\n\r\n\r\nclass ClassicModeScene{\r\n\tconstructor(){\r\n\t\tthis.handleKeyDown = this.handleKeyDown.bind(this); // Bind the method to the class instance\r\n\t\tthis.textBoxOpen = false;\r\n\t\tconsole.log(\"Going Again\");\r\n\t}\r\n\tinit(){\r\n\tnew _scenemanager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n\t\tconst canvas = document.getElementById('canvas');\r\n\r\n\t\tthis.buttonContainer = document.createElement('div');\r\n\t\tthis.buttonContainer.classList.add('buttonContainer');\r\n\t\tcanvas.appendChild(this.buttonContainer);\r\n\r\n\t\tconsole.log(\"Going Init\");\r\n\t\tthis.handleKeyDown = this.handleKeyDown.bind(this); // Bind the method to the class instance\r\n\t\tthis.textBoxOpen = false;\r\n\t\tthis.restartButton = document.createElement('button');\r\n\t\tthis.restartButton.classList.add('gameModeButton');\r\n\t\tthis.restartButton.style.top = 1 + 'vw';\r\n\t\tthis.restartButton.textContent = 'Restart';\r\n\t\t\r\n\t\tthis.shuffleButton = document.createElement('button');\r\n\t\tthis.shuffleButton.classList.add('gameModeButton');\r\n\t\tthis.shuffleButton.style.top = 3 + 'vw';\r\n\t\tthis.shuffleButton.textContent = 'Shuffle';\r\n\t\t\r\n\t\tthis.exitButton = document.createElement('button');\r\n\t\tthis.exitButton.classList.add('gameModeButton');\r\n\t\tthis.exitButton.style.top = 5 + 'vw';\r\n\t\tthis.exitButton.textContent = 'Exit';\r\n\t\t\r\n\t\tthis.timerElement = document.createElement('div');\r\n\t\tthis.timerElement.classList.add('timer');\r\n\t\tthis.timerElement.style.left = 50 + 'vw';\r\n\t\tthis.timerElement.style.cursor = 'default';\r\n\t\t\r\n\t\tthis.scoreElement = document.createElement('div');\r\n\t\tthis.scoreElement.classList.add('timer');\r\n\t\tthis.scoreElement.style.left = 40 + 'vw';\r\n\t\tthis.scoreElement.dataset.total = 118;\r\n\t\tthis.scoreElement.dataset.current = 0;\r\n\t\tthis.scoreElement.textContent = this.scoreElement.dataset.current + '/' + this.scoreElement.dataset.total;\r\n\t\t\r\n\t\tthis.gridContainer = document.createElement('div');\r\n\t\tthis.gridContainer.classList.add('grid-container');\r\n\t\t\r\n\t\tthis.tileContainer = document.createElement('div');\r\n\t\tthis.tileContainer.classList.add('tile-container');\r\n\t\t\r\n\t\tcanvas.appendChild(this.gridContainer);\r\n\t\tcanvas.appendChild(this.tileContainer);\r\n\r\n\t\tthis.buttonContainer.appendChild(this.restartButton);\r\n\t\tthis.buttonContainer.appendChild(this.shuffleButton);\r\n\t\tthis.buttonContainer.appendChild(this.exitButton);\r\n\t\tthis.buttonContainer.appendChild(this.timerElement);\r\n\t\tthis.buttonContainer.appendChild(this.scoreElement);\r\n\r\n\t\tthis.snapPoints = {};\r\n\t\t\r\n\t\tthis.createTilesOutlines();\r\n\t\tthis.createToggleButtonListeners();\r\n\t\t\r\n\t\tthis.timerInterval;\r\n\t\tthis.milliseconds = 0;\r\n\t\tthis.seconds = 0;\r\n\t\tthis.minutes = 0;\r\n\r\n\t\tthis.startTimer();\r\n\t\t\r\n\r\n\t\tthis.restartButton.addEventListener('click', () => {\r\n\t\t\twindow.removeEventListener('keydown', this.handleKeyDown);\t\r\n\t\t\tsceneManager.goToScene('classicMode');\r\n\t\t});\r\n\t\tthis.exitButton.addEventListener('click', () => {\r\n\t\t\twindow.removeEventListener('keydown', this.handleKeyDown);\r\n\t\t\tsceneManager.goToScene('mainMenu');\r\n\t\t});\r\n\t\t\r\n\t\tthis.shuffleButton.addEventListener('click', () => {\r\n\t\t\tconst tilesArray = Array.from(this.tileContainer.children);\r\n\t\t\t// Fisher-Yates Shuffle Algorithm\r\n\t\t\tfor (let i = tilesArray.length - 1; i > 0; i--) {\r\n\t\t\t\tconst j = Math.floor(Math.random() * (i + 1));\r\n\t\t\t\t[tilesArray[i], tilesArray[j]] = [tilesArray[j], tilesArray[i]];\r\n\t\t\t}\r\n\r\n\t\t\tlet currentTileNumber = 1;\r\n\t\t\tfor (const tile of tilesArray) {\r\n\t\t\t  if (tile.dataset.placed === 'false') {\r\n\t\t\t\tsetTilePosition(tile, currentTileNumber);\r\n\t\t\t\tthis.tileContainer.appendChild(tile);\r\n\t\t\t\tcurrentTileNumber++;\r\n\t\t\t  }\r\n\t\t\t}\r\n\t\t});\r\n\t\twindow.addEventListener('keydown', this.handleKeyDown);\t\t\r\n\t}\r\n\texit(){\r\n\t\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(this.tileContainer);\r\n\t\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(this.gridContainer);\r\n\t\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(togglesContainer);\r\n\t\tcanvas.removeChild(this.tileContainer);\r\n\t\tcanvas.removeChild(this.gridContainer);\r\n\t\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(this.buttonContainer);\r\n\t\tclearInterval(this.timerInterval);\r\n\t\twindow.removeEventListener('keydown', this.handleKeyDown);\r\n\t\tthis.removeNoteElement();\r\n\t\tthis.textBoxOpen = false;\r\n\t\tconsole.log(\"hi55555\");\r\n\t}\r\n\thandleKeyDown(event) {\r\n\t\tif (this.textBoxOpen === false) {\r\n\t\t\tconst alphabetKeys = /^[a-zA-Z]$/; // Regular expression for alphabet keys\r\n\t\t\tif (alphabetKeys.test(event.key)) {\r\n\t\t\t\tthis.textBoxOpen = true;\r\n\t\t\t\tthis.createNewNote(event.key);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\tcreateNewNote(firstLetter){\r\n\t\tthis.noteElement = document.createElement('div');\r\n\t\tthis.noteElement.classList.add('note');\r\n\t\tconst textInput = document.createElement('textarea');\r\n\t\ttextInput.classList.add('note-text-input');\r\n\t\tthis.noteElement.appendChild(textInput);\r\n\t\ttextInput.focus();\r\n\t\ttextInput.value = firstLetter;\r\n\t\tlet maxWidthNotReached = true;\r\n\t\tconst minimumWidth = 200;\r\n\t\tconst screenWidth = window.innerWidth;\r\n\t\tcanvas.appendChild(this.noteElement);\r\n\t\tsetTimeout(() => {\r\n\t\t\ttextInput.focus();\r\n\t\t}, 50);\r\n\t\ttextInput.addEventListener('input', () => {\r\n\t\t\tconst scrollWidth = textInput.scrollWidth;\r\n\t\t\tconst scrollHeight = textInput.scrollHeight;\r\n\t\t\tif ((scrollWidth <= screenWidth / 4) && (scrollWidth > minimumWidth) && (maxWidthNotReached)){\r\n\t\t\t\ttextInput.style.width = (scrollWidth + 10) + 'px';\r\n\t\t\t} \r\n\t\t\tif (scrollWidth > screenWidth / 4 || !maxWidthNotReached)\r\n\t\t\t{\r\n\t\t\t\tmaxWidthNotReached = false;\r\n\t\t\t\ttextInput.style.whiteSpace = 'normal';\r\n\t\t\t\tthis.noteElement.style.height = scrollHeight;\r\n\t\t\t\ttextInput.style.height = scrollHeight;\r\n\t\t\t}\r\n\t\t\tif (textInput.value === '')\r\n\t\t\t{\r\n\t\t\t\tmaxWidthNotReached = true;\r\n\t\t\t\ttextInput.style.width = 200;\r\n\t\t\t\ttextInput.style.height = 'auto';\r\n\t\t\t\ttextInput.style.whiteSpace = 'nowrap';\r\n\t\t\t}\r\n\t\t});\r\n\t\ttextInput.addEventListener('keyup', (event) => {\r\n\t\t\tif (event.key === 'Enter') {\r\n\t\t\t\tconst enteredText = textInput.value;\r\n\t\t\t\tthis.noteElement.textContent=enteredText;\r\n\t\t\t\tthis.noteElement.style.height = 'auto'; \r\n\t\t\t\tconst desiredHeight = this.noteElement.scrollHeight;\r\n\t\t\t\tthis.noteElement.style.height = desiredHeight;\r\n\t\t\t\tthis.noteElement.style.cursor = 'grab'\r\n\t\t\t\tcanvas.removeEventListener('click', this.handleClick);\r\n\t\t\t\tif (checkingInput(enteredText) === true)\r\n\t\t\t\t{\r\n\t\t\t\t\tthis.updateScore();\r\n\t\t\t\t}\r\n\t\t\t\tthis.removeNoteElement();\r\n\t\t\t} else if (event.key === 'Escape'){\r\n\t\t\t\tthis.removeNoteElement();\r\n\t\t\t}\r\n\t\t});\r\n\t\tcanvas.addEventListener('mousedown', this.handleClick.bind(this));\r\n\t}\r\n\tremoveNoteElement(){\r\n\t\tif (this.textBoxOpen === true){\r\n\t\t\tcanvas.removeChild(this.noteElement);\r\n\t\t\tthis.textBoxOpen = false;\r\n\t\t\tcanvas.removeEventListener('mousedown', this.handleClick.bind(this));\r\n\t\t}\r\n\t}\r\n\thandleClick(){\r\n\t\tif (this.textBoxOpen === true){\r\n\t\t\tthis.removeNoteElement();\r\n\t\t}  \r\n\t}\r\n\tcreateTilesOutlines(){\r\n\t\tconst windowRatio = 0.7;\r\n\t\tconst screenRatio = window.innerWidth / window.innerHeight;\r\n\t\tconst screenWidth = window.innerWidth * windowRatio;\r\n\t\tconst leftPadding = window.innerWidth * (1-windowRatio)/2;\r\n\t\tconst topPadding = window.innerWidth * 0.01;\r\n\t\tconst tileWidth = screenWidth / 18;\r\n\t\tconst columnElementsSet = new Set([1,4,21,22,23,24,25,26,27,28,29,30,5,6,7,8,9,2,58,59,60,61,62,63,64,65,66,67,68,69,70,71]);\r\n\t\tconst rowElementsSet = new Set([1,3,11,19,37,55,87,22,40,72,104,58,90]);\r\n\t\tconst columnElementsList = [1,4,21,22,23,24,25,26,27,28,29,30,5,6,7,8,9,2,58,59,60,61,62,63,64,65,66,67,68,69,70,71];\r\n\t\tconst rowElementsList = [1,3,11,19,37,55,87,58,90,22,40,72,104];\r\n\t\tconst rowCorrespondence = {};\r\n\t\tconst columnCorrespondence = {};\r\n\t\tfor (let i=0; i < rowElementsList.length; i++){\r\n\t\t\trowCorrespondence[rowElementsList[i]] = i + 1;\r\n\t\t}\r\n\t\tfor (let i=0; i < columnElementsList.length; i++){\r\n\t\t\tcolumnCorrespondence[columnElementsList[i]] = i + 1;\r\n\t\t}\r\n\t\tlet currentTileNumber = 1;\r\n\t\tshuffleArray(tilesData);\r\n\t\ttilesData.forEach(elementData => {\r\n\t\t\tlet hDisplace = 0;\r\n\t\t\tlet vDisplace = 0;\r\n\t\t\tconst tileOutline = document.createElement('div');\r\n\t\t\ttileOutline.classList.add('tileOutline');\r\n\t\t\ttileOutline.style.position = 'absolute';\r\n\t\t\ttileOutline.style.width = (tileWidth - 8) / window.innerWidth  * 100 + 'vw';\r\n\t\t\ttileOutline.style.height = tileOutline.style.width;\r\n\t\t\tif (elementData.hDisplace === 'TRUE')\r\n\t\t\t{\r\n\t\t\t\thDisplace = 10;\r\n\t\t\t}\r\n\t\t\tif (elementData.vDisplace === 'TRUE')\r\n\t\t\t{\r\n\t\t\t\tvDisplace = 10;\r\n\t\t\t}\r\n\t\t\ttileOutline.style.left = (hDisplace + leftPadding - tileWidth + elementData.elementColumn*(tileWidth)) / window.innerWidth  * 100 + 'vw';\r\n\t\t\ttileOutline.style.top = (vDisplace + topPadding - tileWidth  + elementData.elementRow * (tileWidth)) / window.innerWidth  * 100 + 'vw';\r\n\t\t\ttileOutline.id = elementData.an + \" outline\";\r\n\t\t\tthis.gridContainer.appendChild(tileOutline);\r\n\t\t\tconst snapPoint = {x: tileOutline.style.left, y: tileOutline.style.top, occupied: false, occupiedBy: 0};\r\n\t\t\tthis.snapPoints[elementData.an] = snapPoint;\r\n\t\t\tconst tileElement = document.createElement('div');\r\n\t\t\ttileElement.classList.add('tile');\r\n\t\t\ttileElement.style.position = 'absolute';\r\n\t\t\ttileElement.style.width = (tileWidth - 8) / window.innerWidth  * 100 + 'vw';\r\n\t\t\ttileElement.style.height = tileElement.style.width;\r\n\t\t\ttileElement.style.backgroundColor = elementData.color;\r\n\t\t\ttileElement.textContent = elementData.symbol;\r\n\t\t\ttileElement.dataset.symbol = elementData.symbol;\r\n\t\t\tsetTilePosition(tileElement, currentTileNumber);\r\n\t\t\ttileElement.dataset.elementID = elementData.an;\r\n\t\t\ttileElement.dataset.currentPos = 0;\r\n\t\t\ttileElement.dataset.correctlyPlaced = 'false';\r\n\t\t\ttileElement.dataset.placed = 'false';\r\n\t\t\ttileElement.id = elementData.an;\r\n\t\t\ttileElement.dataset.englishName = elementData.elementName;\r\n\t\t\ttileElement.dataset.latinName = elementData.latinName;\r\n\t\t\ttileElement.dataset.hasLatin = elementData.hasLatin;\r\n\t\t\ttileElement.dataset.realRow = elementData.realRow;\r\n\t\t\ttileElement.dataset.realColumn = elementData.realColumn;\r\n\t\t\ttileElement.dataset.category = elementData.category;\r\n\t\t\ttileElement.dataset.state = elementData.state;\r\n\t\t\ttileElement.dataset.radioactivity = elementData.radioactivity;\r\n\t\t\ttileElement.dataset.am = elementData.am;\r\n\t\t\ttileElement.dataset.stableIsotopes = elementData.stableIsotopes;\r\n\t\t\ttileElement.dataset.discoveryYear = elementData.discovery;\r\n\t\t\ttileElement.dataset.electronConfiguration = elementData.electronConfiguration;\r\n\t\t\ttileElement.dataset.meltingPoint = elementData.meltingPoint;\r\n\t\t\ttileElement.dataset.boilingPoint = elementData.boilingPoint;\r\n\t\t\ttileElement.dataset.block = elementData.elementBlock;\r\n\t\t\ttileElement.dataset.period = elementData.period;\r\n\t\t\ttileElement.dataset.source = elementData.elementSource;\r\n\t\t\tthis.tileContainer.appendChild(tileElement);\r\n\t\t\tthis.dragElement(tileElement);\r\n\t\t\tcurrentTileNumber++;\r\n\t\t\t// Creating Column Toggle buttonsContainer\r\n\t\t\tif (rowElementsSet.has(parseInt(elementData.an))){\r\n\t\t\t\tconst rowButton = document.createElement('button');\r\n\t\t\t\trowButton.classList.add('toggleButton');\r\n\t\t\t\trowButton.style.width = 0.1 + 'vw';\r\n\t\t\t\trowButton.style.height = tileOutline.style.height;\r\n\t\t\t\trowButton.style.top = tileOutline.style.top;\r\n\t\t\t\trowButton.style.left = parseFloat(tileOutline.style.left) - 0.5 + 'vw';\r\n\t\t\t\trowButton.dataset.rowNumber = rowCorrespondence[elementData.an];\r\n\t\t\t\trowButton.dataset.columnNumber = 0;\r\n\t\t\t\ttogglesContainer.appendChild(rowButton);\r\n\t\t\t}\r\n\t\t\tif (columnElementsSet.has(parseInt(elementData.an))){\r\n\t\t\t\tconst columnButton = document.createElement('button');\r\n\t\t\t\tcolumnButton.classList.add('toggleButton');\r\n\t\t\t\tcolumnButton.style.width = tileOutline.style.width;\r\n\t\t\t\tcolumnButton.style.height = 0.2 + 'vw';\r\n\t\t\t\tcolumnButton.style.top = parseFloat(tileOutline.style.top) - 0.5 + 'vw';\r\n\t\t\t\tcolumnButton.style.left = tileOutline.style.left;\r\n\t\t\t\tcolumnButton.dataset.rowNumber = 0;\r\n\t\t\t\tcolumnButton.dataset.columnNumber = columnCorrespondence[elementData.an];\r\n\t\t\t\ttogglesContainer.appendChild(columnButton);\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\tcreateToggleButtonListeners(){\r\n\t\tconst buttonStates = {};\r\n\t\tlet toggleState = false;\r\n\t\tArray.from(togglesContainer.children).forEach(button => {\r\n\t\t\tconst keyName = button.dataset.rowNumber+button.dataset.columnNumber\r\n\t\t\tbuttonStates[keyName] = false;\r\n\t\t\tbutton.addEventListener('click', () => {\r\n\t\t\t\ttoggleState = false;\r\n\t\t\t\tbuttonStates[keyName] = !buttonStates[keyName];\r\n\t\t\t\tArray.from(togglesContainer.children).forEach(otherButton => {\r\n\t\t\t\t\tif (otherButton !== button){\r\n\t\t\t\t\t\tconst otherKeyName = otherButton.dataset.rowNumber+otherButton.dataset.columnNumber\r\n\t\t\t\t\t\tbuttonStates[otherKeyName] = false;\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t\tArray.from(togglesContainer.children).forEach(btn => {\r\n\t\t\t\t\tconst btnKeyName = btn.dataset.rowNumber+btn.dataset.columnNumber\r\n\t\t\t\t\tbtn.style.backgroundColor = buttonStates[btnKeyName] ? 'green' : 'white';\r\n\t\t\t\t\tif (buttonStates[btnKeyName] === true){\r\n\t\t\t\t\t\ttoggleState = true;\r\n\t\t\t\t\t\tArray.from(this.tileContainer.children).forEach(myTile => {\r\n\t\t\t\t\t\t\tif (myTile.dataset.placed === 'false'){\r\n\t\t\t\t\t\t\t\tmyTile.style.display = 'none';\r\n\t\t\t\t\t\t\t\tif (btn.dataset.rowNumber === '0'){\r\n\t\t\t\t\t\t\t\t\tif (myTile.dataset.realColumn === btn.dataset.columnNumber){\r\n\t\t\t\t\t\t\t\t\t\tmyTile.style.display = 'block';\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t} else if (btn.dataset.columnNumber === '0'){\r\n\t\t\t\t\t\t\t\t\tif (myTile.dataset.realRow === btn.dataset.rowNumber){\r\n\t\t\t\t\t\t\t\t\t\tmyTile.style.display = 'block';\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t});\r\n\t\t\t\t\t}\r\n\t\t\t\t\tif (toggleState === false){\r\n\t\t\t\t\t\tArray.from(this.tileContainer.children).forEach(myTile => {\r\n\t\t\t\t\t\t\tmyTile.style.display = 'block';\r\n\t\t\t\t\t\t});\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t});\r\n\t\t});\r\n\t}\r\n\tstartTimer() {\r\n\t\tthis.timerInterval = setInterval( () => this.updateTimer(), 10); // Update every 10 milliseconds\r\n\t}\r\n\tupdateTimer() {\r\n\t\tthis.milliseconds += 10;\r\n\t\tif (this.milliseconds >= 1000) {\r\n\t\t\tthis.milliseconds = 0;\r\n\t\t\tthis.seconds++;\r\n\t\t}\r\n\t\tif (this.seconds >= 60) {\r\n\t\t\tthis.seconds = 0;\r\n\t\t\tthis.minutes++;\r\n\t\t}\r\n\t\tconst formattedTime = `${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}:${this.milliseconds.toString().padStart(3, '0')}`;\r\n\t\tthis.timerElement.textContent = formattedTime;\r\n\t}\r\n\tstopTimer() {\r\n\t\tclearInterval(this.timerInterval);\r\n\t}\r\n\tresetTimer() {\r\n\t\tclearInterval(this.timerInterval);\r\n\t\tthis.milliseconds = 0;\r\n\t\tthis.seconds = 0;\r\n\t\tthis.minutes = 0;\r\n\t\tthis.timerElement.textContent = '00:00:000';\r\n\t}\r\n\tdragElement(elmnt) {\r\n\t\tthis.pos1 = 0, this.pos2 = 0, this.pos3 = 0, this.pos4 = 0;\r\n\t\telmnt.style.cursor = 'grab'\r\n\t\telmnt.onmousedown = this.dragMouseDown.bind(this,elmnt);\t\r\n\t}\r\n\tdragMouseDown(elmnt, e) {\r\n\t\tif (elmnt.dataset.correctlyPlaced === 'false'){\r\n\t\t\tdisplayInfo(elmnt);\r\n\t\t\telmnt.style.cursor = 'grabbing'\r\n\t\t\te = e || window.event;\r\n\t\t\te.preventDefault();\r\n\t\t\tthis.pos3 = e.clientX;\r\n\t\t\tthis.pos4 = e.clientY;\r\n\t\t\tif (elmnt.dataset.currentPos != 0){\r\n\t\t\t\tthis.snapPoints[elmnt.dataset.currentPos].occupied = false;\r\n\t\t\t\tthis.snapPoints[elmnt.dataset.currentPos].occupiedBy = 0;\r\n\t\t\t\telmnt.dataset.correctlyPlaced = false;\r\n\t\t\t\telmnt.dataset.currentPos = 0;\r\n\t\t\t}\r\n\t\t\telmnt.classList.remove('correctlyPlaced');\r\n\t\t\telmnt.classList.remove('incorrectlyPlaced');\r\n\t\t\telmnt.parentElement.appendChild(elmnt);\t\r\n\t\t\tdocument.onmouseup = this.closeDragElement.bind(this,elmnt);\r\n\t\t\tdocument.onmousemove = this.elementDrag.bind(this,elmnt);\r\n\t\t} else if (elmnt.dataset.correctlyPlaced === 'true'){\r\n\t\t\tdocument.onmousedown = this.showDisplayInfo.bind(this,elmnt);\r\n\t\t\tdocument.onmouseup = this.stopDisplayInfo.bind(this,elmnt);\r\n\t\t}\r\n\t}\r\n\telementDrag(elmnt, e) {\r\n\t\te = e || window.event;\r\n\t\te.preventDefault();\r\n\t\tconst vw = window.innerWidth;\r\n\t\tconst vh = window.innerHeight;\r\n\t\tthis.pos1 = this.pos3 - e.clientX;\r\n\t\tthis.pos2 = this.pos4 - e.clientY;\r\n\t\tthis.pos3 = e.clientX;\r\n\t\tthis.pos4 = e.clientY;\r\n\t\telmnt.style.left = ((elmnt.offsetLeft - this.pos1) / vw ) * 100 + \"vw\";\r\n\t\telmnt.style.top = ((elmnt.offsetTop - this.pos2) / vw ) * 100 + \"vw\";\r\n\t}\r\n\tupdateScore(){\r\n\t\tthis.scoreElement.dataset.current = parseInt(this.scoreElement.dataset.current) + 1;\r\n\t\tthis.scoreElement.textContent = this.scoreElement.dataset.current + '/' + this.scoreElement.dataset.total;\r\n\t\tif (this.scoreElement.dataset.current === this.scoreElement.dataset.total){\r\n\t\t\tthis.stopTimer();\r\n\t\t\tthis.gameWon();\r\n\t\t}\r\n\t}\r\n\tgameWon(){\r\n\t\tconsole.log(\"Congratulations!!!\");\r\n\t\t\r\n\t}\r\n\tcloseDragElement(elmnt) {\r\n\t\tconst keysArray = Object.keys(this.snapPoints);\r\n\t\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(elmnt);\r\n\t\tfor (const key of keysArray) {\r\n\t\t\tconst point = this.snapPoints[key];\r\n\t\t\tif (Math.abs(parseFloat(elmnt.style.left) - parseFloat(point.x)) < 1.5 && Math.abs(parseFloat(elmnt.style.top) - parseFloat(point.y)) < 1.5 && point.occupied === false) {\r\n\t\t\t\telmnt.style.left = point.x;\r\n\t\t\t\telmnt.style.top = point.y;\r\n\t\t\t\telmnt.dataset.placed = true;\r\n\t\t\t\tpoint.occupied = true;\r\n\t\t\t\tpoint.occupiedBy = elmnt.elementID;\r\n\t\t\t\telmnt.dataset.currentPos = key;\r\n\t\t\t\tif (elmnt.dataset.currentPos === elmnt.dataset.elementID){\r\n\t\t\t\t\telmnt.dataset.correctlyPlaced = true;\r\n\t\t\t\t\telmnt.style.cursor = 'default';\r\n\t\t\t\t\tif (checkState === true){  \r\n\t\t\t\t\t\telmnt.classList.add('correctlyPlaced');\r\n\t\t\t\t\t\tthis.updateScore();\r\n\t\t\t\t\t\telmnt.classList.remove('incorrectlyPlaced');\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\telse{\r\n\t\t\t\t\telmnt.dataset.correctlyPlaced = false;\r\n\t\t\t\t\tif (checkState === true){\r\n\t\t\t\t\t\telmnt.classList.remove('correctlyPlaced');\r\n\t\t\t\t\t\telmnt.classList.add('incorrectlyPlaced');\r\n\t\t\t\t\t\telmnt.style.cursor = 'grab';\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t\telse {\r\n\t\t\t\telmnt.dataset.currentPos = 0;\r\n\t\t\t\telmnt.dataset.correctlyPlaced = false;\r\n\t\t\t\telmnt.dataset.placed = false;\r\n\t\t\t\telmnt.style.cursor = 'grab'\r\n\t\t\t}\r\n\t\t}\r\n\t\tdocument.onmouseup = null;\r\n\t\tdocument.onmousemove = null;\r\n\t}\r\n\tstopDisplayInfo (elmnt){\r\n\t\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(elmnt);\r\n\t\tdocument.onmouseup = null;\r\n\t\tdocument.onmousedown = null;\r\n\t}\r\n\tshowDisplayInfo (elmnt){\r\n\t\tdisplayInfo(elmnt);\r\n\t}\t\t\r\n}\r\n\r\nfunction displayInfo (elmnt){\r\n\tconst englishName = createInfoElement(0.5);\r\n\tenglishName.textContent = elmnt.dataset.englishName;\r\n\tif (elmnt.dataset.hasLatin === '1'){\r\n\t\tconst scientificName = createInfoElement(2.5);\r\n\t\tscientificName.textContent = elmnt.dataset.latinName;\r\n\t}\r\n\tconst atomicNumber = createInfoElement(4.5);\r\n\tatomicNumber.textContent = 'Atomic Number: ' + elmnt.dataset.elementID;\r\n\tconst atomicMass = createInfoElement(6.5);\r\n\tatomicMass.textContent = 'Atomic Mass: ' + elmnt.dataset.am;\r\n\tconst category = createInfoElement(8.5);\r\n\tcategory.textContent = elmnt.dataset.category;\r\n\tconst state = createInfoElement(10.5);\r\n\tstate.textContent = elmnt.dataset.state;\r\n\tconst year = createInfoElement(12.5);\r\n\tyear.textContent = elmnt.dataset.discoveryYear;\r\n\tconst stableIsotopes = createInfoElement(14.5);\r\n\tif (elmnt.dataset.stableIsotopes === '0'){\r\n\t\tstableIsotopes.textContent = 'No Stable Isotopes';\r\n\t}\r\n\telse {\r\n\t\tconst atomicMasses = elmnt.dataset.stableIsotopes.split(' ');\r\n\t\tconst superscriptedAtomicMasses = atomicMasses.map(atomicMass => convertToSuperscript(atomicMass));\r\n\t\t// I don't know why I needed the last manual symbol. Something about the join function\r\n\t\tconst isotopesText = 'Stable Isotopes: ' + superscriptedAtomicMasses.join(elmnt.dataset.symbol + ' ') + elmnt.dataset.symbol;\r\n\t\tstableIsotopes.textContent = isotopesText;\r\n\t}\r\n\tconst electronConfiguration = createInfoElement(16.5);\r\n\telectronConfiguration.textContent = convertDigitsToSuperscriptForElectronConfiguration(elmnt.dataset.electronConfiguration);\r\n\tconst meltingPoint = createInfoElement(18.5);\r\n\tif (elmnt.dataset.meltingPoint === '-'){\r\n\t\tmeltingPoint.textContent = 'Melting Point Not Available';\r\n\t}\r\n\telse if (elmnt.dataset.meltingPoint === 'Sublimes'){\r\n\t\tmeltingPoint.textContent = 'Sublimes at atmospheric pressure';\r\n\t}\r\n\telse {\r\n\t\tmeltingPoint.textContent = 'Melting Point: ' + elmnt.dataset.meltingPoint + \"°C\";\r\n\t}\r\n\tconst boilingPoint = createInfoElement(20.5);\r\n\tif (elmnt.dataset.boilingPoint === '-'){\r\n\t\tboilingPoint.textContent = 'Boiling Point Not Available';\r\n\t}\r\n\telse {\r\n\t\tboilingPoint.textContent = 'Boiling Point: ' + elmnt.dataset.boilingPoint + \"°C\";\r\n\t}\r\n\tconst period = createInfoElement(22.5);\r\n\tperiod.textContent = 'Period: ' + elmnt.dataset.period;\r\n\tconst block = createInfoElement(24.5);\r\n\tblock.textContent = elmnt.dataset.block + '-block';\r\n\tconst sources = createInfoElement(26.5);\r\n\tsources.textContent = elmnt.dataset.source.trim().replace(/ \\+/g, ',');\r\n\tfunction createInfoElement (topPosition){\r\n\t\tconst infoElement = document.createElement('div');\r\n\t\tinfoElement.classList.add('infoText');\r\n\t\telmnt.append(infoElement);\r\n\t\tinfoElement.style.top = topPosition + 'vw';\r\n\t\tinfoElement.style.right = 1 + 'vw';\r\n\t\treturn infoElement;\r\n\t}\r\n}\r\nfunction convertToSuperscript(text) {\r\n    const superscriptMap = {\r\n        '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',\r\n        '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'\r\n    };\r\n    return text.replace(/\\d/g, match => superscriptMap[match]);\r\n}\r\nfunction convertDigitsToSuperscriptForElectronConfiguration(inputString) {\r\n    const superscriptMap = {\r\n        '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',\r\n        '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'\r\n    };\r\n    let outputString = '';\r\n    let isPreviousCharSpace = true; // Initialize as true to handle digits at the beginning\r\n    for (const char of inputString) {\r\n        if (/\\d/.test(char)) {\r\n            outputString += isPreviousCharSpace ? char : superscriptMap[char];\r\n        } else {\r\n            outputString += char;\r\n        }\r\n        isPreviousCharSpace = char === ' ';\r\n    }\r\n    return outputString.trim();\r\n}\r\n\r\n\r\nfunction shuffleArray(array) {\r\n  for (let i = array.length - 1; i > 0; i--) {\r\n    const j = Math.floor(Math.random() * (i + 1));\r\n    [array[i], array[j]] = [array[j], array[i]]; // Swap elements\r\n  }\r\n}\r\n\r\nfunction setTilePosition(tileElement, currentTileNumber) {\r\n\tconst minimumTiles = 20;\r\n\tconst maximumTiles = 40;\r\n\tlet row = 0;\r\n\tlet column = ((currentTileNumber-1) % minimumTiles)* (85 / (minimumTiles - 1))+ 5;\r\n\tlet padding = 0;\r\n\tif (currentTileNumber >= 1 && currentTileNumber <= minimumTiles) {\r\n\t\trow = 75;\r\n\t} else if (currentTileNumber >= minimumTiles + 1 && currentTileNumber <= minimumTiles * 2) {\r\n\t\trow = 80;\r\n\t} else if (currentTileNumber >= minimumTiles * 2 + 1 && currentTileNumber <= minimumTiles * 3) {\r\n\t\trow = 85;\r\n\t} else if (currentTileNumber >= minimumTiles * 3 + 1 && currentTileNumber <= minimumTiles * 4) {\r\n\t\trow = 77.5;\r\n\t\tpadding = 2;\r\n\t} else if (currentTileNumber >= minimumTiles * 4 + 1 && currentTileNumber <= minimumTiles * 5) {\r\n\t\trow = 82.5;\r\n\t\tpadding = 2;\r\n\t} else if (currentTileNumber >= minimumTiles * 5 + 1 && currentTileNumber <= minimumTiles * 6){\r\n\t\trow = 87.5;\r\n\t\tpadding = 2;\r\n\t} else {\r\n\t\trow = Math.random() * (87.5 - 75) + 75;\r\n\t}\r\n\ttileElement.style.left = column + padding + 'vw';\r\n\ttileElement.style.top = (row * window.innerHeight / 100) / window.innerWidth * 100 + 1 + 'vw';\r\n}\r\n\r\nfunction checkingInput(enteredText){\r\n\tenteredText = enteredText.trim().toLowerCase();\r\n\tif (elementNames.hasOwnProperty(enteredText)){\r\n\t\tconst tileElement = document.getElementById(elementNames[enteredText]);\r\n\t\tconst outlineElement = document.getElementById(elementNames[enteredText] + \" outline\");\r\n\t\tif (tileElement.classList.contains('correctlyPlaced')){\r\n\t\t\tdisplayAlreadyPlaced(tileElement.dataset.englishName);\r\n\t\t\treturn false;\r\n\t\t}\r\n\t\tmoveTileToCorrect(tileElement, outlineElement);\r\n\t\treturn true;\r\n\t} else{\r\n\t\treturn false;\r\n\t\t\r\n\t}\r\n}\r\n\r\nfunction moveTileToCorrect(tileElement, outlineElement){\r\n\tconst distanceX = parseFloat(outlineElement.style.left) - parseFloat(tileElement.style.left);\r\n\tconst distanceY = parseFloat(outlineElement.style.top) - parseFloat(tileElement.style.top);\r\n\ttileElement.style.left = `${parseFloat(tileElement.style.left) + distanceX}vw`;\r\n\ttileElement.style.top = `${parseFloat(tileElement.style.top) + distanceY}vw`;\r\n\ttileElement.dataset.placed = 'true';\r\n\ttileElement.dataset.correctlyPlaced = 'true';\r\n\ttileElement.style.cursor = 'default';\r\n\ttileElement.classList.add('transition-class');\r\n\tsetTimeout(() => {\r\n\t\ttileElement.classList.remove('transition-class');\r\n\t\ttileElement.classList.add('correctlyPlaced');\r\n\t\ttileElement.classList.remove('incorrectlyPlaced');\r\n\t\ttileElement.display = 'block';\r\n\t}, 500); \r\n}\r\n\r\nfunction displayAlreadyPlaced(thisElementName){\r\n\tif (parseInt(messageContainer.dataset.occupants > 0)){\r\n\t\tconst children = messageContainer.children;\r\n\t\tfor (let i = 0; i < children.length; i++) {\r\n\t\t\tconst child = children[i];\r\n\t\t\tconst currentBottom = parseFloat(child.style.bottom) || 0;\r\n\t\t\tconst newBottomValue = 0.5 + 'vw';\r\n\t\t\tchild.style.bottom = newBottomValue;\r\n\t\t}\r\n\t}\r\n\tconst textElement = document.createElement('div');\r\n\ttextElement.classList.add('messageText');\r\n\ttextElement.style.bottom = 1 + 'vw';\r\n\ttextElement.style.left = 1 + 'vw';\r\n\ttextElement.textContent = `${thisElementName} is already placed`;\r\n\tmessageContainer.dataset.occupants = parseInt(messageContainer.dataset.occupants) + 1;\r\n\tmessageContainer.append(textElement);\r\n\tsetTimeout(()=> {\r\n\t\tmessageContainer.removeChild(textElement);\r\n\t\tmessageContainer.dataset.occupants = parseInt(messageContainer.dataset.occupants) - 1;\r\n\t}, 3000);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassicModeScene);\n\n//# sourceURL=webpack://projectalpha/./public/js/classicmodescene.js?");

/***/ }),

/***/ "./public/js/script.js":
/*!*****************************!*\
  !*** ./public/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./public/js/utils.js\");\n/* harmony import */ var _scenemanager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenemanager.js */ \"./public/js/scenemanager.js\");\n﻿\r\n\r\n\r\n\r\n\r\nconsole.log(\"Hi Hi Hi Hi Hi\");\r\n\r\nconst canvas = document.getElementById('canvas');\r\nconst buttonContainer = document.getElementById('buttonsContainer');\r\nconst togglesContainer = document.getElementById('togglesContainer');\r\nconst messageContainer = document.getElementById('messageContainer');\r\nmessageContainer.dataset.occupants = 0;\r\nlet checkState = true;\r\nlet gameExists = false;\r\n\r\nlet tilesData = [];\r\n\r\nconst tilesDataURL = '/get-tiles';\r\n\r\nasync function fetchDataFromServer() {\r\n  try {\r\n    const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(tilesDataURL); // Use Axios for POST request\r\n    if (response.status === 200) {\r\n      const data = response.data;\r\n      tilesData = data;\r\n      tilesData.forEach((tile_obj) => {\r\n        elementNames[tile_obj.elementName.toLowerCase()] = tile_obj.an;\r\n        elementNames[tile_obj.latinName.toLowerCase()] = tile_obj.an;\r\n      });\r\n    } else {\r\n      console.error('Failed to fetch data:', response.statusText);\r\n    }\r\n  } catch (error) {\r\n    console.error('Error fetching data:', error);\r\n  }\r\n}\r\n\r\nwindow.addEventListener('load', fetchDataFromServer);\r\n\r\nlet elementNames = {};\r\n\r\nconsole.log(elementNames);\r\n\r\n\r\nnew _scenemanager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\nsceneManager.goToScene('mainMenu');\r\nconst pathname = window.location.pathname;\r\nconsole.log(pathname);\r\n\r\nconst classicCounterURL = '/get-counter';\r\n\r\nasync function fetchCounterValue() {\r\n  try {\r\n    const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(classicCounterURL); // Use Axios for POST request\r\n\r\n    if (response.status === 200) {\r\n      const data = response.data;\r\n      \r\n      const counterValue = data.value;\r\n      \r\n      console.log('Counter Value:', counterValue);\r\n    } else {\r\n      console.error('Failed to fetch counter value:', response.statusText);\r\n    }\r\n  } catch (error) {\r\n    console.error('Error fetching counter value:', error);\r\n  }\r\n}\r\n\r\nwindow.addEventListener('load', fetchCounterValue);\r\n\n\n//# sourceURL=webpack://projectalpha/./public/js/script.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("32a6af08406743841ffa")
/******/ })();
/******/ 
/******/ }
);