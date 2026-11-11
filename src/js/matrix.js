(() => {
  const canvas = document.createElement("canvas");
  canvas.id = "matrix-bg";
  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const chars = ["6", "7"];
  const fontSize = 14;
  let columns = Math.floor(width / fontSize);
  let drops = [];

  const reset = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / fontSize);
    drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -50);
    }
  };

  reset();
  window.addEventListener("resize", reset, { passive: true });

  let lastTime = 0;
  const fps = 24;
  const interval = 1000 / fps;

  const draw = (now) => {
    requestAnimationFrame(draw);
    if (now - lastTime < interval) return;
    lastTime = now;

    ctx.fillStyle = "rgba(14, 11, 9, 0.18)";
    ctx.fillRect(0, 0, width, height);

    ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      if (y > 0) {
        ctx.fillStyle = "rgba(200, 155, 114, 0.16)";
        ctx.fillText(char, x, y);
      }

      if (y > height && Math.random() > 0.985) {
        drops[i] = 0;
      } else {
        drops[i]++;
      }
    }
  };

  requestAnimationFrame(draw);
})();
