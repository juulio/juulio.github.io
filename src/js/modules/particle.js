import { Vector2, Vector3, Mesh, SphereBufferGeometry, MeshBasicMaterial, ShapeUtils, ShaderMaterial, DoubleSide, TextureLoader, NearestFilter, Clock } from "three";
import { getRandomArbitrary, getRandomInt} from './utils'

import amberLavaAsset from '../../public/images/textures/amberLava.png';
import eruptionVertexShader from '../../public/shaders/eruptionVertexShader.glsl';
import eruptionFragmentShader from '../../public/shaders/eruptionFragmentShader.glsl';

const VIEWPORT_WIDTH = window.innerWidth;
const VIEWPORT_HEIGHT = window.innerHeight;

export default class Particle {
    constructor(x, y, z, radius) {
        this.pos = new Vector3(x, y, z);
        this.vel = new Vector3(getRandomArbitrary(-0.9, 0.9), getRandomArbitrary(4.0, 4.5), getRandomArbitrary(-0.7, 0.7));
        this.acc = new Vector3(0, getRandomArbitrary(0, 0.000000002), 0);
        this.lifespan = 1;
        this.radius = radius;
        
        const texture = new TextureLoader().load(amberLavaAsset, (texture) => {
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
        
        const geometry = new SphereBufferGeometry( this.radius, 10, 10);
        this.particleMesh = new Mesh( geometry, this.shaderMaterial );
        this.clock = new Clock();
    }

    updateTimeUniform() {
        this.shaderMaterial.uniforms.uTime.value = this.clock.getElapsedTime();
    }

    isDead() {
        return this.pos.y < 0;
        // return this.lifespan < 0;
    }

    /**
     * @param {THREE.Vec2} force 
     */
    applyForce(force) {
        this.acc.add(force);
    }

    edges() {
        if(this.pos.y >= VIEWPORT_HEIGHT - this.radius) {
            this.pos.y = VIEWPORT_HEIGHT - r;
            this.vel.y *= -1;
        }
        if(this.pos.x >= VIEWPORT_WIDTH - this.radius) {
            this.pos.x = VIEWPORT_WIDTH - this.radius;
            this.vel.x *= -1;
        }
        else if(this.pos.x <= this.radius){
            this.pos.x = this.radius;
            this.vel *= -1;
        }
    }

    update() {
        // console.log(this.vel);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0, 0);
        // this.acc = new Vector3(0, 0, 0);
        this.lifespan -= 0.002; // keeps 500 particles alive at the same time. No more
        // console.log(this.pos.y);
        // console.log(this.particleMesh.material.opacity  + " -> " + this.lifespan);
        this.particleMesh.material.opacity = this.lifespan;
        this.particleMesh.position.set(this.pos.x, this.pos.y, this.pos.z);
        this.updateTimeUniform();
    }
}