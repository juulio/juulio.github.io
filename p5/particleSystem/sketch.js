
var systemOuterRadius = 150,
    systemCenter = p5.Vector(200, 200),
    ps = new ParticleSystem(systemCenter),
    particlesQuantity = 0;

function setup(){
  createCanvas(300, 300, WEBGL);
  stroke(0);
}

function draw(){
  background(255, 255, 255);

  ps.run();
  // if(ps.particles.length<6){
  // console.log(ps.particles.length);
  if(ps.particles.length<3000){
    ps.addParticle();
  }
  particlesQuantity = ps.particles.length;
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
      this.rotationRadius -= this.dotSpeed/2;
    }
    // Update angle for outer particles. Circular Motion.
    if(this.particleType == 1){
      this.angle+=this.dotSpeed/100;
    }
  };

  this.draw = function(){
    var pos_x, pos_y;
    //  translate(this.centerPoint.x, this.centerPoint.y);
    //  translate(systemCenter.x, systemCenter.y)
    pos_x = Math.cos(this.angle)*this.rotationRadius;
    pos_y = Math.sin(this.angle)*this.rotationRadius;

    stroke(this.particleColor);
    stroke(255,0,0);
    // console.log(this.particleColor);
    // rgba(243,130,53,0.6831208037328766)
    push();
      translate(pos_x, pos_y, 0);
      box(3, 3, 1);
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
    var dotSpeed = Math.random() * (0.7 - 0.05) + 0.05,
        particleType = Math.round(Math.random()),
        randomR = Math.floor(Math.random() * (255 - 200) + 200),
        randomG = Math.floor(Math.random() * (200 - 10) + 10),
        randomB = Math.floor(Math.random() * (80 - 20) + 20),
        randomA = Math.random(),
        // particleColor = 'rgba(' + randomR + ',' + randomG + ',' + randomB + ',' + randomA + ')';
        particleColor = 'rgb(' + randomR + ',' + randomG + ',' + randomB + ')';

    if(particleType == 0){
      rotationRadius = Math.random() * (200 - 100) + 100;
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
