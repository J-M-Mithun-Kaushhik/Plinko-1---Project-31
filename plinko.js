class Plinko{
    constructor(x,y){
        var options ={
            isStatic: true
        }
        this.body = Bodies.circle(x,y,8,options);
        World.add(world,this.body);
    }
    display(){
        fill("white");
        circle(this.body.position.x,this.body.position.y,16);
    }
}