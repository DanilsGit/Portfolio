<script setup>
import { ref } from 'vue'
const counter = ref(0)
const addCounter = () => {
    counter.value++
}
</script>

<template>
    <div class="welcome-section">
        <h1>Bienvenido</h1>
        <h3>{{ counter }}</h3>
        <button @click="addCounter">Incrementar</button>
    </div>
</template>

<style scoped>
.welcome-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
</style>