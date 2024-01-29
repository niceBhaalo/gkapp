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

/***/ "./public/js/fetchdatafromstorage.js":
/*!*******************************************!*\
  !*** ./public/js/fetchdatafromstorage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAchievementData: () => (/* binding */ getAchievementData),\n/* harmony export */   getLevelData: () => (/* binding */ getLevelData)\n/* harmony export */ });\nfunction getLevelData() {\r\n    try {\r\n        const levelDataString = localStorage.getItem('levelData');\r\n        if (levelDataString === null) {\r\n            console.log('Failed: Missing levelData or achievementData in localStorage');\r\n            return null;\r\n        }\r\n        const levelData = JSON.parse(levelDataString);\r\n        return levelData;\r\n    } catch (error) {\r\n        console.error('Error parsing data from local storage for level and achievements:', error);\r\n        return null;\r\n    }\r\n}\r\nfunction getAchievementData() {\r\n    try {\r\n        const achievementDataString = localStorage.getItem('achievementData');\r\n        if (achievementDataString === null) {\r\n            console.log('Failed: Missing levelData or achievementData in localStorage');\r\n            return null;\r\n        }\r\n        const achievementData = JSON.parse(achievementDataString);\r\n        return achievementData;\r\n    } catch (error) {\r\n        console.error('Error parsing data from local storage for level and achievements:', error);\r\n        return null;\r\n    }\r\n}\r\n\r\nfunction parseJsonSafely(jsonString) {\r\n    try {\r\n        return JSON.parse(jsonString);\r\n    } catch (error) {\r\n        console.error('Error parsing JSON:', error);\r\n        return null;\r\n    }\r\n}\n\n//# sourceURL=webpack://projectalpha/./public/js/fetchdatafromstorage.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9757977a1b6b29b5b334")
/******/ })();
/******/ 
/******/ }
);