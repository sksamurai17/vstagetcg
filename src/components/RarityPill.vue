<script setup lang="ts">
import { RARITY_LABELS, type RarityType } from '@/types/card'

defineProps<{ rarity: RarityType }>()
</script>

<template>
  <span class="vs-rarity" :data-rarity="rarity">{{ RARITY_LABELS[rarity] }}</span>
</template>
