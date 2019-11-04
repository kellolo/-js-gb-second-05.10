import cart from './cart'
import goodsList from './catalog'
import errorNotification from './error_notification'
import buyNotification from './buy_notification'
import slider from './slider'
import search from './search'


let app = new Vue({
    el: '.container',
    data: {
        isVisibleCart: false,
        displayErrorNotification: false,
        displayBuyNotification: false,
        notificationMessage: ''
    },
    computed: {},
    methods: {
        async makeGetReq(url) {
            try {
                const data = await fetch(url);
                return await data.json();
            } catch (err) {
                this.notificationMessage = 'Error while trying to get \n' + url;
                console.log(err);
                this.displayErrorNotification = true;
            }
        },

        /**
         * 
         * @param {String} url путь в формате /path/:id 
         * @param {Obj} data объект с полем quantity, которое будет установлено количеству товара в корзине
         */
        async putJson(url, data) {
            return await fetch(url, {
                    method: 'PUT',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(result => result.json())
                .catch(err => {
                    console.log(err);
                    this.notificationMessage = 'Error while trying to get \n' + url;
                    this.displayErrorNotification = true;
                })
        },


        /**
         * Функция добавляет принципиально новый товар в корзину 
         * @param {String} url маршрут
         * @param {*} data Объект корзины с выставленным количеством товара
         */
        async postJson(url, data) {
            try {
                const result = await fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                return result.json();
            } catch (err) {
                console.error(err);
                this.notificationMessage = 'Error while trying to get \n' + url;
                this.displayErrorNotification = true;
            }
        },

        async deleteJson(url) {
            return await fetch(url, {
                    method: 'DELETE',
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(result => result.json())
                .catch(err => {
                    console.error(err);
                    this.notificationMessage = 'Error while trying to get \n' + url;
                    this.displayErrorNotification = true;
                })
        }


    },



    async mounted() {

    },
    components: {
        'goods-list': goodsList,
        'search': search,
        'cart': cart,
        'error_notification': errorNotification,
        'buy_notification': buyNotification,
        'slider': slider
    }
})

export default app