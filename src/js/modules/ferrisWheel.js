import { CylinderBufferGeometry, MeshBasicMaterial, Mesh, Group, TextureLoader, RepeatWrapping } from 'three';
import brownTextureAsset from '../../public/images/textures/brownTexture.png';

let wheelMesh;

/**
 * Render Ferris Wheel
 * @returns THREE.Group
 */
const renderFerrisWheel = (position, wheelRadius, wheelHeight, columnRadius, columnHeight) => {
    let ferrisWheelGroup = new Group();

    let wheelGeometry = new CylinderBufferGeometry(wheelRadius, wheelRadius, wheelHeight, 50);
    let wireframeMaterial = new MeshBasicMaterial({color: 0xffff00, wireframe: true});
    wheelMesh = new Mesh(wheelGeometry, wireframeMaterial);
    
    wheelMesh.name = 'wheelMesh'; // Name will be used for rotation on update
    wheelMesh.rotation.x = Math.PI / 2 ;
    wheelMesh.position.x = position.x;
    wheelMesh.position.y = position.y + columnHeight;
    wheelMesh.position.z = position.z;
    ferrisWheelGroup.add(wheelMesh);

    let rustyTexture =  new TextureLoader().load(brownTextureAsset);
	rustyTexture.wrapS = rustyTexture.wrapT = RepeatWrapping;
	rustyTexture.repeat.set( 2, 6 );
	let geometry = new CylinderBufferGeometry(columnRadius, columnRadius, columnHeight, 4);
	let material = new MeshBasicMaterial( {color: 0xffffff, map: rustyTexture} );
	
	let supportColumnFrontLeft = new Mesh( geometry, material);
	supportColumnFrontLeft.position.x = position.x - wheelRadius;
	supportColumnFrontLeft.position.y = columnHeight / 2;
	supportColumnFrontLeft.position.z = position.z - wheelHeight;
	supportColumnFrontLeft.rotation.z = Math.PI / 10;
	ferrisWheelGroup.add(supportColumnFrontLeft);

	let supportColumnRearLeft = supportColumnFrontLeft.clone();
	supportColumnRearLeft.position.x = position.x - wheelRadius;
	supportColumnRearLeft.position.z = position.z + wheelHeight;
	supportColumnRearLeft.rotation.z = -Math.PI / 10;
	ferrisWheelGroup.add(supportColumnRearLeft);

	let supportColumnFrontRight = supportColumnFrontLeft.clone();
	supportColumnFrontRight.position.x = position.x + wheelRadius;
	supportColumnFrontRight.position.z = position.z - wheelHeight;
	supportColumnFrontLeft.rotation.z = -Math.PI / 10;
	ferrisWheelGroup.add(supportColumnFrontRight);

	let supportColumnRearRight = supportColumnFrontRight.clone();
	supportColumnRearRight.position.x = position.x + wheelRadius;
	supportColumnRearRight.position.z = position.z + wheelHeight;
	ferrisWheelGroup.add(supportColumnRearRight);
    
    return ferrisWheelGroup;
}

/**
 * rotate Ferris Wheel Mesh
 */
const rotateFerrisWheel = () => {
    wheelMesh.rotation.y += 0.001;
}

export {renderFerrisWheel, rotateFerrisWheel};