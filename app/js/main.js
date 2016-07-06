/*
 * Julio Del Valle
 * Possible
 * Costa Rica 2016
 */

'use strict';

var juliodelvalle = window.juliodelvalle || {};

(function (context, $) {

	'use strict';

	var scene,
		loader,
		camera,
		controls,
		renderer,
		geometry,
		textMesh,
		isMobile,
		letterPosition;

	/*****************************************************************************
	 Inits all functions */
  function init(font) {
		letterPosition = 0;

		// Verifies if app is running on a mobile device
		isMobile = false;

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 			isMobile = true;
		}

		setScene();
		renderTextGeometry(font);
		update();
  }

	/*******************************************************************************
	 Updates all the elements on the screen - requestAnimationFrame */
	function update() {
	  requestAnimationFrame(update);

		if(letterPosition < textMesh.children.length) {
			rotateLetters();
		}

		controls.update();

		renderer.render(scene, camera);
	}

	/*****************************************************************************
	 Inits the THREE.js basic scene elements */
	function setScene() {
		 var rendererHeight = 700,
		 	rendererWidth = window.innerWidth;


		renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
		renderer.setSize(rendererWidth, rendererHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setClearColor(0xFFFFFF);

		scene = new THREE.Scene();

		camera = new THREE.PerspectiveCamera(75, rendererWidth / rendererHeight, .1, 50);
		// camera = new THREE.OrthographicCamera( rendererWidth / - 2, rendererWidth / 2, rendererHeight / 2, rendererHeight / - 2, 1, 1000 );

		// camera.position.y = 1.2;

		if(isMobile) {
			camera.position.z = 12;
		}
		else {
			camera.position.z = 4;
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

		// window.addEventListener( 'resize', resizeViewport, false );

		document.body.appendChild( renderer.domElement );

		// resizeViewport();
	}

	/*****************************************************************************
	 Loads the JSON font and call */
	function renderTextGeometry(font){
		var theText = "POSSIBLE",
			letterWidth = 0,
			letterMesh;

		textMesh = new THREE.Group();

		var material = new THREE.MultiMaterial( [
			new THREE.MeshPhongMaterial({ color : 0x000000 }), // frente de las letras
			new THREE.MeshPhongMaterial({ color : 0x505050, emissive : 0x505050 })
		] );

		for(var i=0;i<theText.length;i++){
			geometry = new THREE.TextGeometry( theText[i], {
				font: font,
				size: 1,
				height: 0.25,
				curveSegments: 20
			});

			geometry.center();

			letterMesh = new THREE.Mesh( geometry, material );
			letterMesh.position.x = i;

			// switch (i) {
			// 	case 1:
			// 		letterMesh.position.x = i - 0.04;
			// 		break;
			// 	case 2:
			// 		letterMesh.position.x = i + 0.1;
			// 		break;
			// 	case 3:
			// 		letterMesh.position.x = i + 0.04;
			// 		break;
			// 	case 4:
			// 		letterMesh.position.x = i - 0.02;
			// 		break;
			// 	case 5:
			// 		letterMesh.position.x = i - 0.5;
			// 		break;
			// 	case 6:
			// 		letterMesh.position.x = i - 0.45;
			// 		break;
			// 	case 7:
			// 		letterMesh.position.x = i - 0.5;
			// 		break;
			// 	default:
			// 	letterMesh.position.x = i;
			// }

			textMesh.add( letterMesh)
		}

		textMesh.position.x = -3.9;

		if(isMobile){
			textMesh.position.y = 3.5;
		}

		scene.add(textMesh);
	}

	/*******************************************************************************
	 Rotates each letter on the Y Axis */
	function rotateLetters(){
		var nextLetterRotationY,
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

	/*******************************************************************************
	 Handles onWindowResize Event */
	function onWindowResize() {
		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	/*******************************************************************************
	 Handles onDocumentTouchStart Event */
	function onDocumentTouchStart( event ) {
		if ( event.touches.length == 1 ) {
			event.preventDefault();
			mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
			targetRotationOnMouseDown = targetRotation;
		}
	}

	/*******************************************************************************
	 Handles onDocumentTouchMove Event */
	function onDocumentTouchMove( event ) {
		if ( event.touches.length == 1 ) {
			event.preventDefault();
			mouseX = event.touches[ 0 ].pageX - windowHalfX;
			targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;
		}
	}

	/*******************************************************************************
	 Handles the resizeViewPort Event */
	function resizeViewport() {
	    camera.aspect = window.innerWidth / window.innerHeight;
	    // camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
	}

	/*****************************************************************************
	 Load the JSON font and call init */
  loader = new THREE.FontLoader();
  loader.load('fonts/gotham_black_regular.json', function(font){
    init(font);
  });

}(juliodelvalle));
