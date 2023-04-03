app.component('SortForm', {
    data(){
        let sortOptions = [
            {label: 'Title', value: 'title'},
            {label: 'Year', value: 'year'},
        ];
        return {
            sortOptions,
            sortValue: sortOptions[0],
        }
    },

    props: {
        sortFunction: Function
    },
    methods: {
        sort() {
            console.log('dropdown updated: ', this.sortValue.value);
            this.sortFunction(this.sortValue.value)
        }
    },
    template: `
    <q-form class="q-flex row q-mb-sm">
    <q-select
    v-model="sortValue"
    :options="sortOptions"
    @update:model-value="sort"
    label="Sort By"
    class="col sort-form"
    filled
    /></q-form> 
    
    `
})