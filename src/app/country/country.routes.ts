import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryLayoutComponent } from './layouts/CountryLayout/CountryLayout.component';
import { ByRegionPageComponent } from './pages/by-region/by-region-page.component';
import { ByCountryPageComponent } from './pages/by-country/by-country-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { NotFoundComponent } from '../shared/pages/not-found-page/not-found-page.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'by-capital',
        pathMatch: 'full',
      },
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },
      {
        path: 'by-region',
        component: ByRegionPageComponent,
      },
      {
        path: 'by-country',
        component: ByCountryPageComponent,
      },
      {
        path: 'by/:code',
        component: CountryPageComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

export default countryRoutes;
