import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

type Themes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<Themes>(() => {
    const storagedTheme = (localStorage.getItem('theme') as Themes) || 'dark';
    return storagedTheme;
  });

  const themeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return newTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href='#' aria-label='Home' title='Home'>
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='History'
        title='History'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Settings'
        title='Settings'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Theme'
        title='Theme'
        onClick={handleThemeChange}
      >
        {themeIcon[theme]}
      </a>
    </nav>
  );
}
