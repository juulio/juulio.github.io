import { SphereBufferGeometry, Mesh, TextureLoader, ShaderMaterial, DoubleSide, NearestFilter, Clock, Vector3 } from 'three';
import Particle from './particle';
import lavaTileAsset from '../../public/images/textures/lavatile.jpg';

import eruptionVertexShader from '../../public/shaders/eruptionVertexShader.glsl';
import eruptionFragmentShader from '../../public/shaders/eruptionFragmentShader.glsl';

let sunMesh;

/**
 * Render Moon
 * @returns THREE.Mesh
 */
export default class Sun {
	constructor(position, radius, segments) {
		this.sphereGeometry = new SphereBufferGeometry(radius, segments, segments);
		this.pos = new Vector3(position.x, position.y, position.z);

		const texture = new TextureLoader().load(lavaTileAsset, (texture) => {
            texture.minFilter = NearestFilter;
        });

        this.shaderMaterial = new ShaderMaterial({
            vertexShader: eruptionVertexShader,
            fragmentShader: eruptionFragmentShader,
            uniforms: {
                uTime: { value: 0},
                uTexture: { value: texture}
            },
            transparent: true
            // side: DoubleSide
        });     
        
        const geometry = new SphereBufferGeometry( this.radius);
        this.sunMesh = new Mesh( geometry, this.shaderMaterial );
		this.sunMesh.position.set(this.pos.x, this.pos.y, this.pos.z);
        this.clock = new Clock();

	}

	updateTimeUniform() {
        this.shaderMaterial.uniforms.uTime.value = this.clock.getElapsedTime() / 6;
    }

	updateSun() {
		this.updateTimeUniform();
	}
}