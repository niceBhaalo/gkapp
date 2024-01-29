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

/***/ "./public/js/fetchdata.js":
/*!********************************!*\
  !*** ./public/js/fetchdata.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   metaData: () => (/* binding */ metaData)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\r\n\r\nconst tilesDataURL = '/get-tiles';\r\n\r\nasync function tileData() {\r\n  let tilesData = [];\r\n  let elementNames = {};\r\n\r\n  try {\r\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(tilesDataURL);\r\n    if (response.status === 200) {\r\n      const data = response.data;\r\n      tilesData = data;\r\n      tilesData.forEach((tile_obj) => {\r\n        elementNames[tile_obj.elementName.toLowerCase()] = tile_obj.an;\r\n        elementNames[tile_obj.latinName.toLowerCase()] = tile_obj.an;\r\n      });\r\n    } else {\r\n      console.error('Failed to fetch data:', response.statusText);\r\n    }\r\n  } catch (error) {\r\n    console.error('Error fetching data:', error);\r\n  }\r\n  return { tilesData, elementNames };\r\n}\r\nconst classicCounterURL = '/get-counter';\r\n\r\nasync function metaData() {\r\n    try {\r\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(classicCounterURL); // Use Axios for POST request\r\n\r\n        if (response.status === 200) {\r\n            const data = response.data;\r\n            const counterValue = data.counter;\r\n            const version = data.version;\r\n            const localVersion = getVersionFromLocalStorage();\r\n        if (localVersion !== version){\r\n            fetchTileData();\r\n            console.log('TileData Fetched');\r\n            setVersionInLocalStorage(version);\r\n            console.log('Version: ', version);\r\n            console.log('Local Version: ', localVersion);\r\n        }\r\n        console.log('Counter Value:', counterValue);\r\n    } else {\r\n      console.error('Failed to fetch counter value:', response.statusText);\r\n    }\r\n  } catch (error) {\r\n    console.error('Error fetching counter value:', error);\r\n  }\r\n}\r\nasync function fetchTileData() {\r\n  try {\r\n    const { tilesData, elementNames } = await tileData();\r\n    localStorage.setItem('tilesData', JSON.stringify(tilesData));\r\n    localStorage.setItem('elementNames', JSON.stringify(elementNames));\r\n  } catch (error) {\r\n    console.error('Error handling data on load:', error);\r\n  }\r\n}\r\n\r\nfunction getVersionFromLocalStorage() {\r\n    if ('version' in localStorage) {\r\n        return localStorage.getItem('version');\r\n    } else {\r\n        return null;\r\n    }\r\n}\r\nfunction setVersionInLocalStorage(newValue) {\r\n  try {\r\n    const stringValue = JSON.stringify(newValue);\r\n    localStorage.setItem('version', stringValue);\r\n    return true;\r\n  } catch (error) {\r\n    console.error('Error setting version in local storage:', error);\r\n    return false;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://projectalpha/./public/js/fetchdata.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3bb9c4c74804fab63538")
/******/ })();
/******/ 
/******/ }
);