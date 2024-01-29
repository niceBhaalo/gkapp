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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonPressSound: () => (/* binding */ buttonPressSound),\n/* harmony export */   gameCompleteSound: () => (/* binding */ gameCompleteSound),\n/* harmony export */   setupSound: () => (/* binding */ setupSound),\n/* harmony export */   tileFailureSound: () => (/* binding */ tileFailureSound),\n/* harmony export */   tilePressSound: () => (/* binding */ tilePressSound),\n/* harmony export */   tileSuccessSound: () => (/* binding */ tileSuccessSound)\n/* harmony export */ });\nlet musicIsOn = 'off'; // Retrieve from local storage\r\nlet sfxIsOn = localStorage.getItem('sfxPreference') === 'on';     // Retrieve from local storage\r\n\r\nconst buttonPressElement = document.getElementById('sfxSoundButton');\r\nconst tilePressElement = document.getElementById('sfxSoundTile');\r\nconst tileSuccessElement = document.getElementById('sfxSuccess');\r\nconst gameSuccessElement = document.getElementById('sfxComplete');\r\nconst tileFailureElement = document.getElementById('sfxFailure');\r\nconst settingsElement = document.getElementById('settings');\r\n\r\nfunction setupSound(){\r\n    const musicButton = document.getElementById('musicButton');\r\n    const sfxButton = document.getElementById('sfxButton');\r\n    const backgroundMusic = document.getElementById('backgroundMusic');\r\n    createMusicIcon(musicButton);\r\n    createSFXIcon(sfxButton);\r\n\r\n    musicButton.addEventListener('click', function () {\r\n        musicIsOn = !musicIsOn; // Toggle the state\r\n        updateIconState(musicButton, musicIsOn, 'music');\r\n        localStorage.setItem('musicPreference', musicIsOn ? 'on' : 'off'); // Save to local storage\r\n        if (musicIsOn){\r\n            backgroundMusic.play();\r\n        } else if (!musicIsOn){\r\n            backgroundMusic.pause();\r\n        }\r\n    });\r\n\r\n    sfxButton.addEventListener('click', function () {\r\n        sfxIsOn = !sfxIsOn; // Toggle the state\r\n        updateIconState(sfxButton, sfxIsOn, 'sfx');\r\n        localStorage.setItem('sfxPreference', sfxIsOn ? 'on' : 'off'); // Save to local storage\r\n    });\r\n    setupSettings();\r\n}\r\nfunction createMusicIcon(button) {\r\n    const svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\r\n    svg.setAttribute('class', 'music-icon');\r\n    svg.setAttribute('id', 'musicsvg');\r\n\r\n    const use = document.createElementNS(\"http://www.w3.org/2000/svg\", \"use\");\r\n    use.setAttribute('class', 'centered-icon');\r\n\r\n    svg.appendChild(use);\r\n\r\n    button.appendChild(svg);\r\n    updateIconState(button, false, 'music'); // Set the initial state\r\n}\r\nfunction createSFXIcon(button) {\r\n    const svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\r\n    svg.setAttribute('class', 'music-icon');\r\n    svg.setAttribute('id', 'sfxsvg');\r\n\r\n    const use = document.createElementNS(\"http://www.w3.org/2000/svg\", \"use\");\r\n    use.setAttribute('class', 'centered-icon');\r\n\r\n    svg.appendChild(use);\r\n\r\n    button.appendChild(svg);\r\n    updateIconState(button, true, 'sfx'); // Set the initial state\r\n}\r\n\r\nfunction setupSettings(){\r\n    const svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\r\n    svg.setAttribute('class', 'music-icon');\r\n    svg.setAttribute('id', 'settingssvg');\r\n    const use = document.createElementNS(\"http://www.w3.org/2000/svg\", \"use\");\r\n    use.setAttribute('class', 'centered-icon');\r\n    use.setAttribute('href', 'settingsicon');\r\n    svg.appendChild(use);\r\n}\r\nfunction updateIconState(button, isOn, iconName) {\r\n  const svg = button.querySelector('svg');\r\n  const use = svg.querySelector('use');\r\n  \r\n  const iconId = isOn ? `${iconName}on` : `${iconName}off`;\r\n  use.setAttribute('href', `#${iconId}`);\r\n}\r\n\r\nfunction buttonPressSound(){\r\n    if(sfxIsOn){\r\n        buttonPressElement.play();\r\n    }\r\n}\r\nfunction tilePressSound(){\r\n        if(sfxIsOn){\r\n    tilePressElement.play();\r\n    }\r\n}\r\nfunction tileSuccessSound(){\r\n    tileSuccessElement.currentTime = 0;\r\n\r\n        if(sfxIsOn){\r\n    tileSuccessElement.play();\r\n    }\r\n}\r\nfunction gameCompleteSound(){\r\n    if(sfxIsOn){\r\n    gameSuccessElement.play();\r\n    }\r\n}\r\nfunction tileFailureSound(){\r\n        if(sfxIsOn){\r\n    tileFailureElement.play();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://projectalpha/./public/js/sounds.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5e737584dd41dc137b03")
/******/ })();
/******/ 
/******/ }
);