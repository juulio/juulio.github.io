import * as THREE from 'three'

export default class Grave {
    constructor(scale, position){
        this.scale = scale
        this.position = position

        this.graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2)
        this.graveMaterial = new THREE.MeshStandardMaterial({ color: '#b2b6b1' })
        this.graveMesh = new THREE.Mesh(this.graveGeometry, this.graveMaterial)
        this.graveMesh.scale.set(this.scale, this.scale, this.scale)
        this.graveMesh.castShadow = true
        console.log(this)

        this.graveMesh.position.set(this.position.x, this.position.y, this.position.z)
    }
}