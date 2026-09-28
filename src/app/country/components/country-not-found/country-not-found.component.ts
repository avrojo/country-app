import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'country-not-found',
  imports: [],
  templateUrl: './country-not-found.component.html',
})
export class CountryNotFoundComponent {
  location = inject(Location);

  goBack() {
    this.location.back();
  }
}