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

/***/ "./jss/modules/SvgHeat.js":
/*!********************************!*\
  !*** ./jss/modules/SvgHeat.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SvgHeart)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar SvgHeart = /*#__PURE__*/function () {\n  function SvgHeart() {\n    var _this = this;\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SvgHeart);\n    this.svgHeart = document.querySelector(\".svg-heart\");\n    if (!this.svgHeart) return;\n    if (!this.svgHeart.hasAttribute(\"data-clicked\")) {\n      this.svgHeart.setAttribute(\"data-clicked\", true);\n      this.svgHeart.addEventListener(\"click\", function () {\n        _this.toggleHeart();\n      });\n    }\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SvgHeart, [{\n    key: \"toggleHeart\",\n    value: function toggleHeart() {\n      this.svgHeart.classList.toggle(\"svg-clicked\");\n    }\n  }]);\n  return SvgHeart;\n}();\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/SvgHeat.js?");

/***/ }),

/***/ "./jss/modules/assessment.js":
/*!***********************************!*\
  !*** ./jss/modules/assessment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Assessment)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Assessment = /*#__PURE__*/function () {\n  function Assessment() {\n    var _this = this;\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Assessment);\n    this.container = document.getElementById('star-container');\n    this.stars = [];\n    var starSize = 17;\n    var _loop = function _loop(i) {\n      var star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n      star.setAttribute('class', 'svg-star');\n      star.setAttribute('width', starSize);\n      star.setAttribute('height', starSize);\n      star.setAttribute('viewBox', '0 0 16 15');\n      star.innerHTML = \"\\n          <path d=\\\"M7.85692 0L9.68511 5.62658H15.6012L10.815 9.10399L12.6432 14.7306L7.85692 11.2532L3.07067 14.7306L4.89886 9.10399L0.112606 5.62658H6.02874Z\\\" fill=\\\"#9C9C9C\\\" />\\n        \";\n      star.addEventListener('click', function () {\n        return _this.toggleStar(i);\n      });\n      star.addEventListener('mouseover', function () {\n        return _this.hoverStar(i);\n      });\n      star.addEventListener('mouseout', function () {\n        return _this.unhoverStar(i);\n      });\n      _this.container.appendChild(star);\n      _this.stars.push(star);\n    };\n    for (var i = 0; i < 5; i++) {\n      _loop(i);\n    }\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Assessment, [{\n    key: \"toggleStar\",\n    value: function toggleStar(index) {\n      this.stars.forEach(function (star, i) {\n        if (i <= index) {\n          star.querySelector('path').setAttribute('fill', '#7A306C');\n        } else {\n          star.querySelector('path').setAttribute('fill', '#9C9C9C');\n        }\n      });\n    }\n  }, {\n    key: \"hoverStar\",\n    value: function hoverStar(index) {\n      this.stars.forEach(function (star, i) {\n        if (i <= index) {\n          star.querySelector('path').setAttribute('fill', '#7A306C');\n        }\n      });\n    }\n  }, {\n    key: \"unhoverStar\",\n    value: function unhoverStar(index) {\n      this.stars.forEach(function (star, i) {\n        if (i > index) {\n          star.querySelector('path').setAttribute('fill', '#9C9C9C');\n        }\n      });\n    }\n  }]);\n  return Assessment;\n}();\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/assessment.js?");

/***/ }),

