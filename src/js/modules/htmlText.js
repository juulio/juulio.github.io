export default class htmlText {
    constructor(jsonData) {
      this.jsonData = jsonData;
    }
  
    generateMainTitle() {
      const divElement = document.createElement("div");
      const h1Element = document.createElement("h1");
      const h2Element = document.createElement("h2");

      divElement.className = "mainTitle";
      h1Element.textContent = this.jsonData.title;
      h2Element.textContent = this.jsonData.subtitle;

      divElement.appendChild(h1Element);
      divElement.appendChild(h2Element);
      return divElement;
    }

    generateNavigation() {
      const ulElement = document.createElement("div");
      ulElement.className = "projectList";

      this.jsonData.projectList.forEach(category => {
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