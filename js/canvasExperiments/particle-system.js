/************************************************
 Create and set the Canvas Element up. */
var canvas = document.createElement("canvas"),
    context = canvas.getContext("2d"),
    canvasContainerEl = document.getElementsByClassName('post-content')[0];

canvasContainerEl.appendChild(canvas);
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
 Particle Class Definition
 Particles can be
 - outer (circular motion)
 - inner (move towards the centers)
 */
var particle = function(dotSpeed, dotRadius, rotationRadius, centerPoint, particleType){
  this.dotSpeed = dotSpeed;
  this.dotRadius = dotRadius;
  this.rotationRadius = rotationRadius;
  this.centerPoint = centerPoint;
  this.particleType = particleType;

  // Angle to define the particle's starting position on the outer circle
  this.angle = Math.random() * (6.28 - 0 + 1);

  var theDot;

  this.run = function(){
    this.update();
    this.draw();
  };

  this.update = function(){
    // Update for inner particles. Movement towardes the center.
    if(this.particleType == 0){
      this.rotationRadius -= this.dotSpeed;
    }
    else {
      // Update angle for outer particles. Circular Motion.
      if(this.particleType == 1){
        if(this.angle<360) {
          this.angle+=this.dotSpeed;
        }
        else {
          this.angle=0;
        }
      }
    }
  };


  this.draw = function(){
    var pos_x, pos_y, randomR, randomColor;
    context.save();

      context.translate(this.centerPoint.x, this.centerPoint.y);

      pos_x = Math.cos(this.angle)*this.rotationRadius;
      pos_y = Math.sin(this.angle)*this.rotationRadius;

      theDot = new point2D(pos_x, pos_y);

      // Draw moving dot
      randomR = Math.floor(Math.random() * (255 - 200) + 200);
      randomG = Math.floor(Math.random() * (140 - 60) + 60);
      randomB = Math.floor(Math.random() * (80 - 20) + 20);
      // randomColor = 'rgba(' + randomR + ',' + randomG +',122,0.6)';
      randomColor = 'rgba(255,' + randomG +',' + randomB +',0.8)';

      context.strokeStyle = randomColor;
      context.beginPath();
      context.arc(pos_x, pos_y, this.dotRadius, 0, 2*Math.PI, false);
      context.lineWidth = 3;
      context.stroke();

    context.restore();
  };

  // Is the Particle alive or dead?
  this.isDead = function(){
    if (this.rotationRadius <= 0.0) {
      return true;
    } else {
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
    var dotSpeed = Math.random() * (0.7 - 0.008) + 0.008,
        particleType = Math.round(Math.random());

    this.particles.push(new particle(dotSpeed, dotRadius, rotationRadius, this.systemCenterPoint, particleType));
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

/******************************************************************
  Draw Outer Circle as reference */
function drawOuterCircle(){
  context.beginPath();
  context.arc(200, 200, systemOuterRadius, 0, 2*Math.PI, false);
  context.lineWidth = 1;
  context.stroke();
}

/******************************************************************
  Init */
var systemOuterRadius = 80,
    systemCenter = new point2D(200, 200);
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
  // drawOuterCircle();

  ps.run();
  if(ps.particles.length<1000){
    ps.addParticle();
  }
}

/******************************************************************
  Init the render loop*/
  update();
