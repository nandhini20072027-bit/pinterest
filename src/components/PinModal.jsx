// src/components/PinModal.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import VisualDNA from './VisualDNA.jsx';
import { showToast } from '../toast.js';

export default function PinModal({ pin, onClose }) {
  if (!pin) return null;

  const handleSave = () => {
    showToast('Pin saved');
  };
  const handleLike = () => {
    showToast('Pin liked');
  };
  const handleShare = () => {
    showToast('Pin shared');
  };

  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>✖</button>
        <img src={pin.image} alt={pin.title} style={{ width: '100%', borderRadius: '8px' }} />
        <h2>{pin.title}</h2>
        <p>by {pin.creator}</p>
        <div className="modal-actions" style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn" onClick={handleSave}>Save</button>
          <button className="btn" onClick={handleLike}>Like</button>
          <button className="btn" onClick={handleShare}>Share</button>
        </div>
        <VisualDNA dna={pin.dna} onFindSimilar={() => { /* No‑op for now */ }} />
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}
