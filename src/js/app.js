// Marzo 16 2021 http://stemkoski.github.io/Three.js/Shader-Animate.html
// Resolver por qué no puedo importar la imagen
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_cube.html
import '../styles/style.scss';
import gotham_black_regular from '../public/fonts/gotham_black_regular.json';
import cloudAsset from '../public/images/textures/cloud.png';
import waterAsset from '../public/images/textures/lavatile.jpg';

import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';

import fragmentShader from '../public/shaders/noise.glsl';
import vertexShader from '../public/shaders/vertex.glsl';

const scene = new THREE.Scene();
let  camera, renderer, controls;
// let geometry, material, mesh;
let clock, shaderMaterial, shaderMaterials, uniforms, letterPosition, textGeometry, textMesh, delta, isMobile;
let sphereMesh, sphereScale, customUniforms;
 


/**
  * Sets basic 3D Scene Elements
  */
function init(font) {

    // Checks if app is running on a mobile device
	isMobile = false;

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		isMobile = true;
	}

	camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 3.3;
 
	clock = new THREE.Clock();

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // controls
    controls = new OrbitControls( camera, renderer.domElement );

	// scene.add( new THREE.GridHelper(50, 5, '#000000'));
	// scene.add( new THREE.AxesHelper( 50 ));
	
	// setupShaderMaterials();
    // renderTextGeometry(font);

	// init Sphere Code with Noise Shader Material Texture
	const noiseTexture = new THREE.TextureLoader().load(cloudAsset);
	noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;

	const waterTexture = new THREE.TextureLoader().load(waterAsset);
	waterTexture.wrapS = waterTexture.wrapT = THREE.RepeatWrapping; 

	customUniforms = {
		baseTexture: 	{ type: "t", value: waterTexture },
		baseSpeed: 		{ type: "f", value: 0.01 },
		noiseTexture: 	{ type: "t", value: noiseTexture },
		noiseScale:		{ type: "f", value: 0.2 },
		alpha: 			{ type: "f", value: 0.8 },
		time: 			{ type: "f", value: 1.0 }
	};

	let sphereMaterial = new THREE.ShaderMaterial( {
		uniforms: customUniforms,
		vertexShader: vertexShader,
		fragmentShader: fragmentShader
	});

	// other material properties
	sphereMaterial.side = THREE.DoubleSide;
	sphereMaterial.transparent = true;
	// const material = new THREE.MeshBasicMaterial( { color: 0xffff00, map: noiseTexture } );

	const sphereGeometry = new THREE.SphereGeometry( 1, 32, 32 );
	sphereMesh = new THREE.Mesh( sphereGeometry, sphereMaterial );
	scene.add( sphereMesh );
	sphereScale = 0;

	window.addEventListener( 'resize', onWindowResize, false );

    animate();
}

/**
 * Updates objects on each frame
 */
function animate() {
 
    requestAnimationFrame( animate );
 

	delta = clock.getDelta();
	// uniforms.u_time.value += delta * 2;
	customUniforms.time.value += delta;

	// if(letterPosition < textMesh.children.length) {
	// 	rotateLetters();
	// }
	// else {
	// 	letterPosition = 0;
	// }
	// sphereScale += 0.0001;
    // sphereMesh.scale.set(sphereScale, sphereScale, sphereScale,);
	// textMesh.rotation.x += 0.04;
 
	controls.update();

    renderer.render( scene, camera );
}

/**
  * Handles window resize events
  */
function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

/*
* Load the JSON font and launch init
*/
const loader = new THREE.FontLoader();
let font = loader.parse(gotham_black_regular);
init(font);

/**
 * Loads the JSON font for the text geometry
 */
function renderTextGeometry(font){
	let theText = "glsl",
	letterWidth = 0,
	letterMesh;

	letterPosition = 0;

	textMesh = new THREE.Group();

	for(let i=0;i<theText.length;i++){
		textGeometry = new THREE.TextGeometry( theText[i], {
			font: font,
			size: 1,
			height: 0.25,
			curveSegments: 20
		});

		textGeometry.center();

		// letterMesh = new THREE.Mesh( textGeometry, new THREE.MeshBasicMaterial({wireframe: true, color : 0xFF0000}) );
		// letterMesh = new THREE.Mesh( textGeometry, new THREE.MeshNormalMaterial());
		letterMesh = new THREE.Mesh( textGeometry, shaderMaterial);
		letterMesh.position.x = i;

		textMesh.add( letterMesh)
	}

	textMesh.position.x = -2.4;
	textMesh.position.z = -5;
	// textMesh.position.z = 2;

	if(isMobile){
		textMesh.position.y = 3.5;
	}

	scene.add(textMesh);
}

/**
 * Rotates each letter on the Y Axis
 */
 function rotateLetters(){
	let rotationSpeed = 0.3,
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
 * Init Uniforms for shaderMaerial
 * TODO: create a shaderMaterial array to use several shaders on several materials
 */
// function setupShaderMaterials(){
function setupShaderMaterials(){
	shaderMaterials = [];
	
	uniforms = {
		u_time: { type: "f", value: 1.0 },
		u_resolution: { type: "v2", value: new THREE.Vector2() },
		u_mouse: { type: "v2", value: new THREE.Vector2() }
	};

	uniforms.u_resolution.value.x = window.innerWidth;
	uniforms.u_resolution.value.y = window.innerHeight;


	return new THREE.ShaderMaterial( {
		name: "Basic",
		uniforms: uniforms,
		vertexShader: vertexShader,
		fragmentShader: fragmentShader
	});
}
/*
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
	*/
// }