import * as THREE from 'three'
import Experience from '../../Experience'
import Fog from '../../World/Fog'
import House from './House'
import HauntedHouseFloor from './HauntedHouseFloor'
import Lights from './Lights'
import Grave from './Grave'
import Ghost from './Ghost'
import AnimatedBush from './AnimatedBush'

export default class SceneHauntedHouse {
    constructor(){
        // this.fog = new Fog('#262837', 1, 15)
        this.experience = new Experience()
        this.time = this.experience.time
        this.scene = this.experience.scene
        this.renderer = this.experience.renderer
        this.resources = this.experience.resources
        
        this.camera = this.experience.camera
        this.camera.instance.position.set(4, 4, 9)
        
        this.adjustRenderer()

         // Wait for resources
         this.resources.on('ready', () => {
            // Setup
            this.setTextures()
            // this.setGraves()
            this.setAnimatedBush()
            this.setGhosts()
            // this.house = new House()
            this.hauntedHouseFloor = new HauntedHouseFloor()
            // this.lights= new Lights()
            this.setShadows()
        })
    }

    adjustRenderer(){
        this.renderer.instance.setClearColor('#262837')
        this.renderer.instance.shadowMap.enabled = true
        this.renderer.instance.shadowMap.type = THREE.PCFSoftShadowMap
    }
    setTextures(){
        this.grassColorTexture = this.resources.items.grassColorTexture
        this.grassAmbientOcclusionTexture = this.resources.items.grassAmbientOcclusionTexture
        this.grassNormalTexture = this.resources.items.grassNormalTexture
        this.grassRoughnessTexture = this.resources.items.grassRoughnessTexture
        this.bricksColorTexture = this.resources.items.bricksColorTexture
        this.doorColorTexture = this.resources.items.doorColorTexture
        this.particleTexture = this.resources.items.particleTexture

        this.grassColorTexture.repeat.set(8, 8)
        this.grassAmbientOcclusionTexture.repeat.set(8, 8)
        this.grassNormalTexture.repeat.set(8, 8)
        this.grassRoughnessTexture.repeat.set(8, 8)

        this.grassColorTexture.wrapS = THREE.RepeatWrapping
        this.grassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
        this.grassNormalTexture.wrapS = THREE.RepeatWrapping
        this.grassRoughnessTexture.wrapS = THREE.RepeatWrapping

        this.grassColorTexture.wrapT = THREE.RepeatWrapping
        this.grassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
        this.grassNormalTexture.wrapT = THREE.RepeatWrapping
        this.grassRoughnessTexture.wrapT = THREE.RepeatWrapping

        this.bricksColorTexture.colorSpace = THREE.SRGBColorSpace
        this.doorColorTexture.colorSpace = THREE.SRGBColorSpace
        this.grassColorTexture.colorSpace = THREE.SRGBColorSpace
    }

    setGraves() {
        this.gravesGroup = new THREE.Group()

        for(let i=0; i<60; i++){
            this.angle = Math.random() * Math.PI * 2
            this.radius = 3 + Math.random() * 6
            const x = Math.sin(this.angle) * this.radius
            const z = Math.cos(this.angle) * this.radius
            this.scale = Math.random() * 0.5 + 0.5

            this.grave = new Grave(this.scale, { x, y: 0.3, z })
            this.grave.graveMesh.position.set(x, 0.3, z)
            this.grave.graveMesh.rotation.y = (Math.random() - 0.5) * 0.4
            this.grave.graveMesh.rotation.z = (Math.random() - 0.5) * 0.4
            this.grave.graveMesh.castShadow = true
            this.gravesGroup.add(this.grave.graveMesh)
        }
        this.scene.add(this.gravesGroup)
    }


    setGhosts(){
        this.ghost1 = new Ghost(0, 1, 0)
        this.ghost2 = new Ghost(0, 1, 0)
        this.ghost3 = new Ghost(0, 1, 0)
        this.ghost4 = new Ghost(0, 2, 3)
        this.ghost4.pointLight.add(this.animatedBush1.animatedBushMesh)

        // this.scene.add(this.ghost1.pointLight)
        this.scene.add(
            this.ghost1.pointLight,
            this.ghost2.pointLight,
            this.ghost3.pointLight,
            this.ghost4.pointLight
        )
    }

    setAnimatedBush(){
        this.particlesCount = 100
        this.particlesRadius = 0.2
        this.animatedBush1 = new AnimatedBush(
            this.resources.items.particleTexture,
            this.particlesCount,
            this.particlesRadius
        )
        this.animatedBush1.animatedBushMesh.castShadow = true
        this.scene.add(this.animatedBush1.animatedBushMesh)
    }

    setShadows(){
    }

    update() {
        if(this.ghost1){
            this.ghost1.update(0.5, 4, 4)
        }
        if(this.ghost2){
            this.ghost2.update(0.32, 4, 4)
        }
        if(this.ghost3){
            this.ghost3.update(0.18, 7 + Math.sin(this.time.elapsed * 0.32), 7 + Math.sin(this.time.elapsed * 0.5))
        }
        if(this.ghost4){
            this.ghost4.update(0.18, 4 + Math.sin(this.time.elapsed * 0.12), 4 + Math.sin(this.time.elapsed * 0.5))
        }
        if(this.animatedBush1){
            this.animatedBush1.updateParticles()
        }
    }
}


// // console.log(animatedBush.animatedBushMesh.position)

//     animatedBush.updateParticles()
//     // animatedBush.animatedBushMesh.geometry.attributes.position.needsUpdate = true
