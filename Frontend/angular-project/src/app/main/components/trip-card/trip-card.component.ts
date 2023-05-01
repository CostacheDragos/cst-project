import { Component, Input } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip.interface';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss'],
})
export class TripCardComponent {
  @Input()
  trip!: Trip;
}
