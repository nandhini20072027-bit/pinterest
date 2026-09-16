import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [transitioning, setTransitioning] = useState(false);
  const [visibleChildren, setVisibleChildren] = useState(children);

  useEffect(() => {
    setTransitioning(true);
    const swapTimer = window.setTimeout(() => setVisibleChildren(children), 230);
    const endTimer = window.setTimeout(() => setTransitioning(false), 720);
    return () => {
      window.clearTimeout(swapTimer);
      window.clearTimeout(endTimer);
    };
  }, [location.key]);

  return (
    <div className={`page-transition ${transitioning ? 'page-transition--active' : ''}`}>
      {visibleChildren}
      <div className="page-transition__veil" aria-hidden="true"><i /><i /><b>VISUAL NETWORK // SHIFTING</b></div>
    </div>
  );
}
