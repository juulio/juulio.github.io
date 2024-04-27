import * as THREE from 'three'
import Experience from '../../Experience.js'

export default class Environment {
    constructor()
    {
        this.projectName = 'project01'
        this.Experience = new Experience()
        this.scene = this.Experience.scene
        this.debug = this.Experience.debug
   
        this.cubeGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.4)
        this.cubeMaterial = new THREE.MeshBasicMaterial({
            transparent: true,
            color: 0xff0000
        })
        
        this.projectGroup = new THREE.Group()
        this.cube01 = new THREE.Mesh(
            this.cubeGeometry,
            new THREE.MeshBasicMaterial({ color: 0xff0000 })
        )
        this.projectGroup.add(this.cube01)

        this.cube02 = new THREE.Mesh(
            this.cubeGeometry,
            new THREE.MeshBasicMaterial({ color: 0xff0000 })
        )
        this.projectGroup.add(this.cube02)

        this.scene.add(this.projectGroup)
        this.projectGroup.visible = false

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
}