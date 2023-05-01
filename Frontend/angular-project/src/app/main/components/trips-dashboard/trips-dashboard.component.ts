import { Component, Input } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip.interface';

@Component({
  selector: 'app-trips-dashboard',
  templateUrl: './trips-dashboard.component.html',
  styleUrls: ['./trips-dashboard.component.scss'],
})
export class TripsDashboardComponent {
  @Input()
  listOfTrips!: Trip[];

  currentPageTrips!: Trip[];
  startIndex: number = 0;
  pageLength: number = 6;
  visible = true;
  
  constructor() {}

  ngOnInit(): void {
    this.currentPageTrips = this.listOfTrips.slice(
      this.startIndex,
      this.pageLength
    );
  }

  //Pagination methods
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

  //Sorting methods
  sortByCityAscending() {
    this.listOfTrips.sort((a, b) => a.city.localeCompare(b.city));
    this.currentPageTrips = this.listOfTrips.slice(
      this.startIndex,
      this.pageLength
    );
    this.visible = false;
  }
}
