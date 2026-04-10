<template>
  <main class="cases-page" id="top">
    <!-- HERO -->
    <section class="hero section" id="hero">
      <div class="container hero-content">
        <p class="kicker">Portfolio Agence</p>
        <h1>
          Des services détaillés,
          des cas réels,
          des résultats mesurables.
        </h1>
        <p class="lead">
          Cette page présente comment Flem Agence intervient : nos expertises, nos livrables et les types de projets que nous produisons pour nos clients.
        </p>
        <div class="hero-actions">
          <a class="btn btn-light" href="#services">Voir les services</a>
          <RouterLink class="btn btn-outline" to="/contact">Demander un devis</RouterLink>
        </div>
      </div>
    </section>

    <!-- JUMP PILLS -->
    <section class="service-jump" id="services">
      <div class="container jump-pills">
        <a v-for="pill in pills" :key="pill.href" :href="pill.href">{{ pill.label }}</a>
      </div>
    </section>

    <!-- SERVICE BANDS -->
    <section
      v-for="service in services"
      :key="service.id"
      class="service-band section"
      :class="service.dark ? 'is-dark' : 'is-light'"
      :id="service.id"
    >
      <div class="container service-layout">
        <header class="service-copy reveal">
          <p class="service-index">{{ service.index }}</p>
          <h2>{{ service.title }}</h2>
          <p>{{ service.description }}</p>
          <h3>Livrables détaillés</h3>
          <ul class="service-list">
            <li v-for="item in service.deliverables" :key="item">{{ item }}</li>
          </ul>
          <p class="capture-hint">Captures des travaux réalisés pour nos clients sur ce service.</p>
          <a class="text-link" :href="service.link" target="_blank" rel="noopener">Voir l'offre {{ service.title }}</a>
        </header>

        <!-- Rails (2 blocs) -->
        <article
          v-for="(rail, railIndex) in service.rails"
          :key="railIndex"
          class="service-rail reveal"
          data-rail
        >
          <div class="rail-viewport">
            <div class="rail-track" :style="{ transform: `translateX(-${railState[service.id][railIndex] * 100}%)` }">
              <a
                v-for="(slide, slideIndex) in rail"
                :key="slideIndex"
                class="rail-slide"
                :href="slide.src"
                target="_blank"
                rel="noopener"
              >
                <div
                  class="img-wrap"
                  :style="slide.src ? {} : placeholderStyle(slide.fallback)"
                >
                  <img v-if="slide.src" :src="slide.src" :alt="slide.title" loading="lazy" />
                </div>
                <span class="capture-chip">Capture client</span>
                <h4>{{ slide.title }}</h4>
                <p>{{ slide.text }}</p>
              </a>
            </div>
          </div>
          <div class="rail-controls">
            <button class="rail-btn" type="button" @click="move(service.id, railIndex, -1)" :disabled="railState[service.id][railIndex] === 0">‹</button>
            <div class="rail-dots" aria-label="Pagination">
              <button
                v-for="(_, dotIndex) in rail"
                :key="dotIndex"
                type="button"
                class="rail-dot"
                :class="{ 'is-active': railState[service.id][railIndex] === dotIndex }"
                @click="setIndex(service.id, railIndex, dotIndex)">
              </button>
            </div>
            <button class="rail-btn" type="button" @click="move(service.id, railIndex, 1)" :disabled="railState[service.id][railIndex] === rail.length - 1">›</button>
          </div>
        </article>
      </div>
    </section>

    <!-- IMPACT / COUNTERS -->
    <section class="section results" id="impact">
      <div class="container">
        <p class="kicker">Impact Global</p>
        <h2>Une exécution complète, de la stratégie aux résultats.</h2>
        <p class="lead">L'approche Flem aligne technologie, marketing, création et social media dans un seul système de croissance.</p>
        <div class="stats" id="stats">
          <div class="stat-pill" v-for="counter in counters" :key="counter.label">
            <strong class="counter" :data-target="counter.value">0</strong>
            <span>{{ counter.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FINALE -->
    <section class="section final-cta" id="contact">
      <div class="container final-card reveal">
        <div>
          <p class="kicker">Prochain projet</p>
          <h2>Tu veux cette même structure pour ta marque ?</h2>
          <p class="lead small">On construit une proposition détaillée service par service, avec planning, livrables et objectifs mesurables.</p>
          <RouterLink class="btn btn-gold" to="/contact">Entrer en contact</RouterLink>
        </div>
        <img :src="assetOrPlaceholder('/images/image-agence.png')" alt="Équipe Flem Agence" loading="lazy" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, onBeforeUnmount, reactive } from "vue";
import { RouterLink } from "vue-router";

// Pills
const pills = [
  { label: "Technology", href: "#technology" },
  { label: "Growth Marketing", href: "#growth" },
  { label: "Creative Studio", href: "#creative" },
  { label: "Social Media", href: "#social" },
];

// Services and rails data
const services = [
  {
    id: "technology",
    index: "01",
    title: "Technology",
    description: "Nous concevons des expériences digitales robustes : sites web, intégrations, hébergement sécurisé et analytics pour piloter vos performances.",
    deliverables: [
      "Sites web vitrine, e-commerce et landing pages",
      "Intégration CRM, automatisations et tunnel de conversion",
      "Audit UX et optimisation de parcours",
      "Tracking analytics, dashboards et reporting décisionnel",
      "Maintenance technique et sécurité continue",
    ],
    link: "https://flemagence.com/services",
    dark: false,
    rails: [
      [
        { title: "Plateforme média", text: "Architecture, UX et développement premium.", src: assetOrNull("/images/business-reussite-cover.jpg") },
        { title: "Site corporate", text: "Positionnement clair et pages conversion.", src: assetOrNull("/images/esther-boua-consulting-cover.png") },
        { title: "Landing acquisition", text: "Pages d'acquisition optimisées.", src: assetOrNull("/images/lfdt-philippe-fabignon-cover.jpg") },
      ],
      [
        { title: "Pilotage analytics", text: "Tableaux de bord trafic, leads, ROI.", src: assetOrNull("/images/investisseur-africain-cover.png") },
        { title: "Optimisation CRO", text: "Amélioration continue de la conversion.", src: assetOrNull("/images/business-reussite-cover.jpg") },
        { title: "Maintenance évolutive", text: "Suivi technique proactif.", src: assetOrNull("/images/esther-boua-consulting-cover.png") },
      ],
    ],
  },
  {
    id: "growth",
    index: "02",
    title: "Growth Marketing",
    description: "Stratégies data-driven : acquisition, contenus, paid et optimisation continue.",
    deliverables: [
      "Stratégie d'acquisition multi-canal",
      "Gestion de campagnes Social Ads & Search Ads",
      "Calendrier éditorial et contenus performance",
      "Community management orienté business",
      "Rapports KPI et recommandations",
    ],
    link: "https://flemagence.com/services",
    dark: true,
    rails: [
      [
        { title: "Audience Growth", text: "Scale d'audience YouTube & social.", src: assetOrNull("/images/investisseur-africain-cover.png") },
        { title: "Acquisition qualifiée", text: "Campagnes ciblées CPA maîtrisé.", src: assetOrNull("/images/esther-boua-consulting-cover.png") },
        { title: "Tunnel de conversion", text: "Parcours complet jusqu'au RDV.", src: assetOrNull("/images/selly-doridot-immopreneurs-cover.jpg") },
      ],
      [
        { title: "Stratégie éditoriale", text: "Plan de contenu pour visibilité.", src: assetOrNull("/images/business-reussite-cover.jpg") },
        { title: "Paid Media", text: "Gestion budgets et créas ROAS.", src: assetOrNull("/images/lfdt-philippe-fabignon-cover.jpg") },
        { title: "Optimisation KPI", text: "Tests et itérations data.", src: assetOrNull("/images/investisseur-africain-cover.png") },
      ],
    ],
  },
  {
    id: "creative",
    index: "03",
    title: "Creative Studio",
    description: "Contenus visuels marquants : design, motion, production vidéo, direction artistique.",
    deliverables: [
      "Direction artistique de campagne",
      "Production photo et vidéo",
      "Montage, motion design et formats social",
      "Branding visuel et templates",
      "Copywriting orienté impact",
    ],
    link: "https://flemagence.com/studio",
    dark: false,
    rails: [
      [
        { title: "Direction artistique", text: "Univers visuel différenciant.", src: assetOrNull("/images/business-reussite-cover.jpg") },
        { title: "Production vidéo", text: "Contenus premium formats courts/longs.", src: assetOrNull("/images/selly-doridot-immopreneurs-cover.jpg") },
        { title: "Création ads", text: "Assets orientés performance.", src: assetOrNull("/images/lfdt-philippe-fabignon-cover.jpg") },
      ],
      [
        { title: "Brand content", text: "Séries cohérentes pour le discours.", src: assetOrNull("/images/esther-boua-consulting-cover.png") },
        { title: "Formats social", text: "Déclinaisons reels/shorts/stories.", src: assetOrNull("/images/investisseur-africain-cover.png") },
        { title: "Design system", text: "Templates et chartes d'exécution.", src: assetOrNull("/images/business-reussite-cover.jpg") },
      ],
    ],
  },
  {
    id: "social",
    index: "04",
    title: "Social Media",
    description: "Réseaux sociaux comme canal de croissance : éditorial, activations créatives, KPI.",
    deliverables: [
      "Audit des plateformes et repositionnement",
      "Stratégie de contenu mensuelle par canal",
      "Community management et modération",
      "Social ads et amplification",
      "Rapport mensuel : portée, engagement, leads",
    ],
    link: "https://flemagence.com/services",
    dark: true,
    rails: [
      [
        { title: "Activation social", text: "Concepts éditoriaux engageants.", src: assetOrNull("/images/investisseur-africain-cover.png") },
        { title: "Image de marque", text: "Présence premium sur canaux clés.", src: assetOrNull("/images/esther-boua-consulting-cover.png") },
        { title: "Croissance communauté", text: "Audience qualifiée et fidélisation.", src: assetOrNull("/images/selly-doridot-immopreneurs-cover.jpg") },
      ],
      [
        { title: "Influence", text: "Partenariats créateurs alignés business.", src: assetOrNull("/images/lfdt-philippe-fabignon-cover.jpg") },
        { title: "Social Ads", text: "Boost des contenus stratégiques.", src: assetOrNull("/images/business-reussite-cover.jpg") },
        { title: "Pilotage mensuel", text: "Décisions basées sur la data.", src: assetOrNull("/images/investisseur-africain-cover.png") },
      ],
    ],
  },
];

// Counters
const counters = [
  { label: "campagnes", value: 137 },
  { label: "chaînes YouTube", value: 12 },
  { label: "marques accompagnées", value: 49 },
];

// Rail state map
const railState = reactive(
  Object.fromEntries(
    services.map((s) => [s.id, s.rails.map(() => 0)])
  )
);

function move(serviceId, railIndex, delta) {
  const current = railState[serviceId][railIndex];
  const max = services.find((s) => s.id === serviceId).rails[railIndex].length - 1;
  railState[serviceId][railIndex] = Math.min(Math.max(current + delta, 0), max);
}

function setIndex(serviceId, railIndex, index) {
  const max = services.find((s) => s.id === serviceId).rails[railIndex].length - 1;
  railState[serviceId][railIndex] = Math.min(Math.max(index, 0), max);
}

// Reveal + counters
let revealObserver;
let counterObserver;

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  items.forEach((el) => revealObserver.observe(el));
}

