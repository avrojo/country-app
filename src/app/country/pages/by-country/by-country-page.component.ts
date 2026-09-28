import { Component, computed, inject, linkedSignal, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { ResultsTableComponent } from '../../components/results-table/results-table.component';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchBarComponent, ResultsTableComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  router = inject(Router);
  query = linkedSignal(() => this.queryParam);

  countryResource = rxResource({
    params: () => ({ query: this.query() }),

    stream: ({ params }) => {
      if (!params.query) return this.countryService.default();

      this.router.navigate(['/country/by-country'], {
        queryParams: {
          query: params.query,
        },
      });
      return this.countryService.searchBy(params.query, 'name');
    },
  });
}