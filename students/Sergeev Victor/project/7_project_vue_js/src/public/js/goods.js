let goodItem = {
  props: ['good'],
  template: `
    <div class="goods-item">
      <h3>{{good.product_name}}</h3>
      <p>{{good.price}}<i class="fas fa-ruble-sign"></i></p>
      <button class="toBasketBtn" @click="$root.$refs.basketCart.addProduct(good)">В корзину</button>
    </div>
  `,
  methods: {
      test (name) {
          console.log ('Куплен ' + name)
      }
  }
};

let goodsList = {
  data () {
      return {
          //catalogUrl: '/catalogData.json',
          goods: [],
          filtered: []
      }
  },
  mounted () {
      this.$parent.getJson ('/api/products')
          .then (data => {
              this.goods = data
              this.filtered = data
          })
  },
  methods: {
      filter (value) {
          let reg = new RegExp (value, 'i')
          this.filtered = this.goods.filter (el => reg.test(el.product_name))
      }
  },
  template: `
    <div class="goods-list">
      <goods-item v-for="good in filtered" :good="good" :key="good.id_product"></goods-item>
    </div>
  `,
  components: {
      "goods-item": goodItem
  }
};