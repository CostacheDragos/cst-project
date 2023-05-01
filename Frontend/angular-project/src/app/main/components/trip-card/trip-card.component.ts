import { Component, Input } from '@angular/core';
import { TripListing } from '../../interfaces/trip-listing.interface';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss'],
})
export class TripCardComponent {
  @Input()
  trip!: TripListing;
}