/***/ "./jss/modules/automatic-scroll.js":
/*!*****************************************!*\
  !*** ./jss/modules/automatic-scroll.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AutomaticScroll)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar AutomaticScroll = /*#__PURE__*/function () {\n  function AutomaticScroll() {\n    var _this = this;\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AutomaticScroll);\n    this.titles = [\"Entrega rápida\", \"Parcelamento\", \"Atendimento\", \"Compra segura\"];\n    this.subtitles = [\"Enviamos para todo o Brasil\", \"Divida em até 12x no cartão\", \"Rápido e fácil, via whatsapp\", \"Loja oficial, totalmente confiável\"];\n    this.container = document.querySelector('.automatic-scroll');\n    this.currentIndex = 0;\n    this.renderDiv(this.currentIndex);\n    this.interval = setInterval(function () {\n      return _this.showNextDiv();\n    }, 3000);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AutomaticScroll, [{\n    key: \"renderDiv\",\n    value: function renderDiv(index) {\n      var previousDiv = this.container.querySelector('.div-automatic');\n      if (previousDiv) {\n        previousDiv.style.transition = 'transform 0.6s ease-in-out';\n        previousDiv.style.transform = 'translateX(-100%)';\n        setTimeout(function () {\n          previousDiv.remove();\n        }, 600);\n      }\n      var div = document.createElement('div');\n      div.classList.add('div-automatic');\n      div.style.transform = 'translateX(100%)';\n      div.innerHTML = \"\\n        <svg width=\\\"41\\\" height=\\\"31\\\" viewBox=\\\"0 0 41 31\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n        <path d=\\\"M11.5764 29.238C13.757 29.238 15.5248 27.4703 15.5248 25.2897C15.5248 23.1091 13.757 21.3413 11.5764 21.3413C9.39579 21.3413 7.62805 23.1091 7.62805 25.2897C7.62805 27.4703 9.39579 29.238 11.5764 29.238Z\\\" stroke=\\\"#7A306C\\\" stroke-width=\\\"1.9677\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"/>\\n        <path d=\\\"M31.3182 29.238C33.4988 29.238 35.2665 27.4703 35.2665 25.2897C35.2665 23.1091 33.4988 21.3413 31.3182 21.3413C29.1376 21.3413 27.3698 23.1091 27.3698 25.2897C27.3698 27.4703 29.1376 29.238 31.3182 29.238Z\\\" stroke=\\\"#7A306C\\\" stroke-width=\\\"1.9677\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"/>\\n        <path d=\\\"M7.62787 25.2897H3.6795V17.3929M1.70532 1.59949H23.4213V25.2897M15.5246 25.2897H27.3697M35.2664 25.2897H39.2148V13.4446M39.2148 13.4446H23.4213M39.2148 13.4446L33.2922 3.57367H23.4213\\\" stroke=\\\"#7A306C\\\" stroke-width=\\\"1.9677\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"/>\\n        <path d=\\\"M3.67969 9.49628H11.5764\\\" stroke=\\\"#7A306C\\\" stroke-width=\\\"1.9677\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"/>\\n        </svg>      \\n          <div>\\n            <p class=\\\"div-automatic-title\\\">\".concat(this.titles[index], \"</p>\\n            <p class=\\\"div-automatic-subtitle\\\">\").concat(this.subtitles[index], \"</p>\\n          </div>\\n        \");\n      this.container.appendChild(div);\n      setTimeout(function () {\n        div.style.transform = 'translateX(0)';\n      }, 0);\n    }\n  }, {\n    key: \"showNextDiv\",\n    value: function showNextDiv() {\n      this.currentIndex = (this.currentIndex + 1) % this.titles.length;\n      this.renderDiv(this.currentIndex);\n    }\n  }]);\n  return AutomaticScroll;\n}();\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/automatic-scroll.js?");

/***/ }),

/***/ "./jss/modules/borders-toggle.js":
/*!***************************************!*\
  !*** ./jss/modules/borders-toggle.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BordersToggle)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar BordersToggle = /*#__PURE__*/function () {\n  function BordersToggle() {\n    var _this = this;\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, BordersToggle);\n    this.circles = document.querySelectorAll(\".div-circles > div\");\n    this.selectedCircle = this.circles[0];\n    this.selectedCircle.classList.add(\"selected\", \"shrunk\"); // Adiciona a classe \"shrunk\"\n    this.circles.forEach(function (circle) {\n      circle.addEventListener(\"click\", function () {\n        return _this.toggleBorder(circle);\n      });\n    });\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(BordersToggle, [{\n    key: \"toggleBorder\",\n    value: function toggleBorder(circle) {\n      this.selectedCircle.classList.remove(\"selected\", \"shrunk\");\n      circle.classList.add(\"selected\", \"shrunk\");\n      this.selectedCircle = circle;\n    }\n  }]);\n  return BordersToggle;\n}();\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/borders-toggle.js?");

/***/ }),

