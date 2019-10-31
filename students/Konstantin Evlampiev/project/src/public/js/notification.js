let notification = {
    props: ['message'],
    template: `<div class="error-notification" v-if="$root.displayNotification">
                    <div>
                        <p>{{message}}</p>
                        <button @click="$root.displayNotification=false">Close</button>
                    </div>
                </div>
`
};