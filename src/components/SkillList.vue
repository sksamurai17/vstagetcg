<script setup lang="ts">
import type { Skill } from '@/types/card'

defineProps<{ skills: Skill[] }>()
</script>

<template>
  <ul class="list-unstyled d-grid gap-3 mb-0">
    <li v-for="skill in skills" :key="skill.name" class="vs-skill" :class="`vs-skill--${skill.type}`">
      <div class="d-flex align-items-center gap-2 flex-wrap">
        <strong>{{ skill.name }}</strong>
        <span class="badge text-bg-secondary text-uppercase">{{ skill.type }}</span>
        <!-- `cost` only exists on active skills, so this narrowing is exhaustive. -->
        <span v-if="skill.type === 'active'" class="vs-cost" :title="`Costs ${skill.cost}`">
          {{ skill.cost }}
        </span>
      </div>
      <p class="mb-0 mt-1 text-body-secondary small">{{ skill.description }}</p>
    </li>
  </ul>
</template>
