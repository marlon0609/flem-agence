<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import gsap from "gsap";

const logos = [
  { src: "/logos/nabou-fall-akademy-logo.jpg", alt: "Nabou Fall Akademy" },
  { src: "/logos/ia-logo.png", alt: "Investisseur Africain" },
  { src: "/logos/esther-boua-logo.png", alt: "Esther Boua" },
  { src: "/logos/lfdt-logo.png", alt: "LFDT" },
  { src: "/logos/logo-immopreneurs.png", alt: "Immopreneurs" },
  { src: "/logos/bug-ayif.png", alt: "AYIF" },
  { src: "/logos/case-cia-logo.jpg", alt: "Case CIA" },
  { src: "/logos/yas-logo.png", alt: "Yas" },
  { src: "/logos/logo-diva.png", alt: "Diva" },
  { src: "/logos/aws-logo.jpg", alt: "AWS" },
  { src: "/logos/logo-acl.png", alt: "ACL" },
  { src: "/logos/business-et-reussites-logo.png", alt: "Business & Réussites" },
  { src: "/logos/afrika-nunya-logo.jpg", alt: "Afrika Nunya" },
  { src: "/logos/ayif-regional-logo.jpg", alt: "AYIF Regional" },
  { src: "/logos/bug-afrika-nunya.jpg", alt: "Afrika Nunya" },
  { src: "/logos/logo-mastershine.jpg", alt: "Mastershine" },
  { src: "/logos/joker-group-logo.jpeg", alt: "Joker Group" },
  { src: "/logos/logo-air-innovation.png", alt: "Air Innovation" },
  { src: "/logos/tevi-logo.png", alt: "Tevi" },
  { src: "/logos/klemou-halayo.png", alt: "Klemou Halayo" },
  { src: "/logos/avila-logo.png", alt: "Avila" },
  { src: "/logos/riad-lyla-logo.png", alt: "Riad Lyla" },
  { src: "/logos/mahyeli-logo.png", alt: "Mahyeli" },
];

const featureSlides = [
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-0.jpg" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-1.jpg" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-2.jpg" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-3.jpg" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-4.jpg" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-5.png" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-6.png" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-7.png" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-8.png" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-9.png" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-10.png" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-11.png" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-12.png" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-13.png" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-14.png" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-15.png" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-16.png" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-17.png" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-18.png" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-19.png" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-20.png" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-21.png" },
  { title: "Adapté à vos besoins", tag: "Décor", image: "/images/decors/decor-22.png" },
];

const activeFeature = ref(0);
let featureTimer;

const wallImages = [
  "/images/decors/decor-0.jpg",
  "/images/decors/decor-1.jpg",
  "/images/decors/decor-2.jpg",
  "/images/decors/decor-3.jpg",
  "/images/decors/decor-4.jpg",
  "/images/decors/decor-5.png",
  "/images/decors/decor-6.png",
  "/images/decors/decor-7.png",
  "/images/decors/decor-8.png",
  "/images/decors/decor-9.png",
  "/images/decors/decor-10.png",
  "/images/decors/decor-11.png",
  "/images/decors/decor-12.png",
  "/images/decors/decor-13.png",
  "/images/decors/decor-14.png",
  "/images/decors/decor-15.png",
  "/images/decors/decor-16.png",
  "/images/decors/decor-17.png",
  "/images/decors/decor-18.png",
  "/images/decors/decor-19.png",
  "/images/decors/decor-20.png",
  "/images/decors/decor-21.png",
  "/images/decors/decor-22.png",
];

const wallVariants = [
  "xl",
  "sm-tall",
  "md-tall",
  "sm",
  "lg",
  "sm",
  "wide",
  "sm",
  "md",
  "tall",
  "sm",
  "lg",
  "sm",
  "wide",
  "md-tall",
  "sm",
];

