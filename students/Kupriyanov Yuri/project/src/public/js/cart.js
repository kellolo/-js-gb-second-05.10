let cartItem = {
    props: ['image', 'prod'],
    template: `         
            <div class="cart-item">
                <div class="product-bio">
                    <img :src="image" alt="Some image">
                    <div class="product-desc">
                        <p class="product-title">{{ prod.product_name }}</p>
                        <p class="product-quantity">Quantity: {{ prod.quantity }}</p>
                        <p class="product-single-price">$ {{ prod.price }} each</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">{{ prod.price * prod.quantity }}</p>
                    <button class="del-btn" @click="$parent.removeProduct (prod)">&times;</button>
                </div>
            </div>
            `
    }

let cart = {
    data () {
        return {
            //cartUrl: '/getBasket.json',
            products: [],
            img: 'https://placehold.it/100x80'
        }
    },
    mounted () {
        this.$parent.getJson ('/api/cart')
            .then (data => {
                this.products = data
                this.products = data.contents
            })

            
    },
    methods: {
        addProduct (element) {
            let find = this.products.find (item => item.id_product === element.id_product)
            if (find) {
                this.$parent.putJson ('/api/cart/' + find.id_product, {quantity: 1})
                
                    .then (data => {
                        if (data.result) {
                            find.quantity ++
                        }
                    })
            } else {
                let prod = Object.assign ({}, element, {quantity: 1})
                this.$parent.postJson ('/api/cart', prod)
                    .then (data => {
                        if (data.result) {
                            this.products.push (prod)
                        }
                    })
            }
        },

        removeProduct (product) {
            if (product.quantity > 1) {
                this.$parent.putJson ('/api/cart/' + product.id_product, {quantity: -1})
                    .then (data => {
                        if (data.result) {
                            product.quantity --
                        }
                    })
            } else {
                this.$parent.deleteJson ('/api/cart/' + product.id_product)
                    .then (data => {
                        if (data.result) {
                            this.products.splice (this.products.indexOf (product), 1)
                        // } else {
                        //     alert ('Фигулю')
                        }
                    })
            }
        }
    },
    template: `
        <div class="cart-block" v-show="$parent.isVisibleCart">  
            <cart-item v-for="product of products" :image="img" :prod="product" :key="product.id_product"></cart-item>
        </div>
    `,
    components: {
        'cart-item': cartItem
    }
}

export default cart