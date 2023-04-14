const TripItemListComponent = app.component('TripItemList', {
    data(){
        return {
            trips: [
                new TripItem(new Trip('France Family Trip - 2018',
                    'France was great',
                    '03/27/2018',
                    '04/05/2018',
                    'a')),

                new TripItem(new Trip( 'Southern Family Trip - 2019',
                    'Trip was great' ,
                    '03/24/2019',
                    '04/02/2019',
                    'b',)),

                new TripItem(new Trip('Island Family Trip - 2021',
                    'We had fun',
                    '07/09/2021',
                    '07/19/2021',
                    'c',))
            ]
        }
    },
    props: {},
    //Usually "events" triggered by v-on:
    methods: {
        deleteIt(item) {
            this.$emit('remove-trip', item);
        },
        sort(property) {
            if (property === 'title') {
                this.trips.sort((a, b) => {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                        return -1;
                    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1;
                    }
                    console.log('sorting by', property);
                    return 0;
                })
            } else if (property === 'dates.from') {
                this.trips.sort((a, b) => {
                    console.log('sorting by', property);
                    return new Date(a.dates.from) - new Date(b.dates.from);
                })
            }
        },
    },
    //values that are updated and cached if dependencies change. Need to rtn a value. Like values used in data or props.
    computed: {

    },
    template: `           
            <!--  List out each trip from tripList in app.js-->
            <div
                v-for="item in trips"
                :item="item"
                @remove-trip="deleteIt"
            ></div>   
    `
});


const TripItemComponent = {
    props: {
        item: {type: TripItem}
    },
    methods: {
        tripItemComponent(item){
            return item.info.constructor.type + 'Details';
        }
    },
    template:`
     <div>
        <div class="row justify-between">
            <div class="col-3 col-sm-2">
                <sort-form 
                :sort-function="sort"
                ></sort-form>
            </div>
        </div>
        <q-list bordered class="rounded-borders">    
            <!--  List out each trip from tripList in app.js-->
          <component :is="tripItemComponent(item)" :item="item.info"/>
        </q-list>
        <div>Total trips: {{ trips.length }}</div>
    </div>
    
    `
}