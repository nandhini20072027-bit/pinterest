import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from '../store.js';
import './discover.css';

const nodes = [
  { id: 'fashion', label: 'FASHION', ideas: ['Wearable Technology', 'Smart Materials', 'Future Silhouettes'] },
  { id: 'art', label: 'ART', ideas: ['Generative AI', 'Interactive Art', 'Digital Installation'] },
  { id: 'technology', label: 'TECHNOLOGY', ideas: ['AI', 'Robotics', 'Wearables'] },
  { id: 'architecture', label: 'ARCHITECTURE', ideas: ['Parametric Design', 'Smart Cities', 'Future Living'] },
  { id: 'music', label: 'MUSIC', ideas: ['Sonic Landscapes', 'Modular Rhythm', 'Visual Albums'] },
  { id: 'cinema', label: 'CINEMA', ideas: ['World Building', 'Neon Noir', 'Framing'] },
  { id: 'travel', label: 'TRAVEL', ideas: ['Hidden Cities', 'Cultural Memory', 'Night Routes'] },
  { id: 'design', label: 'DESIGN', ideas: ['Material Systems', 'Human Interface', 'Color Theory'] },
];

export default function Discover() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(nodes[0]);
  const [connection, setConnection] = useState(null);
  const relatedPins = useMemo(() => (store.pins || []).filter((pin) => pin.category === selected.label).slice(0, 3), [selected]);
  const generateConnection = () => {
    const options = nodes.filter((node) => node.id !== selected.id);
    const other = options[Math.floor(Math.random() * options.length)];
    setConnection({ first: selected.label, second: other.label, text: `${selected.label} energy meets ${other.label.toLowerCase()} systems.` });
  };

  return (
    <section className="discover-page cyber-page">
      <header className="discover-header"><span className="page-kicker">NEURAL MAP // LIVE</span><h1>DISCOVER YOUR <em>VISUAL DNA</em></h1><p>Your interests are connected in ways you haven't seen yet.</p></header>
      <div className="discover-layout">
        <div className="neural-map"><div className="map-orbit map-orbit--one" /><div className="map-orbit map-orbit--two" /><div className="map-core">VISION<br /><b>CORE</b></div>
          <svg viewBox="0 0 640 560" aria-hidden="true">{nodes.map((node, index) => { const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2; const x = 320 + Math.cos(angle) * 218; const y = 280 + Math.sin(angle) * 190; return <line key={node.id} className={selected.id === node.id ? 'hot' : ''} x1="320" y1="280" x2={x} y2={y} />; })}</svg>
          {nodes.map((node, index) => { const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2; const x = 50 + Math.cos(angle) * 39; const y = 50 + Math.sin(angle) * 39; return <button key={node.id} className={`neural-node ${selected.id === node.id ? 'active' : ''}`} style={{ left: `${x}%`, top: `${y}%` }} onClick={() => setSelected(node)}>{node.label}<small>01</small></button>; })}
        </div>
        <aside className="discover-panel"><span className="panel-index">NODE SELECTED / 0{nodes.indexOf(selected) + 1}</span><h2>{selected.label}</h2><p>Connected signals detected across your saved visual field.</p><div className="idea-list">{selected.ideas.map((idea) => <span key={idea}>◈ {idea}</span>)}</div><div className="connection-meter"><span>CONNECTION STRENGTH</span><b>82%</b><i><em /></i></div><button className="generate-button" onClick={generateConnection}>GENERATE CONNECTION <span>↗</span></button>{connection && <div className="connection-result"><span>UNEXPECTED CONNECTION FOUND</span><strong>{connection.first} <b>+</b> {connection.second}</strong><p>"{connection.text}"</p><button onClick={() => navigate(`/explore?filter=${connection.first.toLowerCase()}`)}>TRACE THE THREAD →</button></div>}</aside>
      </div>
      <div className="discover-related">{relatedPins.map((pin) => <img key={pin.id} src={pin.image} alt={pin.title} />)}</div>
    </section>
  );
}
