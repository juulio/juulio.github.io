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
            this.initBushes()
            this.initGraves()
            this.initAnimatedBushes()
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

    initBushes(){

    }

    initGraves(){
    
    }

    initAnimatedBushes(){
    
    }
    
    update() {
        //console.log('SceneHauntedHouse update')
    }
}




// /**
//  * House
//  */
// const house = new THREE.Group();
// scene.add(house)

// // Walls
// const walls = new THREE.Mesh(
//     new THREE.BoxGeometry(4, 2.5, 4),
//     new THREE.MeshStandardMaterial({
//         map: bricksColorTexture,
//         aoMap: bricksAmbientOcclusionTexture,
//         normalMap: bricksNormalTexture,
//         roughnessMap: bricksRoughnessTexture
//      })
// )
// walls.position.y = 2.5 / 2
// house.add(walls)


// // Roof
// const roof = new THREE.Mesh(
//     new THREE.ConeGeometry(3.5, 1, 4),
//     new THREE.MeshStandardMaterial({ color: '#b35f45' })
// )
// roof.position.y = 3
// roof.rotation.y = Math.PI / 4
// house.add(roof)

// // Door
// const door = new THREE.Mesh(
//     new THREE.PlaneGeometry(2.2, 2.2),
//     new THREE.MeshStandardMaterial({
//         map: doorColorTexture,
//         transparent: true,
//         alphaMap: doorAlphaTexture,
//         aoMap: doorAmbientOcclusionTexture,
//         displacementMap: doorHeightTexture,
//         displacementScale: 0.1,
//         normalMap: doorNormalTexture,
//         metalnessMap: doorMetalnessTexture,
//         roughnessMap: doorRoughnessTexture
//     })
// )
// door.position.z = 2 + 0.01
// door.position.y = 1
// house.add(door)


// // Bushes
// const bushGeometry = new THREE.SphereGeometry(1, 16, 16)
// const bushMateirl = new THREE.MeshStandardMaterial({ color: '#89c854' })

// const bush1 = new THREE.Mesh(bushGeometry, bushMateirl)
// bush1.scale.set(0.5, 0.5, 0.5)
// bush1.position.set(0.8, 0.2, 2.2)

// const bush2 = new THREE.Mesh(bushGeometry, bushMateirl)
// bush2.scale.set(0.25, 0.25, 0.25)
// bush2.position.set(1.4, 0.1, 2.1)

// const bush3 = new THREE.Mesh(bushGeometry, bushMateirl)
// bush3.scale.set(0.4, 0.4, 0.4)
// bush3.position.set(- 0.8, 0.1, 2.2)

// const bush4 = new THREE.Mesh(bushGeometry, bushMateirl)
// bush4.scale.set(0.15, 0.15, 0.15)
// bush4.position.set(- 1, 0.05, 2.6)

// house.add(bush1, bush2, bush3, bush4)

// /**
//  * Animated Bushes
//  */
// const particlesCount = 100
// const particlesRadius = 0.2
// const animatedBush = new AnimatedBush(particleTexture, particlesCount, particlesRadius);
// // animatedBush.animatedBushMesh.position.set(0, 1, 3)
// scene.add(animatedBush.animatedBushMesh);

// // Graves
// const graves = new THREE.Group()
// scene.add(graves)

// const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2)
// const graveMaterial = new THREE.MeshStandardMaterial({ color: '#b2b6b1'})

// for(let i=0; i<60; i++){
//     const angle = Math.random() * Math.PI * 2
//     const radius = 3 + Math.random() * 6
//     const x = Math.sin(angle) * radius
//     const z = Math.cos(angle) * radius

//     const grave = new THREE.Mesh(graveGeometry, graveMaterial)
//     grave.position.set(x, 0.3, z)
//     grave.rotation.y = (Math.random() - 0.5) * 0.4
//     grave.rotation.z = (Math.random() - 0.5) * 0.4
//     grave.castShadow = true
//     graves.add(grave)
// }

// // Floor
// const floor = new THREE.Mesh(
//     new THREE.PlaneGeometry(20, 20),
//     new THREE.MeshStandardMaterial({ 
//         map: grassColorTexture,
//         aoMap: grassAmbientOcclusionTexture,
//         normalMap: grassNormalTexture,
//         roughnessMap: grassRoughnessTexture
//     })
// )
// floor.rotation.x = - Math.PI * 0.5
// floor.position.y = 0
// scene.add(floor)

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

// // Door light
// const doorLight = new THREE.PointLight('#ff7d46', 3, 6)
// doorLight.position.set(0, 2.2, 2.7)
// house.add(doorLight)

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

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
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

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

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