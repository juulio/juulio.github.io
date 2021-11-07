import { CylinderBufferGeometry, MeshBasicMaterial, Mesh, Group } from 'three';
// import brownTextureAsset from '../public/images/textures/brownTexture.png';

let ferrisWheelGroup = new Group();

let wheelGeometry = new CylinderBufferGeometry(32, 32, 2, 50);
let wireframeMaterial = new MeshBasicMaterial({color: 0xffff00, wireframe: true});
let wheelMesh = new Mesh(wheelGeometry, wireframeMaterial);

wheelMesh.name = 'wheelMesh';
wheelMesh.rotation.x = Math.PI / 2 ;
wheelMesh.position.x = -85;
wheelMesh.position.y = 70;
wheelMesh.position.z = -70;
ferrisWheelGroup.add(wheelMesh);

export default ferrisWheelGroup;