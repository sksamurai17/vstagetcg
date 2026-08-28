<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'
import { sets, vtubers } from '@/data'
import SocialsBar from '@/components/SocialsBar.vue'

useHead({
  title: 'Lineup — VStage',
  meta: [{ name: 'description', content: 'Browse through the creators included in VStage.' }],
})

const sortedVtubers = computed(() => {
  return Object.values(vtubers).sort((a, b) => {
    return a.name.localeCompare(b.name)
  })
})

const query = ref('')
const set = ref('VS00')

const visible = computed(() => {
  const q = query.value.trim().toLowerCase()
  return sortedVtubers.value.filter((vtuber) => {
    if (!vtuber.sets.includes(set.value)) return false
    if (!q) return true
    return vtuber.name.toLowerCase().includes(q)
  })
})
</script>

<template>
  <div class="container py-4">
    <h1 class="h2 mb-3">Creator Lineup</h1>

    <div class="row g-2 mb-4">
      <div class="col-12 col-sm-8">
        <input
          v-model="query"
          type="search"
          class="form-control"
          placeholder="Search by VTuber name."
          aria-label="Search cards"
        />
      </div>
      <div class="col-12 col-sm-4">
        <select v-model="set" class="form-select" aria-label="Filter by set">
          <option v-for="s in sets" :key="s.name" :value="s.id">{{s.name}}</option>
        </select>
      </div>
    </div>

    <div style="display: grid;grid-template-columns: repeat(6, 1fr);gap: 30px;padding: 5px;">
      <div v-for="v in sortedVtubers" :key="v.name" style="text-align:center;">
        <img :src="v.pfp" :alt="v.name" style="border-radius:50%; object-fit:cover; width:100px; height:100px;"/>
        <p class="mt-2">{{v.name}}</p>
        <div class="d-flex justify-content-center gap-1">
        <SocialsBar :socials="v.socials"/>
        </div>
      </div>
    </div>
  </div>

  <!-- Card detail renders here as an overlay while the gallery stays mounted. -->
  <RouterView />
</template>
