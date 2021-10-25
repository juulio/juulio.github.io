// Marzo 16 2021 http://stemkoski.github.io/Three.js/Shader-Animate.html
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_cube.html
import '../scss/styles.scss';
import gotham_black_regular from '../public/fonts/gotham_black_regular.json';
import cloudAsset from '../public/images/textures/cloud.png';
import lavatileAsset from '../public/images/textures/lavatile.jpg';
import greenTextureAsset from '../public/images/textures/greenTexture.png';
import brownTextureAsset from '../public/images/textures/brownTexture.png';
import volcanoHeightmap from '../public/images/textures/volcano-heightmap512x512.png'
import sand512 from '../public/images/textures/sand-512.jpg'
import rock512 from '../public/images/textures/rock-512.jpg'
import snow512 from '../public/images/textures/snow-512.jpg'
import volcanic256 from '../public/images/textures/volcanic-256.jpg'
import disturb from '../public/images/textures/disturb.jpg'
import mars_back from '../public/images/skybox/mars_back.png'
import mars_front from '../public/images/skybox/mars_front.png'
import mars_right from '../public/images/skybox/mars_right.png'
import mars_top from '../public/images/skybox/mars_top.png'
import mars_bottom from '../public/images/skybox/mars_bottom.png'
import mars_left from '../public/images/skybox/mars_left.png'



import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';

import vertexShader from '../public/shaders/vertex.glsl';
import lavaFragmentShader from '../public/shaders/noise.glsl';
import lunarFragmentShader from '../public/shaders/lunarTextureFragmentShader.glsl';
import heightmapFragmentShader from '../public/shaders/heightmapFragmentShader.glsl';
import heightmapVertexShader from '../public/shaders/heightmapVertexShader.glsl';


const scene = new THREE.Scene();
let  camera, renderer, controls;
let clock, shaderMaterial, shaderMaterials, uniforms, letterPosition, textGeometry, textMesh, delta, isMobile;
let lavaMaterial;
let sphereMesh, customUniforms, volcanoMesh;

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
	renderer.setClearColor ( "#ffffff");
    document.body.appendChild( renderer.domElement );
    controls = new OrbitControls( camera, renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );

	clock = new THREE.Clock();

	scene.add( new THREE.AxesHelper( 500 ));
	scene.add( new THREE.GridHelper( 500, 50 ));
	
	// setupShaderMaterials();
    // renderTextGeometry(font);

	// const planeGeometry = new THREE.PlaneGeometry( 50, 50, 32 );
	// const planeMaterial = new THREE.MeshBasicMaterial( {color: 0x585858, side: THREE.DoubleSide} );
	// const plane = new THREE.Mesh( planeGeometry, planeMaterial );
	// plane.rotation.x = Math.PI / 2;

	// scene.add( plane );

        
	lavaMaterial = setupLavaMaterial();
	scene.add(renderSkybox());
	scene.add(renderMoon());
	scene.add(renderVolcano());
	scene.add(renderFerrisWheel());

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
	let volcanoHeight = 300;
	const geometry = new THREE.ConeGeometry( 14, volcanoHeight, 32, 32);
	const cone = new THREE.Mesh( geometry, lavaMaterial );
	cone.position.y = volcanoHeight / 2 ;
	scene.add( cone );

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

	return sphereMesh;
}


/**
 * Render skybox
 * The urls array order should match the cubeMaterials
 * Do not modify the images order
 */
	let renderSkybox = () => {
	//
	let urls = [mars_back, mars_front, mars_top, mars_bottom, mars_right, mars_left];
	let cubeMaterials = [
		new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[0]), side: THREE.DoubleSide } ),
		new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[1]), side: THREE.DoubleSide } ),
		new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[2]), side: THREE.DoubleSide } ),
		new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[3]), side: THREE.DoubleSide } ),
		new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[4]), side: THREE.DoubleSide } ),
		new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(urls[5]), side: THREE.DoubleSide } ),
	];

	let skybox = new THREE.Mesh(
		new THREE.BoxGeometry( 2500, 2500, 2500),
		cubeMaterials
	);

	return skybox;
}

/**
 * Render Ferris Wheel
 */
let renderFerrisWheel = () => {
	let ferrisWheelGroup = new THREE.Group();

	let geometry = new THREE.CylinderGeometry( 65, 65, 2, 50 );
	let material = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe: true} );
	let wheel = new THREE.Mesh( geometry, material );
	wheel.rotation.x = Math.PI / 2 ;
	wheel.position.x = -85;
	wheel.position.y = 70;
	wheel.position.z = -70;
	ferrisWheelGroup.add(wheel);

	var rustyTexture =  new THREE.TextureLoader().load(disturb);
	rustyTexture.wrapS = THREE.RepeatWrapping;
	rustyTexture.wrapT = THREE.RepeatWrapping;
	rustyTexture.repeat.set( 2, 6 );
	geometry = new THREE.CylinderGeometry(2, 2, 70, 4);
	material = new THREE.MeshBasicMaterial( {color: 0xffffff, map: rustyTexture} );
	
	let supportColumnFrontLeft = new THREE.Mesh( geometry, material);
	supportColumnFrontLeft.position.x = -95;
	supportColumnFrontLeft.position.y = 35;
	supportColumnFrontLeft.position.z = -66;
	supportColumnFrontLeft.rotation.z = Math.PI / 10;
	ferrisWheelGroup.add(supportColumnFrontLeft);

	let supportColumnRearLeft = supportColumnFrontLeft.clone();
	supportColumnRearLeft.position.z = -74;
	supportColumnRearLeft.rotation.z = -Math.PI / 10;
	ferrisWheelGroup.add(supportColumnRearLeft);

	let supportColumnFrontRight = supportColumnFrontLeft.clone();
	supportColumnFrontRight.position.x = -72;
	supportColumnFrontRight.position.z = -66;
	supportColumnFrontLeft.rotation.z = -Math.PI / 10;
	ferrisWheelGroup.add(supportColumnFrontRight);

	let supportColumnRearRight = supportColumnFrontRight.clone();
	supportColumnRearRight.position.x = -72;
	supportColumnRearRight.position.z = -74;
	ferrisWheelGroup.add(supportColumnRearRight);

	ferrisWheelGroup.position.x = -140;
	ferrisWheelGroup.position.z = 260;

	return ferrisWheelGroup;
}

/**
 * Updates objects on each frame
 */
function animate() {
 
    requestAnimationFrame( animate );
 

	delta = clock.getDelta();
	// uniforms.u_time.value += delta * 2;
	// customUniforms.time.value += delta;
 
	// volcanoMesh.rotation.z += 0.001;

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