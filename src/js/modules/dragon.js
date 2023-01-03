import { ConeBufferGeometry, MeshPhongMaterial, Mesh, MeshBasicMaterial} from 'three';

/**
 * Render a low poly Dragon using threejs geometries
 * @returns THREE.Mesh dragon
 */
export default class Dragon {
	constructor(position, radius, segments){
		this.coneGeometry = new ConeBufferGeometry( radius, 4, segments );
		this.dragonMaterial = new MeshBasicMaterial() //{ color: 0x00ff00, wireframe: true })
		this.material = new MeshPhongMaterial({
			color: 0xFF0000,    // red (can also use a CSS color string here)
			flatShading: true,
		  });
		this.dragonFaceMesh = new Mesh(this.coneGeometry, this.material);
		this.dragonFaceMesh.position.x = position.x;
		this.dragonFaceMesh.position.y = position.y;
		this.dragonFaceMesh.position.z = position.z;

		return this.dragonObject;
	}
}
