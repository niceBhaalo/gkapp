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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./public/js/utils.js\");\n/* harmony import */ var _levelscene_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levelscene.js */ \"./public/js/levelscene.js\");\n/* harmony import */ var _scenemanager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenemanager.js */ \"./public/js/scenemanager.js\");\n﻿\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"Hi Hi Hi Hi Hi\");\r\n\r\nconst canvas = document.getElementById('canvas');\r\nconst buttonContainer = document.getElementById('buttonsContainer');\r\nconst togglesContainer = document.getElementById('togglesContainer');\r\nconst messageContainer = document.getElementById('messageContainer');\r\nmessageContainer.dataset.occupants = 0;\r\nlet checkState = true;\r\nlet gameExists = false;\r\n\r\n\r\n\r\n\r\n\r\nlet tilesData = [];\r\n\r\nconst tilesDataURL = '/get-tiles';\r\n\r\nasync function fetchDataFromServer() {\r\n  try {\r\n    const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(tilesDataURL); // Use Axios for POST request\r\n    if (response.status === 200) {\r\n      const data = response.data;\r\n      tilesData = data;\r\n      tilesData.forEach((tile_obj) => {\r\n        elementNames[tile_obj.elementName.toLowerCase()] = tile_obj.an;\r\n        elementNames[tile_obj.latinName.toLowerCase()] = tile_obj.an;\r\n      });\r\n    } else {\r\n      console.error('Failed to fetch data:', response.statusText);\r\n    }\r\n  } catch (error) {\r\n    console.error('Error fetching data:', error);\r\n  }\r\n}\r\n\r\nwindow.addEventListener('load', fetchDataFromServer);\r\n\r\nlet elementNames = {};\r\n\r\nconsole.log(elementNames);\r\n\r\n\r\nnew _scenemanager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\nconst initialScene = new _levelscene_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('mainMenu', _scenemanager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\nsceneManager.goToScene(new _levelscene_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('mainMenu'));\r\nconst pathname = window.location.pathname;\r\nconsole.log(pathname);\r\n\r\nconst classicCounterURL = '/get-counter';\r\n\r\nasync function fetchCounterValue() {\r\n  try {\r\n    const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(classicCounterURL); // Use Axios for POST request\r\n\r\n    if (response.status === 200) {\r\n      const data = response.data;\r\n      \r\n      const counterValue = data.value;\r\n      \r\n      console.log('Counter Value:', counterValue);\r\n    } else {\r\n      console.error('Failed to fetch counter value:', response.statusText);\r\n    }\r\n  } catch (error) {\r\n    console.error('Error fetching counter value:', error);\r\n  }\r\n}\r\n\r\nwindow.addEventListener('load', fetchCounterValue);\r\n\n\n//# sourceURL=webpack://projectalpha/./public/js/script.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ff311cddbd9d1791f0a9")
/******/ })();
/******/ 
/******/ }
);