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



  // draws ray, but how to make this ray reflect off surface?
  drawRay(ctx:CanvasRenderingContext2D, canvas:HTMLCanvasElement) {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    let endX, endY;

    //center angle
    const angle = Math.atan2(canvas.height / 2 - this.y, canvas.width / 2 - this.x);

    if (Math.abs(Math.cos(angle)) > Math.abs(Math.sin(angle))) {
        endX = canvas.width / 2 + (canvas.width / 2 - this.x) / Math.abs(Math.cos(angle));
        endY = this.y + (endX - this.x) * Math.tan(angle);
    } else {
        endY = canvas.height / 2 + (canvas.height / 2 - this.y) / Math.abs(Math.sin(angle));
        endX = this.x + (endY - this.y) / Math.tan(angle);
    }

    const surfaceNormalAngle = Math.PI / 2 - angle;
    const reflectionAngle = angle - surfaceNormalAngle;

    const reflectionEndX = endX + Math.cos(reflectionAngle) * canvas.width;
    const reflectionEndY = endY + Math.sin(reflectionAngle) * canvas.height;

    ctx.setLineDash([10, 10]);
    ctx.lineTo(reflectionEndX, -reflectionEndY);
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.closePath();
    ctx.setLineDash([]);
}

  collide(){

  }
}