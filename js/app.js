const app = Vue.createApp({
    //data: all the data for the app, must return an object
    data: function (){
        return {
            slide:0,
            currentTab:'alltrips',
            model:{from: '01/08/2023', to: '01/17/2023' } ,
            //createnewtrip
            newTrip: {
                title: '',
                tripDescription: '',
                dates:{from:'', to:''},
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
                    tripDescription: 'First international trip for boys - Spring Break 2018.',
                    dates:{from: '03/27/2018', to: '04/05/2018' },
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
                    tripDescription:'Spring Break 2019' ,
                    dates:{from: '03/24/2019', to: '04/02/2019' },
                    favorite: false,
                    photoGroupArray: [
                        {title: 'Day Uno',photosArray: [{photo:'FR_Nrmdy.jpg', photoCaption:'Normandy Beach'}, {photo:'', photoCaption:''}, {photo:'', photoCaption:''}]},
                        {title: 'Day Dos',photosArray: [{photo:'FR_Monet.jpg', photoCaption:'Monet Country Home and Pond'}, {photo:'', photoCaption:''}, {photo:'', photoCaption:''}]},
                        {title: 'Day Tres',photosArray: [{photo:'FR_Eiffel.jpg', photoCaption:'Tower'}, {photo:'', photoCaption:''}, {photo:'', photoCaption:''}]}
                    ]},
                {title: 'Maui Family Trip - 2021',
                    tripDescription: 'Shake off 2020 COVID Trip 2021.',
                    dates:{from: '07/09/2021', to: '07/19/2021' },
                    favorite: true,
                    photoGroupArray: [
                        {title: 'Day 1',photosArray: [{photo:'FR_Nrmdy.jpg', photoCaption:'Normandy Beach'}, {photo:'', photoCaption:''}, {photo:'', photoCaption:''}]},
                        {title: 'Day 2',photosArray: [{photo:'FR_Monet.jpg', photoCaption:'Monet Country Home and Pond'}, {photo:'', photoCaption:''}, {photo:'', photoCaption:''}]},
                        {title: 'Day 3',photosArray: [{photo:'FR_Eiffel.jpg', photoCaption:'Tower'}, {photo:'', photoCaption:''}, {photo:'', photoCaption:''}]}
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
                //return true if we want to keep the trip in the rtnd list
                return trip.favorite == true;
            })
        }
    }
})

