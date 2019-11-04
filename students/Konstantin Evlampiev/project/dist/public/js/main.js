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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main */ \"./src/public/js/main.js\");\n/* harmony import */ var _styles_mainStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/mainStyle.css */ \"./src/public/styles/mainStyle.css\");\n/* harmony import */ var _styles_mainStyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_mainStyle_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_styleModificators_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styleModificators.css */ \"./src/public/styles/styleModificators.css\");\n/* harmony import */ var _styles_styleModificators_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styleModificators_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst app = new Vue(_js_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/public/index.js?");

/***/ }),

/***/ "./src/public/js/buy_notification.js":
/*!*******************************************!*\
  !*** ./src/public/js/buy_notification.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet buyNotification = {\n  //props: ['message'],\n  template: `<div class=\"buy-notification zoomIn\" v-if=\"$root.displayBuyNotification\">\n                    <div>\n                        <p>the item is added to cart</p>\n                        <button @click=\"$root.displayBuyNotification=false\">Close</button>\n                    </div>\n                </div>\n`\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (buyNotification);\n\n//# sourceURL=webpack:///./src/public/js/buy_notification.js?");

/***/ }),

/***/ "./src/public/js/cart.js":
/*!*******************************!*\
  !*** ./src/public/js/cart.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet cartItem = {\n  props: ['cartItem', 'index'],\n\n  data() {\n    return {\n      img_url: './img/forGoodsList/'\n    };\n  },\n\n  template: `<div class=\"cartItem\">\n                    <img class=\"cartItem__img\" :src=\"img_url+cartItem.certImg\" alt=\"Изображение\">\n                    <p class=\"cartItem__name\"> {{cartItem.title}} </p>\n                    <p class=\"cartItem__price\"> {{cartItem.price.toFixed(2)}}</p>\n                    <button class=\"cartItem__plusBtn\" @click=\"$parent.addToCart(cartItem,cartItem.quantity+1)\">\n                        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                    </button>\n                    <input class=\"cartItem__quantity\" type=\"number\" min=\"0\" max=\"99\" v-model=\"cartItem.quantity\" @change=\"$parent.addToCart(cartItem,cartItem.quantity)\">\n                    <button class=\"cartItem__minusBtn\"\n                        @click=\"$parent.addToCart(cartItem,cartItem.quantity-1)\">\n                        <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"cartItem__minusBtn\" @click=\"$parent.deleteFromCart(cartItem)\">\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                    </button>\n                    <p class=\"cartItem__totalSum\">\n                        {{(Number(cartItem.price)*Number(cartItem.quantity)).toFixed(2)}}</p>\n                </div>`\n};\nlet cart = {\n  props: ['isvisiblecart'],\n\n  data() {\n    return {\n      cartItems: [],\n      url: '/api/cart'\n    };\n  },\n\n  methods: {\n    async getData() {\n      this.$parent.makeGetReq(this.url).then(data => {\n        this.cartItems = data;\n      });\n    },\n\n    sendCart() {\n      console.log('Not relized yet');\n    },\n\n    /**\r\n     * \r\n     * @param {Number} id Поиск товара в корзине по id товара\r\n     */\n    getCartItem(id) {\n      return this.cartItems.find((el, index) => el.id == id);\n    },\n\n    /**\r\n     * Устанавливаем в корзине новое количество товара или добавляем новый \r\n     * @param {Good} good товар который доавляем\r\n     * @param {Number} amount количество\r\n     */\n    addToCart(good, amount = null) {\n      let needToShowMessage = amount === null;\n      let obj = this.getCartItem(good.id);\n\n      if (obj != null) {\n        //put  Просто обновляем количество\n        amount = amount === null ? amount = obj.quantity + 1 : amount; //Если объект пришел извне корзины amount==NULL и нужно добавить 1 к уже имеющемуся товару\n\n        amount = amount < 0 ? 0 : amount; //заглушка против глупостей \n\n        this.$parent.putJson('/api/cart/' + obj.id, {\n          quantity: amount\n        }).then(data => {\n          if (data.result) {\n            obj.quantity = amount;\n          }\n        });\n      } else {\n        //post . Добавляем принципиально новый объект c количеством amount\n        obj = Object.assign({}, good, {\n          quantity: 1\n        });\n        this.$parent.postJson('/api/cart', obj).then(data => {\n          if (data.result) {\n            this.cartItems.push(obj);\n          }\n\n          ;\n        });\n      }\n\n      this.$root.displayBuyNotification = needToShowMessage;\n    },\n\n    /**\r\n     * Удаляет товар из корзины. Совсем\r\n     * @param {CartItem} good \r\n     */\n    deleteFromCart(good) {\n      let indx = this.cartItems.indexOf(good);\n\n      if (indx >= 0) {\n        this.$parent.deleteJson('/api/cart/' + good.id).then(data => {\n          if (data.result) {\n            this.cartItems.splice(indx, 1);\n          }\n        });\n      } else throw new Error(`Good ${good} is not in the basket...`);\n    },\n\n    /**\r\n     * Удаляет все товары из корзины у которых количество == 0\r\n     */\n    compressCart() {\n      this.cartItems = this.cartItems.filter(el => el.quantity != 0);\n    }\n\n  },\n  computed: {\n    cartSum: function () {\n      let res = 0;\n      this.cartItems.forEach(el => {\n        res += el.price * el.quantity;\n      });\n      return res;\n    },\n    cartAmount: function () {\n      let res = 0;\n      this.cartItems.forEach(el => {\n        res += el.quantity;\n      });\n      return res;\n    }\n  },\n\n  mounted() {\n    this.getData();\n  },\n\n  template: `<div class=\"basketWindow\" v-if=\"isvisiblecart\">\n                    <div class=\"basketWindow__refSquare\">\n\n                    </div>\n                    <h2 class=\"basketWindow__header\"> shopping list </h2>\n                    <div v-if=\"cartAmount==0\" class=\"emptyBasket\">Basket is empty</div>\n                    <div class=\"basketWindow__itemContainer\" >\n                      <cart-item v-for=\"(cartItem,index) in cartItems\" :cartItem=\"cartItem\" :key=\"cartItem.id\" :index=\"index\"> </cart-item> \n                    </div>\n                    <div class=\"basketWindow__footer\">\n                        <div> Total: {{cartAmount}} items for {{cartSum.toFixed(2)}} $ </div>\n                        <div class=\"basket__controls\">\n                            <button class=\"cartButton orangeStyled\" @click=\"$root.isVisibleCart=false\">Close</button>\n                            <button class=\"cartButton orangeStyled\" @click=\"sendCart()\">Make order</button>\n                            <button class=\"cartButton orangeStyled\" @click=\"compressCart()\">Recalc</button>\n                        </div>\n                    </div>\n                </div>`,\n  components: {\n    'cart-item': cartItem\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (cart);\n\n//# sourceURL=webpack:///./src/public/js/cart.js?");

/***/ }),

