
const scene01 = new THREE.Scene();
const geometry = new THREE.SphereGeometry( 2, 32, 16 );
const material = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
const sphere = new THREE.Mesh( geometry, material );
scene01.add( sphere );

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene01.add( light );

export default scene01;