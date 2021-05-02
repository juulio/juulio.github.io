// Marzo 16 2021 http://stemkoski.github.io/Three.js/Shader-Animate.html
// Resolver por qué no puedo importar la imagen
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_cube.html
import '../styles/style.scss';
import gotham_black_regular from '../public/fonts/gotham_black_regular.json';
import cloudAsset from '../public/images/textures/cloud.png';
import lavatileAsset from '../public/images/textures/lavatile.jpg';
import greenTextureAsset from '../public/images/textures/greenTexture.png';
import brownTextureAsset from '../public/images/textures/brownTexture.png';
import volcanoHeightmap from '../public/images/textures/volcano-heightmap.png'
import sand512 from '../public/images/textures/sand-512.jpg'
import rock512 from '../public/images/textures/rock-512.jpg'
import snow512 from '../public/images/textures/snow-512.jpg'
import volcanic256 from '../public/images/textures/volcanic-256.jpg'

import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';

import vertexShader from '../public/shaders/vertex.glsl';
import lavaFragmentShader from '../public/shaders/noise.glsl';
import ringFragmentShader from '../public/shaders/ringTextureFragmentShader.glsl';
import lunarFragmentShader from '../public/shaders/lunarTextureFragmentShader.glsl';
import heightmapFragmentShader from '../public/shaders/heightmapFragmentShader.glsl';
import heightmapVertexShader from '../public/shaders/heightmapVertexShader.glsl';


const scene = new THREE.Scene();
let  camera, renderer, controls;
// let geometry, material, mesh;
let clock, shaderMaterial, shaderMaterials, uniforms, letterPosition, textGeometry, textMesh, delta, isMobile;
let lavaMaterial;
let sphereMesh, sphereScale, customUniforms;
let ringMesh, ringUniforms;


/**
  * Sets basic 3D Scene Elements
  */
function init(font) {

    // Checks if app is running on a mobile device
	isMobile = false;

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		isMobile = true;
	}

	let SCREEN_WIDTH = window.innerWidth,
		SCREEN_HEIGHT = window.innerHeight,
		VIEW_ANGLE = 45,
		ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT,
		NEAR = 0.1,
		FAR = 20000;
	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	scene.add(camera);
	camera.position.set(0,100,900);
	camera.lookAt(scene.position);

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    controls = new OrbitControls( camera, renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );

	clock = new THREE.Clock();

	// Mountain Textures
	// texture used to generate "bumpiness"
	let bumpTexture = new THREE.TextureLoader().load( volcanoHeightmap );
	bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping; 
	// magnitude of normal displacement
	let bumpScale   = 200.0;
	
	let sandyTexture = new THREE.TextureLoader().load( sand512 );
	sandyTexture.wrapS = sandyTexture.wrapT = THREE.RepeatWrapping; 
	
	let rockyTexture = new THREE.TextureLoader().load( rock512 );
	rockyTexture.wrapS = rockyTexture.wrapT = THREE.RepeatWrapping; 
	
	let volcanicTexture = new THREE.TextureLoader().load( volcanic256 );
	volcanicTexture.wrapS = volcanicTexture.wrapT = THREE.RepeatWrapping;

	var snowyTexture = new THREE.TextureLoader().load( snow512 );
	snowyTexture.wrapS = snowyTexture.wrapT = THREE.RepeatWrapping; 

	// use "this." to create global object
	customUniforms = {
		bumpTexture:		{ type: "t", value: bumpTexture },
		bumpScale:	    	{ type: "f", value: bumpScale },
		sandyTexture:		{ type: "t", value: sandyTexture },
		// grassTexture:		{ type: "t", value: grassTexture },
		rockyTexture:		{ type: "t", value: rockyTexture },
		volcanicTexture:	{ type: "t", value: volcanicTexture },
		snowyTexture:	{ type: "t", value: snowyTexture }
	};
	
	let volcanicMaterial = new THREE.ShaderMaterial( 
	{
	    uniforms: customUniforms,
		vertexShader:   heightmapVertexShader,
		fragmentShader: heightmapFragmentShader,
		// side: THREE.DoubleSide
	}   );
		
	let planeGeo = new THREE.PlaneGeometry( 1000, 1000, 100, 100 );
	var plane = new THREE.Mesh(	planeGeo, volcanicMaterial );
	plane.rotation.x = -Math.PI / 2;
	plane.position.y = -100;
	scene.add( plane );





	// scene.add( new THREE.AxesHelper( 50 ));
	
	// setupShaderMaterials();
    // renderTextGeometry(font);

	// const planeGeometry = new THREE.PlaneGeometry( 50, 50, 32 );
	// const planeMaterial = new THREE.MeshBasicMaterial( {color: 0x585858, side: THREE.DoubleSide} );
	// const plane = new THREE.Mesh( planeGeometry, planeMaterial );
	// plane.rotation.x = Math.PI / 2;

	// scene.add( plane );

	// lavaMaterial = setupLavaMaterial();
	renderMoon();
	// renderVolcano();
	renderRings();

    animate();
}

