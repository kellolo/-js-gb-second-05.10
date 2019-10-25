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