var canvas = document.createElement("canvas");
    headerElement = document.getElementsByClassName('header-inner-wrapper')[0],
    wrapperElement = document.getElementsByClassName('wrapper')[0],
    wrapperWidth = wrapperElement.offsetWidth;

canvas.width = 300;
canvas.height = 60;

// Append the canvas element to the DOM
headerElement.appendChild(canvas);

// Apply basic styles to the Canvas Element
canvas.style.display = 'block';
canvas.style.margin = '0 auto';


var ctx = canvas.getContext('2d'),
    w, h;

canvas.width = w = 300 * 0.98;
canvas.height = h = 60 * 0.9;


var osc1 = new osc(),
    // osc2 = new osc(),
    // osc3 = new osc(),
    horizon = h * 0.5;
    count = 50,
    step = Math.ceil(w / count),
    //points = new Array(count);
    buffer = new ArrayBuffer(count * 4),
    points = new Float32Array(buffer);

osc1.max = h * 0.7;

// osc2.max = 1;
// osc2.speed = 0.03;
//
// osc2.max = 60;
// osc2.speed = 0.015;

function fill() {
    for(var i = 0; i < count; i++) {
        // points[i] = mixer(osc1, osc2, osc3);
        points[i] = mixer(osc1);

    }
}
fill();

ctx.lineWidth = 1;
ctx.strokeStyle = '#000';

function loop() {

    var i;

    /// move points to the left
    for(i = 0; i < count - 1; i++) {
        points[i] = points[i + 1];
    }

    /// get a new point
    // points[count - 1] = mixer(osc1, osc2, osc3);
    points[count - 1] = mixer(osc1);

    //ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(253,253,253, 0.05)';
    ctx.fillStyle = 'rgba(255,255,255, 0.09)';
    ctx.fillRect(0, 0, w, h);

    /// render wave
    ctx.beginPath();
    ctx.moveTo(0, points[0]);

    for(i = 1; i < count; i++) {
        ctx.lineTo(i * step, points[i]);
    }

    ctx.stroke();


    requestAnimationFrame(loop);
}

/// oscillator object
function osc() {

    this.variation = 0.4;
    this.max = 150;
    this.speed = 0.007;

    var me = this,
        a = 0,
        max = getMax();

    this.getAmp = function() {

        a += this.speed;

        if (a >= 2.0) {
            a = 0;
            max = getMax();
        }

        return max * Math.sin(a * Math.PI);
    }

    function getMax() {
        return Math.random() * me.max * me.variation +
            me.max * (1 - me.variation);
    }

    return this;
}

function mixer() {

    var d = arguments.length,
        i = d,
        sum = 0;

    if (d < 1) return 0;

    while(i--) sum += arguments[i].getAmp();

    return sum / d + horizon;
}

// Begin loop header animation
loop();