const wallTiles = computed(() =>
  wallImages.slice(0, wallVariants.length).map((src, index) => ({
    src,
    variant: wallVariants[index],
    key: `${index}-${src}`,
  })),
);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
  tl.from([".hero-content .hero-chip", ".hero-content h1", ".hero-content p", ".hero-content .hero-cta"], {
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

  // Animation du texte du mur (images statiques pour alléger le chargement)
  gsap.from(".wall-intro h2, .wall-intro .wall-cta", {
    opacity: 0,
    y: 20,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.12,
    delay: 0.45,
  });

  featureTimer = window.setInterval(() => {
    activeFeature.value = (activeFeature.value + 1) % featureSlides.length;
  }, 5000);
});

onBeforeUnmount(() => {
  if (featureTimer) {
    window.clearInterval(featureTimer);
  }
});

const goPrevFeature = () => {
  activeFeature.value =
    (activeFeature.value - 1 + featureSlides.length) % featureSlides.length;
};

const goNextFeature = () => {
  activeFeature.value = (activeFeature.value + 1) % featureSlides.length;
};
</script>

<template>
  <main class="studio-page">
    <!-- HERO -->
    <section class="studio-hero">
      <div class="hero-media">
        <video
          class="hero-video"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
        >
          <source src="https://flemagence.com/flem-showreel.mp4?inline=true" type="video/mp4" />
        </video>
        <div class="hero-gradient"></div>
      </div>

      <div class="container hero-content">
        <div class="hero-chip">FLEM Studio</div>
        <h1>Le studio de création de contenu <span class="hero-highlight">N°1</span> à Lomé...</h1>
        
        <div class="hero-platforms">
          <h3>Pour les créateurs ambitieux</h3>
          <div class="hero-icons" aria-label="Plateformes">
            <span aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1.2" />
              </svg>
            </span>
            <span aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4V9a1 1 0 0 1 1-1Z" />
              </svg>
            </span>
            <span aria-label="TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 4v10.2a3.8 3.8 0 1 1-2-3.3V7.2a6.5 6.5 0 0 0 5 2v-2a4.5 4.5 0 0 1-3-3h-0Z" />
              </svg>
            </span>
            <span aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 8.5a3 3 0 0 0-2.1-2.1C17.2 6 12 6 12 6s-5.2 0-6.9.4A3 3 0 0 0 3 8.5 31 31 0 0 0 3 12a31 31 0 0 0 .1 3.5 3 3 0 0 0 2 2.1c1.7.4 6.9.4 6.9.4s5.2 0 6.9-.4a3 3 0 0 0 2-2.1A31 31 0 0 0 21 12a31 31 0 0 0 0-3.5ZM10 14.5v-5l5 2.5-5 2.5Z" />
              </svg>
            </span>
            <span aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 9H3.8v11h2.7V9Zm-1.35-4.5a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM20.2 14c0-3-1.6-4.4-3.8-4.4-1.1 0-2 .6-2.4 1.2V9H11.4v11h2.7v-6c0-1.6.6-2.6 2-2.6 1.3 0 1.7.9 1.7 2.6v6h2.7v-6Z" />
              </svg>
            </span>
          </div>
        </div>
          
        <p>
          Situé au cœur de l'agence, notre studio est conçu pour répondre à tous vos besoins
          de création de contenu. De l'enregistrement de podcasts aux productions vidéo complexes.
        </p>
        <div class="hero-actions">
          <a href="https://wa.me/22870799999" target="_blank" class="hero-cta">
            Réserver une session
          </a>
        </div>
      </div>

      <!-- Strip -->
      <div class="hero-strip">
        <div class="strip-left">
          <span>Collaborations</span>
          <div class="logos marquee">
            <div class="logo-track">
              <img
                v-for="(logo, index) in [...logos, ...logos]"
                :key="`${logo.src}-${index}`"
                :src="logo.src"
                :alt="logo.alt"
              />
            </div>
          </div>
        </div>

        <div class="strip-right">
          <div class="bubbles-content">
            <div class="bubble-stack">
              <img src="/images/lfdt-philippe-fabignon-cover.jpg" alt="Client Flem Agence" />
              <img src="/images/esther-boua-consulting-cover.png" alt="Client Flem Agence" />
              <img src="/images/nabou-fall-akademy-cover.png" alt="Client Flem Agence" />
            </div>
            <div class="bubble-text">
              <h3>+ 1500 vidéos enregistrées</h3>
              <a href="#clients" class="bubble-link">Lire les avis de nos clients →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="studio-services">
      <div class="container services-grid">

        <div class="service-card">
          <div class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="3" width="6" height="11" rx="3" />
              <path d="M6 10v1a6 6 0 0 0 12 0v-1" />
              <path d="M12 17v4" />
              <path d="M9 21h6" />
            </svg>
          </div>
          <h3>Enregistrement Podcast</h3>
          <p>Studio insonorisé avec microphones de qualité broadcast pour une clarté audio exceptionnelle.</p>
        </div>

        <div class="service-card">
          <div class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="7" width="13" height="10" rx="2" />
              <circle cx="16.5" cy="12.5" r="2.5" />
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
        <div class="features-hero">
          <p class="features-kicker">Un studio ultra-modulable</p>
          <h2>pour un décor à votre image...</h2>
        </div>

        <div class="features-slider">
          <button class="slide-btn prev" type="button" aria-label="Précédent" @click="goPrevFeature">
            ‹
          </button>
          <div class="feature-image">
            <img :src="featureSlides[activeFeature].image" :alt="featureSlides[activeFeature].title" />
            <div class="feature-overlay">
              <span class="chip">{{ featureSlides[activeFeature].tag }}</span>
              <h3>{{ featureSlides[activeFeature].title }}</h3>
              <a href="https://wa.me/22870799999" target="_blank" class="hero-cta small">Réserver une session</a>
              <div class="features-copy">
                <h4>Nous adaptons l’espace à votre projet : Interview - shooting - podcast - contenus digitaux</h4>
              </div>
            </div>
          </div>
          <button class="slide-btn next" type="button" aria-label="Suivant" @click="goNextFeature">
            ›
          </button>
        </div>
      </div>
    </section>

    <!-- DYNAMIC IMAGE WALL -->
    <section class="studio-image-wall">
      <div class="wall-intro">
        <h2>À partir de 19.000FCFA.</h2>
        <a href="https://wa.me/22870799999" target="_blank" class="hero-cta wall-cta">
          Réserver une session
        </a>
      </div>

        <div class="wall-grid" aria-label="Mur d'images studio">
          <article
            v-for="(tile, index) in wallTiles"
            :key="tile.key"
            class="wall-tile"
            :class="`variant-${tile.variant}`"
            :style="{ animationDelay: `${(index % 7) * 0.14}s` }"
          >
          <img :src="tile.src" alt="Création de contenu au Studio Flem" loading="lazy" />
        </article>
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

    <!-- PROGRAMME STEPS -->
    <section class="section program-steps">
      <div class="container">
        <div class="program-head">
          <span class="badge subtle">Parcours Studio</span>
          <h2>Comment rejoindre notre Programme ?</h2>
          <p>Un processus clair, fluide et accompagné à chaque étape.</p>
        </div>

        <div class="steps-timeline">
          <div class="timeline-line" aria-hidden="true"></div>

          <div class="step-row">
            <article class="step-card">
              <div class="step-chip">Étape 1</div>
              <h3>Parlez-nous de votre projet</h3>
              <p>Décrivez-nous votre besoin : type de contenu, durée, décor souhaité, date.</p>
            </article>
            <div class="marker" aria-hidden="true"><span></span></div>
            <div class="step-image"><img src="/images/decors/decor-2.jpg" alt="Brief projet"></div>
          </div>

          <div class="step-row reverse">
            <article class="step-card">
              <div class="step-chip">Étape 2</div>
              <h3>Proposition & validation</h3>
              <p>
                Nous vous proposons une offre adaptée à votre projet, avec un devis clair et personnalisé.<br />
                ✔️ Ajustements possibles &nbsp;&nbsp; ✔️ Conseils créatifs si besoin
              </p>
            </article>
            <div class="marker" aria-hidden="true"><span></span></div>
            <div class="step-image"><img src="/images/decors/decor-8.png" alt="Validation devis"></div>
          </div>

          <div class="step-row">
            <article class="step-card">
              <div class="step-chip">Étape 3</div>
              <h3>Confirmation & réservation</h3>
              <p>
                Après validation du devis et paiement de l’acompte, votre session est officiellement réservée.<br />
                📅 Créneau bloqué &nbsp;&nbsp; 🎬 Préparation du décor
              </p>
            </article>
            <div class="marker" aria-hidden="true"><span></span></div>
            <div class="step-image"><img src="/images/decors/decor-14.png" alt="Créneau réservé"></div>
          </div>

          <div class="step-row reverse optional">
            <article class="step-card">
              <div class="step-chip">Étape 4 (optionnelle)</div>
              <h3>Jour du tournage</h3>
              <p>
                Le jour J, nous vous accueillons au studio et adaptons l’espace selon votre projet.<br />
                🤝 Accompagnement &nbsp;&nbsp; 🎥 Studio prêt à tourner
              </p>
            </article>
            <div class="marker" aria-hidden="true"><span></span></div>
            <div class="step-image"><img src="/images/decors/decor-18.png" alt="Jour de tournage"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROOF BANNER -->
    <section class="studio-proof" aria-label="Preuve sociale studio">
      <div class="proof-media"></div>
      <div class="container proof-content">
        <h2>
          NABOU FALL <br />
          a déjà enregistré <br />
          une vidéo dans notre studio.<br />
          Quand est-ce que vous venez ?
        </h2>
        <a
          class="proof-cta"
          href="https://wa.me/22870799999"
          target="_blank"
          rel="noopener"
        >
          Réserver une session
        </a>
      </div>
    </section>

    <!-- Map -->
    <section class="studio-offers">
      <div class="container">
        <div class="offers-header">
          <span class="badge subtle">Venez au Studio Flem</span>
          <h2>Prêt à te rendre à notre Studio ?</h2>
          <p>
            Flem studio se trouve à Bè Gbenyedzi, sur le blvd Houphouet Boigny en face de la pharmacie Biova, 
            <br> ou clinique Barruet… dans l’immeuble (orange) de Moov Akodessewa.
          </p>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.858463809139!2d1.2511920749897714!3d6.149702993837373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDgnNTguOSJOIDHCsDE1JzEzLjYiRQ!5e0!3m2!1sfr!2stg!4v1770039517522!5m2!1sfr!2stg"
          width="100%"
          height="360"
          style="border:0; border-radius: 18px; box-shadow: 0 20px 70px rgba(0,0,0,.25); background-color: #000;"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Localisation Flem Agence"
        ></iframe>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
