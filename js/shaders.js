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
        planeGeometry,
        planeMesh,
        shaderMaterial,
        updateFcts = [],
        shaderPosition = 0,
        uniforms, clock, shaderMaterials, noiseShaderMaterial;

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
     * Generates a mesh using the provided Geometry and FragmentShaderName
     */
    function renderPlaneMeshWithShaderMaterial(fragmentShaderName){
        shaderMaterial = new THREE.ShaderMaterial( {
            name: "shaderMaterial",
            uniforms: uniforms,
            vertexShader: document.getElementById( 'vertexShader' ).textContent,
            fragmentShader: document.getElementById( fragmentShaderName ).textContent,
            side: THREE.DoubleSide
        });

        planeGeometry = new THREE.PlaneGeometry( 18, 18, 32 );

        planeMesh = new THREE.Mesh( planeGeometry, shaderMaterial );

        scene.add( planeMesh );
    }

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

        renderer = new THREE.WebGLRenderer( );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setClearColor( 0xFFFFFF, 1 );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        setupShaderMaterials();

        controls = new THREE.OrbitControls( camera, renderer.domElement );
        window.addEventListener( 'resize', onWindowResize, false );
        window.addEventListener( 'click', switchFragmentShader, false);

        // switchFragmentShader();
        // renderPlaneMeshWithShaderMaterial('customGradientShader');
        renderPlaneMeshWithShaderMaterial('customGradientShader');

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
     */
    function switchFragmentShader(){
        let i,
            maxPosition,
            fragmentShaderElement,
            fragmentShaderNames = [],
            fragmentShaderScripts = document.getElementsByClassName('fragmentShader');
        
        for (i=0; i < fragmentShaderScripts.length; i++) {
            name = fragmentShaderScripts[i].id
            fragmentShaderNames.push(name);
        }

        // console.log(fragmentShaderNames);

        maxPosition = fragmentShaderNames.length-1;

        fragmentShaderName = fragmentShaderNames[shaderPosition];
        fragmentShaderElement = document.getElementById( fragmentShaderName ).textContent;

        planeMesh.material.fragmentShader = fragmentShaderElement;
        planeMesh.material.needsUpdate = true;
        planeMesh.material.uniformsNeedUpdate = true;

        shaderPosition++;

        if (shaderPosition > maxPosition ) {
            shaderPosition = 0;
        }
    }

    /**
     * Updates objects on each frame
     */
    function animate(nowMsec){
        requestAnimationFrame( animate );

        stats.begin();
        
        let lastTimeMsec;
        lastTimeMsec  = lastTimeMsec || nowMsec-1000/60;
        let deltaMsec = Math.min(200, nowMsec - lastTimeMsec);
        lastTimeMsec  = nowMsec;
        
        let delta = clock.getDelta();
        uniforms.u_time.value += delta * 2;

        // call each update function
        updateFcts.forEach(function(updateFn){
            updateFn(deltaMsec/1000, nowMsec/1000);
        });

        renderer.render( scene, camera );

        planeMesh.rotation.y += 0.002;
        stats.end();
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
        renderPlaneMeshWithShaderMaterial : renderPlaneMeshWithShaderMaterial
    };

}(generative_graphics));
