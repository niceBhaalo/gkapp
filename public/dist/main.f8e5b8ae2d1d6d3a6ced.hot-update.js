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

/***/ "./public/js/mainmenu.js":
/*!*******************************!*\
  !*** ./public/js/mainmenu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scenemanager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenemanager.js */ \"./public/js/scenemanager.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./public/js/utils.js\");\n\r\n\r\n\r\nconst canvas = document.getElementById('canvas');\r\n//const { levelData, achievementData } = getLevelDataFromStorage();\r\nclass MainMenu {\r\n    init() {\r\n    const { levelData, achievementData } = getLevelDataFromStorage();\r\n    this.levels = levelData;\r\n        this.levels.forEach(level => {\r\n            if (level.production_ready === 1){\r\n                const tile = document.createElement('div');\r\n                tile.classList.add('level-tile');\r\n\r\n                const nameDiv = document.createElement('div');\r\n                nameDiv.classList.add('level-name');\r\n                nameDiv.textContent = level.display_name;\r\n\r\n                const iconsDiv = document.createElement('div');\r\n                iconsDiv.classList.add('level-icons');\r\n\r\n                const scoresDiv = document.createElement('div');\r\n                scoresDiv.classList.add('level-scores');\r\n\r\n                const startButton = document.createElement('button');\r\n                startButton.classList.add('start-button');\r\n                startButton.textContent = 'Start';\r\n\r\n                startButton.addEventListener('click', () => {\r\n                console.log(level.internal_name);\r\n\t\t\t        _scenemanager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].goToScene(level.internal_name);\r\n\t\t        });\r\n                tile.appendChild(nameDiv);\r\n                tile.appendChild(iconsDiv);\r\n                tile.appendChild(scoresDiv);\r\n                tile.appendChild(startButton);\r\n\r\n                canvas.appendChild(tile);\r\n            }\r\n        });\r\n    }\r\n    exit(){\r\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(canvas);\r\n\r\n    }\r\n}\r\nfunction getLevelDataFromStorage() {\r\n    try {\r\n        const levelDataString = localStorage.getItem('levelData');\r\n        const achievementDataString = localStorage.getItem('achievementData');\r\n\r\n        console.log('LEVEL DATA:');\r\n        console.log(levelDataString);\r\n        console.log('ACHIEVEMENT DATA:');\r\n        console.log(achievementDataString);\r\n\r\n        // Check if the retrieved strings are not null or undefined\r\n        if (levelDataString === null || achievementDataString === null) {\r\n            console.log('Failed: Missing levelData or achievementData in localStorage');\r\n            return null;\r\n        }\r\n\r\n        // Parse the JSON strings\r\n        const levelData = parseJsonSafely(levelDataString) || { data: undefined };\r\n        const achievementData = parseJsonSafely(achievementDataString) || { data: undefined };\r\n\r\n        // Check if the parsed data is not undefined\r\n        if (levelData.data === undefined || achievementData.data === undefined) {\r\n            console.log('Failed: Unable to parse data from localStorage');\r\n            return null;\r\n        }\r\n\r\n        return { levelData: levelData.data, achievementData: achievementData.data };\r\n    } catch (error) {\r\n        console.error('Error parsing data from local storage for level and achievements:', error);\r\n        return null;\r\n    }\r\n}\r\n\r\n\r\n// A helper function to safely parse JSON\r\nfunction parseJsonSafely(jsonString) {\r\n    try {\r\n        return JSON.parse(jsonString);\r\n    } catch (error) {\r\n        console.error('Error parsing JSON:', error);\r\n        return null;\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainMenu);\n\n//# sourceURL=webpack://projectalpha/./public/js/mainmenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cd67d9006c1265fddc1d")
/******/ })();
/******/ 
/******/ }
);