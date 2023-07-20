import axios from 'axios';

const baseURL = 'https://restcountries.com/v3.1/';

const baseApi = axios.create({
  baseURL,
});

const getAllCountries = () => {
  return baseApi.get('/all', {
    params: { fields: 'name,flags,population,region,capital' },
  });
};

const getAllCountriesNameAndCode = () => {
  return baseApi.get('/all', {
    params: { fields: 'name,cca3' },
  });
};

const getCountryByName = (name: string = '') => {
  return baseApi.get(`/name/${name}`, {
    params: { fields: 'name,flags,population,region,capital' },
  });
};

const getCountryByNamePlusDetails = (name: string = '') => {
  return baseApi.get(`/name/${name}`, {
    params: { fields: 'name,flags,population,region,subregion,capital,tld,currencies,languages,borders' },
  });
};

const RestCountries = {
  getAllCountries,
  getCountryByName,
  getCountryByNamePlusDetails,
  getAllCountriesNameAndCode,
};

export default RestCountries;
