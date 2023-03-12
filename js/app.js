const app = Vue.createApp({
    //data: all the data for the app, must return an object
    data: function (){
        return {
            slide:1,
            currentTab:'alltrips',
            model:{from: '01/08/2023', to: '01/17/2023' } ,
            //favorites
            //createnewtrip
            newTrip: {
                title: '',
                arrivalDate: '',
                departureDate: '',
                tripDescription: '',
                photoGroupArray: [
                    {
                        Title: '',
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
                {title: 'France Family Trip - 2018', arrivalDate: '03272018', departureDate: '04052018', tripDescription: 'First intnl trip for boys - Spring Break 2018.',
                    PhotoGroupArrays: [
                        {Title: 'Day Un',photosArray: [{photo:'FR_Nrmdy.jpg', photoCaption:'Normandy Beach'}, {photo:'FR_Nrmdy.jpg', photoCaption:'Normandy Beach'}, {photo:'FR_Nrmdy.jpg', photoCaption:'Normandy Beach'}]},
                        {Title: 'Day Deux',photosArray: [{photo:'FR_Monet.jpg', photoCaption:'Monet Country Home and Pond'}, {photo:'', photoCaption:''}, {photo:'', photoCaption:''}]},
                        {Title: 'Day Trois',photosArray: [{photo:'FR_Eiffel.jpg', photoCaption:'Tower'}, {photo:'', photoCaption:''}, {photo:'', photoCaption:''}]}
                    ]},
                {title: 'Costa Rica Family Trip - 2019', arrivalDate: '03232019', departureDate: '04032019', tripDescription:'Spring Break 2019' ,
                    PhotoGroupArrays: [
                        {Title: 'Day Uno',photosArray: [{photo:'FR_Nrmdy.jpg', photoCaption:'Normandy Beach'}, {photo:'', photoCaption:''}, {photo:'', photoCaption:''}]},
                        {Title: 'Day Dos',photosArray: [{photo:'FR_Monet.jpg', photoCaption:'Monet Country Home and Pond'}, {photo:'', photoCaption:''}, {photo:'', photoCaption:''}]},
                        {Title: 'Day Tres',photosArray: [{photo:'FR_Eiffel.jpg', photoCaption:'Tower'}, {photo:'', photoCaption:''}, {photo:'', photoCaption:''}]}
                    ]},
                {title: 'Maui Family Trip - 2021', arrivalDate: '07092021', departureDate: '07192021', tripDescription: 'Shake off 2020 COVID Trip 2021.',
                    PhotoGroupArrays: [
                        {Title: 'Day 1',photosArray: [{photo:'FR_Nrmdy.jpg', photoCaption:'Normandy Beach'}, {photo:'', photoCaption:''}, {photo:'', photoCaption:''}]},
                        {Title: 'Day 2',photosArray: [{photo:'FR_Monet.jpg', photoCaption:'Monet Country Home and Pond'}, {photo:'', photoCaption:''}, {photo:'', photoCaption:''}]},
                        {Title: 'Day 3',photosArray: [{photo:'FR_Eiffel.jpg', photoCaption:'Tower'}, {photo:'', photoCaption:''}, {photo:'', photoCaption:''}]}
                    ]},
            ]
        }
    }
})



//
// const app = Vue.createApp({
//     data(){
//         return {
//             timers: [
//                 new Timer('Oktoberfest', '2022-09-24 00:00', true),
//                 new Timer('Halloween', '2022-10-31 00:00'),
//                 new Timer('Labor Day', '2022-09-05 00:00'),
//                 new Timer('Fall Break', '2022-10-10 00:00'),
//                 new Timer('Ted Mosby\'s Birthday', '2023-04-25 00:00', true),
//                 new Timer('Graduation', '2023-05-20 10:00'),
//             ],
//             rightDrawerOpen: false,
//         }
//     },
//
//     methods: {
//         toggleRightDrawer() {
//             this.rightDrawerOpen = !this.rightDrawerOpen;
//         },
//
//         addTimer(timer){
//             this.timers.push(timer);
//         },
//
//         openNewTimerForm(){
//             this.toggleRightDrawer();
//         }
//     }
// })