/***/ "./jss/modules/carrossel-slide.js":
/*!****************************************!*\
  !*** ./jss/modules/carrossel-slide.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CarrosselSlide)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar CarrosselSlide = /*#__PURE__*/function () {\n  function CarrosselSlide() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CarrosselSlide);\n    this.imageList = document.querySelector(\".image-list\");\n    this.isDragging = false;\n    this.prevX = 0;\n    this.prevY = 0;\n    this.imageList.addEventListener(\"mousedown\", this.startDrag.bind(this));\n    this.imageList.addEventListener(\"mouseup\", this.endDrag.bind(this));\n    this.imageList.addEventListener(\"mouseleave\", this.endDrag.bind(this));\n    this.imageList.addEventListener(\"mousemove\", this.drag.bind(this));\n    this.imageList.addEventListener(\"wheel\", this.mouseWheel.bind(this));\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CarrosselSlide, [{\n    key: \"startDrag\",\n    value: function startDrag(event) {\n      this.isDragging = true;\n      this.prevX = event.clientX;\n      this.prevY = event.clientY;\n    }\n  }, {\n    key: \"endDrag\",\n    value: function endDrag() {\n      this.isDragging = false;\n    }\n  }, {\n    key: \"drag\",\n    value: function drag(event) {\n      if (this.isDragging) {\n        var deltaX = event.clientX - this.prevX;\n        var deltaY = event.clientY - this.prevY;\n        this.prevX = event.clientX;\n        this.prevY = event.clientY;\n        if (Math.abs(deltaX) > Math.abs(deltaY)) {\n          this.imageList.scrollLeft -= deltaX;\n        } else {\n          this.imageList.scrollTop -= deltaY;\n        }\n        event.preventDefault();\n      }\n    }\n  }, {\n    key: \"mouseWheel\",\n    value: function mouseWheel(event) {\n      if (window.innerWidth <= 700) {\n        this.imageList.scrollLeft += event.deltaY;\n      } else {\n        this.imageList.scrollTop += event.deltaY;\n      }\n      event.preventDefault();\n    }\n  }]);\n  return CarrosselSlide;\n}();\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/carrossel-slide.js?");

/***/ }),

/***/ "./jss/modules/debounce.js":
/*!*********************************!*\
  !*** ./jss/modules/debounce.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Debounce)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n\n\nvar Debounce = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function Debounce() {\n  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Debounce);\n  var dtElements = document.querySelectorAll(\".title-details dt\");\n  var ddElements = document.querySelectorAll(\".middle-content dd\");\n  dtElements[0].classList.add(\"active\");\n  ddElements[0].classList.add(\"active\");\n  dtElements.forEach(function (dt, index) {\n    dt.addEventListener(\"click\", function () {\n      dtElements.forEach(function (dt) {\n        dt.classList.remove(\"active\");\n      });\n      dt.classList.add(\"active\");\n      ddElements.forEach(function (dd) {\n        dd.classList.remove(\"active\");\n      });\n      ddElements[index].classList.add(\"active\");\n    });\n  });\n});\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/debounce.js?");

/***/ }),

/***/ "./jss/modules/dropdowns.js":
/*!**********************************!*\
  !*** ./jss/modules/dropdowns.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dropdowns)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n\n\nvar Dropdowns = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function Dropdowns() {\n  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Dropdowns);\n  var questions = document.querySelectorAll(\".doubts-list dt\");\n  questions.forEach(function (question) {\n    var answer = question.nextElementSibling;\n    var arrowIcon = question.querySelector('.arrow-icon');\n    answer.classList.add('closed');\n    question.addEventListener(\"click\", function () {\n      var isOpen = answer.classList.contains('open');\n      questions.forEach(function (q) {\n        var ans = q.nextElementSibling;\n        if (q !== question) {\n          ans.classList.remove('open');\n          ans.classList.add('closed');\n        }\n      });\n      if (!isOpen) {\n        answer.classList.remove('closed');\n        answer.classList.add('open');\n        arrowIcon.classList.add('rotate');\n      } else {\n        answer.classList.remove('open');\n        answer.classList.add('closed');\n        arrowIcon.classList.remove('rotate');\n      }\n    });\n  });\n});\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/dropdowns.js?");

/***/ }),

