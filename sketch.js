let ballX = 250;
let ballY = 70;
let velocity = 0;
let holding = false;
let offsetX, offsetY;

function setup() {
    createCanvas(500, 500);
    frameRate(240);
    noStroke();
}

function draw() {
    background(0, 0, 0, 80);
    fill("green");
    circle(ballX, ballY, 50)

    if (!holding) {
        ballY += velocity
        velocity++;
    }   

    if (ballY + 25 > 500) {
        velocity = Math.floor(velocity / 2);
        velocity *= -1
        if (abs(velocity) < 1) {velocity = 0}
    }
}

function mousePressed() {
    if (dist(mouseX, mouseY, ballX, ballY) < 25) {
        holding = true;
        offsetX = ballX - mouseX;
        offsetY = ballY - mouseY;
    }
}

function mouseReleased() {
    holding = false;
}

function mouseDragged() {
    if (holding) {
        ballX = mouseX + offsetX;
        ballY = mouseY + offsetY;
    }
}