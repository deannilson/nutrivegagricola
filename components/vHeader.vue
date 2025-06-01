<template>
  <header class="border-b px-4">
    <div class="container h-16">
      <h1>Header</h1>
    </div>
  </header>
</template>

<script setup lang="ts">
const dialog = ref(false);
const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Products", path: "/products" },
  { title: "Contact", path: "/contact" },
];
</script>

<style scoped></style>
