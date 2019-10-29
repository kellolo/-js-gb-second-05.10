let loader = {
    template: ` 
            <div v-if="$root.goodsAreExist != true">
                <div class="loader"> 
                    <div class="inner one"></div>
                    <div class="inner two"></div>
                    <div class="inner three"></div>
            </div>
                <div class="err-msg">While not found...</div>
           </div>
    `
};