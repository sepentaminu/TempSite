import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

let scene, camera, renderer, fogParticles = [], mouse = { x: 0, y: 0 };

export function initFog(containerId) {
  const container = document.getElementById(containerId);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 100;

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(2, 8, 8);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.04 });

  for (let i = 0; i < 200; i++) {
    const particle = new THREE.Mesh(geometry, material);
    particle.position.x = (Math.random() - 0.5) * 400;
    particle.position.y = (Math.random() - 0.5) * 400;
    particle.position.z = (Math.random() - 0.5) * 400;
    scene.add(particle);
    fogParticles.push(particle);
  }

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  fogParticles.forEach(p => {
    p.position.x += 0.1 * Math.sin(mouse.x * 0.001);
    p.position.y += 0.1 * Math.cos(mouse.y * 0.001);
  });
  renderer.render(scene, camera);
}

window.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});