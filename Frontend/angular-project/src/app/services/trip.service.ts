import { Injectable } from '@angular/core';

import { Trip } from 'src/app/interfaces/trip.interface';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  constructor() {}

  //TODO fetch data from backend
  getListOfTrips() {
    return [
      {
        userID: '1',
        tripID: '1',
        city: 'Barcelona',
        country: 'Spain',
        date: '20/02/2020',
        spending: 15000,
        rating: 4,
        description: 'Amazing trip!!',
      },
      {
        userID: '1',
        tripID: '2',
        city: 'Paris',
        country: 'France',
        date: '02/03/2021',
        spending: 30000,
        rating: 3,
        description: 'Good but expesive',
      },
      {
        userID: '1',
        tripID: '3',
        city: 'Sydney',
        country: 'Australia',
        date: '10/11/2022',
        spending: 20000,
        rating: 5,
        description: 'Amazing experience, would definitely recommend',
      },
      {
        userID: '1',
        tripID: '4',
        city: 'Tokyo',
        country: 'Japan',
        date: '01/05/2023',
        spending: 25000,
        rating: 4,
        description: 'Great food and culture',
      },
      {
        userID: '1',
        tripID: '5',
        city: 'New York',
        country: 'United States',
        date: '15/09/2023',
        spending: 40000,
        rating: 4.5,
        description: 'Exciting city with lots to see and do',
      },
      {
        userID: '1',
        tripID: '6',
        city: 'Amsterdam',
        country: 'Netherlands',
        date: '20/06/2022',
        spending: 15000,
        rating: 4,
        description: 'Great nightlife',
      },
      {
        userID: '1',
        tripID: '7',
        city: 'Rio de Janeiro',
        country: 'Brazil',
        date: '01/08/2023',
        spending: 25000,
        rating: 4.5,
        description: 'Stunning beaches and vibrant culture',
      },
      {
        userID: '1',
        tripID: '8',
        city: 'Cape Town',
        country: 'South Africa',
        date: '12/12/2022',
        spending: 22000,
        rating: 4,
        description: 'Beautiful scenery and wildlife',
      },
      {
        userID: '1',
        tripID: '9',
        city: 'Hanoi',
        country: 'Vietnam',
        date: '05/03/2023',
        spending: 18000,
        rating: 4,
        description: 'Amazing street food and architecture',
      },
      {
        userID: '1',
        tripID: '10',
        city: 'Machu Picchu',
        country: 'Peru',
        date: '25/06/2023',
        spending: 28000,
        rating: 5,
        description: 'Incredible historical site and views',
      },
      {
        userID: '1',
        tripID: '11',
        city: 'Reykjavik',
        country: 'Iceland',
        date: '08/09/2023',
        spending: 35000,
        rating: 4.5,
        description: 'Stunning natural scenery and Northern Lights',
      },
    ];
  }
}
