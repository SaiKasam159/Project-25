
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(200, 200, 70, 70)
	bin1 = new Bin(610, 350, 20, 200)
	bin2 = new Bin(690, 250, 300, 320)
	bin3 = new Bin(790, 350, 20, 200)
	
	ground = new Ground(400, 375, 800, 50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightblue');

	
	
	
	bin1.display()
	bin3.display()
	bin2.display()
	ball.display()
  //drawSprites();
 
}

function keyPressed() {


	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body, ball.body.position, {x:150, y: -250})
	}

}


