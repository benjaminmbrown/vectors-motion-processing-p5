 var mover;

function setup() {
  createCanvas(300, 300);
  mover = new Mover();

}

function draw() {
	background(255);
	mover.update();
	mover.checkEdges();
	mover.display();
}

