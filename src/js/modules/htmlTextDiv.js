export default class htmlTextDiv {
    constructor(h1text, h2text, className) {
        this.divElement = document.createElement('div');
        this.divElement.className = className;

        this.h1element = document.createElement('h1');
        this.h1element.innerHTML = h1text;

        this.h2element = document.createElement('h2');
        this.h2element.innerHTML = h2text;

        this.divElement.appendChild(this.h1element);
        this.divElement.appendChild(this.h2element);
        
        return this.divElement;
    }
}