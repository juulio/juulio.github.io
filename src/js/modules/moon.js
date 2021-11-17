import { SphereBufferGeometry, MeshBasicMaterial, Mesh } from 'three';

let moonMesh;

/**
 * Render Moon
 * @returns THREE.Mesh
 */
const renderMoon = (position, radius, segments) => {
	const sphereGeometry = new SphereBufferGeometry(radius, segments, segments);

	const moonMaterial = new MeshBasicMaterial({
		wireframe: true,
		color: 0xF0E68C
	});

	moonMesh = new Mesh(sphereGeometry, moonMaterial);
	moonMesh.position.x = position.x;
	moonMesh.position.y = position.y;
	moonMesh.position.z = position.z;

	return moonMesh;
}

/**
 * 
 */
const rotateMoon = () => {
    moonMesh.rotation.y += 0.006;
}

export {renderMoon, rotateMoon};