/**
 * Setup uniforms and attributes for custom shader material 
 */
let setupLavaMaterial = () => {
	const noiseTexture = new THREE.TextureLoader().load(cloudAsset);
	noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;

	const lavaTexture = new THREE.TextureLoader().load(lavatileAsset);
	lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping;

	customUniforms = {
		baseTexture: { type: "t", value: lavaTexture },
		baseSpeed: { type: "f", value: 0.06 },
		noiseTexture: { type: "t", value: noiseTexture },
		noiseScale: { type: "f", value: 0.2 },
		alpha: { type: "f", value: 0.7 },
		time: { type: "f", value: 1.0 }
	};

	let material = new THREE.ShaderMaterial({
		uniforms: customUniforms,
		vertexShader: vertexShader,
		fragmentShader: lavaFragmentShader
	});

	// other material properties
	material.side = THREE.DoubleSide;
	material.transparent = true;

	return material;
}

/**
 * Render volcano cone Mesh with lava material 
 */
let renderVolcano = () => {
	let volcanoHeight = 3;
	const geometry = new THREE.ConeGeometry( 4, volcanoHeight, 32, 32);
	const cone = new THREE.Mesh( geometry, lavaMaterial );
	cone.position.y = volcanoHeight / 2 ;
	scene.add( cone );
}

/**
 * Render planet Sphere Element
 */
let renderMoon = () => {
	const sphereGeometry = new THREE.SphereGeometry(27, 32, 32);
	const resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);

	const uniforms = {
		"time": { value: 1.0 },
		"resolution": { type: 'v2', value: resolution },
	};

	const material = new THREE.ShaderMaterial( {
		uniforms: uniforms,
		vertexShader: vertexShader,
		fragmentShader: lunarFragmentShader,
		side:THREE.DoubleSide
	} );

	material.wrapS = material.wrapT = THREE.RepeatWrapping;


	sphereMesh = new THREE.Mesh(sphereGeometry, material);
	sphereMesh.position.y = 180;

	scene.add(sphereMesh);
	sphereScale = 0;
}

/**
 * Render planet Sphere Element
 */
 let renderRings = () => {
	const geometry = new THREE.TorusGeometry( 40, 3, 16, 100 );

	const textureLoader = new THREE.TextureLoader();
	const resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);
	ringUniforms = {
		"time": { value: 1.0 },
		"resolution": { type: 'v2', value: resolution },
		iChannel0:  { type: 't', value: textureLoader.load(greenTextureAsset ) },
		iChannel1:  { type: 't', value: textureLoader.load(brownTextureAsset ) }
	};

	ringUniforms[ "iChannel0" ].value.wrapS = ringUniforms[ "iChannel0" ].value.wrapT = THREE.RepeatWrapping;
	ringUniforms[ "iChannel1" ].value.wrapS = ringUniforms[ "iChannel1" ].value.wrapT = THREE.RepeatWrapping;

	// const size = 0.65;

	const material = new THREE.ShaderMaterial( {
		uniforms: ringUniforms,
		vertexShader: vertexShader,
		fragmentShader: ringFragmentShader,
		side:THREE.DoubleSide
	} );

	ringMesh= new THREE.Mesh( geometry, material );
	ringMesh.position.y = 180;
	scene.add( ringMesh );
 }

/**
 * Updates objects on each frame
 */
function animate() {
 
    requestAnimationFrame( animate );
 

	delta = clock.getDelta();
	// uniforms.u_time.value += delta * 2;
	// customUniforms.time.value += delta;

	ringUniforms[ 'time' ].value = performance.now() / 1000;
	ringUniforms[ 'time' ].value += delta / 2;
	ringMesh.rotation.x += 0.004;
	ringMesh.rotation.y += 0.002;
	
	// sphereScale += 0.0001;
    // sphereMesh.scale.set(sphereScale, sphereScale, sphereScale,);
 
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