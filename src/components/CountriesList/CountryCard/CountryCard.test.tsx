import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import CountryCard from './CountryCard';
import parseNumber from '../../../utils/numbers';

describe('CountryCard component', () => {
  const countryCard = {
    flag: {
      src: 'https://flagcdn.com/w320/jo.png',
      alt: 'The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center.',
    },
    name: 'Jordan',
    population: 10203140,
    region: 'Asia',
    capital: 'Amman',
  };

  test('should render correctly with the given props', () => {
    render(
      <MemoryRouter>
        <CountryCard {...countryCard} />
      </MemoryRouter>
    );

    const component = screen.getByText(/Jordan/i);

    expect(component).toBeInTheDocument();
  });

  test('population is parsed correctly', () => {
    render(
      <MemoryRouter>
        <CountryCard {...countryCard} />{' '}
      </MemoryRouter>
    );
    const component = screen.getByText(parseNumber(countryCard.population));

    expect(component).toBeInTheDocument();
  });
});
