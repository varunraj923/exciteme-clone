import React, { useState } from 'react';
import styles from './App.module.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import CharacterCard from './components/CharacterCard';
import { characters } from './data';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // This is the single handler for ALL clicks on the page
  const handleAction = () => {
    alert('Work in progress, get back in few days');
  };

  return (
    <div className={styles.app}>
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onAction={handleAction}
      />

      {/* Main content area */}
      <div className={styles.main}>
        {/* Header */}
        <Header
          onAction={handleAction}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Filter/Category Bar */}
        <FilterBar onAction={handleAction} />

        {/* Character Grid */}
        <div className={styles.content}>
          <div className={styles.grid}>
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                onAction={handleAction}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
