import {
  BoxBufferGeometry,
  BufferGeometry,
  Mesh,
  MeshBasicMaterial,
  SphereBufferGeometry,
  TorusBufferGeometry,
  MeshStandardMaterial

} from "../../../build/three.module.js";

function createCube2(){
  const geometry = new BoxBufferGeometry(2,2,2);
  const material = new MeshStandardMaterial({color:"gold"});
  const cube = new Mesh(geometry,material);
  return cube;

}

export {createCube2};