/***/ "./src/public/js/catalog.js":
/*!**********************************!*\
  !*** ./src/public/js/catalog.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst API_URL = \"https://raw.githubusercontent.com/kevlampiev/JSONdata/master/jsLessonsLvl2\";\nlet goodsItem = {\n  props: ['product'],\n\n  data() {\n    return {\n      img_url: 'img/forGoodsList/'\n    };\n  },\n\n  mounted() {},\n\n  template: ` <div class=\"goods-item\">\n                    <img v-bind:src=\"img_url+product.img\">\n                    <h3>{{product.title}}</h3>\n                    <p>{{product.price.toFixed(2)}}</p>\n                    <button type=\"submit\" class=\"buiItBtn orangeStyled\" @click=\"$root.$refs.cart.addToCart(product)\">Buy it</button>\n                </div>`\n};\nlet goodsList = {\n  props: [],\n\n  data() {\n    return {\n      filteredGoods: [],\n      goods: [],\n      url: '/api/products'\n    };\n  },\n\n  methods: {\n    async getData() {\n      this.$parent.makeGetReq(this.url).then(result => {\n        this.goods = result;\n        this.filteredGoods = result;\n      });\n    },\n\n    filter(value) {\n      const rE = new RegExp(value, 'i');\n      this.filteredGoods = this.goods.filter(el => rE.test(el.title));\n    }\n\n  },\n  template: `<div class=\"goods-list\">\n                    <goods-item  v-for=\"product of filteredGoods\" :product=\"product\" :key=\"product.id\"> </goods-item>\n                </div>`,\n  components: {\n    'goods-item': goodsItem\n  },\n\n  mounted() {\n    this.getData();\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (goodsList);\n\n//# sourceURL=webpack:///./src/public/js/catalog.js?");

/***/ }),

