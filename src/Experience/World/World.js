import * as THREE from 'three'
import Experience from '../Experience'
import SceneAnimatedFox from './sceneAnimatedFox/SceneAnimatedFox'
import SceneHauntedHouse from './sceneHauntedHouse/SceneHauntedHouse'

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
        
        this.scenes = {
            animatedFox: new SceneAnimatedFox(),
            hauntedHouse: new SceneHauntedHouse()
        }
    }

    update() {
        if(this.scenes.animatedFox) {
            this.scenes.animatedFox.update()
        }
        if(this.scenes.hauntedHouse) {
            this.scenes.hauntedHouse.update()
        }
    }
}