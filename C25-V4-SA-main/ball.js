class Bola
{
  constructor(x,y,r){
    var ball_options = {
        restitution: 0.95,
        frictionAir:0.01
    }
   this.r = r
      this.Corpo = Bodies.circle(x,y,r,ball_options);
      World.add(world,this.Corpo);
}
mostrar(){
    ellipse(this.Corpo.position.x,this.Corpo.position.y,this.r);




}

  }


