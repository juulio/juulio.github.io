/*
 * Julio Del Valle
 * 3d Mosque
 * THREE.js
 */

/** @namespace Namespace for MOSQUE classes and functions. */
var MOSQUE = MOSQUE || {};

/**
 * Creates a Building object
 * @class building
 * @constructor
 * @namespace MOSQUE
 * @param {THREE.Vector3} position
 * @param {Number} scale
 */



MOSQUE.Main = MOSQUE.Main || (function () {

    var camera, scene, renderer;
    var container, controls, loader;
    var minaretFrontLeft, minaretFrontRight, minaretRearLeft, minaretFrontRight;

    init();
    animate();
    
    /** 
     * Init all functions
     * Renders all elements on the screen
     */
    function init() {
        setScene();

        // var axisHelper = new THREE.AxisHelper( 55 );
        // scene.add( axisHelper );

        // Render Elements on the Screen
        // var buildingPosition = new THREE.Vector3(0, 0, 0);
        scene.add(MOSQUE.Building());
        
        var skyboxSize = 1000;
        scene.add(MOSQUE.Skybox(skyboxSize));

        renderTrees();

        scene.add(MOSQUE.Floor());

        var minaretHeight = 36;
        
        minaretFrontLeft = MOSQUE.Minaret(new THREE.Vector3(-80, minaretHeight/2, 80), minaretHeight);
        minaretFrontRight = MOSQUE.Minaret(new THREE.Vector3(80, minaretHeight/2, 80), minaretHeight); // front right
        minaretRearLeft = MOSQUE.Minaret(new THREE.Vector3(-80, minaretHeight/2, 0), minaretHeight); // rear left
        minaretRearRight = MOSQUE.Minaret(new THREE.Vector3(80, minaretHeight/2, 0), minaretHeight); // rear right    
        
        scene.add(minaretFrontLeft);
        scene.add(minaretFrontRight);
        scene.add(minaretRearLeft);
        scene.add(minaretRearRight);
    }

    /**
     * Sets initial elements for the scene
     */
    function setScene(){
        var bodyEl = document.body;
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

        // scene.fog = new THREE.Fog( 0xeecbad, 10, 1020 );

        var light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 );
        light.position.set( 0.5, 1, 0.75 );
        scene.add( light );

        var directionalLight = new THREE.DirectionalLight( 0xffffff);
        directionalLight.position.set( 0, -3, 1 );
        scene.add( directionalLight );

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        controls = new THREE.OrbitControls( camera, renderer.domElement );

        window.addEventListener( 'resize', onWindowResize, false );
    }

    /**
     * Renders all the trees around the Mosque
     * @class Main
     * @namespace MOSQUE
     */
    function renderTrees(){
        var treeObject,
            treePosition,
            x,
            treeHeight = 10,
            treeScale = 1;

        for(x=-78;x<78;x+=8){
            treePosition = new THREE.Vector3( x, 0, 0 );
            scene.add(MOSQUE.Tree(treePosition, treeHeight, treeScale));

            treePosition = new THREE.Vector3( x, 0, 80 );
            // treeObject = new MOSQUE.Tree(treePosition, treeHeight, treeScale);
            scene.add(MOSQUE.Tree(treePosition, treeHeight, treeScale)); 
        }
    }

    /**
     * Properly scales elements when the browser is resized
     */
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    /**
     * Animate elements on the screen
     */
    function animate() {
        requestAnimationFrame( animate );

        minaretFrontLeft.children[3].rotation.y+=0.009;
        minaretRearLeft.children[3].rotation.y+=0.009;
        minaretFrontRight.children[3].rotation.y+=0.009;
        minaretRearLeft.children[3].rotation.y+=0.009;

        renderer.render( scene, camera );
    }

    // Keep only if public vars are needed.
    return {
        publicScene : scene,
        minaretFrontLeft : minaretFrontLeft
    };

}());
