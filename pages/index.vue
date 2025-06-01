<template>
  <div class="p-6">
    <div class="container">
      <h1>{{ products.length }} products</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import products from "@/resources/products.json";
</script>

<style scoped></style>
