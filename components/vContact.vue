<template>
  <section
    class="p-6 sm:p-12 border-t-4 border-t-primary shadow-2xl rounded-lg md:-mt-6 z-10 w-full bg-white"
  >
    <h2 class="text-3xl font-bold mb-4">Make an online enquiry</h2>
    <form @submit.prevent="submit">
      <Alert v-model="error" />
      <Textfield label="Full name" v-model="post.name" />

      <Textfield label="Email address" type="email" v-model="post.email" />
      <Textfield label="Phone number" type="tel" v-model="post.phone" />
      <Select label="Location" :items="countries" v-model="post.location" />
      <Textfield label="Message" textarea v-model="post.message" />
      <Alert v-model="success" success />
      <Submit :loading="loading" title="Send message" />
    </form>

    <p
      class="text-[10px] leading-none font-semibold opacity-85 pt-4 text-center"
    >
      *We respect your privacy. All information will be kept confidential and
      will not be sold, rented, loaned or otherwise disclosed.
    </p>
  </section>
</template>

<script setup lang="ts">
import countries from "@/resources/countries.json";
const loading = ref(false);
const error = ref("");
const success = ref("");
const post = ref({
  to: $app.email,
  subject: "Contact us",
  name: "",
  email: "",
  phone: "",
  location: "",
  message: "",
});
async function submit() {
  loading.value = true;
  try {
    await $fetch($app.api, { method: "POST", body: post.value });
    post.value.name = "";
    post.value.email = "";
    post.value.phone = "";
    post.value.location = "";
    post.value.message = "";
    success.value = "Your message has been sent successfully!";
  } catch (err) {
    error.value = "An error occurred. Please try again later!";
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
