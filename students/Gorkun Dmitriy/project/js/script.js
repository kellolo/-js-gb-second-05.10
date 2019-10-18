let cartCount = document.querySelector('.cart-count')
let cartBlock = document.querySelector('.cart-block')
let cartButton = document.querySelector('.btn-cart')
let catalogBlock = document.querySelector('.products')

const API = 'https://raw.githubusercontent.com/berryllium/-js-gb-second-05.10/gorkun/students/Gorkun%20Dmitriy/project/db'
const CATALOG_URL = '/catalogData.json'
const CART_URL = '/getBasket.json'

cartBlock.innerHTML = 'Корзина пуста'


// суперкласс списка

class List {
    constructor (url, container) {
        this.container = container
        this.url = url
        this.goods = [] //то, что мы запрашиваем с сети
        this.allProducts = [] //то, что мы сохраняем локально
    }
    _init () {
        return false
    }
    getJson (url) {
        return fetch (url ? url : `${API + this.url}`)
            .then (result => result.json())
            .catch (err => {
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
        for (let product of this.goods) {
            const prod = new lists [this.constructor.name] (product)
            this.allProducts.push (prod)
            block.insertAdjacentHTML ('beforeend', prod.render ())
        }
    }
}

//__________________________________________________________

// класс товара 

class Item {
    constructor (el) {
        this.product_name = el.product_name
        this.price = el.price
        this.id_product = el.id_product
        this.img = el.img
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

//_____________________________________________________________


// товар в каталоге

class catalogItem extends Item { } 

//______________________________________________________________

// товар в корзине

class CartItem extends Item {
    constructor (el) {
        super (el)
        this.quantity = el.quantity
        this.img2 = this.img.replace(/img/,'img/small')
    }
    render () {
        return `
            <div class="cart-item" data-id="${this.id_product}">
                <div class="product-bio">
                    <img src="${this.img2}" alt="Some image">
                    <div class="product-desc">
                        <p class="product-title">${this.product_name}</p>
                        <p class="product-quantity">Quantity: ${this.quantity}</p>
                        <p class="product-single-price">$${this.price} each</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">${this.quantity * this.price}</p>
                    <button class="del-btn" data-id="${this.id_product}">&times;</button>
                </div>
            </div>
        `
    }
}

//___________________________________________________________

// класс каталога
class Catalog extends List {
    constructor (cart, url = CATALOG_URL, container = '.products') {
        super (url, container)
        this.cart = cart
        this.getJson ()
            .then (data => this.handleData(data))
    }
    _init () {
        document.querySelector (this.container).addEventListener ('click', event => {
            if (event.target.classList.contains('buy-btn')) {
                this.cart.addProduct (event.target)
            }
        })
    }
}
//_____________________________________

// класс корзины

class Cart extends List {
    //render () => const prod = new lists [Cart] (product) // prod = new CartItem (product)
        constructor (url = CART_URL, container = '.cart-block') {
            super (url, container)
            this.getJson ()
                .then (data => this.handleData(data.contents)) 
        }
    
        addProduct (element) {
            this.getJson (API + '/addToBasket.json')
                .then (response => {
                    if (response.result) {
                        let prodId = +element.dataset['id']
                        let find = this.allProducts.find (item => item.id_product === prodId)
                        if (find) {
                            find.quantity ++
                            this._updateCart (find)
                        } else {
                            let product = {
                                id_product: prodId,
                                price: +element.dataset['price'],
                                product_name: element.dataset['name'],
                                img: +element.dataset['image'],
                                quantity: 1
                            }
                            this.allProducts.push(product)
                            this.render ()
                        }
                    }
                })
        }
    
        // removeProduct (element) {
        //     this.getJson (API + '/addToBasket.json')
        //         .then (response => {
        //             if (response.result) {
        //                 let prodId = +element.dataset['id']
        //                 let find = this.allProducts.find (item => item.id_product === prodId)
    
        //                 if (find) {
        //                     find.quantity ++
        //                     this._updateCart (find)
        //                 } else {
        //                     let product = {
        //                         id_product: prodId,
        //                         price: +element.dataset['price'],
        //                         product_name: element.dataset['name'],
        //                         img: +element.dataset['image'],
        //                         quantity: 1
        //                     }
        //                     this.allProducts.push(product)
        //                     this.render ()
        //                 }
        //             }
        //         })
        // }
        _updateCart (product) {
            console.log (product)
            let block = document.querySelector (`.cart-item[data-id = "${product.id_product}"]`)
            block.querySelector('.product-quantity').textContent = `Quantity: ${product.quantity}`
            block.querySelector('.product-price').textContent = `${product.quantity * product.price}`
        }
        _init () {
            document.querySelector ('.btn-cart').addEventListener ('click', () => {
                //document.querySelector (this.container).classList.toggle ('invisible')
                document.querySelector('.cart-block').classList.toggle('invisible')
            })
    
            document.querySelector (this.container).addEventListener ('click', event => {
                if (event.target.classList.contains('del-btn')) {
                    //this.removeProduct (event.target)
                    console.log (`Товар ${event.target.dataset.name} удален`)
                }
            })
        }
    }
    

//______________________________________________

// // моя корзина
// class Cart {
//     constructor() {
//         this.products = []
//     }
//     getSum() {
//         let sum = 0
//         this.products.forEach(el => {
//             sum += el.price * el.count
//         })
//         return sum
//     }
//     getCount() {
//         let count = 0
//         this.products.forEach(el => {
//             count += el.count
//         })
//         return count
//     }
//     getProduct(id) {
//         return this.products.find(item => item.id == id)
//     }    
//     addProduct(id) {
//         const catalogProduct = catalog.getProduct(id)
//         const cartProduct = this.getProduct(id)
//         if (catalogProduct == cartProduct) cartProduct.count++
//         else {
//             catalogProduct.count = 1
//             this.products.push(catalogProduct)
//         }
//         this.show()
//     }
//     removeProduct(id) {
//         let product = this.getProduct(id)
//         let index = this.products.findIndex(item => item.id == id);
//         if (product.count > 1) product.count--
//         else this.products.splice(index, 1)
//         if (this.products.length == 0) this.clear()
//     }
//     clear() {
//         this.products = []
//         cartBlock.innerHTML = 'Корзина пуста'
//         cartCount.innerHTML = 'Корзина пуста'
//     }
//     show() {
//         cartCount.innerHTML = `${this.getCount()} шт. на сумму ${this.getSum()}$`
//         cartCount.classList.remove('hidden')
//         setTimeout(() => cartCount.classList.add('hidden'), 2000)
//     }

//     render() {
//         let htmlString = ``
//         this.products.forEach(function (el) {
//             htmlString += `
//         <p>${el.name}</p>
//         <p>${el.price * el.count}$</p>
//         <p>
//             <button class="plus-btn" data-id="${el.id}">+</button>
//             <span>${el.count}</span>
//             <button class="minus-btn" data-id="${el.id}">-</button>
//         </p>
//         `
//         })
//         htmlString += `<strong>ИТОГО:</strong><strong>${this.getSum()}$</strong><p></p>`
//         htmlString += `<p></p><p></p><a href="#" class = "cart-clear">Очистить</a>`
//         cartBlock.innerHTML = htmlString
//     }
// }
//_____________________________________________________________________________________________________

let lists = {
    Catalog: Item,
    Cart: CartItem
}

let cart = new Cart ()
let catalog = new Catalog (cart)


// //События 
// //обработчик для добавления товара в корзину
// document.addEventListener('click', function (e) {
//     if (e.target.classList.contains('buy-btn') || e.target.classList.contains('plus-btn')) {
//         cart.addProduct(+e.target.dataset['id'])
//         cart.render()
//     }
// })

// // обработчик для удаления товара из корзины
// cartBlock.addEventListener('click', function (e) {
//     if (e.target.classList.contains('minus-btn')) {
//         cart.removeProduct(+e.target.dataset['id'])
//         if(cart.products.length) cart.render()
//         else cart.clear()
//     }
// })

// // обработчик для очистки корзины
// cartBlock.addEventListener('click', function (e) {
//     if (e.target.classList.contains('cart-clear')) {
//         cart.clear()
//     }
// })

// // обработчик для показа содержимого корзины
// cartButton.addEventListener('click', function (e) {
//     cartBlock.classList.toggle('invisible')
//     // setTimeout(function () { cartBlock.classList.add('invisible') }, 15000)
// })
