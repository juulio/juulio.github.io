// Thneed trees - Julio Del Valle - 2016 - Costa Rica
'use strict';

/************************************************
 Create and set the Canvas Element up. */
var canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");

document.body.appendChild(canvas);
document.body.style.margin = 0;

canvas.width = 400;
canvas.height = 400;
canvas.style.display = 'block';
canvas.style.margin = '0 auto';

/******************************************************************
 Begin code for Particle System */

/******************************************************************
 Point2D Class Definition  */
var point2D = function(x, y){
  this.x = x;
  this.y = y;
};

/******************************************************************
 Function to draw a Dot at a given (x,y) and radius  */
var drawDot = function(x, y, r, lineWidth) {
  context.beginPath();
  context.arc(x, y, r, 0, 2*Math.PI, false);
  context.lineWidth = lineWidth;
  context.stroke();
};

/******************************************************************
 Particle Class Definition
 */
var particle = function(dotSpeed, dotRadius, rotationRadius, centerPoint, particleR, particleG, particleB, particleAlpha){
  this.dotSpeed = dotSpeed;
  this.dotRadius = dotRadius;
  this.rotationRadius = rotationRadius;
  this.centerPoint = centerPoint;
	this.particleAlpha = particleAlpha;
  this.posisition;

  // Angle to define the particle's starting position on the outer circle
  this.angle = Math.random() * (6.28 - 0 + 1);

  // Array to store the last positions to draw particle trail
  this.previousPositions = [];

  this.run = function(){
    this.update();
    this.draw();
  };

  // update particle position. Circular motion from the center towards outside
  this.update = function(){
    this.rotationRadius += this.dotSpeed/10;
    this.angle+=this.dotSpeed/5;
    this.particleAlpha-=0.03/systemOuterRadius;
    this.particleColor =  'rgba(' + particleR + ',' + particleG + ',' + particleB + ',' + this.particleAlpha + ')';

    this.position = new point2D(Math.cos(this.angle)*this.rotationRadius, Math.sin(this.angle)*this.rotationRadius);

    if(this.previousPositions.length >= 10) {
      this.previousPositions.pop();
    }

    this.previousPositions.unshift(new point2D(this.position.x, this.position.y));
  };

  // draw each particle according to the updated values
  this.draw = function(){
    context.save();

      context.translate(this.centerPoint.x, this.centerPoint.y);
      context.strokeStyle = this.particleColor;

      for (var i=0;i<this.previousPositions.length;i++){
        drawDot(this.previousPositions[i].x, this.previousPositions[i].y, this.dotRadius, 0.4);
      }

    context.restore();
  };

  // is the Particle alive or dead?
  this.isDead = function(){
		if ( this.particleAlpha <= 0) {
      return true;
    }
    else {
      return false;
    }
  }
};


/******************************************************************
  Particle System Class Definition */
var particleSystem = function(systemCenterPoint){
  this.systemCenterPoint = systemCenterPoint;
  this.particles = []

  var dotRadius = 1,
      rotationRadius = systemOuterRadius;

  this.addParticle = function(){
    var dotSpeed = Math.random() * (0.4 - 0.05) + 0.05,
        randomR = Math.floor(Math.random() * (255 - 160) + 160),
        randomG = Math.floor(Math.random() * (200 - 5) + 5),
        randomB = Math.floor(Math.random() * (80 - 20) + 20),
        Alpha = 1;

    this.particles.push(new particle(dotSpeed, dotRadius, 0, this.systemCenterPoint, randomR, randomG, randomB, Alpha));
  }

  // Call run method of each particle
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

/******************************************************************
  Global Variables */
var systemOuterRadius = 60,
    systemCenter = new point2D(200, 200),
    ps = new particleSystem(systemCenter);

/******************************************************************
  Update */
function update() {
  requestAnimationFrame(update);
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawScreen();
}

/******************************************************************
  DrawScreen */
function drawScreen(){
  ps.run();

  drawDot(systemCenter.x, systemCenter.y, systemOuterRadius, 0.1);

  if(ps.particles.length<300){
    ps.addParticle();
  }
}

/******************************************************************
  Init the render loop*/
  update();
