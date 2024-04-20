import Experience from "../Experience"
import * as THREE from 'three'

export default class Fog {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.fog = new THREE.Fog('#262837', 1, 15)
        this.scene.fog = this.fog
        // Setup
        this.debug = this.experience.debug

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('fog')
            this.debugFolder.add(this.fog, 'near').min(0).max(10).step(0.1)
        }
    }
}