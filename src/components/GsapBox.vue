<template>
    <div class="Gsap-box">
        <div class="box-container box-container-left">
            <div class="html box">
                <img draggable='false'
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/technologies%2Fhtml.png?alt=media&token=fcf4401d-696a-4a7a-88de-6d8491d6b836"
                    alt="html">
            </div>
            <div class="css box">
                <img draggable='false'
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/technologies%2Fcss.jpg?alt=media&token=7f2abd3a-711e-457a-9730-b67f3a65d891">
            </div>
            <div class="js box">
                <img draggable='false'
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/technologies%2Fjs.png?alt=media&token=242bb158-ac80-4cbb-b2fb-4333878165e4">
            </div>
            <div class="react box">
                <img draggable='false'
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/technologies%2Freact.png?alt=media&token=e9ab3c91-9463-423a-8c88-3fcbd45cc00f">
            </div>
            <div class="vue box">
                <img draggable='false'
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/technologies%2Fvue.jpg?alt=media&token=e3465108-61ba-45fa-bc2e-457f4fee1300">
            </div>
        </div>

        <div class="box-container box-container-right">
            <div class="postgresql box">
                <img draggable='false'
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/technologies%2Fpg.png?alt=media&token=e1bafd2d-b4d7-401f-9d41-9a01406c005b">
            </div>
            <div class="go box">
                <img draggable='false'
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/technologies%2Fgo.png?alt=media&token=03e819db-5a4a-45f9-8b92-02aad2e488d9">
            </div>
            <div class="node box">
                <img draggable='false'
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/technologies%2Fnode.png?alt=media&token=ecfee7d2-d537-4c4e-8116-9945d84ebe80">
            </div>
            <div class="express box">
                <img draggable='false'
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/technologies%2Fexpress.png?alt=media&token=7c4e39f9-fdd5-495b-b9bc-154a4b7be884">
            </div>
            <div class="firebase box">
                <img draggable='false'
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/technologies%2Ffirebase.png?alt=media&token=62e89e8a-bce5-48f8-92c8-1e8da7c20f1e">
            </div>
        </div>

        <div class="box-container box-container-left">
            <div class="git box">
                <img draggable='false'
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/technologies%2Fgit.png?alt=media&token=5c80e5af-87d9-46b3-b9b5-e4d928200276">
            </div>
            <div class="java box">
                <img draggable='false'
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/technologies%2Fjava.png?alt=media&token=aed115e1-e2f7-4e06-a7d7-5d7c28b1bffe">
            </div>
            <div class="c++ box">
                <img draggable='false'
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/technologies%2Fc%2B%2B.jpg?alt=media&token=64fea908-da73-496f-accb-8de26680c02c">
            </div>
            <div class="python box">
                <img draggable='false'
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/technologies%2Fpython.jpg?alt=media&token=00c276f7-7e4d-44c5-adf2-8212325d6832">
            </div>
            <div class="docker box">
                <img draggable='false'
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/technologies%2Fdocker.jpg?alt=media&token=0f9f938d-0e90-4eb1-bea6-e88cb6b8a53c">
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { onMounted } from 'vue'
gsap.registerPlugin(ScrollTrigger)

// Animación de las cajas.
// Esta animación mueve las cajas en el eje Y con un efecto de rebote.
// Al mismo tiempo que en el eje x en forma de slider de inicio a fin
const animateBox = (boxes) => {
    const tl1 = gsap
        .timeline()
        .to(boxes, {
            duration: 2,
            opacity: 1,
            scale: 1.65,
            ease: 'circ.out',
        })
        .to(boxes, {
            duration: 2,
            scale: 1,
            ease: 'circ.in',
        })
    return tl1
}

const animateBoxContainerLeft = (boxContainer) => {
    const tl = gsap.timeline()
    tl.to(boxContainer, {
        duration: 5,
        x: '50%',
        opacity: 1,
        ease: 'circ.out',
    })
        .to(boxContainer, {
            duration: 5,
            x: '100%',
            opacity: 0,
            ease: 'circ.in',
        })
    return tl
}

const animateBoxContainerRight = (boxContainer) => {
    const tl = gsap.timeline()
    tl.to(boxContainer, {
        duration: 4,
        x: '-50%',
        opacity: 1,
        ease: 'circ.out',
    })
        .to(boxContainer, {
            duration: 4,
            x: '-100%',
            opacity: 0,
            ease: 'circ.in',
        })
    return tl
}

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

// Animar las cajas cuando se monta el componente
onMounted(() => {
    ScrollTrigger.create({
        animation: animationTitle('.technologies-title'),
        trigger: '.technologies-section',
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: 1,
        markers: false,
    })
    ScrollTrigger.create({
        animation: animateBox('.box'),
        trigger: '.Gsap-box',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1,
        markers: false,
    })
    ScrollTrigger.create({
        animation: animateBoxContainerLeft('.box-container-left'),
        trigger: '.technologies-section',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1,
        markers: false,
    })
    ScrollTrigger.create({
        animation: animateBoxContainerRight('.box-container-right'),
        trigger: '.technologies-section',
        start: 'top 40%',
        end: 'bottom 40%',
        scrub: 1,
        markers: false,
    })
})

</script>

<style scoped>
.Gsap-box {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    position: relative;

    @media screen and (max-width: 600px) {
        height: 50%;
    }
}

.box-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;

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
    width: 6em;
    height: 6em;
    aspect-ratio: 1/1;

    @media screen and (max-width: 900px) {
        width: 12%;
        height: 12%;
    }
}

.box>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1em;
}
</style>