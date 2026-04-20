<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const serviceCases = [
  {
    id: "technology",
    index: "01",
    title: "Technologie",
    bandClass: "is-light",
    description:
      "Nous concevons des expériences digitales robustes : sites web, intégrations, hébergement sécurisé et analyse de données pour piloter vos performances.",
    deliverables: [
      "Sites web vitrine, e-commerce et pages d'atterrissage",
      "Intégration CRM, automatisations et tunnel de conversion",
      "Audit UX et optimisation de parcours",
      "Suivi analytique, tableaux de bord et rapports décisionnels",
      "Maintenance technique et sécurité continue",
    ],
    ctaLabel: "Voir l'offre Technologie",
    ctaHref: "https://flemagence.com/services",
    slides: [
      {
        href: "/images/casclients/technologie/acl-site-web.png",
        img: "/images/casclients/technologie/acl-site-web.png",
        alt: "Site Web - Africa Consulting Leaders",
        title: "Site Web - Africa Consulting Leaders",
        text: "Conception et structuration d'une présence digitale claire et crédible.",
        siteUrl: "https://africaconsultingleaders.com/",
      },
      {
        href: "/images/casclients/technologie/businessetreussite-site-web.png",
        img: "/images/casclients/technologie/businessetreussite-site-web.png",
        alt: "Site Web - Business et réussite",
        title: "Site Web - Business et réussite",
        text: "Plateforme média pensée pour la visibilité, l'autorité et la performance.",
        siteUrl: "https://businessetreussites.com/",
      },
      {
        href: "/images/casclients/technologie/nougna-site-web.png",
        img: "/images/casclients/technologie/nougna-site-web.png",
        alt: "Site Web - Nougna",
        title: "Site Web - Nougna",
        text: "Expérience digitale complète, du web à l'interface produit.",
        siteUrl: "https://nougna.com/",
      },
      {
        href: "/images/casclients/technologie/riadlyla-site-web.png",
        img: "/images/casclients/technologie/riadlyla-site-web.png",
        alt: "Site Web - Riad Lyla",
        title: "Site Web - Riad Lyla",
        text: "Site personnel avec intégration de contenus et optimisation SEO.",
        siteUrl: "https://riadlyla.com/",
      },
      {
        href: "/images/casclients/technologie/flem-site-web.png",
        img: "/images/casclients/technologie/flem-site-web.png",
        alt: "Site Web - FLEM Agence",
        title: "Site Web - FLEM Agence",
        text: "Site institutionnel orienté identité de marque et conversion.",
        siteUrl: "https://flemagence.com/",
      },
    ],
  },
  {
    id: "growth",
    index: "02",
    title: "YouTube",
    bandClass: "is-dark",
    description:
      "Nous propulsons votre croissance sur YouTube grâce à des stratégies de contenu ciblées, une optimisation SEO rigoureuse et une gestion de communauté engagée.",
    deliverables: [
      "Audit de chaîne et recommandations stratégiques",
      "Conception de formats vidéo adaptés à votre audience",
      "Calendrier éditorial et production de contenus à haute performance",
      "Gestion de communauté orientée résultats",
      "Rapports hebdomadaires KPI et recommandations",
    ],
    ctaLabel: "Voir l'offre YouTube",
    ctaHref: "https://flemagence.com/services",
    slides: [
      {
        href: "/images/casclients/youtube/youtube-estherboua.png",
        img: "/images/casclients/youtube/youtube-estherboua.png",
        alt: "Esther Boua",
        title: "Esther Boua",
        text: "Activation éditoriale et acquisition qualifiée orientées résultats.",
      },
      {
        href: "/images/casclients/youtube/youtube-immopreneurs.png",
        img: "/images/casclients/youtube/youtube-immopreneurs.png",
        alt: "Immopreneurs",
        title: "Immopreneurs",
        text: "Croissance d'audience et conversion via contenus et campagnes ciblées.",
      },
      {
        href: "/images/casclients/youtube/youtube-investisseurafricain.png",
        img: "/images/casclients/youtube/youtube-investisseurafricain.png",
        alt: "Investisseur Africain",
        title: "Investisseur Africain",
        text: "Pilotage de la croissance avec suivi KPI, tests et optimisation continue.",
      },
      {
        href: "/images/casclients/youtube/youtube-lfdt.png",
        img: "/images/casclients/youtube/youtube-lfdt.png",
        alt: "Funérailles des tabous",
        title: "Funérailles des tabous",
        text: "Structuration de la stratégie de diffusion et montée en visibilité.",
      },
      {
        href: "/images/casclients/youtube/youtube-marcellin.png",
        img: "/images/casclients/youtube/youtube-marcellin.png",
        alt: "Marcellin",
        title: "Marcellin",
        text: "Formats conversationnels et narration pensée pour maximiser la rétention.",
      },
      {
        href: "/images/casclients/youtube/youtube-naboufall.png",
        img: "/images/casclients/youtube/youtube-naboufall.png",
        alt: "Nabou Fall",
        title: "Nabou Fall",
        text: "Positionnement digital et amplification des contenus à fort impact.",
      },
      {
        href: "/images/casclients/youtube/youtube-yazidehitou.png",
        img: "/images/casclients/youtube/youtube-yazidehitou.png",
        alt: "Yazid Ehitou",
        title: "Yazid Ehitou",
        text: "Optimisation éditoriale continue pour accélérer la croissance de chaîne.",
      },
    ],
  },
  {
    id: "creative",
    index: "04",
    title: "Studio créatif",
    bandClass: "is-light",
    description:
      "Nous produisons des contenus visuels marquants : conception visuelle, animation, production vidéo et direction artistique au service de votre marque.",
    deliverables: [
      "Direction artistique de campagne",
      "Production photo et vidéo",
      "Montage, animation graphique et formats réseaux sociaux",
      "Identité visuelle et modèles de marque",
      "Rédaction persuasive orientée impact",
    ],
    ctaLabel: "Découvrir le Studio Flem",
    ctaHref: "https://flemagence.com/studio",
    slides: [
      {
        href: "/images/casclients/creativestudio/decor-2.jpg",
        img: "/images/casclients/creativestudio/decor-2.jpg",
        alt: "Direction artistique",
        title: "Direction artistique",
        text: "Univers visuel fort pour différencier la marque sur son marché.",
      },
      {
        href: "/images/casclients/creativestudio/decor-3.jpg",
        img: "/images/casclients/creativestudio/decor-3.jpg",
        alt: "Production vidéo",
        title: "Production vidéo",
        text: "Contenus premium adaptés aux formats courts et longs.",
      },
      {
        href: "/images/casclients/creativestudio/decor-4.jpg",
        img: "/images/casclients/creativestudio/decor-4.jpg",
        alt: "Montage vidéo",
        title: "Montage vidéo",
        text: "Habillage, rythme narratif et déclinaisons multi-plateformes.",
      },
      {
        href: "/images/casclients/creativestudio/decor-7.png",
        img: "/images/casclients/creativestudio/decor-7.png",
        alt: "Habillage visuel",
        title: "Habillage visuel",
        text: "Création de formats cohérents avec l'identité de marque.",
      },
      {
        href: "/images/casclients/creativestudio/decor-8.png",
        img: "/images/casclients/creativestudio/decor-8.png",
        alt: "Direction de tournage",
        title: "Direction de tournage",
        text: "Mise en scène orientée storytelling et impact visuel.",
      },
      {
        href: "/images/casclients/creativestudio/decor-9.png",
        img: "/images/casclients/creativestudio/decor-9.png",
        alt: "Motion design",
        title: "Motion design",
        text: "Animations graphiques pour renforcer la mémorisation.",
      },
      {
        href: "/images/casclients/creativestudio/decor-14.png",
        img: "/images/casclients/creativestudio/decor-14.png",
        alt: "Contenus studio",
        title: "Contenus studio",
        text: "Production continue de contenus social media à haute valeur.",
      },
    ],
  },
  {
    id: "social",
    index: "03",
    title: "Réseaux sociaux",
    bandClass: "is-dark",
    description:
      "Nous transformons vos réseaux sociaux en canal de croissance grâce à des stratégies éditoriales, des activations créatives et un suivi KPI rigoureux.",
    deliverables: [
      "Audit des plateformes et plan de repositionnement",
      "Stratégie de contenu mensuelle par canal",
      "Gestion de communauté et modération",
      "Publicité sociale et amplification des contenus phares",
      "Rapport mensuel : portée, engagement, leads et conversions",
    ],
    ctaLabel: "Voir l'offre Réseaux sociaux",
    ctaHref: "https://flemagence.com/services",
    slides: [
      {
        href: "/images/casclients/socialmedia/aws.png",
        img: "/images/casclients/socialmedia/aws.png",
        alt: "AWS",
        title: "AWS",
        text: "Production et publication de contenus réseaux sociaux orientés notoriété.",
      },
      {
        href: "/images/casclients/socialmedia/estherboua.png",
        img: "/images/casclients/socialmedia/estherboua.png",
        alt: "Esther Boua",
        title: "Esther Boua",
        text: "Ligne éditoriale premium et amplification des contenus phares.",
      },
      {
        href: "/images/casclients/socialmedia/lfdt.png",
        img: "/images/casclients/socialmedia/lfdt.png",
        alt: "LFDT",
        title: "LFDT",
        text: "Croissance de communauté avec suivi mensuel des performances.",
      },
    ],
  },
];

