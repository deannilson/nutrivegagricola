<template>
  <header
    :class="top > 0 ? 'bg-white shadow-xl border-b' : 'text-white'"
    class="px-6 fixed top-0 left-0 right-0 z-50 font-exo text-sm font-bold uppercase"
  >
    <div class="container h-20 lg:h-24 flex items-center">
      <div class="flex-1 flex items-center">
        <nuxt-link to="/" class="flex items-end">
          <img src="/logo.png" :alt="$app.name" class="w-20" />
          <div class="pl-2 text-xl">
            <div class="font-light">NUTRIVEG</div>
            <div class="font-black -mt-2">AGRÍCOLA</div>
          </div>
        </nuxt-link>
        <nav class="hidden lg:flex items-center px-10">
          <nuxt-link
            v-for="n in links"
            :to="{ name: n.name }"
            class="p-3"
            :class="
              $route.name?.toString().startsWith(n.name)
                ? 'text-primary'
                : 'hover:text-primary'
            "
          >
            {{ n.title }}
          </nuxt-link>
        </nav>
      </div>
      <button
        @click="dialog = !dialog"
        class="size-14 bg-primary text-white lg:hidden"
      >
        <i class="fa-solid fa-bars text-xl" />
      </button>
      <nuxt-link to="/contact" class="px-10 btn h-9 w-auto max-md:hidden">
        contact
      </nuxt-link>
    </div>
  </header>
  <section>
    <div
      @click="dialog = false"
      :class="{ ' opacity-0 pointer-events-none': !dialog }"
      class="fixed bg-black/50 inset-0 z-[99] transition-opacity duration-300"
    />
    <aside
      :class="dialog ? ' translate-x-0' : ' translate-x-full'"
      class="fixed top-0 right-0 bottom-0 w-96 max-w-[90vw] z-[999] bg-white transition-tansform duration-300"
    >
      <div class="h-20 flex items-center justify-end px-4">
        <button
          @click="dialog = !dialog"
          class="size-14 bg-primary text-white lg:hidden"
        >
          <i class="fa-solid fa-xmark text-xl" />
        </button>
      </div>
      <nav
        @click="dialog = false"
        class="text-black px-6 font-exo text-sm uppercase font-bold"
      >
        <nuxt-link
          v-for="n in links"
          :to="{ name: n.name }"
          class="flex items-center h-14 border-b"
          :class="{
            'text-primary': $route.name?.toString().startsWith(n.name),
          }"
        >
          <div class="flex-1">{{ n.title }}</div>
          <i class="fa-light fa-angle-right" />
        </nuxt-link>
      </nav>
    </aside>
  </section>
</template>

<script setup lang="ts">
const top = ref(0);
const dialog = ref(false);
const links = [
  { title: "Home", name: "index" },
  {
    title: "Fertilizers",
    name: "fertilizers",
  },
  { title: "Animal Feeds", name: "animal-feeds" },
  { title: "About", name: "about" },
  { title: "Contact", name: "contact" },
];
onMounted(() => {
  window.addEventListener("scroll", () => {
    top.value = pageYOffset;
  });
});
watch(useRoute(), () => (dialog.value = false));
</script>

<style scoped></style>
