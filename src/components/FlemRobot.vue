<template>
  <div class="robot">
    <img src="/images/robot-flem.png" alt="Robot Flem Agence" />
  </div>
</template>

<style scoped lang="scss">
.robot {
  position: absolute;
  right: 4%;
  bottom: 100px;
  width: 450px;
  animation: float 6s ease-in-out infinite;
  pointer-events: none;
}

.robot img {
  width: 100%;
  filter: drop-shadow(0 20px 40px rgba(0,0,0,.6));
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
  }
}
</style>
