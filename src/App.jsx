import React, { useState } from 'react';
import Book from './components/Book';
import Library from './components/Library';
import MeteorBackground from './components/MeteorBackground';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [view, setView] = useState('library'); // 'library' or 'book'

  return (
    <div className="app-container">
      <MeteorBackground />
      <div className="content-wrap">
        {view === 'library' && (
          <Library onOpenBook={() => setView('book')} />
        )}

        {view === 'book' && (
          <div className="book-view-container">
            <button className="back-to-library-btn" onClick={() => setView('library')}>
              &larr; Back to Library
            </button>
            <div className="container">
              <Book />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
