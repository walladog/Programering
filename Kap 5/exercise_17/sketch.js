let ligeliste = [];
let uligeliste = [];

function setup() {
  createCanvas(400, 400);
  background(0);
  for (i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      ligeliste.push(i);
    } else if (i % 2 != 0) {
      uligeliste.push(i);
    }
  }
  print(uligeliste);
  print(ligeliste);
}
