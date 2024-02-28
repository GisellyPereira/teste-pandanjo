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

/***/ "./jss/modules/assessment.js":
/*!***********************************!*\
  !*** ./jss/modules/assessment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Assessment)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Assessment = /*#__PURE__*/function () {\n  function Assessment() {\n    var _this = this;\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Assessment);\n    this.container = document.getElementById('star-container');\n    this.stars = [];\n    var starSize = 20; // Tamanho desejado para as estrelas\n    var _loop = function _loop(i) {\n      var star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n      star.setAttribute('class', 'svg-star');\n      star.setAttribute('width', starSize);\n      star.setAttribute('height', starSize);\n      star.setAttribute('viewBox', '0 0 16 15');\n      star.innerHTML = \"\\n          <path d=\\\"M7.85692 0L9.68511 5.62658H15.6012L10.815 9.10399L12.6432 14.7306L7.85692 11.2532L3.07067 14.7306L4.89886 9.10399L0.112606 5.62658H6.02874Z\\\" fill=\\\"#9C9C9C\\\" />\\n        \";\n      star.addEventListener('click', function () {\n        return _this.toggleStar(i);\n      });\n      star.addEventListener('mouseover', function () {\n        return _this.hoverStar(i);\n      });\n      star.addEventListener('mouseout', function () {\n        return _this.unhoverStar(i);\n      });\n      _this.container.appendChild(star);\n      _this.stars.push(star);\n    };\n    for (var i = 0; i < 5; i++) {\n      _loop(i);\n    }\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Assessment, [{\n    key: \"toggleStar\",\n    value: function toggleStar(index) {\n      this.stars.forEach(function (star, i) {\n        if (i <= index) {\n          star.querySelector('path').setAttribute('fill', '#7A306C');\n        } else {\n          star.querySelector('path').setAttribute('fill', '#9C9C9C');\n        }\n      });\n    }\n  }, {\n    key: \"hoverStar\",\n    value: function hoverStar(index) {\n      this.stars.forEach(function (star, i) {\n        if (i <= index) {\n          star.querySelector('path').setAttribute('fill', '#7A306C');\n        }\n      });\n    }\n  }, {\n    key: \"unhoverStar\",\n    value: function unhoverStar(index) {\n      this.stars.forEach(function (star, i) {\n        if (i > index) {\n          star.querySelector('path').setAttribute('fill', '#9C9C9C');\n        }\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      console.log(\"Init function called\");\n    }\n  }]);\n  return Assessment;\n}();\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/assessment.js?");

/***/ }),

/***/ "./jss/modules/borders-toggle.js":
/*!***************************************!*\
  !*** ./jss/modules/borders-toggle.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BordersToggle)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar BordersToggle = /*#__PURE__*/function () {\n  function BordersToggle() {\n    var _this = this;\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, BordersToggle);\n    this.circles = document.querySelectorAll(\".div-circles > div\");\n    this.selectedCircle = this.circles[0];\n    this.selectedCircle.classList.add(\"selected\", \"shrunk\"); // Adiciona a classe \"shrunk\"\n    this.circles.forEach(function (circle) {\n      circle.addEventListener(\"click\", function () {\n        return _this.toggleBorder(circle);\n      });\n    });\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(BordersToggle, [{\n    key: \"toggleBorder\",\n    value: function toggleBorder(circle) {\n      this.selectedCircle.classList.remove(\"selected\", \"shrunk\");\n      circle.classList.add(\"selected\", \"shrunk\");\n      this.selectedCircle = circle;\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      console.log(\"Init function called\");\n    }\n  }]);\n  return BordersToggle;\n}();\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/borders-toggle.js?");

/***/ }),

