<template>
  <div class="mb-4">
    <label class="font-exo font-bold text-xs uppercase"> {{ label }}* </label>
    <input
      required
      v-if="!textarea"
      v-model="model"
      :type="type"
      :placeholder="label"
      class="textfield"
    />
    <textarea
      v-else
      rows="2"
      required
      v-model="model"
      :placeholder="label"
      class="textfield"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  textarea?: boolean;
  type?: string;
  label?: string;
}>();
const model: any = defineModel();
</script>

<style scoped></style>
