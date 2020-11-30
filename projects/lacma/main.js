'use strict'


const el = document.getElementById("arrowButton");
 
el.addEventListener("click", () => {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
   
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
});