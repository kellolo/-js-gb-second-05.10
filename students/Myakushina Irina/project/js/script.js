  
// const goods = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
//     { title: 'Hat', price: 100 },
//     { title: 'Cap', price: 75 },
//     { title: 'Gloves', price: 125 },
//     {},
// ];

// //Добавьте значения по умолчанию для аргументов функции.
// const renderGoodsItem = (title = 'Cup', price = 25) => {
//     return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
// };

/*
//Причина появления запятых на странице состоит в том, что
//свойство innerHTML добавляет в разметку весь массив goodsList - в виде строки.
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList;
    //Как можно упростить или сократить запись функций?
    document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.title, item.price));
    //Ничего другого не пришло в голову.
};
*/

// const renderGoodsList = (list) => {
//     for (let item of list) {
//         document.querySelector('.goods-list').insertAdjacentHTML( "beforeend", renderGoodsItem(item.title, item.price));
//     }
// };

// renderGoodsList(goods);

//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];

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
}

let catalog = new Catalog ()

// Пустые классы для корзины товаров и элемента корзины
class cartItem {

}

class Cart {

}

//создание массива объектов - имитация загрузки данных с сервера
// function fetchData () {
//     let arr = [];
//     for (let i = 0; i < items.length; i++) {
//         arr.push (createProduct (i));
//     }
//     return arr
// };

// //создание товара
// function createProduct (i) {
//     return {
//         id: ids[i],
//         name: items[i],
//         price: prices[i],
//         img: image,
//         quantity: 0,
//         createTemplate: function () {
//             return `<div class="product-item" data-id="${this.id}">
//                         <img src="${this.img}" alt="Some img">
//                         <div class="desc">
//                             <h3>${this.name}</h3>
//                             <p>${this.price} $</p>
//                             <button class="buy-btn" 
//                             data-id="${this.id}"
//                             data-name="${this.name}"
//                             data-image="${this.img}"
//                             data-price="${this.price}">Купить</button>
//                         </div>
//                     </div>`
//         },

//         add: function() {
//             this.quantity++
//         }
//     }
// };



//глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)
// var userCart = [];
// var list = fetchData ();

// //кнопка скрытия и показа корзины
// document.querySelector('.btn-cart').addEventListener('click', () => {
//     document.querySelector('.cart-block').classList.toggle('invisible');
// });
// //кнопки удаления товара (добавляется один раз)
// document.querySelector('.cart-block').addEventListener ('click', (evt) => {
//     if (evt.target.classList.contains ('del-btn')) {
//         removeProduct (evt.target);
//     }
// })
// //кнопки покупки товара (добавляется один раз)
// document.querySelector('.products').addEventListener ('click', (evt) => {
//     if (evt.target.classList.contains ('buy-btn')) {
//         addProduct (evt.target);
//     }
// })



// //рендер списка товаров (каталога)
// function renderProducts () {
//     let arr = [];
//     for (item of list) {
//         arr.push(item.createTemplate())
//     }
//     document.querySelector('.products').innerHTML = arr.join();
// }

// renderProducts ();

// //CART

// // Добавление продуктов в корзину
// function addProduct (product) {
//     let productId = +product.dataset['id'];
//     let find = userCart.find (element => element.id === productId);
//     if (!find) {
//         userCart.push ({
//             name: product.dataset ['name'],
//             id: productId,
//             img: cartImage,
//             price: +product.dataset['price'],
//             quantity: 1
//         })
//     }  else {
//         find.quantity++
//     }
//     renderCart ()
// }

// //удаление товаров
// function removeProduct (product) {
//     let productId = +product.dataset['id'];
//     let find = userCart.find (element => element.id === productId);
//     if (find.quantity > 1) {
//         find.quantity--;
//     } else {
//         userCart.splice(userCart.indexOf(find), 1);
//         document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
//     }
//     renderCart ();
// }

// //перерендер корзины
// function renderCart () {
//     let allProducts = '';
//     for (el of userCart) {
//         allProducts += `<div class="cart-item" data-id="${el.id}">
//                             <div class="product-bio">
//                                 <img src="${el.img}" alt="Some image">
//                                 <div class="product-desc">
//                                     <p class="product-title">${el.name}</p>
//                                     <p class="product-quantity">Quantity: ${el.quantity}</p>
//                                     <p class="product-single-price">$${el.price} each</p>
//                                 </div>
//                             </div>
//                             <div class="right-block">
//                                 <p class="product-price">${el.quantity * el.price}</p>
//                                 <button class="del-btn" data-id="${el.id}">&times;</button>
//                             </div>
//                         </div>`
//     }

//     document.querySelector(`.cart-block`).innerHTML = allProducts;
// }