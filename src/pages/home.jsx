// src/pages/home.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { showToast } from '../toast.js';
import './home.css';

function CyberRider() {
  return (
    <svg className="rider-art" viewBox="0 0 700 500" role="img" aria-label="Cyberpunk rider on a futuristic motorcycle">
      <defs>
        <linearGradient id="bikeShell" x1="0" x2="1">
          <stop offset="0" stopColor="#08e9ef" />
          <stop offset="0.45" stopColor="#813cff" />
          <stop offset="1" stopColor="#ff2fb3" />
        </linearGradient>
        <linearGradient id="suitLight" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#252b4b" />
          <stop offset="0.6" stopColor="#090d1b" />
          <stop offset="1" stopColor="#ff2fb3" />
        </linearGradient>
        <filter id="neonGlow"><feGaussianBlur stdDeviation="7" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <g className="rider-glow" filter="url(#neonGlow)">
        <path d="M56 405 C166 440 262 438 372 417" fill="none" stroke="#08e9ef" strokeWidth="7" opacity=".8" />
        <path d="M73 423 C174 453 270 448 344 430" fill="none" stroke="#ff2fb3" strokeWidth="4" opacity=".75" />
      </g>
      <g className="motorbike">
        <circle cx="191" cy="390" r="49" fill="#080b16" stroke="#08e9ef" strokeWidth="6" />
        <circle cx="505" cy="390" r="49" fill="#080b16" stroke="#ff2fb3" strokeWidth="6" />
        <circle cx="191" cy="390" r="25" fill="none" stroke="#9b5cff" strokeWidth="3" />
        <circle cx="505" cy="390" r="25" fill="none" stroke="#9b5cff" strokeWidth="3" />
        <path d="M178 361 L263 319 L365 329 L454 355 L526 365 L490 391 L354 397 L280 379 L191 390" fill="#0d1427" stroke="url(#bikeShell)" strokeWidth="7" />
        <path d="M264 319 L322 298 L393 313 L365 329 L286 335Z" fill="#a9faff" opacity=".22" stroke="#08e9ef" strokeWidth="3" />
        <path d="M452 356 L492 319 L531 325 L516 362" fill="#11192e" stroke="#ff2fb3" strokeWidth="5" />
        <path d="M147 372 L118 352 M518 350 L560 337" stroke="#08e9ef" strokeWidth="7" strokeLinecap="round" />
        <path d="M283 350 L335 368 L429 363" fill="none" stroke="#ff2fb3" strokeWidth="4" />
        <path d="M170 393 Q250 363 286 378 M406 378 Q462 359 525 390" fill="none" stroke="#d9ffff" strokeWidth="2" opacity=".8" />
      </g>
      <g className="rider-body">
        <path d="M331 285 L294 247 L310 171 L375 174 L407 250 L380 307Z" fill="url(#suitLight)" stroke="#08e9ef" strokeWidth="4" />
        <path d="M312 179 L278 222 L232 304 L258 316 L334 238" fill="#0c1122" stroke="#ff2fb3" strokeWidth="5" />
        <path d="M378 188 L418 222 L466 302 L438 313 L367 244" fill="#0c1122" stroke="#08e9ef" strokeWidth="5" />
        <path d="M280 306 L326 300 L363 366 L321 376 L272 337Z" fill="#0b1020" stroke="#9b5cff" strokeWidth="5" />
        <path d="M366 303 L405 301 L457 353 L421 369 L361 338Z" fill="#0b1020" stroke="#ff2fb3" strokeWidth="5" />
        <path d="M342 178 L314 115 L344 75 L393 88 L411 140 L379 181Z" fill="#090d1a" stroke="#08e9ef" strokeWidth="5" />
        <path d="M320 112 Q354 84 394 106 L391 132 L332 139Z" fill="#101a32" stroke="#ff2fb3" strokeWidth="4" />
        <path d="M333 119 L386 111" stroke="#bafcff" strokeWidth="5" />
        <path d="M327 83 L302 53 M383 87 L411 60" stroke="#ff2fb3" strokeWidth="5" strokeLinecap="round" />
        <path d="M305 177 Q272 205 243 239" fill="none" stroke="#11182c" strokeWidth="18" strokeLinecap="round" />
        <path className="wave-arm" d="M309 180 Q275 144 251 111" fill="none" stroke="#10172c" strokeWidth="18" strokeLinecap="round" />
        <path className="wave-hand" d="M247 111 L232 93 M249 110 L248 87 M250 111 L264 94" fill="none" stroke="#08e9ef" strokeWidth="7" strokeLinecap="round" />
        <path d="M339 176 L361 189" stroke="#ff2fb3" strokeWidth="4" />
      </g>
    </svg>
  );
}

