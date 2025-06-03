<template>
  <Title>{{ title }}</Title>
  <section
    class="bg-center bg-cover bg-black"
    :style="`background-image: url('/images/${src || 'company-building.jpg'}')`"
  >
    <div class="bg-black/65 text-white place-center h-80 pt-20 lg:pt-14">
      <div class="md text-center p-6 z-10">
        <h1 class="text-4xl lg:text-6xl font-black">{{ title }}</h1>
        <p class="opacity-85 font-exo sm:px-24 text-xs sm:text-base">
          {{ desc }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string; desc?: string; src?: string }>();
const index = ref(0);
const left = ["alfalfa", "corn", "cotton", "potato"];
const right = ["grape", "soyabean", "tomato"];
</script>

<style scoped></style>