const caseDisplayOrder = ["technology", "growth", "social", "creative"];
const displayServiceCases = caseDisplayOrder
  .map((id) => serviceCases.find((service) => service.id === id))
  .filter(Boolean);

const productionVideos = [
  // Ajoute tes liens YouTube ici
  { title: "Ces SOFT SKILLS que les recruteurs s'arrachent | Nabou Fall", url: "https://youtu.be/ty4vqn7_itk?si=DGUvNfSv0jNVgrf_" },
  { title: "Le succès rapide : imposture ou vraie réussite ?", url: "https://youtu.be/c5SCOhKNby4?si=JfkEvfVOwZDGSKuc" },
];

const podcast = [
  // Ajoute ton lien de podcast YouTube ici
  { title: "Dr Kayi DOGBE : Le choc de la vérité sur la jeunesse et l’avenir de l’Afrique !", url: "https://youtu.be/d6rUqK3Y-D0?si=9Kl3vkr2m1f4AnrZ" },
  { title: "De MÉCANICIEN à grand JOURNALISTE africain | le DESTIN Hors Norme de Louis Magloire KEUMAYOU", url: "https://youtu.be/tY1Qrj4BCEc?si=qNBifPrESYd3Ah8M" },
];

const eventVideos = [
  // Ajoute tes liens YouTube événementiels ici
  { title: "REBRAND YOUR LEADERSHIP By SENAKPON GROUP | Flem Agence", url: "https://youtu.be/fnj9_xNQrM4" },
  { title: "BÉNIN 🇧🇯 | Leadership féminin OWLA", url: "https://youtu.be/HBtjwFxpy20" },
  { title: "Vidéo événementielle Flem Agence", url: "https://youtu.be/neSJ3y8mVSg" },
];

function toYouTubeId(url) {
  if (!url) return "";

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");
    let id = "";

    if (host === "youtu.be") {
      id = parsed.pathname.slice(1);
    } else if (host.includes("youtube.com")) {
      id = parsed.searchParams.get("v") || "";

      if (!id && parsed.pathname.includes("/embed/")) {
        id = parsed.pathname.split("/embed/")[1]?.split("/")[0] || "";
      }

      if (!id && parsed.pathname.includes("/shorts/")) {
        id = parsed.pathname.split("/shorts/")[1]?.split("/")[0] || "";
      }
    }

    return id || "";
  } catch {
    return "";
  }
}

function toYouTubeEmbed(url) {
  const id = toYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}?rel=0` : "";
}

function toYouTubeThumb(url) {
  const id = toYouTubeId(url);
  return id ? `https://i.ytimg.com/vi/${id}/mqdefault.jpg` : "";
}

function toYouTubeThumbFallback(url) {
  const id = toYouTubeId(url);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "";
}

function onThumbLoad(event) {
  const image = event?.target;
  if (!(image instanceof HTMLImageElement)) return;

  const fallback = image.dataset.fallback || "";

  // Certaines miniatures YouTube renvoient une petite image placeholder.
  // On bascule alors automatiquement sur le fallback.
  if (
    fallback &&
    image.naturalWidth > 0 &&
    image.naturalHeight > 0 &&
    image.naturalWidth <= 160 &&
    image.naturalHeight <= 120 &&
    image.src !== fallback
  ) {
    image.src = fallback;
  }
}

function onThumbError(event) {
  const image = event?.target;
  if (!(image instanceof HTMLImageElement)) return;

  const fallback = image.dataset.fallback || "";
  const localFallback = "/images/team-flem-agence.jpg";

  if (fallback && image.src !== fallback) {
    image.src = fallback;
    return;
  }

  if (!image.src.endsWith(localFallback)) {
    image.src = localFallback;
  }
}

const videoCases = productionVideos
  .map((video) => ({
    ...video,
    videoId: toYouTubeId(video.url),
    embedUrl: toYouTubeEmbed(video.url),
    thumbUrl: toYouTubeThumb(video.url),
    thumbFallback: toYouTubeThumbFallback(video.url),
  }))
  .filter((video) => video.embedUrl);

