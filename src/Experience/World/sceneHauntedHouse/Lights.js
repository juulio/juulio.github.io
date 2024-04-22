import * as THREE from 'three'
import Experience from '../../Experience'

export default class Lights {
    constructor(){
        this.experience = new Experience()
        this.debug = this.experience.debug

        if(this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('lights')
            this.debugFolder.open()
        }

        this.setAmbientLight()
        this.setDirectionalLight()
    }

    setAmbientLight(){
        this.ambientLight = new THREE.AmbientLight('#b9d5ff', 0.12)
        this.experience.scene.add(this.ambientLight)

        if(this.debug.active){
            this.debugFolder.add(this.ambientLight, 'intensity').min(0).max(1).step(0.001)
        }
    }

    // Moon Light
    setDirectionalLight(){
        this.directionalLight = new THREE.DirectionalLight('#b9d5ff', 0.12)
        this.directionalLight.position.set(4, 5, -2)
        this.directionalLight.castShadow = true
        this.experience.scene.add(this.directionalLight)

        if(this.debug.active){
            this.debugFolder.add(this.directionalLight, 'intensity').min(0).max(1).step(0.001)
            this.debugFolder.add(this.directionalLight.position, 'x').min(-5).max(5).step(0.001)
            this.debugFolder.add(this.directionalLight.position, 'y').min(-5).max(5).step(0.001)
            this.debugFolder.add(this.directionalLight.position, 'z').min(-5).max(5).step(0.001)
        }
    }
}