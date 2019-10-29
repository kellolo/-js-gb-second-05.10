let app = new Vue({
    el: '#app',
    components: {
        'catalog': catalog,
        'cart': cart,
        'filter-comp': filterComp
    },
    data: {
        API: 'https://raw.githubusercontent.com/berryllium/-js-gb-second-05.10/gorkun/students/Gorkun%20Dmitriy/project/db',
        isVisibleCart: true
    },

    methods: {
        getJson(url) {
            return fetch(`${this.API + url}`)
                .then(result => result.json())
                .catch(err => {
                    console.log(err)
                })
        }
    },

    mounted() {

    }
})