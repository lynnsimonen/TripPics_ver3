//Component names should be TitleCase/PascalCase
//and should be multi-word, but singular in plurality.
//When used in HTML/templates, they become kabob-case.

app.component('TripList', {
    //Created and maintained by this component. This function is like a constructor.
    //Called separately for each instance of this component
    data: function(){
        return{}
    },
    //Data passed into component via attibutes. Optional.
    //Objects and arrays are pass-by-reference.
    //Primitieves (number, string, boolean) are pass-by-value.
    props: {
       trips: Array,   //HTML <photo-group-array="">

    },
    //Usually "events" triggered by v-on:
    methods: {

    },
    //values that are updated and cached if dependencies change. Need to rtn a value. Like values used in data or props.
    computed: {

    },
    //String "template" of HTML. ONLY one root HTML element.Can reference any data, props, mmethods... using {{ name }}
    template:
        `
          <q-list bordered class="rounded-borders">
          <q-expansion-item class="header-bar"
                            expand-icon-class="text-primary"
                            expand-separator
                            header-class="bg-primary text-white"
                            switch-toggle-side
          >
            <template v-slot:header>
              <q-item-section side>
                <q-btn class="q-btn-star-hdr"
                       dense
                       flat
                       icon="star_outline"
                       padding="0 0"
                       size="md"
                >
                </q-btn>
              </q-item-section>
              <q-item-section class="sort-hdr-item" side>
                <q-btn
                    class="q-btn-sort-hdr"
                    color="white"
                    dense
                    flat
                    icon="import_export"
                    label="TRIP TITLE"
                    padding="0 0"
                    size="sm"
                >
                </q-btn>
              </q-item-section>
              <q-item-section class="sort-hdr-item-section">
                <q-btn
                    class="q-btn-sort-hdr"
                    dense
                    flat
                    icon="import_export"
                    label="TRIP DATES"
                    padding="0 0"
                    size="sm"
                >
                </q-btn>
              </q-item-section>
              <q-item-section side>
                <div class="row items-center edit-delete-hdr" style="font-weight: bold">
                  EDIT/DELETE
                </div>
              </q-item-section>
            </template>
          </q-expansion-item>
         <trip-list-trip v-for="trip in trips"></trip-list-trip>
          </q-list>
          <div>Total trips: {{items.length}}</div>
        `,
});