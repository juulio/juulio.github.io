/************************************************
 Create and set the Canvas Element up. */
var canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");

document.body.appendChild(canvas);
document.body.style.margin = 0;

canvas.width = 500;
canvas.height = 600;
canvas.style.border = 'solid 1px #000';
canvas.style.display = 'block';
canvas.style.margin = '0 auto';

context.fillStyle = '#000';
context.lineWidth = 1;


/******************************
 Set the Tree's variables up */
var deg_to_rad = Math.PI / 180.0,
    depth = 12;

function drawLine(x1, y1, x2, y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}

function drawTree(x1, y1, angle, depth){
    var leafRadius = 7,
        branchColor = '',
        leafProbabilty = canvasElements.getRandomInt(0,1);


    if (depth !== 0){
        if(depth > 3){
            branchColor = 'rgb(100,69,19)'; //Brown
        }
        else {
            branchColor = 'rgb(143,154,90)'; //Green
        }

        context.strokeStyle = branchColor;

        var x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * 4.0);
        var y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * 7.0);
        context.lineWidth = depth*1.6;
        drawLine(x1, y1, x2, y2);

        drawTree(x2, y2, angle - canvasElements.getRandomInt(11, 17), depth - 1);
        drawTree(x2, y2, angle + canvasElements.getRandomInt(5, 19), depth - 1);
    }
    // if(depth == 1 && leafProbabilty == 1) {
    if(depth == 1) {
        var rotationAngle = canvasElements.getRandomInt(0, 360);
        drawLeaf01(x2, y2, rotationAngle);




        // drawLeaf(x2, y2, 40, 40, canvasElements.getRandomInt(0, 360));
        // drawLeafFatJo(50, 50, 'rgba(0,0,0,0)', 1, context);
        // context.translate(x2-40, y2-40);
        // context.rotate(90*Math.PI/180);
        // drawLine(0, 0, 80, 0);
        // drawLeafFatJo(x2, y2, 'rgba(0,0,0,0)', 1, context);
        // drawLeafFatJoSvg(x2, y2, 50);
        // context.rotate(-90*Math.PI/180);
        // context.translate(-(x2-40), -(y2-40));
    }
}

function drawLeaf(x, y, imageWidth, imageHeight, rotationAngle) {
    var imageObj = new Image();

    imageObj.onload = function() {
        context.translate(x, y);
        context.rotate(rotationAngle*Math.PI/180);
        context.drawImage(imageObj, (imageWidth/2) * (-1), (imageHeight/2) * (-1));
        context.rotate(-rotationAngle*Math.PI/180);
        context.translate(-x, -y);
    };

    imageObj.src = 'http://juulio.github.io/img/2015dic/leaf-02.png';
}
leafColor = 'rgba(0,0,0,0)';

