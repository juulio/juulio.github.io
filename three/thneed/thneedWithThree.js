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
  // particleCount = 10;
  // particleCount = 200;
  particleCount = 100;

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

  alert("Particulas iniciales: " + particles.vertices.length);
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
  // particle.angle = Math.random() * 6.28;
  particle.angle = 0;

  // Initial values
  particle.dotSpeed = Math.random() * (0.1 - 0.05) + 0.05;
  particle.rotationRadius = 0;

  // add it to the geometry
  particles.vertices.push(particle);
}

//---------------------------------------------------------
// this function is executed each animation frame
function animate(){
  requestAnimationFrame(animate);

  createNewParticle();

  var pCount = particles.vertices.length
  console.log('pCount = ' + pCount);

  while (pCount--) {
    // get the particle
    particle = particles.vertices[pCount];

    // Update angle and rotationRadius
    particle.angle+=particle.dotSpeed/2;
    particle.rotationRadius += particle.dotSpeed/4;

    particle.x += (Math.cos(particle.angle)*particle.rotationRadius)/100;
    particle.y += (Math.sin(particle.angle)*particle.rotationRadius)/100;


    // if(particle.x > 6 || particle.x < -6 || particle.y > 6 || particle.y < -6){

    if(particle.rotationRadius > 9  ){
      //KILL particle
      particles.vertices.splice(pCount, 1);
    }
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
