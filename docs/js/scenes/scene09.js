import shaderMaterials from "../main.js";

const scene10 = new THREE.Scene();

const geometry = new THREE.SphereGeometry( 1, 32, 16 );
const material = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
// const shaderMaterial = shaderMaterials[0];
const sphere = new THREE.Mesh( geometry, material );
scene10.add( sphere );



const light = new THREE.AmbientLight( 0xFFFFFF ); // soft white light
scene10.add( light );

export default scene10;