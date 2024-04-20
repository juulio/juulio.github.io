import * as THREE from 'three'
import Experience from '../../Experience'
import Fog from '../../World/Fog'
import AnimatedBush from './AnimatedBush'
import House from './House'
import HauntedHouseFloor from './HauntedHouseFloor'

export default class SceneHauntedHouse {
    constructor(){
        this.fog = new Fog('#262837', 1, 15)
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

         // Wait for resources
         this.resources.on('ready', () => {
            // Setup
            this.setTextures()
            this.initGraves()
            this.house = new House()
            this.hauntedHouseFloor = new HauntedHouseFloor()
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

    initGraves(){
    
    }

    update() {
        //console.log('SceneHauntedHouse update')
    }
}

// /**
//  * Lights
//  */
// // Ambient light
// const ambientLight = new THREE.AmbientLight('#b9d5ff', 0.12)
// gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
// scene.add(ambientLight)

// // Directional light
// const moonLight = new THREE.DirectionalLight('#b9d5ff', 0.26 )
// moonLight.position.set(4, 5, - 2)
// gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
// gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
// gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
// gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
// scene.add(moonLight)



// /**
//  * Ghosts
//  */
// const coneGeometry = new THREE.ConeGeometry(0.5, 1, 4)

// const ghost1 = new THREE.PointLight('#ff00ff', 2, 3)
// ghost1.position.y = 1
// const ghost1Cone = new THREE.Mesh(
//     coneGeometry,
//     new THREE.MeshBasicMaterial({ color: '#ff00ff', transparent: true, opacity: 0.3})
// )
// ghost1.add(ghost1Cone)
// scene.add(ghost1)

// const ghost2 = new THREE.PointLight('#00ffff', 2, 3)
// ghost2.position.y = 1
// const ghost2Cone = new THREE.Mesh(
//     coneGeometry,
//     new THREE.MeshBasicMaterial({ color: '#00ffff', transparent: true, opacity: 0.3})
// )
// ghost2.add(ghost2Cone)
// scene.add(ghost2)


// const ghost3 = new THREE.PointLight('#ffff00', 2, 3)
// ghost3.position.y = 1
// const ghost3Cone = new THREE.Mesh(
//     coneGeometry,
//     new THREE.MeshBasicMaterial({ color: '#ffff00', transparent: true, opacity: 0.3})
// )
// ghost3.add(ghost3Cone)
// scene.add(ghost3)

// const ghost4 = new THREE.PointLight('#00ff00', 2, 3)
// ghost4.position.set(0, 1, 3)
// ghost4.add(animatedBush.animatedBushMesh)
// scene.add(ghost4)

//     renderer.setClearColor('#262837')
// })
  

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.x = 4
// camera.position.y = 2
// camera.position.z = 5
// scene.add(camera)


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

//     const ghost1Angle = elapsedTime * 0.5
//     ghost1.position.x = Math.cos(ghost1Angle) * 4
//     ghost1.position.z = Math.sin(ghost1Angle) * 4

//     const ghost2Angle = - elapsedTime * 0.32
//     ghost2.position.x = Math.cos(ghost2Angle) * 4
//     ghost2.position.z = Math.sin(ghost2Angle) * 4

//     const ghost3Angle = elapsedTime * 0.18
//     ghost3.position.x = Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32))
//     ghost3.position.z = Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5))

//     const ghost4Angle = elapsedTime * 0.18
//     ghost4.position.x = Math.cos(ghost4Angle) * (4 + Math.sin(elapsedTime * 0.12))
//     ghost4.position.z = Math.sin(ghost4Angle) * (4 + Math.sin(elapsedTime * 0.5))

//     animatedBush.updateParticles()
//     // animatedBush.animatedBushMesh.geometry.attributes.position.needsUpdate = true


//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()