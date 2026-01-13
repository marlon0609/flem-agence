<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
  tl.from([".hero-content .badge", ".hero-content h1", ".hero-content p", ".hero-content .hero-cta"], {
    y: 18,
    opacity: 0,
    stagger: 0.1,
  });

  gsap.from(".service-card", {
    opacity: 0,
    y: 28,
    duration: 0.8,
    stagger: 0.12,
    ease: "power3.out",
    delay: 0.3,
  });
});
</script>

<template>
  <main class="studio-page">
    <!-- HERO -->
    <section class="studio-hero">
      <div class="overlay"></div>
      <div class="container hero-content">
        <span class="badge">Production Audiovisuelle Premium</span>
        <h1>Le Studio Flem</h1>
        <p>
          Situé au cœur de l'agence, notre studio est conçu pour répondre à tous vos besoins
          de création de contenu. De l'enregistrement de podcasts aux productions vidéo complexes.
        </p>
        <a href="https://wa.me/22870799999" target="_blank" class="hero-cta">
          Réserver le Studio
        </a>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="studio-services">
      <div class="container services-grid">

        <div class="service-card">
          <div class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
              <path d="M8 11v1a4 4 0 0 0 8 0v-1" />
              <path d="M12 18v3" />
            </svg>
          </div>
          <h3>Enregistrement Podcast</h3>
          <p>Studio insonorisé avec microphones de qualité broadcast pour une clarté audio exceptionnelle.</p>
        </div>

        <div class="service-card">
          <div class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="7" width="13" height="10" rx="2" />
              <path d="M16 10.5 21 8v8l-5-2.5" />
            </svg>
          </div>
          <h3>Production Vidéo</h3>
          <p>Caméras 4K, éclairage professionnel et fond vert pour des vidéos d'entreprise ou créatives.</p>
        </div>

        <div class="service-card">
          <div class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="6" width="18" height="14" rx="2" />
              <circle cx="12" cy="13" r="3.5" />
              <path d="M7.5 3.5h3L12 6" />
            </svg>
          </div>
          <h3>Shooting Photo</h3>
          <p>Espace modulable pour portraits, produits et lifestyle avec équipement professionnel.</p>
        </div>

      </div>
    </section>

    <!-- FEATURES -->
    <section class="studio-features">
      <div class="container features-layout">

        <div class="feature-image">
          <img src="/images/flem-studio.jpeg" alt="Studio Flem" />
        </div>

        <div class="feature-cards">
          <div class="feature-card highlight">
            <h4>Soundproof Environment</h4>
            <p>Espaces traités acoustiquement offrant le silence parfait pour des enregistrements audio clairs et précis.</p>
          </div>
          <div class="feature-card">
            <h4>High-End Equipment</h4>
            <p>Microphones professionnels, caméras 4K et moniteurs calibrés garantissant un rendu aux standards internationaux.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- OFFERS -->
    <section class="studio-offers">
      <div class="container">
        <div class="offers-header">
          <span class="badge subtle">Nos Formules</span>
          <h2>Offrez à vos projets une touche de perfection</h2>
          <p>
            Des formules haut de gamme pour révéler le meilleur de votre créativité.
            Découvrez l'univers FLEM et choisissez l'option qui sublime vos ambitions.
          </p>
        </div>

        <div class="pricing-grid">
          <article class="plan-card premium">
            <div class="plan-head">
              <span class="plan-title">Prémium</span>
              <p class="plan-tag">Enregistrement + montage</p>
            </div>
            <div class="plan-columns">
              <ul class="plan-features">
                <li>2 Caméras Sony A7 IV</li>
                <li>2 microphones Shure MV7</li>
                <li>2 microphones sans fil DJI</li>
                <li>2 casques filaires Shure SRH440A</li>
                <li>1 enregistreur Zoom PodTrack P4</li>
                <li>Choix du décor</li>
                <li>Assistance technique</li>
              </ul>
              <ul class="plan-features">
                <li class="muted-label">Ce que vous recevez</li>
                <li>Déruh complet</li>
                <li>Retouche colorimétrique</li>
                <li>Retouche audio</li>
                <li>Intro dynamique</li>
                <li>Vidéo avec titre et prête à être publiée</li>
                <li>Images</li>
                <li>Livraison dans 5 jours ouvrés</li>
              </ul>
            </div>
            <div class="plan-price">
              <span class="price-main">97.000F/H</span>
              <span class="price-sub">93.000F/H</span>
              <span class="price-footnote">à partir de 2 heures réservées</span>
            </div>
          </article>

          <article class="plan-card avance">
            <div class="plan-head">
              <span class="plan-title">Avancé</span>
              <p class="plan-tag">Enregistrement + pré-montage</p>
            </div>
            <div class="plan-columns">
              <ul class="plan-features">
                <li>2 Caméras Sony A7 IV</li>
                <li>2 microphones Shure MV7</li>
                <li>2 microphones sans fil DJI</li>
                <li>2 casques filaires Shure SRH440A</li>
                <li>1 enregistreur Zoom PodTrack P4</li>
                <li>Choix du décor</li>
                <li>Assistance technique</li>
              </ul>
              <ul class="plan-features">
                <li class="muted-label">Ce que vous recevez</li>
                <li>Synchronisation audio</li>
                <li>Rushs bruts des caméras</li>
                <li>Prémontage</li>
                <li>Images</li>
                <li>Livraison sous 48 à 72h ouvrées</li>
              </ul>
            </div>
            <div class="plan-price">
              <span class="price-main">67.000F/H</span>
              <span class="price-sub">63.000F/H</span>
              <span class="price-footnote">à partir de 2 heures réservées</span>
            </div>
          </article>

          <article class="plan-card essentiel">
            <div class="plan-head">
              <span class="plan-title">Essentiel</span>
              <p class="plan-tag">Enregistrement uniquement</p>
            </div>
            <div class="plan-columns">
              <ul class="plan-features">
                <li>2 Caméras Sony A7 IV</li>
                <li>2 microphones Shure MV7</li>
                <li>2 microphones sans fil DJI</li>
                <li>2 casques filaires Shure SRH440A</li>
                <li>1 enregistreur Zoom PodTrack P4</li>
                <li>Choix du décor</li>
                <li>Assistance technique</li>
              </ul>
              <ul class="plan-features">
                <li class="muted-label">Ce que vous recevez</li>
                <li>Fichiers audios bruts</li>
                <li>Rushs bruts des caméras</li>
                <li>Images</li>
                <li>Livraison sous 48h ouvrées</li>
              </ul>
            </div>
            <div class="plan-price">
              <span class="price-main">47.000F/H</span>
              <span class="price-sub">43.000F/H</span>
              <span class="price-footnote">à partir de 2 heures réservées</span>
            </div>
          </article>
        </div>

        <p class="offers-footnote">
          Flem Studio, le Studio qui démocratise la création de contenu à Lomé.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
