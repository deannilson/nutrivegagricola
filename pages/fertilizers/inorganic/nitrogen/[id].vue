<template>
  <Breadcrums :title="item?.title" :desc="item.excerpt" />
  <v-content>
    <h5 class="font-black font-exo">
      {{ item.formula }} | {{ item.nitrogen_content }} nitrogen content
    </h5>
    <hr class="my-4" />
    <div v-html="item.description" />
  </v-content>
</template>

<script setup lang="ts">
import items from "@/resources/nitrogen.json";
const route = useRoute();
const item: any = computed(() =>
  items.find((el) => el.slug == route.params.id)
);
</script>

<style scoped></style>
