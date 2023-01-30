let slider;
let phase = 0.5;
let zoff = 2;
let angle =0;
var seed = Math.random() * 500;
let colors = "1b1b1bBF-29292940-f3f3f3BF-222222b3-ff000080".split("-").map((a) => "#" + a);
let colorbg = "fbf8ef".split("-").map((a) => "#" + a);
let colorbg2 = "fbf8ef03".split("-").map((a) => "#" + a);
var color1, color2;
var mySize;

function setup() {

	randomSeed(seed);
  createCanvas(windowWidth, windowHeight);
	mySize = min(windowWidth, windowHeight);
  background(colorbg);
  slider = random(0.5, 2.5);
	color1 = random([colors]);
	color2 = random([colors]);
}

function draw() {
	randomSeed(seed);
  background(0);
  translate(width / 2, height / 2);
  let gap = 0.01;
  for (var i = 1; i < 100; i++) {
    let noiseMax = slider; 
    for (var a = 0; a < random(0,PI); a += 0.05) {
			noFill();
      stroke(random(color1));
      rotate(random(HALF_PI)+angle);
      let xoff = map(cos(a + phase), -1, 2, 0, noiseMax);
      let yoff = map(sin(a + phase / 2), -1, 6, 0, noiseMax);
      let r = map(noise(xoff, yoff, zoff), 0, 1.5,100, mySize*1) * i * gap;
      let x = r * cos(a);
      let y = r * sin(a);
			strokeWeight(random(5));
			rectMode(CENTER);
      rect(x, y,random(10,40));
			strokeWeight(random(2));
			line(2,0,x,y);
    }
     slider += 0.002;
  }

  phase += random(0.01);
  zoff += random(0.001);
	angle +=PI/360/500 ;
}