function MagneticButton({ children, className = '', onClick }) {
  const buttonRef = useRef(null);

  const moveButton = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.12;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.18;
    buttonRef.current?.style.setProperty('--magnet-x', `${x}px`);
    buttonRef.current?.style.setProperty('--magnet-y', `${y}px`);
  };

  const resetButton = () => {
    buttonRef.current?.style.setProperty('--magnet-x', '0px');
    buttonRef.current?.style.setProperty('--magnet-y', '0px');
  };

  return <button ref={buttonRef} className={`cyber-button ${className}`} onClick={onClick} onMouseMove={moveButton} onMouseLeave={resetButton}>{children}</button>;
}

const storyCards = [
  { title: 'NEON FUTURES', category: 'ARCHITECTURE', copy: 'Cities built from light, rhythm, and impossible angles.', image: 'https://picsum.photos/seed/redefine-neon/760/900', size: 'tall' },
  { title: 'CHROME DREAMS', category: 'FASHION', copy: 'Material intelligence for silhouettes that move.', image: 'https://picsum.photos/seed/redefine-chrome/760/560', size: 'wide' },
  { title: 'DIGITAL NATURE', category: 'ART / TECHNOLOGY', copy: 'Organic systems translated into electric color.', image: 'https://picsum.photos/seed/redefine-nature/600/720', size: 'square' },
  { title: 'NIGHT SIGNALS', category: 'CINEMA', copy: 'Atmosphere is a language. Learn to read it.', image: 'https://picsum.photos/seed/redefine-night/600/720', size: 'square' },
];

