import * as THREE from 'three'

export default class Bush {
    constructor(scale, position){
        this.scale = scale
        this.position = position

        this.bushGeometry = new THREE.SphereGeometry(1, 16, 16)
        this.bushMaterial = new THREE.MeshStandardMaterial({ color: '#89c854' })
        this.bushMesh = new THREE.Mesh(this.bushGeometry, this.bushMaterial)
        this.bushMesh.scale.set(this.scale, this.scale, this.scale)
        this.bushMesh.position.set(this.position.x, this.position.y, this.position.z)
    }
}