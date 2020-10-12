const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var stone1;
var boy,boyImage;
function preload()
{
	boyImage= loadImage("sprites/boy.png");
}

function setup() {
	var canvas =createCanvas(1200,700);

	engine = Engine.create(); 
	world = engine.world;

	//Create the Bodies Here.
	boy=createSprite(300,621,50,50);
	boy.addImage(boyImage);
	boy.scale=0.1;
	boy.rotation =-9;

	ground=new Ground(600,690,1200,20);
	
	stone1=new Stone(270,590,30,30);

	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background("lightgray");
  

	ground.display();

	stone1.display();

  	drawSprites();
 
}



