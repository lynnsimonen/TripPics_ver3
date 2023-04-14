function TripItem(info) {
    const FAVORITE = {YES: 'yes', NO: 'no'}

    //store the photos, etc. inside the trip item.
    this.info = info;

    //set default favorite
    this.favorite = FAVORITE.NO;

    this.favoriteTrip = function () {
        this.favorite = FAVORITE.YES;
    }

    this.notFavoriteTrip = function () {
        this.favorite = FAVORITE.NO;
    }
}

//function Trip(title, tripDescription, dates, key, photoGroupArray) {
function Trip(title, tripDescription, arrivalDate, returnDate, key) {

    this.title = title ?? 'No Trip Here';
    this.tripDescription = tripDescription ?? 'Need Trip Notes Here';
    this.arrivalDate = arrivalDate ?? 'please choose arrival date';
    this.departDate = returnDate ?? 'please choose return date';
    this.key = key ?? '';
}
Trip.type = "Trip";

function Tour(title, activity, arrivalDate, departDate, key){
    this.title = title ?? 'Tour Name Here';
    this.activity = activity ?? 'Activity details here';
    this.arrivalDate = arrivalDate ?? 0;
    this.departDate = departDate ?? 0;
    this.key = key ?? '';
}
Tour.type = "Tour";


//     this.photoGroupArray = [{title: '',
//         photosArray: [{photo: '', photoCaption: ''}]
//     }];
// }
//
// function addTrip(){
//     this.tripList.push(this.newTrip);
//     //clear the form
//     this.newTrip = {
//         title: '',
//         tripDescription: '',
//         dates:{from:'', to:''},
//         key: '',
//     }
// }

// function deleteTrip(trip){
//     this.tripList.splice(this.tripList.indexOf(trip),1);
// }

// function  favoriteList(){
//     //returns a filtered list
//     return this.tripList.filter(function(trip){
//         //return true if we want to keep the trip in the returned list
//         return trip.favorite == true;
//     })
// }
//
//










