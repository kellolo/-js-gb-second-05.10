let basketItem = {
    props: ['basketProduct'],
    template: ` 
            <tr>
                <th scope="row">{{basketProduct.id_product}}</th>
                <td>{{basketProduct.product_name}}</td>
                <td>{{basketProduct.price * basketProduct.amount}}</td>
                <td class="productCount">{{basketProduct.amount}}</td>
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
                findClickedProduct.amount++;
            } else { 
                let newBasketProduct = Object.assign ({}, good, {amount: 1});
                this.basketProducts.push(newBasketProduct);
            }

        },

        removeProduct (good) {
            let findClickedProduct = this.basketProducts.find(item => item.id_product === good.id_product);
    
            if (findClickedProduct.amount > 1) {
                findClickedProduct.amount --;
            } else {
                this.basketProducts.splice(this.basketProducts.indexOf(findClickedProduct), 1);
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
