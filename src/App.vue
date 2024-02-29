<script setup lang="ts">
  import 'ninja-keys';
  import './style.css';
  import { onMounted, onUnmounted, ref } from 'vue';
  import Ball from './components/Classes/Ball'
  const canvas = ref<HTMLCanvasElement>();
  let requestID:number;

  onMounted(()=>{
    const ctx = canvas.value?.getContext('2d') as CanvasRenderingContext2D;
    if(typeof canvas != undefined){
      (canvas.value as HTMLCanvasElement).width = window.innerWidth;
      (canvas.value as HTMLCanvasElement).height = window.innerHeight;
      let x = (canvas.value as HTMLCanvasElement).width /2;
      let y = (canvas.value as HTMLCanvasElement).height -30;

      const ball = new Ball(x, y, 10, 'white',1,1);
      // ball.draw(ctx);
      // ball.drawRay(ctx,canvas.value as HTMLCanvasElement);
      const animate = ()=>{
        ctx.clearRect(0, 0, (canvas.value as HTMLCanvasElement).width, (canvas.value as HTMLCanvasElement).height);
        ball.update();
        ball.draw(ctx);
        ball.drawRay(ctx,canvas.value as HTMLCanvasElement)
        requestID = requestAnimationFrame(animate);
      }
      animate();
    }
  })

  onUnmounted(()=>{
    cancelAnimationFrame(requestID);
  })
</script>

<template>
  <canvas id="canvas" ref="canvas" class=" w-full h-full min-h-screen bg-black/95 mx-auto"></canvas>
</template>

