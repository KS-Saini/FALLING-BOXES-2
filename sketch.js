
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var circles=[];
var boundaries = [];


function setup(){
createCanvas(windowWidth,windowHeight);
engine = Engine.create();
world = engine.world;
Engine.run(engine);

boundaries.push(new Boundary(250, 300, width * 0.2, 20,-0.3));
boundaries.push(new Boundary(120, 120, width * 0.2, 20,0.3));
boundaries.push(new Boundary(120, 500, width * 0.2, 20,0.3));
}

function mouseDragged(){
   circles.push(
         
     new Circle(mouseX,mouseY,random(25,40))
          
     )
 }

function draw(){
background(189)
Engine.update(engine);


for(var i=0;i<circles.length;i++) {
   circles[i].show();
  }

// for (var i = 0; i < circles.length; i++) {
//   showcircles(circles[i], i);

for(var i=0;i<boundaries.length;i++) {
  boundaries[i].show();
  }
}

