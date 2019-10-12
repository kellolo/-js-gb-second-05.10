//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];

class Product {
    constructor(id, name, price, img = image) {
        this.product_id = id;
        this.product_name = name;
        this.price = price;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.product_id}">
                            <img src="${this.img}" alt="Some img">
                            <div class="desc">
                                <h3>${this.product_name}</h3>
                                <p>${this.price}</p>
                                <button class="buy-btn btn"
                                data-id="${this.product_id}"
                                data-name="${this.product_name}"
                                data-image="${this.img}"
                                data-price="${this.price}">Buy</button>
                            </div>
                        </div>`;
    }
}

class Catalog {
    constructor() {
        this.products = [];
        this._init();
    }

    _init() {
        this._fetchProducts();
        this._render();
    }

    _fetchProducts() {
        for (let i = 0; i < items.length; i++) {
            this.products.push(new Product(ids[i], items[i], prices[i]))
        }
    }

    _render() {
        const block = document.querySelector('.catalog');
        let htmlString = "";
        for (let item of this.products) {
            htmlString += item.render();
        }
        block.innerHTML = htmlString;

        this.countTotalPrice();
    }

    countTotalPrice() {
        let totalPrice = null;
        this.products.forEach(item => {
            totalPrice += item.price
        });
        console.log(totalPrice);
    }

}

let catalog = new Catalog();

class Cart {
    constructor() {
        this.items = [];
        this._init();
    }

    _init() {

    }

    render() {

    }

    addCartItem() {

    }

    removeCartItem() {

    }

    countTotal() {

    }

}

class CartItem {
    countItem() {

    }
}
