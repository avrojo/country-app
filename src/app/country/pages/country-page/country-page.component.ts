import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { CountryInformationComponent } from './country-information/country-information.component';
import { CountryNotFoundComponent } from '../../components/country-not-found/country-not-found.component';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  imports: [CountryInformationComponent, CountryNotFoundComponent],
})
export class CountryPageComponent {
  code = toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['code'])));
  location = inject(Location);
  countryService = inject(CountryService);

  countryResource = rxResource({
    params: () => ({ query: this.code() }),
    stream: ({ params }) => {
      return this.countryService
        .searchBy(params.query, 'code')
        .pipe(map((countries) => countries.at(0)));
    },
  });
}
