import { Vector2, Vector3 } from 'three';
import Particle from './particle';
import { getRandomArbitrary } from './utils';

export default class ParticleSystem {
    constructor(x, y, z, radius) {
        this.origin = new Vector3(x, y, z);
        this.particles = [];
        this.radius = radius;
    }

    addParticle(){
        let particle = new Particle(this.origin.x, this.origin.y, this.origin.z, getRandomArbitrary(0, this.radius));
        console.log(particle.radius);
        this.particles.push(particle);
        particle.particleMesh.material.color.r = Math.random();
        particle.particleMesh.material.color.g = Math.random();
        particle.particleMesh.material.color.b = Math.random();
        return particle.particleMesh;
    }

    run(){
        // console.log(this.particles.length)
        for(let particle of this.particles){
            let gravity = new Vector3(0, 0.01, 0);
            particle.applyForce(gravity);
            particle.update();
        }

        for(let i = this.particles.length -1; i >=0; i--){
            if(this.particles[i].isDead()){
                this.particles.splice(i,1);
            }
        }
    }
}