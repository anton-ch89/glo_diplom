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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerModal.js */ \"./src/modules/headerModal.js\");\n/* harmony import */ var _modules_servicesModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/servicesModal.js */ \"./src/modules/servicesModal.js\");\n/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calc.js */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_countTimer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/countTimer.js */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_certificate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/certificate.js */ \"./src/modules/certificate.js\");\n/* harmony import */ var _modules_servicesSlider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/servicesSlider.js */ \"./src/modules/servicesSlider.js\");\n/* harmony import */ var _modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/smoothScroll.js */ \"./src/modules/smoothScroll.js\");\n/* harmony import */ var _modules_sendForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm.js */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_validationForms_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/validationForms.js */ \"./src/modules/validationForms.js\");\n/* harmony import */ var _modules_benefitsSlider_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/benefitsSlider.js */ \"./src/modules/benefitsSlider.js\");\n\n\n\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  //Модальное окно заказа звонка\n  (0,_modules_headerModal_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Модальные окна Замер\n\n  (0,_modules_servicesModal_js__WEBPACK_IMPORTED_MODULE_1__.default)(); //Калькулятор\n\n  (0,_modules_calc_js__WEBPACK_IMPORTED_MODULE_2__.default)(); //Слайдер \"Замеры\"\n\n  (0,_modules_servicesSlider_js__WEBPACK_IMPORTED_MODULE_5__.default)(); //Таймер\n\n  (0,_modules_countTimer_js__WEBPACK_IMPORTED_MODULE_3__.default)('15 august 2021 12:25:30', true);\n  (0,_modules_countTimer_js__WEBPACK_IMPORTED_MODULE_3__.default)('15 august 2021 12:25:30', false); //Документы\n\n  (0,_modules_certificate_js__WEBPACK_IMPORTED_MODULE_4__.default)(); // Отправка формы\n\n  (0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_7__.default)(); //Скролл\n\n  (0,_modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_6__.default)(); //Валидация форм\n\n  (0,_modules_validationForms_js__WEBPACK_IMPORTED_MODULE_8__.default)(document.querySelectorAll('.form-horizontal')[0]);\n  (0,_modules_validationForms_js__WEBPACK_IMPORTED_MODULE_8__.default)(document.querySelectorAll('.form-horizontal')[1]); //Слайдер-карусель \"Выгоды\"\n\n  var carusel = new _modules_benefitsSlider_js__WEBPACK_IMPORTED_MODULE_9__.default({\n    main: '.benefits-inner',\n    wrap: '.benefits-wrap',\n    prev: '.benefits__arrow--left',\n    next: '.benefits__arrow--right',\n    slidesToShow: 3,\n    infinity: true,\n    responsive: [{\n      breakpoint: 576,\n      slidesToShow: 1\n    }]\n  });\n  carusel.init();\n});\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/benefitsSlider.js":
/*!***************************************!*\
  !*** ./src/modules/benefitsSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//Слайдер-карусель \"Выгоды\"\nvar BenefitsSlider = /*#__PURE__*/function () {\n  function BenefitsSlider(_ref) {\n    var main = _ref.main,\n        wrap = _ref.wrap,\n        next = _ref.next,\n        prev = _ref.prev,\n        _ref$infinity = _ref.infinity,\n        infinity = _ref$infinity === void 0 ? false : _ref$infinity,\n        _ref$position = _ref.position,\n        position = _ref$position === void 0 ? 0 : _ref$position,\n        _ref$responsive = _ref.responsive,\n        responsive = _ref$responsive === void 0 ? [] : _ref$responsive,\n        _ref$slidesToShow = _ref.slidesToShow,\n        slidesToShow = _ref$slidesToShow === void 0 ? 3 : _ref$slidesToShow;\n\n    _classCallCheck(this, BenefitsSlider);\n\n    if (!main || !wrap) {\n      console.warn(\"slider-carusel: \\u041D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u043E 2 \\u0441\\u0432\\u043E\\u0439\\u0441\\u0442\\u0432\\u0430, \\\"main\\\" \\u0438 \\\"wrap\\\"!\");\n    }\n\n    this.main = document.querySelector(main);\n    this.wrap = document.querySelector(wrap);\n    this.slides = document.querySelector(wrap).children;\n    this.next = document.querySelector(next);\n    this.prev = document.querySelector(prev);\n    this.slidesToShow = slidesToShow;\n    this.options = {\n      position: position,\n      infinity: infinity,\n      widthSlide: Math.floor(100 / this.slidesToShow),\n      maxPosition: this.slides.length - this.slidesToShow\n    };\n    this.responsive = responsive;\n  }\n\n  _createClass(BenefitsSlider, [{\n    key: \"init\",\n    value: function init() {\n      this.addGloClass();\n      this.addStyles();\n\n      if (this.prev && this.next) {\n        this.controlSlider();\n      } else {\n        this.addArrow();\n        this.controlSlider();\n      }\n\n      if (this.responsive) {\n        this.responseInit();\n      }\n    }\n  }, {\n    key: \"addGloClass\",\n    value: function addGloClass() {\n      this.main.classList.add('glo-slider');\n      this.wrap.classList.add('glo-slider__wrap');\n\n      var _iterator = _createForOfIteratorHelper(this.slides),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var item = _step.value;\n          item.classList.add('glo-slider__item');\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"addStyles\",\n    value: function addStyles() {\n      var style = document.querySelector('#sliderCarusel-style');\n\n      if (!style) {\n        style = document.createElement('style');\n        style.id = 'sliderCarusel-style';\n        document.head.append(style);\n      }\n\n      style.textContent = \"\\n            .glo-slider {\\n                overflow: hidden !important;\\n                max-width: 540px;\\n                margin: 0 auto;\\n            }\\n            .glo-slider__wrap {\\n                display: flex !important;\\n                transition: transform 0.5s !important;\\n                will-change: transform !important;\\n            }\\n            .glo-slider__item {\\n                display: flex !important;\\n                flex: 0 0 \".concat(this.options.widthSlide, \"% !important;\\n                width: \").concat(this.options.widthSlide, \"% !important;\\n                flex-direction: column;\\n            }\\n            .glo-slider__next, \\n            .glo-slider__prev {\\n                margin: 0 10px;\\n                border: 20px solid transparent;\\n                background: transparent;\\n            }\\n            .glo-slider__next {\\n                border-left-color: #19b5fe;\\n            }\\n            .glo-slider__prev {\\n                border-right-color: #19b5fe;\\n            }\\n            .glo-slider__prev:hover,\\n            .glo-slider__next:hover,\\n            .glo-slider__prev:focus,\\n            .glo-slider__next:focus {\\n                background: transparent;\\n                outline: transparent;\\n            }\\n            @media (max-width: 576px){\\n                .glo-slider {\\n                    overflow: hidden !important;\\n                    max-width: 180px;\\n                    margin: 0 auto;\\n                }\\n            }\\n        }\\n        \");\n    }\n  }, {\n    key: \"controlSlider\",\n    value: function controlSlider() {\n      this.prev.addEventListener('click', this.prevSlider.bind(this));\n      this.next.addEventListener('click', this.nextSlider.bind(this));\n    }\n  }, {\n    key: \"nextSlider\",\n    value: function nextSlider() {\n      if (this.options.infinity || this.options.position < this.options.maxPosition) {\n        ++this.options.position;\n\n        if (this.options.position > this.options.maxPosition) {\n          this.options.position = 0;\n        }\n\n        this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n      }\n    }\n  }, {\n    key: \"prevSlider\",\n    value: function prevSlider() {\n      if (this.options.infinity || this.options.position > 0) {\n        --this.options.position;\n\n        if (this.options.position < 0) {\n          this.options.position = this.options.maxPosition;\n        }\n\n        this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n      }\n    }\n  }, {\n    key: \"addArrow\",\n    value: function addArrow() {\n      this.prev = document.createElement('button');\n      this.next = document.createElement('button');\n      this.prev.className = 'glo-slider__prev';\n      this.next.className = 'glo-slider__next';\n      this.main.append(this.prev);\n      this.main.append(this.next);\n    }\n  }, {\n    key: \"responseInit\",\n    value: function responseInit() {\n      var _this = this;\n\n      var slidestToShowDefault = this.slidesToShow,\n          allResponse = this.responsive.map(function (item) {\n        return item.breakpoint;\n      }),\n          maxResponse = Math.max.apply(Math, _toConsumableArray(allResponse));\n\n      var checkResponse = function checkResponse() {\n        var widthWindow = document.documentElement.clientWidth;\n\n        if (widthWindow < maxResponse) {\n          for (var i = 0; i < allResponse.length; i++) {\n            if (widthWindow < allResponse[i]) {\n              _this.slidesToShow = _this.responsive[i].slidesToShow;\n              _this.options.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n              _this.addStyles();\n            }\n          }\n        } else {\n          _this.slidesToShow = slidestToShowDefault;\n          _this.options.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n          _this.addStyles();\n        }\n      };\n\n      checkResponse();\n      window.addEventListener('resize', checkResponse);\n    }\n  }]);\n\n  return BenefitsSlider;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BenefitsSlider);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/benefitsSlider.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Калькулятор\nvar calc = function calc() {};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/certificate.js":
/*!************************************!*\
  !*** ./src/modules/certificate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Документы\nvar certificate = function certificate() {\n  var docs = document.querySelectorAll('.sertificate-document'),\n      overlay = document.querySelector('.overlay'),\n      body = document.querySelector('body');\n  body.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.sertificate-document');\n\n    if (target) {\n      event.preventDefault();\n      docs.forEach(function (e) {\n        if (e === target) {\n          overlay.style.display = 'block'; // body.insertAdjacentHTML('beforeend', `\n          // <div>\n          // <img src=\"images/documents/document4.jpg\" class=\"img-responsive\" alt=\"\">\n          // </div>\n          // `);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (certificate);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/certificate.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Таймер\nvar countTimer = function countTimer(deadline, count) {\n  var timerDays = document.querySelector('.count_1>span'),\n      timerHours = document.querySelector('.count_2>span'),\n      timerMinutes = document.querySelector('.count_3>span'),\n      timerSeconds = document.querySelector('.count_4>span');\n\n  if (count) {\n    timerDays = document.querySelectorAll('.count_1>span')[1];\n    timerHours = document.querySelectorAll('.count_2>span')[1];\n    timerMinutes = document.querySelectorAll('.count_3>span')[1];\n    timerSeconds = document.querySelectorAll('.count_4>span')[1];\n  }\n\n  var getTimeRemaining = function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60 % 24),\n        days = Math.floor(timeRemaining / 60 / 60 / 24);\n\n    if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {\n      seconds = '00';\n      minutes = '00';\n      hours = '00';\n      days = '00';\n    }\n\n    if (days < 10 || hours < 10 || minutes < 10 || seconds < 10) {\n      seconds = ('0' + seconds).slice(-2);\n      minutes = ('0' + minutes).slice(-2);\n      hours = ('0' + hours).slice(-2);\n      days = ('0' + days).slice(-2);\n    }\n\n    return {\n      timeRemaining: timeRemaining,\n      days: days,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  };\n\n  var updateClock = function updateClock() {\n    var timer = getTimeRemaining();\n\n    if (timer.timeRemaining > 0) {\n      timerDays.textContent = timer.days;\n      timerHours.textContent = timer.hours;\n      timerMinutes.textContent = timer.minutes;\n      timerSeconds.textContent = timer.seconds;\n    } else {\n      clearInterval(interval);\n    }\n  };\n\n  var interval = setInterval(updateClock, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/headerModal.js":
/*!************************************!*\
  !*** ./src/modules/headerModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//модальное окно заказа звонка\nvar headerModal = function headerModal() {\n  var callButton = document.querySelector('.btn-block'),\n      headerModal = document.querySelector('.header-modal--opened'),\n      overlay = document.querySelector('.overlay'),\n      headerModalClose = document.querySelector('.header-modal__close');\n  callButton.addEventListener('click', function (event) {\n    event.preventDefault();\n    headerModal.style.display = 'block';\n    overlay.style.display = 'block';\n  });\n  headerModalClose.addEventListener('click', function (event) {\n    event.preventDefault();\n    headerModal.style.display = 'none';\n    overlay.style.display = 'none';\n  });\n  overlay.addEventListener('click', function (event) {\n    event.preventDefault();\n    headerModal.style.display = 'none';\n    overlay.style.display = 'none';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerModal);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/headerModal.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Отправка формы\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с Вами свяжемся';\n  var forms = document.querySelectorAll('.form-horizontal');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = \"font-size: 2rem;\";\n  forms.forEach(function (elem) {\n    elem.addEventListener('submit', function (event) {\n      event.preventDefault();\n      elem.append(statusMessage);\n      statusMessage.textContent = loadMessage;\n      var formData = new FormData(elem);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error('status network is not 200');\n        }\n\n        statusMessage.textContent = successMessage;\n        setTimeout(function () {\n          statusMessage.remove();\n        }, 3000);\n      })[\"catch\"](function (error) {\n        statusMessage.textContent = errorMessage;\n        setTimeout(function () {\n          statusMessage.remove();\n        }, 3000);\n        console.error(error);\n      });\n      elem.reset();\n    });\n  });\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/servicesModal.js":
/*!**************************************!*\
  !*** ./src/modules/servicesModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Модальные окна Замер\nvar servicesModal = function servicesModal() {\n  var modal = document.querySelector('.services-modal'),\n      overlay = document.querySelector('.overlay');\n  document.body.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.service-button')) {\n      event.preventDefault();\n      modal.style.display = 'block';\n      overlay.style.display = 'block';\n    }\n\n    if (target.closest('.services-modal__close') || target.closest('.overlay')) {\n      event.preventDefault();\n      modal.style.display = 'none';\n      overlay.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesModal);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/servicesModal.js?");

/***/ }),

/***/ "./src/modules/servicesSlider.js":
/*!***************************************!*\
  !*** ./src/modules/servicesSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Слайдер \"Замеры\"\nvar servicesSlider = function servicesSlider() {};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesSlider);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/servicesSlider.js?");

/***/ }),

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Скролл\n// };\nvar smoothScroll = function smoothScroll() {\n  var scrollButton = document.querySelector('.smooth-scroll');\n  scrollButton.style.display = 'none';\n  document.addEventListener('scroll', function () {\n    var posBlock = document.querySelector('#offer').getBoundingClientRect().bottom;\n\n    if (posBlock < 0) {\n      scrollButton.style.display = 'block';\n    } else {\n      scrollButton.style.display = 'none';\n    }\n  });\n  scrollButton.addEventListener('click', function () {\n    var elementPosition = document.querySelector('#header').getBoundingClientRect().top;\n    window.scrollBy({\n      top: elementPosition,\n      behavior: 'smooth'\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/smoothScroll.js?");

