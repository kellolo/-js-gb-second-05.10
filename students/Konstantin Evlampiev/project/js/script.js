'use strict';

// //исходники для сборки json или что-то подобное
// const names = ['leak detector',
//     'presence sensor',
//     'presence sensor',
//     'smoke sensor',
//     'gas sensor',
//     'open sensor',
//     'termometr',
//     'smth'
// ];
// const prices = [12, 10.99, 7.50, 14.10, 15, 12, 8, 8];
// const ids = [1, 2, 3, 4, 5, 6, 7, 8];
// const imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
// const cartImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];

// /**
//  * Функция генерит массив объектов из массивов, приведенных сверху
//  */
// function fetchProducts() {
//     let arr = [];
//     for (let i = 0; i < ids.length; i++) {
//         arr.push(new Product(ids[i],
//             names[i],
//             prices[i],
//             imgs[i],
//             cartImages[i]));
//     }
//     return arr;
// }

/**
 * Произвольный get-запрос
 * @param {String} url 
 * @param {Function} callBackF 
 */
function makeGetRequest(url, callBackF) {
    let xmlReq = new XMLHttpRequest();
    xmlReq.onreadystatechange = () => {
        if (xmlReq.readyState === 4) {
            callBackF(xmlReq.responseText);
        }
    }
    xmlReq.open('GET', url, true);
    xmlReq.send();
}

function promiseAJAX(url) {
    return new Promise((result, reject) => {
        let xmlReq = new XMLHttpRequest();
        xmlReq.onreadystatechange = () => {
            if (xmlReq.readyState === 4) {
                if (xmlReq.status === 200) {
                    result(xmlReq.responseText);
                } else {
                    reject("Error request...")
                }
            }
        }
        xmlReq.open('GET', url, true);
        xmlReq.send();
    })
}

//Строка get-запроса
const API_URL = "https://raw.githubusercontent.com/kevlampiev/JSONdata/master/jsLessonsLvl2";


class Product {
    /**
     * Конструктор, который получает кучу параметров для инициализации
     * @param {Number} id идентификатор 
     * @param {String} title наименование
     * @param {Number} price цена
     * @param {String} image имя файла с изображением
     * @param {String} certImage имя файла с уменьшенной картинкой
     */
    constructor(id, title, price, image, certImage) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = image;
        this.certImg = certImage;
    }

    /**
     * Отдельное свойство для template, чтобы не засорять данные на сервере
     */
    get template() {
        return `<div class="goods-item" data-id=${this.id}>
        <img src="img/forGoodsList/${this.img}">
        <h3>${this.title}</h3>
        <p>${this.price.toFixed(2)}</p>
        <button type="submit" class="buiItBtn orangeStyled">Buy it</button>
        </div>`;
    }
}

class Catalog {
    constructor() {
        this.products = [];
        this.catalogContainer = document.querySelector('.goods-list');
        this._init();
    }

    _init() {
        //this.products = fetchProducts();
        //this.fetchGoods1(this.render.bind(this));
        //пришлось все снести отсюда к едрени-фене: асинхронность 
    }

    /**
     * Функция-транслятор, генерящая из простых данных данные с template
     */
    fillProducts(goods) {
        this.products = [];
        goods.forEach(el => {
            this.products.push(new Product(el.id,
                el.title,
                el.price,
                el.img,
                el.certImg));
        });

    }


    /**
     * Отрисовка. Простая функция
     */
    render() {
        this.products.forEach(product => {
            this.catalogContainer.innerHTML += product.template
        });
    }

}




class CartItem {
    /**
     * 
     * @param {Product} product 
     */
    constructor(product) {
        this.product = product;
        this.quantity = 1; //Количество продуктов данного вида в корзине
    }

    get template() {
        return `<div class="cartItem" data-id="${this.product.id}">
                <img class="cartItem__img" 
                    src="img/forGoodsList/${this.product.certImg}" 
                    alt="Изображение">
                <p class="cartItem__name"> ${this.product.title} </p>
                <p class="cartItem__price"> ${this.product.price.toFixed(2)}</p>
                <button class="cartItem__plusBnt">+</button>
                <input class="cartItem__quantity" type="number" min="0" max="99" value="${this.quantity}">
                <button class="cartItem__minusBnt">-</button>
                <p class="cartItem__totalSum"> ${(Number(this.product.price)*Number(this.quantity)).toFixed(2)}</p>
                </div>`
    }
}

