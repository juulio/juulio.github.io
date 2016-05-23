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

var cols = 6;
var rows = 5;

 // terrain = [cols][rows];

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

  drawScene();

	// request new frame
	requestAnimationFrame(animate);
} // End Animate function

//-------------------------------------------------
// renderer
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0x000000 );
// renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(600, 700);
document.body.appendChild(renderer.domElement);

//-------------------------------------------------
// camera
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
var scene = new THREE.Scene();
var ambientLight = new THREE.AmbientLight(0x000044);
var directionalLight = new THREE.DirectionalLight(0xffffff);


//-------------------------------------------------
function drawScene(){
	drawTriangleStrip();
}

//-------------------------------------------------
var cols = 6;
var rows = 5;

var cols = 4;
var rows = 2;

function drawTriangleStrip(){
	var a, b, x, y, vector;
	var z = 0;

	var triangleStripGeometry = new THREE.Geometry();

	for(var y=rows; y > 0; y-- ) {
		for(var x=0; x < cols; x++ ) {

				vector = new THREE.Vector3(x, y, z);
				triangleStripGeometry.vertices.push(vector);

				vector = new THREE.Vector3(x, y-1, z);
				triangleStripGeometry.vertices.push(vector);

				// console.log('(' + triangleStripGeometry.vertices[x].x + ', ' + triangleStripGeometry.vertices[x].y + ', ' + triangleStripGeometry.vertices[x].z+ ')');
				// console.log(x);
	    }
			// console.log(y);

			// console.log(triangleStripGeometry.vertices.length);

	  }
		console.log(triangleStripGeometry.vertices.length);
		// alert('hola');

	// triangleStripGeometry.vertices.push(new THREE.Vector3(0.0, 0.0, 0.0));
	// triangleStripGeometry.vertices.push(new THREE.Vector3(0.0, 0.-1, 0.0));
	// triangleStripGeometry.vertices.push(new THREE.Vector3(1.0, 0.0, 0.0));
	// triangleStripGeometry.vertices.push(new THREE.Vector3(1.0, -1.0, 0.0));
	// triangleStripGeometry.vertices.push(new THREE.Vector3(2.0, 0.0, 0.0));
	// triangleStripGeometry.vertices.push(new THREE.Vector3(2.0, -1.0, 0.0));
	// triangleStripGeometry.vertices.push(new THREE.Vector3(3.0, 0.0, 0.0));
	// triangleStripGeometry.vertices.push(new THREE.Vector3(3.0, -1.0, 0.0));
	// triangleStripGeometry.vertices.push(new THREE.Vector3(4.0, 0.0, 0.0));

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
	});

	var triangleStripMesh = new THREE.Mesh(triangleStripGeometry, triangleStripMateriL);
	triangleStripMesh.drawMode = THREE.TriangleStripDrawMode;
	triangleStripMesh.position.set(-4.0, 0.0, 3.0);
	scene.add(triangleStripMesh);
}

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
