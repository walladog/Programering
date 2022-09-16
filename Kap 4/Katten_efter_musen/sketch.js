let x,y,a,b,d,speed;


function setup() {
  createCanvas(400, 400);
  d = 40
  x = random(0,width);
  y = random(0,height);
  a = 2
  b = 3
  speed = 3
}
function preload() {
  img = loadImage('Emile_29.webp');
 }

function draw() {
  background(221,160,221);
    image(img,x,y,d,d);
   x+=a
   y+=b
   borderCheck();
  
}

function borderCheck() {
  if (x + d >= width) {
    a = -speed;
    b = 0
  }
  if (x <= 0) {
    a = speed;
    b = 0
  }
  if (y + d >= height) {
    a = 0
    b = -speed;
  }
  if (y < 0) {
    a = 0
    b = speed;
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
