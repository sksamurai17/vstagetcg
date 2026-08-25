<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'
import { allCards, sets } from '@/data'
import CardTile from '@/components/CardTile.vue'

useHead({
  title: 'VStage — a VTuber card game',
  meta: [
    {
      name: 'description',
      content: 'Browse the cards, tokens and rules of VStage, a VTuber card game.',
    },
  ],
})

function getLogoImageURL() {
  return new URL(`../assets/VStageLogo.png`, import.meta.url).href;
}

const banner = allCards.slice(0, 5)
const set = sets[0]
</script>

<template>
  <section class="vs-hero py-5">
    <div class="container">
      <div class="row align-items-center g-4">
        <div class="col-12 col-lg-6">
          <h1 class="display-5 fw-bold">
            <img :src="getLogoImageURL()" alt="VStage Logo" style="maxWidth: 160px;" loading="lazy" />
          </h1>
          <p class="lead text-body-secondary">
            Welcome to VStage, a VTuber card game! Build your oshi lineup, spawn summons and interactive stage effects, and defeat your opponents!
          </p>
          <div class="d-flex gap-2 flex-wrap">
            <RouterLink class="btn btn-primary" to="/cards">Browse all cards →</RouterLink>
            <RouterLink class="btn btn-outline-secondary" to="/rules">How to play</RouterLink>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="row row-cols-3 g-2">
            <div v-for="card in banner.slice(0, 3)" :key="card.id" class="col">
              <CardTile :card="card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section v-if="set" class="container py-5">
    <div class="d-flex align-items-end justify-content-between flex-wrap gap-2 mb-3">
      <div>
        <p class="text-body-secondary text-uppercase small mb-1">The first set</p>
        <h2 class="h3 mb-0">{{ set.name }}</h2>
      </div>
      <RouterLink class="btn btn-sm btn-outline-secondary" to="/sets">Set details →</RouterLink>
    </div>

    <p class="text-body-secondary">{{ set.description }}</p>

    <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-5 g-3 mt-1">
      <div v-for="card in banner" :key="card.id" class="col">
        <CardTile :card="card" />
      </div>
    </div>
  </section>
</template>
