let stamme;
let gran;
let kugler = [];
let stars;

function setup() {
  createCanvas(800, 800);
  stamme = new Stamme(350, 600, 100);
  gran = new Gran(
    width / 4,
    700,
    width / 4 + (width / 4) * 2,
    700,
    width / 2,
    100
  );

  for (let i = 0; i < 3; i++) {
    kugler.push(
      new Kugle(
        random(370, 430),
        random(110, 300),
        30,
        color(random(100, 255), 0, 0)
      )
    );
  }
  for (let i = 0; i < 4; i++) {
    kugler.push(
      new Kugle(
        random(270, 530),
        random(300, 500),
        30,
        color(random(100, 255), 0, 0)
      )
    );
  }
  for (let i = 0; i < 5; i++) {
    kugler.push(
      new Kugle(
        random(200, 600),
        random(500, 700),
        30,
        color(random(100, 255), 0, 0)
      )
    );
  }

  stars = new Stjerne(width / 2, 100, 20, 40, 6);
}

function draw() {
  background(220);
  stamme.show();
  gran.show();
  for (let i = 0; i < 10; i++) {
    kugler[i].show();
  }

  stars.show();
}

class Stamme {
  constructor(tx, ty, tw) {
    this.x = tx;
    this.y = ty;
    this.w = tw;
  }
  show() {
    fill(100, 50, 0);
    rect(this.x, this.y, this.w, this.w * 2);
  }
}

class Gran {
  constructor(x1, y1, x2, y2, x3, y3) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
  }
  show() {
    fill(0, 128, 0);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
}

class Kugle {
  constructor(x, y, r, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
  }

  show() {
    fill(this.c);
    circle(this.x, this.y, this.r);
  }
}

class Stjerne {
  constructor(x, y, radius1, radius2, npoints) {
    this.x = x;
    this.y = y;
    this.r1 = radius1;
    this.r2 = radius2;
    this.np = npoints;
  }
  show() {
    fill("yellow");
    star(this.x, this.y, this.r1, this.r2, this.np);
  }
}
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
