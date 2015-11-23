/* Tree with Animated Leaves - juulio.github.io
* Julio Del Valle - Costa Rica */

// Create the Canvas Element
var canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");

document.body.appendChild(canvas);

// Apply Basic styles to the Canvas Element
document.body.style.margin = 0;

canvas.width = 450;
canvas.height = 300;
canvas.style.border = 'solid 1px red';
canvas.style.display = 'block';
canvas.style.margin = '0 auto';


/**********************
 Create Leaves array */
var leaves = [];

// var Leaf = (function() {
//
//     var _posX,
//         _posY,
//         _variaton = canvasElements.getRandomInt(-5,5);
//
//     function Leaf (posX, posY) {
//         _posX = posX;
//         _posY = posY;
//     }
//
//     Leaf.prototype.run = function() {
//         posX += this.variation;
//         canvasElements.drawDot(this.posX, this.posY, 5, 2);
//     }
//
//     return Leaf;
// })();

var Leaf = {
    posX : 0,
    posY : 0,

    run : function(){
        this.update();
        this.draw();
    },
    update : function(){
        this.posX += canvasElements.getRandomInt(-5,5);
        this.posY += canvasElements.getRandomInt(-5,5);
    },
    draw : function(){
        canvasElements.drawDot(this.posX, this.posY, 5, 2, 2, context);
    }
};

var growTree = function(x1, y1, angle, treeDepth, lineLength){
    var x2 = x1 + (canvasElements.cos(angle) * treeDepth * lineLength),
        y2 = y1 + (canvasElements.sin(angle) * treeDepth * lineLength);

        context.strokeStyle = 'rgb(' + canvasElements.getRandomInt(0,255) +',' + canvasElements.getRandomInt(0,255) +'    ,34)';

    if(treeDepth > 0) {
        treeDepth--;

        canvasElements.drawLine(x1, y1, x2, y2, context);

        growTree(x2, y2, angle - canvasElements.getRandomInt(20,26), treeDepth, lineLength);
        growTree(x2, y2, angle + canvasElements.getRandomInt(30,58), treeDepth, lineLength);
    }
    else {
        console.log('x2: ' + x2 + '     ' + 'y2: ' + y2);
        canvasElements.drawDot(x2,y2, 5, '#000', 2, context);
        // Leaf.posX = x2;
        // Leaf.posY = y2;
        // leaves.push(Leaf);
    }
};

var animateLeaves = function(){
    for(var i =0;i<leaves.length;i++){
        leaves[i].run();
        console.log('posX :' + leaves[i].posX);
        console.log('posY :' + leaves[i].posY);
        console.log('-----------------------');
    }
}
/***********************************************
* Draws all the elements on the screen */
var drawScreen = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    growTree(canvas.width*0.5, canvas.height, -90, 1, 20);
    // animateLeaves();
};

drawScreen();




/*******************************************
 Fractal Binary Tree with Animated Leaves */
// var treeWithAnimatedLeaves = {
//
//     /**************************************
//     * Function that grows a Fractal Tree */
//     growTree : function(x1, y1, angle, treeDepth, lineLength){
//         var x2 = x1 + (canvasElements.cos(angle) * treeDepth * lineLength),
//             y2 = y1 + (canvasElements.sin(angle) * treeDepth * lineLength);
//
//         if(treeDepth !=0) {
//             treeDepth--;
//             context.strokeStyle = 'rgb(0,0,0)';
//
//             canvasElements.drawLine(x1, y1, x2, y2, context);
//
//             this.growTree(x2, y2, angle - canvasElements.getRandomInt(20,26), treeDepth, lineLength);
//             this.growTree(x2, y2, angle + canvasElements.getRandomInt(30,58), treeDepth, lineLength);
//         }
//         else {
//             context.strokeStyle = 'rgb(' + canvasElements.getRandomInt(0,255) +',' + canvasElements.getRandomInt(0,255) +'    ,34)';
//             // drawDot(x2+1, y2, 8, 2);
//             // drawLine(x1, y1, x2, y2, 1);
//
//             var newLeaf = Leaf(x2, y2)
//             newLeaf.run();
//             leaves.push(newLeaf);
//         }
//     },
//
//     /***********************************************
//     * Draws all the elements on the screen */
//     drawScreen : function(){
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         this.growTree(canvas.width*0.5, canvas.height, -90, 2, 20);
//     }
//
//     /*****************************************
// 	 * Init all Functions */
//     //  drawScreen();
// };
//
// treeWithAnimatedLeaves.drawScreen();
