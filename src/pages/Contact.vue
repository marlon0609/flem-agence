<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import Studio from "../components/Studio.vue";

onMounted(() => {
  gsap.from(".contact-hero .badge, .contact-hero h1, .contact-hero p, .contact-hero .cta-row", {
    opacity: 0,
    y: 18,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.1,
  });

  gsap.from(".contact-grid > *", {
    opacity: 0,
    y: 24,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.12,
    delay: 0.2,
  });
});
</script>

<template>
  <main class="contact-page">
    <!-- HERO -->
    <section class="contact-hero">
      <div class="overlay"></div>
      <div class="container hero-content">
        <span class="badge">Show us what we're missing</span>
        <h1>Surprenez-nous. Apportez ce qui fera la différence.</h1>
        <p>
          Data-driven, créatif·ve, technophile ou stratège ? Parlons-en. Que vous soyez monteur·se,
          social media manager, graphiste ou créatif·ve dans l'âme, envoyez-nous ce que vous savez faire.
        </p>
        <div class="cta-row">
          <a class="cta primary" href="mailto:hello@flemagence.com">Email</a>
          <a class="cta ghost" href="https://wa.me/22898308282" target="_blank" rel="noopener">
            WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- CONTACT BLOCKS -->
    <section class="section contact-section">
      <div class="container contact-grid">
        <article class="card">
          <h3>Parlons projet</h3>
          <p>Expliquez-nous vos objectifs, vos audiences et vos enjeux, on répond sous 24h ouvrées.</p>
          <div class="infos">
            <span>Email :</span> <a href="mailto:hello@flemagence.com">hello@flemagence.com</a><br />
            <span>Tél :</span> <a href="tel:+22898308282">+228 98 30 82 82</a> / <a href="tel:+22870799999">+228 70 79 99 99</a>
          </div>
        </article>
        <article class="card">
          <h3>Rejoindre l'équipe</h3>
          <p>Envoyez portfolio, liens et motivations. Les profils hybrides sont bienvenus.</p>
          <div class="infos">
            <span>Carrières :</span> <a href="mailto:hello@flemagence.com?subject=Candidature%20spontan%C3%A9e">hello@flemagence.com</a>
          </div>
          <a class="cta slim" href="mailto:hello@flemagence.com?subject=Candidature%20spontan%C3%A9e">Envoyer ma candidature</a>
        </article>
        <article class="card">
          <h3>Rendez-vous</h3>
          <p>Réservez un créneau visio ou passez au studio pour une session découverte.</p>
          <a class="cta slim ghost" href="https://wa.me/22898308282" target="_blank" rel="noopener">Prendre RDV</a>
        </article>
      </div>
    </section>

    <!-- FORMULAIRE -->
    <section class="section form-section">
      <div class="container form-card">
        <div class="form-text">
          <h3>Envoyez-nous un message</h3>
          <p>Partagez vos besoins, votre budget, vos délais : nous revenons vers vous sous 24h ouvrées.</p>
        </div>
        <form class="form-grid">
          <div class="field">
            <label for="name">Nom complet</label>
            <input id="name" name="name" type="text" placeholder="Votre nom" />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="vous@email.com" />
          </div>
          <div class="field">
            <label for="phone">Téléphone</label>
            <input id="phone" name="phone" type="tel" placeholder="+228 ..." />
          </div>
          <div class="field">
            <label for="subject">Sujet</label>
            <input id="subject" name="subject" type="text" placeholder="Objet de votre demande" />
          </div>
          <div class="field full">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Décrivez votre projet, vos objectifs, vos délais..."></textarea>
          </div>
          <button type="submit" class="cta primary submit-btn">Envoyer</button>
        </form>
      </div>
    </section>

    <!-- STUDIO COMPONENT -->
    <section class="section studio-slot">
      <Studio />
    </section>
  </main>
</template>

<style scoped lang="scss">
:root {
  --gold: #d6b07a;
}

.contact-page {
  background: linear-gradient(180deg, #050505, #0b0b0c 40%, #050505);
  color: #f7f7f7;
}

.contact-hero {
  position: relative;
  padding: 130px 0 110px;
  overflow: hidden;
}

.contact-hero .overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(70% 60% at 20% 0%, rgba(214,176,122,.2), transparent 65%),
    radial-gradient(50% 40% at 80% 20%, rgba(214,176,122,.08), transparent 70%),
    linear-gradient(180deg, rgba(0,0,0,.75), #050505 70%);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 820px;
}

.badge {
  display: inline-block;
  padding: 7px 14px;
  border-radius: 999px;
  background: rgba(214,176,122,.16);
  color: var(--gold);
  font-size: 11px;
  letter-spacing: .08em;
  margin-bottom: 18px;
}

.contact-hero h1 {
  font-size: clamp(36px, 6vw, 60px);
  letter-spacing: -0.035em;
  margin-bottom: 14px;
}

.contact-hero p {
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255,255,255,.78);
  margin-bottom: 24px;
}

.cta-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 13px;
  text-decoration: none;
  transition: transform .22s ease, box-shadow .22s ease, background .22s ease, color .22s ease;
}

.cta.primary {
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  color: #0b0b0c;
  box-shadow: 0 14px 32px rgba(214,176,122,.32);
}

.cta.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 40px rgba(214,176,122,.38);
}

.cta.ghost {
  border: 1px solid rgba(255,255,255,.25);
  color: #f5f5f5;
}

.cta.ghost:hover {
  border-color: rgba(255,255,255,.5);
  transform: translateY(-2px);
}

.contact-section {
  padding-top: 70px;
  padding-bottom: 60px;
}

.contact-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.card {
  background: #0d0d0f;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 16px;
  padding: 22px;
  box-shadow: 0 16px 60px rgba(0,0,0,.32);
  display: grid;
  gap: 12px;
}

.card h3 {
  margin: 0;
  font-size: 18px;
}

.card p {
  margin: 0;
  color: rgba(255,255,255,.78);
  line-height: 1.65;
}

.infos {
  color: rgba(255,255,255,.86);
  font-size: 14px;
  line-height: 1.6;
}

.infos span {
  color: rgba(255,255,255,.6);
  margin-right: 6px;
}

.infos a {
  color: #f5f5f5;
}

.cta.slim {
  padding: 10px 14px;
  align-self: flex-start;
}

.cta.slim.ghost {
  border-color: rgba(214,176,122,.4);
}

.studio-slot {
  padding-top: 30px;
  padding-bottom: 100px;
}

.form-section {
  padding-top: 20px;
}

.form-card {
  background: #0d0d0f;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 18px 70px rgba(0,0,0,.32);
  display: grid;
  gap: 20px;
}

.form-text h3 {
  margin: 0 0 8px;
  font-size: 20px;
}

.form-text p {
  margin: 0;
  color: rgba(255,255,255,.78);
  line-height: 1.6;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.field {
  display: grid;
  gap: 6px;
}

.field label {
  font-size: 13px;
  color: rgba(255,255,255,.72);
}

.field input,
.field textarea {
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.04);
  color: #f5f5f5;
  padding: 12px;
  font-size: 14px;
  transition: border-color .2s ease, background .2s ease;
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: rgba(214,176,122,.6);
  background: rgba(255,255,255,.08);
}

.field.full {
  grid-column: 1 / -1;
}

.submit-btn {
  grid-column: 1 / -1;
  justify-self: flex-start;
  padding: 12px 18px;
  border: none;
  cursor: pointer;
}

@media (max-width: 720px) {
  .contact-hero {
    padding: 110px 0 90px;
  }
  .card {
    padding: 18px;
  }
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
