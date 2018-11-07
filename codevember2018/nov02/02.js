let x0, y0,
    x1, y1,
    x2, y2,
    angle0,
    angle1,
    angle2,
    radius;

function setup(){
    createCanvas(710, 400);
    angle0 = PI;
    angle1 = PI;
    angle2 = PI;
    radius = 100;
}

function draw(){
    background(255);

    fill(255, 255, 255, 1);
    stroke(127, 63, 120);
    ellipse(200, 200, 15, 15);
    ellipse(200, 200, 215, 215);
    rect(90, 90, 220, 220);

    angle0 -= radians(6);
    x0 = sin(angle0) * radius;    
    y0 = cos(angle0) * radius;
    line(200, 200, x0+200, y0+200);
    
    angle1 -= radians(1/6);
    x1 = sin(angle1) * radius;    
    y1 = cos(angle1) * radius; 
    stroke(0, 0, 0);
    line(200, 200, x1+200, y1+200);

    angle2 -= radians(1/6/60);
    x2 = sin(angle2) * radius;    
    y2 = cos(angle2) * radius; 
    stroke(255, 0, 0);
    line(200, 200, x2+200, y2+200);

    // push();

    // rotate(frameCount * 0.001);
    // pop();

    // push();
    // translate(140, 0, 0);
    // rotateX(frameCount * -0.01);

    // torus(70, 20);
    // pop();
}