/***/ "./src/public/js/error_notification.js":
/*!*********************************************!*\
  !*** ./src/public/js/error_notification.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet errorNotification = {\n  props: ['message'],\n  template: `<div class=\"error-notification\" v-if=\"$root.displayErrorNotification\">\n                    <div>\n                        <p>{{message}}</p>\n                        <button @click=\"$root.displayErrorNotification=false\">Close</button>\n                    </div>\n                </div>\n`\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (errorNotification);\n\n//# sourceURL=webpack:///./src/public/js/error_notification.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/public/js/cart.js\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ \"./src/public/js/catalog.js\");\n/* harmony import */ var _error_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error_notification */ \"./src/public/js/error_notification.js\");\n/* harmony import */ var _buy_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buy_notification */ \"./src/public/js/buy_notification.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider */ \"./src/public/js/slider.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search */ \"./src/public/js/search.js\");\n\n\n\n\n\n\nlet app = new Vue({\n  el: '.container',\n  data: {\n    isVisibleCart: false,\n    displayErrorNotification: false,\n    displayBuyNotification: false,\n    notificationMessage: ''\n  },\n  computed: {},\n  methods: {\n    async makeGetReq(url) {\n      try {\n        const data = await fetch(url);\n        return await data.json();\n      } catch (err) {\n        this.notificationMessage = 'Error while trying to get \\n' + url;\n        console.log(err);\n        this.displayErrorNotification = true;\n      }\n    },\n\n    /**\r\n     * \r\n     * @param {String} url путь в формате /path/:id \r\n     * @param {Obj} data объект с полем quantity, которое будет установлено количеству товара в корзине\r\n     */\n    async putJson(url, data) {\n      return await fetch(url, {\n        method: 'PUT',\n        headers: {\n          \"Content-type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(result => result.json()).catch(err => {\n        console.log(err);\n        this.notificationMessage = 'Error while trying to get \\n' + url;\n        this.displayErrorNotification = true;\n      });\n    },\n\n    /**\r\n     * Функция добавляет принципиально новый товар в корзину \r\n     * @param {String} url маршрут\r\n     * @param {*} data Объект корзины с выставленным количеством товара\r\n     */\n    async postJson(url, data) {\n      try {\n        const result = await fetch(url, {\n          method: 'POST',\n          headers: {\n            \"Content-type\": \"application/json\"\n          },\n          body: JSON.stringify(data)\n        });\n        return result.json();\n      } catch (err) {\n        console.error(err);\n        this.notificationMessage = 'Error while trying to get \\n' + url;\n        this.displayErrorNotification = true;\n      }\n    },\n\n    async deleteJson(url) {\n      return await fetch(url, {\n        method: 'DELETE',\n        headers: {\n          \"Content-type\": \"application/json\"\n        }\n      }).then(result => result.json()).catch(err => {\n        console.error(err);\n        this.notificationMessage = 'Error while trying to get \\n' + url;\n        this.displayErrorNotification = true;\n      });\n    }\n\n  },\n\n  async mounted() {},\n\n  components: {\n    'goods-list': _catalog__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    'search': _search__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    'cart': _cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    'error_notification': _error_notification__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    'buy_notification': _buy_notification__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    'slider': _slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ }),

/***/ "./src/public/js/search.js":
/*!*********************************!*\
  !*** ./src/public/js/search.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet search = {\n  data() {\n    return {\n      searchStr: ''\n    };\n  },\n\n  template: `<div class=\"searchForm\">\n                    <input type=\"search\" placeholder=\"Enter product name here...\" v-model=\"searchStr\" @input=\"$root.$refs.catalog.filter(searchStr)\">\n                    <button ><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button> \n                </div> `\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (search);\n\n//# sourceURL=webpack:///./src/public/js/search.js?");

/***/ }),

