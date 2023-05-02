import { Component } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';
import { TripListing } from '../../interfaces/trip-listing.interface';

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

  //fetch list of listing-trips
  listOfTrips: TripListing[] = this.tripService.getListOfDisplayedTrips();
}
