<script setup lang="ts">
import type { ResolvedCard } from '@/types/card'

defineProps<{ card: ResolvedCard }>()
</script>

<template>
  <img :src="card.image" :alt="card.name" loading="lazy" />
</template>
