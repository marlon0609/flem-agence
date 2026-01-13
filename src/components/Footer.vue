<template>
  <footer class="footer">

    <div class="newsletter">
      <h3>Recevez les insights Flem</h3>
      <p>Stratégie, créativité et tendances — directement dans votre boîte mail.</p>

      <form @submit.prevent>
        <input type="email" placeholder="Votre email" />
        <button>S’inscrire</button>
      </form>
    </div>

    <div class="container footer-grid">

      <!-- BRAND -->
      <div class="brand">
        <img src="../assets/logo-flem-agence.png" alt="Flem Agence" />
        <p>
          Agence de communication créative.<br />
          Nous unissons stratégie, créativité et technologie
          pour générer des résultats concrets.
        </p>
      </div>

      <!-- NAVIGATION -->
      <div class="col">
        <h4>Navigation</h4>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/agence">Agence</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/cas-clients">Cas Clients</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>

      <!-- CONTACT -->
      <div class="col">
        <h4>Contact</h4>
        <p>hello@flemagence.com</p>
        <p>+228 98 30 82 82 | +228 70 79 99 99</p>

        <div class="socials">
          <a href="https://www.instagram.com/flemagence" target="_blank" rel="noreferrer" aria-label="Instagram">
            <span class="sr-only">Instagram</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <circle cx="18" cy="6" r="1.4" fill="currentColor" />
            </svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61575752127858" target="_blank" rel="noreferrer" aria-label="Facebook">
            <span class="sr-only">Facebook</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <path d="M13.4 10.2H15V8h-1.7c-1.8 0-3 1-3 3v1.3H8v2.2h2.3V18h2.3v-3.5h1.7l.3-2.2h-2z" fill="currentColor" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/flem-agence-559a03361/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <span class="sr-only">LinkedIn</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <path d="M8.3 17.1V10H6v7.1h2.3ZM7.1 8.8c.7 0 1.2-.5 1.2-1.1 0-.7-.5-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.1 1.2 1.1ZM18 17.1v-4.2c0-2-1.1-3-2.6-3a2.3 2.3 0 0 0-2.1 1.2h-.1V10H11c.1 1 .1 7.1.1 7.1h2.3v-3.9c0-.2 0-.3.1-.5.2-.3.5-.7 1.1-.7.7 0 1 .5 1 1.3v3.8H18Z" fill="currentColor" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/@flemagence" target="_blank" rel="noreferrer" aria-label="TikTok">
            <span class="sr-only">TikTok</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <path d="M15.6 9.2c.6.5 1.3.8 2 .9V8.1c-.4-.1-.7-.2-1-.4a2.7 2.7 0 0 1-1-1v-.2h-1.7v8a1.6 1.6 0 0 1-3.2 0 1.7 1.7 0 0 1 2-1.7v-1.8a3.5 3.5 0 0 0-3.7 3.5 3.5 3.5 0 0 0 7 0v-4a5 5 0 0 0 1.6.3Z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>

    </div>

    <div class="awards">
      <span>🏆 Agence créative</span>
      <span>★ Excellence & innovation</span>
    </div>

    <!-- SEPARATOR -->
    <div class="footer-separator"></div>

    <!-- BOTTOM -->
    <div class="bottom">
      © {{ year }} Flem Agence — Tous droits réservés
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const year = new Date().getFullYear();

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".footer-grid > *", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer",
      start: "top 85%",
    },
  });
});

</script>

<style scoped lang="scss">
.footer {
  background: #050505;
  border-top: 1px solid rgba(255,255,255,.08);
  padding: 90px 0 30px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 60px;
}

.brand img {
  height: 26px;
  margin-bottom: 16px;
}

.brand p {
  font-size: 13px;
  color: rgba(255,255,255,.7);
  line-height: 1.7;
  max-width: 320px;
}

.col h4 {
  font-size: 13px;
  margin-bottom: 16px;
  font-weight: 500;
}

.col a,
.col p {
  display: block;
  font-size: 13px;
  color: rgba(255,255,255,.65);
  margin-bottom: 10px;
  text-decoration: none;
}

.col a:hover {
  color: white;
}

.socials {
  display: flex;
  gap: 12px;
  margin-top: 14px;
}

.socials a {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #0c0c0e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f5f5f5;
  transition: background .25s ease, color .25s ease, box-shadow .25s ease;
}

.socials a:hover {
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  color: #0b0b0c;
  box-shadow: 0 12px 30px rgba(214,176,122,.35);
}

.socials svg {
  width: 18px;
  height: 18px;
  stroke: currentColor;
  fill: none;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.bottom {
  margin-top: 60px;
  text-align: center;
  font-size: 12px;
  color: rgba(255,255,255,.45);
}

/* Responsive */
@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.newsletter {
  max-width: 520px;
  margin: 0 auto 80px;
  text-align: center;
}

.newsletter h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.newsletter p {
  font-size: 14px;
  color: rgba(255,255,255,.7);
}

.newsletter form {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.newsletter input {
  flex: 1;
  padding: 12px;
  border-radius: 999px;
  border: none;
}

.newsletter button {
  padding: 12px 18px;
  border-radius: 999px;
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  border: none;
  cursor: pointer;
}

.awards {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 28px;
  font-size: 13px;
  opacity: .75;
}

.footer-separator {
  width: 100%;
  height: 2px;
  margin: 50px auto 30px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,.35),
    transparent
  );
  opacity: .8;
}
</style>
