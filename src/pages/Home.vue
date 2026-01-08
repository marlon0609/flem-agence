<template>
  <div class="home">
    <FlemRobot />
    <Hero />
    <Showreel />
    <About />
    <Services />
    <Method />
    <Strengths />
    <Projects />
    <Clients />
    <!-- <Articles /> -->
    <BigStatement />
  </div>
</template>

<script setup>
import FlemRobot from "../components/FlemRobot.vue";
import Hero from "../components/Hero.vue";
import Showreel from "../components/Showreel.vue";
import About from "../components/About.vue";
import Services from "../components/Services.vue";
import Method from "../components/Method.vue";
import Strengths from "../components/Strengths.vue";
import Projects from "../components/Projects.vue";
import Clients from "../components/Clients.vue";
// import Articles from "../components/Articles.vue";
import BigStatement from "../components/BigStatement.vue";
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
