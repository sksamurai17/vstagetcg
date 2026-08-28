<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'
import { allCards, sets } from '@/data'
import { RARITIES, RARITY_LABELS, type RarityType } from '@/types/card'
import CardTile from '@/components/CardTile.vue'

useHead({
  title: 'All cards — VStage',
  meta: [{ name: 'description', content: 'Browse every VStage card by name and rarity.' }],
})

const query = ref('')
const rarity = ref<RarityType | 'all'>('all')
const set = ref('VS00')

const visible = computed(() => {
  const q = query.value.trim().toLowerCase()
  return allCards.filter((card) => {
    if (rarity.value !== 'all' && card.rarity !== rarity.value) return false
    if (card.setId !== set.value) return false
    if (!q) return true
    return (
      card.name.toLowerCase().includes(q) ||
      card.id.toLowerCase().includes(q) ||
      card.artist.toLowerCase().includes(q) ||
      card.skills.some((s) => s.name.toLowerCase().includes(q))
    )
  })
})
</script>

<template>
  <div class="container py-4">
    <h1 class="h2 mb-3">Card Gallery</h1>

    <div class="row g-2 mb-4">
      <div class="col-12 col-sm-8">
        <input
          v-model="query"
          type="search"
          class="form-control"
          placeholder="Search by character name, card ID, skill name, or artist."
          aria-label="Search cards"
        />
      </div>
      <div class="col-12 col-sm-4">
        <select v-model="rarity" class="form-select" aria-label="Filter by rarity">
          <option value="all">All rarities</option>
          <option v-for="r in RARITIES" :key="r" :value="r">{{ RARITY_LABELS[r] }}</option>
        </select>
      </div>
      <div class="col-12 col-sm-4">
        <select v-model="set" class="form-select" aria-label="Filter by set">
          <option v-for="s in sets" :key="s.name" :value="s.id">{{s.name}}</option>
        </select>
      </div>
    </div>

    <p class="text-body-secondary small">{{ visible.length }} of {{ allCards.length }} cards</p>

    <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-5 g-3">
      <div v-for="card in visible" :key="card.id" class="col">
        <CardTile :card="card" />
      </div>
    </div>

    <p v-if="!visible.length" class="text-center text-body-secondary py-5">
      No cards match that search.
    </p>
  </div>

  <!-- Card detail renders here as an overlay while the gallery stays mounted. -->
  <RouterView />
</template>
