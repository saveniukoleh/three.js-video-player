import * as THREE from "https://cdn.skypack.dev/three@0.128.0";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "https://cdn.skypack.dev/three@0.128.0/examples/jsm/renderers/CSS3DRenderer.js";

function Element(id, x, y, z, ry) {
  const div = document.createElement("div");
  div.style.width = "960px";
  div.style.height = "720px";
  div.style.backgroundColor = "#000";

  const iframe = document.createElement("iframe");
  iframe.style.width = "960px";
  iframe.style.height = "720px";
  iframe.style.border = "0px";
  iframe.src = ["https://www.youtube.com/embed/", id, "?rel=0"].join("");
  div.appendChild(iframe);

  const object = new CSS3DObject(div);
  object.position.set(x, y, z);
  object.rotation.y = ry;

  return object;
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  5000
);

const renderer = new CSS3DRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const group = new THREE.Group();
group.add(new Element("SJOz3qjfQXU", 0, 0, 480, 0));
group.add(new Element("Y2-xZ-1HE-Q", 480, 0, 0, Math.PI / 2));
group.add(new Element("IrydklNpcFI", 0, 0, -480, Math.PI));
group.add(new Element("9ubytEsCaS0", -480, 0, 0, -Math.PI / 2));
scene.add(group);
scene.background = new THREE.Color();

camera.position.set(0, 0, 1200);
controls.update();

const animate = function () {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

animate();
