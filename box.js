class BOX{
constructor(x,y,widthw,heightw){
    var box_options={
    restitution : 0.5,
    friction: 0.3,
    density: 1

    }

    this.body = Bodies.rectangle(x,y,widthw,heightw,box_options);
    this.width = 10;
    this.height = 30;

    World.add(myworld,this.body);
}

display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("orange");
    rectMode(CENTER);
    rect(0,0,this.body.width,this.body.height);
    pop();
}

}