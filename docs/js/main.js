/**
 * Julio Del Valle - Costa Rica 2021
 */

// Import all stuff for shader materials array
import vertexShaderEl from './shaders/vertexShader.js';
import redPulseFragmentShader from './shaders/redPulseFragmentShader.js';
import displacementFragmentShader from './shaders/displacementFragmentShader.js';
import fireFragmentShader from './shaders/fireFragmentShader.js'
import jaguarFragmentShader from './shaders/jaguarFragmentShader.js';
import bwMatrixFragmentShader from './shaders/bwMatrixFragmentShader.js';
import noiseFragmentShader from './shaders/noiseFragmentShader.js';
import voronoiFragmentShader from './shaders/voronoiFragmentShader.js';

const fragmentShaders = [
    displacementFragmentShader,
    voronoiFragmentShader,
    redPulseFragmentShader,
    jaguarFragmentShader,
    bwMatrixFragmentShader,
    noiseFragmentShader,
    fireFragmentShader
];

const shaderMaterials = [];

const sceneArray = [ scene00, scene01, scene02, scene03, scene04, scene05, scene06, scene07, scene08, scene09];
let clock, uniforms;
 
/**
 * Create shaderMaterials using previously imported shaders
 */
const setupShaderMaterials = () => {
    let baseSpeed = 0.02;
    let repeatS = 3.0;
    let repeatT = 4.0;

    let noiseTexture = new THREE.TextureLoader().load('./js/textures/cloud.png');
    noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping; 


    uniforms = {
        u_time:         { type: "f", value: 1.0 },
        u_resolution:   { type: "v2", value: new THREE.Vector2() },
        u_mouse:        { type: "v2", value: new THREE.Vector2() },
        baseSpeed:		{ type: "f", value: baseSpeed },
        repeatS:		{ type: "f", value: repeatS },
        repeatT:		{ type: "f", value: repeatT },
        noiseTexture:	{ type: "t", value: noiseTexture }
    };

    uniforms.u_resolution.value.x = window.innerWidth;
    uniforms.u_resolution.value.y = window.innerHeight;
    
    for (let fragmentShader of fragmentShaders){
        shaderMaterials.push(
            new THREE.ShaderMaterial( {
                uniforms: uniforms,
                vertexShader: vertexShaderEl,
                fragmentShader: fragmentShader,
                transparent: true
            })
        );
    }
}

/**
 * Set basic THREEjs scene stuff
 */
let scene;
const rendererWidth = window.innerWidth;
const rendererHeight = window.innerHeight;
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( rendererWidth, rendererHeight );
renderer.setClearColor ( "#ffffff");

document.body.appendChild( renderer.domElement );
camera.position.z = 5;

clock = new THREE.Clock();

scene = scene00;

 
/**
 * Set all Click Event listeners
 */
const navLinks = document.getElementsByClassName('navLink');
Array.from(navLinks).forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        scene = sceneArray[index];
    });    
});

 
/**
 * Handles onWindowResize event and updates Projection Matrix
 */
const onWindowResize = () => {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = rendererWidth / rendererHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( rendererWidth, rendererHeight );
}

/**
 * Init the animate loop to render the Scene
 */
const animate = () => {
	requestAnimationFrame( animate );

    let delta = clock.getDelta();
    uniforms.u_time.value += delta * 2;

    // sphereMesh.rotation.x += 0.03;
	renderer.render( scene, camera );
}

setupShaderMaterials();
let geometry = new THREE.SphereGeometry( 1, 32, 16 );
let sphereMesh = new THREE.Mesh( geometry, shaderMaterials[6] );
scene.add(sphereMesh);

animate();

import scene00 from "./scenes/scene00.js";
import scene01 from "./scenes/scene01.js";
import scene02 from "./scenes/scene02.js";
import scene03 from "./scenes/scene03.js";
import scene04 from "./scenes/scene04.js";
import scene05 from "./scenes/scene05.js";
import scene06 from "./scenes/scene06.js";
import scene07 from "./scenes/scene07.js";
import scene08 from "./scenes/scene08.js";
import scene09 from "./scenes/scene09.js";



// export default uniforms;
export default shaderMaterials;