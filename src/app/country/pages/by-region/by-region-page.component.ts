import { Component, computed, inject, linkedSignal, output, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

import { ResultsTableComponent } from '../../components/results-table/results-table.component';
import { CountryService } from '../../services/country.service';
import { RegionOptionsComponent } from '../../components/region-options/region-options.component';
import { Region, REGIONS } from '../../interfaces/Regions.type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-region-page',
  imports: [ResultsTableComponent, RegionOptionsComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('region') ?? 'africa';
  router = inject(Router);

  query = linkedSignal<Region>(() => {
    const region = this.queryParam.toLowerCase();

    return REGIONS.includes(region as Region) ? (region as Region) : 'africa';
  });
  countryResource = rxResource({
    params: () => ({ query: this.query() }),

    stream: ({ params }) => {
      if (!params.query) return of([]);
      this.router.navigate(['/country/by-region'], {
        queryParams: {
          region: params.query,
        },
      });
      return this.countryService.searchBy(params.query, 'region');
    },
  });
}
