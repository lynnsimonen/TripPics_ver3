const TripItemListComponent = app.component('TripItemList', {
    data(){
        return {
            trips: [
                new TravelEvent(new EventTrip('France Family Trip - 2018',
                    'France was great',
                    '03/27/2018',
                    '04/05/2018',
                    'a',
                    true)),

                new TravelEvent(new EventTrip('Southern Family Trip - 2019',
                    'Trip was great',
                    '03/24/2019',
                    '04/02/2019',
                    'b',
                    false)),

                new TravelEvent(new EventTrip('Island Family Trip - 2021',
                    'We had fun',
                    '07/09/2021',
                    '07/19/2021',
                    'c',
                    true)),
                new TravelEvent(new EventTrip('Western Family Trip - 2015',
                    'Trip was great',
                    '03/24/2015',
                    '04/02/2015',
                    'd',
                    true)),
                new TravelEvent(new EventTrip('Eastern Family Trip - 2016',
                    'Trip was great',
                    '03/24/2016',
                    '04/02/2016',
                    'e',
                    false)),
            ]
        }
    },
    props: { },
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
            } else if (property === 'returnDate') {
                this.trips.sort((a, b) => {
                    console.log('sorting by', property);
                    return new Date(a.returnDate) - new Date(b.returnDate);
                })
            }
        },
    },
    //values that are updated and cached if dependencies change. Need to rtn a value. Like values used in data or props.

    template: `
      <!--  List out each trip from tripList in app.js-->
      <q-list bordered class="rounded-borders">
      TRIP ITEM LIST
      <div v-for="item in trips">
        <event-item-card @remove-trip="deleteIt" :item="item"/>
      </div>
      </q-list>
    `
});


const TripItemCardComponent = {
    props: {
        item: {type: EventTrip}
    },
    methods: {
        ItemCardComponent(item){
            return 'TripDetails';
        }
    },
    template:`
      <div class="card-body">
      EVENT ITEM CARD
      <component :is="ItemCardComponent()" :item="item"/>
      </div>
    `
};

app.component('TripItemCard', TripItemCardComponent);

app.component('TripDetails', {
    props: {
        item: {type: EventTrip}
    },
    template: `
    
     <q-expansion-item class="trip-line-item"
                    expand-separator
                    switch-toggle-side
  >
    <template v-slot:header>
      <q-item-section side>
        <!-- put a star here if the favorite input star is checked -->
              <q-btn v-if="item.isFavoriite()"  icon="star-yellow"
              @click="item.isFavorite()"></q-btn>      
                      
              <q-btn v-else  icon="star-border"
              @click="item.isRegular()"></q-btn>              
                          
      </q-item-section>

      <q-item-section>
        <q-item-label> {{ item.title }}</q-item-label>
        <q-item-label caption> {{ item.arrivalDate }} - {{ item.returnDate }}</q-item-label>
      </q-item-section>

        <q-item-section side top>
            <q-item-label caption>{{lengthOfTrip}} day trip</q-item-label>
        </q-item-section>

    </template>
    <q-card>
      <q-card-section>
        <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
            <span class="captains-log col-12">
              Memories and Trip Notes
              
              <q-btn v-if="item.isFavoriite()"  icon="star-yellow"
              @click="item.isFavorite()"></q-btn>              
              <q-btn v-else  icon="star-border"
              @click="item.isRegular()"></q-btn>              
                          
            </span>
          <p class="log col-12 q-pt-none">
            {{ item.tripDescription }}
          </p>
          <span class="edit-delete-box col-12 q-mx-xl">
                <q-btn
                    class="q-btn-edit"
                    color="grey"
                    dense
                    flat
                    icon="edit"
                    padding="10px 10px"
                    size="md"
                >
                </q-btn>
                <q-btn
                    class="q-btn-edit"
                    color="red"
                    dense
                    flat
                    icon="delete_forever"
                    padding="10px 10px"
                    size="md"
                    @click="deleteIt"
                >
                </q-btn>
            </span>
          <span class="photo-groups col-11">Photo Groups</span>
        </div>
      </q-card-section>
      <!-- bind here
      <photo-group-list
          v-bind:photoGroups="trip.photoGroupArray"
      ></photo-group-list>  -->
    </q-card>
  </q-expansion-item>
  
  `
});