/***/ }),

/***/ "./src/modules/validationForms.js":
/*!****************************************!*\
  !*** ./src/modules/validationForms.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n//Валидация форм\nvar validationForms = function validationForms(form) {\n  var errorNameMessage = 'Имя должно быть не короче 2х букв.',\n      errorPhoneMessage = 'Номер телефона должен содержать от 7 до 16 цифр.',\n      statusMessage = document.createElement('div');\n  statusMessage.style.cssText = \"font-size: 12px; line-height: 2; color: red;\";\n\n  var elementsForm = _toConsumableArray(form.elements).filter(function (item) {\n    return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';\n  });\n\n  elementsForm.forEach(function (item) {\n    item.setAttribute('required', true);\n    item.addEventListener('input', function () {\n      if (item.name === 'fio') {\n        item.style.border = '';\n        item.value = item.value.replace(/[^а-яё a-z]/ig, '');\n        item.addEventListener('blur', function () {\n          if (item.value.length > 1) {\n            statusMessage.remove();\n            item.value = item.value.replace(/[^а-яё a-z]/gi, '').replace(/^[ \\s]+|[ \\s]+$/g, '').replace(/^[-]+|[-]+$/g, '').replace(/\\s+/g, ' ').replace(/-+/g, '-').split(' ').map(function (item) {\n              if (item) {\n                return item[0].toUpperCase() + item.slice(1).toLowerCase();\n              }\n            }).join(' ');\n          } else {\n            item.style.border = '2px solid red';\n            item.value = '';\n            statusMessage.textContent = errorNameMessage;\n            item.insertAdjacentElement(\"afterend\", statusMessage);\n            setTimeout(function () {\n              statusMessage.remove();\n            }, 5000);\n          }\n        });\n      } else if (item.name === 'phone') {\n        item.style.border = '';\n        item.setAttribute('required', true);\n        item.value = item.value.replace(/[^0-9()+]/, '');\n        item.addEventListener('blur', function () {\n          var pattern = /^\\+?[0-9]{7,16}$/;\n\n          if (pattern.test(item.value)) {\n            statusMessage.remove();\n            item.value = item.value.replace(/[^0-9\\+]/g, '');\n          } else {\n            item.style.border = '2px solid red';\n            item.value = '';\n            statusMessage.textContent = errorPhoneMessage;\n            item.insertAdjacentElement(\"afterend\", statusMessage);\n            setTimeout(function () {\n              statusMessage.remove();\n            }, 5000);\n          }\n        });\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationForms);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/validationForms.js?");

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