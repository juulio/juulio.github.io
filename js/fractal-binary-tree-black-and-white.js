/**
 * @author Julio Del Valle - Costa Rica
 * juulio.github.io
 */

 function drawLine(x1, y1, x2, y2){
     context.beginPath();

     context.moveTo(x1,y1);
     context.lineTo(x2, y2);

     context.closePath();
     context.stroke();
 }

 // Initial Setup
 var canvas = document.getElementById('canvas'),
     context = canvas.getContext('2d'),
     canvasHalfWidth = canvas.width/2,
     fractalProportion = 0.8;

 // Recursive Fractal Function
 function drawTree(startX, startY, branchLength, angle, depth, lineWidth){
     context.lineWidth = lineWidth;
     context.translate(startX, startY);

     drawLine(0, 0, 0, -branchLength);

     if(depth > 0 ){
         depth--;
         context.translate(0, -branchLength);


         angle += fractalProportion;
         lineWidth *= fractalProportion;
         branchLength *= fractalProportion;

         context.save();

         // Draw Right Branch
         context.rotate(angle * Math.PI / 180);
         //drawLine(x1, y1, x2, y2);
         drawTree(0, 0, branchLength, angle, depth, lineWidth);


         context.restore();
         context.save();

         // Draw Left Branch
         context.rotate(-angle * Math.PI / 180);
         //drawLine(x1, y1, x2, y2);
         drawTree(0, 0, branchLength, angle, depth, lineWidth);
         context.restore();
     }
 }

 drawTree(canvasHalfWidth, canvas.height, 70, 25, 10, 14);
