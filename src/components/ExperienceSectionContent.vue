<template>
    <div class="experience-section-content">
        <div class="left">
            <div class="startExperience"></div>
            <div class="desktopContent">
                <div class="desktopContentSection" v-for="exp in props.experience" :key="exp.year">
                    <h2>{{ exp.year }}</h2>
                    <p>{{ exp.title }}</p>
                    <p>{{ exp.description }}</p>
                </div>
            </div>
        </div>

        <div class="right">

            <!-- mobile content -->
            <div class="mobileContent">
                <div v-for="exp in props.experience" :key="exp.year" class="mobileContentSection">
                    <img :src="exp.img" alt="Experience" class="mobilePhoto" />
                    <h2>{{ exp.year }}</h2>
                    <p>{{ exp.title }}</p>
                    <p>{{ exp.description }}</p>
                </div>
            </div>

            <!-- desktop content -->

            <div class="experience-ImageContainer">
                <img v-for="exp in props.experience" :key="exp.year" :src="exp.img" alt="Experience"
                    class="experience-image" />
            </div>
        </div>
    </div>
</template>

<script setup>
// Recibir props: Array de objetos:
const props = defineProps({
    experience: Array
})

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { onMounted } from 'vue'
gsap.registerPlugin(ScrollTrigger)

const animateDiv = (div) => {
    const tl1 = gsap
        .timeline()
        .to(div, {
            duration: 2,
            opacity: 1,
            left: 0,
            ease: 'circ.out',
        })
    return tl1
}

onMounted(() => {
    // Selecciona todos los elementos con la clase .desktopContentSection
    const sections = document.querySelectorAll('.desktopContentSection');

    const mobileSections = document.querySelectorAll('.mobileContentSection');

    // Itera sobre cada sección
    sections.forEach(section => {
        // Crea un ScrollTrigger para cada sección
        ScrollTrigger.create({
            // Usa una función para animar la sección actual
            animation: animateDiv(section),
            trigger: section,
            start: 'top 90%',
            end: 'bottom 90%',
            scrub: 1,
            markers: false,
        });

    });
    mobileSections.forEach(section => {
        // Crea un ScrollTrigger para cada sección
        ScrollTrigger.create({
            // Usa una función para animar la sección actual
            animation: animateDiv(section),
            trigger: section,
            start: 'top 100%',
            end: 'bottom 100%',
            scrub: 1,
            markers: false,
        });

    });
})

</script>

<style scoped>
.experience-title {
    font-size: clamp(2em, 4vw, 3em);
    text-align: center;
    margin-bottom: 2em;
}

.experience-section-content h2 {
    font-size: clamp(2em, 4vw, 3em);
}

.experience-section-content p {
    font-size: clamp(1em, 2vw, 1.9em);
    line-height: 1.4;
}


.experience-section-content {
    display: flex;

}

.left {
    width: 50%;
    border-left: 4px solid #000;
    margin-left: 2em;
    position: relative;
}

.startExperience {
    background-color: #000;
    border-radius: 50%;
    width: 4em;
    height: 4em;
    top: -2em;
    left: -2em;
    position: absolute;
}

.right {
    height: 100vh;
    /* outline:1px solid purple; */
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.desktopContent {
    margin: auto;
    width: 80%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1em;
}

.desktopContentSection {
    min-height: 100vh;
    /* outline:1px solid green; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    background-color: transparent;
    padding: 1em;
    border-radius: 1em;
    position: relative;
    left: -120%;
    opacity: 0;
}


.experience-ImageContainer {
    width: 25vw;
    height: 25vw;
    border-radius: 20px;
    margin: auto;
    position: relative;
    overflow: hidden;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
}

.experience-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: rgb(255, 228, 228);
}

/* small screen / mobile layout */
.mobileContent {
    display: none;
    width: 80vw;

}

.mobileContentSection {
    display: flex;
    flex-direction: column;
    gap: 1em;
    opacity: 0;
    position: relative;
    left: -120%;
}

.mobilePhoto {
    width: 50vw;
    height: 50vw;
    margin-top: 5em;
    border-radius: 6vw;
    object-fit: cover;
}


/* defines styles for screens up to 599px wide */
@media screen and (max-width: 599px) {
    .left {
        display: none;
    }

    .right {
        height: auto;
        width: 100%;
        align-items: center;
    }

    .experience-ImageContainer {
        display: none;
    }

    .mobileContent {
        display: block;
    }


}
</style>