function Reveal({ children, className = '' }) {
  const [visible, setVisible] = useState(false);
  const revealRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.14 });
    if (revealRef.current) observer.observe(revealRef.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={revealRef} className={`story-reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>;
}

function PinDetail({ card, onClose }) {
  if (!card) return null;
  return <div className="story-modal" role="dialog" aria-modal="true" aria-label={card.title} onClick={onClose}>
    <div className="story-modal__panel" onClick={(event) => event.stopPropagation()}>
      <button className="story-modal__close" onClick={onClose} aria-label="Close visual detail">×</button>
      <img src={card.image} alt="" />
      <div><span className="page-kicker">SIGNAL CAPTURED // 00{storyCards.indexOf(card) + 1}</span><h2>{card.title}</h2><p>{card.copy}</p><button className="cyber-button cyber-button--primary" onClick={onClose}>RETURN TO FIELD <span>↗</span></button></div>
    </div>
  </div>;
}

export default function Home() {
  const navigate = useNavigate();
  const homeRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, lastTrail: 0 });
  const speechPlayedRef = useRef(false);
  const [riderPhase, setRiderPhase] = useState('entering');
  const [trail, setTrail] = useState([]);
  const [ripples, setRipples] = useState([]);
  const [cursorMode, setCursorMode] = useState('default');
  const [selectedCard, setSelectedCard] = useState(null);
  const [connectionActive, setConnectionActive] = useState(false);

  const speakHi = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new window.SpeechSynthesisUtterance('Hi!');
    const preferredVoice = window.speechSynthesis.getVoices().find((voice) => /female|samantha|zira|google uk english/i.test(voice.name));
    if (preferredVoice) utterance.voice = preferredVoice;
    utterance.rate = 0.9;
    utterance.pitch = 1.2;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const page = homeRef.current;
    if (!page) return undefined;
    let frame;

    const animatePointer = () => {
      const pointer = pointerRef.current;
      pointer.x += (pointer.targetX - pointer.x) * 0.12;
      pointer.y += (pointer.targetY - pointer.y) * 0.12;
      const hue = Math.round((pointer.x / Math.max(page.clientWidth, 1)) * 300 + (pointer.y / Math.max(page.clientHeight, 1)) * 55) % 360;
      page.style.setProperty('--mouse-x', `${pointer.x}px`);
      page.style.setProperty('--mouse-y', `${pointer.y}px`);
      page.style.setProperty('--cursor-hue', `${hue}deg`);
      page.style.setProperty('--parallax-x', `${(pointer.x / Math.max(page.clientWidth, 1) - .5) * 10}px`);
      page.style.setProperty('--parallax-y', `${(pointer.y / Math.max(page.clientHeight, 1) - .5) * 7}px`);
      frame = window.requestAnimationFrame(animatePointer);
    };

    const movePointer = (event) => {
      const bounds = page.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      pointerRef.current.targetX = x;
      pointerRef.current.targetY = y;
      const now = performance.now();
      if (now - pointerRef.current.lastTrail > 42) {
        pointerRef.current.lastTrail = now;
        setTrail((current) => [...current.slice(-10), { id: now, x, y }]);
      }
    };

    page.addEventListener('mousemove', movePointer, { passive: true });
    frame = window.requestAnimationFrame(animatePointer);
    return () => {
      page.removeEventListener('mousemove', movePointer);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const waveTimer = window.setTimeout(() => {
      setRiderPhase('waving');
    }, 1050);
    const speechTimer = window.setTimeout(() => {
      if (!speechPlayedRef.current) {
        speechPlayedRef.current = true;
        speakHi();
      }
    }, 1100);
    const exitTimer = window.setTimeout(() => setRiderPhase('exiting'), 2000);

    return () => {
      window.clearTimeout(waveTimer);
      window.clearTimeout(speechTimer);
      window.clearTimeout(exitTimer);
    };
  }, []);

  const handleExplore = () => {
    navigate('/explore');
    showToast('Exploring Vision Core');
  };

  const handleVisionCore = () => {
    navigate('/vision-core');
    showToast('Opening Vision Core');
  };

  const handleClick = (event) => {
    const bounds = homeRef.current.getBoundingClientRect();
    const ripple = { id: performance.now(), x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    setRipples((current) => [...current.slice(-2), ripple]);
    window.setTimeout(() => setRipples((current) => current.filter((item) => item.id !== ripple.id)), 650);
  };

  return (
    <section ref={homeRef} className={`cyber-home cyber-home--${cursorMode}`} onClick={handleClick}>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="custom-cursor" aria-hidden="true"><b>{cursorMode === 'scanner' ? 'SCAN' : cursorMode === 'interactive' ? '+' : ''}</b></div>
      {trail.map((particle, index) => <i className="cursor-particle" key={particle.id} style={{ left: particle.x, top: particle.y, '--particle-delay': `${index * 35}ms` }} />)}
      {ripples.map((ripple) => <i className="click-ripple" key={ripple.id} style={{ left: ripple.x, top: ripple.y }} />)}
      <div className="city-grid" aria-hidden="true" />
      <div className="city-skyline" aria-hidden="true" style={{ transform: 'translate(var(--parallax-x), var(--parallax-y))' }}><i /><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="light-streaks" aria-hidden="true"><i /><i /><i /></div>
      <div className="particle-field" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="scanlines" aria-hidden="true" />
      <div className="cyber-home__content">
        <div className="system-label"><span className="status-dot" /> VISUAL DISCOVERY SYSTEM // ACTIVE</div>
        <h1 className="cyber-title"><span className="title-line">IMAGINATION</span><span className="title-line title-line--accent">HAS NO</span><span className="title-line">GRID.</span></h1>
        <p className="cyber-subtitle">Discover inspiration. Understand its DNA. Follow unexpected connections.</p>
        <div className="cyber-actions">
          <MagneticButton className="cyber-button--primary" onClick={handleExplore}>EXPLORE VISIONS <span>→</span></MagneticButton>
          <MagneticButton onClick={handleVisionCore}>OPEN VISION CORE <span>→</span></MagneticButton>
        </div>
        <nav className="category-nav" aria-label="Inspiration categories">
          {['ART', 'FASHION', 'TECHNOLOGY', 'ARCHITECTURE'].map((category, index) => <button key={category} className={index === 0 ? 'active' : ''}>{category}</button>)}
          <button>MORE <span>→</span></button>
        </nav>
      </div>
      <div className={`rider-stage rider-stage--${riderPhase}`} onMouseEnter={() => setCursorMode('scanner')} onMouseLeave={() => setCursorMode('default')}>
        <div className="rider-bubble">Hi! <span>♥</span><button onClick={(event) => { event.stopPropagation(); speakHi(); }}>🔊 TAP TO HEAR</button></div>
        <CyberRider />
      </div>
      <div className="home-signal"><span /> SCROLL TO EXPLORE <span /></div>
      <div className="story-content">
        <Reveal className="story-intro">
          <span className="section-kicker">01 / THE DISCOVERY LAYER</span>
          <h2>WHAT IF DISCOVERY<br /><em>WAS MORE THAN</em><br />A FEED?</h2>
          <p>Pinterest helps you save inspiration. <strong>ReDefine helps you understand why it inspires you.</strong></p>
          <div className="holo-orb" aria-hidden="true"><span /><span /><span /></div>
        </Reveal>

        <Reveal className="story-explore">
          <div className="section-heading"><div><span className="section-kicker">02 / VISUAL UNIVERSE</span><h2>EXPLORE THE <em>UNEXPECTED</em></h2></div><p>Step outside your usual visual universe.</p></div>
          <div className="story-grid">{storyCards.map((card) => <button key={card.title} className={`story-card story-card--${card.size}`} onClick={() => setSelectedCard(card)} onMouseEnter={() => setCursorMode('interactive')} onMouseLeave={() => setCursorMode('default')}><img src={card.image} alt="" loading="lazy" /><span className="story-card__shade" /><div className="story-card__copy"><small>{card.category}</small><h3>{card.title}</h3><p>{card.copy}</p><span>EXPLORE <b>→</b></span></div></button>)}</div>
        </Reveal>

        <Reveal className="story-dna">
          <div className="section-heading"><div><span className="section-kicker">03 / IMAGE INTELLIGENCE</span><h2>EVERY IMAGE<br />HAS A <em>DNA.</em></h2></div><p>We turn instinct into a map you can follow.</p></div>
          <div className="dna-stage"><div className="dna-visual"><img src="https://picsum.photos/seed/redefine-dna/720/720" alt="Abstract neon visual" loading="lazy" /><span>ANALYZING<br /><b>98.4%</b></span></div>{[['COLOR', 'NEON'], ['STYLE', 'CYBERPUNK'], ['MOOD', 'FUTURISTIC'], ['FORM', 'GEOMETRIC'], ['TEXTURE', 'METALLIC'], ['COMPOSITION', 'ASYMMETRIC']].map(([label, value], index) => <div className={`dna-node dna-node--${index + 1}`} key={label}><small>{label}</small><strong>{value}</strong></div>)}</div>
        </Reveal>

        <Reveal className={`story-connections ${connectionActive ? 'is-active' : ''}`}>
          <span className="section-kicker">04 / THE NETWORK</span><h2>FOLLOW THE <em>CONNECTION</em></h2><p>Unexpected combinations are where new worlds begin.</p>
          <div className="connection-rail"><span>ART</span><i>→</i><span>FASHION</span><i>→</i><span>ARCHITECTURE</span><i>→</i><span>TECHNOLOGY</span><i>→</i><b>VISION CORE</b></div>
          <button className="cyber-button" onClick={() => setConnectionActive((active) => !active)}>GENERATE CONNECTION <span>↗</span></button>
          <div className="connection-note"><strong>{connectionActive ? 'UNEXPECTED CONNECTION FOUND' : 'SIGNAL WAITING'}</strong><p>{connectionActive ? 'Structured silhouettes meet brutalist geometry.' : 'Activate the network to reveal a new visual thread.'}</p></div>
        </Reveal>

        <Reveal className="story-wall">
          <div className="section-heading"><div><span className="section-kicker">05 / LIVE SIGNALS</span><h2>THE PIN WALL<br /><em>REIMAGINED.</em></h2></div><p>Save the image. Keep the reason.</p></div>
          <div className="wall-stack">{storyCards.slice().reverse().map((card, index) => <button className={`wall-card wall-card--${index + 1}`} key={card.title} onClick={() => setSelectedCard(card)}><img src={card.image} alt="" loading="lazy" /><span>{card.category}</span><strong>{card.title}</strong></button>)}</div>
        </Reveal>

        <Reveal className="story-vision">
          <div className="vision-copy"><span className="section-kicker">06 / VISION CORE</span><h2>MEET<br /><em>VISION CORE.</em></h2><p>Your visual intelligence layer. See patterns your feed never shows you.</p><button className="cyber-button cyber-button--primary" onClick={handleVisionCore}>ENTER VISION CORE <span>→</span></button></div>
          <div className="analysis-ring"><div>DNA<br /><b>LIVE</b></div><i /><i /><i /></div>
          <div className="analysis-readouts"><span>STYLE <b>94%</b><i><em style={{ width: '94%' }} /></i></span><span>COLOR <b>87%</b><i><em style={{ width: '87%' }} /></i></span><span>MOOD <b>91%</b><i><em style={{ width: '91%' }} /></i></span><span>FORM <b>82%</b><i><em style={{ width: '82%' }} /></i></span></div>
        </Reveal>

        <Reveal className="story-stats"><div><strong>10K<span>+</span></strong><small>VISUAL CONNECTIONS</small></div><div><strong>2.4K<span>+</span></strong><small>CREATIVE PATTERNS</small></div><div><strong>87<span>%</span></strong><small>DISCOVERY DEPTH</small></div><div><strong>∞</strong><small>POSSIBILITIES</small></div></Reveal>

        <Reveal className="story-final"><span className="section-kicker">07 / YOUR NEXT SIGNAL</span><h2>READY TO SEE<br /><em>DIFFERENTLY?</em></h2><p>Your next idea might be hiding somewhere unexpected.</p><button className="cyber-button cyber-button--primary" onClick={handleExplore}>ENTER THE FIELD <span>→</span></button></Reveal>
        <footer className="story-footer"><strong>REDEFINE<span>/</span>PINTEREST</strong><nav aria-label="Footer navigation"><Link to="/">HOME</Link><Link to="/explore">EXPLORE</Link><Link to="/discover">DISCOVER</Link><Link to="/vision-core">VISION CORE</Link></nav><span>● SYSTEM ONLINE</span><small>REDEFINE THE WAY YOU DISCOVER.</small></footer>
      </div>
      <PinDetail card={selectedCard} onClose={() => setSelectedCard(null)} />
    </section>
  );
}
