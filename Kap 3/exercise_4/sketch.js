function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  if (keyIsPressed && key === 'f') {
    noStroke();
    fill(0,255,0);
   rect(mouseX, mouseY, 10, 10);
  }
  else  if (keyIsPressed && key === 'c') {
    noStroke();
    fill(255,0,0);
   circle(mouseX, mouseY, 10);
  }
  else  if (keyIsPressed && key === 'e') {
    noStroke();
    fill(0,0,255);
   ellipse(mouseX, mouseY, 10, 3);  
  }
}
