<template>
  <Breadcrums title="Fertilizers" src="fertilizers.jpeg" />

  <v-content>
    <h3>What is Fertilizer?</h3>
    <p>
      Fertilizers are compounds that are used in agriculture to supply nutrients
      for plants. They can be classified in a variety of ways. A specific
      fertilizer can belong to multiple fertilizer types. Fertilizers are the
      backbone of successful gardening and agriculture.
    </p>
    <p>
      Fertilizers play a crucial role in ensuring that plants receive the
      nutrients they require for optimal growth and development. Different types
      of plant fertilizers are accessible to farmers, but the two most common
      are organic and inorganic. Nutrients in organic products are gradually
      released while the substance decomposes over time, while artificially
      synthesized inorganic products allow for the rapid uptake of nutrients by
      plants. However, the organic type of fertilizer is better for the soil and
      the ecosystem in the long run.
    </p>
    <p>
      Fertilizers supply plants with the three essential nutrients they need to
      grow: <strong>nitrogen (N)</strong>, <strong>phosphorus (P)</strong>, and
      <strong>potassium (K)</strong>, as well as other needed micronutrients.
      The key parameters of different types of fertilizers used in agriculture
      are these nutrients and how they are obtained. Many factors, including
      soil quality, crop type, and application method, can influence fertilizer
      type decisions. There is a wide variety of fertilizing products available
      today, allowing farmers to create a nutrient-rich environment for their
      crops.
    </p>
    <h3>Why Are There Different Types Of Fertilizers?</h3>
    <p>
      To thrive, plants require a variety of nutrients, which they get from the
      soil through their roots. Each harvest reduces the soil’s potential
      productivity unless soil nutrients are restored. The correct type of
      fertilizer for plants can fix nutrient deficiencies.
    </p>
    <div class="pt-6 grid sm:grid-cols-2 gap-8">
      <nuxt-link v-for="n in types.slice(0, 2)" :to="n.path" class="block">
        <img
          :src="n.image"
          :alt="n.title"
          class="w-full rounded-3xl aspect-[4/3] object-cover object-center"
        />
        <div class="p-3">
          <h4 class="mb-0 text-2xl">{{ n.title }}</h4>
          <p>{{ n.desc }}</p>
          <div class="btn h-12">More details</div>
        </div>
      </nuxt-link>
    </div>
  </v-content>
</template>

<script setup lang="ts"></script>

<style scoped></style>
