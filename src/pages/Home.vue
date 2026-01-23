<template>
  <div class="home">
    <FlemRobot />
    <Hero />
    <Showreel />
    <Projects />
    <Services />
    <Clients />
    <Strengths />
    <Studio />
    <!-- <Articles /> -->
    <BigStatement />
  </div>
</template>

<script setup>
import FlemRobot from "../components/FlemRobot.vue";
import Hero from "../components/Hero.vue";
import Showreel from "../components/Showreel.vue";
import Projects from "../components/Projects.vue";
import Services from "../components/Services.vue";
import Clients from "../components/Clients.vue";
import Studio from "../components/Studio.vue";
import Strengths from "../components/Strengths.vue";
// import Articles from "../components/Articles.vue";
import BigStatement from "../components/BigStatement.vue";
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
