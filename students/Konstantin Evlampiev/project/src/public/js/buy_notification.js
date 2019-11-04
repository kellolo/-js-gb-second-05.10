let buyNotification = {
    //props: ['message'],
    template: `<div class="buy-notification zoomIn" v-if="$root.displayBuyNotification">
                    <div>
                        <p>the item is added to cart</p>
                        <button @click="$root.displayBuyNotification=false">Close</button>
                    </div>
                </div>
`
};


export default buyNotification