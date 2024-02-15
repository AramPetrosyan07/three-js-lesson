import * as THREE from "three";
import "./style.css";

const scene = new THREE.Scene();

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "purple",
  wireframe: true,
});

// const mesh = new THREE.Mesh(geometry, material);
// mesh.position.y = -0.8;

// mesh.scale.x=0.5
// mesh.scale.y=0.5

// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;

// mesh.rotation.reorder("YXZ");

const group = new THREE.Group();
const meshes = [];
const colors = [0xff5733, 0x96ff33, 0x337fff];

for (let x = -1.2; x <= 1.2; x = x + 1.2) {
  for (let y = -1.2; y <= 1.2; y = y + 1.2) {
    const material = new THREE.MeshBasicMaterial({
      color: colors[(Math.random() * 3) | 0],
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.set(0.5, 0.5, 0.5);
    mesh.position.set(x, y, 0);
    meshes.push(mesh);
  }
}

scene.add(...meshes);

scene.add(group);

const size = {
  width: 600,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(70, size.width / size.height);
camera.position.z = 3;
// camera.position.y = 0.5;
// camera.position.x = 0.2;

scene.add(camera);

// camera.lookAt(new THREE.Vector3(0, -1, 0));

const canvas = document.querySelector(".canvas");
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(size.width, size.height);
renderer.render(scene, camera);

const clock = new THREE.Clock();
const animate = () => {
  const delta = clock.getDelta();

  meshes.forEach((item, i) => {
    const mult = i % 2 === 0 ? 1 : -1;
    item.rotation.x += mult * delta;
    // item.rotation.y += mult * delta;
  });

  const elepsedTime = clock.getElapsedTime();
  camera.position.x = Math.sin(elepsedTime);
  camera.position.y = Math.cos(elepsedTime);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};
animate();
