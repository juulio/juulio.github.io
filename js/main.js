/** Algoritmo https://rosettacode.org/wiki/Fractal_tree#JavaScript
  *
  * 1. Hacer que funciones estáticamente
  * 2. hacer una función "renderBranch", que va a dibujar/animar el tronco y cada rama
  * Hacer que funcione recursivamente
  * Agregar tweens
  * 2. hacer una función "renderTree"', que llama a renderBranch un montón de veces y le da parámetros, ojalá con objetos
  * 3. hacer un JSON, que contenga los parámetros que construyen el árbol
  * 4. hacer un generador/randomizador de ese JSON, para que cada pageLoad se haga uno diferente.
  * 5. aplicar shaderMaterials y hacer un despiche animado entre tronco, ramas,  hojas y flores
  */
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



initScene();

let woodMaterial = new THREE.MeshBasicMaterial( { color: 0x8B4513 } ),
	redMaterial = new THREE.MeshBasicMaterial( { color: 0xFF4513, wireframe: true } ),
	greenMaterial = new THREE.MeshBasicMaterial( { color: 0x00FF13 } );

let trunkOrigin = new THREE.Vector3(0, 0, 0),
	trunkRadius = 0.1,
	trunkHeight = 1,
	scalingFactor = 0.8;

renderTrunk(trunkOrigin, trunkRadius, trunkHeight, woodMaterial);

let branchOrigin = new THREE.Vector3( trunkOrigin.x, trunkOrigin.y, trunkOrigin.z ),
	branchMesh,
	branchParentMesh,
	angleX = Math.PI/4,
	angleZ = Math.PI/4,
	branchRadius = trunkRadius * scalingFactor,
	branchHeight = trunkHeight * scalingFactor;

renderBranch(branchOrigin, branchRadius, branchHeight, angleX, angleZ, trunkHeight, woodMaterial, redMaterial);
renderBranch(branchOrigin, branchRadius, branchHeight, -angleX, angleZ, trunkHeight, woodMaterial, redMaterial);
renderBranch(branchOrigin, branchRadius, branchHeight, angleX, -angleZ, trunkHeight, woodMaterial, redMaterial);
renderBranch(branchOrigin, branchRadius, branchHeight, -angleX, -angleZ, trunkHeight, woodMaterial, redMaterial);

/**
  * Render Trunk
  * @param {THREE.Vector3( x, y, z);} origin
  * @param {Number} radius
  * @param {Number} height
  * @param {Number} angle
  * CylinderBufferGeometry(radiusTop : Float, radiusBottom : Float, height : Float)
  */
function renderTrunk(origin, radius, height, material){
	let trunkGeometry = new THREE.CylinderBufferGeometry( radius, radius, height),
		mesh = new THREE.Mesh( trunkGeometry, material );
	
	mesh.position.set(origin.x, origin.y + height/2, origin.z);
	
	scene.add(mesh);
}

/**
  * Render Branch
  * @param {THREE.Vector3( x, y, z)} origin
  * @param {Number} radius
  * @param {Number} height
  * @param {Radian} angle
  * @param {Number} branchParentPositionY
  * CylinderBufferGeometry(radiusTop : Float, radiusBottom : Float, height : Float)
  */
function renderBranch(origin, radius, height, angleX, angleZ, branchParentPositionY, material, parentMaterial){
	let branchDiameter = radius * 2,
		branchGeometry = new THREE.CylinderBufferGeometry( radius, radius, height ),
		boxGeometry = new THREE.BoxBufferGeometry( branchDiameter, branchHeight, branchDiameter ),
		branchParentMesh = new THREE.Mesh( boxGeometry, parentMaterial ),
		branchMesh = new THREE.Mesh ( branchGeometry, material );

	branchMesh.position.set(origin.x, origin.y + height/2, origin.z);
	branchParentMesh.position.set(origin.x, branchParentPositionY, origin.z);
	branchParentMesh.rotation.set(angleX, 0, angleZ);

	branchParentMesh.add(branchMesh);
	scene.add(branchParentMesh);
}
//--------------------------------------------------------------------------------------







// let mesh = new THREE.Mesh( branchGeometry, woodMaterial );
// mesh.rotation.set(0, 0, angle);
// mesh.position.set(-(Math.cos(angle) * branchHeight / 2 ), trunkHeight+trunkHeight/(2*Math.PI/angle), 0);
// // mesh.position.set(-(Math.cos(angle) * branchHeight / 2 ), trunkHeight+branchHeight/2/2, 0);
// // scene.add(mesh);

