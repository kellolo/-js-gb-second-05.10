let item = {
    props: ['image', 'item'],

    template: `
    <div class="cart-item">
        <div class="product-bio">
            <img :src="image" alt="Some image">
            <div class="product-desc">
                <p class="product-title">{{item.product_name}}</p>
                <p class="product-quantity">Количество: {{item.quantity}}</p>
                <p class="product-single-price">{{item.price}}₽ за шт.</p>
            </div>
        </div>
        <div class="right-block">
            <p class="product-price">{{item.quantity * item.price}}₽</p>
            <button class="del-btn" @click="removeFromCart(item)">&times;</button>
        </div>
    </div>
    `,

    methods: {
        removeFromCart (product) {
            this.$root.getJson (this.$parent.removeFromCartUrl)
                .then (response => {
                    if (response.result) {
                        let prodId = +product.id_product
                        let find = this.$parent.cartContents.find (cartItem => cartItem.id_product === prodId)
                        if (find.quantity > 1) {
                            find.quantity --
                        } else {
                            this.$parent.cartContents.splice(this.$parent.cartContents.indexOf(find), 1)
                            if (this.$parent.cartContents.length === 0) {
                                this.$parent.cartDisplay = false
                            }
                        }
                    }
                })
        }
    }
}

let cart = {
    data () {
        return {
            removeFromCartUrl: '/deleteFromBasket.json',
            imgCart: 'https://placehold.it/100x80',
            cartContents: [],
            cartDisplay: false
        }
    },


    template: `
    <div class="cart">
        <button class="btn-cart" type="button" @click="cartDisplay = !cartDisplay">Корзина</button>
        <div class="cart-block" v-show="cartDisplay">
            <div v-if="cartContents.length === 0" style="text-align:center">Корзина пуста</div>
            <item v-for="item of cartContents" :image="imgCart" :item="item" :key="item.id_product"></item>
        </div>
    </div>
    `,

    components: {
        item
    }
}