/**
 * Julio Del Valle
 * Possible
 * Costa Rica 2016
 */

'use strict';

var juliodelvalle = window.juliodelvalle || {};

(function (context) {

    /*
     * Declare all global variables
     */

    let scene, loader, camera, controls, renderer,
        clock, geometry, isMobile, windowHalfX, windowHalfY,
        shaderMaterials, planeMesh, // TODO create a plane mesh with lava material
        fontLoader, textMesh, letterPosition,
        uniforms, manager;

    /*
     * Inits all functions
     */
    function init(font) {
        // Verifies if app is running on a mobile device
        isMobile = false;

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            isMobile = true;
        }

        window.addEventListener( 'resize', onWindowResize, false );

        setScene();

        setupShaderMaterials();

        renderTextGeometry(font);
        
        onWindowResize();
        
        update();
    }

    /*
     * Updates all the elements on the screen - requestAnimationFrame
     */
    function update() {
        requestAnimationFrame(update);

        var delta = clock.getDelta();
        uniforms.u_time.value += delta * 2;

        if(letterPosition < textMesh.children.length) {
            rotateLetters();
        }

        textMesh.rotation.x += 0.01;

        controls.update();

        renderer.render(scene, camera);
    }

    /*
     * Init Uniforms for shaderMaerial
     * TODO: create a shaderMaterial array to use several shaders on several materials
     */
    function setupShaderMaterials(){
        shaderMaterials = [];

        uniforms = {
            u_time: { type: "f", value: 1.0 },
            u_resolution: { type: "v2", value: new THREE.Vector2() },
            u_mouse: { type: "v2", value: new THREE.Vector2() }
        };

        uniforms.u_resolution.value.x = window.innerWidth;
        uniforms.u_resolution.value.y = window.innerHeight;

        shaderMaterials.push(
            new THREE.ShaderMaterial( {
                name: "Voronoi",
                uniforms: uniforms,
                vertexShader: document.getElementById( 'vertexShader' ).textContent,
                fragmentShader: document.getElementById( 'voronoiFragmentShader' ).textContent
            })
        );

        shaderMaterials.push(
            new THREE.ShaderMaterial( {
                name: "Jaguar Texture",
                uniforms: uniforms,
                vertexShader: document.getElementById( 'vertexShader' ).textContent,
                fragmentShader: document.getElementById( 'jaguarFragmentShader' ).textContent
            })
        );

        shaderMaterials.push(
            new THREE.ShaderMaterial( {
                name: "Red Pulse",
                uniforms: uniforms,
                vertexShader: document.getElementById( 'vertexShader' ).textContent,
                fragmentShader: document.getElementById( 'redPulseFragmentShader' ).textContent
            })
        );

        shaderMaterials.push(
            new THREE.ShaderMaterial( {
                name: "Black & White Matrix",
                uniforms: uniforms,
                vertexShader: document.getElementById( 'vertexShader' ).textContent,
                fragmentShader: document.getElementById( 'bwMatrixFragmentShader' ).textContent
            })
        );

        shaderMaterials.push(
            new THREE.ShaderMaterial( {
                name: "Rotated Tiles",
                uniforms: uniforms,
                vertexShader: document.getElementById( 'vertexShader' ).textContent,
                fragmentShader: document.getElementById( 'rotatedTilesFragmentShader' ).textContent
            })
        );

        shaderMaterials.push(
            new THREE.ShaderMaterial( {
                name: "Noise",
                uniforms: uniforms,
                vertexShader: document.getElementById( 'vertexShader' ).textContent,
                fragmentShader: document.getElementById( 'noiseFragmentShader' ).textContent
            })
        );

        shaderMaterials.push(
            new THREE.ShaderMaterial( {
                name: "Simplex Grid",
                uniforms: uniforms,
                vertexShader: document.getElementById( 'vertexShader' ).textContent,
                fragmentShader: document.getElementById( 'simplexGridFragmentShader' ).textContent
            })
        );

        shaderMaterials.push(
            new THREE.ShaderMaterial( {
                name: "Displacement",
                uniforms: uniforms,
                vertexShader: document.getElementById( 'vertexShader' ).textContent,
                fragmentShader: document.getElementById( 'displacementFragmentShader' ).textContent
            })
        );
    }

    /*
     * Returns true if a given number n is Even
     */
    function isEven(n) {
        return n % 2 == 0;
    }

    /*
     * Basic THREE.js scene init
     */
    function setScene() {
        let canvasContainer = document.getElementById('canvasContainer'),
            // rendererHeight = canvasContainer.clientHeight,
            rendererWidth = '600px',
            rendererHeight = '400px';
            // rendererWidth = canvasContainer.clientWidth;
            console.log(rendererHeight);
            console.log(rendererWidth);

            // rendererHeight = 300,
            // rendererWidth = 700;
        // rendererWidth = window.innerWidth;

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false});
        renderer.setSize(rendererWidth, rendererHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0xFFFFFF);

        scene = new THREE.Scene();

        clock = new THREE.Clock();

        camera = new THREE.PerspectiveCamera(75, rendererWidth / rendererHeight, .1, 50);

        if(isMobile) {
            camera.position.z = 12;
        }
        else {
            camera.position.z = 6;
        }

        controls = new THREE.OrbitControls(camera);
        controls.enablePan = true;
        controls.enableZoom = true;

        var light = new THREE.AmbientLight( 0x000000 );
        scene.add( light );

        var lights = [];
        lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

        lights[ 0 ].position.set( 0, 200, 0 );
        lights[ 1 ].position.set( 100, 200, 100 );
        lights[ 2 ].position.set( - 100, - 200, - 100 );

        scene.add( lights[ 0 ] );
        scene.add( lights[ 1 ] );
        scene.add( lights[ 2 ] );

        // var axisHelper = new THREE.AxisHelper( 5 );
        // scene.add( axisHelper );

        canvasContainer.appendChild( renderer.domElement );
    }

    /*
     * Loads the JSON font and call
     */
    function renderTextGeometry(font){
        let theText = "3D text",
        letterMesh;

        letterPosition = 0;

        textMesh = new THREE.Group();

        for(let i=0;i<theText.length;i++){
            geometry = new THREE.TextGeometry( theText[i], {
                font: font,
                size: 1.15,
                height: 0.25,
                curveSegments: 20
            });

            geometry.center();

            letterMesh = new THREE.Mesh( geometry, shaderMaterials[i] );

            letterMesh.position.x = i;

            textMesh.add( letterMesh)
        }

        textMesh.position.x = -4;
        textMesh.position.y = 2;

        if(isMobile){
            textMesh.position.y = 3.5;
        }

        scene.add(textMesh);
    }

    /*
     * Rotates each letter on the Y Axis
     */
    function rotateLetters(){
        let nextLetterRotationY,
        rotationSpeed = 0.22,
        currentLetterRotationY = textMesh.children[letterPosition].rotation.y;

        // Rotate Current Letter on the Y Axis
        textMesh.children[letterPosition].rotation.y += rotationSpeed;

        if(textMesh.children[letterPosition].rotation.y >= 6.28) {
            letterPosition++;
        }

        if(letterPosition < textMesh.children.length-1) {
            if(currentLetterRotationY >= 2) {
                textMesh.children[letterPosition + 1].rotation.y += rotationSpeed;
            }
        }
    }

    /*
     * Handles onWindowResize event and updates Projection Matrix
     */
    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    /*
     * Handles onDocumentTouchStart Event
     */
    function onDocumentTouchStart( event ) {

        if ( event.touches.length == 1 ) {
            event.preventDefault();
            mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
            targetRotationOnMouseDown = targetRotation;
        }
    }

    /*
     * Handles onDocumentTouchMove Event
     */
    function onDocumentTouchMove( event ) {

        if ( event.touches.length == 1 ) {
            event.preventDefault();
            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;
        }
    }

    /*
     * Load the JSON font and call init
     */
    loader = new THREE.FontLoader();
    loader.load('./fonts/gotham_black_regular.json', function(font){
        init(font);
    });

}(juliodelvalle));
