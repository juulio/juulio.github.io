/**
 * @author Julio Del Valle - Costa Rica
 */

/*
 * Create and set up the Canvas Element.
 */
var canvasWidth = JUULIO.global.setRendererWidth(350);
var canvasHeight = 400;
if(JUULIO.global.isMobile()){
  canvasHeight = 320;
}
var canvas = JUULIO.canvasElements.createCanvasElement('canvas-container', canvasWidth, canvasHeight, '2d');
var context = canvas.getContext("2d");

/**
 * Begin code for Particle System
 */

/**
 * Point2D Class Definition
 */
var point2D = function(x, y){
  this.x = x;
  this.y = y;
};

/**
 * Particle Class Definition
 *  Particles can be
 *  Type = 0 outer (circular motion)
 *  Type = 1 inner (move towards the centers)
 */
var particle = function(dotSpeed, dotRadius, rotationRadius, centerPoint, particleType, particleColor){
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
      this.rotationRadius -= this.dotSpeed/3;
    }
    // Update angle for outer particles. Circular Motion.
    if(this.particleType == 1){
      this.angle+=this.dotSpeed/100;
    }
  };

  this.draw = function(){
    var pos_x, pos_y, randomR, randomColor;
    context.save();

      context.translate(this.centerPoint.x, this.centerPoint.y);

      pos_x = Math.cos(this.angle)*this.rotationRadius;
      pos_y = Math.sin(this.angle)*this.rotationRadius;

      context.strokeStyle = this.particleColor;
      context.beginPath();
      context.arc(pos_x, pos_y, this.dotRadius, 0, 2*Math.PI, false);
      context.lineWidth = 3;
      context.stroke();

    context.restore();
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
};


/**
 * Particle System Class Definition
 */
var particleSystem = function(systemCenterPoint){
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
        particleColor = 'rgba(' + randomR + ',' + randomG + ',' + randomB + ',' + randomA + ')';

    if(particleType == 0){
      rotationRadius = Math.random() * (90 - 70) + 70;
    }

    this.particles.push(new particle(dotSpeed, dotRadius, rotationRadius, this.systemCenterPoint, particleType, particleColor));
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

var systemOuterRadius = 80,
    systemCenter = new point2D(200, 200),
    ps = new particleSystem(systemCenter);

/**
 * Update
 */
function update() {
  requestAnimationFrame(update);
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawScreen();
}

/**
 * DrawScreen
 */
function drawScreen(){
  ps.run();
  // if(ps.particles.length<6){
  if(ps.particles.length<100){
    ps.addParticle();
  }
}

/**
 * Init the render loop
 */
  update();
