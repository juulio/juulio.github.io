/*
 * Julio Del Valle
 * Costa Rica
 * 2017
 */

var generative_graphics = window.generative_graphics || {};

/*
 * Global logic
 * @namespace
 */

(function (generative_graphics){

    'use strict';

    /**
     * Rotates Minaret's Booth on Y Axis
     */
    var rotateMinarets = function(){
        for(var i=0;i<generative_graphics.minaretsGroup.children.length;i++){
            var currentMinaret = generative_graphics.minaretsGroup.children[i];
            currentMinaret.children[3].rotation.y += 0.005;
        }
    };

    /**
     * Rotates Ferris Wheel on Y Axis
     */
    var rotateFerrisWheel = function(){
        generative_graphics.ferrisWheel.rotation.y -= 0.003;
    };

    /**
     * Rotates Pyramid on Y Axis
     */
    let pyramidLevelIndex = 0;

    var rotatePyramid = function(){
        if(generative_graphics.pyramid.children[pyramidLevelIndex].rotation.y < Math.PI){
            generative_graphics.pyramid.children[pyramidLevelIndex].rotation.y += 0.08;
        }
         else {
            generative_graphics.pyramid.children[pyramidLevelIndex].rotation.y = 0;
            pyramidLevelIndex++;

            if(pyramidLevelIndex >= generative_graphics.pyramidLevels-1){
                pyramidLevelIndex = 0;
            }
        }
    };

    /** 
     * Init all functions
     */
    var scene, camera, renderer, container, controls;
    var cube;
    var updateFcts = [];

    generative_graphics.updateFcts = updateFcts;
    
    setScene();

    var scene01 = generative_graphics.initScene01();
    generative_graphics.scene.add(scene01);

    var scene02 = generative_graphics.initScene02();
    generative_graphics.scene.add(scene02);
    
    animate();

    // generative_graphics.initNav();

    /**
     * Clears All Elements form the Scene
     */
    generative_graphics.clearScene = function(){
        while(scene.children.length > 0){ 
            scene.remove(scene.children[0]); 
        }   
    };

    /*
     * Renders 3D Cube
     */
    generative_graphics.renderCube = function(){
        // Create a Cube Mesh with basic material
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
        var cube = new THREE.Mesh( geometry, material );

        // Add cube to Scene
        scene.add( cube );
    };

    /*
     * Sets basic 3D Scene Elements
     */
    function setScene(){
        scene = new THREE.Scene();

        generative_graphics.scene = scene;

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        camera.position.x = 20;
        camera.position.y = 50;
        camera.position.z = 140;

        generative_graphics.camera = camera;

        renderer = new THREE.WebGLRenderer( );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setClearColor( 0xFFFFFF, 1 );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        controls = new THREE.OrbitControls( camera, renderer.domElement );
        window.addEventListener( 'resize', onWindowResize, false );
     }

    /*
     * Handles window resize events
     */
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    /**
     * Updates objects on each frame
     */
    function animate(nowMsec) {
        requestAnimationFrame( animate );

        rotateMinarets();

        rotateFerrisWheel();

        rotatePyramid();
        
        var lastTimeMsec  = lastTimeMsec || nowMsec-1000/60;
        var deltaMsec = Math.min(200, nowMsec - lastTimeMsec);
        lastTimeMsec  = nowMsec;
        
        // call each update function
        updateFcts.forEach(function(updateFn){
            updateFn(deltaMsec/1000, nowMsec/1000);
        });
        
        renderer.render( scene, camera );
    }

    /**
     * Remove an element from the Scene
     */
    function removeEntity(object) {
        var selectedObject = scene.getObjectByName(object.name);
        scene.remove( selectedObject );
        animate();
    }

}(generative_graphics));
