<template>
    <div class="container">
        <div class="active-slide">
            <img v-for="project in projects" :src="project.img" alt="project_bg">
        </div>


        <div class="slider">
            <div v-for="project in projects" class="slide" :id="`slide-${projects.indexOf(project) + 1}`" :style="{
                transform: `translate(-50%, -50%) translateZ(${calculateTranslateZ(projects.indexOf(project))}px)`,
                position: 'absolute',
                top: '50%',
                left: isEven(projects.indexOf(project)) ? '70%' : '30%',
                opacity: calculateOpacity(projects.indexOf(project))
            }">
                <div class="slide-copy">
                    <p>{{ project.name }}</p>
                    <p id="index">({{ project.tech }})</p>
                </div>
                <button class="slide-img" @click="handleOpenLink(project.link)">
                    <img :src="project.img" alt="project_img">
                    <p>{{ project.description }}</p>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Recibir props: Array de objetos:
const props = defineProps({
    proj: Array
})
// projects será organizado de ultimo a primero
const projects = props.proj.reverse();

const calculateTranslateZ = (index) => {
    return (((projects.length - 1) * -2500) + 2500 * index);
}

const isEven = (index) => {
    return index % 2 === 0;
}

const calculateOpacity = (index) => {
    if (index === projects.length - 1) return 1;
    if (index === projects.length - 2) return 1;
    if (index === projects.length - 3) return 0.5;
    return 0;
}



const handleOpenLink = (link) => {
    window.open(link, '_blank');
}

onMounted(() => {

    window.scrollTo(0, 0);
    document.title = 'Projects';

    const slides = gsap.utils.toArray('.slide');
    const activeSlideImages = gsap.utils.toArray('.active-slide img');

    const getInitialTranslateZ = (size) => {
        const style = window.getComputedStyle(size);
        const matrix = style.transform.match(/matrix3d\((.+)\)/);
        if (matrix) {
            const values = matrix[1].split(', ');
            return parseFloat(values[14] || 0);
        }
        return 0;
    }

    const mapRange = (value, inMin, inMax, outMin, outMax) => {
        return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }

    slides.forEach((slide, index) => {
        const initialZ = getInitialTranslateZ(slide);
        ScrollTrigger.create({
            trigger: ".container",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const zIncrement = progress * 22500;
                const currentZ = initialZ + zIncrement;

                let opacity;
                if (currentZ > -2500) {
                    opacity = mapRange(currentZ, -2500, 0, 0.5, 1);
                } else {
                    opacity = mapRange(currentZ, -5000, -2500, 0, 0.5);
                }

                slide.style.opacity = opacity;
                slide.style.transform = `translate(-50%, -50%) translateZ(${currentZ}px)`;

                if (currentZ < 100) {
                    gsap.to(activeSlideImages[index], 1.5, {
                        opacity: 1,
                        ease: "power3.out",
                    })
                } else {
                    gsap.to(activeSlideImages[index], 1.5, {
                        opacity: 0,
                        ease: "power3.out"
                    })

                }
            }
        })
    })

})

</script>

<style scoped lang="scss">
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

a,
p {
    color: $accent-orange;
    font-family: $font-basisGrotesque;
    text-transform: uppercase;
    font-size: 1em;
}

.container {
    width: 100%;
    height: 2000vh;
}

.active-slide {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000;
    opacity: 0.05;
    z-index: -1;

    img {
        position: absolute;
        filter: blur(50%);
        transform: scale(1.125);
    }
}

.slider {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    transform-style: preserve-3d;
    perspective: 750px;
    overflow: hidden;
}

.slide {
    position: absolute;
    width: 400px;
    height: 500px;
    opacity: 0;

    .slide-img {
        position: relative;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;

        p {
            position: absolute;
            padding: 1em;
            top: 0;
            font-weight: 500;
            font-size: 1.5em;
            opacity: 0;
            text-transform: none;
            text-align: left;
            color: $semi-white;
        }
    }

    .slide-img:hover {
        p {
            background-color: $transparent-black;
            opacity: 1;
            transition: 1s;
        }
    }

}

.slide-copy {
    p {
        text-transform: uppercase;
        text-align: center;
        font-family: $font-PPMonumentExtended;
        font-size: 1em;
        font-weight: bolder;
        line-height: 150%;
        color: accent-orange;
    }

    img {
        width: 100%;
        height: 300px !important;
        object-fit: cover;
    }

    p#index {
        font-family: $font-basisGrotesque;
        font-size: 0.8em;
        font-weight: normal;
        font-weight: 400;
        margin-bottom: 0.75em;
    }
}

#slide-6 {
    opacity: 0.5;
}

#slide-7 {
    opacity: 1;
}

#slide-8 {
    opacity: 1;
}
</style>