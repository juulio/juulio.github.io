// Thneed trees - Julio Del Valle - 2016 - Costa Rica
'use strict';

 //---------------------------------------------------------
 // Particle System Global Variables
var particleSystemCenter,
  directionalLight,
  particleSystem,
  particleCount,
  textureLoader,
  ambientLight,
  particles,
  particles,
  particle,
  renderer,
  geometry,
  material,
  camera,
  scene,
  mesh;

 //---------------------------------------------------------
// Init
function init(){

  // 0. Set the required global variables
  particleSystemCenter = new THREE.Vector3(0, 0, 0);

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
  particleCount = 1;

  // 6. Set material
  textureLoader = new THREE.TextureLoader();

  material = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 1,
    map: textureLoader.load('particle.png'),
    blending: THREE.AdditiveBlending,
    transparent: true
  });

  // 7. Create the individual particles
  for(var p = 0; p < particleCount; p++) {

    // Random position values, -250 -> 250
    // var pX = 0,
    // var pX = Math.random() * 500 - 250,
    //   pY = Math.random() * 500 - 250,
    //   // pY = 0,
    //   pZ = Math.random() * 500 - 50;

    // create a particle
    particle = new THREE.Vector3(particleSystemCenter.x, particleSystemCenter.y, particleSystemCenter.z);

    // create a velocity vector
    particle.velocity = new THREE.Vector3(
      0,              // x
      // -Math.random(), // y: random vel
      1,
      0         // z
    );

    // add it to the geometry
    particles.vertices.push(particle);
  }

  // 8.Create the particle system
  particleSystem = new THREE.Points(
    particles,
    material
  );

  // 9. Add The particle system to the scene
  scene.add(particleSystem);

  // 10. Add the renderer element to the DOM
  document.body.appendChild(renderer.domElement);
}

//---------------------------------------------------------
// Animated: this function is executed each animation frame
function animate(){
  requestAnimationFrame(animate);

  // add some rotation to the system
  // particleSystem.rotation.y += 0.01;
  // particleSystem.rotation.x += 0.01;

  var pCount = particleCount;

  while (pCount--) {
    // get the particle
    particle = particles.vertices[pCount];
    // particle.y++;
    // check if we need to reset
    // if (particle.y < -200) {
    //   particle.y = 200;
    //   particle.velocity.y = 0;
    // }

    // update the velocity with a splat of randomniz
    // particle.velocity.y -= Math.random() * .00001;

    // and the position
    particle.add( particle.velocity);
  }

  // flag to the particle system
  // that we've changed its vertices.
  // particleSystem.geometry.__dirtyVertices = true;

  //draw
  renderer.render( scene, camera );
 }


//---------------------------------------------------------
// Begin
init();
animate();
