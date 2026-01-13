<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { Application } from '@splinetool/runtime';

const canvasRef = ref(null);
let splineApp;

onMounted(() => {
  if (!canvasRef.value) {
    return;
  }

  splineApp = new Application(canvasRef.value);
  splineApp.load('https://prod.spline.design/1JSkxF9JkoqP6cQZ/scene.splinecode');
});

onBeforeUnmount(() => {
  if (splineApp) {
    splineApp.dispose();
    splineApp = null;
  }
});
</script>

<template>
  <div class="robot">
    <canvas ref="canvasRef" aria-label="Robot Flem Agence"></canvas>
    <!-- <img src="/images/robot-flem.png" alt="Robot Flem Agence" /> -->
  </div>
</template>

<style scoped lang="scss">
.robot {
  position: absolute;
  right: clamp(-36px, 2vw, 4%);
  bottom: clamp(20px, 10vw, 100px);
  width: clamp(260px, 45vw, 450px);
  height: clamp(260px, 45vw, 450px);
  animation: float 6s ease-in-out infinite;
  z-index: 1;
  pointer-events: none;
}

.robot canvas {
  width: 100%;
  height: 100%;
  border: 0;
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-18px); }
  100% { transform: translateY(0); }
}

</style>
