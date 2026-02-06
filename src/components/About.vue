<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const images = [
  { src: "/images/agence/image-agence-1.png", alt: "Flem Agence" },
  { src: "/images/agence/image-agence-2.png", alt: "Flem Agence" },
  { src: "/images/agence/image-agence-3.png", alt: "Flem Agence" },
  { src: "/images/agence/image-agence-4.png", alt: "Flem Agence" },
  { src: "/images/agence/image-agence-5.png", alt: "Flem Agence" },
];

const activeIndex = ref(0);
let intervalId;

onMounted(() => {
  intervalId = window.setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % images.length;
  }, 5000);
});

onBeforeUnmount(() => {
  if (intervalId) {
    window.clearInterval(intervalId);
  }
});
</script>

<template>
  <section class="section about" id="about">
    <div class="container grid">

      <div class="left">
        <h1>L’audace au service de <br>votre communication.</h1>

        <p>
          Chez Flem, nous croyons que les marques se noient trop souvent dans des
          communications uniformes, prévisibles et sans âme.
          <br /><br />
          <strong>Flem est née de cette volonté de faire autrement.</strong>
          Nous créons des communications audacieuses qui ne se contentent pas de
          parler, mais qui captivent, émeuvent et transforment.
          <br /><br />
          Notre mission est d’être le partenaire stratégique des marques
          visionnaires, en les aidant à raconter leur histoire de manière
          authentique et percutante.
        </p>

        <a href="#services" class="btn btn-primary">
          Découvrir nos services
        </a>
      </div>

      <div class="right">
        <div class="gallery-tunnel">
          <div
            v-for="(image, index) in images"
            :key="image.src"
            class="frame"
            :class="{ 'is-active': index === activeIndex }"
            :style="{ '--i': index }">
            <img :src="image.src" :alt="image.alt" />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  padding-top: 90px;
}

.grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  align-items: center;
  gap: 40px;
}

.left h1 {
  font-size: clamp(58px, 3.2vw, 40px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  max-width: 800px;
}

.left p {
  max-width: 620px;
  font-size: 16px;
  line-height: 1.8;
  color: var(--muted);
  margin-bottom: 32px;
}

.left p strong {
  color: white;
  font-weight: 500;
}

.right {
  position: relative;
  min-height: 420px;
}

.gallery-tunnel {
  position: relative;
  width: 100%;
  height: 420px;
  perspective: 1200px;
}

.frame {
  position: absolute;
  inset: 0;
  border-radius: 22px;
  overflow: hidden;
  border: 3px solid #e3a74e;
  box-shadow: 0 24px 60px rgba(0,0,0,.45);
  transform-style: preserve-3d;
  transition:
    transform .8s ease,
    opacity .8s ease,
    filter .8s ease;
  transform:
    translateX(calc(var(--offset-x, 12px)))
    translateY(calc(var(--i) * 14px))
    translateZ(calc(var(--i) * -60px))
    rotateY(calc(var(--i) * -2deg));
  opacity: 0.7;
}

.frame:nth-child(even) {
  --offset-x: -12px;
}

.frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.95) contrast(1.05);
}

.frame:not(.is-active) img {
  filter: blur(6px) brightness(0.9) saturate(0.9);
  mask-image: linear-gradient(90deg, transparent 0%, #000 18%, #000 82%, transparent 100%);
}

.frame.is-active {
  transform: translateZ(0) rotateY(-4deg);
  opacity: 1;
  z-index: 2;
}

.frame.is-active img {
  filter: saturate(1.05) contrast(1.05);
  mask-image: none;
}

@media (max-width: 980px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .right {
    order: 2;
  }

  .gallery-tunnel {
    height: 340px;
  }
}

@media (max-width: 640px) {
  .gallery-tunnel {
    height: 300px;
  }
}
</style>
