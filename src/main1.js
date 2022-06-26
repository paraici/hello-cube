import {
    BoxBufferGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer

} from "../build/three.module.js"

const container = document.getElementById("scene-container");

const scene = new Scene;

scene.background= new Color('skyblue');

//create camera
const fov = 35;
const aspect = container.clientWidth/container.clientHeight;
const near = 0.01;
const far = 100;
const camera = new PerspectiveCamera(fov, aspect, near, far);
// muta camera +Z e cand merg cu spatele
camera.position.set(1,1,10);

//create geometry
const geometry = new BoxBufferGeometry(1,2,3);
// material default white
const material = new MeshBasicMaterial();

//create mesh
const cube = new Mesh(geometry,material);

scene.add(cube);

//create renderer

const renderer= new WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

container.append(renderer.domElement);

renderer.render(scene, camera);