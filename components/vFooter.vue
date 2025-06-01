<template>
  <footer class="bg-black text-white">
    <section class="py-8">
      <div class="container">
        <h2>Footer</h2>
      </div>
    </section>
    <section class="py-8 border-t border-t-white/20 text-sm text-center">
      <div class="container">
        &copy {{ new Date().getFullYear() }} {{ $app.name }}. All Right Reserved
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
const email = ref("");
const links = {
  "Quick Links": [
    { title: "Home", path: "/" },
    { title: "About us", path: "/about" },
    { title: "Contact us", path: "/contact" },
    { title: "Products", path: "/products" },
    { title: "Testimonials", path: "/#testimonials" },
    { title: "Terms & Policy", path: "/terms" },
  ],
  Products: [
    { title: "Aluminium Scrap", path: "/products/aluminium" },
    { title: "Copper Scrap", path: "/products/copper" },
    { title: "Lead Scrap", path: "/products/lead" },
    { title: "Zinc Scrap", path: "/products/zinc" },
    { title: "Plastic Scrap", path: "/products/plastic" },
    { title: "Ferrous Products", path: "/products/ferrous-metal" },
  ],
};
const sevices = [
  { title: "Customer Support", desc: "24/7 Customer support", icon: "headset" },
  {
    title: "Worldwide shipping",
    desc: "Fast local and international",
    icon: "shipping-fast",
  },
  {
    title: "Return policy",
    desc: "Money back guarantee",
    icon: "hand-holding-usd",
  },
  {
    title: "Secure payment",
    desc: "Your money is 100% secure",
    icon: "cash-register",
  },
];
</script>

<style scoped></style>
