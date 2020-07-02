/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/dist/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/dist/classes/element.js":
/*!************************************!*\
  !*** ./js/dist/classes/element.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Element = exports.Element = function Element(element) {\n    _classCallCheck(this, Element);\n\n    this.$el = document.querySelector(element);\n};\n\n//# sourceURL=webpack:///./js/dist/classes/element.js?");

/***/ }),

/***/ "./js/dist/main.js":
/*!*************************!*\
  !*** ./js/dist/main.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _element = __webpack_require__(/*! ./classes/element */ \"./js/dist/classes/element.js\");\n\n//Get elements\nvar button = new _element.Element('#button');\nvar input = new _element.Element('#input');\nvar prewie_block = new _element.Element('#preview');\nvar title = new _element.Element('#title');\nvar id = 0;\n\ninput.$el.addEventListener('input', function (event) {\n    event.preventDefault();\n    prewie_block.$el.style.display = \"block\";\n    if (input.$el.value === '') {\n        title.$el.textContent = 'Title';\n        prewie_block.$el.style.display = \"none\";\n    } else {\n        title.$el.textContent = input.$el.value;\n    }\n});\n\ninput.$el.addEventListener('blur', function (event) {\n    if (input.$el.value === '') {\n        prewie_block.$el.style.display = \"none\";\n    }\n});\n\nbutton.$el.addEventListener('click', function (event) {\n    event.preventDefault();\n    if (input.$el.value !== '') {\n        var block_of_do = new _element.Element('#block-of-do');\n        block_of_do.$el.insertAdjacentHTML('afterbegin', getBlockOfDo(input.$el.value, id));\n        prewie_block.$el.style.display = \"none\";\n        input.$el.value = '';\n        var delete_button = new _element.Element('#delete_button');\n        delete_button.$el.addEventListener('click', function (event) {\n            var parent = delete_button.$el.parentNode.parentNode.parentNode.parentNode;\n            var data_attr = delete_button.$el.getAttribute('data-id');\n            for (var i = 0; i < block_of_do.$el.childNodes.length; i++) {\n                if (block_of_do.$el.children[i] !== undefined) {\n                    if (block_of_do.$el.children[i].getAttribute('data-id') === data_attr) {\n                        console.log('YES');\n\n                        block_of_do.$el.children[i].remove();\n                    }\n                }\n            }\n        });\n    }\n});\n\nfunction getBlockOfDo(title) {\n    return '<div class=\"col-md-12 to-do-block\" data-id=' + ++id + '>\\n        <div class=\"row\">\\n            <div class=\"col-11\">\\n                <p class=\"m-0\" id=\"title\">' + title + '</p>\\n            </div>\\n            <div class=\"col-1 p-1\">\\n                <button class=\"delete-button\" id=\\'delete_button\\' data-id=' + id + '><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\\n            </div>\\n        </div>\\n    </div>';\n}\n\n//# sourceURL=webpack:///./js/dist/main.js?");

/***/ })

/******/ });