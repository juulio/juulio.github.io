// import shaderMaterials from "../main.js";
import displacementFragmentShader from '../shaders/displacementFragmentShader.js';
import vertexShaderEl from '../shaders/vertexShader.js';

const scene09 = new THREE.Scene();

const geometry = new THREE.SphereGeometry( 1, 32, 16 );


// const material = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
// setup shader material
let uniforms = {
    u_time: { type: "f", value: 1.0 },
    u_resolution: { type: "v2", value: new THREE.Vector2() },
    u_mouse: { type: "v2", value: new THREE.Vector2() }
};
uniforms.u_resolution.value.x = window.innerWidth;
uniforms.u_resolution.value.y = window.innerHeight;

const material = new THREE.ShaderMaterial( {
    uniforms: uniforms,
    vertexShader: vertexShaderEl,
    fragmentShader: displacementFragmentShader
});


const sphere = new THREE.Mesh( geometry, material);
// let sphere = new THREE.Mesh( geometry, shaderMaterials[0] );
scene09.add( sphere );



const light = new THREE.AmbientLight( 0xFFFFFF ); // soft white light
scene09.add( light );

export default scene09;