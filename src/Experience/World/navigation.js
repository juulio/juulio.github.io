export default class Navigation {
    constructor(projectsList) {
        this.projectsListData = projectsList
        this.projectsList = []
        this.createNavigation()
        this.createClickEventHandlers()
    }

    /**
     * Read the projectsListData and create domElements for the nav layout
     */
    createNavigation() {
        this.header = this.projectsListData[0].domElement   
        this.rootElement = document.createElement(this.projectsListData[0].domElement)
        document.body.prepend(this.rootElement)

        this.projectsListData[0].domElements.forEach((project, index) => {
            let projectItem = document.createElement(project.domElement)
            projectItem.classList.add(project.className)
            this.rootElement.appendChild(projectItem)

            project.domElements.forEach((element, index) => {
                let elementItem = document.createElement(element.domElement)
                if(project.className === 'projectList'){
                    this.projectsList.push(element.content)
                    let anchorElement = document.createElement('a')
                    anchorElement.innerText = element.content
                    anchorElement.href = '#'
                    anchorElement.id = element.content
                    elementItem.appendChild(anchorElement)
                }
                else {
                    elementItem.innerText = element.content
                }
                projectItem.appendChild(elementItem)
            })
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