/***/ "./jss/modules/carrossel-slide.js":
/*!****************************************!*\
  !*** ./jss/modules/carrossel-slide.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CarrosselSlide)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar CarrosselSlide = /*#__PURE__*/function () {\n  function CarrosselSlide() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CarrosselSlide);\n    this.imageList = document.querySelector(\".image-list\");\n    this.isDragging = false;\n    this.prevX = 0;\n    this.prevY = 0;\n    this.imageList.addEventListener(\"mousedown\", this.startDrag.bind(this));\n    this.imageList.addEventListener(\"mouseup\", this.endDrag.bind(this));\n    this.imageList.addEventListener(\"mouseleave\", this.endDrag.bind(this));\n    this.imageList.addEventListener(\"mousemove\", this.drag.bind(this));\n    this.imageList.addEventListener(\"wheel\", this.mouseWheel.bind(this));\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CarrosselSlide, [{\n    key: \"startDrag\",\n    value: function startDrag(event) {\n      this.isDragging = true;\n      this.prevX = event.clientX;\n      this.prevY = event.clientY;\n    }\n  }, {\n    key: \"endDrag\",\n    value: function endDrag() {\n      this.isDragging = false;\n    }\n  }, {\n    key: \"drag\",\n    value: function drag(event) {\n      if (this.isDragging) {\n        var deltaX = event.clientX - this.prevX;\n        var deltaY = event.clientY - this.prevY;\n        this.prevX = event.clientX;\n        this.prevY = event.clientY;\n        if (Math.abs(deltaX) > Math.abs(deltaY)) {\n          // Movimento mais horizontal\n          this.imageList.scrollLeft -= deltaX;\n        } else {\n          // Movimento mais vertical\n          this.imageList.scrollTop -= deltaY;\n        }\n        event.preventDefault(); // Evita a seleção de texto durante o arrasto\n      }\n    }\n  }, {\n    key: \"mouseWheel\",\n    value: function mouseWheel(event) {\n      if (window.innerWidth <= 700) {\n        // Se a largura da tela for menor ou igual a 700px, ajuste o scroll horizontal\n        this.imageList.scrollLeft += event.deltaY;\n      } else {\n        // Se for maior que 700px, ajuste o scroll vertical\n        this.imageList.scrollTop += event.deltaY;\n      }\n      event.preventDefault();\n    }\n  }]);\n  return CarrosselSlide;\n}();\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/carrossel-slide.js?");

/***/ }),

/***/ "./jss/modules/img-evidence.js":
/*!*************************************!*\
  !*** ./jss/modules/img-evidence.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImgEvidence)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar ImgEvidence = /*#__PURE__*/function () {\n  function ImgEvidence() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ImgEvidence);\n    // Verifica se já existe uma instância de enlargedImageContainer\n    this.enlargedImageContainer = document.querySelector(\".enlarged-image-container\");\n    // Se não existir, cria uma nova div\n    if (!this.enlargedImageContainer) {\n      this.enlargedImageContainer = document.createElement(\"div\");\n      this.enlargedImageContainer.classList.add(\"enlarged-image-container\");\n      var imageSection = document.querySelector(\".image-section\");\n      imageSection.appendChild(this.enlargedImageContainer);\n    }\n    this.enlargedImage = document.createElement(\"img\");\n    this.enlargedImage.classList.add(\"enlarged-image\");\n    this.enlargedImageContainer.appendChild(this.enlargedImage);\n    this.imageList = document.querySelectorAll(\".img-head\");\n    this.init();\n    var firstImage = this.imageList[0];\n    firstImage.classList.add(\"selected-image\", \"shrunk\");\n    this.showImage(firstImage);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ImgEvidence, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n      this.imageList.forEach(function (img) {\n        img.addEventListener(\"click\", function () {\n          _this.showImage(img);\n          _this.imageList.forEach(function (image) {\n            image.classList.remove(\"selected-image\", \"shrunk\");\n          });\n          img.classList.add(\"selected-image\", \"shrunk\");\n        });\n      });\n      var svgHeart = document.querySelector(\".svg-heart\");\n      if (!svgHeart.hasAttribute(\"data-clicked\")) {\n        svgHeart.setAttribute(\"data-clicked\", true);\n        svgHeart.addEventListener(\"click\", function () {\n          svgHeart.classList.toggle(\"svg-clicked\");\n        });\n      }\n      this.enlargedImageContainer.addEventListener(\"click\", function (event) {\n        event.stopPropagation();\n      });\n    }\n  }, {\n    key: \"showImage\",\n    value: function showImage(img) {\n      this.enlargedImage.src = img.src;\n      this.enlargedImageContainer.style.display = \"block\";\n    }\n  }, {\n    key: \"hideEnlargedImage\",\n    value: function hideEnlargedImage() {\n      this.enlargedImageContainer.style.display = \"none\";\n    }\n  }]);\n  return ImgEvidence;\n}();\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/img-evidence.js?");

/***/ }),

