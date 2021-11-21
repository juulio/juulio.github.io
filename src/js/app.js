// Marzo 16 2021 http://stemkoski.github.io/Three.js/Shader-Animate.html
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_cube.html
import '../scss/styles.scss';
import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';

// import gotham_black_regular from '../public/fonts/gotham_black_regular.json';
import cloudAsset from '../public/images/textures/cloud.png';
import lavatileAsset from '../public/images/textures/lavatile.jpg';
import moonTextureAsset from '../public/images/textures/moonTexture.jpg'
import sand512 from '../public/images/textures/sand-512.jpg'

import vertexShader from '../public/shaders/vertex.glsl';
import lavaFragmentShader from '../public/shaders/noise.glsl';
// import heightmapFragmentShader from '../public/shaders/heightmapFragmentShader.glsl';
// import heightmapVertexShader from '../public/shaders/heightmapVertexShader.glsl';

// Required THREEjs stuff
import { MeshBasicMaterial, Vector3 } from 'three';

// import all 3d modules
import {renderFerrisWheel, rotateFerrisWheel} from './modules/ferrisWheel';
import renderSkybox from './modules/skyBox';
import ParticleSystem from './modules/particleSystem';
import Moon from './modules/moon';
import Volcano from './modules/volcano';
import theText from './modules/text';
import Floor from './modules/floor';

// THREEjs basic Scene stuff
const scene = new THREE.Scene();
let camera, renderer, controls;
let shaderMaterial, shaderMaterials, uniforms, delta, isMobile;
let lavaMaterial;
let customUniforms;
let particleSystem, theMoon;

/**
  * Init basic 3D Scene Elements
  */
let init = () => {

	// Show Stats like FPS
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
	camera.position.set(0, 18, 50);
	// camera.lookAt(scene.position);
	console.log(scene.position);
	
	const light = new THREE.DirectionalLight(0xFFFFFF, 1);
	light.position.set(-10, 10, 30);
	scene.add(light);

	// scene.fog = new THREE.FogExp2( 0xffd1b5, 0.0002 );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor ( "#000000");
    document.body.appendChild( renderer.domElement );
    // controls = new OrbitControls( camera, renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );

	// scene.add( new THREE.AxesHelper( 500 ));
	// scene.add( new THREE.GridHelper( 30, 10 ));
	
	// setupShaderMaterials();
	// lavaMaterial = setupLavaMaterial();

	// scene.add(renderSkybox());

	let moonPosX = -16,
		moonRadius = 3,
		volcanoPosX = 7,
		particleSystemPosX = 7,
		textPosX = -15;

	if(isMobile){
		moonPosX = -2,
		moonRadius = 2,
		volcanoPosX = 0,
		particleSystemPosX = 0,
		textPosX = -7;
	}

	theMoon = new Moon(new Vector3(moonPosX, 25, 18), moonRadius, 60);
	scene.add(theMoon.moonMesh);
	scene.add(new Volcano(new Vector3(volcanoPosX, -7.8, 0), 20, 40, 30, 4));
	particleSystem = new ParticleSystem(new Vector3(particleSystemPosX, 0, -1), 1);
	
	scene.add(new theText('3D website', textPosX, 20, 0));
	scene.add(new theText('under', textPosX, 18, 0));
	scene.add(new theText('construction', textPosX, 16, 0));
	
	// scene.add(renderFerrisWheel(new Vector3(0, 0, 0), 1, 0.4, 0.2, 6));
	// const floor = new Floor(0, 0, 0, 70, 50);
	// scene.add(floor);
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
 * Updates objects on each frame
 */
let animate = () => {
 
    requestAnimationFrame( animate );
	
	theMoon.rotateMoon();
	// rotateFerrisWheel();
	scene.add(particleSystem.addParticle());
	particleSystem.run();
	// controls.update();

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

init();

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
 * TODO: usar un solo shaderMaterial en las letras para deformarlas y animarlas con shaders
 * TODO: terminar de limpiar app.js
 */