const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, box, bottle;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    var box_options ={
        restitution:0.4
    }

    box=Bodies.rectangle(200,100,20,20,box_options)
    World.add(world,box)

    var bottle_options={
        restitution:1.0
    }

    bottle=Bodies.rectangle(200,150,30,5,bottle_options)
    World.add(world,bottle)

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    rectMode(screenLeft)
    rect(box.position.x,box.position.y,40,30)

    rectMode(screenTop)
    rect(bottle.position.x,bottle.position.y,50,45)
}