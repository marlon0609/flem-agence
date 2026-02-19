<template>
  <section class="section services" id="services">
    <div class="container">

      <!-- Header -->
      <div class="services-header">
        <h2>Ce que nous proposons</h2>
        <p>
          Chez Flem Agence, chaque stratégie est pensée sur mesure.
          Nous combinons créativité, intelligence et audace pour concevoir
          des campagnes impactantes et durables.
        </p>
      </div>

      <!-- Services grid -->
      <div class="services-grid">

        <div class="service-card">
          <span class="index">01</span>
          <h3>Conseils & Stratégie</h3>
          <p>
            Nous analysons vos besoins, votre marché et votre audience afin
            de concevoir des stratégies sur mesure qui maximisent votre potentiel
            et assurent une croissance durable.
          </p>
        </div>

        <div class="service-card">
          <span class="index">02</span>
          <h3>Identité visuelle et graphique</h3>
          <p>
            Votre image est bien plus qu’un logo. Nous créons des identités
            visuelles fortes à travers logos, chartes graphiques et supports
            de communication qui traduisent l’âme de votre marque.
          </p>
        </div>

        <div class="service-card">
          <span class="index">03</span>
          <h3>Spot publicitaire</h3>
          <p>
            Grâce au storytelling, nous transformons chaque publicité en une
            histoire captivante, avec des visuels impactants et des musiques
            mémorables pour engager émotionnellement votre audience.
          </p>
        </div>

        <div class="service-card">
          <span class="index">04</span>
          <h3>Relations médias</h3>
          <p>
            Nous construisons des relations solides avec journalistes,
            influenceurs et leaders d’opinion afin d’assurer une visibilité
            maximale et crédible à votre marque.
          </p>
        </div>

        <div class="service-card">
          <span class="index">05</span>
          <h3>Réseaux sociaux</h3>
          <p>
            Nous exploitons tout le potentiel du digital pour renforcer
            votre présence en ligne, engager votre audience et produire
            des résultats concrets sur chaque plateforme.
          </p>
        </div>

        <div class="service-card">
          <span class="index">06</span>
          <h3>Communication événementielle</h3>
          <p>
            Nous concevons des événements immersifs et mémorables :
            lancements de produits, soirées d’entreprise ou animations
            commerciales, toujours en cohérence avec votre identité.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.services {
  padding-top: 110px;
}

/* HEADER */
.services-header {
  max-width: 680px;
  margin-bottom: 80px;
}

.services-header h2 {
  font-size: clamp(30px, 3.6vw, 44px);
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-bottom: 20px;
}

.services-header p {
  font-size: 15px;
  line-height: 1.75;
  color: var(--muted);
}

/* GRID */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

/* CARD */
.service-card {
  position: relative;
  background:
    linear-gradient(180deg, #0f0f12, #0b0b0d);
  border-radius: 24px;
  padding: 40px 34px 42px;
  border: 1px solid #e3a74e;
  overflow: hidden;
  transition: transform .45s ease, box-shadow .45s ease;
}

/* NUMÉRO */
.index {
  position: absolute;
  top: 22px;
  right: 26px;
  font-size: 46px;
  font-weight: 600;
  letter-spacing: -0.04em;
  color: #e3a74e;
  pointer-events: none;
}

/* Ligne structurelle */
.service-card::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(214,176,122,.55),
    rgba(255,255,255,.12)
  );
  opacity: .15;
}

/* Hover */
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 40px 80px rgba(0,0,0,.55);
}

/* TITRE */
.service-card h3 {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 16px;
  max-width: 220px;
}

/* TEXTE */
.service-card p {
  font-size: 13.5px;
  line-height: 1.7;
  color: var(--muted);
  max-width: 340px;
}

/* RESPONSIVE */
@media (max-width: 1100px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .services {
    padding-top: 80px;
  }
  .services-header {
    margin-bottom: 50px;
  }
  .services-grid {
    grid-template-columns: 1fr;
  }

  .index {
    font-size: 36px;
  }

  .service-card {
    padding: 30px 26px 32px;
  }

  .service-card h3 {
    font-size: 16px;
  }

  .service-card p {
    font-size: 13px;
  }
}
</style>
