<template>
  <Breadcrums
    :title="item?.title"
    :desc="`${item.formula} | ${item.nitrogen_content} nitrogen content | ${item.excerpt}`"
  />
  <v-content>
    <div v-html="item.description" />
  </v-content>
</template>

<script setup lang="ts">
import items from "@/resources/nitrogenous.json";
const route = useRoute();
const item: any = computed(() =>
  items.find((el) => el.slug == route.params.id)
);
</script>

<style scoped></style>
