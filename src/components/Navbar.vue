<template>
  <header class="navbar">
    <div class="container nav-inner">

      <!-- LOGO -->
      <RouterLink to="/" class="logo" @click="closeMobile">
        <img src="../assets/logo-flem-agence.png" alt="Flem Agence" />
      </RouterLink>

      <!-- MENU DESKTOP -->
      <nav class="menu glass-menu">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-item"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="nav-actions">
        <!-- <div class="lang-switch" role="group" aria-label="Sélecteur de langue">
          <button
            type="button"
            :class="['lang-btn', { active: lang === 'fr' }]"
            @click="setLang('fr')"
          >
            FR
          </button>
          <button
            type="button"
            :class="['lang-btn', { active: lang === 'en' }]"
            @click="setLang('en')"
          >
            EN
          </button>
        </div> -->

        <!-- CTA -->
        <a
          href="https://wa.me/22870799999?text=Bonjour%20Flem%20Agence,%20je%20souhaite%20r%C3%A9server%20le%20studio."
          target="_blank"
          rel="noopener"
          class="cta desktop-cta"
        >
          {{ ctaLabel }}
        </a>

        <!-- Burger -->
        <button
          class="burger"
          type="button"
          aria-label="Ouvrir le menu"
          :aria-expanded="isOpen"
          @click="isOpen = !isOpen"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

    </div>

    <!-- MOBILE MENU -->
    <transition name="slide">
      <div v-if="isOpen" class="mobile-menu">
        <nav class="mobile-nav">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="mobile-item"
            @click="closeMobile"
          >
            {{ item.label }}
          </RouterLink>
        </nav>
        <a
          href="https://wa.me/22870799999?text=Bonjour%20Flem%20Agence,%20je%20souhaite%20r%C3%A9server%20le%20studio."
          target="_blank"
          rel="noopener"
          class="mobile-cta"
        >
          {{ ctaLabel }}
        </a>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { computed, onMounted, ref } from "vue";
import gsap from "gsap";

let lastScroll = 0;
const isOpen = ref(false);
const lang = ref("fr");

const labels = {
  fr: {
    cta: "Réserver au Studio",
    items: [
      { to: "/", label: "Accueil" },
      { to: "/agence", label: "Agence" },
      { to: "/services", label: "Services" },
      { to: "/cas-clients", label: "Cas Clients" },
      // { to: "/process", label: "Méthode" },
      { to: "/studio", label: "Studio" },
      { to: "/contact", label: "Contact" },
    ],
  },
  en: {
    cta: "Book the Studio",
    items: [
      { to: "/", label: "Home" },
      { to: "/agence", label: "Agency" },
      { to: "/services", label: "Services" },
      // { to: "/cas-clients", label: "Case Studies" },
      { to: "/process", label: "Method" },
      { to: "/studio", label: "Studio" },
      { to: "/contact", label: "Contact" },
    ],
  },
};

const navItems = computed(() => labels[lang.value].items);
const ctaLabel = computed(() => labels[lang.value].cta);

const setLang = (value) => {
  lang.value = value;
  localStorage.setItem("lang", value);
  document.documentElement.lang = value;
};

const closeMobile = () => {
  isOpen.value = false;
};

onMounted(() => {
  const saved = localStorage.getItem("lang");
  if (saved === "fr" || saved === "en") {
    setLang(saved);
  } else if (navigator.language?.startsWith("en")) {
    setLang("en");
  } else {
    setLang("fr");
  }

  gsap.from(".navbar", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });

  window.addEventListener("scroll", () => {
    const current = window.scrollY;

    if (current > lastScroll && current > 120) {
      gsap.to(".navbar", {
        y: -80,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
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
  background: rgba(5,5,5,.45);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255,255,255,.06);
}

.nav-inner {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo img {
  height: 28px;
  display: block;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  clip-path: inset(4% round 4px);
}

.glass-menu {
  display: flex;
  gap: 6px;
  padding: 6px;
  border-radius: 999px;
  background: rgba(255,255,255,.06);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,.12);
}

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

.nav-item:hover {
  color: white;
  background: rgba(255,255,255,.08);
}

.router-link-active {
  color: white;
  background: rgba(255,255,255,.14);
  box-shadow:
    inset 0 0 0 1px rgba(255,255,255,.25),
    0 8px 30px rgba(0,0,0,.35);
}

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

.lang-switch {
  display: inline-flex;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.15);
  background: rgba(255,255,255,.06);
}

.lang-btn {
  border: none;
  background: transparent;
  color: rgba(255,255,255,.75);
  padding: 8px 10px;
  font-size: 12px;
  cursor: pointer;
  transition: background .2s ease, color .2s ease;
}

.lang-btn.active {
  background: linear-gradient(135deg, #d6b07a, #e6c48a);
  color: #1a1205;
  font-weight: 700;
}

.cta {
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  color: #111;
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
}

.burger {
  display: none;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.06);
  backdrop-filter: blur(10px);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  padding: 8px 10px;
}

.burger span {
  width: 100%;
  height: 2px;
  background: #fff;
  border-radius: 999px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform .25s ease, opacity .25s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.mobile-menu {
  display: none;
  background: rgba(5,5,5,.95);
  border-bottom: 1px solid rgba(255,255,255,.08);
  backdrop-filter: blur(12px);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 16px;
}

.mobile-item {
  color: rgba(255,255,255,.85);
  text-decoration: none;
  padding: 12px;
  border-radius: 12px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.08);
}

.mobile-cta {
  display: block;
  margin: 0 16px 16px;
  text-align: center;
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  color: #111;
  padding: 12px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
}

@media (max-width: 1050px) {
  .glass-menu {
    display: none;
  }
  .desktop-cta {
    display: none;
  }
  .burger {
    display: inline-flex;
  }
  .mobile-menu {
    display: block;
  }
}
</style>
