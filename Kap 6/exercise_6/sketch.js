function setup() {
  createCanvas(800, 800);
  trekant(43, 76, 12);
}

function trekant(a, b, c) {
  cA = ((b ^ (2 + c) ^ (2 - a) ^ 2) / 2) * b * c;
  cB = ((a ^ (2 + c) ^ (2 - b) ^ 2) / 2) * a * c;
  cD = ((a ^ (2 + b) ^ (2 - c) ^ 2) / 2) * a * b;

  A = arccos(cA);
  B = arccos(cB);
  C = arccos(cC);

  x1 = cos(A);
  y1 = line(0, 0, cA, 0);
}
