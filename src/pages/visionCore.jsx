// src/pages/visionCore.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../toast.js';
import './visionCore.css';

const nodes = [
  { label: 'FASHION', detail: 'Material intelligence and future silhouettes.', className: 'node--fashion' },
  { label: 'ART', detail: 'Visual expression, color and creative composition.', className: 'node--art' },
  { label: 'ARCHITECTURE', detail: 'Structures, cities and spatial rhythm.', className: 'node--architecture' },
  { label: 'TECHNOLOGY', detail: 'Systems, interfaces and machine imagination.', className: 'node--technology' },
  { label: 'MUSIC', detail: 'Sonic landscapes translated into atmosphere.', className: 'node--music' },
  { label: 'CINEMA', detail: 'Framing, narrative and neon world-building.', className: 'node--cinema' },
  { label: 'TRAVEL', detail: 'Hidden cities, routes and cultural memory.', className: 'node--travel' },
  { label: 'DESIGN', detail: 'Human interfaces, systems and visual clarity.', className: 'node--design' },
];

const connectionSets = [
  ['FASHION', 'ARCHITECTURE', 'Structured silhouettes meet brutalist geometry.'],
  ['ART', 'TECHNOLOGY', 'Creative expression becomes an interactive system.'],
  ['MUSIC', 'CINEMA', 'Sound becomes visual atmosphere.'],
  ['TRAVEL', 'DESIGN', 'Cultural memory shapes new interfaces.'],
];

