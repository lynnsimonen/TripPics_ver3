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
        `     
          <q-card-section>
          <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
            
            <!--  PHOTO GROUPS  -->
           
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