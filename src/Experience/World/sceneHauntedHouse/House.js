import Experience from "../../Experience"
import * as THREE from 'three'

export default class House {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Setup
        this.houseGroup = new THREE.Group()
        this.setWalls()
        this.setRoof()
        this.setDoor()

        this.scene.add(this.houseGroup)
    }

    setWalls(){
        this.walls = new THREE.Mesh(
            new THREE.BoxGeometry(4, 2.5, 4),
            new THREE.MeshStandardMaterial({
                map: this.resources.items.bricksColorTexture,
                aoMap: this.resources.items.bricksAmbientOcclusionTexture,
                normalMap: this.resources.items.bricksNormalTexture,
                roughnessMap: this.resources.items.bricksRoughnessTexture
             })
        )
        this.walls.position.y = 2.5 / 2
        this.houseGroup.add(this.walls)
    }

    setRoof(){
        this.roof = new THREE.Mesh(
            new THREE.ConeGeometry(3.5, 1, 4),
            new THREE.MeshStandardMaterial({ color: '#b35f45' })
        )
        this.roof.position.y = 3
        this.roof.rotation.y = Math.PI / 4
        this.houseGroup.add(this.roof)
    }

    setDoor(){
        this.door = new THREE.Mesh(
            new THREE.PlaneGeometry(2.2, 2.2),
            new THREE.MeshStandardMaterial({
                map: this.resources.items.doorColorTexture,
                transparent: true,
                alphaMap: this.resources.items.doorAlphaTexture,
                aoMap: this.resources.items.doorAmbientOcclusionTexture,
                displacementMap: this.resources.items.doorHeightTexture,
                displacementScale: 0.1,
                normalMap: this.resources.items.doorNormalTexture,
                metalnessMap: this.resources.items.doorMetalnessTexture,
                roughnessMap: this.resources.items.doorRoughnessTexture
            })
        )
        this.door.position.z = 2 + 0.01
        this.door.position.y = 1
        this.houseGroup.add(this.door)
    }
}