/***/ "./jss/modules/img-evidence.js":
/*!*************************************!*\
  !*** ./jss/modules/img-evidence.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImgEvidence)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _modules_SvgHeat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/SvgHeat */ \"./jss/modules/SvgHeat.js\");\n\n\n\nvar ImgEvidence = /*#__PURE__*/function () {\n  function ImgEvidence() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ImgEvidence);\n    this.enlargedImageContainer = document.querySelector(\".enlarged-image-container\");\n    if (!this.enlargedImageContainer) {\n      this.enlargedImageContainer = document.createElement(\"div\");\n      this.enlargedImageContainer.classList.add(\"enlarged-image-container\");\n      var imageSection = document.querySelector(\".image-section\");\n      imageSection.appendChild(this.enlargedImageContainer);\n    }\n    this.enlargedImage = document.createElement(\"img\");\n    this.enlargedImage.classList.add(\"enlarged-image\");\n    this.enlargedImageContainer.appendChild(this.enlargedImage);\n    this.imageList = document.querySelectorAll(\".img-head\");\n    this.init();\n    var firstImage = this.imageList[0];\n    firstImage.classList.add(\"selected-image\", \"shrunk\");\n    this.showImage(firstImage);\n    this.svgHeart = new _modules_SvgHeat__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ImgEvidence, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n      this.imageList.forEach(function (img) {\n        img.addEventListener(\"click\", function () {\n          _this.showImage(img);\n          _this.imageList.forEach(function (image) {\n            image.classList.remove(\"selected-image\", \"shrunk\");\n          });\n          img.classList.add(\"selected-image\", \"shrunk\");\n        });\n      });\n      this.enlargedImageContainer.addEventListener(\"click\", function (event) {\n        event.stopPropagation();\n      });\n    }\n  }, {\n    key: \"showImage\",\n    value: function showImage(img) {\n      this.enlargedImage.src = img.src;\n      this.enlargedImageContainer.style.display = \"block\";\n    }\n  }, {\n    key: \"hideEnlargedImage\",\n    value: function hideEnlargedImage() {\n      this.enlargedImageContainer.style.display = \"none\";\n    }\n  }]);\n  return ImgEvidence;\n}();\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/img-evidence.js?");

/***/ }),

/***/ "./jss/modules/mask.js":
/*!*****************************!*\
  !*** ./jss/modules/mask.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Assessment)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n\n\nvar Assessment = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function Assessment() {\n  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Assessment);\n  var elements = document.querySelectorAll(\".cep-input\");\n  elements.forEach(function (input) {\n    input.addEventListener(\"input\", function (event) {\n      var value = event.target.value;\n      var newValue = value.replace(/\\D/g, \"\");\n      var truncatedValue = newValue.slice(0, 8);\n      var formattedValue = truncatedValue.replace(/^(\\d{5})(\\d{0,3})/, \"$1-$2\");\n      event.target.value = formattedValue;\n    });\n  });\n});\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/mask.js?");

/***/ }),

/***/ "./jss/modules/select-sizes.js":
/*!*************************************!*\
  !*** ./jss/modules/select-sizes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SelectSizes)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar SelectSizes = /*#__PURE__*/function () {\n  function SelectSizes() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SelectSizes);\n    this.tamanhos = [\"PP\", \"P\", \"M\", \"G\", \"GG\"];\n    this.sizesContainer = document.querySelector(\".sizes\");\n    this.renderSizes();\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SelectSizes, [{\n    key: \"renderSizes\",\n    value: function renderSizes() {\n      var _this = this;\n      this.sizesContainer.innerHTML = \"\";\n      this.tamanhos.forEach(function (tamanho) {\n        var button = document.createElement(\"button\");\n        button.textContent = tamanho;\n        button.classList.add(\"size-button\");\n        button.addEventListener(\"click\", function () {\n          document.querySelectorAll(\".size-button\").forEach(function (btn) {\n            btn.classList.remove(\"clicked\");\n          });\n          button.classList.add(\"clicked\");\n        });\n        _this.sizesContainer.appendChild(button);\n      });\n    }\n  }]);\n  return SelectSizes;\n}();\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/select-sizes.js?");

/***/ }),

