if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  function (callback) {
    return window.setTimeout(callback, 1000 / 60);
  });
}

if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = (window.cancelRequestAnimationFrame ||
  window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
  window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
  window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
  window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
  window.clearTimeout);
}

function Ball (radius, color) {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.radius = radius;
  this.color = color;
  this.mass = 1;
  this.rotation = 0;
  this.scaleX = 1;
  this.scaleY = 1;
  this.lineWidth = 1;
}

Ball.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.scale(this.scaleX, this.scaleY);

  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;
  // context.strokeStyle = 'rgba(0, 255 ,255, 1)';
  context.strokeStyle = 'rgba(136, 0, 0, 1)';// red border around each dot
  context.beginPath();
  context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
  context.closePath();
  context.fill();
  if (this.lineWidth > 0) {
    context.stroke();
  }
  context.restore();
};

Ball.prototype.getBounds = function () {
  return {
    x: this.x - this.radius,
    y: this.y - this.radius,
    width: this.radius * 2,
    height: this.radius * 2
  };
};

window.onload = function () {
  var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      particles = [],
      // numParticles = window.innerHeight / 30,
      // minDist = window.innerWidth / 5,
      numParticles = 10,
      minDist = 50,
      springAmount = 0.0000000005;//particle's speed

  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;
  canvas.width = 400;
  canvas.height = 150;


  for (var size, particle, i = 0; i < numParticles; i++) {
    size = Math.random() * 3 + 1;
    particle = new Ball(size, 'rgba(255, 255, 255, 1)');// Particle inner color
    particle.x = Math.random() * canvas.width;
    particle.y = Math.random() * canvas.height;
    particle.vx = Math.random() * 2 - 1; // horizontal velocity
    particle.vy = Math.random() * 2 - 1; // vertical velocity
    particle.mass = size;
    particles.push(particle);
  }

  function spring (partA, partB) {
    var dx = partB.x - partA.x,
        dy = partB.y - partA.y,
        dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < minDist) {
      var alpha = 1 - dist / minDist;
      // context.strokeStyle = 'rgba(0, 255, 255, ' + alpha +')';
      context.strokeStyle = 'rgba(144, 144, 144, ' + alpha +')';// gray color

      context.beginPath();
      context.moveTo(partA.x, partA.y);
      context.lineTo(partB.x, partB.y);
      context.stroke();

      var ax = dx * springAmount,
          ay = dy * springAmount;
      partA.vx += ax / partA.mass;
      partA.vy += ay / partA.mass;
      partB.vx -= ax / partB.mass;
      partB.vy -= ay / partB.mass;
    }
  }

  function move (partA, i) {
    partA.x += partA.vx;
    partA.y += partA.vy;
    if (partA.x > canvas.width) {
      partA.x = 0;
    } else if (partA.x < 0) {
      partA.x = canvas.width;
    }
    if (partA.y > canvas.height) {
      partA.y = 0;
    } else if (partA.y < 0) {
      partA.y = canvas.height;
    }
    for (var partB, j = i + 1; j < numParticles; j++) {
      partB = particles[j];
      spring(partA, partB);
    }
  }

  function draw (particle) {
    particle.draw(context);
  }

  (function drawFrame () {
    window.requestAnimationFrame(drawFrame, canvas);
    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(move);
    particles.forEach(draw);

    context.font="70px sans-serif";
    context.fillStyle = "#707070";
    context.fillText("so gra",80,70);
  }());
};
