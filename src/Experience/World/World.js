import * as THREE from 'three'
import Experience from '../Experience'
import SceneAnimatedFox from './sceneAnimatedFox/SceneAnimatedFox'
import SceneHauntedHouse from './sceneHauntedHouse/SceneHauntedHouse'
import projectsData from '../projectsList'
import Navigation from './navigation'
import project01 from './project01/environment'
import project02 from './project02/environment'
import project03 from './project03/environment'

export default class World {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.debug = this.experience.debug
        this.camera = this.experience.camera
        this.projectsData = projectsData
        this.projects = []

        this.navigation = new Navigation(this.projectsData)
        
        this.project01 = new project01()
        this.projects.push(this.project01.projectID)

        this.project02 = new project02()
        this.projects.push(this.project02.projectID)
        
        this.project03 = new project03()
        this.projects.push(this.project03.projectID)
        /////////////////////////////////////////////
        this.light = new THREE.AmbientLight(0xffffff, 1)
        // this.scene.add(this.light)
    
        
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

        // this.cube01.rotation.y += 0.01
        // this.cube02.rotation.y += 0.01
        // this.cube03.rotation.y += 0.01

    }


}