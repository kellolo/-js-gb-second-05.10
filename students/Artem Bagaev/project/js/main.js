// заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];


//создание товара
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
        this.products.push (new Product (ids [i], items[i], prices[i]))
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
    _summAllProducts () {
      let summ = 0
      for (let i = 0; i < prices.length; i++) {
        summ += +prices[i];
      }
      return summ
    }
}

let catalog = new Catalog ()

class Usercart {
    constructor () {
      this.products = []
      this._init ()
    }
    _init () {
      this._addProdcuts ()
      this._removeProdcuts ()
      this._renderCart()
    }
    _addProdcuts () {
      const button = document.querySelector('.buy-btn')
      button.addEventListener('click', function () {
        console.log('event')
      })
    }
}

let usercart = new Usercart ()
