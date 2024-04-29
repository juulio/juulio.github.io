export default class Navigation {
    constructor(contentData) {
        this.contentData = contentData
        this.projectsList = []
        this.createNavigation()
        // this.createClickEventHandlers()
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
                    }
                    else {
                        elementItem.innerText = element.content
                    }
                    navItem.appendChild(elementItem)
                })
            }
        })
    }

    createClickEventHandlers() {
        this.projectsList.forEach((project) => {
            document.getElementById(project).addEventListener('click', () => {
                console.log(project)
                //     this.hideCubes()
                // this.projectGroup.visible = true
            })
        })
    }
}