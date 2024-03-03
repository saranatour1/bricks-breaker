export default class Brick {
  speedX:number;
  speedY:number;
  x:number;
  y:number;
  radius: number;
  color:string;
  constructor(x:number, y:number, radius:number, color:string, speedX:number, speedY:number) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.speedX = speedX;
      this.speedY = speedY;
  }
  draw(ctx: CanvasRenderingContext2D, size: number) {
    const radius = size / 2;
    const rad = 90 * Math.PI / 180;
    ctx.save();
    ctx.translate(this.x + radius, this.y + radius);
    ctx.rotate(rad);
    ctx.translate(-radius, -radius);

    ctx.beginPath();
    ctx.arc(radius, radius, radius, Math.PI, 0);
    ctx.lineTo(size, size);
    ctx.arc(radius, size, radius, 0, Math.PI);
    ctx.lineTo(0, 0);
    ctx.closePath();

    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
}

  moveRight(){
    this.x +=6;
    if(this.x >= window.innerWidth -50){
      this.x = window.innerWidth-50;
    } 
  }

  moveLeft(){
    this.x -=6;
    if(this.x <= 30){
      this.x = 30;
    } 
  }

  goBackToCenter(){
    this.x = window.innerWidth/2;
  }

  collide(){

  }
}