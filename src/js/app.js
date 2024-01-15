// Marzo 16 2021 http://stemkoski.github.io/Three.js/Shader-Animate.html
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_cube.html
import '../scss/styles.scss';
import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';

// import gotham_black_regular from '../public/fonts/gotham_black_regular.json';
import cloudAsset from '../public/images/textures/cloud.png';
import lavatileAsset from '../public/images/textures/lavatile.jpg';
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
import Floor from './modules/floor';
import Sun from './modules/sun';
import Moon from './modules/moon';

import ParticleSystem from './modules/particleSystem';
import Volcano from './modules/volcano';
// import theText from './modules/text';
// import Jaguar from './modules/jaguar';
import jsonData from '../public/data/projects.json';
import htmlText from './modules/htmlText';

// THREEjs basic Scene stuff
const scene = new THREE.Scene();
let camera, renderer, controls;
let shaderMaterial, shaderMaterials, uniforms, delta, isMobile;
let lavaMaterial;
let customUniforms;
let theSun, theMoon, theVolcano, sunPosY;
let particleSystem, particleSystemPosY, showParticleSystem;

/**
  * Init basic 3D Scene Elements
  */
let init = () => {
	const mainContainer = document.createElement('main');
	const headerContainer = document.createElement('header');
	
	const theHtmlText = new htmlText(jsonData); 
	headerContainer.appendChild(theHtmlText.generateMainTitle());
	// headerContainer.appendChild(theHtmlText.generateNavigation());
	mainContainer.appendChild(headerContainer);
	document.body.appendChild(mainContainer);
	
	// const htmlNav = new htmlNavigation(jsonProjectsData.projectList);
	// document.body.appendChild(htmlNav.generateList());

	// init all 3D threejs stuff
	// Show Stats like FPS
	// (function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})()

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
	camera.position.set(0, 10, 40);
	// camera.lookAt(new Vector3(0, 0, 0));
	
	const light = new THREE.DirectionalLight(0xFFFFFF, 1);
	light.position.set(-10, 10, 30);
	scene.add(light);

	// scene.fog = new THREE.FogExp2( 0xffd1b5, 0.0002 );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor ( "#fff");
    mainContainer.appendChild( renderer.domElement );
    // controls = new OrbitControls( camera, renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );

	// scene.add( new THREE.AxesHelper( 500 ));
	// scene.add( new THREE.GridHelper( 50, 20 ));
	
	// setupShaderMaterials();
	// lavaMaterial = setupLavaMaterial();

	// scene.add(renderSkybox());

	let moonPosX = -6,
		moonRadius = 2,
		sunPosX = 15,
		sunPosZ = -16,
		sunRadius = 0.5,
		volcanoPosX = 15,
		volcanoPosZ = -17,
		volcanoHeight = 20,
		volcanoBaseWidth = 30,
		particleSystemPosX = 15,
		particleSystemPosZ = -17,
		textPosX = -15;
		
		sunPosY = 10;
		particleSystemPosY = 11;


	if(isMobile){
		moonPosX = -2,
		moonRadius = 1,
		sunPosX = 0.2,
		sunPosY = 7,
		sunRadius = 0.4,
		volcanoPosX = 0,
		volcanoHeight = 15,
		volcanoBaseWidth = 22,
		particleSystemPosX = 0,
		particleSystemPosY = 6,
		textPosX = -7;
	}

	showParticleSystem = false;
	
	theVolcano = new Volcano(new Vector3(volcanoPosX, -7.8, volcanoPosZ), volcanoHeight, volcanoBaseWidth, 30, 4);
	scene.add(theVolcano.volcanoMesh);
	particleSystem = new ParticleSystem(new Vector3(particleSystemPosX, particleSystemPosY, particleSystemPosZ), 0.3);
	
	// scene.add(new theText('Julio Del Valle', textPosX, 24, 0));
	// scene.add(new theText('Creative Software Developer', textPosX, 22, 0));
	// scene.add(new theText('Front End Developer', textPosX, 19, 0));
	
	// const jaguar = new Jaguar(new Vector3(0, 2, 0));
	// console.log(jaguar);
	// scene.add(renderFerrisWheel(new Vector3(0, 0, 0), 1, 0.4, 0.2, 6));
	const floor = new Floor(0, 0, 0, 70, 50);
	scene.add(floor);

	theMoon = new Moon(new Vector3(moonPosX, 15, 10), moonRadius, 10);
	scene.add(theMoon.moonMesh);
	scene.add(theMoon.transparentSphereMesh);

	// console.log(theMoon);

	theSun = new Sun(new Vector3(sunPosX, sunPosY, sunPosZ), sunRadius, 16);
	scene.add(theSun.sunMesh);
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
	theMoon.updateTimeUniform();
	// theVolcano.rotateVolcano();
	theSun.updateSunPosition(sunPosY+=0.09);
	theSun.updateSun();
	// rotateFerrisWheel();
	if(showParticleSystem == false && sunPosY > 17 ){
		showParticleSystem = true;
		theSun.sunMesh.geometry.dispose();
		theSun.sunMesh.material.dispose();
		scene.remove(theSun.sunMesh);
	}
	
	if(showParticleSystem){
		scene.add(particleSystem.addParticle());
		particleSystem.run();
	}
		
	// camera.rotation.y += Math.PI/200
	
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