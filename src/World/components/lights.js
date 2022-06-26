import { DirectionalLight } from "../../../build/three.module.js";
import {PointLight} from "../../../build/three.module.js";
import {RectAreaLight} from "../../../build/three.module.js";
import {SpotLight} from "../../../build/three.module.js";

function createLights(){
    //const light = new DirectionalLight("white",8);
    //const light = new PointLight("blue",8);
    //const light = new RectAreaLight("white",8);
    const light = new SpotLight("white",8); 
    light.position.set(5,10,10);

    return light;
    
}

export {createLights};