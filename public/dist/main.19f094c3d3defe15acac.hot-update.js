/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateprojectalpha"]("main",{

/***/ "./public/js/levelscene.js":
/*!*********************************!*\
  !*** ./public/js/levelscene.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mainmenuscene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainmenuscene.js */ \"./public/js/mainmenuscene.js\");\n/* harmony import */ var _scenemanager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenemanager.js */ \"./public/js/scenemanager.js\");\n\r\n\r\n\r\nconst mainMenu = new _mainmenuscene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst classicMode = new ClassicModeScene();\r\n\r\nconst levelConfig = {\r\n\tmainMenu: {\r\n\t\tinit: function(){\r\n\t\t\tmainMenu.init();\r\n\t\t},\r\n\t\texit: function(){\r\n\t\t\tmainMenu.exit();\r\n\t\t}\r\n\t},\r\n\tclassicMode: {\r\n\t\tinit: function(){\r\n\t\t\tclassicMode.init();\r\n\t\t},\r\n\t\texit: function(){\r\n\t\t\tclassicMode.exit();\r\n\t\t}\r\n\t}\r\n};\r\n\r\nclass LevelScene {\r\n\tconstructor(levelNumber) {\r\n\t\tthis.levelNumber = levelNumber;\r\n\t\tthis.levelInit = levelConfig[levelNumber].init;\r\n\t\tthis.levelExit = levelConfig[levelNumber].exit;\r\n\t}\r\n\tinit() {\r\n\t\tthis.levelInit();\r\n\t}\r\n\texit() {\r\n\t\tthis.levelExit();\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LevelScene);\n\n//# sourceURL=webpack://projectalpha/./public/js/levelscene.js?");

/***/ }),

/***/ "./public/js/mainmenuscene.js":
/*!************************************!*\
  !*** ./public/js/mainmenuscene.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./public/js/utils.js\");\n/* harmony import */ var _levelscene_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levelscene.js */ \"./public/js/levelscene.js\");\n/* harmony import */ var _scenemanager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenemanager.js */ \"./public/js/scenemanager.js\");\n\r\n\r\n\r\nnew _scenemanager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\nclass MainMenuScene{\r\n\tconstructor(){\r\n\t\tthis.noteElement = null;\r\n\t}\r\n\tinit(){\r\n\t\tconst canvas = document.getElementById('canvas');\r\n\r\n\t\tthis.buttonContainer = document.createElement('div');\r\n\t\tthis.buttonContainer.classList.add('buttonContainer');\r\n\t\tcanvas.appendChild(this.buttonContainer);\r\n\r\n\t\tthis.startButton = document.createElement('button');\r\n\t\tthis.startButton.classList.add('startButton');\r\n\t\tthis.startButton.textContent = 'Start';\r\n\t\t\r\n\t\tthis.mode1Button = document.createElement('button');\r\n\t\tthis.mode1Button.classList.add('modeButton');\r\n\t\tthis.mode1Button.style.left = 40 + 'vw';\r\n\t\tthis.mode1Button.textContent = 'Classic Mode';\r\n\r\n\t\tthis.mode2Button = document.createElement('button');\r\n\t\tthis.mode2Button.classList.add('modeButton');\r\n\t\tthis.mode2Button.style.left = 60 + 'vw';\r\n\t\tthis.mode2Button.textContent = 'Mode 2'\r\n\t\tthis.mode2Button.style.outline = '2px solid black';\r\n\r\n\t\tthis.loginButton = document.createElement('button');\r\n\t\tthis.loginButton.classList.add('modeButton');\r\n\t\tthis.loginButton.style.left = 1 + 'vw';\r\n\t\tthis.loginButton.style.top = 1 + 'vw';\r\n\t\tthis.loginButton.textContent = 'Log In';\r\n\t\t\r\n\t\tthis.loginButton.addEventListener('click', signInCall);\r\n\t\t\r\n\t\tfunction signInCall (){\r\n\t\t\twindow.location.href = '/auth/google';\r\n\t\t}\r\n \t\tlet targetMode = 'classicMode';\r\n\t\tthis.buttonContainer.appendChild(this.startButton);\r\n\t\tthis.buttonContainer.appendChild(this.mode1Button);\r\n\t\tthis.buttonContainer.appendChild(this.mode2Button);\r\n\t\tthis.buttonContainer.appendChild(this.loginButton);\r\n\t\t\r\n\t\tthis.startButton.addEventListener('click', () => {\r\n\t\t\tsceneManager.goToScene(new _levelscene_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](targetMode));\r\n\t\t});\r\n\t\tthis.mode1Button.addEventListener('click', () => {\r\n\t\t\tthis.mode1Button.style.outline = '2px solid white';\r\n\t\t\tthis.mode2Button.style.outline = '2px solid black';\r\n\t\t\ttargetMode = 'classicMode';\r\n\t\t});\r\n\t\tthis.mode2Button.addEventListener('click', () => {\r\n\t\t\tthis.mode1Button.style.outline = '2px solid black';\r\n\t\t\tthis.mode2Button.style.outline = '2px solid white';\r\n\t\t\ttargetMode = 'classicMode';\r\n\t\t});\r\n\t}\r\n\texit(){\r\n\t\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(this.buttonContainer);\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainMenuScene);\n\n//# sourceURL=webpack://projectalpha/./public/js/mainmenuscene.js?");

