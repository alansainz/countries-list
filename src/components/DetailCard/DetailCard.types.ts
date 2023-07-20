import CountryCardProps from '../CountriesList/CountryCard/CountryCard.types';
import { AllNamesAndCodesType } from '../../shared/hooks/countries.type';

interface CountryDetailsCardType extends CountryCardProps {
  subregion: string;
  nativeName: string;
  tld: string;
  currencies: string;
  languages: string;
  borders: string[];
}

export default interface CountriesListProps {
  countryDetails: CountryDetailsCardType | null;
  allNamesAndCodes: AllNamesAndCodesType;
}
export type { CountryDetailsCardType };
