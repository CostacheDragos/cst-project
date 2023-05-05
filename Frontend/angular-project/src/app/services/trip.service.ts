import { Injectable } from '@angular/core';
import { Trip } from '../interfaces/trip.interface';
import { v4 as uuidv4 } from 'uuid';
import { Subject } from 'rxjs';

import tripsDataJson from './trips.json';
@Injectable({
  providedIn: 'root',
})
//TODO - change with server requests
export class TripService {
  private listOfTripsData: Trip[] = tripsDataJson;
  listOfTripsSubject = new Subject<Trip[]>();

  private listOfDisplayedTrips!: Trip[];

  private edited: Trip = this.emptyTrip();
  editedTripsubject = new Subject<Trip>();

  constructor() {}

  //getter
  get editedTrip() {
    return this.edited;
  }
  get listOfTrips(): Trip[] {
    return this.listOfTripsData;
  }

  //setter
  set editedTrip(trip: Trip) {
    this.edited = trip;
    this.editedTripsubject.next(trip);
  }
  set listOfTrips(newListOfTrips: any) {
    this.listOfTripsData = newListOfTrips;
    this.listOfTripsSubject.next(newListOfTrips);
  }

  getListOfDisplayedTrips() {
    this.listOfDisplayedTrips = this.listOfTripsData.map((trip) => {
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

  //get details for given tripId
  getDetailsForTripId(tripId: string) {
    return this.listOfTripsData.find((trip) => trip.tripID === tripId);
  }

  //delete trip
  deleteTrip(tripId: string) {
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

  addNewTrip(newTrip: Trip) {
    this.listOfTripsData.push(newTrip);
    this.listOfTripsSubject.next(this.listOfTripsData);
  }

   //main function used for adding/editing a trip
  updateOrCreateTrip(tripToBeUpdated: Trip) {
    const existingTrip = this.listOfTripsData.find(
      (trip) => trip.tripID === tripToBeUpdated.tripID
    );
    if (existingTrip !== undefined) {
      existingTrip.city = tripToBeUpdated.city;
      existingTrip.country = tripToBeUpdated.country;
      existingTrip.date = tripToBeUpdated.date;
      existingTrip.spending = tripToBeUpdated.spending;
      existingTrip.rating = tripToBeUpdated.rating;
      existingTrip.description = tripToBeUpdated.description;
      return;
    }

    this.addNewTrip(tripToBeUpdated);
  }
}
