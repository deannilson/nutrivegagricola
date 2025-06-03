<template>
  <Breadcrums
    title="Inorganic Fertilizers"
    src="inorganic.jpg"
    :desc="types[1].desc"
  />
  <v-content>
    <h3>What is Inorganic Fertilizer?</h3>
    <p>
      Inorganic fertilizers, also known as synthetic fertilizers, are chemically
      synthesized and contain specific amounts of necessary nutrients. They
      provide a quick nutrient boost to plants, making them ideal for short-term
      growth spurts. These fertilizers are usually water-soluble and can be
      applied directly to the plant’s roots for immediate absorption. However,
      using an inorganic fertilizer responsibly is essential to avoid nutrient
      runoff, which can harm the environment. <br /><br />
      Whether you choose to use organic or inorganic fertilizers, remember that
      the goal is to provide your plants with the necessary nutrients. It’s
      always a good idea to test your soil before applying fertilizer to
      understand its nutrient content and pH level. This way, you can choose a
      fertilizer that complements your soil’s natural nutrient profile.
    </p>
    <h3>Types of Inorganic Fertilizers</h3>
    <h4>1.⁠ ⁠Nitrogen Fertilizers:</h4>
    <div class="pl-4">
      <p>
        Nitrogen is one of the most common fertilizers used in wide farming.
        Nitrogen is one of the primary macronutrients for plant growth and is
        essential for forming proteins, chlorophyll, and other important plant
        compounds. It plays a crucial role in photosynthesis, enabling plants to
        convert sunlight into energy. Nitrogen fertilizers are widely used to
        promote the growth of leafy and green crops. These fertilizers come in
        various forms, including urea, ammonium nitrate, and ammonium sulfate,
        and are commonly applied to the soil or foliage of plants. When applied,
        nitrogen fertilizers dissolve in soil moisture and are absorbed by plant
        roots or leaves. Nitrogen fertilizers are popular because they can
        significantly increase crop yields and improve plant quality. However,
        excessive use of nitrogen fertilizers can lead to environmental problems
        such as water pollution and soil degradation.
      </p>
      <div class="mb-4">
        <nuxt-link
          v-for="(n, i) in list"
          :to="n.path"
          class="group flex items-center fontlato pl-3 text-primary font-lato"
        >
          <i class="fa-solid fa-circle-arrow-right text-lg mr-2" />
          <span class="group-hover:underline font-black text-sm">
            {{ n.title }} fertilizer - {{ n.nitrogen_content }} nitrogen
          </span>
        </nuxt-link>
      </div>
    </div>
    <h4>2. Phosphorus Fertilizers:</h4>
    <div class="pl-4">
      <p>
        The most common source of phosphorus for plants is through fertilizers,
        such as superphosphate and triple superphosphate, which contain soluble
        forms of phosphorus that plant roots can easily absorb. These
        fertilizers are particularly beneficial for crops that require strong
        root systems, such as fruits and vegetables, as phosphorus promotes
        vigorous root growth and enhances plant resistance to stress, diseases,
        and pests. However, excessive use of phosphorus fertilizers can lead to
        environmental problems, such as water pollution and eutrophication, and
        it is important to apply them judiciously based on soil test results and
        crop requirements.
      </p>
    </div>
    <h4>3. Potassium Fertilizers:</h4>
    <div class="pl-4">
      <p>
        Potassium is particularly important for developing fruits and seeds,
        increasing their size, quality, and flavor. Plants that receive adequate
        potassium fertilization also exhibit strong resistance to pests and
        diseases, as this nutrient helps to strengthen the cell walls and
        facilitate the transport of nutrients within the plant.<br /><br />
        Fertilizers that provide potassium, such as potassium chloride and
        potassium sulfate, are highly recommended for improving crop yields and
        quality. Potassium chloride is a common source of potassium, containing
        60-62% K2O, while potassium sulfate is a more expensive option that
        contains 50% K2O and 18% sulfur. Both fertilizers are typically applied
        to the soil, where they dissolve and release potassium ions that the
        plant roots can take up. You can help your crops thrive and produce
        healthy, flavorful, and nutritious fruits and vegetables by ensuring
        sufficient potassium levels in the soil.
      </p>
    </div>
    <h4>4. Compound (NPK) Fertilizer</h4>
    <div class="pl-4">
      <p>
        Fertilizers that contain varying levels of N, P, and K are known as
        compound ones. There are different types of NPK fertilizers used in
        agriculture, depending on nutrient formulations, and each is typically
        designed to fulfill the needs of a particular crop grown in a particular
        soil type. Most plants and soil types can benefit from a fertilizing
        product with an NPK ratio of 10-10-10. Soil types that don’t keep
        nutrients well, like sandy or clay, may call for fertilizing with a
        higher NPK level, like 15-15-15.
      </p>
    </div>
  </v-content>
</template>

<script setup lang="ts">
import list from "@/resources/nitrogenous.json";
</script>

<style scoped></style>
