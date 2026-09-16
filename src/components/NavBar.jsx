// src/components/NavBar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { showToast } from '../toast.js';

export default function NavBar() {
  const navigate = useNavigate();
  const handleCreate = () => showToast('Create button clicked');

  return (
    <header id="navbar" className="navbar">
      <div className="nav-left">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pinterest.svg" alt="Pinterest" className="logo" />
        <span className="brand">Pinterest</span>
        <nav className="nav-links">
          <NavLink to="/" className="nav-link" aria-label="Home">Home</NavLink>
          <NavLink to="/explore" className="nav-link" aria-label="Explore">Explore</NavLink>
          <NavLink to="/discover" className="nav-link" aria-label="Discover">Discover</NavLink>
          <NavLink to="/vision-core" className="nav-link" aria-label="Vision Core">Vision Core</NavLink>
        </nav>
      </div>
      <div className="nav-center">
        <input type="text" className="search" placeholder="Search ideas, moods, colors or feelings..." />
      </div>
      <div className="nav-right">
        <button className="btn icon-btn" id="createBtn" aria-label="Create" onClick={handleCreate}>Create</button>
        <button className="btn icon-btn" aria-label="Notifications">🔔</button>
        <button className="btn icon-btn" aria-label="Messages">✉️</button>
        <button className="btn icon-btn" aria-label="Profile">👤</button>
        <span className="vision-indicator" style={{marginLeft:'1rem', color:'var(--color-primary-cyan)', fontWeight:600}}>
          VISION CORE ● ACTIVE
        </span>
      </div>
    </header>
  );
}
