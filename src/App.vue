<template>
    <div class="app">
        <div class="view">
            <RouterView></RouterView>
        </div>

        <div class="about">
            <RouterLink to="/">Home</RouterLink>
            <span class="about-split">·</span>
            <RouterLink to="/about/">About</RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.app {
    position: absolute;
    inset: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
}
.about {
    margin-top: 0.5em;
    padding: 0.5em;
    text-align: center;
}
.view {
    flex: 1;
}
.about-split {
    margin: 0 0.5em;
}
</style>
