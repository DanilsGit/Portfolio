<template>
    <main class="main">
        <PresentationSection />
        <Technologies />
        <Experience />
        <Footer />
    </main>
</template>

<script setup>
import WelcomeSection from '../components/WelcomeSection.vue'
import Technologies from '../components/Technologies.vue'
import Experience from '../components/Experience.vue'
import PresentationSection from '../components/PresentationSection.vue'
import Footer from '../components/Footer.vue'

import { onMounted } from 'vue'


onMounted(() => {
    document.title = 'Danils Portfolio'
    window.scrollTo(0, 0)
})
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
</style>
