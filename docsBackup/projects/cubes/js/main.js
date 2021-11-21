/*******************************************************************************
 POSSIBLE Costa Rica
 Julio Del Valle
 webVR POC */

var scene,
    camera,
    renderer,
    light,
    stereoEnabled = true,
    stereoFallbackEnabled = false,
    stereoFallback = false,
    stereoEffect,
    vrEffect,
    effectCache,
    noSleep,
    font,
    loader,
    mouseX = 0,
    targetRotation = 0,
    targetRotationOnMouseDown = 0,
    mouseXOnMouseDown = 0,
    textMesh,
    textColor,
    words,
    geometry,
    innerCrossHairScale,
    innerCrossHairSquare,
    innerCrossHairGrowing,
    innerCrossHairSquareRotation,
    textColorGrowing,
    raycaster;

/******************************************************************************/
function init(font) {
    let canvasContainer = document.getElementById('canvasContainer');

    if ( stereoEnabled && (WEBVR.isLatestAvailable() === false) && !stereoFallbackEnabled ) {
        document.body.appendChild( WEBVR.getMessage() );
    }

  /*****************************************************************************
   Basic THREE.js scene objects setup: renderer, scene and camera */
  renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000);
  canvasContainer.appendChild( renderer.domElement );

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1);
  camera.position.set(0, 2.2, 11);
  camera.lookAt(0, 0, 0);
  // camera.lookAt(new THREE.Vector3(0, 1.6, 0));

  // Create raycaster object
  raycaster = new THREE.Raycaster(); // create once
  raycaster.near = 0.1;
  raycaster.far = 100;
  mouse = new THREE.Vector2(); // create once

  // Draw All the Elements
  drawCrosshair();
  drawCubes();
  drawText(font);

  /*****************************************************************************
   According to the environment, enable VR or Orbit controls */
  if(stereoEnabled){
    controls = new THREE.VRControls( camera );
    controls.standing = true;
    vrEffect = new THREE.VREffect( renderer );

      if ( WEBVR.isAvailable() === true ) {
          document.body.appendChild( WEBVR.getButton( vrEffect ) );
      }else{
        if(stereoFallbackEnabled){
            console.info('Fallback to StereoEffect');
            stereoFallback = true;

            stereoEffect = new THREE.StereoEffect(renderer);
            stereoEffect.eyeSeparation = 1;

            noSleep = new NoSleep();
        }
        else {
          controls = new THREE.OrbitControls(camera);
          controls.enablePan = true;
          controls.enableZoom = true;
        }
      }
  }

  // window.addEventListener('click', onClick);
  window.addEventListener( 'resize', resizeViewport, false );

//   document.body.appendChild( renderer.domElement );

  resizeViewport();

  // Uncomment the next line to enable VoiceCommands
  // loadVoiceCommands();

  window.addEventListener( 'mousemove', onMouseMove, false );

  update();
}

/*******************************************************************************
 Updates all the elements on the screen - requestAnimationFrame */
function update() {
  requestAnimationFrame(update);

  updateCrossHair();
  updateText();
  updateRaycaster();

  if(stereoEnabled){
    if(stereoFallbackEnabled){
        stereoEffect.render( scene, camera );
    }else{
      vrEffect.render( scene, camera );
      controls.update();
    }
  }else{
    renderer.render(scene, camera);
  }
}

/*******************************************************************************
  Toggle Stereo Mode for webVR */
function toggleStereo(){
    stereoEnabled = !stereoEnabled;
    if(stereoEnabled){
        if(effectCache){
            stereoEffect = effectCache
        }else{
            stereoEffect = new THREE.StereoEffect(renderer);
            stereoEffect.eyeSeparation = 1;
            effectCache = effect;
        }
    }else{
        stereoEffect = null;
    }
    resizeViewport();
}

/*******************************************************************************
  Handles Click Event */
