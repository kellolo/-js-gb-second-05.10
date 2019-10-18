'use strict';

const IMG_URL = "img/forGoodsList/";
const API_URL = "https://raw.githubusercontent.com/kevlampiev/JSONdata/master/jsLessonsLvl2";
const URL_CATALOG = '/selectAllProducts.json';
const URL_CART = '/selectAllCartItems.json';

//прообраз записи о товаре
class Item {
    constructor(el) {
        this.id = el.id;
        this.title = el.title;
        this.price = el.price;
        this.img = img;
        this.cartImg = cartImg;

    }
    render() {
        `<div class="goods-item" data-id=${this.id}>
         <img src="img/forGoodsList/${this.img}">
         <h3>${this.title}</h3>
         <p>${this.price.toFixed(2)}</p>
         <button type="submit" class="buiItBtn orangeStyled">Buy it</button>
         </div>`;
    }
}



//Прообраз списка товаров
class List {
    /**
     * 
     * @param {String} url Строка запроса данных
     * @param {String} containerName Название класса контейнара для рендеринга
     */
    constructor(url, containerName) {
        this.containerName = containerName;
        this.url = url;
        this.items = [];
        this.renderedItems = [];
        this._init()
    }

    _init() {
        return null;
    }

    /**
     * Запрос данных и заполнение items
     * @param {String} url 
     */
    async getJson(url) {
        try {
            this.items = await fetch(API_URL + url)
                .then(data => data.json());
        } catch (error) {
            alert("Can't get data from " + url);
            console.log(error);
        }
    }

    handleData(data) {
        this.goods = [...data];
        this.render();
        this._init();
    }

    render() {
        const htmlEl = document.querySelector(this.containerName);
        let str = "";
        this.items.forEach(el => {
            let product = new lists[this.constructor.name](el);
            this.renderedItems.push(product);
            str += product.render();
        });
        htmlEl.innerHTML = str;

    }
}



class СatalogItem extends Item {}

class CartItem extends Item {
    constructor(el) {
        super(el);
        this.quantity = el.quantity;
    }


    render() {
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
                         </div>`;
    }
}

//Каталог товаров
class Catalog extends List {
    constructor(cart, url = URL_CATALOG, container = '.goods-list') {
        super(url, container)
        this.cart = cart
        this.getJson(url)
            .then(data => {
                console.log(data);
                this.handleData(data)
            })
    }

    _init() {
        document.querySelector(this.containerName).addEventListener('click', event => {
            if (event.target.classList.contains('buy-btn')) {
                this.cart.addProduct(event.target)
            }
        })
    }
}

class Cart extends List {
    constructor(url = URL_CART, container = '.basketWindow__itemContainer') {
        super(url, container)
        this.getJson(url)
            .then(data => {
                this.handleData(data);
            })
        // .then(data => this.handleData(data.contents))
    }

    addProduct(element) {
        this.getJson(API + '/addToBasket.json')
            .then(response => {
                if (response.result) {
                    let prodId = +element.dataset['id']
                    let find = this.allProducts.find(item => item.id_product === prodId)
                    if (find) {
                        find.quantity++
                        this._updateCart(find)
                    } else {
                        let product = {
                            id_product: prodId,
                            price: +element.dataset['price'],
                            product_name: element.dataset['name'],
                            img: +element.dataset['image'],
                            quantity: 1
                        }
                        this.allProducts.push(product)
                        this.render()
                    }
                }
            })
    }

}


const lists = {
    Catalog: СatalogItem,
    Cart: CartItem
}



let cart = new Cart()
let catalog = new Catalog(cart)