<template>
    <section class="footer">
        <div>
            <p>© 2024 Danils</p>
        </div>
        <div class="social">
            <a href="https://github.com/DanilsGit" target="_blank" rel="noopener noreferrer"><img
                    src="/assets/github.webp" alt="github" /></a>

            <a href="https://linkedin.com/in/danielmarquez-danils" target="_blank" rel="noopener noreferrer"><img
                    src="/assets/linkedin.webp"
                    alt="linkedin" /></a>

            <a href="https://www.youtube.com/channel/UCzUZ5F3VVFno21syilDAiBQ" target="_blank"
                rel="noopener noreferrer"><img
                    src="/assets/youtube.webp" alt="youtube" /></a>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
.footer {
    background-color: $semi-black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;

    .social {
        display: flex;
        gap: 1em;

        img {
            width: 3em;
            height: 3em;
            object-fit: cover;
        }
    }
}
</style>