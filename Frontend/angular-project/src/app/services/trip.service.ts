import { Injectable } from '@angular/core';
import { Trip } from '../interfaces/trip.interface';
import { v4 as uuidv4 } from 'uuid';
import { Subject } from 'rxjs';

import tripsDataJson from './trips.json';
@Injectable({
  providedIn: 'root',
})
export class TripService {
  private tripsData: Trip[] = tripsDataJson;

  private listOfDisplayedTrips!: Trip[];

  private edited: Trip = this.emptyTrip();
  editedTripsubject = new Subject<Trip>();

  constructor() {}

  //getter
  get editedTrip() {
    return this.edited;
  }

  //setter
  set editedTrip(trip: Trip) {
    this.edited = trip;
    this.editedTripsubject.next(trip);
  }

  //TODO - change with server request without description field
  getListOfDisplayedTrips() {
    this.listOfDisplayedTrips = this.tripsData.map((trip) => {
      return {
        userID: trip.userID,
        tripID: trip.tripID,
        city: trip.city,
        country: trip.country,
        date: trip.date,
        spending: trip.spending,
        rating: trip.rating,
        description: '',
      };
    });
    return this.listOfDisplayedTrips;
  }

  //TODO - change with server request
  //get details for given tripId
  getDetailsForTripId(tripId: string) {
    return this.tripsData.find((trip) => trip.tripID === tripId);
  }

  //delete trip
  deleteTrip(tripId: string) {
    //TODO delete trip from backend
    console.log('Trip with id ' + tripId + ' has been deleted');
  }

  //empty trip
  emptyTrip(): any {
    return {
      userID: '1',
      tripID: uuidv4(),
      city: '',
      country: '',
      date: '',
      spending: '',
      rating: '',
      description: '',
    };
  }
}
