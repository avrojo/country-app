export interface Country {
  cca3: string;
  flagSvg: string;
  flagAlt: string;

  name: string;
  officialName: string;

  capital: string;
  population: number;

  region: string;
  subregion: string;

  area: number;

  currencies: string[];
  languages: string[];

  timezone: string[];
  callingCode: string;

  demonym: string;

  governmentType: string;

  link: string;
}
