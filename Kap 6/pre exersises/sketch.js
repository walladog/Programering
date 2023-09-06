let button;
function setup() {
  createCanvas(400, 400);
  background(0);
  button = createButton("click this button to CUM instantly");
  button.position(width / 2 - 50, height / 2 - 50);
  button.size(100, 100);
  button.mousePressed(changeBackGround); //kald til funktionen
}

function changeBackGround() {
  let val = random(255);
  background(val);
}
