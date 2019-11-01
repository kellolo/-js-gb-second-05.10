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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/public/index.js":
/*!*****************************!*\
  !*** ./src/public/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main */ \"./src/public/js/main.js\");\n/* harmony import */ var _style_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/normalize.css */ \"./src/public/style/normalize.css\");\n/* harmony import */ var _style_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/style.css */ \"./src/public/style/style.css\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar app = new Vue(_js_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/public/index.js?");

/***/ }),

/***/ "./src/public/js/cart.js":
/*!*******************************!*\
  !*** ./src/public/js/cart.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cartItem = {\n  props: ['image', 'prod'],\n  template: \"         \\n            <div class=\\\"cart-item\\\">\\n                <div class=\\\"product-bio\\\">\\n                    <img :src=\\\"image\\\" alt=\\\"Some image\\\">\\n                    <div class=\\\"product-desc\\\">\\n                        <p class=\\\"product-title\\\">{{ prod.product_name }}</p>\\n                        <p class=\\\"product-quantity\\\">Quantity: {{ prod.quantity }}</p>\\n                        <p class=\\\"product-single-price\\\">$ {{ prod.price }} each</p>\\n                    </div>\\n                </div>\\n                <div class=\\\"right-block\\\">\\n                    <p class=\\\"product-price\\\">{{ prod.price * prod.quantity }}</p>\\n                    <button class=\\\"del-btn\\\" @click=\\\"$parent.removeProduct (prod)\\\">&times;</button>\\n                </div>\\n            </div>\\n            \"\n};\nvar cart = {\n  data: function data() {\n    return {\n      //cartUrl: '/getBasket.json',\n      products: [],\n      img: 'https://placehold.it/100x80'\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.$parent.getJson('/api/cart').then(function (data) {\n      _this.products = data;\n      _this.products = data.contents;\n    });\n  },\n  methods: {\n    addProduct: function addProduct(element) {\n      var _this2 = this;\n\n      var find = this.products.find(function (item) {\n        return item.id_product === element.id_product;\n      });\n\n      if (find) {\n        this.$parent.putJson('/api/cart/' + find.id_product, {\n          quantity: 1\n        }).then(function (data) {\n          if (data.result) {\n            find.quantity++;\n          }\n        });\n      } else {\n        var prod = Object.assign({}, element, {\n          quantity: 1\n        });\n        this.$parent.postJson('/api/cart', prod).then(function (data) {\n          if (data.result) {\n            _this2.products.push(prod);\n          }\n        });\n      }\n    },\n    removeProduct: function removeProduct(product) {\n      var _this3 = this;\n\n      if (product.quantity > 1) {\n        this.$parent.putJson('/api/cart/' + product.id_product, {\n          quantity: -1\n        }).then(function (data) {\n          if (data.result) {\n            product.quantity--;\n          }\n        });\n      } else {\n        this.$parent.deleteJson('/api/cart/' + product.id_product).then(function (data) {\n          if (data.result) {\n            _this3.products.splice(_this3.products.indexOf(product), 1); // } else {\n            //     alert ('Фигулю')\n\n          }\n        });\n      }\n    }\n  },\n  template: \"\\n        <div class=\\\"cart-block\\\" v-show=\\\"$parent.isVisibleCart\\\">  \\n            <cart-item v-for=\\\"product of products\\\" :image=\\\"img\\\" :prod=\\\"product\\\" :key=\\\"product.id_product\\\"></cart-item>\\n        </div>\\n    \",\n  components: {\n    'cart-item': cartItem\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (cart);\n\n//# sourceURL=webpack:///./src/public/js/cart.js?");

/***/ }),

