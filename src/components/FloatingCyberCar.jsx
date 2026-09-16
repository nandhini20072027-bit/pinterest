import React, { useRef } from 'react';
import './FloatingCyberCar.css';

export default function FloatingCyberCar({ page = 'home' }) {
  const carRef = useRef(null);
  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - .5) * 10;
    const y = ((event.clientY - bounds.top) / bounds.height - .5) * -8;
    carRef.current?.style.setProperty('--car-tilt', `rotateY(${x}deg) rotateX(${y}deg)`);
  };
  const reset = () => carRef.current?.style.setProperty('--car-tilt', 'rotateY(0deg) rotateX(0deg)');
  return <div ref={carRef} className={`floating-car floating-car--${page}`} onMouseMove={handleMove} onMouseLeave={reset} aria-hidden="true">
    <span className="car-trail" /><span className="car-shadow" />
    <svg viewBox="0 0 260 100" className="car-svg">
      <path d="M24 65 L52 43 L88 37 L119 20 L185 25 L224 44 L243 62 L228 76 L42 76Z" fill="#090d1a" stroke="#00f5ff" strokeWidth="3" />
      <path d="M102 36 L124 23 L180 27 L195 43 L99 43Z" fill="#182449" stroke="#8b5cf6" strokeWidth="2" />
      <path d="M31 61 L68 53 M194 52 L234 59" stroke="#ff00a8" strokeWidth="4" />
      <path d="M50 70 L218 70" stroke="#00f5ff" strokeWidth="5" strokeLinecap="round" />
      <circle cx="59" cy="76" r="10" fill="#05070e" stroke="#ff00a8" strokeWidth="3" /><circle cx="205" cy="76" r="10" fill="#05070e" stroke="#00f5ff" strokeWidth="3" />
      <path d="M230 50 L250 46" stroke="#bafcff" strokeWidth="5" strokeLinecap="round" />
    </svg>
  </div>;
}
