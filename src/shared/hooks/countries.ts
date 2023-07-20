import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import RestCountries from '../api';
import CountryCardProps from '../../components/CountriesList/CountryCard/CountryCard.types';
import useDebounce from './debounce';
import { parseCountriesData, parseCountryDetail, parseNameAndCode } from '../../utils/parseCountries';
import filterByRegion from '../../utils/filterByRegion';
import { CountryDetailsCardType } from '../../components/DetailCard/DetailCard.types';
import { AllNamesAndCodesType } from './countries.type';
import { RegionType } from '../../utils/regions';

const useAllCountries = () => {
  const [allCountries, setAllCountries] = useState<CountryCardProps[]>([]);

  const loadAllCountries = async () => {
    const response = await RestCountries.getAllCountries();
    const { data } = response;
    const result = parseCountriesData(data);
    setAllCountries(result);
  };

  useEffect(() => {
    loadAllCountries();
  }, []);
  return { allCountries, loadAllCountries };
};

const useAllNamesAndCodes = () => {
  const [allNamesAndCodes, setAllNamesAndCodes] = useState<AllNamesAndCodesType>({});

  useEffect(() => {
    const loadAllCountries = async () => {
      const response = await RestCountries.getAllCountriesNameAndCode();
      const { data } = response;
      const result = parseNameAndCode(data);
      setAllNamesAndCodes(result);
    };
    loadAllCountries();
  }, []);
  return { allNamesAndCodes };
};

const useCountrySearch = (query: string = '') => {
  const [countriesSearched, setCountriesSearched] = useState<CountryCardProps[]>([]);
  const emptyCountriesList = () => setCountriesSearched([]);

  const handleError = (error: AxiosError) => {
    if (error.response?.status === 404) {
      emptyCountriesList();
    }
  };

  const loadCountrySearch = async () => {
    try {
      const response = await RestCountries.getCountryByName(query);
      const { data } = response;
      const result = parseCountriesData(data);
      setCountriesSearched(result);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleError(error);
      } else {
        console.error(error);
      }
    }
  };
  const debouncedRequest = useDebounce(async () => {
    loadCountrySearch();
  });

  return { debouncedRequest, countriesSearched, loadCountrySearch };
};

const useCountryDetails = (query: string = '') => {
  const [countryDetails, setCountryDetails] = useState<CountryDetailsCardType | null>(null);
  const emptyCountryDetail = () => setCountryDetails(null);

  const handleError = (error: AxiosError) => {
    if (error.response?.status === 404) {
      emptyCountryDetail();
    }
  };

  const loadCountryDetails = async () => {
    try {
      const response = await RestCountries.getCountryByNamePlusDetails(query);
      const { data } = response;
      const result = parseCountryDetail(data[0]);
      setCountryDetails(result);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleError(error);
      } else {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    loadCountryDetails();
  }, [query]);

  return { countryDetails, loadCountryDetails };
};

const useFilterByRegion = () => {
  const filterCountries = (region: RegionType, countries: CountryCardProps[]) => {
    return filterByRegion(region, countries);
  };

  return filterCountries;
};

const useCountriesToShow = (query: string, region: string) => {
  const { allCountries } = useAllCountries();

  const { debouncedRequest, countriesSearched } = useCountrySearch(query);

  const [countriesToShow, setCountriesToShow] = useState<CountryCardProps[]>([]);

  const filterCountries = useFilterByRegion();

  useEffect(() => {
    setCountriesToShow(allCountries);
  }, [allCountries]);

  useEffect(() => {
    const queryExists = query.length;
    const filterExists = region.length;
    // edge cases
    const searchButNoFilters = queryExists && !filterExists;
    const noSearchNoFilters = !queryExists && !filterExists;
    const noQueryButFilters = !queryExists && filterExists;
    const searchAndFilters = queryExists && filterExists;

    // user searchs but doesn't apply filters
    if (searchButNoFilters) {
      setCountriesToShow(countriesSearched);
    }
    // user deletes the search and doesn't apply filters
    else if (noSearchNoFilters) {
      setCountriesToShow(allCountries);
    }
    // user deletes the query and applies filters to the home results
    else if (noQueryButFilters) {
      const result = filterCountries(region, allCountries);
      setCountriesToShow(result);
    }
    // user searches & applies filter
    else if (searchAndFilters) {
      const result = filterCountries(region, countriesSearched);
      setCountriesToShow(result);
    }
  }, [query, region, countriesSearched]);

  return { countriesToShow, debouncedRequest };
};

export {
  useAllCountries,
  useCountrySearch,
  useFilterByRegion,
  useCountryDetails,
  useAllNamesAndCodes,
  useCountriesToShow,
};
