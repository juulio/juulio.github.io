// Thneed trees - Julio Del Valle - 2016 - Costa Rica
'use strict';

//---------------------------------------------------------
// THREE.js basic variables declaration
var textureLoader,
    windowHalfX,
    windowHalfY,
    renderer,
    geometry,
    material,
    camera,
    scene,
    stats,
    mesh;

//---------------------------------------------------------
// Init THREE required objects
function init(){
    // 1. Create renderer object for THREE.js
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 2. Create a scene
    scene = new THREE.Scene();

    // 3. Create a camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 40;

    // 4. Create a geometry
    geometry = new THREE.Geometry();

    // 5. Create a mesh
    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    // 9. Add the mesh to the scene
    scene.add(mesh);

    // 10. Add the renderer element to the DOM
    document.body.appendChild(renderer.domElement);

    // 11. Show FPS stats on the screen
    stats = new Stats();
    document.body.appendChild(stats.domElement);

    // 12. Add Window Resize Event Listener
    window.addEventListener('resize', onWindowResize, false);
}


//---------------------------------------------------------
// this function is executed each animation frame
function animate(){
    requestAnimationFrame(animate);

    //draw
    renderer.render( scene, camera );

    // update GPU stats
    stats.update();
}

//---------------------------------------------------------
// Update Renderer Size when Windows is resized
function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

//---------------------------------------------------------
// Begin
init();
animate();