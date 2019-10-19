let app = new Vue({
    el: '#app',
    data: {
        API: 'https://raw.githubusercontent.com/berryllium/-js-gb-second-05.10/gorkun/students/Gorkun%20Dmitriy/project/db',
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        imgCatalog: 'https://placehold.it/200x150',
        imgCart: 'https://placehold.it/100x80',
        getProducts: [],
        getcartProducts: [],
        products: [],
        cartProducts: []
    },
    methods: {
        getJson(url) {
            return fetch(`${this.API + url}`)
                .then(result => result.json())
                .catch(err => {
                    console.log(err)
                })
        },
        addProduct(product) {
            console.log(`Куплен ${product.product_name}`)
            const find = this.cartProducts.find((item) => item.id_product === product.id_product)
            if (find) find.quantity++
            else {
                let item = {
                    id_product: product.id_product,
                    product_name: product.product_name,
                    price: product.price,
                    quantity: 1,
                    img: product.img.replace(/img/, 'img\/small')
                }
                this.cartProducts.push(item)
            }
        },
        removeProduct(product) {
            console.log(`Удален ${product.product_name}`)
            const find = this.cartProducts.find((item) => item.id_product === product.id_product)
            const index = this.cartProducts.findIndex((item) => item.id_product === product.id_product)
            if (find.quantity > 1) {
                find.quantity--
            }
            else this.cartProducts.splice(index, 1)
        }
    },
    mounted() {
        this.getJson(this.catalogUrl)
            .then(data => this.products = this.getProducts = data)
        this.getJson(this.cartUrl)
            .then(data => this.cartProducts = this.getCartProducts = data.contents);
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.cart-block').classList.toggle('invisible')
        })
    }
})