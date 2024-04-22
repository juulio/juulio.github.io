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
        this.fog = new Fog('#262837', 1, 15)
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.camera = this.experience.camera

         // Wait for resources
         this.resources.on('ready', () => {
            // Setup
            this.setCamera()
            this.setTextures()
            this.setGraves()
            this.setGhosts()
            this.house = new House()
            this.hauntedHouseFloor = new HauntedHouseFloor()
            this.lights= new Lights()
        })
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
        this.ghost1 = new Ghost(new THREE.Vector3(0, 1, 0))
        this.ghost2 = new Ghost(new THREE.Vector3(0, 1, 0))
        this.ghost3 = new Ghost(new THREE.Vector3(0, 1, 0))
        this.ghost4 = new Ghost(new THREE.Vector3(0, 1, 3))

        this.scene.add(
            this.ghost1.pointLight,
            this.ghost2.pointLight,
            this.ghost3.pointLight,
            this.ghost4.pointLight
        )
    }

    setCamera(){
        console.log(this.camera)
        this.camera.instance.position.set(4, 4, 9)
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
        //console.log('SceneHauntedHouse update')
    }
}


//     renderer.setClearColor('#262837')
// })
  



// /**
//  * Shadows
//  */
// renderer.shadowMap.enabled = true
// renderer.shadowMap.type = THREE.PCFSoftShadowMap
// moonLight.castShadow = true
// doorLight.castShadow = true
// ghost1.castShadow = true
// ghost2.castShadow = true
// ghost3.castShadow = true
// ghost4.castShadow = true

// walls.castShadow = true
// bush1.castShadow = true
// bush2.castShadow = true
// bush3.castShadow = true
// bush4.castShadow = true
// animatedBush.animatedBushMesh.castShadow = true

// floor.receiveShadow = true

// doorLight.shadow.mapSize.width = 256
// doorLight.shadow.mapSize.height = 256
// doorLight.shadow.camera.far = 7

// ghost1.shadow.mapSize.width = 256
// ghost1.shadow.mapSize.height = 256
// ghost1.shadow.camera.far = 7

// ghost2.shadow.mapSize.width = 256
// ghost2.shadow.mapSize.height = 256
// ghost2.shadow.camera.far = 7

// ghost3.shadow.mapSize.width = 256
// ghost3.shadow.mapSize.height = 256
// ghost3.shadow.camera.far = 7

// ghost4.shadow.mapSize.width = 256
// ghost4.shadow.mapSize.height = 256
// ghost4.shadow.camera.far = 7




// /**
//  * Animate
//  */
// const clock = new THREE.Clock()

// // console.log(animatedBush.animatedBushMesh.position)

// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()

//     // Update controls
//     controls.update()



//     animatedBush.updateParticles()
//     // animatedBush.animatedBushMesh.geometry.attributes.position.needsUpdate = true


//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()