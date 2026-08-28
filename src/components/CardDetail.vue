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
      <p class="text-body-secondary small text-center mt-2 mb-0">illust. {{ card.artist }}</p>
    </div>

    <div class="col-12 col-sm-7">
      <div class="d-flex text-center align-items-center gap-2 mb-1 flex-wrap">
        <h1 class="h3 mb-1">{{ card.name }}</h1>
        <RarityPill :rarity="card.rarity" />
      </div>

      <div class="d-flex align-items-center gap-2 mb-1 flex-wrap">
        <span class="text-body-secondary small font-monospace">{{ card.setId }} {{ set?.name ?? card.setId }} · {{ number }}</span>
      </div>

      <p v-if="card.isReprint" class="alert alert-secondary py-2 small">
        An overnumbered print of
        <RouterLink :to="`/cards/${card.baseCardId}`">{{ card.baseCardId }}</RouterLink> with the same
        skills and HP as the base card, but with higher rarity and full artwork.
      </p>

      <h5 class="text-body-secondary">
        <span class="text-success fw-semibold">{{ card.maxHp }} HP</span>
      </h5>

      <h2 class="h5 text-body-secondary">Skills</h2>
      <SkillList :skills="card.skills" class="mb-4" />

      <template v-if="tokens.length">
        <h2 class="h5 text-body-secondary">Tokens Produced</h2>
        <TokenList :tokens="tokens" />
      </template>

      <div v-if="card.handle && vtubers[card.handle] && vtubers[card.handle]?.socials" class="d-flex align-items-center gap-2 mt-2" style="flex-direction: row;">
        <SocialsBar :socials="vtubers[card.handle]?.socials ?? []"/>
      </div>
    </div>
  </div>
</template>