:root {
  --gold: #d6b07a;
  --card: #0f0f12;
  --muted: rgba(255,255,255,.72);
}

.studio-page {
  background: #050505;
  color: #f7f7f7;
  min-height: 100vh;
}

/* HERO */
.studio-hero {
  position: relative;
  padding: 140px 0 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.studio-hero .overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(50% 35% at 50% 0%, rgba(214,176,122,.2), transparent 70%),
    linear-gradient(180deg, rgba(5,5,5,.7), #050505 70%),
    url('/images/flem-studio.jpeg') center/cover no-repeat;
  filter: saturate(.7);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
}

.badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(214,176,122,.18);
  color: var(--gold);
  font-size: 11px;
  letter-spacing: .08em;
  margin-bottom: 24px;
}

.studio-hero h1 {
  font-size: clamp(42px, 6vw, 72px);
  font-weight: 600;
  letter-spacing: -0.04em;
  margin-bottom: 16px;
}

.studio-hero p {
  font-size: 16px;
  line-height: 1.7;
  color: var(--muted);
  margin-bottom: 34px;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 30px;
  border-radius: 999px;
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  color: #000;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 14px 36px rgba(214,176,122,.3);
  transition: transform .25s ease, box-shadow .25s ease;
}

.hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 40px rgba(214,176,122,.38);
}

/* SERVICES */
.studio-services {
  padding: 90px 0 120px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.service-card {
  background: var(--card);
  border-radius: 22px;
  padding: 28px;
  border: 1px solid rgba(255,255,255,.06);
  box-shadow: 0 20px 70px rgba(0,0,0,.25);
  transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: rgba(214,176,122,.45);
  box-shadow: 0 24px 80px rgba(0,0,0,.3);
}

.service-card .icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(214,176,122,.12);
  color: var(--gold);
  display: grid;
  place-items: center;
  margin-bottom: 16px;
  transition: background .25s ease, color .25s ease, box-shadow .25s ease;
}

