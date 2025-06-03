<template>
  <Breadcrums title="Nitrogenous Fertilizers" src="inorganic.jpg" />
  <v-content>
    <p>
      <strong>Nitrogenous fertilizers</strong> are synthetic or organic
      compounds containing nitrogen (N) in forms readily available to plants,
      primarily used to enhance soil fertility and promote vigorous vegetative
      growth in crops.
    </p>
    <p>
      These fertilizers provide the essential nutrient nitrogen - a fundamental
      component of <em>amino acids</em>, <em>proteins</em>,
      <em>chlorophyll</em>, and <em>nucleic acids</em> that plants need for
      photosynthesis and growth.
    </p>
    <h4 class="border-t pt-4">Types of Nitrogenous Fertilizer</h4>
    <div class="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
      <nuxt-link
        v-for="(n, i) in list"
        :to="n.path"
        class="block p-6 shadow-lg hover:shadow-2xl rounded-lg border"
      >
        <h4 class="text-primary hover:underline">
          {{ n.title }} - {{ n.formula }}
        </h4>
        <span class="px-3 rounded font-medium border bg-secondary">
          {{ n.nitrogen_content }} nitrogen
        </span>
        <p class="text-xs mb-0 pt-3">{{ n.excerpt }}</p>
      </nuxt-link>
    </div>
    <h4 class="border-t pt-4">Agricultural Importance</h4>
    <div class="pl-4">
      <p>
        Nitrogenous fertilizers play a critical role in modern agriculture by:
      </p>
      <ul>
        <li>
          Increasing crop yields by <span class="highlight">30-50%</span> in
          most agricultural systems
        </li>
        <li>Correcting nitrogen deficiencies in soils</li>
        <li>Promoting rapid vegetative growth and lush green foliage</li>
        <li>Enhancing protein content in food crops</li>
        <li>
          Supporting intensive farming practices to meet global food demands
        </li>
      </ul>
    </div>
    <h4 class="border-t pt-4">Application Considerations</h4>
    <div class="pl-4">
      <p>Effective use requires understanding of:</p>
      <ol>
        <li>
          <strong>Timing:</strong> Match application to crop growth stages
        </li>
        <li>
          <strong>Placement:</strong> Proper soil incorporation to prevent
          losses
        </li>
        <li>
          <strong>Dosage:</strong> Based on soil tests and crop requirements
        </li>
        <li>
          <strong>Environmental factors:</strong> Temperature, moisture, and
          soil type
        </li>
        <li>
          <strong>Safety measures:</strong> Especially for anhydrous ammonia
        </li>
      </ol>
    </div>
  </v-content>
</template>

<script setup lang="ts">
import list from "@/resources/nitrogen.json";
</script>

<style scoped></style>
