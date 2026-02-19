<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import Studio from "../components/Studio.vue";

onMounted(() => {
  gsap.from(".services-hero .badge, .services-hero h1, .services-hero p, .services-hero .hero-cta", {
    opacity: 0,
    y: 18,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.1,
  });

  gsap.from(".capability-card", {
    opacity: 0,
    y: 26,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.12,
    delay: 0.2,
  });
});
</script>

<template>
  <main class="services-page">
    <!-- HERO -->
    <section class="services-hero">
      <div class="overlay"></div>
      <div class="container hero-content">
        <span class="badge">L'audace au service de votre communication</span>
        <h1>Une agence 360 au service de vos projets ambitieux</h1>
        <p>
          Chez Flem, nous accompagnons les marques, entrepreneurs et personnalités publiques à
          chaque étape de leur communication. <br>
          De la réflexion stratégique à la production de contenus et à leur diffusion, nous construisons
          des dispositifs cohérents, créatifs et orientés résultats.
        </p>
        <a href="#capabilities" class="hero-cta">Découvrir nos services</a>
      </div>
      <div class="hero-visual">
        <img src="/images/team-flem-agence.jpg" alt="Flem Agence" />
      </div>
    </section>

    <!-- INTRO -->
    <section class="section intro">
      <div class="container intro-content">
        <div class="block">
          <h2>Une approche globale, agile et créative !</h2>
          <h4> <strong>Chaque projet est unique.</strong> </h4> 
          Nous commençons par comprendre votre vision, vos objectifs et votre audience afin<br>
          de proposer des solutions sur-mesure, alignées avec votre identité et vos ambitions.<br>
        </div>
      </div>
    </section>

    <!-- CAPABILITIES -->
    <section id="capabilities" class="section capabilities">
      <div class="container capabilities-grid">
        <article class="capability-card">
          <div class="cap-text">
            <h4>Technology</h4>
            <p>
              Nous concevons des expériences digitales robustes : sites web, intégrations, hébergement
              sécurisé et analytics pour piloter vos performances.
            </p>
          </div>
          <ul class="cap-list">
            <li>Sites web</li>
            <li>Intégrations systèmes</li>
            <li>Technologies & solutions</li>
            <li>Hébergement cloud</li>
            <li>CRM</li>
            <li>Analytics</li>
            <li>Services IA</li>
          </ul>
        </article>

        <article class="capability-card">
          <div class="cap-text">
            <h4>Growth Marketing</h4>
            <p>
              Nos équipes marketing pilotent des stratégies data-driven pour accélérer votre croissance :
              social ads, paid search, influence et contenus performants.
            </p>
          </div>
          <ul class="cap-list">
            <li>Social Media</li>
            <li>Studio créatif</li>
            <li>Paid Social</li>
            <li>Paid Search</li>
            <li>Influence</li>
            <li>Community Management</li>
          </ul>
        </article>

        <article class="capability-card">
          <div class="cap-text">
            <h4>Creative Studio</h4>
            <p>
              Nous produisons des contenus visuels marquants : motion, animation, design système, naming
              et copywriting pour faire vivre vos récits de marque.
            </p>
          </div>
          <ul class="cap-list">
            <li>Contenus créatifs</li>
            <li>Motion</li>
            <li>Animation</li>
            <li>Design UX</li>
            <li>Copywriting</li>
            <li>Design systems</li>
            <li>Prototypage rapide</li>
            <li>Naming</li>
          </ul>
        </article>
      </div>
    </section>

    <Studio />

    <!-- CLOSING CTA -->
    <section class="section closing">
      <div class="container closing-card">
        <div class="closing-text">
          <h3>Pourquoi choisir Flem ?</h3>
          <p>
            Nous concevons des stratégies percutantes, des sites performants et des contenus qui résonnent
            avec votre audience. Collaborons pour faire grandir votre marque et générer des résultats mesurables.
          </p>
          <a href="/contact" class="hero-cta alt">Entrer en contact</a>
        </div>
        <div class="closing-visual">
          <img src="/images/team-flem-agence.jpg" alt="Équipe Flem en production" />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
:root {
  --gold: #e3a74e;
  --bg-deep: #060607;
}

.services-page {
  background: linear-gradient(180deg, #050505, #0b0b0c 40%, #050505);
  color: #f7f7f7;
}

/* HERO */
.services-hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  padding: 72px 0;
  overflow: hidden;
}

.services-hero .overlay {
  position: absolute;
  inset: 0;
  width: 0%;
  height: 100%;
  background-color: #050505;
}

.hero-visual {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.05 !important;
  filter: blur(5px);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;  
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 820px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 0;
  margin-left: 180px;
}

.badge {
  display: inline-block;
  padding: 7px 16px;
  border-radius: 999px;
  background: rgba(214,176,122,.16);
  color: var(--gold);
  font-size: 11px;
  letter-spacing: .08em;
  margin-bottom: 16px;
}

.services-hero h1 {
  font-size: clamp(38px, 6vw, 64px);
  letter-spacing: -0.03em;
  margin-bottom: 16px;
}

