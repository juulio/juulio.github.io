/************************************************
 Create and set the Canvas Element up. */
var canvas = document.createElement("canvas"),
    context = canvas.getContext("2d"),
    canvasContainerEl = document.getElementsByClassName('post-content')[0];

canvasContainerEl.appendChild(canvas);
document.body.style.margin = 0;

canvas.width = 500;
canvas.height = 500;
canvas.style.border = 'solid 1px #000';
canvas.style.display = 'block';
canvas.style.margin = '0 auto';

// context.fillStyle = '#000';
context.lineWidth = 1;

/******************************************************************
 Begin code for Particle System */

/******************************************************************
 Point2D Class Definition  */
var point2D = function(x, y){
  this.x = x;
  this.y = y;
};

/******************************************************************
 Particle Class Definition */
var particle = function(dotSpeed, dotRadius, rotationRadius, centerPoint){
  this.dotSpeed = dotSpeed;
  this.dotRadius = dotRadius;
  this.rotationRadius = rotationRadius;
  this.centerPoint = centerPoint;

  var theDot;
  this.angle = Math.random() * (6.28 - 0 + 1);

  this.run = function(){
    this.update();
    this.draw();
  };

  this.update = function(){
    this.rotationRadius -= this.dotSpeed;
  };

  this.draw = function(){
    var initial_pos_x, initial_pos_y, randomR, randomColor;
    context.save();

      context.translate(this.centerPoint.x, this.centerPoint.y);

      initial_pos_x = Math.cos(this.angle)*this.rotationRadius;
      initial_pos_y = Math.sin(this.angle)*this.rotationRadius;

      theDot = new point2D(initial_pos_x, initial_pos_y);

      // Draw moving dot
      randomR = Math.floor(Math.random() * (255 - 200) + 200);
      randomG = Math.floor(Math.random() * (140 - 60) + 60);
      randomB = Math.floor(Math.random() * (80 - 20) + 20);
      // randomColor = 'rgba(' + randomR + ',' + randomG +',122,0.6)';
      randomColor = 'rgba(255,' + randomG +',' + randomB +',0.6)';

      context.strokeStyle = randomColor;
      context.beginPath();
      context.arc(initial_pos_x, initial_pos_y, this.dotRadius, 0, 2*Math.PI, false);
      context.lineWidth = 1;
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

  dotRadius = 1;
  rotationRadius = systemOuterRadius;

  this.addParticle = function(){
    var dotSpeed = Math.random() * (0.7 - 0.008) + 0.008;
    this.particles.push(new particle(dotSpeed, dotRadius, rotationRadius, this.systemCenterPoint));
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
  context.arc(250, 250, systemOuterRadius, 0, 2*Math.PI, false);
  context.lineWidth = 1;
  context.stroke();
}

/******************************************************************
  Init */
var systemOuterRadius = 90,
    systemCenter = new point2D(250, 250);
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
  if(ps.particles.length<700){
    ps.addParticle();
  }
}

/******************************************************************
  Init the render loop*/
  update();
