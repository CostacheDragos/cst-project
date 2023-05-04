import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-add-edit-trip-modal',
  templateUrl: './add-edit-trip-modal.component.html',
  styleUrls: ['./add-edit-trip-modal.component.scss'],
})
export class AddEditTripModalComponent {
  @Input() isVisible: boolean = false;
  @Input() isReadOnly: boolean = false;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  tripEditForm!: FormGroup;
  isEditingEnabled = false;

  constructor(private tripService: TripService) {
    tripService.editedTripsubject.subscribe(() => {
      this.initializeForm();
    });
  }

  ngOnInit(): void {
    this.isEditingEnabled = false;
    this.initializeForm();
  }

  initializeForm(): void {
    this.tripEditForm = new FormGroup({
      city: new FormControl(this.tripService.editedTrip.city, [
        Validators.required,
      ]),
      country: new FormControl(this.tripService.editedTrip.country, [
        Validators.required,
      ]),
      date: new FormControl(this.tripService.editedTrip.date, [
        Validators.required,
      ]),
      spending: new FormControl(this.tripService.editedTrip.spending, [
        Validators.required,
      ]),
      rating: new FormControl(this.tripService.editedTrip.rating, [
        Validators.required,
      ]),
      description: new FormControl(this.tripService.editedTrip.description, [
        Validators.required,
      ]),
    });
  }

  //click methods
  onOk(): void {
    this.isEditingEnabled = false;
    this.closeModal.emit(true);
  }

  onCancel(): void {
    this.isEditingEnabled = false;
    this.closeModal.emit(true);
  }

  //TODO edit
  onSubmitEdit(): void {
    console.log('edit');
  }

  // getters
  get city(): FormControl {
    return this.tripEditForm.get('city') as FormControl;
  }
  get country(): FormControl {
    return this.tripEditForm.get('country') as FormControl;
  }
  get date(): FormControl {
    return this.tripEditForm.get('date') as FormControl;
  }
  get spending(): FormControl {
    return this.tripEditForm.get('spending') as FormControl;
  }
  get rating(): FormControl {
    return this.tripEditForm.get('rating') as FormControl;
  }
  get description(): FormControl {
    return this.tripEditForm.get('description') as FormControl;
  }
}