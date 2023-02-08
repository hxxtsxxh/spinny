import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// Setup the scene
const scene = new THREE.Scene();

//  Sphere !!
const geometry = new THREE.TorusKnotGeometry(4, 1, 100, 16);
const material = new THREE.MeshNormalMaterial({
  side: THREE.DoubleSide,
  wireframe: true,
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Lights

// const pointLight = new THREE.PointLight(0xffffff, 1.2, 1000);
// pointLight.position.set(0, 5, 10);
// scene.add(pointLight);

// Setup camera
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);

// Setup renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(sizes.width, sizes.height);
camera.position.setZ(-30);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = true;
controls.enablePan = false;
controls.autoRotate = true;
renderer.render(scene, camera);

// Resize
window.addEventListener("resize", () => {
  // Update Sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // Update Camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

function animate() {
  requestAnimationFrame(animate);
  // controls.update();
  controls.update();

  renderer.render(scene, camera);
}

animate();
