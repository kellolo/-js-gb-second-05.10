Vue.component ('comp', {
    template: ` 
                <div>
                    <h1>{{ glob }}</h1>
                    <br>
                    <label for="">
                        <input type="text" v-model.lazy="text">
                        Type something
                    </label>
                    <p>{{ text }}</p>
                    <button @click="$parent.parentMtd (text)">Ok</button>
                    <br>
                    <button @click="$parent.$refs.target.returnText()">Написать в третий компонент</button>
                </div>
                `,
    data () {
        return {
            text: ''
        }
    },
    // props: [
    //     'glob'
    // ]
    props: {
        glob: String
    },
    mounted () {
        console.log ('Child has been born')
        console.log (this)
    },
    methods: {
        callParent () {
            this.$parent.parentMtd (this.text)
        },
        returnText () {
            console.log (this.text)
        }
    }
})
