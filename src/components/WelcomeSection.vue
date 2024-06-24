<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
    const animationTitle = (title) => {
        const tl = gsap.timeline()
        tl.to(title, {
            duration: 5,
            opacity: 1,
            top: 0,
            ease: 'circ.out',
            color: 'white'
        })
        return tl
    }
    // play
    animationTitle('.welcome-title')
})
</script>

<template>
    <div class="welcome-section">
        <h1 class="welcome-title">Welcome to my portfolio</h1>
    </div>
</template>

<style scoped lang="scss">
.welcome-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.welcome-title {
    color: $semi-black;
    font-size: 3em;
    font-weight: 600;
    opacity: 0;
    position: relative;
    top: 10%;
    text-align: center;
}
</style>