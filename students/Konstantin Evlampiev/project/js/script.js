'use strict';

//исходники для сборки json или что-то подобное
const names = ['leak detector',
    'presence sensor',
    'presence sensor',
    'smoke sensor',
    'gas sensor',
    'open sensor',
    'termometr',
    'smth'
];
const prices = [12, 10.99, 7.50, 14.10, 15, 12, 8, 8];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];
const imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
const cartImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];

/**
 * Функция генерит массив объектов из массивов, приведенных сверху
 */
function fetchProducts() {
    let arr = [];
    for (let i = 0; i < ids.length; i++) {
        arr.push(new Product(ids[i],
            names[i],
            prices[i],
            imgs[i],
            cartImages[i]));
    }
    return arr;
}


class Product {
    /**
     * Конструктор, который получает кучу параметров для инициализации
     * @param {Number} id идентификатор 
     * @param {String} name наименование
     * @param {Number} price цена
     * @param {String} image имя файла с изображением
     * @param {String} certImage имя файла с уменьшенной картинкой
     */
    constructor(id, name, price, image, certImage) {
        this.id = id;
        this.title = name;
        this.price = price;
        this.img = image;
        this.certImg = certImage;
        this.template = `<div class="goods-item" data-id=${id}>
                <img src="img/forGoodsList/${image}">
                <h3>${name}</h3>
                <p>${price.toFixed(2)}</p>
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
        this.products = fetchProducts();
    }

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


/*
const goods = [{
        title: 'Shirt',
        price: 150
    },
    {
        title: 'Socks',
        price: 50
    },
    {
        title: 'Jacket',
        price: 350
    },
    {
        title: 'Shoes',
        price: 250
    },
];


//Воспользовался свойством стрелочной функции чтобы не писать return, но код стал менее читаемым
const renderGoodsItem = (title = "no name", price = 99.99) => `<div class="goods-item"><img src="img/forGoodsList/1.jpg"><h3>${title}</h3><p>${price.toFixed(2)}</p><button type="submit" class="buiItBtn orangeStyled">Buy it</button></div>`;

//удалил запятую, она была из-за того что работали с массивом, преобразовал его .join() к строке явно через пробел 
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join(" ");
    document.querySelector('.goods-list').innerHTML = goodsList;
}


//Ну, это, чтобы гарантированно грузилось содержимое после перерисовки страницы и чтобы потом могли перересовать с другим массивом, сортированным, например или еще что 
const rGL = () => {
    renderGoodsList(goods);
}

window.addEventListener('load', rGL);

*/


class EShopApp {
    constructor() {
        this.catalog = new Catalog;
        this.cart = new Cart;
        this._init();
    }

    _init() {
        this.catalog.render();
        document.querySelectorAll('.buiItBtn').forEach(
            el => {
                el.addEventListener('click', (event) => {
                    this.sendGoodToBasket(event);
                });
            }
        );
        document.querySelector('.userMenu:last-child')
            .addEventListener('click', this.switchBasketVisibility.bind(this));


    }

    switchBasketVisibility() {
        this.cart.visible = !this.cart.visible;
    }

    /**
     * Ну, хрен его знает, как это делается. Решил в 2 этапа. Тут найдем объект товара и пробросим в корзину, а она там сама разберется 
     * @param {Event} event объект события 
     */
    sendGoodToBasket(event) {
        let goodId = event.target.parentNode.getAttribute('data-id');
        let goodForBacket = this.catalog.products.find((el, index, arr) => (el.id == goodId));
        this.cart.addProduct(goodForBacket);

    }
}


const eShop = new EShopApp;