function animateCounters() {
  const els = document.querySelectorAll('.counter');
  const duration = 1500;
  els.forEach((el) => {
    const target = Number(el.dataset.target || 0);
    if (!Number.isFinite(target) || target <= 0) return;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      el.textContent = `+${Math.floor(target * progress)}`;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = `+${target}`;
    };
    requestAnimationFrame(tick);
  });
}

function initCounters() {
  const statsNode = document.getElementById('stats');
  if (!statsNode) return;
  if (!('IntersectionObserver' in window)) {
    animateCounters();
    return;
  }
  counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });
  counterObserver.observe(statsNode);
}

// Asset helpers
function assetOrNull(path) {
  // Assume file exists; if not, caller will render gradient placeholder
  return path;
}

function assetOrPlaceholder(path, fallback = '#1b1b1f') {
  return path || fallback;
}

function placeholderStyle(label = 'capture') {
  return {
    background: 'linear-gradient(135deg, #1b1b1f, #0f0f12)',
    color: '#fff',
    display: 'grid',
    placeItems: 'center',
    minHeight: '240px',
    borderRadius: '18px',
    border: '1px solid rgba(255,255,255,.08)',
    fontSize: '12px',
    letterSpacing: '.1em',
    textTransform: 'uppercase',
  };
}

