	/** Algoritmo https://rosettacode.org/wiki/Fractal_tree#JavaScript
  *
  * ✓ 1. Hacer que funciones estáticamente
  * ✓ 2. hacer una función "renderBranch", que va a dibujar/animar el tronco y cada rama
  * ✓ 3. hacer una función "renderTree"', que llama a renderBranch un montón de veces y le da parámetros, ojalá con objetos
  * ✓ 4. Hacer que funcione recursivamente
  * 5. Arreglar ángulo a la función del trunk para que se comporte "igual" que los branches. El tronco debería ser capaz de crecer en cualquier dirección
  * 6. Agregar tweens
  * 7. hacer un JSON, que contenga los parámetros que construyen el árbol
  * 8. hacer un generador/randomizador de ese JSON, para que cada pageLoad se haga uno diferente.
  * 9. aplicar shaderMaterials y hacer un despiche animado entre tronco, ramas,  hojas y flores
  */

import * as THREE from '../js/vendor/three.module.js';
import { OrbitControls } from '../js/vendor/OrbitControls.js';

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
let stats;

initScene();
animate();

let woodMaterial = new THREE.MeshBasicMaterial( { color: 0x8B4513 } ),
	redMaterial = new THREE.MeshBasicMaterial( { transparent: true, wireframe: true } ),
	greenMaterial = new THREE.MeshBasicMaterial( { transparent: true, color: 0x00FF13 } );

redMaterial.opacity = 0;
greenMaterial.opacity = 0.6;

let origin = new THREE.Vector3(0, 0, 0),
	radius = 0.1,
	height = 1,
	fractalRatio = 0.8,
	angleX = Math.PI/4,
	angleZ = Math.PI/5,
	level = 0,
	limit = 3;

let branchGeometries = [];//We store Geometries for branches here so we can reuse them without calling the constructor inside the recursive function.
let boxGeometries = [];//Same for box geometries.
let leafGeometry = new THREE.SphereGeometry( 0.1, 32, 32 );//Leaf geometry is always the same regardless of the level.

/**
  * Generates geometries
  */
function generateGeometries(){
	let top = (limit===1)? 3:limit*2;//If the limit is set to one things go wrong. This fixes it setting it to three... Lazy fix.
	for( let i = 0; i<top; i++){
		let [r,h] = [radius,height].map((param)=>(param* Math.pow(fractalRatio,i)));//Get new parameters for each iteration
		branchGeometries.push(new THREE.CylinderBufferGeometry( r, r, h ));
		boxGeometries.push(new THREE.BoxBufferGeometry( r*2, h, r*2 ));
	}
}

//Generate the geometries before rendering the tree
generateGeometries();


let startTimestamp = Date.now();//Timepstamp to meausre rendering time
let tree = renderTree(origin, radius, height, angleX, angleZ, woodMaterial, redMaterial, fractalRatio, level, limit)
console.log(`Rendering the tree took: ${(Date.now()-startTimestamp)/1000} seconds. Using a level limit of:${limit}` );//Log rendering time in seconds.

scene.add(tree);

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
	
	//Reuse geometries, don't use geometry constructors here.
	let branchParentMesh = new THREE.Mesh( boxGeometries[level], parentMaterial ),
	branchMesh = new THREE.Mesh ( branchGeometries[level], material ),
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
				let randValue = THREE.Math.randFloat(-0.1, 0.1),
				// leafTweenFront = new TWEEN.Tween(leafMesh.position).to({ x : leafMesh.position.x + randValue }).repeat( Infinity ).start(),
				leafTweenFront = new TWEEN.Tween(leafMesh.position).to({ x : leafMesh.position.x + randValue }),
				leafTweenBack = new TWEEN.Tween(leafMesh.position).to({ x : leafMesh.position.x - randValue });

				leafTweenFront.chain(leafTweenBack);
				leafTweenBack.chain(leafTweenFront);
				leafTweenFront.start();

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

	camera.position.set(0, 3, 3.5);
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


//----------------- Start Tweens 
// trunkTween.chain(branchTween);
// trunkTween.start();