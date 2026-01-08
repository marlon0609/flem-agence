<template>
  <section class="section method">
    <div class="container">

      <!-- Header -->
      <div class="method-header">
        <h2>Notre méthode</h2>
        <p>
          Chaque client est unique. Chez Flem Agence, nous avons développé
          une approche claire et efficace pour transformer vos idées
          en résultats concrets.
        </p>
      </div>

      <!-- Timeline -->
      <div class="timeline">

        <div class="timeline-step left">
          <span class="number">01</span>
          <div class="content">
            <h3>Analyse approfondie</h3>
            <p>
              Nous prenons le temps de comprendre vos besoins, votre audience
              et vos objectifs afin de poser des bases solides et pertinentes.
            </p>
          </div>
        </div>

        <div class="timeline-step right">
          <span class="number">02</span>
          <div class="content">
            <h3>Créativité audacieuse</h3>
            <p>
              Nous cassons les codes pour concevoir des solutions créatives,
              sur mesure et alignées avec l’identité de votre marque.
            </p>
          </div>
        </div>

        <div class="timeline-step left">
          <span class="number">03</span>
          <div class="content">
            <h3>Excellence dans l’exécution</h3>
            <p>
              Nous assurons une exécution irréprochable, jusqu’au moindre
              détail, pour garantir un rendu final à la hauteur de vos ambitions.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.method {
  padding: 140px 0;
}

/* HEADER */
.method-header {
  max-width: 620px;
  margin-bottom: 100px;
}

.method-header h2 {
  font-size: clamp(30px, 3.6vw, 44px);
  font-weight: 500;
  letter-spacing: -0.03em;
  margin-bottom: 22px;
}

.method-header p {
  font-size: 15px;
  line-height: 1.75;
  color: var(--muted);
}

/* TIMELINE */
.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

/* Ligne centrale */
.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(214,176,122,.4),
    transparent
  );
  transform: translateX(-50%);
}

/* STEP */
.timeline-step {
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 120px;
}

.timeline-step.left {
  justify-content: flex-end;
  padding-right: 60px;
}

.timeline-step.right {
  justify-content: flex-start;
  padding-left: 60px;
}

/* NUMÉRO */
.number {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 64px;
  font-weight: 500;
  letter-spacing: -0.04em;
  color: rgba(255,255,255,.06);
  top: -18px;
  pointer-events: none;
}

/* CONTENU */
.content {
  max-width: 360px;
}

.content h3 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 14px;
}

.content p {
  font-size: 14px;
  line-height: 1.75;
  color: var(--muted);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .timeline::before {
    left: 16px;
  }

  .timeline-step,
  .timeline-step.left,
  .timeline-step.right {
    justify-content: flex-start;
    padding: 0 0 0 40px;
  }

  .number {
    left: 16px;
    transform: none;
    font-size: 40px;
  }
}
</style>
