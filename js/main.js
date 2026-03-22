/* ============================================================
   main.js  –  accordion toggling + markdown loading
   ============================================================ */

// ── Accordion ────────────────────────────────────────────────
document.querySelectorAll('.section-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const bodyId   = button.getAttribute('aria-controls');
    const body     = document.getElementById(bodyId);

    if (!body) return;

    button.setAttribute('aria-expanded', String(!expanded));
    body.hidden = expanded;

    // Lazy-load markdown the first time the section opens
    if (!expanded) {
      const container = body.querySelector('.markdown-content[data-src]');
      if (container) loadMarkdown(container);
    }
  });
});

// ── Hash-based deep link: auto-open section from URL ─────────
function openSectionById(id) {
  const section = document.getElementById(id);
  if (!section) return;
  const button = section.querySelector('.section-toggle');
  const bodyId = button?.getAttribute('aria-controls');
  const body   = bodyId ? document.getElementById(bodyId) : null;
  if (button && body && body.hidden) button.click();
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

if (location.hash) {
  // Wait one tick so the DOM is fully settled
  requestAnimationFrame(() => openSectionById(location.hash.slice(1)));
}

window.addEventListener('hashchange', () => {
  if (location.hash) openSectionById(location.hash.slice(1));
});

// ── Markdown loader ──────────────────────────────────────────
async function loadMarkdown(container) {
  const src = container.getAttribute('data-src');
  if (!src || container.dataset.loaded) return;

  container.dataset.loaded = 'true'; // prevent double-fetch
  container.removeAttribute('data-src');

  try {
    const response = await fetch(src);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const text = await response.text();
    container.innerHTML = marked.parse(text);
  } catch (err) {
    container.classList.add('error');
    container.textContent = `Could not load content (${err.message}). Please check that ${src} exists.`;
    console.error('Markdown load error:', err);
  }
}

// ── Footer school year ───────────────────────────────────────
const yearEl = document.getElementById('school-year');
if (yearEl) {
  const now  = new Date();
  const year = now.getFullYear();
  // School year: Aug–Dec = current/next, Jan–Jul = prev/current
  const start = now.getMonth() >= 7 ? year : year - 1;
  yearEl.textContent = `${start}–${start + 1}`;
}