onMounted(() => {
  initReveal();
  initCounters();
});

onBeforeUnmount(() => {
  if (revealObserver) revealObserver.disconnect();
  if (counterObserver) counterObserver.disconnect();
});
</script>

<style scoped lang="scss">
:global(body) {
  background: #050505;
}

.cases-page {
  background: #050505;
  color: #f5f5f5;
}

.section {
  padding: 80px 0;
}

.container {
  width: min(1180px, calc(100% - 12vw));
  margin: 0 auto;
}

.hero {
  padding: 130px 0 90px;
  background:
    radial-gradient(60% 60% at 10% 10%, rgba(214,176,122,.12), transparent 60%),
    linear-gradient(180deg, rgba(5,5,5,.88), #050505);
}

.hero h1 {
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

.btn {
  height: 44px;
  padding: 0 18px;
  border-radius: 999px;
  font-size: 13px;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: transform .18s ease, background .18s ease, border-color .18s ease, opacity .18s ease;
  color: inherit;
}

.btn:active { transform: translateY(1px); }

.btn-light { background: #fff; color: #000; }
.btn-light:hover { opacity: .92; }

.btn-outline { background: transparent; color: #fff; border-color: rgba(255,255,255,.4); }
.btn-outline:hover { border-color: rgba(255,255,255,.7); }

.btn-gold {
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  color: #0b0b0c;
  font-weight: 700;
  box-shadow: 0 16px 36px rgba(214,176,122,.35);
}

.service-jump {
  padding: 20px 0 10px;
}

.jump-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.jump-pills a {
  border: 1px solid rgba(255,255,255,.15);
  background: transparent;
  color: rgba(255,255,255,.8);
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 12px;
  text-decoration: none;
  transition: background .2s ease, color .2s ease, border-color .2s ease;
}

.jump-pills a:hover {
  background: rgba(255,255,255,.1);
  color: #fff;
  border-color: rgba(255,255,255,.3);
}

.service-band {
  background: #0f0f12;
}

.service-band.is-light { background: #0f0f12; }
.service-band.is-dark { background: #0b0b0d; }

.service-layout {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 26px;
}

.service-copy h2 {
  margin: 0 0 12px;
  font-size: clamp(26px, 4.6vw, 44px);
}

.service-index {
  font-size: 12px;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: rgba(255,255,255,.5);
}

.service-copy h3 { margin: 16px 0 10px; font-size: 16px; }
.service-copy p { color: rgba(255,255,255,.75); line-height: 1.65; }

.service-list {
  padding-left: 18px;
  color: rgba(255,255,255,.82);
  line-height: 1.6;
}

.capture-hint { color: rgba(255,255,255,.6); font-size: 13px; }

.text-link {
  color: #d6b07a;
  text-decoration: none;
  font-weight: 600;
}

.service-rail {
  background: #0b0b0d;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 18px 60px rgba(0,0,0,.3);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity .5s ease, transform .5s ease;
}

.service-rail.is-visible,
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.rail-viewport {
  overflow: hidden;
  border-radius: 12px;
}

.rail-track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  transition: transform .35s ease;
}

.rail-slide {
  display: block;
  padding: 12px;
  text-decoration: none;
  color: inherit;
}

.img-wrap {
  position: relative;
  width: 100%;
  height: 220px;
  border-radius: 14px;
  overflow: hidden;
  background: #111;
  border: 1px solid rgba(255,255,255,.08);
  display: block;
}

.rail-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.capture-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,.08);
  margin: 10px 0 6px;
  font-size: 11px;
}

.rail-slide h4 { margin: 4px 0 6px; font-size: 16px; }
.rail-slide p { margin: 0; color: rgba(255,255,255,.75); font-size: 13px; line-height: 1.6; }

.rail-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 12px;
}

.rail-btn {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,.2);
  background: rgba(255,255,255,.06);
  color: #fff;
  cursor: pointer;
}

.rail-btn:disabled { opacity: .4; cursor: not-allowed; }

.rail-dots {
  display: flex;
  gap: 6px;
}

.rail-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,.4);
  background: transparent;
  cursor: pointer;
}

