import { Country } from '../interfaces/Country';
import { Object as RestCountry } from '../interfaces/Rest-countries';
import { RESTCountryResponse } from '../interfaces/Rest-countries';

export const mapRestCountryToCountry = (country: RestCountry): Country => ({
  cca3: country.codes.alpha_3,

  flagSvg: country.flag.url_svg,

  flagAlt: 'Bandera de ' + (country.names.translations?.['spa']?.common ?? country.names.common),

  name: country.names.translations?.['spa']?.common ?? country.names.common,

  officialName: country.names.translations?.['spa']?.official ?? country.names.official,

  capital: country.capitals?.map((cap) => cap.name).join(', ') ?? 'Sin capital',

  population: country.population,

  region: country.region,
  subregion: country.subregion,

  area: country.area.kilometers,

  currencies: country.currencies?.map((c) => c.name) ?? [],

  languages: country.languages?.map((l) => l.native_name) ?? [],

  timezone: country.timezones ?? [],

  callingCode: country.calling_codes?.join(', ') ?? '',

  demonym: country.demonyms?.eng?.m ?? '',

  governmentType: country.government_type ?? '',

  link: country.links.official,
});

export const mapRestCountryResponseToCountries = (
  response: RESTCountryResponse
): Country[] =>
  response.data.objects.map(mapRestCountryToCountry);
