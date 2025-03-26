import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Voyage Venture</div>
      <ul className={styles.menu}>
        <li><a href="#">Start</a></li>
        <li><a href="#">Wyprawy</a></li>
        <li><a href="#">O nas</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
    </nav>
  );
}