:root {
  --gold: #e3a74e;
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
  padding: 90px 0 110px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  overflow: hidden;
}

.hero-media {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.hero-media .hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.05) contrast(1.05);
  display: block;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(70% 70% at 12% 30%, rgba(0,0,0,.7), transparent 62%),
    linear-gradient(90deg, rgba(3,3,3,.98), rgba(3,3,3,.65) 50%, rgba(5,5,5,.18));
}

.hero-content {
  position: relative;
  z-index: 1;
  width: min(1180px, 100%);
  max-width: 720px;
  margin: 0;
  padding-left: clamp(12px, 6vw, 80px);
  padding-right: clamp(12px, 4vw, 40px);
}

.hero-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(0,0,0,.45);
  border: 1px solid rgba(255,255,255,.15);
  color: #fff;
  font-size: 11px;
  letter-spacing: .08em;
  font-weight: 700;
  margin-top: 1px;
}

.studio-hero h1 {
  font-size: clamp(40px, 6.2vw, 57px);
  font-weight: 700;
  letter-spacing: -0.035em;
  margin-bottom: 20px;
}

.hero-highlight {
  display: inline-block;
  padding: 1px 10px;
  border-radius: 30px;
  background: rgba(255,255,255,.12);
  color: #fff;
  font-weight: 800;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0,0,0,.35);
}

