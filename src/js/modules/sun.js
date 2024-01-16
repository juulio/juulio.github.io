import { SphereBufferGeometry, Mesh, TextureLoader, ShaderMaterial, DoubleSide, NearestFilter, Clock, Vector3 } from 'three';
import Particle from './particle';
import lavaTileAsset from '../../public/images/textures/lavatile.jpg';

import eruptionVertexShader from '../../public/shaders/eruptionVertexShader.glsl';
import eruptionFragmentShader from '../../public/shaders/eruptionFragmentShader.glsl';

/**
 * Render Moon
 * @returns THREE.Mesh
 */
export default class Sun {
	constructor(position, radius, segments) {
        this.radius = radius;
        this.segments = segments;
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
        
        this.sphereGeometry = new SphereBufferGeometry(this.radius, this.segments, this.segments);
        this.sunMesh = new Mesh(this.sphereGeometry, this.shaderMaterial );
		this.sunMesh.position.set(this.pos.x, this.pos.y, this.pos.z);
        this.clock = new Clock();

	}

	updateTimeUniform() {
        this.shaderMaterial.uniforms.uTime.value = this.clock.getElapsedTime() / 6;
    }

    updateSunPosition(posY) {
        this.sunMesh.position.setY(posY);
    }

	updateSun() {
		this.updateTimeUniform();
	}
}