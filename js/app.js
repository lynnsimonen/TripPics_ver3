const app = Vue.createApp({
    //data: all the data for the app, must return an object
    vue:{
        config: {
            devtools: true,
        }
    },
    data: function (){
        return {
            slide:0,
            currentTab:'alltrips',
            model:{from: '01/08/2023', to: '01/17/2023' } ,

            //createnewtrip
            newTrip: {
                title: '',
                tripDescription: '',
                dates:{
                    from:'',
                    to:''
                },
                key: '',
                favorite: false,
                photoGroupArray: [
                    {
                        title: '',
                        photosArray: [
                            {
                                photo: '',
                                photoCaption:'',
                            }
                        ]
                    }
                ],
            },
            tripList: [
                {title: 'France Family Trip - 2018',
                    tripDescription: 'First international trip for boys - Spring Break 2018.  Bonjour!  ' +
                        '  Tell them that they are going to start with a visit to the former residence of the kings of France, ' +
                        'and that over the last two centuries this palace has become one of the biggest museums in the world. ' +
                        'Admire collections from ancient Egypt, and ancient Greece and Roman times, paintings and sculptures dating ' +
                        'back from the Middle Ages to the 19th century: 35,000 works in total, including the famous Mona Lisa by ' +
                        'Leonardo da Vinci! This exciting world, free for under 18s, offers several special activities for families, ' +
                        'from narrated or themed visits to archeology workshops and travel journals, to name just a few.',
                    dates:{from: '03/27/2018', to: '04/05/2018' },
                    key: 'a',
                    favorite: true,
                    photoGroupArray: [
                        {title: 'Day Un',
                            photosArray: [{photo:'FR_Eiffel.jpg', photoCaption:'Eiffel Tower'}, {photo:'FR_Nrmdy.jpg', photoCaption:'Normandy Beach'}, {photo:'FR_Nrmdy.jpg', photoCaption:'Normandy Beach'}]},
                        {title: 'Day Deux',
                            photosArray: [{photo:'FR_Monet.jpg', photoCaption:'Monet Country Home and Pond'}, {photo:'FR_Nrmdy.jpg', photoCaption:'Normandy Beach'}, {photo:'FR_Nrmdy.jpg', photoCaption:'Normandy Beach'}]},
                        {title: 'Day Trois',
                            photosArray: [{photo:'FR_Nrmdy.jpg', photoCaption:'Normandy Beach'}, {photo:'FR_Nrmdy.jpg', photoCaption:'Normandy Beach'}, {photo:'FR_Nrmdy.jpg', photoCaption:'Normandy Beach'}]},
                    ]},
                {title: 'Costa Rica Family Trip - 2019',
                    tripDescription:'Spring Break 2019 - Within the lush and vibrant green of this region lie many discoveries. ' +
                        'The flash of scarlet macaw wings amid treetops. The scintillating iridescence on the hummingbirds sipping ' +
                        'nectar as they hover. And so many moments that will stay with you long after you leave—the atavistic ' +
                        'thrill of hearing howler monkeys call to each other in the trees or the peace of sinking into a pool ' +
                        'at the base of a waterfall deep in the jungle. ' ,
                    dates:{from: '03/24/2019', to: '04/02/2019' },
                    key: 'b',
                    favorite: false,
                    photoGroupArray: [
                        {title: 'Day Uno',photosArray: [{photo:'CR_01.jpg', photoCaption:'Dinner at Punta Islita'}, {photo:'CR_02.jpg', photoCaption:'Baby Monkey in tree'}, {photo:'CR_03.jpg', photoCaption:'Monkey viewing tour'}]},
                        {title: 'Day Dos',photosArray: [{photo:'CR_04.jpg', photoCaption:'Playa La Islita'}, {photo:'CR_05.jpg', photoCaption:''}, {photo:'CR_06.jpg', photoCaption:'Jungle'}]},
                        {title: 'Day Tres',photosArray: [{photo:'CR_07.jpg', photoCaption:'Say No to Horseback Riding'}, {photo:'CR_08.jpg', photoCaption:'Little Red Tree Frog'}, {photo:'CR_09.jpg', photoCaption:''}]}
                    ]},
                {title: 'Maui Family Trip - 2021',
                    tripDescription: 'Shake off 2020 COVID Trip 2021.  Maui, known also as “The Valley Isle,” is the second' +
                        ' largest Hawaiian island. The island beloved for its world-famous beaches, the sacred ʻĪao Valley, ' +
                        'views of migrating humpback whales (during winter months), farm-to-table cuisine and the magnificent ' +
                        'sunrise and sunset from Haleakalā. It’s not surprising Maui has been voted "Best Island in the U.S." by ' +
                        'Condé Nast Traveler readers for more than 20 years. Check out the regions of Maui and all this island has to offer.',
                    dates:{from: '07/09/2021', to: '07/19/2021' },
                    key: 'c',
                    favorite: true,
                    photoGroupArray: [
                        {title: 'Day 1',photosArray: [{photo:'HI_01.HEIC', photoCaption:'Maui NW - Nakalele Blowhole'}, {photo:'HI_02.HEIC', photoCaption:'Maui shaved ice coconut'}, {photo:'HI_03.HEIC', photoCaption:'Maui historical river'}]},
                        {title: 'Day 2',photosArray: [{photo:'HI_04.HEIC', photoCaption:'Napili Shores '}, {photo:'HI_05.HEIC', photoCaption:'Napili Sunset'}, {photo:'HI_06.HEIC', photoCaption:'Molokai'}]},
                        {title: 'Day 3',photosArray: [{photo:'HI_07.HEIC', photoCaption:'Kapalua Bay Beach'}, {photo:'HI_08.HEIC', photoCaption:'Kahoolawe Snorkel Trip'}, {photo:'HI_09.HEIC', photoCaption:'Kapalua Coastal Trail'}]}
                    ]},
            ]
        }
    },
    props: {},
    //Usually "events" triggered by v-on:
    methods: {
        addTrip(){
            this.tripList.push(this.newTrip);
            //clear the form
            this.newTrip = {
                    title: '',
                    tripDescription: '',
                    dates:{from:'', to:''},
                    key: '',
            }
        },
        deleteTrip(trip){
            this.tripList.splice(this.tripList.indexOf(trip),1);
        },
    },
    //values that are updated and cached if dependencies change. Need to rtn a value. Like values used in data or props.
    computed: {
        favoriteList: function(){
            //returns a filtered list
            return this.tripList.filter(function(trip){
                //return true if we want to keep the trip in the returned list
                return trip.favorite == true;
            })
        }
    }
})

