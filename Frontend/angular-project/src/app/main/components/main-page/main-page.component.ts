import { Component } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip.interface';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(private tripService: TripService) {}

  //TODO implement logout
  logout() {
    console.log('Logged out succesfully');
  }

  //fetch list of trips
  listOfTrips: Trip[] = this.tripService.getListOfDisplayedTrips();
}
