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

const group = new THREE.Group();

const cube1 = new THREE.Mesh(geometry, material);
cube1.position.x = -1.2;

const cube2 = new THREE.Mesh(geometry, material);
cube2.position.x = 0;

const cube3 = new THREE.Mesh(geometry, material);
cube3.position.x = 1.2;

group.add(cube1);
group.add(cube2);
group.add(cube3);

scene.add(group);

// const mesh = new THREE.Mesh(geometry, material);
// mesh.position.y = -0.8;

// mesh.scale.x=0.5
// mesh.scale.y=0.5

// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;

// mesh.rotation.reorder("YXZ");

// scene.add(mesh);

const size = {
  width: 600,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(70, size.width / size.height);
camera.position.z = 5;
camera.position.y = 1;
camera.position.x = 0.2;

scene.add(camera);

// camera.lookAt(new THREE.Vector3(0, -1, 0));

const canvas = document.querySelector(".canvas");
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
