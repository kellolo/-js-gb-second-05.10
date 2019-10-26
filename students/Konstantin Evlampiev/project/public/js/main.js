let app = new Vue({
    el: '.container',
    data: {
        isVisibleCart: false,
        displayNotification: false,
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
                this.displayNotification = true;
            }
        },
    },
    async mounted() {

    },
    components: {
        'goods-list': goodsList,
        'search': search,
        'cart': cart,
        'notification': notification
    }
});