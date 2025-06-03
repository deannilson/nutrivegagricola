<template>
  <section class="px-6">
    <div class="container md:flex gap-x-20">
      <div class="flex-1 py-8">
        <slot />
      </div>
      <div class="md:w-1/3 pb-8">
        <v-contact />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
