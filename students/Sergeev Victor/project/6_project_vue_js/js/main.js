const API = 'https://raw.githubusercontent.com/Essvitex/-js-gb-second-05.10/master/students/Sergeev%20Victor/project/4_project_js/jsonData'

let app = new Vue ({
    el: '#app',
    data: {
        isVisibleBasket: false,
        goodsAreExist: true
    },
    methods: {
        getJson (url) {
            return fetch (`${API + url}`)
            .then (
                result => result.json()
            )
            .then(
                this.goodsAreExist = true
            )
            .catch (err => {
                if(url==="/catalogData.json"){
                    this.goodsAreExist = false;
                    console.log('Каталог не найден -> 404: Not found!');
                }
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