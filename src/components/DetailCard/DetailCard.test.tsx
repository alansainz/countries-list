import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import DetailCard from './DetailCard';
import parseNumber from '../../utils/numbers';

describe('DetailCard component', () => {
  const countryDetailsMock = {
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

  const allNamesAndCodesMock = {
    IRQ: 'Iraq',
    SYR: 'Syria',
  };
  const props = {
    countryDetails: countryDetailsMock,
    allNamesAndCodes: allNamesAndCodesMock,
  };

  test('should render correctly with the given props', () => {
    render(
      <MemoryRouter>
        <DetailCard {...props} />
      </MemoryRouter>
    );

    const component = screen.getByText(/الأردن/i);

    expect(component).toBeInTheDocument();
  });

  test('population is parsed correctly', () => {
    render(
      <MemoryRouter>
        <DetailCard {...props} />
      </MemoryRouter>
    );

    const component = screen.getByText(parseNumber(countryDetailsMock.population));

    expect(component).toBeInTheDocument();
  });

  test('correct use of the countries dictionary', () => {
    render(
      <MemoryRouter>
        <DetailCard {...props} />
      </MemoryRouter>
    );

    const component = screen.getByText(
      allNamesAndCodesMock[countryDetailsMock.borders[0] as keyof typeof allNamesAndCodesMock]
    );

    expect(component).toBeInTheDocument();
  });
});
