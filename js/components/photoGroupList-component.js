app.component('PhotoGroupList', {
    data: function () {
        return {}
    },
    props: {
        photoGroups: Array,
    },

    methods: {},
    computed: {},

    template:
        `         12
          <q-card-section>
          <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
            
            <!--  PHOTO GROUPS  -->
            <div class="photo-col q-pa-md col-6 col-md-3 col-lg-2">
             14
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

            <!--  List each photo here-->
            <photo-group
                v-for="photoGroup in photoGroups"
                :photo-group="photoGroup"
                :key="photoGroup.title"
            ></photo-group>
            
          </div>
          </q-card-section>
        `,
});