.service-card:hover .icon {
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  color: #0b0b0c;
  box-shadow: 0 12px 30px rgba(214,176,122,.4);
}

.service-card h3 {
  font-size: 17px;
  margin-bottom: 10px;
}

.service-card p {
  font-size: 14px;
  line-height: 1.65;
  color: var(--muted);
}

/* FEATURES */
.studio-features {
  padding: 0 0 160px;
}

.features-layout {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 42px;
  align-items: center;
}

.feature-image {
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0 24px 90px rgba(0,0,0,.35);
}

.feature-image img {
  width: 100%;
  display: block;
  filter: saturate(1.05) contrast(1.05);
}

.feature-cards {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.feature-card {
  background: var(--card);
  border-radius: 18px;
  padding: 22px 24px;
  border: 1px solid rgba(255,255,255,.08);
  box-shadow: 0 18px 65px rgba(0,0,0,.3);
}

.feature-card.highlight {
  border-color: rgba(214,176,122,.6);
  box-shadow: 0 18px 65px rgba(214,176,122,.12);
}

.feature-card h4 {
  font-size: 15px;
  margin-bottom: 8px;
  color: #fefefe;
}

.feature-card p {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.6;
}

/* OFFERS */
.studio-offers {
  padding: 40px 0 120px;
}

.offers-header {
  text-align: center;
  max-width: 820px;
  margin: 0 auto 48px;
}

.offers-header h2 {
  font-size: clamp(30px, 4vw, 48px);
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: -0.03em;
}

.offers-header p {
  color: var(--muted);
  line-height: 1.7;
  font-size: 15px;
}

.badge.subtle {
  background: rgba(214,176,122,.1);
  color: var(--gold);
  margin-bottom: 16px;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}

.plan-card {
  background: #0b0b0c;
  border-radius: 18px;
  border: 1px solid #e3a74e;
  padding: 0 0 22px;
  box-shadow: 0 20px 80px rgba(0,0,0,.35);
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
  color: #f7f7f7;
}

.plan-head {
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  color: #1c1204;
  padding: 18px 20px 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.plan-title {
  font-size: 18px;
  font-weight: 800;
  color: #1c1204;
}

.plan-tag {
  color: #3c2a10;
  font-size: 13px;
  font-weight: 600;
}

.plan-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  padding: 0 20px;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.55;
}

.plan-features li::before {
  content: "•";
  color: var(--gold);
  margin-right: 6px;
}

.plan-features .muted-label {
  text-transform: uppercase;
  letter-spacing: .08em;
  font-size: 11px;
  color: rgba(255,255,255,.82);
  margin-bottom: 4px;
  font-weight: 700;
}

.plan-price {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 20px 4px;
}

.price-main {
  display: inline-block;
  align-self: flex-start;
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  color: #0b0b0c;
  padding: 8px 12px;
  border-radius: 12px;
  font-weight: 900;
  font-size: 18px;
  letter-spacing: .01em;
}

.price-sub {
  color: rgba(255,255,255,.92);
  font-size: 14px;
  font-weight: 700;
}

.price-footnote {
  color: rgba(255,255,255,.6);
  font-size: 11px;
}

.offers-footnote {
  text-align: center;
  color: var(--muted);
  margin: 12px 0 32px;
  font-size: 14px;
}

.booking-content {
  background: #0b0b0c;
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  justify-content: space-between;
}

.booking-label {
  background: #fff;
  color: #000;
  border-radius: 10px;
  padding: 8px 14px;
  font-weight: 700;
  font-size: 13px;
}

.booking-contact {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #f7f7f7;
  font-weight: 600;
}

.contact-line {
  font-size: 14px;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .features-layout {
    grid-template-columns: 1fr;
  }
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 720px) {
  .studio-hero {
    padding: 110px 0 100px;
  }
  .services-grid {
    grid-template-columns: 1fr;
  }
  .service-card {
    padding: 24px;
  }
  .pricing-grid {
    grid-template-columns: 1fr;
  }
  .plan-columns {
    grid-template-columns: 1fr;
  }
  .booking-content {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
