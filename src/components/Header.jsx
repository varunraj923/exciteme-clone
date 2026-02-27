import React from 'react';
import styles from './Header.module.css';

const SearchIcon = () => (
  <svg width="18" height="18" fill="#888" viewBox="0 0 24 24">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
);

const Header = ({ onAction, onMenuToggle }) => {
  return (
    <header className={styles.header}>
      {/* Mobile menu button */}
      <button className={styles.menuBtn} onClick={onMenuToggle}>
        <MenuIcon />
      </button>

      {/* Search bar */}
      <div className={styles.searchBar} onClick={onAction}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Dive into endless fantasies - start searching!"
          className={styles.searchInput}
          readOnly
          onClick={onAction}
        />
      </div>

      {/* Sign In Button */}
      <button className={styles.signInBtn} onClick={onAction}>
        Sign In
      </button>
    </header>
  );
};

export default Header;
