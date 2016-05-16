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

context.fillStyle = '#000';
context.lineWidth = 1;

/******************************************************************
 Begin code for Particle System */

/****************************
 Point2D Class Definition  */
var point2D = function(x, y){
  this.x = x;
  this.y = y;
};

// var a = new point2D(1, 2);

/*************************************************************
 Particle Class Definition */
var particle = function(dotSpeed, dotRadius, rotationRadius, centerPoint){
  this.dotSpeed = dotSpeed;
  this.dotRadius = dotRadius;
  this.rotationRadius = rotationRadius;
  this.centerPoint = centerPoint;

  var theDot;
  // this.angle = canvasElements.getRandomInt(0, 6.28);
  this.angle = Math.floor(Math.random() * (6.28 - 0 + 1)) + 0;

  this.run = function(){
    this.update();
    this.draw();
  };

  this.update = function(){
    this.rotationRadius -= this.dotSpeed;
  };

  this.draw = function(){
    var initial_pos_x, initial_pos_y;
    context.save();

      context.translate(this.centerPoint.x, this.centerPoint.y);

      initial_pos_x = Math.cos(this.angle)*this.rotationRadius;
      initial_pos_y = Math.sin(this.angle)*this.rotationRadius;

      theDot = new point2D(initial_pos_x, initial_pos_y);

      // Draw moving dot
      context.fillStyle = "#000000";
      // canvasElements.drawDot(initial_pos_x, initial_pos_y, this.dotRadius, 1, context)
      context.beginPath();
      context.arc(initial_pos_x, initial_pos_y, this.dotRadius, 0, 2*Math.PI, false);
      context.lineWidth = 1;
      context.stroke();

    context.restore();
  };

};


/*************************************************************
 Particle System Class Definition */
var particleSystem = function(systemCenterPoint){
  this.systemCenterPoint = systemCenterPoint;

  var particles = [];

  // Adds dotCount particles to the Array
  this.addParticles = function(){
    var dotRadius, rotationRadius, dotSpeed;
    var movingDot;


    for(var i=0;i<particlesQuantity;i++) {
      // dotSpeed = canvasElements.getRandomInt(0.01, 0.6);
      dotSpeed = Math.floor(Math.random() * (0.6 - 0.01 + 1)) + 0.01;
      dotRadius = 5;
      rotationRadius = 100;

      movingDot = new particle(dotSpeed, dotRadius, rotationRadius, this.systemCenterPoint);
      particles.push(movingDot);
    }
  }

  // Call run method of each movingDot
  this.run = function(){
    for (var a=0;a<particles.length;a++){
      var particle = particles[a];
      particle.run();
    }
  }

};


/*************************************************************
  Init */
var particlesQuantity = 100,
    systemCenter = new point2D(250, 250);
    ps = new particleSystem(systemCenter);

ps.addParticles();

/*************************************************************
  Update */
function update() {
  requestAnimationFrame(update);
  context.clearRect(0, 0, canvas.width, canvas.height);

  drawScreen();
}


/*************************************************************
  DrawScreen */
function drawScreen(){
  ps.run();
}

/*************************************************************
  Init the render loop*/
  update();
