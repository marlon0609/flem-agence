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
}

.inner {
  padding: 48px 0 32px;
}

h1 {
  margin: 0;
  font-weight: 500;
  line-height: 1.06;
  font-size: clamp(40px, 5.2vw, 72px);
  letter-spacing: -0.03em;
  max-width: 980px;
}

.subtitle {
  margin-top: 24px;
  max-width: 620px;
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
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

@media (max-width: 560px) {
  .actions {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
