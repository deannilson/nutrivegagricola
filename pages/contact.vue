<template>
  <Breadcrums
    title="Contact Us"
    desc="Do you have a question about who we are or our products?
          Our customer service is available by telephone or e-mail, or
          fill in the contact form and let us inquire about the possibilities."
    src="contact.jpg"
  />
  <section class="px-6">
    <div class="container md:flex md:flex-row-reverse gap-x-20">
      <div class="flex-1 pb-8 max-md:pt-4">
        <v-contact />
      </div>
      <div class="flex-1 py-8">
        <h2 class="text-3xl font-bold mb-4">Reach Out Anytime</h2>
        <hr />
        <ListItem title="Address" :desc="$app.address" />
        <ListItem title="Email address" :desc="$app.email" />
        <ListItem title="Phone number" :desc="$app.phone" />
        <ListItem title="Website" :desc="$app.domain" />
        <ListItem title="Business hours" :desc="$app.hours" />
        <ListItem title="VAT Number (CIF/NIF)" :desc="$app.vat" />
        <ListItem title="Legal Form" :desc="$app.legal" />
        <ListItem title="Contact Person" :desc="$app.contact" />
      </div>
    </div>
  </section>
</template>