class Cart {
    constructor() {
        this.cartItems = []; //list of cartItems
        this.cartElement = document.querySelector('.basketWindow'); //может быть null
        this.basketFooterElement = document.querySelector('.basketWindow__footer');
        this._visible = false; //по умолчанию корзина не видна
        if (this.cartElement == null) {
            throw new Error('элемент с классом .basketWindow не найден на странице')
        }
        if (this.basketFooterElement == null) {
            throw new Error('элемент с классом .basketWindow__footer не найден на странице')
        }
    }

    get visible() {
        return this._visible;
    }

    set visible(visibility) {
        if (Boolean(visibility)) {
            this.cartElement.classList.remove('hidden-form');
        } else {
            this.cartElement.classList.add('hidden-form');
        }
        this._visible = visibility;
    }

    /**
     * Навигационная функция ищет по id продукта объект в корзине
     * @param {Number} id идентификатор продукта
     */
    getCartItemById(id) {
        return this.cartItems.find(el => el.product.id == id);
    }

    /**
     * Навигационная функция ищет объект в корзине с заданным продуктом
     * @param {*} product 
     */
    getCartItemByProduct(product) {
        return this.cartItems.find(el => el.product === product);
    }

    /**
     * Изменяет this.cartItems: или добавляет позицию или увеличивает соответствующее количестов в позиции
     * @param {Product} product 
     */
    addProduct(product) {
        let productInBasket = this.cartItems.find(el => el.product === product);
        if (productInBasket == null) {
            this.cartItems.push(new CartItem(product));
        } else {
            this.incProductQuantity(productInBasket);
        }
        this.renderCart();
    }

    /**
     * Увеличивает количество продукта, который уже есть в корзине на 1
     * @param {*} productInBasket 
     */
    incProductQuantity(productInBasket) {
        productInBasket.quantity++;
    }

    /**
     * Уменьшает количество продукта, который уже есть в корзине на 1
     * @param {*} productInBasket 
     */
    decProductQuantity(productInBasket) {
        productInBasket.quantity--;
    }

    /**
     * Изменяет this.cartItems: или удаляет позицию или уменьшает соответствующее количестов в позиции
     * @param {*} product 
     */
    deleteProduct(product) {

    }

    //Общее количестов товаров в корзине
    get totalQuantity() {
        let res = 0;
        for (let position of this.cartItems) {
            res += Number(position.quantity);
        }
        return res;
    }

    //Общая стоимость корзины
    get totalPrice() {
        let res = 0;
        for (let position of this.cartItems) {
            res += Number(position.quantity) * Number(position.product.price);
        }
        return res;

    }

    /**
     * Прорисока корзины и добавление обработчиков событий
     */
    renderCart() {
        //header of Cart
        let htmlString = `<div class="basketWindow__refSquare">
                        </div>
                        <h2 class="basketWindow__header"> shopping list </h2>`;
        //body
        this.cartItems.forEach(el => {
            htmlString += el.template;
        });
        //footer of Cart
        htmlString += `<div class="basketWindow__footer"> Total: ${this.totalQuantity.toFixed(0)}
         positions for ${this.totalPrice.toFixed(2)} $ </div>`;
        this.cartElement.innerHTML = htmlString;

        this.addPlusBtnListeners();
        this.addMinusBtnListeners();
        this.addInputListeners();

    }

