


function setup() {
  createCanvas(400, 400);
  frameRate(60);
  background(220);
}

function draw() {
  if(mouseIsPressed==true){
    if(mouseButton===LEFT){
      fill(255,0,0);
      circle(mouseX,mouseY,25)
  }
  else if (mouseButton === RIGHT){
    fill(0,0,255);
    rect(mouseX,mouseY,50,50)
  }
}
if (keyIsPressed && key === 'q') {
  fill(0,255,0);
  ellipse(mouseX, mouseY, 10, 10);
}
}
  
  

