/*************************************
 * Julio Del Valle - Costa Rica - 2015
 * HTML 5 Canvas Code template
 */


// Main Canvas App Wrapper Function
function canvasApp(){

    // Create the Canvas Element
    var theCanvas = document.createElement("canvas");
    document.body.appendChild(theCanvas);
    document.body.style.margin = 0;

    // Apply basic styles to the Canvas Element
    theCanvas.style.width = '600px';
    theCanvas.style.height = '400px';
    theCanvas.style.border = 'solid 1px red';
    theCanvas.style.display = 'block';
    theCanvas.style.margin = '0 auto';

    var context = theCanvas.getContext("2d");

    function drawScreen() {

    }

    drawScreen();
}