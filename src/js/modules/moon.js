import { SphereBufferGeometry, Mesh, TextureLoader, MeshBasicMaterial, MeshPhongMaterial } from 'three';
import moonTextureAsset from '../../public/images/textures/moonTexture.jpg';
import moonDisplacementMap from '../../public/images/textures/moonDisplacementMap.jpg';

let moonMesh;

/**
 * Render Moon
 * @returns THREE.Mesh
 */
export default class Moon {
	constructor(position, radius, segments) {
		this.sphereGeometry = new SphereBufferGeometry(radius, segments, segments);
		this.texture = new TextureLoader().load( moonTextureAsset );
		this.displacementMap = new TextureLoader().load( moonDisplacementMap );

		this.moonMaterial = new MeshPhongMaterial ( 
			{
				color: 0xffffff,
				map: this.texture,
				displacementMap: this.displacementMap,
				displacementScale: 0.06,
				bumpMap: this.displacementMap,
				bumpScale: 0.04,
				reflectivity: 0, 
				shininess: 0
			} 
		);

		this.moonMesh = new Mesh(this.sphereGeometry, this.moonMaterial);
		this.moonMesh.position.x = position.x;
		this.moonMesh.position.y = position.y;
		this.moonMesh.position.z = position.z;

		this.sphereGeom =  new SphereBufferGeometry( radius*1.2, segments, segments );
		this.blueMaterial = new MeshBasicMaterial( { color: 0x0000ff, transparent: true, opacity: 0.2 } );
		this.transparentSphereMesh = new Mesh( this.sphereGeom, this.blueMaterial );

		this.transparentSphereMesh.position.x = position.x;
		this.transparentSphereMesh.position.y = position.y;
		this.transparentSphereMesh.position.z = position.z;

	}

	rotateMoon() {
		this.moonMesh.rotation.x += 0.00001;
		this.moonMesh.rotation.y += 0.001;
	}
}