class Particle{
    constructor(x,y){
        var options ={
            isStatic: false
        }
        this.body = Bodies.circle(x,y,5,options);
        this.colour = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world,this.body);
    }
    display(){
        fill(this.colour)
        circle(this.body.position.x,this.body.position.y,10);
    }
}