let revealObserver;
let statsObserver;
const railCleanups = [];

const podcastEmbed = podcast
  .map((video) => ({
    ...video,
    videoId: toYouTubeId(video.url),
    embedUrl: toYouTubeEmbed(video.url),
    thumbUrl: toYouTubeThumb(video.url),
    thumbFallback: toYouTubeThumbFallback(video.url),
  }))
  .filter((video) => video.embedUrl);

const eventEmbed = eventVideos
  .map((video) => ({
    ...video,
    videoId: toYouTubeId(video.url),
    embedUrl: toYouTubeEmbed(video.url),
    thumbUrl: toYouTubeThumb(video.url),
    thumbFallback: toYouTubeThumbFallback(video.url),
  }))
  .filter((video) => video.embedUrl);

const activeVideo = ref(null);
const activeVideoSrc = ref("");
const activeVideoPreviewSrc = ref("");
const activeVideoPreviewFallback = ref("");
const activeImage = ref(null);

function withPlayerParams(embedUrl) {
  if (!embedUrl) return "";
  const separator = embedUrl.includes("?") ? "&" : "?";
  return `${embedUrl}${separator}playsinline=1&modestbranding=1&rel=0`;
}

function withAutoplay(embedUrl) {
  if (!embedUrl) return "";
  const separator = embedUrl.includes("?") ? "&" : "?";
  return `${embedUrl}${separator}autoplay=1`;
}

function openVideo(video) {
  if (!video?.embedUrl) return;
  activeVideo.value = video;
  activeVideoSrc.value = "";
  activeVideoPreviewSrc.value = video.thumbUrl || "";
  activeVideoPreviewFallback.value = video.thumbFallback || "/images/team-flem-agence.jpg";
  document.body.style.overflow = "hidden";
}

function playActiveVideo() {
  if (!activeVideo.value?.embedUrl) return;
  activeVideoSrc.value = withAutoplay(withPlayerParams(activeVideo.value.embedUrl));
}

function onLightboxPreviewError(event) {
  const image = event?.target;
  if (!(image instanceof HTMLImageElement)) return;
  const fallback = activeVideoPreviewFallback.value || "/images/team-flem-agence.jpg";
  if (image.src !== fallback) {
    image.src = fallback;
  }
}

function closeVideo() {
  activeVideo.value = null;
  activeVideoSrc.value = "";
  activeVideoPreviewSrc.value = "";
  activeVideoPreviewFallback.value = "";
  document.body.style.overflow = "";
}

function openImage(slide) {
  const src = slide?.img || slide?.href || "";
  if (!src) return;
  activeImage.value = { src, alt: slide?.alt || slide?.title || "Capture" };
  document.body.style.overflow = "hidden";
}

function closeImage() {
  activeImage.value = null;
  document.body.style.overflow = "";
}

function initRails() {
  const rails = [...document.querySelectorAll(".cas-portfolio [data-rail]")];

  rails.forEach((rail) => {
    const track = rail.querySelector(".rail-track");
    const slides = [...rail.querySelectorAll(".rail-slide")];
    const dotsContainer = rail.querySelector(".rail-dots");
    const prevButton = rail.querySelector('.rail-btn[data-dir="-1"]');
    const nextButton = rail.querySelector('.rail-btn[data-dir="1"]');

    if (!track || slides.length < 2 || !dotsContainer || !prevButton || !nextButton) {
      if (prevButton) prevButton.disabled = true;
      if (nextButton) nextButton.disabled = true;
      return;
    }

    let index = 0;
    const dotHandlers = [];
    const dots = slides.map((_, dotIndex) => {
      const dot = document.createElement("button");
      dot.className = "rail-dot";
      dot.type = "button";
      dot.ariaLabel = `Aller au slide ${dotIndex + 1}`;
      const onDotClick = () => {
        index = dotIndex;
        render();
      };
      dot.addEventListener("click", onDotClick);
      dotHandlers.push(onDotClick);
      dotsContainer.appendChild(dot);
      return dot;
    });

    const render = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      prevButton.disabled = index === 0;
      nextButton.disabled = index === slides.length - 1;
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === index);
      });
    };

    const onPrev = () => {
      if (index <= 0) return;
      index -= 1;
      render();
    };

    const onNext = () => {
      if (index >= slides.length - 1) return;
      index += 1;
      render();
    };

    prevButton.addEventListener("click", onPrev);
    nextButton.addEventListener("click", onNext);

    render();

    railCleanups.push(() => {
      prevButton.removeEventListener("click", onPrev);
      nextButton.removeEventListener("click", onNext);
      dots.forEach((dot, dotIndex) => {
        dot.removeEventListener("click", dotHandlers[dotIndex]);
      });
      dotsContainer.innerHTML = "";
    });
  });
}

function initReveal() {
  const revealItems = [...document.querySelectorAll(".cas-portfolio .reveal")];

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

function animateCounters() {
  const counters = [...document.querySelectorAll(".cas-portfolio .counter")];
  const duration = 1500;

  counters.forEach((counter) => {
    const target = Number(counter.dataset.target || 0);

    if (!Number.isFinite(target) || target <= 0) return;

    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      counter.textContent = `+${Math.floor(target * progress)}`;

      if (progress < 1) requestAnimationFrame(tick);
      else counter.textContent = `+${target}`;
    };

    requestAnimationFrame(tick);
  });
}

function initCounters() {
  const statsNode = document.getElementById("stats");
  if (!statsNode) return;

  if (!("IntersectionObserver" in window)) {
    animateCounters();
    return;
  }

  statsObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounters();
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.35 },
  );

  statsObserver.observe(statsNode);
}

onMounted(() => {
  const onEsc = (event) => {
    if (event.key === "Escape") {
      if (activeVideo.value) closeVideo();
      if (activeImage.value) closeImage();
    }
  };
  window.addEventListener("keydown", onEsc);
  railCleanups.push(() => window.removeEventListener("keydown", onEsc));

  initRails();
  initReveal();
  initCounters();
});

onBeforeUnmount(() => {
  if (revealObserver) revealObserver.disconnect();
  if (statsObserver) statsObserver.disconnect();
  document.body.style.overflow = "";
  railCleanups.forEach((cleanup) => cleanup());
  railCleanups.length = 0;
});
</script>

