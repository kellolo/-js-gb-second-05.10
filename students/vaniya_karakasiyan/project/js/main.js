const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

let app = new Vue ({
    el: '#app',

    methods: {
        getJson (url) {
            return fetch (`${API + url}`)
            .then (result => result.json())
            .catch (err => {
                console.log (err)
            })
        }
    },

    components: {
        'cart': cart,
        'sort': sort,
        'catalog': catalog
    }
})

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
const CART_URL = '/getBasket.json'

let app = new Vue ({
    el: '#app',

    data: {
        catalogUrl: '/catalogData.json',
        addToCartUrl: '/addToBasket.json',
        removeFromCartUrl: '/deleteFromBasket.json',
        imgCatalog: 'https://placehold.it/200x150',
        imgCart: 'https://placehold.it/100x80',
        products: [],
        cart: [],
        cartDisplay: false
    },

    methods: {
        getJson (url) {
            return fetch (`${API + url}`)
            .then (result => result.json())
            .catch (err => {
                console.log (err)
            })
        },

        addToCart (product) {
            this.getJson (this.addToCartUrl)
                .then (response => {
                    if (response.result) {
                        let prodId = +product.id_product
                        let find = this.cart.find (cartItem => cartItem.id_product === prodId)
                        if (find) {
                            find.quantity ++
                        } else {
                            let cartItem = {
                                id_product: prodId,
                                price: product.price,
                                product_name: product.product_name,
                                img: this.imgCart,
                                quantity: 1
                            }
                            this.cart.push(cartItem)
                        }
                    }
                })
        },

        removeFromCart (product) {
            this.getJson (this.removeFromCartUrl)
                .then (response => {
                    if (response.result) {
                        let prodId = +product.id_product
                        let find = this.cart.find (cartItem => cartItem.id_product === prodId)
                        if (find.quantity > 1) {
                            find.quantity --
                        } else {
                            this.cart.splice(this.cart.indexOf(find), 1)
                        }
                    }
                })
        }

    },

    mounted () {
        this.getJson (this.catalogUrl)
            .then (data => this.products = data)
    }
})

const image = 'https://placehold.it/200x150'
const cartImage = 'https://placehold.it/100x80'
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad']
const prices = [1000, 200, 20, 10, 25, 30, 18, 24]
const ids = [1, 2, 3, 4, 5, 6, 7, 8]


class Product {
    constructor (id, name, price, img = image) {
        this.id_product = id
        this.product_name = name
        this.price = price
        this.img = img
    }
    
    render () {
        return `<div class="product-item" data-id="${this.id_product}">
                        <img src="${this.img}" alt="Some img">
                        <div class="desc">
                            <h3>${this.product_name}</h3>
                            <p>${this.price} $</p>
                            <button class="buy-btn" 
                            data-id="${this.id_product}"
                            data-name="${this.product_name}"
                            data-image="${this.img}"
                            data-price="${this.price}">Купить</button>
                        </div>
                    </div>`
    }
}

class Catalog {
    constructor () {
        this.products = []
        this._init ()
    }

    _init () {
        this._fetchProducts ()
        this._render ()
    }

    _fetchProducts () {
        for (let i = 0; i < items.length; i++) {
            this.products.push (new Product (ids [i], items [i], prices [i]))
        }
    }

    _render () {
        const block = document.querySelector ('.products')
        let htmlString = ''
        for (let item of this.products) {
            htmlString += item.render ()
        }
        block.innerHTML = htmlString
    }

    //задание из второго урока:
    //2. Добавьте для Catalog метод, определяющий суммарную стоимость всех товаров.
    totalPrice () {
        let sum = 0
        for (let el of this.products) {
            sum += el.price
        }
        console.log(sum)
    }
}

class Cart {
    constructor () {
        this.chosenItems = []
    }

    _render () {
        let cartHtmlContent = ''

        for (let el of this.chosenItems) {
            cartHtmlContent += `<div class="cart-item" data-id="${el.id}">
                                    <div class="product-bio">
                                        <img src="${el.img}" alt="Some image">
                                        <div class="product-desc">
                                            <p class="product-title">${el.name}</p>
                                            <p class="product-quantity">Quantity: ${el.quantity}</p>
                                            <p class="product-single-price">$${el.price} each</p>
                                        </div>
                                    </div>
                                    <div class="right-block">
                                        <p class="product-price">${el.quantity * el.price}</p>
                                        <button class="del-btn" data-id="${el.id}">&times</button>
                                    </div>
                                </div>`
        }

        document.querySelector(`.cart-block`).innerHTML = cartHtmlContent
    }

    //задание из третьего урока:
    //2. Добавьте в соответствующие классы методы добавления товара в корзину, удаления товара из корзины и получения списка товаров корзины.

    add (product) {
        let productId = +product.dataset['id']
        let find = this.chosenItems.find (element => element.id === productId)
        if (!find) {
            this.chosenItems.push ({
                name: product.dataset ['name'],
                id: productId,
                img: cartImage,
                price: +product.dataset['price'],
                quantity: 1
            })
        }  else {
            find.quantity++
        }
        this._render ()
    }

    remove (product) {
        let productId = +product.dataset['id']
        let find = this.chosenItems.find (element => element.id === productId)
        if (find.quantity > 1) {
            find.quantity--
        } else {
            this.chosenItems.splice(this.chosenItems.indexOf(find), 1)
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
        }
        this._render ()
    }

    list () {
        console.log(this.chosenItems)
    }
}

let catalog = new Catalog ()
let cart = new Cart ()

document.querySelector('.products').addEventListener ('click', (evt) => {
    if (evt.target.classList.contains ('buy-btn')) {
        cart.add (evt.target)
    }
})

document.querySelector('.btn-cart').addEventListener('click', () => {
    document.querySelector('.cart-block').classList.toggle('invisible')
})

document.querySelector('.cart-block').addEventListener ('click', (evt) => {
    if (evt.target.classList.contains ('del-btn')) {
        cart.remove (evt.target)
    }
})

//оставшиеся задания из третьего урока:
//1. Переделайте makeGETRequest() так, чтобы она использовала промисы.
//3* Переделайте GoodsList так, чтобы fetchGoods() возвращал промис, а render() вызывался в обработчике этого промиса.

