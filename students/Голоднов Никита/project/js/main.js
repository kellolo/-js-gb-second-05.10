const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
const cartImage = 'https://placehold.it/100x80';
const CART_URL = '/getBasket.json'

let app = new Vue ({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        imgCatalog: 'https://placehold.it/200x150',
        products: []
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
        this.getJson (this.catalogUrl)
            .then (data => this.products = data)
    }
})

