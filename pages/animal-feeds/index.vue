<template>
  <Breadcrums
    title="Animal Feeds"
    src="animal-feed.jpg"
    :desc="types[2].desc"
  />
  <v-content>
    <div v-for="(n, i) in items" :class="{ 'border-t pt-3': i > 0 }" class=" ">
      <h4>{{ n.title }}</h4>
      <p>{{ n.desc }}</p>
    </div>
  </v-content>
</template>

<script setup lang="ts">
import items from "@/resources/feeds.json";
</script>

<style scoped></style>
