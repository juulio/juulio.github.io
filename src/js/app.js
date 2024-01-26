/**
 * 2024 TODO
 * Fiddle de camera rotation https://jsfiddle.net/2v58xefr/ 
 * limpiar app.js
 * usar un solo shaderMaterial en las letras para deformarlas y animarlas con shaders
 */
// Marzo 16 2021 http://stemkoski.github.io/Three.js/Shader-Animate.html
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_cube.html
import '../scss/styles.scss';
import * as THREE from 'three';
import { Vector3 } from 'three';

import Stats from 'stats.js';
import cloudAsset from '../public/images/textures/cloud.png';
import lavatileAsset from '../public/images/textures/lavatile.jpg';
import vertexShader from '../public/shaders/vertex.glsl';
import lavaFragmentShader from '../public/shaders/noise.glsl';
import Floor from './modules/floor';
import Sun from './modules/sun';
import Moon from './modules/moon';
import ParticleSystem from './modules/particleSystem';
import Volcano from './modules/volcano';
import jsonData from '../public/data/projects.json';
import htmlText from './modules/htmlText';

import { OrbitControls } from 'OrbitControls';
import sand512 from '../public/images/textures/sand-512.jpg'
// import heightmapFragmentShader from '../public/shaders/heightmapFragmentShader.glsl';
// import heightmapVertexShader from '../public/shaders/heightmapVertexShader.glsl';
// import Jaguar from './modules/jaguar';
// import {renderFerrisWheel, rotateFerrisWheel} from './modules/ferrisWheel';
// import renderSkybox from './modules/skyBox';

// THREEjs basic Scene stuff

const scene = new THREE.Scene();
let stats, camera, renderer, controls, theFloor, theMoon, theVolcano, particleSystem, showParticleSystem, clock;
let  lavaMaterial, shaderMaterial, shaderMaterials, uniforms, delta, isMobile;
let customUniforms;
let theSun,  sunPosY;
let rotationMesh;

/**
 * Check hostname to verify Development Environment
 */    
const developmentEnvironment = () => window.location.host != 'juliodelvalle.com';

/*
* Checks if app is running on a mobile device
*/
isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	isMobile = true;
}

/**
 * Set up and show Javascript Performance Monitor
 */
const showStats = () => {
	stats = new Stats();
	stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
	document.body.appendChild( stats.dom );
}

/**
 * Show Axes Helpers for 3D
 */
const showHelpers = () => {
	scene.add( new THREE.AxesHelper( 16 ) ); 
	scene.add( new THREE.GridHelper( 50, 20 ));
}

/**
 * Set Scene
 */
const setScene = (mainContainerElement) => {
	let SCREEN_WIDTH = window.innerWidth,
		SCREEN_HEIGHT = window.innerHeight,
		VIEW_ANGLE = 70,
		ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT,
		NEAR = 0.01,
		FAR = 200;
	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	camera.position.set( 0, 12, 0);

	// camera.lookAt(new Vector3(0, 0, 0));
	// camera.lookAt(new Vector3(0, 10, 0));
	
	const light = new THREE.DirectionalLight(0xFFFFFF, 1);
	light.position.set(-10, 10, 30);
	scene.add(light);

	// scene.fog = new THREE.FogExp2( 0xffd1b5, 0.0002 );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor ( "#e0eafa");
	mainContainerElement.appendChild( renderer.domElement );
}

/**
  * Init all functions 
  */
const init = () => {
	clock = new THREE.Clock();
	const mainContainer = document.createElement('main');
	const headerContainer = document.createElement('header');
	
	const theHtmlText = new htmlText(jsonData); 
	headerContainer.appendChild(theHtmlText.generateMainTitle());
	// headerContainer.appendChild(theHtmlText.generateNavigation());
	mainContainer.appendChild(headerContainer);
	document.body.appendChild(mainContainer);

	setScene(mainContainer);

	if (developmentEnvironment()){
		showStats();
		showHelpers();
	}
	
    controls = new OrbitControls( camera, renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );

	
	// setupShaderMaterials();
	// lavaMaterial = setupLavaMaterial();

	// scene.add(renderSkybox());

	let moonPos = new Vector3(4, 8, -10),
		volcanoPos = new Vector3(0, -4.5, 0),
		particleSystemPos = new Vector3(0, 5, 0),
		floorPos = new Vector3(0, 0, 0),
		moonRadius = 1,
		sunPosX = 15,
		sunPosZ = -16,
		sunRadius = 0.5,
		volcanoHeight = 10,
		volcanoBaseWidth = 25,
		volcanoBaseHeight = 25;

	if(isMobile){
		moonPos = new Vector3(4, 6, -5),
		volcanoPos = new Vector3(0, -4.5, 0),
		particleSystemPos = new Vector3(0, 5, 0),
		moonRadius = 0.6,
		sunPosX = 0.2,
		sunPosY = 7,
		sunRadius = 0.4,
		volcanoHeight = 9,
		volcanoBaseWidth = 14,
		volcanoBaseHeight = 14;
	}

	showParticleSystem = true;
	
	const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshNormalMaterial();

    rotationMesh = new THREE.Mesh( geometry, material );
    scene.add( rotationMesh );
	rotationMesh.add( camera );
	theVolcano = new Volcano(volcanoPos, volcanoHeight, volcanoBaseWidth, volcanoBaseHeight, 4);
	particleSystem = new ParticleSystem(particleSystemPos, 0.3);
	
	theFloor = new Floor(floorPos, 40, 40);
	theMoon = new Moon(moonPos, moonRadius, 10);
	
	scene.add(theVolcano.volcanoMesh);
	scene.add(theFloor);
	scene.add(theMoon.moonMesh);
	scene.add(theMoon.transparentSphereMesh);

	// scene.add(particleSystem);
	// const jaguar = new Jaguar(new Vector3(0, 2, 0));
	// console.log(jaguar);
	// scene.add(renderFerrisWheel(new Vector3(0, 0, 0), 1, 0.4, 0.2, 6));
	// theSun = new Sun(new Vector3(sunPosX, sunPosY, sunPosZ), sunRadius, 16);
	// scene.add(theSun.sunMesh);
    animate();
}

/**
 * Setup uniforms and attributes for custom shader material 
 * @returns THREE.
 */
const setupLavaMaterial = () => {
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
const animate = () => {
 	requestAnimationFrame( animate );
	const time = clock.getElapsedTime();

	if (developmentEnvironment()){
		stats.begin();
	}
	
	theMoon.rotateMoon();
	theMoon.updateTimeUniform();
	// theVolcano.rotateVolcano();
	// theSun.updateSunPosition(sunPosY+=0.09);
	// theSun.updateSun();
	// rotateFerrisWheel();
	if(showParticleSystem == false && sunPosY > 17 ){
		showParticleSystem = true;
		// theSun.sunMesh.geometry.dispose();
		// theSun.sunMesh.material.dispose();
		// scene.remove(theSun.sunMesh);
	}
	
	if(showParticleSystem && particleSystem.particles.length < 25){
		// console.log('adding a particle')
		scene.add(particleSystem.addParticle());
	}
	particleSystem.run();
	camera.position.x = Math.sin( time / 10 ) * 25;
    camera.position.z = Math.cos( time / 10 ) * 25;
	// camera.lookAt( rotationMesh.position)
	camera.lookAt(theVolcano.volcanoMesh.position);
    renderer.render( scene, camera );

	if (developmentEnvironment()){
		stats.end();
	}

}

/**
  * Handles window resize events
  */
const onWindowResize = () => {
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
const setupShaderMaterials = () => {
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