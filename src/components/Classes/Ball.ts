import Brick from "./Brick";

export default class Ball {
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

  draw(ctx:CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x + this.radius >= window.innerWidth || this.x - this.radius <= 0) {
        this.speedX = -this.speedX;
    }

    if (this.y + this.radius >= window.innerHeight || this.y - this.radius <= 0) {
        this.speedY = -this.speedY;
    }
  }

  collide(brick: Brick): boolean {
    let dx = this.x - Math.max(brick.x, Math.min(this.x, brick.x + brick.x));
    let dy = this.y - Math.max(brick.y, Math.min(this.y, brick.y + brick.y));
    return (dx * dx + dy * dy) < (this.radius * this.radius);
}

}