<template>
  <main id="top" class="cas-portfolio">
    <div class="site-bg" aria-hidden="true">
      <div class="glow glow-left"></div>
      <div class="glow glow-right"></div>
    </div>

    <section class="hero section">
      <div class="container hero-content">
        <div class="agency-separator" aria-hidden="true"></div>
        <p class="kicker">Réalisations de l'agence</p>
        <h1>
          Des services détaillés,
          des cas réels,
          des résultats mesurables.
        </h1>
        <p class="lead">
          Cette page présente exactement comment Flem Agence intervient :
          nos expertises, nos livrables et les types de projets que nous
          produisons pour nos clients.
        </p>
        <div class="hero-actions">
          <a class="btn btn-light" href="#services">Voir les services</a>
          <a class="btn btn-outline" href="https://flemagence.com/contact" target="_blank" rel="noopener">
            Demander un devis
          </a>
          <div class="agency-separator" aria-hidden="true"></div>
        </div>
      </div>
    </section>

    <!-- <section id="services" class="service-jump">
      <div class="container jump-pills">
        <a href="#technology">Technologie</a>
        <a href="#growth">Marketing de croissance</a>
        <a href="#social">Réseaux sociaux</a>
        <a href="#creative">Studio créatif</a>
        <a href="#production-video">Production vidéo</a>
      </div>
    </section> -->

    <section
      v-for="service in displayServiceCases"
      :id="service.id"
      :key="service.id"
      class="service-band section"
      :class="service.bandClass"
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
          <p class="capture-hint">
            Captures des travaux réalisés pour nos clients sur ce service. Cliquez sur une capture pour l'ouvrir en grand.
          </p>
          <a class="text-link" :href="service.ctaHref" target="_blank" rel="noopener">{{ service.ctaLabel }}</a>
        </header>

          <article class="service-rail reveal" data-rail>
            <div class="rail-viewport">
              <div class="rail-track">
                <article
                  v-for="slide in service.slides"
                  :key="`${service.id}-${slide.title}`"
                  class="rail-slide"
                >
                  <button
                    class="rail-media-btn"
                    type="button"
                    @click="openImage(slide)"
                    :aria-label="`Ouvrir la capture: ${slide.title}`"
                  >
                    <div class="rail-media">
                      <img :src="slide.img" :alt="slide.alt" loading="lazy" />
                    </div>
                  </button>
                  <div class="rail-copy">
                    <span class="capture-chip">Capture client</span>
                    <h4>{{ slide.title }}</h4>
                    <p>{{ slide.text }}</p>
                    <a
                      v-if="service.id === 'technology' && slide.siteUrl"
                      class="rail-site-link"
                      :href="slide.siteUrl"
                      target="_blank"
                      rel="noopener"
                      @click.stop
                    >
                      Accéder au Site <span aria-hidden="true">↗</span>
                    </a>
                    <span v-else class="rail-preview-note">
                      {{ service.id === "growth" ? "Voir la chaîne ↗" : "Voir la capture ↗" }}
                    </span>
                  </div>
                </article>
              </div>
            </div>
          <div class="rail-controls">
            <button class="rail-btn" data-dir="-1" type="button" aria-label="Slide précédent">‹</button>
            <div class="rail-dots" aria-label="Pagination"></div>
            <button class="rail-btn" data-dir="1" type="button" aria-label="Slide suivant">›</button>
          </div>
        </article>
      </div>
    </section>

    <section id="production-video" class="section production-video">
      <div class="container">
        <p class="kicker">05</p>
        <h2>Capsules vidéos Youtube</h2>
        <p class="lead">
          Nous avons créé des vidéo de production pour des marques de toutes tailles et des types de produits.
        </p>

        <div v-if="videoCases.length" class="video-strip reveal">
          <div class="video-strip-track" :class="{ 'is-static': videoCases.length <= 1 }">
            <button
              v-for="(video, idx) in [...videoCases, ...videoCases]"
              :key="`capsule-${video.url}-${idx}`"
              class="video-thumb-card"
              type="button"
              @click="openVideo(video)"
              :aria-hidden="idx >= videoCases.length ? 'true' : undefined"
              :tabindex="idx >= videoCases.length ? -1 : undefined"
              :aria-label="`Ouvrir la vidéo: ${video.title || 'Vidéo client'}`"
            >
              <img
                :src="video.thumbUrl"
                :data-fallback="video.thumbFallback"
                :alt="video.title || 'Vidéo client Flem Agence'"
                loading="lazy"
                @load="onThumbLoad"
                @error="onThumbError"
              />
              <span class="video-overlay" aria-hidden="true"></span>
              <span class="video-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 7.5 17 12l-8 4.5v-9Z" fill="currentColor" />
                </svg>
              </span>
              <span class="video-title">{{ video.title || "Vidéo client" }}</span>
            </button>
          </div>
        </div>

        <div v-else class="video-empty reveal">
          <p>
            Aucune vidéo ajoutée pour le moment. Ajoute tes liens dans la variable
            <code>productionVideos</code> du fichier <code>CasClients.vue</code>.
          </p>
        </div>
      </div>

      <br>
      <div class="agency-separator" aria-hidden="true"></div>
      <div class="container">
        <p class="kicker">06</p>
        <h2>Production Podcast & Talk-Shows</h2>
        <p class="lead">
          Nous produisons des podcasts Youtube de marque, de la conception à la diffusion, en passant par l'enregistrement, le montage et l'optimisation SEO.
        </p>

        <div v-if="podcastEmbed.length" class="video-strip reveal">
          <div
            class="video-strip-track"
            :class="{ 'is-static': podcastEmbed.length <= 1, 'is-reverse': podcastEmbed.length > 1 }"
          >
            <button
              v-for="(podcast, idx) in [...podcastEmbed, ...podcastEmbed]"
              :key="`podcast-${podcast.url}-${idx}`"
              class="video-thumb-card"
              type="button"
              @click="openVideo(podcast)"
              :aria-hidden="idx >= podcastEmbed.length ? 'true' : undefined"
              :tabindex="idx >= podcastEmbed.length ? -1 : undefined"
              :aria-label="`Ouvrir le podcast: ${podcast.title || 'Podcast Flem Agence'}`"
            >
              <img
                :src="podcast.thumbUrl"
                :data-fallback="podcast.thumbFallback"
                :alt="podcast.title || 'Podcast Flem Agence'"
                loading="lazy"
                @load="onThumbLoad"
                @error="onThumbError"
              />
              <span class="video-overlay" aria-hidden="true"></span>
              <span class="video-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 7.5 17 12l-8 4.5v-9Z" fill="currentColor" />
                </svg>
              </span>
              <span class="video-title">{{ podcast.title || "Podcast Flem Agence" }}</span>
            </button>
          </div>
        </div>

        <div v-else class="video-empty reveal">
          <p>
            Aucun podcast ajouté pour le moment. Ajoute tes liens dans la variable
            <code>podcast</code> du fichier <code>CasClients.vue</code>.
          </p>
        </div>
      </div>

      <br>
      <div class="agency-separator" aria-hidden="true"></div>
      <div class="container">
        <p class="kicker">07</p>
        <h2>Aftermovies & Vidéos Événementielles</h2>
        <p class="lead">
          Captation et montage de vos événements professionnels, conférences, lancements et temps forts de marque.
        </p>

        <div v-if="eventEmbed.length" class="video-strip reveal">
          <div class="video-strip-track" :class="{ 'is-static': eventEmbed.length <= 1 }">
            <button
              v-for="(video, idx) in [...eventEmbed, ...eventEmbed]"
              :key="`event-${video.url}-${idx}`"
              class="video-thumb-card"
              type="button"
              @click="openVideo(video)"
              :aria-hidden="idx >= eventEmbed.length ? 'true' : undefined"
              :tabindex="idx >= eventEmbed.length ? -1 : undefined"
              :aria-label="`Ouvrir la vidéo événementielle: ${video.title || 'Vidéo événementielle'}`"
            >
              <img
                :src="video.thumbUrl"
                :data-fallback="video.thumbFallback"
                :alt="video.title || 'Vidéo événementielle Flem Agence'"
                loading="lazy"
                @load="onThumbLoad"
                @error="onThumbError"
              />
              <span class="video-overlay" aria-hidden="true"></span>
              <span class="video-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 7.5 17 12l-8 4.5v-9Z" fill="currentColor" />
                </svg>
              </span>
              <span class="video-title">{{ video.title || "Vidéo événementielle" }}</span>
            </button>
          </div>
        </div>

        <div v-else class="video-empty reveal">
          <p>
            Aucune vidéo événementielle ajoutée pour le moment. Ajoute tes liens dans la variable
            <code>eventVideos</code> du fichier <code>CasClients.vue</code>.
          </p>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <div
        v-if="activeVideo"
        class="video-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="activeVideo.title || 'Lecteur vidéo YouTube'"
        @click.self="closeVideo"
      >
        <button type="button" class="video-lightbox-close" aria-label="Fermer la vidéo" @click="closeVideo">
          ×
        </button>

        <div class="video-lightbox-panel">
          <button
            v-if="!activeVideoSrc"
            type="button"
            class="video-lightbox-preview"
            :aria-label="`Lancer la vidéo: ${activeVideo.title || 'Vidéo YouTube'}`"
            @click="playActiveVideo"
          >
            <img
              :src="activeVideoPreviewSrc"
              :alt="activeVideo.title || 'Aperçu vidéo'"
              loading="eager"
              @error="onLightboxPreviewError"
            />
            <span class="video-lightbox-preview-overlay" aria-hidden="true"></span>
            <span class="video-lightbox-preview-top">{{ activeVideo.title || "Vidéo YouTube" }}</span>
            <span class="video-lightbox-preview-play" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M8.8 7.2 17.3 12l-8.5 4.8V7.2Z" fill="currentColor" />
              </svg>
            </span>
            <span class="video-lightbox-preview-pill">Regarder sur YouTube</span>
          </button>

          <iframe
            v-else
            :src="activeVideoSrc"
            :title="activeVideo.title || 'Lecteur vidéo YouTube'"
            loading="eager"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Teleport>

    <section id="impact" class="section results">
      <div class="container">
        <p class="kicker">Impact global</p>
        <h2>Une exécution complète, de la stratégie aux résultats.</h2>
        <p class="lead">
          L'approche Flem aligne technologie, marketing, création et réseaux sociaux dans un seul système de croissance.
        </p>
        <div id="stats" class="stats">
          <div class="stat-pill">
            <strong class="counter" data-target="137">0</strong>
            <span>campagnes</span>
          </div>
          <div class="stat-pill">
            <strong class="counter" data-target="12">0</strong>
            <span>chaînes YouTube</span>
          </div>
          <div class="stat-pill">
            <strong class="counter" data-target="49">0</strong>
            <span>marques accompagnées</span>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="section final-cta">
      <div class="container final-card reveal">
        <div>
          <p class="kicker">Prochain projet</p>
          <h2>Tu veux cette même structure pour ta marque ?</h2>
          <p class="lead small">
            On construit une proposition détaillée service par service,<br>
            avec planning, livrables et objectifs mesurables.
          </p>
          <br>
          <a class="btn btn-gold" href="https://flemagence.com/contact" target="_blank" rel="noopener">Entrer en contact</a>
        </div>
        <img src="/images/image-agence.png" alt="Équipe Flem Agence" loading="lazy" />
      </div>
    </section>

    <!-- <section class="section agency-contact">
      <div class="container">
        <div class="agency-separator" aria-hidden="true"></div>

        <article class="contact-shell reveal" aria-labelledby="agency-contact-title">
          <div class="contact-main">
            <p class="contact-eyebrow">Contact</p>
            <h2 id="agency-contact-title" class="contact-title">Parlons de votre prochain projet</h2>

            <span>E-mail : <a class="contact-mail" href="mailto:hello@flemagence.com">hello@flemagence.com</a></span>

            <p class="contact-phones">
              <span>Tel :</span>
              <a href="tel:+22898308282">+228 98 30 82 82</a>
              <span>|</span>
              <a href="tel:+22870799999">+228 70 79 99 99</a>
            </p>

            <div class="contact-socials" aria-label="Réseaux sociaux Flem Agence">
              <a
                class="social-btn"
                href="https://www.instagram.com/flemagence"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.8" />
                  <circle cx="12" cy="12" r="3.9" fill="none" stroke="currentColor" stroke-width="1.8" />
                  <circle cx="17.1" cy="6.9" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a
                class="social-btn"
                href="https://www.facebook.com/profile.php?id=61587277825930"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 20v-6h2.2l.3-2.5h-2.5V9.8c0-.7.2-1.2 1.2-1.2h1.3V6.2c-.2 0-1-.1-2-.1-2 0-3.3 1.2-3.3 3.5v1.9H8.5V14h2.2v6h2.8z" fill="currentColor" />
                </svg>
              </a>
              <a
                class="social-btn"
                href="https://www.linkedin.com/in/flem-agence-559a03361/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" fill="none" stroke="currentColor" stroke-width="1.6" />
                  <circle cx="8.1" cy="9.3" r="1.1" fill="currentColor" />
                  <path d="M7.1 11.2v5.8M11.1 17v-5.8h2.2c1.3 0 2.1.8 2.1 2.2V17M11.1 13.9c0-1.6 1-2.7 2.4-2.7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <a
                class="social-btn"
                href="https://www.tiktok.com/@flemagence"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.2 6.3v7.1a2.8 2.8 0 1 1-2-2.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M13.2 8.3c1 .8 2.1 1.2 3.4 1.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div class="newsletter-side">
            <h2>Recevez les insights Flem</h2>
            <p>Stratégie, créativité et tendances — directement dans votre boîte mail.</p>
            <input class="newsletter-input" type="text" placeholder="Votre email" />
            <button class="newsletter-button">S'inscrire</button>
          </div>
        </article>
      </div>
    </section> -->

    <!-- Image Lightbox -->
    <Teleport to="body">
      <div
        v-if="activeImage"
        class="image-lightbox"
        role="dialog"
        aria-modal="true"
        @click.self="closeImage"
      >
        <button type="button" class="image-lightbox-close" aria-label="Fermer l'image" @click="closeImage">
          ×
        </button>
        <div class="image-lightbox-panel">
          <img :src="activeImage.src" :alt="activeImage.alt" />
        </div>
      </div>
    </Teleport>
  </main>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap");

