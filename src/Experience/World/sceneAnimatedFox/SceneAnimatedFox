import * as THREE from 'three'
import Experience from '../../Experience'
import Floor from './Floor'
import Fox from './Fox'
import Environment from './Environment'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default class SceneAnimatedFox {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        
        // Wait for resources
        this.resources.on('ready', () => {
            // Setup
            this.floor = new Floor()
            this.fox = new Fox()
            this.environment = new Environment()
        })
    }

    update() {
        if(this.fox) {
            this.fox.update()
        }
        if(this.floor) {
            this.floor.update()
        }
    }
}