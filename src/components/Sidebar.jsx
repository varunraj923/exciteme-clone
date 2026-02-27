import React from 'react';
import styles from './Sidebar.module.css';

// Simple SVG Icons as components
const HomeIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);
const ChatIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
  </svg>
);
const HeartIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);
const BotIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7H4a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7 14v2H5v-2h2m4 0v2H9v-2h2m4 0v2h-2v-2h2m4 0v2h-2v-2h2m-8 4v2H9v-2h2m4 0v2h-2v-2h2M7 20v2H5v-2h2z"/>
  </svg>
);
const StoreIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4v2l16 .01V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>
  </svg>
);
const TaskIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);
const CrownIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm2.7-2h8.6l1-5.4-3.1 2.7L12 7.2l-2.2 4.1L6.7 8.6l1 5.4z"/>
  </svg>
);

const navItems = [
  { icon: <HomeIcon />, label: 'Home', active: true },
  { icon: <ChatIcon />, label: 'Recent Chats' },
  { icon: <HeartIcon />, label: 'Favorites' },
  { icon: <BotIcon />, label: 'My Chatbots' },
  { icon: <StoreIcon />, label: 'Store' },
  { icon: <TaskIcon />, label: 'Daily Task' },
];

const Sidebar = ({ isOpen, onClose, onAction }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className={styles.overlay} onClick={onClose} />}

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        {/* Logo */}
        <div className={styles.logo} onClick={onAction}>
          <div className={styles.logoIcon}>💋</div>
        </div>

        {/* Create Button */}
        <button className={styles.createBtn} onClick={onAction}>
          <span>+</span> Create
        </button>

        {/* Nav Items */}
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`${styles.navItem} ${item.active ? styles.active : ''}`}
              onClick={onAction}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span className={styles.navLabel}>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Premium Banner */}
        <div className={styles.premiumBanner}>
          <div className={styles.premiumTitle}>Go Premium</div>
          <div className={styles.premiumDesc}>Unlock all features & character</div>
          <button className={styles.subscriptionBtn} onClick={onAction}>
            <CrownIcon /> Subscription
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
