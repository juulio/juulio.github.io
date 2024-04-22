import Experience from "../../Experience"
import AnimatedBush from "./AnimatedBush"
import Bush from "./Bush"
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
        this.setBushes()
        this.setShadows()

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
        
        this.doorLight = new THREE.PointLight('#ff7d46', 3, 6)
        this.doorLight.castShadow = true
        this.doorLight.shadow.mapSize.width = 256
        this.doorLight.shadow.mapSize.height = 256
        this.doorLight.shadow.camera.far = 7
        this.doorLight.position.set(0, 2.2, 2.7)
        this.houseGroup.add(this.doorLight)
    }

    setBushes(){
        this.bush1 = new Bush(0.5, { x: 0.8, y: 0.2, z: 2.2 })
        this.bush2 = new Bush(0.25, { x: 1.4, y: 0.1, z: 2.1 })
        this.bush3 = new Bush(0.4, { x: - 0.8, y: 0.1, z: 2.2 })
        this.bush4 = new Bush(0.15, { x: - 1, y: 0.05, z: 2.6 })

        this.houseGroup.add(this.bush1.bushMesh, this.bush2.bushMesh, this.bush3.bushMesh, this.bush4.bushMesh)
    }

    setShadows(){
        this.walls.castShadow = true
    }
}