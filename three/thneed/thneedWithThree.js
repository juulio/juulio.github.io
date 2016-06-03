// Thneed trees - Julio Del Valle - 2016 - Costa Rica
'use strict';

 //---------------------------------------------------------
 // Particle System Global Variables Declaration
var particleSystemCenter,
  particleSystem,
  particleCount,
  textureLoader,
  particles,
  particle,
  renderer,
  material,
  camera,
  scene;

 //---------------------------------------------------------
// Init THREE required objects
function init(){

  // 0. Set amount of particles
  particleCount = 100;

  // 1. Set the required global variables
  particleSystemCenter = new THREE.Vector3(0, 0, 0);

  // 2. Create renderer object for THREE.js
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x000000);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // 3. Create scene object
  scene = new THREE.Scene();

  // 4. Create camera object
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 50;

  // 5. Create particles Geometry
  particles = new THREE.Geometry();

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
    // create a particle
    particle = new THREE.Vector3(particleSystemCenter.x, particleSystemCenter.y, particleSystemCenter.z);

    // create a velocity vector
    particle.velocity = new THREE.Vector3( 0, 0.1, 0 );

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
    // check if we need to reset
    if (particle.y < -200) {
      particle.y = 200;
      particle.velocity.y = 0;
    }

    // update the velocity with a splat of randomniz
    // particle.velocity.y -= Math.random() * .001;

    // and the position
    particle.add( particle.velocity);
  }

  // flag to the particle system that we've changed its vertices.
  particles.verticesNeedUpdate = true;

  //draw
  renderer.render( scene, camera );
 }


//---------------------------------------------------------
// Begin
init();
animate();
