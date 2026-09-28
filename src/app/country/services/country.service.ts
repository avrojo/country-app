import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountryResponse } from '../interfaces/Rest-countries';
import { catchError, map, of, tap, throwError } from 'rxjs';
import { Country } from '../interfaces/Country';
import { mapRestCountryResponseToCountries } from '../mapper/country.mapper';

const API_URL = 'https://api.restcountries.com/countries/v5';

type SearchParameter = 'name' | 'capitals' | 'region' | 'code';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private queryCache = new Map<string, Country[]>();

private headers = new HttpHeaders({
  Authorization: 'Bearer <YOUR_API_KEY>',
  // Obtén tu API Key gratuita en https://restcountries.com/
  //Recordatorio: cualquier clave incluida en el frontend de Angular y podrá verse si el user inspecciona la pagina!
});


  default() {
    return this.http
      .get<RESTCountryResponse>(`${API_URL}?limit=15`, { headers: this.headers })
      .pipe(map(mapRestCountryResponseToCountries));
  }

  searchBy(query: string, parameter: SearchParameter) {
    query = query.toLowerCase();
    const cacheKey = `${parameter}-${query}`;

    if (this.queryCache.has(cacheKey)) return of(this.queryCache.get(cacheKey) ?? []);

    return this.http
      .get<RESTCountryResponse>(`${API_URL}/${parameter}?limit=100&q=${query}`, {
        headers: this.headers,
      })
      .pipe(
        map(mapRestCountryResponseToCountries),
        tap((countries) => this.queryCache.set(cacheKey, countries)),
        catchError((error) => {
          console.log(error);
          return throwError(() => new Error(`No se pudo obtener países con el query ${query}`));
        }),
      );
  }
}