.cas-portfolio {
  --bg: #060607;
  --panel-1: #0f0f12;
  --panel-2: #0b0b0d;
  --line: rgba(255, 255, 255, 0.12);
  --text: #f5f5f5;
  --muted: rgba(255, 255, 255, 0.72);
  --muted-2: rgba(255, 255, 255, 0.52);
  --gold-1: #e0851e;
  --gold-2: #d5ab6f;
  --gold-3: #e3a74e;
  --radius-xl: 24px;
  --radius-lg: 18px;
  --radius-pill: 999px;
}

* {
  box-sizing: border-box;
}

.cas-portfolio {
  position: relative;
  min-height: 100%;
  color: var(--text);
  font-family: "Manrope", "Segoe UI", sans-serif;
  letter-spacing: -0.01em;
  overflow-x: hidden;
  background:
    radial-gradient(1000px 560px at 12% 2%, rgba(214, 176, 122, 0.17), transparent 62%),
    radial-gradient(980px 520px at 92% 6%, rgba(127, 100, 65, 0.16), transparent 58%),
    linear-gradient(180deg, #080809 0%, #09090a 34%, #050505 100%);
}

.cas-portfolio::after {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image: radial-gradient(rgba(255, 255, 255, 0.06) 0.5px, transparent 0.5px);
  background-size: 3px 3px;
  opacity: 0.09;
  mix-blend-mode: overlay;
  z-index: 3;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

.site-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.cas-portfolio > :not(.site-bg) {
  position: relative;
  z-index: 1;
}

.glow {
  position: absolute;
  width: 560px;
  height: 560px;
  border-radius: 50%;
  filter: blur(110px);
  opacity: 0.25;
  animation: drift 24s ease-in-out infinite;
}

.glow-left {
  background: radial-gradient(circle, #d6b07a 0%, transparent 64%);
  left: -100px;
  top: -130px;
}

.glow-right {
  background: radial-gradient(circle, #7f6240 0%, transparent 64%);
  right: -140px;
  bottom: -160px;
  animation-delay: 7s;
}

@keyframes drift {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-42px);
  }
}

.container {
  width: min(1240px, 100% - 10vw);
  margin: 0 auto;
}

.section {
  padding: 88px 0;
}

.btn {
  height: 44px;
  border-radius: var(--radius-pill);
  padding: 0 20px;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  transition: transform 220ms ease, opacity 220ms ease, border-color 220ms ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-gold {
  color: #101010;
  background: linear-gradient(135deg, var(--gold-1), var(--gold-2), var(--gold-1));
  box-shadow: 0 14px 35px rgba(214, 176, 122, 0.35);
}

.btn-light {
  color: #111;
  background: #f4f4f4;
}

.btn-outline {
  color: #f4f4f4;
  border-color: rgba(255, 255, 255, 0.24);
  background: transparent;
}

.btn-outline:hover {
  border-color: rgba(255, 255, 255, 0.58);
}

.hero {
  padding-top: 128px;
  padding-bottom: 78px;
}

.hero-content {
  max-width: 780px;
}

.kicker {
  margin-bottom: 14px;
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
}

h1 {
  font-size: clamp(34px, 6vw, 68px);
  line-height: 1.03;
  letter-spacing: -0.035em;
}

.lead {
  margin-top: 22px;
  max-width: 670px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.7;
}

.lead.small {
  max-width: 580px;
}

.hero-actions {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.service-jump {
  position: sticky;
  top: 76px;
  z-index: 19;
  padding: 14px 0 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  background: rgba(6, 6, 7, 0.7);
}

.jump-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.jump-pills a {
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 15px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.86);
  transition: border-color 220ms ease, background 220ms ease;
}

.jump-pills a:hover {
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.14);
}

.service-band {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.service-band.is-light {
  background:
    radial-gradient(120% 180% at 12% 0%, rgba(214, 176, 122, 0.12), transparent 40%),
    #0b0b0d;
}

.service-band.is-dark {
  background:
    radial-gradient(120% 180% at 88% 0%, rgba(214, 176, 122, 0.12), transparent 40%),
    #09090a;
}

.service-layout {
  display: grid;
  grid-template-columns: minmax(260px, 0.95fr) minmax(0, 1fr);
  gap: 24px;
  align-items: stretch;
}

.service-copy {
  position: sticky;
  top: 134px;
  align-self: stretch;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: linear-gradient(180deg, rgba(17, 17, 19, 0.96), rgba(10, 10, 12, 0.98));
}

.service-index {
  margin-bottom: 10px;
  font-size: 12px;
  letter-spacing: 0.2em;
  color: rgba(227, 167, 78, 0.95);
}

.service-copy h2 {
  font-size: clamp(28px, 3.6vw, 44px);
  line-height: 1.06;
  letter-spacing: -0.03em;
}

.service-copy > p {
  margin-top: 14px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.72;
}

.service-copy h3 {
  margin-top: 22px;
  margin-bottom: 10px;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.84);
}

.service-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
}

.service-list li {
  position: relative;
  padding-left: 18px;
  color: rgba(255, 255, 255, 0.86);
  font-size: 13px;
  line-height: 1.55;
}

.service-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--gold-3);
}

