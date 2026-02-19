<template>
  <section class="hero">
    <div class="container inner">
      <h1>
        Briser les codes de la <br />
        communication pour <br />
        créer des expériences <br />
        qui marquent.
      </h1>

      <p class="subtitle">
        Chaque marque a une histoire.
        <strong>Flem Agence la transforme en une expérience mémorable</strong>,
        grâce à une communication audacieuse, authentique et sur mesure.
      </p>

      <div class="actions">
        <a class="btn btn-primary" href="#about">Découvrir l’agence</a>
        <a class="btn btn-outline" href="#services">Nos services</a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  min-height: 92vh;
  display: flex;
  align-items: center;
  padding-top: 72px;
  position: relative;
}

.inner {
  padding: 48px 0 32px;
  position: relative;
  z-index: 2;
}

h1 {
  margin: 0;
  font-weight: 700;
  line-height: 1.06;
  font-size: clamp(40px, 5.2vw, 72px);
  letter-spacing: -0.03em;
  max-width: 980px;
  text-shadow: 0 10px 28px rgba(0, 0, 0, 0.45);
}

.subtitle {
  margin-top: 24px;
  max-width: 620px;
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
  text-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
}

.subtitle strong {
  color: white;
  font-weight: 500;
}

.actions {
  margin-top: 34px;
  display: flex;
  gap: 14px;
}

@media (max-width: 720px) {
  .hero {
    min-height: 82vh;
    padding-top: 96px;
  }

  .inner {
    padding: 36px 0 28px;
    max-width: 92vw;
  }

  h1 {
    font-size: clamp(30px, 9.2vw, 44px);
    line-height: 1.12;
  }

  h1 br {
    display: none;
  }

  .subtitle {
    font-size: 14px;
    max-width: 88vw;
  }

  .actions {
    flex-wrap: wrap;
  }
}
</style>