/***/ }),

/***/ "./public/js/scenemanager.js":
/*!***********************************!*\
  !*** ./public/js/scenemanager.js ***!
  \***********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Duplicate export 'default' (24:7)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n| \\n> export default SceneManager;\");\n\n//# sourceURL=webpack://projectalpha/./public/js/scenemanager.js?");

/***/ }),

/***/ "./public/js/script.js":
/*!*****************************!*\
  !*** ./public/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./public/js/utils.js\");\n/* harmony import */ var _mainmenuscene_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainmenuscene.js */ \"./public/js/mainmenuscene.js\");\n/* harmony import */ var _levelscene_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./levelscene.js */ \"./public/js/levelscene.js\");\n/* harmony import */ var _scenemanager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenemanager.js */ \"./public/js/scenemanager.js\");\n﻿\r\n\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"Hi Hi Hi Hi Hi\");\r\n\r\nconst canvas = document.getElementById('canvas');\r\nconst buttonContainer = document.getElementById('buttonsContainer');\r\nconst togglesContainer = document.getElementById('togglesContainer');\r\nconst messageContainer = document.getElementById('messageContainer');\r\nmessageContainer.dataset.occupants = 0;\r\nlet checkState = true;\r\nlet gameExists = false;\r\n\r\n\r\n\r\n\r\n\r\nlet tilesData = [];\r\n\r\nconst tilesDataURL = '/get-tiles';\r\n\r\nasync function fetchDataFromServer() {\r\n  try {\r\n    const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(tilesDataURL); // Use Axios for POST request\r\n    if (response.status === 200) {\r\n      const data = response.data;\r\n      tilesData = data;\r\n      tilesData.forEach((tile_obj) => {\r\n        elementNames[tile_obj.elementName.toLowerCase()] = tile_obj.an;\r\n        elementNames[tile_obj.latinName.toLowerCase()] = tile_obj.an;\r\n      });\r\n    } else {\r\n      console.error('Failed to fetch data:', response.statusText);\r\n    }\r\n  } catch (error) {\r\n    console.error('Error fetching data:', error);\r\n  }\r\n}\r\n\r\nwindow.addEventListener('load', fetchDataFromServer);\r\n\r\nlet elementNames = {};\r\n\r\nconsole.log(elementNames);\r\n\r\n\r\nnew _scenemanager_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\r\nconst initialScene = new _levelscene_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('mainMenu', _scenemanager_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\r\nsceneManager.goToScene(new _levelscene_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('mainMenu'));\r\nconst pathname = window.location.pathname;\r\nconsole.log(pathname);\r\n\r\nconst classicCounterURL = '/get-counter';\r\n\r\nasync function fetchCounterValue() {\r\n  try {\r\n    const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(classicCounterURL); // Use Axios for POST request\r\n\r\n    if (response.status === 200) {\r\n      const data = response.data;\r\n      \r\n      const counterValue = data.value;\r\n      \r\n      console.log('Counter Value:', counterValue);\r\n    } else {\r\n      console.error('Failed to fetch counter value:', response.statusText);\r\n    }\r\n  } catch (error) {\r\n    console.error('Error fetching counter value:', error);\r\n  }\r\n}\r\n\r\nwindow.addEventListener('load', fetchCounterValue);\r\n\n\n//# sourceURL=webpack://projectalpha/./public/js/script.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eff1f482e7c5446cf2f5")
/******/ })();
/******/ 
/******/ }
);