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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   metaData: () => (/* binding */ metaData)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! spark-md5 */ \"./node_modules/spark-md5/spark-md5.js\");\n/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\nconst tilesDataURL = '/get-tiles';\r\nconst classicCounterURL = '/get-counter';\r\nconst levelDataURL = '/get-levels';\r\nconst achievementDataURL = '/get-achievements';\r\n\r\nasync function metaData() {\r\n    try {\r\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(classicCounterURL);\r\n        if (response.status === 200) {\r\n            const data = response.data;\r\n            const version = data.version;\r\n            const localVersion = getVersionFromLocalStorage();\r\n\r\n            if (localVersion !== version || true) {\r\n                const tilesData = await fetchDataAndHash(tilesDataURL, 'tilesData');\r\n                const levelData = await fetchDataAndHash(levelDataURL, 'levelData');\r\n                const achievementData = await fetchDataAndHash(achievementDataURL, 'achievementData');\r\n\r\n                storeDataAndHash('tilesData', tilesData);\r\n                storeDataAndHash('levelData', levelData);\r\n                storeDataAndHash('achievementData', achievementData);\r\n\r\n                setVersionInLocalStorage(version);\r\n            } else {}\r\n\r\n            const counterValue = data.counter;\r\n            console.log('Counter Value:', counterValue);\r\n\r\n        } else {\r\n            console.error('Failed to fetch counter value:', response.statusText);\r\n        }\r\n    } catch (error) {\r\n        console.error('Error fetching counter value:', error);\r\n    }\r\n}\r\n\r\nasync function fetchDataAndHash(url, storageKey) {\r\n    try {\r\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(url);\r\n        if (response.status === 200) {\r\n            const { data, hash } = response.data; // Extract data and hash directly from the response\r\n            console.log('Data Fetched: ', storageKey);\r\n            return { data, hash };\r\n        } else {\r\n            console.error(`Failed to fetch data from ${url}:`, response.statusText);\r\n            return { data: null, hash: null };\r\n        }\r\n    } catch (error) {\r\n        console.error(`Error fetching data from ${url}:`, error);\r\n        return { data: null, hash: null };\r\n    }\r\n}\r\n\r\n\r\nfunction storeDataAndHash(storageKey, { data, hash }) {\r\n    if (data !== null && hash !== null) {\r\n            const serializedData = JSON.stringify(data);\r\n\r\n        localStorage.setItem(storageKey, serializedData);\r\n        console.log(storageKey);\r\n        console.log(serializedData);\r\n        console.log(hash);\r\n        localStorage.setItem(`${storageKey}Hash`, hash);\r\n        \r\n    }\r\n}\r\n\r\nfunction checkHash(storageKey) {\r\n    const storedHash = localStorage.getItem(`${storageKey}Hash`);\r\n    const storedData = localStorage.getItem(storageKey);\r\n\r\n    if (storedHash && storedData) {\r\n        const recalculatedHash = spark_md5__WEBPACK_IMPORTED_MODULE_0___default().hash(storedData);\r\n        return storedHash === recalculatedHash;\r\n    }\r\n    return false;\r\n}\r\n\r\nfunction getVersionFromLocalStorage() {\r\n    return localStorage.getItem('version');\r\n}\r\n\r\nfunction setVersionInLocalStorage(newValue) {\r\n    localStorage.setItem('version', newValue);\r\n}\r\n\n\n//# sourceURL=webpack://projectalpha/./public/js/fetchdata.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("178fade359f1bb66c86e")
/******/ })();
/******/ 
/******/ }
);