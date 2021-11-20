import { Vector3 } from 'three';
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
        // console.log(particle.radius);
        this.particles.push(particle);
        // particle.particleMesh.material.color.r = getRandomArbitrary(0.3, 0.85);
        // particle.particleMesh.material.color.g = getRandomArbitrary(0, 0.3);
        // particle.particleMesh.material.color.b = getRandomArbitrary(0, 0.05);
        return particle.particleMesh;
    }

    run(){
        // console.log(this.particles[0].lifespan);
        // console.log("Particles.length: " + this.particles.length) + " Scene.children: " + this.particles.parent;
        for(let particle of this.particles){
            let gravity = new Vector3(0, -0.01, 0);
            particle.applyForce(gravity);
            particle.update();
        }

        for(let i = this.particles.length -1; i >=0; i--){
            let particle = this.particles[i],
                scene = particle.particleMesh.parent;

            if(particle.isDead()){
                this.particles.splice(i,1);
                scene.remove(particle.particleMesh);
                // console.log("Particles length: " + this.particles.length + " Scene.children: " + scene.children.length);
            }
        }
    }
}