import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject, linkedSignal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { ResultsTableComponent } from '../../components/results-table/results-table.component';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchBarComponent, ResultsTableComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  router = inject(Router);
  query = linkedSignal(() => this.queryParam);

  countryResource = rxResource({
    params: () => ({ query: this.query() }),

    stream: ({ params }) => {
      if (!params.query) return this.countryService.default();

      this.router.navigate(['/country/by-capital'], {
        queryParams: {
          query: params.query,
        },
      });
      return this.countryService.searchBy(params.query, 'capitals');
    },
  });
}

// export class ByCapitalPageComponent {
//   countryService = inject(CountryService);

//   isLoading = signal(false);
//   isError = signal<string | null>(null);
//   countries = signal<Country[]>([]);

//   onSearch(query: string) {
//     console.log({ query });
//     this.isError.set(null);
//     this.isLoading.set(true);

//     this.countryService.searchBy(query, 'capitals').subscribe({
//       next: (data) => {
//         this.isLoading.set(false);
//         this.countries.set(data);
//       },
//       error: (err) => {
//         this.isLoading.set(false);
//         this.isError.set(err);
//         this.countries.set([]);
//       }
//     });
//   }
// }
