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

/***/ "./public/js/script.js":
/*!*****************************!*\
  !*** ./public/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _scenemanager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenemanager.js */ \"./public/js/scenemanager.js\");\n/* harmony import */ var _fetchdata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchdata.js */ \"./public/js/fetchdata.js\");\n﻿\r\n\r\n\r\n\r\n\r\nnew _scenemanager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n_scenemanager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].goToScene('mainMenu');\r\nconst pathname = window.location.pathname;\r\nconsole.log(pathname);\r\n\r\nconst classicCounterURL = '/get-counter';\r\n\r\nasync function fetchCounterValue() {\r\n    try {\r\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(classicCounterURL); // Use Axios for POST request\r\n\r\n        if (response.status === 200) {\r\n            const data = response.data;\r\n            const counterValue = data.counter;\r\n            const version = data.version;\r\n            const localVersion = getVersionFromLocalStorage();\r\n        if (localVersion !== version){\r\n            fetchTileData();\r\n            console.log('TileData Fetched');\r\n        }\r\n        console.log('Counter Value:', counterValue);\r\n    } else {\r\n      console.error('Failed to fetch counter value:', response.statusText);\r\n    }\r\n  } catch (error) {\r\n    console.error('Error fetching counter value:', error);\r\n  }\r\n}\r\nasync function fetchTileData() {\r\n  try {\r\n    const { tilesData, elementNames } = await _fetchdata_js__WEBPACK_IMPORTED_MODULE_1__.tileData();\r\n    localStorage.setItem('tilesData', JSON.stringify(tilesData));\r\n    localStorage.setItem('elementNames', JSON.stringify(elementNames));\r\n  } catch (error) {\r\n    console.error('Error handling data on load:', error);\r\n  }\r\n}\r\n\r\nfunction getVersionFromLocalStorage() {\r\n    if ('version' in localStorage) {\r\n        return localStorage.getItem('version');\r\n    } else {\r\n        return null;\r\n    }\r\n}\r\n\r\nwindow.addEventListener('load', fetchCounterValue);\r\n\n\n//# sourceURL=webpack://projectalpha/./public/js/script.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e1a832760e902aa50cf8")
/******/ })();
/******/ 
/******/ }
);