function TravelEvent(travelEvent) {

    const STATUSES =
        {FAVORITE: 'favorite', REGULAR:'regular'}
    //let in2 = 'in';

    this.travelEvent = travelEvent;
    //Default Title = ''  which is different = title ? '';

    // set the default status
    this.status = STATUSES.REGULAR;

    // methods
    this.isFavorite = function () {
        this.status = STATUSES.FAVORITE;
    }

    this.isRegular = function () {
        this.status = STATUSES.REGULAR;
    }

    return travelEvent;
}

//function Trip(title, tripDescription, dates, key, photoGroupArray) {
function EventTrip(title, tripDescription, arrivalDate, returnDate, key, favorite ) {
    this.title = title ?? 'Default Title';

    // add any additional properties
    this.tripDescription = tripDescription ?? '';
    this.arrivalDate = arrivalDate ?? '';
    this.returnDate = returnDate ?? '';
    this.key = key ?? '';
    this.favorite = favorite ?? false;
}
EventTrip.type = "EventTrip";


class EventExcursion {
    //class is an object AND the same as a constructor function!!!
    // Syntactic Sugar
    title = '';
    duration = 0;
    static type = 'EventExcursion';
    arrivalDateTime = '';
    key = '';
    favorite = false;

    constructor(title, duration, arrivalDateTime, key, favorite) {
        this.title = title ?? '';
        this.duration = duration ?? 0;
        this.arrivalDateTime = arrivalDateTime ?? '';
        this.key = key ?? '';
        this.favorite = favorite ?? false;
    }
}