/***/ "./src/public/js/catalog.js":
/*!**********************************!*\
  !*** ./src/public/js/catalog.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar product = {\n  props: ['image', 'prod'],\n  template: \"\\n        <div class=\\\"product-item\\\">\\n            <img :src=\\\"image\\\" alt=\\\"Some img\\\">\\n            <div class=\\\"desc\\\">\\n                <h3> {{prod.product_name}} </h3>\\n                <p>{{prod.price}} $</p>\\n                <button class=\\\"buy-btn\\\" @click=\\\"$root.$refs.cart.addProduct (prod)\\\">\\u041A\\u0443\\u043F\\u0438\\u0442\\u044C</button>\\n            </div>\\n        </div>\\n    \",\n  methods: {\n    test: function test(name) {\n      console.log('Куплен ' + name);\n    }\n  }\n};\nvar catalog = {\n  data: function data() {\n    return {\n      //catalogUrl: '/catalogData.json',\n      products: [],\n      filtered: [],\n      imgCatalog: 'https://placehold.it/200x150'\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.$parent.getJson('/api/products').then(function (data) {\n      _this.products = data;\n      _this.filtered = data;\n    });\n  },\n  methods: {\n    filter: function filter(value) {\n      var reg = new RegExp(value, 'i');\n      this.filtered = this.products.filter(function (el) {\n        return reg.test(el.product_name);\n      });\n    }\n  },\n  template: \"\\n        <div class=\\\"products\\\">  \\n            <product v-for=\\\"product of filtered\\\" :image=\\\"imgCatalog\\\" :prod=\\\"product\\\" :key=\\\"product.id_product\\\"></product>\\n        </div>\\n    \",\n  components: {\n    product: product\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (catalog);\n\n//# sourceURL=webpack:///./src/public/js/catalog.js?");

/***/ }),

/***/ "./src/public/js/filter.js":
/*!*********************************!*\
  !*** ./src/public/js/filter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar filterComp = {\n  data: function data() {\n    return {\n      userSearch: ''\n    };\n  },\n  template: \"\\n        <form action=\\\"#\\\" class=\\\"search-form\\\" @submit.prevent=\\\"$root.$refs.cata.filter (userSearch)\\\">\\n            <input type=\\\"text\\\" class=\\\"search-field\\\" v-model=\\\"userSearch\\\">\\n            <button class=\\\"btn-search\\\" type=\\\"submit\\\">\\n                <i class=\\\"fas fa-search\\\"></i>\\n            </button>\\n        </form>\\n    \"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (filterComp);\n\n//# sourceURL=webpack:///./src/public/js/filter.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/public/js/cart.js\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ \"./src/public/js/catalog.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ \"./src/public/js/filter.js\");\n\n\n\nvar app = new Vue({\n  el: '#app',\n  data: {\n    isVisibleCart: false\n  },\n  methods: {\n    getJson: function getJson(url) {\n      return fetch(url).then(function (result) {\n        return result.json();\n      })[\"catch\"](function (err) {\n        console.log(err);\n      });\n    },\n    postJson: function postJson(url, data) {\n      return fetch(url, {\n        method: 'POST',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(function (result) {\n        return result.json();\n      })[\"catch\"](function (err) {\n        console.log(err);\n      });\n    },\n    putJson: function putJson(url, data) {\n      return fetch(url, {\n        method: 'PUT',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(function (result) {\n        return result.json();\n      })[\"catch\"](function (err) {\n        console.log(err);\n      });\n    },\n    deleteJson: function deleteJson(url) {\n      return fetch(url, {\n        method: 'DELETE',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        }\n      }).then(function (result) {\n        return result.json();\n      })[\"catch\"](function (err) {\n        console.log(err);\n      });\n    },\n    addProduct: function addProduct(product) {\n      console.log(\"\\u041A\\u0443\\u043F\\u043B\\u0435\\u043D \".concat(product.product_name));\n    }\n  },\n  mounted: function mounted() {},\n  components: {\n    'catalog': _catalog__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    'filter-comp': _filter__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    'cart': _cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ }),

/***/ "./src/public/style/normalize.css":
/*!****************************************!*\
  !*** ./src/public/style/normalize.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/style/normalize.css?");

/***/ }),

/***/ "./src/public/style/style.css":
/*!************************************!*\
  !*** ./src/public/style/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/style/style.css?");

/***/ })

/******/ });