'use strict';
/**
 * Initial Page Layout setup
 */

/**
 * Generate Sketches menu
 */


var sketches = [
    {
        'id': 'particleSystem',
        'sketchName': 'particle system',
        'enabled': false
    }
];

var ul = document.getElementsByClassName('projectList')[0];
var li, linkElement;

li = document.createElement('li');
linkElement = document.createElement('a');
linkElement.innerHTML = "Particle System"
ul.appendChild(li);
li.appendChild(linkElement);

/********* Variables for the particle system *********************************/
var systemOuterRadius = 130;        // particle system
var ps = new ParticleSystem(systemCenter);
var systemCenter;

/********* Processing SETUP function *****************************************/
function setup(){
    var canvas = createCanvas(800, 400);
    canvas.parent('content');
    stroke('rgba(0,0,0,0.3)');
    rectMode(CENTER);
    // width and height only exist after canvas is created
     systemCenter = p5.Vector(width/2, height/2);

}

/********* Processing DRAW function *****************************************/
function draw(){
    clear();

    ps.run();
    if(ps.particles.length<30000){
        ps.addParticle();
    }
}


/*******************************************************************************
 * Classes definition for Particle System
 */

/*******************************************************************************
 * Particle Class
 * Particles can be
 *    particleType = 0 outer (circular motion)
 *    particleType = 1 inner (move towards the centers)Adapted by Evelyn Eastmond
 */
function Particle(dotSpeed, dotRadius, rotationRadius, centerPoint, particleType, particleColor) {
  this.dotSpeed = dotSpeed;
  this.dotRadius = dotRadius;
  this.rotationRadius = rotationRadius;
  this.centerPoint = centerPoint;
  this.particleType = particleType;
  this.particleColor = particleColor;
  // Angle to define the particle's starting position on the outer circle
  this.angle = Math.random() * (6.28 - 0 + 1);

  this.run = function(){
    this.update();
    this.draw();
  };

  this.update = function(){
    // Update for inner particles. Movement towardes the center.
    if(this.particleType == 0){
        // Esta línea debería mover las partículas hacia el centro del canvas
        this.rotationRadius -= this.dotSpeed/3;
    }
    // Update angle for outer particles. Circular Motion.
    if(this.particleType == 1){
      this.angle+=this.dotSpeed/100;
    }
  };

  this.draw = function(){
    var pos_x, pos_y;
    pos_x = Math.cos(this.angle)*this.rotationRadius;
    pos_y = Math.sin(this.angle)*this.rotationRadius;

    stroke(this.particleColor);
    push();
        translate(width/2, height/2);
        rect(pos_x, pos_y, 1, 1);
    pop();
  };

  // Is the Particle alive or dead?
  this.isDead = function(){
    if ( this.particleType == 0 && this.rotationRadius <= 0.0) {
      return true;
    }
    if ( this.particleType == 1 && this.angle >= 6.28 ) {
      return true;
    }
    else {
      return false;
    }
  }
 }

/*******************************************************************************
  * Particle System Class
  */
function ParticleSystem(systemCenterPoint) {
  this.systemCenterPoint = systemCenterPoint;
  this.particles = []

  var dotRadius = 1,
      rotationRadius = systemOuterRadius;

  this.addParticle = function(){
    var dotSpeed = Math.random() * (0.7 - 0.02) + 0.05,
        particleType = Math.round(Math.random()),
        randomR = Math.floor(Math.random() * (255 - 200) + 200),
        randomG = Math.floor(Math.random() * (200 - 10) + 10),
        randomB = Math.floor(Math.random() * (80 - 20) + 20),
        randomA = Math.random(),
        particleColor = 'rgba(' + randomR + ',' + randomG + ',' + randomB + ',' + randomA + ')';

    if(particleType == 0){
      rotationRadius = Math.random() * (systemOuterRadius - 100) + 100;
    //  rotationRadius = Math.random() * (90 - 70) + 70;
    //  rotationRadius = Math.random() * (systemOuterRadius - (systemOuterRadius-50) + (systemOuterRadius-50));
    }

    this.particles.push(new Particle(dotSpeed, dotRadius, rotationRadius, this.systemCenterPoint, particleType, particleColor));
  }

  // Call run method of each movingDot
  this.run = function(){
    for (var a=0;a<this.particles.length;a++){
      var particle = this.particles[a];
      particle.run();
      if(particle.isDead()) {
        this.particles.splice(a, 1);
      }
    }
  }

 };