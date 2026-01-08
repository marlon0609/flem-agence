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
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="LinkedIn">IN</a>
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="TikTok">TT</a>
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
  gap: 14px;
  margin-top: 14px;
}

.socials a {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: rgba(255,255,255,.06);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  transition: background .25s ease;
}

.socials a:hover {
  background: rgba(255,255,255,.15);
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
  background: #d6b07a;
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
