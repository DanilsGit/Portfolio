<template>
    <section id="experience" class="experience-section">
        <h1 class="experience-h1">{{ $t("message.experience_title") }}</h1>
        <ExperienceSectionContent v-if="$i18n.locale=='en'" :experience="experience_en" />
        <ExperienceSectionContent v-if="$i18n.locale=='es'" :experience="experience_es" />
    </section>
</template>

<script setup>

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { onMounted } from 'vue';
import ExperienceSectionContent from './ExperienceSectionContent.vue';
gsap.registerPlugin(ScrollTrigger);

const experience_en = [
    {
        year: 2019,
        title: 'WordPress',
        description: `While studying before my graduation, I was also learning WordPress. This was crucial for our
        family business, 'Equiservicios'. I was responsible for creating and publishing the website,
        which included all contact methods and product information. This effort significantly
        contributed to increasing our profits.`,
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/experience%2Fwordpress.png?alt=media&token=7ff4cf02-7134-402e-bac1-a9aabd875eb0'
    },
    {
        year: 2020,
        title: 'Web designer',
        description: `When the pandemic hit, everyone was at home, and I decided to make the most of the time by
        diving into web development. I spent countless hours learning HTML and CSS, mastering the
        fundamentals and creating responsive websites to practice my skills. However, I didn't dive
        into JavaScript during that period. Looking back, I realize I would have benefited from
        learning Git to save and manage my work more effectively.`,
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/experience%2Fhtmlcss.jpg?alt=media&token=b00b8309-6709-4b21-92e8-fd65236c18e5'
    },
    {
        year: 2021,
        title: 'Programming is powerful',
        description: `After starting university, I developed many software projects implementing Object-Oriented
        Programming (OOP) in C++ and Java, functional programming in Racket, and greedy and dynamic
        programming in Python. I also worked extensively with data structures. Some of these
        projects are published on my GitHub. These projects have been incredibly helpful in learning
        how to solve problems using different paradigms.`,
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/experience%2Fparadigms.png?alt=media&token=93c69c47-8c01-4ac6-b2ca-349fe12feb7d'
    },
    {
        year: 2022,
        title: 'Trainee Web developer',
        description: `My passion for web development truly awakened when I discovered JavaScript. I began taking a
        course and uploading my progress to GitHub. At the time, I was unaware of existing
        frameworks like React, Vue, or Angular, let alone backend technologies. However, I developed
        landing pages for businesses, such as Urban Cocktails. This opportunity allowed me to learn
        how to communicate with clients and explain ideas to others.`,
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/experience%2Furban.png?alt=media&token=0e49c043-3fa3-4299-a0d7-40c4afb834df'
    },
    {
        year: 2023,
        title: 'Youtube videos',
        description: `I've discovered that explaining topics to others helps me memorize concepts more effectively.
        By sharing knowledge on public platforms like YouTube, I can refresh my understanding while
        helping others. Amazingly, this process has also improved my soft skills, making me better
        at teamwork.`,
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/experience%2Fyoutube.png?alt=media&token=dd42a838-3cfc-4eb1-b1cb-213aea9f891a'
    },
    {
        year: 2024,
        title: 'The line never ends',
        description: `I have discovered many new technologies and frameworks used in web development. Since
        learning JavaScript, incorporating these technologies into my knowledge base has not been
        difficult. As part of a team, we created Rippio, which is my biggest project to date. This
        project allowed me to professionally learn React and manage APIs with Node.js and Express.
        Subsequently, I expanded my knowledge by learning Vue, Go, and Docker through other
        projects. Reflecting on my progress, I realize that I will never stop learning. Technology
        is constantly evolving, presenting new opportunities for growth and innovation. I am excited
        to continue exploring new technologies and frameworks, embracing the challenges they bring
        and the knowledge they offer.`,
        img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/experience%2Frippio.png?alt=media&token=4f25b016-bbf0-4995-8301-66f9fc303044'
    }
]

