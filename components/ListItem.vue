<template>
  <div class="lg:flex border-b max-lg:py-3">
    <div class="lg:w-40 lg:py-4 lg:border-e font-bold">
      {{ title }}
    </div>
    <div class="flex-1 lg:p-4 font-exo" v-html="desc" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; desc: string }>();
</script>

<style scoped></style>