var drawLeafFatJo = function(x, y, leafColor, scale, ctx) {
    ctx.save();
    ctx.translate(x,y);
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+30.67,y);
    ctx.lineTo(x+30.67,y+31.436);
    ctx.lineTo(x,y+31.436);
    ctx.closePath();
    // ctx.clip();
    ctx.translate(x,y);
    ctx.translate(x,y);
    ctx.scale(scale, scale);
    ctx.translate(x,y);
    ctx.strokeStyle = 'leafColor';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x+0.572, y);
    ctx.bezierCurveTo(x+2.066,y+1.194,x+6.106,y+5.615,x+7.704,y+6.722);
    ctx.bezierCurveTo(x+9.087,y+5.0851,x+9.368,y+2.0876,x+9.341,y+1.5832);
    ctx.bezierCurveTo(x+9.482,y+1.8323,x+10.841,y+4.543,x+12.299,y+4.5981);
    ctx.bezierCurveTo(x+13.757,y+4.6541,x+14.597,y+1.5618,x+14.664,y+1.3261);
    ctx.bezierCurveTo(x+15.045,y+2.1761,x+15.433,y+2.4931,x+16.117,y+2.4071);
    ctx.bezierCurveTo(x+16.823,y+2.3181,x+17.5022,y+2.1171,x+18.1122,y+1.729);
    ctx.bezierCurveTo(x+18.7793,y+1.2858,x+19.196,y+0.7529,x+19.6163,y+0.07785);
    ctx.bezierCurveTo(x+19.5083,y+0.44584,x+19.4273,y+0.7339,x+19.3332,y+1.1048);
    ctx.bezierCurveTo(x+19.0034,y+2.4057,x+18.6543,y+3.7021,x+18.3663,y+5.0125);
    ctx.bezierCurveTo(x+18.1743,y+5.8881,x+19.0685,y+6.884,x+19.9623,y+6.7681);
    ctx.bezierCurveTo(x+21.0275,y+6.6294,x+22.0964,y+6.4521,x+23.1295,y+6.1641);
    ctx.bezierCurveTo(x+23.644,y+6.0211,x+24.074,y+5.594,x+24.4145,y+5.3751);
    ctx.bezierCurveTo(x+24.2594,y+5.6711,x+23.9985,y+6.0925,x+23.8196,y+6.5451);
    ctx.bezierCurveTo(x+23.6965,y+6.8541,x+23.636,y+7.211,x+23.6396,y+7.5431);
    ctx.bezierCurveTo(x+23.6596,y+8.3341,x+23.9247,y+8.6261,x+24.6897,y+8.778);
    ctx.bezierCurveTo(x+25.0696,y+8.8541,x+25.4586,y+8.89,x+25.8546,y+8.945);
    ctx.bezierCurveTo(x+25.8516,y+9.068,x+25.8328,y+9.256,x+25.8467,y+9.441);
    ctx.bezierCurveTo(x+25.8911,y+10.028,x+26.2127,y+10.445,x+26.7786,y+10.59);
    ctx.bezierCurveTo(x+27.5625,y+10.79,x+28.3486,y+10.999,x+29.1464,y+11.12);
    ctx.bezierCurveTo(x+29.6216,y+11.190,x+30.1216,y+11.100,x+30.6216,y+11.0828);
    ctx.bezierCurveTo(x+30.476,y+11.168,x+30.3057,y+11.286,x+30.1227,y+11.360);
    ctx.bezierCurveTo(x+29.0557,y+11.796,x+27.9841,y+12.2178,x+26.9156,y+12.649);
    ctx.bezierCurveTo(x+26.4397,y+12.841,x+26.1076,y+13.197,x+25.8177,y+13.6088);
    ctx.bezierCurveTo(x+25.5037,y+14.0548,x+25.5421,y+14.482,x+25.9096,y+14.9818);
    ctx.bezierCurveTo(x+25.6656,y+14.8688,x+25.5056,y+14.7918,x+25.3437,y+14.7188);
    ctx.bezierCurveTo(x+24.0237,y+14.1278,x+22.7797,y+14.3127,x+21.5828,y+15.0717);
    ctx.bezierCurveTo(x+21.3667,y+15.2088,x+21.4961,y+15.5838,x+21.5131,y+15.6017);
    ctx.bezierCurveTo(x+22.3631,y+16.465,x+23.1361,y+17.418,x+24.1851,y+18.0716);
    ctx.bezierCurveTo(x+24.291,y+18.1367,x+24.3938,y+18.2037,x+24.5281,y+18.2914);
    ctx.bezierCurveTo(x+24.151,y+18.6834,x+24.2978,y+19.0403,x+24.5291,y+19.4063);
    ctx.bezierCurveTo(x+25.1071,y+20.3182,x+25.8721,y+20.9164,x+27.0251,y+20.9812);
    ctx.bezierCurveTo(x+26.8651,y+21.056,x+26.7021,y+21.1243,x+26.5481,y+21.2083);
    ctx.bezierCurveTo(x+25.9181,y+21.553,x+25.3891,y+21.9974,x+25.2541,y+22.7474);
    ctx.bezierCurveTo(x+25.221,y+22.9353,x+25.3041,y+23.1503,x+25.3588,y+23.3475);
    ctx.bezierCurveTo(x+25.4137,y+23.5516,x+25.5768,y+23.7564,x+25.5538,y+23.9454);
    ctx.bezierCurveTo(x+25.4321,y+24.9454,x+25.8987,y+25.7015,x+26.4868,y+26.4285);
    ctx.bezierCurveTo(x+26.7296,y+26.7286,x+26.9216,y+27.0704,x+27.0756,y+27.4466);
    ctx.bezierCurveTo(x+26.5745,y+27.0746,x+26.085,y+26.6917,x+25.577,y+26.3344);
    ctx.bezierCurveTo(x+25.2816,y+26.1314,x+24.9687,y+25.9605,x+24.6577,y+25.7922);
    ctx.bezierCurveTo(x+24.3147,y+25.6062,x+23.9875,y+25.6623,x+23.6468,y+25.8472);
    ctx.bezierCurveTo(x+23.5146,y+25.91,x+23.2978,y+25.902,x+23.1427,y+25.852);
    ctx.bezierCurveTo(x+22.8927,y+25.7723,x+22.6528,y+25.646,x+22.4235,y+25.514);
    ctx.bezierCurveTo(x+21.8366,y+25.175,x+21.2835,y+25.336,x+20.7797,y+25.665);
    ctx.bezierCurveTo(x+20.5798,y+25.795,x+20.4318,y+26.058,x+20.3441,y+26.291);
    ctx.bezierCurveTo(x+20.241,y+26.5682,x+20.2291,y+26.872,x+20.1427,y+27.187);
    ctx.bezierCurveTo(x+19.9465,y+26.1013,x+19.3121,y+25.2753,x+18.6125,y+24.488);
    ctx.bezierCurveTo(x+18.4695,y+24.327,x+15.9045,y+21.500,x+15.3716,y+21.244);
    ctx.bezierCurveTo(x+14.445,y+22.68,x+14.7686,y+24.1032,x+15.2925,y+25.583);
    ctx.bezierCurveTo(x+14.8445,y+25.322,x+14.4365,y+25.442,x+14.1165,y+25.78887);
    ctx.bezierCurveTo(x+13.8225,y+26.10888,x+13.5035,y+26.44287,x+13.335,y+26.830);
    ctx.bezierCurveTo(x+12.8646,y+27.88187,x+12.6395,y+28.996,x+12.6176,y+30.15588);
    ctx.bezierCurveTo(x+12.6097,y+30.58487,x+12.55,y+31.010,x+12.4376,y+31.438);
    ctx.bezierCurveTo(x+12.3996,y+31.435,x+12.3627,y+31.43188,x+12.3247,y+31.427);
    ctx.bezierCurveTo(x+12.2577,y+30.981,x+12.2417,y+30.520,x+12.117,y+30.094);
    ctx.bezierCurveTo(x+11.9186,y+29.4733,x+11.7236,y+28.826,x+11.3817,y+28.2843);
    ctx.bezierCurveTo(x+11.0598,y+27.7764,x+10.4877,y+27.521,x+9.7966,y+27.556);
    ctx.bezierCurveTo(x+9.7477,y+27.2753,x+9.6846,y+26.96,x+9.6396,y+26.660);
    ctx.bezierCurveTo(x+9.4877,y+25.592,x+8.5596,y+25.1672,x+7.6916,y+25.2662);
    ctx.bezierCurveTo(x+7.1766,y+25.3253,x+6.7066,y+25.823,x+6.2316,y+26.1454);
    ctx.bezierCurveTo(x+6.0796,y+26.2485,x+5.9756,y+26.4225,x+5.8456,y+26.5674);
    ctx.bezierCurveTo(x+5.8246,y+26.5433,x+5.7996,y+26.5234,x+5.8036,y+26.5155);
    ctx.bezierCurveTo(x+6.4476,y+25.0584,x+6.5186,y+23.5226,x+6.4446,y+21.9635);
    ctx.bezierCurveTo(x+6.4247,y+21.5584,x+6.4256,y+21.1506,x+6.3927,y+20.7474);
    ctx.bezierCurveTo(x+6.3416,y+20.102,x+5.7627,y+19.4733,x+5.157,y+19.3765);
    ctx.bezierCurveTo(x+5.02265,y+19.3555,x+4.8777,y+19.3867,x+4.7486,y+19.4225);
    ctx.bezierCurveTo(x+4.35265,y+19.5324,x+3.96664,y+19.7176,x+3.56463,y+19.7636);
    ctx.bezierCurveTo(x+3.02363,y+19.8257,x+2.53366,y+19.9756,x+2.056,y+20.215);
    ctx.bezierCurveTo(x+1.4636,y+20.5155,x+0.8516,y+20.7617,x+0.2486,y+21.0256);
    ctx.bezierCurveTo(x+0.1846,y+21.0535,x+0.108598,y+21.0565,x+0.0045999,y+21.0155);
    ctx.bezierCurveTo(x+0.1866,y+20.8784,x+0.3796,y+20.7523,x+0.5466,y+20.54);
    ctx.bezierCurveTo(x+0.7776,y+20.3863,x+1.0426,y+20.1834,x+1.1996,y+19.9206);
    ctx.bezierCurveTo(x+1.796,y+18.9326,x+2.0946,y+17.856,x+1.99262,y+16.6954);
    ctx.bezierCurveTo(x+1.9662,y+16.3216,x+1.75262,y+16.0964,x+1.39261,y+16.0023);
    ctx.bezierCurveTo(x+1.262,y+15.9513,x+1.00961,y+15.8924,x+0.76261,y+15.813);
    ctx.bezierCurveTo(x+2.3686,y+15.4244,x+2.8766,y+13.9183,x+3.51262,y+12.6254);
    ctx.bezierCurveTo(x+4.6496,y+10.9724,x+1.77761,y+9.5334,x+1.67963,y+9.444);
    ctx.bezierCurveTo(x+5.99365,y+9.1964,x+6.6626,y+7.554,x+6.67965,y+7.5214);
    ctx.bezierCurveTo(x+6.365,y+7.257,x+1.035,y+1.462,x,y+0.647);
    ctx.lineTo(x+0.572,y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
};

