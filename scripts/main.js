// سه‌جی رو از CDN می‌سازیم دستی
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r148/three.min.js';
script.onload = init;
document.head.appendChild(script);

function init() {
  // ساخت صحنه
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0f0f0f, 0.02);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x0f0f0f, 1);
  document.body.appendChild(renderer.domElement);

  // نور
  const light = new THREE.PointLight(0xffffff, 0.5);
  light.position.set(0, 5, 5);
  scene.add(light);

  // پارتیکل مه
  const particleCount = 1000;
  const geometry = new THREE.BufferGeometry();
  const positions = [];

  for (let i = 0; i < particleCount; i++) {
    positions.push((Math.random() - 0.5) * 20); // x
    positions.push((Math.random() - 0.5) * 10); // y
    positions.push((Math.random() - 0.5) * 20); // z
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, opacity: 0.2, transparent: true });
  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // تعامل با موس
  let mouseX = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  });

  // انیمیشن
  function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.0005 + mouseX * 0.01;
    renderer.render(scene, camera);
  }

  animate();
}