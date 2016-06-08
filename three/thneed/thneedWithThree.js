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
  particleCount = 1000;
  // particleCount = 2;

  // 2. Create renderer object for THREE.js
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x000000);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // 3. Create scene object
  scene = new THREE.Scene();

  // 4. Create camera object
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 40;

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
// Each particle must have an angle, a rotationRadius and a speed variable.
function createNewParticle(){
  particle = new THREE.Vector3(0, 0, 0);

  // The angle will begin on a random value between 0 and 6.28
  particle.angle = Math.random() * 6.28;

  // Initial values
  particle.dotSpeed = Math.random() * (0.1 - 0.05) + 0.05;
  particle.rotationRadius = 0;

  // create a velocity vector
  // velX = Math.random() * (-0.002 - 0.003) + 0.003;
  // velY = Math.random() * (-0.003 - 0.004) + 0.004;

  // add it to the geometry
  particles.vertices.push(particle);
}

//---------------------------------------------------------
// this function is executed each animation frame
function animate(){
  requestAnimationFrame(animate);

  // particleCount = particles.vertices.length;


  // var pCount = particleCount;
  var pCount = particles.vertices.length

  if (pCount < 100){
    createNewParticle();
  }

  while (pCount--) {
    // get the particle
    particle = particles.vertices[pCount];
    particle.angle+=particle.dotSpeed/100;
    particle.rotationRadius += particle.dotSpeed/3;

    particle.x += (Math.cos(particle.angle)*particle.rotationRadius)/1000;
    particle.y += (Math.sin(particle.angle)*particle.rotationRadius)/1000;

    // Move particle on X and Y axis, to make it go further from the center
    // particle.add(particle.velocity);

    if(particle.x > 6 || particle.x < -6 || particle.y > 6 || particle.y < -6){
      particles.vertices.splice(pCount, 1);
      //KILL particle
    }
  }

  // Rotate the whole particle System
  // if(particleSystem.rotation.z >= 2){
  //   particleSystem.rotation.x += 0.00001;
  //   particleSystem.rotation.y += 0.001;
  // }
  //
  // particleSystem.rotation.z += 0.01;

  // flag to the particle system that we've changed its vertices.
  particles.verticesNeedUpdate = true;

  //draw
  renderer.render( scene, camera );
}

//---------------------------------------------------------
// Begin
init();
animate();
