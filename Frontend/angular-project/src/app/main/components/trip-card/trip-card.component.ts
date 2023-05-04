import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TripService } from 'src/app/services/trip.service';
import { Trip } from 'src/app/interfaces/trip.interface';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss'],
})
export class TripCardComponent {
  //is used only by cards, so it doesn't contain description field
  @Input()
  tripListing!: Trip;

  //contains all data, including description
  trip?: Trip;

  @Output()
  emitDeleteTripId: EventEmitter<string> = new EventEmitter();

  @Output() openViewDetailsModal: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(private tripService: TripService) {}

  //click functions
  onDeleteTripClick(tripId: string) {
    //call the service to delete trip from backend
    this.tripService.deleteTrip(tripId);

    //emit the id of the trip to the parent component
    this.emitDeleteTripId.emit(tripId);
  }

  onViewDetailsClick(tripId: string) {
    //get the trip with all data from server
    this.trip = this.tripService.getDetailsForTripId(tripId);

    if (this.trip != undefined) {
      //asign this value to editedTrip from servce
      this.tripService.editedTrip = this.trip;

      //emit event for open details modal
      this.openViewDetailsModal.emit();
    }
  }
}
