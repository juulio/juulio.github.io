// ✓ 1. hacer una función "renderBranch", que va a dibujar/animar el tronco y cada rama
// 2. hacer una función "renderTree"', que llama a renderBranch un montón de veces y le da parámetros, ojalá con objetos
// 3. hacer un JSON, que contenga los parámetros que construyen el árbol
// 4. hacer un generador/randomizador de ese JSON, para que cada pageLoad se haga uno diferente.
// 5. aplicar shaderMaterials y hacer un despiche animado entre tronco, ramas,  hojas y flores
import THREE from '../js/vendor/three.module.js';
import OrbitControls from '../js/vendor/orbitControls.module.js';

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

let stats;
// let trunkMesh, trunkGeometry, dynaimcTrunkHeight;
// let branchGeometry, branchMesh01, branchMesh02, branchMesh03, branchMesh04, branchLength;

let woodMaterial = new THREE.MeshBasicMaterial( {
	color: 0x8B4513,
	wireframe : true
} );


// let branchParams = {
// 	branchLength : 0,
// 	branch1xPos : 0,
// 	branch2xPos : 0,
// 	branch3zPos : 0,
// 	branch4zPos : 0
// };

// let branchTween = new TWEEN.Tween( branchParams )
// 	.to({
//     	branchLength: 10,
//     	branch1xPos: -3,
//     	branch2xPos: 3,
//     	branch3zPos: 3,
//     	branch4zPos: -3
// 	}, 1700)
// 	.onUpdate(
// 		function(){
// 			let branchStartingPositionY = trunkParams.trunkHeight + branchParams.branchLength/2;
// 			branchLength = dynaimcTrunkHeight * 0.7;

// 			branchMesh01.scale.y = branchParams.branchLength;
// 			branchMesh01.position.set(branchParams.branch1xPos, branchStartingPositionY, 0);

// 			branchMesh02.scale.y = branchParams.branchLength;
// 			branchMesh02.position.set(branchParams.branch2xPos, branchStartingPositionY, 0);

// 			branchMesh03.scale.y = branchParams.branchLength;
// 			branchMesh03.position.set(0, branchStartingPositionY, branchParams.branch3zPos);

// 			branchMesh04.scale.y = branchParams.branchLength;
// 			branchMesh04.position.set(0, branchStartingPositionY, branchParams.branch4zPos);
// 		}
// 	);

//----------------- Start Tweens 
// trunkTween.chain(branchTween);
// trunkTween.start();
initScene();

let trunkOrigin = new THREE.Vector3(0, 0, 0),
	trunkRadius = 2,
	trunkHeight = 4,
	fractalRatio = 2;

// renderBranch(trunkOrigin, trunkRadius, trunkHeight, 0, fractalRatio);

renderBranch(new THREE.Vector3(3, 0, 0), 2, trunkHeight, 0, fractalRatio);
// renderBranch(new THREE.Vector3(0, trunkHeight * fractalRatio, 0), 2, trunkHeight*0.8, Math.PI/4, fractalRatio);
// renderBranch(new THREE.Vector3(5, 0, 0), 2, 0);
// renderBranch(new THREE.Vector3(5, 0, 0), 2, 0, Math.PI / 4);
// renderBranch(2, 0, Math.PI / 4);
// renderBranch(2, 0, Math.PI / 4);

/**
 * draw branch
 * @param {THREE.Vector3( x, y, z);} origin
 * @param {Number} radius
 * @param {Number} height
 * @param {Number} angle
 * CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer);
 * mesh.rotation.set(0, 90, 180);
 */
function renderBranch(origin, radius, height, angle, scalingFactor){
	let branchGeometry = new THREE.CylinderGeometry( radius, radius, height, 10, 10);

	// branchGeometry.translate(origin.x, origin.y, origin.z);
	let mesh = new THREE.Mesh( branchGeometry, woodMaterial );

	// mesh.position.set(origin.x, origin.y, origin.z);
	
	scene.add( mesh );

	let tween = new TWEEN.Tween( mesh.scale )
    .to( {
    		y: scalingFactor
    	}, 600
    )
    .onUpdate(
    	function(){
			mesh.position.set(origin.x, origin.y + mesh.scale.y*height/2, origin.z);
    	}
    )
    .onComplete(
    	function(){
			mesh.geometry.computeBoundingBox();
			scene.add( new THREE.BoxHelper( mesh, 0xf00f00 ) );


    		// console.log(origin.y + scalingFactor*height);
    	}
    );
    tween.start();
}






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
	
	//The X axis is red. The Y axis is green. The Z axis is blue.
	scene.add( getAxesHelper(50) );
	// scene.add( getAmbientLight(0x404040) );

	camera.position.set(0, 6, 15);
	camera.lookAt(0, 0, 0);
	document.body.appendChild( renderer.domElement );

	showStats();

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

    TWEEN.update();

    renderer.render( scene, camera );
		
    stats.end();
}

/**
 * render Trunk
 * @param {THREE.Vector3( x, y, z);} origin
 * @param {Number} trunkRadius
 * @param {Number} trunkHeight
 * @param {Number} angle
 * CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer);
 * mesh.rotation.set(0, 90, 180);
 */
function renderTrunk(origin, trunkRadius, trunkHeight){
 	let initialHeight, maxHeight, heightTween;

	 	trunkGeometry = new THREE.CylinderGeometry( trunkRadius, trunkRadius, trunkHeight, 10, 10);

		// trunkGeometry.translate(origin.x, origin.y, origin.z);


		trunkMesh = new THREE.Mesh( trunkGeometry, woodMaterial );
		// console.log(trunkMesh.geometry.parameters.height);
		scene.add( trunkMesh );
}
 	/**
 * render Tree 
 * @param {THREE.Vector3( x, y, z);} origin
 * @param {Number} trunkRadius
 * @param {Number} trunkHeight
 * @param {Number} angle
 * CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer);
 * mesh.rotation.set(0, 90, 180);
 */
 function renderTree(origin, trunkRadius, trunkHeight, angle){
 	let initialHeight, maxHeight, heightTween;

	branchGeometry = new THREE.CylinderGeometry( trunkRadius*0.8, trunkRadius*0.7, 0, 10, 10);

	branchMesh01 = new THREE.Mesh( branchGeometry, woodMaterial);
	branchMesh02 = new THREE.Mesh( branchGeometry, woodMaterial);
	branchMesh03 = new THREE.Mesh( branchGeometry, woodMaterial);
	branchMesh04 = new THREE.Mesh( branchGeometry, woodMaterial);

	branchMesh01.rotation.set(0, 0, angle);
	branchMesh02.rotation.set(0, 0, -angle);
	branchMesh03.rotation.set(angle, 0, 0);
	branchMesh04.rotation.set(-angle, 0, 0);
	
	scene.add( branchMesh01 );
	// scene.add( branchMesh02 );
	// scene.add( branchMesh03 );
	// scene.add( branchMesh04 );

	// branchMesh = new THREE.Mesh( branchGeometry, woodMaterial);
	// branchMesh.position.set(0, trunkHeight, 0);
	// branchMesh.rotation.set(angle, 0, 0);
	// scene.add( branchMesh );

	// branchMesh = new THREE.Mesh( branchGeometry, woodMaterial);
	// branchMesh.position.set(0, trunkHeight, 0);
	// branchMesh.rotation.set(-angle, 0, 0);
	// scene.add( branchMesh );

	// branchMesh = new THREE.Mesh( branchGeometry, woodMaterial);
	// branchMesh.position.set(0, trunkHeight, 0);
	// branchMesh.rotation.set(0, 0, -angle);
	// scene.add( branchMesh );

 }
