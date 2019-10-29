let product = {
    props: ['image', 'prod'],
    template: `
        <div class="product-item">
            <img :src="image" alt="Some img">
            <div class="desc">
                <h3> {{prod.product_name}} </h3>
                <p>{{prod.price}} $</p>
                <button class="buy-btn" @click="test (prod.product_name)">Купить</button>
            </div>
        </div>
    `,
    methods: {
        test (name) {
            console.log ('Куплен ' + name)
        }
    }
}

let catalog = {
    data () {
        return {
            catalogUrl: '/catalogData.json',
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
            <product v-for="product of filtered" :image="imgCatalog" :prod="product" :key="product.id_product"></product>
        </div>
    `,
    components: {
        product
    }
}
