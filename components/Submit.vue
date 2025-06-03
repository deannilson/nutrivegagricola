<template>
  <button class="h-12 btn">
    <Loader v-if="loading" /> <span v-else-if="title" v-text="title" />
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
defineProps<{ title: string; loading?: boolean }>();
</script>

<style scoped></style>