.studio-hero h3 {
  font-size: clamp(18px, 4vw, 25px);
  font-weight: 600;
  color: var(--gold);
  margin-bottom: 10px;
}

.studio-hero p {
  font-size: 16px;
  line-height: 1.7;
  color: var(--muted);
  margin-bottom: 10px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
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

.hero-icons {
  display: inline-flex;
  gap: 8px;
  margin-top: 15px;
}

.hero-icons span {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  background: rgba(0,0,0,.5);
  border: 1px solid rgba(255,255,255,.15);
  color: #fff;
  font-size: 12px;
  display: grid;
  place-items: center;
  box-shadow: 0 10px 24px rgba(0,0,0,.35);
}

.hero-icons span + span {
  margin-left: -16px;
}

.hero-icons svg {
  width: 18px;
  height: 18px;
  stroke: currentColor;
  fill: none;
  stroke-width: 1.6;
}

.hero-icons span svg path,
.hero-icons span svg rect,
.hero-icons span svg circle {
  fill: none;
  stroke: currentColor;
}

.hero-icons span:last-child svg path {
  fill: currentColor;
  stroke: none;
}

.hero-platforms {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.hero-strip {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 14px clamp(16px, 4vw, 80px);
  background: rgba(0,0,0,.35);
  border-top: 1px solid rgba(255,255,255,.08);
  backdrop-filter: blur(8px);
  font-size: 12px;
  color: rgba(255,255,255,.7);
}

.strip-left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1 1 auto;
  font-weight: 700;
  min-width: 0;
}

.strip-right {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: flex-end;
}

/* CLIENTS BUBBLES */
.strip-right .bubbles-content {
  width: auto;
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  flex-wrap: nowrap;
  text-align: left;
}

.strip-right .bubble-stack {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.strip-right .bubble-stack img {
  width: 45px;
  height: 45px;
  margin-left: -12px;
  border: 3px solid rgba(255,255,255,.9);
  box-shadow: 0 10px 24px rgba(0,0,0,.45);
  border-radius: 999px;
}

.strip-right .bubble-text h3 {
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  margin: 0;
}

.strip-right .bubble-link {
  font-size: 16px;
  text-align: left;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.strip-right .bubble-text {
  max-width: 420px;
  line-height: 1.35;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.strip-left span {
  text-transform: uppercase;
  letter-spacing: .12em;
  font-size: 10px;
}

.logos {
  display: flex;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
}

.logos.marquee {
  position: relative;
}

.logo-track {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  animation: logo-marquee 18s linear infinite;
}

.logo-track img {
  height: 24px;
  opacity: 0.7;
  filter: grayscale(1) contrast(1.1);
}

@keyframes logo-marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
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
  border-color: rgb(224, 150, 48);
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
  padding: 0 0 140px;
}

.features-layout {
  display: grid;
  gap: 24px;
}

.features-hero {
  text-align: left;
}

.features-kicker {
  font-size: 40px;
  color: var(--gold);
  font-weight: 700;
  margin: 0 0 6px;
}

.features-hero h2 {
  margin: 0;
  font-size: clamp(24px, 3.8vw, 30px);
  color: rgba(255,255,255,.5);
  font-weight: 600;
}

.features-slider {
  position: relative;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,.06);
  height: 620px;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0,0,0,.45);
}

.feature-image {
  position: relative;
  height: 620px;
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.feature-overlay {
  position: absolute;
  inset: auto 0 0 0;
  justify-content: center;
  justify-items: center;
  text-align: center;
  padding: 24px 82px 10px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  pointer-events: none;
  display: grid;
  gap: 8px;
}

.feature-overlay .chip {
  display: inline-flex;
  width: fit-content;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(0,0,0,.45);
  border: 1px solid rgba(255,255,255,.2);
  font-size: 11px;
}

.feature-overlay h3 {
  margin: 0;
  font-size: 60px;
  font-weight: 700;
}

.hero-cta.small {
  padding: 10px 18px;
  font-size: 12px;
  width: fit-content;
}

.slide-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.25);
  background: rgba(0,0,0,.4);
  color: #fff;
  display: grid;
  place-items: center;
  z-index: 2;
  cursor: pointer;
}

