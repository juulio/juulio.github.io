import Experience from '../../Experience'
import * as THREE from 'three'

export default class HauntedHouseFloor {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Setup
        this.setGeometry()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry()
    {
        this.geometry = new THREE.PlaneGeometry(20, 20)
    }

    setMaterial()
    {
        this.material = new THREE.MeshStandardMaterial({
            map: this.resources.items.grassColorTexture,
            aoMap: this.resources.items.grassAmbientOcclusionTexture,
            normalMap: this.resources.items.grassNormalTexture,
            roughnessMap: this.resources.items.grassRoughnessTexture
        })
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.rotation.x = - Math.PI * 0.5
        this.mesh.position.y = 0
        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)
    }
}