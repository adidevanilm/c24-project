const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var plane;
var hammer;
var rubber;
var stone;
var iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

 
    hammer = new Hammer(10,100);
    rubber = new Rubber(100, 100, 40);
    plane = new Plane(600,height,1200,20)
    stone = new Stone(280, 60);
    iron = new Iron(410, 100);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    
 
}