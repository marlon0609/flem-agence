<template>
  <section class="big-statement">
    <!-- Overlays -->
    <div class="overlay"></div>
    <div class="grain"></div>

    <div class="container content">
      <span class="label">Notre vision</span>

      <h2>
        Nous unissons la stratégie,<br />
        la créativité et la technologie<br />
        pour générer un impact durable.
      </h2>

      <div class="divider"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.big-statement {
  position: relative;
  min-height: 98vh;
  display: flex;
  align-items: center;
  background: url("/images/team-flem-agence.jpg") center / cover no-repeat;
  margin-top: 20px;
  overflow: hidden;
}

/* Overlay sombre et élégant */
.overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(0,0,0,.6),
      rgba(0,0,0,.88)
    );
  z-index: 1;
}

/* Grain cinéma très subtil */
.grain {
  position: absolute;
  inset: 0;
  background-image: url("/images/grain.png");
  opacity: 0.06;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 2;
}

/* CONTENU */
.content {
  position: relative;
  z-index: 3;
  padding: 100px 0;
}

/* Label institutionnel */
.label {
  display: inline-block;
  font-size: 11px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: #e3a74e;
  margin-bottom: 34px;
}

/* TITRE */
h2 {
  font-size: clamp(36px, 4.6vw, 68px);
  font-weight: 500;
  line-height: 1.04;
  letter-spacing: -0.04em;
  max-width: 960px;
}

/* Ligne de signature */
.divider {
  margin-top: 50px;
  width: 500px;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(251, 170, 50, 0.829),
    rgba(255,255,255,.12)
  );
  opacity: .55;
}

/* RESPONSIVE */
@media (max-width: 700px) {
  .big-statement {
    min-height: 65vh;
    margin-top: 100px;
  }

  h2 {
    font-size: clamp(30px, 7.2vw, 46px);
    line-height: 1.08;
  }
}
</style>
