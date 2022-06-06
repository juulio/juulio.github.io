import { SphereBufferGeometry, Mesh, TextureLoader, MeshPhongMaterial } from 'three';
import Particle from './particle';

import moonTextureAsset from '../../public/images/textures/moonTexture.jpg';
import moonDisplacementMap from '../../public/images/textures/moonDisplacementMap.jpg';

let sunMesh;

/**
 * Render Moon
 * @returns THREE.Mesh
 */
export default class Sun {
	constructor(position, radius, segments) {
		this.sphereGeometry = new SphereBufferGeometry(radius, segments, segments);

		let sun = new Particle(position.x, position.y, position.z, radius);

		this.sunMesh = sun.particleMesh;
		this.sunMesh.position.x = position.x;
		this.sunMesh.position.y = position.y;
		this.sunMesh.position.z = position.z;
	}

	rotateSun() {
		this.sunMesh.rotation.x += 0.00001;
		this.sunMesh.rotation.y += 0.001;
	}
}