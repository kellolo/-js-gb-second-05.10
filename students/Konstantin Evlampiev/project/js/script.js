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
 * Функция генерит массив объектов из массивов сверху
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
        this.template = `<div class="goods-item">
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

    //бессмысленное поле для каталога, в принципе
    get totalPrice() {
        let summ = 0;
        for (let el of this.products) {
            summ += el.price;
        }
        return summ;
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
        this.template = ""; //html-код
    }
}

class Cart {
    constructor() {
        this.cartItems = []; //list of cartItems
    }

    /**
     * Изменяет this.cartItems: или добавляет позицию или увеличивает соответствующее количестов в позиции
     * @param {Product} product 
     */
    addProduct(product) {

    }
    /**
     * Изменяет this.cartItems: или удаляет позицию или уменьшает соответствующее количестов в позиции
     * @param {*} product 
     */
    deleteProduct(product) {

    }

    //Общее количестов товаров в корзине
    get totalQuantity() {

    }

    //Общая стоимость корзины
    get totalPrice() {

    }

    //Прорисова элементов корзины
    renderCart() {

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



let goodsList = new Catalog;
goodsList.render();

document.querySelectorAll('.buiItBtn').forEach(
    el => {
        el.addEventListener('click', (event) => {
            alert('Have not been realiazed yet')
        });
    }
);