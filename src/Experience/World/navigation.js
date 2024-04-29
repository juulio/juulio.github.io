import Experience from '../Experience.js'

export default class Navigation {
    constructor(contentData) {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.contentData = contentData
        this.projectsList = []
        this.createNavigation()
        this.currentVisibleProject = null
    }

    /**
     * Read the contentData and create domElements for the nav layout
     */
    createNavigation() {
        this.header = this.contentData[0].domElement   
        this.rootElement = document.createElement(this.contentData[0].domElement)
        document.body.prepend(this.rootElement)

        this.contentData[0].domElements.forEach((item, index) => {
            let navItem = document.createElement(item.domElement)
            navItem.classList.add(item.className)
            this.rootElement.appendChild(navItem)

            if(item.domElements){
                item.domElements.forEach((element, index) => {
                    let elementItem = document.createElement(element.domElement)
    
                    if(item.className === 'projects'){
                        this.projectsList.push(element.projectName)
                        let anchorElement = document.createElement('a')
                        anchorElement.innerText = element.projectName
                        anchorElement.href = '#'
                        anchorElement.id = element.projectName
                        elementItem.appendChild(anchorElement)

                        this.createClickEventHandler(anchorElement, element.projectName)
                    }
                    else {
                        elementItem.innerText = element.content
                    }
                    navItem.appendChild(elementItem)
                })
            }
        })
    }

    createClickEventHandler(anchorElement, projectName) {
        console.log(anchorElement)
           anchorElement.addEventListener('click', () => {
                
                if(this.currentVisibleProject) {
                    this.scene.getObjectByName(this.currentVisibleProject).visible = false
                }
                this.scene.getObjectByName(projectName).visible = true
                this.currentVisibleProject = projectName
                
                if(!this.experience.isMobile()) {
                    let activeElements = document.querySelector(".active");
                    if(activeElements !== null){
                        activeElements.classList.remove("active");
                    }
                    anchorElement.classList.add('active')
                }
            })
    }

    /**
    createClickEventHandlers() {
        this.projectsList.forEach((project) => {
            let currentClickedDomElement = document.getElementById(project)

            currentClickedDomElement.addEventListener('click', () => {
                
                if(this.currentVisibleProject) {
                    this.scene.getObjectByName(this.currentVisibleProject).visible = false
                }
                this.scene.getObjectByName(project).visible = true
                this.currentVisibleProject = project
                
                if(!this.experience.isMobile()) {
                    let activeElements = document.querySelector(".active");
                    if(activeElements !==null){
                        activeElements.classList.remove("active");
                    }
                    currentClickedDomElement.classList.add('active')
                }
            })
        })
    }
    */
}