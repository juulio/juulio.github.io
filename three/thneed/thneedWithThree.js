// Thneed trees - Julio Del Valle - 2016 - Costa Rica
'use strict';

/************************************************
 Create and set the Canvas Element up. */
var canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");

document.body.appendChild(canvas);
document.body.style.margin = 0;

canvas.width = 150;
canvas.height = 180;
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
 Particles can be
 Type = 0 inner (move from the center to the outside)
 Type = 1 outer (circular motion)
 */
var particle = function(dotSpeed, dotRadius, rotationRadius, centerPoint, particleType, particleR, particleG, particleB, particleAlpha){
  this.dotSpeed = dotSpeed;
  this.dotRadius = dotRadius;
  this.rotationRadius = rotationRadius;
  this.centerPoint = centerPoint;
  this.particleType = particleType;
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
				// particleType = Math.round(Math.random()),
        particleType = 0,
        randomR = Math.floor(Math.random() * (255 - 160) + 160),
        randomG = Math.floor(Math.random() * (200 - 5) + 5),
        randomB = Math.floor(Math.random() * (80 - 20) + 20),
        Alpha = 1;

    this.particles.push(new particle(dotSpeed, dotRadius, 0, this.systemCenterPoint, particleType, randomR, randomG, randomB, Alpha));
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
    systemCenter = new point2D(70, 100),
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






/*************************************************************************************************************
/*************************************************************************************************************
/*************************************************************************************************************
/*************************************************************************************************************
/*************************************************************************************************************
/*************************************************************************************************************
 Begin code using THREE.js */

//---------------------------------------------------------
// Animated: this function is executed each animation frame
function animate(){
  drawScene();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
 }

//---------------------------------------------------------
// Create renderer object for THREE.js
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0x000000 );
// renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(600, 700);
document.body.appendChild(renderer.domElement);

//---------------------------------------------------------
// Create scene object
var scene = new THREE.Scene();



//---------------------------------------------------------
function drawScene(){

}

//---------------------------------------------------------
// Create camera object
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);

camera.position.z = 10;

//---------------------------------------------------------
// Create lighting object
var ambientLight = new THREE.AmbientLight(0x000044);
var directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(ambientLight);
scene.add(directionalLight);


//---------------------------------------------------------
// start animation
animate();







//
// // revolutions per second
// var angularSpeed = 0.1,
// 	lastTime = 0;
//
// // Global Variables
// var scl = 20;
// var w = 500;
// var h = 500;
// var cols = w / scl;
// var rows = h /scl;
// var flying = 0;
// var terrain = [cols];
//
// var cols = 6;
// var rows = 5;
//
//  // terrain = [cols][rows];

//

//
// //-------------------------------------------------
// var cols = 4;
// var rows = 2;
//
// function drawTriangleStrip(){
// 	var x, y, face;
// 	var z = 0;
//
// 	var triangleStripGeometry = new THREE.Geometry();
//
// 	for(var y=rows; y > 0; y-- ) {
// 		for(var x=0; x < cols; x++ ) {
// 				triangleStripGeometry.vertices.push(new THREE.Vector3(x, y, z));
// 				triangleStripGeometry.vertices.push( new THREE.Vector3(x, y-1, z));
// 	  }
// 	}
//
// 	var holes = [];
// 	var triangles = THREE.Shape.Utils.triangulateShape( triangleStripGeometry.vertices, holes);
//
// 	for( var i = 0; i < triangles.length; i++ ){
//     triangleStripGeometry.faces.push( new THREE.Face3( triangles[i][0], triangles[i][1], triangles[i][2] ));
// 	}
//
//
// 	var triangleStripMaterial = new THREE.MeshBasicMaterial({
// 		color:0xFFFFFF,
// 		wireframe:true
// 	});
//
// 	var triangleStripMesh = new THREE.Mesh(triangleStripGeometry, triangleStripMaterial);
// 	triangleStripMesh.drawMode = THREE.TriangleStripDrawMode;
// 	triangleStripMesh.position.set(-4.0, 0.0, 3.0);
// 	scene.add(triangleStripMesh);
// }
