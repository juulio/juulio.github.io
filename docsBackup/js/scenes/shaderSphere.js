// import shaderMaterials from "../main.js";
import displacementFragmentShader from '../shaders/displacementFragmentShader.js';
import vertexShaderEl from '../shaders/vertexShader.js';
import shaderMaterials from "../main.js";

const scene09 = new THREE.Scene();

const geometry = new THREE.SphereGeometry( 1, 32, 16 );


// const material = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
// setup shader material

// const material = new THREE.ShaderMaterial( {
//     uniforms: uniforms,
//     vertexShader: vertexShaderEl,
//     fragmentShader: displacementFragmentShader
// });


// const sphere = new THREE.Mesh( geometry, material);
let sphere = new THREE.Mesh( geometry, shaderMaterials[0] );
scene09.add( sphere );



const light = new THREE.AmbientLight( 0xFFFFFF ); // soft white light
scene09.add( light );

export default scene09;