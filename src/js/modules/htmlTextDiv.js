export default class htmlTextDiv {
    constructor(h1text, className) {
        this.divElement = document.createElement('div');
        this.divElement.className = className;

        this.h1element = document.createElement('h1');
        this.h1element.innerHTML = h1text;

        this.divElement.appendChild(this.h1element);
        
        return this.divElement;
    }
}