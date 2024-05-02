import * as THREE from 'three'
import Experience from '../../Experience.js'
import * as CANNON from 'cannon-es'
import CannonUtils from 'cannon-utils'

import Volcano from './Volcano.js'
import { ConvexGeometry } from 'three/addons/geometries/ConvexGeometry.js';

// TODO Este video explica como hacer esferas que rebotan, usando Canon.js
// https://www.youtube.com/watch?v=mTPDaw2piKg&t=0s
//
export default class Environment {
    constructor(projectId) {
        this.projectId = projectId
        this.Experience = new Experience()
        this.resources = this.Experience.resources
        this.scene = this.Experience.scene
        this.camera = this.Experience.camera
        this.renderer = this.Experience.renderer.instance
        this.debug = this.Experience.debug

        this.timestep = 1 / 60
        this.projectGroup = new THREE.Group()
        this.projectGroup.name = projectId
        //this.projectGroup.backgroundColor = new THREE.Color(0xF5D0A7)
        this.projectGroup.backgroundColor = new THREE.Color(0xF7e5bc)
        //faded4    F7e5bc

        //this.gravity = new CANNON.Vec3(5, 1, 9)
        this.gravity = new CANNON.Vec3(0, -1.82, 0)
        //this.gravity = new CANNON.Vec3(0, -9.82, 0)

        this.camera.instance.position.set(-1.2, 1.2, 5.3)

        this.setLights()
        this.scene.fog = new THREE.Fog('#6F6249', 0.2, 19)
        this.axesHelper = new THREE.AxesHelper( 5 );
        this.scene.add( this.axesHelper );
        this.volcanoPosition = new THREE.Vector3(0.5, 0, 1.7)

        this.resources.on('ready', () => {
            this.volcano = new Volcano(this.volcanoPosition)
            this.projectGroup.add(this.volcano.volcano)
            this.setPhysicsWorld()
            this.set3DObjects()
            this.setVolcanoBody()
        })

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

    }

    setLights() {
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 2)
        this.directionalLight.position.set(0, 5, 0)
        this.directionalLight.castShadow = true
        this.directionalLight.shadow.mapSize.width = 1024
        this.directionalLight.shadow.mapSize.height = 1024
        this.directionalLight.shadow.camera.near = 1
        this.directionalLight.shadow.camera.far = 6
        this.directionalLight.shadow.camera.right = 5
        this.directionalLight.shadow.camera.left = -5
        this.directionalLight.shadow.camera.top = 0
        this.directionalLight.shadow.camera.bottom = -5
        this.directionalLight.shadow.radius = 5
        this.projectGroup.add(this.directionalLight)

