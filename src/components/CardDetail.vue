<script setup lang="ts">
import { computed, inject } from 'vue'
import { getSet, getTokensFor, vtubers } from '@/data'
import { collectorNumber, type ResolvedCard } from '@/types/card'
import CardArt from './CardArt.vue'
import RarityPill from './RarityPill.vue'
import SkillList from './SkillList.vue'
import SocialsBar from './SocialsBar.vue'
import TokenList from './TokenList.vue'

const props = defineProps<{ card: ResolvedCard }>()

const set = computed(() => getSet(props.card.setId))
const number = computed(() =>
  set.value ? collectorNumber(props.card.number, set.value.totalCards) : String(props.card.number),
)
const tokens = computed(() => getTokensFor(props.card))
</script>

<template>
  <div class="row g-4">
    <div class="col-12 col-sm-5">
      <div class="vs-detail-art" :data-rarity="card.rarity">
        <CardArt :card="card" />
      </div>
      <p class="text-body-secondary small mt-2 mb-2 text-center">Illustrator: {{ card.artist }}</p>
    </div>

    <div class="col-12 col-sm-7">
      <div class="d-flex text-center align-items-center gap-2 mb-1 flex-wrap">
        <h1 class="h3 mb-1">{{ card.name }}</h1>
        <RarityPill :rarity="card.rarity" />
      </div>

      <div class="d-flex align-items-center gap-2 mb-1 flex-wrap">
        <span class="text-body-secondary small font-monospace">{{ set?.name ?? card.setId }} ({{ card.setId }}) · {{ number }}</span>
      </div>

      <div v-if="card.isReprint" class="badge text-bg-primary mb-2">
        <RouterLink class="nav-link" :to="`/cards/${card.baseCardId}`">View Base Card</RouterLink>
      </div>

      <h5 class="text-body-secondary">
        <span class="text-success fw-semibold">{{ card.maxHp }} HP</span>
      </h5>
      <hr>

      <h2 class="h6 text-body-secondary">SKILLS</h2>
      <SkillList :skills="card.skills" class="mb-2" />
      <hr>

      <template v-if="tokens.length">
        <h2 class="h6 text-body-secondary">TOKENS PRODUCED</h2>
        <TokenList :tokens="tokens" class="mb-3"/>
      </template>

      <div v-if="card.handle && vtubers[card.handle] && vtubers[card.handle]?.socials">
        <h2 class="h6 text-body-secondary">SOCIALS</h2></br>
        <div class="d-flex align-items-center gap-2 mb-4">
          <SocialsBar :socials="vtubers[card.handle]?.socials ?? []"/>
        </div>
      </div>
    </div>
  </div>
</template>
