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

/***/ "./public/js/sounds.js":
/*!*****************************!*\
  !*** ./public/js/sounds.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonPressSound: () => (/* binding */ buttonPressSound),\n/* harmony export */   gameCompleteSound: () => (/* binding */ gameCompleteSound),\n/* harmony export */   setupSound: () => (/* binding */ setupSound),\n/* harmony export */   tilePressSound: () => (/* binding */ tilePressSound),\n/* harmony export */   tileSuccessSound: () => (/* binding */ tileSuccessSound)\n/* harmony export */ });\nlet musicIsOn = localStorage.getItem('musicPreference') === 'on'; // Retrieve from local storage\r\nlet sfxIsOn = localStorage.getItem('sfxPreference') === 'on';     // Retrieve from local storage\r\n\r\nconst buttonPressElement = document.getElementById('sfxSoundButton');\r\nconst tilePressElement = document.getElementById('sfxSoundTile');\r\nconst tileSuccessElement = document.getElementById('sfxSuccess');\r\nconst gameSuccessElement = document.getElementById('sfxComplete');\r\n\r\nfunction setupSound(){\r\n    const musicButton = document.getElementById('musicButton');\r\n    const sfxButton = document.getElementById('sfxButton');\r\n    const backgroundMusic = document.getElementById('backgroundMusic');\r\n    createIcon(musicButton, 'musicsvg', 'music');\r\n    createIcon(sfxButton, 'sfxsvg', 'sfx');\r\n    updateIconState(musicButton, musicIsOn, 'music'); // Set the initial state\r\n    updateIconState(sfxButton, sfxIsOn, 'sfx');       // Set the initial state\r\n    if (musicIsOn){\r\n        backgroundMusic.play();\r\n    }\r\n    musicButton.addEventListener('click', function () {\r\n        musicIsOn = !musicIsOn; // Toggle the state\r\n        updateIconState(musicButton, musicIsOn, 'music');\r\n        localStorage.setItem('musicPreference', musicIsOn ? 'on' : 'off'); // Save to local storage\r\n        if (musicIsOn){\r\n            backgroundMusic.play();\r\n        } else if (!musicIsOn){\r\n            backgroundMusic.pause();\r\n        }\r\n    });\r\n\r\n    sfxButton.addEventListener('click', function () {\r\n        sfxIsOn = !sfxIsOn; // Toggle the state\r\n        updateIconState(sfxButton, sfxIsOn, 'sfx');\r\n        localStorage.setItem('sfxPreference', sfxIsOn ? 'on' : 'off'); // Save to local storage\r\n\r\n    });\r\n}\r\nfunction createIcon(button, svgId, iconName) {\r\n    const svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\r\n    svg.setAttribute('class', 'music-icon');\r\n    svg.setAttribute('id', svgId);\r\n\r\n    const use = document.createElementNS(\"http://www.w3.org/2000/svg\", \"use\");\r\n    use.setAttribute('class', 'centered-icon');\r\n\r\n    svg.appendChild(use);\r\n\r\n    button.appendChild(svg);\r\n    updateIconState(button, true, iconName); // Set the initial state\r\n}\r\n\r\nfunction updateIconState(button, isOn, iconName) {\r\n  const svg = button.querySelector('svg');\r\n  const use = svg.querySelector('use');\r\n  \r\n  const iconId = isOn ? `${iconName}on` : `${iconName}off`;\r\n  use.setAttribute('href', `#${iconId}`);\r\n}\r\n\r\nfunction buttonPressSound(){\r\n    buttonPressElement.play();\r\n}\r\nfunction tilePressSound(){\r\n    tilePressElement.play();\r\n}\r\nfunction tileSuccessSound(){\r\n    tileSuccessElement.play();\r\n}\r\nfunction gameCompleteSound(){\r\n    gameSuccessElement.play();\r\n}\n\n//# sourceURL=webpack://projectalpha/./public/js/sounds.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4aa0aa10226b6fb6875b")
/******/ })();
/******/ 
/******/ }
);