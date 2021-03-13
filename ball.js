class Ball{
constructor(x,y){
var options = {
isStatic: true,
'restitution': 0.5,
'friction': 1.2
}
this.body = Bodies.circle(x,y,50,options);
this.radius = 50;

World.add(world,this.body);
}

display(){
var pos = this.body.position;
push();
translate(pos.x,pos.y);
noFill();
strokeWeight(10);
stroke(255);
ellipseMode(RADIUS);
ellipse(0,0,this.radius);
pop();
}

}