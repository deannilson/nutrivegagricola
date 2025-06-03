<template>
  <Breadcrums
    title="Animal Feeds"
    src="animal-feed.jpg"
    :desc="types[2].desc"
  />
  <v-content>
    <div v-for="n in items">
      <h3 class="text-primary border-t pt-4">{{ n.title }}</h3>
      <p>{{ n.desc }}</p>
    </div>
  </v-content>
</template>

<script setup lang="ts">
import items from "@/resources/feeds.json";
</script>

<style scoped></style>
