import CountryCardProps from '../components/CountriesList/CountryCard/CountryCard.types';
import {
  CountryFromAPI,
  CountriesListFromAPI,
  CountryDetailsFromAPI,
  NameAndCodeFromAPI,
} from '../shared/hooks/countries.type';
import { CountryDetailsCardType } from '../components/DetailCard/DetailCard.types';

const parseCountriesData = (countriesData: CountriesListFromAPI): CountryCardProps[] => {
  const parsedCountries = countriesData.map((country: CountryFromAPI) => {
    const result = {
      flag: {
        src: country.flags.png,
        alt: country.flags.alt,
      },
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital[0],
    };
    return result;
  });
  return parsedCountries;
};

const parseCurrencies = (currencies: {
  [key: string]: {
    name: string;
    symbol: string;
  };
}) => {
  const array: string[] = [];
  Object.values(currencies).forEach((currency: { name: string; symbol: string }) => array.push(currency?.name));
  return array.join(', ');
};

const parseLanguages = (languages: { [key: string]: string }) => {
  const array: string[] = [];
  Object.values(languages).forEach((language: string) => array.push(language));
  return array.join(', ');
};

const parseNameAndCode = (countries: NameAndCodeFromAPI[]) => {
  const dict = countries.reduce((acc: { [key: string]: string }, curr: NameAndCodeFromAPI) => {
    acc[curr.cca3] = curr.name.common;
    return acc;
  }, {});
  return dict;
};

const parseCountryDetail = (country: CountryDetailsFromAPI): CountryDetailsCardType => {
  const result = {
    nativeName: country.name.nativeName[Object.keys(country?.name?.nativeName)[0]]?.common,
    subregion: country.subregion,
    tld: country.tld[0],
    currencies: parseCurrencies(country.currencies),
    languages: parseLanguages(country.languages),
    flag: {
      src: country.flags.svg,
      alt: country.flags.alt,
    },
    name: country.name.common,
    population: country.population,
    region: country.region,
    capital: country.capital[0],
    borders: country.borders,
  };
  return result;
};

export { parseCountriesData, parseCountryDetail, parseNameAndCode };
