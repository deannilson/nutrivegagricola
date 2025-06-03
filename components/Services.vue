<template>
  <section class="py-20 px-6">
    <div class="container">
      <div class="text-center">
        <h5 class="text-overline">WHY CHOOSE US</h5>
        <h2>Apply less, Expect more</h2>
        <p>
          Our fertilizers are engineered to help you deliver the right nutrition
          at the right time for the best results possible.
        </p>
      </div>
      <div class="grid sm:grid-cols-2 md:grid-cols-4 sm:gap-4 md:gap-6 py-6">
        <div v-for="n in items" class="max-sm:flex">
          <i
            :class="`fa-light fa-${n.icon} text-2xl sm:text-5xl max-sm:w-12 max-sm:mt-2`"
          />
          <div class="flex-1">
            <h6 class="font-bold text-lg mt-2">{{ n.title }}</h6>
            <p>{{ n.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    title: "Boost Growth & Yield",
    desc: "Formulated to help crops grow faster and produce higher yields.",
    icon: "seedling",
  },
  {
    title: "Ideal for Fruits, Vegetables & Nuts",
    desc: "Tailored nutrition for a wide range of crops.",
    icon: "apple-alt",
  },
  {
    title: "Easy to Apply",
    desc: "Simple to spray and compatible with common farming equipment.",
    icon: "spray-can",
  },
  {
    title: "Highly Compatible",
    desc: "Mixes easily with other fertilizers, herbicides, and treatments.",
    icon: "vial",
  },
  {
    title: "Flexible Application",
    desc: "Suitable for both in-furrow and foliar application methods.",
    icon: "exchange-alt",
  },
  {
    title: "Irrigation-Ready",
    desc: "Can be delivered directly through your irrigation system.",
    icon: "water",
  },
  {
    title: "Seed & Leaf Safe",
    desc: "Safe for direct application to seeds and tender plant tissue.",
    icon: "leaf",
  },
  {
    title: "Eco-Conscious Farming",
    desc: "Optimized nutrition means less waste, better soil health, and reduced environmental impact.",
    icon: "recycle",
  },
];
</script>

<style scoped></style>
