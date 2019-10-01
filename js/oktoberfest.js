import THREE from '../js/vendor/three.module.js';
import OrbitControls from '../js/vendor/orbitControls.module.js';
import Branch from '../js/Branch.js';

import {
	renderer,
	getCamera,
	getAmbientLight,
	getGridHelper,
	getAxesHelper
} from '../js/scene.js';

const camera = getCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const scene = new THREE.Scene();
const controls = new OrbitControls( camera );

let stats, shaderMaterial;

initScene();
animate();

/**
  * Set up and show Javascript Performance Monitor
  */
function showStats(){
    stats = new Stats();
    stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild( stats.dom );
}

/*
 * Init Uniforms for shaderMaerial
 * TODO: create a shaderMaterial array to use several shaders on several materials
 */
function setupShaderMaterials(){
	uniforms = {
		u_time: { type: "f", value: 1.0 },
		u_resolution: { type: "v2", value: new THREE.Vector2() },
		u_mouse: { type: "v2", value: new THREE.Vector2() }
	};

	uniforms.u_resolution.value.x = window.innerWidth;
	uniforms.u_resolution.value.y = window.innerHeight;

	shaderMaterial = new THREE.ShaderMaterial( {
		name: "planet",
		uniforms: uniforms,
		vertexShader: document.getElementById( 'vertexShader' ).textContent,
		fragmentShader: document.getElementById( 'planetFragmentShader' ).textContent
	});
}
/**
  * Sets basic 3D Scene Elements
  */
function initScene(){
	/**
	 * Render grid and XYZ Axis Helpers
	 */
	// scene.add( getGridHelper(50, 5, '#000000') );

	//The X axis is red. The Y axis is green. The Z axis is blue.
	// scene.add( getAxesHelper(50) );
	// scene.add( getAmbientLight(0x404040) );

	camera.position.set(0, 6, 20);
	camera.lookAt(0, 0, 0);
	document.body.appendChild( renderer.domElement );

	showStats();

	//------------------------------------------------------------------	 
	let geometry = new THREE.SphereGeometry(9, 12, 12);
	let sphere = new THREE.Mesh(geometry, shaderMaterial);

	scene.add( sphere );
	
	//------------------------------------------------------------------
	window.addEventListener( 'resize', onWindowResize, false );
}

/**
  * Handles window resize events
  */
function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

/**
 * Updates objects on each frame
 */
function animate(){
    requestAnimationFrame( animate );

    stats.begin();

    renderer.render( scene, camera );

    stats.end();
}

const exports = {};

exports.scene = scene;

export default exports;
