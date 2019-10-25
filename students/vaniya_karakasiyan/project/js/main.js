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

//оставшиеся задания из третьего урока:
//1. Переделайте makeGETRequest() так, чтобы она использовала промисы.
//3* Переделайте GoodsList так, чтобы fetchGoods() возвращал промис, а render() вызывался в обработчике этого промиса.
