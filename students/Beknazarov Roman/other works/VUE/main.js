new Vue({
    el: '#root',
    data: {
        name1: '',
        names: ['Frodo', 'Sam', 'Meriadoc', 'Peregrin'],
    },
    methods: {
        clickHandler() {
            console.log("click");
        }
    },
    mounted() {
        // Сработает сразу
        let now = new Date;
        console.log(now.toLocaleTimeString());
    },
    computed: {
        upperCaseName() {
            return this.name1.toLocaleUpperCase();
        },
    },
});