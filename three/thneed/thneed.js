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
 Particle Class Definition
 Particles can be
 Type = 0 inner (move from the center to the outside)
 Type = 1 outer (circular motion)
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

  // update particle position. Circular motion from the center towards outside
  this.update = function(){
      this.rotationRadius += this.dotSpeed/15;
			this.angle+=this.dotSpeed/100;
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
      context.lineWidth = 1;
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


/******************************************************************
  Particle System Class Definition */
var particleSystem = function(systemCenterPoint){
  this.systemCenterPoint = systemCenterPoint;
  this.particles = []

  var dotRadius = 1,
      rotationRadius = systemOuterRadius;

  this.addParticle = function(){
    var dotSpeed = Math.random() * (0.7 - 0.05) + 0.05,
				// particleType = Math.round(Math.random()),
        particleType = 0,
        randomR = Math.floor(Math.random() * (255 - 200) + 200),
        randomG = Math.floor(Math.random() * (200 - 10) + 10),
        randomB = Math.floor(Math.random() * (80 - 20) + 20),
        randomA = 1,
        particleColor = 'rgba(' + randomR + ',' + randomG + ',' + randomB + ',' + randomA + ')';

    this.particles.push(new particle(dotSpeed, dotRadius, 0, this.systemCenterPoint, particleType, particleColor));
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

var systemOuterRadius = 50,
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
  // if(ps.particles.length<6){
  if(ps.particles.length<4000){
    ps.addParticle();
  }
}

/******************************************************************
  Init the render loop*/
  update();









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
// //-------------------------------------------------
// // This function is executed on each animation frame
// function animate(){
// 	// update
// 	var time = (new Date()).getTime();
// 	var timeDiff = time - lastTime;
// 	var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
//
// 	lastTime = time;
//
// 	var w = 15;
//   var h = 15;
//
//   drawScene();
//
//
// 	// render
// 	renderer.render(scene, camera);
//
// 	// request new frame
// 	requestAnimationFrame(animate);
// } // End Animate function
//
// //-------------------------------------------------
// // renderer
// var renderer = new THREE.WebGLRenderer();
// renderer.setClearColor( 0x000000 );
// // renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setSize(600, 700);
// document.body.appendChild(renderer.domElement);
//
// //-------------------------------------------------
// // camera
// var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
// var scene = new THREE.Scene();
// var ambientLight = new THREE.AmbientLight(0x000044);
// var directionalLight = new THREE.DirectionalLight(0xffffff);
//
//
// //-------------------------------------------------
// function drawScene(){
// 	drawTriangleStrip();
// }
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
// 	// triangleStripGeometry.vertices.push(new THREE.Vector3(0.0, 0.0, 0.0));
// 	// triangleStripGeometry.vertices.push(new THREE.Vector3(0.0, 0.-1, 0.0));
// 	// triangleStripGeometry.vertices.push(new THREE.Vector3(1.0, 0.0, 0.0));
// 	// triangleStripGeometry.vertices.push(new THREE.Vector3(1.0, -1.0, 0.0));
// 	// triangleStripGeometry.vertices.push(new THREE.Vector3(2.0, 0.0, 0.0));
// 	// triangleStripGeometry.vertices.push(new THREE.Vector3(2.0, -1.0, 0.0));
// 	// triangleStripGeometry.vertices.push(new THREE.Vector3(3.0, 0.0, 0.0));
// 	// triangleStripGeometry.vertices.push(new THREE.Vector3(3.0, -1.0, 0.0));
// 	// triangleStripGeometry.vertices.push(new THREE.Vector3(4.0, 0.0, 0.0));
//
// 	// triangleStripGeometry.faces.push(new THREE.Face3(0, 1, 2));
// 	// triangleStripGeometry.faces.push(new THREE.Face3(2, 1, 3));
// 	// triangleStripGeometry.faces.push(new THREE.Face3(2, 3, 4));
// 	// triangleStripGeometry.faces.push(new THREE.Face3(4, 3, 5));
// 	// triangleStripGeometry.faces.push(new THREE.Face3(4, 5, 6));
// 	// triangleStripGeometry.faces.push(new THREE.Face3(6, 5, 7));
// 	// triangleStripGeometry.faces.push(new THREE.Face3(6, 7, 8));
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
//
// camera.position.z = 10;
//
// //-------------------------------------------------
// // Lighting
// directionalLight.position.set(1, 1, 1).normalize();
//
//
// //-------------------------------------------------
// // Scene
// // scene.add(cube);
// scene.add(ambientLight);
// scene.add(directionalLight);
//
// //-------------------------------------------------
// // start animation
// animate();
