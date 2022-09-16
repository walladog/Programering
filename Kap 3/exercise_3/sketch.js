function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  if (mouseIsPressed == true) {
    if (mouseButton == LEFT) {
      fill(0);
      stroke(1);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }  
  }
}



