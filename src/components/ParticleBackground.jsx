import React, { useEffect, useRef } from 'react';
import './ParticleBackground.css';

export default function ParticleBackground() {
  const fieldRef = useRef(null);
  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return undefined;
    const move = (event) => {
      field.style.setProperty('--particle-x', `${event.clientX}px`);
      field.style.setProperty('--particle-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);
  return <div ref={fieldRef} className="global-particles" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <i key={index} style={{ '--particle-index': index }} />)}<span className="global-cursor-glow" /><div className="global-hud global-hud--top">● SYSTEM ONLINE // 2077</div><div className="global-hud global-hud--bottom">VISUAL NETWORK // CONNECTED ●</div></div>;
}