        //this.directionalLightCameraHelper = new THREE.CameraHelper(this.directionalLight.shadow.camera)
        //this.scene.add(this.directionalLightCameraHelper)
    }

    setPhysicsWorld() {
        this.world = new CANNON.World({
            gravity: this.gravity
        })

        // plane body
        this.planePhysicsMaterial = new CANNON.Material('groundMaterial')
        this.planeBody = new CANNON.Body({
            type: CANNON.Body.STATIC,
            shape: new CANNON.Plane(),
            material: this.planePhysicsMaterial,
            position: new CANNON.Vec3(0, 0, 4)
        })
        this.planeBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0)
        this.world.addBody(this.planeBody)

        // sphere body
        this.spherePhysicsMaterial = new CANNON.Material('sphereMaterial')
        this.sphereBody = new CANNON.Body({
            mass: 0.014,
            shape: new CANNON.Sphere(0.014),
            //position: new CANNON.Vec3(0, 1.8, 0),
            position: new CANNON.Vec3(0.5, 0.6, 1.7),
            material: this.spherePhysicsMaterial
        })

        // this.sphereVelocity = new THREE.Vector3(-0.3, 3.5, 0.2); // Original velocity
        this.sphereVelocity = new THREE.Vector3(0, 0.5, 0);
        //this.sphereVelocity.applyQuaternion(camera.quaternion);
        //this.sphereVelocity.multiplyScalar(5);
        this.sphereBody.velocity.set(this.sphereVelocity.x, this.sphereVelocity.y, this.sphereVelocity.z);
        this.world.addBody(this.sphereBody)

        this.planeSphereContactMaterial = new CANNON.ContactMaterial(
            this.planePhysicsMaterial,
            this.spherePhysicsMaterial,
            {
                friction: 0.1,
                restitution: 0.4
            }
        )
        this.world.addContactMaterial(this.planeSphereContactMaterial)
    }

    CreateTrimesh(geometry) {
        let vertices
        if (geometry.index === null) {
          vertices = (geometry.attributes.position).array
        } else {
          vertices = (geometry.clone().toNonIndexed().attributes.position).array
        }
        const indices = Object.keys(vertices).map(Number)
        return new CANNON.Trimesh(vertices , indices)
    }
    
    setVolcanoBody(volcanoGeometry) {
        // step 1. Create ConvexHull
        this.volcanoMesh = this.volcano.volcano.children[0]
        this.volcanoGeometry = this.volcanoMesh.geometry
        this.position = this.volcanoGeometry.attributes.position.array
        this.points = []

        for (let i = 0; i < this.position.length; i += 3) {
            this.points.push(
                new THREE.Vector3(this.position[i], this.position[i + 1], this.position[i + 2])
            )
        }

        this.convexGeometry = new ConvexGeometry(this.points)
        this.convexHull = new THREE.Mesh(
            this.convexGeometry,
            new THREE.MeshBasicMaterial({
                color: 0xff0000,
                wireframe: true,
            })
        )
        this.convexHull.scale.set(0.06, 0.26, 0.1)
        this.convexHull.position.set(0.5, 0, 1.7)
        this.scene.add(this.convexHull)
        //this.convexHull.position.set(this.volcanoPosition.x, this.volcanoPosition.y, this.volcanoPosition.z)
        
        // step 2. Create a Physics World Body (volcano shaped)
        this.shape = this.CreateTrimesh(this.convexHull.geometry)
        this.volcanoBodyPhysicsMaterial = new CANNON.Material('volcanoBodyPhysicsMaterial')

        this.volcanoBody = new CANNON.Body({
            mass: 1,
            shape: this.shape,
//            position: new CANNON.Vec3(this.volcanoPosition.x, this.volcanoPosition.y, this.volcanoPosition.z),

            //position: new CANNON.Vec3(0.5, 0, 1.7),
            position: new CANNON.Vec3(0.5, 0, 1.7),
            //quaternion: new CANNON.vec(0, 0, 0, 1),
            allowSleep: true,
            material: this.volcanoBodyPhysicsMaterial
        
        })

        this.volcanoBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), Math.PI / 2)

        this.world.addBody(this.volcanoBody)
        console.log( this.volcanoBody)


        this.volcanoSphereContactMaterial = new CANNON.ContactMaterial(
            this.volcanoBodyPhysicsMaterial,
            this.spherePhysicsMaterial,
            {
                friction: 0.1,
                restitution: 0.1
            }
        )
        this.world.addContactMaterial(this.volcanoSphereContactMaterial)
    }

    set3DObjects() {
        this.volcanoTexture = this.resources.items.volcanicTexture
        this.volcanoTexture.wrapT = THREE.RepeatWrapping;
        this.volcanoTexture.wrapS = THREE.RepeatWrapping;
        this.volcanoTexture.repeat.set( 3, 3 );
        this.volcanoTexture.needsUpdate = true;

        // ground plane mesh
        this.planeGeometry = new THREE.PlaneGeometry(10, 8)
        this.volcanoTexture = this.resources.items.volcanicTexture
        this.volcanoTexture.wrapT = THREE.RepeatWrapping;
        this.volcanoTexture.wrapS = THREE.RepeatWrapping;
        this.volcanoTexture.repeat.set( 3, 3 );
        this.planeMaterial = new THREE.MeshStandardMaterial({ 
            side: THREE.DoubleSide,
            map: this.volcanoTexture,
        })
        this.planeMesh = new THREE.Mesh(this.planeGeometry, this.planeMaterial)
        this.planeMesh.rotation.x = Math.PI * 0.5
        this.planeMesh.receiveShadow = true
        this.projectGroup.add(this.planeMesh)

        this.sphereGeometry = new THREE.SphereGeometry(0.014, 32, 32)
        this.sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        this.sphereMesh = new THREE.Mesh(this.sphereGeometry, this.sphereMaterial)
        this.sphereMesh.castShadow = true
        this.projectGroup.add(this.sphereMesh)

        this.scene.add(this.projectGroup)
        this.projectGroup.visible = true
    }

    update() {
        if(this.world) {
            this.world.step(this.timestep)
            this.planeMesh.position.copy(this.planeBody.position)
            this.planeMesh.quaternion.copy(this.planeBody.quaternion)
            
            this.sphereMesh.position.copy(this.sphereBody.position)
            this.sphereMesh.quaternion.copy(this.sphereBody.quaternion)
        }
    }
}