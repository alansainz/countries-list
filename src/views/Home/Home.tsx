import React, { useState } from 'react';
import CountriesList from '../../components/CountriesList';
import { useCountriesToShow } from '../../shared/hooks';
import Select from '../../components/Select';
import styles from './Home.module.scss';
import regions, { RegionType } from '../../utils/regions';
import Loading from '../../components/Shared/Loading';
import { StyledSearchInput } from '../../components/Input';

function Home() {
  const [query, setQuery] = useState<string>('');
  const [region, setRegion] = useState<RegionType>('');
  const { countriesToShow, debouncedRequest } = useCountriesToShow(query, region);

  const handleInputChange = (query: string) => {
    setQuery(query);
    debouncedRequest();
  };
  const handleSelectChange = (region: string) => setRegion(region);
  return (
    <div className={styles.home}>
      <div className={styles.innerContainer}>
        <div className={styles.inputAndFilter}>
          <div className={styles.inputWrapper}>
            <StyledSearchInput onChange={handleInputChange} />
          </div>
          <div className={styles.selectWrapper}>
            <Select onChange={handleSelectChange} options={regions} />
          </div>
        </div>
        {countriesToShow ? <CountriesList countries={countriesToShow} /> : <Loading />}
      </div>
    </div>
  );
}

export default Home;
