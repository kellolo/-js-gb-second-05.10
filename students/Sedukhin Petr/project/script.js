const API = 'https://raw.githubusercontent.com/petr-sed/-js-gb-second-05.10/master/students/Sedukhin%20Petr/project'
const CATALOG_URL = '/basa.json'
const READ_CART = '/getBasket.json'

class List {
    constructor(url, container){
        this.container = container
        this.url = url
        this.goods = []
        this.allProducts = []
    }
    _init () {
        return false
    }
    getJson (url) {
        return fetch (url ? url : `${API + this.url}`)
            .then (result => result.json())
            .catch (err =>{
                console.log (err)
            })
    }
    handleData (data) {
        this.goods = [...data]
        this.render ()
        this._init ()
    }
    render () {
        const block = document.querySelector (this.container)
        block.innerHTML = ''
        for (let product of this.goods) {
            const prod = new lists [this.constructor.name] (product)
            this.allProducts.push (prod)
            block.insertAdjacentHTML ('beforeend', prod.render())
        }
    }
}

class Item {
    constructor (el){
        this.name = el.name
        this.price = el.price
        this.id = el.id
        this.img = el.img
    }
    render () {
        return `<div class="product-item" data-id="${this.id}">
            <img src="img/${this.img}" alt="img">
            <h2>${this.name}</h2>
            <p>price: ${this.price}</p>
            <button class="buy-btn" 
            data-id = "${this.id}"
            data-name = "${this.name}"
            data-img="${this.img}"
            data-price="${this.price}">Купить</button>
        </div>`
    }
}

class catalogItem extends Item {}

class CartItem extends Item {
    constructor (el) {
        super (el)
        this.qty = el.qty
    }
    render () {
        return `<div class="product-item-cart" data-id="${this.id}">
        <div class = "left-block">   
            <img src="img/${this.img}" alt="img">
            <h2>${this.name}</h2>
            <p>price: ${this.price}</p>
        </div>    
        <div class = "right-block">
            <button class="add-btn" data-id = "${this.id}">+</button>
            <p class = "product-quantity">${this.qty}</p>
            <button class="rem-btn" data-id = "${this.id}">-</button>
            <p class="product-price">${this.qty * this.price}</p>
        </div>
    </div>`
    }
}

class Catalog extends List {
    constructor (cart, url = CATALOG_URL, container = '.products') {
        super (url, container)
        this.cart = cart
        this.getJson ()
            .then (data => this.handleData (data))  
    }
    _init () {
        document.querySelector (this.container).addEventListener ('click', event => {
            if (event.target.classList.contains('buy-btn')) {
                this.cart.addProduct (event.target)
            }
        })
    }
}

class Cart extends List {
    constructor (url = READ_CART, container = '.cart-block') {
        super (url, container)
        this.getJson ()
            .then (data => this.handleData(data.contents))
    }

    addProduct (element) {
        this.getJson (API + '/getBasket.json')
            .then (response => {
                if (response.result)    {
                    let prodId = +element.dataset['id']
                    let find = this.goods.find (item => item.id === prodId)
                    if (find) {
                        find.qty ++
                        this._updateCart (find)
                    } else {
                        let product = {
                            id: prodId,
                            price: +element.dataset['price'],
                            name: element.dataset['name'],
                            img: element.dataset['img'],
                            qty: 1
                        }
                        this.goods.push(product)
                        this.render (product)
                    }
                }
            })
    }
    _updateCart (product) {
        let block = document.querySelector (`.product-item-cart[data-id = "${product.id}"]`)
        block.querySelector('.product-quantity').textContent = `${product.qty}`
        block.querySelector('.product-price').textContent = `${product.qty * product.price}`
    }
    _init () {
        document.querySelector ('.btn-cart').addEventListener ('click', () => {
            document.querySelector('.cart-block').classList.toggle('invisible')
        })

        document.querySelector (this.container).addEventListener ('click', event => {
            if (event.target.classList.contains('rem-btn')) {
                console.log (`Товар ${event.target.dataset.name} удален`)
            }
        })
    }
}

let lists = {
    Catalog: Item,
    Cart: CartItem
}

let cart = new Cart ()
let catalog = new Catalog (cart)