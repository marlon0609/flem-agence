<template>
  <section class="section studio">
    <div class="container studio-layout">

      <!-- LEFT CONTENT -->
      <div class="studio-text">
        <div class="studio-icons" aria-hidden="true">
          <span class="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
              <path d="M8 11v1a4 4 0 0 0 8 0v-1" />
              <path d="M12 18v3" />
            </svg>
          </span>
          <span class="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="7" width="13" height="10" rx="2" />
              <path d="M16 10.5 21 8v8l-5-2.5" />
            </svg>
          </span>
          <span class="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="6" width="18" height="14" rx="2" />
              <circle cx="12" cy="13" r="3.5" />
              <path d="M7.5 3.5h3L12 6" />
            </svg>
          </span>
        </div>

        <h2>Notre Studio de Création</h2>

        <p>
          Un espace dédié à la production de contenus haut de gamme.
          Podcasts, vidéos, shootings : donnez vie à vos idées avec
          notre équipement de pointe et l'accompagnement de notre équipe.
        </p>

        <a
          href="https://wa.me/22870799999"
          target="_blank"
          class="studio-cta"
        >
          Découvrir le Studio
        </a>
      </div>

      <!-- RIGHT IMAGE -->
      <div class="studio-visual">
        <img
          src="/images/flem-studio.jpeg"
          alt="Studio de création Flem Agence"
        />
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.studio {
  padding: 140px 0;
  background: radial-gradient(
    60% 60% at 50% 0%,
    rgba(214,176,122,.06),
    transparent 70%
  );
}

/* LAYOUT */
.studio-layout {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 90px;
  align-items: center;
}

/* LEFT */
.studio-text {
  max-width: 560px;
}

.studio-icons {
  display: flex;
  gap: 12px;
  margin-bottom: 22px;
}

.studio-icons .icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(214,176,122,.14);
  color: #d6b07a;
  display: grid;
  place-items: center;
  transition: background .25s ease, color .25s ease, box-shadow .25s ease;
}

.studio-icons .icon:hover {
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  color: #0b0b0c;
  box-shadow: 0 10px 28px rgba(214,176,122,.35);
}

.studio-text h2 {
  font-size: clamp(32px, 4vw, 54px);
  font-weight: 500;
  letter-spacing: -0.035em;
  margin-bottom: 22px;
}

.studio-text p {
  font-size: 15px;
  line-height: 1.75;
  color: var(--muted);
  margin-bottom: 36px;
}

/* CTA */
.studio-cta {
  display: inline-block;
  padding: 14px 32px;
  border-radius: 999px;
  background: linear-gradient(135deg, #e0851e, #d5ab6f, #e0851e);
  color: #000;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: transform .3s ease, box-shadow .3s ease;
  box-shadow: 0 14px 40px rgba(214,176,122,.35);
}

.studio-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 48px rgba(214,176,122,.45);
}

/* IMAGE */
.studio-visual {
  position: relative;
  border-radius: 26px;
  overflow: hidden;
}

.studio-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.05) contrast(1.05);
}

/* Glow discret */
.studio-visual::after {
  content: "";
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 80px rgba(0,0,0,.55);
  pointer-events: none;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .studio-layout {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .studio {
    padding: 100px 0;
  }
}
</style>
