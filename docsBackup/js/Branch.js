import * as THREE from './vendor/three.module.js';

class Branch {
	constructor(origin, radius, height, angleX, angleZ, fractalRatio) {
		this.origin = origin;
		this.radius = radius;
		this.height = height;
		this.angleX = angleX;
		this.angleZ = angleZ;
		this.finished = false;
		this.fractalRatio = fractalRatio;

		let boxGeometry = new THREE.BoxBufferGeometry( this.radius*2, this.height, this.radius*2 ),
			branchGeometry = new THREE.CylinderBufferGeometry( this.radius, this.radius, this.height ),
			woodMaterial = new THREE.MeshBasicMaterial( { color: 0x8B4513} ),
			transparentMaterial = new THREE.MeshBasicMaterial( { transparent: true, opacity: 0} );

		this.branchMesh = new THREE.Mesh ( branchGeometry, woodMaterial );
		this.branchParentMesh = new THREE.Mesh( boxGeometry, transparentMaterial );

		this.branchMesh.position.set(this.origin.x, this.height/2, this.origin.z);

		this.branchParentMesh.add(this.branchMesh);
		this.branchParentMesh.position.set(this.origin.x, this.origin.y, this.origin.z);
	}



	getBranchMesh() {
		return this.branchParentMesh;
	}

	branchFrontRight() {
		let	newHeight = this.height * this.fractalRatio,
		 	newOrigin = new THREE.Vector3( this.origin.x, this.origin.y + this.height, this.origin.z),
			newRadius = this.radius * this.fractalRatio,
			newAngleX = this.angleX * this.fractalRatio,
			newAngleZ = this.angleZ * this.fractalRatio;

		let branch = new Branch(newOrigin, newRadius, newHeight, this.angleX, this.angleZ, this.fractalRatio);
		branch.branchParentMesh.rotation.set(this.angleX, 0, this.angleZ);
		// this.branchParentMesh.add(branch.branchParentMesh);
		console.log(this.branchParentMesh);
		return branch;
	}

	branchFrontLeft() {
		let newHeight = this.height * this.fractalRatio,
			newRadius = this.radius * this.fractalRatio,
			newOrigin = new THREE.Vector3( this.origin.x, this.height, this.origin.z),
			newAngleX = this.angleX * this.fractalRatio,
			newAngleZ = this.angleZ * this.fractalRatio;

		let branch = new Branch(newOrigin, newRadius, newHeight, this.angleX, this.angleZ, this.fractalRatio);
		branch.branchParentMesh.rotation.set(-this.angleX, 0, this.angleZ);
		this.branchParentMesh.add(branch.branchParentMesh);
		return branch;
	}

	branchRearRight() {
		let newHeight = this.height * this.fractalRatio,
			newRadius = this.radius * this.fractalRatio,
			newOrigin = new THREE.Vector3( this.origin.x, this.height, this.origin.z),
			newAngleX = this.angleX * this.fractalRatio,
			newAngleZ = this.angleZ * this.fractalRatio;

		let branch = new Branch(newOrigin, newRadius, newHeight, this.angleX, this.angleZ, this.fractalRatio);
		branch.branchParentMesh.rotation.set(this.angleX, 0, -this.angleZ);
		this.branchParentMesh.add(branch.branchParentMesh);
		return branch;
	}

	branchRearLeft() {
		let newHeight = this.height * this.fractalRatio,
			newRadius = this.radius * this.fractalRatio,
			newOrigin = new THREE.Vector3( this.origin.x, this.height, this.origin.z),
			newAngleX = this.angleX * this.fractalRatio,
			newAngleZ = this.angleZ * this.fractalRatio;

		let branch = new Branch(newOrigin, newRadius, newHeight, this.angleX, this.angleZ, this.fractalRatio);
		branch.branchParentMesh.rotation.set(-this.angleX, 0, -this.angleZ);
		this.branchParentMesh.add(branch.branchParentMesh);
		return branch;
	}

	branchA() {
		let dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(PI / 6);
		dir.mult(0.67);
		let newEnd = p5.Vector.add(this.end, dir);
		let b = new Branch(this.end, newEnd);
		return b;
	}
	
	branchB() {
		let dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(-PI / 4);
		dir.mult(0.67);
		let newEnd = p5.Vector.add(this.end, dir);    
		let b = new Branch(this.end, newEnd);
		return b;
	}

	jitter() {
		this.end.x += random(-1, 1);
		this.end.y += random(-1, 1);
	}
}

export { Branch as default}
