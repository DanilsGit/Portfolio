<template>
  <main class="main">
    <WelcomeSection />
    <Technologies />
    <Experience />
    <Projects />
  </main>
</template>

<script setup>
import WelcomeSection from './components/WelcomeSection.vue'
import Technologies from './components/Technologies.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  gap: 2em;
}

body {
--background: #f3f4ed;
--backgroundDark: #1e1e24;
}
</style>
