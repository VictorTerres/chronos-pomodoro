import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='#'>Entenda a Técnica Pomodoro</a>
      <a href='#'>Chronos Pomodoro &copy; {new Date().getFullYear()} </a>
    </footer>
  );
}
