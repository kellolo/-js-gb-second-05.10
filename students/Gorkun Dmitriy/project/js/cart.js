let cartProduct = {
    props: ['prod'],
    template: `         
        <div class="cart-item">
            <div class="product-bio">
                <img :src="prod.img" alt="Some image">
                <div class="product-desc">
                    <p class="product-title">{{prod.product_name}}</p>
                    <p class="product-quantity">Quantity: {{prod.quantity}}</p>
                    <p class="product-single-price">{{prod.price}}</p>
                </div>
            </div>
            <div class="right-block">
                <p class="product-price">{{prod.quantity * prod.price}}</p>
                <button class="del-btn" v-on:click="removeItem">&times;</button>
            </div>
        </div>
  
    `,
    methods: {
        removeItem() {
            this.$emit('remove', this.prod.id_product)
        }
    }
}

let cart = {
    data() {
        return {
            cartUrl: '/getBasket.json',
            products: [],
            current: []
        }
    },

    mounted() {
        this.$parent.getJson(this.cartUrl)
            .then(data => {
                this.products = data.contents
                this.current = data.contents
            })
    },

    methods: {
        test() {
            console.log('test')
        },
        addProduct(prod) {
            const find = this.current.find((item) => item.id_product === prod.id_product)
            if (find) find.quantity++
            else {
                let item = {
                    id_product: prod.id_product,
                    product_name: prod.product_name,
                    price: prod.price,
                    quantity: 1,
                    img: prod.img.replace(/img/, 'img\/small')
                }
                this.current.push(item)
            }
        },
        removeProduct(id) {
            const find = this.current.find((item) => item.id_product === id)
            const index = this.current.findIndex((item) => item.id_product === id)
            if (find.quantity > 1) {
                find.quantity--
            }
            else this.current.splice(index, 1)
        }
    },

    template: `<div class="cart-block" v-if="$parent.isVisibleCart">
    <cart-product v-for="product in current" :prod="product" :key="product.id_product" @remove="removeProduct">
    </cart-product>
    </div>
  `,
    components: {
        'cart-product': cartProduct
    }
}
