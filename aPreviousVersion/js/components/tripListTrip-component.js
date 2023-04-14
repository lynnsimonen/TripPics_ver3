//Component names should be TitleCase/PascalCase
//and should be multi-word, but singular in plurality.
//When used in HTML/templates, they become kabob-case.


app.component('TripListTrip', {
    //Created and maintained by this component. This function is like a constructor.
    //Called separately for each instance of this component
    data: function () {
        return {
            uid: 'trip-' + Math.floor(Math.random() * 10e16), //generate large random number
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
        deleteIt() {
            this.$emit('remove-trip', this.trip);
        }
    },
    //values that are updated and cached if dependencies change. Need to rtn a value. Like values used in data or props.
    computed: {
        lengthOfTrip(){
            let a = new Date(this.trip.dates.to);
            let b = new Date(this.trip.dates.from);
            // To calculate the time difference of two dates
            let Difference_In_Time = a.getTime() - b.getTime();

            // To calculate the no. of days between two dates
            let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            return Difference_In_Days;
        }
    },
    //String "template" of HTML. ONLY one root HTML element.Can reference any data, props, mmethods... using {{ name }}
    template: `
      <q-expansion-item class="trip-line-item"
                        expand-separator
                        switch-toggle-side
      >
      <template v-slot:header class="trip-template-expansion-hdr">
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
        <q-item-label> {{ trip.title }}</q-item-label> 
        <q-item-label caption> {{ trip.dates.from }} - {{ trip.dates.to }}</q-item-label>
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

            <p class="log col-12 q-pt-none">
              {{ trip.tripDescription }}
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

        <!-- bind here -->
        <photo-group-list
            v-bind:photoGroups="trip.photoGroupArray"
        ></photo-group-list>

      </q-card>
      </q-expansion-item>
    `,
});