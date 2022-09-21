let x, y, a, b, d, speed, speed2, x2, y2, d2;

function setup() {
  createCanvas(400, 400);
  d = 40;
  x = 200;
  y = 200;
  a = 2;
  b = 3;
  speed = 4;
  speed2 = 2;
  x2 = 50;
  y2 = 50;
  d2 = 75;
}
function preload() {
  img = loadImage("Emile_29.webp");
  img2 = loadImage("pngegg.png");
  yamete = loadSound("Yamete-kudasai-2.mp3");
}

function draw() {
  background(221, 160, 221);
  image(img, x, y, d, d);
  image(img2, x2, y2, d2, d2);
  x += a;
  y += b;
  borderCheck();
  collition();
  //step 1
  rX = x - x2;
  rY = y - y2;

  //step 2
  rlen = sqrt(rX ** 2 + rY ** 2);

  //step 3
  eX = (1 / rlen) * rX;
  eY = (1 / rlen) * rY;

  //step 4
  x2 += speed2 * eX;
  y2 += speed2 * eY;
}

function borderCheck() {
  if (x + d >= width) {
    a = -speed;
    b = 0;
  }
  if (x <= 0) {
    a = speed;
    b = 0;
  }
  if (y + d >= height) {
    a = 0;
    b = -speed;
  }
  if (y < 0) {
    a = 0;
    b = speed;
  }
}

function collition() {
  if (x2 - x <= 10 && x2 - x >= -10 && y2 - y <= 10 && y2 - y >= -10) {
    yamete.play();
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
}
