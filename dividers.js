class Divider{
    constructor(x,y){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,5,200,options);
        this.width = 5;
        this.height = 250;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("white");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}