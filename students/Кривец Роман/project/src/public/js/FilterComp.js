export const filterEl =  {
   data() {
       return {
           userSearch: ''
       }
   },
   template: `<form action="#" method="post" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <input type="text" class="search-field" v-model="userSearch">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>`
};