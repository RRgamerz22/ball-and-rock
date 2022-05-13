
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var ground;
var b1,b2,b3,b4;
var top_wall;
var ball,rock;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  my_engine = Engine.create();
  my_world = my_engine.world;
  
   
  var ground_options ={
    isStatic: true
  };
 
  var ball_options = {
    restituion:0.75,
    frictionAir:2.15
  }

  var rock_options = {
   
    frictionAir:2.15
  }
   
  btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(my_world,ball);
  
  rock = Bodies.circle(250,10,20,rock_options);
  World.add(my_world,rock);

  ground= Bodies.rectangle(200,390,400,20,ground_options);

  World.add(my_world, ground);
 
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(my_engine);
  
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball.position.x,ball.position.y,20);
  push();
  fill("brown");
  ellipse(rock.position.x,rock.position.y,20);
  pop();
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.20});

  Matter.Body.applyForce(rock,{x:0,y:0},{x:0,y:-0.80});

}


  