.capture-hint {
  margin-top: 12px;
  padding: 8px 10px;
  border-left: 2px solid rgba(243, 201, 130, 0.52);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 0 10px 10px 0;
  font-size: 12px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.66);
}

.text-link {
  margin-top: auto;
  padding-top: 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(243, 201, 130, 0.95);
}

.text-link::after {
  content: "→";
}

.service-rail {
  position: relative;
  align-self: stretch;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: linear-gradient(180deg, rgba(15, 15, 18, 0.98), rgba(9, 9, 11, 0.99));
  overflow: hidden;
}

.rail-viewport {
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

.rail-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 320ms ease;
}

.rail-slide {
  flex: 0 0 100%;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  color: inherit;
  background: transparent;
  border: none;
  padding: 0;
}

.rail-media-btn {
  appearance: none;
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0;
  width: 100%;
  cursor: zoom-in;
}

.rail-media {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.rail-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 320ms ease, filter 320ms ease;
}

.rail-slide:hover img,
.rail-media-btn:focus-visible img {
  transform: scale(1.04);
  filter: saturate(1.1) brightness(1.04);
}

.rail-copy {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.rail-slide h4 {
  margin: 18px 18px 6px;
  font-size: 18px;
  letter-spacing: -0.02em;
}

.capture-chip {
  margin: 16px 18px 0;
  width: fit-content;
  height: 24px;
  padding: 0 10px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.08);
  display: inline-flex;
  align-items: center;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.82);
  transition: border-color 220ms ease, background 220ms ease;
}

