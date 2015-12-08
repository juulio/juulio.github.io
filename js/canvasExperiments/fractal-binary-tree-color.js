// Create the Canvas Element
var canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");
    context = canvas.getContext("2d");
    context = canvas.getContext("2d");
    context = canvas.getContext("2d");
    context = canvas.getContext("2d");

document.body.appendChild(canvas);

// Apply Basic styles to the Canvas Element
document.body.style.margin = 0;

canvas.width = 500;
canvas.height = 400;
canvas.style.border = 'solid 1px #000';
canvas.style.display = 'block';
canvas.style.margin = '0 auto';

context.fillStyle = '#000';
context.lineWidth = 1;

/****************
 Create Arrays */
var branches = [],
    leaves = [],
    leaves = [],
    leaves = [],
    leaves = [],
    leaves = [],
    // contadorDeHojas = 0,
    deg_to_rad = Math.PI / 180.0,
    depth = 4;

function drawLine(x1, y1, x2, y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.closePath();
    context.stroke();
}

function drawTree(x1, y1, angle, depth){
    var leafRadius = 7;

    if (depth !== 0){
        var x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * 25.0);
        var y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * 25.0);
        drawLine(x1, y1, x2, y2);

        drawTree(x2, y2, angle - 60, depth - 1);
        drawTree(x2, y2, angle + 60, depth - 1);
    }
    if(depth == 1) {
        context.beginPath();
        context.arc(x2, y2, leafRadius, 0, 2*Math.PI, false);
        context.closePath();
        context.stroke();
        // contadorDeHojas++;
    }
}

// context.beginPath();
drawTree(250, 400, -90, depth);
// context.closePath();
// context.stroke();
// console.log(contadorDeHojas);

drawLeaf();

function drawLeaf() {
    context.fillStyle="rgb(195,32,37)";
context.beginPath();
context.moveTo(16,22);
context.bezierCurveTo(16,22,16,22,17,22);
context.bezierCurveTo(17,22,17,22,19,22);
context.lineTo(21,22);
context.lineTo(22,21);
context.lineTo(23,20);
context.bezierCurveTo(24,20,24,19,25,19);
context.bezierCurveTo(25,18,27,17,27,17);
context.lineTo(27,17);
context.bezierCurveTo(28,16,30,15,30,15);
context.lineTo(31,15);
context.bezierCurveTo(32,14,33,14,34,14);
context.bezierCurveTo(34,14,35,14,35,13);
context.bezierCurveTo(36,13,38,12,39,12);
context.bezierCurveTo(39,13,39,13,40,12);
context.bezierCurveTo(41,12,41,12,42,12);
context.bezierCurveTo(43,12,43,12,43,12);
context.bezierCurveTo(44,12,44,12,45,12);
context.bezierCurveTo(47,12,48,12,48,13);
context.bezierCurveTo(48,13,48,13,49,13);
context.bezierCurveTo(50,13,51,14,52,14);
context.lineTo(52,14);
context.bezierCurveTo(52,15,52,15,53,15);
context.bezierCurveTo(54,15,56,16,56,16);
context.lineTo(56,16);
context.bezierCurveTo(56,17,56,17,57,17);
context.bezierCurveTo(58,17,59,18,59,18);
context.lineTo(59,18);
context.bezierCurveTo(59,19,59,19,60,19);
context.bezierCurveTo(61,20,61,20,61,20);
context.bezierCurveTo(61,21,61,21,62,21);
context.lineTo(63,21);
context.bezierCurveTo(64,21,64,22,63,23);
context.bezierCurveTo(63,23,62,24,61,24);
context.lineTo(61,25);
context.bezierCurveTo(61,25,60,26,59,26);
context.bezierCurveTo(59,26,59,26,59,27);
context.bezierCurveTo(59,27,59,27,57,28);
context.bezierCurveTo(57,28,57,28,57,29);
context.bezierCurveTo(57,29,57,29,56,29);
context.bezierCurveTo(56,30,54,30,53,30);
context.bezierCurveTo(53,31,53,31,53,31);
context.lineTo(53,31);
context.bezierCurveTo(52,32,51,32,50,32);
context.bezierCurveTo(49,32,49,32,49,33);
context.bezierCurveTo(48,33,48,33,47,33);
context.bezierCurveTo(47,33,46,33,45,33);
context.bezierCurveTo(45,33,45,33,44,33);
context.lineTo(44,34);
context.lineTo(43,34);
context.bezierCurveTo(42,34,41,33,41,33);
context.bezierCurveTo(40,33,40,33,40,33);
context.lineTo(39,33);
context.bezierCurveTo(39,33,37,33,36,32);
context.bezierCurveTo(35,32,35,32,35,32);
context.lineTo(34,32);
context.bezierCurveTo(34,32,33,32,32,31);
context.bezierCurveTo(31,31,31,31,31,31);
context.bezierCurveTo(30,31,29,30,28,30);
context.bezierCurveTo(28,30,28,30,27,29);
context.bezierCurveTo(27,29,25,28,23,26);
context.bezierCurveTo(22,26,22,25,21,25);
context.lineTo(21,25);
context.lineTo(19,25);
context.bezierCurveTo(17,25,17,25,16,24);
context.bezierCurveTo(16,24,16,24,16,23);
context.bezierCurveTo(16,23,16,23,16,22);
context.lineTo(16,22);
context.fill();
}




