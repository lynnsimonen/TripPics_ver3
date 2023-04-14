const TripItemListComponent = app.component('TripItemList', {
    data(){
        return {
            trips: [
                new TripItem(new Trip('France Family Trip - 2018',
                    'First international trip for boys - Spring Break 2018.  Bonjour!  ' +
                    '  Tell them that they are going to start with a visit to the former residence of the kings of France, ' +
                    'and that over the last two centuries this palace has become one of the biggest museums in the world. ' +
                    'Admire collections from ancient Egypt, and ancient Greece and Roman times, paintings and sculptures dating ' +
                    'back from the Middle Ages to the 19th century: 35,000 works in total, including the famous Mona Lisa by ' +
                    'Leonardo da Vinci! This exciting world, free for under 18s, offers several special activities for families, ' +
                    'from narrated or themed visits to archeology workshops and travel journals, to name just a few.',
                    '03/27/2018',
                    '04/05/2018',
                    'a')),

                new TripItem(new Trip( 'Southern Family Trip - 2019',
                    'Spring Break 2019 - Costa Rica, within the lush and vibrant green of this region lie many discoveries. ' +
                    'The flash of scarlet macaw wings amid treetops. The scintillating iridescence on the Blue Morpho Butterfly ' +
                    'as they flutter near water. And so many moments that will stay with you long after you leave—the atavistic ' +
                    'thrill of hearing howler monkeys call to each other in the trees or the peace of sinking into a pool ' +
                    'at the base of a waterfall deep in the jungle. ' ,
                    '03/24/2019',
                    '04/02/2019',
                    'b',)),

                new TripItem(new Trip('Island Family Trip - 2021',
                    'Shake off 2020 COVID Trip 2021.  Maui, known also as “The Valley Isle,” is the second' +
                    ' largest Hawaiian island. The island beloved for its world-famous beaches, the sacred ʻĪao Valley, ' +
                    'views of migrating humpback whales (during winter months), farm-to-table cuisine and the magnificent ' +
                    'sunrise and sunset from Haleakalā. It’s not surprising Maui has been voted "Best Island in the U.S." by ' +
                    'Condé Nast Traveler readers for more than 20 years. Check out the regions of Maui and all this island has to offer.',
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
        <q-list bordered class="rounded-borders">    
            <!--  List out each trip from tripList in app.js-->
            <trip-item-list
                v-for="item in trips"
                :item="item"
                @remove-trip="deleteIt"
            ></trip-item-list>        
        </q-list>
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
            <trip-list-trip
                v-for="trip in trips"
                :trip="trip"
                :key="trip.key"
                @remove-trip="deleteIt"
            ></trip-list-trip>        
        </q-list>
        <div>Total trips: {{ trips.length }}</div>
    </div>
    
    `

}