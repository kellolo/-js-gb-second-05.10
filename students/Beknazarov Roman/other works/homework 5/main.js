const API = 'https://raw.githubusercontent.com/paradoxalyty/online-store-api-example/master/responses';
//const image = imgCatalog: 'https://placehold.it/200x150';
//const cartImage = 'https://placehold.it/100x80';
//const CATALOG_URL = 'https://placehold.it/200x150';
//const CART_URL = '/getBasket.json';


// noinspection JSUnresolvedFunction
new Vue({
    el: "#root",
    data: {
        show: false,
        catalogUrl: '/catalogData.json',
        imgCatalog: 'https://placehold.it/200x150',
        products: [],
        addUrl: '/addToBasket.json',
        imgCart: 'https://placehold.it/100x80',
        cartItems: [],
        deleteUrl: '/deleteFromBasket.json',
    },
    methods: {
        getJson(url) {
            return fetch(`${API + url}`)
                .then(result => result.json())
                .catch(err => {
                    console.log(err)
                });
        },
        addProduct(product) {
            this.getJson (this.addUrl)
                .then (response => {
                    if (response.result) {
                        let find = this.cartItems.find (item => item.product_id === product.product_id);
                        if (find) {
                            find.quantity ++;
                        } else {
                            let item = {
                                product_id: product.product_id,
                                price: product.price,
                                product_name: product.product_name,
                                quantity: 1
                            };
                            this.cartItems.push(item);
                        }
                    }
                });
        },
        removeProduct(product) {
            this.getJson (this.deleteUrl)
                .then (response => {
                    if (response.result) {
                        let find = this.cartItems.find (item => item.product_id === product.product_id);
                        if (find.quantity > 1) {
                            find.quantity --;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(find), 1);
                        }
                    }
                });
        }
    },
    mounted() {
        this.getJson(this.catalogUrl)
            .then(data => this.products = data);
    }

});