import { Component, Input } from '@angular/core';
import { TripListing } from '../../interfaces/trip-listing.interface';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trips-dashboard',
  templateUrl: './trips-dashboard.component.html',
  styleUrls: ['./trips-dashboard.component.scss'],
})
export class TripsDashboardComponent {
  @Input()
  listOfTrips!: TripListing[];

  currentPageTrips!: TripListing[];
  startIndex: number = 0;
  pageLength: number = 6;
  visible = true;
  searchText!: string;

  isViewDetailsModalOpen: boolean = false;
  isReadOnly: boolean = false;

  constructor(private tripService:TripService) {}

  ngOnInit(): void {
    this.currentPageTrips = this.listOfTrips.slice(
      this.startIndex,
      this.pageLength
    );
  }

  //******************************* Pagination methods **********************************
  //////////////////////////////////////////////////////////////////////////////////////
  previous() {
    if (this.startIndex - this.pageLength < 0) {
      return;
    }

    const lastCityIndexOfCurrentPage = this.startIndex;
    this.startIndex -= this.pageLength;

    this.currentPageTrips = this.listOfTrips.slice(
      this.startIndex,
      lastCityIndexOfCurrentPage
    );
  }

  next() {
    if (this.startIndex + this.pageLength > this.listOfTrips.length) return;

    this.startIndex += this.pageLength;
    let lastCityIndexOfCurrentPage;

    if (this.startIndex + this.pageLength < this.listOfTrips.length)
      lastCityIndexOfCurrentPage = this.startIndex + this.pageLength;
    else lastCityIndexOfCurrentPage = this.listOfTrips.length;

    this.currentPageTrips = this.listOfTrips.slice(
      this.startIndex,
      lastCityIndexOfCurrentPage
    );
  }
  //////////////////////////////////////////////////////////////////////////////////////

  //******************************* Sorting methods ************************************
  //////////////////////////////////////////////////////////////////////////////////////
  sortByCityAscending() {
    this.listOfTrips.sort((a, b) => a.city.localeCompare(b.city));
    this.currentPageTrips = this.listOfTrips.slice(
      this.startIndex,
      this.pageLength
    );
    this.visible = false;
  }

  sortByCityDescending() {
    this.listOfTrips.sort((a, b) => b.city.localeCompare(a.city));
    this.currentPageTrips = this.listOfTrips.slice(
      this.startIndex,
      this.pageLength
    );
    this.visible = false;
  }

  sortByCountryAscending() {
    this.listOfTrips.sort((a, b) => a.country.localeCompare(b.country));
    this.currentPageTrips = this.listOfTrips.slice(
      this.startIndex,
      this.pageLength
    );
    this.visible = false;
  }

  sortByCountryDescending() {
    this.listOfTrips.sort((a, b) => b.country.localeCompare(a.country));
    this.currentPageTrips = this.listOfTrips.slice(
      this.startIndex,
      this.pageLength
    );
    this.visible = false;
  }

  sortByDateAscending() {
    this.listOfTrips.sort((a, b) => {
      const dateA = a.date.split('/').reverse().join('-'); // rearrange to yyyy-mm-dd format
      const dateB = b.date.split('/').reverse().join('-'); // rearrange to yyyy-mm-dd format
      return Date.parse(dateA) - Date.parse(dateB);
    });
    this.currentPageTrips = this.listOfTrips.slice(
      this.startIndex,
      this.pageLength
    );
    this.visible = false;
  }

  sortByDateDescending() {
    this.listOfTrips.sort((a, b) => {
      const dateA = a.date.split('/').reverse().join('-');
      const dateB = b.date.split('/').reverse().join('-');
      return Date.parse(dateB) - Date.parse(dateA);
    });
    this.currentPageTrips = this.listOfTrips.slice(
      this.startIndex,
      this.pageLength
    );
    this.visible = false;
  }

  sortByRatingAscending() {
    this.listOfTrips.sort((a, b) => a.rating - b.rating);
    this.currentPageTrips = this.listOfTrips.slice(
      this.startIndex,
      this.pageLength
    );
    this.visible = false;
  }

  sortByRatingDescending() {
    this.listOfTrips.sort((a, b) => b.rating - a.rating);
    this.currentPageTrips = this.listOfTrips.slice(
      this.startIndex,
      this.pageLength
    );
    this.visible = false;
  }

  sortBySpendingAscending() {
    this.listOfTrips.sort((a, b) => a.spending - b.spending);
    this.currentPageTrips = this.listOfTrips.slice(
      this.startIndex,
      this.pageLength
    );
    this.visible = false;
  }

  sortBySpendingDescending() {
    this.listOfTrips.sort((a, b) => b.spending - a.spending);
    this.currentPageTrips = this.listOfTrips.slice(
      this.startIndex,
      this.pageLength
    );
    this.visible = false;
  }
  //////////////////////////////////////////////////////////////////////////////////////

  //************************** Trip manipulation methods *******************************
  //this method is called when user deletes a trip in order to delete it from UI
  deleteTrip(id: string) {
    this.listOfTrips.splice(
      this.listOfTrips.findIndex((item) => item.tripID === id),
      1
    );
    this.currentPageTrips = this.listOfTrips.slice(
      this.startIndex,
      this.pageLength
    );
  }
  //////////////////////////////////////////////////////////////////////////////////////

  
  onOpenViewDetailsModal() {
    this.isViewDetailsModalOpen = true;
    this.isReadOnly = true;
  }
}
