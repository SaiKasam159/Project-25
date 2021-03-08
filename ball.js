class Ball {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.image = loadImage('paper.png')
    this.body = Bodies.rectangle(x, y,width, height, options);
    this.width = width;
    this.height = height;
    
    
    
    //Matter.Body.setAngle(this.body, angle)
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    pos.x = this.body.position.x
    pos.y = this.body.position.y
    //var angle = this.body.angle;
    push();
    //translate(pos.x, pos.y);
    //rotate(angle);
    imageMode(CENTER)
    //fill('red');
    image(this.image, pos.x, pos.y, this.width, this.height);
    pop();
  }
};
