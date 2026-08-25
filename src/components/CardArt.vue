<script setup lang="ts">
import type { ResolvedCard } from '@/types/card'

defineProps<{ card: ResolvedCard }>()

function getCardImageURL(name) {
  return new URL(`../assets/cards/${name}.jpg`, import.meta.url).href;
}
</script>

<template>
  <img :src="getCardImageURL(card.image)" :alt="card.name" loading="lazy"/>
</template>
