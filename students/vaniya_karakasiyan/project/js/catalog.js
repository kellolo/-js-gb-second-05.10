let product = {
    props: ['image', 'product'],
    
    template: `
        <div class="product-item">
            <img :src="image" alt="Some img">
            <div class="desc">
                <h3> {{product.product_name}} </h3>
                <p>{{product.price}} $</p>
                <button class="buy-btn" @click="addToCart (product)">Купить</button>
            </div>
        </div>
    `,

    methods: {
        addToCart (product) {
            this.$root.getJson (this.$parent.addToCartUrl)
                .then (response => {
                    if (response.result) {
                        let prodId = +product.id_product
                        let find = this.$root.$refs.cart.cartContents.find (cartItem => cartItem.id_product === prodId)
                        if (find) {
                            find.quantity ++
                        } else {
                            let cartItem = {
                                id_product: prodId,
                                price: product.price,
                                product_name: product.product_name,
                                img: this.$root.$refs.cart.imgCart,
                                quantity: 1
                            }
                            this.$root.$refs.cart.cartContents.push(cartItem)
                        }
                    }
                })
        },
    }
}

let catalog = {
    data () {
        return {
            catalogUrl: '/catalogData.json',
            addToCartUrl: '/addToBasket.json',
            products: [],
            filtered: [],
            imgCatalog: 'https://placehold.it/200x150'
        }
    },

    mounted () {
        this.$parent.getJson (this.catalogUrl)
            .then (data => {
                this.products = data
                this.filtered = data
            })

            
    },

    methods: {
        filter (value) {
            let reg = new RegExp (value, 'i')
            this.filtered = this.products.filter (el => reg.test(el.product_name))
        }
    },

    template: `
        <div class="products">  
            <product v-for="product of filtered" :image="imgCatalog" :product="product" :key="product.id_product"></product>
        </div>
    `,
    
    components: {
        product
    }
}