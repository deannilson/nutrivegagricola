<template>
  <div>
    <Breadcrums
      title="About Us"
      desc="High Production Agriculture Meets Responsible Nutrient Management"
      src="company-building.jpg"
    />
    <section class="py-20">
      <div class="md:flex gap-20 container">
        <div class="flex-1">
          <h5 class="text-overline">Get to Know us</h5>
          <h2>Our Story</h2>
          <p>
            At {{ $app.name }}, we believe in cultivating a greener future
            through sustainable farming solutions. Founded with a passion for
            organic agriculture and environmental stewardship, our journey began
            with a simple mission: to provide farmers and gardeners with
            natural, effective alternatives to chemical fertilizers.
          </p>
          <p>
            Rooted in innovation and guided by nature, we develop high-quality
            organic fertilizers that enrich the soil, protect biodiversity, and
            support healthy crop growth. As a trusted partner in the
            agricultural community, Nutriveg is committed to empowering growers
            with products that are safe for the earth and future generations.
          </p>
          <p>Join us as we nurture growth the natural way.</p>
        </div>
        <div
          :style="`background-image: url('/images/${images[index]}');`"
          class="flex-1 bg-zinc-300 bg-center bg-cover aspect-video rounded-lg"
        />
      </div>
    </section>
    <section class="bg-[url('/images/soybeans-min.jpg')] bg-cover bg-center">
      <div class="py-20 px-6 bg-black/65 text-white">
        <div class="md:flex gap-10 container">
          <div class="py-4 flex-1">
            <h5 class="text-overline">Our Mission</h5>
            <h2>To Prosper the Farmer</h2>
            <p>
              At Nutriveg Agrícola SL, our mission is to promote sustainable
              agriculture by providing high-quality organic fertilizers that
              nourish the soil, support plant health, and protect the
              environment. We are dedicated to helping farmers and growers
              achieve abundant yields without compromising the integrity of our
              ecosystems. Through innovation, responsibility, and a deep respect
              for nature, we aim to be a catalyst for a greener, healthier
              future in agriculture.
            </p>
          </div>
          <div class="bg-white text-black p-6 w-1/3 rounded-lg pb-2">
            <h4>Our Commitment</h4>
            <ul class="benefits-list">
              <li>Optimize the usability and productivity of crop nutrition</li>
              <li>
                Strategize the best management practices of crop nutrition for
                the environment
              </li>
              <li>Lead innovation through a commitment to research</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Services />
    <ContactUs />
  </div>
</template>

<script setup lang="ts">
const index = ref(0);
const images = ["tissue-sample.jpg", "sidedress.jpg"];
onMounted(() => {
  setInterval(() => (index.value = (index.value + 1) % images.length), 6000);
});
</script>

<style scoped></style>
