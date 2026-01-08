<template>
  <section class="section projects" id="work">
    <div class="container header">
      <h3>Des marques ambitieuses nous ont confié leur communication</h3>
    </div>

    <!-- Scroll horizontal -->
    <div class="scroll-wrap">
      <div class="scroll-track">

        <article
          v-for="(project, i) in projects"
          :key="i"
          class="project-card"
        >
          <div class="image">
            <img :src="project.image" :alt="project.title" />
          </div>

          <div class="meta">
            <span>{{ project.category }}</span>
            <h4>{{ project.title }}</h4>
            <p>{{ project.description }}</p>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: "Nabou Fall Akademy",
    category: "Personal Branding & Éducation Digitale",
    image: "/images/nabou-fall-akademy-cover.png",
    description:
      "Accompagnement stratégique d’une académie de formation en ligne à forte notoriété, avec un travail sur l’image de marque, la clarté de l’offre et la valorisation des contenus pédagogiques."
  },
  {
    title: "L’Investisseur Africain",
    category: "Média Financier & Stratégie de Contenus",
    image: "/images/investisseur-africain-cover.png",
    description:
      "Structuration de l’identité éditoriale et déploiement de contenus à forte valeur ajoutée pour démocratiser l’investissement et l’éducation financière en Afrique."
  },
  {
    title: "Esther Boua Consulting",
    category: "Conseil & Image de Marque Corporate",
    image: "/images/esther-boua-consulting-cover.png",
    description:
      "Refonte de la présence digitale d’un cabinet de conseil, avec une approche premium axée sur la crédibilité, l’expertise et la confiance."
  }
];
</script>

<style scoped lang="scss">
.projects {
  padding-top: 60px;
}

.header h3 {
  font-size: clamp(20px, 2.4vw, 26px);
  font-weight: 500;
  letter-spacing: -0.02em;
  max-width: 620px;
  margin-bottom: 32px;
}

.scroll-wrap {
  overflow-x: auto;
  padding-left: max(6vw, calc((100vw - 1180px) / 2));
  scrollbar-width: none;
}
.scroll-wrap::-webkit-scrollbar {
  display: none;
}

.scroll-track {
  display: flex;
  gap: 24px;
}

.project-card {
  flex: 0 0 360px;
  background: #0f0f12;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.08);
  transition: transform .35s ease, box-shadow .35s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 60px rgba(0,0,0,.45);
}

.image {
  height: 320px;
  position: relative;
  overflow: hidden;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .6s ease;
}

.image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0) 40%,
    rgba(0,0,0,.45) 100%
  );
  pointer-events: none;
}

.project-card:hover {
  box-shadow:
    0 30px 60px rgba(0,0,0,.45),
    inset 0 0 0 1px rgba(255,255,255,.12);
}


.project-card:hover img {
  transform: scale(1.06);
}

.meta {
  padding: 18px 20px 24px;
}

.meta span {
  display: block;
  font-size: 11px;
  color: var(--muted2);
  margin-bottom: 6px;
}

.meta h4 {
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: 500;
}

.meta p {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: var(--muted);
}

@media (max-width: 600px) {
  .project-card {
    flex: 0 0 300px;
  }
}
</style>