function onClick(){
  noSleep.enable();
  fullscreen();
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
    camera.updateProjectionMatrix();
    if(stereoEffect){
        stereoEffect.setSize(window.innerWidth, window.innerHeight);
    }else{
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

/*******************************************************************************
 Toggles fullscreen */
function fullscreen() {
  if (document.body.requestFullscreen) {
    document.body.requestFullscreen();
  } else if (renderer.domElement.msRequestFullscreen) {
    window.msRequestFullscreen();
  } else if (renderer.domElement.mozRequestFullScreen) {
    document.body.mozRequestFullScreen();
  } else if (renderer.domElement.webkitRequestFullscreen) {
    document.body.webkitRequestFullscreen();
  }
}

/*******************************************************************************
 Enables voice commands */
function loadVoiceCommands(){
  if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    let commands = {
      'black': function() {
        // theText = 'Possible'
        textMesh.material.materials[0].color.setHex('#FFFFFF');
        annyang.abort();
      }
    };

    // Add our commands to annyang
    annyang.addCommands(commands);
    // annyang.setLanguage('es-CR');
    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }
}

/*******************************************************************************
 Draws the red squared Crosshair */
function drawCrosshair(){
  innerCrossHairScale = 0.07;
  innerCrossHairGrowing = true;
  innerCrossHairSquareRotation = 0.03;

  let crosshairPositionZ = -0.9;
  let material = new THREE.LineBasicMaterial({ color: 0x00FF00 });

  let x = 0.007, y = 0.007; // crosshair size

  let geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(-x, y, 0));
  geometry.vertices.push(new THREE.Vector3(x, y, 0));
  geometry.vertices.push(new THREE.Vector3(x, -y, 0));
  geometry.vertices.push(new THREE.Vector3(-x, -y, 0));
  geometry.vertices.push(new THREE.Vector3(-x, y, 0));

  let crosshair = new THREE.Line( geometry, material );

  let lineGeometry = new THREE.Geometry();
  lineGeometry.vertices.push(new THREE.Vector3(0, 3, 0));
  lineGeometry.vertices.push(new THREE.Vector3(0, 3, -40));

  let crosshairLine = new THREE.Line(lineGeometry, material);

  // place it in the center
  let crosshairPercentX = 50;
  let crosshairPercentY = 50;
  let crosshairPositionX = (crosshairPercentX / 100) * 2 - 1;
  let crosshairPositionY = (crosshairPercentY / 100) * 2 - 1;

  crosshair.rotation.z = 45 * Math.PI / 180;
  crosshair.position.x = crosshairPositionX * camera.aspect;
  crosshair.position.y = crosshairPositionY;
  crosshair.position.z = crosshairPositionZ;

  camera.add( crosshair );

  // Center square
  let squareGeometry = new THREE.Geometry();
  squareGeometry.vertices.push(new THREE.Vector3(-x, y, 0));
  squareGeometry.vertices.push(new THREE.Vector3(x, y, 0));
  squareGeometry.vertices.push(new THREE.Vector3(x, -y, 0));
  squareGeometry.vertices.push(new THREE.Vector3(-x, -y, 0));
  squareGeometry.vertices.push(new THREE.Vector3(-x, y, 0));
  innerCrossHairSquare = new THREE.Line( squareGeometry, material );
  innerCrossHairSquare.scale.set(innerCrossHairScale, innerCrossHairScale, innerCrossHairScale);
  innerCrossHairSquare.position.x = crosshairPositionX * camera.aspect;
  innerCrossHairSquare.position.y = crosshairPositionY;
  innerCrossHairSquare.position.z = crosshairPositionZ;
  camera.add( innerCrossHairSquare );

  scene.add( camera );
}

/*******************************************************************************
 Updates Inner Crosshair Square Constantly */
function updateCrossHair(){
  // Rotate inner crosshair
  innerCrossHairSquare.rotation.z += innerCrossHairSquareRotation;

  // Scale inner crosshair
  if(innerCrossHairGrowing){
    innerCrossHairScale+=0.005;
  }
  else {
    innerCrossHairScale-=0.005;
  }

  if(innerCrossHairScale >= 0.4){
    innerCrossHairGrowing = false;
  }
  if(innerCrossHairScale <= 0.07){
    innerCrossHairGrowing = true;
  }

  innerCrossHairSquare.scale.set(innerCrossHairScale, innerCrossHairScale, innerCrossHairScale);
}

/*******************************************************************************
 Draws Cubes Walls  */
function drawCubes(){
  let material,
    geometry = new THREE.BoxGeometry( 1, 1, 1 );

  let cubeScale = .3;
  let rows=10,
    columns=10,
    r=0,
    c=0;

  for(r=-rows/2; r<rows;r++){

    for(c=-columns/2; c<columns;c++){

      // Abajo
      material = new THREE.MeshLambertMaterial( {color: 0xd3d3d3, wireframe:false} );
      cube = new THREE.Mesh( geometry, material );
      cube.position.set(c,-5,r);
      cube.scale.set(cubeScale,cubeScale,cubeScale);
      cube.name = 'cube';
      scene.add(cube);

      // Arriba
      material = new THREE.MeshLambertMaterial( {color: 0xd3d3d3, wireframe:false} );
      cube = new THREE.Mesh( geometry, material );
      cube.position.set(c,9,r);
      cube.scale.set(cubeScale,cubeScale,cubeScale);
      cube.name = 'cube';
      scene.add(cube);

      // Izquierda
      material = new THREE.MeshLambertMaterial( {color: 0xd3d3d3, wireframe:false} );
      cube = new THREE.Mesh( geometry, material );
      cube.position.set(-6,c,r);
      cube.scale.set(cubeScale,cubeScale,cubeScale);
      cube.name = 'cube';
      scene.add(cube);

      // Derecha
      material = new THREE.MeshLambertMaterial( {color: 0xd3d3d3, wireframe:false} );
      cube = new THREE.Mesh( geometry, material );
      cube.position.set(10,c,r);
      cube.scale.set(cubeScale,cubeScale,cubeScale);
      cube.name = 'cube';
      scene.add(cube);

      // Fondo
      material = new THREE.MeshLambertMaterial( {color: 0xd3d3d3, wireframe:false} );
      cube = new THREE.Mesh( geometry, material );
      cube.position.set(c, r, 10);
      cube.scale.set(cubeScale,cubeScale,cubeScale);
      cube.name = 'cube';
      scene.add(cube);

      // Frente
      material = new THREE.MeshLambertMaterial( {color: 0xd3d3d3, wireframe:false} );
      cube = new THREE.Mesh( geometry, material );
      cube.position.set(c, r, -6);
      cube.scale.set(cubeScale,cubeScale,cubeScale);
      cube.name = 'cube';
      scene.add(cube);
    }
  }

  light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );

  scene.add( light );
}

