import Particle from './particle';

class ParticleSystem {
    constructor(x, y) {
        this.origin = createVector(x, y);
        this.particles = [];
    }

    addParticle(){
        this.particles.push(new Particle(this.origin.x, this.origin.y));
    }

    run(){
        for(let particle of this.particles){
            let gravity = createVector(0, 0.2);
            particle.applyForce(gravity);
            particle.run();
        }

        for(let i = this.particles.length -1; i >=0; i--){
            if(this.particles[i].isDead()){
                this.particles.splice(i,1);
            }
        }
    }
}