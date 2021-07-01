const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone1 = new Stone (50, 27, 30, 60)
    rubber1 = new Rubber (80, 90, 17)
    rubber2 = new Rubber (280, 90, 55)
    rubber3 = new Rubber (180, 90, 67)
    rubber4 = new Rubber (300, 90, 90)



}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
 
}