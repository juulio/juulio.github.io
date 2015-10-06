---
layout: post
title:  "HTML5 Canvas - Black And White Fractal Binary Tree"
date:   2015-10-05 22:32
categories: post
---
<p>After a lot of struggling, I finally found a way to translate my openframeworks code to create a Fractal Binary Tree using Canvas + javascript</p>
<p>My main problem was figuring out a way to use something like ofPushMatrix and ofPopMatrix functions. I used Canvas' context.save( ) and context.restore( ) functions to achieve the same results.</p>
<p>This tree is created using a Recursive function that takes parameters such as branch length, angle, depth and line width.<p>

<p>Here's my javascript code. Please feel free to take it, use it, modify it, improve it and make beautiful trees.</p>

<pre>
<code>
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
</code>
</pre>

<canvas id="canvas" width = "740" height = "480" style="border:1px solid"> No HTML5 Canvas detected!
</canvas>
<script src="/js/canvasExperiments/jsFractalBinaryTree02.js"></script>
