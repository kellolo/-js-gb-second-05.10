let errorNotification = {
    props: ['message'],
    template: `<div class="error-notification" v-if="$root.displayErrorNotification">
                    <div>
                        <p>{{message}}</p>
                        <button @click="$root.displayErrorNotification=false">Close</button>
                    </div>
                </div>
`
};


export default errorNotification