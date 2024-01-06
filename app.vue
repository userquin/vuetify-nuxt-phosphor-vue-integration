<script setup lang="ts">
import { PhHorse } from '@phosphor-icons/vue'
</script>

<template>
  <VContainer>
    <PhHorse />
    <VBtn color="success" :prepend-icon="PhHorse">
      Custom PhHorse Icon
    </VBtn>
    <VBtn color="success" prepend-icon="heart">
      PhHeart via Vuetify Alias
    </VBtn>

    <v-select
      label="Select"
      :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]"
    />

    <VCheckbox label="Checkbox" />

    <VRadioGroup>
      <VRadio label="Radio One" value="one" />
      <VRadio label="Radio Two" value="two" />
      <VRadio label="Radio Three" value="three" />
    </VRadioGroup>
  </VContainer>
</template>
