const PhotoComponent
    = app.component('Photo', {
    // this function is run AFTER the props have been passed in
    data() {
        return {
            photos: [
                new PhotoItem("images/CR_01.JPG", 'Eiffel Tower'),
                new PhotoItem("images/CR_02.JPG", 'Normandy Beach'),
                new PhotoItem("images/CR_03.JPG", 'Monet Country Home and Pond'),
                new PhotoItem("images/CR_04.JPG", 'Monet Country Home and Pond'),
                new PhotoItem("images/CR_05.JPG", 'Monet Country Home and Pond'),
                new PhotoItem("images/CR_06.JPG", 'Monet Country Home and Pond'),
                new PhotoItem("images/CR_07.JPG", 'Monet Country Home and Pond'),
                new PhotoItem("images/CR_08.JPG", 'Monet Country Home and Pond'),
                new PhotoItem("images/CR_09.JPG", 'Monet Country Home and Pond'),
                new PhotoItem("images/HI_01.HEIC", 'Monet Country Home and Pond'),
                new PhotoItem("images/HI_02.HEIC", 'Monet Country Home and Pond'),
                new PhotoItem("images/HI_03.HEIC", 'Monet Country Home and Pond'),
                new PhotoItem("images/HI_04.HEIC", 'Monet Country Home and Pond'),
            ]
        }
    },

    // functions that you want to use in your view that are triggered manually
    methods: {
        photoCardComponent(item){
            return item + 'Card';
        }
    },

    // the view
    template:`
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
              <div class="text-primary-2">Total photos: {{ photos.length }}</div>  
              <q-carousel
                  v-model="slide"
                  animated
                  arrows
                  height="150px"
              >
                      <component :is="photoCardComponent(item)" :item="item"/>
                      <photo
                          v-for="item in photos"
                          :photo="photo"
                          :key="photo.photo"
                          :name="i"
                      ></photo>   
              </q-carousel> 
        </div>
        `,
});

const PhotoItemCardComponent = {
    props: {
    item: PhotoItem,
    },
    template: `
        <div class="card h-100">
            <div class="card-body">
                <q-carousel-slide 
                    :name="name" 
                    :img-src="imageSource"
                    >
                    <div class="absolute-bottom custom-caption">
                        <div class="text-h6" >{{ photo.photoCaption }}</div>
                    </div>
                </q-carousel-slide>
            </div>
        </div>
        `,
};

app.component('PhotoItemCard', PhotoItemCardComponent);