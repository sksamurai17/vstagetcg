<script setup lang="ts">
import type { Token } from '@/types/card'

defineProps<{ tokens: Token[] }>()
</script>

<template>
  <ul class="list-unstyled d-grid gap-2 mb-0">
    <li v-for="token in tokens" :key="token.id" class="border rounded p-2">
      <div class="d-flex align-items-center gap-2 flex-wrap">
        <strong>{{ token.name }}</strong>
        <span class="badge text-bg-dark text-uppercase">{{ token.kind }}</span>
        <span v-if="token.kind === 'creature'" class="badge text-bg-danger">
          {{ token.maxHp }} HP
        </span>
        <span v-else class="badge text-bg-info">{{ token.duration }} turns</span>
      </div>
      <p class="mb-0 mt-1 small">
        <span class="fw-semibold">{{ token.effect.name }}</span>
        <span class="text-body-secondary"> — {{ token.effect.description }}</span>
      </p>
    </li>
  </ul>
</template>
