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



let woodMaterial = new THREE.MeshBasicMaterial( { color: 0x8B4513, wireframe: true } ),
	transparentMaterial = new THREE.MeshBasicMaterial( { transparent: true } ),
	greenMaterial = new THREE.MeshBasicMaterial( { transparent: true, color: 0x00FF13 } );

transparentMaterial.opacity = 0;
greenMaterial.opacity = 0.6;
//--------------------------------------------------------------------------------------------------------------
let tree = [];
let leaves = [];

let count = 0;


let origin = new THREE.Vector3(0, 0, 0),
	radius = 0.2,
	height = 1,
	angleX = Math.PI/4,
	angleZ = Math.PI/5,
	fractalRatio = 0.8;

let stats;

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
	let material = new THREE.MeshBasicMaterial ({color: 0x0011ff});
	let wireframe = new THREE.WireframeGeometry( geometry );
	let sphere = new THREE.Mesh(geometry, wireframe);

	let line = new THREE.LineSegments( wireframe );
	line.material.depthTest = false;
	line.material.transparent = false;

	scene.add( line );
	
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
