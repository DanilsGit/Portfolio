<template>

    <section class="technologies-section">
        <h1 class="technologies-title">There's always something new to learn</h1>
        <GsapBox />
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import GsapBox from './GsapBox.vue'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    const animationTitle = (title) => {
        const tl = gsap.timeline()
        tl.to(title, {
            duration: 2,
            opacity: 1,
            top: 0,
            ease: 'circ.out',
        })
        return tl
    }

    ScrollTrigger.create({
        animation: animationTitle('.technologies-title'),
        trigger: '.technologies-section',
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: 1,
        markers: false,
    })
})

</script>

<style scoped>
.technologies-title {
    font-size: 3em;
    margin-bottom: 1em;
    font-weight: 600;
    opacity: 0;
    position: relative;
    top: 10%;
    text-align: center;
}

.technologies-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}
</style>