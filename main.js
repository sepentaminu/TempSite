document.addEventListener("DOMContentLoaded", () => {
  
  
  
  const canvas = document.getElementById("home-canvas") || document.getElementById("page2-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

  const mistParticles = [];

  for (let i = 0; i < 80; i++) {
    
    mistParticles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 80 + Math.random() * 40,
      alpha: 0.05 + Math.random() * 0.05,
      dx: -0.5 + Math.random(),
      dy: -0.5 + Math.random()
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    mistParticles.forEach(p => {
      // فاصله تا موس
      let dx = (mouse.x - p.x) * 0.001;
      let dy = (mouse.y - p.y) * 0.001;

      p.x += p.dx + dx;
      p.y += p.dy + dy;

      // پیچیدن به اطراف
      if (p.x > canvas.width) p.x = 0;
      if (p.x < 0) p.x = canvas.width;
      if (p.y > canvas.height) p.y = 0;
      if (p.y < 0) p.y = canvas.height;

      ctx.beginPath();
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
      gradient.addColorStop(0, `rgba(255,255,255,${p.alpha})`);
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  window.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  animate();
});