class Circle

{
  constructor(x, y,r) 
  {
    
    let options = {
      friction: 0.1,
      restitution: 0.6
    };

    //this.image = loadImage("ball.png");    
   // this.r = 40;
    this.r = r;
    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);
  }


  show() {
    let pos = this.body.position;
   // let angle = this.body.angle;

   push();
   translate(pos.x, pos.y);
   fill(127);
   stroke("red");
   strokeWeight(1);
   ellipseMode(RADIUS);
   ellipse( 0, 0,this.r);
   pop();
  }
}