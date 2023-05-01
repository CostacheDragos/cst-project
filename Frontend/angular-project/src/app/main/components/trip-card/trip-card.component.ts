import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TripListing } from '../../interfaces/trip-listing.interface';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss'],
})
export class TripCardComponent {

  @Input()
  trip!: TripListing;

  @Output() emitDeleteTripId: EventEmitter<string> = new EventEmitter();

  constructor(private tripService:TripService){}

  onDeleteTripClick(tripId: string) {
    //call the service to delete trip from backend
    this.tripService.deleteTrip(tripId);

    //emit the id of the trip to the parent component
    this.emitDeleteTripId.emit(tripId);
    }
}
