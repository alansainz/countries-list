/* eslint-disable */

import React, { useState, SyntheticEvent, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import SelectProps from "./Select.types";
import styles from "./Select.module.scss";
import texts from "../../utils/texts.json";
import LightThemeContext from "../../shared/hooks/useTheme";

// TODO: refactor for accesibility (aria-roles, tabs, screen reader, etc),
// change name of component to better reflect its similarity with StyledInput

function Select({ value = "", onChange, options }: SelectProps) {
  const [option, setOption] = useState<string>(value);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const lightTheme = useContext(LightThemeContext);

  const handleClick = (event: SyntheticEvent, option: string) => {
    event.stopPropagation();
    setOption(option);
    setShowOptions(false);
    if (typeof onChange === "function") {
      onChange(option);
    }
  };

  const handleClickOnSelect = (event: SyntheticEvent) => {
    event.stopPropagation();
    setShowOptions((showOptions) => !showOptions);
  };

  return (
    <div
      className={cx(styles.select, { [styles.lightTheme]: lightTheme })}
      onClick={handleClickOnSelect}
    >
      <div className={styles.option}>
        {!option ? texts.filterByRegion : option}
      </div>
      <div
        className={cx(styles.optionsWrapper, {
          [styles.show]: showOptions,
          [styles.lightTheme]: lightTheme,
        })}
      >
        <div
          className={styles.option}
          onClick={(event) => handleClick(event, "")}
        >
          {texts.filterByRegion}
        </div>
        {options.map((option) => (
          <div
            className={styles.option}
            onClick={(event) => handleClick(event, option)}
            key={option}
          >
            {option}
          </div>
        ))}
      </div>
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
}

export default Select;
