import { Injectable } from '@angular/core';
import { Trip } from '../interfaces/trip.interface';
import { v4 as uuidv4 } from 'uuid';
import { Subject } from 'rxjs';

import tripsDataJson from './trips.json';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root',
})
//TODO - change with server requests
export class TripService {
  private baseURL = 'http://localhost:5000/api/Trips';

  private listOfTripsData!: Trip[];
  listOfTripsSubject = new Subject<Trip[]>();

  private edited: Trip = this.emptyTrip();
  editedTripsubject = new Subject<Trip>();

  constructor(private authService: AuthenticationService) {}

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

  //request trips for user from backend
  async requestTrips() {
    const response = await fetch(`${this.baseURL}/getAllForUser`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.authService.user?.JWT}`,
      },
    });

    this.listOfTrips = (await response.json()).map(
      (trip: any) => {
        return {
          userID: trip.userId,
          tripID: trip.tripId,
          city: trip.name,
          country: trip.country,
          date: trip.date,
          spending: trip.spending,
          rating: trip.rating,
          description: "",
        };
      }
    );
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
    } else this.addNewTrip(tripToBeUpdated);

    this.listOfTripsSubject.next(this.listOfTrips);
  }
}
