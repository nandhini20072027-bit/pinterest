// src/components/VisualDNA.jsx
import React from 'react';
import { showToast } from '../toast.js';

export default function VisualDNA({ dna, onFindSimilar }) {
  const handleFind = () => {
    onFindSimilar(dna);
    showToast('Finding similar DNA...');
  };

  return (
    <div className="visual-dna">
      <h3>VISUAL DNA</h3>
      <ul>
        <li><strong>STYLE:</strong> {dna.style}</li>
        <li><strong>MOOD:</strong> {dna.mood}</li>
        <li><strong>COLORS:</strong> {dna.colors.join(', ')}</li>
        <li><strong>ELEMENTS:</strong> {dna.elements}</li>
        <li><strong>COMPOSITION:</strong> {dna.composition}</li>
        <li><strong>MATERIAL:</strong> {dna.material}</li>
      </ul>
      <button className="btn" onClick={handleFind}>FIND SIMILAR DNA →</button>
    </div>
  );
}
