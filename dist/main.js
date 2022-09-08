/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\n\nconst renderContact = (parent) => {\n    (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parent, \"div\", \"contact\")\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\n\nconst renderHome = (parent) => {\n    (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parent, \"div\", \"home\")\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _structure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structure */ \"./src/structure.js\");\n\nconsole.log(\"loading structure ...\");\n(0,_structure__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconsole.log(\"structure loaded.\");\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\n\nconst renderMenu = (parent) => {\n    (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parent, \"div\", \"menu\")\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/structure.js":
/*!**************************!*\
  !*** ./src/structure.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconst containerEl = document.getElementById(\"container\")\nconst header = () => {\n    const headerEl = (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(containerEl, \"header\");\n\n    const homeEl = (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(headerEl, \"button\", \"home\", \"nav\")\n    homeEl.addEventListener(\"click\", () => middle(\"home\"))\n\n    const menuEl = (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(headerEl, \"button\", \"menu\", \"nav\")\n    menuEl.addEventListener(\"click\", () => middle(\"menu\"))\n\n    const contactEl = (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(headerEl, \"button\", \"contact\", \"nav\")\n    contactEl.addEventListener(\"click\", () => middle(\"contact\"))\n\n}\n\nconst middle = (hrefString = \"home\") => {\n\n    if (document.getElementsByClassName(\"middle\").length == 0) {\n        (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(containerEl, \"section\", \"\", \"middle\")\n    }\n    let middle = document.getElementsByClassName(\"middle\")[0];\n    middle.innerHTML = \"\";\n\n    console.log(hrefString)\n    switch (hrefString) {\n        case \"home\":\n            ;(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(middle);\n            break;\n        case \"menu\":\n            (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(middle);\n            break;\n        case \"contact\":\n            (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(middle);\n            break;\n        default:\n            (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(middle);\n\n    }\n}\n\nconst footer = () => {\n    ;(0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(containerEl, \"footer\", \"Designed by SottaByte\")\n\n}\nconst structure = () => {\n    console.log('loading ... ')\n    header()\n    middle()\n    footer()\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (structure);\n\n//# sourceURL=webpack://restaurant/./src/structure.js?");

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createElement = (parent, tag, text = \"\", ...classes) => {\n    const temp = document.createElement(tag);\n    if (classes.length > 0) {\n        classes.forEach((item) => temp.classList.add(item))\n    }\n    if (text == \"\") {\n        parent.appendChild(temp)\n    } else {\n        temp.innerText = text\n        parent.appendChild(temp)\n    }\n    return (temp)\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);\n\n//# sourceURL=webpack://restaurant/./src/utility.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;