.rail-slide:hover .capture-chip,
.rail-media-btn:focus-visible + .rail-copy .capture-chip {
  border-color: rgba(243, 201, 130, 0.5);
  background: rgba(243, 201, 130, 0.14);
}

.rail-slide p {
  margin: 0 18px 20px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.62;
}

.rail-site-link,
.rail-preview-note {
  margin: 0 18px 16px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(243, 201, 130, 0.95);
}

.rail-site-link {
  border-bottom: 1px solid rgba(243, 201, 130, 0.4);
  transition: color 180ms ease, border-color 180ms ease, transform 180ms ease;
}

.rail-site-link:hover {
  color: rgba(255, 226, 173, 0.98);
  border-color: rgba(255, 226, 173, 0.78);
  transform: translateX(2px);
}

.rail-media-btn:focus-visible {
  outline: 2px solid rgba(243, 201, 130, 0.55);
  outline-offset: -2px;
}

.image-lightbox {
  position: fixed;
  inset: 0;
  z-index: 2400;
  display: grid;
  place-items: center;
  padding: 0;
  background: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(2px);
}

.image-lightbox-panel {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}

.image-lightbox-panel img {
  max-width: 96vw;
  max-height: 96vh;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  background: #000;
  border-radius: 6px;
  box-shadow: 0 24px 100px rgba(0, 0, 0, 0.6);
}

.image-lightbox-close {
  position: fixed;
  top: 16px;
  right: 18px;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(10, 10, 12, 0.65);
  color: #fff;
  font-size: 27px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 200ms ease, border-color 200ms ease;
  z-index: 2401;
}

.image-lightbox-close:hover {
  background: rgba(26, 26, 30, 0.9);
  border-color: rgba(255, 255, 255, 0.46);
}

.rail-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 14px 14px;
}

.rail-btn {
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 19px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 200ms ease, border-color 200ms ease, background 200ms ease;
}

.rail-btn:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, 0.45);
  background: rgba(255, 255, 255, 0.16);
}

.rail-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.rail-dots {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 34px;
}

.rail-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  border: none;
  background: rgba(255, 255, 255, 0.36);
  cursor: pointer;
  transition: width 200ms ease, background 200ms ease;
}

.rail-dot.is-active {
  width: 24px;
  background: #fff;
}

.production-video {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(120% 180% at 88% 0%, rgba(214, 176, 122, 0.1), transparent 42%),
    #0a0a0c;
}

.production-video h2 {
  margin-bottom: 14px;
  font-size: clamp(30px, 4.4vw, 46px);
  line-height: 1.08;
  letter-spacing: -0.03em;
}

.video-strip {
  margin-top: 24px;
  overflow: hidden;
  position: relative;
  padding: 4px 0 8px;
}

.video-strip-track {
  display: flex;
  align-items: stretch;
  gap: 14px;
  width: max-content;
  min-width: 100%;
  will-change: transform;
  animation: video-marquee var(--marquee-duration, 30s) linear infinite;
}

.video-strip-track.is-static {
  animation: none;
}

.video-strip-track.is-reverse {
  animation-direction: reverse;
}

.video-thumb-card {
  position: relative;
  appearance: none;
  padding: 0;
  text-align: left;
  cursor: pointer;
  width: min(640px, 72vw);
  min-width: min(640px, 72vw);
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: #0b0b0d;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.3);
  transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
}

.video-thumb-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
  background: #0a0a0c;
}

.video-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.08) 40%, rgba(0, 0, 0, 0.62) 100%);
}

.video-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(58px, 6.2vw, 90px);
  height: clamp(58px, 6.2vw, 90px);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.95);
  color: #ff3047;
  display: grid;
  place-items: center;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.4);
}

.video-play svg {
  width: 36%;
  height: 36%;
  margin-left: 3px;
}

.video-title {
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 12px;
  font-size: clamp(12px, 1.2vw, 15px);
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.96);
  font-weight: 500;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.65);
}

.video-thumb-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.45);
}

.video-lightbox {
  position: fixed;
  inset: 0;
  z-index: 6000;
  display: grid;
  place-items: center;
  padding: clamp(8px, 2.6vw, 24px);
  background: rgba(0, 0, 0, 0.94);
  backdrop-filter: blur(2px);
  isolation: isolate;
}

.video-lightbox-panel {
  width: min(1360px, 94vw);
  aspect-ratio: 16 / 9;
  max-height: 90svh;
  position: relative;
  background: #000;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 30px 120px rgba(0, 0, 0, 0.7);
}

.video-lightbox-preview {
  position: relative;
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0;
  margin: 0;
  background: #000;
  color: #fff;
  text-align: left;
  cursor: pointer;
}

.video-lightbox-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}

.video-lightbox-preview-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, transparent 28%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, transparent 28%);
}

.video-lightbox-preview-top {
  position: absolute;
  top: clamp(10px, 2.3vw, 18px);
  left: clamp(12px, 2.4vw, 24px);
  right: clamp(12px, 2.4vw, 24px);
  font-size: clamp(12px, 1.5vw, 32px);
  line-height: 1.25;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
}

.video-lightbox-preview-play {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: clamp(66px, 8.3vw, 118px);
  height: clamp(46px, 5.9vw, 82px);
  border-radius: 999px;
  background: #ff253f;
  color: #fff;
  display: grid;
  place-items: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
}

.video-lightbox-preview-play svg {
  width: 34%;
  height: 34%;
  margin-left: 2px;
}

