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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_js_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/js/main */ \"./src/public/js/main.js\");\n\nvar app = new Vue(_public_js_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet app = new Vue({\n  el: '.container',\n  data: {\n    isVisibleCart: false,\n    displayNotification: false,\n    notificationMessage: ''\n  },\n  computed: {},\n  methods: {\n    async makeGetReq(url) {\n      try {\n        const data = await fetch(url);\n        return await data.json();\n      } catch (err) {\n        this.notificationMessage = 'Error while trying to get \\n' + url;\n        console.log(err);\n        this.displayNotification = true;\n      }\n    },\n\n    /**\r\n     * \r\n     * @param {String} url путь в формате /path/:id \r\n     * @param {Obj} data объект с полем quantity, которое будет установлено количеству товара в корзине\r\n     */\n    async putJson(url, data) {\n      return await fetch(url, {\n        method: 'PUT',\n        headers: {\n          \"Content-type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(result => result.json()).catch(err => {\n        console.log(err);\n        this.notificationMessage = 'Error while trying to get \\n' + url;\n        this.displayNotification = true;\n      });\n    },\n\n    /**\r\n     * Функция добавляет принципиально новый товар в корзину \r\n     * @param {String} url маршрут\r\n     * @param {*} data Объект корзины с выставленным количеством товара\r\n     */\n    async postJson(url, data) {\n      try {\n        const result = await fetch(url, {\n          method: 'POST',\n          headers: {\n            \"Content-type\": \"application/json\"\n          },\n          body: JSON.stringify(data)\n        });\n        return result.json();\n      } catch (err) {\n        console.error(err);\n        this.notificationMessage = 'Error while trying to get \\n' + url;\n        this.displayNotification = true;\n      }\n    },\n\n    async deleteJson(url) {\n      return await fetch(url, {\n        method: 'DELETE',\n        headers: {\n          \"Content-type\": \"application/json\"\n        }\n      }).then(result => result.json()).catch(err => {\n        console.error(err);\n        this.notificationMessage = 'Error while trying to get \\n' + url;\n        this.displayNotification = true;\n      });\n    }\n\n  },\n\n  async mounted() {},\n\n  components: {\n    'goods-list': goodsList,\n    'search': search,\n    'cart': cart,\n    'notification': notification\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ })

/******/ });