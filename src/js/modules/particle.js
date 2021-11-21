import { Vector3, Mesh, SphereBufferGeometry, ShaderMaterial, DoubleSide, TextureLoader, NearestFilter, Clock } from "three";
import { getRandomArbitrary} from './utils'

import lavaTileAsset from '../../public/images/textures/lavatile.jpg';
import eruptionVertexShader from '../../public/shaders/eruptionVertexShader.glsl';
import eruptionFragmentShader from '../../public/shaders/eruptionFragmentShader.glsl';

export default class Particle {
    constructor(x, y, z, radius) {
        this.pos = new Vector3(x, y, z);
        this.vel = new Vector3(getRandomArbitrary(-0.1, 0.1), getRandomArbitrary(0.3, 0.5), getRandomArbitrary(-0.07, 0.07));
        this.acc = new Vector3(0, getRandomArbitrary(0.3, 0.4), 0);
        this.lifespan = 1;
        this.radius = radius;
        
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
            transparent: true,
            side: DoubleSide
        });     
        
        const geometry = new SphereBufferGeometry( this.radius);
        this.particleMesh = new Mesh( geometry, this.shaderMaterial );
        this.clock = new Clock();
    }

    updateTimeUniform() {
        this.shaderMaterial.uniforms.uTime.value = this.clock.getElapsedTime();
    }

    isDead() {
        return this.pos.y < 0;
    }

    /**
     * @param {THREE.Vec2} force 
     */
    applyForce(force) {
        this.acc.add(force);
    }

    update() {
        // console.log(this.vel);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0, 0);
        this.lifespan -= 0.002; // keeps 500 particles alive at the same time. No more
        // console.log(this.particleMesh.material.opacity  + " -> " + this.lifespan);
        this.particleMesh.material.opacity = this.lifespan;
        this.particleMesh.position.set(this.pos.x, this.pos.y, this.pos.z);
        this.updateTimeUniform();
    }
}