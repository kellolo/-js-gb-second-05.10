const API_URL = "https://raw.githubusercontent.com/kevlampiev/JSONdata/master/jsLessonsLvl2";

let goodsItem = {
    props: ['product'],
    data() {
        return {
            img_url: 'img/forGoodsList/'
        };
    },
    mounted() {},
    template: ` <div class="goods-item">
                    <img v-bind:src="img_url+product.img">
                    <h3>{{product.title}}</h3>
                    <p>{{product.price.toFixed(2)}}</p>
                    <button type="submit" class="buiItBtn orangeStyled" @click="$root.$refs.cart.addToCart(product)">Buy it</button>
                </div>`
};


let goodsList = {
    props: [],
    data() {
        return {
            filteredGoods: [],
            goods: [],
            url: '/api/products'
        }
    },

    methods: {
        async getData() {
            this.$parent.makeGetReq(this.url)
                .then(result => {
                    this.goods = result;
                    this.filteredGoods = result;
                })
        },

        filter(value) {
            const rE = new RegExp(value, 'i');
            this.filteredGoods = this.goods.filter(el => rE.test(el.title));
        }

    },

    template: `<div class="goods-list">
                    <goods-item  v-for="product of filteredGoods" :product="product" :key="product.id"> </goods-item>
                </div>`,
    components: {
        'goods-item': goodsItem
    },

    mounted() {
        this.getData();
    }
};

export default goodsList