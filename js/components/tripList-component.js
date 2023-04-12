//Component names should be TitleCase/PascalCase
//and should be multi-word, but singular in plurality.
//When used in HTML/templates, they become kabob-case.

app.component('TripList', {
    //Created and maintained by this component. This function is like a constructor.
    //Called separately for each instance of this component
    data: function () {
        return {}
    },
    //Data passed into component via attributes. Optional.
    //Objects and arrays are pass-by-reference.
    //Primitives (number, string, boolean) are pass-by-value.
    props: {
        trips: Array,   //HTML <photo-group-array="">

    },
    //Usually "events" triggered by v-on:
    methods: {
        deleteIt(trip) {
            this.$emit('remove-trip', trip);
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
        }
    },

    //values that are updated and cached if dependencies change. Need to rtn a value. Like values used in data or props.
    computed: {},
    //String "template" of HTML. ONLY one root HTML element.Can reference any data, props, mmethods... using {{ name }}
    template:
        `
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
        `,
});