.services-hero p {
  max-width: 680px;
  color: rgba(255,255,255,.78);
  line-height: 1.7;
  font-size: 16px;
  margin-bottom: 26px;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 26px;
  border-radius: 999px;
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  color: #0b0b0c;
  font-weight: 700;
  font-size: 13px;
  text-decoration: none;
  box-shadow: 0 14px 38px rgba(214,176,122,.3);
  transition: transform .22s ease, box-shadow .22s ease;
}

.hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 44px rgba(214,176,122,.38);
}

.hero-cta.alt {
  background: #f1f1f1;
  color: #0b0b0c;
  box-shadow: none;
}

.intro {
  background: transparent;
}

.intro-content {
  display: grid;
  gap: 26px;
}

.intro h2 {
  font-size: 26px;
  margin-bottom: 12px;
}

.intro h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.intro p {
  color: rgba(255,255,255,.78);
  line-height: 1.7;
  font-size: 15px;
}

.capabilities {
  padding-top: 40px;
}

.capabilities-grid {
  display: grid;
  gap: 18px;
}

.capability-card {
  background: #0d0d0f;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 18px;
  padding: 26px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 24px;
  box-shadow: 0 18px 70px rgba(0,0,0,.32);
  transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
}

.capability-card:hover {
  transform: translateY(-6px);
  border-color: rgba(214,176,122,.35);
  box-shadow: 0 24px 80px rgba(0,0,0,.4);
}

.capability-card h4 {
  font-size: 18px;
  margin: 0 0 8px;
}

.capability-card p {
  color: rgba(255,255,255,.78);
  line-height: 1.65;
}

.cap-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  align-content: start;
  color: rgba(255,255,255,.9);
}

.cap-list li {
  position: relative;
  padding-left: 16px;
  font-size: 14px;
  transition: color .2s ease;
}

.cap-list li::before {
  content: "➜";
  position: absolute;
  left: 0;
  color: var(--gold);
  transform: skew(-12deg);
  transition: transform .2s ease, color .2s ease;
}

.capability-card:hover .cap-list li::before {
  transform: skew(0deg);
  color: #e3a74e;
}

.studio-cta {
  padding-top: 40px;
}

.studio-card {
  background: radial-gradient(100% 140% at 10% 0%, rgba(214,176,122,.16), transparent 40%), #0b0b0c;
  border: 1px solid rgba(214,176,122,.2);
  border-radius: 24px;
  padding: 32px;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 26px;
  box-shadow: 0 22px 90px rgba(0,0,0,.35);
}

.icon-row {
  display: flex;
  gap: 12px;
  font-size: 20px;
  color: var(--gold);
  margin-bottom: 10px;
}

.studio-copy h2 {
  font-size: 30px;
  margin: 0 0 12px;
}

.studio-copy p {
  color: rgba(255,255,255,.78);
  line-height: 1.7;
  margin-bottom: 18px;
}

.studio-visual {
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 20px 70px rgba(0,0,0,.35);
}

.studio-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.closing {
  padding-top: 20px;
  padding-bottom: 120px;
}

.closing-card {
  background: #0d0d0f;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,.08);
  padding: 28px;
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 22px;
  box-shadow: 0 18px 70px rgba(0,0,0,.32);
  align-items: center;
}

.closing-visual {
  order: 1;
}

.closing-text {
  order: 2;
}

.closing-text h3 {
  font-size: 24px;
  margin-bottom: 12px;
}

.closing-text p {
  color: rgba(255,255,255,.8);
  line-height: 1.7;
  margin-bottom: 18px;
}

.closing-visual {
  border-radius: 16px;
  overflow: hidden;
}

.closing-visual img {
  width: 100%;
  display: block;
  object-fit: cover;
}

.studio-icons {
  display: flex;
  gap: 12px;
  margin-bottom: 22px;
}

.studio-icons .icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(227,167,78,.14);
  color: #e3a74e;
  display: grid;
  place-items: center;
  transition: background .25s ease, color .25s ease, box-shadow .25s ease;
}

.studio-icons .icon:hover {
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  color: #0b0b0c;
  box-shadow: 0 10px 28px rgba(227,167,78,.35);
}

@media (max-width: 1024px) {
  .capability-card,
  .studio-card,
  .closing-card {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .services-hero {
    padding: 110px 0 90px;
    min-height: auto;
    text-align: center;
  }
  .services-hero h1 {
    font-size: clamp(28px, 7.4vw, 40px);
  }
  .services-hero p br {
    display: none;
  }
  .hero-content {
    margin-left: 0;
    align-items: center;
    padding: 28px 0 12px;
  }
  .badge {
    font-size: 10px;
    padding: 6px 12px;
  }
  .hero-cta {
    width: 100%;
    max-width: 260px;
  }
  .capability-card {
    padding: 22px;
  }
  .cap-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px 14px;
  }
  .studio-card,
  .closing-card {
    padding: 22px;
  }
  .closing-visual {
    order: 0;
  }
  .closing-text {
    order: 0;
  }
}
</style>
