import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PinModal from '../components/PinModal.jsx';
import { store } from '../store.js';
import './explore.css';

const filters = ['ALL', 'ART', 'FASHION', 'TECH', 'ARCHITECTURE', 'DESIGN'];
const galleryLabels = ['ART', 'FASHION', 'ARCHITECTURE', 'TECHNOLOGY', 'DESIGN', 'MUSIC', 'TRAVEL', 'CINEMA'];

export default function Explore() {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState(new URLSearchParams(location.search).get('filter')?.toUpperCase() || 'ALL');
  const [selectedPin, setSelectedPin] = useState(null);
  const pins = store.pins || [];
  const visiblePins = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return pins.filter((pin) => {
      const category = pin.category.toUpperCase();
      const categoryMatch = filter === 'ALL' || (filter === 'TECH' ? category === 'TECHNOLOGY' : category === filter);
      const text = `${pin.title} ${pin.creator} ${pin.tags.join(' ')}`.toLowerCase();
      return categoryMatch && (!normalizedQuery || text.includes(normalizedQuery));
    }).map((pin, index) => ({ ...pin, galleryLabel: galleryLabels[index % galleryLabels.length] }));
  }, [filter, pins, query]);

  return <section className="explore-page cyber-page">
    <div className="explore-header"><div><span className="page-kicker">VISUAL INDEX // 08.04</span><h1>EXPLORE THE <em>UNEXPECTED</em></h1><p>Discover ideas beyond the boundaries of your usual feed.</p></div><div className="explore-readout"><b>{String(visiblePins.length).padStart(2, '0')}</b><span>VISIONS<br />ONLINE</span></div></div>
    <div className="explore-controls"><label className="explore-search-field"><span>⌕</span><input aria-label="Search visual ideas" placeholder="Search visual ideas..." value={query} onChange={(event) => setQuery(event.target.value)} /></label><div className="explore-filters">{filters.map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
    <div className="explore-gallery">{visiblePins.map((pin) => <article className="explore-tile" key={pin.id}><img src={pin.image} alt={pin.title} loading="lazy" /><div className="tile-shade" /><span className="tile-category">{pin.galleryLabel}</span><div className="tile-copy"><h2>{pin.title}</h2><p>{pin.tags.join(' · ')}</p><button onClick={() => setSelectedPin(pin)}>EXPLORE <span>→</span></button></div><div className="tile-scan" /></article>)}</div>
    {visiblePins.length === 0 && <div className="empty-state">NO VISIONS MATCH THIS SIGNAL. TRY ANOTHER FREQUENCY.</div>}
    {selectedPin && <PinModal pin={selectedPin} onClose={() => setSelectedPin(null)} />}
  </section>;
}
