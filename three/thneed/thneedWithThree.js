// Thneed trees - Julio Del Valle - 2016 - Costa Rica
'use strict';

 //---------------------------------------------------------
 // Particle System Global Variables Declaration
var particleSystemCenter,
  particleSystem,
  particleCount,
  textureLoader,
  velocityX,
  velocityY,
  particles,
  particle,
  renderer,
  material,
  camera,
  scene,
  velY,
  posX;

 //---------------------------------------------------------
// Init THREE required objects
function init(){

  // 1. Set amount of particles
  particleCount = 50;

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
    // blending: THREE.AdditiveBlending,
    transparent: true
  });

  // 7. Create the individual particles
  for(var p = 0; p < particleCount; p++) {
    // create a particle
    posX = Math.random() * (-2 - 2) + 2;
    particle = new THREE.Vector3(posX, 0, 0);

    // create a velocity vector
    velY = Math.random() * (0.003 - 0.004) + 0.004;
    particle.velocity = new THREE.Vector3( 0, velY, 0 );

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

  var pCount = particleCount;

  while (pCount--) {
    // get the particle
    particle = particles.vertices[pCount];

    particleSystem.rotation.z += 0.002;

    // Move particle on Y index to make it go further from the center
    particle.add(particle.velocity);
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
