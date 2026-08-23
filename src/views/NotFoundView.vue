<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({ title: 'Not found — VStage' })
</script>

<template>
  <div class="container py-5 text-center">
    <h1 class="display-6">Page not found</h1>
    <p class="text-body-secondary">That page does not exist.</p>
    <RouterLink class="btn btn-primary" to="/">Back to home</RouterLink>
  </div>
</template>
