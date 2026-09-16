<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { allCards, sets, defaultSet } from '@/data'
import { RARITIES, RARITY_LABELS, type RarityType, PassiveType, passiveDisplayName } from '@/types/card'
import CardTile from '@/components/CardTile.vue'

useHead({
  title: 'All cards — VStage',
  meta: [{ name: 'description', content: 'Browse every VStage card by name and rarity.' }],
})

const route = useRoute()
const query = ref('')
const rarity = ref<RarityType | 'all'>('all')
const passive = ref<PassiveType | 'all' | 'none'>('all')
const resolvedSet = sets.some(s => s.id === route.query.set) ? (route.query.set || defaultSet) : defaultSet
const set = ref(resolvedSet)

const visible = computed(() => {
  const q = query.value.trim().toLowerCase()
  return allCards.filter((card) => {
    if (rarity.value !== 'all' && card.rarity !== rarity.value) return false
    if (passive.value === 'none' && card.skills[0] && card.skills[0].type === 'passive') return false
    if (passive.value !== 'all' && passive.value !== 'none' && card.skills[0] && card.skills[0].type !== 'passive') return false
    if (passive.value !== 'all' && passive.value !== 'none' && card.skills[0] && card.skills[0].type === 'passive' && card.skills[0].name !== passive.value) return false
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
      <div class="col-12 col-sm-4">
      <p>Query</p>
        <input
          v-model="query"
          type="search"
          class="form-control"
          placeholder="Search by character name, card ID, skill name, or artist."
          aria-label="Search cards"
        />
      </div>
      <div class="col-12 col-sm-2">
        <p>Rarity</p> 
        <select v-model="rarity" class="form-select" aria-label="Filter by rarity">
          <option value="all">All rarities</option>
          <option v-for="r in RARITIES" :key="r" :value="r">{{ RARITY_LABELS[r] }}</option>
        </select>
      </div>
      <div class="col-12 col-sm-3">
        <p>Passive Skill</p>
        <select v-model="passive" class="form-select" aria-label="Filter by passive skill">
          <option value="all">All passives (incl. no passives)</option>
          <option value="none">No passive</option>
          <option v-for="p in Object.values(PassiveType)" :key="passiveDisplayName(p)" :value="p">{{passiveDisplayName(p)}}</option>
        </select>
      </div>
      <div class="col-12 col-sm-3">
        <p>Set Name</p>
        <select v-model="set" class="form-select" aria-label="Filter by set">
          <option v-for="s in sets" :key="s.name" :value="s.id">{{s.name}}</option>
        </select>
      </div>
    </div>

    <p class="text-body-secondary small">Showing {{ visible.length }} of {{ allCards.length }} total cards</p>

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