/***/ "./jss/modules/modal.js":
/*!******************************!*\
  !*** ./jss/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(abrir, fechar, container) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Modal);\n    this.botaoAbrir = document.querySelector(abrir);\n    this.botaoFechar = document.querySelector(fechar);\n    this.containerModal = document.querySelector(container);\n\n    //bind this ao callback para fazer referencia ao objeto da classe\n    this.eventToggleModal = this.eventToggleModal.bind(this);\n    this.cliqueForaModal = this.cliqueForaModal.bind(this);\n  }\n\n  //abre ou fecha o modal\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Modal, [{\n    key: \"toggleModal\",\n    value: function toggleModal() {\n      this.containerModal.classList.toggle('ativo');\n    }\n\n    //adiciona o evento de toggle ao modal\n  }, {\n    key: \"eventToggleModal\",\n    value: function eventToggleModal(event) {\n      event.preventDefault();\n      this.toggleModal();\n    }\n\n    //frecha o modal ao clicar do lado de fora\n  }, {\n    key: \"cliqueForaModal\",\n    value: function cliqueForaModal(event) {\n      if (event.target === this.containerModal) {\n        this.toggleModal();\n      }\n    }\n\n    // adiciona os eventos aos elementos do modal\n  }, {\n    key: \"addModalEvent\",\n    value: function addModalEvent() {\n      this.botaoAbrir.addEventListener('click', this.eventToggleModal);\n      this.botaoFechar.addEventListener('click', this.eventToggleModal);\n      this.containerModal.addEventListener('click', this.cliqueForaModal);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\n        this.addModalEvent();\n      }\n      return this;\n    }\n  }]);\n  return Modal;\n}();\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/modal.js?");

/***/ }),

/***/ "./jss/modules/scroll-suave.js":
/*!*************************************!*\
  !*** ./jss/modules/scroll-suave.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar ScrollSuave = /*#__PURE__*/function () {\n  function ScrollSuave(links, options) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ScrollSuave);\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = {\n        behavior: 'smooth',\n        block: 'start'\n      };\n    } else {\n      this.options = options;\n    }\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ScrollSuave, [{\n    key: \"scrollToSection\",\n    value: function scrollToSection(event) {\n      event.preventDefault();\n      var href = event.currentTarget.getAttribute('href');\n      var section = document.querySelector(href);\n      section.scrollIntoView(this.options);\n    }\n  }, {\n    key: \"addLinkEvent\",\n    value: function addLinkEvent() {\n      var _this = this;\n      this.linksInternos.forEach(function (link) {\n        link.addEventListener('click', _this.scrollToSection);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.linksInternos.length) {\n        this.addLinkEvent();\n      }\n      return this;\n    }\n  }]);\n  return ScrollSuave;\n}();\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/scroll-suave.js?");

/***/ }),

/***/ "./jss/modules/select-sizes.js":
/*!*************************************!*\
  !*** ./jss/modules/select-sizes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SelectSizes)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar SelectSizes = /*#__PURE__*/function () {\n  function SelectSizes() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SelectSizes);\n    this.tamanhos = [\"PP\", \"P\", \"M\", \"G\", \"GG\"];\n    this.sizesContainer = document.querySelector(\".sizes\");\n    this.renderSizes();\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SelectSizes, [{\n    key: \"renderSizes\",\n    value: function renderSizes() {\n      var _this = this;\n      this.sizesContainer.innerHTML = \"\";\n      this.tamanhos.forEach(function (tamanho) {\n        var button = document.createElement(\"button\");\n        button.textContent = tamanho;\n        button.classList.add(\"size-button\");\n        button.addEventListener(\"click\", function () {\n          document.querySelectorAll(\".size-button\").forEach(function (btn) {\n            btn.classList.remove(\"clicked\");\n          });\n          button.classList.add(\"clicked\");\n        });\n        _this.sizesContainer.appendChild(button);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      console.log(\"Init function called\");\n    }\n  }]);\n  return SelectSizes;\n}();\n\n\n//# sourceURL=webpack://e-commerce/./jss/modules/select-sizes.js?");

/***/ }),

/***/ "./jss/script.js":
/*!***********************!*\
  !*** ./jss/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./jss/modules/scroll-suave.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal.js */ \"./jss/modules/modal.js\");\n/* harmony import */ var _modules_img_evidence_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/img-evidence.js */ \"./jss/modules/img-evidence.js\");\n/* harmony import */ var _modules_assessment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/assessment.js */ \"./jss/modules/assessment.js\");\n/* harmony import */ var _modules_borders_toggle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/borders-toggle.js */ \"./jss/modules/borders-toggle.js\");\n/* harmony import */ var _modules_select_sizes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/select-sizes.js */ \"./jss/modules/select-sizes.js\");\n/* harmony import */ var _modules_carrossel_slide_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/carrossel-slide.js */ \"./jss/modules/carrossel-slide.js\");\n\n\n\n\n\n\n\nvar scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\nvar modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\nvar imgEvidence = new _modules_img_evidence_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nimgEvidence.init();\nvar assessment = new _modules_assessment_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nvar bordersToggle = new _modules_borders_toggle_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nvar selectSizes = new _modules_select_sizes_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\nvar carrossel = new _modules_carrossel_slide_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n\n//# sourceURL=webpack://e-commerce/./jss/script.js?");

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