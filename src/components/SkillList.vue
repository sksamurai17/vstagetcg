<script setup lang="ts">
import type { Skill } from '@/types/card'

defineProps<{ skills: Skill[] }>()
</script>

<template>
  <ul class="list-unstyled d-grid gap-3 mb-0">
    <li v-for="skill in skills" :key="skill.name" class="vs-skill" :class="`vs-skill--${skill.type}`">
      <div class="d-flex align-items-center gap-2 flex-wrap">
        <span v-if="skill.type === 'reaction'" class="badge text-bg-success">REACTION</span>
        <span v-else-if="skill.type === 'passive'" class="badge text-bg-warning">PASSIVE</span>
        <!-- `cost` only exists on active skills, so this narrowing is exhaustive. -->
        <span v-else class="vs-cost" :title="`Costs ${skill.cost}`">
          {{ skill.cost }}
        </span>
        <strong>{{ skill.name }}</strong>
      </div>
      <p class="mb-0 mt-1 text-body-secondary small">{{ skill.description }}</p>
    </li>
  </ul>
</template>
