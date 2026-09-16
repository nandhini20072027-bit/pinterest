// src/pages/home.js
// Home page – hero section with a dramatic background and CTA.

export function renderHome(container) {
  container.innerHTML = `
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">Redefine Inspiration</h1>
        <p class="hero-subtitle">Discover, understand, connect, remix, create – powered by Vision Core.</p>
        <button class="btn" id="exploreBtn">Explore Now</button>
      </div>
    </section>
  `;

  // Attach CTA action – navigate to explore.
  const exploreBtn = document.getElementById('exploreBtn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      location.hash = '#explore';
    });
  }
}
