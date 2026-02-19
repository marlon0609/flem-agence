<template>
  <main class="cases-page">
    <section class="cases-hero">
      <div class="container">
        <p class="kicker">Cas clients</p>
        <h1>Des collaborations solides, des résultats visibles.</h1>
        <p class="lead">
          Flem Agence accompagne des marques ambitieuses avec une stratégie claire,
          une création forte et une exécution rigoureuse.
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#cases">Voir les projets</a>
          <a class="btn btn-outline" href="/contact">Parler d’un projet</a>
        </div>
      </div>
    </section>

    <section class="section cases-filters">
      <div class="container">
        <div class="filters">
          <button
            v-for="filter in filters"
            :key="filter"
            :class="['filter', filter === activeFilter ? 'is-active' : '']"
            type="button"
            @click="activeFilter = filter"
          >
            {{ filter }}
          </button>
        </div>
      </div>
    </section>

    <section id="cases" class="section cases-grid">
      <div class="container">
        <div class="grid">
          <RouterLink
            v-for="item in filteredCases"
            :key="item.slug"
            :to="`/cas-clients/${item.slug}`"
            class="case-card"
          >
            <div class="image">
              <img :src="item.cover" :alt="item.title" />
              <div class="overlay"></div>
            </div>
            <div class="card-content">
              <p class="tag">{{ item.tag }}</p>
              <h3>{{ item.title }}</h3>
              <p class="summary">{{ item.summary }}</p>
              <div class="metrics">
                <span v-for="metric in item.metrics" :key="metric">{{ metric }}</span>
              </div>
              <span class="cta">Voir le cas</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section results">
      <div class="container results-inner">
        <p class="kicker">Notre méthode</p>
        <h2>Une approche simple, des résultats mesurables</h2>
        <div class="process">
          <div class="step">
            <h4>Audit & stratégie</h4>
            <p>Analyse, positionnement, plan d’action et objectifs mesurables.</p>
          </div>
          <div class="step">
            <h4>Création & production</h4>
            <p>Design, contenus, assets et production alignés à votre marque.</p>
          </div>
          <div class="step">
            <h4>Diffusion & optimisation</h4>
            <p>Activation, suivi des KPIs et optimisation continue.</p>
          </div>
        </div>
        <div class="stats">
          <div class="stat">+137 campagnes</div>
          <div class="stat">+12 chaînes YouTube</div>
          <div class="stat">+49 marques</div>
        </div>
      </div>
    </section>

    <section class="section testimonials">
      <div class="container">
        <div class="testimonials-head">
          <h2>Ils parlent de Flem Agence</h2>
          <p>Des retours concrets et honnêtes sur notre collaboration.</p>
        </div>
        <div class="testimonials-grid">
          <article class="quote">
            <p>
              “Une équipe impliquée, rapide et précise. Notre lancement a dépassé
              nos objectifs.”
            </p>
            <span>Nabou Fall Akademy · Direction</span>
          </article>
          <article class="quote">
            <p>
              “Une stratégie claire, du contenu de qualité et un vrai suivi.”
            </p>
            <span>Esther Boua Consulting · Fondatrice</span>
          </article>
          <article class="quote">
            <p>
              “Des résultats concrets en peu de temps, surtout sur YouTube.”
            </p>
            <span>Investisseur Africain · Media</span>
          </article>
        </div>
      </div>
    </section>

    <section class="section final-cta">
      <div class="container final-inner">
        <h2>Prêt à écrire votre prochain cas ?</h2>
        <p>Parlons de votre projet et construisons une stratégie qui performe.</p>
        <a class="btn btn-primary" href="/contact">Démarrer un projet</a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

const cases = [
  {
    slug: "nabou-fall-akademy",
    title: "Nabou Fall Akademy",
    tag: "Branding + Lancement",
    summary: "Refonte de l'identité et lancement digital pour une école ambitieuse.",
    metrics: ["+38% engagement", "+4 200 leads", "+3x portée"],
    cover: "/images/nabou-fall-akademy-cover.png",
    categories: ["Branding", "Production"],
  },
  {
    slug: "esther-boua-consulting",
    title: "Esther Boua Consulting",
    tag: "Positionnement + Social",
    summary: "Stratégie de contenu et positionnement premium pour renforcer la visibilité.",
    metrics: ["x2,1 prises de RDV", "+64% trafic", "+27% conversion"],
    cover: "/images/esther-boua-consulting-cover.png",
    categories: ["Branding", "Social Media"],
  },
  {
    slug: "investisseur-africain",
    title: "Investisseur Africain",
    tag: "YouTube + Community",
    summary: "Lancement YouTube et croissance d’audience sur 90 jours.",
    metrics: ["+12k abonnés", "+1,3M vues", "+45% rétention"],
    cover: "/images/investisseur-africain-cover.png",
    categories: ["Social Media", "Growth"],
  },
];

