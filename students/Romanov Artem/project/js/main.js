//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];

//создание массива объектов - имитация загрузки данных с сервера
function fetchData () {
    let arr = [];
    for (let i = 0; i < items.length; i++) {
        arr.push (createProduct (i));
    }
    return arr
};

//создание объекта товара
function createProduct (i) {
    return {
        id: ids[i],
        name: items[i],
        price: prices[i],
        img: image,
    }
}
let data = fetchData () //массив объектов для создания товаров






function fetchProducts () {
    let arr = [];
    for (let i = 0; i < items.length; i++) {
        arr.push (new Product (data [i]));
    }
    return arr
}


class Product {
    constructor (product) {
        this.title = product.name
        this.price = product.price
        this.img = product.img
        this.id = product.id
        this.template = `<div class="product-item" data-id="${this.id}">
                            <img src="${this.img}" alt="Some img">
                            <div class="desc">
                                <h3>${this.title}</h3>
                                <p>${this.price} $</p>
                                <button class="buy-btn" 
                                data-id="${this.id}"
                                data-name="${this.title}"
                                data-image="${this.img}"
                                data-price="${this.price}">Купить</button>
                            </div>
                        </div>`
    }
}

class ProductsList {
    constructor () {
        this.products = []
        this._init ()
    }

    _init () {
        this.products = fetchProducts ()
    }
    render () {
        const block = document.querySelector ('.products')
        this.products.forEach ( product => {
            block.innerHTML += product.template
        } )
    }

    totalPrice() {
        let total=0
        const block = document.querySelector ('.products')
        //totalBlock=document.createElement()
        this.products.forEach ( product => {
            total+=product.price
        } )
        totalDiv=document.createElement("DIV")
        (block.parentNode).insertBefore(totalDiv,
        totalDiv.innerHTML=
                `<h4>Итого на сумму: ${total} $</h4>        
             </div>
            `)
    }
}

let list = new ProductsList
list.render ()
list.totalPrice()


class cartItem {

}

class Cart {

}
