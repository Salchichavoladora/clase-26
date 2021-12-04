class Base {
    constructor(x, y,width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      // aplica nueva configuracion 
      push();
      //eje 0 del objeto a posision en x  y
      translate(this.body.position.x,this.body.position.y);
      //cambiar el angulo del objeto
      rotate(angle);
      imageMode(CENTER);
      /*strokeWeight(4);
      stroke("green");
      fill(255);*/
      image(this.image,0,0, this.width, this.height);
      //anteriores configuraciones
      pop();
    }
  };
  