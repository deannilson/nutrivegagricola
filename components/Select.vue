<template>
  <div class="mb-4">
    <label class="font-exo font-bold text-xs uppercase"> {{ label }}* </label>
    <div class="relative flex items-center">
      <select required v-model="model" class="textfield">
        <option v-if="label" value="">{{ label }}</option>
        <option :key="n" v-for="n in items" :value="n">{{ n }}</option>
      </select>
      <i
        class="fa-solid fa-caret-down absolute z-10 right-4 pointer-events-none"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: any[];
  label?: string;
}>();
const error = defineModel("error");
const focus = defineModel("focus");
const model = defineModel();
const input: any = ref(null);
</script>

<style scoped></style>
