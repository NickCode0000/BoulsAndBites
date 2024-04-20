import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-reserveer-block',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reserveer-block.component.html',
  styleUrls: ['./reserveer-block.component.scss']
})
export class ReserveerBlockComponent {
  bookingForm: FormGroup;
  message: string = '';
  messageType: 'success' | 'error' = 'error';

  constructor() {
    this.bookingForm = new FormGroup({
      phoneNumber: new FormControl(''),
      emailAddress: new FormControl(''),
      bookingNumber: new FormControl('')
    });
  }

  onSubmit() {
    const formData = this.bookingForm.value;

    if (
      formData.phoneNumber === '1234567890' &&
      formData.emailAddress === 'test@example.com' &&
      formData.bookingNumber === 'ABC123'
    ) {
      this.message = 'Reservering gevonden! Klik hier.';
      this.messageType = 'success';
    } else {
      this.message = 'Reservering niet gevonden. Controleer alstublieft of uw gegevens correct zijn ingevuld.';
      this.messageType = 'error';
    }
  }
}
