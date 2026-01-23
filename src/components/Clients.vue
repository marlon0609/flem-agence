<template>
  <section class="section references">
    <div class="container">

      <h2>Nos références</h2>
      <p class="subtitle">
        Des projets ambitieux | Une vision claire | Un accompagnement sur-mesure.
      </p>

      <div class="wall">
        <img
          v-for="(logo, i) in logos"
          :key="i"
          :src="logo"
          alt=""
        />
      </div>

    </div>
  </section>
</template>

<script setup>
const logos = [
  "/logos/nabou-fall-akademy-logo.jpg",
  "/logos/ia-logo.png",
  "/logos/esther-boua-logo.png",
  "/logos/lfdt-logo.png",
  "/logos/logo-immopreneurs.png",
  "/logos/bug-ayif.png",
  "/logos/case-cia-logo.jpg",
  "/logos/yas-logo.png",
  "/logos/logo-diva.png",
  "/logos/bug-ayif.png",
  "/logos/aws-logo.jpg",
  "/logos/logo-acl.png",
  "/logos/business-et-reussites-logo.png",
  "/logos/afrika-nunya-logo.jpg",
  "/logos/ayif-regional-logo.jpg",
  "/logos/bug-afrika-nunya.jpg",
  "/logos/logo-mastershine.jpg",
  "/logos/joker-group-logo.jpeg",
  "/logos/logo-air-innovation.png",
  "/logos/bug-ayif.png",
  "/logos/tevi-logo.png",
  "/logos/klemou-halayo.png",
  "/logos/avila-logo.png",
  "/logos/riad-lyla-logo.png",
  "/logos/mahyeli-logo.png"
];
</script>

<style scoped lang="scss">
.references {
  background: #111;
  color: #eee;
  padding: 100px 0;
}

h2 {
  text-align: center;
  margin-bottom: 8px;
}

.subtitle {
  text-align: center;
  margin-bottom: 50px;
  color: #fff;
}

.wall {
  background: #111;
  border-radius: 28px;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  align-items: center;
}

.wall img {
  max-width: 110px;
  margin: auto;
  filter: grayscale(100%);
  opacity: .8;
  transition: all .25s ease;
}

.wall img:hover {
  filter: none;
  opacity: 1;
}

@media (max-width: 900px) {
  .wall {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
