let angle = 0;
function setup () {
	createCanvas(canvasWidth, canvasHeight, WEBGL);
	maxD = dist(0, 0, height/2, height/2);
	maxHeight = height;
}

function draw() {
	background(backgroundColor);
	ortho(-canvasWidth, canvasWidth, canvasHeight, -canvasHeight, -height, 2*height);
	
	rotateX(QUARTER_PI);
	rotateY(QUARTER_PI);

	let offset = 0;
	for(var z = 0; z < height; z += boxSize){
		for (var x = 0; x < height; x += boxSize) {
			push();
			let d = dist(x,z,height/2,height/2);
			let offset = map(d, 0, maxD, -PI, PI);
			let a = angle + offset;
			let h = floor(map(Math.sin(a), -1, 1, minHeight, maxHeight));
			translate(x-height/2, 0, z-height/2);
			normalMaterial();
			box(boxSize, h, boxSize);
			pop();
		}
	}
	angle -= 0.08;	
}