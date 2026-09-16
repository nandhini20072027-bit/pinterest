// src/components/NavBar.js
// Renders the top navigation bar and wires simple actions.
import { showToast } from '../app.js';

export function renderNavBar() {
  const navbar = document.getElementById('navbar');
  navbar.innerHTML = `
    <div class="nav-left">
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pinterest.svg" alt="Pinterest" class="logo" />
      <span class="brand">Pinterest</span>
      <div class="nav-links">
        <a href="#home" class="nav-link" aria-label="Home">Home</a>
        <a href="#explore" class="nav-link" aria-label="Explore">Explore</a>
        <a href="#vision-core" class="nav-link" aria-label="Vision Core">Vision Core</a>
        <a href="#remix" class="nav-link" aria-label="Remix">Remix</a>
        <a href="#journey" class="nav-link" aria-label="Journey">Journey</a>
        <a href="#community" class="nav-link" aria-label="Community">Community</a>
      </div>
    </div>
    <div class="nav-center">
      <input type="text" class="search" placeholder="Search ideas, moods, colors or feelings..." />
    </div>
    <div class="nav-right">
      <button class="btn icon-btn" id="createBtn" aria-label="Create">Create</button>
      <button class="btn icon-btn" id="notificationsBtn" aria-label="Notifications">🔔</button>
      <button class="btn icon-btn" id="messagesBtn" aria-label="Messages">✉️</button>
      <button class="btn icon-btn" id="profileBtn" aria-label="Profile">👤</button>
      <span class="vision-indicator" style="margin-left:1rem; color: var(--color-primary-cyan); font-weight:600;">VISION CORE ● ACTIVE</span>
    </div>
  `;

  // Simple demo interaction – only the Create button shows a toast.
  const createBtn = document.getElementById('createBtn');
  if (createBtn) {
    createBtn.addEventListener('click', () => showToast('Create button clicked'));
  }
}
