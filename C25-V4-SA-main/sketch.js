
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var btn1;
var btn2;
var btn3;
var btn4;
var btn5;
var btn6;

var angle=60;
var aleatoria1
var aleatoria2
var aleatoria3
var aleatoria4
var bola1
var bola2
var bola3
var bola4
var bola5




















function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
   btn1 = createImg('up.png');
   btn1.position(550,30);
   btn1.size(50,50);
   btn1.mouseClicked(vForce1);
 
   btn2 = createImg('up.png');
  btn2.position(420,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce2);

  btn3 = createImg('up.png');
  btn3.position(160,30);
  btn3.size(50,50);
  btn3.mouseClicked(vForce3);

  btn4 = createImg('up.png');
  btn4.position(330,30);
  btn4.size(50,50);
  btn4.mouseClicked(vForce4);

  btn5 = createImg('up.png');
  btn5.position(255,30);
  btn5.size(50,50);
  btn5.mouseClicked(vForce5);

  btn6 = createImg('up.png');
  btn6.position(340,30);
  btn6.size(50,50);
  btn6.mouseClicked(vForce6);



  ground1 = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground1);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  aleatoria1 = new Ground(200,300,60,40);
  aleatoria2 = new Ground(0,250,60,40);
  aleatoria3 = new Ground(300,100,60,40);
  aleatoria4 = new Ground(100,300,60,40);

  bola1 = new Bola(100,10,20);
  bola2 = new Bola(100,10,20);
  bola3 = new Bola(100,10,20);
  bola4 = new Bola(100,10,20);
  bola5 = new Bola(100,10,20);



 
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  Matter.Body.rotate(ground1,angle)
 push();
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,100,20); 
  pop();
  
  angle +=0.1;
fill("blue")
 aleatoria1.display();
 fill("red");
 aleatoria2.display();
 fill("green")
 aleatoria3.display();
 fill("yellow")
 aleatoria4.display();
 fill("black")
 bola1.mostrar()
 bola2.mostrar()
 bola3.mostrar()
 bola4.mostrar()
 bola5.mostrar()

   fill("black")
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
 
//console.log(ground.position.y);

  
  
}

function vForce1()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  
function vForce2()
{
  Matter.Body.applyForce(bola1,{x:0,y:0},{x:0,y:-0.05});
}

function vForce3()
{
  Matter.Body.applyForce(bola2,{x:0,y:0},{x:0,y:-0.05});
}

function vForce4()
{
  Matter.Body.applyForce(bola3,{x:0,y:0},{x:0,y:-0.05});
}

function vForce5()
{
  Matter.Body.applyForce(bola4,{x:0,y:0},{x:0,y:-0.05});
}

function vForce6()
{
  Matter.Body.applyForce(bola5,{x:0,y:0},{x:0,y:-0.05});
}