/***/ "./jss/modules/slider.js":
/*!*******************************!*\
  !*** ./jss/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slider)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Slider = /*#__PURE__*/function () {\n  function Slider() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Slider);\n    this.slideWrapper = document.querySelector(\".slide-wrapper\");\n    this.isDragging = false;\n    this.startX = 0;\n    this.startScrollLeft = 0;\n    this.attachEvents();\n    this.loadProducts();\n    this.attachHeartClickEvent();\n    this.attachSlideButtonEvents();\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Slider, [{\n    key: \"attachEvents\",\n    value: function attachEvents() {\n      this.slideWrapper.addEventListener(\"mousedown\", this.startDrag.bind(this));\n      this.slideWrapper.addEventListener(\"mousemove\", this.drag.bind(this));\n      this.slideWrapper.addEventListener(\"mouseup\", this.endDrag.bind(this));\n      this.slideWrapper.addEventListener(\"mouseleave\", this.endDrag.bind(this));\n      this.slideWrapper.addEventListener(\"touchstart\", this.startDrag.bind(this));\n      this.slideWrapper.addEventListener(\"touchmove\", this.drag.bind(this));\n      this.slideWrapper.addEventListener(\"touchend\", this.endDrag.bind(this));\n    }\n  }, {\n    key: \"loadProducts\",\n    value: function loadProducts() {\n      fetch(\"../../slideapi.json\").then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        var productList = document.getElementById(\"product-list\");\n        data.forEach(function (product) {\n          var li = document.createElement(\"li\");\n          li.classList.add(\"product-item\");\n          var discountDiv = document.createElement(\"div\");\n          discountDiv.classList.add(\"discount\");\n          var discountP = document.createElement(\"p\");\n          discountP.textContent = product.obs;\n          discountP.classList.add(\"discount-text\");\n          if (product.obs.trim().toLowerCase() === \"novo\") {\n            discountP.classList.add(\"new-item\");\n          }\n          var svgHeart = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n          svgHeart.setAttribute(\"class\", \"svg-heart\");\n          svgHeart.setAttribute(\"width\", \"30\");\n          svgHeart.setAttribute(\"height\", \"30\");\n          svgHeart.setAttribute(\"viewBox\", \"0 0 30 30\");\n          svgHeart.setAttribute(\"fill\", \"none\");\n          var path = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\n          path.setAttribute(\"d\", \"M26.25 16.1082L15 27.2502L3.75006 16.1082C3.00802 15.3861 2.42353 14.5182 2.03339 13.5592C1.64325 12.6001 1.45591 11.5707 1.48318 10.5356C1.51044 9.50062 1.75171 8.48245 2.1918 7.54525C2.63189 6.60806 3.26127 5.77214 4.04029 5.09013C4.81931 4.40812 5.73111 3.8948 6.71827 3.58249C7.70542 3.27017 8.74655 3.16564 9.77609 3.27547C10.8056 3.38529 11.8013 3.7071 12.7003 4.22062C13.5994 4.73414 14.3824 5.42826 15 6.25925C15.6203 5.43429 16.4042 4.74624 17.3027 4.23817C18.2011 3.7301 19.1947 3.41294 20.2214 3.30654C21.2481 3.20015 22.2856 3.30681 23.2692 3.61985C24.2527 3.93289 25.161 4.44557 25.9373 5.1258C26.7136 5.80604 27.3411 6.63918 27.7806 7.57309C28.2201 8.507 28.4621 9.52157 28.4914 10.5533C28.5208 11.585 28.3369 12.6117 27.9512 13.5691C27.5655 14.5265 26.9863 15.394 26.25 16.1172\");\n          path.setAttribute(\"stroke\", \"#D2D2D2\");\n          path.setAttribute(\"stroke-width\", \"2\");\n          path.setAttribute(\"stroke-linecap\", \"round\");\n          path.setAttribute(\"stroke-linejoin\", \"round\");\n          svgHeart.appendChild(path);\n          discountDiv.appendChild(discountP);\n          discountDiv.appendChild(svgHeart);\n          var img = document.createElement(\"img\");\n          img.src = product.image;\n          img.alt = \"Imagem do produto\";\n          var productName = document.createElement(\"p\");\n          productName.classList.add(\"product-name\");\n          productName.textContent = product.name;\n          var productPrice = document.createElement(\"p\");\n          productPrice.classList.add(\"product-price\");\n          var originalPriceSpan = document.createElement(\"span\");\n          originalPriceSpan.classList.add(\"original-price\");\n          originalPriceSpan.textContent = product.original_price;\n          productPrice.innerHTML = \"<span class=\\\"original-price\\\">\".concat(product.original_price, \"</span>\").concat(product.current_price);\n          li.appendChild(discountDiv);\n          li.appendChild(img);\n          li.appendChild(productName);\n          li.appendChild(productPrice);\n          productList.appendChild(li);\n        });\n      });\n    }\n  }, {\n    key: \"attachHeartClickEvent\",\n    value: function attachHeartClickEvent() {\n      this.slideWrapper.addEventListener(\"click\", function (event) {\n        var svgHeart = event.target.closest(\".svg-heart\");\n        if (svgHeart) {\n          svgHeart.classList.toggle(\"svg-clicked\");\n        }\n      });\n    }\n  }, {\n    key: \"attachSlideButtonEvents\",\n    value: function attachSlideButtonEvents() {\n      var _this = this;\n      var prevButton = document.querySelector(\".slide-button.prev\");\n      var nextButton = document.querySelector(\".slide-button.next\");\n      prevButton.addEventListener(\"click\", function () {\n        return _this.scrollToPrev();\n      });\n      nextButton.addEventListener(\"click\", function () {\n        return _this.scrollToNext();\n      });\n    }\n  }, {\n    key: \"startDrag\",\n    value: function startDrag(event) {\n      event.preventDefault();\n      this.isDragging = true;\n      this.startX = event.type === \"touchstart\" ? event.touches[0].clientX : event.clientX;\n      this.startScrollLeft = this.slideWrapper.scrollLeft;\n    }\n  }, {\n    key: \"drag\",\n    value: function drag(event) {\n      if (!this.isDragging) return;\n      var currentX = event.type === \"touchmove\" ? event.touches[0].clientX : event.clientX;\n      var distance = currentX - this.startX;\n      this.slideWrapper.scrollLeft = this.startScrollLeft - distance;\n    }\n  }, {\n    key: \"endDrag\",\n    value: function endDrag() {\n      this.isDragging = false;\n    }\n  }, {\n    key: \"scrollToPrev\",\n    value: function scrollToPrev() {\n      var scrollAmount = -this.slideWrapper.offsetWidth;\n      this.slideWrapper.scrollBy({\n        left: scrollAmount,\n        behavior: \"smooth\"\n      });\n    }\n  }, {\n    key: \"scrollToNext\",\n    value: function scrollToNext() {\n      var scrollAmount = this.slideWrapper.offsetWidth;\n      this.slideWrapper.scrollBy({\n        left: scrollAmount,\n        behavior: \"smooth\"\n      });\n    }\n  }]);\n  return Slider;\n}();\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/slider.js?");

