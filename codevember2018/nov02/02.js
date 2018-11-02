function setup(){
  createCanvas(710, 400);
}

function draw(){
    background(255);

    fill(255, 255, 255, 1);
    stroke(127, 63, 120);
    ellipse(200, 200, 15, 15);
    line(200, 100, 200, 200 );

    push();
    rotate(frameCount * 0.001);
    pop();

    // push();
    // translate(140, 0, 0);
    // rotateX(frameCount * -0.01);

    // torus(70, 20);
    // pop();
}