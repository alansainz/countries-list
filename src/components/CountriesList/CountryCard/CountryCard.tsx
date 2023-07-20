import React, { useContext } from 'react';
import cx from 'classnames';
import CountryCardProps from './CountryCard.types';
import styles from './CountryCard.module.scss';
import texts from '../../../utils/texts.json';
import parseNumber from '../../../utils/numbers';
import DataRow from '../../Shared/DataRow';
import LightThemeContext from '../../../shared/hooks/useTheme';

function CountryCard({ name, flag, population, region, capital }: CountryCardProps) {
  const { src, alt } = flag;
  const lightTheme = useContext(LightThemeContext);

  return (
    <div className={cx(styles.countryCard, { [styles.lightTheme]: lightTheme })}>
      <div className={styles.flagWrapper}>{src && <img className={styles.flag} src={src} alt={alt} />}</div>
      <div className={styles.data}>
        <p className={styles.countryName}>
          <b>{name}</b>
        </p>
        <DataRow title={texts.population} data={parseNumber(population)} />
        <DataRow title={texts.region} data={region} />
        <DataRow title={texts.capital} data={capital} />
      </div>
    </div>
  );
}

export default CountryCard;
