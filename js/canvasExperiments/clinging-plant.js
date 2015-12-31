/************************************************
 Create and set the Canvas Element up. */
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

// "Height" or space between Columns will be determined by the Leaves' height
spaceBetweenRows = 25;

/*************************
 Draw The Clingng Plant */
function drawClingingPlant(x, y, plantColumns, plantRows, spaceBetweenColumns){
    var dotHorizontalPos = 0,
        dotVerticalPos = spaceBetweenRows,
        leftMostPoint = x-(((plantColumns-1)*spaceBetweenColumns)/2);
    
    canvasElements.drawDot(x, y, 3, 2, context);
    
    context.save();
    context.translate(leftMostPoint,y);

    for(var i=0; i<plantRows; i++){

        context.save();
        context.translate(0, dotVerticalPos);

        dotHorizontalPos = 0;

        for(var j=0; j<plantColumns; j++){
            if(i<plantRows-1){
                canvasElements.drawLine(dotHorizontalPos, 0, dotHorizontalPos, spaceBetweenRows, context, '#000', 1);
            }

            canvasElements.drawDot(dotHorizontalPos, 0, 3, 2, context);
            dotHorizontalPos += spaceBetweenColumns;
        }

        dotVerticalPos += spaceBetweenRows;
        context.restore();
    }

    context.restore();

    var lineLeftPoint = leftMostPoint;

    for(var k=0; k<plantColumns; k++){
        canvasElements.drawLine(x, y, lineLeftPoint, y+spaceBetweenRows, context, '#000', 1)
        lineLeftPoint += spaceBetweenColumns;
    }
}

drawClingingPlant(canvas.width/2, 20, 5, 9, 30);