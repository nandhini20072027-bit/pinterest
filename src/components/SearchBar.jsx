// src/components/SearchBar.jsx
import React, { useState } from 'react';

const defaultChips = ['ALL', 'FASHION', 'ART', 'ARCHITECTURE', 'TECHNOLOGY', 'TRENDING', 'NEW'];

export default function SearchBar({ onSearch, onFilter }) {
  const [query, setQuery] = useState('');
  const [activeChip, setActiveChip] = useState('ALL');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChipClick = (chip) => {
    setActiveChip(chip);
    onFilter(chip);
  };

  return (
    <section className="explore-search">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="search"
          placeholder="Search ideas, styles, colors or moods..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn" style={{marginLeft: '0.5rem'}}>Search</button>
      </form>
      <div className="chip-container">
        {defaultChips.map((chip) => (
          <span
            key={chip}
            className={`chip ${chip === activeChip ? 'active' : ''}`}
            onClick={() => handleChipClick(chip)}
          >
            {chip}
          </span>
        ))}
      </div>
    </section>
  );
}
