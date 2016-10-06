/**
 * @author Julio Del Valle - Costa Rica
 * Canvas frequently used functions- juulio.github.io
 * juulio.com - Costa Rica
 */

var JUULIO = JUULIO || {};

JUULIO.canvasElements = JUULIO.canvasElements || (function () {

  'use strict';

  var object = {};

  object.context = '';

 /**
  * Adds the Canvas Element to the DOM
  */
  object.createCanvasElement = function(canvasContainer, canvasWidth, canvasHeight, canvasContext) {
    var canvas = document.createElement("canvas");
    document.getElementById(canvasContainer).appendChild(canvas);
    document.body.style.margin = 0;

    this.context = canvas.getContext(canvasContext);
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.display = 'block';
    canvas.style.margin = '0 auto';

    return canvas;
  };

 /**
  * Draws a dot, centered on x,y coordinates
  */
  object.drawDot = function(x, y, r, lineWidth, canvasContext) {
      canvasContext.beginPath();
      canvasContext.arc(x, y, r, 0, 2*Math.PI, false);
      canvasContext.lineWidth = lineWidth;
      canvasContext.stroke();
  };

 /**
  * Draws a line from (x1,y1) to (x2,y2)
  */
  object.drawLine = function(x1, y1, x2, y2, color, lineWidth) {
    this.context.beginPath();
    this.context.moveTo(x1,y1);
    this.context.lineTo(x2,y2);
    this.context.closePath();
    this.context.lineWidth = lineWidth;
    this.context.strokeStyle = color;
    this.context.stroke();
  };

 /**
  * Draws a triangle
  */
  object.drawTriangle = function(x, y, size, canvasContext) {
    var rotationAngle = this.getRandomInt(0,360);

    canvasContext.beginPath();
    canvasContext.rotate(rotationAngle*Math.PI/180);
    canvasContext.moveTo(x, y);
    canvasContext.lineTo(x, y+size);
    canvasContext.lineTo(x+size, y+size);
    canvasContext.closePath();
    canvasContext.stroke();
    canvasContext.rotate(-rotationAngle*Math.PI/180);
  };

 /**
  * Draws a tree leaf at (x,y) rotated at angle degree
  */
  object.drawLeaf = function(x, y, angle, scale, alpha) {
    this.context.save();
    this.context.translate(x, y);
    this.context.rotate(angle*Math.PI/180);// Convert degreess to radians
    this.context.beginPath();

    this.context.moveTo(0,0);

    this.context.lineTo(scale*0, scale*-1);
    this.context.lineTo(scale*2,scale*-3);
    this.context.lineTo(scale*4, scale*-1);
    this.context.lineTo(scale*6, scale*-3);
    this.context.lineTo(scale*8, scale*-1);
    this.context.lineTo(scale*10, scale*0);

    this.context.lineTo(scale*8, scale*1);
    this.context.lineTo(scale*6, scale*3);
    this.context.lineTo(scale*4, scale*1);
    this.context.lineTo(scale*2, scale*3);
    this.context.lineTo(scale*0, scale*1);
    this.context.lineTo(scale*0, scale*0);

    this.context.closePath();
    this.context.fillStyle = 'rgba(143,154,90,' + alpha + ')';
    this.context.strokeStyle = 'rgb(25, 66, 0)';
    this.context.fill();

    this.context.stroke();
    this.context.restore();
  };

 /**
  * Taken from Mozilla Ddeveloper Network
  * https://developer.mozilla.org/en-US/
  * Returns a random integer between min (inclusive) and max (inclusive)
  */
  object.getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  };

 /**
  * Returns a random number between min (inclusive) and max (exclusive)
  */
  object.getRandomArbitrary = function(min, max) {
      return Math.random() * (max - min) + min;
  };

 /**
  * Taken from the book Javascript Supercharged Graphics.
  * Takes a Degre value and returns Radians.
  */
  object.degToRad = function(deg) {
      return deg * (Math.PI/180);
  };

 /**
  * Taken from the book Javascript Supercharged Graphics.
  * Takes a Radian value and returns Degrees.
  */
  object.radToDeg = function(rad) {
      return rad * (180/Math.PI);
  };

 /**
  * Returns Cos function from a given angle
  */
  object.cos = function(angle) {
      return Math.cos(this.degToRad(angle));
  };

 /**
  * Returns Sin function from a given angle
  */
  object.sin = function(angle) {
      return Math.sin(this.degToRad(angle));
  };

  return object;

})();

//     /**
//     * Function that limits the frame rate */
//     limitLoop = function (fn, fps) {
//
//         // Use var then = Date.now(); if you
//         // don't care about targetting < IE9
//         var then = new Date().getTime();
//
//         // custom fps, otherwise fallback to 60
//         fps = fps || 60;
//         var interval = 1000 / fps;
//
//         return (function loop(time){
//             requestAnimationFrame(loop);
//
//             // again, Date.now() if it's available
//             var now = new Date().getTime();
//             var delta = now - then;
//
//             if (delta > interval) {
//                 // Update time
//                 // now - (delta % interval) is an improvement over just
//                 // using then = now, which can end up lowering overall fps
//                 then = now - (delta % interval);
//
//                 // call the fn
//                 fn();
//             }
//         }(0));
//     }
//
// };
