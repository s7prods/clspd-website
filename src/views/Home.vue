<template>
    <div class="welcome">
        <h1>Welcome to <code><aa style="color: #333" href="https://github.com/shc0743">chcs1013</aa>'s <RouterLink to="/products/">Products</RouterLink></code></h1>
        <p>This is the home page of the <code><aa href="https://github.com/shc0743">chcs1013's</aa></code> project.</p>
    </div>

    <div class="welcome">
        <RouterLink to="/products/">Visit my products</RouterLink>
    </div>
</template>

<script setup lang="ts">
import aa from '@/components/aa.vue';

</script>

<style scoped>
.welcome {
    padding: 10px;
}
</style>