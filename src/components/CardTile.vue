<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { getSet } from '@/data'
import { collectorNumber, type ResolvedCard } from '@/types/card'
import CardArt from './CardArt.vue'
import RarityPill from './RarityPill.vue'

const props = defineProps<{ card: ResolvedCard }>()

const number = computed(() => {
  const set = getSet(props.card.setId)
  return set ? collectorNumber(props.card.number, set.totalCards) : String(props.card.number)
})
</script>

<template>
  <RouterLink class="vs-card" :data-rarity="card.rarity" :to="`/cards/${card.id}`">
    <div class="vs-card__art">
      <CardArt :card="card" />
    </div>
    <div class="vs-card__body">
      <p class="vs-card__name">{{ card.name }}</p>
      <div class="d-flex align-items-center justify-content-between mt-1">
        <span class="vs-card__meta">{{ card.setId }} · {{ number }}</span>
        <RarityPill :rarity="card.rarity" />
      </div>
    </div>
  </RouterLink>
</template>
