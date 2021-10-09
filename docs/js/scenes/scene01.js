
let scene10 = new THREE.Scene();
const geometry = new THREE.SphereGeometry( 2, 32, 16 );
const material = new THREE.MeshLambertMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh( geometry, material );
scene10.add( sphere );

export { scene10 };