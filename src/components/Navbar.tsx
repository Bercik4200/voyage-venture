'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Voyage Venture</div>

      <div className={styles.burger} onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </div>

      <ul className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
        <li><a href="#" onClick={closeMenu}>Start</a></li>
        <li><a href="#" onClick={closeMenu}>Wyprawy</a></li>
        <li><a href="#" onClick={closeMenu}>O nas</a></li>
        <li><a href="#" onClick={closeMenu}>Kontakt</a></li>
      </ul>
    </nav>
  );
}
