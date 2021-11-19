// Marzo 16 2021 http://stemkoski.github.io/Three.js/Shader-Animate.html
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_cube.html
import '../scss/styles.scss';
import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';

// import gotham_black_regular from '../public/fonts/gotham_black_regular.json';
import cloudAsset from '../public/images/textures/cloud.png';
import lavatileAsset from '../public/images/textures/lavatile.jpg';
import moonTextureAsset from '../public/images/textures/moonTexture.jpg'
import volcanoHeightmap from '../public/images/textures/volcano-heightmap512x512.png'
import sand512 from '../public/images/textures/sand-512.jpg'
import rock512 from '../public/images/textures/rock-512.jpg'
import snow512 from '../public/images/textures/snow-512.jpg'
import volcanic256 from '../public/images/textures/volcanic-256.jpg'

import vertexShader from '../public/shaders/vertex.glsl';
import lavaFragmentShader from '../public/shaders/noise.glsl';
import heightmapFragmentShader from '../public/shaders/heightmapFragmentShader.glsl';
import heightmapVertexShader from '../public/shaders/heightmapVertexShader.glsl';

// Required THREEjs stuff
import { MeshBasicMaterial, Vector3 } from 'three';

// import all 3d modules
import {renderFerrisWheel, rotateFerrisWheel} from './modules/ferrisWheel';
import renderSkybox from './modules/skyBox';
import Particle from './modules/particle';
import ParticleSystem from './modules/particleSystem';
import {renderMoon, rotateMoon} from './modules/moon';
import theText from './modules/text';

// THREEjs basic Scene stuff
const scene = new THREE.Scene();
let camera, renderer, controls;
let shaderMaterial, shaderMaterials, uniforms, letterPosition, textGeometry, textMesh, delta, isMobile;
let lavaMaterial;
let customUniforms, volcanoMesh;
let particleSystem;

/**
  * Init basic 3D Scene Elements
  */
let init = () => {

	(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})()

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
	camera.position.set(0, 30, 40);
	// camera.lookAt(scene.position);

	 // add subtle ambient lighting
	 var ambientLight = new THREE.AmbientLight(0x0c0c0c);
	 scene.add(ambientLight);

	// scene.fog = new THREE.FogExp2( 0xffd1b5, 0.0002 );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor ( "#ffffff");
    document.body.appendChild( renderer.domElement );
    controls = new OrbitControls( camera, renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );

	// scene.add( new THREE.AxesHelper( 500 ));
	// scene.add( new THREE.GridHelper( 500, 10 ));
	
	// setupShaderMaterials();
    // renderTextGeometry(font);
        
	// lavaMaterial = setupLavaMaterial();
	// scene.add(renderFloor());
	// scene.add(renderSkybox());
	scene.add(renderMoon(new Vector3(-190, 190, 60), 20, 6));
	// scene.add(renderVolcano());
	scene.add(renderFerrisWheel(new Vector3(-140, 0, 260), 30, 2));
	particleSystem = new ParticleSystem(-10, 120, -36, 2);
	let text = new theText()
	scene.add(text.render3dText('webgl'));
    animate();
}

/**
 * Setup uniforms and attributes for custom shader material 
 * @returns THREE.
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
 * @returns THREE.Mesh Volcano
 */
let renderVolcano = () => {
	let volcanoHeight = 300;
	const geometry = new THREE.ConeGeometry( 14, volcanoHeight, 32, 32);
	const cone = new THREE.Mesh( geometry, lavaMaterial );
	cone.position.y = volcanoHeight / 2 ;
	// scene.add( cone );

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

	const snowyTexture = new THREE.TextureLoader().load( snow512 );
	snowyTexture.wrapS = snowyTexture.wrapT = THREE.RepeatWrapping; 

	// use "this." to create global object
	customUniforms = {
		bumpTexture:		{ type: "t", value: bumpTexture },
		bumpScale:	    	{ type: "f", value: bumpScale },
		sandyTexture:		{ type: "t", value: sandyTexture },
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
		
	let planeGeo = new THREE.PlaneGeometry( 400, 400, 100, 100 );
	volcanoMesh = new THREE.Mesh(	planeGeo, volcanicMaterial );
	volcanoMesh.rotation.x = -Math.PI / 2;
	volcanoMesh.rotation.x = -Math.PI / 2;
	volcanoMesh.position.x = -60;
	volcanoMesh.position.y = -60;
	return volcanoMesh;
}

/**
 * Renders Plane Mesh floor 
 * @returns THREE.Mesh Floor
 */
let renderFloor = () => {
	const planeGeometry = new THREE.PlaneGeometry( 800, 800, 32 );

	const moonTexture = new THREE.TextureLoader().load(moonTextureAsset);
	moonTexture.wrapS = moonTexture.wrapT = THREE.RepeatWrapping;

	const moonMaterial = new THREE.MeshBasicMaterial({
		map: moonTexture,
		side: THREE.DoubleSide 
	});

	const floorMesh = new THREE.Mesh( planeGeometry, moonMaterial );
	floorMesh.rotation.x = Math.PI / 2;

	return floorMesh;
}

/**
 * Updates objects on each frame
 */
let animate = () => {
 
    requestAnimationFrame( animate );
	
	// volcanoMesh.rotation.z += 0.001;
	rotateFerrisWheel();
	scene.add(particleSystem.addParticle());
	particleSystem.run();
	rotateMoon();
	// console.log('length ' + scene.children.length + " PS length: " + particleSystem.particles.length);
	// console.log(part.lifespan);
	controls.update();

    renderer.render( scene, camera );
}

/**
  * Handles window resize events
  */
let onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

/*
* Load the JSON font and launch init
*/
// const loader = new THREE.FontLoader();
// let font = loader.parse(gotham_black_regular);
init();

/**
 * Rotates each letter on the Y Axis
 */
 let rotateLetters = () => {
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
let setupShaderMaterials = () => {
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

/**
 * TODO: mergear
 * TODO: colocar texto 'under construction'
 * TODO: usar un solo shaderMaterial en las letras para deformarlas y animarlas con shaders
 * TODO: terminar de limpiar app.js
 */