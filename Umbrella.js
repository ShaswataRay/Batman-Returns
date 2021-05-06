class Umbrella{
    constructor(x, y){
        var options={
            "isStatic":true
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.r = 50;
        World.add(world, this.body);
        this.image=loadImage("images/Walking Frame/walking_1.png");
    }   

    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y + 70, 300, 300);
        pop();
    }
}