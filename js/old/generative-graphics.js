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
        activeScene,
        shaderPosition = 0,
        uniforms, clock, shaderMaterials, noiseShaderMaterial;

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

    /*
     *
     */
    function renderPlaneGeometryShader(fragmentShaderName){
        let shaderMaterial = new THREE.ShaderMaterial( {
            name: "Lava",
            uniforms: uniforms,
            vertexShader: document.getElementById( 'vertexShader' ).textContent,
            fragmentShader: document.getElementById( fragmentShaderName ).textContent,
            side: THREE.DoubleSide
        });

        let planeGeometry = new THREE.PlaneGeometry( 18, 18, 32 );
        planeMesh = new THREE.Mesh( planeGeometry, shaderMaterial );
        scene.add( planeMesh );
    }
    
    // generative_graphics.updateFcts = updateFcts;



    // generative_graphics.initNav();

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
        window.addEventListener( 'click', switchFragmentShader, false);
        // renderHelpers();

        renderPlaneGeometryShader('lavaFragmentShader');
     }

    /*
     * Handles window resize events
     */
    function onWindowResize(){
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    /*
     * Replaces the current fragment shader applied to the plane geometry
     *
     * AVAILABLE FRAGMENT SHADERS
     * lavaFragmentShader
     * voronoiFragmentShader
     * jaguarFragmentShader
     * redPulseFragmentShader
     * bwMatrixFragmentShader
     * rotatedTilesFragmentShader
     * noiseFragmentShader
     * simplexGridFragmentShader
     * noise2FragmentShader
     */
    function switchFragmentShader(){
        let fragmentShadersList = [
            'lavaFragmentShader',
            'voronoiFragmentShader',
            'jaguarFragmentShader',
            'redPulseFragmentShader',
            'bwMatrixFragmentShader',
            'rotatedTilesFragmentShader',
            'noiseFragmentShader',
            'simplexGridFragmentShader',
            'aaa'
        ];

        let maxPosition = fragmentShadersList.length,
            fragmentShaderName;

        shaderPosition++;

        fragmentShaderName = fragmentShadersList[shaderPosition];
        
        if (shaderPosition >= maxPosition ) {
            shaderPosition = 0;
        }

        // console.log('shaderPos: ' + shaderPosition);
        console.log("Shader Name: " + fragmentShadersList[shaderPosition]);
        renderPlaneGeometryShader(fragmentShaderName);
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
        renderCube : renderCube,
        renderPlaneGeometryShader : renderPlaneGeometryShader,
        setCameraRotation : setCameraRotation,
        activeScene : activeScene
    };

}(generative_graphics));
