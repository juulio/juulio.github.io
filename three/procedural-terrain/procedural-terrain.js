// 3D Procedural Terrain - Julio Del Valle - 2016 - Costa Rica
'use strict';

// revolutions per second
var angularSpeed = 0.1,
	lastTime = 0;

// Global Variables
var scl = 20;
var w = 500;
var h = 500;
var cols = w / scl;
var rows = h /scl;
var flying = 0;
var terrain = [cols];

var cols = 3;
var rows = 10;

 // terrain = [cols][rows];

// var drawSquare = function(x, y, rectWidth, rectHeight){
//   var rectShape = new THREE.Shape();
//   // rectShape.moveTo( 0, 0 );
//   rectShape.moveTo( x, y );
//   rectShape.lineTo( rectWidth, 0 );
//   rectShape.lineTo( rectWidth, rectHeight );
//   rectShape.lineTo( 0, rectHeight );
//   rectShape.lineTo( x, y );
//
//   var rectGeom = new THREE.ShapeGeometry( rectShape );
//   var rectMesh = new THREE.Mesh( rectGeom, new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } ) ) ;
//   scene.add( rectMesh );
// }

//-------------------------------------------------
// This function is executed on each animation frame
function animate(){
	// update
	var time = (new Date()).getTime();
	var timeDiff = time - lastTime;
	var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;

	lastTime = time;

	// render
	renderer.render(scene, camera);

  //
  // // drawScene (Draw function in Processing)
  // flying -= 0.02;
  // var yoff = flying;
  // // console.log(flying);
  //

  var rectShape;
  var w = 15;
  var h = 15;

  // rectShape = new THREE.Shape();
  // var x =0, y=0;
  //
  // rectShape.moveTo( x, y );
  // rectShape.lineTo( w, y );
  // rectShape.lineTo( w, h );
  // rectShape.lineTo( x, h );
  //
  // var rectGeom = new THREE.ShapeGeometry( rectShape );
  // var rectMesh = new THREE.Mesh( rectGeom, new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } ) ) ;
  // scene.add( rectMesh );
  //
  // rectShape = new THREE.Shape();
  // var x =16, y=16;
  //
  // rectShape.moveTo( x, y );
  // rectShape.lineTo( 0, w );
  // rectShape.lineTo( h, w );
  // rectShape.lineTo( h, 0 );
  // rectShape.lineTo( 0, 0 );
  //
  // var rectGeom = new THREE.ShapeGeometry( rectShape );
  // var rectMesh = new THREE.Mesh( rectGeom, new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } ) ) ;
  // scene.add( rectMesh );

  drawScene();

	// request new frame
	requestAnimationFrame(animate);
} // End Animate function

//-------------------------------------------------
// renderer
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0x000000 );
// renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(500, 500);
document.body.appendChild(renderer.domElement);

//-------------------------------------------------
// camera
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
var scene = new THREE.Scene();
var ambientLight = new THREE.AmbientLight(0x000044);
var directionalLight = new THREE.DirectionalLight(0xffffff);


//-------------------------------------------------
function drawScene(){
  // drawSquare();
	drawTriangleStrip();

  for(var y=0; y<rows; y++ ) {
    // //   var xoff = 0;
    for(var x=0; x<cols; x++ ) {
    //     drawSquare(x, y, 20, 20);
    // //     // xoff += 0.1;
    // console.log('out');

      }
    // yoff += 0.1;
  }
}

//-------------------------------------------------
function drawTriangleStrip(){
	var triangleStripGeometry = new THREE.Geometry();
	triangleStripGeometry.vertices.push(new THREE.Vector3(0.0, 0.0, 0.0));
	triangleStripGeometry.vertices.push(new THREE.Vector3(0.0, 0.-1, 0.0));
	triangleStripGeometry.vertices.push(new THREE.Vector3(1.0, 0.0, 0.0));
	triangleStripGeometry.vertices.push(new THREE.Vector3(1.0, -1.0, 0.0));
	triangleStripGeometry.vertices.push(new THREE.Vector3(2.0, 0.0, 0.0));
	triangleStripGeometry.vertices.push(new THREE.Vector3(2.0, -1.0, 0.0));
	triangleStripGeometry.vertices.push(new THREE.Vector3(3.0, 0.0, 0.0));
	triangleStripGeometry.vertices.push(new THREE.Vector3(3.0, -1.0, 0.0));
	triangleStripGeometry.vertices.push(new THREE.Vector3(4.0, 0.0, 0.0));

	triangleStripGeometry.faces.push(new THREE.Face3(0, 1, 2));
	triangleStripGeometry.faces.push(new THREE.Face3(2, 1, 3));
	triangleStripGeometry.faces.push(new THREE.Face3(2, 3, 4));
	triangleStripGeometry.faces.push(new THREE.Face3(4, 3, 5));
	triangleStripGeometry.faces.push(new THREE.Face3(4, 5, 6));
	triangleStripGeometry.faces.push(new THREE.Face3(6, 5, 7));
	triangleStripGeometry.faces.push(new THREE.Face3(6, 7, 8));


	var triangleStripMateriL = new THREE.MeshBasicMaterial({
		color:0xFFFFFF,
		wireframe:true
		// vertex_colors:true
	});

	var triangleStripMesh = new THREE.Mesh(triangleStripGeometry, triangleStripMateriL);
	triangleStripMesh.drawMode = THREE.TriangleStripDrawMode;
	triangleStripMesh.position.set(0.0, 0.0, 3.0);
	scene.add(triangleStripMesh);
}

//-------------------------------------------------
function drawSquare() {
  var squareGeometry = new THREE.Geometry();
  squareGeometry.vertices.push(new THREE.Vector3(-1.0,  1.0, 0.0));
  squareGeometry.vertices.push(new THREE.Vector3( 1.0,  1.0, 0.0));
  squareGeometry.vertices.push(new THREE.Vector3( 1.0,  -1.0, 0.0));
  squareGeometry.vertices.push(new THREE.Vector3( -1.0, -1.0, 0.0));
  // squareGeometry.faces.push(new THREE.Face3(0, 1, 2));
	// squareGeometry.faces.push(new THREE.Face3(0, 2, 3));
  squareGeometry.faces.push(new THREE.Face3(0, 1, 3));

  var squareMaterial = new THREE.MeshBasicMaterial({
    color:0xFFFFFF,
    side:THREE.DoubleSide
  });

  var squareMesh = new THREE.Mesh(squareGeometry, squareMaterial);
  squareMesh.position.set(0.0, 0.0, 4.0);
  scene.add(squareMesh);
}
//-------------------------------------------------
// Triangle
// var triangleGeometry = new THREE.Geometry();
// triangleGeometry.vertices.push(new THREE.Vector3( 0.0,  0.0, 0.0));
// triangleGeometry.vertices.push(new THREE.Vector3( 1.0,  0.0, 0.0));
// triangleGeometry.vertices.push(new THREE.Vector3( 0.0, -1.0, 0.0));
// triangleGeometry.faces.push(new THREE.Face3(0, 1, 2));
//
// var triangleMaterial = new THREE.MeshBasicMaterial({
//   color:0xFFFFFF,
//   side:THREE.DoubleSide
// });
//``
// var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
// triangleMesh.position.set(0.0, 0.0, 4.0);
// scene.add(triangleMesh);

camera.position.z = 10;



//-------------------------------------------------
// Lighting
directionalLight.position.set(1, 1, 1).normalize();


//-------------------------------------------------
// Scene
// scene.add(cube);
scene.add(ambientLight);
scene.add(directionalLight);

//-------------------------------------------------
// start animation
animate();
