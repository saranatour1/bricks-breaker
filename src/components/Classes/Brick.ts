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
    ctx.beginPath();
    ctx.rect(this.x - size / 2, this.y - size / 2, size, size);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  collide(){

  }
}