.slide-btn.prev { left: 12px; }
.slide-btn.next { right: 12px; }

.features-copy h4 {
  padding: 150px 0 12px; 
  color: var(--muted);
  font-size: 18px;
}

/* IMAGE WALL */
.studio-image-wall {
  position: relative;
  margin: 0 0 120px;
  padding: 30px clamp(10px, 2vw, 24px);
  background: #050505;
  border-top: 1px solid rgba(255,255,255,.06);
  border-bottom: 1px solid rgba(255,255,255,.06);
  overflow: hidden;
  isolation: isolate;
}

.studio-image-wall::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(1200px 420px at 50% 28%, rgba(0,0,0,.74), transparent 72%),
    linear-gradient(180deg, rgba(0,0,0,.82), rgba(0,0,0,.36) 36%, rgba(0,0,0,.8));
  z-index: 1;
  pointer-events: none;
}

.wall-intro {
  position: sticky;
  top: clamp(88px, 14vh, 150px);
  z-index: 5;
  text-align: center;
  width: min(92vw, 520px);
  margin: 0 auto -180px;
  pointer-events: none;
  animation: wall-bob 6s ease-in-out infinite;
}

.wall-intro h2 {
  margin: 0;
  font-size: clamp(34px, 7vw, 78px);
  line-height: .95;
  letter-spacing: -0.03em;
  color: #fff;
  text-shadow: 0 12px 42px rgba(0,0,0,.45);
}

