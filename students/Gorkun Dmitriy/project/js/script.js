
let url = 'https://raw.githubusercontent.com/berryllium/-js-gb-second-05.10/gorkun/students/Gorkun%20Dmitriy/project/db/catalog.json'
const imgCatalog = 'https://placehold.it/200x150'
let cartCount = document.querySelector('.cart-count')
let cartBlock = document.querySelector('.cart-block')
let cartButton = document.querySelector('.btn-cart')
let catalogBlock = document.querySelector('.products')

cartBlock.innerHTML = 'Корзина пуста'


// класс каталога
class Catalog {
    constructor() {
        this.products = []
    }
    render() {
        let htmlString = ''
        this.products.forEach(function (el) { htmlString += el.render() })
        return htmlString
    }
    getProduct(id) {
       return this.products.find(item => item.id == id)
    }
}
//_____________________________________

// класс продукта
class Product {
    constructor(id_product, product_name, price, img) {
        this.id = id_product
        this.name = product_name
        this.price = price
        this.img = img
    }
    render() {
        const htmlString = `  
                    <div class="product-item">
                        <div class="desc">
                        <h3 class="product-name">${this.name}</h3>
                        <img class="img" src="${this.img}">
                        </div>
                        <p>Цена: <span class="product-price">${this.price}</span>$</p>
                        <button class="buy-btn" type="button" data-id="${this.id}">В корзину</button>
                        <div class="prod-block invisible"></div>
                    </div>
                    `
        return htmlString
    }
}
//_______________________________________________



// HTMLHttpRequest
const makeGETRequest = url => {
    return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            resolve(getCatalog(xhr.responseText))
        }
    }
    xhr.onerror = () => reject(xhr.statusText);
    xhr.open('GET', url, true)
    xhr.send()
})
}
//__________________________________________________________________



// функция-обработчик для XHR, заполняющая каталог продуктов и выводящая его содержимое 
function getCatalog(response) {
    JSON.parse(response).forEach(el => {
        catalog.products.push(new Product(el.id_product, el.product_name, el.price, el.img))
        catalogBlock.innerHTML = catalog.render()
    });
}
//__________________________________________________________________


// класс корзины
class Cart {
    constructor() {
        this.products = []
    }
    getSum() {
        let sum = 0
        this.products.forEach(el => {
            sum += el.price * el.count
        })
        return sum
    }
    getCount() {
        let count = 0
        this.products.forEach(el => {
            count += el.count
        })
        return count
    }
    getProduct(id) {
        return this.products.find(item => item.id == id)
    }    
    addProduct(id) {
        const catalogProduct = catalog.getProduct(id)
        const cartProduct = this.getProduct(id)
        if (catalogProduct == cartProduct) cartProduct.count++
        else {
            catalogProduct.count = 1
            this.products.push(catalogProduct)
        }
        this.show()
    }
    removeProduct(id) {
        let product = this.getProduct(id)
        let index = this.products.findIndex(item => item.id == id);
        if (product.count > 1) product.count--
        else this.products.splice(index, 1)
        if (this.products.length == 0) this.clear()
    }
    clear() {
        this.products = []
        cartBlock.innerHTML = 'Корзина пуста'
        cartCount.innerHTML = 'Корзина пуста'
    }
    show() {
        cartCount.innerHTML = `${this.getCount()} шт. на сумму ${this.getSum()}$`
        cartCount.classList.remove('hidden')
        setTimeout(() => cartCount.classList.add('hidden'), 2000)
    }

    render() {
        let htmlString = ``
        this.products.forEach(function (el) {
            htmlString += `
        <p>${el.name}</p>
        <p>${el.price * el.count}$</p>
        <p>
            <button class="plus-btn" data-id="${el.id}">+</button>
            <span>${el.count}</span>
            <button class="minus-btn" data-id="${el.id}">-</button>
        </p>
        `
        })
        htmlString += `<strong>ИТОГО:</strong><strong>${this.getSum()}$</strong><p></p>`
        htmlString += `<p></p><p></p><a href="#" class = "cart-clear">Очистить</a>`
        cartBlock.innerHTML = htmlString
    }
}
//_____________________________________________________________________________________________________

// создаем корзину, новый каталог, заполняем товарами и выводим
let cart = new Cart()
let catalog = new Catalog()
let jsonCatalog = makeGETRequest(url)
//__________________________________________________________________




//События 
//обработчик для добавления товара в корзину
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('buy-btn') || e.target.classList.contains('plus-btn')) {
        cart.addProduct(+e.target.dataset['id'])
        cart.render()
    }
})

// обработчик для удаления товара из корзины
cartBlock.addEventListener('click', function (e) {
    if (e.target.classList.contains('minus-btn')) {
        cart.removeProduct(+e.target.dataset['id'])
        if(cart.products.length) cart.render()
        else cart.clear()
    }
})

// обработчик для очистки корзины
cartBlock.addEventListener('click', function (e) {
    if (e.target.classList.contains('cart-clear')) {
        cart.clear()
    }
})

