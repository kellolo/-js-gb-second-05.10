//const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
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
            return fetch (url)
            .then (result => result.json())
            .catch (err => {
                console.log (err)
            })
        },
        postJson (url, data) {
            return fetch (url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify (data)
            })
            .then (result => result.json())
            .catch (err => {
                console.log (err)
            })
        },
        putJson (url, data) {
            return fetch (url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify (data)
            })
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
        'filter-comp': filterComp,
        'cart': cart
    }
})
