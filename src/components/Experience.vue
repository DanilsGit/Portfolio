<template>
    <section class="experience-section">
        <div class="left">
            <div class="startExperience"></div>
            <div class="desktopContent">
                <div class="desktopContentSection">
                    <h2>Red</h2>
                    <p>Red is a color often associated with strong emotions such as passion, love, and anger. It's a
                        bold and attention-grabbing color that can evoke feelings of excitement, warmth, and energy.</p>
                </div>
                <div class="desktopContentSection">
                    <h2>Green</h2>
                    <p>Green is a color that is often associated with nature, growth, and harmony. It is a calming and
                        relaxing color that can evoke feelings of balance, stability, and freshness. In color
                        psychology, green is said to represent balance and stability, making it a popular choice for
                        branding and marketing in the health and wellness industry. </p>
                </div>
                <div class="desktopContentSection">
                    <h2>Pink</h2>
                    <p>Pink is a color that is often associated with femininity, romance, and sweetness. It is a softer
                        and more delicate shade of red that can evoke feelings of warmth, love, and nurturing.</p>
                    <p>In the world of branding and marketing, pink is often used to target a female audience or to
                        promote products that are associated with beauty, love, or romance.</p>
                    <p>Pink is also used in the food industry, as it is associated with sweetness and desserts. Pink is
                        often used in breast cancer awareness campaigns, as it has become the signature color of the
                        movement. </p>
                    <p>Pink is also commonly used in baby showers and weddings, as it symbolizes love, innocence, and
                        new beginnings.</p>
                </div>
                <div class="desktopContentSection">
                    <h2>Blue</h2>
                    <p>Blue is a color that is often associated with calmness, trust, and reliability. It is a peaceful
                        and serene color that can evoke feelings of stability, security, and professionalism. In color
                        psychology, blue is said to represent loyalty and trust, making it a popular choice for branding
                        and marketing in the finance and technology industries.</p>
                </div>

                <div class="desktopContentSection">
                    <h2>xd</h2>
                    <p>Blue is a color that is often associated with calmness, trust, and reliability. It is a peaceful
                        and serene color that can evoke feelings of stability, security, and professionalism. In color
                        psychology, blue is said to represent loyalty and trust, making it a popular choice for branding
                        and marketing in the finance and technology industries.</p>
                </div>
            </div>
        </div>

        <div class="right">

            <!-- mobile content -->
            <div class="mobileContent">
                <img src="https://via.placeholder.com/200" alt="Experience" class="mobilePhoto exp1" />
                <h2>Red</h2>
                <p>Red is a color often associated with strong emotions such as passion, love, and anger. It's a bold
                    and attention-grabbing color that can evoke feelings of excitement, warmth, and energy.</p>

                <img src="https://via.placeholder.com/200" alt="Experience" class="mobilePhoto exp2" />
                <h2>Green</h2>
                <p>Green is a color that is often associated with nature, growth, and harmony. It is a calming and
                    relaxing color that can evoke feelings of balance, stability, and freshness. In color psychology,
                    green is said to represent balance and stability, making it a popular choice for branding and
                    marketing in the health and wellness industry. </p>

                <img src="https://via.placeholder.com/200" alt="Experience" class="mobilePhoto exp3" />
                <h2>Pink</h2>
                <p>Pink is a color that is often associated with femininity, romance, and sweetness. It is a softer and
                    more delicate shade of red that can evoke feelings of warmth, love, and nurturing. In the world of
                    branding and marketing, pink is often used to target a female audience or to promote products that
                    are associated with beauty, love, or romance.</p>

                <img src="https://via.placeholder.com/200" alt="Experience" class="mobilePhoto exp4" />
                <h2>Blue</h2>
                <p>Blue is a color that is often associated with calmness, trust, and reliability. It is a peaceful and
                    serene color that can evoke feelings of stability, security, and professionalism. In color
                    psychology, blue is said to represent loyalty and trust, making it a popular choice for branding and
                    marketing in the finance and technology industries.</p>


                <img src="https://via.placeholder.com/200" alt="Experience" class="mobilePhoto exp5" />
                <h2>xd</h2>
                <p>Blue is a color that is often associated with calmness, trust, and reliability. It is a peaceful and
                    serene color that can evoke feelings of stability, security, and professionalism. In color
                    psychology, blue is said to represent loyalty and trust, making it a popular choice for branding and
                    marketing in the finance and technology industries.</p>
            </div>

            <!-- desktop content -->

            <div class="experience-ImageContainer">
                <img src="https://via.placeholder.com/200" alt="Experience" class="experience-image exp1" />
                <img src="https://via.placeholder.com/700" alt="Experience" class="experience-image exp2" />
                <img src="https://via.placeholder.com/300" alt="Experience" class="experience-image exp3" />
                <img src="https://via.placeholder.com/700" alt="Experience" class="experience-image exp4" />
                <img src="https://via.placeholder.com/700" alt="Experience" class="experience-image exp5" />
                <img src="https://via.placeholder.com/700" alt="Experience" class="experience-image exp6" />
                <img src="https://via.placeholder.com/200" alt="Experience" class="experience-image exp1" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger);

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
            trigger: ".experience-section",
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


});

</script>

<style scoped>
.experience-section h2 {
    font-size: clamp(2em, 4vw, 3em);
}

.experience-section p {
    font-size: clamp(1.4em, 2.5vw, 2em);
    line-height: 1.4;
}


.experience-section {
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
}

.desktopContentSection {
    min-height: 100vh;
    /* outline:1px solid green; */
    display: flex;
    flex-direction: column;
    justify-content: center;
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
}

/* small screen / mobile layout */
.mobileContent {
    display: none;
    width: 80vw;
}

.mobilePhoto {
    width: 50vw;
    height: 50vw;
    margin-top: 5em;
    border-radius: 6vw;
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