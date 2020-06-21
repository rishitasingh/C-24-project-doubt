var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var log1, log2, log3
var paper
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(400,650,800,10);
	groundSprite.shapeColor=color(255);

	log1Sprite = createSprite(600, 650, 200, 20);
	log1Sprite.shapeColor = color("red");
	log2Sprite = createSprite(500, 610, 20, 100);
	log2Sprite.shapeColor= color("red");
	log3Sprite = createSprite(700, 610, 20, 100);
	log3Sprite.shapeColor= color("red");


	engine = Engine.create();
	world = engine.world;
	

	//Create a Ground
	ground = Bodies.rectangle(400, 650, 800, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 log1 = Bodies.rectangle(600, 650, 200, 20, {isStatic:true} );
	 World.add(world, log1);
	 log2 = Bodies.rectangle(500, 610, 20, 100 , {isStatic:true} );
	 World.add(world, log2);
	 log3 = Bodies.rectangle(700, 610, 20, 100 , {isStatic:true} );
	 World.add(world, log3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.body.applyForce(paperObject.body, paperObject.body.position, {x:85, y: -85});
	}
}



