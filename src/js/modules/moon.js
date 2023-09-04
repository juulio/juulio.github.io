import { SphereBufferGeometry, Mesh, TextureLoader, MeshBasicMaterial, MeshPhongMaterial } from 'three';
import {ShaderMaterial, DoubleSide, NearestFilter, Clock} from 'three';
import moonTextureAsset from '../../public/images/textures/moonTexture.jpg';
import moonDisplacementMap from '../../public/images/textures/moonDisplacementMap.jpg';

import transparentSphereAsset from '../../public/images/textures/cloud.png';
import eruptionVertexShader from '../../public/shaders/moonVertexShader.glsl';
import eruptionFragmentShader from '../../public/shaders/eruptionFragmentShader.glsl';

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

		// Transparent sphere
		const texture = new TextureLoader().load(transparentSphereAsset, (texture) => {
            texture.minFilter = NearestFilter;
        });

		this.shaderMaterial = new ShaderMaterial({
            vertexShader: eruptionVertexShader,
            fragmentShader: eruptionFragmentShader,
            uniforms: {
                uTime: { value: 0},
                uTexture: { value: texture}
            },
            transparent: true,
            side: DoubleSide
        });

		this.sphereGeom =  new SphereBufferGeometry( radius*1.1, segments, segments );
		// this.blueMaterial = new MeshBasicMaterial( { color: 0xaa0010, transparent: true, opacity: 0.2 } );
		this.transparentSphereMesh = new Mesh( this.sphereGeom, this.shaderMaterial );

		this.transparentSphereMesh.position.x = position.x;
		this.transparentSphereMesh.position.y = position.y;
		this.transparentSphereMesh.position.z = position.z;

        this.clock = new Clock();
	}

	updateTimeUniform() {
        this.shaderMaterial.uniforms.uTime.value = this.clock.getElapsedTime();
    }

	rotateMoon() {
		this.moonMesh.rotation.x += 0.00001;
		this.moonMesh.rotation.y += 0.001;
	}
}