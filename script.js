/* GEMA 2025 · Samin Sarwat — Reveal.js bootstrap */
Reveal.initialize({
  width: 1440,
  height: 900,
  margin: 0.02,
  minScale: 0.2,
  maxScale: 2.0,
  controls: true,
  controlsLayout: 'bottom-right',
  controlsBackArrows: 'faded',
  progress: true,
  slideNumber: 'c/t',
  hash: true,
  history: true,
  center: false,
  transition: 'slide',
  transitionSpeed: 'default',
  backgroundTransition: 'fade',
  hideInactiveCursor: true,
  touch: true,
  pdfSeparateFragments: false,
  pdfMaxPagesPerSlide: 1,
});

/* ---- Reveal-triggered enter animations for stat numbers ---- */
Reveal.on('slidechanged', (event) => {
  const slide = event.currentSlide;
  if (!slide) return;
  // re-trigger CSS animations by toggling a class
  slide.classList.remove('is-active');
  // force reflow
  void slide.offsetWidth;
  slide.classList.add('is-active');

  // Subtle counter animation for visible stat-values
  const nums = slide.querySelectorAll('.stat-value .num, .impact-big-num, .impact-num');
  nums.forEach((el) => {
    const raw = el.textContent.trim();
    const match = raw.match(/^(RM\s?)?([\d\.]+)\s?([KMB\+]*)$/);
    if (!match) return;
    const prefix = match[1] || '';
    const target = parseFloat(match[2]);
    const suffix = match[3] || '';
    if (Number.isNaN(target) || target > 9999) return;
    const duration = 900;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const v = target * ease(t);
      const display = target < 10 ? v.toFixed(1) : Math.round(v);
      el.textContent = `${prefix}${display}${suffix}`;
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = raw;
    }
    requestAnimationFrame(tick);
  });
});

/* Fire once for the first slide */
window.addEventListener('load', () => {
  const active = document.querySelector('.reveal .slides section.present');
  if (active) active.classList.add('is-active');
});
