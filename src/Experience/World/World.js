import * as THREE from 'three'
import Experience from '../Experience'
import SceneAnimatedFox from './sceneAnimatedFox/SceneAnimatedFox'
import SceneHauntedHouse from './sceneHauntedHouse/SceneHauntedHouse'
import projectsData from '../projectsList'
import Navigation from './navigation'
import project01 from './project01/Environment'
import project02 from './project02/Environment'
import project03 from './project03/Environment'

export default class World {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.debug = this.experience.debug
        this.camera = this.experience.camera
        this.projectsData = projectsData
        this.projects = []
        this.currentVisibleProject = null

        this.navigation = new Navigation(this.projectsData)
        
        this.project01 = new project01('project01')
        this.projects.push(this.project01.projectId)
        
        this.project02 = new project02('project02')
        this.projects.push(this.project02.projectId)
        
        this.project03 = new project03('project03')
        this.projects.push(this.project03.projectId)
        
        this.projects.forEach((project) => {
            let currentClickedDomElement = document.getElementById(project)
  
            currentClickedDomElement.addEventListener('click', () => {
                
                if(this.currentVisibleProject) {
                    this.scene.getObjectByName(this.currentVisibleProject).visible = false
                }
                this.scene.getObjectByName(project).visible = true
                this.currentVisibleProject = project
                
                if(!this.experience.isMobile()) {
                    console.log('desktop')
                    let activeElements = document.querySelector(".active");
                    if(activeElements !==null){
                        activeElements.classList.remove("active");
                    }
                    currentClickedDomElement.classList.add('active')
                }
            })
        })
        
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