const filters = [
  "Tous",
  "Branding",
  "Social Media",
  "Production",
  "Studio",
  "Growth",
];

const activeFilter = ref("Tous");

const filteredCases = computed(() => {
  if (activeFilter.value === "Tous") {
    return cases;
  }
  return cases.filter((item) => item.categories?.includes(activeFilter.value));
});

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".case-card, .step, .quote").forEach((el) => {
    observer.observe(el);
  });
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped lang="scss">
.cases-page {
  background: #050505;
  color: #f5f5f5;
}

.cases-hero {
  padding: 130px 0 90px;
  background:
    radial-gradient(60% 60% at 10% 10%, rgba(214,176,122,.12), transparent 60%),
    linear-gradient(180deg, rgba(5,5,5,.88), #050505);
}

.cases-hero h1 {
  font-size: clamp(34px, 6vw, 64px);
  max-width: 720px;
  margin: 0 0 18px;
  letter-spacing: -0.03em;
}

.kicker {
  font-size: 11px;
  letter-spacing: .3em;
  text-transform: uppercase;
  color: rgba(255,255,255,.5);
  margin-bottom: 14px;
}

.lead {
  max-width: 620px;
  color: rgba(255,255,255,.75);
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 28px;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.cases-filters {
  padding-top: 0;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter {
  border: 1px solid rgba(255,255,255,.15);
  background: transparent;
  color: rgba(255,255,255,.8);
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 12px;
  cursor: pointer;
  transition: background .2s ease, color .2s ease, border-color .2s ease;
}

.filter.is-active,
.filter:hover {
  background: rgba(255,255,255,.1);
  color: #fff;
  border-color: rgba(255,255,255,.3);
}

.cases-grid {
  padding-top: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  gap: 22px;
}

.case-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background: #0f0f12;
  border: 1px solid rgba(255,255,255,.08);
  min-height: 420px;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity .5s ease, transform .5s ease;
}

.case-card.is-visible,
.step.is-visible,
.quote.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.case-card .image {
  position: relative;
  height: 420px;
  width: 100%;
  overflow: hidden;
  border-radius: 24px 24px 0 0;
}

.case-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.case-card .overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.5) 100%);
}

.card-content {
  padding: 20px 22px 24px;
  display: grid;
  gap: 10px;
}

.tag {
  font-size: 11px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.6);
}

.card-content h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.summary {
  color: rgba(255,255,255,.75);
  font-size: 13px;
  line-height: 1.6;
}

.metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: rgba(255,255,255,.7);
  font-size: 12px;
}

.metrics span {
  background: rgba(255,255,255,.06);
  padding: 6px 10px;
  border-radius: 999px;
}

.cta {
  margin-top: 6px;
  font-size: 12px;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.results {
  padding: 100px 0;
  background: #0b0b0d;
  border-top: 1px solid rgba(255,255,255,.06);
  border-bottom: 1px solid rgba(255,255,255,.06);
}

.results-inner {
  text-align: center;
  max-width: 920px;
}

.results h2 {
  font-size: clamp(26px, 4.6vw, 44px);
  margin: 0 0 40px;
}

.process {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.step {
  background: #0f0f12;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 16px;
  padding: 20px;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity .5s ease, transform .5s ease;
}

.step h4 {
  margin: 0 0 10px;
  font-size: 15px;
}

.step p {
  margin: 0;
  color: rgba(255,255,255,.7);
  font-size: 13px;
  line-height: 1.6;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
}

.stat {
  background: rgba(255,255,255,.06);
  padding: 10px 16px;
  border-radius: 999px;
  font-size: 12px;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.testimonials {
  padding: 90px 0;
}

.testimonials-head {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 30px;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.quote {
  background: #0f0f12;
  border: 1px solid rgba(255,255,255,.08);
  padding: 22px;
  border-radius: 18px;
  color: rgba(255,255,255,.75);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity .5s ease, transform .5s ease;
}

.quote span {
  display: block;
  margin-top: 12px;
  font-size: 12px;
  color: rgba(255,255,255,.5);
}

.final-cta {
  padding: 100px 0 120px;
  text-align: center;
  background: linear-gradient(180deg, #050505, #0b0b0d 60%, #050505);
}

.final-inner {
  max-width: 620px;
}

.final-inner h2 {
  font-size: clamp(26px, 5vw, 44px);
  margin-bottom: 12px;
}

.final-inner p {
  color: rgba(255,255,255,.7);
  margin-bottom: 24px;
}

@media (max-width: 980px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .case-card {
    min-height: 380px;
  }

  .process {
    grid-template-columns: 1fr;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .cases-hero {
    padding: 110px 0 80px;
  }
  .cases-hero h1 {
    font-size: clamp(28px, 7.4vw, 40px);
  }
  .filters {
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 6px;
  }
  .filter {
    flex: 0 0 auto;
  }

  .grid {
    grid-template-columns: 1fr;
  }
  .case-card .image {
    height: 200px;
  }
}
</style>
