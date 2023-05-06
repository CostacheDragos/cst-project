import { Component } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip.interface';
import { TripService } from 'src/app/services/trip.service';
import { TripListing } from '../../interfaces/trip-listing.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(
    private tripService: TripService, 
    private authenticationService: AuthenticationService,
    private router: Router
    ) {}

  logout() {
    // Log the user out
    this.authenticationService.logout();

    // Take the user back to the login page
    this.router.navigate(['/login']);
  }

  //fetch list of trips
  listOfTrips: Trip[] = this.tripService.getListOfDisplayedTrips();
}
