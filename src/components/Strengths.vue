<template>
  <section class="section strengths">
    <div class="container">

      <!-- Header -->
      <div class="strengths-header">
        <h2>Pourquoi choisir Flem&nbsp;?</h2>
        <p>
          Flem Agence ne se contente pas de répondre à vos besoins,
          nous les anticipons. Notre force réside dans notre capacité
          à transformer vos idées en résultats concrets.
        </p>
      </div>

      <!-- Strengths grid -->
      <div class="strengths-grid">

        <!-- Card 1 -->
        <div class="strength-card">
          <div class="icon">
            <img src="/icons/team.svg" alt="" />
          </div>
          <h3>Une équipe passionnée</h3>
          <p>
            Chaque projet est une opportunité d’innover. Notre équipe,
            composée d’experts passionnés et polyvalents, s’investit
            pleinement pour assurer la réussite de chaque mission.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="strength-card">
          <div class="icon">
            <img src="/icons/expertise.svg" alt="" />
          </div>
          <h3>Une expertise pluridisciplinaire</h3>
          <p>
            Nous maîtrisons tous les aspects de la communication :
            stratégie, design, digital, production de contenus
            et communication événementielle.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="strength-card">
          <div class="icon">
            <img src="/icons/results.svg" alt="" />
          </div>
          <h3>Une approche orientée résultats</h3>
          <p>
            Votre succès est notre priorité. Chaque action est pensée
            pour générer un impact mesurable et contribuer directement
            à la performance de votre marque.
          </p>
        </div>

        <!-- Card 4 -->
        <div class="strength-card">
          <div class="icon">
            <img src="/icons/values.svg" alt="" />
          </div>
          <h3>Des valeurs solides</h3>
          <p>
            Transparence, audace et exigence guident chacune de nos
            décisions. Nous construisons des relations durables
            basées sur la confiance et la qualité.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
// (Optionnel) Animation GSAP
// import { onMounted } from "vue";
// import { staggerCards } from "@/utils/gsapAnimations";

// onMounted(() => {
//   const cards = document.querySelectorAll(".strength-card");
//   staggerCards(cards);
// });
</script>

<style scoped lang="scss">
.strengths {
  padding-top: 90px;
}

/* HEADER */
.strengths-header {
  max-width: 640px;
  margin-bottom: 60px;
}

.strengths-header h2 {
  font-size: clamp(28px, 3.4vw, 42px);
  font-weight: 500;
  letter-spacing: -0.02em;
  margin-bottom: 18px;
}

.strengths-header p {
  font-size: 14px;
  line-height: 1.7;
  color: var(--muted);
}

/* GRID */
.strengths-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

/* CARD */
.strength-card {
  position: relative;
  background: linear-gradient(180deg, #0f0f12, #0b0b0d);
  border-radius: 22px;
  padding: 36px 30px 38px;
  border: 1px solid rgba(255,255,255,.08);
  transition: transform .35s ease, box-shadow .35s ease;
  overflow: hidden;
}

/* Halo lumineux subtil */
.strength-card::before {
  content: "";
  position: absolute;
  inset: -1px;
  background: radial-gradient(
    400px 200px at top left,
    rgba(214,176,122,.15),
    transparent 60%
  );
  opacity: 0;
  transition: opacity .35s ease;
}

.strength-card:hover::before {
  opacity: 1;
}

.strength-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 60px rgba(0,0,0,.45);
}

/* ICON */
.icon {
  width: 60px;
  height: 60px;
  margin-bottom: 18px;
  border-radius: 14px;
  background: rgba(255,255,255,.04);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon img {
  width: 50px;
  height: 50px;
  opacity: .85;
}

/* TEXT */
.strength-card h3 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
}

.strength-card p {
  font-size: 13px;
  line-height: 1.65;
  color: var(--muted);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .strengths-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .strengths {
    padding-top: 70px;
  }
  .strengths-header {
    margin-bottom: 40px;
  }
  .strength-card {
    padding: 28px 24px 30px;
  }
  .icon {
    width: 52px;
    height: 52px;
  }
  .icon img {
    width: 42px;
    height: 42px;
  }
}
</style>
