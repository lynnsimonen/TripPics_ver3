app.component('PhotoList', {
    data: function(){
        return{
            slide:0,
        }
    },
    props: {
       photos: Array,
    },

    methods: {},
    computed: {},

    template:
        `<div class="text-primary-2">Total photos: {{ photos.length }}</div>  
          <q-carousel
              v-model="slide"
              animated
              arrows
              height="150px"
          >
          <!--  List each photo here-->
          <photo-list-photo
              v-for="(photo,i) in photos"
              :photo="photo"
              :key="photo.photo"
              :name="i"
          ></photo-list-photo>         
          
          </q-carousel>
        `,
});