// mesh = new THREE.Mesh( branchGeometry, woodMaterial );
// mesh.rotation.set(0, 0, -angle);
// mesh.position.set((Math.cos(angle) * branchHeight / 2 ), trunkHeight, 0);
// scene.add(mes3h);


// renderBranch(trunkOrigin, trunkRadius, trunkHeight, angle, scalingFactor, true);

// renderBranch(new THREE.Vector3(0, 0, 0), trunkRadius, trunkHeight, angle, scalingFactor, true);
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
// function renderBranch(origin, radius, height, angle, scalingFactor, isTrunk){
// 	let branchGeometry = new THREE.CylinderGeometry( radius, radius, height, 10, 10);
// 	// branchGeometry.translate(origin.x, origin.y, origin.z);
// 	let mesh = new THREE.Mesh( branchGeometry, woodMaterial );
// 	mesh.geometry.computeBoundingBox();
// 	mesh.scale.y = 0.01;

// 	if(!isTrunk) {
// 		mesh.rotation.set(0, 0, angle);
// 	}
	
// 	// mesh.rotation.set(0, 0, angle);

// 	scene.add( mesh );

// 	let tween = new TWEEN.Tween( mesh.scale )
//     .to( {
//     		y: scalingFactor
//     	}, 1600
//     )
//     .onUpdate(
//     	function(){
// 			let posX, posY;

// 			if (!isTrunk) {
// 				posX = height/2  * Math.cos(angle);
// 			}
// 			else {
// 				posX = origin.x;
// 			}

// 			posY = origin.y + mesh.scale.y*height/2


// 			// mesh.position.set(posX, posY, origin.z);
// 			mesh.position.set(origin.x, origin.y + mesh.scale.y*height/2, origin.z);
//     	}
//     )
//     .onComplete(
//     	function(){
// 			let x = height * Math.cos(angle) / 2;
// 			console.log(x);

// 			// mesh.position.set(x, origin.y + mesh.scale.y*height/2, origin.z);


//     		if(scalingFactor > 1){
// 				let	max = mesh.geometry.boundingBox.max;

//     			let newPos = new THREE.Vector3( origin.x, scalingFactor*2*max.y+origin.y, origin.z );
    			
//     			scalingFactor *= 0.8;
//     			height *= scalingFactor;
//     			angle *= scalingFactor;
				
// 				renderBranch(newPos, radius, height, angle, scalingFactor, false);
// 				// renderBranch(newPos, radius, height, -angle, scalingFactor, false);
//     		}
// 			// mesh.geometry.computeBoundingBox();
// 			// let	max = mesh.geometry.boundingBox.max,
// 			// 	box = new THREE.BoxHelper( mesh, 0xf00f00 );
// 			// scene.add( box );

// 			// let boxGeometry = new THREE.BoxGeometry(1, 1, 1);
// 			// let maxBoxMesh = new THREE.Mesh( boxGeometry, maxBoxMaterial);

// 			// maxBoxMesh.position.set(origin.x, scalingFactor*2*max.y+origin.y, origin.z);
// 			// // maxBoxMesh.position.set(origin.x  , scalingFactor  * max.y, origin.z );
// 			// // maxBoxMesh.position.set(origin.x  , scalingFactor  * max.y, origin.z );
// 			// scene.add(maxBoxMesh);

// 			// console.log('max.y ' + max.y);
// 			// console.log('scalingFactor ' + scalingFactor);
// 			// console.log('origin.y ' + origin.y);
// 			// console.log('min = (' + min.x + ', ' + min.y + ', ' + min.z + ')');
// 			// console.log('maxBoxMesh.position = Vec3(' + maxBoxMesh.position.x + ', ' + maxBoxMesh.position.y + ', ' + maxBoxMesh.position.z + ')');

//     		// console.log(origin.y + scalingFactor*height);
//     	}
//     );
//     tween.start();
// }






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

	camera.position.set(0, 1, 3);
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
 * render Tree 
 * @param {THREE.Vector3( x, y, z);} origin
 * @param {Number} trunkRadius
 * @param {Number} trunkHeight
 * @param {Number} angle
 * CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer);
 * mesh.rotation.set(0, 90, 180);
 */
 function renderTree(origin, trunkRadius, trunkHeight, angle){
 	

 }



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