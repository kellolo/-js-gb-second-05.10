//Вчера косяк был в том, что дважды вызывался метод _init () - отсюда навешивалось по два event Listener на клик по каждой кнопке
// устранено

// так же был косяк здесь:
// _updateCart (product) {
//     console.log (product)
//     let block = document.querySelector (`.cart-item[data-id = "${product.id_product}"]`)
// не тот селектор был прокинут в определение блока. надо было искать по дата-атрибуту id - иначе невозможно было определить нужный блок
// устранено

// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
// const image = 'https://placehold.it/200x150';
// const cartImage = 'https://placehold.it/100x80';
// const CATALOG_URL = '/catalogData.json'
// const CART_URL = '/getBasket.json'


// let app = new Vue ({
//     el: '#app',
//     data: {
// //забираю каталог отсюда
//         cartUrl: '/getBasket.json',
//         userCart: []
//     },
//     methods: {
//         getJson (url) {
//             return fetch (`${API + url}`)
//             .then (result => result.json())
//             .catch (err => {
//                 console.log (err)
//             })
//         },
//         addProduct (product) {
//             console.log (`Куплен ${product.product_name}`)
//         }
//     },
//     mounted () {
//         // this.getJson (this.catalogUrl)
//         //     .then (data => {this.products = data})
    
//         this.getJson (this.cartUrl)
//             .then (data => {
//                 this.userCart = data.contents})
//                 console.log (this.userCart)
//     }, 
//     components: {
//         catalog,
//         'filter-comp': filterComp
//     }
// })

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
//const image = ;
const cartImage = 'https://placehold.it/100x80';
//const CATALOG_URL = 
const CART_URL = '/getBasket.json'

let app = new Vue ({
    el: '#app',
    data: {

    },
    methods: {
        getJson (url) {
            return fetch (`${API + url}`)
            .then (result => result.json())
            .catch (err => {
                console.log (err)
            })
        },
        addProduct (product) {
            console.log (`Куплен ${product.product_name}`)
        }
    },
    mounted () {
        
    },
    components: {
        'catalog': catalog,
        'filter-comp': filterComp
    }
})


// //конструктор списка, с него будут наследоваться каталог и карта 
// class List {
//     //параметры того, что у класса разного 
//     constructor (url, container) {
//         this.container = container
//         this.url = url
//         this.goods = [] //то, что мы запрашиваем с сети
//         this.allProducts = [] //то, что мы сохраняем локально, чтобы сохранять то, что проскролили 
//     }
//     //инициализации будут происходить по разному, заглушка
//     //init это вызов конструктора вашего класса 
    
//     _init () {
//         return false
//     }

//     getJson (url) {
//         //метод запроса 
//         //если мы пробрасываем ссылку - будем переходить 
//         //если нет, будем использовать ссылки выше 
//         return fetch (url ? url : `${API + this.url}`)
//         //получаем результат и отправляем его в резалт.json
//             .then (result => result.json())
//             .catch (err => {
//                 console.log (err)
//             })
//     }
//     //будет полученные в json данные записывать в thisgoods
//     handleData (data) {
//         this.goods = [...data]
//         this.render ()
//         this._init ()
//     }
//     render () {
//         //заводим блок в котором выбираем тот контейнер, что будет в html
//         //yf момент когда мы запустили рендер мы имеем заполненные товары что получили с сервера 
//         const block = document.querySelector (this.container)
//         for (let product of this.goods) {
//         //запускаем цикл по этим товарам 
//             const prod = new lists [this.constructor.name] (product)
//         //обращаемся к словарю, когда мы будем вызывать этот метод из каталога - получим вместо this.constructor.name catalog, а в lists.catalog лежит item, обратившись так он вызовет новый класс item 
//         //prod = new item (подбрасываем product)
//             this.allProducts.push (prod)
//             block.insertAdjacentHTML ('beforeend', prod.render ())
//         }
//     }
// }
// //конструктор элемента списка 



// class Item {
//     //принимает элемент, то что запрашиваем с сервераб img
//     //this - наш локальный товарчик 
//     constructor (el, img = image) {
//         //получаем некий элемент у которого будет product_name

//         this.product_name = el.product_name
//         this.price = el.price
//         this.id_product = el.id_product
//         this.img = img
//     }
//     render () {
//         return `<div class="product-item" data-id="${this.id_product}">
//             <img src="${this.img}" alt="Some img">
//             <div class="desc">
//                 <h3>${this.product_name}</h3>
//                 <p>${this.price} $</p>
//                 <button class="buy-btn" 
//                 data-id="${this.id_product}"
//                 data-name="${this.product_name}"
//                 data-image="${this.img}"
//                 data-price="${this.price}">Купить</button>
//             </div>
//         </div>`
//     }
// }

// //конструктор каталога товаров, просто наследуем
// class catalogItem extends Item { }


