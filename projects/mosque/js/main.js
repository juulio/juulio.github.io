/*
 * Julio Del Valle
 * 3d Mosque
 * THREE.js
 */
import Building from './building.js';
import Minaret from './minaret.js';
import Skybox from './skybox.js';
import Tree from './tree.js';
import Floor from './floor.js';
import * as THREE from '../../../js/vendor/three.module.js';
import { OrbitControls } from '../../../js/vendor/OrbitControls.js';

import {
	renderer,
	// getCamera,
	// getAmbientLight,
	// getGridHelper,
	// getAxesHelper
} from '../../../js/scene.js';

let camera, scene;
let container, loader;
let minaretFrontLeft, minaretFrontRight, minaretRearLeft, minaretRearRight;



/** 
 * Init all functions
 * Renders all elements on the screen
 */
const init = () => {
    setScene();

    // let axisHelper = new THREE.AxisHelper( 55 );
    // scene.add( axisHelper );

    // Render Elements on the Screen
    // let buildingPosition = new THREE.Vector3(0, 0, 0);
    // let b = new Building();
    // scene.add(MOSQUE.Building.render;
    
    let skyboxSize = 1000;
    // scene.add(new Skybox(skyboxSize));

    // renderTrees();

    scene.add(new Floor());

    let minaretHeight = 36;
    
    minaretFrontLeft = new Minaret(new THREE.Vector3(-80, minaretHeight/2, 80), minaretHeight);
    minaretFrontRight = new Minaret(new THREE.Vector3(80, minaretHeight/2, 80), minaretHeight); // front right
    minaretRearLeft = new Minaret(new THREE.Vector3(-80, minaretHeight/2, 0), minaretHeight); // rear left
    minaretRearRight = new Minaret(new THREE.Vector3(80, minaretHeight/2, 0), minaretHeight); // rear right    
    
    // scene.add(minaretFrontLeft);
    // scene.add(minaretFrontRight);
    // scene.add(minaretRearLeft);
    // scene.add(minaretRearRight);
};

/**
 * Sets initial elements for the scene
 */
const setScene = () => {
    let bodyEl = document.body;
    bodyEl.style.margin = 0;
    bodyEl.style.overflow = "hidden";

    container = document.createElement( 'div' );
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
    // camera.position.x = -10;
    camera.position.x = -90;
    camera.position.y = 50;
    camera.position.z = 130;

    scene = new THREE.Scene();

    const controls = new OrbitControls( camera, renderer.domElement );

    // scene.fog = new THREE.Fog( 0xeecbad, 10, 1020 );

    let light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 );
    light.position.set( 0.5, 1, 0.75 );
    scene.add( light );

    let directionalLight = new THREE.DirectionalLight( 0xffffff);
    directionalLight.position.set( 0, -3, 1 );
    scene.add( directionalLight );

    // renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );


    window.addEventListener( 'resize', onWindowResize, false );
};

/**
 * Renders all the trees around the Mosque
 * @class Main
 * @namespace MOSQUE
 */
const renderTrees = () => {
    let treeObject,
        treePosition,
        x,
        treeHeight = 10,
        treeScale = 1;

    for(x=-78;x<78;x+=8){
        treePosition = new THREE.Vector3( x, 0, 0 );
        scene.add(new Tree(treePosition, treeHeight, treeScale));
        // scene.add(MOSQUE.Tree(treePosition, treeHeight, treeScale));

        treePosition = new THREE.Vector3( x, 0, 80 );
        // treeObject = new MOSQUE.Tree(treePosition, treeHeight, treeScale);
        scene.add(new Tree(treePosition, treeHeight, treeScale)); 
    }
};

/**
 * Properly scales elements when the browser is resized
 */
const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
};

/**
 * Animate elements on the screen
 */
const animate = () => {
    requestAnimationFrame( animate );

    // minaretFrontLeft.children[3].rotation.y+=0.009;
    // minaretRearLeft.children[3].rotation.y+=0.009;
    // minaretFrontRight.children[3].rotation.y+=0.009;
    // minaretRearLeft.children[3].rotation.y+=0.009;

    renderer.render( scene, camera );
};

init();
animate();
