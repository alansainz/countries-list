import CountryCardProps from '../components/CountriesList/CountryCard/CountryCard.types';

const filterByRegion = (region: string, countries: CountryCardProps[]) =>
  countries.filter((country: CountryCardProps) => country.region === region);

export default filterByRegion;
