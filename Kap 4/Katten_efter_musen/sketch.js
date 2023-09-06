//jeg kalder alle mine variabler
let x, y, a, b, d, speed, speed2, x2, y2, d2;
let isplaying;
isplaying = false;
//her laver jeg mit canvasog setter alle mine værdier til min kat og mus, både deres speed størrelse og positioner
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
//her preloader jeg mine billeder og lydfiler så jeg han bruge den senere
function preload() {
  img = loadImage("Emile_29.webp");
  img2 = loadImage("pngegg.png");
  yamete = loadSound("Yamete-kudasai-2.mp3");
}

//i draw funktionen tegner jeg baggrunden, katten, musen jeg får katten til at bevæge sig efter musen og jeg stater mine 2 funtioner jeg har lavet neden under til at ske
function draw() {
  background(137, 207, 240);
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

//dette er en funtion der tjekker om musen rammer kanten, hvis den gør så gør den musens retning og speed til at være omvendt
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

//her tjecker jeg om katten rammer musen og hvis den gør det stopper både katten og musen og der bliver afspillet en lyd
function collition() {
  if (x2 - x <= d && x2 - x >= -d2 && y2 - y <= d && y2 - y >= -d2) {
    if (isplaying == false) {
      yamete.play();
      isplaying = true;
    }
    speed = 0;
    a = 0;
    b = 0;
    speed2 = 0;
  }
}

//denne funktion gør så jeg kan styre musen med piletasterne
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