.wall-cta {
  margin-top: 14px;
  pointer-events: auto;
}

.wall-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: 68px;
  gap: 12px;
  min-height: 920px;
}

.wall-tile {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,.08);
  background: #111;
  box-shadow: 0 16px 34px rgba(0,0,0,.3);
  transition: box-shadow .35s ease, border-color .35s ease, transform .35s ease;
}

.wall-tile::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.35));
  opacity: 1;
  transition: opacity .35s ease, background .35s ease;
  pointer-events: none;
  z-index: 1;
}

.wall-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(.86) saturate(.92) contrast(1.04);
  transition: transform .7s ease, filter .35s ease;
}

.wall-tile:hover img {
  transform: scale(1.06);
  filter: brightness(1.22) saturate(1.1) contrast(1.06);
}

.wall-tile:hover::after {
  opacity: .2;
}

.wall-tile:hover {
  border-color: rgba(255,215,165,.6);
  box-shadow: 0 20px 38px rgba(0,0,0,.4), 0 0 0 1px rgba(255,197,126,.35);
}

.variant-xl { grid-column: span 4; grid-row: span 4; }
.variant-lg { grid-column: span 4; grid-row: span 3; }
.variant-wide { grid-column: span 5; grid-row: span 2; }
.variant-tall { grid-column: span 3; grid-row: span 4; }
.variant-md-tall { grid-column: span 3; grid-row: span 3; }
.variant-md { grid-column: span 3; grid-row: span 2; }
.variant-sm-tall { grid-column: span 2; grid-row: span 3; }
.variant-sm { grid-column: span 2; grid-row: span 2; }

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