.video-lightbox-preview-pill {
  position: absolute;
  right: clamp(12px, 2.4vw, 24px);
  bottom: clamp(12px, 2.4vw, 20px);
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: clamp(34px, 4vw, 42px);
  padding: 0 clamp(12px, 1.7vw, 18px);
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.34);
  font-size: clamp(11px, 1.2vw, 16px);
  font-weight: 600;
  letter-spacing: 0.01em;
  backdrop-filter: blur(3px);
}

.video-lightbox-preview-pill::before {
  content: "";
  width: 16px;
  height: 12px;
  border-radius: 3px;
  background: #fff;
  box-shadow: inset 3px 0 0 #111;
}

.video-lightbox-panel iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
  background: #000;
}

.video-lightbox-close {
  position: fixed;
  top: 16px;
  right: 18px;
  z-index: 6001;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(10, 10, 12, 0.65);
  color: #fff;
  font-size: 27px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 200ms ease, border-color 200ms ease;
}

.video-lightbox-close:hover {
  background: rgba(26, 26, 30, 0.9);
  border-color: rgba(255, 255, 255, 0.46);
}

@media (max-width: 760px) {
  .video-lightbox {
    padding: 8px;
  }

  .video-lightbox-panel {
    width: 100%;
    max-height: 82svh;
    border-radius: 10px;
  }

  .video-lightbox-preview-top {
    font-size: 13px;
  }

  .video-lightbox-preview-pill {
    font-size: 11px;
    height: 34px;
  }

  .video-lightbox-close {
    top: 8px;
    right: 8px;
    width: 38px;
    height: 38px;
  }
}

@keyframes video-marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 7px));
  }
}

@media (prefers-reduced-motion: reduce) {
  .video-strip-track {
    animation: none;
  }
}

.video-empty {
  margin-top: 24px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.6;
}

.video-empty code {
  color: #f6c982;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.results {
  background:
    radial-gradient(120% 160% at 0% 0%, rgba(214, 176, 122, 0.14), transparent 42%),
    #0b0b0d;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.results h2 {
  margin-bottom: 14px;
  font-size: clamp(30px, 4.4vw, 46px);
  line-height: 1.08;
  letter-spacing: -0.03em;
}

.stats {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.stat-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.08);
}

.stat-pill strong {
  font-size: 21px;
  color: #f6c982;
}

.stat-pill span {
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.86);
}

.final-cta {
  padding-top: 24px;
  padding-bottom: 92px;
}

.final-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
  gap: 24px;
  align-items: center;
  background:
    radial-gradient(140% 200% at 0% 0%, rgba(214, 176, 122, 0.18), transparent 44%),
    #0d0d0f;
  border: 1px solid rgba(214, 176, 122, 0.2);
  border-radius: var(--radius-xl);
  padding: 30px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.46);
}

.final-card img {
  width: 100%;
  min-height: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-lg);
}

.agency-contact {
  padding-top: 16px;
  padding-bottom: 96px;
}

.agency-separator {
  width: 100%;
  height: 2px;
  margin: 0 auto 30px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
  opacity: 0.85;
}

.contact-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 24px;
  align-items: end;
  padding: 32px;
  border-radius: 26px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(120% 140% at 0% 0%, rgba(214, 176, 122, 0.15), transparent 45%),
    linear-gradient(180deg, rgba(14, 14, 16, 0.98), rgba(8, 8, 10, 0.99));
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.44);
}

.contact-main {
  display: grid;
  gap: 10px;
}

.contact-eyebrow {
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(227, 167, 78, 0.95);
}

.contact-title {
  font-size: clamp(26px, 3.2vw, 22px);
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -0.03em;
}

.contact-mail {
  margin-top: 12px;
  display: inline-flex;
  width: fit-content;
  font-size: clamp(20px, 3vw, 18px);
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: #f4f4f4;
  transition: color 200ms ease;
}

.contact-phones {
  margin-top: 2px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  color: #f4f4f4;
  font-size: clamp(14px, 2.6vw, 14px);
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.contact-phones a,
.contact-mail {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-decoration-color: transparent;
}

.contact-phones a:hover,
.contact-mail:hover {
  color: #f8cd8a;
  text-decoration-color: rgba(248, 205, 138, 0.8);
}

.newsletter-side {
  display: grid;
  justify-items: start;
  text-align: center;
  gap: 16px;
}

.newsletter-input {
  width: 100%;
  max-width: 480px;
  height: 40px;
  padding: 0 14px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.08);
  color: #f5f5f5;
}

.newsletter-button {
  height: 40px;
  padding: 0 14px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.08);
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  transition: border-color 220ms ease, background 220ms ease, transform 220ms ease;
}

.newsletter-button:hover {
  transform: translateY(-2px);
  border-color: rgba(214, 176, 122, 0.5);
  color: #0c0c0e;
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
}

.contact-socials {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.social-btn {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #0c0c0e;
  color: #f5f5f5;
  transition: transform 200ms ease, border-color 200ms ease, background 200ms ease, color 200ms ease;
}

.social-btn svg {
  width: 18px;
  height: 18px;
}

.social-btn:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0);
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  color: #0b0b0c;
  box-shadow: 0 12px 30px rgba(214, 176, 122, 0.35);
}

.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 520ms ease, transform 520ms ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1180px) {
  .container {
    width: min(1240px, 100% - 8vw);
  }

  .service-layout {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .service-copy {
    position: static;
  }

  .final-card {
    grid-template-columns: 1fr;
  }

  .contact-shell {
    grid-template-columns: 1fr;
    gap: 18px;
  }
}

@media (max-width: 760px) {
  .section {
    padding: 70px 0;
  }

  .container {
    width: min(1240px, 100% - 6vw);
  }

  .service-jump {
    position: static;
    top: auto;
  }

  .hero {
    padding-top: 100px;
    padding-bottom: 62px;
  }

  .hero-actions {
    margin-top: 24px;
  }

  .btn {
    height: 42px;
    font-size: 12px;
  }

  .jump-pills {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .service-layout {
    grid-template-columns: 1fr;
  }

  .video-thumb-card {
    width: min(560px, 86vw);
    min-width: min(560px, 86vw);
  }

  .video-strip-track {
    --marquee-duration: 24s;
  }

  .agency-contact {
    padding-top: 0;
    padding-bottom: 72px;
  }

  .agency-separator {
    margin-bottom: 20px;
  }

  .contact-shell {
    max-width: 100%;
    padding: 22px 20px;
  }

  .contact-eyebrow {
    font-size: 11px;
  }

  .contact-title {
    font-size: clamp(24px, 7vw, 30px);
  }

  .contact-mail,
  .contact-phones {
    font-size: clamp(20px, 6vw, 24px);
    line-height: 1.3;
  }

  .newsletter-side {
    gap: 12px;
  }

  .social-btn {
    width: 42px;
    height: 42px;
  }
}
</style>
