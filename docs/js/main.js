/**
 * Julio Del Valle
 * Possible
 * Costa Rica 2016
 */
import { scene10 } from "./scenes/scene10.js";

'use strict';

 var juliodelvalle = window.juliodelvalle || {};
 
 (function (context) {
 
    /*
    * Declare all global variables
    */

    let scene, loader, renderer, camera, clock, geometry, isMobile, windowHalfX, windowHalfY,
        shaderMaterials, textMesh, letterPosition,
        uniforms, globalFont;

    let scene00 = new THREE.Scene(), // 3D Text
        scene01 = new THREE.Scene(), // Cubes
        scene02 = new THREE.Scene(), // Amusement Park
        scene03 = new THREE.Scene(), // Volcanic Landscape
        scene04 = new THREE.Scene(), // Mosque
        scene05 = new THREE.Scene(), // Black Box
        scene06 = new THREE.Scene(), // Xmas
        scene07 = new THREE.Scene(), // Skybox
        scene08 = new THREE.Scene(), // 3D Calendar
        scene09 = new THREE.Scene(), // Wireframe Box
        scene10 =  new THREE.Scene(); // Spheres with Shader Texture

    const rendererWidth = window.innerWidth;
    const rendererHeight = window.innerHeight;

    /*
    * Inits all functions
    */
    function init() {
        // Verifies if app is running on a mobile device
        isMobile = false;

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            isMobile = true;
        }

        window.addEventListener( 'resize', onWindowResize, false );

        scene = new THREE.Scene();

        clock = new THREE.Clock();

        camera = new THREE.PerspectiveCamera(75, rendererWidth / rendererHeight, .1, 50);

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false});
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize( rendererWidth, rendererHeight );
        renderer.setClearColor(0xFFFFFF);     

        document.body.appendChild( renderer.domElement );

        if(isMobile) {
            camera.position.z = 12;
        }
        else {
            camera.position.z = 6;
        }

        setupShaderMaterials();
        // renderTextGeometry(font);

        renderScene01();
        renderScene02();
        // renderScene10();

        let ctaScene01 = document.getElementById('scene01');
        let ctaScene02 = document.getElementById('scene02');
        let ctaScene10 = document.getElementById('scene10');

        ctaScene01.addEventListener('click', (e) => {
            e.preventDefault();
            scene = scene01;
        });
        
        ctaScene02.addEventListener('click', (e) => {
            e.preventDefault();
            scene = scene02;
        });
        
        ctaScene10.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(scene10);
            scene = scene10;
        });

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

        // if(letterPosition < textMesh.children.length) {
        //     rotateLetters();
        // }

        // textMesh.rotation.x += 0.01;

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

    /********************************************************************************
     * Create Scene 01 - 
     * @param {*} font 
     */
    let renderScene01 = () => {
        console.log("Mounting Scene 01");
        scene01.add(renderTextGeometry(globalFont));
    }

    /********************************************************************************
     * Create Scene 02 - 
     * @param {*} font 
     */
    let renderScene02 = () => {
        console.log('Mounting Scene 02');
        let cube,
            material,
            geometry = new THREE.BoxGeometry( 1, 1, 1 );

        material = new THREE.MeshLambertMaterial( {color: 0xd3d3d3, wireframe:false} );
        cube = new THREE.Mesh( geometry, material );
        scene02.add(cube);
    }

    /********************************************************************************
     * Mount Scene 10 - Shader Spheres
     * @param {*} font 
     * @returns 
     */
    let renderScene10 = () => {
        console.log("Mounting Scene 10");
        const geometry = new THREE.SphereGeometry( 2, 32, 16 );
        const material = new THREE.MeshLambertMaterial( { color: 0xffff00 } );
        const sphere = new THREE.Mesh( geometry, material );
        scene10.add( sphere );
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

        return textMesh;
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
 
         camera.aspect = rendererWidth / rendererHeight;
         camera.updateProjectionMatrix();
 
         renderer.setSize( rendererWidth, rendererHeight );
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
         globalFont = font;
         init();
     });
 
 }(juliodelvalle));