.studio-proof {
  position: relative;
  min-height: 75vh;
  display: flex;
  align-items: center;
  isolation: isolate;
  overflow: hidden;
  margin: 0 0 120px;
}

.proof-media {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(120deg, rgba(0,0,0,.72) 20%, rgba(0,0,0,.35) 50%, rgba(0,0,0,.65) 100%),
    url("/images/decors/decor-9.png") center/cover no-repeat;
  filter: saturate(1.05) contrast(1.05);
  z-index: 1;
}

.proof-content {
  position: relative;
  z-index: 2;
  max-width: 720px;
  width: min(1180px, 100%);
  margin: 0;
  padding-left: clamp(12px, 6vw, 80px);
  padding-right: clamp(50px, 4vw, 140px);
  color: #fff;
  display: grid;
  gap: 14px;
}

.proof-content h2 {
  margin: 0;
  font-size: clamp(32px, 5vw, 42px);
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 82px 122px rgba(0,0,0,.45);
}

.proof-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 22px;
  border-radius: 999px;
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  color: #0b0b0c;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  box-shadow: 0 16px 36px rgba(214,176,122,.35);
  transition: transform .2s ease, box-shadow .2s ease;
  width: fit-content;
}

.proof-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 44px rgba(214,176,122,.42);
}

.program-steps {
  padding: 60px 0 120px;
}

.program-head {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 40px;
}

.program-head h2 {
  margin: 10px 0 8px;
  font-size: clamp(28px, 4vw, 42px);
}

.program-head p {
  color: var(--muted);
}

.steps-timeline {
  position: relative;
  display: grid;
  gap: 36px;
  padding: 10px 0 0;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background-image: radial-gradient(rgba(214,176,122,.85) 35%, transparent 42%);
  background-size: 2px 12px;
  background-repeat: repeat-y;
  transform: translateX(-50%);
  pointer-events: none;
}

.step-row {
  display: grid;
  grid-template-columns: 1fr 80px 1fr;
  align-items: center;
  gap: 18px;
}

.step-row.reverse .step-card { order: 3; }
.step-row.reverse .marker { order: 2; }
.step-row.reverse .step-image { order: 1; }

.step-card {
  position: relative;
  width: 100%;
  padding: 18px 20px 20px;
  background: #0f0f12;
  border: 1px solid rgba(214,176,122,.25);
  border-radius: 18px;
  box-shadow: 0 18px 60px rgba(0,0,0,.3);
}

.step-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 999px;
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  color: #0b0b0c;
  font-weight: 800;
  font-size: 12px;
  box-shadow: 0 10px 28px rgba(214,176,122,.3);
}

.step-card h3 {
  margin: 12px 0 8px;
  font-size: 18px;
}

.step-card p {
  margin: 0;
  color: rgba(255,255,255,.78);
  line-height: 1.65;
}

.step-image {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 16px 45px rgba(0,0,0,.32);
}

