/*
 * Julio Del Valle
 * THREE.js
 * 3d Scene - Ancient Ruins
 */

var generative_graphics = window.generative_graphics || {};

/**
 * Global logic
 * @namespace
 */

(function (generative_graphics) {

    'use strict';

    

    /**
     * Init all functions
     */
    generative_graphics.initScene02 = function() {
        var scene02 = new THREE.Object3D();

        // Set camera position for this scene
        // generative_graphics.camera.position.x = 0;
        // generative_graphics.camera.position.y = 22;
        // generative_graphics.camera.position.z = 14;
        // generative_graphics.scene.fog = new THREE.FogExp2( 0xefd1b5, 0.0025 );
        generative_graphics.scene.fog = new THREE.FogExp2( 0xC0C0C0, 0.0055 );

        var screenBuilding = renderScreenOnBuilding('assets/videos/bladeRunner.mp4');
        scene02.add(screenBuilding);
        
        scene02.add(renderBuildingForScreen(22));

        return scene02;
    };
    
    /**
     * 
     */
    var renderScreenOnBuilding = function(videoURL, buildingPosition){
        // create the videoTexture
        var videoTexture= new THREEx.VideoTexture(videoURL);
        videoTexture.minFilter = THREE.LinearFilter;

        var video = videoTexture.video;
        generative_graphics.updateFcts.push(function(delta, now){
            videoTexture.update(delta, now);
        });

        // use the texture in a THREE.Mesh
        var geometry  = new THREE.PlaneGeometry( 10, 6, 1, 1 );
        geometry.rotateY( 2 * Math.PI );


        var material  = new THREE.MeshBasicMaterial({
            map : videoTexture.texture
        });

        material.side = THREE.DoubleSide;
        material.map.minFilter = THREE.LinearFilter;

        var mesh  = new THREE.Mesh( geometry, material );
        mesh.position.y = 15;

        return mesh;
    };

    function renderBuildingForScreen (buildingHeight) {
        let geometry = new THREE.BoxGeometry( 10, buildingHeight, 6 );

        let buildingTexture =  new THREE.TextureLoader().load('./assets/textures/building01.jpg');
        buildingTexture.wrapS = THREE.RepeatWrapping;
        buildingTexture.wrapT = THREE.RepeatWrapping;
        buildingTexture.repeat.set( 1, 6 );

        let material = new THREE.MeshBasicMaterial( { color: "#484848", map: buildingTexture } );
        let buildingMesh = new THREE.Mesh( geometry, material );

        buildingMesh.position.y = buildingHeight / 2;
        buildingMesh.position.z = -3.4;
        return buildingMesh;
    }

}(generative_graphics));
