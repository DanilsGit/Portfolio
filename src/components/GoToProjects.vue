<template>

    <section class="goToProjects-section">
        <h1 class="goToProjects-section-title">Here Are Some of My Creations</h1>
        <router-link :to="{ name: 'projects' }">Explore</router-link>
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
        animation: animationTitle('.goToProjects-section-title'),
        trigger: '.goToProjects-section',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1,
        markers: false,
    })
})
</script>

<style scoped lang="scss">
.goToProjects-section {
    display: flex;
    gap: 2em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    background-color: $semi-black;


    h1 {
        font-size: 3em;
        margin-bottom: 1em;
        font-weight: 600;
        opacity: 0;
        position: relative;
        top: 10%;
        text-align: center;
    }

    a {
        font-size: 1.5em;
        padding: 0.5em 3em;
        color: $semi-white;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        border-bottom: 2px solid $semi-white;
        border-radius: 0.2em;

        &:hover {
            background-color: $semi-white;
            color: $semi-black;
        }
    }


}
</style>