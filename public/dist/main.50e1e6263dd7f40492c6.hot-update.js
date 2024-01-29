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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scenemanager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenemanager.js */ \"./public/js/scenemanager.js\");\n/* harmony import */ var _fetchdata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchdata.js */ \"./public/js/fetchdata.js\");\n﻿\r\n\r\n\r\nasync function initializeApp() {\r\n    await (0,_fetchdata_js__WEBPACK_IMPORTED_MODULE_1__.metaData)();\r\n    await (0,_fetchdata_js__WEBPACK_IMPORTED_MODULE_1__.loadIcons)();\r\n    new _scenemanager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    _scenemanager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].goToScene('menu');\r\n    \r\n    let musicIsOn = localStorage.getItem('musicPreference') === 'on'; // Retrieve from local storage\r\n    let sfxIsOn = localStorage.getItem('sfxPreference') === 'on';     // Retrieve from local storage\r\n    const musicButton = document.getElementById('musicButton');\r\n    const sfxButton = document.getElementById('sfxButton');\r\n\r\n    createIcon(musicButton, 'musicsvg', 'music');\r\n    createIcon(sfxButton, 'sfxsvg', 'sfx');\r\n    updateIconState(musicButton, musicIsOn, 'music'); // Set the initial state\r\n    updateIconState(sfxButton, sfxIsOn, 'sfx');       // Set the initial state\r\n\r\n    musicButton.addEventListener('click', function () {\r\n        musicIsOn = !musicIsOn; // Toggle the state\r\n        updateIconState(musicButton, musicIsOn, 'music');\r\n        localStorage.setItem('musicPreference', musicIsOn ? 'on' : 'off'); // Save to local storage\r\n\r\n    });\r\n\r\n    sfxButton.addEventListener('click', function () {\r\n        sfxIsOn = !sfxIsOn; // Toggle the state\r\n        updateIconState(sfxButton, sfxIsOn, 'sfx');\r\n        localStorage.setItem('sfxPreference', sfxIsOn ? 'on' : 'off'); // Save to local storage\r\n\r\n    });\r\n \r\n}\r\n\r\nwindow.addEventListener('load', initializeApp);\r\n\r\nfunction createIcon(button, svgId, iconName) {\r\n    const svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\r\n    svg.setAttribute('class', 'icon');\r\n    svg.setAttribute('id', svgId);\r\n\r\n    const use = document.createElementNS(\"http://www.w3.org/2000/svg\", \"use\");\r\n    svg.appendChild(use);\r\n\r\n    button.appendChild(svg);\r\n    updateIconState(button, true, iconName); // Set the initial state\r\n}\r\n\r\nfunction updateIconState(button, isOn, iconName) {\r\n  const svg = button.querySelector('svg');\r\n  const use = svg.querySelector('use');\r\n  \r\n  const iconId = isOn ? `${iconName}-on` : `${iconName}-off`;\r\n  use.setAttribute('href', `#${iconId}`);\r\n  \r\n  // You can also add additional logic here based on the state change\r\n  console.log(`${iconName} is now ${isOn ? 'on' : 'off'}`);\r\n}\n\n//# sourceURL=webpack://projectalpha/./public/js/script.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("000e65b380ba77395a85")
/******/ })();
/******/ 
/******/ }
);