// revolutions per second
var angularSpeed = 0.1,
	lastTime = 0,
	cubeVerticaDirection = 'up';

// TweenJS code to animate colors
var boxColor = {
		colorR : 0,
		colorG : 0,
		colorB : 0
	},
	targetColor = {
		colorR : 1,
		colorG : 1,
		colorB : 1
	},
	tweenBackColor = {
		colorR : 0,
		colorG : 0,
		colorB : 0
	};

var tween = new TWEEN.Tween(boxColor).to(targetColor, 2000);
var tweenBack = new TWEEN.Tween(boxColor).to(tweenBackColor, 2000);

tween.start();

tween.onUpdate(function(){
	console.log('R: ' + boxColor.colorR + ' G: ' + boxColor.colorG + ' B: ' + boxColor.colorB);
	cubeMaterial.color.setRGB(boxColor.colorR, boxColor.colorG, boxColor.colorB);
});

// this function is executed on each animation frame
function animate(){
	// update
	// var time = (new Date()).getTime();
	// var timeDiff = time - lastTime;
	// var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
	// cube.rotation.y += angleChange;
	// cube.rotation.x += angleChange;
	// cube.rotation.z += angleChange;

	// if (cubeVerticaDirection == 'up'){
	// 	cube.position.y += 1.5;
	//
	// 	if (cube.position.y > 350){
	// 		cubeVerticaDirection = 'down';
	// 	}
	// }
	// else {
	// 	if(cubeVerticaDirection == 'down'){
	// 		cube.position.y -= 1.5;
	// 		if (cube.position.y < -350){
	// 			cubeVerticaDirection = 'up'
	// 		}
	// 	}
	// }

	// lastTime = time;

	TWEEN.update();

	tween.chain(tweenBack);
	tweenBack.chain(tween);

	// render
	renderer.render(scene, camera);

	// request new frame
	requestAnimationFrame(animate);
}

// renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// camera
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
var scene = new THREE.Scene();
var ambientLight = new THREE.AmbientLight(0x000044);
var directionalLight = new THREE.DirectionalLight(0xffffff);
var cubeMaterial = new THREE.MeshLambertMaterial();
cubeMaterial.color.setRGB(boxColor.R, boxColor.G, boxColor.B);
var cube = new THREE.Mesh(new THREE.BoxGeometry(200, 200, 200),cubeMaterial);

camera.position.z = 500;

cube.overdraw = true;
cube.rotation.x = Math.PI * 0.1;

directionalLight.position.set(1, 1, 1).normalize();

// wireFrameMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
// material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: false, overdraw: true } );
// lambertMaterial = new THREE.MeshLambertMaterial();

// flatShading = new THREE.MeshLambertMaterial( { color: 0xdddddd, shading: THREE.FlatShading,  overdraw: true  } )

// phongMaterial = new THREE.MeshPhongMaterial( { ambient: 0x555555, color: 0x555555, specular: 0xffffff, shininess: 50, shading: THREE.SmoothShading, overdraw: true }  );
// basicMaterial = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors } ),new THREE.MeshBasicMaterial({color: 0xffffff, opacity: 1, wireframe: true} );

scene.add(cube);
scene.add(ambientLight);
scene.add(directionalLight);

// start animation
animate();
