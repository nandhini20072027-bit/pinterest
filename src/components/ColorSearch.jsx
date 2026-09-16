// src/components/ColorSearch.jsx
import React, { useState } from 'react';
import { showToast } from '../app.js';

/**
 * ColorSearch component – user selects colors and triggers a mock "explore palette".
 */
export default function ColorSearch({ onExplore }) {
  const colors = [
    { name: 'CYAN', hex: '#00ffff' },
    { name: 'BLACK', hex: '#000000' },
    { name: 'PURPLE', hex: '#8a3ffc' },
    { name: 'MAGENTA', hex: '#ff16d8' },
    { name: 'BLUE', hex: '#0077ff' },
    { name: 'WHITE', hex: '#ffffff' },
  ];

  const [selected, setSelected] = useState([]);

  const toggleColor = (color) => {
    setSelected((prev) =>
      prev.includes(color.name) ? prev.filter((c) => c !== color.name) : [...prev, color.name]
    );
  };

  const handleExplore = () => {
    if (selected.length === 0) return;
    showToast('Exploring palette…');
    if (onExplore) onExplore(selected);
  };

  return (
    <section className="color-search card">
      <h3>SEARCH BY COLOR</h3>
      <div className="color-swatch-grid">
        {colors.map((c) => (
          <div
            key={c.name}
            className={`color-swatch ${selected.includes(c.name) ? 'selected' : ''}`}
            style={{ backgroundColor: c.hex }}
            onClick={() => toggleColor(c)}
            title={c.name}
          />
        ))}
      </div>
      <button className="btn" onClick={handleExplore}>EXPLORE PALETTE →</button>
    </section>
  );
}
