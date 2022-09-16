var x = 200;
var y = 200;
function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  fill(0);
  ellipse(x,y,50,50);   
  if (x >= 400){
   x = 0; 
  }
  if (keyCode === UP_ARROW) {
    y = y - random(1,10);
  } else if (keyCode === DOWN_ARROW) {
   y = y + random(1,10);
  }
  if (keyCode === LEFT_ARROW) {
    x = x - random(1,25);
  } else if (keyCode === RIGHT_ARROW) {
    x = x + random(1,25);
  }
}
//denne kode gør så en ellipse bevæger sig når man klikker på piletasterne


