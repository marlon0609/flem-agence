<template>
  <div class="page">
    <Navbar />
    <FlemBackground />

    <!-- CONTENU DES PAGES -->
    <main>
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import FlemBackground from "./components/FlemBackground.vue";
</script>

<style scoped>
.page {
  min-height: 100vh;
}
main {
  overflow-x: hidden;
}
</style>
