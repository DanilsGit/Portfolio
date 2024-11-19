<template>
    <section class="footer">
        <div>
            <p>© 2024 Danils</p>
        </div>
        <div class="language">
            <button @click="$i18n.locale = 'es'" :class="{ 'active': $i18n.locale === 'es' }">
                🇪🇸
            </button>

            <button @click="$i18n.locale = 'en'":class="{ 'active': $i18n.locale === 'en' }">
                🇺🇸
            </button>
        </div>
        <div class="social">
            <a href="https://github.com/DanilsGit" target="_blank" rel="noopener noreferrer"><img
                    src="/assets/github.webp" alt="github" /></a>

            <a href="https://linkedin.com/in/danielmarquez-danils" target="_blank" rel="noopener noreferrer"><img
                    src="/assets/linkedin.webp" alt="linkedin" /></a>

            <a href="https://www.youtube.com/channel/UCzUZ5F3VVFno21syilDAiBQ" target="_blank"
                rel="noopener noreferrer"><img src="/assets/youtube.webp" alt="youtube" /></a>
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

.language {
    display: flex;
    gap: 1em;
    border: 0.14em solid #39434f;
    border-radius: 0.6em;
    padding: 0.2em;

    button {
        background-color: transparent;
        border: none;
        padding: 0.5em;
        border-radius: 0.5em;
        cursor: pointer;
    }

    .active {
        background-color: #39434f;
    }

}
</style>