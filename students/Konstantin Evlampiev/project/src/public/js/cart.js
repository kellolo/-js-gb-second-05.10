let cartItem = {
    props: ['cartItem', 'index'],
    data() {
        return {
            img_url: './img/forGoodsList/'
        }
    },
    template: `<div class="cartItem">
                    <img class="cartItem__img" :src="img_url+cartItem.certImg" alt="Изображение">
                    <p class="cartItem__name"> {{cartItem.title}} </p>
                    <p class="cartItem__price"> {{cartItem.price.toFixed(2)}}</p>
                    <button class="cartItem__plusBtn" @click="$parent.addToCart(cartItem,cartItem.quantity+1)">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    <input class="cartItem__quantity" type="number" min="0" max="99" v-model="cartItem.quantity" @change="$parent.addToCart(cartItem,cartItem.quantity)">
                    <button class="cartItem__minusBtn"
                        @click="$parent.addToCart(cartItem,cartItem.quantity-1)">
                        <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                    <button class="cartItem__minusBtn" @click="$parent.deleteFromCart(cartItem)">
                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                    <p class="cartItem__totalSum">
                        {{(Number(cartItem.price)*Number(cartItem.quantity)).toFixed(2)}}</p>
                </div>`
}

let cart = {
    props: ['isvisiblecart'],
    data() {
        return {
            cartItems: [],
            url: '/api/cart'
        }
    },

    methods: {
        async getData() {
            this.$parent.makeGetReq(this.url)
                .then(data => {
                    this.cartItems = data;
                })
        },

        sendCart() {
            console.log('Not relized yet');
        },


        /**
         * 
         * @param {Number} id Поиск товара в корзине по id товара
         */
        getCartItem(id) {
            return this.cartItems.find((el, index) => el.id == id)
        },


        /**
         * Устанавливаем в корзине новое количество товара или добавляем новый 
         * @param {Good} good товар который доавляем
         * @param {Number} amount количество
         */
        addToCart(good, amount = null) {

            let needToShowMessage = (amount === null);


            let obj = this.getCartItem(good.id);
            if (obj != null) { //put  Просто обновляем количество
                amount = (amount === null) ? amount = (obj.quantity + 1) : amount; //Если объект пришел извне корзины amount==NULL и нужно добавить 1 к уже имеющемуся товару
                amount = (amount < 0) ? 0 : amount; //заглушка против глупостей 
                this.$parent.putJson('/api/cart/' + obj.id, {
                        quantity: amount
                    })
                    .then(data => {
                        if (data.result) {
                            obj.quantity = amount;
                        }
                    });
            } else { //post . Добавляем принципиально новый объект c количеством amount
                obj = Object.assign({}, good, {
                    quantity: 1
                });

                this.$parent.postJson('/api/cart', obj)
                    .then(data => {
                        if (data.result) {
                            this.cartItems.push(obj)
                        };
                    });
            }

            this.$root.displayBuyNotification = needToShowMessage;
        },


        /**
         * Удаляет товар из корзины. Совсем
         * @param {CartItem} good 
         */
        deleteFromCart(good) {
            let indx = this.cartItems.indexOf(good);
            if (indx >= 0) {
                this.$parent.deleteJson('/api/cart/' + good.id)
                    .then(data => {
                        if (data.result) {
                            this.cartItems.splice(indx, 1);
                        }
                    });
            } else throw new Error(`Good ${good} is not in the basket...`);
        },

        /**
         * Удаляет все товары из корзины у которых количество == 0
         */
        compressCart() {
            this.cartItems = this.cartItems.filter(el => el.quantity != 0);
        },

    },

    computed: {
        cartSum: function () {
            let res = 0;
            this.cartItems.forEach(el => {
                res += (el.price * el.quantity)
            });
            return res;
        },

        cartAmount: function () {
            let res = 0;
            this.cartItems.forEach(el => {
                res += el.quantity
            });
            return res;
        },
    },

    mounted() {
        this.getData();
    },

    template: `<div class="basketWindow" v-if="isvisiblecart">
                    <div class="basketWindow__refSquare">

                    </div>
                    <h2 class="basketWindow__header"> shopping list </h2>
                    <div v-if="cartAmount==0" class="emptyBasket">Basket is empty</div>
                    <div class="basketWindow__itemContainer" >
                      <cart-item v-for="(cartItem,index) in cartItems" :cartItem="cartItem" :key="cartItem.id" :index="index"> </cart-item> 
                    </div>
                    <div class="basketWindow__footer">
                        <div> Total: {{cartAmount}} items for {{cartSum.toFixed(2)}} $ </div>
                        <div class="basket__controls">
                            <button class="cartButton orangeStyled" @click="$root.isVisibleCart=false">Close</button>
                            <button class="cartButton orangeStyled" @click="sendCart()">Make order</button>
                            <button class="cartButton orangeStyled" @click="compressCart()">Recalc</button>
                        </div>
                    </div>
                </div>`,

    components: {
        'cart-item': cartItem
    }
};

export default cart