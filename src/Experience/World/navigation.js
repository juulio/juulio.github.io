export default class Navigation {
    constructor(projectsList) {
        this.projectsListData = projectsList
        this.createNavigation()
    }

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

}


/**
 *     loadNavigationItems(){
        // Load project names
        for(const project of this.projectsList)
        {
            if(project.type === 'project')
            {
                console.log(project.name)
            }
        }
        this.item01 = document.getElementById('project01')
        this.item02 = document.getElementById('project02')
        this.item03 = document.getElementById('project03')

        this.item01.addEventListener('click', () => {
            this.hideCubes()
            this.cube01.visible = true
        })

        this.item02.addEventListener('click', () => {
            this.hideCubes()
            this.cube02.visible = true
        })

        this.item03.addEventListener('click', () => {
            this.hideCubes()
            this.cube03.visible = true
        })
    }
 */