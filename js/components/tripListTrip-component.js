//Component names should be TitleCase/PascalCase
//and should be multi-word, but singular in plurality.
//When used in HTML/templates, they become kabob-case.

app.component('TripListTrip', {
    //Created and maintained by this component. This function is like a constructor.
    //Called separately for each instance of this component
    data: function () {
        return {
            uid: 'trip-' + Math.floor(Math.random()*10e16), //generate large random number
        }
    },
    //Data passed into component via attibutes. Optional.
    //Objects and arrays are pass-by-reference.
    //Primitives (number, string, boolean) are pass-by-value.
    props: {
        trip: Object,
    },
    //Usually "events" triggered by v-on:
    methods: {
        deleteIt(){
            this.$emit('remove-trip', this.trip);
        }
    },
    //values that are updated and cached if dependencies change. Need to rtn a value. Like values used in data or props.
    computed: {},
    //String "template" of HTML. ONLY one root HTML element.Can reference any data, props, mmethods... using {{ name }}
    template: `
      <q-expansion-item class="trip-line-item"
                        expand-separator
                        switch-toggle-side
      >
      <template v-slot:header>
        <q-item-section side>
          <!-- put a star here if the favorite input star is checked -->
          <q-checkbox
              v-model="trip.favorite"
              checked-icon="star"
              class="q-btn-trip-title star-yellow"
              dense
              flat
              indeterminate-icon="help"
              padding="0 0"
              size="md"
              unchecked-icon="none"
          >
          </q-checkbox>
        </q-item-section>
        <q-item-section>
          {{ trip.title }}
        </q-item-section>
        <q-item-section>
          {{ trip.dates.from }} - {{ trip.dates.to }}
        </q-item-section>
        <q-item-section side>
          <div class="row items-center">
                                    <span >
                                      Expand trip to edit/delete.
                                    </span>
          </div>
        </q-item-section>
      </template>

      <q-card>
        <q-card-section>
          <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
            <span class="captains-log col-11 ">
              Memories and Notes of Trip
              <q-checkbox
                  v-model="trip.favorite"
                  checked-icon="star"
                  class="q-btn-trip-title star-yellow"
                  dense
                  flat
                  indeterminate-icon="help"
                  padding="0 0"
                  size="md"
                  unchecked-icon="star_border"
              >
              </q-checkbox>              
            </span>
           
            <p class="log col-11">
              {{ trip.tripDescription }}      
            </p>
            <hr coll-11>
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
                                            @click="deleteIt"
                                            class="q-btn-edit"
                                            color="red"
                                            dense
                                            flat
                                            icon="delete_forever"
                                            padding="10px 10px"
                                            size="md"
                                        >
                                        </q-btn>
                                    </span>


            <span class="photo-groups col-12">Photo Groups</span>
          </div>
        </q-card-section>
        
        <!-- bind here -->
           <photo-group-list
           v-bind:photoGroups="trip.photoGroupArray"
           ></photo-group-list>

      </q-card>
      </q-expansion-item>
    `,
});