const experience_es = [
    {
        "year": 2019,
        "title": "WordPress",
        "description": "Mientras estudiaba antes de graduarme, también estaba aprendiendo WordPress. Esto fue crucial para nuestro negocio familiar, 'Equiservicios'. Yo era responsable de crear y publicar el sitio web, que incluía todos los métodos de contacto e información de productos. Este esfuerzo contribuyó significativamente al aumento de nuestras ganancias.",
        "img": "https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/experience%2Fwordpress.png?alt=media&token=7ff4cf02-7134-402e-bac1-a9aabd875eb0"
    },
    {
        "year": 2020,
        "title": "Diseñador Web",
        "description": "Cuando llegó la pandemia, todos estábamos en casa y decidí aprovechar el tiempo sumergiéndome en el desarrollo web. Pasé incontables horas aprendiendo HTML y CSS, dominando los fundamentos y creando sitios web responsivos para practicar mis habilidades. Sin embargo, no profundicé en JavaScript durante ese período. Mirando hacia atrás, me doy cuenta de que me habría beneficiado aprender Git para gestionar y guardar mi trabajo de manera más efectiva.",
        "img": "https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/experience%2Fhtmlcss.jpg?alt=media&token=b00b8309-6709-4b21-92e8-fd65236c18e5"
    },
    {
        "year": 2021,
        "title": "La programación es poderosa",
        "description": "Después de comenzar la universidad, desarrollé muchos proyectos de software implementando Programación Orientada a Objetos (OOP) en C++ y Java, programación funcional en Racket, y programación voraz y dinámica en Python. También trabajé extensamente con estructuras de datos. Algunos de estos proyectos están publicados en mi GitHub. Estos proyectos han sido increíblemente útiles para aprender a resolver problemas usando diferentes paradigmas.",
        "img": "https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/experience%2Fparadigms.png?alt=media&token=93c69c47-8c01-4ac6-b2ca-349fe12feb7d"
    },
    {
        "year": 2022,
        "title": "Desarrollador Web en formación",
        "description": "Mi pasión por el desarrollo web realmente despertó cuando descubrí JavaScript. Comencé a tomar un curso y a subir mi progreso a GitHub. En ese momento, no estaba al tanto de los frameworks existentes como React, Vue o Angular, y mucho menos de las tecnologías backend. Sin embargo, desarrollé landing pages para negocios, como Urban Cocktails. Esta oportunidad me permitió aprender a comunicarme con clientes y explicar ideas a otros.",
        "img": "https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/experience%2Furban.png?alt=media&token=0e49c043-3fa3-4299-a0d7-40c4afb834df"
    },
    {
        "year": 2023,
        "title": "Videos en YouTube",
        "description": "Descubrí que explicar temas a los demás me ayuda a memorizar conceptos de manera más efectiva. Al compartir conocimientos en plataformas públicas como YouTube, puedo refrescar mi comprensión mientras ayudo a otros. Sorprendentemente, este proceso también ha mejorado mis habilidades blandas, haciéndome mejor en el trabajo en equipo.",
        "img": "https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/experience%2Fyoutube.png?alt=media&token=dd42a838-3cfc-4eb1-b1cb-213aea9f891a"
    },
    {
        "year": 2024,
        "title": "La línea nunca termina",
        "description": "He descubierto muchas tecnologías y frameworks nuevos que se usan en el desarrollo web. Desde que aprendí JavaScript, incorporar estas tecnologías en mi base de conocimientos no ha sido difícil. Como parte de un equipo, creamos Rippio, que es mi proyecto más grande hasta la fecha. Este proyecto me permitió aprender profesionalmente React y gestionar APIs con Node.js y Express. Posteriormente, amplié mis conocimientos aprendiendo Vue, Go y Docker a través de otros proyectos. Reflexionando sobre mi progreso, me doy cuenta de que nunca dejaré de aprender. La tecnología está en constante evolución, presentando nuevas oportunidades para el crecimiento y la innovación. Estoy emocionado de seguir explorando nuevas tecnologías y frameworks, abrazando los desafíos que traen y el conocimiento que ofrecen.",
        "img": "https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/experience%2Frippio.png?alt=media&token=4f25b016-bbf0-4995-8301-66f9fc303044"
    }
]


onMounted(() => {
    const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
    const photos = gsap.utils.toArray(".experience-image:not(:first-child)")
    gsap.set(photos, { yPercent: 101 })
    const allPhotos = gsap.utils.toArray(".experience-image")

    // create
    let mm = gsap.matchMedia();

    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 600px)", () => {

        ScrollTrigger.create({
            trigger: ".experience-section-content",
            start: "top top",
            end: "bottom bottom",
            pin: ".right"
        })


        //create scrollTrigger for each details section
        //trigger photo animation when headline of each details section 
        //reaches 80% of window height
        details.forEach((detail, index) => {
            let headline = detail.querySelector("h2")
            let animation = gsap.timeline()
                .to(photos[index], { yPercent: 0 })
                .set(allPhotos[index], { autoAlpha: 0 })
            ScrollTrigger.create({
                trigger: headline,
                start: "top 80%",
                end: "top 50%",
                animation: animation,
                scrub: true,
                markers: false
            })
        })
    });

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
        animation: animationTitle('.experience-h1'),
        trigger: '.experience-h1',
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: 1,
        markers: false,
    })


});

</script>

<style scoped lang="scss">
.experience-h1 {
    opacity: 0;
    position: relative;
    top: 50px;
    font-size: 2.5em;
    font-weight: 700;
    text-align: center;
}

.experience-section {
    padding-top: 25vh;
    background-color: $semi-black;
}
</style>