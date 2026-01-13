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
  right: 4%;
  bottom: 100px;
  width: 450px;
  height: 450px;
  animation: float 6s ease-in-out infinite;
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

@media (max-width: 900px) {
  .robot {
    position: static;
    margin: 40px auto 0;
    max-width: 90vw;
  }
}
</style>
