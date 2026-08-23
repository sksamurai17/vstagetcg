<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'
import { cardsInSet, sets } from '@/data'
import { RARITIES } from '@/types/card'
import CardTile from '@/components/CardTile.vue'

useHead({ title: 'Sets — VStage' })

/** A few signature cards per set, rather than the full list. */
function signature(setId: string) {
  return [...cardsInSet(setId)]
    .sort((a, b) => RARITIES.indexOf(b.rarity) - RARITIES.indexOf(a.rarity))
    .slice(0, 5)
}
</script>

<template>
  <div class="container py-4">
    <h1 class="h2 mb-4">Sets</h1>

    <section v-for="set in sets" :key="set.id" class="mb-5">
      <div class="d-flex align-items-baseline gap-2 flex-wrap">
        <h2 class="h4 mb-0">{{ set.name }}</h2>
        <span class="badge text-bg-secondary text-uppercase">{{ set.id }}</span>
      </div>

      <p class="text-body-secondary mt-2">{{ set.description }}</p>

      <ul class="list-inline text-body-secondary small">
        <li class="list-inline-item">{{ set.totalCards }} cards in the set</li>
        <li class="list-inline-item">·</li>
        <li class="list-inline-item">{{ cardsInSet(set.id).length }} catalogued here</li>
      </ul>

      <h3 class="h6 text-uppercase text-body-secondary mt-4">Signature cards</h3>
      <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-5 g-3">
        <div v-for="card in signature(set.id)" :key="card.id" class="col">
          <CardTile :card="card" />
        </div>
      </div>

      <RouterLink class="btn btn-sm btn-outline-secondary mt-3" to="/cards">
        See all cards →
      </RouterLink>
    </section>
  </div>
</template>
