class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.1,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,  25, options);
      this.width = 50;
      this.height = 50;

      this.image = loadImage("paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
   ///   pos.x = mouseX;
    ///  pos.y = mouseY;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,80,80)
      //fill(255,0,0);
      //ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  
