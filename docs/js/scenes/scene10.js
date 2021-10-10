
const scene10 = new THREE.Scene();
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh( geometry, material );
scene10.add( cube );


const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene10.add( light );

export default scene10;