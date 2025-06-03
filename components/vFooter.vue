<template>
  <footer class="py-8 px-6 border-t">
    <section class="container">
      <div class="pb-6 md:flex text-lg">
        <div class="flex-1 pb-4">
          <div class="text-2xl font-semibold">
            Give us a call
            <a :href="`tel:${$app.phone}`" class="text-primary">
              {{ $app.phone }}
            </a>
          </div>
          <div class="text-sm font-lato">
            {{ $app.address.replace(/[<br />]/g, ' ') }}
          </div>
        </div>
        <div class="flex items-start font-medium">
          <div v-for="(n, i) in links" class="flex items-center">
            <div v-if="i > 0" class="mx-3 border border-black/50 h-3" />
            <nuxt-link :to="n.path" class="py-1 hover:text-primary">
              {{ n.title }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="opacity-80 font-light">
        &copy {{ new Date().getFullYear() }} {{ $app.name }}. All Right
        Reserved. {{ $app.name }}, a company legally registered under Spanish
        law with VAT number ESB05559307, is headquartered at Calle Isla de
        Lobos, 50, 30730 San Javier, Murcia, Spain. The company is registered in
        the Mercantile Registry of Murcia and operates under the legal form of a
        Sociedad Limitada Unipersonal (S.L.U.).
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
const email = ref("");
const links = [
  { title: "Privacy Policy", path: "/privacy-policy" },
  { title: "Terms & Conditions", path: "/terms-and-conditions" },
];
</script>

<style scoped></style>