/***/ }),

/***/ "./jss/script.js":
/*!***********************!*\
  !*** ./jss/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_img_evidence_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/img-evidence.js */ \"./jss/modules/img-evidence.js\");\n/* harmony import */ var _modules_assessment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/assessment.js */ \"./jss/modules/assessment.js\");\n/* harmony import */ var _modules_borders_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/borders-toggle.js */ \"./jss/modules/borders-toggle.js\");\n/* harmony import */ var _modules_select_sizes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/select-sizes.js */ \"./jss/modules/select-sizes.js\");\n/* harmony import */ var _modules_carrossel_slide_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/carrossel-slide.js */ \"./jss/modules/carrossel-slide.js\");\n/* harmony import */ var _modules_mask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/mask.js */ \"./jss/modules/mask.js\");\n/* harmony import */ var _modules_dropdowns_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdowns.js */ \"./jss/modules/dropdowns.js\");\n/* harmony import */ var _modules_debounce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/debounce.js */ \"./jss/modules/debounce.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/slider.js */ \"./jss/modules/slider.js\");\n/* harmony import */ var _modules_SvgHeat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/SvgHeat.js */ \"./jss/modules/SvgHeat.js\");\n/* harmony import */ var _modules_automatic_scroll_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/automatic-scroll.js */ \"./jss/modules/automatic-scroll.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar imgEvidence = new _modules_img_evidence_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nimgEvidence.init();\nvar svgHeart = new _modules_SvgHeat_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]();\nvar assessment = new _modules_assessment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar bordersToggle = new _modules_borders_toggle_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nvar selectSizes = new _modules_select_sizes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nvar carrossel = new _modules_carrossel_slide_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nvar mask = new _modules_mask_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\nvar dropdowns = new _modules_dropdowns_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\nvar debounce = new _modules_debounce_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\nvar slider = new _modules_slider_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\nvar automaticScroll = new _modules_automatic_scroll_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]();\n\n//# sourceURL=webpack://e-commerce/./jss/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://e-commerce/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://e-commerce/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction toPrimitive(t, r) {\n  if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t) || !t) return t;\n  var e = t[Symbol.toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i)) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\n\n//# sourceURL=webpack://e-commerce/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction toPropertyKey(t) {\n  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t, \"string\");\n  return \"symbol\" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i) ? i : String(i);\n}\n\n//# sourceURL=webpack://e-commerce/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n//# sourceURL=webpack://e-commerce/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./jss/script.js");
/******/ 	
/******/ })()
;