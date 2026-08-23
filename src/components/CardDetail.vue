<script setup lang="ts">
import { computed } from 'vue'
import { getSet, getTokensFor } from '@/data'
import { collectorNumber, type ResolvedCard } from '@/types/card'
import CardArt from './CardArt.vue'
import RarityPill from './RarityPill.vue'
import SkillList from './SkillList.vue'
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
      <div class="d-flex align-items-center gap-2 mb-1 flex-wrap">
        <RarityPill :rarity="card.rarity" />
        <span class="text-body-secondary small font-monospace">{{ card.setId }} · {{ number }}</span>
        <span v-if="card.isReprint" class="badge text-bg-warning">Secret print</span>
      </div>

      <h1 class="h3 mb-1">{{ card.name }}</h1>
      <p class="text-body-secondary small mb-3">
        {{ set?.name ?? card.setId }} · <span class="text-danger fw-semibold">{{ card.maxHp }} HP</span>
      </p>

      <p v-if="card.isReprint" class="alert alert-secondary py-2 small">
        An overnumbered print of
        <RouterLink :to="`/cards/${card.baseCardId}`">{{ card.baseCardId }}</RouterLink>. Same
        skills and HP as the base card — only the rarity and art differ.
      </p>

      <h2 class="h6 text-uppercase text-body-secondary">Skills</h2>
      <SkillList :skills="card.skills" class="mb-4" />

      <template v-if="tokens.length">
        <h2 class="h6 text-uppercase text-body-secondary">Tokens produced</h2>
        <TokenList :tokens="tokens" />
      </template>
    </div>
  </div>
</template>
