import * as THREE from 'three'
import Experience from '../../Experience.js'
import * as CANNON from 'cannon-es'

// TODO Este video explica como hacer esferas que rebotan, usando Canon.js
// https://www.youtube.com/watch?v=mTPDaw2piKg&t=0s
//
export default class Environment {
    constructor(projectId) {
        this.projectId = projectId
        this.Experience = new Experience()
        this.scene = this.Experience.scene
        this.camera = this.Experience.camera
        this.debug = this.Experience.debug
        this.timestep = 1 / 60
        this.projectGroup = new THREE.Group()
        this.projectGroup.name = projectId
        this.gravity = new CANNON.Vec3(5, 1, 0)
        this.gravityIsGoingUp = true
        this.camera.instance.position.set(0, 3, 5)
        this.setLights()
        this.setPhysicsWorld()
        this.set3DObjects()



        if(this.Experience.isMobile()) {
            this.cubeGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.3)
        }
        else {
            this.cubeGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.4)
        }
 
        // // Debug
        // if(this.debug.active)
        // {
        //     this.debugFolder = this.debug.ui.addFolder('environment')
        // }

        // Setup
        // this.setLights()

    }

    setLights() {
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.9)
        this.directionalLight.position.set(0, 15, 0)
        this.directionalLight.castShadow = true
        this.directionalLight.shadow.mapSize.width = 1024
        this.directionalLight.shadow.mapSize.height = 1024
        this.scene.add(this.directionalLight)
    }

    setPhysicsWorld() {
        this.world = new CANNON.World({
            gravity: this.gravity
        })

        this.planePhysicsMaterial = new CANNON.Material('groundMaterial')
        this.planeBody = new CANNON.Body({
            type: CANNON.Body.STATIC,
            shape: new CANNON.Plane(),
            material: this.planePhysicsMaterial
        })
        this.planeBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0)
        this.world.addBody(this.planeBody)

        this.spherePhysicsMaterial = new CANNON.Material('sphereMaterial')
        this.sphereBody = new CANNON.Body({
            mass: 0.02,
            shape: new CANNON.Sphere(0.1),
            //position: new CANNON.Vec3(0, 1.8, 0),
            position: new CANNON.Vec3(0, 0.5, 0),
            material: this.spherePhysicsMaterial
        })
        this.world.addBody(this.sphereBody)
        this.planeSphereContactMaterial = new CANNON.ContactMaterial(
            this.planePhysicsMaterial,
            this.spherePhysicsMaterial,
            {
                friction: 0.1,
                restitution: 0.6
            }
        )
        this.world.addContactMaterial(this.planeSphereContactMaterial)
    }

    set3DObjects() {
        // ground plane mesh
        this.planeGeometry = new THREE.PlaneGeometry(3, 3)
        this.planeMaterial = new THREE.MeshStandardMaterial({ 
            side: THREE.DoubleSide,
            color: 0x01f0fc,
        })
        this.planeMesh = new THREE.Mesh(this.planeGeometry, this.planeMaterial)
        this.planeMesh.rotation.x = Math.PI * 0.5
        this.planeMesh.receiveShadow = true
        this.projectGroup.add(this.planeMesh)

        this.sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32)
        this.sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        this.sphereMesh = new THREE.Mesh(this.sphereGeometry, this.sphereMaterial)
        this.sphereMesh.castShadow = true
        this.projectGroup.add(this.sphereMesh)

        this.scene.add(this.projectGroup)
        this.projectGroup.visible = true
    }

    update() {
        this.world.step(this.timestep)
        this.planeMesh.position.copy(this.planeBody.position)
        this.planeMesh.quaternion.copy(this.planeBody.quaternion)

        this.sphereMesh.position.copy(this.sphereBody.position)
        this.sphereMesh.quaternion.copy(this.sphereBody.quaternion)

        if(this.gravityIsGoingUp && this.gravity.y <= 1.3) {
            this.gravity.y += 3
            if(this.gravity.y >= 1.3) {
                this.gravityIsGoingUp = false
                console.log('punto máximo')
            } 
        }
        
        if(!this.gravityIsGoingUp) {
            console.log('gravity is going down')
            this.gravity.y -= 0.1
        }
        
        this.world.gravity.set(0, this.gravity.y, 0)
    }
}