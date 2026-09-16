// src/components/VisionCore.jsx
import React, { useState } from 'react';
import { showToast } from '../toast.js';

// Simple data for domain nodes
const domains = [
  { id: 'fashion', label: 'FASHION', ideas: ['Wearable Technology', 'Smart Materials', 'Biomimicry', 'Future Architecture'] },
  { id: 'art', label: 'ART', ideas: ['Generative AI', 'Interactive Art', 'Digital Installation', 'Digital Architecture'] },
  { id: 'architecture', label: 'ARCHITECTURE', ideas: ['Parametric Design', 'Robotics', 'Smart Cities', 'Future Living'] },
  { id: 'technology', label: 'TECHNOLOGY', ideas: ['AI', 'Robotics', 'Wearables', 'Digital Fashion'] },
];

export default function VisionCore({ onExploreConnection }) {
  const [selected, setSelected] = useState(null);

  const handleNodeClick = (domain) => {
    setSelected(domain);
    showToast(`${domain.label} node clicked`);
  };

  const handleExplore = () => {
    if (selected) {
      onExploreConnection(selected);
      showToast('Exploring connection →');
    }
  };

  return (
    <section className="vision-core-container">
      <div id="central-node" className="vision-node" style={{ background: 'var(--color-primary-magenta)', color: '#000' }}>VISION CORE</div>
      {domains.map((d, i) => (
        <div
          key={d.id}
          id={`node-${d.id}`}
          className="vision-node"
          style={{ top: `${20 + i * 20}%`, left: `${30 + i * 15}%` }}
          onClick={() => handleNodeClick(d)}
        >
          {d.label}
        </div>
      ))}
      {/* Simple connecting lines using SVG */}
      <svg className="vision-connections" width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        {/* Lines from central node to each domain node */}
        {domains.map((d) => (
          <line
            key={d.id}
            x1="50%" y1="50%"
            x2="50%" y2="50%"
            stroke="var(--color-primary-cyan)"
            strokeWidth="2"
          />
        ))}
      </svg>
      {selected && (
        <div className="node-panel" style={{ position: 'absolute', bottom: '10%', left: '5%', background: 'rgba(0,0,0,0.7)', padding: '1rem', borderRadius: '8px', color: 'var(--color-text)' }}>
          <h3>{selected.label}</h3>
          <ul>
            {selected.ideas.map((idea) => (
              <li key={idea}>{idea}</li>
            ))}
          </ul>
          <button className="btn" onClick={handleExplore}>EXPLORE CONNECTION →</button>
        </div>
      )}
    </section>
  );
}
