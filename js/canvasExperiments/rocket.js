/***
 * Julio Del Valle - Computer Graphics - Costa Rica - 2015
 * juulio.github.io
 */
var rocket = rocket || {};

(function (context) {

    /***
     * Init all required functions
     */
    function init () {
      console.log('Cannonball code');

      var gameObjects = [],
          canvas = document.getElementById('canvas'),
          ctx = canvas.getContext('2d');

          var vector2d = function (x, y) {
              var vec = {

                // x and y components of vector stored in vx,vy.
                vx: x,
                vy: y,

                // scale() method allows us to scale the vector either up or down.
                scale: function (scale) {
                    vec.vx *= scale;
                    vec.vy *= scale;
                },

                // add() method adds a vector.
                add: function (vec2) {
                    vec.vx += vec2.vx;
                    vec.vy += vec2.vy;
                },

                // sub() method subtracts a vector.
                sub: function (vec2) {
                    vec.vx -= vec2.vx;
                    vec.vy -= vec2.vy;
                },

                // negate() method points the vector in the opposite direction.
                negate: function () {
                    vec.vx = -vec.vx;
                    vec.vy = -vec.vy;
                },

                // length() method returns the length of the vector using Pythagoras.
                length: function () {
                    return Math.sqrt(vec.vx * vec.vx + vec.vy * vec.vy);
                },

                // A faster length calculation that returns the length squared.
                // Useful if all you want to know is that one vector is longer than another.
                lengthSquared: function () {
                    return vec.vx * vec.vx + vec.vy * vec.vy;
                },

                // normalize() method turns the vector into a unit length vector // pointing in the same direction.
                normalize: function () {
                    var len = Math.sqrt(vec.vx * vec.vx + vec.vy * vec.vy);
                    if (len) {
                        vec.vx /= len;
                        vec.vy /= len;
                    }

                    // As we have already calculated the length, it might as well be // returned, as it may be useful.
                    return len;
                },

                // Rotates the vector by an angle specified in radians.
                rotate: function (angle) {
                    var vx = vec.vx,
                        vy = vec.vy,
                        cosVal = Math.cos(angle),
                        sinVal = Math.sin(angle);

                    vec.vx = vx * cosVal - vy * sinVal;
                    vec.vy = vx * sinVal + vy * cosVal;
                },

                // toString() is a utility function for displaying the vector as text, // a useful debugging aid.
                toString: function () {
                    return '(' + vec.vx.toFixed(3) + ',' + vec.vy.toFixed(3) + ')'; }
                };

                return vec;
          };

          var cannonBall = function (x, y, vector) {
              var gravity = 0,
                  that = {
                       x: x, // Initial x position.
                       y: y, // Initial y position.
                       removeMe: false, // A flag to indicate removal

                        // move() method updates position with velocity, and checks for rocket hitting the ground.
                        move: function () {
                            vector.vy += gravity; // Add gravity to vertical velocity. // Increase gravity.
                            gravity += 0.1; // Add gravity to vertical velocity. // Increase gravity.
                            that.x += vector.vx; // Add velocity vector to position.
                            that.y += vector.vy;

                            // When rocket gets too low, flag it for removal.
                            if (that.y > canvas.height - 150) {
                                that.removeMe = true;
                            }
                        },

                        // draw() method draws a filled circle, centered on the position of the ball.
                        draw: function () {
                            ctx.beginPath();
                            ctx.arc(that.x, that.y, 5, 0, Math.PI * 2, true);
                            ctx.fill();
                            ctx.closePath();
                        }
                    };
                return that;
          };

          var cannon = function(x, y) {
              var mx = 0,
                  my = 0,
                  angle = 0,
                  that = {
                      x: x,
                      y: y, angle: 0,
                      removeMe: false,

                      // move() method does nothing more than angle the cannon toward the mouse pointer.
                      move: function () {
                          // Calculate angle to mouse pointer.
                          angle = Math.atan2(my - that.y, mx - that.x);
                      },

                      draw: function () {
                          ctx.save();
                          ctx.lineWidth = 2;
                          // Origin will be bottom-center of barrel.
                          ctx.translate(that.x, that.y);
                          // Apply the rotation previously calculated in the move() method.
                          ctx.rotate(angle);
                          // Draw a rectangular 'barrel'.
                          ctx.strokeRect(0, -5, 50, 10);
                          // Draw 'wheel' at bottom of cannon.
                          ctx.moveTo(0, 0);
                          ctx.beginPath();
                          ctx.arc(0, 0, 15, 0, Math.PI * 2, true);
                          ctx.fill();
                          ctx.closePath();
                          ctx.restore();
                      }
                  };

                  // When mouse is clicked, fire a rocket.
                  canvas.onmousedown = function (event) {
                      // Create a vector from cannon postion in direction of mouse.
                      var vec = vector2d(mx - that.x, my - that.y);
                      vec.normalize(); // Make it unit length.
                      vec.scale(25); // Scale it up to 25 units per frame.
                      // Create a new rocket, and add it to the gameObjects list.
                      gameObjects.push(cannonBall(that.x, that.y, vec));
                  };

                  // Keep a note of the mouse position over the canvas.
                  canvas.onmousemove = function (event) {
                      var bb = canvas.getBoundingClientRect();
                      mx = (event.clientX - bb.left);
                      my = (event.clientY - bb.top);
                  };

                  return that;
          };

          // Draws a blue sky and grass, with the horizon in the middle of the canvas.
          // Drawn as semitransparent to give the illusion of blurring on moving objects.
          var drawSkyAndGrass = function() {
              ctx.save();
              // Set transparency.
              ctx.globalAlpha = 0.4;
              // Create a CanvasGradient object in linGrad.
              // The gradient line is defined from the top to the bottom of the canvas.
              var linGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
              // Start off with sky blue at the top.
              linGrad.addColorStop(0, '#00BFFF');
              // Fade to white in the middle.
              linGrad.addColorStop(0.5, 'white');
              // Green for the top of the grass.
              linGrad.addColorStop(0.5, '#55dd00');
              // Fade to white at the bottom.
              linGrad.addColorStop(1, 'white');
              // Use the CanvasGradient object as the fill style.
              ctx.fillStyle = linGrad;
              // Finally, fill a rectangle the same size as the canvas.
              ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.restore();
          };

          // Add an initial cannon to the game objects list.
          gameObjects.push(cannon(50,canvas.height-150));

          // This is the main loop that moves and draws everything.
          setInterval( function() {
              drawSkyAndGrass();

              // Here, we loop through all the object in the gameObjects[]
              // Array. As each object is found, it is drawn, moved, and then
              // added to the gameObjectsFresh[] array,UNLESS it has its removeMe flag // set. gameObjectsFresh[] is then copied into gameObjects[] ready for // the next frame. gameObjects[] will now not contain any removed
              // objects, and they will disappear, as nothing references them anymore.
              gameObjectsFresh = [];

              for(var i=0;i<gameObjects.length;i++) {
                  gameObjects[i].move();
                  gameObjects[i].draw();
                  if ( gameObjects[i].removeMe === false) {
                      gameObjectsFresh.push(gameObjects[i]);
                  }
              }
              gameObjects = gameObjectsFresh;
          },30);
      }

    init();

}(rocket));
