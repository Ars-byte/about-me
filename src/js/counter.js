window.Counter = (() => {
  const ease = t => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

  const animate = (el, duration = 1200) => {
    const raw = el.dataset.value || "";
    const match = raw.match(/^(\D*)(\d+)(.*)$/);
    if (!match) return;
    const [, prefix, num, suffix] = match;
    const target = parseInt(num, 10);
    const start = performance.now();

    const tick = now => {
      const p = Math.min((now - start) / duration, 1);
      const cur = Math.min(Math.round(target * ease(p)), target);
      el.textContent = prefix + cur + suffix;
      if (p < 1) {
        el._raf = requestAnimationFrame(tick);
      }
    };

    cancelAnimationFrame(el._raf);
    tick(start);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) animate(e.target);
    });
  }, { threshold: 0.2 });

  const watch = root => {
    if (!root) return;
    root.querySelectorAll("[data-value]").forEach(el => observer.observe(el));
  };

  return { watch };
})();
