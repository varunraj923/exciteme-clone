import React, { useState } from 'react';
import styles from './App.module.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import CharacterCard from './components/CharacterCard';
import Footer from './components/Footer';
import { characters } from './data';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const handleAction = () => {
    alert('Work in progress, get back in few days');
  };

  return (
    <div className={styles.app}>
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onAction={handleAction}
      />
      <div className={styles.main}>
        <Header
          onAction={handleAction}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />


        <FilterBar onAction={handleAction} />


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

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
