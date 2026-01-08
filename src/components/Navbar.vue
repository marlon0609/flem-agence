<template>
  <header class="navbar">
    <div class="container nav-inner">

      <!-- LOGO (SANS GLASS) -->
      <RouterLink to="/" class="logo">
        <img src="../assets/logo-flem-agence.png" alt="Flem Agence" />
      </RouterLink>

      <!-- MENU (AVEC GLASS) -->
      <nav class="menu glass-menu">
        <RouterLink to="/" class="nav-item">Accueil</RouterLink>
        <RouterLink to="/agence" class="nav-item">Agence</RouterLink>
        <RouterLink to="/studio" class="nav-item">Studio</RouterLink>
        <RouterLink to="/services" class="nav-item">Services</RouterLink>
        <RouterLink to="/cas-clients" class="nav-item">Cas Clients</RouterLink>
        <RouterLink to="/process" class="nav-item">Méthode</RouterLink>
        <RouterLink to="/contact" class="nav-item">Contact</RouterLink>
      </nav>

      <!-- CTA -->
      <a
        href="https://wa.me/22870799999?text=Bonjour%20Flem%20Agence,%20je%20souhaite%20réserver%20le%20studio."
        target="_blank"
        rel="noopener"
        class="cta"
      >
        Réserver au Studio
      </a>

    </div>
  </header>
</template>


<script setup>
import { RouterLink } from "vue-router";

import { onMounted } from "vue";
import gsap from "gsap";

let lastScroll = 0;

onMounted(() => {
  // Apparition initiale
  gsap.from(".navbar", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });

  // Effet scroll (hide / show)
  window.addEventListener("scroll", () => {
    const current = window.scrollY;

    if (current > lastScroll && current > 120) {
      // Scroll down → cacher
      gsap.to(".navbar", {
        y: -80,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      // Scroll up → afficher
      gsap.to(".navbar", {
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    lastScroll = current;
  });
});

</script>

<style scoped lang="scss">
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 72px;
  background: rgba(5,5,5,.45);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255,255,255,.06);
}

.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* LOGO — AUCUN GLASS */
.logo img {
  height: 28px;
  display: block;
}

/* MENU GLASS */
.glass-menu {
  display: flex;
  gap: 6px;
  padding: 6px;
  border-radius: 999px;
  background: rgba(255,255,255,.06);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,.12);
}

/* ITEMS */
.nav-item {
  position: relative;
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 13px;
  color: rgba(255,255,255,.75);
  text-decoration: none;
  transition:
    background .25s ease,
    color .25s ease,
    box-shadow .25s ease;
}

/* Hover */
.nav-item:hover {
  color: white;
  background: rgba(255,255,255,.08);
}

/* ACTIF (PAGE COURANTE) */
.router-link-active {
  color: white;
  background: rgba(255,255,255,.14);
  box-shadow:
    inset 0 0 0 1px rgba(255,255,255,.25),
    0 8px 30px rgba(0,0,0,.35);
}

/* Glow subtil */
.router-link-active::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    rgba(214,176,122,.35),
    rgba(255,255,255,.08)
  );
  opacity: .25;
  pointer-events: none;
}

/* CTA */
.cta {
  background: linear-gradient(135deg, #d6b07a, #9c7a52);
  color: #111;
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .glass-menu {
    display: none;
  }
}

</style>
