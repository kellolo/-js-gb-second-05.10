let app = new Vue({
    el: '.container',
    data: {

    },
    computed: {},
    methods: {
        async makeGetReq(url) {
            const data = await fetch(url);
            return await data.json();
        },
    },
    async mounted() {

    },
    components: {
        'goods-list': goodsList,
        'search': search
    }
});