/*************************************
 * Julio Del Valle - Costa Rica - 2015
 * HTML 5 Canvas TETRIS - User Interface
 */

// Main Canvas App Wrapper Function
function canvasUI(){

    // Create the Canvas Element
    var theCanvas = document.createElement("canvas");
    theCanvas.width = 400;
    theCanvas.height = 800;
    document.body.appendChild(theCanvas);
    document.body.style.margin = 0;

    // Apply basic styles to the Canvas Element
    theCanvas.style.border = 'solid 1px red';
    theCanvas.style.display = 'block';

    var context = theCanvas.getContext("2d");

    // Game Variables
    var blocks = [];

    /***
    * Draws a line from (x1,y1) to (x2,y2)
    */
    function drawLine(x1,y1,x2,y2) {
        context.beginPath();
        context.moveTo(x1,y1);
        context.lineTo(x2,y2);
        context.stroke();
    }

    /***
    * Draws a square starting at (x,y) using lengh as width and height
    */
    function drawSquare(x,y,length) {
        drawLine(x,y,x+length,y);
        drawLine(x,y,x,y+length);
        drawLine(x,y+length,x+length,y+length);
        drawLine(x+length,y,x+length,y+length);
    }

    /***
    * Draws the background grid (10 x 20 blocks)
    */
    function drawGrid(){
        context.strokeStyle = "#707070";

        // Vertical Lines
        drawLine(40,0,40,800);
        drawLine(80,0,80,800);
        drawLine(120,0,120,800);
        drawLine(160,0,160,800);
        drawLine(200,0,200,800);
        drawLine(240,0,240,800);
        drawLine(280,0,280,800);
        drawLine(320,0,320,800);
        drawLine(360,0,360,800);

        // Horizontal Lines
        drawLine(0,40,400,40);
        drawLine(0,80,400,80);
        drawLine(0,120,400,120);
        drawLine(0,160,400,160);
        drawLine(0,200,400,200);
        drawLine(0,240,400,240);
        drawLine(0,280,400,280);
        drawLine(0,320,400,320);
        drawLine(0,360,400,360);
        drawLine(0,400,400,400);
        drawLine(0,440,400,440);
        drawLine(0,480,400,480);
        drawLine(0,520,400,520);
        drawLine(0,560,400,560);
        drawLine(0,600,400,600);
        drawLine(0,640,400,640);
        drawLine(0,680,400,680);
        drawLine(0,720,400,720);
        drawLine(0,760,400,760);
        drawLine(0,800,400,800);
    }

    /***
    * Defines the blocks that will be used
    */
    function defineBlocks(){
        blocks.push ({
            id : 'block01',
            length : 40,
            color : 'red',
            onRow : 0,
            onColumn : 0
        });

    }

    /***
    * Draws an specific block from the block array
    */
    function drawBlock(blockIndex){
        var currentBlock = blocks[blockIndex];
        context.strokeStyle = currentBlock.color;
        drawSquare(0,0,currentBlock.length);
    }

    function drawScreen() {
        drawGrid();
        defineBlocks();
        if(blocks[0].onRow<21){
            blocks[0].onRow++;
        }
        drawBlock(0);
    }


    window.requestAnimFrame = (function(){
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    // Code originally developed by Paul Irish)
    (function animloop(){
        requestAnimFrame(animloop);
        drawScreen();
    })();
}

window.onload = canvasUI;
