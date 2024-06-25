<template>
    <nav class="router-nav">
        <ul>
            <li>
                <router-link :to="{ name: 'home' }">Home</router-link>
                <router-link :to="{ name: 'projects' }">Projects</router-link>
            </li>
            <li>
                <h2>Danils Portfolio</h2>
            </li>
            <li>
                <router-link :to="{ name: 'home' }">About</router-link>
                <router-link :to="{ name: 'home' }">Contact</router-link>
            </li>
        </ul>
    </nav>
    <router-view />
</template>

<script setup>

</script>

<style lang="scss">
.router-nav {
    width: 100%;
    display: flex;
    gap: 1em;
    padding: 0.5em;
    justify-content: space-around;
    position: fixed;
    z-index: 2;

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        li {
            width: 100%;
            text-align: center;
            list-style: none;
            display: flex;
            justify-content: space-around;
        }
    }


    a {
        text-decoration: none;
        color: $semi-white;
    }
}

body {
    width: 100%;
    font-size: 16px;
    overflow-x: hidden;
    font-family: 'Exo 2', sans-serif;
    background-color: $semi-black;
    color: $semi-white;

    @media screen and (max-width: 1200px) {
        font-size: 15px;
    }

    @media screen and (max-width: 1000px) {
        font-size: 14px;
    }

    @media screen and (max-width: 800px) {
        font-size: 13px;
    }

    @media screen and (max-width: 700px) {
        font-size: 12px;
    }

    @media screen and (max-width: 600px) {
        font-size: 10px;
    }

    @media screen and (max-width: 500px) {
        font-size: 9px;
    }
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
</style>
