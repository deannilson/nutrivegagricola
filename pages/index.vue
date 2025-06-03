<template>
  <section
    class="bg-cover bg-center"
    style="background-image: url('/images/company-building.jpg')"
  >
    <div
      class="bg-black/65 text-white place-center h-[680px] p-6 pt-20 lg:pt-14"
    >
      <div class="md">
        <div class="text-center">
          <h1 class="text-4xl font-black mb-6">
            Quality Nutrition • Flexible Delivery • Superior Results
          </h1>
          <div class="font-lato mb-8 text-lg md:px-12">{{ $app.desc }}</div>
          <ContactBtn class="max-w-80 mx-auto h-14" />
        </div>
      </div>
    </div>
  </section>
  <section class="py-20 px-6 bg-secondary">
    <div class="container">
      <div class="text-center">
        <h5 class="text-overline">Our Products</h5>
        <h2>Trusted Nutrition for Modern Agriculture.</h2>
        <p class="lg:px-20">
          Agriculture is essential to our society, and fertilizers are crucial
          in improving crop yield and quality. Familiarizing oneself with the
          different types of fertilizers can aid you in choosing the appropriate
          one for specific crops and soil conditions. In this comprehensive
          guide, we will explore the most commonly used fertilizers in
          agriculture, their properties, and how they contribute to the growth
          of various crops. So, in the end, you will not question what are the
          most common fertilizers used in agriculture.
        </p>
      </div>
      <div class="pt-6 grid md:grid-cols-3 gap-4 mlg:gap-8">
        <nuxt-link v-for="n in types" :to="n.path" class="block">
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
    </div>
  </section>

  <Services />
  <ContactUs />
</template>

<script setup lang="ts"></script>

<style scoped></style>
