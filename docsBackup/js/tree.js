	/** Algoritmo https://rosettacode.org/wiki/Fractal_tree#JavaScript
  *
  * ✓ 1. Hacer que funciones estáticamente
  * ✓ 2. hacer una función "renderBranch", que va a dibujar/animar el tronco y cada rama
  * ✓ 3. hacer una función "renderTree"', que llama a renderBranch un montón de veces y le da parámetros, ojalá con objetos
  * ✓ 4. Hacer que funcione recursivamente
  * 5. Arreglar ángulo a la función del trunk para que se comporte "igual" que los branches. El tronco debería ser capaz de crecer en cualquier dirección
  * ✓ 6. Agregar tweens
  * 7. hacer un JSON, que contenga los parámetros que construyen el árbol
  * 8. hacer un generador/randomizador de ese JSON, para que cada pageLoad se haga uno diferente.
  * 9. aplicar shaderMaterials y hacer un despiche animado entre tronco, ramas,  hojas y flores
  */

import * as THREE from '../js/vendor/three.module.js';
import { OrbitControls } from '../js/vendor/OrbitControls.js';

import {
	renderer,
	getCamera,
	getClock,
	getAmbientLight,
	getGridHelper,
	getAxesHelper
} from '../js/scene.js';


// import fragment from '../shaders/fragment.glsl';
// import vertex from '../shaders/vertex.glsl';

//--------------------------------------------------------------------------------
const camera = getCamera(75, 1.5, .1, 50);
// const camera = getCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const clock = getClock();
const scene = new THREE.Scene();
const controls = new OrbitControls( camera, renderer.domElement );
controls.enablePan = true;
controls.enableZoom = true;
		
let stats, shaderMaterials, loader, uniforms, letterPosition, textGeometry, textMesh, delta, isMobile;

let woodMaterial = new THREE.MeshBasicMaterial( { color: 0x8B4513 } ),
	redMaterial = new THREE.MeshBasicMaterial( { transparent: true, wireframe: true } ),
	greenMaterial = new THREE.MeshBasicMaterial( { transparent: true, color: 0x00FFFF } );

redMaterial.opacity = 0;
greenMaterial.opacity = 0.6;

// let origin = new THREE.Vector3(0, 0, 0),
// 	radius = 0.1,
// 	height = 1,
// 	fractalRatio = 0.8, // fractal Ratio
// 	angleX = Math.PI/4,
// 	angleZ = Math.PI/5,
// 	level = 0,
// 	limit = 1;

// let tree = renderTree(origin, radius, height, angleX, angleZ, woodMaterial, redMaterial, fractalRatio, level, limit);
// anotherThree = renderTree(new THREE.Vector3(0, 0, 0), radius, height, angleX, angleZ, woodMaterial, redMaterial, fractalRatio, level, limit);
// scene.add(tree);
// scene.add(anotherThree);

const planeGeometry = new THREE.PlaneGeometry( 0.4, 0.4, 32 );

let material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const yellowPlane = new THREE.Mesh( planeGeometry, material );
yellowPlane.rotation.x = Math.PI / 2;
scene.add( yellowPlane );

// material = new THREE.MeshBasicMaterial( {color: 0xff0000, side: THREE.DoubleSide} );
// const redPlane = new THREE.Mesh( planeGeometry, material );
// redPlane.rotation.x = Math.PI / 2;
// redPlane.position.set(-7, 0, 0);
// scene.add( redPlane );

/**
  * Render Tree
  * @param {THREE.Vector3( x, y, z)} origin
  * @param {Number} radius
  * @param {Number} height // length of each Branch
  * @param {Radian} angleX
  * @param {Radian} angleZ
  * @param {THREE.MeshBasicMaterial} material
  * @param {THREE.MeshBasicMaterial} parentMaterial
  * @param {Number} level
  * @param {Number} limit
  * @param {Number} animationTime miliseconds
  * CylinderBufferGeometry(radiusTop : Float, radiusBottom : Float, height : Float)
  */