/*******************************************************************************
 Draws Text */
function drawText(font){
  let theText = "just move around";
  textColorGrowing = true,
  textColor = {
    r : 0,
    g : 0,
    b : 0
  };

  let hash = document.location.hash.substr( 1 );

  if ( hash.length !== 0 ) {
    theText = hash;
  }

  geometry = new THREE.TextGeometry( theText, {
    font: font,
    size: 1,
    height: 0.2,
    curveSegments: 10
  });

  geometry.computeBoundingBox();

  let centerOffset = -0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );

  let material = [
    new THREE.MeshBasicMaterial( { color: 0x7E7E7E, overdraw: 0.5 } ),// FRENTE  de las letras
    new THREE.MeshBasicMaterial( { color: textColor } ) // LADO de las letras
  ];
  // let material = new THREE.MultiMaterial( [
  //   // new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff, overdraw: 0.5 } ),
    
  //   // new THREE.MeshBasicMaterial( { color: 0xA8A8A8 } ) // LADO de las letras
    
  // ] );

  // let material = new THREE.MeshBasicMaterial( { color: 0x7E7E7E, overdraw: 0.5 } );
  // let material = new THREE.MeshLambertMaterial( {color: 0xd3d3d3, wireframe:false} );

  textMesh = new THREE.Mesh( geometry, material );

  textMesh.position.x = centerOffset;
  textMesh.position.y = 0;
  textMesh.position.z = -4;

  group = new THREE.Group();
  group.add( textMesh );

  scene.add( group );
}

/*******************************************************************************
 Updates Text - Currently not working */
function updateText(){
  let textColorGrowth = 0.01;

  if(textColorGrowing) {
    textColor.r+=textColorGrowth;
    textColor.g+=textColorGrowth;
    textColor.b+=textColorGrowth;
  }
  else {
    textColor.r-=textColorGrowth;
    textColor.g-=textColorGrowth;
    textColor.b-=textColorGrowth;
  }

  if(textColor.r >= 1){
    textColorGrowing = false;
  }
  if(textColor.r <= 0){
    textColorGrowing = true;
  }
  textMesh.material[0].color = textColor;
}

/*******************************************************************************
 Adds Two Hex Values */
function addHexColor(c1, c2) {
  let hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
  while (hexStr.length < 6) { hexStr = '0' + hexStr; } // Zero pad.
  return hexStr;
}

/*******************************************************************************
 Normalizes mouse coordinates for raycasting */
function onMouseMove( event ) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

/*******************************************************************************
 Verifies Raycaster Array */
function updateRaycaster(){
  let intersectedObject;

  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera(  { x: 0, y: 0 }, camera );
  // raycaster.set(controls.getObject().position, controls.getDirection(new THREE.Vector3()));

  // calculate objects intersecting the picking ray
  let intersects = raycaster.intersectObjects( scene.children, true );
  // let intersects = raycaster.intersectObjects( scene.getObjectByName('cube').children );

  for ( let i = 0; i < intersects.length; i++ ) {
    intersectedObject = intersects[ i ].object;

    if(intersectedObject.name == 'cube'){
      // intersectedObject.material.color.set(0xff0000);
      spinCube(intersectedObject);
    }
    // console.log(intersects[ i ].object);
  }
}

/*******************************************************************************
 Spins a cube on the Y axis */
function spinCube(cube){
  let rotationCounter = 100;
  while(rotationCounter>0){
    cube.rotation.y-=0.1;
    cube.material.color.set(0xff0000);
    rotationCounter--;
  }
  // console.log(cube);
  // console.log(cube.material.color);
}

// Load the JSON font and init all functions
loader = new THREE.FontLoader();
loader.load('../../fonts/gotham_black_regular.json', function(font){
  init(font);
});
