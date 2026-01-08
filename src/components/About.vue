<template>
  <section class="section about" id="about">
    <div class="container grid">

      <div class="left">
        <h2>L’audace au service de votre communication.</h2>

        <p>
          Chez Flem, nous croyons que les marques se noient trop souvent dans des
          communications uniformes, prévisibles et sans âme.
          <br /><br />
          <strong>Flem est née de cette volonté de faire autrement.</strong>
          Nous créons des communications audacieuses qui ne se contentent pas de
          parler, mais qui captivent, émeuvent et transforment.
          <br /><br />
          Notre mission est d’être le partenaire stratégique des marques
          visionnaires, en les aidant à raconter leur histoire de manière
          authentique et percutante.
        </p>

        <a href="#services" class="btn btn-primary">
          Découvrir nos services
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  padding-top: 90px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
}

.left h2 {
  font-size: clamp(28px, 3.2vw, 40px);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  max-width: 720px;
}

.left p {
  max-width: 620px;
  font-size: 14px;
  line-height: 1.8;
  color: var(--muted);
  margin-bottom: 32px;
}

.left p strong {
  color: white;
  font-weight: 500;
}
</style>
