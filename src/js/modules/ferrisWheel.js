import { CylinderBufferGeometry, MeshBasicMaterial, Mesh, Group, TextureLoader, RepeatWrapping } from 'three';
import brownTextureAsset from '../../public/images/textures/brownTexture.png';

let wheelMesh;

/**
 * Render Ferris Wheel
 * @returns THREE.Group
 */
const renderFerrisWheel = (position, radius, height) => {
    let ferrisWheelGroup = new Group();

    let wheelGeometry = new CylinderBufferGeometry(radius, radius, height, 50);
    let wireframeMaterial = new MeshBasicMaterial({color: 0xffff00, wireframe: true});
    wheelMesh = new Mesh(wheelGeometry, wireframeMaterial);
    
    wheelMesh.name = 'wheelMesh'; // Name will be used for rotation on update
    wheelMesh.rotation.x = Math.PI / 2 ;
    wheelMesh.position.x = -85;
    wheelMesh.position.y = 70;
    wheelMesh.position.z = -70;
    ferrisWheelGroup.add(wheelMesh);

    let rustyTexture =  new TextureLoader().load(brownTextureAsset);
	rustyTexture.wrapS = rustyTexture.wrapT = RepeatWrapping;
	rustyTexture.repeat.set( 2, 6 );
	let geometry = new CylinderBufferGeometry(2, 2, 70, 4);
	let material = new MeshBasicMaterial( {color: 0xffffff, map: rustyTexture} );
	
	let supportColumnFrontLeft = new Mesh( geometry, material);
	supportColumnFrontLeft.position.x = -95;
	supportColumnFrontLeft.position.y = 35;
	supportColumnFrontLeft.position.z = -66;
	supportColumnFrontLeft.rotation.z = Math.PI / 10;
	ferrisWheelGroup.add(supportColumnFrontLeft);

	let supportColumnRearLeft = supportColumnFrontLeft.clone();
	supportColumnRearLeft.position.z = -74;
	supportColumnRearLeft.rotation.z = -Math.PI / 10;
	ferrisWheelGroup.add(supportColumnRearLeft);

	let supportColumnFrontRight = supportColumnFrontLeft.clone();
	supportColumnFrontRight.position.x = -72;
	supportColumnFrontRight.position.z = -66;
	supportColumnFrontLeft.rotation.z = -Math.PI / 10;
	ferrisWheelGroup.add(supportColumnFrontRight);

	let supportColumnRearRight = supportColumnFrontRight.clone();
	supportColumnRearRight.position.x = -72;
	supportColumnRearRight.position.z = -74;
	ferrisWheelGroup.add(supportColumnRearRight);

	ferrisWheelGroup.position.x = position.x;
	ferrisWheelGroup.position.z = position.z;
    
    return ferrisWheelGroup;
}

/**
 * 
 */
const rotateFerrisWheel = () => {
    wheelMesh.rotation.y += 0.001;
}

export {renderFerrisWheel, rotateFerrisWheel};