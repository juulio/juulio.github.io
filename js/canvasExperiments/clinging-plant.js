/********************************************************
 Initial code to create and set up the Canvas Element. */
var canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");

document.body.appendChild(canvas);
document.body.style.margin = 0;

canvas.width = 500;
canvas.height = 500;
canvas.style.border = 'solid 1px #000';
canvas.style.display = 'block';
canvas.style.margin = '0 auto';

context.fillStyle = '#000';
context.lineWidth = 1;

/***************************************************
 Recursive function that draws The Clinging Plant */
function recursiveDrawClingingPlant(x, y, plantColumns, plantRows, spaceBetweenRows, spaceBetweenColumns, firstIteration){
    var dotHorizontalPos = 0,
        dotVerticalPos = spaceBetweenRows,
        leftMostPoint = x-(((plantColumns-1)*spaceBetweenColumns)/2);

    if(firstIteration) {
        // Draw the initial dot, starting point
        canvasElements.drawDot(x, y, 3, 2, context);

        var lineLeftPoint = leftMostPoint;

        // Draw the diagonal lines that connect the starting point with the clinging plant
        for(var k=0; k<plantColumns; k++){
            canvasElements.drawLine(x, y, lineLeftPoint, y+spaceBetweenRows, context, 'rgb(107, 114, 66)', 1)
            lineLeftPoint += spaceBetweenColumns;
        }
    }

    dotHorizontalPos = leftMostPoint;
    y+=spaceBetweenRows;

    for(var j=0; j<plantColumns; j++){
        canvasElements.drawLeaf(dotHorizontalPos, y, canvasElements.getRandomInt(50, 130), 3, 0.6, context);
        dotHorizontalPos += spaceBetweenColumns;
    }

    spaceBetweenColumns+=0.7;
    plantRows--;

    if(plantRows>0) {
        recursiveDrawClingingPlant(x, y, plantColumns, plantRows, spaceBetweenRows, spaceBetweenColumns, false);
    }
}

recursiveDrawClingingPlant(canvas.width/2, 20, 12, 18, 22, 10, true);
