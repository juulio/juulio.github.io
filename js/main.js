/**
 * @author Julio Del Valle - Costa Rica
 * juulio.com - Costa Rica
 */

'use strict';

var juulio = window.juulio || {};

(function (context) {

	var scene,
		loader,
		camera,
		renderer,
		geometry,
		textMesh,
		isMobile,
		characterPosition,
		characterSize,
		isProductionEnvironment,
		charactersAnimationDirection;

	/*****************************************************************************
	 Inits all variables and functions */
	 function init(){

	 	// Verifies if app is running on the production environment juulio.com
	 	isProductionEnvironment = false;

	 	if(document.domain != 'localhost'){
	 		isProductionEnvironment = true;
	 	}

		// Verifies if app is running on a mobile device
		isMobile = false;

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 			isMobile = true;
		}

		if(!isMobile){
			// init Masonry layout plugin
 		 var elem = document.querySelector('.grid');
 		 var msnry = new Masonry( elem, {
 			 // options
 			 itemSelector: '.grid-item',
 			 columnWidth: 200
 		 });
		}

		// Sets initial values for characters rotation
		characterPosition = 0,
		characterSize = 0,
		charactersAnimationDirection = 'right';

	 	// Load the JSON font and set the scene
	  loader = new THREE.FontLoader();
	 	var fontPath = 'fonts/gotham_black_regular.json';

		setScene();

		loader.load(fontPath, function(font){
			renderTextGeometry(font);
			update();
		});
	}

	/*****************************************************************************
	 Inits the THREE.js basic scene elements */
	function setScene() {
		var rendererHeight = 100,
			rendererWidth = 500;
		if(JUULIO.global.isMobile()){
			rendererWidth = window.innerWidth;
		}

		// Each page must define its own rendererWidth for Desktop. Maybe using a standard width is a good idea.
		//  rendererWidth = 500;

		// The next IF statement is needed in ALL experiments for mobile
		if (isMobile){
			JUULIO.rendererWidth = window.innerWidth;
		}

		renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
		renderer.setSize(rendererWidth, rendererHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setClearColor(0xFFFFFF);

		scene = new THREE.Scene();

		camera = new THREE.PerspectiveCamera(75, rendererWidth / rendererHeight, .1, 50);

		if(isMobile) {
			camera.position.x = 2;
			camera.position.y = 4;
			camera.position.z = 5;
		}
		else {
			camera.position.z = 4;
		}

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

		document.getElementById('canvasContainer').appendChild( renderer.domElement );
	}

	/*****************************************************************************
	 Loads the JSON font and call */
	function renderTextGeometry(font){
		var theText,
			letterMesh;

		if(isProductionEnvironment){
			theText = 'juulio';
		}
		else {
			 theText = "Possible 3D";
		}

		textMesh = new THREE.Group();

		var material = new THREE.MultiMaterial( [
			new THREE.MeshPhongMaterial({ color : 0xFF0000 }), // frente de las letras
			new THREE.MeshPhongMaterial({ color : 0x505050, emissive : 0x505050 })
		] );

		for(var i=0;i<theText.length;i++){
			geometry = new THREE.TextGeometry( theText[i], {
				font: font,
				size: 1.2,
				height: 0.8,
				curveSegments: 14
			});

			geometry.center();

			letterMesh = new THREE.Mesh( geometry, material );
			letterMesh.position.x = i;
			textMesh.add( letterMesh)
		}

		textMesh.position.x = -6.5;
		textMesh.scale.set(1.8, 1.8, 1.8);
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
			// 	charactersAnimationDirection = 'left';
			// 	characterPosition--;
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

	init();

}(juulio));
