import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMoon, faBolt } from '@fortawesome/free-solid-svg-icons';
import styles from './StyledButton.module.scss';
import StyledButtonProps from './StyledButton.types';
import LightThemeContext from '../../../shared/hooks/useTheme';

function StyledButton({ children, handleClick }: StyledButtonProps) {
  const lightTheme = useContext(LightThemeContext);

  return (
    <button
      onClick={handleClick}
      className={cx(styles.borderButton, { [styles.lightTheme]: lightTheme })}
      type='button'>
      {children}
    </button>
  );
}

function BorderLessButton({ children, handleClick }: StyledButtonProps) {
  const lightTheme = useContext(LightThemeContext);
  return (
    <button
      onClick={handleClick}
      className={cx(styles.borderButton, styles.borderLess, { [styles.lightTheme]: lightTheme })}
      type='button'>
      {children}
    </button>
  );
}

function GoBackButton({ children }: StyledButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <StyledButton handleClick={handleClick}>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className={styles.text}>{children}</div>
    </StyledButton>
  );
}

function ThemeButton({ children, handleClick }: StyledButtonProps) {
  const lightTheme = useContext(LightThemeContext);

  return (
    <BorderLessButton handleClick={handleClick}>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={lightTheme ? faMoon : faBolt} />
      </div>
      <div className={styles.text}>{children}</div>
    </BorderLessButton>
  );
}

function NavigateCountryButton({ countryName }: StyledButtonProps) {
  return (
    <Link to={`../${countryName}`} relative='path'>
      <StyledButton>{countryName}</StyledButton>
    </Link>
  );
}
export default StyledButton;
export { GoBackButton, NavigateCountryButton, BorderLessButton, ThemeButton };
