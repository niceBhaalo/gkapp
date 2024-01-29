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

/***/ "./public/js/achievementwindow.js":
/*!****************************************!*\
  !*** ./public/js/achievementwindow.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showAchievements: () => (/* binding */ showAchievements)\n/* harmony export */ });\n/* harmony import */ var _fetchdatafromstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchdatafromstorage.js */ \"./public/js/fetchdatafromstorage.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./public/js/utils.js\");\n\r\n\r\n\r\nasync function showAchievements (levelid, mouseX, mouseY){\r\n\tconst response = await fetch('templates/achievementwindowtemplate.html');\r\n\tconst templateHtml = await response.text();\r\n\tconst achievementContent = document.createElement('div');\r\n\tachievementContent.innerHTML = templateHtml;\r\n\tconst canvas = document.getElementById('canvas');\r\n\tcanvas.appendChild(achievementContent);\r\n\tconsole.log(\"Huh\");\r\n\tconsole.log(achievementContent);\r\n\tconst achievements = (0,_fetchdatafromstorage_js__WEBPACK_IMPORTED_MODULE_0__.getAchievementsForLevel)(levelid);\r\n\tconst iconsContainer = document.getElementById('achievementIconsContainer');\r\n\tconst overlay = document.getElementById('achievementOverlay');\r\n\tconst sidebar = document.getElementById('achievementSidebar');\r\n\tsidebar.style.top = mouseY + 'px';\r\n    sidebar.style.right = `${window.innerWidth - mouseX}px`; // Adjust for the cursor's position\r\n\tconsole.log('Icons Container:', iconsContainer);\r\n\r\n\tachievements.forEach((achievement) => {\r\n\t\tconsole.log('Loading Icon');\r\n        const iconElement = document.createElement('img');\r\n        const imageSource = `../images/achievementicons/${achievement.internal_name}.png`;\r\n\t\ticonElement.classList.add('achievement-icon');\r\n        iconElement.src = imageSource;\r\n        iconElement.alt = achievement.internal_name; \r\n\t\tconst descriptionContainer = document.createElement('div');\r\n\t\tdescriptionContainer.classList.add('achievement-details');\r\n        iconsContainer.appendChild(iconElement);\r\n\t\tsidebar.appendChild(descriptionContainer);\r\n\t\ticonElement.classList.add('dimmed');\r\n\r\n\t\ticonElement.addEventListener('mouseenter', () => {\r\n\t\t\tshowDetails(achievement, descriptionContainer, iconElement);\r\n\t\t});\r\n\t\ticonElement.addEventListener('mouseleave', () => {\r\n\t\t\thideDetails(descriptionContainer);\r\n\t\t});\r\n    });\r\n\toverlay.addEventListener('click', () => {\r\n\t\tcanvas.removeChild(achievementContent);\r\n\t\toverlay.style.display = 'none';\r\n\t});\r\n}\r\nfunction showDetails(achievement, descriptionContainer, iconElement){\r\n\tdescriptionContainer.style.visibility = 'visible';\r\n\tconst iconRect = iconElement.getBoundingClientRect();\r\n\tconsole.log(\"Showing\");\r\n\tdescriptionContainer.style.top = `${iconRect.top}px`;\r\n\tdescriptionContainer.style.right = `${window.innerWidth - iconRect.left}px`;\r\n\tconst achievementName = document.createElement('div');\r\n\tachievementName.classList.add('achievement-name');\r\n\tachievementName.textContent = achievement.achievement_name;\r\n\tconst achievementDescription = document.createElement('div');\r\n\tachievementDescription.classList.add('achievement-description');\r\n\tachievementDescription.textContent = achievement.short_description;\r\n\tdescriptionContainer.appendChild(achievementName);\r\n\tdescriptionContainer.appendChild(achievementDescription);\r\n}\r\nfunction hideDetails(descriptionContainer){\r\n\tconsole.log(\"Hiding\");\r\n\tdescriptionContainer.style.visibility = 'hidden';\r\n\t(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(descriptionContainer);\r\n}\n\n//# sourceURL=webpack://projectalpha/./public/js/achievementwindow.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("64c38d5af8449545946d")
/******/ })();
/******/ 
/******/ }
);