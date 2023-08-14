import React, { useCallback } from "react";
import DetailCardProps from "./DetailCard.types";
import styles from "./DetailCard.module.scss";
import DataRow from "../Shared/DataRow";
import texts from "../../utils/texts.json";
import parseNumber from "../../utils/numbers";
import { NavigateCountryButton } from "../Shared/StyledButton";
import Loading from "../Shared/Loading";

function DetailCard({ countryDetails, allNamesAndCodes }: DetailCardProps) {
  const returnBorders = useCallback(
    (borders: string[]) => {
      return borders?.map((border) => {
        const countryName = allNamesAndCodes[border];
        return <NavigateCountryButton key={border} countryName={countryName} />;
      });
    },
    [allNamesAndCodes]
  );

  if (!countryDetails) return <Loading />;
  if (!allNamesAndCodes) return <Loading />;
  const {
    flag,
    name,
    population,
    capital,
    region,
    subregion,
    nativeName,
    tld,
    currencies,
    languages,
    borders,
  } = countryDetails;
  return (
    <div className={styles.detail}>
      <div className={styles.flagWrapper}>
        {flag.src && (
          <img className={styles.flag} src={flag.src} alt={flag.alt} />
        )}
      </div>

      <div className={styles.dataBox}>
        <h2>{name}</h2>
        <div className={styles.details}>
          <div>
            <DataRow title={texts.nativeName} data={nativeName} />
            <DataRow title={texts.population} data={parseNumber(population)} />
            <DataRow title={texts.region} data={region} />
            <DataRow title={texts.subRegion} data={subregion} />
            <DataRow title={texts.capital} data={capital} />
          </div>
          <div>
            <DataRow title={texts.tld} data={tld} />
            <DataRow title={texts.currencies} data={currencies} />
            <DataRow title={texts.languages} data={languages} />
          </div>
        </div>
        <div className={styles.borders}>
          <b className={styles.text}>{texts.borderCountries}</b>
          {returnBorders(borders)}
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
