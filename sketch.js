const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball;
var myengine, myworld,ground1,box1,box2;
function setup() {
  createCanvas(400,400);

  myengine = Engine.create();  //.world
  myworld = myengine.world;

  ground1 = new GROUND();

  box1 = new BOX(220,100,50,100);

  box2 = new BOX(200,300,50,50);
}

function draw() {
  background("black");
  Engine.update(myengine);

  ground1.display();
  box1.display();
  box2.display();
  

}