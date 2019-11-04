let app = new Vue ({
    el: '#app',
    data: {
        isVisibleBasket: false,
        goodsAreExist: true
    },
    methods: {
        getJson (url) {
            return fetch (url)
            .then (
                result => result.json()
            )
            .then(
                this.goodsAreExist = true
            )
            .catch (err => {
                this.goodsAreExist = false;
                console.log (err)
            })
        },
        postJson (url, data) {
            return fetch (url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify (data)
            })
            .then (result => result.json())
            .catch (err => {
                console.log (err)
            })
        },
        putJson (url, data) {
            return fetch (url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify (data)
            })
            .then (result => result.json())
            .catch (err => {
                console.log (err)
            })
        },
        deleteJson (url, data) {
            return fetch (url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify (data)
            })
            .then (result => result.json())
            .catch (err => {
                console.log (err)
            })
        },
        showBasket(){
            this.isVisibleBasket = !this.isVisibleBasket;
        }
    },
   
    mounted () {
        
    },
    components: {
        'goods-list': goodsList,
        'basket': basket,
        'filter-of-goods': filterComp,
        'spinner': loader
    }
})