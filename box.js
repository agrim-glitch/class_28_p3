class Box {
  constructor(x, y, width, height) {
    var options = {
       ' setStatic' : true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("bin.png")
    //World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    //fill(255);
    //rect(0, 0, this.width, this.height);
    image(this.image,0, 0, this.width, this.height);
    pop();
  }
};
