import THREE from '../js/vendor/three.module.js';

class Branch {
	constructor(origin, radius, height, angleX, angleZ) {
		this.origin = origin;
		this.radius = radius;
		this.height = height;
		this.angleX = angleX;
		this.angleZ = angleZ;
		this.finished = false;
		this.branchParentMesh;

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
		// stroke(255);
		// line(this.begin.x, this.begin.y, this.end.x, this.end.y);
		return this.branchParentMesh;
	}

	branchFrontRight() {
		let newOrigin = new THREE.Vector3( this.origin.x, this.height, this.origin.z);
		let branch = new Branch(newOrigin, this.radius, this.height, this.angleX, this.angleZ, this.woodMaterial, this.transparentMaterial);
		branch.branchParentMesh.rotation.set(this.angleX, 0, this.angleZ);
		return branch;
	}


	jitter() {
		this.end.x += random(-1, 1);
		this.end.y += random(-1, 1);
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
}

export { Branch as default}
