<script setup lang="ts">
import { PhHorse } from '@phosphor-icons/vue'
</script>

<template>
  <div>
    <PhHorse />
    <VBtn color="success" :prepend-icon="PhHorse">
      Custom PhHorse Icon
    </VBtn>
    <VBtn color="success" prepend-icon="heart">
      PhHeart via Vuetify Alias
    </VBtn>
  </div>
</template>
