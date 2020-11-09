import * as THREE from '../js/vendor/three.module.js';
import { OrbitControls } from '../js/vendor/OrbitControls.js';
import Branch from './branch.js';

import {
	renderer,
	getCamera,
	getAmbientLight,
	getGridHelper,
	getAxesHelper
} from '../js/scene.js';

const camera = getCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const scene = new THREE.Scene();
const controls = new OrbitControls( camera, renderer.domElement );



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

let root = new Branch(origin, radius, height, angleX, angleZ, fractalRatio);

tree[0] = root;

function drawTree(){
	// scene.add(root.getBranchMesh());
	for (let i = 0; i < tree.length; i++) {
		scene.add(tree[i].getBranchMesh());
		//tree[i].jitter();
  	}
}

let stats;

initScene();
animate();

window.addEventListener("click", function(){
    if(count < 4) {
		for (let i=tree.length-1; i >= 0; i--){
			if(!tree[i].finished){
				tree.push(tree[i].branchFrontRight());
				// tree.push(tree[i].branchFrontLeft());
				// tree.push(tree[i].branchRearRight());
				// tree.push(tree[i].branchRearLeft());
			}
			tree[i].finished = true;
		}
		console.log(tree);
		count++;
    }

});
//--------------------------------------------------------------------------------------------------------------


// let tree = renderTree(origin, radius, height, angleX, angleZ, woodMaterial, redMaterial, fractalRatio, level, limit)

// scene.add(tree);

/**
  * Render Branch
  * @param {THREE.Vector3( x, y, z)} origin
  * @param {Number} radius
  * @param {Number} height
  * @param {Radian} angle
  * @param {THREE.MeshBasicMaterial} material
  * @param {Number} level
  * @param {Number} limit
  * @param {Number} animationTime miliseconds
  * CylinderBufferGeometry(radiusTop : Float, radiusBottom : Float, height : Float)
  */
function renderTree(origin, radius, height, angleX, angleZ, material, parentMaterial, scalingFactor, level, limit){
	let branchDiameter = radius * 2,
		boxGeometry = new THREE.BoxBufferGeometry( branchDiameter, height, branchDiameter ),
		branchParentMesh = new THREE.Mesh( boxGeometry, parentMaterial ),

		branchGeometry = new THREE.CylinderBufferGeometry( radius, radius, height ),
		branchMesh = new THREE.Mesh ( branchGeometry, material ),

		leafGeometry = new THREE.SphereGeometry( 0.1, 32, 32 ),
		leafMesh = new THREE.Mesh ( leafGeometry, greenMaterial);

	leafMesh.position.set(origin.x, height, origin.z);

	branchMesh.position.set(origin.x, height/2, origin.z);

	branchParentMesh.add(branchMesh);
	branchParentMesh.scale.y = 0;
	branchParentMesh.position.set(origin.x, origin.y, origin.z);

	if(level > 0){
		branchParentMesh.rotation.set(angleX, 0, angleZ);
	}

	let tween = new TWEEN.Tween( branchParentMesh.scale )
    .to( {
    		y: 1
    	}, 2000
    )
    .onComplete(
    	function(){
    		if(level > limit){
    			branchParentMesh.add(leafMesh);
    			let randValue = THREE.Math.randFloat(-0.1, 0.1);
    			let leafTween = new TWEEN.Tween(leafMesh.position).to({ x : leafMesh.position.x + randValue }).repeat( Infinity ).start();
    		}
    	}
    );
    tween.start();

	if(level <= limit) {
		level++;
		origin = new THREE.Vector3( origin.x, height, origin.z);

		radius *= scalingFactor;
		height *= scalingFactor;

		angleX *= scalingFactor;
		angleZ *= scalingFactor;
		// animationTime *= 2;
		// scalingFactor *= scalingFactor;

		branchParentMesh.add(renderTree(origin, radius, height, angleX, angleZ, material, parentMaterial, scalingFactor, level, limit));
		branchParentMesh.add(renderTree(origin, radius, height, angleX, -angleZ, material, parentMaterial, scalingFactor, level, limit));
		branchParentMesh.add(renderTree(origin, radius, height, -angleX, angleZ, material, parentMaterial, scalingFactor, level, limit));
		branchParentMesh.add(renderTree(origin, radius, height, -angleX, -angleZ, material, parentMaterial, scalingFactor, level, limit));
	}

	return branchParentMesh;
}

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
	scene.add( getGridHelper(50, 5, '#000000') );

	//The X axis is red. The Y axis is green. The Z axis is blue.
	scene.add( getAxesHelper(50) );
	// scene.add( getAmbientLight(0x404040) );

	camera.position.set(0, 2, 2.7);
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

	drawTree();

    renderer.render( scene, camera );

    stats.end();
}

const exports = {};

exports.scene = scene;

export default exports;
