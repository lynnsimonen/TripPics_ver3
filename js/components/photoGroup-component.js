app.component('PhotoGroup', {
    data: function () {
        return {}
    },
    props: {
        photoGroup: Object,
    },

    methods: {},
    computed: {},

    template:
        `         
         <div class="photo-col q-pa-md col-6 col-md-3 col-lg-2">
          
          <div class="photo-group-box">
            <div class="photo-group ">{{ photoGroup.title }}

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
            </div>
          </div>

           <!-- bind this photoList-Component prop "photos" to a variable "photosArray" from app.js -->
          <photo-list
              v-bind:photos="photoGroup.photosArray"
          ></photo-list>
          
          </div>
        `,
});