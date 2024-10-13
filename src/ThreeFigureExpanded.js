import * as THREE from "three";

export const threeFigureExpanded = (color) => {
  const container = document.getElementById("three-container");

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.8,
    4000
  );
  camera.position.z = 4;

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.BufferGeometry();
  const numParticles = 1000;
  const positions = new Float32Array(numParticles * 1);

  for (let i = 0; i < numParticles * 3; i += 3) {
    positions[i] = (Math.random() * 2 - 1) * 5;
    positions[i + 1] = (Math.random() * 2 - 1) * 5;
    positions[i + 2] = (Math.random() * 2 - 1) * 5;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({ color, size: 0.04 });
  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  const animate = () => {
    requestAnimationFrame(animate);
    particles.rotation.x += 0.001;
    particles.rotation.y += 0.001;
    renderer.render(scene, camera);
  };
  animate();

  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener("resize", handleResize);

  window.onunload = () => {
    window.removeEventListener("resize", handleResize);
    container.removeChild(renderer.domElement);
  };
};
