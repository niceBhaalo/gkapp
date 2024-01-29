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

/***/ "./public/js/utils.js":
/*!****************************!*\
  !*** ./public/js/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayInfo: () => (/* binding */ displayInfo),\n/* harmony export */   isLoggedIn: () => (/* binding */ isLoggedIn),\n/* harmony export */   moveTileToCorrect: () => (/* binding */ moveTileToCorrect),\n/* harmony export */   removeAllChildren: () => (/* binding */ removeAllChildren)\n/* harmony export */ });\nfunction removeAllChildren(element) {\r\n    const children = Array.from(element.childNodes);\r\n    \r\n    for (const child of children) {\r\n        if (child.nodeType === Node.ELEMENT_NODE) {\r\n            // Remove element nodes\r\n            element.removeChild(child);\r\n        }\r\n    }\r\n}\r\n\r\nfunction isLoggedIn(){\r\n    return false;\r\n\r\n}\r\n\r\n\r\nfunction moveTileToCorrect(tileElement, outlineElement){\r\n\tconst distanceX = parseFloat(outlineElement.style.left) - parseFloat(tileElement.style.left);\r\n\tconst distanceY = parseFloat(outlineElement.style.top) - parseFloat(tileElement.style.top);\r\n\ttileElement.style.left = `${parseFloat(tileElement.style.left) + distanceX}vw`;\r\n\ttileElement.style.top = `${parseFloat(tileElement.style.top) + distanceY}vw`;\r\n\ttileElement.dataset.placed = 'true';\r\n\ttileElement.dataset.correctlyPlaced = 'true';\r\n\ttileElement.style.cursor = 'default';\r\n\ttileElement.classList.add('transition-class');\r\n\tsetTimeout(() => {\r\n\t\ttileElement.classList.remove('transition-class');\r\n\t\ttileElement.classList.add('correctlyPlaced');\r\n\t\ttileElement.classList.remove('incorrectlyPlaced');\r\n\t\ttileElement.display = 'block';\r\n\t}, 500); \r\n}\r\n\r\nfunction displayInfo (elmnt){\r\n\tconst infoContainer = document.getElementById('infoContainer');\r\n\tconst englishName = createInfoElement(0.5);\r\n\tenglishName.textContent = elmnt.dataset.englishName;\r\n\tif (elmnt.dataset.hasLatin === '1'){\r\n\t\tconst scientificName = createInfoElement(2.5);\r\n\t\tscientificName.textContent = elmnt.dataset.latinName;\r\n\t}\r\n\tconst atomicNumber = createInfoElement(4.5);\r\n\tatomicNumber.textContent = 'Atomic Number: ' + elmnt.dataset.elementID;\r\n\tconst atomicMass = createInfoElement(6.5);\r\n\tatomicMass.textContent = 'Atomic Mass: ' + elmnt.dataset.am;\r\n\tconst category = createInfoElement(8.5);\r\n\tcategory.textContent = elmnt.dataset.category;\r\n\tconst state = createInfoElement(10.5);\r\n\tstate.textContent = elmnt.dataset.state;\r\n\tconst year = createInfoElement(12.5);\r\n\tyear.textContent = elmnt.dataset.discoveryYear;\r\n\tconst stableIsotopes = createInfoElement(14.5);\r\n\tif (elmnt.dataset.stableIsotopes === '0'){\r\n\t\tstableIsotopes.textContent = 'No Stable Isotopes';\r\n\t}\r\n\telse {\r\n\t\tconst atomicMasses = elmnt.dataset.stableIsotopes.split(' ');\r\n\t\tconst superscriptedAtomicMasses = atomicMasses.map(atomicMass => convertToSuperscript(atomicMass));\r\n\t\tconst isotopesText = 'Stable Isotopes: ' + superscriptedAtomicMasses.join(elmnt.dataset.symbol + ' ') + elmnt.dataset.symbol;\r\n\t\tstableIsotopes.textContent = isotopesText;\r\n\t}\r\n\tconst electronConfiguration = createInfoElement(16.5);\r\n\telectronConfiguration.textContent = convertDigitsToSuperscriptForElectronConfiguration(elmnt.dataset.electronConfiguration);\r\n\tconst meltingPoint = createInfoElement(18.5);\r\n\tif (elmnt.dataset.meltingPoint === '-'){\r\n\t\tmeltingPoint.textContent = 'Melting Point Not Available';\r\n\t}\r\n\telse if (elmnt.dataset.meltingPoint === 'Sublimes'){\r\n\t\tmeltingPoint.textContent = 'Sublimes at atmospheric pressure';\r\n\t}\r\n\telse {\r\n\t\tmeltingPoint.textContent = 'Melting Point: ' + elmnt.dataset.meltingPoint + \"�C\";\r\n\t}\r\n\tconst boilingPoint = createInfoElement(20.5);\r\n\tif (elmnt.dataset.boilingPoint === '-'){\r\n\t\tboilingPoint.textContent = 'Boiling Point Not Available';\r\n\t}\r\n\telse {\r\n\t\tboilingPoint.textContent = 'Boiling Point: ' + elmnt.dataset.boilingPoint + \"�C\";\r\n\t}\r\n\tconst period = createInfoElement(22.5);\r\n\tperiod.textContent = 'Period: ' + elmnt.dataset.period;\r\n\tconst block = createInfoElement(24.5);\r\n\tblock.textContent = elmnt.dataset.block + '-block';\r\n\tconst sources = createInfoElement(26.5);\r\n\tsources.textContent = elmnt.dataset.source.trim().replace(/ \\+/g, ',');\r\n\tfunction createInfoElement (topPosition){\r\n\t\tconst infoElement = document.createElement('div');\r\n\t\tinfoElement.classList.add('infoText');\r\n\t\tinfoContainer.append(infoElement);\r\n\t\tinfoElement.style.top = topPosition + 'vw';\r\n\t\tinfoElement.style.right = 1 + 'vw';\r\n\t\treturn infoElement;\r\n\t}\r\n}\r\n\r\n\r\nfunction convertToSuperscript(text) {\r\n    const superscriptMap = {\r\n        '0': '?', '1': '�', '2': '�', '3': '�', '4': '?',\r\n        '5': '?', '6': '?', '7': '?', '8': '?', '9': '?'\r\n    };\r\n    return text.replace(/\\d/g, match => superscriptMap[match]);\r\n}\r\nfunction convertDigitsToSuperscriptForElectronConfiguration(inputString) {\r\n    const superscriptMap = {\r\n        '0': '?', '1': '�', '2': '�', '3': '�', '4': '?',\r\n        '5': '?', '6': '?', '7': '?', '8': '?', '9': '?'\r\n    };\r\n    let outputString = '';\r\n    let isPreviousCharSpace = true; // Initialize as true to handle digits at the beginning\r\n    for (const char of inputString) {\r\n        if (/\\d/.test(char)) {\r\n            outputString += isPreviousCharSpace ? char : superscriptMap[char];\r\n        } else {\r\n            outputString += char;\r\n        }\r\n        isPreviousCharSpace = char === ' ';\r\n    }\r\n    return outputString.trim();\r\n}\n\n//# sourceURL=webpack://projectalpha/./public/js/utils.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d409e66c78907340f493")
/******/ })();
/******/ 
/******/ }
);