/*
<?xml version="1.0"?><svg width="793.7007874015749" height="1122.5196850393702" xmlns="http://www.w3.org/2000/svg">
 <title>Leaf</title>
 <defs>
  <linearGradient id="svg_1">
   <stop offset="0" stop-opacity="0.996094" stop-color="#2b5600"/>
   <stop offset="1" stop-opacity="0.996094" stop-color="#7ad61d"/>
  </linearGradient>
 </defs>
 <g>
  <title>Layer 1</title>
  <path fill="url(#svg_1)" stroke-width="1px" id="path12384" d="m-745.169861,-611.573853l0,0"/>
  <path fill="url(#svg_1)" stroke-width="1px" id="path12382" d="m-745.878845,-533.23468l0,0"/>
  <path fill="url(#svg_1)" stroke-width="1px" id="path12376" d="m-688.301819,-611.573853l0,0"/>
  <path fill="url(#svg_1)" stroke-width="1px" id="path12374" d="m-688.048584,-533.23468l0,0"/>
  <path fill="url(#svg_1)" stroke-width="1px" id="path12366" d="m-507.974731,-611.573853l0,0"/>
  <path fill="url(#svg_1)" stroke-width="1px" id="path12364" d="m-509.139435,-533.23468l0,0"/>
  <path fill="url(#svg_1)" stroke-width="1px" id="path12356" d="m-326.432312,-611.573853l0,0"/>
  <path fill="url(#svg_1)" stroke-width="1px" id="path12354" d="m-326.634857,-533.23468l0,0"/>
  <g id="svg_3">
   <path fill="url(#svg_1)" fill-rule="evenodd" stroke-linecap="square" stroke-miterlimit="4" id="path1381" d="m694.420532,-37.643227c-61.996765,166.771538 -184.481934,288.61277 -276.113708,379.187935c-45.815857,45.287628 -86.129944,88.799438 -109.548584,141.750977c-23.418762,52.951569 -29.424347,115.111603 -7.633606,195.640717l17.440918,6.16748c0,0 -2.530914,-10.88147 -2.920776,-12.382385c22.609985,4.051636 109.717163,11.54541 195.730469,-62.23407c99.689819,-85.510925 194.65741,-266.899567 182.699036,-648.141869l0.346252,0.011215zm-14.905518,46.194337c3.103271,346.812171 -86.76001,512.055457 -178.048157,590.359656c-87.776611,75.29187 -173.440002,71.658691 -186.895081,70.622742c-19.343994,-75.178162 -13.432709,-131.459473 8.088501,-180.12088c22.047638,-49.851379 60.802216,-92.063354 106.313354,-137.049561c83.965088,-82.997101 190.451294,-175.536942 250.541382,-343.811957z"/>
   <path id="path1383" fill="url(#svg_1)" fill-rule="evenodd" stroke-width="1px" d="m3.787155,830.901733c236.270706,-22.406006 363.816879,-144.291931 566.02272,-530.595215c0,0 -267.450043,541.524963 -536.926788,502.347412l-29.095932,28.247803z"/>
  </g>
 </g>
</svg>
*/
