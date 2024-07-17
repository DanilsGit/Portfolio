<template>
    <div class="container">
        <div class="active-slide">
            <img v-for="project in projects" :src="project.img" alt="project_bg">
        </div>


        <div class="slider">
            <div v-for="project in projects" class="slide" :id="`slide-${projects.indexOf(project) + 1}`">
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


const proj = [
    {
        name: 'Rippio Food',
        description: 'Rippio is a web application that connects clients with restaurants, utilizing technologies such as React, Node.js, Express, and PostgreSQL. Users can search for restaurants and products, modify their profiles, and add products to their cart for purchasing. Restaurants can create profiles, upload and manage their products, handle orders, and manage their schedules. Rippio aims to streamline the interaction between clients and restaurants, enhancing the dining experience for all users.',
        tech: 'REACT POSTGRESQL NODE.JS EXPRESS.JS',
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Frippio.png?alt=media&token=6604df66-e07f-4d40-bbbb-785af00ef46d',
        link: 'https://github.com/DanilsGit/Rippio'
    },
    {
        name: 'Gymstats',
        description: 'GymStats is a web application built with VUE, GO, DOCKER, POSTGRESQL and AWS designed to help you track and manage your workout routines effectively. With GymStats, you can create and view exercise routines from anywhere in the world using your mobile device or computer. The application allows you to customize your routines with your preferred exercises and adjust sets based on your progress. Additionally, you can add notes to exercises to remember specific details.',
        tech: 'VUE GO DOCKER POSTGRESQL AWS',
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fgymstats.png?alt=media&token=2b847b2f-bedf-4dba-a410-ebc7c55bd020',
        link: 'https://github.com/DanilsGit/gym-stats.git'
    },
    {
        name: 'Cellular automaton',
        description: 'This project is a cellular automaton simulation with three states, developed using React and JavaScript. The simulation represents three political groups, allowing users to observe political segregation. The interface includes options to step through the simulation one iteration at a time, start the simulation, and reset it. This visualization helps illustrate how political segregation can evolve over time based on initial conditions and interaction rules.',
        tech: 'REACT JS',
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fvida.png?alt=media&token=7690e2c0-a91c-4ec7-9176-a612b65f26e3',
        link: 'https://github.com/jfmonsa/capitalism_simulator'
    },
    {
        name: 'Numerical Methods',
        description: 'This project is a numerical methods application developed using Python, Tkinter, and Matplotlib. It allows users to solve equations within a given range using methods such as bisection, fixed point, and curve fitting. The interface provides visual representations of the solutions, making it easier to understand the behavior of the functions. Users can input their functions and intervals, and the application will compute and display the solutions along with detailed graphs.',
        tech: 'PYTHON TKINTER',
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fmetodos.png?alt=media&token=a6fe3780-5a95-4e68-abfd-2a2a31a1bced',
        link: 'https://github.com/DanilsGit/learning/blob/main/M%C3%A9todos%20Num%C3%A9ricos%20en%20py/metodos.py'
    },
    {
        name: 'Store Manager',
        description: 'This project is a store management system developed using Java and PostgreSQL. It features a CRUD (Create, Read, Update, Delete) interface that allows employees to manage various aspects of the store. Employees can log in with their ID and password to access the system. This system streamlines the management processes within the store, making it easier for employees to handle their daily tasks efficiently.',
        tech: 'JAVA POSTGRESQL',
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fmibarrio.png?alt=media&token=b978a437-96b5-4a3f-a2eb-bf100dba55dc',
        link: 'https://github.com/DanilsGit/Store-Manager'
    },
    {
        name: 'Vacation Calculator',
        description: 'The Vacation Calculator is a simple application developed using Java that helps calculate vacation days for employees based on their department and tenure. It features a user-friendly interface, making it easy for older clients and departments to determine the number of vacation days an employee is eligible for.',
        tech: 'Java',
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fpepsi.png?alt=media&token=83a526e4-7f93-42cf-bc9c-d7137f2a75e9',
        link: 'https://github.com/DanilsGit/Vacation-Calculator-Pepsi'
    },
    {
        name: 'Hospital Manager',
        description: 'The Hospital Manager App is a console-based application developed in C++ designed to manage various hospital profiles efficiently. It allows for the creation, reading, updating, and deletion (CRUD) of profiles such as managers, professionals, healthcare personnel, receptionists, and patients, all through a simple console interface. This application does not use a graphical user interface (GUI) or REST APIs, ensuring straightforward operation and data management. Ideal for scenarios requiring a no-frills, console-based solution, the Hospital Manager App provides a streamlined approach to handling hospital management tasks effectively.',
        tech: 'C++ OOP',
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fgestion%20de%20hospital.png?alt=media&token=bf8673bf-0151-4a81-af15-968bc2dcad5e',
        link: 'https://github.com/DanilsGit/Hospital-Manager'
    },
    {
        name: 'calculator',
        description: "The Calculator App is a Java application that emulates the functionality of the Windows calculator, offering basic operations. It includes standard arithmetic functions such as addition, subtraction, multiplication, and division, along with more complex operations like power calculations (pow). The app also features 'C' (clear) and 'CE' (clear entry) buttons for efficient error handling. Designed for continuous operations, it allows users to perform multiple calculations in sequence without resetting the app, providing a seamless and user-friendly experience.",
        tech: 'JAVA',
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/projects%2Fcalculadora.png?alt=media&token=a963288c-bf01-46bc-add6-ec01d988a1f1',
        link: 'https://github.com/DanilsGit/Basic-Calculator'
    }
]

// projects será organizado de ultimo a primero
const projects = proj.reverse();

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

#slide-1 {
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%) translateZ(-17500px);
}

#slide-2 {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%) translateZ(-15000px);
    opacity: 0;
}

#slide-3 {
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%) translateZ(-12500px);
}

#slide-4 {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%) translateZ(-10000px);
    opacity: 0;
}

#slide-5 {
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%) translateZ(-7500px);
}

#slide-6 {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%) translateZ(-5000px);
    opacity: 0.5;
}

#slide-7 {
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%) translateZ(-2500px);
    opacity: 1;
}

#slide-8 {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%) translateZ(0px);
    opacity: 1;
}


</style>