function renderTree(origin, radius, height, angleX, angleZ, material, parentMaterial, scalingFactor, level, limit){
	let branchDiameter = radius * 2,
		boxGeometry = new THREE.BoxBufferGeometry( branchDiameter, height, branchDiameter ),
		branchParentMesh = new THREE.Mesh( boxGeometry, parentMaterial ), // for bounding boxes

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
    	() => {
			// console.log('level ' + level);
			// console.log('limit ' + limit);
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
// --------------------------------------------------------------------------------------------

/**
  * Render New Tree 2021
  * @param {THREE.Vector3( x, y, z)} origin
  * @param {Number} limit // to control recursion
  * @param {Number} radius
  * @param {Number} height // length of the trunk
  * @param {Number} scalingFactor // fractal Ratio, should be < 1.
  */
// function drawTree(origin, radius, height, limit, scalingFactor, angle) {
function drawTree(origin, radius, height, scalingFactor, angle) {
	let originY = 0;
	// console.log("origin: " + origin.x + ' ' + origin.y + ' ' +origin.z + ' ');
	drawBranch(origin, radius, height, woodMaterial, angle, angle);
	
	if (height > 0.5 ){
		radius *= scalingFactor;
		height *= scalingFactor;
		angle *= scalingFactor;
		angle += Math.PI/8;

		originY = height * Math.cos(angle);

		// origin = new THREE.Vector3(origin.x, height, origin.z);
		origin = new THREE.Vector3(origin.x, height + originY, origin.z);


		// console.log('height: ' + height);
		drawTree(origin, radius, height, scalingFactor, angle);
		drawTree(origin, radius, height, scalingFactor, -angle);
		// drawTree(origin, radius, height, scalingFactor, angle);
		// drawTree(origin, radius, height, scalingFactor, angle);
	}


}

/**
  * branch
  * @param {THREE.Vector3( x, y, z)} origin
  * @param {Number} radius
  * @param {Number} height // length of each Branch
  * @param {THREE.MeshBasicMaterial} material
  * @param {Radian} angleX
  * @param {Radian} angleZ
  */
function drawBranch(origin, radius, height, material, angleX, angleZ){
	// console.log('angleX: ' + angleX + ' angleZ: ' + angleZ);
	let redMaterial = new THREE.MeshBasicMaterial( { color: 0xFF0000, wireframe: true } );
	
	let branchDiameter = radius * 2,
		boxGeometry = new THREE.BoxBufferGeometry( branchDiameter, height, branchDiameter ),
		branchParentMesh = new THREE.Mesh( boxGeometry, redMaterial ), // for bounding boxes
		branchGeometry = new THREE.CylinderBufferGeometry( radius, radius, height ),
		branchMesh = new THREE.Mesh ( branchGeometry, material );

	branchMesh.position.set(origin.x, height/2, origin.z);
	branchParentMesh.add(branchMesh);
	branchParentMesh.position.set(origin.x, origin.y, origin.z);
	branchParentMesh.rotation.set(angleX, 0, angleZ);
	console.log(branchParentMesh.position);
	scene.add(branchParentMesh);
}

let treeOrigin = new THREE.Vector3(0, 0, 0),
	radius = 0.04,
	height = 1.01,
	angle = 0,
	fractalRatio = 0.7;

// drawsTree(treeOrigin, radius, height, fractalRatio, angle);


/**
 * Init Uniforms for shaderMaerial
 * TODO: create a shaderMaterial array to use several shaders on several materials
 */
function setupShaderMaterials(){
	shaderMaterials = [];

	uniforms = {
		u_time: { type: "f", value: 1.0 },
		u_resolution: { type: "v2", value: new THREE.Vector2() },
		u_mouse: { type: "v2", value: new THREE.Vector2() }
	};

	uniforms.u_resolution.value.x = window.innerWidth;
	uniforms.u_resolution.value.y = window.innerHeight;

	shaderMaterials.push(
		new THREE.ShaderMaterial( {
			name: "Voronoi",
			uniforms: uniforms,
			vertexShader: document.getElementById( 'vertexShader' ).textContent,
			fragmentShader: document.getElementById( 'voronoiFragmentShader' ).textContent
		})
	);

	shaderMaterials.push(
		new THREE.ShaderMaterial( {
			name: "Jaguar Texture",
			uniforms: uniforms,
			vertexShader: document.getElementById( 'vertexShader' ).textContent,
			fragmentShader: document.getElementById( 'jaguarFragmentShader' ).textContent
		})
	);

	shaderMaterials.push(
		new THREE.ShaderMaterial( {
			name: "Red Pulse",
			uniforms: uniforms,
			vertexShader: document.getElementById( 'vertexShader' ).textContent,
			fragmentShader: document.getElementById( 'redPulseFragmentShader' ).textContent
		})
	);

	shaderMaterials.push(
		new THREE.ShaderMaterial( {
			name: "Black & White Matrix",
			uniforms: uniforms,
			vertexShader: document.getElementById( 'vertexShader' ).textContent,
			fragmentShader: document.getElementById( 'bwMatrixFragmentShader' ).textContent
		})
	);

	shaderMaterials.push(
		new THREE.ShaderMaterial( {
			name: "Rotated Tiles",
			uniforms: uniforms,
			vertexShader: document.getElementById( 'vertexShader' ).textContent,
			fragmentShader: document.getElementById( 'rotatedTilesFragmentShader' ).textContent
		})
	);

	shaderMaterials.push(
		new THREE.ShaderMaterial( {
			name: "Noise",
			uniforms: uniforms,
			vertexShader: document.getElementById( 'vertexShader' ).textContent,
			fragmentShader: document.getElementById( 'noiseFragmentShader' ).textContent
		})
	);

	shaderMaterials.push(
		new THREE.ShaderMaterial( {
			name: "Simplex Grid",
			uniforms: uniforms,
			vertexShader: document.getElementById( 'vertexShader' ).textContent,
			fragmentShader: document.getElementById( 'simplexGridFragmentShader' ).textContent
		})
	);

	shaderMaterials.push(
		new THREE.ShaderMaterial( {
			name: "Displacement",
			uniforms: uniforms,
			vertexShader: document.getElementById( 'vertexShader' ).textContent,
			fragmentShader: document.getElementById( 'displacementFragmentShader' ).textContent
		})
	);
}

/**
 * Loads the JSON font for the text geometry
 */
function renderTextGeometry(font){
	let theText = "juulio",
	letterWidth = 0,
	letterMesh;

	letterPosition = 0;

	textMesh = new THREE.Group();

	for(let i=0;i<theText.length;i++){
		textGeometry = new THREE.TextGeometry( theText[i], {
			font: font,
			size: 1.15,
			height: 0.25,
			curveSegments: 20
		});

		textGeometry.center();

		letterMesh = new THREE.Mesh( textGeometry, shaderMaterials[i] );

		letterMesh.position.x = i;

		textMesh.add( letterMesh)
	}

	textMesh.position.x = -4;
	textMesh.position.y = 2;

	if(isMobile){
		textMesh.position.y = 3.5;
	}

	scene.add(textMesh);
}

/**
 * Rotates each letter on the Y Axis
 */
function rotateLetters(){
	let nextLetterRotationY,
	rotationSpeed = 0.22,
	currentLetterRotationY = textMesh.children[letterPosition].rotation.y;

	// Rotate Current Letter on the Y Axis
	textMesh.children[letterPosition].rotation.y += rotationSpeed;

	if(textMesh.children[letterPosition].rotation.y >= 6.28) {
		letterPosition++;
	}

	if(letterPosition < textMesh.children.length-1) {
		if(currentLetterRotationY >= 2) {
			textMesh.children[letterPosition + 1].rotation.y += rotationSpeed;
		}
	}
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
function initScene(font){
	/**
	 * Render grid and XYZ Axis Helpers
	 * The X axis is red. The Y axis is green. The Z axis is blue.
	 */
	// scene.add( getGridHelper(50, 5, '#000000') );
	// scene.add( getAxesHelper(50) );
	// scene.add( getAmbientLight(0x404040) );

	// Verifies if app is running on a mobile device
	isMobile = false;

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		isMobile = true;
	}
	
	// camera.position.set(0, 2.2, 2);
	// camera.lookAt(0, 0, 0);
	// let canvasContainer = document.getElementById('canvasContainer');
	// canvasContainer.appendChild( renderer.domElement );
	document.body.appendChild( renderer.domElement );

	showStats();

	setupShaderMaterials();

	renderTextGeometry(font);

	window.addEventListener( 'resize', onWindowResize, false );

	animate();
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

	delta = clock.getDelta();
	uniforms.u_time.value += delta * 2;

	if(letterPosition < textMesh.children.length) {
		rotateLetters();
	}

	controls.update();

    renderer.render( scene, camera );
		
    stats.end();
}

/*
* Load the JSON font and call init
*/
loader = new THREE.FontLoader();
loader.load('./fonts/gotham_black_regular.json', function(font){
	initScene(font);
});