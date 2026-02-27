import React, { useState } from 'react';
import styles from './FilterBar.module.css';
import { categories, navTabs } from '../data';

const CrownIcon = () => (
  <svg width="14" height="14" fill="#f5c518" viewBox="0 0 24 24">
    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z"/>
  </svg>
);

const FilterBar = ({ onAction }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [premiumOn, setPremiumOn] = useState(false);
  const [nsfwOn, setNsfwOn] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onAction();
  };

  return (
    <div className={styles.filterBar}>
      {/* Category chips */}
      <div className={styles.categoriesRow}>
        <div className={styles.categories}>
          {categories.map((cat) => (
            <button key={cat} className={styles.categoryChip} onClick={onAction}>
              {cat}
            </button>
          ))}
        </div>
        <button className={styles.allTagsBtn} onClick={onAction}>
          All tags ▾
        </button>
      </div>

      {/* Tabs row */}
      <div className={styles.tabsRow}>
        <div className={styles.tabs}>
          {navTabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}

          {/* Premium toggle */}
          <div className={styles.premiumToggle} onClick={onAction}>
            <CrownIcon />
            <span className={styles.premiumLabel}>Premium</span>
            <div
              className={`${styles.toggle} ${premiumOn ? styles.toggleOn : ''}`}
              onClick={(e) => { e.stopPropagation(); setPremiumOn(!premiumOn); onAction(); }}
            >
              <div className={styles.toggleThumb} />
            </div>
          </div>
        </div>

        {/* NSFW toggle */}
        <div className={styles.nsfwToggle}>
          <span className={styles.nsfwLabel}>NSFW</span>
          <div
            className={`${styles.toggle} ${nsfwOn ? styles.toggleOn : ''}`}
            onClick={() => { setNsfwOn(!nsfwOn); onAction(); }}
          >
            <div className={styles.toggleThumb} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
