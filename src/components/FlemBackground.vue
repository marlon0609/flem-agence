<template>
  <div class="flem-bg">
    <!-- Halo lumineux -->
    <div class="glow glow-1"></div>
    <div class="glow glow-2"></div>

    <!-- Lignes topographiques -->
    <svg class="lines" viewBox="0 0 1440 900" preserveAspectRatio="none">
      <path
        v-for="i in 8"
        :key="i"
        d="M0,200 C240,260 480,140 720,180 960,220 1200,260 1440,200"
        :style="{ animationDelay: `${i * 2}s` }"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.flem-bg {
  position: fixed;
  inset: 0;
  z-index: -2;
  background: #0a0a0b;
  overflow: hidden;
}

.flem-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    60deg,
    rgba(255,255,255,0.02) 0px,
    rgba(255,255,255,0.02) 1px,
    transparent 1px,
    transparent 12px
  );
  opacity: 0.35;
  animation: textureMove 40s linear infinite;
}

.flem-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    120deg,
    rgba(255,255,255,0.02) 0px,
    rgba(255,255,255,0.02) 1px,
    transparent 1px,
    transparent 12px
  );
  opacity: 0.35;
  animation: textureMove 40s linear infinite;
}

@keyframes textureMove {
  from { background-position: 0 0; }
  to { background-position: 400px 400px; }
}

/* ===== HALO LUMINEUX ===== */
.glow {
  position: absolute;
  width: 600px;
  height: 600px;
  filter: blur(120px);
  opacity: 0.25;
  animation: float 30s ease-in-out infinite;
}

.glow-1 {
  background: radial-gradient(circle, #d6b07a 0%, transparent 60%);
  top: 10%;
  left: 5%;
}

.glow-2 {
  background: radial-gradient(circle, #9c7a52 0%, transparent 60%);
  bottom: 10%;
  right: 10%;
  animation-delay: 8s;
}

/* ===== LIGNES ===== */
.lines {
  position: absolute;
  inset: -10%;
  width: 120%;
  height: 120%;
}

.lines path {
  fill: none;
  stroke: rgba(214, 176, 122, 0.12);
  stroke-width: 1;
  animation: drift 22s linear infinite;
}

/* ===== ANIMATIONS ===== */
@keyframes drift {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-160px);
  }
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-60px); }
  100% { transform: translateY(0); }
}
</style>
