import { createCamera } from "./components/createCamera.js";
import { createCube } from "./components/createCube.js";
import { createCube2 } from "./components/createCube2.js";
import { createScene } from "./components/createScene.js";
import {createRenderer} from "./systems/createRenderer.js";
import { Resizer } from "./systems/Resizer.js";
import {createLights} from "./components/lights.js";

//  variabile locale, dar unice - eu voi face un singur new World
let camera;
let scene;
let renderer;

class World {
  //1. Create an instance cu:
  constructor(container) {
    scene = createScene();
    camera = createCamera();
    renderer=createRenderer();
    container.append(renderer.domElement);

    const cube = createCube(); //se foloseste numai in constructor
    const cube2 = createCube2();
    const light = new createLights();
    cube.position.set(0,3,0);
    cube.rotation.set(Math.PI/4, 0, 0);
    cube.scale.set(1,1,1);
    cube2.rotation.set(0, Math.PI/4, 0);
    cube2.position.set(0,0,0);
    cube.add(cube2);
    
    scene.add(cube, light);

    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize=()=>{
      this.render();
    }


  }

  //2. Render the scene:
  render() {
    renderer.render(scene, camera);

  }
}
export { World };
