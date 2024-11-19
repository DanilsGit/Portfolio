<template>

    <section class="presentation-section">

        <h1>{{ $t("message.presentation_title") }}</h1>


        <section class="lottie-container">
            <div class="animationPresentation"></div>
        </section>

        <section class="gradient"></section>

        <section class="website-content">

            <div class="end-lottie"></div>

            <div class="about_git_cv">
                <div>
                    <h1>{{ $t("message.about_title") }}</h1>

                    <p>{{ $t("message.about_content") }}</p>
                </div>

                <CVButton />
            </div>

        </section>
    </section>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lottie from 'lottie-web';
gsap.registerPlugin(ScrollTrigger);
import { nextTick, onMounted } from 'vue';
import CVButton from './buttons/CVButton.vue';


onMounted(async () => {

    await nextTick();

    const LottieScrollTrigger = (options) => {
        let playhead = { frame: 0 },
            target = gsap.utils.toArray(options.target)[0],
            speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
            st = {
                trigger: ".trigger",
                end: speeds[options.speed] || "+=1000",
                scrub: 1,
                markers: false,
            },
            ctx = gsap.context && gsap.context(),
            animationPresentation = lottie.loadAnimation({
                container: target,
                renderer: options.renderer || "svg",
                loop: false,
                autoplay: false,
                path: options.path,
                rendererSettings: options.rendererSettings || {
                    preserveAspectRatio: "xMidYMid slice",
                }
            });

        for (let p in options) {
            st[p] = options[p];
        }

        animationPresentation.addEventListener("DOMLoaded", () => {
            let createTween = () => {
                animationPresentation.frameTween = gsap.to(playhead, {
                    frame: animationPresentation.totalFrames - 1,
                    ease: "none",
                    onUpdate: () => animationPresentation.goToAndStop(playhead.frame, true),
                    scrollTrigger: st,
                });
                return () => animationPresentation.destroy && animationPresentation.destroy();
            }
            ctx && ctx.add ? ctx.add(createTween) : createTween();
        })

        return animationPresentation;
    }



    let lottieContainer = document.querySelectorAll('.animationPresentation');

    if (lottieContainer) {
        LottieScrollTrigger({
            trigger: '.animationPresentation',
            start: 'top center',
            endTrigger: ".end-lottie",
            end: `bottom center+=${document.querySelector('.animationPresentation').offsetHeight
                }`,
            renderer: "svg",
            target: '.animationPresentation',
            path: '/assets/lottie/lottie.json',
            scrub: 2,
        })
    }
})


</script>

<style scoped lang="scss">
.presentation-section {
    width: 100%;
    min-height: 100vh;

    >h1 {
        position: absolute;
        top: 85vh;
        width: 100%;
        transform: translateY(-50%);
        text-align: left;
        font-size: 6.5vw;
    }

}

h1 {
    margin: 0.25em 0;
    font-size: 5em;
    font-weight: 500;
}

p {
    font-size: 1.5em;
    font-weight: 400;
    line-height: 175%;
}

.lottie-container .animationPresentation {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: -1;
    filter: saturate(2);
}

.animationPresentation::after {
    content: "";
    background-image: (url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png'));
    width: 200%;
    height: 200%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.1;
    animation: animateGrain 8s steps(10) infinite;
}

.gradient {
    width: 100vw;
    height: 200vh;
    position: relative;
    background: linear-gradient(180deg,
            #00000000 0%,
            #1e1e24 100%);
    z-index: 1;
}

.website-content {
    position: relative;
    width: 100%;
    height: 26%;
    min-height: 150vh;
    padding: 2em;
    background-color: $semi-black;
    color: $semi-white;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.about_git_cv {
    width: 75%;
    gap: 5em;
    display: flex;
    flex-direction: column;
}

.end-lottie {
    position: absolute;
    top: 100vh;
    width: 100%;
    height: 1px;
}

@keyframes animateGrain {

    0%,
    100% {
        transform: translate(0, 0);
    }

    10% {
        transform: translate(-5%, -10%);
    }

    20% {
        transform: translate(-15%, -20%);
    }

    30% {
        transform: translate(5%, -10%);
    }

    40% {
        transform: translate(-15%, -20%);
    }

    50% {
        transform: translate(-5%, -10%);
    }

    60% {
        transform: translate(-5%, -20%);
    }

    70% {
        transform: translate(-5%, -10%);
    }

    80% {
        transform: translate(-15%, -20%);
    }

    90% {
        transform: translate(-5%, -10%);
    }

    100% {
        transform: translate(-15%, -20%);
    }
}
</style>
