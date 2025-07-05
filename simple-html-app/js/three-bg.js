import * as THREE from 'https://cdn.skypack.dev/three@0.152.2';

let scene, camera, renderer, particles, particleGeo, particleMat;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 120;

  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas'), alpha: true, antialias: true });
  renderer.setClearColor(0x0F0F1C, 1);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Neon particles
  const colors = [0x00FFF7, 0xFF00C8, 0xFFFB00, 0x00FF85];
  particleGeo = new THREE.BufferGeometry();
  const count = 180;
  const positions = [];
  const colorArr = [];
  for (let i = 0; i < count; i++) {
    positions.push((Math.random() - 0.5) * 400);
    positions.push((Math.random() - 0.5) * 200);
    positions.push((Math.random() - 0.5) * 200);
    const color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);
    colorArr.push(color.r, color.g, color.b);
  }
  particleGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  particleGeo.setAttribute('color', new THREE.Float32BufferAttribute(colorArr, 3));
  particleMat = new THREE.PointsMaterial({ size: 6, vertexColors: true, transparent: true, opacity: 0.85 });
  particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  particles.rotation.y += 0.0015;
  particles.rotation.x += 0.0007;
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

init(); 