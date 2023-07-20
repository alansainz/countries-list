import React from 'react';
import { Link } from 'react-router-dom';
import CountriesListProps from './CountriesList.types';
import styles from './CountriesList.module.scss';
import CountryCard from './CountryCard/CountryCard';

function CountriesList({ countries }: CountriesListProps) {
  return (
    <div className={styles.countriesList}>
      {countries.map((country) => (
        <Link key={country.name} to={country.name}>
          <CountryCard {...country} />
        </Link>
      ))}
    </div>
  );
}
export default CountriesList;
