// Setup three.js WebGL renderer. Note: Antialiasing is a big performance hit.
// Only enable it if you actually need to.
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setPixelRatio(window.devicePixelRatio);

// Append the canvas element created by the renderer to document body element.
document.body.appendChild(renderer.domElement);

// Create a three.js scene.
var scene = new THREE.Scene();

// Create a three.js camera.
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

// Create raycaster object
var raycaster = new THREE.Raycaster(); // create once
raycaster.near = 0.1;
raycaster.far = 100;

drawCrosshair();

var controls = new THREE.VRControls(camera);
controls.standing = true;

// Apply VR stereo rendering to renderer.
var effect = new THREE.VREffect(renderer);
effect.setSize(window.innerWidth, window.innerHeight);


// Add a repeating grid as a skybox.
var boxSize = 5;
var loader = new THREE.TextureLoader();
loader.load('img/box.png', onTextureLoaded);

function onTextureLoaded(texture) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(boxSize, boxSize);

  var geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
  var material = new THREE.MeshBasicMaterial({
    map: texture,
    color: 0x01BE00,
    side: THREE.BackSide
  });

  // Align the skybox to the floor (which is at y=0).
  skybox = new THREE.Mesh(geometry, material);
  skybox.position.y = boxSize/2;
  scene.add(skybox);

  // For high end VR devices like Vive and Oculus, take into account the stage
  // parameters provided.
  setupStage();
}


// Create a VR manager helper to enter and exit VR mode.
var params = {
  hideButton: false, // Default: false.
  isUndistorted: false // Default: false.
};
var manager = new WebVRManager(renderer, effect, params);

// Create 3D objects.
var geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
var material = new THREE.MeshNormalMaterial({
  wireframe: false
});
var cube = new THREE.Mesh(geometry, material);

// Position cube mesh to be right in front of you.
cube.position.set(0, controls.userHeight, -1);
cube.name = 'cube';
// Add cube mesh to your three.js scene
scene.add(cube);

window.addEventListener('resize', onResize, true);
window.addEventListener('vrdisplaypresentchange', onResize, true);

// Request animation frame loop function
var lastRender = 0;
function animate(timestamp) {
  var delta = Math.min(timestamp - lastRender, 500);
  lastRender = timestamp;

  // Apply rotation to cube mesh
  cube.rotation.y += delta * 0.0006;

  updateRaycaster();

  controls.update();
  // Render the scene through the manager.
  manager.render(scene, camera, timestamp);
  effect.render(scene, camera);

  vrDisplay.requestAnimationFrame(animate);
}

function onResize(e) {
  effect.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

var vrDisplay;

// Get the HMD, and if we're dealing with something that specifies
// stageParameters, rearrange the scene.
function setupStage() {
  navigator.getVRDisplays().then(function(displays) {
    if (displays.length > 0) {
      vrDisplay = displays[0];
      if (vrDisplay.stageParameters) {
        setStageDimensions(vrDisplay.stageParameters);
      }
      vrDisplay.requestAnimationFrame(animate);
    }
  });
}

function setStageDimensions(stage) {
  // Make the skybox fit the stage.
  var material = skybox.material;
  scene.remove(skybox);

  // Size the skybox according to the size of the actual stage.
  var geometry = new THREE.BoxGeometry(stage.sizeX, boxSize, stage.sizeZ);
  skybox = new THREE.Mesh(geometry, material);

  // Place it on the floor.
  skybox.position.y = boxSize/2;
  scene.add(skybox);

  // Place the cube in the middle of the scene, at user height.
  cube.position.set(0, controls.userHeight, 0);
}




/******************************************************************************
 Verifies Raycaster Array */
function updateRaycaster(){
  var intersectedObject;
  // // update the picking ray with the camera and mouse position
  raycaster.setFromCamera(  { x: 0, y: 0 }, camera );
  // raycaster.set(controls.getObject().position, controls.getDirection(new THREE.Vector3()));

  // calculate objects intersecting the picking ray
  var intersects = raycaster.intersectObjects( scene.children, true );
  // var intersects = raycaster.intersectObjects( scene.getObjectByName('cube').children );

  for ( var i = 0; i < intersects.length; i++ ) {
    intersectedObject = intersects[ i ].object;

    if(intersectedObject.name == 'cube'){
      // intersectedObject.material.color.set(0xff0000);
      // console.log(intersectedObject);
      intersectedObject.material.wireframe = true;
    }
  }
}

/**
 ******************************************************************************
 */
function drawCrosshair(){
  innerCrossHairScale = 0.07;
  innerCrossHairGrowing = true;
  innerCrossHairSquareRotation = 0.03;

  var crosshairPositionZ = -0.9;
  var material = new THREE.LineBasicMaterial({ color: 0x00FF00 });

  var x = 0.007, y = 0.007; // crosshair size

  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(-x, y, 0));
  geometry.vertices.push(new THREE.Vector3(x, y, 0));
  geometry.vertices.push(new THREE.Vector3(x, -y, 0));
  geometry.vertices.push(new THREE.Vector3(-x, -y, 0));
  geometry.vertices.push(new THREE.Vector3(-x, y, 0));

  var crosshair = new THREE.Line( geometry, material );

  var lineGeometry = new THREE.Geometry();
  lineGeometry.vertices.push(new THREE.Vector3(0, 3, 0));
  lineGeometry.vertices.push(new THREE.Vector3(0, 3, -40));

  var crosshairLine = new THREE.Line(lineGeometry, material);

  // place it in the center
  var crosshairPercentX = 50;
  var crosshairPercentY = 50;
  var crosshairPositionX = (crosshairPercentX / 100) * 2 - 1;
  var crosshairPositionY = (crosshairPercentY / 100) * 2 - 1;

  crosshair.rotation.z = 45 * Math.PI / 180;
  crosshair.position.x = crosshairPositionX * camera.aspect;
  crosshair.position.y = crosshairPositionY;
  crosshair.position.z = crosshairPositionZ;

  camera.add( crosshair );

  // Center square
  var squareGeometry = new THREE.Geometry();
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
