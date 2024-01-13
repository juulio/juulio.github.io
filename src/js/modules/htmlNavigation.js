export default class htmlNavigation {
    constructor(jsonData) {
      this.jsonData = jsonData;
    }
  
    generateList() {
      const ulElement = document.createElement("div");
      ulElement.className = "projectList";

      this.jsonData.forEach(category => {
        const liCategory = document.createElement("li");
        liCategory.textContent = category.name;
  
        const ulProjects = document.createElement("ul");
        ulProjects.classList = "submenu";
        category.projects.forEach(project => {
          const liProject = document.createElement("li");
          const aElement = document.createElement("a");
          aElement.textContent = project.name;
          aElement.href = project.url;
          liProject.appendChild(aElement);
          ulProjects.appendChild(liProject);
        });
  
        liCategory.appendChild(ulProjects);
        ulElement.appendChild(liCategory);
      });
  
      return ulElement;
    }
  }