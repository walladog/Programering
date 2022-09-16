let x = 100;
let y = 100;
let x2 = 100;
let y2 = 100;

function setup() {
  createCanvas(512, 512);
  fill(255, 0, 0);
}

function draw() {
  if (keyIsDown(65)) {
    x -= 5;
  }

  if (keyIsDown(68)) {
    x += 5;
  }

  if (keyIsDown(87)) {
    y -= 5;
  }

  if (keyIsDown(83)) {
    y += 5;
  }

  clear();
  ellipse(x, y, 50, 50);

  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  clear();
  rect(x1, y2, 50, 50);
}

