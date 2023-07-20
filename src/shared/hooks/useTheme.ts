import { createContext, useState, useEffect } from 'react';
import styles from '../../App.module.scss';

const LightThemeContext = createContext(false);

const useTheme = () => {
  const [lightTheme, setLightTheme] = useState<boolean>(false);

  const handleClick = () => {
    setLightTheme((lightTheme) => !lightTheme);
  };

  useEffect(() => {
    if (lightTheme) {
      document.body.classList.remove(styles.darkTheme);
      document.body.classList.add(styles.lightTheme);
    } else {
      document.body.classList.remove(styles.lightTheme);
      document.body.classList.add(styles.darkTheme);
    }
  }, [lightTheme]);

  return { lightTheme, handleClick };
};

export default LightThemeContext;
export { useTheme };