/***/ "./src/public/js/slider.js":
/*!*********************************!*\
  !*** ./src/public/js/slider.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_slider_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/slider.css */ \"./src/public/styles/slider.css\");\n/* harmony import */ var _styles_slider_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_slider_css__WEBPACK_IMPORTED_MODULE_0__);\n\nlet sliderItem = {\n  props: ['slide'],\n\n  data() {\n    return {};\n  },\n\n  template: `<div v-bind:class=\"slide.currentClass\">\n                    <img v-bind:src=\"slide.imgFile\" alt=\"slide.fileComment\" class=\"grayImg\">\n                </div>`\n};\nlet slider = {\n  data() {\n    return {\n      slides: [],\n      readyToSlide: true,\n      imp_path: './img/forSlider/',\n      currentIdx: 0,\n      intervalID: null\n    };\n  },\n\n  template: ` <div class=\"slider centered\">\n                    <slider-item v-for=\"slide of slides\" :slide=\"slide\" :key=\"slide.imgFile\"> </slider-item>\n                    <i class=\"fas fa-chevron-circle-right slider-rightArrow\" @click=\"nextSlideRight()\"> </i>\n                    <i class=\"fas fa-chevron-circle-left slider-leftArrow\" @click=\"nextSlideLeft()\"> </i>\n                    <div class=\"slider__comment cyanStyled\">\n                        {{slides[currentIdx].slideText}}\n                    </div>\n                </div>\n              `,\n  components: {\n    'slider-item': sliderItem\n  },\n  methods: {\n    getData() {\n      let donorText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam officia consequuntur nisi\n            recusandae, ratione impedit excepturi magni ducimus repudiandae id minus commodi consectetur quibusdam\n            reprehenderit quidem culpa. Necessitatibus tempore saepe maxime iusto ea velit, ipsum perferendis eius\n            accusantium fugit excepturi illum, praesentium nobis? Corporis rem quae voluptates repellendus vel\n            nesciunt.`;\n\n      for (let i = 0; i < 5; i++) {\n        let rnd1 = Math.floor(Math.random() * 60);\n        this.slides.push({\n          imgFile: `${this.imp_path}${i + 1}.jpg`,\n          currentClass: 'slider-item hidden-slide',\n          fileComment: `The slide number ${i + 1}`,\n          slideText: donorText.slice(0, rnd1 + 40)\n        });\n      }\n\n      ;\n      this.slides[0].currentClass = 'slider-item';\n    },\n\n    nextSlideRight() {\n      if (this.readyToSlide) {\n        this.readyToSlide = false;\n        clearInterval(this.intervalID);\n        let prevIndex = this.currentIdx;\n        this.currentIdx = prevIndex == this.slides.length - 1 ? 0 : this.currentIdx + 1;\n        this.slides[this.currentIdx].currentClass = 'slider-item slide-left';\n        this.slides[prevIndex].currentClass = 'slider-item erase-left';\n        setTimeout(() => {\n          this.slides[this.currentIdx].currentClass = 'slider-item';\n          this.slides[prevIndex].currentClass = 'slider-item hidden-slide';\n          this.readyToSlide = true; //!!\n\n          this.intervalID = setInterval(this.nextSlideRight, 10000);\n        }, 1500);\n      }\n    },\n\n    nextSlideLeft() {\n      if (this.readyToSlide) {\n        this.readyToSlide = false;\n        clearInterval(this.intervalID);\n        let prevIndex = this.currentIdx;\n        this.currentIdx = prevIndex == 0 ? this.slides.length - 1 : this.currentIdx - 1;\n        this.slides[this.currentIdx].currentClass = 'slider-item slide-right';\n        this.slides[prevIndex].currentClass = 'slider-item erase-right';\n        setTimeout(() => {\n          this.slides[this.currentIdx].currentClass = 'slider-item';\n          this.slides[prevIndex].currentClass = 'slider-item hidden-slide';\n          this.readyToSlide = true; //!!\n\n          this.intervalID = setInterval(this.nextSlideRight, 10000);\n        }, 1500);\n      }\n    }\n\n  },\n\n  beforeMount() {\n    this.getData();\n    this.intervalID = setInterval(this.nextSlideRight, 10000);\n    this.readyToSlide = true;\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (slider);\n\n//# sourceURL=webpack:///./src/public/js/slider.js?");

/***/ }),

/***/ "./src/public/styles/mainStyle.css":
/*!*****************************************!*\
  !*** ./src/public/styles/mainStyle.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/styles/mainStyle.css?");

/***/ }),

/***/ "./src/public/styles/slider.css":
/*!**************************************!*\
  !*** ./src/public/styles/slider.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/styles/slider.css?");

/***/ }),

/***/ "./src/public/styles/styleModificators.css":
/*!*************************************************!*\
  !*** ./src/public/styles/styleModificators.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/styles/styleModificators.css?");

/***/ })

/******/ });