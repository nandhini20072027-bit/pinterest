// src/components/MoodSearch.jsx
import React, { useState } from 'react';
import { showToast } from '../app.js';

/**
 * MoodSearch component – user types a feeling and sees mocked percentages.
 */
export default function MoodSearch({ onResult }) {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const handleSearch = () => {
    if (!input) return;
    // Mocked percentages – in a real app this would be an ML model.
    const mock = {
      FUTURISTIC: 91,
      CALM: 76,
      DARK: 83,
    };
    setResults(mock);
    showToast('Mood analysis complete');
    if (onResult) onResult(mock);
  };

  return (
    <section className="mood-search card">
      <h3>SEARCH BY FEELING</h3>
      <input
        type="text"
        placeholder="e.g., Futuristic but peaceful"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="mood-input"
      />
      <button className="btn" onClick={handleSearch}>ANALYZE</button>
      {results && (
        <div className="mood-results">
          {Object.entries(results).map(([mood, pct]) => (
            <div key={mood} className="mood-bar">
              <span>{mood}</span>
              <div className="bar-bg">
                <div className="bar-fg" style={{ width: `${pct}%` }} />
              </div>
              <span>{pct}%</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
