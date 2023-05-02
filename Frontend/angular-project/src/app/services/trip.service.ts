import { Injectable } from '@angular/core';
import { TripListing } from '../main/interfaces/trip-listing.interface';
import { Trip } from '../interfaces/trip.interface';
import { v4 as uuidv4 } from 'uuid';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TripService {
  private listOfDisplayedTrips!: TripListing[];

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

   //TODO - change with server request
  getListOfDisplayedTrips() {
    this.listOfDisplayedTrips = [
      {
        userID: '1',
        tripID: '1',
        city: 'Barcelona',
        country: 'Spain',
        date: '20/02/2020',
        spending: 15000,
        rating: 4,
      },
      {
        userID: '1',
        tripID: '2',
        city: 'Paris',
        country: 'France',
        date: '02/03/2021',
        spending: 30000,
        rating: 3,
      },
      {
        userID: '1',
        tripID: '3',
        city: 'Sydney',
        country: 'Australia',
        date: '10/11/2022',
        spending: 20000,
        rating: 5,
      },
      {
        userID: '1',
        tripID: '4',
        city: 'Tokyo',
        country: 'Japan',
        date: '01/05/2023',
        spending: 25000,
        rating: 4,
      },
      {
        userID: '1',
        tripID: '5',
        city: 'New York',
        country: 'United States',
        date: '15/04/2023',
        spending: 40000,
        rating: 4.5,
      },
      {
        userID: '1',
        tripID: '6',
        city: 'Amsterdam',
        country: 'Netherlands',
        date: '20/06/2022',
        spending: 15000,
        rating: 4,
      },
      {
        userID: '1',
        tripID: '7',
        city: 'Rio de Janeiro',
        country: 'Brazil',
        date: '01/03/2023',
        spending: 25000,
        rating: 4.5,
      },
      {
        userID: '1',
        tripID: '8',
        city: 'Cape Town',
        country: 'South Africa',
        date: '12/12/2022',
        spending: 22000,
        rating: 4,
      },
      {
        userID: '1',
        tripID: '9',
        city: 'Hanoi',
        country: 'Vietnam',
        date: '05/02/2023',
        spending: 18000,
        rating: 4,
      },
      {
        userID: '1',
        tripID: '10',
        city: 'Machu Picchu',
        country: 'Peru',
        date: '25/06/2020',
        spending: 28000,
        rating: 5,
      },
      {
        userID: '1',
        tripID: '11',
        city: 'Reykjavik',
        country: 'Iceland',
        date: '08/09/2021',
        spending: 35000,
        rating: 4.5,
      },
    ];
    return this.listOfDisplayedTrips;
  }

  //TODO delete this when fetch data from server
  listOfEditingTrips = [
    {
      userID: '1',
      tripID: '1',
      city: 'Barcelona',
      country: 'Spain',
      date: '20/02/2020',
      spending: 15000,
      rating: 4,
      description: 'Amazing trip',
    },
    {
      userID: '1',
      tripID: '2',
      city: 'Paris',
      country: 'France',
      date: '02/03/2021',
      spending: 30000,
      rating: 3,
      description: 'Good food and people!',
    },
    {
      userID: '1',
      tripID: '3',
      city: 'Sydney',
      country: 'Australia',
      date: '10/11/2022',
      spending: 20000,
      rating: 5,
      description: 'Beautiful city',
    },
    {
      userID: '1',
      tripID: '4',
      city: 'Tokyo',
      country: 'Japan',
      date: '01/05/2023',
      spending: 25000,
      rating: 4,
      description: 'Amazing culture!',
    },
    {
      userID: '1',
      tripID: '5',
      city: 'New York',
      country: 'United States',
      date: '15/04/2023',
      spending: 40000,
      rating: 4.5,
      description: 'The most interesting city!',
    },
    {
      userID: '1',
      tripID: '6',
      city: 'Amsterdam',
      country: 'Netherlands',
      date: '20/06/2022',
      spending: 15000,
      rating: 4,
      description: 'Amazing experience, would definitely recommend',
    },
    {
      userID: '1',
      tripID: '7',
      city: 'Rio de Janeiro',
      country: 'Brazil',
      date: '01/03/2023',
      spending: 25000,
      rating: 4.5,
      description: 'Exciting city with lots to see and do ',
    },
    {
      userID: '1',
      tripID: '8',
      city: 'Cape Town',
      country: 'South Africa',
      date: '12/12/2022',
      spending: 22000,
      rating: 4,
      description: 'Great nightlife',
    },
    {
      userID: '1',
      tripID: '9',
      city: 'Hanoi',
      country: 'Vietnam',
      date: '05/02/2023',
      spending: 18000,
      rating: 4,
      description: 'Amazing street food and architecture',
    },
    {
      userID: '1',
      tripID: '10',
      city: 'Machu Picchu',
      country: 'Peru',
      date: '25/06/2020',
      spending: 28000,
      rating: 5,
      description: 'Incredible historical site and views',
    },
    {
      userID: '1',
      tripID: '11',
      city: 'Reykjavik',
      country: 'Iceland',
      date: '08/09/2021',
      spending: 35000,
      rating: 4.5,
      description: 'Stunning natural scenery and Northern Lights',
    },
  ];

  //TODO - change with server request
  //get details for given tripId
  getDetailsForTripId(tripId: string) {
    return this.listOfEditingTrips.find((trip) => trip.tripID === tripId);
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
