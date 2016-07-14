/*
 * @author Julio Del Valle
 * juulio.com - Costa Rica
 */

'use strict';

var juulio = window.juulio || {};

(function (context) {

	var scene,
		loader,
		camera,
		controls,
		renderer,
		geometry,
		textMesh,
		isMobile,
		characterPosition,
		isProductionEnvironment,
		charactersAnimationDirection;

	/*****************************************************************************
	 Inits all functions */
  function init(font) {
		characterPosition = 0,
		charactersAnimationDirection = 'right';

		// Verifies if app is running on a mobile device
		isMobile = false;

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 			isMobile = true;
		}

		setScene();
		renderTextGeometry(font);
		update();
  }

	/*****************************************************************************
	 Inits the THREE.js basic scene elements */
	function setScene() {
		 var rendererHeight = window.innerHeight,
		 	rendererWidth = window.innerWidth;


		renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
		renderer.setSize(rendererWidth, rendererHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setClearColor(0xFFFFFF);

		scene = new THREE.Scene();

		camera = new THREE.PerspectiveCamera(75, rendererWidth / rendererHeight, .1, 50);

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

		if(!isProductionEnvironment){
			var axisHelper = new THREE.AxisHelper( 5 );
			scene.add( axisHelper );
		}

		window.addEventListener( 'resize', resizeViewport, false );

		document.body.appendChild( renderer.domElement );

		resizeViewport();
	}

	/*****************************************************************************
	 Loads the JSON font and call */
	function renderTextGeometry(font){
		var theText,
			letterMesh;

		if(isProductionEnvironment){
			theText = 'juulio.com';
		}
		else {
			 theText = "Possible 3D";
		}

		textMesh = new THREE.Group();

		var material = new THREE.MultiMaterial( [
			new THREE.MeshPhongMaterial({ color : 0x000000 }), // frente de las letras
			new THREE.MeshPhongMaterial({ color : 0x505050, emissive : 0x505050 })
		] );

		for(var i=0;i<theText.length;i++){
			geometry = new THREE.TextGeometry( theText[i], {
				font: font,
				size: 1,
				height: 0.8,
				curveSegments: 20
			});

			geometry.center();

			letterMesh = new THREE.Mesh( geometry, material );
			letterMesh.position.x = i;
			textMesh.add( letterMesh)
		}

		textMesh.position.x = -1.5;
		textMesh.scale.set(0.4, 0.4, 0.4);
		if(isMobile){
			textMesh.position.y = 3.5;
		}

		scene.add(textMesh);
	}

	/*******************************************************************************
	 Updates all the elements on the screen - requestAnimationFrame */
	function update() {
	  requestAnimationFrame(update);

		animateCharacter();

		controls.update();

		renderer.render(scene, camera);
	}

	/*******************************************************************************
	 Animates each character.
	 First rotates all characters to the right
	 Then rotates all characters to the left */
	function animateCharacter(){
		var rotationSpeed = 0.2,
			currentCharacterRotationY;

		if(charactersAnimationDirection == 'right'){
			if(characterPosition < textMesh.children.length) {
				currentCharacterRotationY = textMesh.children[characterPosition].rotation.y;

				// Rotate Current Character on the Y Axis
				textMesh.children[characterPosition].rotation.y += rotationSpeed;

				if(textMesh.children[characterPosition].rotation.y >= 6.28) {
					characterPosition++;
				}

				if(characterPosition < textMesh.children.length-1) {
					if(currentCharacterRotationY >= 2) {
						// Begin rotating the next character
						textMesh.children[characterPosition + 1].rotation.y += rotationSpeed;
					}
				}
			}
			else {
				charactersAnimationDirection = 'left';
				characterPosition--;
			}
		}
		else {
			if(charactersAnimationDirection == 'left'){
				if(characterPosition > 0) {
					currentCharacterRotationY = textMesh.children[characterPosition].rotation.y;
					// Rotate Current Character on the Y Axis
					textMesh.children[characterPosition].rotation.y -= rotationSpeed;

					if(textMesh.children[characterPosition].rotation.y <= 0) {
						characterPosition--;
					}

					if(characterPosition < textMesh.children.length-1) {
						if(currentCharacterRotationY >= 2) {
							textMesh.children[characterPosition - 1].rotation.y -= rotationSpeed;
						}
					}
				}
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


	// Verifies if app is running on the production environment juulio.com
	isProductionEnvironment = false;

	if(document.domain == 'juulio.com'){
		isProductionEnvironment = true;
	}
	
	/*****************************************************************************
	 Load the JSON font and call init */
  loader = new THREE.FontLoader();
	var fontPath;

	if (isProductionEnvironment){
		fontPath = 'dist/fonts/gotham_black_regular.json';
	}
	else{
		fontPath = 'fonts/gotham_black_regular.json';
	}

  loader.load(fontPath, function(font){
    init(font);
  });

}(juulio));