    /**
     * Пересчет значений и вывод верных
     */
    recalc() {
        let posElements = document.querySelectorAll('.cartItem');
        try {
            posElements.forEach(el => {
                let price = Number(el.querySelector('.cartItem__price').innerHTML);
                let quantity = Number(el.querySelector('.cartItem__quantity').value);
                el.querySelector('.cartItem__totalSum').innerHTML = (price * quantity).toFixed(2).toString();

            });
        } finally {
            this.cartElement.querySelector('.basketWindow__footer')
                .innerHTML = `Total: ${this.totalQuantity.toFixed(0)}
                positions for ${this.totalPrice.toFixed(2)} $`;
        }

    }
    /**
     * Навешивание обработчиков событий на кнопки +
     */
    addPlusBtnListeners() {
        let plusBtns = this.cartElement.querySelectorAll('.cartItem__plusBnt');
        plusBtns.forEach((el, key, parent) => {
            el.addEventListener('click', (event) => {
                let quantityInput = event.target.parentNode.querySelector('.cartItem__quantity');
                let productId = Number(event.target.parentNode.getAttribute('data-id'));
                let cartItm = this.getCartItemById(productId);
                cartItm.quantity = ++quantityInput.value; // Принудительное согласование 
                this.recalc();
            })
        })

    }
    /**
     * Навешиваем обработчики событий на кнопки "-"
     */
    addMinusBtnListeners() {
        let plusBtns = this.cartElement.querySelectorAll('.cartItem__minusBnt');
        plusBtns.forEach((el, key, parent) => {
            el.addEventListener('click', (event) => {
                let quantityInput = event.target.parentNode.querySelector('.cartItem__quantity');
                let productId = Number(event.target.parentNode.getAttribute('data-id'));
                let cartItm = this.getCartItemById(productId);

                if (quantityInput.value > 0) {
                    quantityInput.value--;
                } else {
                    quantityInput.value = 0;
                }
                cartItm.quantity = quantityInput.value; // Принудительное согласование
                this.recalc();
            })
        })
    }

    addInputListeners() {
        let inputs = this.cartElement.querySelectorAll('.cartItem__quantity');
        inputs.forEach(el => {
            el.addEventListener('change', (event) => {
                let productId = Number(event.target.parentNode.getAttribute('data-id'));
                if (event.target.value < 0) {
                    event.target.value = 0;
                }
                this.getCartItemById(productId).quantity = Number(event.target.value);
                this.recalc();
            })
        })

    }

}


class EShopApp {
    constructor() {
        this.catalog = new Catalog;
        this.cart = new Cart;
        this._init(); //Можно поменять на _init1 или _init2
    }

    /**
     * Вариант 1. Просто создание класса XMLHttpRequest
     * @param {Function} callBackF 
     */
    fetchGoods1(callBackF) {
        makeGetRequest(API_URL + '/selectAll.json', (goods) => {
            this.catalog.fillProducts(JSON.parse(goods));
            callBackF();
        })
    }
    /**
     * init with a callback function
     */
    _init1() {

        this.fetchGoods1(() => {
            this.catalog.render();
            document.querySelectorAll('.buiItBtn').forEach(
                el => {
                    el.addEventListener('click', (event) => {
                        this.sendGoodToBasket(event);
                    });
                }
            );
        });
        document.querySelector('.userMenu:last-child')
            .addEventListener('click', this.switchBasketVisibility.bind(this));
    }



    /**
     * Вариант 2. Использование promise. Можно было просто в init
     */
    // fetchGoods2() {

    // }

    /**
     * init with a promise
     */
    _init2() {
        promiseAJAX(API_URL + '/selectAll.json')
            .then((goods) => {
                this.catalog.fillProducts(JSON.parse(goods));
                this.catalog.render();
                document.querySelectorAll('.buiItBtn').forEach(
                    el => {
                        el.addEventListener('click', (event) => {
                            this.sendGoodToBasket(event);
                        });
                    }
                );
            })
            .catch((err) => {
                alert(error);
                console.log(err);
            });
        document.querySelector('.userMenu:last-child')
            .addEventListener('click', this.switchBasketVisibility.bind(this));
    }

    /**
     * init with fetch()
     */
    _init() {
        let data = fetch(API_URL + '/selectAll.json')
            .then((data) => data.json()).then((goods) => {
                this.catalog.fillProducts(goods)
                this.catalog.render();
                document.querySelectorAll('.buiItBtn').forEach(
                    el => {
                        el.addEventListener('click', (event) => {
                            this.sendGoodToBasket(event);
                        });
                    }
                );
            });
        document.querySelector('.userMenu:last-child')
            .addEventListener('click', this.switchBasketVisibility.bind(this));
    }


    switchBasketVisibility() {
        this.cart.visible = !this.cart.visible;
    }

    /**
     * Проброс товара в корзину 
     * @param {Event} event объект события 
     */
    sendGoodToBasket(event) {
        let goodId = event.target.parentNode.getAttribute('data-id');
        let goodForBacket = this.catalog.products.find((el, index, arr) => (el.id == goodId));
        this.cart.addProduct(goodForBacket);

    }
}


const eShop = new EShopApp;