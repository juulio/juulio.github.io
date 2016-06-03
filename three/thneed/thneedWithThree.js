// Thneed trees - Julio Del Valle - 2016 - Costa Rica
'use strict';

 //---------------------------------------------------------
 // Particle System Global Variables
var particleSystemGPU,
  directionalLight,
  particleSystem,
  particleCount,
  ambientLight,
  particlesGPU,
  particles,
  renderer,
  geometry,
  material,
  camera,
  scene,
  mesh;

 //---------------------------------------------------------
// Init
function init(){
  // 1. Create renderer object for THREE.js
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor( 0x000000);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // 2. Create scene object
  scene = new THREE.Scene();

  // 3. Create camera object
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 10;

  // 4. Create particles Geometry
  particles = new THREE.Geometry();

  // 5. Set amount of particles
  particleCount = 1000;

  // 6. Set material
  material = new THREE.PointCloudMaterial({
    color: 0xFFFFFF,
    size: 5,
    map: THREE.ImageUtils.loadTexture(
      "particle.png"
    ),
    blending: THREE.AdditiveBlending,
    transparent: true
  });

  // 7. Create the individual particles
  for(var p = 0; p < particleCount; p++) {

    // create a particle with random
    // position values, -250 -> 250
    var pX = Math.random() * 500 - 250,
      pY = Math.random() * 500 - 250,
      pZ = Math.random() * 500 - 250,
      particle = new THREE.Vector3(pX, pY, pZ);

    // create a velocity vector
    particle.velocity = new THREE.Vector3(
      0,              // x
      -Math.random(), // y: random vel
      0         // z
    );

    // add it to the geometry
    particles.vertices.push(particle);
  }

  // 8.Create the particle system
  particleSystem = new THREE.PointCloud(
    particles,
    material
  );

  // 9. Add The particle system to the scene
  scene.add(particleSystem);

  // Create lighting object
  // ambientLight = new THREE.AmbientLight(0x000044);
  // directionalLight = new THREE.DirectionalLight(0xffffff);
  // directionalLight.position.set(1, 1, 1).normalize();
  // scene.add(ambientLight);
  // scene.add(directionalLight);

  // 10. Add the renderer element to the DOM
  document.body.appendChild(renderer.domElement);
}

//---------------------------------------------------------
// Animated: this function is executed each animation frame
function animate(){
  requestAnimationFrame(animate);

  // add some rotation to the system
  particleSystem.rotation.y += 0.01;
  particleSystem.rotation.x += 0.01;

  var pCount = particleCount;

  while (pCount--) {
    // get the particle
    var particle = particles.vertices[pCount];

    // check if we need to reset
    if (particle.y < -200) {
      particle.y = 200;
      particle.velocity.y = 0;
    }

    // update the velocity with a splat of randomniz
    particle.velocity.y -= Math.random() * .1;

    // and the position
    particle.add( particle.velocity);
  }

  // flag to the particle system
  // that we've changed its vertices.
  particleSystem.
  geometry.
  __dirtyVertices = true;

  //draw
  renderer.render( scene, camera );
 }


//---------------------------------------------------------
// Begin
init();
animate();
