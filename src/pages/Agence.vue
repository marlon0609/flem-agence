<template>
    <main class="agence-page">
        <About />
        <Method />
    </main>
</template>

<script setup>
import About from "../components/About.vue";
import Method from "../components/Method.vue";
</script>

<style scoped>
.agence-page {
    display: flex;
    flex-direction: column;
}
</style>