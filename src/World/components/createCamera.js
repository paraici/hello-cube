import { PerspectiveCamera } from "../../../build/three.module.js";

function createCamera(){
    const camera=new PerspectiveCamera(
        45, //fov
        1,  //aspect
        0.01,  //near
        100    //far
    )
    camera.position.set(0,4,10);
    camera.rotation.set(0,0,0);
    return camera;
}

export {createCamera}; 