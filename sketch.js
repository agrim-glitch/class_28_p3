const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
function preload(){

    b1 = loadImage("bg.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    ground1 = new Ground(900,370,200,10);
    ground2 = new Ground(800,330,10,100);
    ground3 = new Ground(1000,330,10,100);
    
    ground4 = new Box(900,330,300,130);


    bird = new Bird(150, 150);
    rope = new SlingShot(bird.body,{x:150, y:150});
}


function draw(){
    background(b1);
    Engine.update(engine);
   
    
    ground.display();
    
    ground1.display();
    ground2.display();
    ground3.display();

rope.display();



    bird.display();
    ground4.display();
}


function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

   
 