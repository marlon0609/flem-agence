<template>
    <main class="agence-page">
        <About />
        <section class="section results" ref="resultsRef">
            <div class="container results-inner">
                <p class="kicker">et les résultats</p>
                <h2>Plus de 7 années à transformer <br> Des idées en résultats</h2>
                <p class="lead">
                    Depuis plus de sept ans, nous accompagnons des marques, entrepreneurs et personnalités
                    publiques dans la construction et le rayonnement de leur communication, avec des résultats
                    concrets et durables.
                </p>
                <div class="stats">
                    <div class="stat">
                        <span class="value" data-target="137">+0</span>
                        <span class="label">campagnes de lancement produits</span>
                    </div>
                    <div class="stat">
                        <span class="value" data-target="12">+0</span>
                        <span class="label">chaînes Youtube accompagnées</span>
                    </div>
                    <div class="stat">
                        <span class="value" data-target="49">+0</span>
                        <span class="label">marques accompagnées</span>
                    </div>
                </div>
            </div>
        </section>
        <Method />
        <Clients />
    </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import About from "../components/About.vue";
import Method from "../components/Method.vue";
import Clients from "../components/Clients.vue";

const resultsRef = ref(null);
let observer;

const animateCounters = (container) => {
  if (!container) {
    return;
  }

  const duration = 2000;
  const counters = Array.from(container.querySelectorAll(".value[data-target]"));

  counters.forEach((counter) => {
    const target = Number(counter.getAttribute("data-target")) || 0;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(target * progress);
      counter.textContent = `+${value}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        counter.textContent = `+${target}`;
      }
    };

    requestAnimationFrame(tick);
  });
};

onMounted(() => {
  if (!resultsRef.value) {
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters(entry.target);
          observer.disconnect();
        }
      });
    },
    { threshold: 0.35 }
  );

  observer.observe(resultsRef.value);
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.agence-page {
    display: flex;
    flex-direction: column;
}

.results {
    padding: 110px 0;
    background: #0b0b0d;
    border-top: 1px solid rgba(255,255,255,.06);
    border-bottom: 1px solid rgba(255,255,255,.06);
}

.results-inner {
    text-align: center;
    max-width: 920px;
}

.kicker {
    color: rgba(255,255,255,.5);
    text-transform: uppercase;
    letter-spacing: .2em;
    font-size: 10px;
    margin-bottom: 14px;
}

.results h2 {
    margin: 0 0 16px;
    font-size: clamp(26px, 4vw, 44px);
    font-weight: 700;
    letter-spacing: -0.02em;
}

.lead {
    color: rgba(255,255,255,.7);
    font-size: 16px;
    line-height: 1.7;
    margin: 0 auto 40px;
    max-width: 720px;
}

.stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    padding-top: 18px;
    border-top: 1px solid rgba(255,255,255,.08);
}

.stat {
    display: grid;
    gap: 8px;
    padding: 6px 8px 0;
}

.value {
    font-size: clamp(28px, 4.2vw, 44px);
    font-weight: 600;
    letter-spacing: -0.02em;
}

.label {
    color: rgba(255,255,255,.7);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: .12em;
    line-height: 1.5;
}

@media (max-width: 860px) {
    .results {
        padding: 90px 0;
    }
    .results h2 br {
        display: none;
    }

    .stats {
        grid-template-columns: 1fr;
        gap: 24px;
    }
}
</style>
