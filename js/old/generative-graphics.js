/*
 * Julio Del Valle
 * Costa Rica
 * 2017
 * Links sobre cómo usar import/export
 * https://stackoverflow.com/questions/34593632/how-to-use-es6-modules-instead-of-namespaces-in-the-global-scope
 */


let generative_graphics = window.generative_graphics || {};

generative_graphics.main = (function (gg){

    let scene,
        camera,
        renderer,
        container,
        controls,
        cube,
        updateFcts = [],
        ps01,
        ps01exists = false,
        moveCamera = false,
        activeScene,
        boxMesh,
        uniforms, clock, shaderMaterials, lavaShaderMaterial, noiseShaderMaterial;

    /**
     * Render XYZ Axis Helpers
     */
    function renderHelpers(){
        var gridXZ = new THREE.GridHelper(200, 20, '#FF0000');
        scene.add(gridXZ);

        var axesHelper = new THREE.AxesHelper( 85 );
        scene.add( axesHelper );
    }


    /**
     * Clears All Elements form the Scene
     */
    function clearScene(){
        while(scene.children.length > 0){ 
            scene.remove(scene.children[0]); 
        }   
    }

    /*
     * Stuff needed for shader materials
     * LAVA SHADERS
     * https://www.shadertoy.com/view/Xtf3WB
     * https://www.shadertoy.com/view/MdBSRW
     * https://www.shadertoy.com/view/lslXRS
     * https://www.shadertoy.com/view/XdKSDV
     */

    /*
     * Init Uniforms for shaderMaerial
     * TODO: create a shaderMaterial array to use several shaders on several materials
     */
    function setupShaderMaterials(){
        // shaderMaterials = [];

        let textureLoader = new THREE.TextureLoader();

        uniforms = {
            fogDensity: { value: 0.45 },
            fogColor:   { value: new THREE.Vector3( 0, 0, 0 ) },
            u_time:       { value: 1.0 },
            u_resolution: { value: new THREE.Vector2() },
            uvScale:    { value: new THREE.Vector2( 0.3, 0.3 ) },
            texture1:   { value: textureLoader.load( "assets/textures/cloud.png" ) },
            texture2:   { value: textureLoader.load( "assets/textures/disturb.jpg" ) },
            texture3:   { value: textureLoader.load( "assets/textures/lavatile.jpg" ) }
        };

        uniforms.texture1.value.wrapS = uniforms.texture1.value.wrapT = THREE.RepeatWrapping;
        uniforms.texture2.value.wrapS = uniforms.texture2.value.wrapT = THREE.RepeatWrapping;
        uniforms.texture3.value.wrapS = uniforms.texture3.value.wrapT = THREE.RepeatWrapping;

        uniforms.u_resolution.value.x = window.innerWidth;
        uniforms.u_resolution.value.y = window.innerHeight;

        clock = new THREE.Clock();
    }

    /*
     * Renders 3D Cube
     */
    function renderCube(){
 
        noiseShaderMaterial = new THREE.ShaderMaterial( {
            uniforms: uniforms,
            vertexShader: document.getElementById( 'vertexShader' ).textContent,
            fragmentShader: document.getElementById( 'noise2FragmentShader' ).textContent
        } );

        // Create a Cube Mesh 
        let geometry = new THREE.BoxGeometry( 3, 3, 3 );
        let cube = new THREE.Mesh( geometry, noiseShaderMaterial );

        // Add cube to Scene
        scene.add( cube );
    }

    /**
     * Renders a Minaret
     * @namespace generative_graphics
     * @param {THREE.Vector3} position
     * @param {Number} height
     * @param {Number} scale
     * THREE.CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments)
     * TODO create a minaret Class
     */
    function renderMinaret(radius, height, position){
        let minaretGroup = new THREE.Group();  
        let cone;
        let arabicTexture =  new THREE.TextureLoader().load('./assets/textures/marble.jpg');
        arabicTexture.wrapS = THREE.RepeatWrapping;
        arabicTexture.wrapT = THREE.RepeatWrapping;
        arabicTexture.repeat.set( 2, 6 );
        let material = new THREE.MeshBasicMaterial( { map: arabicTexture} );
        let minaretGeometry = new THREE.CylinderGeometry( radius, radius, height, 32 );

        /**
         * Render the booths on minarets
         */
        function renderBooth(position, radius){
            let stoneTexture =  new THREE.TextureLoader().load('./assets/textures/stone.png');
            let material = new THREE.MeshBasicMaterial( { map: stoneTexture } );
            let boothGeometry = new THREE.CylinderGeometry( radius, radius, height/7, 5 );
            let booth = new THREE.Mesh(boothGeometry, material);
            booth.position.set(position.x, position.y, position.z);
            minaretGroup.add(booth);
        }

        /**
         * Render the cone on top of the minaret
         * ConeGeometry(radius, height, radialSegments, heightSegments)
         */
        function renderCone(position){
            let geometry = new THREE.ConeGeometry( radius*2.4, height*0.15, 32 );
            let material = new THREE.MeshBasicMaterial( {color: 0xeecbad, wireframe: true} );
            cone = new THREE.Mesh( geometry, material );
            cone.name = "Cone";
            cone.position.set(position.x, position.y+height*0.55, position.z);
            minaretGroup.add( cone );
        }

        let minaret = new THREE.Mesh(minaretGeometry, material);
        minaret.position.set(position.x, position.y, position.z);
        minaretGroup.add(minaret);

        renderBooth(new THREE.Vector3(position.x, position.y*1.1, position.z), radius*2.5);
        renderBooth(new THREE.Vector3(position.x, position.y*1.6, position.z), radius*2);

        renderCone(position);

        return minaretGroup;
    }

    /**
     * Renders the Floor
     * @class Floor
     * @constructor
     * @namespace generative_graphics
     */
    function renderFloor(floorSize, widthSegments, heightSegments){
        let i, l;
        let geometry = new THREE.PlaneGeometry( floorSize.x, floorSize.y, widthSegments, heightSegments);
        geometry.rotateX( - Math.PI / 2 );

        for ( i = 0, l = geometry.vertices.length; i < l; i ++ ) {

            let vertex = geometry.vertices[ i ];
            vertex.x += Math.random() * 2 - 1;
            // vertex.y += Math.random() * 4;
            vertex.y += Math.random() * 1;
            // vertex.z += Math.random() * 15 - 10;
            vertex.z += Math.random() * 5 - 10;
        }

        for ( i = 0, l = geometry.faces.length; i < l; i ++ ) {

            let face = geometry.faces[ i ];
            face.vertexColors[ 0 ] = new THREE.Color().setRGB(1, 0.972, 0.862);
            face.vertexColors[ 1 ] = new THREE.Color().setRGB(0.713, 0.439, 0.227);
            face.vertexColors[ 2 ] = new THREE.Color().setRGB(0.580, 0.419, 0.298);

        }

        let material = new THREE.MeshBasicMaterial( { vertexColors: THREE.VertexColors } );

        let mesh = new THREE.Mesh( geometry, material );
        mesh.position.setZ(40);
        mesh.position.setX(-7);
        return mesh;
    }

    /*
     *
     */
    function renderPlaneGeometryShaderFloor(){
        lavaShaderMaterial = new THREE.ShaderMaterial( {
            name: "Lava",
            uniforms: uniforms,
            vertexShader: document.getElementById( 'vertexShader' ).textContent,
            fragmentShader: document.getElementById( 'bwMatrixFragmentShader' ).textContent,
            side: THREE.DoubleSide
        });

        // let planeGeometry = new THREE.PlaneGeometry( 10, 20, 32 );
        // planeGeometry.rotateX( - Math.PI / 2 );
        let boxGeometry = new THREE.BoxGeometry( 8, 8, 8 );
        boxMesh = new THREE.Mesh( boxGeometry, lavaShaderMaterial );
        scene.add( boxMesh );
    }
    
    // generative_graphics.updateFcts = updateFcts;

    /**
     * Rotates Minaret's Booth on Y Axis
     */
    function rotateMinarets(){
        for(let i=0;i<generative_graphics.minaretsGroup.children.length;i++){
            let currentMinaret = generative_graphics.minaretsGroup.children[i];
            currentMinaret.children[3].rotation.y += 0.005;
        }
    }

    /**
     * Rotates Ferris Wheel on Y Axis
     */
    function rotateFerrisWheel(){
        generative_graphics.ferrisWheel.rotation.y -= 0.003;
    }

    /**
     * Rotates Pyramid on Y Axis
     */
    pyramidLevelIndex = 0;

    function rotatePyramid(){
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
    }

    // generative_graphics.initNav();

   

    /*
     * Returns true if a given number n is Even
     */
    isEven = (n) => n % 2 === 0;

    /*
     * Set up and show Javascript Performance Monitor
     */
    function showStats(){
        stats = new Stats();
        stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild( stats.dom );
    }

    /*
     * Sets basic 3D Scene Elements
     */
    function initScene(){
        scene = new THREE.Scene();
        
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        // camera.position.x = 50;
        camera.position.y = 3;
        camera.position.z = 15;

        var light = new THREE.AmbientLight( 0x404040 ); // soft white light
        scene.add( light );

        renderer = new THREE.WebGLRenderer( );
        renderer.setPixelRatio( window.devicePixelRatio );
        // renderer.setClearColor( 0xFFFFFF, 1 );
        renderer.setClearColor( 0x000000, 1 );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        setupShaderMaterials();

        controls = new THREE.OrbitControls( camera, renderer.domElement );
        window.addEventListener( 'resize', onWindowResize, false );
        
        // renderHelpers();

        renderPlaneGeometryShaderFloor();
     }

    /*
     * Handles window resize events
     */
    function onWindowResize(){
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    /**
     * Updates objects on each frame
     */
    function animate(nowMsec){
        requestAnimationFrame( animate );

        stats.begin();
        // rotateMinarets();

        // rotateFerrisWheel();

        // rotatePyramid();
        
        var lastTimeMsec  = lastTimeMsec || nowMsec-1000/60;
        var deltaMsec = Math.min(200, nowMsec - lastTimeMsec);
        lastTimeMsec  = nowMsec;
        
        let delta = clock.getDelta();
        uniforms.u_time.value += delta * 2;

        // call each update function
        updateFcts.forEach(function(updateFn){
            updateFn(deltaMsec/1000, nowMsec/1000);
        });
        // console.log(ps01exists);
        if (ps01exists) {
            gg.main.ps01.run();
        }

        boxMesh.rotation.x = lastTimeMsec/12000;
        boxMesh.rotation.z = lastTimeMsec/5000;

        // if(moveCamera) {
        //     camera.position.x++;
        //     camera.position.y++;
        // }

        renderer.render( scene, camera );

        stats.end();
    }

    /**
     * Remove an element from the Scene
     */
    function removeEntity(object){
        var selectedObject = scene.getObjectByName(object.name);
        scene.remove( selectedObject );
        animate();
    }

    function setPs01(exists){
        ps01exists = exists;
    }

    function setCameraRotation(rotate){
        moveCamera = rotate;
    }

    /** 
     * Init all functions
     */
    showStats();
    initScene();
    animate();

    return {
        scene : scene,
        camera : camera,
        renderer : renderer,
        container,
        controls,
        updateFcts : updateFcts,
        renderHelpers : renderHelpers,
        clearScene : clearScene,
        renderMinaret : renderMinaret,
        renderFloor : renderFloor,
        renderCube : renderCube,
        renderPlaneGeometryShaderFloor : renderPlaneGeometryShaderFloor,
        setPs01 : setPs01,

        setCameraRotation : setCameraRotation,
        activeScene : activeScene
    };

}(generative_graphics));