.step-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.marker {
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.marker span {
  width: 26px;
  height: 26px;
  border-radius: 999px;
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  border: 3px solid #0b0b0c;
  box-shadow: 0 0 0 2px rgba(214,176,122,.4);
}

.marker::after {
  content: "";
  position: absolute;
  bottom: -8px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid #0b0b0c;
}

@media (max-width: 900px) {
  .steps-timeline { gap: 22px; }
  .timeline-line { left: 4px; transform: none; }
  .step-row,
  .step-row.reverse {
    grid-template-columns: 1fr 60px;
    grid-template-areas:
      "card marker"
      "image marker";
    align-items: start;
  }
  .step-row.reverse .step-card { order: 1; }
  .step-row.reverse .marker { order: 2; }
  .step-row.reverse .step-image { order: 3; }
  .step-image { grid-area: image; }
  .step-card { grid-area: card; }
  .marker { grid-area: marker; width: 60px; height: 60px; }
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .features-layout {
    grid-template-columns: 1fr;
  }
  .wall-intro {
    top: clamp(82px, 11vh, 120px);
    margin-bottom: -150px;
  }
  .wall-grid {
    grid-template-columns: repeat(8, minmax(0, 1fr));
    grid-auto-rows: 62px;
    min-height: 700px;
  }
  .variant-wide { grid-column: span 4; grid-row: span 2; }
  .variant-md { grid-column: span 2; grid-row: span 2; }
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 720px) {
  .studio-hero {
    padding: 100px 0 0;
    flex-direction: column;
    align-items: flex-start;
  }
  .studio-hero h1 {
    font-size: clamp(24px, 8.5vw, 36px);
    line-height: 1.12;
  }
  .studio-hero h3 {
    font-size: 14px;
  }
  .studio-hero p {
    font-size: 13px;
    line-height: 1.6;
  }
  .hero-content {
    max-width: 100%;
    padding-left: 14px;
    padding-right: 14px;
  }
  .hero-platforms {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  .hero-icons span {
    width: 30px;
    height: 30px;
  }
  .hero-actions {
    width: 100%;
  }
  .hero-cta {
    width: 100%;
    max-width: 240px;
    padding: 11px 18px;
    font-size: 12px;
  }
  .hero-icons {
    justify-content: flex-start;
  }
  .hero-strip {
    position: static !important;
    margin-top: 18px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 12px 14px;
    width: 100%;
  }
  .strip-left,
  .strip-right {
    width: 100%;
  }
  .strip-left {
    gap: 10px;
  }
  .strip-right {
    justify-content: flex-start;
  }
  .logos {
    max-width: 100%;
  }
  .logos .logo-track img {
    height: 16px;
  }
  .strip-right .bubbles-content {
    width: 100%;
    flex-wrap: wrap;
    gap: 10px;
  }
  .strip-right .bubble-stack img {
    width: 42px;
    height: 42px;
    margin-left: -8px;
  }
  .strip-right .bubble-text {
    max-width: 100%;
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

  .offers-header p br {
    display: none;
  }

  .studio-offers iframe {
    height: 280px;
  }

  .feature-image {
    height: 260px;
  }
  .feature-overlay h3 {
    font-size: 18px;
  }
  .slide-btn {
    width: 30px;
    height: 30px;
  }
  .features-kicker {
    font-size: 16px;
  }

  .bubbles-content {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .studio-image-wall {
    margin: 0 0 90px;
    padding: 16px 8px;
  }
  .wall-intro {
    top: 84px;
    width: min(95vw, 360px);
    margin-bottom: -120px;
  }
  .wall-intro h2 {
    font-size: clamp(34px, 12vw, 48px);
  }
  .wall-intro .wall-cta {
    width: auto;
    max-width: none;
    padding: 10px 18px;
    font-size: 12px;
  }
  .wall-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-rows: 52px;
    min-height: 620px;
    gap: 8px;
  }
  .variant-xl,
  .variant-lg,
  .variant-wide {
    grid-column: span 4;
    grid-row: span 3;
  }
  .variant-tall,
  .variant-md-tall {
    grid-column: span 2;
    grid-row: span 3;
  }
  .variant-md,
  .variant-sm,
  .variant-sm-tall {
    grid-column: span 2;
    grid-row: span 2;
  }
}

@media (max-width: 420px) {
  .studio-hero h1 {
    font-size: clamp(22px, 9vw, 32px);
  }
  .hero-icons span {
    width: 28px;
    height: 28px;
  }
  .strip-right .bubble-text h3 {
    font-size: 12px;
  }
  .strip-right .bubble-link {
    font-size: 11px;
  }
  .wall-intro {
    top: 78px;
    margin-bottom: -106px;
  }
  .wall-grid {
    min-height: 560px;
    grid-auto-rows: 48px;
  }
  .wall-intro h2 {
    font-size: clamp(28px, 11vw, 40px);
  }
}

@keyframes wall-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(12px); }
}
</style>
