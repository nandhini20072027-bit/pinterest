// src/components/PinCard.js
// Reusable Pin card component with hover overlay actions.

import React from 'react';
import { showToast } from '../toast.js';

export default function PinCard({ pin, onSave, onLike, onShare, onViewDNA, onConnect, onRemix }) {
  const handleAction = (action, handler) => {
    if (handler) handler(pin);
    showToast(`${action} clicked`);
  };

  return (
    <div className="pin-card" onMouseEnter={e => e.currentTarget.classList.add('hover')} onMouseLeave={e => e.currentTarget.classList.remove('hover')}>
      <img src={pin.image} alt={pin.title} className="pin-img" />
      <div className="pin-info">
        <h4 className="pin-title">{pin.title}</h4>
        <span className="pin-creator">by {pin.creator}</span>
      </div>
      <div className="pin-overlay">
        <button className="overlay-btn" aria-label="Save" onClick={() => handleAction('Save', onSave)}>&#128190;</button>
        <button className="overlay-btn" aria-label="Like" onClick={() => handleAction('Like', onLike)}>&#10084;&#65039;</button>
        <button className="overlay-btn" aria-label="Share" onClick={() => handleAction('Share', onShare)}>&#128279;</button>
        <button className="overlay-btn" aria-label="View DNA" onClick={() => handleAction('View DNA', onViewDNA)}>&#128300;</button>
        <button className="overlay-btn" aria-label="Connect" onClick={() => handleAction('Connect', onConnect)}>&#9889;</button>
        <button className="overlay-btn" aria-label="Remix" onClick={() => handleAction('Remix', onRemix)}>&#127912;</button>
      </div>
    </div>
  );
}
