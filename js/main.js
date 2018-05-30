import THREE from '../js/vendor/three.module.js';
import OrbitControls from '../js/vendor/orbitControls.module.js';

import {
	renderer,
	getCamera,
	getAmbientLight,
	getGridHelper,
	getAxesHelper
} from '../js/scene.js';

// const canvas = renderer.domElement;
const camera = getCamera();
const scene = new THREE.Scene();
const controls = new OrbitControls( camera );


initScene();
animate();


/*
 * Returns true if a given number n is Even
 */
// isEven = (n) => n % 2 === 0;

/*
 * Set up and show Javascript Performance Monitor
 */
function showStats(){
    stats = new Stats();
    stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild( stats.dom );
}


/*
 * Sets basic 3D Scene Elements
 */
function initScene(){
	/**
	 * Render grid and XYZ Axis Helpers
	 */
	scene.add( getGridHelper(200, 20, '#000000') );
	scene.add( getAxesHelper(50) );
	scene.add( getAmbientLight(0x404040) );

	camera.position.set(3, 10, 30);

	document.body.appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );
}

/*
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
function animate(nowMsec){
    requestAnimationFrame( animate );

    // stats.begin();

    renderer.render( scene, camera );

    // stats.end();
}
