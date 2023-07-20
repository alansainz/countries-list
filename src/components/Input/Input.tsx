import React, { useState, ChangeEvent, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import InputProps from './Input.types';
import styles from './Input.module.scss';
import texts from '../../utils/texts.json';
import LightThemeContext from '../../shared/hooks/useTheme';

function Input({ value = '', onChange, label, placeholder, className }: InputProps) {
  const [text, setText] = useState(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setText(value);
    if (typeof onChange === 'function') {
      onChange(event.target.value);
    }
  };

  return (
    <input
      placeholder={placeholder}
      className={cx(styles.input, className)}
      value={text}
      onChange={handleChange}
      aria-label={label}
    />
  );
}

function StyledSearchInput({ onChange }: InputProps) {
  const lightTheme = useContext(LightThemeContext);

  return (
    <div className={cx(styles.inputStyler, { [styles.lightTheme]: lightTheme })}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <Input label={texts.inputLabel} onChange={onChange} placeholder={texts.inputPlaceholder} />
    </div>
  );
}
export default Input;
export { StyledSearchInput };