export default function VisionCorePage() {
  const navigate = useNavigate();
  const pageRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);
  const [connection, setConnection] = useState(connectionSets[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;
    const move = (event) => {
      const rect = page.getBoundingClientRect();
      page.style.setProperty('--vision-mouse-x', `${event.clientX - rect.left}px`);
      page.style.setProperty('--vision-mouse-y', `${event.clientY - rect.top}px`);
      page.style.setProperty('--vision-shift-x', `${(event.clientX / window.innerWidth - .5) * 8}px`);
      page.style.setProperty('--vision-shift-y', `${(event.clientY / window.innerHeight - .5) * 6}px`);
    };
    page.addEventListener('pointermove', move, { passive: true });
    return () => page.removeEventListener('pointermove', move);
  }, []);

  const handleExploreConnection = (domain) => {
    // For demo, navigate to explore with a simple query based on domain label
    const query = domain.label.toLowerCase();
    navigate(`/explore?filter=${query}`);
    showToast(`Exploring ${domain.label}`);
  };

  const generateConnection = () => {
    setIsGenerating(true);
    window.setTimeout(() => {
      setConnection(connectionSets[Math.floor(Math.random() * connectionSets.length)]);
      setIsGenerating(false);
    }, 700);
  };

  const handleFile = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      showToast('Vision queued for analysis');
    }
  };

  return <section ref={pageRef} className="vision-core-page">
    <div className="vision-backdrop" aria-hidden="true"><span className="vision-grid" /><span className="vision-orbit vision-orbit--one" /><span className="vision-orbit vision-orbit--two" /><i /><i /><i /><i /></div>
    <header className="vision-hero">
      <div><span className="vision-kicker"><b /> VISUAL INTELLIGENCE SYSTEM // ONLINE</span><h1>VISION<br /><em>CORE</em></h1><p className="vision-lede">UNDERSTAND THE DNA<br />BEHIND EVERY IMAGE.</p><p className="vision-description">Vision Core analyzes visual patterns, extracts creative DNA, and reveals unexpected connections between ideas.</p><div className="vision-actions"><button className="vision-button vision-button--primary" onClick={() => document.querySelector('.vision-upload')?.scrollIntoView({ behavior: 'smooth' })}>ANALYZE A VISION <span>→</span></button><button className="vision-button" onClick={generateConnection}>EXPLORE CONNECTIONS <span>↗</span></button></div></div>
      <div className="vision-readout"><span>CORE STATUS</span><strong>● ANALYZING</strong><small>LATENCY 0.004ms<br />PATTERN FIELD 98.4%</small></div>
    </header>

    <div className="vision-lab-layout">
      <aside className="dna-panel vision-panel"><div className="panel-heading"><span>01 / EXTRACTION</span><b>VISUAL DNA</b></div>{[['STYLE', 'CYBERPUNK', '94%'], ['COLOR', 'NEON', '87%'], ['MOOD', 'FUTURISTIC', '91%'], ['COMPOSITION', 'DYNAMIC', '82%'], ['TEXTURE', 'METALLIC', '89%'], ['FORM', 'GEOMETRIC', '96%']].map(([label, value, percent], index) => <div className="dna-meter" key={label} style={{ '--meter-delay': `${index * 90}ms` }}><div><span>{label}</span><strong>{value}</strong><b>{percent}</b></div><i><em style={{ width: percent }} /></i></div>)}<span className="panel-coordinates">X 040.28 / Y 771.09</span></aside>

      <main className={`core-visual ${isGenerating ? 'is-generating' : ''}`}>
        <div className="core-rings" aria-hidden="true"><i /><i /><i /></div><div className="core-scan" aria-hidden="true" /><div className="core-wave" aria-hidden="true">〰〰〰〰〰</div><div className="core-orbit-dot core-orbit-dot--one" /><div className="core-orbit-dot core-orbit-dot--two" /><div className="core-center"><span>VISION</span><strong>CORE</strong><small>AI VISUAL ENGINE</small></div>
        <svg className="core-connections" viewBox="0 0 600 600" aria-hidden="true">{nodes.map((node, index) => { const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2; const x = 300 + Math.cos(angle) * 220; const y = 300 + Math.sin(angle) * 205; return <line key={node.label} className={activeNode === node.label ? 'hot' : ''} x1="300" y1="300" x2={x} y2={y} />; })}</svg>
        <div className="node-field">{nodes.map((node) => <button key={node.label} className={`core-node ${node.className} ${activeNode === node.label ? 'active' : ''}`} onMouseEnter={() => setActiveNode(node.label)} onMouseLeave={() => setActiveNode(null)} onClick={() => handleExploreConnection({ label: node.label })}><span>{node.label}</span><small>{activeNode === node.label ? node.detail : '01 SIGNAL'}</small></button>)}</div>
        <div className="core-status">● CORE ACTIVE <span>SYNC 100%</span></div>
      </main>

      <aside className="connection-panel vision-panel"><div className="panel-heading"><span>02 / RELATIONSHIP MAP</span><b>UNEXPECTED CONNECTION</b></div><div className="connection-pair"><strong>{connection[0]}</strong><b>+</b><strong>{connection[1]}</strong></div><p>“{connection[2]}”</p><button className="vision-button" onClick={generateConnection}>GENERATE CONNECTION <span>↗</span></button><div className="connection-signal"><i /> NETWORK SIGNAL <b>{isGenerating ? 'SEARCHING' : 'FOUND'}</b></div></aside>
    </div>

    <section className="vision-process"><span className="vision-kicker">THE ENGINE // IN MOTION</span><h2>HOW VISION CORE <em>THINKS</em></h2><div className="process-track">{['IMAGE', 'VISUAL DNA', 'PATTERN ANALYSIS', 'CONNECTION DISCOVERY', 'NEW INSPIRATION'].map((step, index) => <div key={step}><span>0{index + 1}</span><b>{step}</b>{index < 4 && <i>→</i>}</div>)}</div></section>

    <section className="vision-upload vision-split"><div className="upload-art"><span className="upload-frame" /><div><b>UPLOAD A VISION</b><small>{fileName || 'DROP AN IMAGE TO REVEAL ITS VISUAL DNA.'}</small></div></div><div><span className="vision-kicker">FROM IMAGE TO INSIGHT</span><h2>SEE WHAT<br /><em>INSPIRES YOU.</em></h2><p>Give the engine a visual signal. It will return the patterns beneath your instinct.</p><label className="vision-button vision-button--primary upload-button">{fileName ? 'VISION QUEUED ✓' : 'UPLOAD IMAGE →'}<input type="file" accept="image/*" onChange={handleFile} /></label></div></section>

    <section className="vision-insight"><span className="vision-kicker">THE UNSEARCHED FIELD</span><h2>DISCOVER WHAT YOU<br /><em>DIDN'T SEARCH FOR.</em></h2><p>When signals cross, inspiration stops being a destination and becomes a living network.</p><button className="vision-button" onClick={() => navigate('/discover')}>OPEN THE NETWORK <span>→</span></button></section>
  </section>;
}
