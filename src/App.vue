<script setup lang="ts">
  import './style.css';
  import { onMounted, onUnmounted, ref } from 'vue';
  import Ball from './components/Classes/Ball';
  import Brick from './components/Classes/Brick';
  const canvas = ref<HTMLCanvasElement>();
  let requestID:number;
  const winTimes = ref(0);
  let collisionDetected = false;

  onMounted(()=>{
    const ctx = canvas.value?.getContext('2d') as CanvasRenderingContext2D;

      (canvas.value as HTMLCanvasElement).width = window.innerWidth;
      (canvas.value as HTMLCanvasElement).height = window.innerHeight;
      let x = (canvas.value as HTMLCanvasElement).width /2;
      let y = (canvas.value as HTMLCanvasElement).height -30;

      const ball = new Ball(x, y, 10, 'white',1,1);
      const brick = new Brick((canvas.value as HTMLCanvasElement).width/2, (canvas.value as HTMLCanvasElement).height-80, 50, 'white', 0, 0);
      const animate = ()=>{
        ctx.clearRect(0, 0, (canvas.value as HTMLCanvasElement).width, (canvas.value as HTMLCanvasElement).height);
        ball.update();
        ball.draw(ctx);
        brick.draw(ctx,45);
        
        if (ball.collide(brick) && !collisionDetected) {
            winTimes.value++;
            collisionDetected = true;
        } else if (!ball.collide(brick)) {
            collisionDetected = false;
        }
        
        requestID = requestAnimationFrame(animate);
      }
      animate();
   
    window.addEventListener('keydown',(e)=>{
      if(e.key === 'ArrowRight' || e.key === "d"){
        brick.moveRight();
      }
      if(e.key === "ArrowLeft" || e.key ==="a"){
        brick.moveLeft();
      } 
    })

    if(ball.collide(brick)){
          winTimes.value++;
    }
  })

  onUnmounted(()=>{
    cancelAnimationFrame(requestID);
  })
</script>

<template>
  <span class=" absolute top-0 right-0 text-white font-serif pr-8 text-3xl">{{ winTimes }}</span>
  <canvas id="canvas" ref="canvas" class=" w-full h-full min-h-screen bg-black/95 mx-auto"></canvas>
</template>

