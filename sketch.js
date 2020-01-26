let time = 0;
let test = [];
let radius = 100;
let y = [];
let fouriery = []

function setup() {
	createCanvas(windowWidth, windowHeight);
	let angle = 0;
	for (i = 0; i < 100; i++) {
		y[i] = 500 * noise(angle) - 50;
		angle += .02;
	}
	fouriery = dft(y);
}

function draw() {
	background(255);
	translate(200, 300)

	noFill();
	strokeWeight(1);

	let x = 0;
	let y = 0;

	for (let i = 0; i < fouriery.length; i++) {
		prevx = x;
		prevy = y;

		let n = fouriery[i].freq;
		let radius = fouriery[i].amp;
		let phase = fouriery[i].phase;

		stroke(200);
		ellipse(x, y, 2 * radius);
		x += radius * cos(n * time + phase + HALF_PI);
		y += radius * sin(n * time + phase + HALF_PI);
		stroke('black');
		strokeWeight(2);
		test = line(x, y, prevx, prevy);
	}
	test.unshift(y);

	translate(200, 0);
	line(x - 200, y, 0, test[0]);

	beginShape();
	for (let i = 0; i < test.length; i++) {
		vertex(i, test[i]);
	}
	endShape();

	if (test.length > 250) {
		test.pop();
	}

	const dt = TWO_PI / fouriery.length;
	time += dt;
}