
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,lever,box1,box2,box3;
var R,G,B;
var edge1,edge2,edge3,edge4;
var randcolor1;
var randcolor2;
var chooser1;
var hiderbackground;
var puzzle_chooser = 1;
var spr1,spr2,spr3,spr4,spr5,spr6;
var poly1,poly2,poly3,poly4,poly5,poly6;
function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
if(puzzle_chooser === 1){
spr1 = createSprite(200,200,100,100);
spr2 = createSprite(400,200,100,100);
spr3 = createSprite(600,200,100,100);
spr4 = createSprite(200,500,100,100);
spr5 = createSprite(400,500,100,100);
spr6 = createSprite(600,500,100,100);
randcolor1 = Math.round(random(1,12));
randcolor2 = Math.round(random(1,12));
chooser1 = Math.round(random(1,6));

hiderbackground = createSprite(400,350,800,700);

ball = new Ball(200,300);
lever = createSprite(75,350,100,20);
box1 = new basket(random(300,650),400,150,20);
box2 = new basket(box1.body.position.x - 85,375,20,70);
box3 = new basket(box1.body.position.x + 85,375,20,70);
edge1 = new basket(-25,350,50,700);
edge2 = new basket(825,350,50,700);
edge3 = new basket(400,725,800,50);
edge4 = new basket(400,-25,800,50);




}
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(puzzle_chooser === 1){
  R = map(lever.y,0,300,0,255) + 25;
  G = map(lever.y,300,700,0,255);
  B = 25;



lever.shapeColor = rgb(R + 50,G + 50,B);
hiderbackground.shapeColor = 0;
if(mousePressedOver(lever)){
	lever.y = mouseY;
	}
fill(255);
strokeWeight(5);
stroke(255);
line(lever.x,0,lever.x,700);	
  drawSprites();
 ball.display();
 box1.display();
 box2.display();
 box3.display();
 edge1.display();
 edge2.display();
 edge3.display();
 edge4.display();
 if(keyDown("2")){
puzzle_chooser = 2;
lever.destroy();	
hiderbackground.destroy();
 }
}

if(puzzle_chooser === 2){
colormatcher();
drawSprites();
}

}

function keyPressed(){
if(puzzle_chooser === 1){
var force = 700 - lever.y
console.log(box1.body.position.x);
if(keyCode === 32){
Body.setStatic(ball.body,false);	
Body.applyForce(ball.body,ball.body.position,{x: force/1500,y: -force/1500})
console.log(force/1000 , force/1000);
}
}
}
