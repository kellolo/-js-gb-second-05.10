const API = 'https://raw.githubusercontent.com/petr-sed/-js-gb-second-05.10/master/students/Sedukhin%20Petr/project'
const CATALOG_URL = '/json/basa.json'
const READ_CART = '/json/getBasket.json'

let app = new Vue ({
    el: '#app',
    data: {
        mediaFolder: 'img/',
    },
    
    methods: {
        getJson (url) {
            return fetch (`${API + url}`)
                .then (result => result.json())
                .catch (err => {
                    console.log (err)
                })
        },

        getImg (product) {
            return this.mediaFolder + product.img
        },
    },

    mounted () {
    },

    components: {
        'catalog': catalog,
        'filter-comp': filterComp,
        'cart': cart
    }
})
