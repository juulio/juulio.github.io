class Particle {
	constructor(radius, speed, position, direction, color){
		this.speed = speed;
		this.position = this.setParticlePosition(position);
		this.direction = direction;

		this.material = new THREE.MeshBasicMaterial( { color : color } );
		// this.material = new THREE.MeshPhongMaterial( {color: color} );

		this.geometry =  new THREE.SphereGeometry( radius, 16, 16);
		this.particleMesh = new THREE.Mesh( this.geometry, this.material );
		this.particleMesh.position.set(this.position.x, this.position.y, this.position.z);
	}

	getRandomArbitrary(min, max) {
	    return Math.random() * (max - min) + min;
	}

	setParticlePosition(position){
		let posX, posY, posZ;

		posX = this.getRandomArbitrary(position.x, position.x+20);
		posY = this.getRandomArbitrary(position.y, position.y+13);
		posZ = this.getRandomArbitrary(position.z, position.z-140);

		return new THREE.Vector3( posX, posY, posZ );
	}

	update(){
		// console.log(this.position.z);
		switch(this.direction) {
			case 'backward':
			    this.particleMesh.position.setZ(this.position.z+=this.speed);
			    if(this.position.z > 90) {
			    	this.direction = 'left';
			    }
			    break;
			case 'forward':
			    this.particleMesh.position.setZ(this.position.z-=this.speed);
			    if(this.position.z < -90) {
			    	this.direction = 'right';
			    }
			    break;
			case 'right':
			    this.particleMesh.position.setX(this.position.x+=this.speed);
			    if(this.position.x > 90){
			    	this.direction = 'backward';
			    }
			    break;
			case 'left':
			    this.particleMesh.position.setX(this.position.x-=this.speed);
			    if(this.position.x < -90){
			    	this.direction = 'forward';
			    }
			    break;
			default:
		    	break;
		}
	}
}