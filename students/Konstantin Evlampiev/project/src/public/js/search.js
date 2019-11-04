let search = {
    data() {
        return {
            searchStr: ''
        }
    },

    template: `<div class="searchForm">
                    <input type="search" placeholder="Enter product name here..." v-model="searchStr" @input="$root.$refs.catalog.filter(searchStr)">
                    <button ><i class="fa fa-search" aria-hidden="true"></i></button> 
                </div> `
};


export default search