function drawLeafFatJoSvg(x, y, rotationAngle) {
    var data = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="402.158px" height="412.914px" viewBox="0 0 402.158 412.914" enable-background="new 0 0 402.158 412.914" xml:space="preserve"><path d="M7.513,0c19.628,15.692,72.688,73.749,93.677,88.288c18.167-21.5,21.854-60.878,21.5-67.5 c1.865,3.273,19.709,38.874,38.854,39.604c19.146,0.73,30.188-39.894,31.065-42.98c5.001,11.163,10.101,15.318,19.073,14.19 c9.283-1.167,18.199-3.799,26.211-9.017c8.771-5.711,14.25-12.719,19.755-21.583c-1.422,4.829-2.483,8.618-3.72,13.492 c-4.336,17.084-8.913,34.121-12.695,51.33c-2.528,11.51,9.209,24.581,20.951,23.057c13.991-1.816,28.038-4.153,41.598-7.933 c6.704-1.869,12.367-7.479,16.878-10.359c-2.028,3.892-5.463,9.416-7.823,15.366c-1.612,4.062-2.478,8.737-2.365,13.105 c0.267,10.387,3.744,14.218,13.788,16.217c4.997,0.995,10.098,1.469,15.301,2.197c-0.036,1.604-0.293,4.072-0.104,6.508 c0.595,7.707,4.804,13.188,12.239,15.091c10.294,2.634,20.62,5.372,31.102,6.957c6.237,0.943,12.8-0.239,19.37-0.472 c-1.989,1.125-4.155,2.675-6.555,3.651c-14.01,5.709-28.082,11.263-42.115,16.914c-6.256,2.521-10.615,7.202-14.419,12.608 c-4.129,5.869-3.62,11.488,1.197,18.041c-3.194-1.487-5.303-2.5-7.436-3.454c-17.337-7.762-33.677-5.341-49.398,4.626 c-2.839,1.799-1.136,6.729-0.91,6.961c11.165,11.394,21.318,23.881,35.104,32.438c1.375,0.854,2.726,1.746,4.498,2.886 c-4.968,5.146-3.031,9.835,0.018,14.647c7.586,11.979,17.648,19.829,32.777,20.684c-2.09,0.989-4.233,1.879-6.259,2.986 c-8.276,4.532-15.227,10.361-17,20.208c-0.444,2.475,0.666,5.303,1.362,7.888c0.724,2.676,2.864,5.377,2.565,7.849 c-1.59,13.136,4.531,23.062,12.253,32.622c3.185,3.942,5.702,8.426,7.73,13.369c-6.579-4.889-13.063-9.912-19.776-14.612 c-3.797-2.659-7.902-4.906-11.988-7.122c-4.502-2.44-8.797-1.716-13.27,0.716c-1.741,0.946-4.586,0.728-6.617,0.075 c-3.289-1.053-6.432-2.713-9.443-4.45c-7.711-4.444-14.968-2.342-21.587,1.985c-2.62,1.713-4.569,5.161-5.716,8.231 c-1.357,3.64-1.518,7.726-2.65,11.756c-2.576-14.261-10.902-25.111-20.102-35.451c-1.881-2.112-35.58-39.246-42.566-42.604 c-12.233,18.978-7.912,37.55-1.042,56.999c-5.878-3.43-11.245-1.859-15.438,2.688c-3.871,4.2-8.062,8.593-10.323,13.694 c-6.121,13.808-9.081,28.451-9.368,43.668c-0.105,5.632-1.539,11.238-2.365,16.855c-0.494-0.049-0.985-0.1-1.479-0.148 c-0.887-5.851-1.095-11.909-2.819-17.502c-2.519-8.161-5.077-16.65-9.573-23.764c-4.223-6.674-11.743-10.025-20.82-9.558 c-0.652-3.691-1.481-7.711-2.061-11.768c-2.003-14.038-14.183-19.622-25.592-18.314c-6.758,0.772-12.933,7.31-19.174,11.544 c-2,1.355-3.372,3.641-5.069,5.542c-0.271-0.315-0.609-0.581-0.566-0.679c8.456-19.136,9.392-39.32,8.413-59.781 c-0.256-5.326-0.248-10.671-0.68-15.981c-0.679-8.373-8.271-16.732-16.316-18.008c-1.692-0.27-3.588,0.128-5.282,0.604 c-5.204,1.456-10.267,3.879-15.55,4.479c-7.104,0.809-13.542,2.782-19.889,5.982c-7.709,3.889-15.745,7.128-23.661,10.597 c-0.85,0.372-1.848,0.404-3.205-0.129c2.387-1.81,4.93-3.449,7.124-5.468c3.04-2.798,6.517-5.461,8.582-8.913 c7.765-12.982,11.746-27.062,10.422-42.354c-0.426-4.916-3.156-7.861-7.883-9.104c-2.533-0.666-5.034-1.453-8.286-2.4 c21.093-5.188,27.775-24.973,36.129-41.953c14.935-21.715-22.794-40.614-24.066-41.715c56.665-3.332,65.447-24.826,65.665-25.332 C83.611,95.323,13.598,19.205,0,8.507L7.513,0z"/></svg>';

    var DOMURL = window.URL || window.webkitURL || window;

    var img = new Image();
    var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
    var url = DOMURL.createObjectURL(svg);

    img.onload = function () {
        context.drawImage(img, x, y, img.width*0.1, img.height*0.1);
        DOMURL.revokeObjectURL(url);
    }

    img.src = url;
}

function drawLeaf01(x, y, angle) {
    context.translate(x, y);
    context.rotate(angle);
    context.beginPath();

    context.moveTo(0,0);
    context.lineTo(5, -10);
    context.lineTo(15, -5);
    context.lineTo(20, 0);
    context.lineTo(15, 5);
    context.lineTo(5, 10);

    context.closePath();
    context.stroke();
    context.rotate(-angle);
    context.translate(-x, -y);
}

drawTree(250, 600, -90, depth);
