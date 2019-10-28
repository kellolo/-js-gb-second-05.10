let filterComp = {
    data () {
        return {
            userSearch: ''
        }
    },
    template: `
        <div class="search-container">
            <input type="text" class="goods-search" v-model="userSearch"  @keyup.13="$root.$refs.catalog.filter (userSearch)"/>
            <i class="search-button fa fa-search" aria-hidden="true" @click="$root.$refs.catalog.filter (userSearch)"></i>
        </div>
    `
}