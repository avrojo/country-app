import { Component, inject, input, OnInit } from '@angular/core';
import { Country } from '../../../interfaces/Country';
import { DecimalPipe } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'country-information',
  templateUrl: './country-information.component.html',
  imports: [DecimalPipe],
})
export class CountryInformationComponent {
  country = input.required<Country>();
  location = inject(Location);

  goBack() {
    this.location.back();
  }
}
