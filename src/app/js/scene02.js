/*
 * Julio Del Valle
 * THREE.js
 * 3d Scene - Ancient Ruins
 */

generative_graphics.scene02 = (function (gg) {

    'use strict';

    const buildingTextureImage = './assets/textures/building01.jpg',
    

    /**
     * Init Scene 02
     */
    init = function() {
        var scene02 = new THREE.Object3D();

        // Set camera position for this scene
        // generative_graphics.camera.position.x = 0;
        // generative_graphics.camera.position.y = 22;
        // generative_graphics.camera.position.z = 14;
        gg.main.scene.fog = new THREE.FogExp2( 0xefd1b5, 0.0025 );
        // gg.main.scene.fog = new THREE.FogExp2( 0xC0C0C0, 0.0045 );

        // scene02.add(gg.main.renderFloor(new THREE.Vector2( 300, 400 ), 50, 200));

        // scene02.add(renderScreenOnBuilding('assets/videos/bladeRunner.mp4'));
        
        // scene02.add(renderBuilding(45));

        gg.main.camera.position.y = 30;
        gg.main.camera.position.z = 50;
        gg.main.camera.lookAt(new THREE.Vector3( 0, 30, 0));
        let pointLightPosition = new THREE.Vector3(40, 8, -20);

        let light = new THREE.PointLight( 0xff0000, 10, 800 );
        // light.position.set( 0, 50, -60 );
        light.position.set( pointLightPosition.x, pointLightPosition.y, pointLightPosition.z );
        scene02.add( light );

        light = new THREE.DirectionalLight( 0xFFFFFF );
        let helper = new THREE.DirectionalLightHelper( light, 50 );
        scene02.add( helper );
        
        // var material = new THREE.MeshLambertMaterial( { side: THREE.DoubleSide, wireframe: true } );
        // let lightSphere = new THREE.Mesh( new THREE.SphereGeometry( 0.3, 32, 32 ), material );
        // // lightSphere.position.set( 0, 30, 10 );
        // lightSphere.position.set( pointLightPosition.x, pointLightPosition.y, pointLightPosition.z);
        // scene02.add( lightSphere );


        scene02.add( renderJapaneseBuilding() );


        return scene02;
    };
    
    /**
     * 
     */
    var renderScreenOnBuilding = function(videoURL){
        // create the videoTexture
        var videoTexture= new THREEx.VideoTexture(videoURL);
        videoTexture.minFilter = THREE.LinearFilter;

        var video = videoTexture.video;
        gg.main.updateFcts.push(function(delta, now){
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
        mesh.position.y = 30;
        mesh.position.z = 5;

        return mesh;
    };

    /**
     *
     */
    function renderBuilding (buildingHeight) {
        let geometry = new THREE.BoxGeometry( 10, buildingHeight, 6 );

        let buildingTexture =  new THREE.TextureLoader().load(buildingTextureImage);
        buildingTexture.wrapS = THREE.RepeatWrapping;
        buildingTexture.wrapT = THREE.RepeatWrapping;
        buildingTexture.repeat.set( 1, 6 );

        let material = new THREE.MeshBasicMaterial( { color: "#484848", map: buildingTexture } );
        let buildingMesh = new THREE.Mesh( geometry, material );

        buildingMesh.position.y = buildingHeight / 2;
        // buildingMesh.position.z = -36;
        return buildingMesh;
    }

    /**
     * Renders a generic Building (BoxGeometry) using a texture image file
     */
    function renderBuilding2 (buildingGroupDimensions, buildingPosition, textureImageFile) {
        let geometry = new THREE.BoxGeometry( buildingGroupDimensions.x, buildingGroupDimensions.y, buildingGroupDimensions.z );

        let buildingTexture =  new THREE.TextureLoader().load(textureImageFile);
        buildingTexture.wrapS = THREE.RepeatWrapping;
        buildingTexture.wrapT = THREE.RepeatWrapping;
        buildingTexture.repeat.set( 100, 10 );

        let material = new THREE.MeshBasicMaterial( { color: "#484848", map: buildingTexture } );
        let buildingMesh = new THREE.Mesh( geometry, material );

        buildingMesh.position.set(buildingPosition.x, buildingPosition.y, buildingPosition.z);
        buildingMesh.rotation.y = Math.PI / 2;
        return buildingMesh;
    }

    /*
     * Render a building and add several red blinking pointlights.
     */
    function renderJapaneseBuilding(){
        let buildingGroup = new THREE.Group();
        const buildingGroupPosition = new THREE.Vector3( -160, 150, 0 ),
        buildingGroupDimensions = new THREE.Vector3( 420, 400, 15 );

        let building = renderBuilding2(buildingGroupDimensions, buildingGroupPosition, buildingTextureImage);
        buildingGroup.add(building);

        let pointLightPosition = new THREE.Vector3(40, 8, -20);

        var light = new THREE.PointLight( 0xff0000, 100, 420 );

        light.position.set( buildingGroupPosition.x, buildingGroupPosition.y, buildingGroupPosition.z );
        // light.position.set( pointLightPosition.x, pointLightPosition.y, pointLightPosition.z );
        buildingGroup.add( light );

        let material = new THREE.MeshLambertMaterial( { side: THREE.DoubleSide, wireframe: true } );
        let lightSphere = new THREE.Mesh( new THREE.SphereGeometry( 15, 32, 32 ), material );
        lightSphere.position.set( buildingGroupPosition.x, buildingGroupPosition.y, buildingGroupPosition.z );
        // lightSphere.position.set( pointLightPosition.x, pointLightPosition.y, pointLightPosition.z);
        buildingGroup.add( lightSphere );


        return buildingGroup;
    }

    return {
        init : init
    };

}(generative_graphics));
