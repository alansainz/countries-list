import { renderHook, act } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { useAllCountries, useCountrySearch, useCountryDetails } from './countries';

describe('countries hooks', () => {
  test('useAllCountries, should perform get request and get all countries', async () => {
    const mock = new MockAdapter(axios);

    const mockData = 'response';
    const url = 'http://mock';
    mock.onGet(url).reply(200, mockData);

    const { result } = renderHook(useAllCountries);

    expect(result.current.allCountries).toEqual([]);

    await act(async () => {
      await result.current.loadAllCountries();
    });

    expect(result.current.allCountries).toHaveLength(250);
  });

  test('useCountrySearch, should perform get request and get countries', async () => {
    const mock = new MockAdapter(axios);

    const mockData = 'response';
    const url = 'http://mock';
    mock.onGet(url).reply(200, mockData);

    const { result } = renderHook(() => useCountrySearch('Jordan'));

    expect(result.current.countriesSearched).toEqual([]);

    await act(async () => {
      await result.current.loadCountrySearch();
    });

    expect(result.current.countriesSearched).toHaveLength(1);
  });

  test('useCountryDetails, should perform get request and get all countries', async () => {
    const mock = new MockAdapter(axios);

    const mockData = {
      nativeName: 'الأردن',
      subregion: 'Western Asia',
      tld: '.jo',
      currencies: 'Jordanian dinar',
      languages: 'Arabic',
      flag: {
        src: 'https://flagcdn.com/jo.svg',
        alt: 'The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center.',
      },
      name: 'Jordan',
      population: 10203140,
      region: 'Asia',
      capital: 'Amman',
      borders: ['IRQ', 'ISR', 'PSE', 'SAU', 'SYR'],
    };
    const url = 'http://mock';
    mock.onGet(url).reply(200, mockData);

    const { result } = renderHook(() => useCountryDetails('Jordan'));

    expect(result.current.countryDetails).toEqual(null);

    await act(async () => {
      await result.current.loadCountryDetails();
    });

    expect(result.current.countryDetails).toEqual(mockData);
  });
});
