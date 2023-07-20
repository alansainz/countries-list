import React, { MouseEventHandler, useContext } from 'react';
import cx from 'classnames';
import styles from './TopBar.module.scss';
import LightThemeContext from '../../shared/hooks/useTheme';
import texts from '../../utils/texts.json';
import { ThemeButton } from '../Shared/StyledButton/StyledButton';

function TopBar({ handleClick }: { handleClick: MouseEventHandler<HTMLButtonElement> }) {
  const lightTheme = useContext(LightThemeContext);
  const buttonText = lightTheme ? texts.darkMode : texts.lightMode;
  return (
    <div className={cx(styles.container, { [styles.lightTheme]: lightTheme })}>
      <div className={styles.innerContainer}>
        <div className={styles.wrapper}>
          <h1>{texts.whereInTheWorld}</h1>

          <ThemeButton handleClick={handleClick}>{buttonText}</ThemeButton>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
