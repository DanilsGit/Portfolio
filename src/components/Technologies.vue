<template>
    
    <section class="technologies-section">
        <h1>Tecnologías dominadas</h1>
        <div class="Gsap-box">
            <div class="box-container box-container-left">
                <div class="js box"></div>
                <div class="html box"></div>
                <div class="css box"></div>
            </div>

            <div class="box-container box-container-right">
                <div class="vue box"></div>
                <div class="react box"></div>
                <div class="node box"></div>
            </div>


            <div class="box-container box-container-left">
                <div class="postgresql box"></div>
                <div class="express box"></div>
                <div class="go box"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { onMounted } from 'vue'

// Animación de las cajas.
// Esta animación mueve las cajas en el eje Y con un efecto de rebote.
// Al mismo tiempo que en el eje x en forma de slider de inicio a fin

gsap.registerPlugin(ScrollTrigger)

const animateBox = (boxes) => {
    const tl1 = gsap
        .timeline()
        .to(boxes, {
            duration: 2,
            opacity: 1,
            scale: 1.4,
        })
        .to(boxes, {
            duration: 2,
            scale: 1,
        })
    ScrollTrigger.create({
        animation: tl1,
        trigger: '.technologies-section',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1,
        markers: false,
    })
}

const animateBoxContainerLeft = (boxContainer) => {
    const tl = gsap.timeline()
    tl.to(boxContainer, {
        duration: 4,
        x: '100%',
        opacity: 1,
    })
    .to(boxContainer, {
        duration: 4,
        x: '200%',
        opacity: 0,
    })
    ScrollTrigger.create({
        animation: tl,
        trigger: '.technologies-section',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1,
        markers: true,
    })
}

const animateBoxContainerRight = (boxContainer) => {
    const tl = gsap.timeline()
    tl.to(boxContainer, {
        duration: 4,
        x: '-100%',
        opacity: 1,
    })
    .to(boxContainer, {
        duration: 4,
        x: '-200%',
        opacity: 0,
    })
    ScrollTrigger.create({
        animation: tl,
        trigger: '.technologies-section',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1,
        markers: true,
    })
}


// Animar las cajas cuando se monta el componente
onMounted(() => {
    const boxContainerLeft = document.querySelectorAll('.box-container-left')
    const boxContainerRight = document.querySelectorAll('.box-container-right')
    const boxes = document.querySelectorAll('.box')
    animateBoxContainerLeft(boxContainerLeft)
    animateBoxContainerRight(boxContainerRight)
    animateBox(boxes)
})
</script>

<style scoped>
.technologies-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #c7c7c7;
}

.Gsap-box {
    width: 100%;
    height: 80%;
    background-color: red;
    display: flex;
    flex-direction: column;
    position: relative;
}
.box-container, .box-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;

    position: absolute;
    transform: translateY(-50%);
    opacity: 0;
}

.box-container:nth-child(1) {
    top: 10%;
    left: -25%;
}

.box-container:nth-child(2) {
    top: 50%;
    right: -25%;
}

.box-container:nth-child(3) {
    top: 90%;
    left: -25%;
}





.box {
    opacity: 1;
    width: 8em;
    height: 8em;
    background-color: blue;
}
</style>