// //наследуем, но добавляем 
// class CartItem extends Item {
//     constructor (el, img = cartImage) {
//     //обращаемся к суперклассу
//         super (el, img)
//     //количество сверху добавляем
//         this.quantity = el.quantity
//     }
//     //у корзины свой рендер
//     render () {
//         return `
//             <div class="cart-item" data-id="${this.id_product}">
//                 <div class="product-bio">
//                     <img src="${this.img}" alt="Some image">
//                     <div class="product-desc">
//                         <p class="product-title">${this.product_name}</p>
//                         <p class="product-quantity">Quantity: ${this.quantity}</p>
//                         <p class="product-single-price">$${this.price} each</p>
//                     </div>
//                 </div>
//                 <div class="right-block">
//                     <p class="product-price">${this.quantity * this.price}</p>
//                     <button class="del-btn" data-id="${this.id_product}">&times;</button>
//                 </div>
//             </div>
//         `
//     }
// }

// class Catalog extends List {
//     //пробрасываем корзину и url
//     constructor (cart, url = CATALOG_URL, container = '.products') {
//       //обращаемся к суперклассу
//         super (url, container)
// //чтобы организовать обмен данными между каталогом и корзиной
// //используем метод корзины внутри каталога 
//         this.cart = cart
//         this.getJson ()
//         //возьмет в конструкторе url и прибавит ссылку 
//             .then (data => this.handleData(data))
//     }
//     _init () {
//         document.querySelector (this.container).addEventListener ('click', event => {
//             if (event.target.classList.contains('buy-btn')) {
//                 //вызываем при клике метод добавления товара на кнопке 
//                 //вызываем у корзины метод, в который подбрасываем ту кнопку на котогрую нажимаем  
//                 this.cart.addProduct (event.target)
//             }
//         })
//     }
// //render () => const prod = new lists [Catalog] (product) // prod = new Item (product)
// }

// class Cart extends List {
// //render () => const prod = new lists [Cart] (product) // prod = new CartItem (product)
//         //prod = new item 
//     constructor (url = CART_URL, container = '.cart-block') {
//         super (url, container)
//         //все точно также как выше, но файлы лежат в contents 
//         this.getJson ()
//             .then (data => this.handleData(data.contents)) 
//     }
// //метод добавления в корзину 
//     addProduct (element) {
//     //пробрасываем element
//         this.getJson (API + '/addToBasket.json')
//     // там result:1 - true, подтверждение того что товар может быть добавлен 
//             .then (response => {
// //тогда если там 1, те result есть, ищем в корзине по data атрибуту 
//                 if (response.result) {
//                     let prodId = +element.dataset['id']
//                     let find = this.allProducts.find (item => item.id_product === prodId)
// //если нашел, то у найденного товара увеличиваем количество 
//                     if (find) {
//                         find.quantity ++
//                         this._updateCart (find)
// //если не нашли товар, то создаем его 
//                     } else {
//                         let product = {
//                             id_product: prodId,
//                             price: +element.dataset['price'],
//                             product_name: element.dataset['name'],
//                             img: +element.dataset['image'],
//                             quantity: 1
//                         }
//                         this.allProducts.push(product)
//                         this.render ()
//                     }
//                 }
//             })
//     }
// // удаление 
//     removeProduct (element) {
//         this.getJson (API + '/deleteFromBasket.json')
//             .then (response => {
//                 if (response.result) {
//                     let prodId = +element.dataset['id']
//                     let find = this.allProducts.find (item => item.id_product === prodId)

//                     if (find.quantity > 1) {
//                         find.quantity --
//                         this._updateCart (find)
//                     } else {
//                         this.allProducts.pussliceh(this.addProduct.indexOf(find), 1)
//                         this.goods = t
//                         this.render ()
//                     }
//                 }
//             })
//     }
// //не работает 
//     _updateCart (product) {
//         console.log (product)
// //создаем переменную block, заменяем текст
//         let block = document.querySelector (`.cart-item[data-id = "${product.id_product}"]`)
//         block.querySelector('.product-quantity').textContent = `Quantity: ${product.quantity}`
//         block.querySelector('.product-price').textContent = `${product.quantity * product.price}`
//     }
//     _init () {
//         document.querySelector ('.btn-cart').addEventListener ('click', () => {
//             //document.querySelector (this.container).classList.toggle ('invisible')
//             document.querySelector('.cart-block').classList.toggle('invisible')
//         })

//         document.querySelector (this.container).addEventListener ('click', event => {
//             if (event.target.classList.contains('del-btn')) {
//                 //this.removeProduct (event.target)
//                 console.log (`Товар ${event.target.dataset.name} удален`)
//             }
//         })
//     }
// }

// //словарь, нужен чтоб определить к какому из подклассов относить тот или иной метод
// let lists = {
//     Catalog: Item,
//     Cart: CartItem
// }

// let cart = new Cart ()
// let catalog = new Catalog (cart)