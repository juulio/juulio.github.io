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
renderTree(2, 15, Math.PI / 4);
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
	scene.add( getGridHelper(50, 5, '#000000') );
	scene.add( getAxesHelper(50) );
	scene.add( getAmbientLight(0x404040) );

	camera.position.set(0, 40, 70);
	camera.lookAt(0, 0, 0);
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

/**
 * render Tree 
 * @param {Number} trunkHeight
 * @param {Number} angle
 * CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer);
 * mesh.rotation.set(0, 90, 180);
 */
 function renderTree(trunkRadius, trunkHeight, angle){
 	let branchGeometry, branchhMesh, branchHeight;

	let trunkGeometry = new THREE.CylinderGeometry( trunkRadius, trunkRadius, trunkHeight, 10, 10);
	trunkGeometry.translate(0, trunkHeight/2, 0);
	let woodMaterial = new THREE.MeshBasicMaterial( {
		color: 0x8B4513,
		wireframe : true
	} );

	let trunkMesh = new THREE.Mesh( trunkGeometry, woodMaterial );
	// trunkMesh.position.set(0, trunkHeight/2, 0);
	scene.add( trunkMesh );

	branchHeight = trunkHeight * 0.8;
	branchGeometry = new THREE.CylinderGeometry( trunkRadius*0.8, trunkRadius*0.8, branchHeight, 10, 10);
	branchGeometry.translate(0, branchHeight/2, 0);
	branchhMesh = new THREE.Mesh( branchGeometry, woodMaterial);
	branchhMesh.position.set(0, trunkHeight, 0);
	// branchhMesh.rotation.set(Math.PI / 4, 0, 0);
	// branchhMesh.rotation.set(Math.PI / 4, 0, 0);
	branchhMesh.rotation.set(0, 0, angle);
	scene.add( branchhMesh );

	branchhMesh = new THREE.Mesh( branchGeometry, woodMaterial);
	branchhMesh.position.set(0, trunkHeight, 0);
	branchhMesh.rotation.set(angle, 0, 0);
	scene.add( branchhMesh );

	branchhMesh = new THREE.Mesh( branchGeometry, woodMaterial);
	branchhMesh.position.set(0, trunkHeight, 0);
	branchhMesh.rotation.set(-angle, 0, 0);
	scene.add( branchhMesh );

	branchhMesh = new THREE.Mesh( branchGeometry, woodMaterial);
	branchhMesh.position.set(0, trunkHeight, 0);
	branchhMesh.rotation.set(0, 0, -angle);
	scene.add( branchhMesh );

 }
