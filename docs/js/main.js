/**
 * Julio Del Valle - Costa Rica 2021
 */


import scene01 from "./scenes/scene01.js";
// import scene02 from "./scenes/scene02.js";
// import scene03 from "./scenes/scene03.js";
// import scene04 from "./scenes/scene04.js";
// import scene05 from "./scenes/scene05.js";
// import scene06 from "./scenes/scene06.js";
// import scene07 from "./scenes/scene07.js";
// import scene08 from "./scenes/scene08.js";
// import scene09 from "./scenes/scene09.js";
import scene10 from "./scenes/scene10.js";


/**
 * Set basic THREEjs scene stuff
 */
 let scene;
 const rendererWidth = window.innerWidth;
 const rendererHeight = window.innerHeight;
 const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize( rendererWidth, rendererHeight );
 document.body.appendChild( renderer.domElement );
 camera.position.z = 5;
 
 scene = scene01;
 
/**
 * Set all Click Event listeners
 */
const navLinks = document.getElementsByClassName('nav-links');
Array.from(navLinks).forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        scene = link.id;
    });    
});

// document.getElementById('scene01').addEventListener('click', (e) => {
//     e.preventDefault();
//     scene = scene01;
// }); 


/**
 * Init the animate loop to render the Scene
 */
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();


