import {Scene, Color} from "../../../build/three.module.js"

function createScene(){
    const scene=new Scene();
    scene.background=new Color("aquamarine");
    return scene;

}

export {createScene};