import React from 'react';
import { useParams } from 'react-router-dom';
import { useCountryDetails, useAllNamesAndCodes } from '../../shared/hooks/countries';
import styles from './CountryDetail.module.scss';
import DetailCard from '../../components/DetailCard';
import { GoBackButton } from '../../components/Shared/StyledButton';
import texts from '../../utils/texts.json';

function Detail() {
  const { countryName } = useParams();
  const { countryDetails } = useCountryDetails(countryName);
  const { allNamesAndCodes } = useAllNamesAndCodes();
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerContainer}>
        <div className={styles.goBackWrapper}>
          <GoBackButton>{texts.back}</GoBackButton>
        </div>
        <DetailCard countryDetails={countryDetails} allNamesAndCodes={allNamesAndCodes} />
      </div>
    </div>
  );
}

export default Detail;
