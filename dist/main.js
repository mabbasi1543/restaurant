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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\n\nconst renderContact = (parent) => {\n    const box = (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parent, \"div\", \"\", \"box\")\n    ;(0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(box, \"p\", \"contact info:\");\n    (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(box, \"br\");\n    (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(box, \"p\", \"+1 123 123 1234\");\n    (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(box, \"p\", \"contact@test.com\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\n\nconst renderHome = (parent) => {\n    const box = (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parent, \"div\", \"\", \"box\")\n    const img = (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(box, \"img\")\n    img.src = \"https://www.recipetineats.com/wp-content/uploads/2017/11/Chicken-Doner-Kebab-2.jpg?resize=650,975\";\n    (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(box, \"br\");\n    (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(box, \"h4\", \"Welcome to kebabland\")\n    ;(0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(box, \"h5\", \"Hope you enjoy our food\")\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\nconst menu = [\n    {\n        name: \"gyros\",\n        rank: 1,\n        img: \"https://cdn.tasteatlas.com/images/dishes/254a002208804e0fa92fa354655fdaac.jpg?mw=1300\",\n        url: \"https://www.tasteatlas.com/gyros\",\n    },\n    {\n        name: \"souvlaki\",\n        rank: 2,\n        img: \"https://cdn.tasteatlas.com//images/dishes/90c413e6606d4c69af350324c8e69835.jpg?w=905&h=510\",\n        url: \"https://www.tasteatlas.com/souvlaki\",\n    },\n    {\n        name: \"shawarma\",\n        rank: 3,\n        img: \"https://cdn.tasteatlas.com//images/dishes/a2a68bb8904548639a51bbb609c50821.jpg?w=905&h=510\",\n        url: \"https://www.tasteatlas.com/shawarma\",\n    },\n    {\n        name: \"doner kebab\",\n        rank: 4,\n        img: \"https://cdn.tasteatlas.com//images/dishes/1681a82d605f4791963eb268acf0978d.jpg?w=905&h=510\",\n        url: \"https://www.tasteatlas.com/doner-kebab\",\n    },\n    {\n        name: \"adana kebab\",\n        rank: 5,\n        img: \"https://cdn.tasteatlas.com//images/dishes/3ab81ec46f604f85bcc3cc51fd17c446.jpg?w=905&h=510\",\n        url: \"https://www.tasteatlas.com/adana-kebab\",\n    },\n\n]\nconst renderMenu = (parent) => {\n    const box = (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parent, \"div\", \"\", \"boxGrid\")\n    menu.forEach(element => {\n        const item = (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(box, \"div\", \"\", \"gridEl\")\n        const img = (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, \"img\")\n        img.src = element.img;\n        (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, \"br\");\n        (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, \"h3\", `#${element.rank}`)\n        ;(0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, \"h3\", element.name)\n        const a = (0,_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, \"a\", \"info\")\n        a.href = element.url;\n    });\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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