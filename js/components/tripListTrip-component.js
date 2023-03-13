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
        // title: String,
        // tripDescription: String,
        // dates: Array,
        // photoGroupArray: Array,
    },
    //Usually "events" triggered by v-on:
    methods: {},
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
                                    <span class="edit-delete-box col-1">
                                        <q-btn
                                            class="q-btn-edit"
                                            color="grey"
                                            dense
                                            flat
                                            icon="edit"
                                            padding="10px 10px"
                                            size="sm"
                                        >
                                        </q-btn>
                                        <q-btn
                                            class="q-btn-edit"
                                            color="grey"
                                            dense
                                            flat
                                            icon="delete_forever"
                                            padding="10px 10px"
                                            size="sm"
                                        >
                                        </q-btn>
                                    </span>
          </div>
        </q-item-section>
      </template>

      <q-card>
        <q-card-section>
          <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
            <span class="captains-log col-11 ">
              Captain's Log
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
            <span class="q-px-sm">
              Is this a favorite trip?: <strong>{{ trip.favorite }}</strong>
            </span>
            </p>


            <span class="photo-groups col-12">Photo Groups</span>

            <!--  DAY 1-->
            <div class="photo-col q-pa-md col-6 col-md-3 col-lg-2">
              <div class="photo-group-box">
                <div class="photo-group ">Day 1

                  <q-btn
                      class="q-btn-edit"
                      dense
                      flat
                      icon="edit"
                      padding="0 0"
                      size="sm"
                  >
                  </q-btn>
                  <q-btn
                      class="q-btn-edit"
                      dense
                      flat
                      icon="delete_forever"
                      padding="0 0"
                      size="sm"
                  >
                  </q-btn>
                  <q-btn
                      class="q-btn-photo-qty"
                      color="primary"
                      label="4"
                      push
                      round
                      size="xs"
                  >
                  </q-btn>
                </div>
              </div>
              <q-carousel
                  v-model="slide"
                  animated
                  arrows
                  height="150px"
              >
                <q-carousel-slide :name="1" img-src="images/FR_Eiffel.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Eiffel Tower</div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" img-src="images/FR_Monet.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Monet's Pond and Estate</div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="3" img-src="images/FR_Nrmdy.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Normandy Beach: Battlemants and Rainbow
                    </div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="4" img-src="images/travelGraphics.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Travel Power!</div>
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </div>

            <!--  DAY 2-->
            <div class="photo-col q-pa-md col-6 col-md-3 col-lg-2">
              <div class="photo-group-box">
                                <span class="photo-group">Day 2
                                 <q-btn
                                     class="q-btn-photo-qty"
                                     color="primary"
                                     label="4"
                                     push
                                     round
                                     size="xs"
                                 >
                                    </q-btn>
                                </span>
              </div>
              <q-carousel
                  v-model="slide"
                  animated
                  arrows
                  height="150px"
              >
                <q-carousel-slide :name="1" img-src="images/FR_Monet.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Monet's Pond and Estate</div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" img-src="images/FR_Monet.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Monet's Pond and Estate</div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="3" img-src="images/FR_Nrmdy.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Normandy Beach: Battlemants and Rainbow
                    </div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="4" img-src="images/travelGraphics.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Travel Power!</div>
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </div>

            <!--  DAY 3-->
            <div class="photo-col q-pa-md col-6 col-md-3 col-lg-2">
              <div class="photo-group-box">
                <span class="photo-group">Day 3</span>
              </div>
              <q-carousel
                  v-model="slide"
                  animated
                  arrows
                  height="150px"
              >
                <q-carousel-slide :name="1" img-src="images/FR_Nrmdy.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Normandy Beach</div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" img-src="images/FR_Monet.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Monet's Pond and Estate</div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="3" img-src="images/FR_Nrmdy.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Normandy Beach: Battlemants and Rainbow
                    </div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="4" img-src="images/travelGraphics.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Travel Power!</div>
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </div>

            <!--  DAY 4-->
            <div class="photo-col q-pa-md col-6 col-md-3 col-lg-2">
              <div class="photo-group-box">
                <span class="photo-group">Day 4</span>
              </div>
              <q-carousel
                  v-model="slide"
                  animated
                  arrows
                  height="150px"
              >
                <q-carousel-slide :name="1" img-src="images/travelGraphics.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Travel Power!</div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" img-src="images/FR_Monet.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Monet's Pond and Estate</div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="3" img-src="images/FR_Nrmdy.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Normandy Beach: Battlemants and Rainbow
                    </div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="4" img-src="images/travelGraphics.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Travel Power!</div>
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </div>

            <!--  DAY 5-->
            <div class="photo-col q-pa-md col-6 col-md-3 col-lg-2">
              <div class="photo-group-box">
                <span class="photo-group">Day 5</span>
              </div>
              <q-carousel
                  v-model="slide"
                  animated
                  arrows
                  height="150px"
              >
                <q-carousel-slide :name="1" img-src="images/FR_Eiffel.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Eiffel Tower</div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" img-src="images/FR_Monet.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Monet's Pond and Estate</div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="3" img-src="images/FR_Nrmdy.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Normandy Beach: Battlemants and Rainbow
                    </div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="4" img-src="images/travelGraphics.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Travel Power!</div>
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </div>

            <!--  DAY 6-->
            <div class="photo-col q-pa-md col-6 col-md-3 col-lg-2">
              <div class="photo-group-box">
                <span class="photo-group">Day 6</span>
              </div>
              <q-carousel
                  v-model="slide"
                  animated
                  arrows
                  height="150px"
              >
                <q-carousel-slide :name="1" img-src="images/FR_Eiffel.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Eiffel Tower</div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" img-src="images/FR_Monet.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Monet's Pond and Estate</div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="3" img-src="images/FR_Nrmdy.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Normandy Beach: Battlemants and Rainbow
                    </div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="4" img-src="images/travelGraphics.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Travel Power!</div>
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </div>

            <!--  DAY 7-->
            <div class="photo-col q-pa-md col-6 col-md-3 col-lg-2">
              <div class="photo-group-box">
                <span class="photo-group">Day 7</span>
              </div>
              <q-carousel
                  v-model="slide"
                  animated
                  arrows
                  height="150px"
              >
                <q-carousel-slide :name="1" img-src="images/FR_Eiffel.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Eiffel Tower</div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" img-src="images/FR_Monet.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Monet's Pond and Estate</div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="3" img-src="images/FR_Nrmdy.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Normandy Beach: Battlemants and Rainbow
                    </div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="4" img-src="images/travelGraphics.jpg">
                  <div class="absolute-bottom custom-caption">
                    <div class="text-h6">Travel Power!</div>
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </div>

            <!-- Add Photo Group Button w/ Drop-Down -->
            <div class="add-photo-icon photo-col q-pa-md col-6 col-md-3 col-lg-2">
              <q-btn-dropdown
                  color="grey"
                  icon="add_a_photo"
                  label="Add Photo Group"
                  size="25px"
                  stack
              >
                <q-input
                    v-model="text"
                    class="add-photo-group"
                    color="grey"
                    label="Enter Photo Group Name"
                    name="new-photo-group-name"
                    outlined
                >
                </q-input>

                <!-- <div class="col-12 self-center">-->
                <div class="uploaders q-gutter-sm row items-start">
                  <div class="one-upload uploader">
                    <q-uploader
                        color="grey"
                        label="Upload photo"
                        multiple
                        style="max-width: 200px"
                        url="http://localhost:4444/upload"
                    ></q-uploader>
                  </div>
                  <div class="batch-upload uploader">
                    <q-uploader
                        batch
                        color="grey"
                        label="Batch upload"
                        multiple
                        style="max-width: 200px"
                        url="http://localhost:4444/upload"
                    ></q-uploader>
                  </div>
                </div>
              </q-btn-dropdown>
            </div>
          </div>
          >
        </q-card-section>
      </q-card>
      </q-expansion-item>
    `,
});