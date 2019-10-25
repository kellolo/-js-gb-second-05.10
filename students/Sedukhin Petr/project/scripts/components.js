let product = {
    props: ['good'],  
    template: `
        <div>
            <img :src="$root.getImg(good)" alt="img">
            <div class="product-item">
                <h3>{{ good.name }}</h3>
                <p>{{ good.price }}</p>
                <button class="buy-btn" @click="$root.$refs.cart.addProdToCart(good)">Купить</button>
            </div>
        </div>
    `,
}

let catalog = {
    data(){
        return {
            catalogUrl: '/json/basa.json',
            mediaFolder: 'img/',
            products: [],
            filtered: []
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
            this.filtered = this.products.filter (el => reg.test(el.name))
        }
    },
    template: `
      <div class="products">
        <product v-for="product of filtered" :good="product" :img="mediaFolder" :key="product.id">
        </product>
      </div>
    `,
    components: {
        product
    }
}

let filterComp = {
    data () {
        return {
            userSearch: ''
        }
    },

    template: `
        <form action="#" class="search-form" @submit.prevent="$root.$refs.cata.filter (userSearch)">
            <input type="text" class="search-field" v-model="userSearch">
            <button class="btn-search" type="submit">
                <img src="img/search.png">
            </button>
        </form>
    `
}

let cartItem = {
    props: ['cartItem'],  
    template: `
        <div>
            <div class = "left-block">   
                <img :src="$root.getImg(cartItem)" alt="img">
                <h2>{{cartItem.name}}</h2>
                <p>price: {{cartItem.price}}</p>
            </div>    
            <div class = "right-block">
                <button class="add-btn" @click="$parent.addProdToCart(cartItem)">+</button>
                <p class = "product-quantity">{{cartItem.qty}}</p>
                <button class="rem-btn" @click="$parent.removeProdFromCart(cartItem)">-</button>
                <p class="product-price">{{cartItem.qty * cartItem.price}}</p>
            </div>
        </div>    
    `,
}

let cart = {
    data(){
        return {
            cart: [],
            cartView: false
        }
    },
    methods: {
        addProdToCart (product) {
            let res = false
            this.cart.forEach(el => {if (el.id === product.id){res = el}})
            if (res){
                res.qty ++
                this.cart.splice(this.cart.indexOf(res), 1, res)
            } else{
                product["qty"] = 1
                this.cart.push (product)
            }
        },
        removeProdFromCart (product) {
            let res = false
            this.cart.forEach(el => {if(el.id === product.id) { res = el}})
            if (res.qty > 1){
                res.qty --
                this.cart.splice(this.cart.indexOf(res), 1, res)
            } else {
                this.cart.splice(this.cart.indexOf(res), 1)
            }
        },

        totalSum () {
            let sum = 0
            this.cart.forEach(el => {
                sum += el.price * el.qty
            })
            return sum
        }
    },
    template: `
        <div class="cart">
            <button class="btn-cart" @click="cartView = !cartView" >Корзина</button>
            <div class="cart-block" v-show="cartView">
                <p v-if="cart.length == 0">Ваша корзина пуста</p>
                <cartItem v-else v-for="cartItem of cart" :cartItem = "cartItem" class="product-item-cart" :key="cartItem.id">
                </cartItem>
                <div v-if="cart.length > 0" class="total-sum">
                        Total sum:  {{totalSum()}}
                </div>
            </div>
        </div>
    `,
    components: {
        cartItem
    }
}


  