const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dividers = [];
var plinkos = [];
var particles = [];

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(240, 795, 480, 10, {isStatic: true});
  World.add(world, ground)
  for(var i = 0.8; i < width; i = i + 79.5)
    dividers.push(new Divider(i, 700));

    for(var i = 40; i<=440; i = i + 200){
      for(var j = 53; j <= 450; j = j + 53)
        plinkos.push(new Plinko(j, i));
}
  for(var l = 140; l <= 540; l = l + 200){
    for(var k = 25; k <= 450; k = k + 53)
      plinkos.push(new Plinko(k, l));
}
}

function draw() {
  background(0);
  rectMode(CENTER);
  fill("white");
  rect(ground.position.x, ground.position.y, 480, 10);
  Engine.update(engine)
  for(var i = 0; i < dividers.length; i++){
    dividers[i].display();
  }
  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  if (frameCount % 60 === 0)
    particles.push(new Particle(random(50, 450), 0));

  for(var k = 0; k < particles.length; k++)
    particles[k].display();
  drawSprites();
}