class ParticlesSystem {
	constructor(position, color, quantity){
		this.position = position;
		this.color = color;
		this.particlesGroup = new THREE.Object3D();
		this.particles = [];

		let i;
		for(i=0;i<quantity;i++){
            this.addParticle();
        }
	}

	getRandomArbitrary(min, max) {
	    return Math.random() * (max - min) + min;
	}

	addParticle(){
		let radius = this.getRandomArbitrary(0.5, 0.7),
			speed = this.getRandomArbitrary(0.15, 0.9),
			position = this.position,
			color = new THREE.Color(this.getRandomArbitrary(0.9, 0.95), this.getRandomArbitrary(0.7, 0.98), this.getRandomArbitrary(0.6, 0.8)),
			particle = new Particle(radius, speed, position, 'forward', color);

		this.particlesGroup.add(particle.particleMesh);
		this.particles.push(particle);
	}

	run(){
		let a, particle;

		for (a=0;a<this.particles.length;a++){
			particle = this.particles[a];
			particle.update();
		}
	}
}