interface CountryFromAPI {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  capital: [string];
  region: string;
  population: number;
}

interface NameAndCodeFromAPI {
  cca3: string;
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
}

interface CountryDetailsFromAPI extends CountryFromAPI {
  borders: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  subregion: string;
  tld: string[];
}

type CountriesListFromAPI = CountryFromAPI[];

type AllNamesAndCodesType = { [key: string]: string };

export type { CountryFromAPI, CountriesListFromAPI, CountryDetailsFromAPI, NameAndCodeFromAPI, AllNamesAndCodesType };
