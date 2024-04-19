import * as THREE from 'three'
import Experience from '../Experience'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Fox from './Fox.js'
import { exp } from 'three/examples/jsm/nodes/Nodes.js'

export default class World {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('scenes')
            const debugObject = {
                showScene01: () => { console.log('show scene 01') },
                showScene02: () => { console.log('show scene 02') },
            }
            this.debugFolder.add(debugObject, 'showScene01')
            this.debugFolder.add(debugObject, 'showScene02')
        }
        
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