.rail-dot.is-active { background: #fff; }

.results {
  padding: 100px 0;
  background: #0b0b0d;
  border-top: 1px solid rgba(255,255,255,.06);
  border-bottom: 1px solid rgba(255,255,255,.06);
}

.results h2 { font-size: clamp(26px, 4.6vw, 44px); margin: 0 0 24px; }

.stats {
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
}

.stat-pill {
  background: rgba(255,255,255,.06);
  padding: 14px 18px;
  border-radius: 12px;
  min-width: 150px;
  text-align: center;
}

.counter { font-size: 28px; display: block; margin-bottom: 4px; }
.stat-pill span { font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: rgba(255,255,255,.7); }

.final-cta {
  padding: 100px 0 120px;
  text-align: center;
  background: linear-gradient(180deg, #050505, #0b0b0d 60%, #050505);
}

.final-card {
  display: grid;
  gap: 18px;
  align-items: center;
  justify-items: center;
}

.final-card img {
  width: min(520px, 100%);
  border-radius: 18px;
  box-shadow: 0 18px 60px rgba(0,0,0,.32);
}

.final-card .btn-gold { margin-top: 10px; }

/* Reveal */
.reveal { opacity: 0; transform: translateY(12px); transition: opacity .5s ease, transform .5s ease; }
.reveal.is-visible { opacity: 1; transform: translateY(0); }

@media (max-width: 980px) {
  .service-layout { grid-template-columns: 1fr; }
  .service-rail .img-wrap { height: 200px; }
}

@media (max-width: 720px) {
  .section { padding: 64px 0; }
  .hero { padding: 110px 0 80px; }
  .hero h1 { font-size: clamp(28px, 7.4vw, 40px); }
  .jump-pills { overflow-x: auto; white-space: nowrap; padding-bottom: 6px; }
  .service-rail { padding: 14px; }
  .rail-track { grid-auto-columns: 100%; }
  .stats { gap: 12px; }
  .final-card img { width: 100%; }
}
</style>
