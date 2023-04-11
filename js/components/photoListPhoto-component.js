app.component('PhotoListPhoto', {
    data: function(){
        return{}
    },
    props: {
        photo: Object,
        name: Number,
    },

    methods: {},
    computed: {},

    template:
        `         
          <q-carousel-slide 
                :name="name" 
                :img-src="'images/' + photo.photo"
          >
          <div class="absolute-bottom custom-caption">
            <div class="text-h6" >{{ photo.photoCaption }}</div>
          </div>
          </q-carousel-slide>
        `,
});