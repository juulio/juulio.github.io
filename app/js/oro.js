// Oro Tico Precolombino - Julio Del Valle - 2016 - Costa Rica
'use strict';

//---------------------------------------------------------
// THREE.js basic variables declaration
var textureLoader,
    windowHalfX,
    windowHalfY,
    renderer,
    triangleEdgesGeometry,
    material,
    camera,
    scene,
    stats,
    edgeMesh1,
    edgeMesh2,
    edgeMesh3,
    cubePositionX,
    movementSpeed;

// ORO Object
var triangleEdges = {
    x : 3,
    y : 1,
    z : 1
}

var triangle01 = {
    edge01 :  {
        posX : -10,
        posY : 1.5,
        posZ: 0,
        endPosX : -4,
        endPosY : 0,
        endPosZ : 0,
        finalRotationZ : 90*Math.PI/180
    },
    edge02 : {
        posX : 10,
        posY : 1.5,
        posZ: 0,
        endPosX : -2,
        endPosY : -3,
        endPosZ : 0,
        finalRotationZ : 135*Math.PI/180
    },
    edge03 : {
        posX : -2.8,
        posY : -10,
        posZ: 0,
        endPosX : -14,
        endPosY : -0.6,
        endPosZ : 0,
        finalRotationZ : 0
    }
}

//---------------------------------------------------------
// Init THREE required objects
function init(){
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xFFFFFF);
    renderer.setSize(window.innerWidth, window.innerHeight);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 40;

    triangleEdgesGeometry = new THREE.BoxGeometry( triangleEdges.x, triangleEdges.y, triangleEdges.z );
    material = new THREE.MeshBasicMaterial( {color: 0xFFD700} );

    edgeMesh1 = new THREE.Mesh( triangleEdgesGeometry, material );
    scene.add( edgeMesh1 );

    edgeMesh2 = new THREE.Mesh( triangleEdgesGeometry, material );
    scene.add( edgeMesh2 );
    
    edgeMesh3 = new THREE.Mesh( triangleEdgesGeometry, material );
    scene.add( edgeMesh3 );
    
    var tween01 = new TWEEN.Tween(triangle01.edge01)
        .to({
            posX : triangle01.edge01.endPosX,
            posY : triangle01.edge01.endPosY,
            posZ : triangle01.edge01.endPosZ
        }).start();

    var tween02 = new TWEEN.Tween(triangle01.edge02)
        .to({
            posX : triangle01.edge02.endPosX,
            posY : triangle01.edge02.endPosY,
            posZ : triangle01.edge02.endPosZ
        }).start();

    document.body.appendChild(renderer.domElement);

    movementSpeed = 0.2;

    // Show FPS stats on the screen
    stats = new Stats();
    document.body.appendChild(stats.domElement);

    // Show Axis Helper on the screen
    var axisHelper = new THREE.AxisHelper( 5 );
    scene.add( axisHelper );

    window.addEventListener('resize', onWindowResize, false);
}


//---------------------------------------------------------
// this function is executed each animation frame
function animate(time){
    requestAnimationFrame(animate);

    TWEEN.update(time);

    edgeMesh1.position.set(triangle01.edge01.posX, triangle01.edge01.posY, triangle01.edge01.posZ);
    edgeMesh2.position.set(triangle01.edge02.posX, triangle01.edge02.posY, triangle01.edge02.posZ);
    edgeMesh3.position.set(triangle01.edge03.posX, triangle01.edge03.posY, triangle01.edge03.posZ);

    //draw
    renderer.render( scene, camera );

    // if(triangle01.edge01.posX <= triangle01.edge01.endPosX){
    //     triangle01.edge01.posX+=movementSpeed;
    //     edgeMesh1.position.x+=movementSpeed;
    //     edgeMesh1.rotateZ(0.1);
    // }
    // else {
    //     edgeMesh1.rotation.z = triangle01.edge01.finalRotationZ;
    // }

    // if(triangle01.edge02.posX >= triangle01.edge02.endPosX){
    //     triangle01.edge02.posX-=movementSpeed;
    //     edgeMesh2.position.x-=movementSpeed;
    //     edgeMesh2.rotateZ(0.1);
    // }
    // else {
    //     edgeMesh2.rotation.z = triangle01.edge02.finalRotationZ;
    // }

    // if(triangle01.edge03.posY <= triangle01.edge03.endPosY){
    //     triangle01.edge03.posY+=movementSpeed;
    //     edgeMesh3.position.y+=movementSpeed;
    //     edgeMesh3.rotateZ(0.1);
    // }
    // else {
    //      edgeMesh3.rotation.z = triangle01.edge03.finalRotationZ;
    // }
    
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

