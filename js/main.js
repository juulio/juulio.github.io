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
const camera = getCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const scene = new THREE.Scene();
const controls = new OrbitControls( camera );

let trunkMesh, trunkGeometry, dynaimcTrunkHeight;
let branchGeometry, branchMesh01, branchMesh02, branchMesh03, branchMesh04, branchLength;

let trunkParams = { 
	trunkHeight : 0
};

let branchParams = {
	branchLength : 0,
	branch1xPos : 0,
	branch2xPos : 0,
	branch3zPos : 0,
	branch4zPos : 0
};

let trunkTween = new TWEEN.Tween( trunkParams )
    .to( {
    	trunkHeight: 20
    }, 2000 )
    .onUpdate(
    	function(){
	    	dynaimcTrunkHeight = trunkMesh.scale.y/2;

	    	trunkMesh.scale.y = trunkParams.trunkHeight;
			trunkMesh.position.set(0, dynaimcTrunkHeight, 0);
	    	
    	}
    )
    .onComplete(
    	function(){
    		// console.log('trunkHeight = ' + trunkParams.trunkHeight);
    	}
    );

let branchTween = new TWEEN.Tween( branchParams )
	.to({
    	branchLength: 10,
    	branch1xPos: -3,
    	branch2xPos: 3,
    	branch3zPos: 3,
    	branch4zPos: -3
	}, 1700)
	.onUpdate(
		function(){
			let branchStartingPositionY = trunkParams.trunkHeight + branchParams.branchLength/2;
			branchLength = dynaimcTrunkHeight * 0.7;

			branchMesh01.scale.y = branchParams.branchLength;
			branchMesh01.position.set(branchParams.branch1xPos, branchStartingPositionY, 0);

			branchMesh02.scale.y = branchParams.branchLength;
			branchMesh02.position.set(branchParams.branch2xPos, branchStartingPositionY, 0);

			branchMesh03.scale.y = branchParams.branchLength;
			branchMesh03.position.set(0, branchStartingPositionY, branchParams.branch3zPos);

			branchMesh04.scale.y = branchParams.branchLength;
			branchMesh04.position.set(0, branchStartingPositionY, branchParams.branch4zPos);
		}
	);

trunkTween.chain(branchTween);
trunkTween.start();

initScene();
renderTree(2, 0, Math.PI / 4);
// renderTree(2, 0, Math.PI / 4);
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
function animate(){
    requestAnimationFrame( animate );

    // stats.begin();

    renderer.render( scene, camera );
	// trunkGeometry.parameters.height = trunkHeight;

	// trunkMesh.geometry.verticesNeedUpdate = true;
	// trunkGeometry.parameters.height = params.x;
		
    // stats.end();
    TWEEN.update();
}

/**
 * render Tree 
 * @param {Number} trunkRadius
 * @param {Number} trunkHeight
 * @param {Number} angle
 * CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer);
 * mesh.rotation.set(0, 90, 180);
 */
 function renderTree(trunkRadius, trunkHeight, angle){
 	let initialHeight, maxHeight, heightTween;


	trunkGeometry = new THREE.CylinderGeometry( trunkRadius, trunkRadius, trunkHeight, 10, 10);

	// trunkGeometry.translate(0, trunkHeight/2, 0);
	let woodMaterial = new THREE.MeshBasicMaterial( {
		color: 0x8B4513,
		wireframe : true
	} );

	trunkMesh = new THREE.Mesh( trunkGeometry, woodMaterial );
	// trunkMesh.position.set(0, trunkHeight/2, 0);
	// console.log(trunkMesh.geometry.parameters.height);
	scene.add( trunkMesh );


	branchGeometry = new THREE.CylinderGeometry( trunkRadius*0.8, trunkRadius*0.8, 0, 10, 10);

	branchMesh01 = new THREE.Mesh( branchGeometry, woodMaterial);
	branchMesh02 = new THREE.Mesh( branchGeometry, woodMaterial);
	branchMesh03 = new THREE.Mesh( branchGeometry, woodMaterial);
	branchMesh04 = new THREE.Mesh( branchGeometry, woodMaterial);

	branchMesh01.rotation.set(0, 0, angle);
	branchMesh02.rotation.set(0, 0, -angle);
	branchMesh03.rotation.set(angle, 0, 0);
	branchMesh04.rotation.set(-angle, 0, 0);
	
	scene.add( branchMesh01 );
	scene.add( branchMesh02 );
	scene.add( branchMesh03 );
	scene.add( branchMesh04 );

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
