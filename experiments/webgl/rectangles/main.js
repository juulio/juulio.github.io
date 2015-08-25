window.onload = function(){

	// Get A WebGL context
	var canvas = document.getElementById("canvas");
	var gl = getWebGLContext(canvas);

	// setup a GLSL program
	var vertexShader = createShaderFromScriptElement(gl, "2d-vertex-shader");
	var fragmentShader = createShaderFromScriptElement(gl, "2d-fragment-shader");
	var program = createProgram(gl, [vertexShader, fragmentShader]);
	gl.useProgram(program);

	// // look up where the vertex data needs to go.
	var positionLocation = gl.getAttribLocation(program, "a_position");

	// set the resolution
	var resolutionLocation = gl.getUniformLocation(program, "u_resolution");
	gl.uniform2f(resolutionLocation, canvas.width, canvas.height);


	var colorLocation = gl.getUniformLocation(program, "u_color");

	// // Create a buffer and put a single clipspace rectangle in
	// // it (2 triangles)
	var buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	// gl.bufferData(
	//     gl.ARRAY_BUFFER, 
	//     new Float32Array([
	//         -1.0, -1.0, 
	//          1.0, -1.0, 
	//         -1.0,  1.0, 
	//         -1.0,  1.0, 
	//          1.0, -1.0, 
	//          1.0,  1.0]), 
	//     gl.STATIC_DRAW);


	// setup a rectangle from 10,20 to 80,30 in pixels
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    10, 20,
    80, 20,
    10, 30,
    10, 30,
    80, 20,
    80, 30]), gl.STATIC_DRAW);

	gl.enableVertexAttribArray(positionLocation);
	gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

	// draw
	// gl.drawArrays(gl.TRIANGLES, 0, 6);

	 // draw 50 random rectangles in random colors
	for (var ii = 0; ii < 50; ++ii) {
		// Setup a random rectangle
		setRectangle(
		    gl, randomInt(300), randomInt(300), randomInt(300), randomInt(300)
		);

		// Set a random color.
		gl.uniform4f(colorLocation, Math.random(), Math.random(), Math.random(), 1);

		// Draw the rectangle.
		gl.drawArrays(gl.TRIANGLES, 0, 6);
	}

	var title = document.getElementsByTagName('h1');
	title[0].innerText += " - Reload the page to get random rectangles.";
}

// Returns a random integer from 0 to range - 1.
function randomInt(range) {
	return Math.floor(Math.random() * range);
}

// Fills the buffer with the values that define a rectangle.
function setRectangle(gl, x, y, width, height) {
  var x1 = x;
  var x2 = x + width;
  var y1 = y;
  var y2 = y + height;
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
     x1, y1,
     x2, y1,
     x1, y2,
     x1, y2,
     x2, y1,
     x2, y2]), gl.STATIC_DRAW);
}	