// обработчик для показа содержимого корзины
cartButton.addEventListener('click', function (e) {
    cartBlock.classList.toggle('invisible')
    // setTimeout(function () { cartBlock.classList.add('invisible') }, 15000)
})





// let cart = {
//     products: []
//     , getSum: function () {
//         sum = 0
//         this.products.forEach(el => {
//             sum += el.price * el.count
//         })
//         return sum
//     }
//     ,

//     getCount() {
//         count = 0
//         this.products.forEach(el => {
//             count += el.count
//         })
//         return count
//     },

//     remProduct(id) {
//         let product = this.products.find(item => item.id == arrProducts[id - 1].id);
//         if (product) product.count++
//         else this.products.push(arrProducts[id - 1])
//         this.show()
//     },
//     delProduct(id) {
//         let product = this.products.find(item => item.id == id);
//         let index = this.products.findIndex(item => item.id == id);
//         if (product.count > 1) product.count--
//         else this.products.splice(index, 1)
//         if (this.products.length == 0) this.clear()
//     }
//     , clear() {
//     this.products = []
//     cartBlock.innerHTML = 'Корзина пуста'
//     cartCount.innerHTML = 'Корзина пуста'
// }
//     , show() {
//     cartCount.innerHTML = `${this.getCount()} шт. на сумму ${this.getSum()}$`
//     cartCount.classList.remove('hidden')
//     setTimeout(()=>cartCount.classList.add('hidden'), 2000)
// }
// }












// class Product 








// let cart = {
//     products: []
//     , getSum: function () {
//         sum = 0
//         this.products.forEach(el => {
//             sum += el.price * el.count
//         })
//         return sum
//     }
//     ,

//     getCount() {
//         count = 0
//         this.products.forEach(el => {
//             count += el.count
//         })
//         return count
//     },

//     remProduct(id) {
//         let product = this.products.find(item => item.id == arrProducts[id - 1].id);
//         if (product) product.count++
//         else this.products.push(arrProducts[id - 1])
//         this.show()
//     },
//     delProduct(id) {
//         let product = this.products.find(item => item.id == id);
//         let index = this.products.findIndex(item => item.id == id);
//         if (product.count > 1) product.count--
//         else this.products.splice(index, 1)
//         if (this.products.length == 0) this.clear()
//     }
//     , clear() {
//     this.products = []
//     cartBlock.innerHTML = 'Корзина пуста'
//     cartCount.innerHTML = 'Корзина пуста'
// }
//     , show() {
//     cartCount.innerHTML = `${this.getCount()} шт. на сумму ${this.getSum()}$`
//     cartCount.classList.remove('hidden')
//     setTimeout(()=>cartCount.classList.add('hidden'), 2000)
// }
// }

// // функция создания нового товара
// function Product(id, name, category, price) {
//     this.id = id
//     this.name = name
//     this.category = category
//     this.price = +price
//     this.count = 1
// }

// // вывод товаров на страницу
// function showProducts() {
//     let htmlString = ``
//     arrProducts.forEach(function (el) {
//         htmlString += `
//                     <div class="product-item">
//                         <div class="desc">
//                         <h3 class="product-name">${el.name}</h3>
//                         <img class="img" src="${imgCatalog}">
//                         </div>
//                         <p>Цена: <span class="product-price">${el.price}</span>$</p>
//                         <button class="buy-btn" type="button" data-id="${el.id}">В корзину</button>
//                         <div class="prod-block invisible"></div>
//                     </div>
//                     `
//     })
//     catalogBlock.innerHTML = htmlString
// }

// // функция отображения содержимого корзины
// function cart.render() {
//     let htmlString = ``
//     cart.products.forEach(function (el) {
//         htmlString += `
//         <p>${el.name}</p>
//         <p>${el.price * el.count}$</p>
//         <p>
//             <button class="plus-btn" data-id="${el.id}">+</button>
//             <span>${el.count}</span>
//             <button class="minus-btn" data-id="${el.id}">-</button>
//         </p>
//         `
//     })
//     htmlString += `<strong>ИТОГО:</strong><strong>${cart.getSum()}$</strong><p></p>`
//     htmlString += `<p></p><p></p><a href="#" class = "cart-clear">Очистить</a>`
//     cartBlock.innerHTML = htmlString
// }

// обработчик для добавления товара в корзину


// // обработчик для удаления товара из корзины
// cartBlock.addEventListener('click', function (e) {
//     if (e.target.classList.contains('minus-btn')) {
//         cart.delProduct(+e.target.dataset['id'])
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


// // добавление новых товаров в ассортимент магазина
// arrProducts.push(new Product(1, 'Тостер', 'Бытовая техника', 20))
// arrProducts.push(new Product(2, 'Кофеварка', 'Бытовая техника', 10))
// arrProducts.push(new Product(3, 'Телевизор', 'Электроника', 350))
// arrProducts.push(new Product(4, 'Принтер', 'Электроника', 60))
// arrProducts.push(new Product(5, 'Роутер', 'Электроника', 40))

// showProducts()
