let basketItem = {
    props: ['basketProduct'],
    template: ` 
            <tr>
                <th scope="row">{{basketProduct.id_product}}</th>
                <td>{{basketProduct.product_name}}</td>
                <td>{{basketProduct.price * basketProduct.quantity}}</td>
                <td class="productCount">{{basketProduct.quantity}}</td>
                <td><i class="fas fa-trash-alt productRemoveBtn" @click="$parent.removeProduct(basketProduct)"></i></td>
            </tr>
            `
};

let basket = {
    data () {
        return {
            basketProducts: []
        }
    },
    mounted () {
        this.$parent.getJson ('/api/basket')
            .then (data => {
                this.basketProducts = data
                this.basketProducts = data.contents
            })
    },
    computed: {
        
    },
    methods: {
        showTotalSum(){
            let totalSum = 0;
            this.basketProducts.forEach(element => {
                totalSum+=element.price;
                console.log(totalSum);
            });
            return totalSum;
        },
        addProduct (good) {
            let findClickedProduct = this.basketProducts.find(item => item.id_product === good.id_product);
            if(findClickedProduct){
                this.$parent.putJson ('/api/basket/' + findClickedProduct.id_product, {quantity: 1})
                .then (data => {
                    if (data.result) {
                        findClickedProduct.quantity ++
                    }
                })
            } else { 
                let newBasketProduct = Object.assign ({}, good, {quantity: 1});
                this.$parent.postJson ('/api/basket', newBasketProduct)
                    .then (data => {
                        if (data.result) {
                            this.basketProducts.push (newBasketProduct)
                        }
                    })
            }

        },

        removeProduct (good) {
            if(good.quantity > 1){
                this.$parent.putJson ('/api/basket/' + good.id_product, {quantity: -1})
                .then (data => {
                    if (data.result) {
                        good.quantity --
                    }
                })
            } else { 
                this.$parent.deleteJson ('/api/basket/' + good.id_product)
                    .then (data => {
                        if (data.result) {
                            this.basketProducts.splice (this.basketProducts.indexOf (good), 1)
                        }
                    })
            }
        }
    },
    template: `
                <div class="dropdown-menu" v-show="$root.isVisibleBasket != false">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Имя</th>
                                    <th scope="col">Цена</th>
                                    <th scope="col">Количество</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>

                            <tbody>
                                <basket-item v-for="basketProduct of basketProducts" :basketProduct="basketProduct" :key="basketProduct.id_product"></basket-item> <!-- товары корзины -->
                            </tbody>

                            <tfoot>
                                <tr>
                                    <!-- !!!!!!!!
                                    <th colspan="2" scope="row">Итого:</th>
                                    <td colspan="3">
                                        
                                        <span class="total" v-for="basketProduct of basketProducts" :key="basketProduct.id_product">{{showTotalSum()}}</span>
                                        <i class="fas fa-ruble-sign"></i> 
                                    -->
                                    </td>
                                </tr>
                                <tr>
                                    <th><button class="buy-btn-basket">Купить (mock)</button></th>
                                </tr>
                            </tfoot>
                    </table>
                 </div>
    `,
    components: {
        'basket-item': basketItem
    }
};
