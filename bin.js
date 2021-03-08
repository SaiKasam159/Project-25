class Bin {
  constructor(x, y, width, height, image) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0,
        isStatic: true
    }
   
    this.image = loadImage('dustbingreen.png')
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    //var angle = this.body.angle;
    push();
    //translate(pos.x, pos.y);
    //rotate(angle);
    imageMode(CENTER);
    fill(53);
    image(this.image, pos.x, pos.y, this.width, this.height);
    pop();
  }
};
