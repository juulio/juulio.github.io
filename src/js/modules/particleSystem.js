import { Vector2, Vector3 } from 'three';
import Particle from './particle';

export default class ParticleSystem {
    constructor(x, y, z, radius) {
        this.origin = new Vector3(x, y, z);
        this.particles = [];
        this.radius = radius;
    }

    addParticle(){
        let particle = new Particle(this.origin.x, this.origin.y, this.origin.z, this.radius);
        this.particles.push(particle);
        return particle.particleMesh;
    }

    run(){
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