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
  velX,
  velY,
  posX,
  posY;

 //---------------------------------------------------------
// Init THREE required objects
function init(){

  // 1. Set amount of particles
  particleCount = 400;
  // particleCount = 0;

  // 2. Create renderer object for THREE.js
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x000000);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // 3. Create scene object
  scene = new THREE.Scene();

  // 4. Create camera object
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 60;

  // 5. Create particles Geometry
  particles = new THREE.Geometry();

  // 6. Set material
  textureLoader = new THREE.TextureLoader();

  material = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    map: textureLoader.load('particle.png'),
    transparent: true
  });

  // 7. Create the individual particles
  for(var p = 0; p < particleCount; p++) {
    createNewParticle();
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
// Create a New Particle at (0, 0, 0,) with random velX and velY velocities
function createNewParticle(){
  particle = new THREE.Vector3(0, 0, 0);

  // create a velocity vector
  velX = Math.random() * (-0.002 - 0.003) + 0.003;
  velY = Math.random() * (-0.003 - 0.004) + 0.004;
  particle.velocity = new THREE.Vector3( velX, velY, 0 );

  // add it to the geometry
  particles.vertices.push(particle);
}

//---------------------------------------------------------
// this function is executed each animation frame
function animate(){
  requestAnimationFrame(animate);

  // particleCount = particles.vertices.length;

  var pCount = particleCount;
  // if (particleCount < 500){
  //   createNewParticle();
  // }

  // Pending -> Kill particles

  while (pCount--) {
    // get the particle
    particle = particles.vertices[pCount];

    // Move particle on Y index to make it go further from the center
    particle.add(particle.velocity);
  }

  // Rotate the whole particle System 
  if(particleSystem.rotation.z >= 2){
    particleSystem.rotation.x += 0.00001;
    particleSystem.rotation.y += 0.001;
  }

  particleSystem.rotation.z += 0.001;

  // flag to the particle system that we've changed its vertices.
  particles.verticesNeedUpdate = true;

  //draw
  renderer.render( scene, camera );
 }


//---------------------------------------------------------
// Begin
init();
animate();
