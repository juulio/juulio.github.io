var camera, scene, renderer, mesh, light;

			init();
			animate();

			function init() {
				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.z = 400;

				scene = new THREE.Scene();

        uniforms = {
					// diffuse : { type: "c", value: new THREE.Color(0xeeeeee)}
           u_time: { type: "f", value: 1.0 },
           u_resolution: { type: "v2", value: new THREE.Vector2() },
           u_mouse: { type: "v2", value: new THREE.Vector2() }
         };

         var material = new THREE.ShaderMaterial( {
           uniforms: uniforms,
           vertexShader: document.getElementById( 'vertexShader' ).textContent,
           fragmentShader: document.getElementById( 'fragmentShader' ).textContent
         } );

				//  var geometry = new THREE.BoxGeometry( 200, 200, 200 );
				//  var geometry = new THREE.SphereGeometry( 80, 32, 32 );
				var geometry = new THREE.PlaneBufferGeometry( 2, 2 );
				
				mesh = new THREE.Mesh( geometry, material );
				scene.add( mesh );

        light = new THREE.AmbientLight( 0x404040);

        scene.add( light );

				var directionalLight = new THREE.DirectionalLight(0xffffff);
				    directionalLight.position.set(1, 1, 1).normalize();
				    scene.add(directionalLight);


				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function animate() {

				requestAnimationFrame( animate );

				mesh.rotation.x += 0.005;
				mesh.rotation.y += 0.01;

        // uniforms.u_time.value += 0.05;
				renderer.render( scene, camera );

			}




      // /*
//  * Julio Del Valle THREE.js experiments
//  * Using shaders as textures
//  * Global Namespace
//  */
//  var shaders = window.shaders || {};
//
// /*
//  * Global logic
//  * @namespace
//  */
//
// (function (context) {
//
// 	'use strict';
//
//   var container;
//   var camera, scene, renderer;
//   var uniforms;
//   var mesh, controls;
//
//   init();
//   animate();
//
//   function init() {
//     container = document.getElementById( 'container' );
//
//     renderer = new THREE.WebGLRenderer();
//     renderer.setPixelRatio( window.devicePixelRatio );
//
//     camera = new THREE.Camera();
//     camera.position.z = 1;
//
//     controls = new THREE.OrbitControls(camera, renderer.domElement);
//
//     controls.enablePan = true;
//     controls.enableZoom = true;
//
//     scene = new THREE.Scene();
//
//     // var geometry = new THREE.PlaneBufferGeometry( 2, 2 );
//     var geometry = new THREE.CubeGeometry(0.8, 0.8, 0.8);
//
//     uniforms = {
//         u_time: { type: "f", value: 1.0 },
//         u_resolution: { type: "v2", value: new THREE.Vector2() },
//         u_mouse: { type: "v2", value: new THREE.Vector2() }
//     };
//
//     var material = new THREE.ShaderMaterial( {
//         uniforms: uniforms,
//         vertexShader: document.getElementById( 'vertexShader' ).textContent,
//         fragmentShader: document.getElementById( 'fragmentShader' ).textContent
//     } );
//
//     mesh = new THREE.Mesh( geometry, material );
//     scene.add( mesh );
//
//
//
//     container.appendChild( renderer.domElement );
//
//     onWindowResize();
//     window.addEventListener( 'resize', onWindowResize, false );
//
//     document.onmousemove = function(e){
//       uniforms.u_mouse.value.x = e.pageX
//       uniforms.u_mouse.value.y = e.pageY
//     }
//   }
//
//   function onWindowResize( event ) {
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     uniforms.u_resolution.value.x = renderer.domElement.width;
//     uniforms.u_resolution.value.y = renderer.domElement.height;
//   }
//
//   function animate() {
//       requestAnimationFrame( animate );
//
//       mesh.rotation.x += 0.015;
//       mesh.rotation.y += 0.01;
//
//
//       render();
//   }
//
//   function render() {
//     uniforms.u_time.value += 0.05;
//     renderer.render( scene, camera );
//   }
//
// }(shaders));
