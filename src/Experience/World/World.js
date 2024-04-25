import * as THREE from 'three'
import Experience from '../Experience'
import SceneAnimatedFox from './sceneAnimatedFox/SceneAnimatedFox'
import SceneHauntedHouse from './sceneHauntedHouse/SceneHauntedHouse'

export default class World {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.debug = this.experience.debug
        this.camera = this.experience.camera

        this.light = new THREE.AmbientLight(0xffffff, 1)
        
        this.cubeGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.4)
        this.cubeMaterial = new THREE.MeshBasicMaterial({
            transparent: true,
            color: 0xff0000
        })
        
        this.cube01 = new THREE.Mesh(
            this.cubeGeometry,
            new THREE.MeshBasicMaterial({ color: 0xff0000 })
        )
        
        this.cubeMaterial.color.set(0x00ff00)
        this.cube02 = new THREE.Mesh(
            this.cubeGeometry,
            new THREE.MeshBasicMaterial({ color: 0x0ff000 })
        )

        this.cubeMaterial.color.set(0x0000ff)
        this.cube03 = new THREE.Mesh(
            this.cubeGeometry,
            new THREE.MeshBasicMaterial({ color: 0xf000f })
        )
        
        
        this.cube01.position.set(0, 0, 0)
        this.cube02.position.set(0.7, 0, 0)
        this.cube03.position.set(-0.7, 0, 0)
        
        this.scene.add(this.light)
        this.scene.add(this.cube01)
        this.scene.add(this.cube02)
        this.scene.add(this.cube03)
        

        // Debug
        if(this.debug.active)
        {
            // this.debugFolder = this.debug.ui.addFolder('scenes')
            // const debugObject = {
            //     showScene01: () => {
            //         // this.experience.destroy()
            //         new SceneAnimatedFox()
            //     },
            //     showScene02: () => {
            //         // this.experience.destroy()
            //         new SceneHauntedHouse()
            //         // console.log('show scene 02')
            //     },
            // }
            // this.debugFolder.add(debugObject, 'showScene01')
            // this.debugFolder.add(debugObject, 'showScene02')
        }
        
        this.scenes = {
            // animatedFox: new SceneAnimatedFox(),
            // hauntedHouse: new SceneHauntedHouse()
        }

        this.item01 = document.getElementById('project01')
        this.item02 = document.getElementById('project02')
        this.item03 = document.getElementById('project03')

        this.item01.addEventListener('click', () => {
            this.hideCubes()
            this.cube01.visible = true
        })

        this.item02.addEventListener('click', () => {
            this.hideCubes()
            this.cube02.visible = true
        })

        this.item03.addEventListener('click', () => {
            this.hideCubes()
            this.cube03.visible = true
        })
    }


    hideCubes() {
        this.cube01.visible = false
        this.cube02.visible = false
        this.cube03.visible = false
    }

    update() {
        if(this.scenes.animatedFox) {
            this.scenes.animatedFox.update()
        }
        if(this.scenes.hauntedHouse) {
            this.scenes.hauntedHouse.update()
        }

        this.cube01.rotation.y += 0.01
        this.cube02.rotation.y += 0.01
        this.cube03.rotation.y += 0.01

    }
}