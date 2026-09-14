<script setup lang="ts">
import type { Token } from '@/types/card'

defineProps<{ tokens: Token[] }>()
</script>

<template>
  <ul class="list-unstyled d-grid gap-2 mb-0">
    <li v-for="token in tokens" :key="token.id" class="border rounded p-2">
      <div class="d-flex align-items-center gap-2 flex-wrap">
        <span class="badge text-bg-secondary text-uppercase">{{ token.kind }}</span>
        <strong>{{ token.name }}</strong>
        
      </div>
      <div v-if="token.kind === 'summon'" class="d-flex align-items-center gap-2 flex-wrap">
          <span class="text-danger fw-semibold">{{ token.dmgOutput }} ATK</span> / 
          <span class="text-success fw-semibold">{{ token.maxHp }} HP</span>
      </div>
      <span v-else class="text-info fw-semibold">{{ token.duration }}-turn Duration</span>
      <span v-if="token.kind === 'stage-effect'">
        <p class="mb-0 mt-1 small">
          <span class="text-body-secondary">{{ token.effectOutput }}</span>
        </p>
      </span>
    </li>
  </ul>
</template>
