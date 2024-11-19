<template>
    <button @click="descargarPDF">Consultar CV</button>
</template>

<script setup>
// 
const descargarPDF = () => {
    const url = "https://firebasestorage.googleapis.com/v0/b/portfolio-38c72.appspot.com/o/CV%2FCV%20Daniel%20Marquez.pdf?alt=media&token=15b9529d-b013-49dd-b571-3df7ddf31c4e";
    const link = document.createElement("a");
    link.href = url;
    link.download = "CV_DANIEL_MARQUEZ.pdf";
    link.target = "_blank";
    link.click();
}
</script>

<style scoped lang="scss">
button {
    font-family: 'Exo 2', sans-serif;
    color: #000;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    cursor: pointer;
    transition: 0.3s;
    font-size: 1em;
    width: 20em;
    background-color: #fff;
    border: 2px solid #fff;

    &:hover {
        background-color: transparent;
        border: none;
        color: #fff;
        border-bottom: #fff 2px solid;
        border-radius: 0;
    }
}
</style>