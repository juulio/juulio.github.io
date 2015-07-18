// x' = xcosA - ysinA
// y' = xsinA + ycosA


/* 
1- Display a Twisted Triangle
2- Set all parameters in JS file
    vertices of triangle
    amount of twist
    degree of tessellation
*/
'use strict';

var canvas,
    gl,
    bufferId,
    points = [],
    twistAngle = 40* Math.PI / 180, // 8 degrees
    NumTimesToSubdivide = 0;

function init() {
    canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    //  Configure WebGL

    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    
    //  Load shaders and initialize attribute buffers
    
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
    
    // Load the data into the GPU
    
    bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, 8*Math.pow(3, 6), gl.STATIC_DRAW );


    // Associate out shader variables with our data buffer
    
    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    setInterval(function () {
        if(NumTimesToSubdivide < 5) {
            NumTimesToSubdivide++;
        }
        else {
            NumTimesToSubdivide = 0;
        }
        document.getElementById("recursiveSteps").innerHTML = NumTimesToSubdivide;
        render();
        // twist();
    }, 1000);

    render();
}

function triangle(a,b,c) {
    points.push(a,b,c);
}

function divideTriangle(a,b,c,count) {
    if(count===0) {
        triangle(twist(a), twist(b), twist(c));
        //triangle(a,b,c);
    }
    else {
        // bisect the sides
        var ab = mix(a,b,0.5),
            ac = mix(a,c,0.5),
            bc = mix(b,c,0.5);
        --count;

        // three new triangles
        divideTriangle(a,ab,ac,count);
        divideTriangle(b,ab,bc,count);
        divideTriangle(c,ac,bc,count);
    }
}

window.onload = init;

function render() {
    var vertices  = [
        vec2(-0.8, -0.5),
        vec2(0, 0.8),
        vec2(0.8, -0.5)
    ];

    points = [];

    divideTriangle(vertices[0],vertices[1],vertices[2],NumTimesToSubdivide);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, flatten(points));
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.TRIANGLES, 0, points.length );
    points = [];

}

function twist(point){
    //console.log(point);
    var x = point[0],
        y = point[1],
        d = Math.sqrt( (Math.pow(x,2) + Math.pow(y,2)) ),
        alpha = d*twistAngle,
        xPrime = x*Math.cos(alpha)-y*Math.sin(alpha),
        yPrime = x*Math.sin(alpha)+y*Math.cos(alpha);

    return vec2(xPrime, yPrime);
}


