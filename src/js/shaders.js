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
        planeGeometry,
        planeMesh,
        shaderMaterial,
        updateFcts = [],
        shaderPosition = 0,
        uniforms, clock;

    let SCREEN_WIDTH = window.innerWidth;
    let SCREEN_HEIGHT = window.innerHeight;
    let aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

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
        uniforms = {
            fogDensity: { value: 0.45 },
            fogColor:   { value: new THREE.Vector3( 0, 0, 0 ) },
            u_time:       { value: 1.0 },
            u_resolution: { value: new THREE.Vector2() },
            uvScale:    { value: new THREE.Vector2( 0.3, 0.3 ) },
        };

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

        planeGeometry = new THREE.PlaneGeometry( 1, 1);
        planeMesh = new THREE.Mesh( planeGeometry, shaderMaterial );
        planeMesh.scale.set(2, 2, 2);
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
        
        // camera = new THREE.OrthographicCamera( SCREEN_WIDTH / - 2, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, SCREEN_HEIGHT / - 2, 1, 1000 );
        camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH/SCREEN_HEIGHT, 0.1, 1000 );
        camera.position.z = 1;

        renderer = new THREE.WebGLRenderer( );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setClearColor( 0xFFFFFF, 1 );
        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        document.body.appendChild( renderer.domElement );

        setupShaderMaterials();
        
        renderPlaneMeshWithShaderMaterial('pulse');

        window.addEventListener( 'resize', onWindowResize, false );
        window.addEventListener( 'click', switchFragmentShader, false);

     }

    /*
     * Handles window resize events
     */
    function onWindowResize(){
        SCREEN_WIDTH = window.innerWidth;
        SCREEN_HEIGHT = window.innerHeight;
        aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
                
        camera.aspect = 0.5 * aspect;
        camera.updateProjectionMatrix();

        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
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

        // Replace Shader on the shaderMaterial
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

        stats.end();
    }

    /** 
     * Init all functions
     */
    showStats();
    initScene();
    animate();

}(generative_graphics));
