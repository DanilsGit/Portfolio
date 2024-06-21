<script setup>
import WelcomeSection from './components/WelcomeSection.vue'
import Technologies from './components/Technologies.vue'
import Projects from './components/Projects.vue'
</script>

<template>
  <main class="main">
    <WelcomeSection />
    <Technologies />
    <Projects />
  </main>
</template>

<style scoped>

.main {
  display: flex;
  flex-direction: column;
}



</style>
