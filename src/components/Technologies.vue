<template>

    <section class="technologies-section">
        <h1 class="technologies-title">There's always something new to learn</h1>
        <GsapBox />
    </section>
</template>

<script setup>
import GsapBox from './GsapBox.vue'
</script>

<style scoped>
.technologies-title{
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