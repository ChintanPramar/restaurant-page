/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/contact.js":
      /*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");\n\r\n\r\nfunction createContact() {\r\n  const main = document.createElement("main");\r\n\r\n  main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.paragraph)("I am from Gujarat.", "text-md"));\r\n  main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.paragraph)("Contact Us: +91 123-456-7890", ""));\r\n  main.appendChild(\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.paragraph)("Address: Lorem ipsum dolor sit amet consectetur.", "")\r\n  );\r\n  main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.paragraph)("Thank you for coming here.", ""));\r\n\r\n  return main;\r\n}\r\n\r\nfunction showContact() {\r\n  const content = document.getElementById("content");\r\n  content.textContent = "";\r\n  content.appendChild(createContact());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showContact);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?'
        );

        /***/
      },

    /***/ "./src/home.js":
      /*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   "paragraph": () => (/* binding */ paragraph)\n/* harmony export */ });\nfunction createHome() {\r\n  const main = document.createElement("main");\r\n\r\n  const chefImage = document.createElement("img");\r\n  chefImage.src = "../dist/images/chef.jpg";\r\n  chefImage.alt = "Chef Image";\r\n  chefImage.id = "chefImg";\r\n\r\n  main.appendChild(paragraph("Welcome To GUJ FOOD", "text-lg"));\r\n  main.appendChild(paragraph("This the wonder full restaurant", "text-md"));\r\n  main.appendChild(chefImage);\r\n  main.appendChild(paragraph("since 1985 by your love.", ""));\r\n  return main;\r\n}\r\n\r\nfunction paragraph(text, className) {\r\n  if (className === "") {\r\n    const para = document.createElement("p");\r\n    para.textContent = text;\r\n    return para;\r\n} else {\r\n    const para = document.createElement("p");\r\n    para.classList.add(className);\r\n    para.textContent = text;\r\n    return para;\r\n  }\r\n}\r\n\r\nfunction showHome() {\r\n  const content = document.getElementById("content");\r\n  content.textContent = "";\r\n\r\n  content.appendChild(createHome());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showHome);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?'
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");\n\r\n\r\n\r\n\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();\r\nconst homeBtn = document.querySelector("[data-home]");\r\nconst menuBtn = document.querySelector("[data-menu]");\r\nconst contactBtn = document.querySelector("[data-con]");\r\n\r\n\r\nfunction setActive(button) {\r\n  const buttons = document.querySelectorAll(".btn");\r\n\r\n  buttons.forEach((button) => {\r\n    if (button !== this) {\r\n      button.classList.remove("active-btn");\r\n    }\r\n  });\r\n\r\n  button.classList.add("active-btn");\r\n}\r\n\r\nhomeBtn.addEventListener("click", (event) => {\r\n  if (event.target.classList.contains("active-btn")) return;\r\n  setActive(homeBtn);\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();\r\n});\r\nmenuBtn.addEventListener("click", (event) => {\r\n    if (event.target.classList.contains("active-btn")) return;\r\n    setActive(menuBtn);\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();\r\n  });\r\n\r\ncontactBtn.addEventListener("click", (event) => {\r\n  if (event.target.classList.contains("active-btn")) return;\r\n  setActive(contactBtn);\r\n  (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?'
        );

        /***/
      },

    /***/ "./src/menu.js":
      /*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu(){\r\n    const main = document.createElement(\'main\');\r\n\r\n    main.appendChild(createBox("1", "Khaman Dhokla Recipe | Khaman Recipe"));\r\n    main.appendChild(createBox("2", "Thepla Recipe | Methi Thepla (Fenugreek Flatbread)"));\r\n    main.appendChild(createBox("3","Dabeli Recipe | Kacchi Dabeli | Dabeli Masala"));\r\n    main.appendChild(createBox("4", "khandvi recipe"));\r\n    main.appendChild(createBox("5", "Muthiya Recipe | Methi Muthia (Steamed and Fried)"));\r\n    main.appendChild(createBox("6", "Rava Dhokla | Suji ka Dhokla"));\r\n\r\n    return main;\r\n}\r\n\r\nfunction createBox(number, text){\r\n    const div = document.createElement(\'div\');\r\n    div.classList.add("box");\r\n\r\n    const img = document.createElement(\'img\');\r\n    img.src = `../dist/images/box Img/img-${number}.jpg`;\r\n    img.alt = `Image ${number}`;\r\n    img.classList.add("box-img");\r\n\r\n    const para = document.createElement("p");\r\n    para.classList.add("text-md");\r\n\r\n    para.textContent = text;\r\n\r\n    div.appendChild(img);\r\n    div.appendChild(para);\r\n\r\n    return div;\r\n}\r\n\r\nfunction showMenu(){\r\n    const content = document.getElementById("content");\r\n    content.textContent = "";\r\n    content.appendChild(createMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
