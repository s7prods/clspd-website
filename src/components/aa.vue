<template>
    <a :href="href" target="_blank" rel="noopener noreferrer nofollow">
        <slot></slot>
    </a>
</template>

<script setup lang="ts">
defineProps({
    href: {
        type: String,
        default: '',
    },
})
</script>

<style scoped>
a:active { color: red; }
</style>